const pre = '/chinese-vehicles'

const auth = ['Super Admin']

export default {
  path: `${pre}`,
  title: '$t:menu.chineseVehicles',
  header: 'admin',
  icon: 'md-car',
  auth,
  children: [
    {
      path: `${pre}/car-list`,
      title: '$t:menu.vehicles',
    },
    {
      path: `${pre}/import-task-list`,
      title: '$t:menu.importTasks',
    },
  ],
}
