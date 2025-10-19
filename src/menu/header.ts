// 菜单，顶栏

export default [
  {
    path: '/home',
    title: '$t:menu.auction',
    icon: 'logo-usd',
    hideSider: false,
    name: 'home',
    auth: [
      'Supplier Principal',
      'Supplier Staff',
      'Customer Principal',
      'Customer Staff',
      'Sub Customer Principal',
      'Sub Customer Staff',
    ],
  },
  {
    path: '/roles-permissions/role-list',
    title: '$t:menu.admin',
    icon: 'ios-construct',
    hideSider: false,
    name: 'admin',
    auth: ['Super Admin'],
  },
]
