'use client'

import { useState } from 'react'

type navContent = {
  category: string
}

export function NavBar() {
  const [itemActive, setItemActive] = useState<navContent>({ category: 'Tudo' })

  function handleItemActive(item: navContent) {
    setItemActive(item)
  }

  return (
    <nav className="flex gap-3 mt-10">
      {navContent.map((item) => {
        return (
          <button
            key={item.category}
            className={`py-1 px-4 ${itemActive.category === item.category ? 'bg-ignite-purple-200 text-ignite-gray-100 border border-ignite-purple-200' : 'bg-transparent text-ignite-purple-100 border border-ignite-purple-100'} rounded-full`}
            onClick={() => handleItemActive(item)}
          >
            {item.category}
          </button>
        )
      })}
    </nav>
  )
}

const navContent: navContent[] = [
  {
    category: 'Tudo',
  },
  {
    category: 'Computação',
  },
  {
    category: 'Educação',
  },
  {
    category: 'Fantasia',
  },
  {
    category: 'Ficção Científica',
  },
  {
    category: 'Horror',
  },
  {
    category: 'HQs',
  },
  {
    category: 'Suspense',
  },
]
