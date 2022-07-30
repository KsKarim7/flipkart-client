import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { imageURL } from '../../constants/data';



const MidSection = () => {
    return (
        <Grid lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(image => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <img src={image} alt='img' style={{ width: '100%' }} />
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default MidSection;