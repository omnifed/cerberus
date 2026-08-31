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
  uniform float u_lightMode; // Crossfade uniform between dark and light themes

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

  // Fractional Brownian Motion for clouds/cavern texture
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

  // Calculates a sparse field of twinkling stars
  float createStars(vec2 uv, float time) {
    float s = 0.0;
    vec2 grid = uv * 40.0;
    vec2 id = floor(grid);
    vec2 f = fract(grid) - 0.5;
    vec2 r = hash(id);

    // Sparsity: only ~8% of cells have a star
    if(r.x > 0.92) {
      float dist = length(f - r * 0.3);
      float radius = 0.03 * (r.y * 0.5 + 0.5);
      // Soft twinkle effect, slower and with a higher minimum brightness so they don't vanish
      float brightness = 0.7 + 0.3 * sin(time * 0.8 + r.x * 20.0);
      s += smoothstep(radius, 0.0, dist) * brightness;
    }
    return s;
  }

  void main() {
    // Normalize coordinates and fix aspect ratio so circles stay circular
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 aspectUv = uv;
    float aspect = u_resolution.x / u_resolution.y;
    aspectUv.x *= aspect;

    float time = u_time;
    float slowTime = time * 0.2;

    // --- GEOMETRY & LIGHT SOURCE ---
    // Anchor the light source (sun/ember pit) exactly in the bottom middle of the screen
    vec2 lightPos = vec2(0.5 * aspect, -0.2);
    float distToLight = distance(aspectUv, lightPos);

    // Sun spreads light much further during the daytime
    float spread = mix(5.0, 2.5, u_lightMode);
    float attenuation = 1.0 / (1.0 + distToLight * distToLight * spread);

    // Embers flicker in the dark, but the sun is a steady burn during the day
    float flickerPulse = mix(0.9 + 0.1 * sin(time * 2.0), 1.0, u_lightMode);

    // --- NOISE FIELDS (Clouds / Cavern Walls) ---
    // Dark mode uses this for cavern rocks, Light mode uses this for fluffy sky clouds
    float rockHeight = fbm(aspectUv * mix(2.5, 2.0, u_lightMode) - vec2(0.0, slowTime));
    // Additional noise to shadow the stars dynamically
    float smokeShadow = fbm(aspectUv * 4.0 + vec2(slowTime, slowTime));

    // Calculate 2D normals from the noise heightmap for dynamic diffuse lighting
    float hLeft = fbm((aspectUv - vec2(0.01, 0.0)) * 2.5 - vec2(0.0, slowTime));
    float hDown = fbm((aspectUv - vec2(0.0, 0.01)) * 2.5 - vec2(0.0, slowTime));

    // Light mode has much softer cloud bumps, Dark mode has jagged cavern rocks (Reduced bumpiness to soften smoke)
    float bumpiness = mix(5.0, 3.0, u_lightMode);
    vec2 normal2D = vec2(rockHeight - hLeft, rockHeight - hDown) * bumpiness;
    vec3 normal = normalize(vec3(normal2D, 1.0));

    // Light direction pointing up from the bottom center
    vec3 lightDir = normalize(vec3(lightPos - aspectUv, mix(0.5, 0.8, u_lightMode)));
    float diffuse = max(0.0, dot(normal, lightDir));

    // --- CERBERUS THEME COLORS ---

    // DARK MODE: Fiery Cavern / Nebula
    vec3 darkBase  = vec3(0.126, 0.014, 0.046); // cerberus.neutral.100 (Deep dark red/black)
    vec3 darkMid   = vec3(0.427, 0.0,   0.224); // cerberus.brand.80 (Rich purple)
    vec3 darkEmber = vec3(0.769, 0.200, 0.498); // cerberus.brand.50 (Vibrant magenta ember)

    // LIGHT MODE: Radiant Sunrise Sky
    vec3 lightBase = vec3(0.941, 0.800, 0.875); // cerberus.brand.20 (Soft pink morning sky)
    vec3 lightMid  = vec3(0.827, 0.400, 0.624); // cerberus.brand.40 (Warm pink cloud shadows)
    vec3 lightEmber= vec3(0.984, 0.976, 0.976); // cerberus.neutral.5 (Blinding white/pink sun core)
    vec3 cloudWhite= vec3(1.0, 0.98, 0.99);     // Fluffy morning cloud tops

    // Crossfade Interpolation
    vec3 baseSky   = mix(darkBase, lightBase, u_lightMode);
    vec3 midPurple = mix(darkMid, lightMid, u_lightMode);
    vec3 emberCore = mix(darkEmber, lightEmber, u_lightMode);

    // The localized color around the light source
    vec3 glowColor = mix(midPurple, emberCore, attenuation * flickerPulse);

    // --- RENDERING ---
    vec3 finalColor;

    // 1. Ambient Background Layer
    // Dark mode drops the brightness heavily. Light mode renders the full pink sky.
    vec3 ambientBase = mix(baseSky * 0.3, baseSky, u_lightMode);

    // 2. Texture Layer (Clouds/Cavern)
    // Dark mode uses smoothstep to create gaps in the smoke, capped at 35% opacity so it doesn't take over.
    // Light mode paints distinct, fluffy clouds.
    float darkSmoke = smoothstep(0.2, 0.9, rockHeight) * 0.35;
    float lightClouds = smoothstep(0.4, 0.85, rockHeight); // Thinned daytime clouds slightly too
    float cloudMix = mix(darkSmoke, lightClouds, u_lightMode);

    vec3 textureColor = mix(ambientBase, cloudWhite, u_lightMode);
    finalColor = mix(ambientBase, textureColor, cloudMix);

    // 3. Diffuse Lighting (Light hitting the bumps)
    // Lights up the bottoms of the clouds/rocks facing the sun/embers
    float lightIntensity = mix(0.85, 0.5, u_lightMode);
    vec3 addLight = glowColor * diffuse * attenuation * flickerPulse * lightIntensity;
    finalColor += addLight;

    // 4. Base Sun Glare (Daytime Only)
    // Washes out the bottom center of the screen with blinding sunlight
    vec3 sunGlare = emberCore * pow(attenuation, 1.5) * u_lightMode * 0.6;
    finalColor += sunGlare;

    // 5. Stars (Nighttime Only)
    float stars = createStars(aspectUv, slowTime);
    // Mask stars dynamically behind thick clouds/rocks
    stars *= mix(0.15, 1.0, smoothstep(0.9, 0.2, rockHeight)) * smokeShadow;
    // Fade out completely when the sun comes up
    stars *= (1.0 - u_lightMode);
    finalColor += vec3(0.95, 0.85, 0.95) * stars * 0.85;

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

export default function CerberusDayBackground() {
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
    let currentLightMode = 0.0 // Tracks smooth theme crossfades

    const render = (now: number) => {
      if (!isVisible) return

      const time = (now - startTime) * 0.001

      // Theme Detection (Checks for Next.js or Tailwind 'dark' class defaults)
      const isDark =
        document.documentElement.classList.contains('dark') ||
        document.documentElement.getAttribute('data-theme') === 'dark'

      // Smoothly interpolate the lightMode uniform
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
