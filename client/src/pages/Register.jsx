import { useState } from "react";
import API from "../api/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    year_of_study: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br /><br />
        <input name="department" placeholder="Department" onChange={handleChange} /><br /><br />
        <input name="year_of_study" placeholder="Year of Study" onChange={handleChange} /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;