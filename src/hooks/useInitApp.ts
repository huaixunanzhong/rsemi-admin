import { useEffect } from "react";
import { useMenuStore } from "@/stores";
import { useShallow } from "zustand/react/shallow";
import { useLocation } from "react-router-dom";

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
