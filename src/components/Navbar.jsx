// import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { borderRadius } from "@mui/system";
import { AutoAwesome, Mail, Notifications } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        ></Typography>
        <AutoAwesome sx={{ display: { xs: "block", sm: "block" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://toppng.com/uploads/preview/jungkook-icon-transparent-jungkook-circle-ico-11563012821acqssjj8fn.png"
            onClick={e=> setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=> setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://toppng.com/uploads/preview/jungkook-icon-transparent-jungkook-circle-ico-11563012821acqssjj8fn.png"
          />
          <Typography variant="span">Jungkook</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      open={open}
      onClose={e=>setOpen(false)}
      anchorOrigin={{
        veritcal: 'top',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>

      </Menu>
    </AppBar>
  );
};

export default Navbar;
