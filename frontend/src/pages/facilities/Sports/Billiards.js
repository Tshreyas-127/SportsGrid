import Navbar from "../../../components/Navbar";
import { useNavigate } from "react-router-dom";

// Images
import b1 from "../../../assets/images/billiards1.jpg";
import b2 from "../../../assets/images/billiards2.webp";
import b3 from "../../../assets/images/billiards3.jpg";

export default function Billiards() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div style={heroSection}>
        <h1 style={heroText}>Billiards</h1>
      </div>

      {/* IMAGE GALLERY */}
      <div style={container}>
        <div style={gallery}>
          <img src={b1} alt="Billiards Court" style={galleryImg} />
          <img src={b2} alt="Billiards Match" style={galleryImg} />
          <img src={b3} alt="Indoor Billiards" style={galleryImg} />
        </div>

        {/* TIMINGS */}
        <div style={timingSection}>
          <h2>Department Timings</h2>

          <p><strong>Morning:</strong></p>
          <p>06:00 to 11:00 hours</p>

          <p style={{ marginTop: "15px" }}><strong>Evening:</strong></p>
          <p>17:00 to 22:30 hours</p>

          <p style={{ marginTop: "20px" }}>
            <strong>Sat – Sun & Holidays</strong>
          </p>

          <button
            style={bookButton}
            onClick={() => navigate("/booking/coaching")}
          >
            Book Now
          </button>
        </div>
      </div>

     <footer className="footer">
      <div className="footer-container">

        {/* Left Column */}
        <div className="footer-col">
          <h3>We Are SportGrid</h3>
          <p>Contact No: +91 9892649590, +91 8655944301, +91 8655944300</p>
          <p>Email: info@sportgrid.in</p>
          <p>info@sportgrid.com</p>
          <p>
            Address:SportGrid Club,Yashwantrao Chavan Pratishthan,<br />
            Nariman Point, Mumbai, 400019
          </p>
        </div>

        {/* Sports Column */}
        <div className="footer-col">
          <h3>Sports</h3>
          <ul>
                        <li>Aerobics</li>
                        <li>Badminton</li>
                        <li>Carrom</li>
                        <li>Chess</li>
                        <li>Gymnastics</li>
                        <li>Indoor Cricket Nets</li>
                        <li>Pistol Shooting</li>
                        <li>Squash</li>
                        <li>Table Tennis</li>
                        <li>Yoga</li>
                        <li>Swimming</li>
                        <li>VolleyBall</li>
                        <li>Lawn Tennis</li>
                        <li>Gym</li>
                        <li>Skating</li>
          </ul>
        </div>

        {/* About Column */}
        <div className="footer-col">
          <h3>About Us</h3>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Kids Zone</li>
            <li>Gaming Zone</li>
            <li>Library Reading</li>
            <li>Rooms</li>
            <li>Banquet Halls</li>
            <li>Food Services</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 — SportGrid Gymkhana. All rights reserved. Developed by Group 8
      </div>

      {/* Scroll to top */}
      <a href="#" className="scroll-top">↑</a>
    </footer>

      {/* FOOTER
      <footer style={footer}>
        <div style={footerGrid}>
          <div>
            <h3>We Are Sports Club</h3>
            <p>Contact No: +91 8655944302</p>
            <p>Email: info@sportsclub.com</p>
            <p>Address: Mumbai, Maharashtra</p>
          </div>

          <div>
            <h3>Sports</h3>
            <p>Badminton</p>
            <p>Gym</p>
            <p>Aerobics</p>
            <p>Yoga</p>
          </div>

          <div>
            <h3>About Us</h3>
            <p>About</p>
            <p>Contact</p>
            <p>Events</p>
          </div>
        </div>

        <div style={copyright}>
          © 2026 Sports Club. All rights reserved.
        </div>
      </footer> */}

    </>
  );
}

const heroSection = {
  height: "45vh",
  backgroundColor: "#1c1c1c",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const heroText = {
  color: "#fff",
  fontSize: "42px",
  letterSpacing: "2px",
};

const container = {
  padding: "60px 40px",
};

const gallery = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
  marginBottom: "60px",
};

const galleryImg = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "10px",
};

const timingSection = {
  maxWidth: "500px",
  fontSize: "18px",
  lineHeight: "1.8",
};

const footer = {
  backgroundColor: "#111",
  color: "#ddd",
  padding: "50px 40px 20px",
  marginTop: "80px",
};

const footerGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "40px",
};

const copyright = {
  marginTop: "40px",
  textAlign: "center",
  fontSize: "14px",
  color: "#aaa",
};

const bookButton = {
  marginTop: "25px",
  padding: "12px 30px",
  backgroundColor: "#0d6efd",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};

