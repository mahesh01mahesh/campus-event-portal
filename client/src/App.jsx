import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Events from "./pages/Events";
import AdminDashboard from "./pages/AdminDashboard";
import AddEvent from "./pages/AddEvent";
import MyRegistrations from "./pages/MyRegistrations";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/my-registrations" element={<MyRegistrations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;