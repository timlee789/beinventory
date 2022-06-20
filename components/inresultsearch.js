import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useForm } from 'react-hook-form';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cla from './form.module.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function InResultsearch(props) {

  const { register, handleSubmit } = useForm();
  const [inputdata, setInputdata] = useState();
  const [inbin, setInbin] = useState();

  async function onSubmit(data){

    const res = await fetch('/api/posts',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)   
      }
    ) 
    const data2 = await res.json()
    setInputdata(data.pcs_qty);
    setInbin(data.bin)
    document.getElementById('bin').value='';
    document.getElementById('pcs_qty').value='';
    

  }
  return (
        <div>
          <div className={cla.result}>{inbin}</div>
          <div className={cla.result}>{inputdata}</div>
           <section >
    <Card sx={{ minWidth: 275, margin: 5, backgroundColor: '#e9edee'}} >
      <CardContent key={props._id}>
        <Typography  variant="h6" component="div">
        {props.product_name}
        </Typography>
      </CardContent>
       <form onSubmit={handleSubmit(onSubmit)}>
      
    <input type='text' id='bin' {...register ('bin')} placeholder="BIN Code"  className={cla.deductform}/><br/>
    <input type='number' id='pcs_qty' {...register ('pcs_qty',{ valueAsNumber: true })}  placeholder="IN Quantity" className={cla.deductform}/>
    <input type='hidden' {...register ('product_name')} defaultValue={props.product_name} ></input><br/>
    <input type='hidden' {...register ('item_code')} defaultValue={props.item_code} ></input><br/>
    <input type='hidden' {...register ('box_qty')} defaultValue={props.box_qty} ></input><br/>
    <input type='hidden' {...register ('upc_code')} defaultValue={props.upc_code} ></input><br/>
    <button size="small" className={cla.btn} >ADD Inventory</button>
    </form>
    </Card>
    </section>
     </div>
  );
}

