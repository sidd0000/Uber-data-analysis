// import React from "react";
// import "../styles/Home.css";

// const Home = () => (
//   <div className="home-container">
//     <h1>Welcome to Uber Data Analysis</h1>
//     <p>Analyze and forecast your Uber rides effortlessly.</p>
//   </div>
// );

// export default Home;
import React from "react";
import Plot from "react-plotly.js";
import "../styles/Home.css";

const Home = () => {
  const sampleData = {
    x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    y: [120, 150, 170, 180, 200, 250, 300],
    type: "bar",
    marker: { color: "#007BFF" },
  };

  return (
    <div className="home-container">
      {/* <header className="header">
        <h1>Uber Data Analysis</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#forecasting">Forecasting</a>
          <a href="#about">About</a>
        </nav>
      </header> */}

      <main className="main-content">
        <section className="intro-section">
          <h2>Welcome to Uber Data Analysis</h2>
          <p>Analyze and forecast your Uber rides effortlessly.</p>
        </section>

        <section className="chart-section">
          <h3>Weekly Ride Distribution</h3>
          <Plot
            data={[sampleData]}
            layout={{
              title: "Number of Rides Per Day",
              xaxis: { title: "Days of the Week" },
              yaxis: { title: "Number of Rides" },
              responsive: true,
              margin: { l: 40, r: 40, t: 40, b: 40 },
            }}
            config={{ displayModeBar: false }}
            style={{ width: "100%", height: "400px" }}
          />
        </section>
      </main>

      {/* <footer className="footer">
        <p>© 2024 Uber Data Analysis. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
