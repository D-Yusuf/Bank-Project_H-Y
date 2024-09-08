import React, { useState } from "react";
import SplitScreen from "../components/SplitScreen/SplitScreen";
import { deposit, withdraw } from "../api/auth";
import { useMutation } from "react-query";
const Home = () => {
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0); //i want to make it useState(the current balance) so i can withdraw from it

  const { mutate } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => deposit(depositAmount),
  });
  function handleDeposit(e) {
    e.preventDefault();
    mutate();
  }
  const { mutate: withdrawFunds } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdraw(withdrawAmount),
  });
  function handleWithdraw(e) {
    e.preventDefault();
    console.log(withdrawAmount);
    withdrawFunds();
  }
  function chooseTransaction(){
    const selectBox = document.getElementById("selectBox");
    const chosenTransaction = selectBox.options[selectBox.selectedIndex].value;
    document.getElementById(chosenTransaction).classList.remove("hidden")
    const unchosenTransactions = [...selectBox.options].filter(option=> option.value !== selectBox.options[selectBox.selectedIndex].value)
    unchosenTransactions.forEach(option=> document.getElementById(option.value).classList.add("hidden"))
    console.log(unchosenTransactions)
  }
  return (
    <div className="flex flex-col items-center">
      
      <select id="selectBox" name="transaction" onChange={chooseTransaction}>
        <option value="deposit">Deposit</option>
        <option onClick={(e)=> console.log(e)} value="withdraw">Withdraw</option>
      </select>
      <form id="deposit" onSubmit={handleDeposit} className="bg-secondary text-white p-10 ">
        <input
          className="p-2 text-black"
          type="number"
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button className="bg-accent p-2 " type="submit">
          Deposit
        </button>
      </form>
      <form id="withdraw" onSubmit={handleWithdraw} className="bg-secondary text-white p-10 hidden">
        <input
          className="p-2 text-black"
          type="number"
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button className="bg-accent p-2 " type="submit">
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default Home;
