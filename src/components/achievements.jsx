// src/components/Achievements.jsx
import { useMemo, useState } from "react";
import { FiAward, FiExternalLink, FiUsers } from "react-icons/fi";

const achievements = [

  {
    title: "Led Creative & Marketing Team — NES 2025",
    year: "2025",
    description:
      "Managed the marketing and promotions team for the National Entrepreneurship Summit as Creative Team Lead.",
    tags: ["Leadership", "Marketing", "Events"],
  },
];

const extracurriculars = [
  {
    org: "National Cadet Corps (NCC)",
    role: "Corporal — NIT Rourkela",
    period: "Dec 2022 – Present",
    details: [
      "Achieved the rank of Corporal and completed the C-Certificate with distinction.",
      "Managed logistics for 3+ NCC camps (CATC, EBSB, Firing), ensuring smooth coordination.",
    ],
    tags: ["Leadership", "Operations"],
  },
  {
    org: "Rotaract Club",
    role: "Design & Outreach Team — NIT Rourkela",
    period: "Jan 2023 – Present",
    details: [
      "Contributed to 5+ community service projects impacting 500+ beneficiaries.",
      "Led design and outreach campaigns, boosting engagement and awareness.",
    ],
    tags: ["Community", "Design", "Outreach"],
  },
];

function YearChip({ year }) {
  return <span className="chip-year" title={`Year: ${year}`}>{year}</span>;
}

function Tags({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>
  );
}

export default function Achievements() {
  const [sort, setSort] = useState("desc"); // 'desc' | 'asc'

  const sorted = useMemo(() => {
    const copy = [...achievements];
    copy.sort((a, b) =>
      sort === "desc"
        ? Number(b.year) - Number(a.year)
        : Number(a.year) - Number(b.year)
    );
    return copy;
  }, [sort]);

  return (
    <section id="achievements" className="container" style={{ marginTop: 24 }}>
      <div className="section-header">
        <h2 style={{ margin: 0 }}>Achievements</h2>
        <div className="controls">
          <label htmlFor="sort-achievements" className="muted" style={{ marginRight: 6 }}>
            Sort
          </label>
          <select
            id="sort-achievements"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort achievements by year"
          >
            <option value="desc">Newest</option>
            <option value="asc">Oldest</option>
          </select>
        </div>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
        {sorted.map((a, i) => (
          <li key={`${a.title}-${i}`} className="card is-hoverable" style={{ padding: 16, display: "grid", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FiAward className="muted" aria-hidden />
                <h3 style={{ margin: 0, fontWeight: 700 }}>{a.title}</h3>
              </div>
              <YearChip year={a.year} />
            </div>
            <p className="muted" style={{ margin: 0 }}>{a.description}</p>
            <Tags items={a.tags} />
            {a.link && (
              <a
                href={a.link}
                className="muted"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                <FiExternalLink aria-hidden /> View credential
              </a>
            )}
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: 28 }}>Extracurricular Activities</h2>
      <div className="timeline">
        {extracurriculars.map((e, i) => (
          <div key={`${e.org}-${i}`} className="timeline-item">
            <div className="timeline-dot" aria-hidden />
            <div className="timeline-card card is-hoverable" style={{ padding: 16 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FiUsers className="muted" aria-hidden />
                  <h3 style={{ margin: 0, fontWeight: 700 }}>{e.org}</h3>
                </div>
                <span className="muted">{e.period}</span>
              </div>
              <p className="muted" style={{ margin: "6px 0 0", fontWeight: 600 }}>{e.role}</p>
              <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
                {e.details.map((d, j) => (
                  <li key={j} className="muted" style={{ marginTop: 4 }}>{d}</li>
                ))}
              </ul>
              <Tags items={e.tags} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}