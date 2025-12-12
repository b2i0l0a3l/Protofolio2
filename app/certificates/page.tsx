import BottomNav from "@/components/BottomNav/BottomNav";
import Certificate from "@/components/Certificate/Certificate";
import styles from "../page.module.css";

export default function CertificatesPage() {
  return (
    <div className={styles.pageWrapper}>
      <Certificate />
      <BottomNav />
    </div>
  );
}
