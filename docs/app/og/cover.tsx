export function Cover() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1200 630">
      <g clip-path="url(#a)">
        <rect width="1200" height="630" fill="url(#b)" rx="8" />
        <g filter="url(#c)" opacity=".15">
          <path
            fill="url(#d)"
            fill-rule="evenodd"
            d="M339.685 569.889C234.02 562.38 129.85 567.285 21.858 510.09c-118.14-62.568-233.936-156.053-271.559-252.35-35.901-91.889 36.024-148.376 93.768-202.71 47.721-44.904 118.32-64.274 200.47-74.157C148.712-31.661 262.586-84.094 372.189-8.51c110.778 76.395 42.075 180.851 92.073 278.832 50.905 99.759 227.835 207.834 195.697 285.116-31.809 76.489-202.537 22.818-320.274 14.451"
            clip-rule="evenodd"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="1141.59"
          x2="691.932"
          y1="-82.241"
          y2="935.662"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0c0420" />
          <stop offset="1" stop-color="#392e55" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="25.94"
          x2="424.897"
          y1="679.674"
          y2="-167.918"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#dfccf0" />
          <stop offset="1" stop-color="#9f66d3" />
        </linearGradient>
        <clipPath id="a">
          <rect width="1200" height="630" fill="#fff" rx="8" />
        </clipPath>
        <filter
          id="c"
          width="1051.16"
          height="772.489"
          x="-323.327"
          y="-118.509"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-6" />
          <feGaussianBlur stdDeviation="32" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.372549 0 0 0 0 0 0 0 0 0 0.709804 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_24200_22003" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_24200_22003"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
