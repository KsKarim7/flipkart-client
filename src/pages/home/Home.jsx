import React, { Fragment } from 'react';
import NavBar from './NavBar';
import { Box, styled } from '@mui/material'
import Banner from './Banner';

const Component = styled(Box)`
padding: 10px 10px;
background:#F2F2F2;
`

const Home = () => {
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