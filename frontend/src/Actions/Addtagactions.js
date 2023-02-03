import Request from './Request';
import axios from 'axios';
import { config } from './Constants';



export async function Addtag(name, setMessage, setTags) {


    let data = { name };
    const body = JSON.stringify(data);

    const res = await axios.post(Request.tags, body, config);
    setMessage(res.data.message)
    setTags((pre) => [...pre, data])

}

export async function GetTags(setTags) {
    const res = await axios.get(Request.tags, config);
    setTags(res.data)
}