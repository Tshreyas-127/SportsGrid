import Navbar from "../../components/Navbar";

export default function EventRegistration() {
  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        <div>
          <h1>Event Registration</h1>
          <p>Register for upcoming events</p>

          <form style={{ maxWidth: "400px", margin: "auto" }}>
            <input type="text" placeholder="Full Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <select style={inputStyle}>
              <option>Select Event</option>
              <option>Badminton Championship</option>
              <option>Indoor Cricket League</option>
              <option>Yoga Workshop</option>
            </select>
            <button style={buttonStyle}>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#0d6efd",
  color: "white",
  border: "none",
  cursor: "pointer",
};
