import Request from './Request';
import axios from 'axios';
import { config } from './Constants';



export async function AddMovies(title, description, image, addedTags, setMessage) {

    if (title === "") {
        setMessage('Enter the Movie Title')
    } else if (description === "") {
        setMessage('Enter the description')
    } else if (typeof (image) === 'undefined') {
        setMessage('Upload a movie image')
    } else {
        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("image", image, image.name)
        formData.append('tags', addedTags)
        const config2 = {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Accept': 'application/json'
            }
        }
        const res = await axios.post(Request.movies, formData, config2);
        setMessage(res.data.message)
    }


}


export async function GetTags(setTags) {
    const res = await axios.get(Request.tags, config);
    setTags(res.data)
}