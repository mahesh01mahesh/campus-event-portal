import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#0f172a" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/register" style={{ color: "white", marginRight: "15px" }}>Register</Link>
      <Link to="/login" style={{ color: "white", marginRight: "15px" }}>Login</Link>
      <Link to="/events" style={{ color: "white", marginRight: "15px" }}>Events</Link>
      <Link to="/admin" style={{ color: "white", marginRight: "15px" }}>Admin</Link>
    </nav>
  );
}

export default Navbar;