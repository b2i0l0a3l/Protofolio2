"use client";

import BottomNav from "@/components/BottomNav/BottomNav";
import styles from "../page.module.css";
import Project from "@/components/Project/Project";
export default function ProjectsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Project />
      <BottomNav />
    </div>
  );
}
