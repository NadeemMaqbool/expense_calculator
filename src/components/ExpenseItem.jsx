import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  // eslint-disable-next-line react/prop-types
  const { date, title, details, amount } = props.data;
  return (
    <>
      <div className="expenseItem">
        <div className="expense_date">
          <ExpenseDate date={date}></ExpenseDate>
        </div>
        <div className="expense_description">
          <h6 className="expense_title">{title}</h6>
          <p className="expense_details">{details}</p>
          <div className="expense_price">{amount}</div>
        </div>
      </div>
    </>
  );
}
