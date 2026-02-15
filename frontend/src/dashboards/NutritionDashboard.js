import { useEffect, useState, useRef } from "react";
import { getPendingRequests, createDietPlan } from "../api/dietApi";
import Navbar from "../components/Navbar";

export default function NutritionistHome() {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [plan, setPlan] = useState({
    memberId: "",
    dietDetails: "",
    duration: ""
  });

  // Chart refs (VERY IMPORTANT)
  const goalChartRef = useRef(null);
  const ageChartRef = useRef(null);
  const trendChartRef = useRef(null);

  // Load Chart.js once
  useEffect(() => {
    if (window.Chart) return;

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.onload = () => console.log("Chart.js loaded");
    document.body.appendChild(script);
  }, []);

  // Load requests
  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    const res = await getPendingRequests();
    setRequests(res.data);
  };

  // Render charts AFTER requests load
  useEffect(() => {
    if (!window.Chart || requests.length === 0) return;

    // Destroy old charts
    goalChartRef.current?.destroy();
    ageChartRef.current?.destroy();
    trendChartRef.current?.destroy();

    // ================= GOAL PIE =================
    const goalMap = {};
    requests.forEach(r => {
      goalMap[r.fitnessGoal] = (goalMap[r.fitnessGoal] || 0) + 1;
    });

    goalChartRef.current = new window.Chart(
      document.getElementById("goalPie"),
      {
        type: "pie",
        data: {
          labels: Object.keys(goalMap),
          datasets: [{
            data: Object.values(goalMap),
            backgroundColor: ["#22c55e", "#3b82f6", "#a855f7", "#f59e0b"]
          }]
        }
      }
    );

    // ================= AGE BAR =================
    const ageGroups = { "≤18": 0, "19–30": 0, "31–45": 0, "46+": 0 };
    requests.forEach(r => {
      if (r.age <= 18) ageGroups["≤18"]++;
      else if (r.age <= 30) ageGroups["19–30"]++;
      else if (r.age <= 45) ageGroups["31–45"]++;
      else ageGroups["46+"]++;
    });

    ageChartRef.current = new window.Chart(
      document.getElementById("ageBar"),
      {
        type: "bar",
        data: {
          labels: Object.keys(ageGroups),
          datasets: [{
            data: Object.values(ageGroups),
            backgroundColor: "#3b82f6",
            borderRadius: 10
          }]
        },
        options: {
          plugins: { legend: { display: false } }
        }
      }
    );

    // ================= TREND LINE =================
    trendChartRef.current = new window.Chart(
      document.getElementById("trendLine"),
      {
        type: "line",
        data: {
          labels: requests.map((_, i) => `Day ${i + 1}`),
          datasets: [{
            data: requests.map((_, i) => i + 1),
            borderColor: "#22c55e",
            tension: 0.45
          }]
        }
      }
    );

  }, [requests]);

  const handleCreatePlan = async (e) => {
    e.preventDefault();
    await createDietPlan(plan);

    // Remove fulfilled request from UI
    setRequests(prev =>
      prev.filter(r => r.id !== selectedRequest.id)
    );

    setSelectedRequest(null);
    setPlan({ memberId: "", dietDetails: "", duration: "" });
    alert("✅ Diet Plan Created Successfully");
  };

  const avgAge =
    requests.length > 0
      ? Math.round(requests.reduce((a, b) => a + b.age, 0) / requests.length)
      : 0;

  return (
    <>
      <Navbar />

      <style>{`
        body { background: #f4f7fb; }

        .glass {
          background: #fff;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .kpi {
          border-radius: 18px;
          padding: 25px;
          color: white;
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }

        .grad-green { background: linear-gradient(135deg,#22c55e,#16a34a); }
        .grad-blue { background: linear-gradient(135deg,#3b82f6,#2563eb); }
        .grad-purple { background: linear-gradient(135deg,#a855f7,#7c3aed); }
      `}</style>

      <div className="container my-4">

        {/* KPI CARDS */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="kpi grad-green">
              <small>Pending Requests</small>
              <h2>{requests.length}</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="kpi grad-blue">
              <small>Average Age</small>
              <h2>{avgAge}</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="kpi grad-purple">
              <small>Top Goal</small>
              <h5>{requests[0]?.fitnessGoal || "—"}</h5>
            </div>
          </div>
        </div>

        {/* CHARTS */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="glass">
              <h6>Goal Distribution</h6>
              <canvas id="goalPie"></canvas>
            </div>
          </div>

          <div className="col-md-4">
            <div className="glass">
              <h6>Age-wise Analysis</h6>
              <canvas id="ageBar"></canvas>
            </div>
          </div>

          <div className="col-md-4">
            <div className="glass">
              <h6>Request Trend</h6>
              <canvas id="trendLine"></canvas>
            </div>
          </div>
        </div>

        {/* REQUESTS + FORM */}
        <div className="row g-4">
          <div className="col-md-5">
            <div className="glass">
              <h5>Pending Requests</h5>
              {requests.map(r => (
                <div
                  key={r.id}
                  className="p-3 mb-2 rounded shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedRequest(r);
                    setPlan({ memberId: r.memberId, dietDetails: "", duration: "" });
                  }}
                >
                  <b>Member:</b> {r.memberId}<br />
                  <small>{r.fitnessGoal}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-7">
            <div className="glass">
              <h5>Create Diet Plan</h5>

              {selectedRequest ? (
                <form onSubmit={handleCreatePlan}>
                  <input
                    className="form-control mb-2"
                    value={plan.memberId}
                    readOnly
                  />

                  <textarea
                    className="form-control mb-2"
                    placeholder="Diet plan details"
                    onChange={e =>
                      setPlan({ ...plan, dietDetails: e.target.value })
                    }
                    required
                  />

                  <input
                    className="form-control mb-3"
                    placeholder="Duration"
                    onChange={e =>
                      setPlan({ ...plan, duration: e.target.value })
                    }
                    required
                  />

                  <button className="btn btn-success w-100">
                    Save Diet Plan
                  </button>
                </form>
              ) : (
                <p className="text-muted">
                  Select a request to create a plan
                </p>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}