import React, { useState } from "react";
import "./Loan.css";
import Modal from "./Modal";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);

  const [visible, setVisible] = useState(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
    number: "",
    emoloyee: false,
    salary: "",
  });

  function handelName(e) {
    setInputValue({ ...inputValue, name: e.target.value });
  }

  function handelSubmit(e) {
    e.preventDefault();
    // setErrorMessage(null);
    if (inputValue.number.length < 11 || inputValue.number.length > 15) {
      setErrorMessage("The number is not Allowed ");
    } else if (inputValue.age < 18 || inputValue.age > 50) {
      setErrorMessage("The Age is not Allowed !Showd be between 18 and 50");
    } else {
      setErrorMessage(null);
      setVisible(false);
    }
    setVisible(true);
  }

  function handelDiv() {
    if (visible) {
      setVisible(false);
    }
  }

  const handelDisabled =
    inputValue.name === "" || inputValue.number === "" || inputValue.age === "";

  return (
    <div className="container" onClick={handelDiv}>
      <form>
        <h3>Requesting a Loan</h3>
        <hr />
        <label>Name</label>
        <input type="text" value={inputValue.name} onChange={handelName} />

        <label>Number</label>
        <input
          type="number"
          value={inputValue.number}
          onChange={(e) => {
            setInputValue({ ...inputValue, number: e.target.value });
          }}
        />

        <label>Age</label>
        <input
          type="number"
          value={inputValue.age}
          onChange={(e) => {
            setInputValue({ ...inputValue, age: e.target.value });
          }}
        />

        <label>Are you an Employee</label>
        <input
          type="checkbox"
          checked={inputValue.emoloyee}
          onChange={(e) => {
            setInputValue({ ...inputValue, emoloyee: e.target.checked });
          }}
        />

        <label>Salary</label>
        <select
          value={inputValue.salary}
          onChange={(e) => {
            setInputValue({ ...inputValue, salary: e.target.value });
          }}>
          <option>Chose your salary ?</option>
          <option>500$</option>
          <option>1000$</option>
        </select>

        <button
          id="button"
          onClick={handelSubmit}
          disabled={handelDisabled}
          className={handelDisabled ? "disable" : ""}>
          Submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} visible={visible} />
    </div>
  );
}
