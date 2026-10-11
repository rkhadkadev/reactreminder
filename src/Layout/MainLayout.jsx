import React from 'react'
import Header from '../components/Header.jsx'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <main className='max-w-6xl mx-auto'>
    <Header />
    <section className='container mx-auto py-24 px -6'>
        <Outlet />
    </section>
    </main>
  )
}

export default MainLayout
