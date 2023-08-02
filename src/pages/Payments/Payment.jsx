import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';


function Payment() {

    const [data, setData] = useState([
        { id: 1, name: 'John Doe', age: 30,  walletbalance : 500},
        { id: 2, name: 'Jane Smith', age: 25, walletbalance : 500 },
        { id: 3, name: 'Mike Johnson', age: 28, walletbalance : 500 },
      ]);


      const handleEdit = (id) => {
        // Add your edit logic here
        console.log(`Edit clicked for id: ${id}`);
      };
    
      const handleDelete = (id) => {
        // Add your delete logic here
        setData(data.filter((item) => item.id !== id));
      };
    

      
  return (
    <>
        <TableContainer component={Paper}>
      <Table aria-label="example table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Wallet balance</TableCell>

            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.walletbalance}</TableCell>

              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleEdit(row.id)}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(row.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Payment