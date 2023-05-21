/* eslint-disable */
import { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = ({ ToggleForm, updateDataForm }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleDetails = (e) => {
    setDetails(e.target.value);
  };

  const SubmitExpenseForm = (e) => {
    e.preventDefault();
    if (title === "" || amount === "" || date === "" || details === "") {
      setError(true);
      return;
    }
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
      details: details,
      id: Math.random().toString(),
    };

    updateDataForm(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setDetails("");
    setError(false);
  };

  const ToggleExpenseForm = () => {
    ToggleForm();
  };

  return (
    <div className="new_expense_container">
      {error && <p className="error">Please fix the errors first!</p>}
      <h3>Add New Expense</h3>

      <div>
        <form onSubmit={SubmitExpenseForm}>
          <div className="form_row">
            <label className="label">Title</label>
            <input
              type="text"
              className="field"
              value={title}
              onChange={handleTitle}
            />
          </div>
          <div className="form_row">
            <label className="label">Amount</label>
            <input
              type="number"
              min="0.0"
              className="field"
              value={amount}
              onChange={handleAmount}
            />
          </div>
          <div className="form_row">
            <label className="label">Date</label>
            <input
              type="date"
              className="field"
              value={date}
              onChange={handleDate}
            />
          </div>
          <div className="form_row">
            <label className="label">Details</label>
            <textarea
              rows="5"
              className="field_textarea"
              onChange={handleDetails}
              value={details}
            ></textarea>
          </div>
          <div className="form_row form_button">
            <button className="button" type="submit">
              Add Expense
            </button>
            <button className="button btn-secondry" onClick={ToggleExpenseForm}>
              Collapse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
