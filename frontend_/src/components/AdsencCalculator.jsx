import { useState } from "react";
import "./loan.css";

export default function FinancialCalculators() {
  const [pageViews, setPageViews] = useState("");
  const [ctr, setCtr] = useState("");
  const [cpc, setCpc] = useState("");
  const [adsenseEarnings, setAdsenseEarnings] = useState(null);

  const [investment, setInvestment] = useState("");
  const [profit, setProfit] = useState("");
  const [roi, setRoi] = useState(null);

  const [totalClicks, setTotalClicks] = useState("");
  const [cost, setCost] = useState(null);

  const calculateAdSenseEarnings = () => {
    const estimatedEarnings = (pageViews * (ctr / 100) * cpc).toFixed(2);
    setAdsenseEarnings(estimatedEarnings);
  };

  const calculateROI = () => {
    const roiValue = (((profit - investment) / investment) * 100).toFixed(2);
    setRoi(roiValue);
  };

  const calculateCPC = () => {
    setCost((totalClicks * cpc).toFixed(2));
  };

  return (
    <div className="container">
      <h2 className="title">Financial Calculators</h2>
      <div className="calculator">
        <h3>AdSense Earnings Calculator</h3>
        <input type="number" placeholder="Page Views" value={pageViews} onChange={(e) => setPageViews(e.target.value)} />
        <input type="number" placeholder="CTR (%)" value={ctr} onChange={(e) => setCtr(e.target.value)} />
        <input type="number" placeholder="CPC ($)" value={cpc} onChange={(e) => setCpc(e.target.value)} />
        <button onClick={calculateAdSenseEarnings}>Calculate Earnings</button>
        {adsenseEarnings !== null && <p>Estimated Earnings: ${adsenseEarnings}</p>}
      </div>

      <div className="calculator">
        <h3>ROI Calculator</h3>
        <input type="number" placeholder="Investment ($)" value={investment} onChange={(e) => setInvestment(e.target.value)} />
        <input type="number" placeholder="Profit ($)" value={profit} onChange={(e) => setProfit(e.target.value)} />
        <button onClick={calculateROI}>Calculate ROI</button>
        {roi !== null && <p>ROI: {roi}%</p>}
      </div>

      <div className="calculator">
        <h3>CPC Calculator</h3>
        <input type="number" placeholder="Total Clicks" value={totalClicks} onChange={(e) => setTotalClicks(e.target.value)} />
        <input type="number" placeholder="CPC ($)" value={cpc} onChange={(e) => setCpc(e.target.value)} />
        <button onClick={calculateCPC}>Calculate Cost</button>
        {cost !== null && <p>Total Cost: ${cost}</p>}
      </div>
    </div>
  );
}
