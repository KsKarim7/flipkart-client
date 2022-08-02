import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
            {
                cartItems.length ?
                    <Grid container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Box>
                                <Typography>My Cart({cartItems.length})</Typography>
                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItems></CartItems>
                                ))
                            }
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xm={12}>

                        </Grid>
                    </Grid>
                    : <Box>Your haven't added to your Cart yet</Box>
            }
        </>
    );
};

export default Cart;