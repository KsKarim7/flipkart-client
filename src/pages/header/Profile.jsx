import styled from '@emotion/styled';
import { Menu, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Component = styled(Menu)`
margin-top:5px;

`

const Profile = ({ account }) => {
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2 }}>{account}</Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Component>
        </>
    );
};

export default Profile;