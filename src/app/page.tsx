import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SectionAboutMe from '@/components/SectionAboutMe'
import SectionContactMe from '@/components/SectionContactMe'
import SectionEducation from '@/components/SectionEducation'
import SectionInitial from '@/components/SectionInitial'
import SectionProjects from '@/components/SectionProjects'

export default function Home() {
  return (
    <main className="overflow-scroll">
      <Navbar />
      <SectionInitial />
      <SectionAboutMe />
      <SectionProjects />
      <SectionEducation />
      <SectionContactMe />
      <Footer />
    </main>
  )
}
