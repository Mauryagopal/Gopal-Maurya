// src/components/about.jsx
export default function About(){
  return (
    <div className="container grid grid-2">
      <div>
        <h2>Who I Am</h2>
        <p className="lead" style={{marginTop:8}}>
          Passionate technologist and B.Tech student at NIT Rourkela, specializing in data science & AI.
          I design real-time web apps and ML systems, with hands-on experience in model deployment.
        </p>
        <div style={{marginTop:16, display:'grid', gap:10}}>

          <p>• Experience across ML pipelines: EDA → modeling → MLOps (tracking, containers, CI/CD).</p>
          <p>• Comfortable with Python stack, SQL, cloud, dashboards, and instrumentation projects.</p>
          <p>• Corporal in NCC- led media & design teams for national events.</p>
        </div>
      </div>
      <div className="grid" style={{alignContent:'start'}}>
        <div className="card" style={{padding:18}}>
          <div style={{fontWeight:800, fontSize:22}}>Engineer • Creator • Analyst</div>
          <p className="muted" style={{marginTop:8}}>
            Engineer focused on AI, ML, and Data-Driven Solutions
          </p>
        </div>
        <div className="card" style={{padding:18}}>
          <div style={{fontWeight:800}}>Interests</div>
          <p className="muted" style={{marginTop:8}}>
            Computer Vision, Biomedical Signal Processing, Product Analytics, and Learning Systems.
          </p>
        </div>
      </div>
    </div>
  );
}
