import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns, rows } from './data';

const Invoices = () => {
    return (
        <Box>
            <Header title="INVOICES" subtitle="List of Invoice Balances" />

            <Box>
                <DataGrid
                 checkboxSelection
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

export default Invoices;
