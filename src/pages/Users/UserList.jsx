import React from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';

const usersData = [
    { userId: 1, name: 'John Doe', wallet: 'Wallet A', games: 5, balance: 200 },
    { userId: 2, name: 'Jane Smith', wallet: 'Wallet B', games: 3, balance: 150 },
    // Add more user data here as needed
  ];
  

function UserList() {
  return (
   <>
     <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Wallet</TableCell>
            <TableCell>Games</TableCell>
            <TableCell>Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersData.map((user) => (
            <TableRow key={user.userId}>
              <TableCell>{user.userId}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.wallet}</TableCell>
              <TableCell>{user.games}</TableCell>
              <TableCell>{user.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>
  )
}

export default UserList