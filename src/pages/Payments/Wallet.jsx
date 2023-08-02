import React, { useState } from 'react';
import { TextField, Button, Container, makeStyles } from '@mui/material';



function Wallet() {
    const classes = "";
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // For example, you can log the values for now
    console.log('User ID:', userId);
    console.log('Name:', name);
    console.log('Amount:', amount);
  };

  
  return (
   <>
  <Container maxWidth="sm">
      <form id='walletadd' className={classes.formContainer} onSubmit={handleSubmit}>
        <TextField
          className={classes.formField}
          label="User ID"
          variant="outlined"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          id='walletaddinput'
        />
        <TextField
          className={classes.formField}
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='walletaddinput'
          style={{  marginTop: "30px" }}
        />
        <TextField
          className={classes.formField}
          label="Add Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          id='walletaddinput'
          style={{  marginTop: "30px" }}
        />
        <Button type="submit" variant="contained" color="primary"  style={{  marginTop: "30px" }}>
          Submit
        </Button>
      </form>
    </Container>
   
   </>
  )
}

export default Wallet