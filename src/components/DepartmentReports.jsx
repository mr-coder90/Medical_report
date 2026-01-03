import React from 'react'

const DepartmentReports = ({ title, departments }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-6">{title}</h3>

      <div className="space-y-8">
        {departments.map((dept, idx) => (
          <div key={idx}>
            <div className={`${dept.bgColor} rounded-lg px-6 py-4 mb-4`}>
              <h4 className={`text-lg font-bold ${dept.textColor}`}>{dept.name}</h4>
              <p className={`text-sm ${dept.textColor} mt-1`}>
                Incidents Reported: {dept.reported}<br />
                Incidents Open: {dept.open}<br />
                Total Downtime: {dept.downtime}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dept.assets.map((asset, aIdx) => (
                <div key={aIdx} className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-900">→</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="font-semibold text-gray-900">{asset.name}</div>
                    <div className="bg-green-500">Code: {asset.code}</div>
                    <div className="text-gray-600">Start: {asset.startDate}</div>
                    <div className="text-gray-600">Clear: {asset.clearDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentReports
