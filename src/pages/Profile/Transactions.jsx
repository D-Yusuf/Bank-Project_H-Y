import React, { useState } from "react";
import { getUserTransactions } from "../../api/auth";
import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Profile = () => {
  const { data: transactions, isPending } = useQuery({
    queryKey: ["getUserTransactions"],
    queryFn: getUserTransactions,
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [filterOptions, setFilterOptions] = useState({
    all: false,
    deposit: false,
    withdraw: false,
    transfer: false,
    date: false,
  });

  function toNormaldate(time) {
    const date = new Date(time);
    return date.toLocaleString();
  }

  const handleCheckboxChange = (e) => {
    setFilterOptions({
      ...filterOptions, //yousef this ... will copy all the states and update only the checked one
      [e.target.value]: e.target.checked, //im setting the value as the checked value
    });
  };

  const filteredTransactions = () => {
    if (!transactions) return [];

    if (filterOptions.all) return transactions;

    return transactions.filter((transaction) => {
      // Filter by type (deposit, withdraw, transfer)
      const matchesType =
        (filterOptions.deposit && transaction.type === "deposit") ||
        (filterOptions.withdraw && transaction.type === "withdraw") ||
        (filterOptions.transfer && transaction.type === "transfer");

      return matchesType;
    });
  };

  return (
    <>
      <header className="fixed bg-secondary px-5 py-8 w-full">
        <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
        <div className="flex gap-4 flex-row bg-black">
          <h1>Start Date</h1>
          <DatePicker
            className="text-black"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <h1>End Date</h1>
          <DatePicker
            className="text-black"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />

          <label htmlFor="all">
            All
            <input
              id="all"
              type="checkbox"
              value="all"
              onChange={handleCheckboxChange}
              checked={filterOptions.all}
            />
          </label>

          <label htmlFor="deposit">
            Deposit
            <input
              id="deposit"
              type="checkbox"
              value="deposit"
              onChange={handleCheckboxChange}
              checked={filterOptions.deposit}
            />
          </label>

          <label htmlFor="withdraw">
            Withdraw
            <input
              id="withdraw"
              type="checkbox"
              value="withdraw"
              onChange={handleCheckboxChange}
              checked={filterOptions.withdraw}
            />
          </label>

          <label htmlFor="transfer">
            Transfer
            <input
              id="transfer"
              type="checkbox"
              value="transfer"
              onChange={handleCheckboxChange}
              checked={filterOptions.transfer}
            />
          </label>

          <label htmlFor="date">
            Date
            <input
              id="date"
              type="checkbox"
              value="date"
              onChange={handleCheckboxChange}
              checked={filterOptions.date}
            />
          </label>
        </div>
      </header>

      <div className="pt-32 p-5">
        {!transactions ? (
          <p>Loading transactions...</p>
        ) : (
          <div className="transaction-list">
            {filteredTransactions().length === 0 ? (
              <p>No transactions available.</p>
            ) : (
              <ul className="list-none">
                {filteredTransactions().map((transaction) => (
                  <li key={transaction._id} className="border-b p-4">
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
    </>
  );
};

export default Profile;
