import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../dashboards/MemberDashboard.css";

export default function MemberDashboard() {
  const navigate = useNavigate();

  // 🔐 Get auth info
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");

  // 🔒 Protect route
  useEffect(() => {
    if (!token || role !== "MEMBER") {
      navigate("/login", { replace: true });
    }
  }, [token, role, navigate]);

  const quickActions = [
    {
      title: "My Bookings",
      description: "View and manage your bookings",
      image: "/slider/badminton.jpg",
      route: "/my-bookings",
      icon: "📅",
      color: "#4F46E5"
    },
    {
      title: "Workout Requests",
      description: "Request new workout plan",
      image: "/slider/gym.jpg",
      route: "/member/workout/request",
      icon: "🏋️",
      color: "#059669"
    },
    {
      title: "Nutrition Consultation",
      description: "Consult nutritionist",
      image: "/slider/yoga.jpg",
      route: "/member/nutrition-consultation",
      icon: "🥗",
      color: "#DC2626"
    }
  ];

  return (
    <>
      <Navbar />

      {/* ===== HERO WITH PROFILE INFO ===== */}
      <div className="member-hero-animated">
        <div className="gradient-overlay"></div>

        <div className="hero-content-wrapper">
          {/* <div className="hero-badge-animated">Member Dashboard</div> */}
          <h1 className="hero-title-animated">
            Welcome Back,<br />
            {username || "Member"} 👋
          </h1>
          <p className="hero-subtitle-animated">
            Membership: Gold | Status: Active
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary-animated"
              onClick={() => navigate("/profile")}
            >
              View Profile
            </button>
            <button
              className="btn-secondary-animated"
              onClick={() => navigate("/membership")}
            >
              Membership Details
            </button>
          </div>

          {/* Personal Stats */}
          <div className="stats-hero-grid">
            <div className="stat-card-animated stat-blue">
              <div className="stat-number">6</div>
              <div className="stat-label">Active Bookings</div>
            </div>
            <div className="stat-card-animated stat-green">
              <div className="stat-number">24</div>
              <div className="stat-label">Sessions Completed</div>
            </div>
            <div className="stat-card-animated stat-orange">
              <div className="stat-number">2</div>
              <div className="stat-label">Workout Plans</div>
            </div>
            <div className="stat-card-animated stat-pink">
              <div className="stat-number">1</div>
              <div className="stat-label">Diet Plan</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== QUICK ACTIONS ===== */}
      <div className="member-section">
        <div className="section-header">
          <h3>Quick Actions</h3>
          <p>Manage your personal fitness journey</p>
        </div>

        <div className="member-cards">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="member-card modern"
              onClick={() => navigate(action.route)}
            >
              <div className="card-image-wrapper">
                <img src={action.image} alt={action.title} />
                <div className="card-overlay"></div>
                <div className="card-icon" style={{ backgroundColor: action.color }}>
                  {action.icon}
                </div>
              </div>
              <div className="card-content">
                <h4>{action.title}</h4>
                <p>{action.description}</p>
                <div className="card-arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MY TRAINING ===== */}
      <div className="member-section facilities-section">
        <div className="section-header">
          <h3>My Training</h3>
          <p>Your assigned trainer and workout plan</p>
        </div>

        <div className="facility-grid">
          <div className="facility-card modern">
            <div className="facility-info">
              <h4>Trainer</h4>
              <p>Name: John Doe</p>
              <p>Specialization: Strength</p>
            </div>
          </div>

          <div className="facility-card modern">
            <div className="facility-info">
              <h4>Workout Plan</h4>
              <p>Goal: Fat Loss</p>
              <button
                className="facility-btn"
                onClick={() => navigate("/member/workout/plan")}
              >
                View Plan →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MY NUTRITION ===== */}
      <div className="member-section">
        <div className="section-header">
          <h3>My Nutrition</h3>
          <p>Your assigned nutritionist and diet plan</p>
        </div>

        <div className="facility-grid">
          <div className="facility-card modern">
            <div className="facility-info">
              <h4>Nutritionist</h4>
              <p>Name: Dr. Sarah</p>
              <p>Goal: Weight Loss</p>
            </div>
          </div>

          <div className="facility-card modern">
            <div className="facility-info">
              <h4>Diet Plan</h4>
              <p>Calories: 1800 kcal/day</p>
              <button
                className="facility-btn"
                onClick={() => navigate("/member/view-diet-plan")}
              >
                View Diet →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== UPCOMING PERSONAL SESSIONS ===== */}
      <div className="member-section">
        <div className="section-header">
          <h3>My Upcoming Sessions</h3>
          <p>Your scheduled training sessions</p>
        </div>

        <div className="sessions-list">
          <div className="session-item">
            <div className="session-time">
              <span className="time">7:00 AM</span>
              <span className="date">Tomorrow</span>
            </div>
            <div className="session-details">
              <h4>Gym with Trainer</h4>
              <p>Duration: 1 hour</p>
            </div>
            <div className="session-status confirmed">Confirmed</div>
          </div>

          <div className="session-item">
            <div className="session-time">
              <span className="time">6:00 PM</span>
              <span className="date">Friday</span>
            </div>
            <div className="session-details">
              <h4>Nutrition Review</h4>
              <p>Duration: 30 mins</p>
            </div>
            <div className="session-status pending">Pending</div>
          </div>
        </div>
      </div>
    </>
  );
}
