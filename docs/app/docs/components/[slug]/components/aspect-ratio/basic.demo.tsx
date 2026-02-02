import { AspectRatio } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <AspectRatio h="315px" w="560px">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3De7DAcouMg?si=GimPs_G6HF59kxes"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </AspectRatio>
  )
}
