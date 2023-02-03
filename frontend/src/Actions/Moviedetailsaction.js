import Request from './Request';
import axios from 'axios';
import { config } from './Constants';

export async function GetMovieDetails(id, setMovie, setTags, setViews) {
    let username = localStorage.getItem("userEmail")
    let data = { id, username };
    const body = JSON.stringify(data);
    console.log(body)
    const res = await axios.post(Request.movieDetails, body, config);
    console.log(res.data.tags)
    setMovie(res.data.movie);
    setTags(res.data.tags);
    setViews(res.data.views);
}
