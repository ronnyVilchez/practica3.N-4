import React from 'react'
import { Layout } from '../Layouts/Layout'
import Crew from '../components/Crew/Crew'

export const PageCrew = () => {
  return (
    <main className={`bg-crew w-full h-screen font-Barlow`} >
        <Layout>
        <Crew/>
        </Layout>
    </main>
  )
}
