import Image from 'next/image'
import Link from 'next/link'
import { useYearsOfExperience } from '@/contexts/YearsOfExperienceProvider'

export default function SectionInitial() {
  const { years: yearsOfXp } = useYearsOfExperience()

  return (
    <section
      id="initial"
      className="flex min-h-screen flex-col items-center justify-center bg-slate-900 py-12"
    >
      <div className="relative inline-block rounded-full bg-instagram p-1">
        <Image
          className="rounded-full border-4 border-slate-900"
          src="/images/profile.jpg"
          width={160}
          height={160}
          alt="Alexandre Batistella"
          unoptimized
        />
      </div>
      <div className="container text-center">
        <p className="mt-1 font-mono text-2xl text-gray-400">
          {"Greetings! I'm Alexandre Batistella 👋"}
        </p>
        <p className="mt-1 text-6xl font-medium text-white">
          {'Full-stack Software Engineer'}
        </p>
        <p className="mt-1 text-xl text-white">{`${yearsOfXp} years of experience`}</p>
        <p className="mt-16 text-2xl text-white">
          {
            'Work with a great leader with excellent technical skills. Check out my personal projects below 😉'
          }
        </p>
      </div>
      <div className="container mt-10 space-x-4 text-center">
        <Link
          href="#projects"
          className="rounded-lg border-2 border-slate-700 px-4 py-3 font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-amber-500 hover:text-amber-950"
        >
          Check them out
        </Link>
        <Link
          href="#contactMe"
          className="rounded-lg bg-amber-500 px-4 py-3 font-semibold text-amber-950 hover:bg-amber-500/75"
        >
          Contact me
        </Link>
      </div>
    </section>
  )
}
