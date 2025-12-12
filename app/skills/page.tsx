"use client";

import BottomNav from "@/components/BottomNav/BottomNav";
import styles from "../page.module.css";
import Skill from "@/components/Skill/Skill";

export default function SkillsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Skill />
      <BottomNav />
    </div>
  );
}
