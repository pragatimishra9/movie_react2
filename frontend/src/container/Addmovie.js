import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Navbar from '../Component/Navbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Link, useNavigate } from 'react-router-dom';
import { AddMovies, GetTags } from '../Actions/Addmovieaction';

function Addmovie() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState();
    const [message, setMessage] = useState("");
    const [tags, setTags] = useState([]);
    const [addedTags, setAddedTags] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        GetTags(setTags);
    }, [setTags, GetTags]);

    function handleCheckboxClick(e) {

        const val = e.target.value;
        const check = e.target.checked;
        if (check) {
            setAddedTags((pre) => [...pre, val]);
        } else {
            setAddedTags((pre) => {
                return [...pre.filter((off) => off !== val)];
            })
        }
        console.log(addedTags);
    }

    if (localStorage.getItem("isAutenticated") && (localStorage.getItem("superuser") === "true")) {
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
                            <FormGroup style={{ margin: "24px" }}>
                                {tags.map((tag) => {
                                    return (
                                        <FormControlLabel control={<Checkbox value={tag.id} onChange={handleCheckboxClick} />} label={tag.name} />
                                    );
                                })}

                            </FormGroup>

                        </div>
                        <Button style={{ backgroundColor: "#00192F", color: "white", margin: "24px" }} onClick={() => { AddMovies(title, description, image, addedTags, setMessage) }}>Add Movie</Button>
                        <span>{message}</span>
                    </Box>
                </Grid>

            </div>
        )
    } else {
        navigate('/signin');
    }

}

export default Addmovie;
