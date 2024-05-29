import Image from 'next/image'

interface ImageTechStackProps {
  slug: string
  alt: string
}

export default function ImageTechStack(props: Readonly<ImageTechStackProps>) {
  const { alt, slug } = props
  return (
    <Image
      alt={alt}
      title={alt}
      height={80}
      width={80}
      src={`https://skillicons.dev/icons?i=${slug}&theme=dark`}
    />
  )
}
