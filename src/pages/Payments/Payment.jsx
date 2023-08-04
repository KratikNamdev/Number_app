import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';


function Payment() {

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://game-app-api.vercel.app/api/user/gettransactions');
        setTransactions(response.data.data);
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
      <div className='gamelist'>
    <div className='gamelist-heading'>All Transactions</div>
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : transactions.length > 0 ? (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Type</th>
              <th>User ID</th>
              <th>User Number</th>
              <th>User Wallet</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction._id}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.userId._id}</td>
                <td>{transaction.userId.number}</td>
                <td>{transaction.userId.wallet}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
    </div>
    </>
  )
}

export default Payment