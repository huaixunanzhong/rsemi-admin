import "./App.scss";
import { LocaleProvider } from "@douyinfe/semi-ui";
import zh_CN from "@douyinfe/semi-ui/lib/es/locale/source/zh_CN";
import Router from "./router";
import { IntlProvider } from "react-intl";
import messages from "@/lang";
import { useI18nStore } from "@/stores";

const App = () => {
  const locale = useI18nStore(state => state.locale);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <LocaleProvider locale={zh_CN}>
        <Router />
      </LocaleProvider>
    </IntlProvider>
  );
};

export default App;
