import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import Line from './Line';

const LineChart = () => {
    return (
        <Box>
            <Header title="LINE CHART" subtitle="Simple Line Chart" />
            <Line />
        </Box>
    );
}

export default LineChart;
