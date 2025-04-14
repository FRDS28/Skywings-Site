import Head from 'next/head';
import Image from 'next/image';
import styles from './a-propos.module.css';

export default function APropos() {
  return (
    <>
      <Head>
        <title>À propos – Skywings</title>
        <meta name="description" content="Découvrez l'esprit de Skywings, une initiative passionnée autour de l'aviation légère en aéroclub." />
      </Head>

      <div className={styles.container}>
        <section className={styles.header}>
          <h1>À propos de Skywings</h1>
          <p>Une passion pour l'aviation partagée en toute liberté.</p>
        </section>

        <section className={styles.content}>
          <div className={styles.text}>
            <p>
              Skywings est une initiative associative fondée par un passionnés d'aviation, avec pour mission de rendre le vol accessible à tous.
              Basée à l'aérodrome de Lognes, la structure évolue dans un cadre humain, sans but lucratif.
            </p>
            <p>
              Que vous soyez curieux de découvrir le pilotage ou que vous ayez déjà une licence, Skywings vous accompagne dans un esprit de partage,
              de rigueur et de convivialité. Nous proposons des vols loisir, des baptêmes de l'air, et une mise en relation avec des instructeurs bénévoles.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/dr400-140b.jpg"
              alt="Avion DR400 de Skywings"
              width={500}
              height={350}
              style={{ borderRadius: '12px' }}
            />
          </div>
        </section>
      </div>
    </>
  );
}
