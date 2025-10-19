const pre = '/purchase-intents'

const meta = {
  auth: [
    'Supplier Principal',
    'Supplier Staff',
    'Customer Principal',
    'Customer Staff',
  ],
}

export default {
  path: `${pre}`,
  title: '$t:menu.purchaseIntents',
  header: 'auction',
  icon: 'md-paper',
  ...meta,
  children: [
    {
      path: `${pre}/:id`,
      title: '$t:menu.purchaseIntentsDetails',
      auth: ['hidden'],
    },
    {
      path: `${pre}/create`,
      title: '$t:menu.createPurchaseIntents',
      auth: ['hidden'],
    },
  ],
}
