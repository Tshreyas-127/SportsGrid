import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

export default function MyBookings() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      type: "GROUND",
      facilityName: "Badminton Court 2",
      date: "2026-02-01",
      time: "10:00 AM",
      status: "CONFIRMED"
    },
    {
      id: 2,
      type: "SWIMMING",
      facilityName: "Swimming Pool",
      date: "2026-02-02",
      time: "6:30 PM",
      status: "PENDING"
    },
    {
      id: 3,
      type: "GYM",
      facilityName: "Gym Session",
      date: "2026-02-04",
      time: "7:00 AM",
      status: "COMPLETED"
    }
  ]);

  // REAL API (enable later)
  /*
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:4040/api/member/bookings", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setBookings(res.data);
    });
  }, []);
  */

  return (
    <>
      <Navbar />
      <div className="p-5">
        <h2>My Bookings</h2>

        {bookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          bookings.map(b => (
            <div key={b.id} className="card mb-3 p-3">
              <h4>{b.facilityName}</h4>
              <p><strong>Type:</strong> {b.type}</p>
              <p><strong>Date:</strong> {b.date}</p>
              <p><strong>Time:</strong> {b.time}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    color:
                      b.status === "CONFIRMED"
                        ? "green"
                        : b.status === "PENDING"
                        ? "orange"
                        : "gray"
                  }}
                >
                  {b.status}
                </span>
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
