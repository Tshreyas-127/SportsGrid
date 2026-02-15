import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

// HERO images
import aid1 from "../../../assets/images/aid1.jpg";
import aid2 from "../../../assets/images/aid2.jpg";
import aid3 from "../../../assets/images/aid3.jpg";

// SECTION images
import aid4 from "../../../assets/images/aid4.jpg";
import aid5 from "../../../assets/images/aid5.jpg";
import aid6 from "../../../assets/images/aid6.jpg";

export default function FirstAidEmergency() {
  const banners = [aid1, aid2, aid3];
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
        <h1 style={heroText}>First Aid & Emergency Care</h1>
      </div>

      {/* INTRO */}
      <div style={intro}>
        Immediate medical response and emergency care facilities available
        within the sports complex.
      </div>

      {/* SECTION 1 */}
      <div style={section}>
        <div style={text}>
          <h2>Fully Equipped First Aid Stations</h2>
          <p>
            Strategically placed first aid stations stocked with medical
            essentials for quick treatment.
          </p>
        </div>
        <img src={aid4} style={image} alt="First Aid" />
      </div>

      {/* SECTION 2 */}
      <div style={{ ...section, flexDirection: "row-reverse" }}>
        <div style={text}>
          <h2>Emergency Beds & Care</h2>
          <p>
            Immediate medical attention and resting facilities during injuries
            or accidents.
          </p>
        </div>
        <img src={aid5} style={image} alt="Emergency Care" />
      </div>

      {/* SECTION 3 */}
      <div style={section}>
        <div style={text}>
          <h2>Certified Emergency Staff</h2>
          <p>
            Trained professionals available to handle emergencies and critical
            situations.
          </p>
        </div>
        <img src={aid6} style={image} alt="Medical Staff" />
      </div>
    </>
  );
}

/* STYLES */
const heroText = {
  color: "#fff",
  fontSize: "50px",
  fontWeight: "bold",
  background: "rgba(0,0,0,0.55)",
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


