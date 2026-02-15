import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

// Hero images (auto scroll)
import banner1 from "../../../assets/images/kids1.jpg";
import banner2 from "../../../assets/images/kids2.avif";
import banner3 from "../../../assets/images/kids3.png";

// Section images
import kids4 from "../../../assets/images/kids4.jpg";
import kids5 from "../../../assets/images/kids5.avif";
import kids6 from "../../../assets/images/kids6.jpg";

export default function KidsZone() {
  const banners = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto hero scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <div
        style={{
          height: "60vh",
          backgroundImage: `url(${banners[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <h1 style={heroText}>Kids Zone</h1>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div style={containerStyle}>

        <p style={subHeading}>
          A fun, safe, and joyful space designed especially for kids to learn,
          play, and grow with happiness.
        </p>

        {/* Section 1 */}
        <div style={section}>
          <img src={kids4} alt="Outdoor Play Area" style={sectionImg} />
          <div style={sectionText}>
            <h2>Outdoor Play Area</h2>
            <p>
              A colorful outdoor play space where kids can run, jump, and explore
              freely in a safe and joyful environment.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div style={{ ...section, flexDirection: "row-reverse" }}>
          <img src={kids5} alt="Learning Games" style={sectionImg} />
          <div style={sectionText}>
            <h2>Learning & Fun Games</h2>
            <p>
              Interactive learning games that enhance creativity, imagination,
              teamwork, and problem-solving skills.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div style={section}>
          <img src={kids6} alt="Kids Activities" style={sectionImg} />
          <div style={sectionText}>
            <h2>Activities & Events</h2>
            <p>
              Regular events, workshops, storytelling sessions, and celebrations
              to keep kids engaged and happy.
            </p>
          </div>
        </div>

      </div>

      {/* ================= HIGHLIGHT SECTION ================= */}
      <div style={highlightSection}>
        <h2>A Safe & Happy Environment</h2>
        <p>
          Our Kids Zone is thoughtfully designed with safety, fun, and learning
          in mind — where every child feels excited and secure.
        </p>
      </div>
    </>
  );
}

/* ================= STYLES ================= */

const heroText = {
  color: "#fff",
  fontSize: "50px",
  fontWeight: "bold",
  background: "rgba(0,0,0,0.55)",
  padding: "18px 45px",
  borderRadius: "12px",
};

const containerStyle = {
  padding: "70px 40px",
  backgroundColor: "#f8f9fa",
};

const subHeading = {
  textAlign: "center",
  fontSize: "18px",
  color: "#555",
  marginBottom: "80px",
};

const section = {
  display: "flex",
  alignItems: "center",
  gap: "50px",
  maxWidth: "1100px",
  margin: "0 auto 90px auto",
};

const sectionImg = {
  width: "50%",
  borderRadius: "20px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
};

const sectionText = {
  width: "50%",
};

const highlightSection = {
  background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
  padding: "80px 20px",
  textAlign: "center",
};

highlightSection.h2 = {
  fontSize: "34px",
};

highlightSection.p = {
  fontSize: "18px",
  maxWidth: "700px",
  margin: "auto",
};