import {
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { getDesignTokens } from "../theme";
import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



function Home() {
  
  const [open, setOpen] =  useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const [mode, setMode] = useState(
    Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar
       open={open}
       handleDrawerOpen={handleDrawerOpen}
       setMode={setMode}
      />
      <SideBar
        open={open} handleDrawerClose={handleDrawerClose}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default Home;
