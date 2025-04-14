
import { useState } from "react";

const avions = ["DR400-120", "DR400-140B", "PA28 Arrow II"];
const heures = Array.from({ length: 15 }, (_, i) => `${7 + i}:00`);

export default function Calendrier() {
  const [date, setDate] = useState(new Date());
  const [admin, setAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [reservations, setReservations] = useState([]);

  const formatDate = (d) => d.toISOString().split("T")[0];
  const jour = formatDate(date);

  const toggleAdmin = () => {
    if (password === "admin123") setAdmin(true);
    else alert("Mot de passe incorrect");
  };

  const ajouterReservation = (avion, heure) => {
    const nom = prompt("Nom du client ?");
    if (!nom) return;
    setReservations([...reservations, { jour, avion, heure, nom }]);
  };

  const supprimerReservation = (r) => {
    setReservations(reservations.filter(
      (res) => !(res.jour === r.jour && res.avion === r.avion && res.heure === r.heure)
    ));
  };

  const changerJour = (delta) => {
    const d = new Date(date);
    d.setDate(d.getDate() + delta);
    setDate(d);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#B026FF' }}>Calendrier de réservation – {jour}</h1>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => changerJour(-1)}>⬅️ Jour précédent</button>
        <button onClick={() => changerJour(1)} style={{ marginLeft: '1rem' }}>Jour suivant ➡️</button>
      </div>

      {!admin && (
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe admin"
          />
          <button onClick={toggleAdmin}>Connexion admin</button>
        </div>
      )}

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Heure</th>
            {avions.map((avion) => (
              <th key={avion} style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{avion}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {heures.map((heure) => (
            <tr key={heure}>
              <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{heure}</td>
              {avions.map((avion) => {
                const r = reservations.find(
                  (res) => res.jour === jour && res.heure === heure && res.avion === avion
                );
                return (
                  <td
                    key={avion}
                    style={{ border: '1px solid #ccc', padding: '0.5rem', backgroundColor: r ? '#ffdddd' : '#e7f7ff' }}
                  >
                    {r ? (
                      <>
                        {r.nom}
                        {admin && (
                          <button
                            onClick={() => supprimerReservation(r)}
                            style={{ marginLeft: '0.5rem', backgroundColor: 'red', color: 'white' }}
                          >🗑️</button>
                        )}
                      </>
                    ) : (
                      admin && (
                        <button onClick={() => ajouterReservation(avion, heure)}>➕</button>
                      )
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
