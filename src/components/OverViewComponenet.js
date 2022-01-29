import React, { useState } from "react";
import TransActionForm from "./TransActionForm";

function OverViewComponenet({ income, expense, addTransaction }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p>balance : {income - expense}</p>
        <button
          className="btn"
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}
      <div className="resultSection">
        <div className="amountBox">
          Expense <span style={{ color: "red" }}> {expense} $</span>
        </div>
        <div className="amountBox">
          Income <span> {income} $ </span>
        </div>
      </div>
    </>
  );
}

export default OverViewComponenet;
