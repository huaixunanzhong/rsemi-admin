const pre = '/auction-task'
export default {
  path: `${pre}`,
  title: '$t:menu.auctionTask',
  header: 'auction',
  icon: 'md-done-all',
  auth: ['Supplier Principal', 'Supplier Staff'],
  children: [
    {
      path: `${pre}/:id`,
      title: '$t:menu.auctionTaskDetails',
      auth: ['hidden'],
    },
  ],
}
