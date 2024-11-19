// // // import React, { useState } from "react";
// // // import axios from "axios";
// // // import "../styles/Forecasting.css";

// // // const Forecasting = () => {
// // //   const [date, setDate] = useState("");
// // //   const [time, setTime] = useState("");
// // //   const [destination, setDestination] = useState("");
// // //   const [result, setResult] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError(null);
// // //     setResult(null);

// // //     try {
// // //       const response = await axios.post("http://localhost:5000/predict", {
// // //         date,
// // //         time,
// // //         destination,
// // //       });
// // //       setResult(response.data);
// // //     } catch (error) {
// // //       setError("Failed to fetch forecast. Please try again.");
// // //       console.error("Error fetching data:", error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="forecasting-container">
// // //       <h2>Forecast Your Uber Ride</h2>
// // //       <form onSubmit={handleSubmit} className="forecasting-form">
// // //         <div className="form-group">
// // //           <label htmlFor="date">Date:</label>
// // //           <input
// // //             type="date"
// // //             id="date"
// // //             value={date}
// // //             onChange={(e) => setDate(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label htmlFor="time">Time:</label>
// // //           <input
// // //             type="time"
// // //             id="time"
// // //             value={time}
// // //             onChange={(e) => setTime(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label htmlFor="destination">Destination:</label>
// // //           <input
// // //             type="text"
// // //             id="destination"
// // //             placeholder="Enter destination"
// // //             value={destination}
// // //             onChange={(e) => setDestination(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <button type="submit" className="forecast-button">
// // //           {loading ? "Loading..." : "Forecast"}
// // //         </button>
// // //       </form>

// // //       {error && <div className="error-message">{error}</div>}

// // //       {result && (
// // //         <div className="result">
// // //           <h3>Forecast Results</h3>
// // //           <p><strong>Share Cost:</strong> {result.shareCost}</p>
// // //           <p><strong>Additional Info:</strong> {result.info}</p>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Forecasting;
// // import React, { useState } from "react";
// // import "../styles/Forecasting.css";

// // const cities = [
// //   "New York",
// //   "Los Angeles",
// //   "Chicago",
// //   "London",
// //   "Mumbai",
// //   "Delhi",
// //   "Tokyo",
// //   "Paris",
// //   "Sydney",
// //   "Dubai",
// // ];

// // const Forecasting = () => {
// //   const [date, setDate] = useState("");
// //   const [time, setTime] = useState("");
// //   const [destination, setDestination] = useState("");
// //   const [result, setResult] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);
// //     setResult(null);

// //     try {
// //       // Simulate an API call (Replace with your backend endpoint)
// //       const response = await fetch("http://localhost:5000/predict", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           date,
// //           time,
// //           destination,
// //         }),
// //       });
// //       const data = await response.json();
// //       setResult(data);
// //     } catch (err) {
// //       setError("Failed to fetch forecast. Please try again.");
// //       console.error("Error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="forecasting-container">
// //       <h2>Forecast Your Uber Ride</h2>
// //       <form onSubmit={handleSubmit} className="forecasting-form">
// //         <div className="form-group">
// //           <label htmlFor="date">Date:</label>
// //           <input
// //             type="date"
// //             id="date"
// //             value={date}
// //             onChange={(e) => setDate(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="time">Time:</label>
// //           <input
// //             type="time"
// //             id="time"
// //             value={time}
// //             onChange={(e) => setTime(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="destination">Destination:</label>
// //           <select
// //             id="destination"
// //             value={destination}
// //             onChange={(e) => setDestination(e.target.value)}
// //             required
// //           >
// //             <option value="" disabled>
// //               Select a city
// //             </option>
// //             {cities.map((city, index) => (
// //               <option key={index} value={city}>
// //                 {city}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //         <button type="submit" className="forecast-button">
// //           {loading ? "Loading..." : "Forecast"}
// //         </button>
// //       </form>

// //       {error && <div className="error-message">{error}</div>}

// //       {result && (
// //         <div className="result">
// //           <h3>Forecast Results</h3>
// //           <p>
// //             <strong>Share Cost:</strong> {result.shareCost}
// //           </p>
// //           <p>
// //             <strong>Additional Info:</strong> {result.info}
// //           </p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Forecasting;
// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
// import "../styles/Forecasting.css";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const cities = [
//   "New York",
//   "Los Angeles",
//   "Chicago",
//   "London",
//   "Mumbai",
//   "Delhi",
//   "Tokyo",
//   "Paris",
//   "Sydney",
//   "Dubai",
// ];

