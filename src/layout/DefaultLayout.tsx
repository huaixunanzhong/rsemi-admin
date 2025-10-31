import { Layout } from "@douyinfe/semi-ui";
import { useInitApp } from "@/hooks";
import ISider from "@/layout/Sider/ISider.tsx";
import { useLayoutStore } from "@/stores";
import { useShallow } from "zustand/react/shallow";
import IHeader from "@/layout/Header/IHeader.tsx";
import IContent from "@/layout/Content/IContent.tsx";
import IFooter from "@/layout/Footer/IFooter.tsx";

export default function BaseLayout() {
  useInitApp();
  const { menuCollapse, headerFix } = useLayoutStore(
    useShallow(state => ({
      headerFix: state.headerFix,
      menuCollapse: state.menuCollapse
    }))
  );

  return (
    <Layout>
      <ISider menuCollapse={menuCollapse} />
      <Layout>
        <IHeader menuCollapse={menuCollapse} headerFix={headerFix} />
        <IContent />
        <IFooter />
      </Layout>
    </Layout>
  );
}
