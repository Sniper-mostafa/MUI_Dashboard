import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";


const Header = ({title, subtitle, isDashboard=false}) => {

    const theme = useTheme();
    return (
        <Box mb={isDashboard ? 2 : 4}>
            <Typography >
                {title}
            </Typography>
            <Typography
            sx={{
                color: theme.palette.info.light,
                fontWeight: "bold"
            }}
            >
                {subtitle}
            </Typography>
        </Box>
    );
}

export default Header;
