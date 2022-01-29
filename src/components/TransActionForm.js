import React, { useState } from "react";

function TransActionForm({ addTransaction, setIsShow }) {
  const [formState, setFormState] = useState({
    type: "expense",
    amount: 0,
    description: "",
  });

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formState);
    setIsShow((prevState) => !prevState);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Amount"
        type="number"
        name="amount"
        onChange={changeHandler}
      />
      <input
        placeholder="Description"
        type="text"
        name="description"
        onChange={changeHandler}
      />
      <div className="radio">
        <input
          type="radio"
          name="type"
          value="expense"
          checked={formState.type === "expense"}
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          checked={formState.type === "income"}
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <button className="btn primary" type="submit">
        Add Transcation
      </button>
    </form>
  );
}

export default TransActionForm;
