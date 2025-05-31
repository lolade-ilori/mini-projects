import menu from "./data";
import MenuList from "./MenuList";
import "./TreeView.scss";

const TreeView = () => {
  return (
    <div className="tree-container">
      <div className="sidebar">
        <MenuList menu={menu} />
      </div>
    </div>
  );
};

export default TreeView;
