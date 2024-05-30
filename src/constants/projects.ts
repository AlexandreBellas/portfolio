import { ITech } from './techs'

interface IProject {
  slug: string
  name: string
  period: Date
  description: string
  imageSrc: string
  techs: ITech[]
  githubUrl: string
  liveUrl?: string
  npmUrl?: string
  packagistUrl?: string
}

export const projects: IProject[] = [
  {
    slug: 'momonario',
    name: 'Momonario',
    period: new Date(2024, 5, 1),
    description:
      'A personal dictionary to document words being learned in a new language, being easy to add or to check if it has been already documented.',
    imageSrc: '/images/momonario.png',
    techs: [
      {
        slug: 'ts',
        description: 'Typescript',
      },
      {
        slug: 'react',
        description: 'ReactJS',
      },
      {
        slug: 'nextjs',
        description: 'NextJS',
      },
      {
        slug: 'php',
        description: 'PHP',
      },
      {
        slug: 'laravel',
        description: 'Laravel',
      },
      {
        slug: 'postgresql',
        description: 'PostgreSQL',
      },
    ],
    githubUrl: 'https://github.com/AlexandreBellas/momonario',
  },
  {
    slug: '2040dog',
    name: '2040🐶',
    period: new Date(2024, 3, 1),
    description:
      'A 2048 web game dog-themed for fun. It has been created to represent how dogs can make any game funnier.',
    imageSrc: '/images/2040dog.png',
    techs: [
      {
        slug: 'ts',
        description: 'Typescript',
      },
      {
        slug: 'react-native',
        description: 'React Native',
      },
      {
        slug: 'expo',
        description: 'Expo',
      },
    ],
    githubUrl: 'https://github.com/AlexandreBellas/2040dog',
    liveUrl: 'https://2040.dog',
  },
  {
    slug: 'bling-erp-api',
    name: 'Bling ERP API',
    period: new Date(2021, 9, 1),
    description:
      'An open-source API connector to the Bling ERP available to be installed from NPM or Packagist. It is used by several brazilian enterprises in their solutions.',
    imageSrc: '/images/bling-erp-api.png',
    techs: [
      {
        slug: 'php',
        description: 'PHP',
      },
      {
        slug: 'ts',
        description: 'Typescript',
      },
    ],
    githubUrl: 'https://github.com/AlexandreBellas/bling-erp-api-js',
    npmUrl: 'https://www.npmjs.com/package/bling-erp-api',
    packagistUrl: 'https://packagist.org/packages/alebatistella/bling-erp-api',
  },
]
