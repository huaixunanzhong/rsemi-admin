import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { useMenuStore } from "@/stores";

export function useInitApp() {
  const location = useLocation();
  const { setMenuList } = useMenuStore(
    useShallow(state => ({
      setMenuList: state.setMenuList
    }))
  );
  useEffect(() => {
    setMenuList(location);
  }, [location, setMenuList]);
}
