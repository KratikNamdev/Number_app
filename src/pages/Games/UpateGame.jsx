import React, { useState } from 'react';
import axios from 'axios';

function UpateGame() {
    const [gameId, setGameId] = useState('');
    const [gameResult, setGameResult] = useState({});
    const [loading, setLoading] = useState(false);
  
    const handleSearch = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://game-app-api.vercel.app/api/updateresult/${gameId}`);
        setGameResult(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
  return (
    <div>
    <label>
      Enter Game ID:
      <input type="text" value={gameId} onChange={(e) => setGameId(e.target.value)} />
    </label>
    <button onClick={handleSearch}>Search</button>
    {loading ? (
      <p>Loading...</p>
    ) : Object.keys(gameResult).length > 0 ? (
      <div>
        <h2>Game Result for ID: {gameId}</h2>
        <p>Result: {gameResult.result}</p>
        {/* Display other properties from the gameResult object if needed */}
      </div>
    ) : (
      <p>No result available for this game ID.</p>
    )}
  </div>
  )
}

export default UpateGame