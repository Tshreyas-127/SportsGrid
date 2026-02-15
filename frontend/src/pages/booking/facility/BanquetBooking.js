import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { createBooking } from "../../../api/bookingApi";

export default function BanquetBooking() {
  const [hall, setHall] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const navigate = useNavigate();
  const paymentAmount = 1999; // example fixed amount

  const handleBooking = async () => {
    if (!hall || !date || !guests) {
      alert("Please complete all details");
      return;
    }

    try {
      const payload = {
        userId: Number(localStorage.getItem("userId")),
        facilityId: Number(hall),
        bookingDate: date,
        timeSlot: `${guests} guests`
      };

      await createBooking(payload);
      alert("Banquet booking saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to save banquet booking");
    }
  };

  // Redirect to payment page
  const goToPayment = () => {
    if (!hall || !date || !guests) {
      alert("Please complete booking details before payment");
      return;
    }

    navigate("/payment", {
      state: {
        amount: paymentAmount,
        bookingData: {
          hall,
          date,
          guests
        }
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Banquet / Hall Booking</h2>
          <p className="text-muted">Book halls for weddings, parties & events</p>
        </div>

        <div className="row">
          {/* FORM */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h5>Booking Details</h5>

              {/* Select Hall */}
              <div className="mb-3">
                <label className="form-label">Select Hall</label>
                <select
                  className="form-select"
                  value={hall}
                  onChange={(e) => setHall(e.target.value)}
                >
                  <option value="">Choose Hall</option>
                  <option value="20">Grand Ballroom</option>
                  <option value="21">Conference Hall</option>
                  <option value="22">Open Lawn</option>
                </select>
              </div>

              {/* Date */}
              <div className="mb-3">
                <label className="form-label">Select Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* Guests */}
              <div className="mb-3">
                <label className="form-label">Expected Guests</label>
                <input
                  type="number"
                  className="form-control"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>

              {/* Save Booking */}
              <button
                className="btn btn-success w-100"
                onClick={handleBooking}
              >
                Confirm Banquet Booking
              </button>

              {/* Go to Payment */}
              <button
                className="btn btn-primary w-100 mt-2"
                onClick={goToPayment}
              >
                Proceed to Payment ₹{paymentAmount}
              </button>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4 bg-light">
              <h5>Booking Summary</h5>
              <p><strong>Facility ID:</strong> {hall || "Not selected"}</p>
              <p><strong>Date:</strong> {date || "Not selected"}</p>
              <p><strong>Guests:</strong> {guests || "Not entered"}</p>
              <hr />
              <p><strong>Payment Amount:</strong> ₹{paymentAmount}</p>
              <p className="text-muted">
                Decoration and catering charges are separate.<br />
                Final confirmation after admin approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}