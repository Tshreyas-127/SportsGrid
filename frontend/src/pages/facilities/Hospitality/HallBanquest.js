import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

// HERO images (auto-slide)
import hall1 from "../../../assets/images/hall1.jpeg";
import hall2 from "../../../assets/images/hall2.jpg";
import hall3 from "../../../assets/images/hall3.webp";

// SECTION images
import hall4 from "../../../assets/images/hall1.jpeg";
import hall5 from "../../../assets/images/hall5.webp";
import hall6 from "../../../assets/images/hall6.webp";

export default function HallBanquet() {
  const banners = [hall1, hall2, hall3];
  const [index, setIndex] = useState(0);

  // Auto hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <div
        style={{
          height: "65vh",
          backgroundImage: `url(${banners[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <h1 style={heroText}>Banquet & Event Halls</h1>
      </div>

      {/* ================= INTRO ================= */}
      <div style={introSection}>
        <p>
          Elegant and spacious halls designed for weddings, celebrations,
          corporate events, and memorable occasions.
        </p>
      </div>

      {/* ================= SECTION 1 ================= */}
      <div style={section}>
        <div style={textBlock}>
          <h2>Wedding Banquet</h2>
          <p>
            Beautifully designed wedding halls with luxurious décor, lighting,
            and spacious seating arrangements.
          </p>
        </div>
        <img src={hall4} alt="Wedding Hall" style={imageBlock} />
      </div>

      {/* ================= SECTION 2 ================= */}
      <div style={{ ...section, flexDirection: "row-reverse" }}>
        <div style={textBlock}>
          <h2>Conference & Corporate Hall</h2>
          <p>
            Professional conference halls equipped with audio-visual systems,
            presentation setups, and comfortable seating.
          </p>
        </div>
        <img src={hall5} alt="Conference Hall" style={imageBlock} />
      </div>

      {/* ================= SECTION 3 ================= */}
      <div style={section}>
        <div style={textBlock}>
          <h2>Celebration & Party Hall</h2>
          <p>
            Ideal for birthdays, anniversaries, and private celebrations with
            customizable décor and catering support.
          </p>
        </div>
        <img src={hall6} alt="Party Hall" style={imageBlock} />
      </div>

      {/* ================= CTA ================= */}
      <div style={ctaSection}>
        <h2>Spacious • Elegant • Memorable</h2>
        <p>
          From intimate gatherings to grand celebrations, our halls provide the
          perfect setting for every event.
        </p>
      </div>
    </>
  );
}

/* ================= STYLES ================= */

const heroText = {
  color: "#fff",
  fontSize: "52px",
  fontWeight: "bold",
  background: "rgba(0,0,0,0.55)",
  padding: "18px 50px",
  borderRadius: "14px",
};

const introSection = {
  padding: "70px 25px",
  textAlign: "center",
  backgroundColor: "#f2f2f2",
  fontSize: "18px",
  color: "#444",
};

const section = {
  display: "flex",
  alignItems: "center",
  gap: "60px",
  padding: "80px 50px",
  maxWidth: "1200px",
  margin: "auto",
};

const imageBlock = {
  width: "50%",
  borderRadius: "18px",
  boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
};

const textBlock = {
  width: "50%",
};

const ctaSection = {
  background: "linear-gradient(135deg, #232526, #414345)",
  padding: "90px 30px",
  textAlign: "center",
  color: "#fff",
};



