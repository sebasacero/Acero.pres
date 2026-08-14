import { useEffect, useRef } from 'react';

export default function RecipeModal({ recipe, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (recipe && !dialog.open) dialog.showModal();
    if (!recipe && dialog.open) dialog.close();
  }, [recipe]);

  if (!recipe) return null;

  return (
    <dialog ref={dialogRef} className="recipe-modal-banner" onClose={onClose}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <header className="hero-header">
          <div className="hero-video-wrapper">
            <video className="hero-video" autoPlay loop muted playsInline poster={`/image/poster-${recipe.year}.jpg`}>
              <source src={`/image/video-${recipe.year}.mp4`} type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-caption">
            <span className="hero-badge">WAC Champion {recipe.year} {recipe.flag}</span>
            <h2 className="hero-title">{recipe.name}</h2>
            <p className="hero-subtitle">{recipe.place}</p>
          </div>
        </header>

        <div className="modal-body">
          <div className="modal-specs-bar">
            <div className="m-spec"><span className="m-label">Dosis</span><span className="m-val">{recipe.dose}</span></div>
            <div className="m-spec"><span className="m-label">Temperatura</span><span className="m-val">{recipe.temp}</span></div>
            <div className="m-spec"><span className="m-label">Posición</span><span className="m-val">{recipe.position}</span></div>
            <div className="m-spec"><span className="m-label">Agua</span><span className="m-val">{recipe.water}</span></div>
          </div>

          <div className="modal-grid">
            <section className="modal-block coffee-info">
              <h4>☕ Café Utilizado</h4>
              <p>{recipe.coffee}</p>
            </section>
            <section className="modal-block prep-info">
              <h4>⚙️ Equipamiento y Molienda</h4>
              <ul>
                {recipe.equipment.map((line, i) => {
                  const [label, ...rest] = line.split(':');
                  return (
                    <li key={i}>
                      <strong>{label}:</strong>{rest.join(':')}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>

          <section className="modal-block steps-info">
            <h4>📋 Paso a Paso de Extracción</h4>
            <ol className="steps-list">
              {recipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </dialog>
  );
}
