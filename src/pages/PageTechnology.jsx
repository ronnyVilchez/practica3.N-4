import React from 'react'
import { Layout } from '../Layouts/Layout'
import Technology from '../components/Technology/Technology'

export const PageTechnology = () => {
    return (
        <main className={`bg-technology w-full h-screen font-bellefair`} >
            <Layout>
               <Technology/>
            </Layout>
        </main>
    )
}
