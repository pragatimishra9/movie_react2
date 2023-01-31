import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Navbar from '../Component/Navbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Authenticate } from '../Actions/Auth';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <Grid container direction="column" alignItems="center" justify="center">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100ch' },
                        border: "2px solid grey",
                        borderRadius: "12px",
                        marginTop: "24px"
                    }}
                    noValidate
                    autoComplete="off"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant='h4' gutterBottom style={{ margin: "24px" }}>Signup</Typography>
                    <div>
                        <TextField
                            label="First Name"
                            required
                            fullWidth
                            style={{ margin: "24px" }}
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                        <TextField
                            label="Last Name"
                            required
                            fullWidth
                            style={{ margin: "24px" }}
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                        <TextField
                            label="Email"
                            required
                            fullWidth
                            type="email"
                            style={{ margin: "24px" }}
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <TextField
                            label="Phone Number"
                            required
                            fullWidth
                            style={{ margin: "24px" }}
                            value={phoneNumber}
                            onChange={(e) => { setPhoneNumber(e.target.value) }}
                        />
                        <TextField
                            label="Password"
                            required
                            fullWidth
                            type="password"
                            style={{ margin: "24px" }}
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <TextField
                            label=" Confirm Password"
                            required
                            fullWidth
                            type="password"
                            style={{ margin: "24px" }}
                            value={rePassword}
                            onChange={(e) => { setRePassword(e.target.value) }}
                        />

                    </div>
                    <span>{message}</span>
                    <Button style={{ backgroundColor: "#00192F", color: "white", margin: "24px" }} onClick={() => { Authenticate(email, password, "signup", setMessage, navigate, firstName, lastName, rePassword) }}>Signup</Button>
                    <Link to="/signin" className='btn btn-outline-info'>Already Have an account?</Link>
                </Box>
            </Grid>

        </div>
    )
}

export default Signup
