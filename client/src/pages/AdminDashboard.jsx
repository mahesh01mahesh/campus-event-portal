import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <Link to="/add-event">Add Event</Link>
    </div>
  );
}

export default AdminDashboard;