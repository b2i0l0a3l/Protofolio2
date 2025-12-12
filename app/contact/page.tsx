"use client";

import BottomNav from "@/components/BottomNav/BottomNav";
import styles from "../page.module.css";
import Contact from "@/components/Contact/Contact";

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      <Contact />
      <BottomNav />
    </div>
  );
}
