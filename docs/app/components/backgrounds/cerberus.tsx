'use client'

import React, { useEffect, useRef } from 'react'

// --- SHADERS ---
// Stretch the quad over the entire screen
const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

// Fragment shader computes the 3D rocky surface and fire lighting
const fragmentShaderSource = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;

  // Pseudo-random hash
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // 2D hash for placing stars
  vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return fract(sin(p) * 43758.5453);
  }

  // Generates a subtle, minimal starfield
  float createStars(vec2 uv, float time) {
    float s = 0.0;
    // Two layers of stars for subtle depth
    for(float i = 1.0; i <= 2.0; i++) {
      vec2 gridUv = uv * (15.0 * i);
      // Very slow horizontal drift for the stars
      gridUv.x -= time * 0.01 * i;

      vec2 id = floor(gridUv);
      vec2 f = fract(gridUv) - 0.5;
      vec2 r = hash2(id);

      // Sparsity: keep it very minimal (only ~8% of cells have a star)
      if(r.x > 0.92) {
        float dist = length(f - r * 0.3);
        float radius = 0.03 * (r.y * 0.5 + 0.5);
        // Soft twinkle effect, slower and with a higher minimum brightness so they don't vanish
        float brightness = 0.7 + 0.3 * sin(time * 0.8 + r.x * 20.0);
        s += smoothstep(radius, 0.0, dist) * brightness;
      }
    }
    return s;
  }

  // Value noise for smooth, organic bumps
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    // Cubic Hermine Curve for smooth interpolation
    f = f * f * (3.0 - 2.0 * f);

    return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }

  // Fractional Brownian Motion (FBM) constructs the rocky wall texture
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce grid-like artifacts in the rock
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));

    // 3 Octaves gives less detail, making it feel further away and smoother
    for (int i = 0; i < 3; ++i) {
      v += a * noise(p);
      p = rot * p * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    // Normalize coordinates
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    // Correct aspect ratio so rocks don't stretch on wide screens
    vec2 aspectUv = uv;
    aspectUv.x *= u_resolution.x / u_resolution.y;

    // --- 1. GENERATE CAVE WALL ---
    // Decreased scale to 1.5 makes features larger and smoother, simulating distance
    float scale = 1.5;
    float rockHeight = fbm(aspectUv * scale);

    // --- 2. CALCULATE NORMALS (3D Slopes) ---
    // By comparing the height of neighboring pixels, we can figure out
    // which direction the rock surface is facing to catch light.
    float eps = 0.01;
    float hX = fbm(aspectUv * scale + vec2(eps, 0.0));
    float hY = fbm(aspectUv * scale + vec2(0.0, eps));

    // Decreased bumpiness to soften the lighting transitions (less harsh/noisy)
    float bumpiness = 1.5;
    vec3 normal = normalize(vec3(-(hX - rockHeight) * bumpiness, -(hY - rockHeight) * bumpiness, eps * 2.0));

    // --- 3. FIRE LIGHT SOURCE ---
    // Slower time multiplier for a dying, ambient ember feel
    float slowTime = u_time * 1.5;

    // Jitter the light position slightly to simulate dancing flames
    float jitterX = noise(vec2(slowTime, 0.0)) * 0.03;
    float jitterY = noise(vec2(0.0, slowTime * 0.8)) * 0.03;

    // Light positioned in the bottom left (-0.1 is slightly off screen)
    vec3 lightPos = vec3(-0.1 + jitterX, -0.1 + jitterY, 0.35);
    vec3 surfacePos = vec3(aspectUv, 0.0);

    // --- 4. LIGHTING MATH ---
    // Direction from the rock surface to the fire
    vec3 lightDir = normalize(lightPos - surfacePos);

    // Calculate how directly the light hits the slope (Diffuse lighting)
    float diffuse = max(dot(normal, lightDir), 0.0);

    // Calculate distance for light falloff (attenuation)
    float dist = distance(lightPos.xy, aspectUv);

    // Softer flicker pulse for a dying fire
    float flickerPulse = 0.85 + 0.15 * noise(vec2(slowTime * 1.2, 10.0));

    // Smooth falloff: darkens the further away from the bottom-left corner
    // Decreased the falloff multiplier from 5.0 to 2.5 so the light spans further across the cave
    float attenuation = 1.0 / (1.0 + dist * dist * 2.5);

    // --- GENERATE SMOKE SHADOWS ---
    // Smoke drifts up and to the right, originating roughly from the bottom-left
    vec2 smokeUv = aspectUv * 2.5 - vec2(slowTime * 0.15, slowTime * 0.25);
    float smokeNoise = fbm(smokeUv);

    // Map the noise to a soft shadow mask that dims the light as it passes over
    // Mix ensures the shadow never drops below 30% light, keeping it subtle
    float smokeShadow = mix(0.3, 1.0, smoothstep(0.2, 0.8, smokeNoise));

    // Apply the rolling smoke shadows to the light's reach
    attenuation *= smokeShadow;

    // --- 5. CERBERUS COLORS ---
    // Heavily leaning into purples to keep it on-theme and ambient
    vec3 baseShadow = vec3(0.074, 0.0, 0.141);   // cerberus.brand.100 (Deep Purple)
    vec3 midPurple  = vec3(0.223, 0.0, 0.427);   // cerberus.brand.80 (Mid Purple)
    vec3 emberCore  = vec3(0.341, 0.157, 0.510); // #572882 (Requested bright purple core)
    vec3 starColor  = vec3(0.8, 0.9, 1.0);       // Soft blue/white for stars

    // Blend from mid purple into the bright purple core near the source
    vec3 glowColor = mix(midPurple, emberCore, attenuation * flickerPulse);

    // Calculate stars (twinkling field)
    float stars = createStars(aspectUv, slowTime);

    // Mask stars so they appear dynamically behind the thickest parts of the "clouds"
    // Adjusted smoothstep and added mix so they fade much slower and never fully hit 0
    stars *= mix(0.15, 1.0, smoothstep(0.9, 0.2, rockHeight)) * smokeShadow;

    // Combine shadows and fire lighting
    vec3 finalColor = baseShadow * 0.3; // Boosted base shadow slightly so it doesn't crush

    // Add the ambient base texture of the rock (now acting as sky/nebula)
    finalColor += baseShadow * rockHeight * 0.6;

    // Paint the purple light over the bumps (slightly increased intensity from 0.7 to 0.85)
    finalColor += glowColor * diffuse * attenuation * flickerPulse * 0.85;

    // Add the subtle star layer on top, increased base opacity so they are slightly brighter
    finalColor += starColor * stars * 0.85; // Increased from 0.5

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

export default function CerberusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
    })

    if (!gl) return

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
    if (!vertexShader || !fragmentShader) return

    const program = createProgram(gl, vertexShader, fragmentShader)
    if (!program) return

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution')
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time')

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
      ]),
      gl.STATIC_DRAW,
    )

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * pixelRatio
      canvas.height = window.innerHeight * pixelRatio
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    let animationFrameId: number
    let startTime = performance.now()
    let isVisible = true

    const render = (now: number) => {
      if (!isVisible) return

      const elapsed = (now - startTime) * 0.001

      gl.useProgram(program)
      gl.enableVertexAttribArray(positionAttributeLocation)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height)
      gl.uniform1f(timeUniformLocation, elapsed)

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    const handleVisibilityChange = () => {
      isVisible = !document.hidden
      if (isVisible) {
        startTime = performance.now() - (performance.now() - startTime)
        animationFrameId = requestAnimationFrame(render)
      } else {
        cancelAnimationFrame(animationFrameId)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

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
