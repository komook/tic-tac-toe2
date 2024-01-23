'use client'
import styles from './header.module.css'

import Link from "next/link";
import DarkMode from '../DarkMode/darkmode'

function Header() {
    const links = [
        {
          id: 1,
          title: "Играть",
          url: "/",
        },
        {
          id: 2,
          title: "Чат",
          url: "/chat",
        },
        {
          id: 3,
          title: "Об игре",
          url: "/about",
        },
        {
          id: 4,
          title: "Войти",
          url: "/login",
        },
        
      ];
      

      
  return (
    <div className={styles.container}>
              <DarkMode />
        {links.map((link) =>(
            <Link key={link.id} href={link.url}>{link.title} </Link>
        ))}
       
    </div>
  )
}

export default Header