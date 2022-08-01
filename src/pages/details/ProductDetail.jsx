import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { LocalOffer as Badge } from '@mui/icons-material';
import styled from '@emotion/styled';

const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline
&>p{
    font-size:14px;
    margin-top:10px
}
`
const StyledBadge = styled(Badge)`
margin-right:10px;
color:#00CC00;
font-size:15px
`

const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline
&>td{
    font-size:14px;
    margin-top:10px;
    border:none
}
`

const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontsize: 14 }}>8 Ratings And 1 Review
                <Box component="span">
                    <img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} />
                </Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>৳{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;

                <Box component='span' style={{ color: '#878787' }}><strike> ৳{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#388E3C' }}>৳{product.price.discount}</Box>
            </Typography>
            <Typography style={{ marginTop: 16 }}>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge /> Get extra 20% off upto ৳500 on 1 items T&C </Typography>
                <Typography><StyledBadge /> Get extra 13% off (price inclusive of discount) T&C </Typography>
                <Typography><StyledBadge /> Sign up for Flipkart Pay Later and get Flipkart Gift cart worth ৳5000  Know More </Typography>
                <Typography><StyledBadge /> Buy 2 items save 5%; Buy 3 or more save 10% T&C</Typography>
                <Typography><StyledBadge /> 5% Cashback on Flipkart Axis Bank Card T&C</Typography>
                <Typography><StyledBadge /> No Cost on Bajaj Finserv EMI Card on cart value above ৳5999 T&C</Typography>
            </SmallText>

            <TableBody>
                <ColumnText>
                    <TableCell style={{ color: '878787' }}>Delivery</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>Delivery By {date.toDateString()} | ৳70</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '878787' }}>Warranty</TableCell>
                    <TableCell >No Warranty </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '878787' }}>Seller</TableCell>
                    <TableCell >
                        <Box component='span' style={{ color: '#2874f0' }}>SuperComNet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View More sellers staring form ৳{product.price.cost}</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2} >
                        <img src={adURL} alt="flipkartpoints" style={{ width: 390 }} />
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '878787' }}>Description</TableCell>
                    <TableCell >{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </>
    );
};

export default ProductDetail;