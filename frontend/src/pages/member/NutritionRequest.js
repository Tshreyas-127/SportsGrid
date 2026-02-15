
// // import { useState } from "react";
// // import Navbar from "../../components/Navbar";
// // import { requestDiet } from "../../api/dietApi";
// // import { useNavigate } from "react-router-dom";

// // import { useEffect } from "react";
// // import { getMyDietRequests } from "../../api/dietApi";


// // export default function NutritionRequest() {
// //   const [form, setForm] = useState({
// //     memberId: "",
// //     age: "",
// //     weight: "",
// //     height: "",
// //     medicalConditions: "",
// //     foodPreferences: "",
// //     fitnessGoal: ""
// //   });

// //   const navigate = useNavigate();
// //   const [submitted, setSubmitted] = useState(false);
// //   const [message, setMessage] = useState("");

// //   const [myRequests, setMyRequests] = useState([]);

// //   const foodOptions = [
// //     "Vegetarian 🥦",
// //     "Non-Vegetarian 🍗",
// //     "Vegan 🌱",
// //     "Jain Food 🥗",
// //     "Keto 🥩",
// //     "High Protein 💪",
// //     "Low Carb 🥑",
// //     "Gluten Free 🍞❌"
// //   ];

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleFoodChange = (e) => {
// //     setForm({ ...form, foodPreferences: e.target.value });
// //   };

// //   // Only ONE handleSubmit (duplicate removed)
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await requestDiet(form);
// //       setSubmitted(true);
// //       fetchMyRequests(); // 👈 refresh requests

// //       setMessage(
// //         "✅ Request submitted successfully. Your diet plan will be available within 12 hours."
// //       );
// //     } catch {
// //       alert("Error submitting request");
// //     }

// //     useEffect(() => {
// //   if (form.memberId) {
// //     fetchMyRequests();
// //   }
// //   }, [form.memberId]);

// //   const fetchMyRequests = async () => {
// //     try {
// //       const res = await getMyDietRequests(form.memberId);
// //       setMyRequests(res.data);
// //     } catch (err) {
// //       console.error("Failed to load requests");
// //     }
// //   };

// //   };

  

// //   return (
// //     <>
// //       <Navbar />

// //       {/* CSS inside same file */}
// //       <style>
// //         {`
// //         .nutrition-bg {
// //           min-height: 100vh;
// //           background: linear-gradient(120deg, #e8fdf2, #ffffff);
// //           padding: 40px 0;
// //         }

// //         .nutrition-wrapper {
// //           display: flex;
// //           gap: 30px;
// //           align-items: stretch;
// //         }

// //         .nutrition-image {
// //           flex: 1;
// //           border-radius: 20px;
// //           background: url("https://images.unsplash.com/photo-1498837167922-ddd27525d352")
// //             center/cover no-repeat;
// //           position: relative;
// //           overflow: hidden;
// //           min-height: 520px;
// //         }

// //         .nutrition-image::after {
// //           content: "";
// //           position: absolute;
// //           inset: 0;
// //           background: rgba(25, 135, 84, 0.45);
// //         }

// //         .nutrition-image-content {
// //           position: absolute;
// //           bottom: 20px;
// //           left: 20px;
// //           right: 20px;
// //           color: #fff;
// //           z-index: 2;
// //           text-align: center;
// //         }

// //         .nutrition-image-content h3 {
// //           font-weight: 700;
// //         }

// //         .nutrition-card {
// //           flex: 1.2;
// //           border-radius: 20px;
// //           background: #fff;
// //           padding: 30px;
// //           box-shadow: 0 10px 30px rgba(0,0,0,0.1);
// //         }

// //         .nutrition-title {
// //           font-weight: 800;
// //           color: #198754;
// //           text-align: center;
// //           margin-bottom: 20px;
// //         }

// //         .form-control, .form-select {
// //           border-radius: 12px;
// //           border: 1px solid #cfe8dd;
// //         }

// //         .form-control:focus, .form-select:focus {
// //           border-color: #198754;
// //           box-shadow: 0 0 6px rgba(25,135,84,0.4);
// //         }

// //         .badge-option {
// //           background: #d1f7e5;
// //           color: #0f5132;
// //           padding: 6px 16px;
// //           border-radius: 20px;
// //           font-size: 14px;
// //           font-weight: 500;
// //         }

// //         .btn-success {
// //           border-radius: 25px;
// //           font-size: 18px;
// //           padding: 10px;
// //         }

// //         .btn-primary {
// //           border-radius: 25px;
// //           padding: 8px 22px;
// //         }

// //         .status-box {
// //           background: #f1fff6;
// //           border-left: 6px solid #198754;
// //           padding: 20px;
// //           border-radius: 14px;
// //           box-shadow: 0 4px 10px rgba(0,0,0,0.1);
// //           animation: fadeIn 0.8s ease;
// //         }

// //         @keyframes fadeIn {
// //           from { opacity: 0; transform: translateY(10px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         @media (max-width: 992px) {
// //           .nutrition-wrapper {
// //             flex-direction: column;
// //           }
// //           .nutrition-image {
// //             min-height: 280px;
// //           }
// //         }
// //         `}
// //       </style>

// //       <div className="nutrition-bg">
// //         <div className="container">
// //           <div className="nutrition-wrapper">

// //             {/* Left Side Image */}
// //             <div className="nutrition-image">
// //               <div className="nutrition-image-content">
// //                 <h3>Eat Smart. Live Strong.</h3>
// //                 <p>
// //                   Personalized nutrition plans crafted by professional
// //                   nutritionists to help you reach your fitness goals faster.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Right Side Form */}
// //             <div className="nutrition-card">
// //               <h2 className="nutrition-title">🥗 Nutrition Consultation</h2>

// //               {!submitted && (
// //                 <form onSubmit={handleSubmit}>
// //                   <div className="row">
// //                     <div className="col-md-6 mb-3">
// //                       <input
// //                         className="form-control"
// //                         name="memberId"
// //                         placeholder="Member ID"
// //                         onChange={handleChange}
// //                         required
// //                       />
// //                     </div>
// //                     <div className="col-md-6 mb-3">
// //                       <input
// //                         className="form-control"
// //                         name="age"
// //                         placeholder="Age"
// //                         onChange={handleChange}
// //                       />
// //                     </div>
// //                     <div className="col-md-6 mb-3">
// //                       <input
// //                         className="form-control"
// //                         name="weight"
// //                         placeholder="Weight (kg)"
// //                         onChange={handleChange}
// //                       />
// //                     </div>
// //                     <div className="col-md-6 mb-3">
// //                       <input
// //                         className="form-control"
// //                         name="height"
// //                         placeholder="Height (cm)"
// //                         onChange={handleChange}
// //                       />
// //                     </div>
// //                   </div>

// //                   <textarea
// //                     className="form-control mb-3"
// //                     name="medicalConditions"
// //                     placeholder="Medical Conditions (if any)"
// //                     onChange={handleChange}
// //                   />

// //                   <select
// //                     className="form-select mb-3"
// //                     onChange={handleFoodChange}
// //                     value={form.foodPreferences}
// //                     required
// //                   >
// //                     <option value="">🍽 Select Food Preference</option>
// //                     {foodOptions.map((food, index) => (
// //                       <option key={index} value={food}>
// //                         {food}
// //                       </option>
// //                     ))}
// //                   </select>

// //                   {form.foodPreferences && (
// //                     <div className="mb-3">
// //                       <span className="badge-option">
// //                         {form.foodPreferences}
// //                       </span>
// //                     </div>
// //                   )}

// //                   <textarea
// //                     className="form-control mb-4"
// //                     name="fitnessGoal"
// //                     placeholder="Your Fitness Goal (Weight Loss, Muscle Gain, etc.)"
// //                     onChange={handleChange}
// //                   />

// //                   <button className="btn btn-success w-100">
// //                     Submit Request
// //                   </button>
// //                 </form>
// //               )}

// //               {submitted && (
// //                 <div className="status-box text-center">
// //                   <h5 className="text-success">Request Status: PENDING ⏳</h5>
// //                   <p>{message}</p>
// //                   <button
// //                     className="btn btn-primary"
// //                     onClick={() => navigate("/member/view-diet-plan")}
// //                   >
// //                     View My Diet Plan
// //                   </button>
// //                 </div>
// //               )}
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }








