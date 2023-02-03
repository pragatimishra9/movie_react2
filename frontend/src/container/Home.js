import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from '../Component/Navbar';
import MediaCard from '../Component/MediaCard';
import { GetMovies } from '../Actions/Homeaction';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        GetMovies(setMovies);
    }, [setMovies])

    if (localStorage.getItem("isAutenticated")) {
        return (
            <div>
                <Navbar />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        {movies.map((movie) => {
                            return (
                                <Grid item xs={4} >
                                    <MediaCard id={movie.id} image={movie.image} title={movie.title} description={movie.description} />
                                </Grid>
                            )
                        })}


                    </Grid>
                </Box>

            </div>
        )
    } else {
        navigate("/signin");
    }

}

export default Home
