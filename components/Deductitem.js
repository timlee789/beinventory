import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cla from './form.module.css';




function Deductitem(props) {
  const { register, handleSubmit } = useForm();
  const [inputdata, setInputdata] = useState()

  async function onSubmit(data){
   
    const res = await fetch('/api/posts',
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id: data.id,
          pcs_qty: props.pcs_qty - data.pcs_qty,
        })   
      }
    )
    
    const data2 = await res.json()
    setInputdata(data.pcs_qty)
    
  }
  function btnSubmit() {
   //setInputdata(data2)
  }
 
  return (
    <div>
      
    <section >
    <Card sx={{ minWidth: 275, margin: 5, backgroundColor: '#e9edee'}} >
      <CardContent key={props._id}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        UPC : {props.upc_code}
        </Typography>
        <Typography  variant="h6" component="div">
        {props.product_name}
        </Typography>
        <Typography variant="h5" color="text.primary">
        Location Bin: {props.bin}
        </Typography>
       
        <Typography variant="h6">
        Total PCS Qty: {props.pcs_qty}
        </Typography>
      </CardContent>
        
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type='number' {...register ('pcs_qty',{ valueAsNumber: true })} id='pcs_qty' className={cla.deductform}/>
    <div>{inputdata}</div>
    <input type='hidden' {...register ('id')} defaultValue={props.id} ></input><br/>
    <input type='submit'   className={cla.btn} ></input>
   
    </form>
    </Card>
    </section>
</div>
  )
}

export default Deductitem