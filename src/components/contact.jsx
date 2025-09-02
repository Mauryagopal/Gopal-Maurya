// src/components/contact.jsx
import { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";

export default function Contact(){
  const [form, setForm] = useState({ name:"", email:"", message:"" });

  const submit = (e)=>{
    e.preventDefault();
    const to = "mailto:mauryagopal25@gmail.com";
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `${to}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container">
      <h2>Contact</h2>
      <p className="muted" style={{marginTop:6}}>Let’s collaborate or chat about ideas.</p>

      <form onSubmit={submit} className="card" style={{marginTop:16, padding:18, display:'grid', gap:12}}>
        <label>
          <div style={{fontWeight:600}}>Name</div>
          <input
            required
            value={form.name}
            onChange={e=>setForm(f=>({...f, name:e.target.value}))}
            className="input"
            placeholder="Your name"
            style={inputStyle}
          />
        </label>

        <label>
          <div style={{fontWeight:600}}>Email</div>
          <input
            required type="email"
            value={form.email}
            onChange={e=>setForm(f=>({...f, email:e.target.value}))}
            className="input"
            placeholder="you@example.com"
            style={inputStyle}
          />
        </label>

        <label>
          <div style={{fontWeight:600}}>Message</div>
          <textarea
            required rows={5}
            value={form.message}
            onChange={e=>setForm(f=>({...f, message:e.target.value}))}
            className="input"
            placeholder="Tell me about your project..."
            style={{...inputStyle, resize:'vertical'}}
          />
        </label>

        <div style={{display:'flex', gap:10}}>
          <button className="btn primary" type="submit"><FiSend/> Send</button>
          <a className="btn" href="mailto:youremail@example.com"><FiMail/> Email</a>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  width:'100%',
  marginTop:6,
  padding:'12px 14px',
  borderRadius:12,
  border:'1px solid var(--border)',
  outline:'none',
  background:'var(--panel-soft)',
  color:'var(--text)'
};
