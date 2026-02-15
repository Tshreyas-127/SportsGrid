import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

// HERO images (auto scroll)
import game1 from "../../../assets/images/gaming1.jpg";
import game2 from "../../../assets/images/gaming2.jpg";
import game3 from "../../../assets/images/gaming3.avif";

// Section images
import game4 from "../../../assets/images/gaming4.webp";
import game5 from "../../../assets/images/gaming5.webp";
import game6 from "../../../assets/images/gaming6.jpg";

export default function GamingZone() {
  const banners = [game1, game2, game3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll hero
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
          height: "65vh",
          backgroundImage: `url(${banners[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <h1 style={heroText}>Gaming Zone</h1>
      </div>

      {/* ================= INTRO ================= */}
      <div style={introSection}>
        <p>
          Step into a world of excitement with modern gaming consoles,
          immersive VR experiences, and action-packed arcade fun.
        </p>
      </div>

      {/* ================= SECTIONS ================= */}

      {/* Section 1 */}
      <div style={section}>
        <div style={sectionText}>
          <h2>Console Gaming Arena</h2>
          <p>
            Enjoy high-definition console gaming with friends on large screens.
            Perfect for competitive and casual gaming sessions.
          </p>
        </div>
        <img src={game4} alt="Console Gaming" style={sectionImg} />
      </div>

      {/* Section 2 */}
      <div style={{ ...section, flexDirection: "row-reverse" }}>
        <div style={sectionText}>
          <h2>Virtual Reality Experience</h2>
          <p>
            Experience next-level gaming with immersive VR technology that
            places you right inside the game world.
          </p>
        </div>
        <img src={game5} alt="VR Gaming" style={sectionImg} />
      </div>

      {/* Section 3 */}
      <div style={section}>
        <div style={sectionText}>
          <h2>Arcade & Multiplayer Fun</h2>
          <p>
            Relive classic arcade games and enjoy multiplayer battles that
            bring energy, excitement, and teamwork.
          </p>
        </div>
        <img src={game6} alt="Arcade Games" style={sectionImg} />
      </div>

      {/* ================= CTA ================= */}
      <div style={ctaSection}>
        <h2>Level Up Your Gaming Experience</h2>
        <p>
          Whether you are a casual gamer or a competitive player,
          our Gaming Zone offers something exciting for everyone.
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
  background: "rgba(0,0,0,0.65)",
  padding: "18px 50px",
  borderRadius: "14px",
};

const introSection = {
  padding: "70px 20px",
  textAlign: "center",
  backgroundColor: "#111",
  color: "#eee",
  fontSize: "18px",
};

const section = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "60px",
  padding: "80px 50px",
  maxWidth: "1200px",
  margin: "auto",
};

const sectionImg = {
  width: "50%",
  borderRadius: "20px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
};

const sectionText = {
  width: "50%",
};

const ctaSection = {
  background: "linear-gradient(135deg, #1f1c2c, #928dab)",
  padding: "90px 30px",
  textAlign: "center",
  color: "#fff",
};

ctaSection.h2 = {
  fontSize: "36px",
};

ctaSection.p = {
  fontSize: "18px",
  maxWidth: "750px",
  margin: "auto",
};

