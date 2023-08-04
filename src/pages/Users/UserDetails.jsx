import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserDetails() {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`https://game-app-api.vercel.app/api/user/getuser/${userId}`);
          setUserDetails(response.data.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching user details:', error);
          setLoading(false);
        }
      };
  
      fetchUserDetails();
    }, [userId]);

    
  return (
    <>
       <div>
      <h2>User Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>User ID: {userDetails._id}</p>
          <p>Number: {userDetails.number}</p>
          <p>Wallet: {userDetails.wallet}</p>
          <p>Password: {userDetails.password}</p>
          <p>Created At: {userDetails.createdAt}</p>
          <p>Updated At: {userDetails.updatedAt}</p>
          {/* Add other user properties as needed */}
        </>
      )}
    </div>
    </>
  )
}

export default UserDetails