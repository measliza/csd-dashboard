import React from 'react'

const HomeHeader = () => {
  return (
    <header class="container full-container w-full text-sm py-5 xl:px-9 px-5">
        <nav class=" w-full  flex items-center justify-between" aria-label="Global">
            <div class="flex items-center gap-4">
                <a href="#" class="btn font-medium hover:bg-blue-700 py-2" aria-current="page">Save</a>
            </div>
        </nav>
    </header>
  )
}

export default HomeHeader