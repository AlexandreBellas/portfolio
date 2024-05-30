import { projects } from '@/constants/projects'
import { format } from 'date-fns'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import BadgeTech from '../BadgeTech'

export default function SectionProjects() {
  return (
    <section id="projects" className="flex justify-center bg-slate-900 py-12">
      <div className="container mx-4">
        <p className="text-3xl font-extrabold text-white">Projects</p>
        <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="relative flex flex-col overflow-hidden rounded-xl border-2 border-gray-700 bg-slate-800"
            >
              <Image
                className="h-36 w-full object-cover"
                title={project.name}
                src={project.imageSrc}
                alt={project.slug}
                width={200}
                height={200}
              />
              <div className="m-6 flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-xl font-semibold text-white">
                    {project.name}
                  </p>
                  <p className="font-semibold text-gray-500">
                    {format(project.period, 'MMMM yyyy')}
                  </p>
                  <p className="mt-2 text-justify text-sm font-medium text-gray-300">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <BadgeTech
                      description={tech.description}
                      slug={tech.slug}
                      key={tech.slug}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity hover:opacity-100 hover:backdrop-blur-sm hover:backdrop-filter">
                <div className="flex flex-row justify-center gap-2">
                  <Image
                    src={'https://cdn.simpleicons.org/github/white'}
                    alt="github"
                    width={32}
                    height={32}
                  />
                  <Link
                    href={project.githubUrl}
                    className="text-2xl font-bold text-white"
                  >
                    Source code
                  </Link>
                </div>
                {project.liveUrl && (
                  <div className="mt-2 flex flex-row justify-center gap-2">
                    <ArrowUpRight color="white" width={32} height={32} />
                    <Link
                      href={project.liveUrl}
                      className="text-2xl font-bold text-white"
                    >
                      Live preview
                    </Link>
                  </div>
                )}
                {project.npmUrl && (
                  <div className="mt-2 flex flex-row justify-center gap-2">
                    <Image
                      src={'https://cdn.simpleicons.org/npm/white'}
                      alt="npm"
                      width={32}
                      height={32}
                    />
                    <Link
                      href={project.npmUrl}
                      className="text-2xl font-bold text-white"
                    >
                      Check in NPM
                    </Link>
                  </div>
                )}
                {project.packagistUrl && (
                  <div className="mt-2 flex flex-row justify-center gap-2">
                    <Image
                      src={'https://cdn.simpleicons.org/packagist/white'}
                      alt="npm"
                      width={32}
                      height={32}
                    />
                    <Link
                      href={project.packagistUrl}
                      className="text-2xl font-bold text-white"
                    >
                      Check in Packagist
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
