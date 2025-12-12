
import styles from "./Certificate.module.css";

function Certificate() {

    const certificates = [
    {
      title: "Bachelor's Degree in Computer Science",
      issuer: "University",
      date: "2024",
      icon: "🎓",
      image: "/certificates/degree.jpg", 
    },
    {
      title: ".NET Development Certification",
      issuer: "Microsoft",
      date: "2023",
      icon: "📜",
      image: "/certificates/dotnet.jpg", 
    },
    {
      title: "SQL Database Administration",
      issuer: "Oracle",
      date: "2023",
      icon: "🏆",
      image: "/certificates/sql.jpg", 
    },
    ];

    return (
      <section id="certificates" className={styles.certificates}>
        <div className="container">
          <h2 className={`section-title`}>
            <span className="gradient-text">Zeugnis</span> & Certificates
          </h2>
          <p className={`section-subtitle`}>
            My educational background and certifications
          </p>
          <div className={styles.certificatesTimeline}>
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className={`${styles.certCard}`}
              >
                <div className={styles.certIcon}>{cert.icon}</div>
                <div className={styles.certContent}>
                  <h3>{cert.title}</h3>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <span className={styles.certDate}>{cert.date}</span>
                </div>
                {cert.image && (
                  <div className={styles.certImageWrapper}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className={styles.certImage}
                    />
                    <div className={styles.certImageOverlay}>
                      <span>View Certificate</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Certificate;