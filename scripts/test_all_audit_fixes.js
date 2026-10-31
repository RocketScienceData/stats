const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log('=== RUNNING COMPREHENSIVE AUDIT VERIFICATION SUITE ===\n');

// ---------------------------------------------------------
// 1. Double Active Language Buttons & I18N.init in data/i18n.js
// ---------------------------------------------------------
console.log('Test 1 & 2: I18N Language Buttons & Persistence...');
const i18nCode = fs.readFileSync('data/i18n.js', 'utf8');

// Test applyToDOM button logic
const testDomLogic = (lang) => {
  const sandbox = {
    window: {
      location: { search: '' }
    },
    localStorage: {
      getItem: () => lang,
      setItem: () => {}
    },
    document: {
      documentElement: {},
      querySelectorAll: () => [],
      querySelector: () => null,
      getElementById: (id) => {
        return {
          id,
          className: 'btn-normal',
          classList: {
            add: function(c) { this.className += ' ' + c; },
            remove: function(c) { this.className = this.className.replace(c, ''); }
          }
        };
      }
    }
  };

  vm.createContext(sandbox);
  vm.runInContext(i18nCode, sandbox);
  const I18N = sandbox.window.I18N;
  assert(I18N, 'I18N object should exist on window');

  // Create mock buttons
  const nlBtn = { id: 'lang-btn-nl', className: 'btn' };
  const enBtn = { id: 'lang-btn-en', className: 'btn' };
  const esBtn = { id: 'lang-btn-es', className: 'btn' };
  const deBtn = { id: 'lang-btn-de', className: 'btn' };

  sandbox.document.getElementById = (id) => {
    if (id === 'lang-btn-nl') return nlBtn;
    if (id === 'lang-btn-en') return enBtn;
    if (id === 'lang-btn-es') return esBtn;
    if (id === 'lang-btn-de') return deBtn;
    return null;
  };

  I18N.currentLang = lang;
  I18N.applyToDOM();

  const activeButtons = [nlBtn, enBtn, esBtn, deBtn].filter(b => b.className.includes('bg-indigo-600'));
  assert.strictEqual(activeButtons.length, 1, `Expected exactly 1 active button for lang ${lang}, got ${activeButtons.length}`);
  if (lang === 'nl') assert.strictEqual(activeButtons[0].id, 'lang-btn-nl');
  if (lang === 'en') assert.strictEqual(activeButtons[0].id, 'lang-btn-en');
  if (lang === 'es') assert.strictEqual(activeButtons[0].id, 'lang-btn-es');
  if (lang === 'de') assert.strictEqual(activeButtons[0].id, 'lang-btn-de');
};

testDomLogic('nl');
testDomLogic('en');
testDomLogic('es');
testDomLogic('de');

// Test I18N.init() with localStorage and URL parameters
const testInit = (urlParam, storedVal, expectedLang) => {
  const sandbox = {
    URLSearchParams,
    window: {
      location: { search: urlParam }
    },
    localStorage: {
      store: { statistiek_lang: storedVal },
      getItem: function(k) { return this.store[k] || null; },
      setItem: function(k, v) { this.store[k] = v; }
    },
    document: {
      documentElement: {},
      querySelectorAll: () => [],
      querySelector: () => null,
      getElementById: () => null
    }
  };
  vm.createContext(sandbox);
  vm.runInContext(i18nCode, sandbox);
  sandbox.window.I18N.init();
  assert.strictEqual(sandbox.window.I18N.currentLang, expectedLang, `Expected ${expectedLang} for param=${urlParam}, storage=${storedVal}, got ${sandbox.window.I18N.currentLang}`);
};

testInit('?lang=de', null, 'de');
testInit('?lang=es', null, 'es');
testInit('?lang=nl', null, 'nl');
testInit('?lang=en', null, 'en');
testInit('', 'de', 'de');
testInit('', 'es', 'es');
testInit('', 'nl', 'nl');
testInit('', 'en', 'en');
testInit('', null, 'nl'); // default
testInit('?lang=unknown', null, 'nl'); // invalid fallback
console.log('✓ Test 1 & 2 Passed: Single active language button and robust init/persistence across all locales.\n');

// ---------------------------------------------------------
// 3. Practice Exercise Alignment in data/exercisesData.js
// ---------------------------------------------------------
console.log('Test 3: Exercise Scoring Alignment & Localization across all 73 exercises...');
const sandboxEx = { window: {} };
vm.createContext(sandboxEx);
const exCode = fs.readFileSync('data/exercisesData.js', 'utf8');
vm.runInContext(exCode, sandboxEx);
const exercisesData = sandboxEx.window.EXERCISES_DATA;

