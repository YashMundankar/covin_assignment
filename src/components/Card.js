import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import {useSelector} from "react-redux"



export default function BasicCard() {
    const data=useSelector((state)=>state.SingleUserDataReducer)
  
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
