'use client'

import { ChartLineUp } from 'phosphor-react'
import { CardFeed } from './components/CardFeed'
import { CardPopularBook } from './components/CardPopularBook'

export default function Home() {
  return (
    <section>
      <header className="flex items-center gap-4">
        <ChartLineUp className="text-ignite-green-100" size={32} />
        <h1 className="text-2xl font-bold text-ignite-gray-100">Início</h1>
      </header>
      <div className="grid grid-cols-[1fr_324px]">
        <div className="mt-10">
          <span className="text-sm text-ignite-gray-100">
            Avaliações mais recentes
          </span>

          <CardFeed />
        </div>

        <div className="mt-10 ml-16">
          <span className="text-sm text-ignite-gray-100">Livros populares</span>

          <CardPopularBook />
        </div>
      </div>
    </section>
  )
}
