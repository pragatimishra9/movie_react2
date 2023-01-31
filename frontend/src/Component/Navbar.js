import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.clear();
        navigate("/")
    }
    if (localStorage.getItem("isAutenticated")) {
        return (
            <div className="App">
                <AppBar position='static'>
                    <Toolbar>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link href="/" underline="none" sx={{ color: "white" }}> Movies</Link>

                        </Typography>



                        <Link href="/addmovie"><Button style={{ backgroundColor: "#00192F", color: "white", margin: "10px" }}>Add Movies</Button></Link>
                        <Button style={{ backgroundColor: "#EF476F", color: "white", margin: "10px" }} onClick={handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    } else {
        return (
            <div className="App">
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link href="/" underline="none" sx={{ color: "white" }}> Movies</Link>

                        </Typography>
                        <Link href="/signin"><Button style={{ backgroundColor: "#0B67B8", color: "white", margin: "10px" }}>Login</Button></Link>
                    </Toolbar>
                </AppBar>
            </div>
        );

    }

}

export default Navbar;
