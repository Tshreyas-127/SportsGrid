import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:4040/verify-otp", {
        email,
        otp
      });

      setMessage("OTP verified successfully!");
      
      // Redirect to reset password page
      setTimeout(() => {
        navigate("/reset-password", { state: { email } });
      }, 1500);

    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    setMessage("");

    try {
      await axios.post("http://localhost:4040/resend-otp", { email });
      setMessage("New OTP sent to your email!");
    } catch (err) {
      setMessage("Error resending OTP. Please try again.");
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

        <p className="text-center text-muted mb-4">Verify OTP</p>

        {message && (
          <div className={`alert ${message.includes("Error") || message.includes("Invalid") ? "alert-danger" : "alert-success"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleVerifyOTP}>
          <div className="mb-3">
            <label>Enter OTP</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              required
            />
          </div>

          <button 
            className="btn btn-primary w-100" 
            type="submit"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <button 
          className="btn btn-outline-primary w-100 mt-3"
          onClick={handleResendOTP}
          disabled={loading}
        >
          Resend OTP
        </button>

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