import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">

        <div className="hero-content">

          <p className="small-title">
            YOUR HEALTH • YOUR NUMBERS
          </p>

          <h1>
            Understand your
            <span> BMI.</span>
          </h1>

          <p className="hero-text">
            Calculate your Body Mass Index in seconds and
            understand your general weight category.
          </p>

          <Link to="/calculator" className="primary-button">
            Calculate My BMI →
          </Link>

        </div>

        <div className="hero-card">

          <div className="heart-icon">
            ♥
          </div>

          <h3>
            Your health matters
          </h3>

          <p>
            A simple calculation can help you understand
            your Body Mass Index.
          </p>

          <div className="mini-stats">

            <div>
              <strong>18.5</strong>
              <span>Underweight</span>
            </div>

            <div>
              <strong>24.9</strong>
              <span>Normal</span>
            </div>

            <div>
              <strong>30+</strong>
              <span>Obesity</span>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}

export default Home;