import { ITech } from '@/constants/techs'
import ImageTechStack from '../ImageTechStack'
import BadgeTech from '../BadgeTech'

export default function Footer() {
  const currYear = new Date().getFullYear()
  const techs: ITech[] = [
    {
      description: 'NextJS',
      slug: 'next',
    },
    {
      description: 'ReactJS',
      slug: 'react',
    },
    {
      description: 'TailwindCSS',
      slug: 'tailwind',
    },
  ]
  return (
    <footer className="bg-slate-900 py-4">
      <div className="flex justify-center gap-2">
        <p className="text-white">
          ©️ {currYear} Made by Alexandre Batistella with
        </p>
        {techs.map((tech) => (
          <BadgeTech
            description={tech.description}
            slug={tech.slug}
            key={tech.slug}
          />
        ))}
      </div>
    </footer>
  )
}
