import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import Header from "../../components/Header"
import { DataGrid } from '@mui/x-data-grid';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import {rows} from "./data"



const Team = () => {
    const theme = useTheme();
    
    const columns = [
        {
          field: "id",
          headerName: "ID",
          width: 33,
          align: "center",
          headerAlign: "center",
        },
        {
          field: "name",
          headerName: "name",
          align: "center",
          headerAlign: "center",
        },
        {
          field: "email",
          headerName: "email",
          flex: 1,
          align: "center",
          headerAlign: "center",
        },
        { field: "age", headerName: "age", align: "center", headerAlign: "center" },
        {
          field: "phone",
          headerName: "phone",
          flex: 1,
          align: "center",
          headerAlign: "center",
        },
        {
          field: "access",
          headerName: "access",
          flex: 1,
          align: "center",
          headerAlign: "center",
          renderCell: ({ row: { access } }) => {
            return (
              <Box
                sx={{
                  p: "5px",
                  width: "99px",
                  borderRadius: "3px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "space-evenly",
                  backgroundColor:
                    access === "Admin"
                      ? theme.palette.primary.dark
                      : access === "Manager"
                      ? theme.palette.secondary.dark
                      : "#3da58a",
                }}
              >
                {access === "Admin" && (
                  <AdminPanelSettingsOutlined
                    sx={{ color: "#fff" }}
                    fontSize="small"
                  />
                )}
    
                {access === "Manager" && (
                  <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
                )}
    
                {access === "User" && (
                  <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
                )}
    
                <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                  {access}
                </Typography>
              </Box>
            );
          },
        },
      ];

    return (
        <Box>
            <Header title={"TEAM"} subtitle={"Managing the Team Members"} />
            <Box sx={{height: 600, mx: "auto"}}>
                <DataGrid rows={rows} columns={columns} />
            </Box>
        </Box>
    );
}

export default Team;
