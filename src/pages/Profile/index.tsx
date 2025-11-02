import UserAvatarCard from "@/pages/Profile/UserAvatarCard.tsx";
import BrandIcon from "@/components/BrandIcon.tsx";
import Capacitor from "@/assets/svg/capacitor.svg"
import Css3 from "@/assets/svg/css3.svg"
import Html5 from "@/assets/svg/html5.svg"
import Ionic from "@/assets/svg/ionic.svg"
import Javascript from "@/assets/svg/javascript.svg"
import Nestjs from "@/assets/svg/nestjs.svg"
import  Nextjs  from "@/assets/svg/nextjs.svg";
import Npm from "@/assets/svg/npm.svg";
import Reactjs from "@/assets/svg/reactjs.svg"
import Sass from "@/assets/svg/sass.svg";
import Swagger from "@/assets/svg/swagger.svg"
import Tailwind from "@/assets/svg/tailwind.svg"
import Vite from "@/assets/svg/vite.svg"
import Vue from "@/assets/svg/vue.svg"
import WebStorm from "@/assets/svg/webstorm.svg"
import { Space } from '@douyinfe/semi-ui'

export default function Profile() {
  return (
    <>
      <UserAvatarCard />
      <Space>
        <BrandIcon className="mt-4" children={<Capacitor width={24} height={24} />} />
        <BrandIcon className="mt-4" children={<Css3 width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Html5 width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Ionic width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Javascript width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Nestjs width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Nextjs width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Npm width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Reactjs width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Sass width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Swagger width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Tailwind width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Vite width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<Vue width={24} height={24}  />} />
        <BrandIcon className="mt-4" children={<WebStorm width={24} height={24}  />} />
      </Space>
    </>
  );
}
