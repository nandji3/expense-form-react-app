import { useState } from "react";
import ExpenseItem from "./ExpenseItems";

function ExpenseForm() {
    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenseTodo, setExpenseTodo] = useState([]);

    const allExpenses = () => {
        var newExpenses = {
            title: expenseTitle,
            amount: expenseAmount,
            date: expenseDate,
            status: false,
        };
        setExpenseTodo([...expenseTodo, newExpenses]);
    };

    const deleteExpense = (index) => {
        var filtereExpense = expenseTodo.filter((exp, i) => {
            return index !== i;
        });
        setExpenseTodo(filtereExpense); //filtereExpense -- is a array which has return by filter as per given condition
    };

    const editExpense = (index) => {};

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                    alignItems: "center",
                    fontWeight: "bold",
                    //boxShadow: "0 0 3px black",
                }}
            >
                <input
                    type="text"
                    onChange={(e) => setExpenseTitle(e.target.value)}
                    value={expenseTitle}
                    placeholder="Enter Expense Title"
                />
                &nbsp;&nbsp;
                <input
                    type="number"
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    value={expenseAmount}
                    placeholder="Enter Expense Amount"
                />
                &nbsp;&nbsp;
                <input
                    type="date"
                    onChange={(e) => setExpenseDate(e.target.value)}
                    value={expenseDate}
                    placeholder="Enter Expense Date"
                />
                &nbsp;&nbsp;
                <button onClick={allExpenses}>Add Expenses</button>
            </div>
            <hr />
            <ExpenseItem
                expenseTodo={expenseTodo}
                deleteExpense={deleteExpense}
                editExpense={editExpense}
            />
        </>
    );
}
export default ExpenseForm;
