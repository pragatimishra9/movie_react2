import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Navbar from '../Component/Navbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Authenticate } from '../Actions/Auth';

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                    <Typography variant='h4' gutterBottom style={{ margin: "24px" }}>Signin</Typography>
                    <div>
                        <TextField
                            label="Email"
                            required
                            fullWidth
                            style={{ margin: "24px" }}
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
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

                    </div>
                    <Button style={{ backgroundColor: "#00192F", color: "white", margin: "24px" }} onClick={() => { Authenticate(email, password, "signin", setMessage, navigate) }}>Signin</Button>
                    <Link to="/signup" className='btn btn-outline-info'>Create account?</Link>
                </Box>
            </Grid>

        </div>
    )
}

export default Signin;
