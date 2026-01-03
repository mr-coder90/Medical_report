import React, { useState } from 'react'

const Header = ({ onToggleSidebar }) => {
  const [currentMonth, setCurrentMonth] = useState('June 2025')

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 p-2 mr-2"
              onClick={onToggleSidebar}
            >
              <span className="text-xl">☰</span>
            </button>

            <button className="hidden md:block text-gray-400 hover:text-gray-600">←</button>
            <div className="text-sm text-gray-600 flex items-center gap-1">
              <span className="font-bold text-gray-900">Reports / </span>
              <span className="text-blue-500 font-semibold truncate max-w-[100px] md:max-w-none">Bio Medical</span>
            </div>
            <button className="hidden md:block text-gray-400 hover:text-gray-600">→</button>
          </div>

          <div className="flex items-center gap-2 md:gap-4">

            <div className="hidden md:flex items-center gap-3">
              <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">NB</div>
              <span className="text-sm text-gray-700">Non Bio Medical</span>
            </div>
            <div className="hidden md:flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
              <span className="text-sm text-gray-700">Vijayanagar</span>
              <span className="text-lg">▼</span>
            </div>
            <button className="hidden md:block text-gray-600 hover:text-gray-900">⊞</button>
            <button className="text-gray-600 hover:text-gray-900">🔔</button>
            <div className="bg-gray-900 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white font-bold text-sm">A</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex justify-between w-full md:w-auto">
            <span className="text-2xl font-medium md:hidden">Vajra</span>
            <h1 className="text-xl md:text-2xl md:mx-51 font-bold text-gray-900">Monthly Report</h1>
          </div>

          <div className="hidden md:block">
            <span className="text-2xl font-medium">Vajra</span>
          </div>

          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-between md:justify-end">

            <span className="text-sm font-medium text-gray-700">{currentMonth}📅</span>
            <button className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-2">
              <span>Download PDF</span>
              <span>⬇️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
