import React, { Fragment, useEffect } from 'react';
import NavBar from './NavBar';
import { Box, styled } from '@mui/material'
import Banner from './Banner';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const Component = styled(Box)`
padding: 10px 10px;
background:#F2F2F2;
`

const Home = () => {

    useSelector(state => state.getProducts)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <NavBar></NavBar>
            <Component>
                <Banner></Banner>

            </Component>
        </>

    );
};

export default Home;