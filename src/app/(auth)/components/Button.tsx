import Image from 'next/image'

import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  Icon: string
}

export function Button({ children, Icon, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center gap-5 px-6 py-5 mt-4 bg-ignite-gray-600 rounded-lg"
    >
      <Image src={Icon} width={32} height={32} alt="" />{' '}
      <span className="text-ignite-gray-200 font-bold">{children}</span>
    </button>
  )
}
