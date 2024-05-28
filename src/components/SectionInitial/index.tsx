import Image from 'next/image'
import styles from './styles.module.scss'

export default function SectionInitial() {
  return (
    <section
      id="initial"
      className="flex min-h-screen flex-col items-center justify-center bg-slate-800"
    >
      <div className="bg-instagram relative inline-block rounded-full p-1">
        <Image
          className="rounded-full border-4 border-slate-800"
          src="/profile.jpg"
          width={160}
          height={160}
          alt="Alexandre Batistella"
        />
      </div>
      <div className="container text-center">
        <h2 className="mt-1 text-2xl font-semibold text-white">
          {"Greetings! I'm Alexandre Batistella 👋"}
        </h2>
      </div>
    </section>
  )
}
