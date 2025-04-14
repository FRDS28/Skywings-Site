import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Accueil</Link>
      <Link href="/a-propos">À propos</Link>
      <Link href="/vols">Nos avions</Link>
      <Link href="/reserver">Réserver</Link>
      <Link href="/calendrier">Calendrier</Link>
      <Link href="/avis">Avis</Link>
    </nav>
  );
}
