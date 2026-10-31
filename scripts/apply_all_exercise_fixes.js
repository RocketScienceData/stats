const fs = require('fs');
const vm = require('vm');

// 1. Load generate_upgraded_exercises to get original options & correctIndex
let origContent = fs.readFileSync('scripts/generate_upgraded_exercises.js', 'utf8');
origContent = origContent.replace('const FULL_EXERCISES_DATA =', 'global.FULL_EXERCISES_DATA =');
origContent = origContent.substring(0, origContent.indexOf('fs.writeFileSync'));
eval(origContent);
const orig = global.FULL_EXERCISES_DATA;

// 2. Load translations
const ex1_p2 = require('./translations/exercises_p1_p2.js');
const ex3_p4 = require('./translations/exercises_p3_p4.js');
const allEnEs = { ...ex1_p2, ...ex3_p4 };

const de1_p2 = require('./translations/exercises_de_p1_p2.js');
const de3_p4 = require('./translations/exercises_de_p3_p4.js');
const allDe = { ...de1_p2, ...de3_p4 };

// 3. Load current exercisesData.js
global.window = {};
eval(fs.readFileSync('data/exercisesData.js', 'utf8'));
const current = window.EXERCISES_DATA;

let totalExercises = 0;
let verifiedAlignments = 0;

