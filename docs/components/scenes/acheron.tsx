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

  void main() {
    // Normalize and aspect-correct coordinates
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 aspectUv = uv;
    aspectUv.x *= u_resolution.x / u_resolution.y;

    // Ambient, slow base time
    float time = u_time * 0.12;

    // --- 1. BASE VISCOUS LIQUID (Deep Dark Blue) ---
    // Iterative phase shifting to create soft, macro-level fluid movement
    vec2 p1 = aspectUv * 2.5;

    for(float i = 1.0; i < 5.0; i++) {
        p1.x += 0.6 / i * cos(i * 1.5 * p1.y + time);
        p1.y += 0.6 / i * cos(i * 2.0 * p1.x + time);
    }
    // Map the distorted coordinates back to a 0.0 - 1.0 fluid volume value
    float baseFluid = cos(p1.x + p1.y + 1.0) * 0.5 + 0.5;

    // --- 2. SECONDARY BLUE 3D RIPPLES ---
    vec2 p2 = aspectUv * 6.0;
    float slowTime = time * 0.6;

    float wBlue = 0.0;
    float ampBlue = 0.5;
    for(float i = 1.0; i < 4.0; i++) {
        p2.x += 0.5 / i * cos(i * 2.0 * p2.y + slowTime);
        p2.y += 0.5 / i * sin(i * 1.5 * p2.x + slowTime);
        wBlue += abs(sin(p2.x + p2.y)) * ampBlue;
        p2 *= 1.4;
        ampBlue *= 0.6;
    }
    float blueRipples = pow(1.0 - wBlue * 0.6, 6.0);
    // Anchor the blue ripples to the "peaks" of the macro fluid
    blueRipples *= smoothstep(0.3, 0.8, baseFluid);

    // --- 3. PRIMARY ACTION COLOR RIPPLES (#eca64b) ---
    // A completely independent, distinct set of waves weaving through the fluid
    vec2 p3 = aspectUv * 4.0;
    float orangeTime = time * 0.7; // Moves at a slightly different pace

    float wOrange = 0.0;
    float ampOrange = 0.55;
    // Fewer iterations create longer, more elegant continuous glowing lines
    for(float i = 1.0; i < 3.0; i++) {
        p3.x += 0.5 / i * sin(i * 1.8 * p3.y - orangeTime);
        p3.y += 0.5 / i * cos(i * 1.2 * p3.x + orangeTime);
        wOrange += abs(cos(p3.x + p3.y)) * ampOrange;
        p3 *= 1.5;
        ampOrange *= 0.5;
    }
    // Sharpen into distinct, glowing threads (increased power makes them much thinner)
    float orangeLines = pow(1.0 - wOrange * 0.45, 15.0);
    // INVERT THE MASK: Restrict orange to only the deepest valleys (drastically reduces quantity)
    orangeLines *= smoothstep(0.5, 0.95, 1.0 - baseFluid);

    // --- 4. ACHERON COLORS ---
    vec3 deepWater = vec3(0.015, 0.03, 0.04); // Kept near black for contrast
    vec3 midWater  = vec3(0.059, 0.129, 0.184); // acheron.brand.100

    // The muted ambient blue reflection
    vec3 ambientBlue = vec3(0.294, 0.651, 0.925) * 0.4;

    // The dominant action color (#eca64b)
    vec3 actionOrange = vec3(0.925, 0.651, 0.294);

    // Build the final color
    vec3 finalColor = mix(deepWater, midWater, baseFluid);

    // Add the subtle blue texture
    finalColor += ambientBlue * blueRipples;

    // Paint the bright action lines on top (reduced multiplier from 1.5 to 0.6 so they aren't overpowering)
    finalColor += actionOrange * orangeLines * 0.6;

    // Slight depth vignette (darker at bottom)
    finalColor *= mix(0.5, 1.0, uv.y + 0.2);

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

export default function AcheronBackground() {
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
