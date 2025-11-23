import { Space } from "@douyinfe/semi-ui-19";

import Capacitor from "@/assets/svg/capacitor.svg?react";
import Css3 from "@/assets/svg/css3.svg?react";
import Html5 from "@/assets/svg/html5.svg?react";
import Ionic from "@/assets/svg/ionic.svg?react";
import Javascript from "@/assets/svg/javascript.svg?react";
import Nestjs from "@/assets/svg/nestjs.svg?react";
import Nextjs from "@/assets/svg/nextjs.svg?react";
import Npm from "@/assets/svg/npm.svg?react";
import Reactjs from "@/assets/svg/reactjs.svg?react";
import Sass from "@/assets/svg/sass.svg?react";
import Swagger from "@/assets/svg/swagger.svg?react";
import Tailwind from "@/assets/svg/tailwind.svg?react";
import Vite from "@/assets/svg/vite.svg?react";
import Vue from "@/assets/svg/vue.svg?react";
import WebStorm from "@/assets/svg/webstorm.svg?react";
import BrandIcon from "@/components/BrandIcon.tsx";
import UserAvatarCard from "@/pages/profile/UserAvatarCard.tsx";

export default function Profile() {
  return (
    <>
      <UserAvatarCard />
      <Space>
        <BrandIcon
          className="mt-4"
          icon={<Capacitor width={24} height={24} />}
        />
        <BrandIcon className="mt-4" icon={<Css3 width={24} height={24} />} />
        <BrandIcon className="mt-4" icon={<Html5 width={24} height={24} />} />
        <BrandIcon className="mt-4" icon={<Ionic width={24} height={24} />} />
        <BrandIcon
          className="mt-4"
          icon={<Javascript width={24} height={24} />}
        />
        <BrandIcon className="mt-4" icon={<Nestjs width={24} height={24} />} />
        <BrandIcon className="mt-4" icon={<Nextjs width={24} height={24} />} />
        <BrandIcon className="mt-4" icon={<Npm width={24} height={24} />} />
        <BrandIcon className="mt-4" icon={<Reactjs width={24} height={24} />} />
        <BrandIcon className="mt-4" icon={<Sass width={24} height={24} />} />
        <BrandIcon className="mt-4" icon={<Swagger width={24} height={24} />} />
        <BrandIcon
          className="mt-4"
          icon={<Tailwind width={24} height={24} />}
        />
        <BrandIcon className="mt-4" icon={<Vite width={24} height={24} />} />
        <BrandIcon className="mt-4" icon={<Vue width={24} height={24} />} />
        <BrandIcon
          className="mt-4"
          icon={<WebStorm width={24} height={24} />}
        />
      </Space>
    </>
  );
}
