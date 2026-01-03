import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardContent from './components/DashboardContent'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Mobile: Fixed, Desktop: Relative */}
      <div className={`
        fixed md:relative inset-y-0 left-0 z-30
        transform md:transform-none transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full relative">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <DashboardContent />
      </div>
    </div>
  )
}

export default App
