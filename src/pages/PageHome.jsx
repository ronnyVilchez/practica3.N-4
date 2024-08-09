import React from 'react'
import { Layout } from '../Layouts/Layout'
import { Home } from '../components/Home'

export const PageHome = () => {
  return (
    <main className={`bg-home w-full h-screen font-Barlow`} >
        <Layout>
            <Home/>
        </Layout>
    </main>
  )
}
