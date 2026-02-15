import Navbar from "../../components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Amount coming from BanquetBooking
  const amount = location.state?.amount || 0;

  const handlePayment = () => {
    if (amount <= 0) {
      alert("Invalid payment amount");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Razorpay TEST key
      amount: amount * 100,          // in paise
      currency: "INR",
      name: "Sports Club",
      description: "Banquet Booking Payment (Test Mode)",

      handler: function (response) {
        console.log("Payment ID:", response.razorpay_payment_id);
        alert("Payment Successful!");
        navigate("/payment-success");
      },

      prefill: {
        name: "Member",
        email: "member@test.com",
        contact: "9999999999"
      },

      theme: {
        color: "#28a745"
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="card shadow p-4 text-center">
          <h2 className="text-success fw-bold">💳 Payment</h2>
          <p className="text-muted">
            Complete payment to confirm your banquet booking
          </p>

          <h4 className="mt-3">Amount: ₹{amount}</h4>

          <button
            className="btn btn-success btn-lg mt-4"
            onClick={handlePayment}
          >
            Pay with Razorpay
          </button>
        </div>
      </div>
    </>
  );
}