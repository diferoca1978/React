const { response } = require('express');
const Event = require('../database/models/eventModel');

// Get an event
const getEvents = async (req, res = response) => {
  try {
    const events = await Event.find().populate('user', 'name');

    if (events) {
      return res.json({
        ok: true,
        events,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contact with customer service',
    });
  }
};
// Create an event
const createEvent = async (req, res) => {
  newEvent = new Event(req.body);

  try {
    newEvent.user = req.uid;

    const eventSaved = await newEvent.save();

    res.status(201).json({
      ok: true,
      event: {
        eventId: newEvent.id,
        event: eventSaved,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contact with customer service',
    });
  }
};
// Update an event
const updateEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      res.status(404).json({
        ok: true,
        msg: 'Event not found ❌',
      });
    }

    if (event.user !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: 'Unauthorized to make changes 🙊',
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };

    const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent);

    res.json({
      ok: true,
      event: updatedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contact with customer service',
    });
  }
};
// Delete an event
const deleteEvent = (req, res) => {
  return res.json({
    ok: true,
    msg: 'Hello from delete event',
  });
};

module.exports = {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
};
