'use client'

import { useEffect, useRef } from 'react'

// --- SHADERS ---
// The Vertex shader simply stretches a quad over the entire canvas.
const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

// The Fragment shader handles all the water simulation math on the GPU.
const fragmentShaderSource = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;

  // A simple 2D hash function for pseudo-random numbers
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  // Creates vertical, wave-like shifting curtains of light
  float sunbeams(vec2 uv, float time) {
    // Perspective shift: rays converge towards the top (y=1.0)
    float perspective = (uv.x - 0.5) * (1.0 - uv.y * 0.4) + 0.5;

    // Wavy distortion driven by sine waves and time
    float distortion = sin(perspective * 10.0 + time * 0.5) * 0.05
                     + sin(perspective * 20.0 - time * 0.8) * 0.02;

    float x = perspective + distortion * uv.y;

    // Combine multiple frequencies to create soft and sharp light shafts
    float rays = sin(x * 15.0) + sin(x * 35.0 + time) + sin(x * 5.0 - time * 0.4);
    rays = rays * 0.33 * 0.5 + 0.5; // Map roughly to 0.0 - 1.0

    // Sharpen the peaks to make them look like distinct beams
    return pow(rays, 3.0);
  }

  // Creates sparse drifting particles in 3 overlapping layers
  float particles(vec2 uv, float time) {
    float p = 0.0;
    for(float i = 1.0; i <= 3.0; i++) {
      // Scale UV for grid, and apply an upward drift that is faster for closer (larger) grids
      vec2 gridUv = uv * (10.0 * i);
      gridUv.y -= time * (0.06 * i); // Slightly faster upward drift
      gridUv.x += sin(time * 0.4 * i + uv.y * 3.0) * 0.25; // Wider, more obvious horizontal sway

      vec2 id = floor(gridUv);
      vec2 f = fract(gridUv) - 0.5;

      vec2 r = hash(id);

      // Sparsity: reduced number of particles significantly (from 0.4 to 0.85)
      if(r.x > 0.85) {
        float dist = length(f - r * 0.3); // Randomly position within the cell
        // Soft circle with a bit of a pulse (twinkle) effect
        float radius = 0.04 * (r.y * 0.5 + 0.5);
        // Restored original brightness so they look like twinkling stars/motes
        float brightness = 0.5 + 0.5 * sin(time * 2.0 + r.x * 10.0);
        p += smoothstep(radius, 0.0, dist) * brightness;
      }
    }
    return p;
  }

  void main() {
    // Normalize coordinates
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    // Depth gradient: 1.0 at top of screen, 0.0 at bottom
    float depth = uv.y;

    float time = u_time * 0.5;

    // 1. Calculate Sunbeams
    float beams = sunbeams(uv, time);
    // Fade sunbeams out entirely by the time they hit the bottom depths
    beams *= smoothstep(-0.2, 1.0, depth);

    // 2. Calculate Drifting Particles
    // Correct aspect ratio for particles so they stay circular
    vec2 particleUv = uv;
    particleUv.x *= u_resolution.x / u_resolution.y;
    float parts = particles(particleUv, time);

    // Smooth, slow fade: don't fully disappear at bottom (min 0.1), max out at half opacity (0.5)
    float particleOpacity = mix(0.1, 0.5, smoothstep(-0.2, 0.9, depth));
    parts *= particleOpacity;

    // --- CERBERUS OCEANUS THEME COLORS ---
    vec3 colorBrand100 = vec3(0.0, 0.094, 0.161); // Deepest Water
    vec3 colorBrand90  = vec3(0.0, 0.184, 0.318); // Mid Water
    vec3 colorBrand60  = vec3(0.0, 0.463, 0.796); // Caustic Highlights

    vec3 particleColor = vec3(0.6, 0.8, 1.0); // Restored original brighter cyan/white
    vec3 surfaceGlow   = vec3(0.4, 0.7, 0.9); // Brightness at the very top

    // Create the background vertical gradient - darkened to simulate deeper ocean
    vec3 deepColor = colorBrand100 * 0.4; // Push the bottom to near-black
    vec3 midColor = mix(colorBrand100, colorBrand90, 0.5); // Top of screen is darker now
    vec3 finalColor = mix(deepColor, midColor, depth);

    // Add a slight ambient glow at the very top surface edge, much weaker
    finalColor += surfaceGlow * pow(depth, 5.0) * 0.05;

    // Add the sunbeams on top with much less intensity
    finalColor += colorBrand60 * beams * 0.15;

    // Add the particles
    finalColor += particleColor * parts;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

// --- UTILS ---
// Boilerplate to compile a WebGL shader
const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

// Boilerplate to link shaders into a WebGL program
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
    console.error('Program linking error:', gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    return null
  }
  return program
}

export default function OceanusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Initialize WebGL
    const gl = canvas.getContext('webgl', {
      alpha: false, // Opaque background is slightly faster
      antialias: false, // Not needed for a fluid noise background
    })

    if (!gl) {
      console.warn('WebGL not supported')
      return
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
    if (!vertexShader || !fragmentShader) return

    const program = createProgram(gl, vertexShader, fragmentShader)
    if (!program) return

    // Look up uniforms
    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution')
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time')

    // Create a buffer for a full-screen quad (2 triangles)
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    const positions = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

    // Resize handler
    const resizeCanvas = () => {
      // Use devicePixelRatio for crisp rendering on retina displays,
      // but cap it to 2 for performance on ultra-high-res screens
      const pixelRatio = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * pixelRatio
      canvas.height = window.innerHeight * pixelRatio
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas() // Initial sizing

    let animationFrameId: number
    let startTime = performance.now()
    let isVisible = true

    // Render Loop
    const render = (now: number) => {
      // Stop rendering if tab is hidden (saves immense battery)
      if (!isVisible) return

      const elapsed = (now - startTime) * 0.001 // Convert to seconds

      gl.useProgram(program)

      // Bind attributes/uniforms
      gl.enableVertexAttribArray(positionAttributeLocation)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height)
      gl.uniform1f(timeUniformLocation, elapsed)

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6)

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    // Handle Page Visibility API
    const handleVisibilityChange = () => {
      isVisible = !document.hidden
      if (isVisible) {
        // Reset start time so animation doesn't "jump" after waking up
        startTime = performance.now() - (performance.now() - startTime)
        animationFrameId = requestAnimationFrame(render)
      } else {
        cancelAnimationFrame(animationFrameId)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animationFrameId)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      gl.deleteBuffer(positionBuffer)
    }
  }, [])

  return <canvas aria-hidden="true" className="living-canvas" ref={canvasRef} />
}
