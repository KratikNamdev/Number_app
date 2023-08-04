import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';


  

function UserList() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://game-app-api.vercel.app/api/user/getallusers');
        setUsersData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts

    // Since the dependency array is empty, this effect will run only once, on mount.
  }, []);


  return (
   <>
     {/* <TableContainer component={Paper}>
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
    </TableContainer> */}
    <div className='gamelist table-container'>
    <div className='gamelist-heading'>All Users</div>
    <div>

      {loading ? (
        <p>Loading...</p>
      ) : usersData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Number</th>
              <th>Wallet</th>
              <th>Password</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.number}</td>
                <td>{user.wallet}</td>
                <td>{user.password}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
                <td>
                  <Link to={`/user/${user._id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
    </div>
   </>
  )
}

export default UserList