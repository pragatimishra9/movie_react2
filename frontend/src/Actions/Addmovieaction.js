import Request from './Request';
import axios from 'axios';
import { config } from './Constants';



export async function AddMovies(title, description, image, setMessage) {


    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("image", image, image.name)

    const config2 = {
        headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            'Accept': 'application/json'
        }
    }
    const res = await axios.post(Request.movies, formData, config2);
    setMessage(res.data.message)

}
