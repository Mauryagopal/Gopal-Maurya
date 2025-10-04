// src/components/Projects.jsx
import React, { useMemo, useState } from "react";
import { FiExternalLink, FiGithub, FiFileText } from "react-icons/fi";

// Helper to build asset URLs that work locally and on GitHub Pages
const toAsset = (p) => {
  if (!p) return null;
  if (/^https?:|^data:/.test(p)) return p; // external or data URI
  const base = (import.meta.env && import.meta.env.BASE_URL) || "/";
  return `${base}${p.replace(/^\//, "")}`; // ensure no double slash
};

const projects = [
  {
    title: "AI-Powered Real Estate Insights Platform",
    desc: "Random Forest Regressor (R²=0.90, MAE=0.43) with advanced feature engineering and a Cosine Similarity-based recommendation engine, deployed as a Flask app on Render using Docker.",
    img: "projects/real-eatate-insights.png", // no leading slash
    tags: ["Python", "Pandas", "Scikit-learn", "Flask", "Docker", "Machine Learning"],
    code: "https://github.com/Mauryagopal/predictor",
    demo: "https://house-price-app-c5ap.onrender.com/"
  },
  {
    title: "YouTube Comment Sentiment Analyzer – Chrome Extension",
    desc: "Chrome extension with real-time sentiment classification using Flask API + LightGBM (94% train, 87% test). Deployed end-to-end ML pipeline with MLflow, Docker, AWS EC2/S3, and CI/CD via GitHub Actions.",
    img: "projects/youtube-sentiment.png",
    tags: ["Python", "LightGBM", "Flask", "Docker", "MLflow", "AWS", "DVC"],
    code: "https://github.com/Mauryagopal/Youtube-comment-analysis",
    demo: "https://www.youtube.com/watch?si=7bmgaRZsg7I71JqW&v=p6iPX2C7Fbk&feature=youtu.be"
  },
  {
    title: "Diabetic Retinopathy Classifier",
    desc: "Dual-branch CNN (EfficientNetB3 + ResNet50V2) with channel/spatial attention and Non-Local blocks for five-class DR grading. Designed for early detection and scalable automated screening.",
    img: "projects/dr-classifier.png",
    tags: ["Deep Learning", "CNN", "Attention", "Medical AI"],
    Report: "https://github.com/yourname/dr-classifier"
  },
  {
    title: "Customer Segmentation Using K-Means Clustering",
    desc: "Applied K-Means on mall customer data (Age, Income, Spending Score) to identify 5 customer segments with insights into spending behavior for targeted marketing.",
    img: "projects/customer-segmentation.png", // FIXED: was .jpg
    tags: ["Python", "K-Means", "Clustering", "EDA", "Scikit-learn"],
    code: "https://github.com/Mauryagopal/Customer-Segmentation-",
    Report: "https://drive.google.com/file/d/1e7vmSZ_cBn392jh-jAxR2a1z4YuG9ynd/view"
  },
  {
    title: "Food Delivery Time Prediction Model",
    desc: "Flask-based ML app using XGBoost with time-based feature engineering to predict delivery times (MAE ≈ 3.13, R² ≈ 0.87). Containerized with Docker and deployed on Render.",
    img: "projects/food-delivery-time.png", // FIXED: was .jpg
    tags: ["Python", "XGBoost", "Flask", "Docker", "Scikit-learn"],
    code: "https://github.com/Mauryagopal/Food-Delivery-Time-Prediction",
    demo: "https://delivery-time-prediction-dpyb.onrender.com/"
  }
];

