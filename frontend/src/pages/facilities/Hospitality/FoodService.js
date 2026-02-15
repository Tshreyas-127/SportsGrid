import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

// HERO images (auto-slide)
import food1 from "../../../assets/images/food1.jpg";
import food2 from "../../../assets/images/foods2.webp";
import food3 from "../../../assets/images/foods3.jpg";

// SECTION images
import food4 from "../../../assets/images/foods4.jpg";
import food5 from "../../../assets/images/foods5.webp";
import food6 from "../../../assets/images/foods6.jpg";

export default function FoodService() {
  const banners = [food1, food2, food3];
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
        <h1 style={heroText}>Food Services</h1>
      </div>

      {/* ================= INTRO ================= */}
      <div style={introSection}>
        <p>
          Experience delicious, hygienic, and multi-cuisine dining crafted to
          satisfy every taste and lifestyle.
        </p>
      </div>

      {/* ================= SECTION 1 ================= */}
      <div style={section}>
        <div style={textBlock}>
          <h2>Multi-Cuisine Restaurant</h2>
          <p>
            Enjoy Indian, Chinese, and Continental cuisines prepared by expert
            chefs using fresh and premium ingredients.
          </p>
        </div>
        <img src={food4} alt="Multi Cuisine" style={imageBlock} />
      </div>

      {/* ================= SECTION 2 ================= */}
      <div style={{ ...section, flexDirection: "row-reverse" }}>
        <div style={textBlock}>
          <h2>Healthy & Fitness Meals</h2>
          <p>
            Nutritious and balanced meals designed for fitness enthusiasts,
            athletes, and health-conscious members.
          </p>
        </div>
        <img src={food5} alt="Healthy Meals" style={imageBlock} />
      </div>

      {/* ================= SECTION 3 ================= */}
      <div style={section}>
        <div style={textBlock}>
          <h2>Kids Menu & Café</h2>
          <p>
            Specially crafted kids meals along with a café serving snacks,
            beverages, and light refreshments.
          </p>
        </div>
        <img src={food6} alt="Kids Menu" style={imageBlock} />
      </div>

      {/* ================= CTA ================= */}
      <div style={ctaSection}>
        <h2>Fresh • Hygienic • Flavorful</h2>
        <p>
          From buffet services to room dining, we ensure every meal is a
          delightful experience.
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
  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
};

const textBlock = {
  width: "50%",
};

const ctaSection = {
  background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
  padding: "90px 30px",
  textAlign: "center",
  color: "#fff",
};



