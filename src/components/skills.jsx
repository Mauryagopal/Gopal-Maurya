// src/components/skills.jsx
import * as Si from "react-icons/si";
import { TbSql, TbCloud, TbWaveSine, TbFileSpreadsheet } from "react-icons/tb";
import { RiBarChart2Line, RiFlowChart } from "react-icons/ri";

const categories = [
  {
    title: "Languages",
    items: [
      { icon: Si.SiPython, label: "Python" },
      { icon: Si.SiCplusplus, label: "C++" },
      { icon: Si.SiMathworks || TbWaveSine, label: "MATLAB" },
      { icon: Si.SiHtml5, label: "HTML5" },
      { icon: Si.SiCss3, label: "CSS3" },
      { icon: TbSql, label: "SQL" },
    ],
  },
  {
    title: "Data Science Libraries",
    items: [
      { icon: Si.SiNumpy, label: "NumPy" },
      { icon: Si.SiPandas, label: "Pandas" },
      { icon: Si.SiScikitlearn, label: "scikit-learn" },
      { icon: Si.SiTensorflow, label: "TensorFlow" },
      { icon: Si.SiKeras, label: "Keras" },
      { icon: Si.SiMatplotlib || TbWaveSine, label: "Matplotlib" },
      { icon: Si.SiSeaborn || TbWaveSine, label: "Seaborn" },
      { icon: Si.SiMlflow || RiFlowChart, label: "MLflow" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { icon: Si.SiMysql, label: "MySQL" },
      { icon: Si.SiMicrosoftexcel || TbFileSpreadsheet, label: "Microsoft Excel" },
      { icon: RiBarChart2Line, label: "Power BI" }, // avoids missing SiPowerbi
      { icon: Si.SiKaggle, label: "Kaggle" },
      { icon: Si.SiJupyter || TbWaveSine, label: "Jupyter" },
    ],
  },
  {
    title: "Web & Deployment",
    items: [
      { icon: Si.SiFlask, label: "Flask" },
      { icon: Si.SiDocker, label: "Docker" },
      { icon: TbCloud, label: "Render" },
      { icon: Si.SiAmazonaws, label: "AWS" },
      { icon: Si.SiGit, label: "Git" },
      { icon: Si.SiGithub, label: "GitHub" },
      { icon: Si.SiDvc, label: "DVC" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="container">
      <h2>Technical Skills</h2>
      <p className="muted" style={{ marginTop: 6 }}>
        Focused on Data Science and Analytics.
      </p>

      {/* Scoped styles to balance and align the layout */}
      <style>{`
        .skills-grid {
          display: grid;
          gap: 28px;
          margin-top: 14px;
          grid-template-columns: 1fr; /* mobile: 1 column */
        }
        @media (min-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, minmax(320px, 1fr)); /* desktop: 2 balanced columns */
          }
        }
        .skills-section h3 {
          font-size: 16px;
          margin: 0 0 10px 0;
        }
        .badges-grid {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(2, minmax(160px, 1fr)); /* tidy 2-col grid inside each section */
        }
        @media (max-width: 420px) {
          .badges-grid {
            grid-template-columns: 1fr; /* single column on small phones */
          }
        }
        /* Make badges look like consistent tiles without breaking your existing .badge styles */
        .badge.tile {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 44px;               /* consistent height */
          padding: 10px 12px;
          border-radius: 12px;
          width: 100%;                /* fill grid cell for perfect alignment */
          box-sizing: border-box;
        }
        .badge.tile svg {
          flex-shrink: 0;
        }
      `}</style>

      <div className="skills-grid">
        {categories.map((cat) => (
          <section key={cat.title} className="skills-section">
            <h3>{cat.title}</h3>
            <div className="badges-grid">
              {cat.items.map(({ icon: Icon, label }) => (
                <span
                  className="badge tile"
                  key={label}
                  title={label}
                  aria-label={label}
                >
                  {Icon ? <Icon size={18} aria-hidden="true" /> : null}
                  {label}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}