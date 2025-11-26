import darkMode from "@/assets/images/settings/appearance/dark.png";
import lightMode from "@/assets/images/settings/appearance/light.png";
import systemMode from "@/assets/images/settings/appearance/system.png";

import "./index.scss";

export default function RListItem() {
  return (
    <>
      <li className="r-list-item">
        <div className="r-list-item__title">
          <span>外观</span>
        </div>
        <div className="r-list-item__main">
          <div>
            <img src={lightMode} alt="light mode" />
          </div>
          <div>
            <img src={darkMode} alt="light mode" />
          </div>
          <div>
            <img src={systemMode} alt="light mode" />
          </div>
        </div>
      </li>
    </>
  );
}
