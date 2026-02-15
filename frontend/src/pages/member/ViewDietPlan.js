// // 

// import { useState, useEffect } from "react";
// import { getDietPlan } from "../../api/dietApi";
// import Navbar from "../../components/Navbar";
// import { useLocation } from "react-router-dom";

// export default function ViewDietPlan() {
//   const location = useLocation();
//   const [memberId, setMemberId] = useState("");
//   const [plan, setPlan] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [notReady, setNotReady] = useState(false);

//   // 🔹 Auto-load memberId if passed from navigation
//   useEffect(() => {
//     if (location.state?.memberId) {
//       setMemberId(location.state.memberId);
//       // Auto-fetch plan when memberId is available from navigation
//       fetchPlanWithId(location.state.memberId);
//     }
//   }, [location.state]);

//   const fetchPlanWithId = async (id) => {
//     setLoading(true);
//     setNotReady(false);
//     setPlan(null);

//     try {
//       const res = await getDietPlan(id);
//       if (res.data) {
//         setPlan(res.data);
//       } else {
//         setNotReady(true);
//       }
//     } catch (err) {
//       setNotReady(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPlan = async () => {
//     if (!memberId) {
//       alert("Please enter Member ID");
//       return;
//     }

//     fetchPlanWithId(memberId);
//   };

//   return (
//     <>
//       <Navbar />

//       {/* CSS Inside Same File */}
//       <style>
//         {`
//         .diet-bg {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #e9fdf3, #ffffff);
//           padding: 40px 0;
//         }

//         .diet-container {
//           max-width: 900px;
//           margin: auto;
//         }

//         .diet-card {
//           background: #ffffff;
//           border-radius: 18px;
//           padding: 30px;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.12);
//           animation: fadeIn 0.6s ease;
//         }

//         .diet-title {
//           text-align: center;
//           font-weight: 800;
//           color: #198754;
//           margin-bottom: 20px;
//         }

//         .diet-input {
//           border-radius: 12px;
//           border: 1px solid #cfe8dd;
//           transition: 0.3s;
//         }

//         .diet-input:focus {
//           border-color: #198754;
//           box-shadow: 0 0 6px rgba(25,135,84,0.4);
//         }

//         .diet-btn {
//           border-radius: 25px;
//           padding: 8px 22px;
//           font-size: 16px;
//         }

//         .waiting-box {
//           background: #f1fff6;
//           border-left: 6px solid #ffc107;
//           padding: 20px;
//           border-radius: 12px;
//           margin-top: 20px;
//           text-align: center;
//           animation: fadeIn 0.6s ease;
//         }

//         .diet-plan-box {
//           background: #f1fff6;
//           border-left: 6px solid #198754;
//           padding: 25px;
//           border-radius: 12px;
//           margin-top: 20px;
//           animation: fadeIn 0.6s ease;
//         }

//         .diet-plan-box h4 {
//           color: #198754;
//           font-weight: 700;
//         }

//         .video-box {
//           margin-top: 20px;
//           border-radius: 12px;
//           overflow: hidden;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         `}
//       </style>

//       <div className="diet-bg">
//         <div className="diet-container">
//           <div className="diet-card">

//             <h2 className="diet-title">🍽 View My Diet Plan</h2>

//             {/* Input Section */}
//             <div className="row mb-3">
//               <div className="col-md-9">
//                 <input
//                   type="text"
//                   placeholder="Enter your Member ID"
//                   value={memberId}
//                   onChange={(e) => setMemberId(e.target.value)}
//                   className="form-control diet-input"
//                 />
//               </div>
//               <div className="col-md-3 d-grid">
//                 <button
//                   className="btn btn-success diet-btn"
//                   onClick={fetchPlan}
//                 >
//                   View Plan
//                 </button>
//               </div>
//             </div>

//             {/* Loading */}
//             {loading && (
//               <div className="text-center">
//                 <div className="spinner-border text-success" role="status"></div>
//                 <p className="mt-2">Fetching your diet plan...</p>
//               </div>
//             )}

//             {/* Not Ready Section */}
//             {!loading && notReady && (
//               <div className="waiting-box">
//                 <h4>⏳ Diet Plan Not Ready</h4>
//                 <p>
//                   Your nutritionist is preparing your personalized diet plan.
//                   Please check again after 12 hours.
//                 </p>

//                 <div className="video-box ratio ratio-16x9">
//                   <iframe
//                     src="https://www.youtube.com/embed/8BcPHWGQO44"
//                     title="Healthy Eating Tips"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//               </div>
//             )}

//             {/* Diet Plan Section */}
//             {plan && (
//               <div className="diet-plan-box">
//                 <h4 className="text-center">🥗 Your Personalized Diet Plan</h4>
//                 <hr />
//                 <p><b>Diet Details:</b></p>
//                 <p>{plan.dietDetails}</p>
//                 <p><b>Duration:</b> {plan.duration}</p>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";

export default function ViewDietPlan() {
  const location = useLocation();
  const [memberId, setMemberId] = useState("");
  const [status, setStatus] = useState("");
  const [plan, setPlan] = useState(null);

  // Dummy customized plan (COMPLETED)
  const customizedPlan = {
    dietDetails: `
Morning:
- Warm lemon water
- Oats + fruits

Breakfast:
- 3 egg whites
- Brown bread

Lunch:
- Grilled chicken / paneer
- Brown rice
- Salad

Evening:
- Green tea
- Almonds

Dinner:
- Vegetable soup
- Roti + sabzi

Workout Plan:
Mon-Fri:
- Cardio 20 mins
- Chest & Triceps
- Back & Biceps
- Legs
- Core + HIIT

Drink 3-4 litres water daily.
`,
    duration: "30 Days"
  };

  useEffect(() => {
    if (location.state?.memberId) {
      setMemberId(location.state.memberId);
      setStatus(location.state.status);

      if (location.state.status === "COMPLETED") {
        setPlan(customizedPlan);
      }
    }
  }, [location.state]);

  return (
    <>
      <Navbar />

      <style>
        {`
        .diet-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #e9fdf3, #ffffff);
          padding: 40px 0;
        }

        .diet-container {
          max-width: 900px;
          margin: auto;
        }

        .diet-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }

        .waiting-box {
          background: #fff8e1;
          border-left: 6px solid #ffc107;
          padding: 20px;
          border-radius: 12px;
          margin-top: 20px;
          text-align: center;
        }

        .diet-plan-box {
          background: #f1fff6;
          border-left: 6px solid #198754;
          padding: 25px;
          border-radius: 12px;
          margin-top: 20px;
        }
        `}
      </style>

      <div className="diet-bg">
        <div className="diet-container">
          <div className="diet-card">

            <h2 className="text-center text-success">
              🍽 View Diet Plan for Member {memberId}
            </h2>

            {/* PENDING */}
            {status === "PENDING" && (
              <div className="waiting-box">
                <h4>⏳ Diet Plan Pending</h4>
                <p>
                  You will get your diet plan within
                  <b> 12 hours</b>.  
                  Our nutritionist is preparing it for you.
                </p>
              </div>
            )}

            {/* COMPLETED */}
            {status === "COMPLETED" && plan && (
              <div className="diet-plan-box">
                <h4 className="text-center">
                  🥗 Your Customized Diet & Workout Plan
                </h4>
                <hr />
                <pre style={{ whiteSpace: "pre-wrap" }}>
                  {plan.dietDetails}
                </pre>
                <p><b>Duration:</b> {plan.duration}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
