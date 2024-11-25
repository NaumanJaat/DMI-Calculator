import React, { useState } from "react";

const Calculator = () => {
  const [bodyWeight, setBodyWeight] = useState("");
  const [fat, setFat] = useState("");
  const [milk, setMilk] = useState("");
  const [result, setResult] = useState(null);

  const calculateDMI = () => {
    const fatKg = (milk * fat) / 100;
    const fcm = 0.4 * milk + 15 * fatKg;
    const dmi = 0.0185 * bodyWeight + 0.305 * fcm;

    setResult({
      fatKg: fatKg.toFixed(2),
      fcm: fcm.toFixed(2),
      dmi: dmi.toFixed(2),
    });
  };

  return (
    <div className="calculator">
      <h1>Dry Matter Intake (DMI) Calculator</h1>
      <div className="form">
        <label>
          Body Weight (kg):
          <input
            type="number"
            value={bodyWeight}
            onChange={(e) => setBodyWeight(e.target.value)}
          />
        </label>
        <label>
          Fat (%):
          <input
            type="number"
            step="0.01"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
        </label>
        <label>
          Milk (kg):
          <input
            type="number"
            value={milk}
            onChange={(e) => setMilk(e.target.value)}
          />
        </label>
        <button onClick={calculateDMI}>Calculate</button>
      </div>
      {result && (
        <div className="results">
          <h2>Results:</h2>
          <p>Fat (Kg): {result.fatKg}</p>
          <p>Fat-Corrected Milk (FCM): {result.fcm}</p>
          <p>Dry Matter Intake (DMI): {result.dmi}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
