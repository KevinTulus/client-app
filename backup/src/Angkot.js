import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Angkot(props) { 
    return (
        <Card sx={{ width: 200, m: 2 }}>
            <CardContent>
            <Typography variant="h5" component="div">
                {props.angkot.no}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.angkot.warna}
            </Typography>
            <Typography variant="body2">
                {props.angkot.nama_angkot}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Tampilkan detail</Button>
            </CardActions>
        </Card>
    );
}
    