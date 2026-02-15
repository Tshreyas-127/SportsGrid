import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4040/users/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("username", res.data.fullName);

      console.log("Login Success");
      console.log("Token:", res.data.token);
      console.log("Role:", res.data.role);
      console.log("User ID:", res.data.userId);

      const role = res.data.role;

      // 🔁 ROLE BASED REDIRECT
      const lastPublicPage = localStorage.getItem("lastPublicPage");

      if (role === "SUPER_ADMIN") navigate("/superadmin", { replace: true });
      else if (role === "ADMIN") navigate("/admin", { replace: true });
      else if (role === "TRAINER") navigate("/trainer", { replace: true });
      else if (role === "NUTRITIONIST") navigate("/nutritionist", { replace: true });
      else navigate("/member-dashboard", { replace: true });

      localStorage.removeItem("lastPublicPage");

    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">
          <span style={{ color: "#0d6efd" }}>Sport</span>
          <span style={{ color: "#ff7b00" }}>Grid</span>
        </h3>

        <p className="text-center text-muted mb-4">Login</p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* ✅ Forgot Password Link */}
          <div className="text-end mb-3">
            <span
              style={{ 
                color: "#0d6efd", 
                cursor: "pointer", 
                fontSize: "14px",
                textDecoration: "none"
              }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>
          </div>

          <button className="btn btn-primary w-100">Login</button>
        </form>

        

        {/* ✅ Registration link (UNCHANGED) */}
        <p className="text-center mt-3">
          New user?{" "}
          <span
            style={{ color: "#0d6efd", cursor: "pointer", fontWeight: "600" }}
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}
