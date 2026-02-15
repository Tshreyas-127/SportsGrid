import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px" }}>About Our Sports Club</h1>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "auto" }}>
          A modern SaaS-based Sports Club Management Platform designed for digital fitness ecosystems.
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>

        <h2>Who We Are</h2>
        <p>
          The <strong>Sports Club Management System</strong> is a secure, scalable, and role-based 
          web application built to simplify the management of sports clubs. It helps club owners, 
          trainers, nutritionists, and members work on a single digital platform.
        </p>

        <h2 style={{ marginTop: "30px" }}>Our Mission</h2>
        <p>
          Our mission is to transform traditional club management into a fully digital experience 
          that improves efficiency, transparency, and user engagement.
        </p>

        {/* Feature Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}>

          <div style={cardStyle}>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Users" width="60" />
            <h3>Role-Based System</h3>
            <p>Separate dashboards for Admins, Trainers, Nutritionists, and Members.</p>
          </div>

          <div style={cardStyle}>
            <img src="https://cdn-icons-png.flaticon.com/512/1907/1907554.png" alt="Security" width="60" />
            <h3>Secure Platform</h3>
            <p>JWT authentication and encrypted passwords ensure data protection.</p>
          </div>

          <div style={cardStyle}>
            <img src="https://cdn-icons-png.flaticon.com/512/1006/1006555.png" alt="Growth" width="60" />
            <h3>Scalable SaaS</h3>
            <p>Built for future expansion across multiple clubs and cities.</p>
          </div>

        </div>

        {/* Vision Section */}
        <div style={{ marginTop: "50px" }}>
          <h2>Our Vision</h2>
          <p>
            To build a smart digital ecosystem where fitness centers, sports clubs, and members 
            stay connected through technology, automation, and innovation.
          </p>
        </div>
      </div>
    </>
  );
}

const cardStyle = {
  background: "#f8f9fa",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};
