import React from 'react'

const StatsCard = ({ title, value, subtitle, items, bgColor = 'bg-white', headerColor, children }) => {
  const isWhite = bgColor === 'bg-white'

  // If headerColor is provided, use the split layout (Header + Body)
  if (headerColor) {
    return (
      <div className={`${bgColor} rounded-2xl shadow-sm overflow-hidden h-full flex flex-col`}>
        <div className={`${headerColor} px-6 py-4 border-b border-gray-100`}>
          <h3 className={`text-lg font-bold ${isWhite ? 'text-gray-900' : 'text-white'}`}>{title}</h3>
          {subtitle && <p className={`text-sm ${isWhite ? 'text-gray-600' : 'text-white'}`}>{subtitle}</p>}
        </div>

        <div className="p-6 flex-1">
          {value && <p className={`text-3xl font-bold ${isWhite ? 'text-gray-900' : 'text-white'} mb-4`}>{value}</p>}
          {items && (
            <div className={`space-y-2 ${value ? '' : ''}`}>
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className={`text-sm ${isWhite ? 'text-gray-700' : 'text-white'}`}>{item.label}</span>
                  <span className={`font-semibold ${isWhite ? 'text-gray-900' : 'text-white'}`}>{item.value}</span>
                </div>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    )
  }

  // Original layout for cards without headerColor (Total Asset, etc)
  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-sm`}>
      {isWhite ? (
        <>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600 mb-4">{subtitle}</p>}
          {value && <p className="text-3xl font-bold text-gray-900">{value}</p>}
          {items && (
            <div className="space-y-2 mt-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{item.label}</span>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          )}
          {children}
        </>
      ) : (
        <>
          <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
          {subtitle && <p className="text-sm text-white mb-2">{subtitle}</p>}
          {value && <p className="text-4xl font-bold text-white mt-2">{value}</p>}
          {items && (
            <div className="space-y-2 mt-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-sm text-white">{item.label}</span>
                  <span className="text-white font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          )}
          {children}
        </>
      )}
    </div>
  )
}

export default StatsCard
