'use client'

import { ChartLineUp, Binoculars } from 'phosphor-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col w-[97px] gap-4 items-start mt-16 z-10">
      {pathNames.map((item) => {
        return (
          <Link
            key={item.path}
            className="relative flex py-2 items-center gap-3"
            href={item.path}
          >
            <item.icon
              className={`${pathname === item.path ? 'text-ignite-gray-100' : 'text-ignite-gray-400'}`}
              size={24}
            />
            <span
              className={`${pathname === item.path || (item.path === '/home' && pathname === '/profile') ? 'text-ignite-gray-100 font-bold' : 'text-ignite-gray-400'}`}
            >
              {item.name}
            </span>
            {pathname === item.path ||
            (item.path === '/home' && pathname === '/profile') ? (
              <motion.div
                layoutId="tabActive"
                className="absolute left-[-32px] w-1 h-6 bg-gradient-to-b from-[#7FD1CC] to-[#9694F5] rounded-[999px] "
              />
            ) : null}
          </Link>
        )
      })}
    </nav>
  )
}

const pathNames = [
  {
    name: 'Home',
    path: '/home',
    icon: ChartLineUp,
  },
  {
    name: 'Explore',
    path: '/explore',
    icon: Binoculars,
  },
]
