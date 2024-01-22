import Header from '@/components/Header/header'
import React from 'react'
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
    
    <div className='mt-0 mb-0 mr-auto ml-auto max-w-7xl'>
      <Header/>
      <p> {users.body}</p>
    </div>
  )
}

export default Blog