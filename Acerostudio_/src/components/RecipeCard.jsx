export default function RecipeCard({ recipe, onOpen }) {
  return (
    <article className="recipe-card" data-year={recipe.year}>
      <div className="recipe-card-head">
        <span className="recipe-year">{recipe.year}</span>
        <span className="recipe-flag">{recipe.flag}</span>
      </div>
      <h3 className="recipe-name">{recipe.name}</h3>
      <div className="recipe-place">{recipe.place}</div>
      <div className="recipe-jp">世界チャンピオン · {recipe.year}年</div>

      <div className="recipe-specs">
        <div className="spec"><span className="spec-v">{recipe.dose}</span><span className="spec-l">dosis</span></div>
        <div className="spec"><span className="spec-v">{recipe.temp}</span><span className="spec-l">temp</span></div>
        <div className="spec"><span className="spec-v">{recipe.position}</span><span className="spec-l">posición</span></div>
      </div>

      <button className="recipe-toggle" aria-expanded="false" onClick={() => onOpen(recipe)}>
        Ver receta completa <span className="chev">▾</span>
      </button>
    </article>
  );
}
