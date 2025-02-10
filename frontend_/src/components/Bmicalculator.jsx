import { useState } from "react";
import "./loan.css";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const convertHeightToMeters = (height, unit) => {
    return unit === "cm" ? height / 100 : height * 0.3048;
  };

  const calculateBMI = () => {
    const heightInMeters = convertHeightToMeters(parseFloat(height), heightUnit);
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  return (
    <div className="container">
      <h2 className="title">BMI Calculator</h2>
      <div className="input-group">
        <label>Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Height</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
          <option value="cm">cm</option>
          <option value="ft">ft</option>
        </select>
      </div>
      <button onClick={calculateBMI} className="calculate-btn">
        Calculate BMI
      </button>
      {bmi !== null && (
        <div className="result">
          <h3>Your BMI:</h3>
          <p>{bmi}</p>
          <h3>Category:</h3>
          <p>{category}</p>
        </div>
      )}
    </div>
  );
}
