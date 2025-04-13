import { useState } from "react";

export default function Avis() {
  const [avis, setAvis] = useState([]);
  const [form, setForm] = useState({ note: 5, commentaire: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAvis([...avis, { ...form }]);
    setForm({ note: 5, commentaire: "" });
    alert("Merci pour votre avis !");
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#B026FF', marginBottom: '1rem' }}>Avis clients</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <label>
          Note (0 à 5) :
          <input
            type="number"
            name="note"
            value={form.note}
            onChange={handleChange}
            min="0"
            max="5"
            required
          />
        </label>
        <textarea
          name="commentaire"
          value={form.commentaire}
          onChange={handleChange}
          placeholder="Votre commentaire (facultatif)"
          rows="3"
        />
        <button type="submit" style={{ background: '#B026FF', color: 'white', padding: '0.5rem', border: 'none' }}>
          Envoyer mon avis
        </button>
      </form>

      {avis.length > 0 && (
        <div style={{ borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Commentaires :</h2>
          {avis.map((a, i) => (
            <div key={i} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #eee', borderRadius: '0.5rem' }}>
              <strong>Note :</strong> {a.note}/5 ⭐
              {a.commentaire && <p style={{ marginTop: '0.5rem' }}>"{a.commentaire}"</p>}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
