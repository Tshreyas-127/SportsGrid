import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  // 🔐 Auth data
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  // Dashboard route based on role
  const getDashboardRoute = () => {
    switch (role) {
      case "MEMBER":
        return "/member-dashboard";
      case "ADMIN":
        return "/admin";
      case "TRAINER":
        return "/trainer";
      case "NUTRITIONIST":
        return "/nutritionist";
      case "SUPER_ADMIN":
        return "/superadmin";
      default:
        return null;
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.history.replaceState(null, "", "/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid">

        {/* LOGO */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <span style={{ color: "#0d6efd" }}>Sport</span>
          <span style={{ color: "#ff7b00" }}>Grid</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold align-items-center">

            {/* GO TO DASHBOARD */}
            {token && getDashboardRoute() && (
              <li className="nav-item me-3">
                <Link
                  className="nav-link fw-bold"
                  style={{ color: "#ff7b00" }}
                  to={getDashboardRoute()}
                >
                  Go to Dashboard
                </Link>
              </li>
            )}

            {/* HOME */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* THE CLUB */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                The Club
              </span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/club/about">About Us</Link></li>
                <li><Link className="dropdown-item" to="/club/contact">Contact Us</Link></li>
                <li><Link className="dropdown-item" to="/club/enquiry">Enquiry</Link></li>
              </ul>
            </li>

            {/* BOOKING */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Booking
              </span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/booking/facility/ground">Ground</Link></li>
                <li><Link className="dropdown-item" to="/booking/facility/banquet">Banquet</Link></li>
                <li><Link className="dropdown-item" to="/booking/facility/room">Rooms</Link></li>
                <li><Link className="dropdown-item" to="/booking/coaching">Coaching & Training</Link></li>
                <li><Link className="dropdown-item" to="/booking/membership">Membership</Link></li>
              </ul>
            </li>

            {/* FACILITIES (MEGA) */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Facilities
              </span>
              <ul className="dropdown-menu">

                <li className="dropdown-submenu">
                  <span className="dropdown-item dropdown-toggle">Sports</span>
                  <ul className="dropdown-menu">
                   <li><Link className="dropdown-item" to="/facilities/sports/aerobics">Aerobics</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/badminton">Badminton</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/billiards">Billiards</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/carrom">Carrom</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/chess">Chess</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/gymnastics">Gymnastics</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/indoor-cricket">Indoor Cricket Nets</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/pistol-shooting">Pistol Shooting</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/squash">Squash</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/table-tennis">Table Tennis</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/yoga">Yoga</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/swimming">Swimming</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/volleyball">Volley Ball</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/Skating">Skating</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/gym">Gym</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/sports/lawntennis">Lawn Tennis</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <span className="dropdown-item dropdown-toggle">Recreation</span>
                  <ul className="dropdown-menu">
                     <li><Link className="dropdown-item" to="/facilities/recreation/kid-zone">Kid Zone</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/recreation/gaming-zone">Gaming Zone</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/recreation/library">Library / Reading Room</Link></li>
                  </ul>
                </li>

                 <li className="dropdown-submenu">
                  <span className="dropdown-item dropdown-toggle">Hospitality</span>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/facilities/hospitality/rooms">Rooms</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/hospitality/food">Food Service</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/hospitality/banquet">Banquet / Party Hall</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <span className="dropdown-item dropdown-toggle">Medical Cell</span>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/facilities/medical/info">Medical Assistance Info</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/medical/first-aid">First Aid / Emergency</Link></li>
                    <li><Link className="dropdown-item" to="/facilities/medical/physio">Physiotherapist Details</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <span className="dropdown-item dropdown-toggle">Wellness</span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/member/nutrition-consultation">
                        Nutrition Consultation
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/member/workout/request">
                        Customized Workout Plan
                      </Link>
                    </li>
                  </ul>
                </li>

              </ul>
            </li>

            {/* EVENTS */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Events
              </span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/events/upcoming">Upcoming Events</Link></li>
                <li><Link className="dropdown-item" to="/events/past">Past Events</Link></li>
                <li><Link className="dropdown-item" to="/events/register">Event Registration</Link></li>
              </ul>
            </li>

            {/* ACHIEVEMENTS */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Achievements
              </span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/achievements/club">Club Achievements</Link></li>
                <li><Link className="dropdown-item" to="/achievements/member">Member Achievements</Link></li>
              </ul>
            </li>

            {/* LOGIN / LOGOUT */}
            {token ? (
              <>
                <li className="nav-item ms-3">
                  <span className="nav-link text-primary">
                    Welcome, <b>{username}</b>
                  </span>
                </li>

                <li className="nav-item ms-2">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item ms-3">
                <Link
                  className="btn btn-primary"
                  to="/login"
                  onClick={() => {
                    localStorage.setItem("lastPublicPage", window.location.pathname);
                  }}
                >
                  Login
                </Link>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
