import React from 'react'
import StatsCard from './StatsCard'
import AssetChart from './AssetChart'
import ChartSection from './ChartSection'
import DepartmentReports from './DepartmentReports'
import {
  institutionInfo,
  assetStats,
  incidentStats,
  workOrderStats,
  chartsData,
  departmentReportData
} from '../data/mockData'

const DashboardContent = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
      <div className="max-w-7xl space-y-8">
        {/* Institution Info & Asset Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 width-full">
          {/* Institution Card */}
          <div className="bg-blue-900 rounded-2xl text-white shadow-sm space-y-4">
            <div className="flex items-center gap-4 mt-7 space-x-3">
              <div>
                <h3 className="font-bold text-lg">🏥{institutionInfo.name}</h3>
                <div className="flex gap-2 text-xl mt-2 mx-6 mt-8">
                  <p className="text-sm">📍{institutionInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Asset Doughnut Chart */}
          <AssetChart />

          {/* Check outs Stats */}
          <div className="grid gap-2 space-y-0">
            <StatsCard
              title="Total Asset"
              value={assetStats.total}
              bgColor="bg-pink-500"
            />
            {/* Empty div was removing layout flow, removing or replacing with something else if needed, but here it acted as spacer? */}
            <StatsCard
              title="Check outs"
              items={[
                { label: 'Checked In', value: assetStats.checkIns },
                { label: 'Checked Out', value: assetStats.checkOuts }
              ]}
            />
          </div>
        </div>

        {/* Incidents and Work Order Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Incidents */}
          <StatsCard
            title="Incidents"
            headerColor="bg-blue-100"
            items={[
              { label: 'Incidents', value: `${incidentStats.reported} Reported` },
              { label: 'Total Downtime', value: incidentStats.totalDowntime },
              { label: 'Closed', value: incidentStats.closed },
              { label: 'Open', value: incidentStats.open },
              { label: 'Budget spent', value: `₹ ${incidentStats.budgetSpent}` }
            ]}
          />

          {/* Work Order */}
          <StatsCard
            title="Work Order"
            headerColor="bg-blue-100"
            items={[
              { label: 'Work order', value: `${workOrderStats.total} requested` },
              { label: 'Closed', value: workOrderStats.closed },
              { label: 'Open', value: workOrderStats.open },
              { label: 'Budget spent', value: `₹ ${workOrderStats.budgetSpent}` }
            ]}
          />

          {/* Charts area - placeholder for future charts */}
          <StatsCard title="Charts Overview" headerColor="bg-blue-100">
            <div className="grid grid-cols-3 gap-2 text-center h-full items-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">35</p>
                <p className="text-xs text-gray-500 mt-1">Open</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">20</p>
                <p className="text-xs text-gray-500 mt-1">Closed</p>
              </div>
            </div>
          </StatsCard>
        </div>

        {/* Incident Charts Section */}
        <ChartSection
          title="Incident Reported - 12"
          data={chartsData.incidents}
          dataKeys={[
            { name: 'open', color: '#1e3a8a' },
            { name: 'closed', color: '#56abf8' }
          ]}
        />

        {/* Work Order Charts Section */}
        <ChartSection
          title="Work Order Reported - 12"
          data={chartsData.workOrder}
          dataKeys={[
            { name: 'open', color: '#1e3a8a' },
            { name: 'closed', color: '#a5b4fc' }
          ]}
        />

        {/* Department Reports */}
        {departmentReportData.map((section, idx) => (
          <div key={idx}>
            <DepartmentReports
              title={section.type}
              departments={section.departments}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardContent
