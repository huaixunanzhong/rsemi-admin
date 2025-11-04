# Rsbuild project

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server, and the app will be available at [http://localhost:3000](http://localhost:3000).

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Learn more

To learn more about Rsbuild, check out the following resources:

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!

#### 生成树目录的命令
```bash
 tree -N --dirsfirst -I "node_modules|dist|.git"
```

### 项目目录结构

```markdown
├── src ← 代码根目录
│   ├── assets ← 静态资源
│   │   ├── images ← 图片                             
│   │   │   ├── bg-login-left.png ← 登录左侧背景图
│   │   │   ├── bg-login-right.png ← 登录右侧背景图
│   │   │   ├── logo-dark.png ← 暗色Logo
│   │   │   ├── logo-small.png ← 小Logo
│   │   │   └── logo.png ← Logo
│   │   ├── styles ← 样式
│   │   │   ├── layout ← 布局样式
│   │   │   │   ├── basic-layout ← 基础布局样式
│   │   │   │   │   ├── layout.scss ← 布局样式
│   │   │   │   │   └── menu.scss ← 菜单布局样式
│   │   │   │   └── index.scss
│   │   │   ├── common.scss ← 通用样式
│   │   │   ├── main.scss
│   │   │   └── variable.scss ← css全局变量
│   │   └── svg ← svg资源
│   │       ├── capacitor.svg
│   │       ├── css3.svg
│   │       ├── html5.svg
│   │       ├── ionic.svg
│   │       ├── javascript.svg
│   │       ├── logo.svg
│   │       ├── nestjs.svg
│   │       ├── nextjs.svg
│   │       ├── npm.svg
│   │       ├── reactjs.svg
│   │       ├── sass.svg
│   │       ├── swagger.svg
│   │       ├── tailwind.svg
│   │       ├── vite.svg
│   │       ├── vue.svg
│   │       └── webStorm.svg
│   ├── components ← 全局组件
│   │   ├── BrandIcon 
│   │   │   ├── componentsEnum.tsx
│   │   │   └── index.tsx
│   │   ├── BrandIcon.tsx
│   │   ├── CountUp.tsx
│   │   ├── DataCard.tsx
│   │   ├── UpDownRate.tsx
│   │   └── index.ts
│   ├── config
│   │   └── settings.ts
│   ├── hooks
│   │   ├── index.ts
│   │   └── useInitApp.ts
│   ├── lang
│   │   ├── locales
│   │   │   ├── en.json
│   │   │   └── zh.json
│   │   └── index.ts
│   ├── layout
│   │   ├── Content
│   │   │   └── IContent.tsx
│   │   ├── Footer
│   │   │   └── IFooter.tsx
│   │   ├── Header
│   │   │   ├── IHeader.tsx
│   │   │   └── UserAvatar.tsx
│   │   ├── Sider
│   │   │   └── ISider.tsx
│   │   ├── DefaultLayout.tsx
│   │   ├── Layout.tsx
│   │   └── index.ts
│   ├── menu
│   │   ├── modules
│   │   │   ├── admin
│   │   │   │   ├── chinese-vehicle.ts
│   │   │   │   ├── company-user.ts
│   │   │   │   ├── customer-view-record.ts
│   │   │   │   └── roles-permissions.ts
│   │   │   ├── auction
│   │   │   │   ├── auction-cart.ts
│   │   │   │   ├── auction-request.ts
│   │   │   │   ├── auction-subscriptions.ts
│   │   │   │   ├── auction-task.ts
│   │   │   │   ├── auction-vehicle.tsx
│   │   │   │   ├── bookmarks.ts
│   │   │   │   ├── chinese-vehicle.ts
│   │   │   │   ├── customer-view-record.ts
│   │   │   │   ├── purchase-intents.ts
│   │   │   │   └── sub-customer-view-record.ts
│   │   │   └── setting
│   │   │       ├── account-settings.ts
│   │   │       └── profile-settings.ts
│   │   ├── dashboard.tsx
│   │   ├── header.ts
│   │   ├── i18n.ts
│   │   └── sider.ts
│   ├── pages
│   │   ├── Home
│   │   │   └── index.tsx
│   │   ├── Profile
│   │   │   ├── UserAvatarCard.tsx
│   │   │   └── index.tsx
│   │   └── account
│   │       └── login
│   │           └── index.tsx
│   ├── router
│   │   ├── index.tsx
│   │   └── routes.tsx
│   ├── stores
│   │   ├── i18nStore.ts
│   │   ├── index.ts
│   │   ├── layoutStore.ts
│   │   └── menuStore.ts
│   ├── types
│   │   ├── layoutStore.d.ts
│   │   ├── menuStore.d.ts
│   │   └── settings.d.ts
│   ├── utils
│   │   ├── array.ts
│   │   ├── http.ts
│   │   ├── menu.ts
│   │   ├── number.ts
│   │   └── permission.ts
│   ├── App.scss
│   ├── App.tsx
│   ├── env.d.ts
│   └── index.tsx
├── LICENSE
├── README.md
├── commitlint.config.js
├── eslint.config.mjs
├── package.json
├── pnpm-lock.yaml
├── prettier.config.js
├── react-elegant-style.md
├── rsbuild.config.ts
├── tsconfig.json
└── uno.config.ts
```
