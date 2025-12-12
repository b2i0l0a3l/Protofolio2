import styles from "./Skill.module.css";
function Skill(){
     const skills = [
        { name: "C++", level: 85, color: "#00599C" },
        { name: "C#", level: 90, color: "#68217A" },
        { name: ".NET Framework", level: 88, color: "#512BD4" },
        { name: "ASP.NET", level: 85, color: "#512BD4" },
        { name: "SQL", level: 80, color: "#CC2927" },
        { name: "RESTful API", level: 85, color: "#4facfe" },
        { name: "HTML/CSS", level: 90, color: "#E34F26" },
        { name: "JavaScript", level: 75, color: "#F7DF1E" },
        { name: "Next.js", level: 60, color: "#ffffff" },
    ];
    
    return   <section className={styles.fullPage}>
        <div className="container">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillFill}
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, #667eea)`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
}

export default Skill;