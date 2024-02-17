import { Avatar } from '../../../components/Avatar'
import { Statistics } from './Statistics'

export function AsideInfoUser() {
  return (
    <div className="flex flex-col items-center mt-4 px-5 py-4 w-[324px] border-l border-ignite-gray-700">
      <div className="flex w-full justify-center">
        <Avatar
          avatarUrl="https://github.com/brunogallotte.png"
          width={72}
          height={72}
        />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <strong className="mt-5 text-xl text-ignite-gray-100 font-bold">
          Username
        </strong>
        <span className="text-sm text-ignite-gray-400">membro desde 2019</span>
      </div>

      <div className="mt-8 w-8 h-1 rounded-full bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]" />

      <Statistics />
    </div>
  )
}
