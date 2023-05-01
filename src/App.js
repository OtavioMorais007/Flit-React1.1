import { useState } from "react";

const Button = ({ operation, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
      }}
      onClick={onClick}
    >
      {operation}
    </button>
  );
};

const Input = ({ onChange }) => {
  return (
    <input
      type="number"
      style={{
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
      }}
      onChange={onChange}
    />
  );
};

const App = () => {
  const [result, setResult] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  const handleOperationClick = (operator) => {
    const value1 = input1;
    const value2 = input2;
    let result = 0;

    if (operator === "+") {
      result = value1 + value2;
    } else if (operator === "-") {
      result = value1 - value2;
    } else if (operator === "*") {
      result = value1 * value2;
    } else if (operator === "/") {
      result = value1 / value2;
    }

    setResult(result);
  };

  const handleInputChange = (e, inputNumber) => {
    const value = Number(e.target.value);
    if (inputNumber === 1) {
      setInput1(value);
    } else if (inputNumber === 2) {
      setInput2(value);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Input onChange={(e) => handleInputChange(e, 1)} />
      <Input onChange={(e) => handleInputChange(e, 2)} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          operation="+"
          onClick={() => handleOperationClick("+")}
          style={{ flex: 1 }}
        />
        <Button
          operation="-"
          onClick={() => handleOperationClick("-")}
          style={{ flex: 1 }}
        />
        <Button
          operation="*"
          onClick={() => handleOperationClick("*")}
          style={{ flex: 1 }}
        />
        <Button
          operation="/"
          onClick={() => handleOperationClick("/")}
          style={{ flex: 1 }}
        />
      </div>
      <p style={{ fontWeight: "bold" }}>Result: {result}</p>
    </div>
  );
};

export default App;
