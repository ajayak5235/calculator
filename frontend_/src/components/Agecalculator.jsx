import { useState } from "react";
import "./loan.css";


export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [ageYears, setAgeYears] = useState(null);
  const [ageMonths, setAgeMonths] = useState(null);
  const [ageDays, setAgeDays] = useState(null);
  const [ageHours, setAgeHours] = useState(null);
  
  const calculateAge = () => {
    if (!birthDate) return;
    
    const now = new Date();
    const birth = new Date(birthDate);
    
    const diffTime = now - birth;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30.44);
    const diffYears = Math.floor(diffMonths / 12);
    const totalHours = diffDays * 24;
    
    setAgeYears(diffYears);
    setAgeMonths(diffMonths);
    setAgeDays(diffDays);
    setAgeHours(totalHours);
  };
  
  return (
    <div className="container">
      <h2 className="title">Age Calculator</h2>
      <div className="input-group">
        <label>Select Birth Date</label>
        <input 
          type="date" 
          value={birthDate} 
          onChange={(e) => setBirthDate(e.target.value)} 
        />
      </div>
      <button onClick={calculateAge} className="calculate-btn">
        Calculate Age
      </button>
      {ageYears !== null && (
        <div className="result">
          <h3>Age Breakdown:</h3>
          <p><strong>Years:</strong> {ageYears} years</p>
          <p><strong>Months:</strong> {ageMonths} months</p>
          <p><strong>Days:</strong> {ageDays} days</p>
          <p><strong>Hours:</strong> {ageHours.toLocaleString()} hours</p>
        </div>
      )}
    </div>
  );
}