// Inline SVG placeholder
const FALLBACK_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 90">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#e6ebef" offset="0"/>
          <stop stop-color="#d1d9e0" offset="1"/>
        </linearGradient>
      </defs>
      <rect fill="url(#g)" width="160" height="90"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            fill="#7a869a" font-size="10" font-family="system-ui, -apple-system, Segoe UI, Roboto">
        Preview
      </text>
    </svg>`
  );

function LinkButton({ href, icon: Icon, label, aria }) {
  if (!href) return null;
  return (
    <a
      className="btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={aria ?? label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        borderRadius: 10
      }}
    >
      {Icon ? <Icon aria-hidden="true" /> : null} {label}
    </a>
  );
}

const TAG_LIMIT = 5;
const normalizeTag = (t) => t?.trim().toLowerCase();

const ProjectCard = React.memo(function ProjectCard({ project }) {
  const initialSrc = toAsset(project.img) || FALLBACK_IMG;
  const [imgSrc, setImgSrc] = useState(initialSrc);
  const [loaded, setLoaded] = useState(false);

  const tags = Array.isArray(project.tags) ? project.tags : [];
  const visibleTags = tags.slice(0, TAG_LIMIT);
  const more = Math.max(0, tags.length - TAG_LIMIT);
  const reportHref = project.report || project.Report;

  return (
    <article className="card proj" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        className="thumb"
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          borderRadius: 12,
          background: "var(--thumb-bg, #0f172a)"
        }}
      >
        {!loaded && <div aria-hidden="true" className="shine" style={{ position: "absolute", inset: 0 }} />}

        <img
          src={imgSrc}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            console.warn("Image failed:", e.currentTarget.src);
            setImgSrc(FALLBACK_IMG);
            setLoaded(true); // hide skeleton immediately
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: loaded ? "block" : "none"
          }}
        />
      </div>

      <div className="body" style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 10, flex: 1 }}>
        <h3 style={{ fontSize: 18, margin: 0 }}>{project.title}</h3>
        <p className="muted clamp-3" style={{ margin: 0 }}>{project.desc}</p>

        {visibleTags.length > 0 && (
          <div className="tags" role="list" aria-label="Tech stack" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 2 }}>
            {visibleTags.map((t) => <span key={t} role="listitem" className="tag">{t}</span>)}
            {more > 0 && <span className="tag muted">+{more} more</span>}
          </div>
        )}

        <div className="actions" style={{ display: "flex", gap: 10, marginTop: "auto", flexWrap: "wrap" }}>
          <LinkButton href={project.code} icon={FiGithub} label="Code" aria={`View code for ${project.title}`} />
          <LinkButton href={project.demo} icon={FiExternalLink} label="Demo" aria={`Open demo of ${project.title}`} />
          <LinkButton href={reportHref} icon={FiFileText} label="Report" aria={`Open report for ${project.title}`} />
        </div>
      </div>
    </article>
  );
});

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const { allTags, labelFor } = useMemo(() => {
    const seen = new Map();
    projects.forEach((p) => (p.tags || []).forEach((t) => {
      const n = normalizeTag(t);
      if (n && !seen.has(n)) seen.set(n, t);
    }));
    const tags = ["all", ...Array.from(seen.keys()).sort()];
    return { allTags: tags, labelFor: (n) => (n === "all" ? "All" : seen.get(n) || n) };
  }, []);

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => (p.tags || []).some((t) => normalizeTag(t) === filter));
  }, [filter]);

  return (
    <section className="container" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <p className="muted" style={{ marginTop: 6 }}>A selection of recent builds. More on GitHub!</p>

      <style>{`
        .projects-filter{display:flex;gap:8px;margin-top:12px;overflow-x:auto;padding-bottom:2px;}
        .projects-filter button{cursor:pointer;border:1px solid var(--border,#2a2f3a);background:transparent;color:inherit;padding:6px 12px;border-radius:999px;transition:background 160ms ease,color 160ms ease,border-color 160ms ease;white-space:nowrap;}
        .projects-filter button.active{background:var(--accent,#1f6feb);color:#fff;border-color:var(--accent,#1f6feb);}
        .projects-grid{display:grid;gap:18px;margin-top:18px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));align-items:stretch;}
        .proj .tag{border:1px solid var(--border,#2a2f3a);padding:4px 10px;border-radius:999px;font-size:12px;}
        .clamp-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
        .shine{background:linear-gradient(100deg,rgba(255,255,255,0.08) 20%,rgba(255,255,255,0.18) 28%,rgba(255,255,255,0.08) 36%) #111827;background-size:200% 100%;animation:shine 1.2s linear infinite;}
        @keyframes shine{from{background-position:200% 0;}to{background-position:-200% 0;}}
        .card.proj{transition:transform 160ms ease,box-shadow 160ms ease;}
        @media (hover:hover){.card.proj:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,0.18);}}
        @media (prefers-reduced-motion:reduce){.card.proj,.projects-filter button{transition:none;}}
      `}</style>

      <div className="projects-filter" role="tablist" aria-label="Filter projects by tag">
        {allTags.map((t) => (
          <button key={t} type="button" onClick={() => setFilter(t)} className={filter === t ? "active" : ""} aria-pressed={filter === t} role="tab">
            {labelFor(t)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p, idx) => <ProjectCard key={`${p.title}-${idx}`} project={p} />)}
      </div>
    </section>
  );
}