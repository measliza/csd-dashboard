import React from 'react'
import Aside from '../components/Aside'
import ImageBody from '../components/Image/ImageBody'

const Image = () => {
  return (
    <div id="main-wrapper" class=" flex">
        <Aside/>

        <div class=" w-full page-wrapper overflow-hidden">
          <ImageBody/>
        </div>
    </div>
  )
}

export default Image