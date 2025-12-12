import styles from "./About.module.css";

function About(){
    return <section className={styles.fullPage}>
        <div className="container">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <div className={styles.aboutCard}>
                <h3>Who I Am</h3>
                <p>
                  I&apos;m a dedicated Full-Stack Developer with a strong focus
                  on backend development using C# and the .NET ecosystem. With a
                  passion for clean code and efficient database design, I build
                  scalable applications that solve real-world problems.
                </p>
                <p>
                  My journey in software development has equipped me with
                  expertise in building RESTful APIs, working with SQL
                  databases, and creating modern web interfaces. I enjoy turning
                  complex requirements into elegant, maintainable solutions.
                </p>
              </div>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>3+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>5+</span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>3</span>
                  <span className={styles.statLabel}>Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
}
export default About;