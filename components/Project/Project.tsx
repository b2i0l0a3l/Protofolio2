import styles from "../Project/project.module.css"
function Project(){

     const projects = [
    {
      title: "Store Man agement System",
      description:
        "Full-stack inventory and sales management system with .NET backend and Next.js frontend",
      tags: ["ASP.NET", "SQL", "Next.js", "RESTful API"],
      image: "🏪",
    },
    {
      title: "Jiran Mobile App",
      description:
        "React Native mobile application for neighborhood services with Arabic RTL support",
      tags: ["React Native", "Expo", "API Integration"],
      image: "📱",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Complete online shopping platform with product management and payment integration",
      tags: ["C#", ".NET", "SQL Server", "HTML/CSS"],
      image: "🛒",
    },
  ];
    return  <section className={styles.fullPage}>
        <div className="container">
          <h2 className="section-title">
            Latest <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Some of my recent work</p>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.title} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <span className={styles.projectEmoji}>{project.image}</span>
                </div>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.projectOverlay}>
                  <span>View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
}
export default Project;