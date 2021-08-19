import { useState } from "react";
import css from "./ImageTab.module.css";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <ul className={css.tabs}>
        {children.map((tab) => {
          const label = tab.props.label;
          return (
            <li className={label === activeTab ? css.current : ""} key={label}>
              <a href="#1" onClick={(e) => handleClick(e, label)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      {children.map((one) => {
        if (one.props.label === activeTab)
          return (
            <div key={one.props.label} className={css.content}>
              {one.props.children}
            </div>
          );
      })}
    </div>
  );
}

export default Tabs;
