import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { createBooking } from "../../../api/bookingApi";

export default function GroundBooking() {
  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const navigate = useNavigate();
  const paymentAmount = 499; // set your ground booking amount here

  const slots = [
    "06:00 - 07:00",
    "07:00 - 08:00",
    "08:00 - 09:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00"
  ];

  const handleBooking = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    console.log("JWT:", token);
    console.log("User ID:", userId);

    if (!token || !userId) {
      alert("Please login first");
      return;
    }

    if (!sport || !date || !slot) {
      alert("Please complete all fields");
      return;
    }

    const payload = {
      userId: Number(userId),
      facilityId: Number(sport),
      bookingDate: date,
      timeSlot: slot
    };

    console.log("Sending payload:", payload);

    try {
      const res = await createBooking(payload);
      console.log("API Response:", res.data);
      alert("Ground booking stored successfully!");
    } catch (err) {
      console.error("Booking Error:", err.response || err);
      alert(err.response?.data || "Booking failed");
    }
  };

  // Only payment redirection added (no change in your booking logic)
  const goToPayment = () => {
    if (!sport || !date || !slot) {
      alert("Please complete booking details before payment");
      return;
    }

    navigate("/payment", {
      state: {
        amount: paymentAmount,
        bookingData: {
          sport,
          date,
          slot
        }
      }
    });
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Ground / Court Booking</h2>
          <p className="text-muted">
            Book your favorite sport ground in 3 easy steps
          </p>
        </div>

        <div className="row">
          {/* LEFT FORM */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h5 className="mb-3">Booking Details</h5>

              {/* Select Sport */}
              <div className="mb-3">
                <label className="form-label">Select Sport</label>
                <select
                  className="form-select"
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                >
                  <option value="">Choose sport</option>
                  <option value="1">Aerobics</option>
                  <option value="2">Badminton</option>
                  <option value="3">Billiards</option>
                  <option value="4">Carrom</option>
                  <option value="5">Chess</option>
                  <option value="6">Gymnastics</option>
                  <option value="7">Table Tennis</option>
                  <option value="8">Squash</option>
                  <option value="9">Indoor Cricket</option>
                  <option value="10">Yoga</option>
                  <option value="10">Pistol Shooting</option>
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

              {/* Time Slot */}
              <div className="mb-3">
                <label className="form-label">Select Time Slot</label>
                <div className="d-flex flex-wrap gap-2">
                  {slots.map((s, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`btn ${
                        slot === s ? "btn-primary" : "btn-outline-primary"
                      }`}
                      onClick={() => setSlot(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Existing booking button */}
              <button
                className="btn btn-success w-100 mt-3"
                onClick={handleBooking}
              >
                Confirm Booking
              </button>

              {/* New payment button (like Banquet page) */}
              <button
                className="btn btn-primary w-100 mt-2"
                onClick={goToPayment}
              >
                Proceed to Payment ₹{paymentAmount}
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4 bg-light">
              <h5 className="mb-3">Booking Summary</h5>
              <p><strong>Facility ID:</strong> {sport || "Not selected"}</p>
              <p><strong>Date:</strong> {date || "Not selected"}</p>
              <p><strong>Slot:</strong> {slot || "Not selected"}</p>
              <hr />
              <p><strong>Payment Amount:</strong> ₹{paymentAmount}</p>
              <ul className="text-muted">
                <li>Please arrive 10 minutes early.</li>
                <li>Booking cancellation allowed before 2 hours.</li>
                <li>Carry your membership ID.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}