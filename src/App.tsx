import "./App.scss";
import { LocaleProvider } from "@douyinfe/semi-ui-19";
import zh_CN from "@douyinfe/semi-ui-19/lib/es/locale/source/zh_CN";
import { IntlProvider } from "react-intl";

import { messages } from "@/lang";
import { useI18nStore } from "@/stores";

import Router from "./router";

const App = () => {
  const locale = useI18nStore((state) => state.locale);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <LocaleProvider locale={zh_CN}>
        <Router />
      </LocaleProvider>
    </IntlProvider>
  );
};

export default App;
