import { ReactNode } from 'react'

interface bigboxprops {
  children: ReactNode
}

export default function Container({ children }: bigboxprops) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {children}
    </div>
  )
}
