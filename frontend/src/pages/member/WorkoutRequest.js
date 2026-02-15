import { useState } from "react";
import { requestWorkout } from "../../api/workoutApi";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function WorkoutRequest() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    memberId: "",
    bmi: "",
    goal: "",
    injuries: "",
    experienceLevel: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    await requestWorkout(form);

    // store request time for WorkoutPlanView page
    localStorage.setItem("workoutTime", Date.now());

    setSubmitted(true);
  };

  const viewPlan = () => {
    navigate("/member/workout/plan");
  };

  return (
    <>
      <Navbar />

      <section className="wk-wrapper">
        <div className="wk-hero">
          <div className="wk-hero-text">
            <h1>Transform Your Body</h1>
            <p>Professional trainers. Structured programs. Real results.</p>
          </div>
        </div>

        <div className="wk-form-wrapper">
          {!submitted ? (
            <form className="wk-glass" onSubmit={submit}>
              <h2>Workout Consultation</h2>

              <div className="wk-grid">
                <input
                  name="memberId"
                  placeholder="Member ID"
                  onChange={handleChange}
                  required
                />

                <input
                  name="bmi"
                  placeholder="BMI"
                  onChange={handleChange}
                  required
                />
              </div>

              <select
                name="experienceLevel"
                onChange={handleChange}
                required
              >
                <option value="">Experience Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <div className="wk-goal-cards">
                {["Weight Loss", "Muscle Gain", "Strength", "Endurance"].map(
                  (g) => (
                    <div
                      key={g}
                      className={`wk-goal ${
                        form.goal === g ? "active" : ""
                      }`}
                      onClick={() =>
                        setForm({ ...form, goal: g })
                      }
                    >
                      {g}
                    </div>
                  )
                )}
              </div>

              <textarea
                name="injuries"
                placeholder="Injuries or limitations"
                onChange={handleChange}
              />

              <button className="wk-submit">
                Request Workout Plan
              </button>
            </form>
          ) : (
            <div className="wk-success">
              <h2>Request Received 💪</h2>
              <p>Your trainer is crafting your workout routine</p>

              <button
                className="wk-submit pulse"
                onClick={viewPlan}
              >
                View Workout Plan
              </button>
            </div>
          )}
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        .wk-wrapper {
          min-height: 100vh;
          background: #0b0f19;
          color: white;
        }

        .wk-hero {
          height: 65vh;
          background-image:
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)),
            url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          padding-left: 8%;
        }

        .wk-hero-text {
          animation: fadeUp 1s ease;
        }

        .wk-hero h1 {
          font-size: 56px;
          font-weight: 900;
        }

        .wk-hero p {
          font-size: 18px;
          opacity: 0.9;
          max-width: 420px;
        }

        .wk-form-wrapper {
          margin-top: -120px;
          display: flex;
          justify-content: center;
          padding-bottom: 80px;
        }

        .wk-glass {
          width: 520px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(16px);
          border-radius: 24px;
          padding: 35px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          animation: fadeUp 0.8s ease;
        }

        .wk-glass h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .wk-glass input,
        .wk-glass select,
        .wk-glass textarea {
          width: 100%;
          padding: 13px;
          border-radius: 12px;
          border: none;
          margin-bottom: 14px;
          background: rgba(255,255,255,0.85);
        }

        .wk-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .wk-goal-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .wk-goal {
          padding: 14px;
          text-align: center;
          border-radius: 14px;
          background: rgba(255,255,255,0.15);
          cursor: pointer;
          transition: 0.3s;
        }

        .wk-goal:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.25);
        }

        .wk-goal.active {
          background: #22c55e;
          color: #022c22;
          font-weight: 700;
        }

        .wk-submit {
          width: 100%;
          padding: 15px;
          border-radius: 40px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: #022c22;
          font-weight: 700;
          border: none;
          cursor: pointer;
          font-size: 16px;
          transition: 0.3s;
        }

        .wk-submit:hover {
          transform: scale(1.04);
        }

        .wk-success {
          text-align: center;
          margin-top: 80px;
          animation: fadeUp 0.8s ease;
        }

        .pulse {
          animation: pulse 1.5s infinite;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); }
          70% { box-shadow: 0 0 0 18px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        @media(max-width: 768px) {
          .wk-glass {
            width: 90%;
          }
          .wk-hero h1 {
            font-size: 40px;
          }
        }
      `}</style>
    </>
  );
}
