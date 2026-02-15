import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

// HERO images (auto-slide)
import room1 from "../../../assets/images/rooms1.webp";
import room2 from "../../../assets/images/rooms2.jpg";
import room3 from "../../../assets/images/rooms3.jpg";

// Section images
import room4 from "../../../assets/images/rooms4.avif";
import room5 from "../../../assets/images/rooms5.webp";
import room6 from "../../../assets/images/rooms6.jpg";

export default function Rooms() {
  const banners = [room1, room2, room3];
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
          justifyContent: "center",
          alignItems: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <h1 style={heroText}>Luxury Rooms</h1>
      </div>

      {/* ================= INTRO ================= */}
      <div style={introSection}>
        <p>
          Experience comfort, elegance, and modern amenities designed to give
          you a relaxing and premium stay.
        </p>
      </div>

      {/* ================= SECTION 1 ================= */}
      <div style={section}>
        <div style={textBlock}>
          <h2>Deluxe & Executive Rooms</h2>
          <p>
            Spacious rooms featuring elegant interiors, plush bedding, and
            premium furnishings for maximum comfort.
          </p>
        </div>
        <img src={room4} alt="Deluxe Rooms" style={imageBlock} />
      </div>

      {/* ================= SECTION 2 ================= */}
      <div style={{ ...section, flexDirection: "row-reverse" }}>
        <div style={textBlock}>
          <h2>Family Friendly Comfort</h2>
          <p>
            Perfectly designed family rooms offering extra space, comfort, and
            convenience for a pleasant family stay.
          </p>
        </div>
        <img src={room5} alt="Family Rooms" style={imageBlock} />
      </div>

      {/* ================= SECTION 3 ================= */}
      <div style={section}>
        <div style={textBlock}>
          <h2>Modern Amenities</h2>
          <p>
            Enjoy air-conditioned rooms, high-speed Wi-Fi, smart TVs, minibar,
            24×7 room service, and housekeeping.
          </p>
        </div>
        <img src={room6} alt="Amenities" style={imageBlock} />
      </div>

      {/* ================= CTA ================= */}
      <div style={ctaSection}>
        <h2>Relax • Refresh • Rejuvenate</h2>
        <p>
          Our luxury rooms are designed to provide you with a calm and
          rejuvenating experience throughout your stay.
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
  padding: "70px 20px",
  textAlign: "center",
  backgroundColor: "#f1f1f1",
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
  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
};

const textBlock = {
  width: "50%",
};

const ctaSection = {
  background: "linear-gradient(135deg, #2c3e50, #7f8c8d)",
  padding: "90px 30px",
  textAlign: "center",
  color: "#fff",
};




