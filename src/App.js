import { useState, useEffect } from "react";

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
  const [results, setResults] = useState([]);
  const [inputs, setInputs] = useState({ input1: 0, input2: 0 });

  useEffect(() => {
    var results = localStorage.getItem("results");
    if (results) {
      setResults(JSON.parse(results));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);

  const handleOperationClick = (operator) => {
    const value1 = inputs.input1;
    const value2 = inputs.input2;
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

    setResults([...results, result]);
  };

  const handleInputChange = (e, inputNumber) => {
    const value = Number(e.target.value);
    setInputs((prevInputs) => {
      return { ...prevInputs, [`input${inputNumber}`]: value };
    });
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
      <p style={{ fontWeight: "bold" }}>
        Resultado: {results[results.length - 1]}
      </p>
      <h3>Ùltimos resultados</h3>
      <ul>
        {results.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
