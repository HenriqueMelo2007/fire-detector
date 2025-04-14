import { ReactNode } from 'react'

interface containerprops {
  children: ReactNode
}

export default function Container({ children }: containerprops) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {children}
    </div>
  )
}
