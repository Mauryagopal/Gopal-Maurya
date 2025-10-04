// src/components/contact.jsx
import { useState, useMemo } from "react";
import { FiMail, FiSend } from "react-icons/fi";

const EMAIL = "mauryagopal25@gmail.com";

const inputStyle = {
  width: "100%",
  marginTop: 6,
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid var(--border)",
  outline: "none",
  background: "var(--panel-soft)",
  color: "var(--text)",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  const buildMailto = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\nFrom: ${form.name.trim()} <${form.email.trim()}>`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const submit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;
    window.location.href = buildMailto();
  };

  return (
    <div className="container">
      <h2>Contact</h2>
      <p className="muted" style={{ marginTop: 6 }}>
        Let’s collaborate or chat about ideas.
      </p>

      {/* Scoped styles */}
      <style>{`
        .contact-form {
          margin-top: 16px;
          padding: 18px;
          display: grid;
          gap: 12px;
        }
        .contact-grid {
          display: grid;
          gap: 12px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 780px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
          .field--message {
            grid-column: 1 / -1; /* message spans both columns on desktop */
          }
        }
        .field-label {
          font-weight: 600;
        }
        .error {
          color: #ff6b6b;
          font-size: 12px;
          margin-top: 6px;
        }
        .actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
      `}</style>

      <form onSubmit={submit} className="card contact-form" noValidate>
        <div className="contact-grid">
          {/* Name */}
          <label>
            <div className="field-label">Name</div>
            <input
              name="name"
              required
              value={form.name}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="input"
              placeholder="Your name"
              autoComplete="name"
              aria-invalid={touched.name && !!errors.name}
              style={inputStyle}
            />
            {touched.name && errors.name && <div className="error">{errors.name}</div>}
          </label>

          {/* Email */}
          <label>
            <div className="field-label">Email</div>
            <input
              name="email"
              required
              type="email"
              value={form.email}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="input"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={touched.email && !!errors.email}
              style={inputStyle}
            />
            {touched.email && errors.email && <div className="error">{errors.email}</div>}
          </label>

          {/* Message */}
          <label className="field--message">
            <div className="field-label">Message</div>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onBlur={() => setTouched((t) => ({ ...t, message: true }))}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="input"
              placeholder="Tell me about your project..."
              aria-invalid={touched.message && !!errors.message}
              style={{ ...inputStyle, resize: "vertical" }}
              maxLength={2000}
            />
            {touched.message && errors.message && <div className="error">{errors.message}</div>}
          </label>
        </div>

        <div className="actions">
          <button className="btn primary" type="submit" disabled={hasErrors}>
            <FiSend /> Send
          </button>

          {/* Quick email button (opens compose with prefilled message if fields are filled) */}
          <a
            className="btn"
            href={buildMailto()}
            onClick={(e) => {
              // If form invalid, prevent and mark fields as touched to show errors
              if (hasErrors) {
                e.preventDefault();
                setTouched({ name: true, email: true, message: true });
              }
            }}
          >
            <FiMail /> Email
          </a>
        </div>
      </form>
    </div>
  );
}