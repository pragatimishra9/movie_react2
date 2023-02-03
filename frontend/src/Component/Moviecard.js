import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Person2Icon from '@mui/icons-material/Person2';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { GetMovieDetails } from '../Actions/Moviedetailsaction';
import { BASE_URL } from '../Actions/Constants';

function Moviecard() {
    const { id } = useParams();
    const theme = useTheme();
    const [tags, setTags] = React.useState([]);
    const [views, setViews] = React.useState("");
    const [movie, setMovie] = React.useState([{
        "title": "title", "description": "description", "views": "views", "image": "image"
    }]);

    React.useEffect(() => {
        GetMovieDetails(id, setMovie, setTags, setViews);
    }, [setMovie, id, setTags, setViews])

    return (
        <div>
            <Navbar />
            <Card sx={{ display: 'flex', margin: 10 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {movie.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {movie.description}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton>
                            <Person2Icon /> {views}
                        </IconButton>
                        <Stack direction="row" spacing={1}>
                            {tags.map((tag) => {
                                return (
                                    <Chip label={tag.name} variant="outlined" />
                                )
                            })}

                        </Stack>

                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 250 }}
                    image={BASE_URL + movie.image}
                    alt="Live from space album cover"
                />
            </Card>

        </div>

    );
}

export default Moviecard;