import { useState } from "react";
import "./loan.css";


export default function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [calories, setCalories] = useState(null);

  const convertHeightToCm = (height, unit) => {
    return unit === "cm" ? height : height * 30.48;
  };

  const calculateCalories = () => {
    const heightInCm = convertHeightToCm(parseFloat(height), heightUnit);
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * heightInCm - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * heightInCm - 5 * age - 161;
    }
    const totalCalories = bmr * parseFloat(activityLevel);
    setCalories(totalCalories.toFixed(2));
  };

  return (
    <div className="container">
      <h2 className="title">Calorie Calculator</h2>
      <div className="input-group">
        <label>Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
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
      <div className="input-group">
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="input-group">
        <label>Activity Level</label>
        <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
          <option value="1.2">Sedentary (little to no exercise)</option>
          <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value="1.55">Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
          <option value="1.9">Super active (very hard exercise/physical job & exercise)</option>
        </select>
      </div>
      <button onClick={calculateCalories} className="calculate-btn">
        Calculate Calories
      </button>
      {calories !== null && (
        <div className="result">
          <h3>Daily Caloric Needs:</h3>
          <p>{calories} kcal/day</p>
        </div>
      )}
    </div>
  );
}
