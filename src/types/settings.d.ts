declare namespace Config {
  interface Settings {
    base: {
      appID: "app";
      dynamicMenu: boolean;
    };
    layout: {
      siderTheme: "dark" | "light";
      menuSideWidth: number;
      menuSideCollapseWidth: number;
      menuCollapse: boolean;
      siderFix: boolean;
      headerFix: boolean;
      headerHide: boolean;
      menuAccordion: boolean;
    };
  }
}
