import { useState } from "react";
import "./loan.css";

export default function TaxCalculator() {
  const [income, setIncome] = useState(50000);
  const [taxRate, setTaxRate] = useState(10);
  const [taxAmount, setTaxAmount] = useState(0);

  const calculateTax = () => {
    const tax = (parseFloat(income) * parseFloat(taxRate)) / 100;
    setTaxAmount(tax);
  };

  return (
    <div className="container">
      <h2 className="title">Tax Calculator</h2>
      <div className="input-group">
        <label>Annual Income ($)</label>
        <input 
          type="number" 
          value={income} 
          onChange={(e) => setIncome(e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label>Tax Rate (%)</label>
        <input 
          type="number" 
          value={taxRate} 
          onChange={(e) => setTaxRate(e.target.value)} 
        />
      </div>
      <button onClick={calculateTax} className="calculate-btn">
        Calculate
      </button>
      {taxAmount > 0 && (
        <div className="result">
          <h3>Tax Amount:</h3>
          <p>${taxAmount.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