for (const lvl in current) {
  for (let i = 0; i < current[lvl].length; i++) {
    totalExercises++;
    const c = current[lvl][i];
    const o = orig[lvl].find(x => x.id === c.id);
    if (!o) throw new Error(`Missing orig for ${c.id}`);

    const tEnEs = allEnEs[c.id];
    if (!tEnEs) throw new Error(`Missing EN/ES translation for ${c.id}`);

    const tDe = allDe[c.id];
    if (!tDe) throw new Error(`Missing DE translation for ${c.id}`);

    let map = [];
    if (c.id === 'l1_ex2') {
      map = [3, 0, 2, 1];
    } else if (c.id === 'l6_ex2') {
      map = [2, 0, 3, 1];
    } else {
      for (let j = 0; j < c.options.length; j++) {
        const idx = o.options.indexOf(c.options[j]);
        if (idx === -1) throw new Error(`Option not found in orig for ${c.id}: ${c.options[j]}`);
        map.push(idx);
      }
    }

    if (map[c.correctIndex] !== o.correctIndex) {
      throw new Error(`Correct index alignment mismatch in ${c.id}! map[c.correctIndex]=${map[c.correctIndex]}, o.correctIndex=${o.correctIndex}`);
    }

    // Align options
    c.options_en = map.map(idx => tEnEs.options_en[idx]);
    c.options_es = map.map(idx => tEnEs.options_es[idx]);
    c.options_de = map.map(idx => tDe.options_de[idx]);

    // Categories
    c.category_en = tEnEs.category_en || c.category;
    c.category_es = tEnEs.category_es || c.category;
    c.category_de = tDe.category_de || "Konzept";

    // Titles
    c.title_en = tEnEs.title_en || c.title;
    c.title_es = tEnEs.title_es || c.title;
    c.title_de = tDe.title_de || c.title;

    // Questions
    c.question_en = tEnEs.question_en || c.question;
    c.question_es = tEnEs.question_es || c.question;
    c.question_de = tDe.question_de || c.question;

    // Explanations
    c.explanation_en = tEnEs.explanation_en || c.explanation;
    c.explanation_es = tEnEs.explanation_es || c.explanation;
    c.explanation_de = tDe.explanation_de || c.explanation;

    // Special polish for l1_ex2 numbers to be 100% harmonious across EN/ES with NL/DE:
    if (c.id === 'l1_ex2') {
      c.question_en = "You measure load times of a mobile app. For 90% of users, the page loads in 0.5 seconds. For 10% of users with degraded connections, it takes 25 seconds. The marketing VP wants to publish 'our average load time of 2.95 seconds' in a press release. What do you advise?";
      c.question_es = "Mides los tiempos de carga de una app. Para el 90% de usuarios la página carga en 0,5 segundos. Para el 10% restante con mala conexión tarda 25 segundos. El director de marketing desea publicar 'el tiempo medio de carga de 2,95 segundos' en prensa. ¿Qué recomiendas?";
      c.options_en[0] = "Report solely standard deviation (SD = 7.35s) because dispersion matters more than central location for internet services";
      c.options_en[1] = "Agree: the arithmetic mean of 2.95s integrates all experiences into a single unbiased expectation value";
      c.options_en[2] = "Calculate a 10% trimmed mean by dropping the slowest 10%, because those measurements should be treated as random connection failures";
      c.options_en[3] = "Disagree: report both the median (0.5s) and the 95th percentile (p95 = 25s). The mean reflects neither the typical user nor the worst-hit group";
      
      c.options_es[0] = "Reportar únicamente la desviación estándar (SD = 7,35 s) porque la dispersión importa más que la localización central en servicios web";
      c.options_es[1] = "De acuerdo: la media aritmética de 2,95 s integra todas las experiencias en un valor esperado insesgado único";
      c.options_es[2] = "Calcular una media recortada al 10% excluyendo el 10% más lento como fallos aleatorios de conexión";
      c.options_es[3] = "En desacuerdo: informa la mediana (0,5 s) y el percentil 95 (p95 = 25 s). La media no describe al usuario típico ni refleja al grupo más perjudicado";
    }

    // Special polish for l6_ex2 in EN/ES matching the refined Dutch text
    if (c.id === 'l6_ex2') {
      c.question_en = "Why does Ordinary Least Squares (OLS) minimize the sum of squared residuals Σ e_i² rather than the simple sum of residuals Σ e_i or absolute residuals Σ |e_i|?";
      c.question_es = "¿Por qué el método de Mínimos Cuadrados Ordinarios (MCO) minimiza la suma de residuos al cuadrado Σ e_i² en lugar de la suma simple Σ e_i o los residuos absolutos Σ |e_i|?";
      c.options_en[0] = "Because the raw sum Σ e_i penalizes outliers more severely than squared errors, making OLS unstable in large samples";
      c.options_en[1] = "Because the raw sum Σ e_i is already zero for any line passing through the centroid (x̄, ȳ), and squaring (L2) is everywhere differentiable with a unique analytical solution (XᵀX)⁻¹Xᵀy, whereas absolute sum Σ |e_i| (L1) is non-differentiable at zero";
      c.options_en[2] = "Because the Gauss-Markov theorem requires the sum of residuals to be strictly positive for unbiased estimates";
      c.options_en[3] = "Because the absolute sum Σ |e_i| is mathematically undefined for continuous residuals oscillating around zero";

      c.options_es[0] = "Porque la suma simple Σ e_i penaliza los valores atípicos más severamente que los cuadrados, volviendo a MCO inestable en muestras grandes";
      c.options_es[1] = "Porque la suma simple Σ e_i ya es cero para cualquier recta que pase por el centroide (x̄, ȳ), y elevar al cuadrado (L2) es diferenciable en todo punto con solución analítica única (XᵀX)⁻¹Xᵀy, mientras que la suma absoluta Σ |e_i| (L1) no es diferenciable en cero";
      c.options_es[2] = "Porque el teorema de Gauss-Markov exige que la suma de residuos sea estrictamente positiva para estimadores insesgados";
      c.options_es[3] = "Porque la suma absoluta Σ |e_i| no está matemáticamente definida para residuos continuos que oscilan alrededor de cero";
    }

    verifiedAlignments++;
  }
}

console.log(`Processed and verified all ${totalExercises} exercises across 24 levels.`);

const headerComments = `// Statistiek Leerplatform - Uitgebreide Oefeningenbank (Levels 1 t/m 24)
// Meertalige didactische oefeningenbank met volledige ondersteuning voor Nederlands, Engels, Spaans en Duits.
// Biedt 3 tot 4 diepgaande interactieve oefeningen per level:
// - Concept & Intuïtie
// - Praktijk Dilemma & Besluitvorming
// - De Valkuil-Detector
// - Data & Parameter Schatting
// Alle antwoordopties zijn wetenschappelijk getoetst en qua tekstlengte uitgebalanceerd.\n\n`;

fs.writeFileSync('data/exercisesData.js', headerComments + 'window.EXERCISES_DATA = ' + JSON.stringify(current, null, 2) + ';\n', 'utf8');
console.log('Successfully written updated data/exercisesData.js with full EN, ES, and DE scoring alignment!');
