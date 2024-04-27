import { LuLayoutDashboard, LuBoxSelect } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { MdNotifications } from "react-icons/md";
import { PiGearSixBold } from "react-icons/pi";
import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledNavBar = styled(Box)({
  gridArea: "header",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "1.5rem",
});

const StyledAvatar = styled(Avatar)({
  backgroundColor: "inherit",
  cursor: "pointer",
  color: "black",
});

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <LuLayoutDashboard />
        <Typography variant="h6">Admin</Typography>
      </Stack>
      <Stack direction={"row"} gap={3} alignItems={"center"}>
        <StyledAvatar>
          <FaSearch />
        </StyledAvatar>
        <StyledAvatar>
          <RxDashboard />
        </StyledAvatar>
        <StyledAvatar>
          <LuBoxSelect />
        </StyledAvatar>
        <Badge badgeContent={3} color="error">
          <StyledAvatar>
            <MdNotifications />
          </StyledAvatar>
        </Badge>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Avatar
            alt="profile"
            src={
              "https://images.unsplash.com/photo-1504376379689-8d54347b26c6?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <Typography variant="h6">Mwema</Typography>
        </Stack>
        <PiGearSixBold />
      </Stack>
    </StyledNavBar>
  );
};
