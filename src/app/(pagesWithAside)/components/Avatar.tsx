import Image from 'next/image'

interface AvatarProps {
  avatarUrl: string
  width: number
  height: number
}

export function Avatar({ avatarUrl, width, height }: AvatarProps) {
  return (
    <div
      className={`flex justify-center items-center w-[${String(width + 'px')}] p-px bg-gradient-to-b from-[#7FD1CC] to-[#9694F5] rounded-full box-border`}
    >
      <Image
        src={avatarUrl}
        width={width}
        height={height}
        alt="Imagem de perfil"
        className={`w-[${String(width + 'px')}] rounded-full object-cover`}
      />
    </div>
  )
}
