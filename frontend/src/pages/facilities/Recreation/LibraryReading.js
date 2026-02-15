import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

// HERO images (auto-scroll)
import lib1 from "../../../assets/images/library1.jpg";
import lib2 from "../../../assets/images/library2.jpg";
import lib3 from "../../../assets/images/library3.jpg";

// Section images
import lib4 from "../../../assets/images/library4.jfif";
import lib5 from "../../../assets/images/library5.jpg";
import lib6 from "../../../assets/images/library6.jpg";

export default function LibraryReading() {
  const banners = [lib1, lib2, lib3];
  const [index, setIndex] = useState(0);

  // Auto banner scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
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
        <h1 style={heroText}>Library & Reading Room</h1>
      </div>

      {/* ================= INTRO ================= */}
      <div style={introSection}>
        <p>
          A calm and inspiring environment designed for reading, research,
          learning, and peaceful self-development.
        </p>
      </div>

      {/* ================= SECTION 1 ================= */}
      <div style={section}>
        <div style={textBlock}>
          <h2>Silent Reading Area</h2>
          <p>
            Experience complete silence and comfort with dedicated reading
            zones that help improve focus and concentration.
          </p>
        </div>
        <img src={lib4} alt="Silent Reading" style={imageBlock} />
      </div>

      {/* ================= SECTION 2 ================= */}
      <div style={{ ...section, flexDirection: "row-reverse" }}>
        <div style={textBlock}>
          <h2>Extensive Book Collection</h2>
          <p>
            Explore a wide range of books including fiction, non-fiction,
            sports education, self-help, and academic materials.
          </p>
        </div>
        <img src={lib5} alt="Book Collection" style={imageBlock} />
      </div>

      {/* ================= SECTION 3 ================= */}
      <div style={section}>
        <div style={textBlock}>
          <h2>Study & Research Tables</h2>
          <p>
            Ergonomically designed desks and seating arrangements for long
            reading and research sessions.
          </p>
        </div>
        <img src={lib6} alt="Study Tables" style={imageBlock} />
      </div>

      {/* ================= CTA ================= */}
      <div style={ctaSection}>
        <h2>Read • Learn • Grow</h2>
        <p>
          Our Library & Reading Room offers the perfect environment to nourish
          your mind and expand your knowledge.
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
  padding: "18px 50px",
  borderRadius: "14px",
};

const introSection = {
  padding: "70px 20px",
  textAlign: "center",
  backgroundColor: "#f1efe7",
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
  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
};

const textBlock = {
  width: "50%",
};

const ctaSection = {
  background: "linear-gradient(135deg, #2c3e50, #bdc3c7)",
  padding: "90px 30px",
  textAlign: "center",
  color: "#fff",
};