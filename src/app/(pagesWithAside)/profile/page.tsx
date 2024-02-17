'use client'

import { MagnifyingGlass, User } from 'phosphor-react'
import { CardBookProfile } from './components/CardBookProfile'
import { AsideInfoUser } from './components/AsideInfoUser/AsideInfoUser'

export default function Profile() {
  return (
    <section>
      <div className="grid grid-cols-[1fr_324px]">
        <div className="">
          <header className="flex flex-col items-start max-w-[624px]">
            <div className="flex">
              <User className="text-ignite-green-100" size={32} />
              <h1 className="text-2xl font-bold text-ignite-gray-100">
                Perfil
              </h1>
            </div>
            <div className="py-[14px] mt-10 flex items-center gap-5 w-full px-5 bg-ignite-gray-800 border-ignite-gray-500 border rounded-md">
              <input
                className="w-full bg-transparent text-ignite-gray-400"
                type="text"
              />
              <MagnifyingGlass size={20} className="text-ignite-gray-500" />
            </div>
          </header>
          <CardBookProfile />
        </div>

        <div className="ml-16">
          <AsideInfoUser />
        </div>
      </div>
    </section>
  )
}
