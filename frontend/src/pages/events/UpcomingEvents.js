import Navbar from "../../components/Navbar";

import badmintonImg from "../../assets/images/badminton1.jpg";
import indoorImg from "../../assets/images/indoor3.jpg";
import yogaImg from "../../assets/images/yoga1.jpg";
import chessImg from "../../assets/images/chess3.jpg";
import aerobicsImg from "../../assets/images/aerobics1.jpg";
import gynasiumImg from "../../assets/images/gynasium3.jpg";

export default function UpcomingEvents() {
  return (
    <>
      <Navbar />

      <div style={containerStyle}>
        <h1 style={headingStyle}>Upcoming Events</h1>

        <div style={cardGrid}>
          {/* Event 1 */}
          <div style={card}>
            <img src={badmintonImg} alt="Badminton" style={imageStyle} />
            <div style={cardContent}>
              <h3>Badminton Championship</h3>
              <p><strong>Date:</strong> 20 Oct 2026</p>
              <p>
                Compete with top players in an exciting badminton tournament.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div style={card}>
            <img src={indoorImg} alt="Indoor Cricket" style={imageStyle} />
            <div style={cardContent}>
              <h3>Indoor Cricket League</h3>
              <p><strong>Date:</strong> 5 Nov 2026</p>
              <p>
                Fast-paced indoor cricket matches with league format.
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div style={card}>
            <img src={yogaImg} alt="Yoga" style={imageStyle} />
            <div style={cardContent}>
              <h3>Yoga Workshop</h3>
              <p><strong>Date:</strong> 18 Nov 2026</p>
              <p>
                Relax, rejuvenate, and learn advanced yoga techniques.
              </p>
            </div>
          </div>

          {/* Event 4 */}
          <div style={card}>
            <img src={chessImg} alt="Chesss" style={imageStyle} />
            <div style={cardContent}>
              <h3>Chess Competition</h3>
              <p><strong>Date:</strong> 18 Feb 2026</p>
              <p>
                Strategic chess sessions that enhance focus, planning, and critical thinking.
              </p>
            </div>
          </div>

          {/* Event 5 */}
          <div style={card}>
            <img src={aerobicsImg} alt="Aerobatics" style={imageStyle} />
            <div style={cardContent}>
              <h3>Aerobatics Competition</h3>
              <p><strong>Date:</strong> 19 March 2026</p>
              <p>
               High-energy aerobics workouts designed to improve stamina and overall fitness.
              </p>
            </div>
          </div>

          {/* Event 6 */}
          <div style={card}>
            <img src={gynasiumImg} alt="Gynasium" style={imageStyle} />
            <div style={cardContent}>
              <h3>Power-Lifting</h3>
              <p><strong>Date:</strong> 20 Apr 2026</p>
              <p>
                A fully equipped gymnasium offering modern fitness equipment and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------- STYLES ---------------- */

const containerStyle = {
  minHeight: "100vh",
  padding: "40px",
  backgroundColor: "#f8f9fa",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "40px",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
  maxWidth: "1100px",
  margin: "auto",
};

const card = {
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
  backgroundColor: "#fff",
};

const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
};

const cardContent = {
  padding: "20px",
};

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};
