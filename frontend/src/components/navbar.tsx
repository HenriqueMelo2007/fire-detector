import Btn from './btn'

export default function NavBar() {
  return (
    <nav className='flex justify-between py-4 px-12 font-bold text-center'>
      <h1 className='text-2xl'>Fire Detector - Thermophilic</h1>
      <div className='flex gap-10'>
        <Btn href="/signup" text="Sign up" bg='bg-gray-400'></Btn>
        <Btn href="/login" text="Login" bg='bg-gray-400'></Btn>
      </div>
    </nav>
  )
}
