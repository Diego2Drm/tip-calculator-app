import React, { createContext, useState } from "react";

const Context = createContext();

const MyContextProvider = ({ children }) => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [custom, setCustom] = useState("");

  // Handle Inputs
  const handleBill = (event) => {
    setBill(Number(event.target.value));
  }
  const handlePeople = (event) => {
    setPeople(Number(event.target.value));
  }
  const handleCustom = (event) => {
    setCustom(Number(event.target.value));
  }
  // Calculator
  const [isActive, setIsActive] = useState(null);
  const [calculator, setCalculator] = useState("");
  const handleClick = (value, id) => {
    setCalculator(value / 100);
    setIsActive(id)
  }
  const handleClear = () => {
    setBill("");
    setPeople("");
    setCalculator("");
    setCustom("");
    setIsActive(null)
  }

  const totalAmount = bill && people ? (bill / people).toFixed(2) * (custom ? custom / 100 : calculator) : null;
  const total = bill && people ? (bill / people) + totalAmount : null;

  const value = {
    bill,
    handleBill,
    people,
    handlePeople,
    isActive,
    handleClick,
    custom,
    handleCustom,
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