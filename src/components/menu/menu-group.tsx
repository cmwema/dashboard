import React from "react";
import { MenuItem } from "./menu-item";
import "./menu-group.scss";

type MenuGroupProps = {
  title: string;
  items: {
    to: string;
    title: string;
    Icon: React.ElementType;
  }[];
};

export const MenuGroup = ({ title, items }: MenuGroupProps) => {
  return (
    <div className="menu-group">
      <span>{title}</span>
      {items.map((item, index) => {
        return (
          <MenuItem
            key={index}
            to={item.to}
            title={item.title}
            Icon={item.Icon}
          />
        );
      })}
    </div>
  );
};
