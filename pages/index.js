import Head from "next/head";
import "../styles/global.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>SkyWings ✈️ Vols de loisir depuis Lognes</title>
      </Head>
      <main>
        <div style={{ textAlign: 'center' }}>
          <img src="/logo.png" alt="SkyWings logo" style={{ maxWidth: '150px', marginBottom: '1rem' }} />
          <h1>Bienvenue chez SkyWings</h1>
          <p style={{ fontSize: '1.1rem', color: '#444' }}>
            Offrez-vous une expérience aérienne unique au départ de l’aérodrome de Lognes (LFPL)
          </p>
          <p style={{ fontStyle: 'italic', color: '#666', marginTop: '1rem' }}>
            « À vos rêves, prêts, décollez ! »
          </p>
        </div>

        <nav>
          <a href="/a-propos">À propos</a>
          <a href="/vols">Vols</a>
          <a href="/reserver">Réserver</a>
          <a href="/calendrier">Calendrier</a>
          <a href="/avis">Avis</a>
          <a href="/contact">Contact</a>
        </nav>

        <section style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div className="card">
            <h2>🛫 Vols loisirs & Baptêmes de l'air</h2>
            <p>Découvrez nos formules exclusives à bord du DR400 ou PA28.</p>
            <a href="/vols"><button>Voir les formules</button></a>
          </div>

          <div className="card" style={{ marginTop: '2rem' }}>
            <h2>📅 Réservez en ligne</h2>
            <p>Choisissez votre créneau et recevez une vidéo GoPro du vol offerte.</p>
            <a href="/reserver"><button>Réserver maintenant</button></a>
          </div>
        </section>
      </main>
    </>
  );
}
