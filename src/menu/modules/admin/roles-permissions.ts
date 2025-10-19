const pre = '/roles-permissions/'

export default {
  path: '/roles-permissions',
  title: '$t:menu.rolesPermissions',
  header: 'admin',
  icon: 'md-key',
  auth: ['Super Admin'],
  children: [
    {
      path: `${pre}role-list`,
      title: '$t:menu.roleList',
    },
    {
      path: `${pre}:id`,
      title: '$t:menu.manageRole',
      auth: ['hidden'],
    },
  ],
}
