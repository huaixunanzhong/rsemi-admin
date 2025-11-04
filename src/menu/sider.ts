// 中国车
import dashboard from "@/menu/dashboard.tsx";

import adminChineseVehicle from "./modules/admin/chinese-vehicle.ts";
import adminCompanyUser from "./modules/admin/company-user.ts";
import adminCustomerViewRecord from "./modules/admin/customer-view-record.ts";
/** 侧边栏菜单 */
import rolesPermissions from "./modules/admin/roles-permissions.ts";
import auctionCart from "./modules/auction/auction-cart.ts";
// 拍卖订阅
import auctionSubscriptions from "./modules/auction/auction-subscriptions.ts";
// 拍卖任务
import auctionTask from "./modules/auction/auction-task.ts";
// 拍卖车辆
import auctionVehicle from "./modules/auction/auction-vehicle.tsx";
// 书签
import bookmarks from "./modules/auction/bookmarks.ts";
// 中国车
import chineseVehicle from "./modules/auction/chinese-vehicle.ts";
// 客户查看记录
import customerViewRecord from "./modules/auction/customer-view-record.ts";
// 购买意向
import purchaseIntents from "./modules/auction/purchase-intents.ts";
// 子客户查看记录
import subCustomerViewRecord from "./modules/auction/sub-customer-view-record.ts";
// 账户设置
import accountSettings from "./modules/setting/account-settings.ts";
/** 系统 */
import profileSettings from "./modules/setting/profile-settings.ts";

export default [
  profileSettings,
  rolesPermissions,
  adminCompanyUser,
  adminCustomerViewRecord,
  adminChineseVehicle,
  accountSettings,
  dashboard,
  auctionVehicle,
  chineseVehicle,
  purchaseIntents,
  auctionCart,
  auctionTask,
  auctionSubscriptions,
  customerViewRecord,
  subCustomerViewRecord,
  bookmarks
];
