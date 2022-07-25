import { Box, Button, Dialog, styled, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataProvider';

import { authenticatesSignup } from '../service/api';

const Component = styled(Box)`
height:70vh;
width:90vh
`;
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:86%;
width:28%;
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
const accountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "Get access to your Orders,Wishlist & Recommendations"

    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const LoginDialog = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInitialValues.login)
    }

    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState(signupInitialValues);

    const { setAccount } = useContext(DataContext)

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup)
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }

    const signupUser = async () => {
        let res = await authenticatesSignup(signup);
        if (!res) return;
        handleClose();
        setAccount(signup.firstname)
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>


                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography variant='h6' style={{ marginTop: 20, }}>{account.subHeading}.</Typography>
                    </Image>
                    {
                        account.view === 'login' ?

                            <Wrapper>
                                <TextField variant='standard' label='Enter Email/Mobile number'></TextField>
                                <TextField variant='standard' label='Enter Password'></TextField>
                                <Text>By continuing, you will agree to Flipkart's terms of use and privacy policy</Text>
                                <LoginButton>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>

                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label='Enter First Name'></TextField>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label='Enter Last Name'></TextField>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label='Enter User Name'></TextField>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label='Enter Email'></TextField>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label='Enter Password'></TextField>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label='Phone'></TextField>

                                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;