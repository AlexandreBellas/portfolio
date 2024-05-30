import { socials } from '@/constants/socials'
import { CloudDownloadIcon, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function SectionContactMe() {
  return (
    <section
      id="contactMe"
      className="flex min-h-[110vh] flex-col items-center justify-center bg-slate-800 py-12"
    >
      <div className="container mx-auto">
        <p className="mb-3 text-center text-3xl font-extrabold text-white">
          Contact me
        </p>
        <div className="mt-12 flex justify-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.slug}
              href={social.url}
              className="hover:opacity-80"
            >
              <Image
                src={social.iconUrl}
                alt={social.slug}
                width={32}
                height={32}
              />
            </Link>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Link href="mailto:alexandre.bellas@gmail.com" className="flex gap-2">
            <Mail color="white" />
            <p className="text-white">alexandre.bellas@gmail.com</p>
          </Link>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/docs/Alexandre_Batistella_Bellas_CV.pdf"
            className="flex gap-2 rounded-xl bg-amber-500/75 px-6 py-3 hover:opacity-80"
          >
            <CloudDownloadIcon className="text-amber-950" />
            <p className="font-bold text-amber-950">Download CV</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
