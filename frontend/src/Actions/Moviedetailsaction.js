import Request from './Request';
import axios from 'axios';
import { config } from './Constants';

export async function GetMovieDetails(id, setMovie) {
    let username = localStorage.getItem("userEmail")
    let data = { id, username };
    const body = JSON.stringify(data);
    console.log(body)
    const res = await axios.post(Request.movieDetails, body, config);
    console.log(res.data)
    setMovie(res.data)
}
