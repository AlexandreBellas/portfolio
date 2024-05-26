import Image from 'next/image'
import styles from './styles.module.scss'

export default function SectionInitial() {
  return (
    <section
      id="initial"
      className="flex min-h-screen flex-col items-center justify-center bg-slate-800"
    >
      <div className="justify-center border-black">
        <div className={styles['profile-circle']}>
          <div className="m-1 rounded-full bg-slate-800">
            <Image
              className="rounded-full p-1"
              src="/profile.jpg"
              width={160}
              height={160}
              alt="Alexandre Batistella"
            />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <h2 className="text-white">
          {"Hello there! I'm Alexandre Batistella 👋"}
        </h2>
      </div>
    </section>
  )
}
