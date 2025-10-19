const pre = '/accounts-settings'

export default {
  path: `${pre}`,
  title: '$t:menu.accountsSettings',
  header: 'admin',
  icon: 'ios-people',
  auth: ['Super Admin'],
  children: [
    {
      path: `${pre}/user-accounts`,
      title: '$t:menu.userAccounts',
    },
    {
      path: `${pre}/create-user-account`,
      title: '$t:menu.createUserAccount',
      auth: ['hidden'],
    },
    {
      path: `${pre}/user-accounts/:id`,
      title: '$t:menu.manageUserAccounts',
      auth: ['hidden'],
    },
    {
      path: `${pre}/users`,
      title: '$t:menu.users',
    },
  ],
}
