import Request from './Request';
import axios from 'axios';
import { config } from './Constants';



export async function GetMovies(setMovies) {

    const res = await axios.get(Request.movies, config);
    setMovies(res.data)
}
