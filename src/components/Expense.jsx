import ExpenseItem from "./ExpenseItem";
import { expenses } from "../data/expense";
import "./Expense.css";
import NewExpense from "./newExpense";
export default function Expense() {
  return (
    <>
      <div className="expenses">
        <NewExpense></NewExpense>
        {expenses.map((expense) => {
          return <ExpenseItem data={expense} key={expense.id}></ExpenseItem>;
        })}
      </div>
    </>
  );
}
