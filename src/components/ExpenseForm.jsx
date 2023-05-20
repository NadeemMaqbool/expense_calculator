import "./NewExpense.css";

const ExpenseForm = ({ ToggleForm }) => {
  const ToggleExpenseForm = () => {
    ToggleForm();
  };
  return (
    <div className="new_expense_container">
      <h3>Add New Expense</h3>
      <div>
        <form>
          <div className="form_row">
            <label className="label">Title</label>
            <input type="text" className="field" />
          </div>
          <div className="form_row">
            <label className="label">Amount</label>
            <input type="number" className="field" />
          </div>
          <div className="form_row">
            <label className="label">Date</label>
            <input type="date" className="field" />
          </div>
          <div className="form_row">
            <label className="label">Details</label>
            <textarea rows="5" className="field_textarea"></textarea>
          </div>
          <div className="form_row form_button">
            <button className="button">Add Expense</button>
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
