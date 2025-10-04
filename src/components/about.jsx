// src/components/about.jsx
export default function About(){
  return (
    <div className="container grid grid-2">
      <div>
        <h2>Who I Am</h2>
        <p className="lead" style={{marginTop:8}}>
          B.Tech student at NIT Rourkela focused on turning data into decisions. I build analytical
          pipelines, dashboards, and production-ready ML that solve real problems.
        </p>

        <div style={{marginTop:16, display:'grid', gap:10}}>
          <p>• End‑to‑end analytics: problem framing → SQL/ETL → EDA → feature engineering → modeling → validation → reporting.</p>
          <p>• Strong in statistics: hypothesis testing, confidence intervals, A/B experiments, causal thinking.</p>
          <p>• Dashboards & storytelling: actionable visuals in Tableau/Power BI/Plotly aligned to KPIs and business outcomes.</p>
          <p>• ML for impact: scikit‑learn baselines to tuned models; prioritize interpretability, monitoring, and iteration.</p>
          <p>• Reproducibility & ops: MLflow, DVC, Docker, Git/GitHub Actions; experiment tracking and data quality checks.</p>
          <p>• Leadership: Corporal in NCC—led media & design teams for national events; clear, cross‑functional communication.</p>
        </div>
      </div>

      <div className="grid" style={{alignContent:'start'}}>
        <div className="card" style={{padding:18}}>
          <div style={{fontWeight:800, fontSize:22}}>Data Analyst • Data Scientist</div>
          <p className="muted" style={{marginTop:8}}>
            Open to internships and entry‑level roles in analytics and applied ML.
          </p>
        </div>

        <div className="card" style={{padding:18}}>
          <div style={{fontWeight:800}}>Toolbox</div>
          <p className="muted" style={{marginTop:8}}>
            Python (Pandas, NumPy, SciPy, scikit‑learn), SQL (MySQL), Visualization (Power BI, Plotly, Seaborn),
            Workflow (Airflow/Prefect), MLOps (MLflow, DVC, Docker), Cloud (GCP/AWS), Git & GitHub Actions.
          </p>
        </div>

        <div className="card" style={{padding:18}}>
          <div style={{fontWeight:800}}>Focus Areas</div>
          <p className="muted" style={{marginTop:8}}>
            Product analytics, segmentation & churn, forecasting/time series, anomaly detection, experiment analysis,
            and applied computer vision.
          </p>
        </div>

        
      </div>
    </div>
  );
}