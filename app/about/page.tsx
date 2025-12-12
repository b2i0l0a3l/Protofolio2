import BottomNav from "@/components/BottomNav/BottomNav";
import styles from "../page.module.css";
import About from "@/components/About/About";

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <About />
      <BottomNav />
    </div>
  );
}
