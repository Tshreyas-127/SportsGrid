import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import axios from "axios";

export default function MembershipPage() {
  const [plans, setPlans] = useState([]);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  // Load plans
  useEffect(() => {
    axios
      .get("http://localhost:4040/membership/plans", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Plans:", res.data);
        setPlans(res.data);
      })
      .catch((err) => console.log("Plan fetch error:", err));
  }, [token]);

  // NEW MEMBERSHIP
  const handleNewMembership = async () => {
    if (!selectedPlanId) {
      alert("Please select a membership plan first!");
      return;
    }

    try {
      await axios.post(
        `http://localhost:4040/membership/new?userId=${userId}&planId=${selectedPlanId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("🎉 Membership Activated Successfully!");
      navigate("/booking"); // redirect to booking page
    } catch (err) {
      console.error("New membership error:", err);
      alert("New Membership Failed");
    }
  };

  // RENEW MEMBERSHIP
  const handleRenewMembership = async () => {
    if (!selectedPlanId) {
      alert("Please select a membership plan first!");
      return;
    }

    try {
      await axios.post(
        `http://localhost:4040/membership/renew?userId=${userId}&planId=${selectedPlanId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("🔁 Membership Renewed Successfully!");
      navigate("/booking");
    } catch (err) {
      console.error("Renew membership error:", err);

      if (err.response && (err.response.status === 403 || err.response.status === 500)) {
        alert("You don’t have an active membership. Please activate a new one first.");
        navigate("/membership"); // stay on same page or go to new membership
      } else {
        alert("Membership Renewal Failed");
      }
    }
  };

  return (
    <>
      <Navbar />

      {/* OFFER BANNER */}
      <div className="container mt-4">
        <div
          className="card shadow text-white"
          style={{
            background: "linear-gradient(to right, #6f42c1, #6610f2)",
            borderRadius: "12px",
          }}
        >
          <div className="card-body text-center">
            <h2 className="fw-bold">🏆 Choose Your Membership Plan</h2>
            <p>Unlimited Gym, Sports, Swimming & Coaching Access</p>
            <p>🎁 Free Diet Consultation + One Free Coaching Session</p>
          </div>
        </div>
      </div>

      {/* MEMBERSHIP PLANS */}
      <div className="container mt-5">
        <div className="row">
          {plans.map((plan) => {
            const name = plan.planName.toLowerCase();
            const isPopular = name.includes("month");
            const isBestValue = name.includes("year");

            return (
              <div key={plan.id} className="col-md-3">
                <div
                  onClick={() => {
                    console.log("Selected Plan:", plan.id);
                    setSelectedPlanId(plan.id);
                  }}
                  className={`card shadow-lg mb-4 ${
                    selectedPlanId === plan.id ? "border-primary" : ""
                  }`}
                  style={{
                    cursor: "pointer",
                    transform:
                      selectedPlanId === plan.id ? "scale(1.08)" : "scale(1)",
                    transition: "0.3s",
                    position: "relative",
                  }}
                >
                  {/* BADGES */}
                  {isBestValue && (
                    <span
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "#ffc107",
                        color: "#000",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      BEST VALUE
                    </span>
                  )}

                  {isPopular && !isBestValue && (
                    <span
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "#0d6efd",
                        color: "#fff",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                      }}
                    >
                      POPULAR
                    </span>
                  )}

                  <div className="card-body text-center">
                    <h4 className="fw-bold">{plan.planName}</h4>
                    <h1 className="text-success">₹{plan.fees}</h1>
                    <p className="text-muted">
                      {plan.durationMonths} Months Access
                    </p>

                    <hr />

                    <ul className="list-unstyled small">
                      <li>✔ Gym & Sports</li>
                      <li>✔ Swimming Pool</li>
                      <li>✔ Coaching Support</li>
                      <li>✔ Diet Consultation</li>
                      <li>✔ Locker Facility</li>
                    </ul>

                    {selectedPlanId === plan.id && (
                      <span className="badge bg-success px-3 py-2">
                        Selected
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTION BUTTONS */}
        <div className="text-center mt-4 mb-5">
          <button
            className="btn btn-primary btn-lg me-3 px-4"
            onClick={handleNewMembership}
          >
            🆕 Activate New Membership
          </button>

          <button
            className="btn btn-success btn-lg px-4"
            onClick={handleRenewMembership}
          >
            🔁 Renew Membership
          </button>
        </div>
      </div>
    </>
  );
}