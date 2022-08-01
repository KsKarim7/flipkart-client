import { Button, styled } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
// import FlashOnIcon from '@mui/icons-material'
import { ShoppingCart } from '@mui/icons-material';


const LeftContainer = styled(Box)`
min-width:40%; 
padding:40px 0 0 80px;
`;

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)`
width:46%;
height:50px;
border-radius:2px;
`

const ActionItems = ({ product }) => {
    return (
        <LeftContainer>
            <Image src={product.detailUrl} alt='detailPic' />
            <Button variant='contained' style={{ marginLeft: 10, background: '#ff9f00' }}><ShoppingCart /> Add To Cart</Button>
            <StyledButton variant='contained' style={{ background: '#fb541b' }}> Buy Now</StyledButton>
        </LeftContainer>
    );
};

export default ActionItems;