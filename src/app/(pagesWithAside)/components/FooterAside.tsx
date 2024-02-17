'use client'

import { SignIn } from 'phosphor-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-auto pb-6">
      <Link className="flex gap-3" href="/">
        <span className="text-ignite-gray-200">Fazer login</span>
        <SignIn className="text-ignite-green-100" size={24} />
      </Link>
    </footer>
  )
}
