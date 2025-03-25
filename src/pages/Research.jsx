import React from 'react'
import Aside from '../components/Aside'
import ResearchHeader from '../components/Research/ResearchHeader'
import ResearchDashboard from '../components/Research/ResearchDashboard'

const Research = () => {
    return (
        <div id="main-wrapper" className=" flex">
            <Aside/>

            <div className=" w-full page-wrapper overflow-hidden">
                <ResearchHeader/>
                <ResearchDashboard/>
            </div>
        </div>
    )
}

export default Research