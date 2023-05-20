import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ updateData }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const ToggleExpenseForm = () => {
    setShowExpenseForm(!showExpenseForm);
  };
  const updateExpensesData = (expenseData) => {
    updateData(expenseData);
  };
  return (
    <div>
      {(!showExpenseForm && (
        <button onClick={ToggleExpenseForm} className="button btn-secondry">
          Show Expense Form
        </button>
      )) || (
        <ExpenseForm
          ToggleForm={ToggleExpenseForm}
          updateDataForm={updateExpensesData}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
