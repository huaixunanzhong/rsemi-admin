const pre = "/bookmarks";

const auth = [
  "Customer Principal",
  "Customer Staff",
  "Supplier Principal",
  "Supplier Staff",
  "Sub Customer Principal",
  "Sub Customer Staff"
];

export default {
  path: `${pre}`,
  title: "$t:menu.bookmarks",
  header: "auction",
  icon: "md-bookmarks",
  auth
};
