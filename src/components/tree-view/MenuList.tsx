import MenuItem from "./MenuItem";

export interface MenuItems {
  id: number;
  title: string;
  url: string;
  children: MenuItems[];
}

interface Props {
  menu: MenuItems[];
}

const MenuList = ({ menu }: Props) => {
  return (
    <>
      {menu.map((item) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </>
  );
};

export default MenuList;
