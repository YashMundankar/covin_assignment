import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';



export default function BasicCard(props) {
    let data=props.userData;
    
    console.log(data);
  return (
    <Card sx={{ minWidth: 275 }}>
        <CardMedia
        component="img"
        height="194"
        image={data.avatar}
        alt="Avatar"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.id} :   Name
        </Typography>
        <Typography variant="h5" component="div">
        {data.first_name} {data.last_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email :
        </Typography>
        <Typography variant="body2">
        {data.email}
          
        </Typography>
      </CardContent>
    </Card>
  );
}
