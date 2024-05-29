'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SectionAboutMe from '@/components/SectionAboutMe'
import SectionContactMe from '@/components/SectionContactMe'
import SectionEducation from '@/components/SectionEducation'
import SectionInitial from '@/components/SectionInitial'
import SectionProjects from '@/components/SectionProjects'
import { YearsOfExperienceProvider } from '@/contexts/YearsOfExperienceProvider'

export default function Home() {
  return (
    <YearsOfExperienceProvider>
      <main className="overflow-scroll">
        <Navbar />
        <SectionInitial />
        <hr className="border-stone-600/75" />
        <SectionAboutMe />
        <hr className="border-stone-600/75" />
        <SectionProjects />
        <hr className="border-stone-600/75" />
        <SectionEducation />
        <hr className="border-stone-600/75" />
        <SectionContactMe />
        <hr className="border-stone-600/75" />
        <Footer />
      </main>
    </YearsOfExperienceProvider>
  )
}
