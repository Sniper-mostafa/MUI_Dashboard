import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import Geo from './Geo';

const GeoGraphy = () => {
    return (
        <Box>
            <Header title="GEOGRAPHY" subtitle="Simple Geography" />
            <Geo />
        </Box>
    );
}

export default GeoGraphy;
