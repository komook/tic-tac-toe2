'use client'
import { useContext,  } from 'react'
import styles from './header.module.css'
import { ThemeContext } from '../Context/ThemeContext'

function DarkMode(){
    const {toggle, mode} = useContext(ThemeContext)
    
return(
    <div className={styles.container} onClick={toggle}>
          <div className={styles.around} style={mode === "light" ? {left: "18px"} : {right: "18px"}}></div>
    </div>
)
}

export default DarkMode