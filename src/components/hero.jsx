// src/components/hero.jsx
import { FiDownload, FiMail } from "react-icons/fi";
import { SiPython, SiPandas, SiScikitlearn, SiMongodb, SiTensorflow } from "react-icons/si";

export default function Hero(){
  return (
    <div className="container hero-wrap">
      {/* Left */}
      <div style={{display:'flex', flexDirection:'column', gap:18}}>
        <h1>
          Hi, I’m <span className="brand">Gopal Maurya</span>
        </h1>
        <p className="lead" style={{maxWidth: 720}}>
          Data Science enthusiast and B.Tech student at NIT Rourkela.
          I build ML apps, visual analytics, and MLOps-ready projects.
        </p>

        <div className="badges">
          <span className="badge"><SiPython/> Python</span>
          <span className="badge"><SiScikitlearn/> AI / ML</span>
          <span className="badge"><SiPandas/> Data Visualization</span>
          <span className="badge"><SiMongodb/> SQL </span>
          <span className="badge"><SiTensorflow/> MLOps</span>
        </div>

        <div style={{display:'flex', gap:12, marginTop:6}}>
          <a className="btn primary" href="/Gopal_Maurya_Resume.pdf" download>
            <FiDownload/> Download Resume
          </a>
          <a className="btn primary" href="#contact">
            <FiMail/> Contact Me
          </a>
          <a className="btn primary" href="#about">
            About Me
          </a>
          <a className="btn primary" href="#projects">
            Projects
          </a>
          
        </div>

        <div className="kpis">
          <div className="kpi"><div className="big">15+</div><div className="muted">Projects</div></div>
          <div className="kpi"><div className="big">6+</div><div className="muted">Predictive Models</div></div>
          <div className="kpi"><div className="big">5+</div><div className="muted">Teams Led</div></div>
        </div>
      </div>

      {/* Right */}
      <div style={{display:'flex', justifyContent:'center'}}>
        {/* Put your image at: public/profile.jpg */}
        <img src="/profile2.png" alt="Gopal Maurya" className="hero-photo" />
      </div>
    </div>
  );
}
