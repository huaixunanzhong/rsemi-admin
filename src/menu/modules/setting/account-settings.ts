const pre = "/account-settings";

const auth = [
  "Supplier Principal",
  "Supplier Staff",
  "Customer Principal",
  "Customer Staff",
  "Sub Customer Principal",
  "Sub Customer Staff"
];

export default {
  path: `${pre}`,
  title: "$t:menu.accountSettings",
  header: "setting",
  icon: "ios-construct",
  auth,
  children: [
    {
      path: `${pre}/company-details`,
      title: "$t:menu.companyDetails",
      auth: [
        "Supplier Principal",
        "Supplier Staff",
        "Customer Principal",
        "Customer Staff",
        "Sub Customer Principal",
        "Sub Customer Staff"
      ]
    },
    {
      path: `${pre}/staff`,
      title: "$t:menu.staff",
      auth: ["Supplier Principal", "Company Customer", "Company Sub Customer"]
    },
    {
      path: `${pre}/customer-accounts`,
      title: "$t:menu.customerAccounts",
      auth: ["Supplier Principal", "Supplier Staff"]
    },
    {
      path: `${pre}/customers`,
      title: "$t:menu.customers",
      auth: ["Supplier Principal", "Supplier Staff"]
    },
    {
      path: `${pre}/create-company-customer`,
      title: "$t:menu.createCompanyCustomer",
      auth: ["hidden"]
    },
    {
      path: `${pre}/create-personal-customer`,
      title: "$t:menu.createPersonalCustomer",
      auth: ["hidden"]
    },
    {
      path: `${pre}/view-company-customer/:id`,
      title: "$t:menu.manageCompany",
      auth: ["hidden"]
    },
    {
      path: `${pre}/sub-customer-accounts`,
      title: "$t:menu.subCustomerAccounts",
      auth: ["Advanced Customer"]
    },
    {
      path: `${pre}/sub-customers`,
      title: "$t:menu.subCustomers",
      auth: ["Advanced Customer"]
    },
    {
      path: `${pre}/create-company-sub-customer`,
      title: "$t:menu.createCompanySubCustomer",
      auth: ["hidden"]
    },
    {
      path: `${pre}/create-personal-sub-customer`,
      title: "$t:menu.createPersonalSubCustomer",
      auth: ["hidden"]
    },
    {
      path: `${pre}/company-sub-customer-details/:id`,
      title: "$t:menu.companySubCustomerDetails",
      auth: ["hidden"]
    }
  ]
};
