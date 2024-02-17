import Image from 'next/image'
import bookLogo from '@/assets/logo.png'
import glowLeft from '@/assets/glowLeft.png'
import glowRight from '@/assets/glowRight.png'

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex bg-ignite-gray-800">
      <aside className="relative flex justify-center w-[232px] pt-10 m-5 min-h-screen bg-gradient-to-t from-ignite-gray-700 via-ignite-gray-700 to-ignite-gray-800 rounded-xl overflow-hidden">
        <Image
          className="w-[128px] h-[32px] z-10"
          src={bookLogo}
          width={128}
          height={32}
          alt="BookWise"
        />
        <Image
          className="absolute top-0 left-0"
          src={glowLeft}
          width={220}
          height={220}
          alt=""
        />
        <Image
          className="absolute top-0 right-0"
          src={glowRight}
          width={220}
          height={220}
          alt=""
        />
      </aside>

      {children}
    </main>
  )
}
