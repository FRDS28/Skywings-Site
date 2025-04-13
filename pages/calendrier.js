import { useState } from "react";

export default function Calendrier() {
  const [reservations, setReservations] = useState([
    { date: "2025-04-20", heure: "10:00", nom: "Dupont", statut: "En attente" },
    { date: "2025-04-21", heure: "14:30", nom: "Martin", statut: "Confirmée" }
  ]);

  const [adminMode, setAdminMode] = useState(false);
  const [password, setPassword] = useState("");

  const ADMIN_PASSWORD = "admin123";

  const toggleValidation = (index) => {
    const updated = [...reservations];
    updated[index].statut = updated[index].statut === "Confirmée" ? "En attente" : "Confirmée";
    setReservations(updated);
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAdminMode(true);
      setPassword("");
    } else {
      alert("Mot de passe incorrect");
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#B026FF' }}>Calendrier de réservation</h1>

      {!adminMode && (
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe admin"
            style={{ marginRight: '1rem' }}
          />
          <button onClick={handleLogin}>Connexion admin</button>
        </div>
      )}

      {adminMode && (
        <div>
          <p style={{ color: 'green' }}>Mode administrateur activé ✅</p>
          <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#eee' }}>
                <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Date</th>
                <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Heure</th>
                <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Nom</th>
                <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Statut</th>
                <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r, i) => (
                <tr key={i}>
                  <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{r.date}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{r.heure}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{r.nom}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{r.statut}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
                    <button onClick={() => toggleValidation(i)}>
                      {r.statut === "Confirmée" ? "Annuler" : "Confirmer"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!adminMode && (
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          Une fois votre réservation soumise, elle apparaîtra ici en attente de validation.
        </p>
      )}
    </main>
  );
}
