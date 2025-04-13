export default function Vols() {
  const avions = [
    {
      nom: "DR400-120",
      puissance: "120 CV",
      passagers: "1 à 2 passagers + pilote",
      prix: "105€ les 45min / 140€ l'heure",
      reduc: "2h = 250€ (au lieu de 280€) -12%",
      image: "/dr400-120.jpg"
    },
    {
      nom: "DR400-140B",
      puissance: "160 CV",
      passagers: "2 à 3 passagers + pilote",
      prix: "135€ les 45min / 180€ l'heure",
      reduc: "2h = 330€ (au lieu de 360€) -9%",
      image: "/dr400-140b.jpg"
    },
    {
      nom: "PA28 Arrow II",
      puissance: "200 CV",
      passagers: "3 passagers + pilote",
      prix: "180€ les 45min / 240€ l'heure",
      reduc: "2h = 450€ (au lieu de 480€) -7%",
      image: "/pa28.jpg",
      prochainement: true
    }
  ];

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#B026FF', marginBottom: '1rem' }}>Vols loisirs & baptêmes de l’air</h1>
      <p style={{ marginBottom: '1rem' }}>
        Tous les vols durent minimum 45 minutes. Le prix est basé sur le temps moteur (au démarrage du moteur).
        En tant que pilote PPL, je ne peux pas être rentable — c’est pourquoi les tarifs sont attractifs.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {avions.map((avion, i) => (
          <div key={i} style={{
            border: '1px solid #ccc',
            borderRadius: '1rem',
            padding: '1rem',
            width: '300px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <img src={avion.image} alt={avion.nom} style={{ width: '100%', borderRadius: '0.5rem', marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{avion.nom}</h2>
            <p><strong>Puissance :</strong> {avion.puissance}</p>
            <p><strong>Capacité :</strong> {avion.passagers}</p>
            <p><strong>Tarif :</strong> {avion.prix}</p>
            <p><strong>Réduction :</strong> {avion.reduc}</p>
            {avion.prochainement && (
              <p style={{ color: 'red', marginTop: '0.5rem' }}><strong>🚫 Prochainement disponible</strong></p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
