/* eslint-disable react/prop-types */
export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <>
      <div className=""> {month} </div>
      <div className="expenseDate_day"> {day} </div>
      <div> {year} </div>
    </>
  );
}