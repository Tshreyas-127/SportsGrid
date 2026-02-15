import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getWorkoutPlan } from "../../api/workoutApi";

const PLAN_DELAY = 12 * 60 * 60 * 1000;

export default function WorkoutPlanView() {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(PLAN_DELAY);
  const [expanded, setExpanded] = useState(null);

  const memberId = 1;
  const requestTime = localStorage.getItem("workoutTime");

  /* Countdown logic */
  useEffect(() => {
    if (!requestTime) return;

    const interval = setInterval(() => {
      const diff = PLAN_DELAY - (Date.now() - Number(requestTime));
      setTimeLeft(diff > 0 ? diff : 0);
      if (diff <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [requestTime]);

  /* Fetch plan */
  useEffect(() => {
    getWorkoutPlan(memberId)
      .then(res => res?.data && setPlan(res.data))
      .finally(() => setLoading(false));
  }, [memberId]);

  const percent = Math.max(0, (timeLeft / PLAN_DELAY) * 100);

  const formatTime = () => {
    const h = Math.floor(timeLeft / (1000 * 60 * 60));
    const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    return `${h}h ${m}m`;
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="wp-hero-light">
        <div className="wp-hero-text">
          <h1>Your Workout Journey</h1>
          <p>Consistency • Recovery • Progress</p>
        </div>
      </div>

      <div className="wp-light-page">

        {/* LOADING */}
        {loading && <div className="wp-box">Loading...</div>}

        {/* BEFORE PLAN */}
        {!loading && !plan && (
          <>
            <div className="wp-box">
              <h2>🕒 Your Plan Will Be Ready Within 12 Hours</h2>
              <p>Your trainer is designing a plan specifically for your body.</p>

              {/* COUNTDOWN RING */}
              <div className="ring-wrap">
                <svg width="140" height="140">
                  <circle cx="70" cy="70" r="60" />
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    style={{ strokeDashoffset: 377 - (377 * percent) / 100 }}
                  />
                </svg>
                <div className="ring-text">{formatTime()}</div>
              </div>
            </div>

            {/* GENERAL FITNESS RULES */}
            <div className="wp-rules">
              {[
                {
                  t: "Warm-up is Mandatory",
                  d: "5–10 minutes of mobility prevents injuries."
                },
                {
                  t: "Progressive Overload",
                  d: "Increase weights gradually, not randomly."
                },
                {
                  t: "Rest Matters",
                  d: "Muscles grow during recovery, not workouts."
                }
              ].map((r, i) => (
                <div
                  key={i}
                  className="rule-card"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <h4>{r.t}</h4>
                  {expanded === i && <p>{r.d}</p>}
                </div>
              ))}
            </div>
          </>
        )}

        {/* AFTER PLAN */}
        {!loading && plan && (
          <div className="wp-box">
            <h2>🏋️ Your Workout Plan Is Ready</h2>

            {/* TRAINER CARD */}
            <div className="trainer-card">
              <img
                src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg"
                alt=""
              />
              <div>
                <h4>Certified Trainer</h4>
                <p>ID: {plan.trainerId}</p>
                <span>Strength & Conditioning</span>
              </div>
            </div>

            <div className="wp-info-grid">
              <div>
                <span>Duration</span>
                <strong>{plan.duration}</strong>
              </div>
              <div>
                <span>Exercise Plan</span>
                <strong>{plan.exercisePlan}</strong>
              </div>
            </div>

            <section>
              <h4>Trainer Notes</h4>
              <p>{plan.notes}</p>
            </section>

            <button className="wp-start-btn">Start Training 💪</button>
          </div>
        )}
      </div>

      {/* STYLES */}
      <style>{`
        .wp-hero-light {
          height: 50vh;
          background: url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg") center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wp-hero-text {
          background: rgba(255,255,255,0.85);
          padding: 20px 40px;
          border-radius: 12px;
          text-align: center;
        }

        .wp-light-page {
          background: #f8fafc;
          padding: 60px 20px 100px;
          min-height: 100vh;
        }

        .wp-box {
          max-width: 900px;
          margin: auto;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          text-align: center;
        }

        /* COUNTDOWN RING */
        svg circle {
          fill: none;
          stroke-width: 10;
        }

        svg circle:first-child {
          stroke: #e5e7eb;
        }

        svg circle:last-child {
          stroke: #22c55e;
          stroke-dasharray: 377;
          transition: stroke-dashoffset 1s linear;
        }

        .ring-wrap {
          position: relative;
          margin: 30px auto;
          width: 140px;
        }

        .ring-text {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        /* RULES */
        .wp-rules {
          max-width: 900px;
          margin: 40px auto 0;
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
          gap: 20px;
        }

        .rule-card {
          background: white;
          padding: 20px;
          border-radius: 16px;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0,0,0,.05);
        }

        /* TRAINER */
        .trainer-card {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 30px 0;
          background: #f1f5f9;
          padding: 16px;
          border-radius: 16px;
        }

        .trainer-card img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
        }

        .wp-info-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 20px;
          margin: 20px 0;
        }

        .wp-start-btn {
          margin-top: 30px;
          width: 100%;
          padding: 14px;
          background: #22c55e;
          border: none;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }

        @media(max-width: 768px){
          .wp-info-grid{grid-template-columns:1fr}
        }
      `}</style>
    </>
  );
}
