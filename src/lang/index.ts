import { createIntl, createIntlCache } from "react-intl";

import en from "./locales/en.json";
import zh from "./locales/zh.json";

export const messages = { en, zh };

const cache = createIntlCache();

// 默认语言（你可从 localStorage 或浏览器取）
const locale = "en";

// 创建全局 intl 实例
export const intl = createIntl(
  {
    locale,
    messages: messages[locale]
  },
  cache
);

// 全局 $t 方法
export const $t = (id: string, values?: any) =>
  intl.formatMessage({ id }, values);
