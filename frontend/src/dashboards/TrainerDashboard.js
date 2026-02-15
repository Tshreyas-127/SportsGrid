// // src/dashboards/TrainerHome.js
// import React from "react";
// import Navbar from "../components/Navbar";

// export default function TrainerHome() {
//   return (
//     <>
//       <Navbar />
//       <div className="hero">
//         <h1>Trainer Dashboard</h1>
//         <p>Your assigned members and workout plans</p>
//       </div>

//       <section>
//         <h2>Your Tools</h2>
//         <ul>
//           <li>Create/Assign Workout Plans</li>
//           <li>View Assigned Members</li>
//           <li>Schedule Training Sessions</li>
//         </ul>
//       </section>
//     </>
//   );
// }











import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getWorkoutRequests,
  createWorkoutPlan
} from "../api/workoutApi";

import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip,
  LineChart, Line, CartesianGrid, ResponsiveContainer
} from "recharts";

export default function TrainerDashboard() {
  const [requests, setRequests] = useState([]);
  const [selected, setSelected] = useState(null);
  const [plan, setPlan] = useState({
    duration: "",
    exercisePlan: "",
    notes: ""
  });

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    const res = await getWorkoutRequests();
    setRequests(res.data || []);
  };

  /* ================= ANALYTICS ================= */

  const avgBMI =
    requests.reduce((a, r) => a + r.bmi, 0) /
    (requests.length || 1);

  const topGoal = (() => {
    const map = {};
    requests.forEach(r => {
      map[r.goal] = (map[r.goal] || 0) + 1;
    });
    return Object.keys(map).sort((a, b) => map[b] - map[a])[0];
  })();

  /* ================= CHART DATA ================= */

  // Goal Distribution
  const goalMap = {};
  requests.forEach(r => {
    goalMap[r.goal] = (goalMap[r.goal] || 0) + 1;
  });

  const goalData = Object.keys(goalMap).map(g => ({
    name: g,
    value: goalMap[g]
  }));

  // BMI-wise Analysis
  const bmiData = [
    { range: "<18", count: 0 },
    { range: "18-24", count: 0 },
    { range: "25-30", count: 0 },
    { range: "30+", count: 0 }
  ];

  requests.forEach(r => {
    if (r.bmi < 18) bmiData[0].count++;
    else if (r.bmi < 25) bmiData[1].count++;
    else if (r.bmi < 30) bmiData[2].count++;
    else bmiData[3].count++;
  });

  // Request Trend
  const trendData = requests.map((_, i) => ({
    day: `Day ${i + 1}`,
    requests: i + 1
  }));

  const COLORS = ["#22c55e", "#3b82f6", "#a855f7", "#f59e0b"];

  /* ================= CREATE PLAN ================= */

  const submitPlan = async () => {
    await createWorkoutPlan({
      memberId: selected.memberId,
      trainerId: 1, // later extract from JWT
      duration: plan.duration,
      exercisePlan: plan.exercisePlan,
      notes: plan.notes
    });

    alert("Workout Plan Created 💪");
    setSelected(null);
    setPlan({ duration: "", exercisePlan: "", notes: "" });
    loadRequests();
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="td-hero">
        <h1>Trainer Dashboard</h1>
        <p>Analyze • Plan • Transform Members</p>
      </div>

      {/* STATS */}
      <div className="td-stats">
        <div className="stat green">
          <span>Pending Requests</span>
          <h2>{requests.length}</h2>
        </div>
        <div className="stat blue">
          <span>Average BMI</span>
          <h2>{avgBMI.toFixed(1)}</h2>
        </div>
        <div className="stat purple">
          <span>Top Goal</span>
          <h2>{topGoal || "-"}</h2>
        </div>
      </div>

      {/* CHARTS */}
      <div className="td-charts">

        <div className="chart-box">
          <h4>Goal Distribution</h4>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={goalData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
              >
                {goalData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h4>BMI-wise Analysis</h4>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={bmiData}>
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#3b82f6"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h4>Request Trend</h4>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="requests"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="td-grid">

        {/* REQUEST LIST */}
        <div className="box">
          <h3>Pending Requests</h3>

          {requests.map(r => (
            <div
              key={r.id}
              className={`req ${selected?.id === r.id ? "active" : ""}`}
              onClick={() => setSelected(r)}
            >
              <strong>Member #{r.memberId}</strong>
              <span>{r.goal}</span>
              <small>
                BMI {r.bmi} • {r.experienceLevel}
              </small>
            </div>
          ))}
        </div>

        {/* CREATE PLAN */}
        <div className="box">
          <h3>Create Workout Plan</h3>

          {!selected ? (
            <p className="hint">Select a request to create plan</p>
          ) : (
            <>
              <div className="tag">
                Member #{selected.memberId} • {selected.goal}
              </div>

              <input
                placeholder="Duration (e.g. 6 Weeks)"
                value={plan.duration}
                onChange={e =>
                  setPlan({ ...plan, duration: e.target.value })
                }
              />

              <textarea
                placeholder="Exercise Plan"
                value={plan.exercisePlan}
                onChange={e =>
                  setPlan({ ...plan, exercisePlan: e.target.value })
                }
              />

              <textarea
                placeholder="Trainer Notes"
                value={plan.notes}
                onChange={e =>
                  setPlan({ ...plan, notes: e.target.value })
                }
              />

              <button onClick={submitPlan}>
                Create Plan
              </button>
            </>
          )}
        </div>

      </div>

      {/* STYLES */}
      <style>{`
        .td-hero {
          height: 40vh;
          background:
            linear-gradient(135deg,#020617,#020617cc),
            url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg")
            center/cover;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-direction:column;
          color:white;
        }

        .td-stats {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
          padding:30px;
          margin-top:-60px;
        }

        .stat {
          padding:24px;
          border-radius:18px;
          color:white;
          box-shadow:0 20px 40px rgba(0,0,0,.2);
        }

        .green {background:#22c55e}
        .blue {background:#3b82f6}
        .purple {background:#8b5cf6}

        .td-charts {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
          padding:0 30px 30px;
        }

        .chart-box {
          background:white;
          border-radius:18px;
          padding:20px;
          box-shadow:0 12px 25px rgba(0,0,0,.08);
        }

        .td-grid {
          display:grid;
          grid-template-columns:1.2fr 1fr;
          gap:30px;
          padding:30px;
        }

        .box {
          background:white;
          border-radius:20px;
          padding:25px;
          box-shadow:0 15px 30px rgba(0,0,0,.08);
        }

        .req {
          padding:14px;
          border-radius:14px;
          cursor:pointer;
          margin-bottom:10px;
          border:1px solid #e5e7eb;
        }

        .req.active {
          background:#f0fdf4;
          border-color:#22c55e;
        }

        .box input,
        .box textarea {
          width:100%;
          padding:12px;
          border-radius:12px;
          border:1px solid #e5e7eb;
          margin-bottom:12px;
        }

        .box button {
          width:100%;
          padding:14px;
          border:none;
          border-radius:30px;
          background:#22c55e;
          font-weight:700;
          cursor:pointer;
        }

        .tag {
          background:#ecfeff;
          padding:8px 14px;
          border-radius:20px;
          margin-bottom:12px;
          display:inline-block;
        }

        .hint {
          opacity:.6;
        }

        @media(max-width:1000px){
          .td-stats,
          .td-charts,
          .td-grid {
            grid-template-columns:1fr;
          }
        }
      `}</style>
    </>
  );
}