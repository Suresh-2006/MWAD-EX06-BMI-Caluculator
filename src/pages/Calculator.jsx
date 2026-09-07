import { useState } from "react";

function Calculator() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {

    if (height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight.");
      return;
    }

    const heightInMeters = height / 100;

    const bmiValue =
      weight / (heightInMeters * heightInMeters);

    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    }
    else if (bmiValue < 25) {
      setCategory("Normal Weight");
    }
    else if (bmiValue < 30) {
      setCategory("Overweight");
    }
    else {
      setCategory("Obesity");
    }
  };

  const resetCalculator = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <main className="calculator-page">

      <div className="calculator-container">

        <div className="calculator-header">

          <p className="small-title">
            BMI CALCULATOR
          </p>

          <h1>
            Check your BMI
          </h1>

          <p>
            Enter your height and weight to calculate your BMI.
          </p>

        </div>

        <div className="calculator-card">

          <div className="input-group">

            <label>
              Height
            </label>

            <div className="input-wrapper">

              <input
                type="number"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />

              <span>
                cm
              </span>

            </div>

          </div>

          <div className="input-group">

            <label>
              Weight
            </label>

            <div className="input-wrapper">

              <input
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />

              <span>
                kg
              </span>

            </div>

          </div>

          <div className="button-group">

            <button
              className="primary-button calculate-button"
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>

            <button
              className="reset-button"
              onClick={resetCalculator}
            >
              Reset
            </button>

          </div>

          {bmi && (

            <div className="result">

              <p className="result-label">
                YOUR BMI
              </p>

              <div className="bmi-number">
                {bmi}
              </div>

              <div className="category">
                {category}
              </div>

              <div className="bmi-scale">

                <div className="scale-bar">

                  <div className="underweight"></div>

                  <div className="normal"></div>

                  <div className="overweight"></div>

                  <div className="obese"></div>

                </div>

                <div className="scale-labels">

                  <span>
                    Underweight
                  </span>

                  <span>
                    Normal
                  </span>

                  <span>
                    Overweight
                  </span>

                  <span>
                    Obesity
                  </span>

                </div>

              </div>

            </div>

          )}

        </div>

        <p className="disclaimer">
          BMI is a general screening measure and does not
          directly measure body fat or overall health.
        </p>

      </div>

    </main>
  );
}

export default Calculator;