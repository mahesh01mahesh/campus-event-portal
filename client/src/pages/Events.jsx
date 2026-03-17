import { useEffect, useState } from "react";
import API from "../api/api";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async (eventId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      const res = await API.post("/registrations", {
        user_id: user.id,
        event_id: eventId,
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Events</h2>
      {events.length === 0 ? (
        <p>No events found</p>
      ) : (
        events.map((event) => (
          <div key={event.id} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px" }}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><b>Category:</b> {event.category}</p>
            <p><b>Venue:</b> {event.venue}</p>
            <p><b>Date:</b> {event.event_date}</p>
            <p><b>Time:</b> {event.event_time}</p>
            <button onClick={() => handleRegister(event.id)}>Register</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Events;