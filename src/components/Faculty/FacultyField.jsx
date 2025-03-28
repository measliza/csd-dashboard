import React from 'react'
import Aside from '../Aside'
import FacultyFieldHeader from './FacultyFieldHeader'
import FacultyFieldBody from './FacultyFieldBody'

const FacultyField = () => {
    return (
        <div id="main-wrapper" class=" flex">
            <Aside/>

            <div class=" w-full page-wrapper overflow-hidden">
                <FacultyFieldHeader/>
                <FacultyFieldBody/>
            </div>
        </div>
    )
}

export default FacultyField