import React from "react";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box sx={{position: "relative",backgroundImage: "url(./404.svg)", backgroundRepeat: "no-repeat", height: "70vh"}}>

      <Typography sx={{fontSize: "40px", fontWeight: "bold",position: 'absolute', top: "40%", right: "5%"}} align="center" color={theme.palette.error.main} variant="h5">
        ERROR
        <br />
        404
        <br />
        Page Not Found!
      </Typography>
    </Box>
  );
};

export default NotFound;

