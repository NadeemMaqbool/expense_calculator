import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { expenses } from "../data/expense";
import "./Expense.css";
import NewExpense from "./newExpense";
import Charts from "./Charts/Charts";

export default function Expense() {
  const [expensesData, setExpensesData] = useState(expenses);
  const [selectedYear, setSelectedYear] = useState("2022");

  const updateExpensesData = (expenseData) => {
    setExpensesData((prevExpensesData) => {
      return [expenseData, ...prevExpensesData];
    });
  };

  const filterExpensesData = (year) => {
    setSelectedYear(year);
    const filteredData = expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
    setExpensesData(filteredData);
  };

  return (
    <>
      <div className="expenses">
        <NewExpense updateData={updateExpensesData}></NewExpense>
        <Charts
          setExpenseDataByYear={filterExpensesData}
          selectedYear={selectedYear}
        ></Charts>
        {expensesData.length > 0 ? (
          expensesData.map((expense) => {
            return <ExpenseItem data={expense} key={expense.id}></ExpenseItem>;
          })
        ) : (
          <h4 className="no-record-found">
            No record available for selected Year
          </h4>
        )}
      </div>
    </>
  );
}
