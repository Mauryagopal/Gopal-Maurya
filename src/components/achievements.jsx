// src/components/achievements.jsx
const items = [
  { title: "Outstanding presentation on Artificial Heart & Instrumentation", year: "2024" },
  { title: "Led video editing team for National Entrepreneurship Summit (NES)", year: "2025" },
  { title: "Corporal, NCC — B Certificate with good grade", year: "Ongoing" },
];

export default function Achievements(){
  return (
    <div className="container">
      <h2>Achievements</h2>
      <ul style={{marginTop:12, display:'grid', gap:10}}>
        {items.map((it,i)=>(
          <li key={i} className="card" style={{padding:16, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <span>{it.title}</span>
            <span className="muted">{it.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
