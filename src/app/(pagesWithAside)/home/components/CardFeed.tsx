'use client'

import Image from 'next/image'
import bookImage from '@/assets/bookImage.png'
import { Stars } from '../../components/Stars'
import { Avatar } from '../../components/Avatar'

export function CardFeed() {
  return (
    <div className="w-[608px] mt-4 p-6 bg-ignite-gray-700 rounded-lg">
      <header className="flex justify-between">
        <div className="flex items-center gap-4">
          <Avatar
            avatarUrl="https://github.com/brunogallotte.png"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <strong className="text-ignite-gray-100">Bruno Gallotte</strong>
            <span className="text-ignite-gray-400">Hoje</span>
          </div>
        </div>
        <Stars />
      </header>

      <div className="flex gap-5 mt-8">
        <Image
          className="w-[108px] h-[152px]"
          src={bookImage}
          width={108}
          height={152}
          alt=""
        />
        <div className="flex flex-col">
          <strong className="text-ignite-gray-100 font-bold">
            Title of book
          </strong>
          <span className="text-sm/[22.4px] text-ignite-gray-400">
            Book author
          </span>
          <p className="mt-5 text-sm/[22.4px] text-ignite-gray-300">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...{' '}
            <span className="text-ignite-purple-100 font-bold">ver mais</span>
          </p>
        </div>
      </div>
    </div>
  )
}
