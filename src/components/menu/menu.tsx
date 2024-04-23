import "./menu.scss";
import { menuItems } from "./menuitems";
import { MenuGroup } from "./menu-group";

export const Menu = () => {
  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <MenuGroup key={index} title={item.title} items={item.items} />
      ))}
    </div>
  );
};
