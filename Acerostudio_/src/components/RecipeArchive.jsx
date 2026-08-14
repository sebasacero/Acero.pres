import { useMemo, useRef, useState } from 'react';
import recipes from '../data/recipes.js';
import RecipeCard from './RecipeCard.jsx';
import RecipeModal from './RecipeModal.jsx';

export default function RecipeArchive() {
  const [activeYear, setActiveYear] = useState('all');
  const [openRecipe, setOpenRecipe] = useState(null);
  const trackRef = useRef(null);

  const years = useMemo(() => recipes.map((r) => r.year), []);

  const visibleRecipes = useMemo(
    () => (activeYear === 'all' ? recipes : recipes.filter((r) => r.year === activeYear)),
    [activeYear]
  );

  const scrollByCards = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.recipe-card');
    const amount = (card?.offsetWidth || 300) + 20;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <>
      <div className="section-label" id="metodo">
        <span className="num">03</span>
        <span className="rule"></span>
        <span className="sub">FIG. 03 — CHAMPIONSHIP ARCHIVE / ARCHIVO DE CAMPEONES</span>
      </div>

      <div className="sp">
        <h2 className="sec-h2">Recetas que ganaron el mundial</h2>
        <p className="sec-desc">
          Bitácora de las recetas campeonas del World AeroPress Championship, año por año.
          Cada entrada documenta la preparación exacta usada por quien se llevó el trofeo dorado.
          <span className="jp" style={{ display: 'block', marginTop: '.4rem' }}>
            世界チャンピオンのレシピ・アーカイブ
          </span>
        </p>
      </div>

      <div className="recipe-filter" id="recipeFilter">
        <button
          className={`recipe-chip ${activeYear === 'all' ? 'is-active' : ''}`}
          onClick={() => setActiveYear('all')}
        >
          Todos
        </button>
        {years.map((y) => (
          <button
            key={y}
            className={`recipe-chip ${activeYear === y ? 'is-active' : ''}`}
            onClick={() => setActiveYear(y)}
          >
            {y}
          </button>
        ))}
      </div>

      <div className="recipe-carousel-wrap">
        <button className="recipe-arrow prev" aria-label="Receta anterior" onClick={() => scrollByCards(-1)}>‹</button>
        <div className="recipe-blog" ref={trackRef}>
          {visibleRecipes.map((recipe) => (
            <RecipeCard key={recipe.year} recipe={recipe} onOpen={setOpenRecipe} />
          ))}
        </div>
        <button className="recipe-arrow next" aria-label="Receta siguiente" onClick={() => scrollByCards(1)}>›</button>
      </div>

      <RecipeModal recipe={openRecipe} onClose={() => setOpenRecipe(null)} />
    </>
  );
}