// const Forecasting = () => {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [destination, setDestination] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Sample mock data for graph
//   const mockData = {
//     labels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
//     datasets: [
//       {
//         label: "Share Cost Prediction",
//         data: [15, 20, 30, 25, 18],
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         fill: true,
//       },
//     ],
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResult(null);

//     try {
//       // Simulate an API call (Replace with your backend endpoint)
//       // Replace with real fetch once Flask is ready
//       const response = await new Promise((resolve) => {
//         setTimeout(() => {
//           resolve({
//             json: () => ({
//               shareCost: "$25",
//               info: "The predicted share cost for your trip.",
//               graphData: mockData,
//             }),
//           });
//         }, 1500); // Simulate a 1.5s API call delay
//       });

//       const data = await response.json();
//       setResult(data);
//     } catch (err) {
//       setError("Failed to fetch forecast. Please try again.");
//       console.error("Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="forecasting-container">
//       <h2>Forecast Your Uber Ride</h2>
//       <form onSubmit={handleSubmit} className="forecasting-form">
//         <div className="form-group">
//           <label htmlFor="date">Date:</label>
//           <input
//             type="date"
//             id="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="time">Time:</label>
//           <input
//             type="time"
//             id="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="destination">Destination:</label>
//           <select
//             id="destination"
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//             required
//           >
//             <option value="" disabled>
//               Select a city
//             </option>
//             {cities.map((city, index) => (
//               <option key={index} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit" className="forecast-button">
//           {loading ? "Loading..." : "Forecast"}
//         </button>
//       </form>

//       {error && <div className="error-message">{error}</div>}

//       {result && (
//         <div className="result">
//           <h3>Forecast Results</h3>
//           <p>
//             <strong>Share Cost:</strong> {result.shareCost}
//           </p>
//           <p>
//             <strong>Additional Info:</strong> {result.info}
//           </p>

//           {/* Display the graph */}
//           <div className="forecast-graph">
//             <Line data={result.graphData} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Forecasting;
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/Forecasting.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Forecasting = () => {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [stop, setStop] = useState("");
  const [miles, setMiles] = useState("");
  const [startHour, setStartHour] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Static graph data
  const staticGraphData = {
    labels: ["Driver Commission", "Fare", "Fuel Cost", "Uber Profit"],
    datasets: [
      {
        label: "Prediction Metrics",
        data: [0.33, 0.41, 0.16, 0.04],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          start,
          stop,
          miles: parseFloat(miles),
          start_hour: parseInt(startHour),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch predictions from the server.");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("An error occurred while fetching the forecast. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forecasting-container">
      <h2>Forecast Your Uber Ride</h2>
      <form onSubmit={handleSubmit} className="forecasting-form">
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="start">Start Location:</label>
          <input
            type="text"
            id="start"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            placeholder="Enter start location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stop">Stop Location: </label>
          <input
            type="text"
            id="stop"
            value={stop}
            onChange={(e) => setStop(e.target.value)}
            placeholder="Enter stop location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="miles">Miles:</label>
          <input
            type="number"
            id="miles"
            value={miles}
            onChange={(e) => setMiles(e.target.value)}
            placeholder="Enter distance in miles"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startHour">Start Hour:</label>
          <input
            type="number"
            id="startHour"
            value={startHour}
            onChange={(e) => setStartHour(e.target.value)}
            placeholder="Enter start hour (0-23)"
            required
          />
        </div>
        <button type="submit" className="forecast-button">
          {loading ? "Loading..." : "Forecast"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {result && (
        <div className="result">
          <h3>Prediction Results</h3>
          <p>
            <strong>Fare:</strong> ${result.fare.toFixed(2)}
          </p>
          <p>
            <strong>Driver Commission:</strong> ${result.driver_commission.toFixed(2)}
          </p>
          <p>
            <strong>Fuel Cost:</strong> ${result.fuel_cost.toFixed(2)}
          </p>
          <p>
            <strong>Uber Profit:</strong> ${result.uber_profit.toFixed(2)}
          </p>

          {/* Display the static graph */}
          <div className="forecast-graph">
            <h4>Static Prediction Metrics</h4>
            <Line data={staticGraphData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Forecasting;
