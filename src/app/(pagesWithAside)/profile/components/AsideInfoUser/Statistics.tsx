'use client'

import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'

export function Statistics() {
  return (
    <div className="mt-8 flex flex-col items-center gap-10">
      <div className="flex items-center gap-5">
        <BookOpen className="text-ignite-green-100" size={32} />
        <div className="flex flex-col">
          <strong className="text-ignite-gray-200 font-bold">3853</strong>
          <span className="text-ignite-gray-400">Páginas lidas</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Books className="text-ignite-green-100" size={32} />
        <div className="flex flex-col">
          <strong className="text-ignite-gray-200 font-bold">3853</strong>
          <span className="text-ignite-gray-400">Páginas lidas</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <UserList className="text-ignite-green-100" size={32} />
        <div className="flex flex-col">
          <strong className="text-ignite-gray-200 font-bold">3853</strong>
          <span className="text-ignite-gray-400">Páginas lidas</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <BookmarkSimple className="text-ignite-green-100" size={32} />
        <div className="flex flex-col">
          <strong className="text-ignite-gray-200 font-bold">3853</strong>
          <span className="text-ignite-gray-400">Páginas lidas</span>
        </div>
      </div>
    </div>
  )
}
