import React, { useState, useEffect } from "react";

function TransActionComponents({ transaction }) {
  const [searchItem, setSearchItem] = useState("");
  const [filterTransaction, setFilterTransaction] = useState([]);
  const [Transaction, setTransaction] = useState(transaction);

  const filterHandler = (value) => {
    const temp = [...transaction];
    const updated = temp.filter((t) => t.description.includes(value));
    setFilterTransaction(updated);
  };

  useEffect(() => {
    filterHandler(searchItem);
  }, [searchItem, transaction]);

  const changeHandler = (e) => {
    const value = e.target.value;
    setSearchItem(value);
    // filterHandler(value);
  };

  return (
    <section className="result">
      {transaction.length ? (
        <input
          placeholder="Search..."
          type="text"
          value={searchItem}
          onChange={changeHandler}
        />
      ) : (
        <div></div>
      )}
      <div>
        {filterTransaction.length ? (
          filterTransaction.map((t) => (
            <>
              <div
                className="eachTransaction"
                style={
                  t.type === "income"
                    ? {
                        borderBottom: "2px solid rgb(60, 182, 23)",
                        borderLeft: "2px solid rgb(60, 182, 23)",
                      }
                    : {
                        borderBottom: "2px solid red",
                        borderLeft: "2px solid red",
                      }
                }
                key={t.id}
              >
                {t.description}
                <span>{t.amount}</span>
              </div>
            </>
          ))
        ) : (
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            No Item Found
          </div>
        )}
      </div>
    </section>
  );
}

export default TransActionComponents;
