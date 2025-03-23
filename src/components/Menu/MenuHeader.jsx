import React, { useState } from 'react'
import MenuModal from './MenuModal'

const MenuHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="container full-container w-full text-sm py-5 xl:px-9 px-5 border-b-2 border-b-gray-900">
        <nav className="w-full flex items-center justify-start gap-4" aria-label="Global">
          <div className="relative xl:hidden">
              <a className="text-xl cursor-pointer text-heading"
                  id="headerCollapse" data-hs-overlay="#application-sidebar-brand"
                  aria-controls="application-sidebar-brand" aria-label="Toggle navigation" href="javascript:void(0)">
                  <i className="ti ti-menu-2 relative z-1"></i>
              </a>
            </div>
            <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700"
                  aria-current="page"
                >
                  Add menu
                </button>
            </div>
        </nav>
        {isModalOpen && <MenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </header>
  )
}

export default MenuHeader