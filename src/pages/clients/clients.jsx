import React from 'react'
import { Navbar } from '../../components'
import ClientsSectionOne from './clients-section-one'
import ClientsSectionTwo from './clients-section-two'

import './clients.scss'

export const Clients = () => {
  return (
    <div>
      <Navbar />
      <div>
        <ClientsSectionOne />
        <ClientsSectionTwo />
      </div>
    </div>
  )
}

