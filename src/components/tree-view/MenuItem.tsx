import "./TreeView.scss";
import { FaPlus } from "react-icons/fa";
import MenuList, { MenuItems } from "./MenuList";
import { useState } from "react";

interface Props {
  item: MenuItems;
}

const MenuItem = ({ item }: Props) => {
  const [activeState, setActiveState] = useState<string[]>([]);

  function toggleActive(label: string) {
    const index = activeState.indexOf(label);

    if (index === -1) {
      setActiveState((prev) => [...prev, label]);
    } else {
      setActiveState(() => activeState.filter((item) => item !== label));
    }
  }

  return (
    <div>
      <div className="menu-wrap">
        <p>{item.title}</p>

        {item.children.length > 0 && (
          <FaPlus
            className="plus-btn"
            size={15}
            onClick={() => toggleActive(item.title)}
          />
        )}
      </div>

      <ul>
        {activeState.includes(item.title) && item.children.length > 0 && (
          <MenuList menu={item.children} />
        )}
      </ul>
    </div>
  );
};

export default MenuItem;
