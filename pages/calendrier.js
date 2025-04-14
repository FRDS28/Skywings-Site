import { useState } from 'react';

export default function Calendrier() {
  const [admin, setAdmin] = useState(false);
  const [mdp, setMdp] = useState('');
  const [reservations, setReservations] = useState({
    '2025-04-15': {
      '08:00': { nom: 'Jean Dupont', avion: 'DR400' },
      '10:00': null,
    },
    '2025-04-17': {
      '08:00': { nom: 'Alice Martin', avion: 'PA28' },
      '10:00': null,
    },
    '2025-04-21': {
      '08:00': null,
      '10:00': null,
    },
  });

  const jours = [
    '2025-04-15',
    '2025-04-16',
    '2025-04-17',
    '2025-04-18',
    '2025-04-19',
    '2025-04-20',
    '2025-04-21',
  ];

  const horaires = ['08:00', '10:00', '12:00', '14:00', '16:00'];
  const joursFermes = ['2025-04-21'];

  const verifierMdp = () => {
    if (mdp === 'SkyWings2023') {
      setAdmin(true);
    } else {
      alert('Mot de passe incorrect');
    }
  };

  const supprimerReservation = (jour, heure) => {
    const copy = { ...reservations };
    if (copy[jour]) {
      copy[jour][heure] = null;
      setReservations(copy);
    }
  };

  const getCouleur = (jour, heure) => {
    if (joursFermes.includes(jour)) return '#fecaca'; // rouge clair
    const r = reservations[jour]?.[heure];
    return r ? '#e5e7eb' : '#d1fae5'; // gris si occupé, vert si libre
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Calendrier des vols</h1>

      {!admin && (
        <div style={{ marginBottom: '2rem' }}>
          <input
            type="password"
            placeholder="Mot de passe admin"
            value={mdp}
            onChange={(e) => setMdp(e.target.value)}
          />
          <button onClick={verifierMdp}>Connexion</button>
        </div>
      )}

      {/* ✅ Légende */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <span style={{ backgroundColor: '#d1fae5', padding: '0.3rem 1rem', borderRadius: '4px' }}>Libre</span>
        <span style={{ backgroundColor: '#e5e7eb', padding: '0.3rem 1rem', borderRadius: '4px' }}>Occupé</span>
        <span style={{ backgroundColor: '#fecaca', padding: '0.3rem 1rem', borderRadius: '4px' }}>Fermé</span>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Jour / Heure</th>
            {horaires.map((heure) => (
              <th key={heure}>{heure}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jours.map((jour) => (
            <tr key={jour}>
              <td style={{ fontWeight: 'bold', padding: '0.5rem' }}>{jour}</td>
              {horaires.map((heure) => {
                const r = reservations[jour]?.[heure];
                const couleur = getCouleur(jour, heure);

                return (
                  <td
                    key={heure}
                    style={{
                      backgroundColor: couleur,
                      border: '1px solid #ccc',
                      textAlign: 'center',
                      padding: '0.5rem',
                    }}
                  >
                    {admin ? (
                      <>
                        {r?.nom || 'Libre'}
                        {r && (
                          <div>
                            <button
                              onClick={() => supprimerReservation(jour, heure)}
                              style={{
                                marginTop: '0.3rem',
                                fontSize: '0.8rem',
                                background: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '4px',
                                cursor: 'pointer',
                              }}
                            >
                              Supprimer
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      joursFermes.includes(jour)
                        ? 'Fermé'
                        : r
                        ? 'Occupé'
                        : 'Libre'
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
