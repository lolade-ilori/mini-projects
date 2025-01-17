import MenuList from "./menu-list";
import menu from "./data";

const TreeView = () => {
  return (
    <div className="tree-container">
      <MenuList list={menu} />
    </div>
  );
};

export default TreeView;
