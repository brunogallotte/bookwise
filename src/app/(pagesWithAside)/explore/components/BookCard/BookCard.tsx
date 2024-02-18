import Image, { StaticImageData } from 'next/image'
import { Stars } from '../../../components/Stars'

export interface BookCardProps {
  title: string
  author: string
  coverImg: StaticImageData
  category: string
}

export function BookCard({ title, author, coverImg }: BookCardProps) {
  return (
    <div className="flex px-5 py-4 bg-ignite-gray-700 gap-5 max-w-[318px] rounded-lg">
      <Image
        className="w-[108px] h-[152px]"
        src={coverImg}
        width={108}
        height={152}
        alt=""
      />
      <div className="flex flex-col">
        <strong className="text-ignite-gray-100 font-bold">{title}</strong>
        <span className="text-ignite-gray-400">{author}</span>
        <Stars className="mt-auto" />
      </div>
    </div>
  )
}
