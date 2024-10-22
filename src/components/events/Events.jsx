import { useState } from "react";
import "./Events.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function addEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <section className="events" id="eventsSection">
      <p>My Events</p>
      <div className="calendar" id="calendar"></div>
      <EventForm onAddEvent={addEvent} />
      <EventSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
      <EventList events={events} />
    </section>
  );
}

function EventForm({ onAddEvent }) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventDate, setEventDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newEvent = {
      title: eventTitle,
      description: eventDesc,
      date: eventDate,
    };
    onAddEvent(newEvent);
    setEventTitle("");
    setEventDesc("");
    setEventDate("");
  }

  return (
    <div className="add-event-form">
      <h3>Add a New Event*:</h3>
      <form id="eventForm" onSubmit={handleSubmit}>
        <label htmlFor="eventTitle">Event Title*:</label>
        <input
          type="text"
          id="eventTitle"
          placeholder="Event Title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <label htmlFor="eventDesc">Event Description*:</label>
        <input
          type="text"
          id="eventDesc"
          placeholder="Event Description"
          value={eventDesc}
          onChange={(e) => setEventDesc(e.target.value)}
        />
        <label htmlFor="eventDate">Event Date*:</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

function EventSearch({ searchTerm, onSearch }) {
  return (
    <div className="event-search">
      <h3>Search an event*:</h3>
      <input
        type="text"
        id="searchInput"
        placeholder="Search an event..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

function EventList({ events }) {
  const style = {
    fontSize: "18px",
  };
  return (
    <div className="event-list">
      <h3>Event List*:</h3>
      <ul id="eventList">
        {events.length > 0 &&
          events.map((event, index) => (
            <li key={index}>
              <p style={style}>{event.title}</p>
              <p style={style}>{event.description}</p>
              <p style={style}>{event.date}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
