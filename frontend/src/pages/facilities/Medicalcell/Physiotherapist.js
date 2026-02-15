import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

// HERO images
import physio1 from "../../../assets/images/physio1.jpg";
import physio2 from "../../../assets/images/physio2.jpg";
import physio3 from "../../../assets/images/physio3.jpg";

// SECTION images
import physio4 from "../../../assets/images/physio4.jpg";
import physio5 from "../../../assets/images/physio5.jpg";
import physio6 from "../../../assets/images/physio6.jpg";

export default function Physiotherapist() {
  const banners = [physio1, physio2, physio3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div
        style={{
          height: "65vh",
          backgroundImage: `url(${banners[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <h1 style={heroText}>Physiotherapy</h1>
      </div>

      {/* INTRO */}
      <div style={intro}>
        Specialized physiotherapy services focused on recovery,
        rehabilitation, and performance enhancement.
      </div>

      {/* SECTION 1 */}
      <div style={section}>
        <div style={text}>
          <h2>Sports Injury Rehabilitation</h2>
          <p>
            Tailored rehabilitation programs designed for athletes to
            recover safely and return to peak performance.
          </p>
        </div>
        <img src={physio4} alt="Rehab" style={image} />
      </div>

      {/* SECTION 2 */}
      <div style={{ ...section, flexDirection: "row-reverse" }}>
        <div style={text}>
          <h2>Pain Management Therapy</h2>
          <p>
            Advanced techniques to relieve muscle pain, joint stiffness,
            and post-injury discomfort.
          </p>
        </div>
        <img src={physio5} alt="Pain Therapy" style={image} />
      </div>

      {/* SECTION 3 */}
      <div style={section}>
        <div style={text}>
          <h2>Post-Workout Recovery</h2>
          <p>
            Recovery sessions to reduce fatigue, improve flexibility,
            and prevent long-term injuries.
          </p>
        </div>
        <img src={physio6} alt="Recovery" style={image} />
      </div>
    </>
  );
}

/* ---------- STYLES ---------- */

const heroText = {
  color: "#fff",
  fontSize: "50px",
  fontWeight: "bold",
  background: "rgba(0,0,0,0.6)",
  padding: "18px 45px",
  borderRadius: "12px",
};

const intro = {
  padding: "70px 30px",
  textAlign: "center",
  fontSize: "18px",
  backgroundColor: "#f4f6f8",
};

const section = {
  display: "flex",
  alignItems: "center",
  gap: "60px",
  padding: "80px 50px",
  maxWidth: "1200px",
  margin: "auto",
};

const image = {
  width: "50%",
  borderRadius: "18px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
};

const text = {
  width: "50%",
};


