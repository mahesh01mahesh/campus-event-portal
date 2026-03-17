import { useState } from "react";
import API from "../api/api";

function AddEvent() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    venue: "",
    event_date: "",
    event_time: "",
    last_date_to_register: "",
    max_seats: "",
    created_by: 1
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/events", form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Event creation failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} /><br /><br />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea><br /><br />
        <input name="category" placeholder="Category" onChange={handleChange} /><br /><br />
        <input name="venue" placeholder="Venue" onChange={handleChange} /><br /><br />
        <input name="event_date" type="date" onChange={handleChange} /><br /><br />
        <input name="event_time" type="time" onChange={handleChange} /><br /><br />
        <input name="last_date_to_register" type="date" onChange={handleChange} /><br /><br />
        <input name="max_seats" type="number" placeholder="Max Seats" onChange={handleChange} /><br /><br />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;