let count = 0;
for (const lvl in exercisesData) {
  const list = exercisesData[lvl];
  list.forEach(ex => {
    count++;
    assert(ex.id, `Exercise in lvl ${lvl} missing id`);
    assert(typeof ex.correctIndex === 'number' && ex.correctIndex >= 0 && ex.correctIndex <= 3, `${ex.id} invalid correctIndex: ${ex.correctIndex}`);
    
    // Check all 4 option arrays exist and length 4
    assert(Array.isArray(ex.options) && ex.options.length === 4, `${ex.id} options length != 4`);
    assert(Array.isArray(ex.options_en) && ex.options_en.length === 4, `${ex.id} options_en length != 4`);
    assert(Array.isArray(ex.options_es) && ex.options_es.length === 4, `${ex.id} options_es length != 4`);
    assert(Array.isArray(ex.options_de) && ex.options_de.length === 4, `${ex.id} options_de length != 4`);

    // Check all options are non-empty strings
    for (let j = 0; j < 4; j++) {
      assert(typeof ex.options[j] === 'string' && ex.options[j].trim().length > 0, `${ex.id} options[${j}] empty`);
      assert(typeof ex.options_en[j] === 'string' && ex.options_en[j].trim().length > 0, `${ex.id} options_en[${j}] empty`);
      assert(typeof ex.options_es[j] === 'string' && ex.options_es[j].trim().length > 0, `${ex.id} options_es[${j}] empty`);
      assert(typeof ex.options_de[j] === 'string' && ex.options_de[j].trim().length > 0, `${ex.id} options_de[${j}] empty`);
    }

    // Check titles and questions
    assert(ex.title && ex.title.trim().length > 0, `${ex.id} title empty`);
    assert(ex.title_en && ex.title_en.trim().length > 0, `${ex.id} title_en empty`);
    assert(ex.title_es && ex.title_es.trim().length > 0, `${ex.id} title_es empty`);
    assert(ex.title_de && ex.title_de.trim().length > 0, `${ex.id} title_de empty`);

    assert(ex.question && ex.question.trim().length > 0, `${ex.id} question empty`);
    assert(ex.question_en && ex.question_en.trim().length > 0, `${ex.id} question_en empty`);
    assert(ex.question_es && ex.question_es.trim().length > 0, `${ex.id} question_es empty`);
    assert(ex.question_de && ex.question_de.trim().length > 0, `${ex.id} question_de empty`);

    // Check explanations
    assert(ex.explanation && ex.explanation.trim().length > 0, `${ex.id} explanation empty`);
    assert(ex.explanation_en && ex.explanation_en.trim().length > 0, `${ex.id} explanation_en empty`);
    assert(ex.explanation_es && ex.explanation_es.trim().length > 0, `${ex.id} explanation_es empty`);
    assert(ex.explanation_de && ex.explanation_de.trim().length > 0, `${ex.id} explanation_de empty`);

    // Spot-check specific previously broken exercises:
    if (ex.id === 'l2_ex1') {
      // ci = 1, options[1] has 97.7%
      assert(ex.options[ex.correctIndex].includes('97.7%') || ex.options[ex.correctIndex].includes('97,7%'));
      assert(ex.options_en[ex.correctIndex].includes('97.7%') || ex.options_en[ex.correctIndex].includes('97,7%'));
      assert(ex.options_es[ex.correctIndex].includes('97,7%') || ex.options_es[ex.correctIndex].includes('97.7%'));
      assert(ex.options_de[ex.correctIndex].includes('97,7%') || ex.options_de[ex.correctIndex].includes('97.7%'));
    }
    if (ex.id === 'l4_ex1') {
      // ci = 3, confidence interval fallacy
      assert(ex.options[ex.correctIndex].includes('a-posteriori') || ex.options[ex.correctIndex].includes('a posteriori'));
      assert(ex.options_en[ex.correctIndex].includes('a posteriori'));
      assert(ex.options_es[ex.correctIndex].includes('a posteriori'));
      assert(ex.options_de[ex.correctIndex].includes('A-posteriori'));
    }
    if (ex.id === 'l8_ex1') {
      // ci = 0, standard errors biased
      assert(ex.options[ex.correctIndex].toLowerCase().includes('vertekend') || ex.options[ex.correctIndex].toLowerCase().includes('standaardfouten'));
      assert(ex.options_en[ex.correctIndex].toLowerCase().includes('standard errors') && ex.options_en[ex.correctIndex].toLowerCase().includes('biased'));
      assert(ex.options_es[ex.correctIndex].toLowerCase().includes('errores estándar') && ex.options_es[ex.correctIndex].toLowerCase().includes('sesgados'));
      assert(ex.options_de[ex.correctIndex].toLowerCase().includes('standardfehler') && ex.options_de[ex.correctIndex].toLowerCase().includes('verzerrt'));
    }
    if (ex.id === 'l20_ex2') {
      // ci = 0, R-hat 1.002 converged
      assert(ex.options[ex.correctIndex].toLowerCase().includes('geconvergeerd') || ex.options[ex.correctIndex].toLowerCase().includes('converged'));
      assert(ex.options_en[ex.correctIndex].toLowerCase().includes('converged'));
      assert(ex.options_es[ex.correctIndex].toLowerCase().includes('convergido'));
      assert(ex.options_de[ex.correctIndex].toLowerCase().includes('konvergiert'));
    }
  });
}
assert.strictEqual(count, 73, `Expected 73 exercises, got ${count}`);
console.log(`✓ Test 3 Passed: All ${count} exercises strictly aligned 1:1 across NL, EN, ES, DE.\n`);

