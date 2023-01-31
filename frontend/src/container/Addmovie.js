import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Navbar from '../Component/Navbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AddMovies } from '../Actions/Addmovieaction';

function Addmovie() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState();
    const [message, setMessage] = useState("");
    return (
        <div>
            <Navbar />
            <Grid container direction="column" alignItems="center" justify="center">
                <Box

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
                    <Typography variant='h4' gutterBottom style={{ margin: "24px" }}>Add Movie</Typography>
                    <div>
                        <TextField
                            label="Title"
                            required
                            fullWidth
                            style={{ margin: "24px" }}
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />

                        <TextField
                            label="Description"
                            required
                            fullWidth
                            type="text"
                            style={{ margin: "24px" }}
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                        <TextField

                            required
                            fullWidth
                            type="file"
                            style={{ margin: "24px" }}
                            onChange={(e) => { setImage(e.target.files[0]) }}
                        />

                    </div>
                    <Button style={{ backgroundColor: "#00192F", color: "white", margin: "24px" }} onClick={() => { AddMovies(title, description, image, setMessage) }}>Add Movie</Button>
                    <span>{message}</span>
                </Box>
            </Grid>

        </div>
    )
}

export default Addmovie;
