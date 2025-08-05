import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const HomeNavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer" }}
        >
          Basti Ki Pathshala
        </Typography>

        <Box>
          <Button color="inherit" onClick={() => navigate("/about-us")}>
            About Us
          </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Admin Log in
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HomeNavBar;
