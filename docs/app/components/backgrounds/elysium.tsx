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

  // --- MATH & NOISE UTILS ---
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return fract(sin(p) * 43758.5453);
  }

  float valueNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(fract(sin(dot(i + vec2(0.0, 0.0), vec2(12.9898, 78.233))) * 43758.5453),
                   fract(sin(dot(i + vec2(1.0, 0.0), vec2(12.9898, 78.233))) * 43758.5453), f.x),
               mix(fract(sin(dot(i + vec2(0.0, 1.0), vec2(12.9898, 78.233))) * 43758.5453),
                   fract(sin(dot(i + vec2(1.0, 1.0), vec2(12.9898, 78.233))) * 43758.5453), f.x), f.y);
  }

  // FBM for soft clouds
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < 4; ++i) {
      v += a * valueNoise(p);
      p = rot * p * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  // 1. Magical Rising Motes (Fireflies)
  float magicalMotes(vec2 uv, float time) {
    float p = 0.0;
    // Layered grids for particles
    for(float i = 1.0; i <= 2.0; i++) {
      vec2 gridUv = uv * (12.0 * i);

      // Apply infinite, slow upward drift to the grid itself so they never stop
      gridUv.y -= time * (0.015 * i);

      vec2 id = floor(gridUv);
      vec2 f = fract(gridUv) - 0.5;
      vec2 r = hash(id);

      // Sparsity: dramatically reduce quantity (was 0.8, now 0.95)
      if(r.x > 0.95) {
        // --- Firefly Movement Math ---
        // Slower, complex, erratic jitter using multiple sine waves
        float jitterX = sin(time * (0.8 + r.y * 1.0) + r.x * 10.0) * 0.25;
        float jitterY = cos(time * (0.6 + r.x * 0.8) + r.y * 8.0) * 0.2;

        // Anchor randomly around the cell center, apply bounded jitter
        vec2 center = (r - 0.5) * 0.3 + vec2(jitterX, jitterY);

        // Calculate distance from current pixel 'f' to the moving 'center'
        float dist = length(f - center);

        float radius = 0.04 * (r.y * 0.5 + 0.5);
        // Slower pulse brightness
        float brightness = 0.2 + 0.8 * sin(time * (1.0 + r.x * 1.5) + r.x * 10.0);

        // Smoothstep prevents negative brightness
        brightness = max(0.0, brightness);

        // Motes fade out slowly by the upper middle of the screen
        // Use global global uv for the fade so they reliably vanish high up
        float heightFade = smoothstep(0.8, 0.2, uv.y);

        p += smoothstep(radius, 0.0, dist) * brightness * heightFade;
      }
    }
    return p;
  }

  // 2. Varied Twinkling Starfield
  float stars(vec2 uv, float time) {
    float s = 0.0;

    // Layer 1: Dense, tiny, faint background stars
    vec2 grid1 = uv * 60.0;
    vec2 id1 = floor(grid1);
    vec2 f1 = fract(grid1) - 0.5;
    vec2 r1 = hash(id1);
    if(r1.x > 0.85) {
      float d1 = length(f1 - r1 * 0.2);
      float rad1 = 0.015;
      float b1 = 0.3 + 0.2 * sin(time * 0.5 + r1.x * 10.0);
      s += smoothstep(rad1, 0.0, d1) * b1;
    }

    // Layer 2: Sparse, larger, brighter foreground stars
    vec2 grid2 = uv * 25.0;
    vec2 id2 = floor(grid2);
    vec2 f2 = fract(grid2) - 0.5;
    vec2 r2 = hash(id2);
    if(r2.x > 0.92) {
      float d2 = length(f2 - r2 * 0.2);
      float rad2 = 0.04 * (r2.y * 0.5 + 0.5);
      float b2 = 0.6 + 0.4 * sin(time * 1.2 + r2.x * 20.0);
      s += smoothstep(rad2, 0.0, d2) * b2;
    }

    return s;
  }

  // 3. The Moon & Glow
  // Replaces the generic "beams" with a distinct celestial body
  float moon(vec2 uv) {
    // Calculate aspect ratio dynamically to anchor the moon relative to the screen width
    float aspect = u_resolution.x / u_resolution.y;

    // Position moon slightly outside the top right view (5% out of bounds)
    vec2 moonPos = vec2(aspect * 1.05, 1.05);
    float dist = distance(uv, moonPos);

    // Hard core of the moon (mostly off-screen now, but here for edge cases)
    float core = smoothstep(0.06, 0.05, dist);

    // Soft outer glow (attenuation) - decreased divisor from 30.0 to 15.0 to spread the glow further into the screen
    float glow = 1.0 / (1.0 + dist * dist * 15.0);

    return core + glow * 0.6; // Slightly boosted the glow intensity to compensate for the distance
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 aspectUv = uv;
    aspectUv.x *= u_resolution.x / u_resolution.y;

    float time = u_time;

    // --- COLORS (Elysium Tokens) ---
    // Deep night sky background (page.surface.initial / elysium.neutral.100)
    // Darkened drastically to match the actual base surface token
    vec3 skyDark = vec3(0.047, 0.043, 0.047);

    // Very subtle gradient towards top (page.bg.100 / elysium.neutral.90)
    vec3 skyTop = vec3(0.090, 0.086, 0.098);

    // Mote magic color (elysium.accent.60)
    vec3 magicColor = vec3(0.858, 0.470, 0.192);

    // Moon color (action.bg.initial / elysium.brand.60)
    vec3 moonColor = vec3(0.384, 0.643, 0.549);

    // Cloud color (ghostly pale blue to contrast with the warm moon/motes)
    vec3 cloudColor = vec3(0.4, 0.45, 0.5);

    // 1. Deep Night Sky Gradient
    vec3 finalColor = mix(skyDark, skyTop, uv.y);

    // 2. Varied Stars (fade out near the horizon/ground)
    float starField = stars(aspectUv, time);
    finalColor += vec3(0.9, 0.9, 1.0) * starField * smoothstep(0.2, 0.5, uv.y);

    // 3. Explicit Clouds (FBM)
    // Drift clouds right slowly
    vec2 cloudUv = aspectUv * 3.0 - vec2(time * 0.03, 0.0);
    float cloudNoise = fbm(cloudUv);
    // Instead of darkening the sky, we specifically paint the clouds on top
    // smoothstep creates defined cloud edges out of the noise
    float cloudMask = smoothstep(0.4, 0.8, cloudNoise);
    // Clouds are slightly illuminated by the moon color
    finalColor = mix(finalColor, cloudColor * moonColor, cloudMask * 0.6);

    // 4. The Moon
    // Draw the moon *behind* the foreground clouds but *in front* of background sky
    float moonGlow = moon(aspectUv);
    finalColor += moonColor * moonGlow * (1.0 - cloudMask * 0.3); // Clouds slightly obscure the moon

    // 5. Magical Rising Motes
    float motes = magicalMotes(aspectUv, time);
    // Add motes using additive blending (they glow, not just paint over)
    finalColor += magicColor * motes;

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

export default function ElysiumBackground() {
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

    const render = (now: number) => {
      if (!isVisible) return

      const time = (now - startTime) * 0.001

      gl.useProgram(program)
      gl.enableVertexAttribArray(positionLocation)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, time)

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

  return <canvas aria-hidden="true" className="living-canvas" ref={canvasRef} />
}
