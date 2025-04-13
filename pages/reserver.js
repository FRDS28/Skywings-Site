import { useState } from "react";

export default function Reserver() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    poids: "",
    avion: "DR400-120",
    duree: "45min",
    codePromo: ""
  });

  const tarifs = {
    "DR400-120": { "45min": 105, "1h": 140, "2h": 250 },
    "DR400-140B": { "45min": 135, "1h": 180, "2h": 330 },
    "PA28 Arrow II": { "45min": 180, "1h": 240, "2h": 450 }
  };

  const prix = tarifs[form.avion]?.[form.duree] || 0;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demande envoyée ! Vous serez recontacté très vite.");
    console.log("Formulaire soumis :", form);
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#B026FF' }}>Réserver un vol</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <input name="nom" value={form.nom} onChange={handleChange} placeholder="Nom et prénom" required />
        <input name="telephone" value={form.telephone} onChange={handleChange} placeholder="Téléphone" required />
        <input name="poids" value={form.poids} onChange={handleChange} placeholder="Poids total des passagers (kg)" required />

        <select name="avion" value={form.avion} onChange={handleChange}>
          <option value="DR400-120">DR400-120</option>
          <option value="DR400-140B">DR400-140B</option>
          <option disabled value="PA28 Arrow II">PA28 Arrow II (Prochainement)</option>
        </select>

        <select name="duree" value={form.duree} onChange={handleChange}>
          <option value="45min">45 minutes</option>
          <option value="1h">1 heure</option>
          <option value="2h">2 heures</option>
        </select>

        <input name="codePromo" value={form.codePromo} onChange={handleChange} placeholder="Code promo (si vous en avez un)" />

        <div>
          <strong>Prix estimé : {prix} €</strong> — <span style={{ color: 'green' }}>Vidéo GoPro offerte 📹</span>
        </div>

        <button type="submit" style={{ background: '#B026FF', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: '5px' }}>
          Envoyer la demande
        </button>
      </form>
    </main>
  );
}
