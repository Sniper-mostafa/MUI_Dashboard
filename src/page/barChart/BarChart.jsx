import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import Bar from './Bar';

const BarChart = () => {
    return (
        <Box>
            <Header title="BAR CHART" subtitle="The minimum wage in Germany, France and Spain (EUR/month)" />
            <Bar />
        </Box>
    );
}

export default BarChart;
