import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Menu } from "./menu";
import { NavBar } from "./navbar";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledLayout = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "200px 1fr",
  gridTemplateRows: "80px 1fr 60px",
  gridTemplateAreas: `
  "header header"
  "sidebar main"
  "sidebar footer"
  `,
});

export const Layout = () => {
  return (
    <StyledLayout>
      <NavBar />
      <Menu />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </StyledLayout>
  );
};
