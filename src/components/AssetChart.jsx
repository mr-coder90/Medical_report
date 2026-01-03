import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const AssetChart = () => {
  const data = [
    { name: 'Working Assets', value: 150 },
    { name: 'Not working Assets', value: 7 },
    { name: 'Discarded', value: 43 },
  ]

  const COLORS = ['#1e3a8a', '#c26785', '#56abf8']

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-center h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-2 mt-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS[idx] }}></div>
            <span className="text-sm text-gray-700">{item.name}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-4 pt-2 border-t border-gray-200">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <span className="text-xs text-gray-600">Not Working Assets - 7</span>
        </div>
      </div>
    </div>
  )
}

export default AssetChart
