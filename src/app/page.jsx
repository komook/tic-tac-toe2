import Image from 'next/image'
import Header from '../components/Header/header'
import Button from '../components/Button/button'
import Cross from '../components/Xo/cross'
export default function Home() {
  return (
    <div className='mt-0 mb-0 mr-auto ml-auto max-w-7xl'>
      
      <Header/>
      <Button url="/about" text={'about'} />
      <Cross/>
    </div>
  )
}
