import { useYearsOfExperience } from '@/contexts/YearsOfExperienceProvider'
import ImageTechStack from '../ImageTechStack'
import { techs } from '@/constants/techs'

export default function SectionAboutMe() {
  const { years } = useYearsOfExperience()

  return (
    <section id="aboutMe" className="flex justify-center bg-slate-800 py-12">
      <div className="container mx-4">
        <p className="mb-3 text-3xl font-extrabold text-white">About me</p>
        <div className="flex flex-col space-x-8 lg:flex-row">
          <div className="flex-1">
            <p className="mb-2 text-justify text-white">
              {`My contact with technology started when I was 4 years old. My
                usual hobby was to play video games in the computer and
                understand how to edit photos and create videos. In high school,
                I got to study how to create websites in HTML and CSS.`}
            </p>
            <p className="mb-2 text-justify text-white">
              Fast-forward, I got a{' '}
              <b>
                master{"'"}s degree in Computer Science and Engineering at 🇮🇹
                Politecnico di Milano
              </b>
              , where I mainly studied Artificial Intelligence and Machine
              Learning, and a{' '}
              <b>
                bachelor{"'"}s degree in Computer Engineering at 🇧🇷 University
                of São Paulo
              </b>
              , where I mainly studied Software Engineering and Electronic
              Engineering. During my studies,{' '}
              <b>I had a time in two startups</b> that taught me about business,
              product management, human resources, and mainly built my knowledge
              for building technical systems.
            </p>
            <p className="mb-2 text-justify text-white">
              Nowadays I have{' '}
              <b>
                {years} years of experience in the IT industry as a full-stack
                software engineer
              </b>
              . I have experience with tight-scheduled projects that uses a
              diversified set of technologies to maintain the availability and
              scalability of the system. Throughout my career I had designed,
              architected, and delivered numerous projects, ranging from design
              the UI/UX to deploying to the cloud. My current development stack
              includes <b>Typescript</b>, <b>ReactJS</b>, and <b>NodeJS</b>.
            </p>
            <p className="mb-2 text-justify text-white">
              I am an entrepreneurial and nerdy spirit person with proven
              problem solving, self-learning, and communication skills. I look
              for a broader impact in the world with tech and AI. Feel free to
              get in touch if you want to get to know me better. 😃
            </p>
          </div>
          <div className="flex-1">
            <p className="mb-3 text-center text-2xl font-semibold text-white">
              Technologies I have worked with
            </p>
            <div className="grid grid-cols-8 gap-y-4">
              {techs.map((item) => (
                <ImageTechStack
                  key={item.slug}
                  alt={item.description}
                  slug={item.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
