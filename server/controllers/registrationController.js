const pool = require("../config/db");

const registerForEvent = async (req, res) => {
  try {
    const { user_id, event_id } = req.body;

    if (!user_id || !event_id) {
      return res.status(400).json({
        message: "user_id and event_id are required"
      });
    }

    const existing = await pool.query(
      "SELECT * FROM registrations WHERE user_id = $1 AND event_id = $2",
      [user_id, event_id]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({
        message: "Already registered for this event"
      });
    }

    const result = await pool.query(
      `INSERT INTO registrations (user_id, event_id)
       VALUES ($1, $2)
       RETURNING *`,
      [user_id, event_id]
    );

    res.status(201).json({
      message: "Registration successful",
      registration: result.rows[0]
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerForEvent };