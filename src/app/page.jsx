import Image from 'next/image'
import Header from '../components/Header/header'
import Button from '../components/Button/button'
import Cross from '../components/Xo/cross'
import DarkMode from '../components/DarkMode/darkmode'
import ThemeProvider from '../components/Context/ThemeContext'

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        
          
          <Header />
          <Button url="/about" text={'about'} />
          <Cross/>
        
      </div>
    </ThemeProvider>
  )
}
