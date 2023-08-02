import React from 'react'
import { TextField, Button, Container, Stack } from '@mui/material';

function AddGame() {
  return (
    <>
      <div className='addgame'>
      <div className='gamelist-heading'>Add Game</div>
<div className='gamedetails'>
<TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Game Name"
          variant="outlined"
        />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Game Name"
          variant="outlined"
        />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Game Name"
          variant="outlined"
        />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Game Name"
          variant="outlined"
        />
          <Button variant="contained" color="primary" style={{ margin: "5px",marginTop:"15px" }}>
          Add Game
        </Button>
</div>
      </div>
    </>
  )
}

export default AddGame