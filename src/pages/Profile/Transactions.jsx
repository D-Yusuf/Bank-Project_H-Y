// Import necessary modules from React and custom API functions
import React, { useEffect, useState } from "react";
import { getUserTransactions } from "../../api/auth"; // Import the function to fetch user transactions

const Profile = () => {
  // State to hold the list of transactions
  const [transactions, setTransactions] = useState([]);

  // State to manage loading status (true while data is being fetched)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Fetch the transactions from the API
        const data = await getUserTransactions();
        setTransactions(data); // Store the transactions in state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Failed to fetch transactions", error); // Log any error during data fetching
        setLoading(false); // Set loading to false even if an error occurs
      }
    };

    fetchTransactions(); // Call the function to fetch transactions
  }, []); // Empty dependency array ensures this runs only once (on component mount)

  return (
    <div className="profile-container">
      {/* Header for the transaction history */}
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>

      {/* Display a loading message while the transactions are being fetched */}
      {loading ? (
        <p>Loading transactions...</p>
      ) : (
        <div className="transaction-list">
          {/* If no transactions are found, display a message */}
          {transactions.length === 0 ? (
            <p>No transactions available.</p>
          ) : (
            // Display a list of transactions if data is available
            <ul className="list-none">
              {transactions.map((transaction) => (
                // Each transaction is rendered as a list item
                <li key={transaction.id} className="border-b p-4">
                  {/* Display the transaction amount */}
                  <p>Amount: ${transaction.amount}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
