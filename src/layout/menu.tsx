import { menuItems } from "../components/menu/menuitems";
import { MenuGroup } from "../components/menu/menu-group";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledMenu = styled(Box)({
  gridArea: "sidebar",
  backgroundColor: "green",
});

export const Menu = () => {
  return (
    <StyledMenu>
      {/* {menuItems.map((item, index) => (
        <MenuGroup key={index} title={item.title} items={item.items} />
      ))} */}
    </StyledMenu>
  );
};
