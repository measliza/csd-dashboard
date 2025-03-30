import React from 'react'
import Aside from '../Aside'
import ResearchFieldHeader from './ResearchFieldHeader'
import ResearchFieldBody from './ResearchFieldBody'

const ResearchField = () => {
    return (
        <div id="main-wrapper" className=" flex">
            <Aside/>

            <div className=" w-full page-wrapper overflow-hidden">
                <ResearchFieldHeader />
                <ResearchFieldBody />
            </div>
        </div>
    )
}

export default ResearchField