import {
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'

export type Rgb = [number, number, number]

/**
 * The organism's pose for a moment of the story. The director blends these
 * as the page scrolls.
 */
export interface OrganismState {
  /** 0: three streams wandering apart. 1: braided into one body. */
  braid: number
  /** How far the braided strands swing around their shared axis. */
  radius: number
  /** Vertical position of the body, -0.5 (bottom) to 0.5 (top). */
  axis: number
  /** Tilt of the body in radians. */
  angle: number
  /** How bright the light runs. */
  energy: number
}

export interface WorldFrame {
  state: OrganismState
  /** The three minds: designer, developer, agent. */
  colors: [Rgb, Rgb, Rgb]
  background: Rgb
  dark: boolean
}

export interface World {
  setFrame(frame: WorldFrame): void
  setPointer(x: number | null, y: number): void
  pulse(x: number, y: number): void
  setActive(active: boolean): void
  dispose(): void
}

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const fragment = /* glsl */ `
  precision highp float;

  uniform vec2 uRes;
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uPointerAmt;
  uniform vec3 uPulse;
  uniform float uBraid;
  uniform float uRadius;
  uniform float uAxis;
  uniform float uAngle;
  uniform float uEnergy;
  uniform vec3 uC0;
  uniform vec3 uC1;
  uniform vec3 uC2;
  uniform vec3 uBg;
  uniform float uDark;

  varying vec2 vUv;

  // Each mind is a ribbon of fine threads that twists through depth.
  const int THREADS = 13;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise(float x) {
    float i = floor(x);
    float f = fract(x);
    float u = f * f * (3.0 - 2.0 * f);
    return mix(hash(vec2(i, 0.0)), hash(vec2(i + 1.0, 0.0)), u);
  }

  float fbm(float x) {
    return noise(x) * 0.6 + noise(x * 2.1 + 7.0) * 0.3 + noise(x * 4.3 + 13.0) * 0.1;
  }

  // Where ribbon i's spine runs at horizontal position x.
  float spine(float x, float i, float t) {
    float phase = i * 2.0943951;
    float braided = sin(x * 3.4 - t * 0.32 + phase) * uRadius * 1.4;
    float wander = (fbm(x * 1.5 + t * 0.05 + i * 9.7) - 0.5) * 0.95
      + sin(x * 2.6 + t * 0.22 + i * 2.4) * 0.08
      + (i - 1.0) * 0.05;
    return mix(wander, braided, uBraid);
  }

  void main() {
    float aspect = uRes.x / uRes.y;
    vec2 p = vUv;
    vec2 q = (p - 0.5) * vec2(aspect, 1.0);

    float ca = cos(uAngle);
    float sa = sin(uAngle);
    vec2 r = vec2(ca * q.x + sa * q.y, -sa * q.x + ca * q.y);
    r.y -= uAxis;

    vec2 ptr = (uPointer - 0.5) * vec2(aspect, 1.0);
    vec2 pr = vec2(ca * ptr.x + sa * ptr.y, -sa * ptr.x + ca * ptr.y);
    pr.y -= uAxis;

    float t = uTime;
    // Threads fade in from the edges instead of starting at the frame.
    float edge = smoothstep(aspect * 0.62, aspect * 0.18, abs(r.x));
    // One pixel, in these units, so threads stay hairline at any size.
    float px = 1.0 / uRes.y;

    // A tap sends a slow swell of light along the threads.
    float age = t - uPulse.z;
    float swell = 0.0;
    if (age > 0.0 && age < 3.0) {
      float tx = (uPulse.x - 0.5) * aspect;
      swell = exp(-pow(r.x - tx - age * 0.25, 2.0) * 10.0) * (1.0 - age / 3.0);
    }

    vec3 add = vec3(0.0);
    vec3 lit = uBg;

    for (int k = 0; k < 3; k++) {
      float i = float(k);
      vec3 c = k == 0 ? uC0 : (k == 1 ? uC1 : uC2);
      float y = spine(r.x, i, t);
      // The ribbons lean toward the pointer, as if listening.
      float pull = exp(-pow(r.x - pr.x, 2.0) * 14.0) * uPointerAmt;
      y += (pr.y - y) * pull * 0.22;

      // Twist: the ribbon's visible width turns through zero as it rotates.
      float twist = cos(r.x * 2.3 + t * 0.18 + i * 1.7);
      // Wide silk while the minds work apart; one fine beam when they converge.
      float width = (0.008 + 0.42 * uRadius) * (0.8 + 0.2 * uEnergy) * twist;
      float facing = 0.35 + 0.65 * abs(twist);

      float d0 = abs(r.y - y);
      // Skip pixels nowhere near this ribbon.
      if (d0 > abs(width) + 0.06) continue;

      float threads = 0.0;
      for (int j = 0; j < THREADS; j++) {
        float u = float(j) / float(THREADS - 1) - 0.5;
        float yj = y + u * width;
        float d = abs(r.y - yj);
        // Outer threads catch more light, like the edge of silk.
        float rim = 0.55 + 0.45 * pow(abs(u) * 2.0, 3.0);
        threads += smoothstep(px * 1.4, 0.0, d) * rim;
      }
      threads = threads / 1.9 * facing;

      float halo = exp(-d0 * 18.0) * 0.1;
      float a = (threads * (0.75 + 0.5 * uEnergy) + halo * uEnergy + threads * swell * 1.5) * edge;

      add += c * a;

      // On a light page each ribbon is ink; pale theme colors ink darker.
      float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
      vec3 ink = mix(c, c * 0.6, smoothstep(0.5, 0.8, lum));
      // On paper the halo reads as smudge, so ink takes only a whisper of it.
      float aInk = (threads * (0.75 + 0.5 * uEnergy) * (1.0 + swell * 1.5) + halo * 0.25) * edge;
      lit = mix(lit, ink, clamp(aInk * 0.85, 0.0, 1.0));
    }

    vec3 col;
    if (uDark > 0.5) {
      col = uBg + add;
      col = 1.0 - exp(-col * 1.25);
    } else {
      col = lit;
    }

    // A long, soft falloff toward the corners, and a whisper of grain.
    float vignette = smoothstep(1.35, 0.3, length((p - 0.5) * vec2(aspect * 0.75, 1.0)));
    col = mix(uBg, col, mix(0.6, 1.0, vignette));
    col += (hash(p * uRes + fract(t * 7.0) * 31.0) - 0.5) * 0.012;

    gl_FragColor = vec4(col, 1.0);
  }
`

interface Options {
  canvas: HTMLCanvasElement
  onReady: () => void
  onLost: () => void
}

/**
 * The page's living organism: three silk ribbons of fine threads (designer,
 * developer, agent) that the director tangles, braids and converges as the
 * story moves.
 * One canvas, one job. It renders only while it is visible and active.
 */
export function createWorld(options: Options): World {
  const { canvas } = options
  const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: false })
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
  renderer.setPixelRatio(dpr)

  const uniforms = {
    uRes: { value: new Vector2(1, 1) },
    uTime: { value: 0 },
    uPointer: { value: new Vector2(0.5, 0.5) },
    uPointerAmt: { value: 0 },
    uPulse: { value: new Vector3(0, 0, -10) },
    uBraid: { value: 1 },
    uRadius: { value: 0.06 },
    uAxis: { value: 0 },
    uAngle: { value: 0 },
    uEnergy: { value: 1 },
    uC0: { value: new Vector3(0.6, 0.4, 0.9) },
    uC1: { value: new Vector3(0.3, 0.7, 0.9) },
    uC2: { value: new Vector3(0.9, 0.7, 0.3) },
    uBg: { value: new Vector3(0.05, 0.05, 0.06) },
    uDark: { value: 1 },
  }

  const material = new ShaderMaterial({
    uniforms,
    vertexShader: vertex,
    fragmentShader: fragment,
  })
  const geometry = new PlaneGeometry(2, 2)
  const scene = new Scene()
  scene.add(new Mesh(geometry, material))
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)

  let frame: WorldFrame | null = null
  let target = { x: 0.5, y: 0.5, amt: 0 }
  const pointer = { x: 0.5, y: 0.5, amt: 0 }
  let raf = 0
  let active = true
  let lost = false
  let start = performance.now()

  const resize = () => {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    renderer.setSize(w, h, false)
    uniforms.uRes.value.set(w * dpr, h * dpr)
  }
  const observer = new ResizeObserver(resize)
  observer.observe(canvas)
  resize()

  const render = (now: number) => {
    raf = 0
    if (!active || lost || document.hidden) return
    uniforms.uTime.value = (now - start) / 1000
    pointer.x += (target.x - pointer.x) * 0.08
    pointer.y += (target.y - pointer.y) * 0.08
    pointer.amt += (target.amt - pointer.amt) * 0.05
    uniforms.uPointer.value.set(pointer.x, pointer.y)
    uniforms.uPointerAmt.value = pointer.amt
    if (frame) {
      const { state, colors, background, dark } = frame
      uniforms.uBraid.value = state.braid
      uniforms.uRadius.value = state.radius
      uniforms.uAxis.value = state.axis
      uniforms.uAngle.value = state.angle
      uniforms.uEnergy.value = state.energy
      uniforms.uC0.value.set(...colors[0])
      uniforms.uC1.value.set(...colors[1])
      uniforms.uC2.value.set(...colors[2])
      uniforms.uBg.value.set(...background)
      uniforms.uDark.value = dark ? 1 : 0
    }
    renderer.render(scene, camera)
    raf = requestAnimationFrame(render)
  }

  const wake = () => {
    if (!raf && active && !lost && !document.hidden)
      raf = requestAnimationFrame(render)
  }
  const onVisibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(raf)
      raf = 0
    } else wake()
  }
  document.addEventListener('visibilitychange', onVisibility)

  const onLost = (event: Event) => {
    event.preventDefault()
    lost = true
    cancelAnimationFrame(raf)
    raf = 0
    options.onLost()
  }
  canvas.addEventListener('webglcontextlost', onLost)

  requestAnimationFrame((now) => {
    start = now
    render(now)
    options.onReady()
  })

  return {
    setFrame(next) {
      frame = next
      wake()
    },
    setPointer(x, y) {
      if (x === null) {
        target = { ...target, amt: 0 }
        return
      }
      // Screen y grows downward; the shader's grows upward.
      target = {
        x: x / Math.max(1, canvas.clientWidth),
        y: 1 - y / Math.max(1, canvas.clientHeight),
        amt: 1,
      }
    },
    pulse(x, y) {
      uniforms.uPulse.value.set(
        x / Math.max(1, canvas.clientWidth),
        1 - y / Math.max(1, canvas.clientHeight),
        uniforms.uTime.value,
      )
    },
    setActive(next) {
      if (active === next) return
      active = next
      if (active) wake()
      else {
        cancelAnimationFrame(raf)
        raf = 0
      }
    },
    dispose() {
      active = false
      cancelAnimationFrame(raf)
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      canvas.removeEventListener('webglcontextlost', onLost)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
    },
  }
}
