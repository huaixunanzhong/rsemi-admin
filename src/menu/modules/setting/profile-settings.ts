const pre = '/profile-settings'

export default {
  path: '/profile-settings',
  title: '$t:menu.settings',
  header: 'setting',
  icon: 'ios-settings',
  children: [
    {
      path: `${pre}/profile`,
      title: '$t:menu.profile',
    },
    {
      path: `${pre}/security`,
      title: '$t:menu.security',
    },
    {
      path: `${pre}/email-verify`,
      title: '$t:menu.emailVerify',
      auth: ['hidden'],
    },
    {
      path: `${pre}/manage-tokens`,
      title: '$t:menu.manageTokens',
      auth: ['Supplier Principal'],
    },
  ],
}
