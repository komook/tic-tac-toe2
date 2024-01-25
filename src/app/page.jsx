import Header from '../components/Header/header'
import Cross from '../components/Xo/cross'
import ThemeProvider from '../components/Context/ThemeContext'

export default function Home() {
  return (
    <ThemeProvider>
      <div>
          <Header/>
          <Cross/>
      </div>
    </ThemeProvider>
  )
}
