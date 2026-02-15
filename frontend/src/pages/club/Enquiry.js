import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitEnquiry = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("http://localhost:4040/enquiry/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Error");

      setSuccess("✨ Enquiry sent! Our team will contact you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      alert("❌ Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div style={styles.page}>
        {/* LEFT INFO SECTION */}
        <div style={styles.infoBox}>
          <h1 style={styles.heading}>Let’s Talk Fitness 💪</h1>
          <p style={styles.text}>
            Have questions about membership, training, or facilities?
            Drop us a message and our experts will reach out to you.
          </p>

          <ul style={styles.list}>
            <li>🏋️ Professional Trainers</li>
            <li>🥗 Nutrition Guidance</li>
            <li>🏆 Award-Winning Club</li>
            <li>📞 Quick Support</li>
          </ul>
        </div>

        {/* FORM CARD */}
        <div style={styles.card}>
          {/* FITNESS IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
            alt="Fitness Training"
            style={styles.image}
          />

          <h2 style={styles.cardTitle}>Send an Enquiry</h2>

          <form onSubmit={submitEnquiry}>
            <input
              style={styles.input}
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              style={styles.input}
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <textarea
              style={{ ...styles.input, height: 110 }}
              name="message"
              placeholder="Tell us how we can help you..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button style={styles.button} disabled={loading}>
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

            {success && <p style={styles.success}>{success}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #1e3c72, #0f2027)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    padding: 30,
    flexWrap: "wrap"
  },

  infoBox: {
    maxWidth: 420,
    color: "#fff"
  },

  heading: {
    fontSize: 36,
    marginBottom: 14
  },

  text: {
    fontSize: 16,
    lineHeight: 1.6,
    opacity: 0.9
  },

  list: {
    marginTop: 20,
    listStyle: "none",
    padding: 0,
    lineHeight: 2,
    fontSize: 16
  },

  card: {
    width: 420,
    padding: 30,
    borderRadius: 18,
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.25)"
  },

  image: {
    width: "100%",
    height: 160,
    objectFit: "cover",
    borderRadius: 14,
    marginBottom: 16,
    boxShadow: "0 10px 25px rgba(0,0,0,0.35)"
  },

  cardTitle: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
    fontSize: 24
  },

  input: {
    width: "100%",
    padding: 14,
    marginBottom: 14,
    borderRadius: 10,
    border: "none",
    outline: "none",
    fontSize: 14,
    background: "rgba(255,255,255,0.9)"
  },

  button: {
    width: "100%",
    padding: 14,
    borderRadius: 10,
    border: "none",
    fontSize: 16,
    fontWeight: 600,
    background: "linear-gradient(135deg,#ff512f,#f09819)",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s"
  },

  success: {
    marginTop: 15,
    color: "#00ffcc",
    textAlign: "center",
    fontWeight: 500
  }
};