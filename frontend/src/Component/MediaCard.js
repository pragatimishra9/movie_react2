import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { BASE_URL } from '../Actions/Constants';

export default function MediaCard(props) {
    return (
        <Card sx={{ maxWidth: 345, margin: 5 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={BASE_URL + props.image}
                title={props.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                    {props.image}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Link href={"/movie/" + props.id} underline="none" sx={{ color: "blue" }}> Learn More</Link></Button>
            </CardActions>
        </Card>
    );
}