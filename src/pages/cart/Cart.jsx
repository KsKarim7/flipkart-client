import { Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import TotalView from './TotalView';

const Container = styled(Grid)`
padding:30px 135px;
`
const Header = styled(Box)`
padding :25px 24px
`

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItems item={item}></CartItems>
                                ))
                            }
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xm={12}>
                            <TotalView></TotalView>
                        </Grid>
                    </Container>
                    : <Box>Your haven't added to your Cart yet</Box>
            }
        </>
    );
};

export default Cart;