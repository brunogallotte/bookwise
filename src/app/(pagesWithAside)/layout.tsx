import Image from 'next/image'
import bookLogo from '@/assets/logo.png'
import glowLeft from '@/assets/glowLeft.png'
import glowRight from '@/assets/glowRight.png'
import { NavBar } from '@/app/(pagesWithAside)/components/NavBar'
import { Footer } from './components/FooterAside'

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex max-w-[1440px] w-full mx-auto">
      <aside className="relative flex flex-col items-center w-[232px] pt-10 m-5 min-h-[calc(100vh-40px)] bg-gradient-to-t from-ignite-gray-700 via-ignite-gray-700 to-ignite-gray-800 rounded-xl overflow-hidden">
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

        <NavBar />

        <Footer />
      </aside>

      <main className="pt-[72px] ml-[76px]">{children}</main>
    </div>
  )
}
