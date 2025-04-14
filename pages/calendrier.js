import { useState } from 'react';

export default function Calendrier() {
  const [admin, setAdmin] = useState(false);
  const [mdp, setMdp] = useState('');
  const [data, setData] = useState({
    '2025-04-15': {
      DR400: { nom: 'Jean Dupont' },
      PA28: null,
      ULM: null,
    },
    '2025-04-17': {
      DR400: { nom: 'Alice Martin' },
      PA28: { nom: 'Marc Durand' },
      ULM: null,
    },
    '2025-04-21': {
      DR400: null,
      PA28: null,
      ULM: null,
    }
  });

  const jours = [
    '2025-04-15',
    '2025-04-16',
    '2025-04-17',
    '2025-04-18',
    '2025-04-19',
    '2025-04-20',
    '2025-04-21'
  ];

  const avions = ['DR400', 'PA28', 'ULM'];
  const joursFermes = ['2025-04-21'];

  const verifierMdp = () => {
    if (mdp === 'SkyWings2023') {
      setAdmin(true);
    } else {
      alert('Mot de passe incorrect');
    }
  };

  const supprimerReservation = (jour, avion) => {
    const nouvelleData = { ...data };
    if (nouvelleData[jour]) {
      nouvelleData[jour][avion] = null;
      setData(nouvelleData);
    }
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
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <div><span style={{ backgroundColor: '#d1fae5', padding: '0.3rem 1rem', borderRadius: '4px' }}>Libre</span></div>
        <div><span style={{ backgroundColor: '#e5e7eb', padding: '0.3rem 1rem', borderRadius: '4px' }}>Occupé</span></div>
        <div><span style={{ backgroundColor: '#fecaca', padding: '0.3rem 1rem', borderRadius: '4px' }}>Fermé</span></div>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Jour</th>
            {avions.map((avion) => (
              <th key={avion}>{avion}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jours.map((jour) => (
            <tr key={jour}>
              <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>{jour}</td>
              {avions.map((avion) => {
                const r = data[jour]?.[avion] || null;
                const estFerme = joursFermes.includes(jour);
                const couleur = estFerme
                  ? '#fecaca'
                  : r
                  ? '#e5e7eb'
                  : '#d1fae5';

                return (
                  <td
                    key={avion}
                    style={{
                      border: '1px solid #ccc',
                      padding: '0.5rem',
                      backgroundColor: couleur,
                      textAlign: 'center',
                    }}
                  >
                    {admin ? (
                      <>
                        {r?.nom || 'Libre'}
                        {r && (
                          <div>
                            <button
                              onClick={() => supprimerReservation(jour, avion)}
                              style={{
                                marginTop: '0.5rem',
                                fontSize: '0.8rem',
                                background: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '0.3rem 0.5rem',
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
                      estFerme ? 'Fermé' : r ? 'Occupé' : 'Libre'
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
