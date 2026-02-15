import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";


export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* ===== HERO SLIDER ===== */}
      <div
        id="homeCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="/public/slider/swimmingpool.jpg" className="d-block w-100" alt="Swimming Pool" />
            <div className="hero-overlay">
              <h3>"Stronger every day,</h3>
              <h1>in body & mind."</h1>
              <div className="hero-buttons">
                <button className="btn btn-primary btn-lg" onClick={() => navigate("/sports-star")}>
                  SG Sports Star
                </button>
                <button className="btn btn-outline-light btn-lg" onClick={() => navigate("/events/upcoming")}>
                  Upcoming Events
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/public/slider/gym.jpg" className="d-block w-100" alt="Gym" />
            <div className="hero-overlay">
              <h3>Train with experts</h3>
              <h1>World-class Gym</h1>
              <div className="hero-buttons">
                <button className="btn btn-primary btn-lg" onClick={() => navigate("/booking/trainer")}>
                  Book Training
                </button>
                <button className="btn btn-outline-light btn-lg" onClick={() => navigate("/trainers")}>
                  View Trainers
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/public/slider/badmintoncourt.jpeg" className="d-block w-100" alt="Badminton Court" />
            <div className="hero-overlay">
              <h3>Play with passion</h3>
              <h1>Indoor Sports Arena</h1>
              <div className="hero-buttons">
                <button className="btn btn-primary btn-lg" onClick={() => navigate("/facilities/sports/badminton")}>
                  View Courts
                </button>
                <button className="btn btn-outline-light btn-lg" onClick={() => navigate("/events/register")}>
                  Register
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ===== SPORTS GRID (GSC STYLE) ===== */}
      <div className="sports-gallery">
        <h2>Sports Activities</h2>

        <div className="gallery-grid">

          {[
            ["Cricket", "cricket.jpg", "/facilities/sports/cricket"],
            ["Lawn Tennis", "lawntennis.jpg", "/facilities/sports/tennis"],
            ["Volleyball", "volleyball.jpg", "/facilities/sports/volleyball"],
            ["Skating", "skating.jpg", "/facilities/sports/skating"],
            ["Swimming Pool", "swimmingpool.jpg", "/facilities/sports/swimming"],
            ["Health Club", "gym.jpg", "/facilities/sports/gym"],
            ["Billiards", "billiards.jpg", "/facilities/sports/billiards"],
            ["Table Tennis", "tabletennis.jpeg", "/facilities/sports/table-tennis"],
            ["Badminton", "badminton.jpg", "/facilities/sports/badminton"],
            ["Squash", "squash.jpg", "/facilities/sports/squash"],
            ["Gymnastics", "gymnastic.jpg", "/facilities/sports/gymnastics"],
            ["Yoga", "yoga.jpg", "/facilities/sports/yoga"]
          ].map(([title, img, link]) => (
            <div className="gallery-card" key={title} onClick={() => navigate(link)}>
              <img src={`/slider/${img}`} />

              <div className="gallery-overlay">{title}</div>
            </div>
          ))}

        </div>
      </div>
      <Footer />

    </>
  );
}
