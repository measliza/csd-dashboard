import React from 'react'
import Aside from '../components/Aside'
import MenuHeader from '../components/Menu/MenuHeader'
import MenuDashboard from '../components/Menu/MenuDashboard'

const Menu = () => {
  return (
    <div id="main-wrapper" class=" flex">
        <Aside/>

        <div class=" w-full page-wrapper overflow-hidden">
            <MenuHeader/>
            <MenuDashboard/>
        </div>
    </div>
  )
}

export default Menu