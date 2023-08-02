import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameTable from './GameTable';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';

// function createData(name, calories, fat, carbs, protein) {
  
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, "Active", 24, 4.0),
//     createData('Ice cream sandwich', 237,  "Active", 37, 4.3),
//     createData('Eclair', 262,  "In-Active", 24, 6.0),
    
 
//   ];

function AllGameList() {
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://game-app-api.vercel.app/api/game/getallgames')
      .then((response) => {
        setGamesData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);



  return (
    <div className='gamelist'>
    <div className='gamelist-heading'>Game List</div>
          {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Game Name</TableCell>
            <TableCell align="right">Active User</TableCell>
            <TableCell align="right">Actions</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

    {/* <table>
      <thead>
        <tr>
          <th>Game Name</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Bets</th>
        </tr>
      </thead>
      <tbody>
        {data.map((game) => (
          <tr key={game._id}>
            <td>{game.name}</td>
            <td>{game.time.start}</td>
            <td>{game.time.end}</td>
            <td>
              <ul>
                {game.bets.map((bet) => (
                  <li key={bet._id}>
                    <strong>User ID:</strong> {bet.userId._id}, <strong>Number:</strong> {bet.userBet[0].number}, <strong>Amount:</strong> {bet.userBet[0].amount}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table> */}
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <GameTable data={gamesData} />
      )}
    </div>
    </div>
  )
}

export default AllGameList