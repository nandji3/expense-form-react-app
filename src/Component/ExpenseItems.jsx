function ExpenseItem({ expenseTodo, deleteExpense, editExpense }) {
    const btnStyle = {
        fontSize: "0.7rem",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "red",
        border: "1px solid dark",
        padding: "0.2rem",
        borderRadius: "5px",
        margin: "7px",
    };

    return (
        <div
            style={{
                fontWeight: "bold",
                textAlign: "center",
            }}
        >
            <h2>Expense Details</h2>
            <hr />

            {expenseTodo.map((expense, index) => {
                return (
                    <div key={index}>
                        <li id={index}>
                            {expense.title} -- {expense.amount} --{" "}
                            {expense.date}
                            <button
                                onClick={() => editExpense(index)}
                                style={{
                                    ...btnStyle,
                                    backgroundColor: "#1793bd",
                                }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteExpense(index)}
                                style={{
                                    ...btnStyle,
                                    backgroundColor: "red",
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    </div>
                );
            })}
        </div>
    );
}
export default ExpenseItem;
