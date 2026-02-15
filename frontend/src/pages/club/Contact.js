import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div style={hero}>
        <h1 style={heroTitle}>Contact SportGrid</h1>
        <p style={heroSub}>
          We’re here to help you with memberships, facilities & support
        </p>
      </div>

      {/* CONTACT INFO */}
      <div style={container}>
        <div style={infoGrid}>
          <div style={infoBox}>
            <h3>📧 Email</h3>
            <p>info@sportgrid.in</p>
            <p>support@sportgrid.com</p>
          </div>

          <div style={infoBox}>
            <h3>📞 Phone</h3>
            <p>+91 9892649590</p>
            <p>+91 8655944301</p>
          </div>

          <div style={infoBox}>
            <h3>📍 Address</h3>
            <p>
              Nariman Point, Lakhamsay Napoo Rd,<br />
              Mumbai – 400019
            </p>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div style={mapSection}>
        <h2 style={mapTitle}>Find Us on Map</h2>
        <p style={mapText}>
          Visit our club to explore facilities and meet our team
        </p>

        <div style={mapWrapper}>
          <iframe
            title="SportGrid Location"
            src="https://www.google.com/maps?q=Nariman%20Point%20Mumbai&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "15px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

/* ---------------- STYLES ---------------- */

const hero = {
  height: "60vh",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
};

const heroTitle = {
  fontSize: "50px",
  fontWeight: "bold",
};

const heroSub = {
  fontSize: "18px",
  maxWidth: "600px",
  marginTop: "15px",
};

const container = {
  padding: "70px 40px",
  backgroundColor: "#f8f9fa",
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px",
  maxWidth: "1100px",
  margin: "auto",
};

const infoBox = {
  background: "#fff",
  padding: "35px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
};

const mapSection = {
  padding: "80px 40px",
  backgroundColor: "#ffffff",
  textAlign: "center",
};

const mapTitle = {
  fontSize: "32px",
  marginBottom: "10px",
};

const mapText = {
  color: "#666",
  marginBottom: "35px",
};

const mapWrapper = {
  maxWidth: "1100px",
  margin: "auto",
};
