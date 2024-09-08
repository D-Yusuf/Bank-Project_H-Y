// Import necessary modules from React and custom API functions
import React, { useEffect, useState } from "react";
import { getUserTransactions } from "../../api/auth"; // Import the function to fetch user transactions
import { useQuery } from "react-query";

const Profile = () => {
  // State to hold the list of transactions
  // const [transactions, setTransactions] = useState([]);
  function toNormaldate(time) {
    const date = new Date(time);
    const formattedDate = date.toLocaleString(); // e.g., "9/5/2024, 6:39:38 PM" in US locale
    console.log(formattedDate);
    return formattedDate;
  }
  const { data: transactions, isPending } = useQuery({
    queryKey: ["getUserTransactions"],
    queryFn: getUserTransactions,
    /**data prototype
     *
     * amount: ,
     * createdAt: date,
     * from: userId, (only for transfers)
     * to: userId, (only for transfers)
     * type: ("deposit" || "withdraw" || "transfer"),
     * updatedAt: date, (no need)
     * __v: ,(no need)
     * _id: transactionId, (no need)
     *
     */
  });

  // if (!isPending) {
  //   console.log(transactions);
  // }

  return (
    <div className="profile-container">
      {/* Header for the transaction history */}
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>

      {/* Display a loading message while the transactions are being fetched */}
      {!transactions ? (
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
                <li key={transaction._id} className="border-b p-4">
                  {/* Display the transaction amount */}
                  <p className="uppercase font-bold">{transaction.type}</p>
                  <p>{toNormaldate(transaction.createdAt)}</p>
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
