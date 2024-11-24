import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { rows, columns } from './data';

const Contact = () => {
    return (
        <Box>
            <Header title="CONTACT" subtitle="List of Contact for Future Reference" />
            <Box sx={{height: 650,width: "99%", mx: "auto"}}>
                <DataGrid
                 slots={{
                    toolbar: GridToolbar,
                 }}
                 rows={rows}
                 columns={columns}
                />
            </Box>
        </Box>
    );
}

export default Contact;
