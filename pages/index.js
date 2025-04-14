import Head from 'next/head';
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

      <HeroSection />

      <main>
        <h1>Bienvenue sur Skywings</h1>
        <p>Ce site vous permet de réserver vos créneaux de vol et de consulter les disponibilités de nos avions.</p>
        <p>Naviguez dans le menu pour découvrir nos services.</p>
      </main>
    </>
  );
}
