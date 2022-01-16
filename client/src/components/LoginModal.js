import { React, useContext, useState } from 'react'
import { Modal, Input, Box, Button, Grid, TextField, Typography, Link } from '@material-ui/core';
import { JsonContext } from '../context/jsonContext';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { TokenPrtClient } from '../protos/token_grpc_web_pb'
import { SimpleAccountDto } from '../protos/token_pb'
import { UserPrtClient } from "../protos/user_grpc_web_pb";
import { RemindPasswordDto } from "../protos/user_pb";
import LoadingOverlay from 'react-loading-overlay';
import TemplateServices from "../protoServices/TemplateServices";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid azure',
    borderRadius: '10px',
    backgroundColor: 'azure',
    boxShadow: 24,
    p: 3,
};


const LoginModal = () => {

    const { contextState, contextStateActions } = useContext(JsonContext)
    const [loginDto, LoginDto] = useState({})
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [isForgotPass, setIsForgotPass] = useState(false)
    var simpleAccountDto = new SimpleAccountDto();


    const handleChange = (e) => {
        LoginDto({ ...loginDto, [e.target.name]: e.target.value })
    }

    const validateInputs = () => {
        if (loginDto.Username === '' || loginDto.Password === '' || loginDto.Username?.length < 5 || loginDto.Password?.length < 5) {
            NotificationManager.error('Please provide valid Username and Password', "Warning", 3000);
            return false
        }
        if ((!isLogin || isForgotPass) && (loginDto.Email === '' || loginDto.Email?.length < 6 || !loginDto.Email.includes('@') || !loginDto.Email.includes('.'))) {
            NotificationManager.error('Please provide a valid Email', "Warning", 3000);
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault()
        if (!validateInputs()) {
            setIsLoading(false)
            return;
        }

        if (isForgotPass) {
            var userClient = new UserPrtClient('http://localhost:8080');
            var remindPasswordDto = new RemindPasswordDto();
            remindPasswordDto.setMailaddress(loginDto.Email);
            userClient.remindPassword(remindPasswordDto, {}, (err, response) => {
                if (err) {
                    NotificationManager.error(err.message, "Error", 3000);
                    setIsLoading(false)
                    return;
                }
                else if (response.getResult() === false) {

                    NotificationManager.error("Error", "Error", 3000);
                    setIsLoading(false)
                    return;
                }
                NotificationManager.success('Please check your Email (Also check spam folder)', "Success", 3000);
                setIsLoading(false)
                setIsForgotPass(false)
            })
            return;
        }
        simpleAccountDto.setUsername(loginDto.Username);
        simpleAccountDto.setPassword(loginDto.Password);
        if (!isLogin) {
            simpleAccountDto.setEmail(loginDto.Email);
            var tokenPrtClient = new TokenPrtClient('http://localhost:8080');
            tokenPrtClient.register(simpleAccountDto, {}, (err, RegisterResponse) => {
                if (RegisterResponse?.getResult() === false) {
                    NotificationManager.error('An Error Occured', 'Error!', 3000);
                } else {
                    NotificationManager.success('Register Succeed', 'Welcome!', 3000);
                    contextStateActions.setAuthorizedUser({ Username: loginDto.Username, Email: loginDto.Email });
                    contextStateActions.isLoginModalOpenChanged(false)
                    contextStateActions.setToken(RegisterResponse.getAuthtoken());
                }

            });
        }
        else {
            var tokenPrtClient = new TokenPrtClient('http://localhost:8080');
            tokenPrtClient.login(simpleAccountDto, {}, (err, loginResponse) => {
                if (err || loginResponse?.getResult() === false) {
                    NotificationManager.error('An Error Occured', 'Error!', 3000);
                } else {
                    NotificationManager.success('Login Succeed', 'Welcome Back!', 3000);
                    contextStateActions.setAuthorizedUser({ Username: loginDto.Username });
                    contextStateActions.isLoginModalOpenChanged(false)
                    contextStateActions.setToken(loginResponse.getAuthtoken())
                    TemplateServices.GetAll({ token: loginResponse.getAuthtoken(), contextState, contextStateActions });
                }
            });
        }
        setIsLoading(false)
    }

    const buttonText = () => {
        if (isLogin) {
            if (isForgotPass)
                return "Remind"
            return "Login"
        }
        else
            return "Register"
    }

    return (
        <Modal
            open={contextState.isLoginModalOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={() => contextStateActions.isLoginModalOpenChanged(false)}
        >
            <Box sx={style}>
                <LoadingOverlay
                    active={isLoading}
                    spinner
                    text='Please wait...'
                    styles={{
                        overlay: (base) => ({
                            ...base,
                            opacity: 0.5,
                            borderRadius: '10px',
                            height: '100%',
                            position: 'absolute',
                            bottom: '10%',
                        }),
                        pinner: (base) => ({
                            ...base,
                            width: '100px',
                            '& svg circle': {
                                stroke: '#002984',
                            }
                        })
                    }}
                >
                    <Grid container >
                        <Grid style={{ marginBottom: 20 }} item xs={12}>
                            <Button onClick={() => setIsLogin(true)} variant={isLogin ? 'contained' : 'outlined'} style={{ width: '50%', borderRight: 'none', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} >Login</Button>
                            <Button onClick={() => { setIsLogin(false); setIsForgotPass(false) }} variant={isLogin ? 'outlined' : 'contained'} style={{ width: '50%', borderLeft: 'none', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} >Register</Button>
                        </Grid>
                        <Grid style={{ marginTop: 20 }} item xs={12} md={12} lg={12} >
                            {!isForgotPass && <TextField
                                style={{ margin: 2, left: '50%', transform: 'translate(-50%, -50%)' }}
                                variant="outlined"
                                label='Username *'
                                name='Username'
                                value={loginDto.Username}
                                onChange={handleChange}>
                            </TextField>}
                        </Grid>
                        {(!isLogin || isForgotPass) && <Grid item xs={12} md={12} lg={12} >
                            <TextField style={{ margin: 2, left: '50%', transform: 'translate(-50%, -50%)' }}
                                variant="outlined"
                                label='Email *'
                                onChange={handleChange}
                                value={loginDto.Email}
                                name='Email' >
                            </TextField>
                        </Grid>}
                        {!isForgotPass && <Grid item xs={12} md={12} lg={12} >
                            <TextField style={{ margin: 2, left: '50%', transform: 'translate(-50%, -50%)' }}
                                variant="outlined"
                                label='Password *'
                                type='password'
                                onChange={handleChange}
                                value={loginDto.Password}
                                name="Password">

                            </TextField>
                        </Grid>}
                        <Grid item xs={12} md={12} lg={12} >


                            <Button style={{ left: '50%', transform: 'translate(-50%, -50%)', marginTop: 5, backgroundColor: "#3e51b5", color: 'white' }}
                                onClick={handleSubmit}
                                variant="contained"

                            >
                                {buttonText()}
                            </Button>
                            <Grid item style={{ float: "right" }} >

                                {isLogin && <Link onClick={() => setIsForgotPass(!isForgotPass)} > {isForgotPass ? "Back to login" : "I can't log in"} </Link>}
                            </Grid>
                        </Grid>
                    </Grid>
                </LoadingOverlay>
            </Box>
        </Modal >
    )
}

export default LoginModal
