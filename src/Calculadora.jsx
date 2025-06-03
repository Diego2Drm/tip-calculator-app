import React, { useState } from "react";

function Calculadora() {
  const [input, setInput] = useState("");
  
  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input)); // ⚠️ eval puede ser peligroso, usa una librería de matemáticas en proyectos reales
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "200px", margin: "auto" }}>
      <h2>Calculadora</h2>
      <input type="text" value={input} readOnly />
      <div>
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "/", "="].map((item) => (
          <button 
            key={item} 
            onClick={() => item === "=" ? handleCalculate() : handleClick(item)}
          >
            {item}
          </button>
        ))}
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default Calculadora;