const pre = "/auction-subscriptions";

const auth = ["Customer Principal", "Customer Staff", "Sub Customer Principal", "Sub Customer Staff"];

export default {
  path: `${pre}`,
  title: "$t:menu.auctionSubscriptions",
  header: "auction",
  icon: "md-checkbox-outline",
  auth,
  children: [
    {
      path: `${pre}`,
      title: "$t:menu.auctionSubscriptionsList",
      auth: ["hidden"]
    },
    {
      path: `${pre}/list/:id`,
      title: "$t:menu.auctionSubscriptionsDetails",
      auth: ["hidden"]
    }
  ]
};
