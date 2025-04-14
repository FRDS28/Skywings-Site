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

        {/* 🟢 Section À propos */}
        <section id="a-propos" style={{ marginTop: "4rem", padding: "2rem 1rem" }}>
          <h2 style={{ fontSize: "2rem", color: "var(--color-primary)", marginBottom: "1rem" }}>
            À propos de Skywings
          </h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
            Skywings est une initiative associative née de la passion pour l’aviation légère.
            Nous proposons des vols en aéroclub sur avion certifié, à destination des curieux comme des passionnés.
            Notre structure est sans but lucratif : l’objectif est de partager la magie du vol et de démocratiser l’accès à l’aviation.
          </p>

          {/* 📍 Carte de l’aérodrome de Lognes */}
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
            <iframe
              title="Carte Aérodrome de Lognes"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.2623295740843!2d2.623333!3d48.821111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5fc4118023b03%3A0x7509b9d6a8de29d6!2sA%C3%A9rodrome%20de%20Lognes-%C3%89merainville!5e0!3m2!1sfr!2sfr!4v1713090000000!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px", maxWidth: "800px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
