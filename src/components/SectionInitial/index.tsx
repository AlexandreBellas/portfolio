import Image from 'next/image'
import { differenceInYears } from 'date-fns'
import Link from 'next/link'

export default function SectionInitial() {
  // 01/06/2018
  const yearsOfExperience = differenceInYears(new Date(), new Date(2018, 5, 1))

  return (
    <section
      id="initial"
      className="flex min-h-screen flex-col items-center justify-center bg-slate-800"
    >
      <div className="relative inline-block rounded-full bg-instagram p-1">
        <Image
          className="rounded-full border-4 border-slate-800"
          src="/profile.jpg"
          width={160}
          height={160}
          alt="Alexandre Batistella"
        />
      </div>
      <div className="container text-center">
        <p className="mt-1 font-mono text-2xl text-gray-400">
          {"Greetings! I'm Alexandre Batistella 👋"}
        </p>
        <p className="mt-1 text-6xl font-medium text-white">
          {'Full-stack Software Engineer'}
        </p>
        <p className="mt-1 text-xl text-white">{`${yearsOfExperience} years of experience`}</p>
        <p className="mt-16 text-2xl text-white">
          {
            'Work with a great leader with excellent technical skills. Check out my personal projects below 😉'
          }
        </p>
      </div>
      <div className="container mt-10 space-x-4 text-center">
        <Link
          href="#projects"
          className="rounded-lg border-2 border-slate-700 px-4 py-3 font-semibold text-white hover:bg-amber-400 hover:text-amber-950"
        >
          Check them out
        </Link>
        <Link
          href="#contactMe"
          className="rounded-lg bg-amber-400 px-4 py-3 font-semibold text-amber-950 hover:bg-amber-400/75"
        >
          Contact me
        </Link>
      </div>
    </section>
  )
}
