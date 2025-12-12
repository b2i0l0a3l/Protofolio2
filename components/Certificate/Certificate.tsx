"use client";

import { useState } from "react";
import styles from "./Certificate.module.css";

function Certificate() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const certificates = [
    {
      title: "Solid Principles",
      issuer: "Programming Advices",
      date: "2025",
      icon: "📜",
      image: "/certificates/cer3.png",
    },
     {
      title: "Restful Api",
      issuer: "Programming Advices",
      date: "2024",
      icon: "📜",
      image: "/certificates/cer4.png",
    },
     {
      title: "C# Level 2",
      issuer: "Programming Advices",
      date: "2024",
      icon: "📜",
      image: "/certificates/cer5.png",
    },
    {
      title: "SQL",
      issuer: "Programming Advices",
      date: "2024",
      icon: "📜",
      image: "/certificates/cer1.png",
    },
    {
      title: "SQL (Project & Practice)",
      issuer: "Programming Advices",
      date: "2024",
      icon: "📜",
      image: "/certificates/cer2.png",
    },
      {
      title: "C# Level 1",
      issuer: "Programming Advices",
      date: "2024",
      icon: "📜",
      image: "/certificates/cer6.png",
    },
    {
      title: "C++ Level 2",
      issuer: "Programming Advices",
      date: "2023",
      icon: "📜",
      image: "/certificates/cer8.png",
    },
    {
      title: "C++ Level 1",
      issuer: "Programming Advices",
      date: "2023",
      icon: "📜",
      image: "/certificates/cer7.png",
    }
    
  ];

  const openModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

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
          {certificates.map((cert) => (
            <div key={cert.title} className={`${styles.certCard}`}>
              <div className={styles.certIcon}>{cert.icon}</div>
              <div className={styles.certContent}>
                <h3>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <span className={styles.certDate}>{cert.date}</span>
              </div>
              {cert.image && (
                <div
                  className={styles.certImageWrapper}
                  onClick={() => openModal(cert.image, cert.title)}
                >
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

      {/* Modal for viewing certificate */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ✕
            </button>
            <h3 className={styles.modalTitle}>{selectedTitle}</h3>
            <img
              src={selectedImage}
              alt={selectedTitle}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;
