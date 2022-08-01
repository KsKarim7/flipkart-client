import { Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions';
import ActionItems from './ActionItems';

const Component = styled(Box)`
background:#F2F2F2;
margin-top:55px
`

const Container = styled(Grid)`
background:#FFFFFF;
display:flex;
`;

const RightContainer = styled(Grid)`
margin-top:50px;
`

const LeftContainer = styled(Grid)`

`


const DetailView = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))


    }, [dispatch, id, product, loading])

    console.log(product)

    return (
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container>
                    <LeftContainer item lg={4} md={4} sm={8} xs={12}>
                        <ActionItems product={product} > </ActionItems>
                    </LeftContainer>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
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
                    </RightContainer>
                </Container >
            }
        </Component>
    );
};

export default DetailView;