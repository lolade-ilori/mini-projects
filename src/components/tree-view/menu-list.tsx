import { MenuType } from "../../@types/test";
import MenuItem from "./menu-item";

const MenuList = ({ list }: { list: MenuType[] }) => {
  return (
    <ul className="list-container">
      {list && list.length
        ? list.map((item) => <MenuItem item={item} />)
        : null}
    </ul>
  );
};

export default MenuList;
