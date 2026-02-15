import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("MEMBER");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const isEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isPhone = (value) =>
  /^\d{10}$/.test(value);


  const handleRegister = async () => {
    setError("");

    if (!name || !email || !phone || !password) {
      setError("All fields are required");
      return;
    }

    if (!isEmail(email)) {
      setError("Enter a valid email");
      return;
    }

    if (!isPhone(phone)) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      await axios.post("http://localhost:4040/users/add", {
        name,
        email,
        phone,
        password,
        role    // Only MEMBER / TRAINER / NUTRITIONIST allowed
      });

      alert("Registration successful!");
      navigate("/login");

    } catch (err) {
      setError("User already exists or invalid data");
    }
  };

  return (
    <div className="login-container register-bg">
      <div className="login-card">
        <h2>Create Account</h2>

        <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Mobile Number" value={phone} onChange={e => setPhone(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

        {/* 🔐 Role dropdown (Admin blocked) */}
        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            fontSize: "15px"
          }}
        >
          <option value="MEMBER">Member</option>
          <option value="TRAINER">Trainer</option>
          <option value="NUTRITIONIST">Nutritionist</option>
        </select>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleRegister}>Register</button>

        <div className="register-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </div>
      </div>
    </div>
  );
}
