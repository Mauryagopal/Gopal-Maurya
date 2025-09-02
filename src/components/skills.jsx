// src/components/skills.jsx
import { 
  SiPython, 
  SiNumpy, 
  SiPandas, 
  SiScikitlearn, 
  SiTensorflow, 
  SiKeras, 
  SiOpencv, 
  SiTableau, 
  SiMongodb, 
  SiMysql, 
  SiDocker, 
  SiGit, 
  SiGithubactions 
} from "react-icons/si";

const items = [
  { icon: SiPython, label: "Python" },
  { icon: SiNumpy, label: "NumPy" },
  { icon: SiPandas, label: "Pandas" },
  { icon: SiScikitlearn, label: "scikit-learn" },
  { icon: SiTensorflow, label: "TensorFlow" },
  { icon: SiKeras, label: "Keras" },
  { icon: SiOpencv, label: "OpenCV" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiTableau, label: "Tableau" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithubactions, label: "GitHub Actions" },
];

export default function Skills() {
  return (
    <div className="container">
      <h2>Skills</h2>
      <p className="muted" style={{ marginTop: 6 }}>
        Tools and tech I use daily.
      </p>
      <div className="badges" style={{ marginTop: 14 }}>
        {items.map(({ icon: Icon, label }) => (
          <span className="badge" key={label}>
            <Icon /> {label}
          </span>
        ))}
      </div>
    </div>
  );
}
