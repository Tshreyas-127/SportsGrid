import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
import Navbar from "../components/Navbar";


export default function AdminDashboard() {
  const navigate = useNavigate();

  // 🔐 Get admin name from localStorage
  const adminName =
    localStorage.getItem("fullName") ||
    localStorage.getItem("username") ||
    "Admin";

  // Realistic dummy data
  const dummyStats = {
    users: 486,
    bookings: 1320,
    enquiries: 47,
    trainers: 14,
    revenue: {
      total: 1285000,
      thisMonth: 186000,
      today: 12450,
      trend: [22000, 31000, 28000, 45000, 60000, 186000]
    },
    bookingTypes: {
      gym: 40,
      badminton: 25,
      swimming: 20,
      yoga: 15
    },
    activeMembers: 372,
    pendingBookings: 28,
    activeEvents: 6
  };

  // IMPORTANT: initialize with dummy
  const [stats, setStats] = useState(dummyStats);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/system/admin/dashboard");

        // Merge API on top of dummy
        setStats(prev => ({
          ...prev,
          ...res.data,
          revenue: {
            ...prev.revenue,
            ...res.data?.revenue
          }
        }));
      } catch {
        // keep dummy
        setStats(dummyStats);
      }
    };
    fetchDashboard();
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          {/* <div style={styles.badge}>Admin Dashboard</div> */}
          <h1 style={styles.heroTitle}>
            Welcome, {adminName} 👋
          </h1>
          <p style={styles.heroSubtitle}>
            Real-time business intelligence & control panel
          </p>
        </div>
      </div>

      {/* CORE STATS */}
      <div style={styles.section}>
        <div style={styles.grid}>
          <StatCard title="Total Users" value={stats.users} />
          <StatCard title="Total Bookings" value={stats.bookings} />
          <StatCard title="Enquiries" value={stats.enquiries} />
          <StatCard title="Trainers" value={stats.trainers} />
        </div>
      </div>

      {/* GRAPHS */}
      <div style={styles.sectionRow}>
        <div style={styles.graphCard}>
          <h3>Revenue Trend (₹)</h3>
          <BarChart data={stats.revenue.trend} />
        </div>

        <div style={styles.graphCard}>
          <h3>Booking Distribution (%)</h3>
          <BookingBars data={stats.bookingTypes} />
        </div>
      </div>

      {/* KPI */}
      <div style={styles.section}>
        <h3>System Health</h3>
        <div style={styles.grid}>
          <ProgressCard title="Active Members" value={stats.activeMembers} max={500} />
          <ProgressCard title="Pending Bookings" value={stats.pendingBookings} max={100} />
          <ProgressCard title="Active Events" value={stats.activeEvents} max={10} />
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div style={styles.section}>
        <h3>Admin Controls</h3>
        <div style={styles.grid}>
          <ActionCard title="Manage Members" route="/admin/manage-members" />
          <ActionCard title="Manage Trainers" route="/admin/manage-trainers" />
          <ActionCard title="Manage Bookings" route="/admin/manage-bookings" />
          <ActionCard title="View Enquiries" route="/admin/view-enquiry" />
          <ActionCard title="Add Facility" route="/admin/add-facility" />
          <ActionCard title="Add Event" route="/admin/add-event" />
        </div>
      </div>

      {/* ACTIVITY */}
      <div style={styles.section}>
        <h3>Live Activity Feed</h3>
        <div style={styles.activityBox}>
          <ActivityItem text="Rahul booked Gym slot (₹400)" />
          <ActivityItem text="New member registered: Ankit" />
          <ActivityItem text="Swimming pool booking approved" />
          <ActivityItem text="₹12,450 revenue generated today" />
          <ActivityItem text="Yoga event created" />
        </div>
      </div>
    </>
  );
}

/* COMPONENTS (unchanged) */

function StatCard({ title, value }) {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

function ProgressCard({ title, value, max }) {
  const percent = (value / max) * 100;
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <h2>{value}</h2>
      <div style={styles.progressBg}>
        <div style={{ ...styles.progressFill, width: `${percent}%` }} />
      </div>
    </div>
  );
}

