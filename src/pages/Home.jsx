import React, { useState } from "react";
import { deposit, getMyInfo, withdraw } from "../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Home = () => {
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const { data, isPending } = useQuery({
    queryKey: ["getInfo"],
    queryFn: getMyInfo,
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => deposit(depositAmount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getInfo"] });
    },
  });
  function handleDeposit(e) {
    e.preventDefault();
    mutate();
  }
  const { mutate: withdrawFunds } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdraw(withdrawAmount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getInfo"] });
    },
  });
  function handleWithdraw(e) {
    e.preventDefault();
    withdrawFunds();
  }

  function chooseTransaction() {
    const selectBox = document.getElementById("selectBox");
    const chosenTransaction = selectBox.options[selectBox.selectedIndex].value;
    document.getElementById(chosenTransaction).classList.remove("hidden");
    const unchosenTransactions = [...selectBox.options].filter(
      (option) =>
        option.value !== selectBox.options[selectBox.selectedIndex].value
    );
    unchosenTransactions.forEach((option) =>
      document.getElementById(option.value).classList.add("hidden")
    );
  }

  return (
    <div className="flex flex-col gap-10 items-center text-center bg-secondary text-white p-6 sm:p-12 md:p-24 lg:p-32 rounded-lg ">
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 md:h-auto h-full   items-center justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Welcome back{" "}
        <span className="text-accent font-bold">{data?.username}</span>
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl">
        Your balance:{" "}
        <span className="bg-accent p-2 rounded-lg text-lg sm:text-xl md:text-2xl">
          ${data?.balance}
        </span>
      </p>
    </div>
    <div className="flex flex-col">
      <label htmlFor="selectBox" className="text-lg sm:text-xl font-bold mb-2">
        Choose Transaction
      </label>
      <select
        id="selectBox"
        name="transaction"
        className="bg-secondary text-white p-2 sm:p-3 rounded-lg border border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent hover:bg-opacity-90 transition duration-300"
        onChange={chooseTransaction}
      >
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
    </div>

    <form id="deposit" onSubmit={handleDeposit} className="flex flex-col">
      <input
        className="px-4 py-2 text-black rounded-t-md text-lg sm:text-xl"
        type="number"
        onChange={(e) => setDepositAmount(e.target.value)}
      />
      <button className="bg-accent p-2 rounded-b-md text-lg sm:text-xl" type="submit">
        Deposit
      </button>
    </form>
    <form
      id="withdraw"
      onSubmit={handleWithdraw}
      className="flex flex-col hidden"
    >
      <input
        className="px-4 py-2 text-black rounded-t-md text-lg sm:text-xl"
        type="number"
        onChange={(e) => setWithdrawAmount(e.target.value)}
      />
      <button className="bg-accent p-2 rounded-b-md text-lg sm:text-xl" type="submit">
        Withdraw
      </button>
    </form>
  </div>

  );
};

export default Home;
