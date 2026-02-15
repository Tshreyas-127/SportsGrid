import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import axios from "axios";
import { createBooking } from "../../../api/bookingApi";

export default function CoachingBooking() {

  const [trainers, setTrainers] = useState([]);
  const [nutritionists, setNutritionists] = useState([]);

  const [trainerId, setTrainerId] = useState("");
  const [nutritionistId, setNutritionistId] = useState("");

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const slots = [
    "06:00 - 07:00",
    "07:00 - 08:00",
    "08:00 - 09:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00"
  ];

  // 🔥 Load Trainers & Nutritionists
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:4040/users/all", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      const allUsers = res.data;
      setTrainers(allUsers.filter(u => u.role === "TRAINER"));
      setNutritionists(allUsers.filter(u => u.role === "NUTRITIONIST"));
    })
    .catch(err => console.error("User Fetch Error:", err));
  }, []);

  const handleBooking = async () => {

    const userId = Number(localStorage.getItem("userId"));
    const staffId = trainerId || nutritionistId;

    if (!staffId || !date || !slot) {
      alert("Please select Trainer/Nutritionist, Date and Slot");
      return;
    }

    const payload = {
      userId,
      staffId,
      bookingDate: date,
      timeSlot: slot
    };

    console.log("Booking Payload:", payload);

    try {
      await createBooking(payload);
      alert("✅ Coaching booked successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Booking failed. Please login again.");
    }
  };

  return (
    <>
      <Navbar />

      {/* OFFER */}
      <div className="container mt-4">
        <div className="card shadow-sm text-white"
          style={{
            background: "linear-gradient(to right, #28a745, #20c997)",
            borderRadius: "12px"
          }}
        >
          <div className="card-body text-center">
            <h3>🎯 Special Coaching Offer</h3>
            <p><del>₹3000</del> <b>₹1999 / Month</b></p>
            <p>Free Diet Consultation</p>
          </div>
        </div>
      </div>

      <div className="container mt-5">

        <div className="row">

          <div className="col-md-6">
            <div className="card shadow-sm p-4">

              <label>Trainer</label>
              <select className="form-select mb-3" value={trainerId} onChange={e => {
                setTrainerId(e.target.value);
                setNutritionistId("");
              }}>
                <option value="">Select Trainer</option>
                {trainers.map(t => (
                  <option key={t.userId} value={t.userId}>{t.name}</option>
                ))}
              </select>

              <label>Nutritionist</label>
              <select className="form-select mb-3" value={nutritionistId} onChange={e => {
                setNutritionistId(e.target.value);
                setTrainerId("");
              }}>
                <option value="">Select Nutritionist</option>
                {nutritionists.map(n => (
                  <option key={n.userId} value={n.userId}>{n.name}</option>
                ))}
              </select>

              <label>Date</label>
              <input type="date" className="form-control mb-3" value={date} onChange={e => setDate(e.target.value)} />

              <label>Slot</label>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {slots.map(s => (
                  <button key={s}
                    className={`btn ${slot === s ? "btn-success" : "btn-outline-success"}`}
                    onClick={() => setSlot(s)}>
                    {s}
                  </button>
                ))}
              </div>

              <button className="btn btn-success w-100" onClick={handleBooking}>
                Confirm Booking
              </button>

            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm p-4 bg-light">
              <h5>Booking Summary</h5>
              <p><b>Staff:</b> {trainerId || nutritionistId || "Not selected"}</p>
              <p><b>Date:</b> {date}</p>
              <p><b>Slot:</b> {slot}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
