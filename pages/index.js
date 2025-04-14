import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Skywings - Voler en toute liberté</title>
        <meta name="description" content="Découvrez une nouvelle façon de prendre les airs avec Skywings : simple, élégante et accessible." />
        <meta name="keywords" content="aviation, vol, liberté, Skywings, voyage" />
        <meta name="author" content="Skywings" />
      </Head>

      <Navbar />
      <HeroSection />

      <main>
        <h1>Bienvenue sur Skywings</h1>
        <p>Ce site vous permet de réserver vos créneaux de vol et de consulter les disponibilités de nos avions.</p>
        <p>Naviguez dans le menu pour découvrir nos services.</p>

        {/* 🎯 Cible du bouton "En savoir plus" */}
        <section id="a-propos" style={{ marginTop: "4rem" }}>
          <h2>À propos de Skywings</h2>
          <p>
            Skywings est un projet personnel dédiée au plaisir de voler. J'encourage la découverte de l'aviation légère à travers des vols en aéroclub, accessibles à tous et sans but lucratif.
          </p>
        </section>
      </main>
    </>
  );
}
