import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import Pie from './Pie';

const PieChart = () => {
    return (
        <Box>
            <Header title="PIE CHART" subtitle="Simple Pie Chart" />
            <Pie />
        </Box>
    );
}

export default PieChart;
