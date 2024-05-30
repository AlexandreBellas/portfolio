import { ITech } from '@/constants/techs'

type IBadgeTechProps = ITech

export default function BadgeTech(props: Readonly<IBadgeTechProps>) {
  return (
    <div
      key={props.slug}
      className="rounded-md bg-white/75 px-1.5 py-0.5 text-slate-900"
    >
      <p className="flex-none font-medium">{props.description}</p>
    </div>
  )
}