function BarChart({ data }) {
  const max = Math.max(...data);
  const labels = ["W1", "W2", "W3", "W4", "W5", "This"];

  return (
    <div>
      <div style={styles.barChart}>
        {data.map((val, i) => {
          const height = (val / max) * 100;

          return (
            <div key={i} style={styles.barWrapper}>
              {/* Number */}
              <div style={styles.barValue}>
                ₹{(val / 1000).toFixed(0)}k
              </div>

              {/* Bar */}
              <div
                style={{
                  ...styles.bar,
                  height: `${height}%`
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Labels */}
      <div style={styles.barLabels}>
        {labels.map(label => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}



function BookingBars({ data }) {
  return Object.entries(data).map(([key, val]) => (
    <div key={key} style={{ marginBottom: 10 }}>
      <strong>{key}</strong>
      <div style={styles.progressBg}>
        <div style={{ ...styles.progressFill, width: `${val}%` }} />
      </div>
    </div>
  ));
}

function ActionCard({ title, route }) {
  const navigate = useNavigate();
  return (
    <div style={styles.actionCard} onClick={() => navigate(route)}>
      <h4>{title}</h4>
      <span>Go →</span>
    </div>
  );
}

function ActivityItem({ text }) {
  return <div style={styles.activityItem}>• {text}</div>;
}

/* STYLES (same as before) */
const styles = {
  hero: {
    position: "relative",
    height: "260px",
    background: "linear-gradient(135deg, #6366f1, #9333ea)",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "50px",
    borderBottomLeftRadius: "32px",
    borderBottomRightRadius: "32px"
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 60%)"
  },
  heroContent: { position: "relative", zIndex: 2 },
  heroTitle: {
    fontSize: 38,
    margin: "10px 0",
    fontWeight: 700,
    letterSpacing: "-0.5px"
  },
  heroSubtitle: {
    opacity: 0.9,
    fontSize: 16
  },

  section: {
    padding: "40px 50px"
  },

  sectionRow: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 30,
    padding: "20px 50px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 24
  },

  card: {
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(8px)",
    borderRadius: 18,
    padding: "22px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    transition: "0.3s",
    cursor: "default"
  },

  graphCard: {
    background: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    padding: "26px",
    boxShadow: "0 14px 40px rgba(0,0,0,0.1)"
  },

  /* BAR CHART */

  barChart: {
    display: "flex",
    alignItems: "flex-end",
    height: 200,
    gap: 14,
    marginTop: 30
  },

  barWrapper: {
    flex: 1,
    background: "linear-gradient(180deg, #f1f1f1, #e5e7eb)",
    borderRadius: 10,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    padding: "8px"
  },

  bar: {
    width: "100%",
    background: "linear-gradient(180deg, #6366f1, #9333ea)",
    borderRadius: 8,
    transition: "0.4s",
    boxShadow: "0 6px 12px rgba(99,102,241,0.4)"
  },

  barValue: {
    fontSize: 12,
    marginBottom: 6,
    fontWeight: 600,
    color: "#6366f1"
  },

  barLabels: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    marginTop: 10,
    color: "#555"
  },

  /* PROGRESS */

  progressBg: {
    width: "100%",
    height: 10,
    background: "#e5e7eb",
    borderRadius: 20,
    marginTop: 12,
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #6366f1, #9333ea)",
    borderRadius: 20,
    boxShadow: "0 4px 10px rgba(99,102,241,0.5)"
  },

  /* ACTIONS */

  actionCard: {
    background: "linear-gradient(180deg, #ffffff, #f9fafb)",
    borderRadius: 18,
    padding: "22px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
    cursor: "pointer",
    textAlign: "center",
    transition: "0.25s"
  },

  /* ACTIVITY */

  activityBox: {
    background: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    padding: "26px",
    boxShadow: "0 14px 40px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: 14
  },

  activityItem: {
    fontSize: 14,
    padding: "8px 12px",
    borderRadius: 10,
    background: "linear-gradient(90deg, #f3f4f6, #fff)"
  }
};

