import Request from './Request';
import axios from 'axios';
import { config } from './Constants';



export async function Authenticate(email, password, type, setMessage, navigate, firstName, lastName, repassword) {
    if (type === 'signup') {

        if (email === "" | firstName === "" | password === "" | lastName === "" | repassword === "") {
            setMessage('Please Enter All the details');
        }
        else {
            let data = { firstName, lastName, email, password, repassword, type };

            const body = JSON.stringify(data);
            console.log(body)
            const res = await axios.post(Request.auth, body, config);
            if (res.data.status !== 200) {
                setMessage(res.data.error);
            } else {
                navigate("/signin");
            }
        }

    }
    else if (type === 'signin') {

        if (email === '' | password === "") {
            setMessage('Please enter all the details')
        } else {
            let data = { email, password, type };

            const body = JSON.stringify(data);

            const res = await axios.post(Request.auth, body, config);

            if (res.data.status !== 200) {
                setMessage(res.data.error);
            } else {
                localStorage.setItem('isAutenticated', true);
                localStorage.setItem('user', res.data.name);
                localStorage.setItem('userEmail', res.data.username);
                localStorage.setItem('superuser', res.data.superuser)
                navigate("/");
            }
        }

    }
}