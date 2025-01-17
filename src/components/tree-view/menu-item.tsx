import { useState } from "react";
import { MenuType } from "../../@types/test";
import MenuList from "./menu-list";

const MenuItem = ({ item }: { item: MenuType }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<
    Record<string, boolean>
  >({});

  const handleToggleChildren = (currentLabel: string) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };

  return (
    <li>
      <div
        className="label-wrap"
        style={{ display: "flex", gap: 20, alignItems: "center" }}
      >
        <p>{item.title}</p>
        {item && item.children.length > 0 && (
          <span onClick={() => handleToggleChildren(item.title)}>
            {displayCurrentChildren[item.title] ? "-" : "+"}
          </span>
        )}
      </div>

      {item &&
      item.children.length > 0 &&
      displayCurrentChildren[item.title] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
