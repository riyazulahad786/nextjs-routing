"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {


  const [user,setUser] = useState([]);
  const getData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const result = await response.json()
    console.log(result)
    setUser(result)
  }
  return (
   <main>
   <button onClick={getData}>click</button>
   <div>
   <ul>
   {
      user && user.length>0 && user.map((item)=>(
       <li>{item.username} ---------<Link href={`/${item.id}`}>more info</Link></li>
      ))
    }
   </ul>
   </div>
   </main>
  )
}
