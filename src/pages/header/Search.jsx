import React from 'react';
import { InputBase, Toolbar, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search'

const SearchContainer = styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:30px
`;
const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;  
`
const SearchIconWrapper = styled(Box)`
color:blue;
padding:5px
`


const Search = () => {
    return (
        <SearchContainer style={{ display: 'flex' }}>
            <InputSearchBase placeholder='Search for products, brands and more'>
            </InputSearchBase>
            <SearchIconWrapper>
                <SearchIcon></SearchIcon>
            </SearchIconWrapper>
        </SearchContainer>
    );
};

export default Search;