import React from 'react'

const Sidebar = ({ onClose }) => {
  const menuItems = [
    { id: 1, label: 'Dashboard', icon: '📊' },
    { id: 2, label: 'Assets', icon: '📦' },
    { id: 3, label: 'Incidents', icon: '⚠️' },
    { id: 4, label: 'Services', icon: '🔧' },
    { id: 5, label: 'Request', icon: '📝' },
    { id: 6, label: 'Users', icon: '👥' },
    { id: 7, label: 'Reports', icon: '📈' },
  ]

  return (
    <div className="w-64 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col shadow-xl">
      <div className="p-6 border-b border-gray-700 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Vajra</div>
        <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white">
          ✕
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-8 space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="sidebar-item px-6 py-4 hover:bg-gray-700 transition-colors cursor-pointer"
            onClick={onClose}
          >
            <span className="text-xl mr-4">{item.icon}</span>
            <span className="text-sm font-bold">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="p-6 border-t border-gray-700 space-y-3">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors">
          <span>📞</span>
          <span>Contact us</span>
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-colors">
          <span>🚪</span>
          <span>Log Out</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
