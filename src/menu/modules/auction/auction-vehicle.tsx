import { without } from 'lodash-es'
import { IconHome } from '@douyinfe/semi-icons'

const pre = '/auction-vehicle'

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
  title: 'auctionVehicles',
  header: 'home',
  icon: <IconHome />,
  auth,
  children: [
    {
      path: `${pre}/:id`,
      title: 'auctionVehicleDetails',
      auth: ['hidden'],
    },
    {
      path: `/home`,
      title: 'currentAuctions',
      auth,
    },
    {
      path: `${pre}/auction-number`,
      title: 'auctionNumberSearch',
      auth,
    },
    {
      path: `${pre}/auction-history`,
      title: 'auctionHistory',
      auth: without(auth, 'Sub Customer Principal', 'Sub Customer Staff'),
    },
  ],
}
