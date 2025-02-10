import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import LoanCalculator from "./components/LoanCalculator";
import TaxCalculator from "./components/TaxCalculator";
import AgeCalculator from "./components/AgeCalculator";
import CalorieCalculator from "./components/CalorieCalculator";
import BMICalculator from "./components/BMICalculator";
import AdsenseCalculator from "./components/AdsenseCalculator";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loan-calculator" element={<LoanCalculator />} />
        <Route path="/tax-calculator" element={<TaxCalculator />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/calorie-calculator" element={<CalorieCalculator />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/adsense-earning" element={<AdsenseCalculator />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
