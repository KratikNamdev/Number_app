import React, { useState } from 'react';
import axios from 'axios';

import { TextField, Button, Container, Stack } from '@mui/material';

function AddGame() {

  const [gameData, setGameData] = useState({
    name: '',
    description: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://game-app-api.vercel.app/api/game/create', gameData);
      console.log('Game created:', response.data);
    
    } catch (error) {
      console.error('Error creating game:', error);
 
    }
  };

  return (
    <>
     <div className="create-game-form">
      <h2>Create a New Game</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Game Name:</label>
          <input type="text" name="name" value={gameData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea name="description" value={gameData.description} onChange={handleChange} />
        </div>
      
        <button type="submit">Create Game</button>
      </form>
    </div>
    </>
  )
}

export default AddGame