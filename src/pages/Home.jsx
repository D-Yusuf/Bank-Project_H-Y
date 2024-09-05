import React, { useState } from "react";
import SplitScreen from "../components/SplitScreen/SplitScreen";
import { deposit } from "../api/auth";
import { useMutation } from "react-query";
const Home = () => {
    const [depositAmount, setDepositAmount] = useState(0)
    const {mutate} = useMutation({
        mutationKey: ["deposit"],
        mutationFn: ()=> deposit(depositAmount)
    })
    function handleDeposit(e){
        e.preventDefault()
        console.log(depositAmount)
        mutate()

    }
    
  return (
    <div>
        Home
        <form onSubmit={handleDeposit} className="bg-secondary text-white p-10 ">
            <input className="p-2 text-black" type="number" onChange={(e)=>setDepositAmount(e.target.value)}/>
            <button className="bg-accent p-2 " type="submit">Deposit</button>
        </form>
    </div>);
};

export default Home;