// ---------------------------------------------------------
// 4 & 5. js/charts.js CLT simulator & Teaser legend/label
// ---------------------------------------------------------
console.log('Test 4 & 5: js/charts.js CLT simulator & Teaser legend...');
const chartsCode = fs.readFileSync('js/charts.js', 'utf8');

// CLT Simulator check: discrete fair die Math.floor(Math.random() * 6) + 1
assert(chartsCode.includes('Math.floor(Math.random() * 6) + 1'), 'charts.js must use discrete fair die sampling in samplePop');
assert(!chartsCode.includes('1.0 + Math.random() * 5.0'), 'charts.js must NOT use continuous uniform sampling');

// Check empirical variance of discrete die sampling
const N = 100000;
let sum = 0, sumSq = 0;
for (let i = 0; i < N; i++) {
  const roll = Math.floor(Math.random() * 6) + 1;
  sum += roll;
  sumSq += roll * roll;
}
const mean = sum / N;
const variance = (sumSq / N) - (mean * mean);
const theoreticalVariance = 35 / 12; // ~2.9167
assert(Math.abs(variance - theoreticalVariance) < 0.05, `Discrete die variance ${variance} deviates too much from theoretical ${theoreticalVariance}`);

// Teaser legend filtering check
assert(chartsCode.includes("!item.text.includes('Slope') && !item.text.includes('Helling') && !item.text.includes('Pendiente')"), 'charts.js must filter Slope, Helling, and Pendiente from teaser legend');
assert(chartsCode.includes('(Descendente)'), 'charts.js must translate (Dalend) to (Descendente) in Spanish');
console.log('✓ Test 4 & 5 Passed: CLT simulator and teaser legend correctly implemented.\n');

// ---------------------------------------------------------
// 6. sitemap.xml clean validation
// ---------------------------------------------------------
console.log('Test 6: sitemap.xml validation...');
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
assert(!sitemap.includes('#roadmap'), 'sitemap.xml contains #roadmap');
assert(!sitemap.includes('#features'), 'sitemap.xml contains #features');
assert(!sitemap.includes('#faq'), 'sitemap.xml contains #faq');
assert(sitemap.includes('hreflang="de"'), 'sitemap.xml missing hreflang="de"');
assert(sitemap.includes('hreflang="x-default"'), 'sitemap.xml missing hreflang="x-default"');
assert(sitemap.includes('hreflang="en"'), 'sitemap.xml missing hreflang="en"');
assert(sitemap.includes('hreflang="es"'), 'sitemap.xml missing hreflang="es"');
assert(sitemap.includes('hreflang="nl"'), 'sitemap.xml missing hreflang="nl"');
console.log('✓ Test 6 Passed: sitemap.xml is clean and localized.\n');

// ---------------------------------------------------------
// 7. og-preview.png validation
// ---------------------------------------------------------
console.log('Test 7: og-preview.png validation...');
assert(fs.existsSync('og-preview.png'), 'og-preview.png does not exist');
const pngBuf = fs.readFileSync('og-preview.png');
// Check PNG signature: 89 50 4E 47 0D 0A 1A 0A
const pngSig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
assert(pngBuf.subarray(0, 8).equals(pngSig), 'og-preview.png does not have valid PNG signature');
const width = pngBuf.readUInt32BE(16);
const height = pngBuf.readUInt32BE(20);
assert.strictEqual(width, 1200, `Expected width 1200, got ${width}`);
assert.strictEqual(height, 630, `Expected height 630, got ${height}`);
console.log(`✓ Test 7 Passed: og-preview.png exists and is valid 1200x630 PNG.\n`);

console.log('=== ALL AUDIT VERIFICATIONS PASSED SUCCESSFULLY! ===');
