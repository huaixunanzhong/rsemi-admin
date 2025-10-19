import { without } from 'lodash-es'

const pre = '/chinese-vehicles'

const auth = [
  'Supplier Principal',
  'Supplier Staff',
  'Customer Principal',
  'Customer Staff',
  'Sub Customer Principal',
  'Sub Customer Staff',
]

export default {
  path: `${pre}`,
  title: '$t:menu.chineseVehicles',
  header: 'auction',
  icon: 'md-car',
  auth,
  children: [
    {
      path: `${pre}/:id`,
      title: '$t:menu.chineseVehicleDetails',
      auth: ['hidden'],
    },
    {
      path: `${pre}/current-auctions`,
      title: '$t:menu.currentAuctions',
      auth,
    },
    {
      path: `${pre}/auction-number`,
      title: '$t:menu.auctionNumberSearch',
      auth,
    },
    {
      path: `${pre}/auction-history`,
      title: '$t:menu.auctionHistory',
      auth: without(auth, 'Sub Customer Principal', 'Sub Customer Staff'),
    },
  ],
}
