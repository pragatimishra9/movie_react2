import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Navbar from '../Component/Navbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Addtag } from '../Actions/Addtagactions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { GetTags } from '../Actions/Addtagactions';

function Addtags() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [tags, setTags] = useState([]);

    useEffect(() => {
        GetTags(setTags);
    }, [GetTags, setTags]);

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
                    <Typography variant='h4' gutterBottom style={{ margin: "24px" }}>Add Tag</Typography>
                    <div>
                        <TextField
                            label="Name"
                            required
                            fullWidth
                            style={{ margin: "24px" }}
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                    </div>
                    <Button style={{ backgroundColor: "#00192F", color: "white", margin: "24px" }} onClick={() => { Addtag(name, setMessage, setTags) }}>Add Tag</Button>
                    <span>{message}</span>

                    <Stack direction="row" spacing={1} style={{ margin: "24px" }}>
                        {tags.map((tag) => {
                            return (
                                <Chip label={tag.name} variant="outlined" />
                            )
                        })}
                    </Stack>
                </Box>
            </Grid>

        </div>
    )
}

export default Addtags;
