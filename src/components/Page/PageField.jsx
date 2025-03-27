import React from 'react'
import PageFieldHeader from './PageFieldHeader'
import PageFieldBody from './PageFieldBody'
import Aside from '../Aside'

const PageField = () => {
    return (
        <div id="main-wrapper" className=" flex">
            <Aside/>

            <div className=" w-full page-wrapper overflow-hidden">
                <PageFieldHeader />
                <PageFieldBody />
            </div>
        </div>
    )
}

export default PageField