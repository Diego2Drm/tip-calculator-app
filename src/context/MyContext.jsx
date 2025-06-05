import React, { createContext, useState } from "react";

const Context = createContext();

const MyContextProvider = ({ children }) => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");

  // Handle Inputs
  const handleBill = (event) => {
    setBill(Number(event.target.value));
  }
  const handlePeople = (event) => {
    setPeople(Number(event.target.value));
  }

  // Calculator
  const [calculator, setCalculator] = useState("");
  const handleClick = (value) => {
    setCalculator(value / 100);
  }
  const handleClear = () => {
    setBill("");
    setPeople("");
    setCalculator("");
  }

  const totalAmount =  bill && people && calculator ? (bill / people).toFixed(2) * calculator : null;
  const total =  bill && people && calculator ? (bill / people) + totalAmount : null;

  const value = {
    bill,
    handleBill,
    people,
    handlePeople,
    handleClick,
    totalAmount,
    total,
    handleClear
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { Context, MyContextProvider };