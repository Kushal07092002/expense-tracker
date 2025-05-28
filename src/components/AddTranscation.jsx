import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const generateID = () => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

const AddTranscation = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { transactions, addTransaction } = useContext(GlobalContext);
  const handleSubmit = (e, type) => {
    e.preventDefault();

    const newTransaction = {
      id: generateID(),
      text,
      amount: +amount //parseint()
    };
    addTransaction(newTransaction);
  };

  console.log(transactions);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label Htmlfor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={(e) => handleSubmit(e, "income")}>
          Add Income
        </button>
        <button className="btn" onClick={(e) => handleSubmit(e, "expense")}>
          Add Expense
        </button>
      </form>
    </>
  );
};

export default AddTranscation;
