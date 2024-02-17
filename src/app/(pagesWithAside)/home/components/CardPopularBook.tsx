import Image from 'next/image'
import popularBook from '@/assets/popularBook.png'
import { Stars } from '../../components/Stars'

export function CardPopularBook() {
  return (
    <div className="flex mt-4 px-5 py-4 gap-5 bg-ignite-gray-700 rounded-lg w-[324px]">
      <Image src={popularBook} width={64} height={94} alt="" />
      <div className="flex flex-col">
        <strong className="text-ignite-gray-100 font-bold">Book title</strong>
        <span className="text-ignite-gray-400 text-sm">Book author</span>
        <Stars className="mt-auto" />
      </div>
    </div>
  )
}
