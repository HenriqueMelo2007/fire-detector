import { ReactNode } from 'react'

interface containerprops {
  children: ReactNode
}

export default function Container({ children }: containerprops) {
  return (
    <div className="min-h-screen w-screen flex justify-between items-center px-12 mb-5">
      {children}
    </div>
  )
}
