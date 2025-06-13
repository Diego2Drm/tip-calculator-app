import React, { createContext, useEffect, useState } from "react";

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
    if (event.target.value) {
      setCalculator("")
      setIsActive(null)
    }
  }
  // Calculator
  const [isActive, setIsActive] = useState(null);
  const [calculator, setCalculator] = useState("");
  
  const handleClick = (value, id) => {
    setCalculator(value / 100);
    setIsActive(id)
    setCustom("")
  }
  const handleClear = () => {
    setBill("");
    setPeople("");
    setCalculator("");
    setCustom("");
    setIsActive(null)
  }

  const [hasBill, setHasBill] = useState(false);
  const [hasPeople, setHasPeople] = useState(false);

  useEffect(() => {
    if (!bill && people > 0) {
      setHasBill(true);
    } else if (bill > 0 && !people) {
      setHasPeople(true);
    } else {
      setHasBill(false);
      setHasPeople(false);
    }
  }, [bill, people])


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
    handleClear,
    hasBill,
    hasPeople
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { Context, MyContextProvider };