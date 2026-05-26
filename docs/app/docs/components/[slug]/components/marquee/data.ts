import {
  LogoBluesky,
  LogoFigma,
  LogoGithub,
  LogoGitlab,
  LogoLinkedin,
  LogoTwitter,
} from '@carbon/icons-react'

export const items = [
  { name: 'Apple', logo: '🍎' },
  { name: 'Banana', logo: '🍌' },
  { name: 'Cherry', logo: '🍒' },
  { name: 'Grape', logo: '🍇' },
  { name: 'Watermelon', logo: '🍉' },
  { name: 'Strawberry', logo: '🍓' },
]

export const socials = [
  { icon: LogoBluesky, label: 'Bluesky', color: '#f7df1e' },
  { icon: LogoTwitter, label: 'Twitter', color: '#1da1f2' },
  { icon: LogoLinkedin, label: 'LinkedIn', color: '#0077b5' },
  { icon: LogoFigma, label: 'Figma', color: '#F24E1E' },
  { icon: LogoGithub, label: 'Github', color: '#1ab7ea' },
  { icon: LogoGitlab, label: 'GitLab', color: '#fc6d26' },
]

export const speeds = [
  { value: 25, label: 'Slow (25pxps)' },
  { value: 50, label: 'Normal (50pxps)' },
  { value: 100, label: 'Fast (100pxps)' },
]
