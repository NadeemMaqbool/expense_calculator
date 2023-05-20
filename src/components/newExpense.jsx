import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const ToggleExpenseForm = () => {
    setShowExpenseForm(!showExpenseForm);
  };
  return (
    <div>
      {(!showExpenseForm && (
        <button onClick={ToggleExpenseForm} className="button btn-secondry">
          Show Expense Form
        </button>
      )) || <ExpenseForm ToggleForm={ToggleExpenseForm}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
