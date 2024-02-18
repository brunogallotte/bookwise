'use client'

import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { NavBar } from './components/NavBar'
import { BookCard } from './components/BookCard/BookCard'
import { bookCardContent } from './components/BookCard/BookCardContent'

export default function Explore() {
  return (
    <section className="flex flex-col pb-[48px]">
      <div className="flex justify-between w-[996px]">
        <div className="flex gap-3">
          <Binoculars className="text-ignite-green-100" size={32} />
          <h1 className="text-2xl font-bold text-ignite-gray-100">Explorar</h1>
        </div>
        <div className="py-[14px] flex items-center gap-5 w-full max-w-[433px] px-5 bg-ignite-gray-800 border-ignite-gray-500 border rounded-md">
          <input
            className="w-full bg-transparent text-ignite-gray-400"
            type="text"
          />
          <MagnifyingGlass size={20} className="text-ignite-gray-500" />
        </div>
      </div>

      <NavBar />

      <div className="grid grid-cols-3 gap-5 mt-[48px] max-w-[996px]">
        {bookCardContent.map((item) => {
          return (
            <BookCard
              key={item.title}
              title={item.title}
              author={item.author}
              coverImg={item.coverImg}
              category={item.category}
            />
          )
        })}
      </div>
    </section>
  )
}
