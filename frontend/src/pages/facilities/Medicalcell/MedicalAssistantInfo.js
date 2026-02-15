import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

// HERO images
import med1 from "../../../assets/images/medi1.jpg";
import med2 from "../../../assets/images/medi2.jpg";
import med3 from "../../../assets/images/medi3.jpg";

// SECTION images
import med4 from "../../../assets/images/medi4.jpg";
import med5 from "../../../assets/images/medi5.jpg";
import med6 from "../../../assets/images/medi6.jpg";

export default function MedicalAssistantInfo() {
  const banners = [med1, med2, med3];
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
        <h1 style={heroText}>Medical Assistance</h1>
      </div>

      {/* INTRO */}
      <div style={intro}>
        Professional medical assistance available within the sports facility
        to ensure athlete safety and well-being.
      </div>

      {/* SECTION 1 */}
      <div style={section}>
        <div style={text}>
          <h2>On-Site Medical Staff</h2>
          <p>
            Experienced medical professionals are present during training
            sessions, matches, and events to provide immediate assistance.
          </p>
        </div>
        <img src={med4} alt="Medical Staff" style={image} />
      </div>

      {/* SECTION 2 */}
      <div style={{ ...section, flexDirection: "row-reverse" }}>
        <div style={text}>
          <h2>Health Monitoring</h2>
          <p>
            Regular health checks, vitals monitoring, and fitness assessments
            to keep members in peak condition.
          </p>
        </div>
        <img src={med5} alt="Health Monitoring" style={image} />
      </div>

      {/* SECTION 3 */}
      <div style={section}>
        <div style={text}>
          <h2>Injury & Emergency Support</h2>
          <p>
            Immediate care for sports injuries, fatigue, dehydration, and
            sudden medical conditions.
          </p>
        </div>
        <img src={med6} alt="Injury Care" style={image} />
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


