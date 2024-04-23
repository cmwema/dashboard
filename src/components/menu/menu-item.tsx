import React from "react";
import { Link } from "react-router-dom";

type MenuItemProps = {
  to: string;
  title: string;
  Icon: React.ElementType;
};

export const MenuItem = ({ to, title, Icon }: MenuItemProps) => {
  return (
    <React.Fragment>
      <Link to={to}>
        <Icon />
        <span className="title">{title}</span>
      </Link>
    </React.Fragment>
  );
};
