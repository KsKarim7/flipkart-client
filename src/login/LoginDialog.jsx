import { Box, Button, Dialog, styled, TextField, Typography } from '@mui/material';
import React from 'react';

const Component = styled(Box)`
height:70vh;
width:90vh
`;
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:100%;
width:40%;
padding: 45px 35px;
& > h6, & > h5{
    color:#FFFFFF;
    font-weight:600
}
`;

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding: 25px 35px;
flex:1;
& > div, & > Button, & > p{
    margin-top:20px
}
`

const LoginButton = styled(Button)`
text-transform:none;
background:#FB641B;
color:white;
height:48px;
border-radius:2px
`;
const RequestOTP = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%  )
`;

const Text = styled(Typography)`
font-size:12px;
color:#878787
`;

const CreateAccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer
`

const LoginDialog = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false)
    }


    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>


                    <Image>
                        <Typography variant='h5'>Login</Typography>
                        <Typography variant='h6' style={{ marginTop: 20, }}>Get Access to your Orders, Wishlist and Recommendations.</Typography>
                    </Image>
                    <Wrapper>
                        <TextField variant='standard' label='Enter Email/Mobile number'></TextField>
                        <TextField variant='standard' label='Enter Password'></TextField>
                        <Text>By continuing, you will agree to Flipkart's terms of use and privacy policy</Text>
                        <LoginButton>Login</LoginButton>
                        <Typography style={{ textAlign: 'center' }}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount>New to Flipkart? Create an account</CreateAccount>

                    </Wrapper>
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;