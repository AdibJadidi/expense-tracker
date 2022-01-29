import React,{useState} from 'react'
import OverViewComponenet from './OverViewComponenet';
import TransActionComponents from './TransActionComponents';

function ExpenseApp() {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transaction, setTransaction] = useState([]);

    const addTransaction = (formState) => {
        const newTransaction= {...formState,id:Date.now()};
        setTransaction([ ...transaction,newTransaction]);
        formState.type==="expense"? setExpense(expense+parseFloat(formState.amount)) : setIncome(income+parseFloat(formState.amount));
        
    }
    
    return (
        <section className="container">
            <OverViewComponenet income={income} expense={expense} addTransaction={addTransaction} />
            <TransActionComponents transaction={transaction} />
        </section>
    )
}

export default ExpenseApp
