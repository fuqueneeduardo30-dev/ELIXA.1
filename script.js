// =====================================================
// 1. CATÁLOGO DE PERFUMES
// =====================================================
const perfumes = [
  {
    name: "King of parties",
    gender: "hombre",
    intensity: "fuerte",
    color: "#8da58a",
    light: "#c4d4b9",
    dark: "#4b684d",
    mood: "sensualidad",
    occasion: "especial"
  },
  {
    name: "Force",
    gender: "hombre",
    intensity: "fuerte",
    color: "#87958a",
    light: "#b8c4b9",
    dark: "#3b5145",
    mood: "elegancia",
    occasion: "trabajo"
  },
  {
    name: "Lynda",
    gender: "hombre",
    intensity: "fuerte",
    color: "#b3a17d",
    light: "#e0d2b4",
    dark: "#776342",
    mood: "elegancia",
    occasion: "especial"
  },
  {
    name: "Reginald",
    gender: "hombre",
    intensity: "fuerte",
    color: "#7e9a8d",
    light: "#bed2c6",
    dark: "#36594b",
    mood: "sensualidad",
    occasion: "especial"
  },
  {
    name: "Leblanc",
    gender: "hombre",
    intensity: "fuerte",
    color: "#9a9e82",
    light: "#d4d6b9",
    dark: "#596348",
    mood: "frescura",
    occasion: "diario"
  },
  {
    name: "Addictive vibe",
    gender: "hombre",
    intensity: "suave",
    color: "#b9a28c",
    light: "#e6d3bc",
    dark: "#8a6d51",
    mood: "dulzura",
    occasion: "diario"
  },
  {
    name: "Hammond",
    gender: "hombre",
    intensity: "suave",
    color: "#9cae9a",
    light: "#d4dfcc",
    dark: "#5f7860",
    mood: "frescura",
    occasion: "diario"
  },
  {
    name: "Impulse",
    gender: "hombre",
    intensity: "suave",
    color: "#a9b9a2",
    light: "#dce5d4",
    dark: "#627a5c",
    mood: "frescura",
    occasion: "trabajo"
  },
  {
    name: "Blair",
    gender: "hombre",
    intensity: "suave",
    color: "#c4b89c",
    light: "#e9dfc8",
    dark: "#887754",
    mood: "dulzura",
    occasion: "diario"
  },
  {
    name: "Veros",
    gender: "hombre",
    intensity: "suave",
    color: "#8ba6a0",
    light: "#c9dcd4",
    dark: "#4c716a",
    mood: "elegancia",
    occasion: "trabajo"
  },
  {
    name: "Belle epoque",
    gender: "mujer",
    intensity: "fuerte",
    color: "#bda0a0",
    light: "#e5cccc",
    dark: "#936b70",
    mood: "elegancia",
    occasion: "especial"
  },
  {
    name: "Delphy",
    gender: "mujer",
    intensity: "fuerte",
    color: "#9caa8e",
    light: "#d2dcc2",
    dark: "#5e7552",
    mood: "frescura",
    occasion: "diario"
  },
  {
    name: "London",
    gender: "mujer",
    intensity: "fuerte",
    color: "#9da68a",
    light: "#d4d8bc",
    dark: "#5e694d",
    mood: "elegancia",
    occasion: "trabajo"
  },
  {
    name: "Carola rose",
    gender: "mujer",
    intensity: "fuerte",
    color: "#c18e91",
    light: "#edc9c9",
    dark: "#9a5c68",
    mood: "sensualidad",
    occasion: "especial"
  },
  {
    name: "Godina",
    gender: "mujer",
    intensity: "fuerte",
    color: "#b6a17b",
    light: "#e4d4af",
    dark: "#847044",
    mood: "sensualidad",
    occasion: "especial"
  },
  {
    name: "Sibell",
    gender: "mujer",
    intensity: "suave",
    color: "#c5b1a2",
    light: "#eadcd0",
    dark: "#9d8170",
    mood: "dulzura",
    occasion: "diario"
  },
  {
    name: "Turquesa",
    gender: "mujer",
    intensity: "suave",
    color: "#8db6b0",
    light: "#cce5db",
    dark: "#4e8c85",
    mood: "frescura",
    occasion: "diario"
  },
  {
    name: "Rush",
    gender: "mujer",
    intensity: "suave",
    color: "#b8c5a3",
    light: "#dfe8cf",
    dark: "#74875d",
    mood: "frescura",
    occasion: "trabajo"
  },
  {
    name: "Devon",
    gender: "mujer",
    intensity: "suave",
    color: "#aab3a0",
    light: "#d9dfd1",
    dark: "#6e7c68",
    mood: "elegancia",
    occasion: "trabajo"
  },
  {name:"Candy",gender:"mujer",intensity:"suave",color:"#d0a6a7",light:"#f0d5d2",dark:"#ac7078",mood:"dulzura",occasion:"especial"}
];

