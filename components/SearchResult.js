import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SearchResult({searchResults}) {
  return (
        <div>
        {searchResults.map(data => (
       <div key={data._id}>
    <Card sx={{ minWidth: 275, margin:5, backgroundColor: '#e9edee' }} >
      <CardContent >
      <Typography  variant="h5" color="primary">
        Bin: {data.bin}
        </Typography>
        <Typography variant="h6" component="div">
        {data.product_name}
        </Typography>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        UPC : {data.upc_code}
        </Typography> */}
        <Typography variant="body2">
        ITEM CODE: {data.item_code}
        </Typography>
        <Typography variant="h5">
       Qty: {data.pcs_qty}
        </Typography>
      </CardContent> 
    </Card>
    </div>
     ))}
     </div>
  );
}

