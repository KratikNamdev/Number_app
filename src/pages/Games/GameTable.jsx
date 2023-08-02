import React from 'react';

const GameTable = ({ data }) => {
  return (
    <table>
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
    </table>
  );
};

export default GameTable;
