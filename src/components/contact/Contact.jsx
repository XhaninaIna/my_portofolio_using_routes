import { useState } from "react";
import "./Contact.css";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "" || subject === "" || message === "") {
      setError("All fields are required");
      return;
    }
    setError("");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <section className="contact" id="contactSection">
      <p>Contact Me</p>
      <form className="contactForm" id="contactForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Name*:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email*:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="subject">Subject*:</label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message*:</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Send a Message</button>
        {error && (
          <span style={{ color: "red", textAlign: "center" }}>{error}</span>
        )}
      </form>
    </section>
  );
}
