import React, { useState } from 'react';
import axios from 'axios';

function SearchPaymentDetails() {
    const [userId, setUserId] = useState('');
  const [userTransactions, setUserTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://game-app-api.vercel.app/api/user/getallusertrasactions/${userId}`);
      setUserTransactions(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  return (
    <>
     <div>
      <label>
        Enter User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : userTransactions.length > 0 ? (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {userTransactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction._id}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions available for this user.</p>
      )}
    </div>

    </>
  )
}

export default SearchPaymentDetails