// import { useState, useEffect } from "react";
// import Navbar from "../../components/Navbar";
// import { requestDiet, getMyDietRequests } from "../../api/dietApi";
// import { useNavigate } from "react-router-dom";

// export default function NutritionRequest() {
//   const [form, setForm] = useState({
//     memberId: "",
//     age: "",
//     weight: "",
//     height: "",
//     medicalConditions: "",
//     foodPreferences: "",
//     fitnessGoal: ""
//   });

//   const navigate = useNavigate();
//   const [submitted, setSubmitted] = useState(false);
//   const [message, setMessage] = useState("");
//   const [myRequests, setMyRequests] = useState([]);

//   const foodOptions = [
//     "Vegetarian 🥦",
//     "Non-Vegetarian 🍗",
//     "Vegan 🌱",
//     "Jain Food 🥗",
//     "Keto 🥩",
//     "High Protein 💪",
//     "Low Carb 🥑",
//     "Gluten Free 🍞❌"
//   ];

//   // 🔹 Auto load memberId from login
//   useEffect(() => {
//     const storedMemberId = localStorage.getItem("memberId");
//     if (storedMemberId) {
//       setForm((prev) => ({ ...prev, memberId: storedMemberId }));
//     }
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFoodChange = (e) => {
//     setForm({ ...form, foodPreferences: e.target.value });
//   };

//   const fetchMyRequests = async () => {
//     try {
//       const res = await getMyDietRequests(form.memberId);
//       setMyRequests(res.data);
//     } catch (err) {
//       console.error("Failed to load requests");
//     }
//   };

//   // 🔹 Fetch requests when memberId is ready
//   useEffect(() => {
//     if (form.memberId) {
//       fetchMyRequests();
//     }
//   }, [form.memberId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await requestDiet(form);
//       setSubmitted(true);
//       fetchMyRequests();
//       setMessage(
//         "✅ Request submitted successfully. Your diet plan will be available within 12 hours."
//       );
//     } catch {
//       alert("Error submitting request");
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <style>
//         {`
//         .nutrition-bg {
//           min-height: 100vh;
//           background: linear-gradient(120deg, #e8fdf2, #ffffff);
//           padding: 40px 0;
//         }

//         .nutrition-wrapper {
//           display: flex;
//           gap: 30px;
//           align-items: stretch;
//         }

//         .nutrition-image {
//           flex: 1;
//           border-radius: 20px;
//           background: url("https://images.unsplash.com/photo-1498837167922-ddd27525d352")
//             center/cover no-repeat;
//           position: relative;
//           overflow: hidden;
//           min-height: 520px;
//         }

//         .nutrition-image::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: rgba(25, 135, 84, 0.45);
//         }

//         .nutrition-image-content {
//           position: absolute;
//           bottom: 20px;
//           left: 20px;
//           right: 20px;
//           color: #fff;
//           z-index: 2;
//           text-align: center;
//         }

//         .nutrition-card {
//           flex: 1.2;
//           border-radius: 20px;
//           background: #fff;
//           padding: 30px;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.1);
//         }

//         .status-box {
//           background: #f1fff6;
//           border-left: 6px solid #198754;
//           padding: 20px;
//           border-radius: 14px;
//           box-shadow: 0 4px 10px rgba(0,0,0,0.1);
//         }
//         `}
//       </style>

//       <div className="nutrition-bg">
//         <div className="container">
//           <div className="nutrition-wrapper">

//             <div className="nutrition-image">
//               <div className="nutrition-image-content">
//                 <h3>Eat Smart. Live Strong.</h3>
//                 <p>
//                   Personalized nutrition plans crafted by professional
//                   nutritionists to help you reach your fitness goals faster.
//                 </p>
//               </div>
//             </div>

//             <div className="nutrition-card">
//               <h2 className="nutrition-title">🥗 Nutrition Consultation</h2>

//               {!submitted && (
//                 <form onSubmit={handleSubmit}>
//                   <input
//                     className="form-control mb-3"
//                     name="memberId"
//                     value={form.memberId}
//                     placeholder="Member ID"
//                     onChange={handleChange}
//                     required
//                   />

//                   <input className="form-control mb-3" name="age" placeholder="Age" onChange={handleChange} />
//                   <input className="form-control mb-3" name="weight" placeholder="Weight" onChange={handleChange} />
//                   <input className="form-control mb-3" name="height" placeholder="Height" onChange={handleChange} />

//                   <textarea className="form-control mb-3" name="medicalConditions" placeholder="Medical Conditions" onChange={handleChange} />

//                   <select className="form-select mb-3" onChange={handleFoodChange}>
//                     <option value="">Select Food Preference</option>
//                     {foodOptions.map((f, i) => (
//                       <option key={i}>{f}</option>
//                     ))}
//                   </select>

//                   <textarea className="form-control mb-4" name="fitnessGoal" placeholder="Fitness Goal" onChange={handleChange} />

//                   <button className="btn btn-success w-100">
//                     Submit Request
//                   </button>
//                 </form>
//               )}

//               {/* ================= My Nutrition Requests ================= */}
//               {myRequests.length > 0 && (
//                 <div className="mt-4">
//                   <h5 className="text-center text-success mb-3">
//                     📋 My Nutrition Requests
//                   </h5>

//                   {myRequests.map((req) => (
//                     <div key={req.id} className="status-box mb-3">
//                       <p><b>Goal:</b> {req.fitnessGoal}</p>
//                       <p><b>Food:</b> {req.foodPreferences}</p>

//                       {req.status === "PENDING" && (
//                         <p className="text-warning fw-bold">⏳ PENDING</p>
//                       )}

//                       {req.status === "COMPLETED" && (
//                         <>
//                           <p className="text-success fw-bold">✅ COMPLETED</p>
//                           <button
//                             className="btn btn-success btn-sm"
//                             onClick={() => navigate("/member/view-diet-plan")}
//                           >
//                             View My Diet Plan
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import { useState, useEffect } from "react";
// import Navbar from "../../components/Navbar";
// import { requestDiet, getMyDietRequests } from "../../api/dietApi";
// import { useNavigate } from "react-router-dom";

// export default function NutritionRequest() {
//   const [form, setForm] = useState({
//     memberId: "",
//     age: "",
//     weight: "",
//     height: "",
//     medicalConditions: "",
//     foodPreferences: "",
//     fitnessGoal: ""
//   });

//   const navigate = useNavigate();
//   const [submitted, setSubmitted] = useState(false);
//   const [message, setMessage] = useState("");
//   const [myRequests, setMyRequests] = useState([]);

//   const foodOptions = [
//     "Vegetarian 🥦",
//     "Non-Vegetarian 🍗",
//     "Vegan 🌱",
//     "Jain Food 🥗",
//     "Keto 🥩",
//     "High Protein 💪",
//     "Low Carb 🥑",
//     "Gluten Free 🍞❌"
//   ];

//   // 🔹 Auto load memberId from login
//   useEffect(() => {
//     const storedMemberId = localStorage.getItem("memberId");
//     if (storedMemberId) {
//       setForm((prev) => ({ ...prev, memberId: storedMemberId }));
//     }
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFoodChange = (e) => {
//     setForm({ ...form, foodPreferences: e.target.value });
//   };

//   const fetchMyRequests = async () => {
//     try {
//       const res = await getMyDietRequests(form.memberId);
//       setMyRequests(res.data);
//     } catch (err) {
//       console.error("Failed to load requests");
//     }
//   };

//   // 🔹 Fetch requests when memberId is ready
//   useEffect(() => {
//     if (form.memberId) {
//       fetchMyRequests();
//     }
//   }, [form.memberId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await requestDiet(form);
//       setSubmitted(true);
//       fetchMyRequests();
//       setMessage(
//         "✅ Request submitted successfully. Your diet plan will be available within 12 hours."
//       );
//     } catch {
//       alert("Error submitting request");
//     }
//   };

//   // 🔹 Navigate to view diet plan page with memberId
//   const handleViewDietPlan = (memberId) => {
//     navigate("/member/view-diet-plan", { state: { memberId } });
//   };

//   return (
//     <>
//       <Navbar />

//       <style>
//         {`
//         .nutrition-bg {
//           min-height: 100vh;
//           background: linear-gradient(120deg, #e8fdf2, #ffffff);
//           padding: 40px 0;
//         }

//         .nutrition-wrapper {
//           display: flex;
//           gap: 30px;
//           align-items: flex-start; /* ✅ image stays fixed height */
//         }


//         .nutrition-image {
//           flex: 1;
//           border-radius: 20px;
//           background: url("https://images.unsplash.com/photo-1498837167922-ddd27525d352")
//             center/cover no-repeat;
//           position: relative;
//           overflow: hidden;
//           min-height: 520px;
//         }

//         .nutrition-image::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: rgba(25, 135, 84, 0.45);
//         }

//         .nutrition-image-content {
//           position: absolute;
//           bottom: 20px;
//           left: 20px;
//           right: 20px;
//           color: #fff;
//           z-index: 2;
//           text-align: center;
//         }

//         .nutrition-card {
//           flex: 1.2;
//           border-radius: 20px;
//           background: #fff;
//           padding: 30px;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.1);
//         }

//         .status-box {
//           background: #f1fff6;
//           border-left: 6px solid #198754;
//           padding: 20px;
//           border-radius: 14px;
//           box-shadow: 0 4px 10px rgba(0,0,0,0.1);
//         }

//         .status-box.pending {
//           background: #fff8e1;
//           border-left-color: #ffc107;
//         }
//         `}
//       </style>

//       <div className="nutrition-bg">
//         <div className="container">
//           <div className="nutrition-wrapper">

//             <div className="nutrition-image">
//               <div className="nutrition-image-content">
//                 <h3>Eat Smart. Live Strong.</h3>
//                 <p>
//                   Personalized nutrition plans crafted by professional
//                   nutritionists to help you reach your fitness goals faster.
//                 </p>
//               </div>
//             </div>

//             <div className="nutrition-card">
//               <h2 className="nutrition-title">🥗 Nutrition Consultation</h2>

//             <form onSubmit={handleSubmit}>
//             <input
//               className="form-control mb-3"
//               name="memberId"
//               value={form.memberId}
//               placeholder="Member ID"
//               onChange={handleChange}
//               required
//             />

//             <input className="form-control mb-3" name="age" placeholder="Age" onChange={handleChange} />
//             <input className="form-control mb-3" name="weight" placeholder="Weight" onChange={handleChange} />
//             <input className="form-control mb-3" name="height" placeholder="Height" onChange={handleChange} />

//             <textarea className="form-control mb-3" name="medicalConditions" placeholder="Medical Conditions" onChange={handleChange} />

//             <select className="form-select mb-3" onChange={handleFoodChange}>
//               <option value="">Select Food Preference</option>
//               {foodOptions.map((f, i) => (
//                 <option key={i}>{f}</option>
//               ))}
//             </select>

//             <textarea className="form-control mb-4" name="fitnessGoal" placeholder="Fitness Goal" onChange={handleChange} />

//             <button className="btn btn-success w-100">
//               Submit Request
//             </button>
//           </form>


//               {/* ================= My Nutrition Requests ================= */}
//               {myRequests.length > 0 && (
//                 <div className="mt-4">
//                   <h5 className="text-center text-success mb-3">
//                     📋 My Nutrition Requests
//                   </h5>

//                   {myRequests.map((req) => (
//                     <div 
//                       key={req.id} 
//                       className={`status-box mb-3 ${req.status === "PENDING" ? "pending" : ""}`}
//                     >
//                       <p><b>Goal:</b> {req.fitnessGoal}</p>
//                       <p><b>Food:</b> {req.foodPreferences}</p>

//                       {req.status === "PENDING" && (
//                         <p className="text-warning fw-bold">⏳ PENDING</p>
//                       )}

//                       {req.status === "COMPLETED" && (
//                         <>
//                           <p className="text-success fw-bold">✅ COMPLETED</p>
//                           <button
//                             className="btn btn-success btn-sm"
//                             onClick={() => handleViewDietPlan(req.memberId)}
//                           >
//                             View My Diet Plan
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { requestDiet, getMyDietRequests } from "../../api/dietApi";
import { useNavigate } from "react-router-dom";

export default function NutritionRequest() {
  const [form, setForm] = useState({
    memberId: "",
    age: "",
    weight: "",
    height: "",
    medicalConditions: "",
    foodPreferences: "",
    fitnessGoal: ""
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [myRequests, setMyRequests] = useState([]);

  // Dummy completed requests
  const dummyRequests = [
    {
      id: 101,
      fitnessGoal: "Weight Loss",
      foodPreferences: "High Protein 💪",
      status: "COMPLETED",
      memberId: "13"   // important for dummy plan
    },
    {
      id: 102,
      fitnessGoal: "Muscle Gain",
      foodPreferences: "Keto 🥩",
      status: "PENDING",
      memberId: "14"
    }
  ];

  const foodOptions = [
    "Vegetarian 🥦",
    "Non-Vegetarian 🍗",
    "Vegan 🌱",
    "Jain Food 🥗",
    "Keto 🥩",
    "High Protein 💪",
    "Low Carb 🥑",
    "Gluten Free 🍞❌"
  ];

  // Fetch when Member ID changes
  useEffect(() => {
    if (form.memberId && form.memberId.trim() !== "") {
      fetchMyRequests(form.memberId);
    } else {
      setMyRequests([]);
    }
  }, [form.memberId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFoodChange = (e) => {
    setForm({ ...form, foodPreferences: e.target.value });
  };

  const fetchMyRequests = async (memberId) => {
    try {
      const res = await getMyDietRequests(memberId);
      setMyRequests(res.data);
    } catch {
      console.error("Failed to load requests");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await requestDiet(form);
      setMessage("✅ Request submitted successfully.");
      fetchMyRequests(form.memberId);
    } catch {
      alert("Error submitting request");
    }
  };

  // 🔥 Pass both memberId and status
  const handleViewDietPlan = (memberId, status) => {
    navigate("/member/view-diet-plan", {
      state: { memberId, status }
    });
  };

  // Combine dummy + real
  const allRequests =
    form.memberId && form.memberId.trim() !== ""
      ? [...dummyRequests, ...myRequests]
      : [];

  return (
    <>
      <Navbar />

      <style>
        {`
        .nutrition-bg {
          min-height: 100vh;
          background: linear-gradient(120deg, #e8fdf2, #ffffff);
          padding: 40px 0;
        }

        .nutrition-wrapper {
          display: flex;
          gap: 30px;
          align-items: flex-start;
        }

        .nutrition-image,
        .nutrition-card {
          height: 520px;
        }

        .nutrition-image {
          flex: 1;
          border-radius: 20px;
          background: url("https://images.unsplash.com/photo-1498837167922-ddd27525d352")
            center/cover no-repeat;
          position: relative;
        }

        .nutrition-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(25, 135, 84, 0.45);
        }

        .nutrition-image-content {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          color: #fff;
          z-index: 2;
          text-align: center;
        }

        .nutrition-card {
          flex: 1.2;
          border-radius: 20px;
          background: #fff;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow-y: auto;
        }

        .status-box {
          background: #f1fff6;
          border-left: 6px solid #198754;
          padding: 20px;
          border-radius: 14px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .status-box.pending {
          background: #fff8e1;
          border-left-color: #ffc107;
        }
        `}
      </style>

      <div className="nutrition-bg">
        <div className="container">

          {/* TOP SECTION */}
          <div className="nutrition-wrapper">
            <div className="nutrition-image">
              <div className="nutrition-image-content">
                <h3>Eat Smart. Live Strong.</h3>
                <p>
                  Personalized nutrition plans crafted by professional
                  nutritionists to help you reach your fitness goals faster.
                </p>
              </div>
            </div>

            <div className="nutrition-card">
              <h2 className="text-center mb-4">🥗 Nutrition Consultation</h2>

              <form onSubmit={handleSubmit}>
                <input
                  className="form-control mb-3"
                  name="memberId"
                  value={form.memberId}
                  placeholder="Member ID"
                  onChange={handleChange}
                  required
                />

                <input className="form-control mb-3" name="age" placeholder="Age" onChange={handleChange} />
                <input className="form-control mb-3" name="weight" placeholder="Weight" onChange={handleChange} />
                <input className="form-control mb-3" name="height" placeholder="Height" onChange={handleChange} />

                <textarea className="form-control mb-3" name="medicalConditions" placeholder="Medical Conditions" onChange={handleChange} />

                <select className="form-select mb-3" onChange={handleFoodChange}>
                  <option value="">Select Food Preference</option>
                  {foodOptions.map((f, i) => (
                    <option key={i}>{f}</option>
                  ))}
                </select>

                <textarea className="form-control mb-4" name="fitnessGoal" placeholder="Fitness Goal" onChange={handleChange} />

                <button className="btn btn-success w-100">
                  Submit Request
                </button>

                {message && (
                  <div className="alert alert-success mt-3 text-center">
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* REQUESTS BELOW */}
          {allRequests.length > 0 && (
            <div className="mt-5" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h4 className="text-success mb-3 text-center">
                📋 My Nutrition Requests
              </h4>

              {allRequests.map((req) => (
                <div
                  key={req.id}
                  className={`status-box mb-3 ${req.status === "PENDING" ? "pending" : ""}`}
                >
                  <p><b>Goal:</b> {req.fitnessGoal}</p>
                  <p><b>Food:</b> {req.foodPreferences}</p>

                  {req.status === "PENDING" && (
                    <>
                      <p className="text-warning fw-bold">⏳ PENDING</p>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() =>
                          handleViewDietPlan(req.memberId, "PENDING")
                        }
                      >
                        View Diet Plan
                      </button>
                    </>
                  )}

                  {req.status === "COMPLETED" && (
                    <>
                      <p className="text-success fw-bold">✅ COMPLETED</p>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() =>
                          handleViewDietPlan(req.memberId, "COMPLETED")
                        }
                      >
                        View Diet Plan
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
