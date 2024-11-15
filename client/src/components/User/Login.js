import React, { useRef, useState } from 'react';
import Nav from '../Nav/Nav';
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import icon from '../images/1.png';
import img2 from '../images/carsideview.png';

const Login = ({ setLoginId }) => { 

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const formRef = useRef(null);
    const details = {email, password};

    const navigate = useNavigate();
    
    const showSuccessAlert = () => {
        let timerInterval;

        Swal.fire({
            title: 'Data Sent Successfully!',
            icon: 'success',
            position: 'center',
            timer: 1000,
            showConfirmButton: false,
            didOpen: () => {
                const timer = Swal.getPopup().querySelector("b");
                if (timer) {
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        })}

    const showErrorAlert = () => {
        let timerInterval;

        Swal.fire({
            title: 'Data Not Sent!',
            text: "Try Again",
            icon: 'error',
            position: 'center',
            timer: 2000,
            showConfirmButton: false,
            didOpen: () => {
                const timer = Swal.getPopup().querySelector("b");
                if (timer) {
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        })
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const resp = await fetch('http://localhost:6969/loginuser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email, password})
                }         
            )
            const responseData = await resp.json();

            if (resp.status === "successful") {
              console.log('Form submitted:', details);

              const success = responseData.message;
              alert(success);

              const LoginId = responseData._id;
              setLoginId(LoginId);

              const LoginUser = responseData.user;

              alert(`THIS IS LoginId:${LoginId}`)
              alert(`THIS IS USER:${LoginUser}`)
              showSuccessAlert();     
              navigate('/');
            } 

            else {
              showErrorAlert();             
            }

            formRef.current.reset();

          } catch (e) {
            console.log(e);
          }
    }

  return (
        <div className='' >
            <div><Nav /></div>
                <div className='logindiv'>
                    <div className='logindiv1'>
                        <div className='loginleft'>
                            <div className='loginleft1'>
                                <img src={img2} alt='' className='loginleftimg'/>
                            </div>
                        </div>
                        <div className='loginright'>
                            <div className='loginright1'>
                                <div className=''>
                                    <div className='loginrightimg'><img src={icon} alt='' className='w-25' /></div>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }} >
                                        <Typography variant="h3" component="h3" gutterBottom style={{fontFamily: "Anton"}}>
                                        Sign In
                                        </Typography>
                                        <Typography  gutterBottom style={{fontFamily: "Oswald"}}>
                                            Don't have an account? <Link to='/register'>Register</Link>
                                        </Typography>
                                        <form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '300px' }}>
                                            <TextField
                                                label="Email"
                                                type="email"
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <TextField
                                                label="Password"
                                                type="password"
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="success"
                                                fullWidth
                                                sx={{ mt: 2 }}
                                            >
                                                Login
                                            </Button>
                                        </form>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Login;
