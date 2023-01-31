import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from '../Component/Navbar';
import MediaCard from '../Component/MediaCard';
import { GetMovies } from '../Actions/Homeaction';

function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        GetMovies(setMovies);
    }, [setMovies])
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
}

export default Home
