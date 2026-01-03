export const institutionInfo = {
  name: 'Sri siddhartha institute of medical science',
  location: 'Vijayanagar'
}

export const assetStats = {
  total: 200,
  checkIns: 0,
  checkOuts: 25
}

export const incidentStats = {
  reported: 22,
  totalDowntime: '12 mins 10 sec',
  closed: 19,
  open: 3,
  budgetSpent: '3,00,000'
}

export const workOrderStats = {
  total: 17,
  closed: 14,
  open: 3,
  budgetSpent: '3,00,000'
}

export const incidentByDepartment = [
  { name: 'Neonatal intensive care unit', open: 20, closed: 7 },
  { name: 'Radiology', open: 6, closed: 8 },
  { name: 'Nursing Department', open: 10, closed: 9 },
  { name: 'Trauma and Emergency care', open: 6, closed: 4 },
  { name: 'Oncology', open: 2, closed: 3 }
]

export const workOrderByDepartment = [
  { name: 'Neonatal intensive care unit', open: 20, closed: 7 },
  { name: 'Radiology', open: 6, closed: 8 },
  { name: 'Nursing Department', open: 10, closed: 9 },
  { name: 'Trauma and Emergency care', open: 6, closed: 4 },
  { name: 'Oncology', open: 2, closed: 3 }
]

export const departmentReportData = [
  {
    type: 'Incident Reported per department',
    departments: [
      {
        name: 'Department: Anesthesiology',
        reported: 5,
        open: 20,
        downtime: '7 min 22 sec',
        bgColor: 'bg-blue-500',
        textColor: 'text-white',
        assets: [
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: CT scan', code: 'A001234', startDate: '18-06-2025', clearDate: '19-06-2025' },
        ]
      },
      {
        name: 'Department: Radiology',
        reported: 5,
        open: 20,
        downtime: '7 min 22 sec',
        bgColor: 'bg-blue-500',
        textColor: 'text-white',
        assets: [
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: CT scan', code: 'A001234', startDate: '18-06-2025', clearDate: '19-06-2025' },
        ]
      }
    ]
  },
  {
    type: 'Work order Reported per department',
    departments: [
      {
        name: 'Department: Dermatology',
        reported: 5,
        open: 20,
        downtime: '7 min 22 sec',
        bgColor: 'bg-gray-900',
        textColor: 'text-white',
        assets: [
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: CT scan', code: 'A001234', startDate: '18-06-2025', clearDate: '19-06-2025' },
        ]
      },
      {
        name: 'Department: Gynacology',
        reported: 5,
        open: 20,
        downtime: '7 min 22 sec',
        bgColor: 'bg-gray-900',
        textColor: 'text-white',
        assets: [
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
          { name: 'Asset name: CT scan', code: 'A001234', startDate: '18-06-2025', clearDate: '19-06-2025' },
        ]
      }
    ]
  }
]

export const chartsData = {
  incidents: [
    { name: 'Neonatal intensive care unit', open: 20, closed: 7 },
    { name: 'Radiology', open: 6, closed: 8 },
    { name: 'Nursing Department', open: 10, closed: 9 },
    { name: 'Trauma and Emergency care', open: 6, closed: 4 },
    { name: 'Oncology', open: 2, closed: 3 }
  ],
  workOrder: [
    { name: 'Neonatal intensive care unit', open: 20, closed: 7 },
    { name: 'Radiology', open: 6, closed: 8 },
    { name: 'Nursing Department', open: 10, closed: 9 },
    { name: 'Trauma and Emergency care', open: 6, closed: 4 },
    { name: 'Oncology', open: 2, closed: 3 }
  ]
}
