import "./Charts.css";

const Charts = ({ setExpenseDataByYear, selectedYear }) => {
  const getSelectOption = (e) => {
    const option = e.target.value;
    setExpenseDataByYear(option);
  };

  return (
    <form className="chartsContainer">
      <div className="selectOptions">
        <label className="label">Filter By Year</label>
        <select
          name="filterByYear"
          className="options"
          value={selectedYear}
          onChange={getSelectOption}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </form>
  );
};

export default Charts;
