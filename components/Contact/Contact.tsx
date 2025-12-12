import styles from "./Contact.module.css";
function Contact() {
  return (
    <section className={styles.fullPage}>
      <div className="container">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          Let&apos;s work together on your next project
        </p>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📧</div>
              <div>
                <h4>Email</h4>
                <p>belamraoui21@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📍</div>
              <div>
                <h4>Location</h4>
                <p>Germany</p>
              </div>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>💼</div>
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/bilal-el-amraoui-631bb8247</p>
              </div>
            </div>
          </div>
          <form
            className={styles.contactForm}
            action="https://formspree.io/f/mblnqoae"
            method="POST"
          >
            <div className={styles.formGroup}>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Send Message
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
