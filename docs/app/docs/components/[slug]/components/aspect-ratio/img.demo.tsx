import Image from 'next/image'
import { AspectRatio } from 'styled-system/jsx'

export function ImgDemo() {
  return (
    <AspectRatio h="447px" maxW="400px" ratio={4 / 3} w="794px">
      <Image
        alt="A fiery cerberus"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d7b49a9-2590-4dda-88ad-8046da56428b/dg97zza-65055527-eaf3-48e6-86aa-cf70a0880eea.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkN2I0OWE5LTI1OTAtNGRkYS04OGFkLTgwNDZkYTU2NDI4YlwvZGc5N3p6YS02NTA1NTUyNy1lYWYzLTQ4ZTYtODZhYS1jZjcwYTA4ODBlZWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BT7UC12eP5ibJs6uEYPIOQNQ6Xdnvw1ttIrCEgPvcSk"
        height={447}
        width={794}
      />
    </AspectRatio>
  )
}
