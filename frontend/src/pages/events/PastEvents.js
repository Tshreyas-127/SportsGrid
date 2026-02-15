import Navbar from "../../components/Navbar";

import badmintonImg from "../../assets/images/badminton2.jpg";
import indoorImg from "../../assets/images/indoor2.jfif";
import yogaImg from "../../assets/images/yoga2.avif";
import chessImg from "../../assets/images/chess2.webp";
import aerobicsImg from "../../assets/images/aerobics2.jpg";
import gynasiumImg from "../../assets/images/gynasium2.jpg";

export default function PastEvents() {
  return (
    <>
      <Navbar />

      <div style={containerStyle}>
        <h1 style={headingStyle}>Past Events</h1>

        <div style={cardGrid}>
          {/* Event 1 */}
          <div style={card}>
            <img src={badmintonImg} alt="Badminton" style={imageStyle} />
            <div style={cardContent}>
              <h3>Badminton Open Tournament</h3>
              <p><strong>Date:</strong> 12 Jan 2026</p>
              <p>
                A competitive badminton event with excellent participation.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div style={card}>
            <img src={indoorImg} alt="Indoor Cricket" style={imageStyle} />
            <div style={cardContent}>
              <h3>Indoor Cricket Championship</h3>
              <p><strong>Date:</strong> 28 Jan 2026</p>
              <p>
                High-energy indoor cricket matches played in league format.
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div style={card}>
            <img src={yogaImg} alt="Yoga" style={imageStyle} />
            <div style={cardContent}>
              <h3>Yoga Wellness Camp</h3>
              <p><strong>Date:</strong> 10 Dec 2025</p>
              <p>
                A calming yoga camp focused on flexibility and mental wellness.
              </p>
            </div>
          </div>

          {/* Event 4 */}
          <div style={card}>
            <img src={chessImg} alt="Chess" style={imageStyle} />
            <div style={cardContent}>
              <h3>Inter-Club Chess Tournament</h3>
              <p><strong>Date:</strong> 22 Jan 2026</p>
              <p>
                A strategic chess competition promoting critical thinking.
              </p>
            </div>
          </div>

          {/* Event 5 */}
          <div style={card}>
            <img src={aerobicsImg} alt="Aerobics" style={imageStyle} />
            <div style={cardContent}>
              <h3>Aerobics Fitness Challenge</h3>
              <p><strong>Date:</strong> 5 Jan 2026</p>
              <p>
                An energetic aerobics event focused on endurance and stamina.
              </p>
            </div>
          </div>

          {/* Event 6 */}
          <div style={card}>
            <img src={gynasiumImg} alt="Gymnasium" style={imageStyle} />
            <div style={cardContent}>
              <h3>Power-Lifting Meet</h3>
              <p><strong>Date:</strong> 18 Dec 2025</p>
              <p>
                A strength-based competition showcasing athletic performance.
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


// import Navbar from "../../components/Navbar";

// export default function PastEvents() {
//   return (
//     <>
//       <Navbar />
//       <div style={pageStyle}>
//         <div>
//           <h1>Past Events</h1>
//           <p>Our successful previous events</p>

//           <ul style={{ listStyle: "none", padding: 0 }}>
//             <li>🏆 Annual Sports Meet – Aug</li>
//             <li>♟ Chess Tournament – July</li>
//             <li>🎯 Shooting Camp – June</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// const pageStyle = {
//   minHeight: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   textAlign: "center",
// };
