import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters long!");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4040/reset-password", {
        email,
        newPassword,
        confirmPassword
      });

      setMessage("Password reset successfully!");
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      setMessage(err.response?.data?.message || "Error resetting password. Please try again.");
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

        <p className="text-center text-muted mb-4">Reset Password</p>

        {message && (
          <div className={`alert ${message.includes("Error") || message.includes("do not match") || message.includes("must be") ? "alert-danger" : "alert-success"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleResetPassword}>
          <div className="mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button 
            className="btn btn-primary w-100" 
            type="submit"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Password"}
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