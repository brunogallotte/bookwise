import bookImage from '@/assets/bookImage.png'
import Image from 'next/image'
import { Stars } from '../../components/Stars'

export function CardBookProfile() {
  return (
    <div className="mt-8">
      <time className="text-sm text-ignite-gray-300">Há 2 dias</time>
      <div className="mt-2 flex flex-col w-[624px] p-6 gap-6 bg-ignite-gray-700">
        <div className="flex gap-6">
          <Image src={bookImage} width={98} height={134} alt="" />
          <div className="flex flex-col">
            <strong className="text-ignite-gray-100 text-lg font-bold">
              book titlte
            </strong>
            <span className="text-ignite-gray-400 text-sm">book author</span>
            <Stars className="mt-auto" />
          </div>
        </div>
        <p className="text-sm/[22.4px] text-ignite-gray-300 ">
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </p>
      </div>
    </div>
  )
}
