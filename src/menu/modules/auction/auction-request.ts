const pre = '/auction-request'

export default {
  path: `${pre}`,
  title: '$t:menu.auctionRequest',
  header: 'auction',
  icon: 'md-help',
  auth: [
    'Supplier Principal',
    'Supplier Staff',
    'Customer Principal',
    'Customer Staff',
  ],
  children: [
    {
      path: `${pre}/list`,
      title: '$t:page.auction.auctionRequestList',
      auth: ['hidden'],
    },
    {
      path: `${pre}/:id`,
      title: '$t:menu.auctionRequestDetails',
      auth: ['hidden'],
    },
  ],
}
