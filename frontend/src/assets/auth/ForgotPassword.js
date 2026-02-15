import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:4040/forgot-password", {
        email :email
      });

      setMessage(res.data.message || "OTP sent to your email!");
      
      // Redirect to OTP verification page after 2 seconds
      setTimeout(() => {
        navigate("/verify-otp", { state: { email } });
      }, 2000);

    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">
          <span style={{ color: "#0d6efd" }}>Sport</span>
          <span style={{ color: "#ff7b00" }}>Grid</span>
        </h3>

        <p className="text-center text-muted mb-4">Forgot Password</p>

        {message && (
          <div className={`alert ${message.includes("Error") ? "alert-danger" : "alert-success"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSendOTP}>
          <div className="mb-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button 
            className="btn btn-primary w-100" 
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </form>

        <button 
          className="btn btn-secondary w-100 mt-3"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}