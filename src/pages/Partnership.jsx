import React from 'react'
import Aside from '../components/Aside'
import PartnershipHeader from '../components/Partnership/PartnershipHeader'
import PartnershipDashboard from '../components/Partnership/PartnershipDashboard'

const Partnership = () => {
    return (
        <div id="main-wrapper" className=" flex">
            <Aside/>

            <div className=" w-full page-wrapper overflow-hidden">
                <PartnershipHeader/>
                <PartnershipDashboard/>
            </div>
        </div>
    )
}

export default Partnership