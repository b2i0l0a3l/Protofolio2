"use client";

import BottomNav from "@/components/BottomNav/BottomNav";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOrb1}></div>
          <div className={styles.heroOrb2}></div>
          <div className={styles.heroOrb3}></div>
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroGreeting}>Hello, I&apos;m</p>
          <h1 className={styles.heroName}>
            <span className="gradient-text">Bilal El amraoui</span>
          </h1>
          <h2 className={styles.heroTitle}>Full-Stack Developer</h2>
          <p className={styles.heroDescription}>
            Passionate about building robust backend systems with .NET and
            creating beautiful, responsive frontends. Specialized in C#,
            ASP.NET, SQL, and modern web technologies.
          </p>
          <div className={styles.heroCta}>
            <Link href="/projects" className="btn-primary">
              View My Work
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
      <BottomNav />
    </div>
  );
}