// =====================================================
// 2. ELEMENTOS DE LA PÁGINA
// =====================================================
const grid = document.getElementById("perfumeGrid");
const filters = document.querySelectorAll(".filter");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// =====================================================
// 3. CATÁLOGO: CREACIÓN DE BOTELLAS Y FILTROS
// =====================================================
function bottleMarkup(p) {
  return `<div class="mini-bottle" style="--bottle-color:${p.color};--bottle-light:${p.light};--bottle-dark:${p.dark}" aria-hidden="true"></div>`;
}
function renderPerfumes(filter = "todos") {
  const visible = perfumes.filter(
    p => filter === "todos" || p.gender === filter || p.intensity === filter
  );
  grid.innerHTML = visible.map((p, i) => `
    <article class="perfume-card" style="animation-delay:${Math.min(i*35,280)}ms">
      <div class="perfume-visual" style="--bottle-bg:${p.light}">
        <span class="perfume-number">${String(perfumes.indexOf(p)+1).padStart(2,"0")}</span>
        ${bottleMarkup(p)}
      </div>
      <div class="perfume-info">
        <h3>${p.name}</h3>
        <div class="perfume-tags"><span class="tag">${p.gender === "mujer" ? "Para mujer" : "Para hombre"}</span><span class="tag">${p.intensity === "fuerte" ? "Intenso" : "Suave / dulce"}</span></div>
        <p>${p.intensity === "fuerte" ? "Una presencia definida para expresar tu personalidad." : "Una opción delicada para acompañar tus momentos."}</p>
      </div>
    </article>`).join("");
}
renderPerfumes();
filters.forEach(btn => btn.addEventListener("click", () => {
  filters.forEach(f => f.classList.toggle("active", f === btn));
  renderPerfumes(btn.dataset.filter);
}));
menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.textContent = opened ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded","false"); menuToggle.textContent="☰";
}));

// =====================================================
// 4. ENCUESTA: NAVEGACIÓN Y PROGRESO
// =====================================================
const form = document.getElementById("quizForm");
const questions = [...document.querySelectorAll(".question")];
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resultBtn = document.getElementById("resultBtn");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");
const quizError = document.getElementById("quizError");
const resultCard = document.getElementById("resultCard");
let currentStep = 0;

function updateQuiz() {
  questions.forEach((q,i) => q.classList.toggle("active", i === currentStep));
  const pct = Math.round(((currentStep+1)/questions.length)*100);
  progressText.textContent = `Pregunta ${currentStep+1} de ${questions.length}`;
  progressPercent.textContent = `${pct}%`;
  progressBar.style.width = `${pct}%`;
  prevBtn.disabled = currentStep === 0;
  nextBtn.classList.toggle("hidden", currentStep === questions.length-1);
  resultBtn.classList.toggle("hidden", currentStep !== questions.length-1);
  quizError.textContent = "";
}
function stepAnswered() {
  const selected = questions[currentStep].querySelector('input[type="radio"]:checked');
  if (!selected) {
    quizError.textContent = "Selecciona una opción para continuar.";
    return false;
  }
  quizError.textContent = "";
  return true;
}
nextBtn.addEventListener("click", () => {
  if (!stepAnswered()) return;
  currentStep = Math.min(currentStep+1, questions.length-1);
  updateQuiz();
});
prevBtn.addEventListener("click", () => {
  currentStep = Math.max(currentStep-1, 0);
  updateQuiz();
});
// =====================================================
// 5. ENCUESTA: CÁLCULO DE LA RECOMENDACIÓN
// =====================================================
form.addEventListener("submit", event => {
  event.preventDefault();
  if (!stepAnswered()) return;
  const answers = Object.fromEntries(new FormData(form).entries());
  const pool = perfumes.filter(
    p => p.gender === answers.gender && p.intensity === answers.intensity
  );
  const scored = pool.map(p => {
    let score = 0;
    if (p.mood === answers.mood) score += 3;
    if (p.occasion === answers.occasion) score += 2;
    // Desempate estable, para que siempre se muestre una recomendación válida.
    score += (20 - perfumes.indexOf(p)) / 100;
    return {...p, score};
  }).sort((a,b) => b.score-a.score);
  const recommended = scored[0] || pool[0] || perfumes[0];
  document.getElementById("resultName").textContent = recommended.name;
  document.getElementById("resultMeta").textContent = `${recommended.gender === "mujer" ? "Colección mujer" : "Colección hombre"} · ${recommended.intensity === "fuerte" ? "Aroma fuerte" : "Aroma suave / dulce"}`;
  document.getElementById("resultBottle").innerHTML = bottleMarkup(recommended);
  const moodText = {elegancia:"elegancia",frescura:"frescura y tranquilidad",dulzura:"dulzura",sensualidad:"sensualidad"}[answers.mood];
  const occasionText = {diario:"el día a día",trabajo:"el trabajo o el estudio",especial:"una cita o un evento especial"}[answers.occasion];
  document.getElementById("resultReason").textContent = `Te recomendamos ${recommended.name} porque coincide con tu preferencia por un aroma ${recommended.intensity === "fuerte" ? "fuerte e intenso" : "suave o dulce"}. Además, elegiste transmitir ${moodText} y usarlo principalmente en ${occasionText}.`;
  form.classList.add("hidden");
  resultCard.classList.remove("hidden");
  resultCard.scrollIntoView({behavior:"smooth",block:"center"});
});
// =====================================================
// 6. REINICIAR LA ENCUESTA
// =====================================================
document.getElementById("retakeBtn").addEventListener("click", () => {
  form.reset(); currentStep = 0; updateQuiz();
  resultCard.classList.add("hidden"); form.classList.remove("hidden");
  document.getElementById("encuesta").scrollIntoView({behavior:"smooth",block:"start"});
});
updateQuiz();
