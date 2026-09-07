function About() {

  return (
    <main className="about-page">

      <div className="about-container">

        <p className="small-title">
          ABOUT BMI
        </p>

        <h1>
          What is BMI?
        </h1>

        <p className="about-intro">
          Body Mass Index, commonly known as BMI, is a
          value calculated using a person's height and weight.
        </p>

        <div className="info-grid">

          <div className="info-card">

            <div className="info-number">
              01
            </div>

            <h3>
              Underweight
            </h3>

            <p>
              BMI below 18.5 is generally classified as
              underweight.
            </p>

          </div>

          <div className="info-card">

            <div className="info-number">
              02
            </div>

            <h3>
              Normal Weight
            </h3>

            <p>
              BMI from 18.5 to 24.9 is generally considered
              a normal weight range.
            </p>

          </div>

          <div className="info-card">

            <div className="info-number">
              03
            </div>

            <h3>
              Overweight
            </h3>

            <p>
              BMI from 25 to 29.9 is generally classified
              as overweight.
            </p>

          </div>

          <div className="info-card">

            <div className="info-number">
              04
            </div>

            <h3>
              Obesity
            </h3>

            <p>
              BMI of 30 or above is generally classified
              as obesity.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default About;