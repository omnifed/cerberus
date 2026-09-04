'use client'

import { useEffect, useRef } from 'react'

// --- SHADERS ---
const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const fragmentShaderSource = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform float u_lightMode;

  // --- MATH & NOISE UTILS ---
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return fract(sin(p) * 43758.5453);
  }

  // Creates volumetric sunbeams piercing the water
  float sunbeams(vec2 uv, float time) {
    vec2 pos = uv;
    // Slant the beams diagonally
    pos.x += pos.y * 0.4;

    float f = 0.0;
    // Layer sine waves to create organic, shifting light rays
    f += sin(pos.x * 12.0 + time * 0.8) * 0.5;
    f += sin(pos.x * 22.0 - time * 0.5) * 0.25;
    f += sin(pos.x * 8.0 + time * 1.3) * 0.15;

    // Soften into beams
    float beams = smoothstep(0.2, 0.8, f * 0.5 + 0.5);

    // Add high-frequency caustic shimmer to the edges of the rays
    float shimmer = sin(pos.x * 60.0 + time * 2.0) * 0.5 + 0.5;
    beams *= mix(0.8, 1.2, shimmer * beams);

    return beams;
  }

  // Creates sparse drifting particles (bubbles / bioluminescence)
  float particles(vec2 uv, float time) {
    float p = 0.0;
    for(float i = 1.0; i <= 3.0; i++) {
      // Scale UV for grid, apply upward drift
      vec2 gridUv = uv * (10.0 * i);
      gridUv.y -= time * (0.06 * i);
      // Horizontal sway simulating water currents
      gridUv.x += sin(time * 0.4 * i + uv.y * 3.0) * 0.25;

      vec2 id = floor(gridUv);
      vec2 f = fract(gridUv) - 0.5;
      vec2 r = hash(id);

      // Sparsity threshold
      if(r.x > 0.85) {
        float dist = length(f - r * 0.3);
        float radius = 0.04 * (r.y * 0.5 + 0.5);
        // Soft pulse (twinkle) effect
        float brightness = 0.5 + 0.5 * sin(time * 2.0 + r.x * 10.0);
        p += smoothstep(radius, 0.0, dist) * brightness;
      }
    }
    return p;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 aspectUv = uv;
    aspectUv.x *= u_resolution.x / u_resolution.y;

    // Depth gradient: 1.0 at top of screen, 0.0 at bottom
    float depth = uv.y;
    float time = u_time * 0.5;

    // --- COLORS (Oceanus Tokens) ---
    // Dark Mode (Deep Ocean Trench)
    vec3 darkBottom = vec3(0.055, 0.055, 0.067); // oceanus.neutral.100 (near black)
    vec3 darkMid    = vec3(0.0, 0.184, 0.318);   // oceanus.brand.90 (deep sea blue)
    vec3 darkTop    = vec3(0.0, 0.369, 0.635);   // oceanus.brand.70 (teal blue)
    vec3 darkParts  = vec3(0.612, 0.420, 0.780); // oceanus.accent.60 (purple bioluminescence)

    // Light Mode (Shallow Tropical Reef)
    vec3 lightBottom = vec3(0.0, 0.463, 0.796);  // oceanus.brand.60 (rich bright blue)
    vec3 lightMid    = vec3(0.600, 0.784, 0.918); // oceanus.brand.30 (soft shallow cyan)
    vec3 lightTop    = vec3(0.898, 0.945, 0.980); // oceanus.brand.10 (surface water/sun)
    vec3 lightParts  = vec3(1.0, 1.0, 1.0);       // Pure white air bubbles

    // Crossfade Interpolation
    vec3 colorBottom   = mix(darkBottom, lightBottom, u_lightMode);
    vec3 colorMid      = mix(darkMid, lightMid, u_lightMode);
    vec3 colorTop      = mix(darkTop, lightTop, u_lightMode);
    vec3 particleColor = mix(darkParts, lightParts, u_lightMode);

    // 1. Calculate Water Depth Gradient
    // Use smoothstep to create a lush, non-linear gradient from the surface to the floor
    vec3 finalColor = mix(colorBottom, colorMid, smoothstep(0.0, 0.5, depth));
    finalColor = mix(finalColor, colorTop, smoothstep(0.5, 1.0, depth));

    // 2. Calculate Sunbeams
    float beams = sunbeams(aspectUv, time);
    // Beams naturally fade out into the darkness at the bottom of the screen
    float beamFade = smoothstep(-0.2, 1.0, depth);
    beams *= beamFade;

    // Dark mode beams are faint and moody. Light mode beams are intensely bright and caustic.
    float beamIntensity = mix(0.15, 0.6, u_lightMode);
    vec3 beamColor = mix(colorTop * 1.5, vec3(1.0), u_lightMode); // Beams turn pure white during the day
    finalColor += beamColor * beams * beamIntensity;

    // 3. Calculate Drifting Particles
    float parts = particles(aspectUv, time);
    // Particles fade as they drop lower into the dark
    float particleOpacity = mix(0.1, 0.5, smoothstep(-0.2, 0.9, depth));

    // Light mode: Alpha blending (painting white bubbles).
    // Dark mode: Additive blending (glowing bioluminescence).
    vec3 darkPartsBlend = finalColor + particleColor * parts * particleOpacity * 2.0;
    vec3 lightPartsBlend = mix(finalColor, particleColor, parts * particleOpacity);
    finalColor = mix(darkPartsBlend, lightPartsBlend, u_lightMode);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

// --- UTILS ---
const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

const createProgram = (
  gl: WebGLRenderingContext,
  vShader: WebGLShader,
  fShader: WebGLShader,
) => {
  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vShader)
  gl.attachShader(program, fShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    return null
  }
  return program
}

export default function OceanusDayBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { alpha: false, antialias: false })
    if (!gl) return

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
    if (!vertexShader || !fragmentShader) return

    const program = createProgram(gl, vertexShader, fragmentShader)
    if (!program) return

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const lightModeLocation = gl.getUniformLocation(program, 'u_lightMode')

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
      ]),
      gl.STATIC_DRAW,
    )

    const resize = () => {
      const pr = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * pr
      canvas.height = window.innerHeight * pr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    window.addEventListener('resize', resize)
    resize()

    let frameId: number
    let startTime = performance.now()
    let isVisible = true
    let currentLightMode = 0.0

    const render = (now: number) => {
      if (!isVisible) return

      const time = (now - startTime) * 0.001

      // Theme Detection (Checks for Next.js or Tailwind 'dark' class defaults)
      const isDark =
        document.documentElement.classList.contains('dark') ||
        document.documentElement.getAttribute('data-theme') === 'dark'

      // Smoothly interpolate the lightMode uniform for elegant day/night transitions
      const targetLightMode = isDark ? 0.0 : 1.0
      currentLightMode += (targetLightMode - currentLightMode) * 0.05

      gl.useProgram(program)
      gl.enableVertexAttribArray(positionLocation)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, time)
      gl.uniform1f(lightModeLocation, currentLightMode)

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      frameId = requestAnimationFrame(render)
    }
    frameId = requestAnimationFrame(render)

    const onVisibilityChange = () => {
      isVisible = !document.hidden
      if (isVisible) {
        startTime = performance.now() - (performance.now() - startTime)
        frameId = requestAnimationFrame(render)
      } else {
        cancelAnimationFrame(frameId)
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      cancelAnimationFrame(frameId)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      gl.deleteBuffer(positionBuffer)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="living-canvas" />
}
