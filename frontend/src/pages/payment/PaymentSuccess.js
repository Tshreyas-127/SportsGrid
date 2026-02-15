import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container mt-5 text-center">
        <h2 className="text-success">🎉 Payment Successful</h2>
        <p>Your booking / membership is confirmed.</p>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
      </div>
    </>
  );
}
