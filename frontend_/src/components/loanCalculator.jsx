import { useState } from "react";
import "./loan.css";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [interest, setInterest] = useState(5);
  const [years, setYears] = useState(5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const rate = parseFloat(interest) / 100 / 12;
    const n = parseFloat(years) * 12;
    
    if (rate === 0) {
      setMonthlyPayment(principal / n);
      return;
    }
    
    const payment = (principal * rate) / (1 - Math.pow(1 + rate, -n));
    setMonthlyPayment(payment);
  };

  return (
    <div className="container">
      <h2 className="title">Loan Calculator</h2>
      <div className="input-group">
        <label>Loan Amount Rs</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label>Interest Rate (%)</label>
        <input 
          type="number" 
          value={interest} 
          onChange={(e) => setInterest(e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label>Loan Term (Years)</label>
        <input 
          type="number" 
          value={years} 
          onChange={(e) => setYears(e.target.value)} 
        />
      </div>
      <button onClick={calculateLoan} className="calculate-btn">
        Calculate
      </button>
      {monthlyPayment > 0 && (
        <div className="result">
          <h3>Monthly Payment:</h3>
          <p>{monthlyPayment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
