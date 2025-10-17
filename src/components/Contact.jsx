import React, { useState } from "react";
import personal from "../data/personal";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your backend or email service integration here
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact</h2>
      {submitted ? (
        <div className="success-message">Thanks for reaching out! </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      )}
      <div className="contact-socials">
        <h3>Connect with me</h3>

        {/* Email link (same as before) */}
        {personal.email && (
          <a href={`mailto:${personal.email}`}>Email - {personal.email}</a>
        )}

        {/* Explicit GitHub and LinkedIn links displayed like the Email section */}
        {personal.socials?.github && (
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub - {personal.socials.github}
          </a>
        )}
        {personal.socials?.linkedin && (
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn - {personal.socials.linkedin}
          </a>
        )}

        {/* Render any other socials (exclude github and linkedin since shown above) */}
        {Object.entries(personal.socials || {})
          .filter(([platform]) => platform !== "github" && platform !== "linkedin")
          .map(([platform, url]) => (
            <a
              href={url}
              key={platform}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.toUpperCase()}
            </a>
          ))}
      </div>
    </section>
  );
};

export default Contact;
