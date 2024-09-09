import React, { useState } from "react";
import { getUserTransactions } from "../../api/auth";
import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Transactions = () => {
  const { data: transactions, isPending } = useQuery({
    queryKey: ["getUserTransactions"],
    queryFn: getUserTransactions,
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filterOptions, setFilterOptions] = useState("");
  const [isDateChecked, setIsDateChecked] = useState(false); // State to track if date checkbox is checked

  function toNormaldate(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`; // Format as YYYY-MM-DD
  }

  const handleCheckboxChange = (e) => {
    const checkbox = e.target;
    if (checkbox.value === "date") {
      setIsDateChecked(checkbox.checked); // Update date checkbox state
    } else {
      if (checkbox.checked) {
        if (checkbox.value !== "all") {
          setFilterOptions(checkbox.value);
        } else {
          setFilterOptions("");
        }
      }
    }
  };

  const filterTransactions = (arr) => {
    if (!filterOptions && !isDateChecked) return arr;

    return arr.filter((transaction) => {
      // Filter by transaction type
      const matchesType = filterOptions ? filterOptions.includes(transaction.type) : true;

      // Filter by date if date checkbox is checked
      const transactionDate = new Date(transaction.createdAt);
      const matchesDate = isDateChecked
        ? transactionDate >= startDate && transactionDate <= endDate
        : true;

      return matchesType && matchesDate;
    });
  };

  return (
    <>
      <header className="fixed bg-secondary px-5 py-8 w-full">
        <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">

          
          <label className="flex gap-2" htmlFor="all">
            <p>All</p>
            <input
              id="all"
              type="radio"
              name="typeFilter"
              value="all"
              onChange={handleCheckboxChange}
            />
          </label>

          <label className="flex gap-2" htmlFor="deposit">
            <p>Deposit</p>
            <input
              id="deposit"
              type="radio"
              name="typeFilter"
              value="deposit"
              onChange={handleCheckboxChange}
            />
          </label>

          <label className="flex gap-2" htmlFor="withdraw">
            <p>Withdraw</p>
            <input
              id="withdraw"
              type="radio"
              name="typeFilter"
              value="withdraw"
              onChange={handleCheckboxChange}
            />
          </label>

          <label className="flex gap-2" htmlFor="transfer">
            <p>Transfer</p>
            <input
              id="transfer"
              type="radio"
              name="typeFilter"
              value="transfer"
              onChange={handleCheckboxChange}
            />
          </label>

          <label className="flex gap-2" htmlFor="date">
            <p>Date</p>
            <input
              id="date"
              type="checkbox"
              value="date"
              onChange={handleCheckboxChange}
            />
          </label>
          </div>
          <div className="flex gap-5">
            <div>

              <h1>Start Date</h1>
              <DatePicker
                className="text-black"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                />
            </div>
            <div>

              <h1>End Date</h1>
              <DatePicker
                className="text-black"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                />
            </div>
            </div>
        </div>
      </header>

      <div className="pt-52 p-5">
        {!transactions ? (
          <p>Loading transactions...</p>
        ) : (
          <div className="transaction-list">
            {!transactions.length ? (
              <p>No transactions available.</p>
            ) : (
              <div className="">
                <div className="flex justify-between">
                  <p>Transaction</p>
                  <p>Date</p>
                  <p>Amount</p>
                </div>
                {filterTransactions(transactions).map((transaction) => (
                  <div key={transaction._id} className="border-b p-4 flex justify-between">
                    <p className="w-[32%] text-start uppercase font-bold">{transaction.type}</p>
                    <p className="w-[32%] text-center">{toNormaldate(transaction.createdAt)}</p>
                    <p className={`w-[32%] text-end ${transaction.type === "deposit" ? "text-green-400" : "text-red-600"}`}>
                      ${transaction.amount}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Transactions;
