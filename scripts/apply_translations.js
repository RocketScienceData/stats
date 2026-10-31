const fs = require('fs');

const l1_p2 = require('./translations/levels_p1_p2.js');
const l3_p4 = require('./translations/levels_p3_p4.js');
const allLevels = { ...l1_p2, ...l3_p4 };

const ex1_p2 = require('./translations/exercises_p1_p2.js');
const ex3_p4 = require('./translations/exercises_p3_p4.js');
const allExercises = { ...ex1_p2, ...ex3_p4 };

// 1. Update data/levelsData.js
console.log('Updating data/levelsData.js...');
const levelsPath = 'data/levelsData.js';
let levelsContent = fs.readFileSync(levelsPath, 'utf8');

const sandbox = { window: {} };
require('vm').runInNewContext(levelsContent, sandbox);
const currentLevels = sandbox.window.LEVELS_DATA;

currentLevels.forEach(lvl => {
  const trans = allLevels[lvl.id];
  if (trans) {
    lvl.case_en = trans.case_en;
    lvl.case_es = trans.case_es;
    lvl.theory_en = trans.theory_en;
    lvl.theory_es = trans.theory_es;
    lvl.simulation_en = trans.simulation_en;
    lvl.simulation_es = trans.simulation_es;
    lvl.interpretation_en = trans.interpretation_en;
    lvl.interpretation_es = trans.interpretation_es;
    lvl.quiz_en = trans.quiz_en;
    lvl.quiz_es = trans.quiz_es;
  }
});

// Write updated window.LEVELS_DATA back preserving ADAPTIVE_ASSESSMENT
const assessPart = levelsContent.substring(0, levelsContent.indexOf('window.LEVELS_DATA = ['));
const newLevelsCode = assessPart + 'window.LEVELS_DATA = ' + JSON.stringify(currentLevels, null, 2) + ';\n';
fs.writeFileSync(levelsPath, newLevelsCode, 'utf8');
console.log('data/levelsData.js updated successfully!');

// 2. Update data/exercisesData.js
console.log('Updating data/exercisesData.js...');
const exercisesPath = 'data/exercisesData.js';
let exercisesContent = fs.readFileSync(exercisesPath, 'utf8');

const exSandbox = { window: {} };
require('vm').runInNewContext(exercisesContent, exSandbox);
const currentExercises = exSandbox.window.EXERCISES_DATA;

Object.keys(currentExercises).forEach(lvlId => {
  currentExercises[lvlId].forEach(ex => {
    const trans = allExercises[ex.id];
    if (trans) {
      ex.category_en = trans.category_en;
      ex.category_es = trans.category_es;
      ex.title_en = trans.title_en;
      ex.title_es = trans.title_es;
      ex.question_en = trans.question_en;
      ex.question_es = trans.question_es;
      ex.options_en = trans.options_en;
      ex.options_es = trans.options_es;
      ex.explanation_en = trans.explanation_en;
      ex.explanation_es = trans.explanation_es;
    }
  });
});

const headerComments = `// Statistiek Leerplatform - Uitgebreide Oefeningenbank (Levels 1 t/m 24)
// Meertalige didactische oefeningenbank met volledige ondersteuning voor Nederlands, Engels en Spaans.
// Biedt 3 tot 4 diepgaande interactieve oefeningen per level:
// - Concept & Intuïtie
// - Praktijk Dilemma & Besluitvorming
// - De Valkuil-Detector
// - Data & Parameter Schatting
// Alle antwoordopties zijn wetenschappelijk getoetst en qua tekstlengte uitgebalanceerd.\n\n`;

fs.writeFileSync(exercisesPath, headerComments + 'window.EXERCISES_DATA = ' + JSON.stringify(currentExercises, null, 2) + ';\n', 'utf8');
console.log('data/exercisesData.js updated successfully!');
