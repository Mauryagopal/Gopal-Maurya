// src/components/Projects.jsx
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "House Price Prediction (XGBoost)",
    desc: "Full pipeline with feature engineering, tuned XGBoost, and Flask app for Gurgaon prices.",
    img: "/projects/house-price.jpg",
    tags: ["Python","XGBoost","Flask","Docker"],
    code: "https://github.com/yourname/house-price",
    demo: "#"
  },
  {
    title: "Diabetic Retinopathy Classifier",
    desc: "CRA-Net inspired attention model with dual-head outputs and custom losses.",
    img: "/projects/dr-classifier.jpg",
    tags: ["TensorFlow","Attention","Medical AI"],
    code: "https://github.com/yourname/dr-classifier",
    demo: "#"
  },
  {
    title: "Real-Time Sales Dashboard",
    desc: "Streaming ETL to SQL + Python API + interactive dashboard for KPIs.",
    img: "/projects/sales-dashboard.jpg",
    tags: ["SQL","APIs","Dashboards"],
    code: "https://github.com/yourname/sales-dashboard",
    demo: "#"
  }
];

export default function Projects(){
  return (
    <div className="container">
      <h2>Projects</h2>
      <p className="muted" style={{marginTop:6}}>
        A selection of recent builds. More on GitHub!
      </p>

      <div className="grid" style={{gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop:18}}>
        {projects.map(p=>(
          <article key={p.title} className="card proj">
            <img src={p.img} alt={p.title} loading="lazy"/>
            <div className="body">
              <h3 style={{fontSize:18}}>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <div className="tags">
                {p.tags.map(t=><span key={t} className="tag">{t}</span>)}
              </div>
              <div style={{display:'flex', gap:10, marginTop:6}}>
                <a className="btn" href={p.code} target="_blank" rel="noreferrer"><FiGithub/> Code</a>
                <a className="btn" href={p.demo} target="_blank" rel="noreferrer"><FiExternalLink/> Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
