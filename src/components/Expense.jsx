import ExpenseItem from "./ExpenseItem";
import { expenses } from "../data/expense";
import "./Expense.css";
export default function Expense() {
  return (
    <>
      <div className="expenses">
        {expenses.map((expense) => {
          return <ExpenseItem data={expense} key={expense.id}></ExpenseItem>;
        })}
      </div>
    </>
  );
}
