import React from 'react'
import { Layout } from '../Layouts/Layout'
import Destination from '../components/Destination/Destination'

export const PageDestination = () => {
    return (
        <main className={`bg-destination w-full h-screen font-bellefair`} >
            <Layout>
                <Destination/>
            </Layout>
        </main>
    )
}
