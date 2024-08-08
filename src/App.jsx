import React from 'react'
import { PageHome } from './pages/PageHome'
import { Route, Routes } from 'react-router-dom'
import { PageDestination } from './pages/PageDestination'
import { PageCrew } from './pages/PageCrew'
import { PageTechnology } from './pages/PageTechnology'
import { Moon } from './components/Destination/Moon'
import { Mars } from './components/Destination/Mars'
import { Europa } from './components/Destination/Europa'
import { Titan } from './components/Destination/Titan'
import { Commander } from './components/Crew/Commander'
import { Specialist } from './components/Crew/Specialist'
import { Pilot } from './components/Crew/Pilot'
import { Engineer } from './components/Crew/Engineer'
import { Vehicle } from './components/Technology/Vehicle'
import { Spaceport } from './components/Technology/Spaceport'
import { Capsule } from './components/Technology/Capsule'

export default function App() {
  return (
    <Routes>
      <Route path='/home' element={<PageHome />} />
      <Route path='*' element={<PageHome />} />

      <Route path='/destination' element={<PageDestination />}>
        <Route path='Moon' element={<Moon />} />
        <Route path='Mars' element={<Mars />} />
        <Route path='Europa' element={<Europa />} />
        <Route path='Titan' element={<Titan />} />
      </Route>

      <Route path='/crew' element={<PageCrew />}>
        <Route path='commander' element={<Commander />} />
        <Route path='specialist' element={<Specialist />} />
        <Route path='pilot' element={<Pilot />} />
        <Route path='engineer' element={<Engineer />} />

      </Route>

      <Route path='/technology' element={<PageTechnology />}>
        <Route path='vehicle' element={<Vehicle />} />
        <Route path='spaceport' element={<Spaceport />} />
        <Route path='capsule' element={<Capsule />} />
      </Route>

    </Routes>

  )
}
