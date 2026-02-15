import { useState, useEffect } from "react";
import "./ClubAchievement.css";
import r2 from "../assets/images/r2.jpg";
import IndiaU19 from "../assets/images/India-U19-800x50.png"
import lawnTennis from "../assets/images/8349afd7-890a-4243-b04d-56a8e0745c2a.png";  
import track100m from "../assets/images/sprint-race-athletes.jpg";
import cpst from "../assets/images/My-project-6-1024x576.jpg";

const slides = [
  {
    image:
      "https://blob.taabur.com/business-profile/cover-d6eefde7-b62c-4b68-85b9-2ee888f45d8e.png",
    text: "Club-level excellence across sports",
  },
  {
    image:
      "https://media.assettype.com/freepressjournal/2024-04/4b242d29-4dea-4529-928b-f39fdf96cc2e/Bhosale1.jpg",
    text: "Building discipline and teamwork",
  },
  {
    image:
      cpst,
    text: "Celebrating consistent performances",
  },
  {
    image:
      "https://hawksmoorpublishing.com/wp-content/uploads/2023/06/Culture-in-Sport-scaled.jpeg",
    text: "Strong sporting culture",
  },
  {
    image:
      "https://theguidon.com/1112/main/wp-content/uploads/2016/02/011816-Mens-Lawn-Tennis-Team-Sarmiento-04-1400x933.jpg",
    text: "Growth through competition",
  },
  {
    image:
      "https://staticg.sportskeeda.com/editor/2025/06/40737-17490392047119-1920.jpg",
    text: "Passion beyond trophies",
  },
];

export default function ClubAchievement() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const auto = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(auto);
  }, []);

  return (
    <div className="club-page">
      {/* HERO */}
      <header className="hero">
        <h1>Club Achievements</h1>
        <p>
          A showcase of our club’s sporting success, commitment, and growth
          across multiple outdoor disciplines.
        </p>
      </header>

      {/* SLIDER */}
      <section className="slider">
        <div className="slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay">
                <h2>{slide.text}</h2>
              </div>
            </div>
          ))}

          <button
            className="arrow left"
            onClick={() =>
              setCurrent((current - 1 + slides.length) % slides.length)
            }
          >
            ‹
          </button>
          <button
            className="arrow right"
            onClick={() => setCurrent((current + 1) % slides.length)}
          >
            ›
          </button>
        </div>
      </section>

      {/* MIDDLE SECTION */}
      <section className="sports-achievements">
        <h2 className="section-title">Sports Achievements</h2>

        <div className="sports-grid">
          <div className="sport-card">
            <div className="sport-image">
              <span className="badge">Cricket</span>
              <img src={r2} alt="Cricket" />
            </div>
            <div className="sport-content">
              <h3>Inter-Club League Champions</h3>
              <p>
                Consistent team performances and strong coordination led to
                multiple inter-club league victories.
              </p>
              <span className="year">2023</span>
            </div>
          </div>

          <div className="sport-card">
            <div className="sport-image">
              <span className="badge">Football</span>
              <img src={IndiaU19} alt="Football" />
            </div>
            <div className="sport-content">
              <h3>Inter-Club Tournament Winners</h3>
              <p>
                Tactical discipline and teamwork resulted in success across
                competitive inter-club tournaments.
              </p>
              <span className="year">2024</span>
            </div>
          </div>

          <div className="sport-card">
            <div className="sport-image">
              <span className="badge">Lawn Tennis</span>
              <img src={lawnTennis} alt="Lawn Tennis" />
            </div>
            <div className="sport-content">
              <h3>Inter-Club Doubles Champions</h3>
              <p>
                Strong partnerships and technical focus delivered consistent
                wins at inter-club level.
              </p>
              <span className="year">2023</span>
            </div>
          </div>

          <div className="sport-card">
            <div className="sport-image">
              <span className="badge">Track – 100m</span>
              <img src={track100m} alt="Track 100m" />
            </div>
            <div className="sport-content">
              <h3>100m Track Excellence</h3>
              <p>
                Speed training and athlete discipline resulted in frequent
                podium finishes.
              </p>
              <span className="year">2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLUB MOMENTS */}
<section className="club-moments">
  <h2 className="section-title">Club Moments</h2>

  <div className="moments-grid">
    <div className="moment-item">
      <h3>🏏 Cricket</h3>
      <ul>
        <li>Inter-club league victories through consistent performances</li>
        <li>Friendly series wins strengthening team coordination</li>
        <li>Recognized for discipline and sportsmanship</li>
      </ul>
    </div>

    <div className="moment-item">
      <h3>⚽ Football</h3>
      <ul>
        <li>Local turf tournament wins</li>
        <li>Community Cup final appearances</li>
        <li>Improved tactical awareness and teamwork</li>
      </ul>
    </div>

    <div className="moment-item">
      <h3>🎾 Lawn Tennis</h3>
      <ul>
        <li>Inter-club doubles championship success</li>
        <li>Regular in-house competitive tournaments</li>
        <li>Strong focus on technical improvement</li>
      </ul>
    </div>

    <div className="moment-item">
      <h3>🏃 Track – 100m</h3>
      <ul>
        <li>Consistent podium finishes in 100m events</li>
        <li>Structured speed and fitness training programs</li>
        <li>High levels of athlete discipline and focus</li>
      </ul>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Sports Club</p>
        <p>Excellence at the club level</p>
      </footer>
    </div>
  );
}
