import logo from '@/assets/Logo.png'
import Image from 'next/image'
import googleIcon from '@/assets/googleIcon.svg'
import githubIcon from '@/assets/githubIcon.svg'
import rocketIcon from '@/assets/rocketIcon.svg'
import { Button } from './components/Button'

export default function Auth() {
  return (
    <div className="flex items-center justify-center bg-ignite-gray-800 min-h-screen">
      <div className="flex w-full max-w-[1440px] mx-auto">
        <div className="flex items-center w-full justify-center rounded-lg max-w-[598px] min-h-[912px] bg-[url('../assets/backgroundImage.webp')]">
          <Image src={logo} width={232} height={58} alt="BookWise" />
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="flex flex-col w-full max-w-[372px]">
            <h1 className="text-2xl text-ignite-gray-100 font-bold">
              Boas vindas
            </h1>
            <p className="text-gray-200/[25.6px]">
              Faça seu login ou acesse como visitante
            </p>
            <div className="flex flex-col mt-4 w-full">
              <Button Icon={googleIcon}>Entrar com Google</Button>
              <Button Icon={githubIcon}>Entrar com GitHub</Button>
              <Button Icon={rocketIcon}>Acessar como visitante</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
