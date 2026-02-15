import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { createBooking } from "../../../api/bookingApi";

export default function RoomBooking() {
  const [roomType, setRoomType] = useState("");   // holds room facilityId
  const [date, setDate] = useState("");
  const [nights, setNights] = useState(1);

  const navigate = useNavigate();
  const paymentAmount = 2999;   // example room booking amount

  const handleBooking = async () => {
    if (!roomType || !date) {
      alert("Please fill all details");
      return;
    }

    try {
      const payload = {
        userId: Number(localStorage.getItem("userId")),
        facilityId: Number(roomType),
        bookingDate: date,
        timeSlot: `${nights} night(s)`
      };

      await createBooking(payload);
      alert("Room booking stored successfully in database!");
    } catch (error) {
      console.error(error);
      alert("Room booking failed");
    }
  };

  // Only for payment redirection (no change to existing logic)
  const goToPayment = () => {
    if (!roomType || !date) {
      alert("Please complete booking details before payment");
      return;
    }

    navigate("/payment", {
      state: {
        amount: paymentAmount,
        bookingType: "ROOM",
        bookingData: {
          roomType,
          date,
          nights
        }
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Room Booking</h2>
          <p className="text-muted">Reserve comfortable rooms for your stay</p>
        </div>

        <div className="row">
          {/* FORM */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h5>Booking Details</h5>

              {/* Room Type → facilityId */}
              <div className="mb-3">
                <label className="form-label">Select Room Type</label>
                <select
                  className="form-select"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  <option value="">Choose Room</option>
                  <option value="10">Standard Room</option>
                  <option value="11">Deluxe Room</option>
                  <option value="12">Suite</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Check-in Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Number of Nights</label>
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  value={nights}
                  onChange={(e) => setNights(e.target.value)}
                />
              </div>

              {/* Existing Button (unchanged) */}
              <button className="btn btn-success w-100" onClick={handleBooking}>
                Confirm Room Booking
              </button>

              {/* New Payment Button */}
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
              <p><strong>Room Facility ID:</strong> {roomType || "Not selected"}</p>
              <p><strong>Check-in Date:</strong> {date || "Not selected"}</p>
              <p><strong>Nights:</strong> {nights}</p>
              <hr />
              <p><strong>Payment Amount:</strong> ₹{paymentAmount}</p>
              <p className="text-muted">
                Check-in time: 12 PM<br />
                Check-out time: 11 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}