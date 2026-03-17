const pool = require("../config/db");

const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      venue,
      event_date,
      event_time,
      last_date_to_register,
      max_seats,
      created_by
    } = req.body;

    if (!title || !venue || !event_date || !event_time) {
      return res.status(400).json({
        message: "Title, venue, event date, and event time are required"
      });
    }

    const result = await pool.query(
      `INSERT INTO events 
      (title, description, category, venue, event_date, event_time, last_date_to_register, max_seats, created_by)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING *`,
      [
        title,
        description,
        category,
        venue,
        event_date,
        event_time,
        last_date_to_register,
        max_seats,
        created_by || null
      ]
    );

    res.status(201).json({
      message: "Event created successfully",
      event: result.rows[0]
    });
  } catch (error) {
    console.error("Create event error:", error);
    res.status(500).json({ message: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM events ORDER BY event_date ASC, event_time ASC"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Get events error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createEvent, getAllEvents };