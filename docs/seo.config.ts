import type { Metadata } from 'next'
import { getPublicUrl } from './lib/public-url'

const defineMetadata = <T extends Metadata>(metadata: T) => metadata

const publicUrl = getPublicUrl()

const seoConfig: Metadata = defineMetadata({
  metadataBase: new URL(publicUrl),
  title: {
    template: '%s - Cerberus UI Platform',
    default:
      'Cerberus UI Platform - Build your brand & products with accessibility and performance in mind',
  },
  description: 'Build your brand & products with accessibility and performance in mind',
  themeColor: '#F6E458',
  openGraph: {
    images: `${publicUrl}/og`,
    url: publicUrl,
  },
  manifest: '/site.webmanifest',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'mask-icon', url: '/favicon.ico' },
    { rel: 'image/x-icon', url: '/favicon.ico' },
  ],
})

export default seoConfig
