'use client'

import { Star } from 'phosphor-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface StarsProps extends ComponentProps<'div'> {
  className?: string
}

export function Stars({ className, ...props }: StarsProps) {
  return (
    <div {...props} className={twMerge('flex gap-1', className)}>
      <Star className="text-ignite-purple-100" />
      <Star className="text-ignite-purple-100" />
      <Star className="text-ignite-purple-100" />
      <Star className="text-ignite-purple-100" />
      <Star className="text-ignite-purple-100" />
    </div>
  )
}
