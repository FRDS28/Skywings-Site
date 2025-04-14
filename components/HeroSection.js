import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <Image src="/logo.png" alt="Skywings" width={160} height={160} />
          <h1>À vos rêves, prêts, décollez !</h1>
          <p>Volez en toute liberté avec des avions d’aéroclub</p>
          <a href="#a-propos" className={styles.cta}>En savoir plus</a>
        </div>
      </div>
    </section>
  );
}
