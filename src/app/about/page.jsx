import Header from '@/components/Header/header'
import React from 'react'
import ThemeProvider from "@/components/Context/ThemeContext"

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
const Blog = async () => {
  const  data = await getData()
  const users = data[1]
  
  return (
    <ThemeProvider>
      <div className=''>
      
          <Header/>
          <p> {users.body}</p>
      </div>
    </ThemeProvider>
  
  )
}

export default Blog