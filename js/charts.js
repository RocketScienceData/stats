// Statistiek Leerplatform - Interactieve Simulaties & Chart.js Engine
// Biedt interactieve visualisaties voor alle 24 levels, inclusief het Ultieme Apex (Level 24)

window.StatCharts = (function() {
  let currentChart = null;
  let secondaryChart = null;
  let animationFrameId = null;

  function destroyCharts() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    if (currentChart) {
      currentChart.destroy();
      currentChart = null;
    }
    if (secondaryChart) {
      secondaryChart.destroy();
      secondaryChart = null;
    }
  }

  // =========================================================================
  // LEVELS 1 t/m 15: DE BASIS TOT SWEET SPOT
  // =========================================================================

  // Level 1: Outlier Simulator
  function renderLevel1(container, levelData) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <label class="text-sm font-semibold text-slate-300">Salaris CEO (Uitschieter):</label>
            <span id="l1-outlier-val" class="ml-2 font-mono text-emerald-400 font-bold text-lg">€ 48.000</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-400">€ 3.000</span>
            <input id="l1-slider" type="range" min="3000" max="80000" step="1000" value="48000" class="w-48 sm:w-64 accent-emerald-500 cursor-pointer">
            <span class="text-xs text-slate-400">€ 80.000</span>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-center">
          <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div class="text-xs text-slate-400 font-medium">Gemiddelde (Mean)</div>
            <div id="l1-mean-display" class="text-lg font-bold text-rose-400 font-mono mt-1">€ 7.700</div>
            <div class="text-[10px] text-rose-300/80">Gevoelig voor outlier!</div>
          </div>
          <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div class="text-xs text-slate-400 font-medium">Mediaan (Median)</div>
            <div id="l1-median-display" class="text-lg font-bold text-emerald-400 font-mono mt-1">€ 3.100</div>
            <div class="text-[10px] text-emerald-300/80">Robuust tegen outlier</div>
          </div>
          <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div class="text-xs text-slate-400 font-medium">Standaardafwijking (SD)</div>
            <div id="l1-sd-display" class="text-lg font-bold text-amber-400 font-mono mt-1">€ 14.168</div>
            <div class="text-[10px] text-amber-300/80">Opgeblazen spreiding</div>
          </div>
          <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div class="text-xs text-slate-400 font-medium">Interkwartiel (IQR)</div>
            <div id="l1-iqr-display" class="text-lg font-bold text-sky-400 font-mono mt-1">€ 350</div>
            <div class="text-[10px] text-sky-300/80">Zuivere midden-50%</div>
          </div>
        </div>

        <div class="relative h-64 sm:h-72 w-full">
          <canvas id="l1-canvas"></canvas>
        </div>
      </div>
    `;

    const baseSalaries = [2800, 2900, 3000, 3000, 3100, 3100, 3200, 3400, 4500];
    const names = ["Anna", "Bram", "Claire", "Daan", "Eva", "Frank", "Gijs", "Hanna", "Ivo", "Jeroen (CEO)"];

    function computeStats(salaries) {
      const n = salaries.length;
      const sum = salaries.reduce((a, b) => a + b, 0);
      const mean = Math.round(sum / n);
      const sorted = [...salaries].sort((a, b) => a - b);
      const median = (sorted[4] + sorted[5]) / 2;
      const variance = salaries.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (n - 1);
      const sd = Math.round(Math.sqrt(variance));
      const iqr = sorted[7] - sorted[2];
      return { mean, median, sd, iqr };
    }

    const ctx = document.getElementById("l1-canvas").getContext("2d");
    const slider = document.getElementById("l1-slider");

    function update() {
      const ceoSalary = parseInt(slider.value, 10);
      const allSalaries = [...baseSalaries, ceoSalary];
      const stats = computeStats(allSalaries);

      document.getElementById("l1-outlier-val").innerText = `€ ${ceoSalary.toLocaleString('nl-NL')}`;
      document.getElementById("l1-mean-display").innerText = `€ ${stats.mean.toLocaleString('nl-NL')}`;
      document.getElementById("l1-median-display").innerText = `€ ${stats.median.toLocaleString('nl-NL')}`;
      document.getElementById("l1-sd-display").innerText = `€ ${stats.sd.toLocaleString('nl-NL')}`;
      document.getElementById("l1-iqr-display").innerText = `€ ${stats.iqr.toLocaleString('nl-NL')}`;

      if (currentChart) {
        currentChart.data.datasets[0].data = allSalaries;
        currentChart.data.datasets[1].data = allSalaries.map(() => stats.mean);
        currentChart.data.datasets[2].data = allSalaries.map(() => stats.median);
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: names,
            datasets: [
              {
                label: "Salaris (€)",
                data: allSalaries,
                backgroundColor: allSalaries.map((_, i) => i === 9 ? 'rgba(239, 68, 68, 0.75)' : 'rgba(14, 165, 233, 0.7)'),
                borderRadius: 4
              },
              {
                label: "Gemiddelde",
                type: "line",
                data: allSalaries.map(() => stats.mean),
                borderColor: '#f43f5e',
                borderDash: [6, 4],
                pointRadius: 0
              },
              {
                label: "Mediaan",
                type: "line",
                data: allSalaries.map(() => stats.median),
                borderColor: '#10b981',
                borderWidth: 2.5,
                pointRadius: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { ticks: { color: '#94a3b8' } },
              y: { ticks: { color: '#94a3b8', callback: v => '€ ' + (v / 1000) + 'k' }, grid: { color: 'rgba(255,255,255,0.06)' } }
            }
          }
        });
      }
    }

    slider.addEventListener("input", update);
    update();
  }

  // Level 2: Normale verdeling
  function renderLevel2(container, levelData) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="text-xs text-slate-400 block mb-1">Standaardafwijking (σ): <span id="l2-sigma-val" class="font-bold text-amber-400">2.0 mmHg</span></label>
            <input id="l2-sigma-slider" type="range" min="1" max="5" step="0.5" value="2" class="w-full accent-amber-500 cursor-pointer">
          </div>
          <div>
            <label class="text-xs text-slate-400 block mb-1">Afkeurgrens (X): <span id="l2-cutoff-val" class="font-bold text-rose-400">124 mmHg</span></label>
            <input id="l2-cutoff-slider" type="range" min="115" max="130" step="0.5" value="124" class="w-full accent-rose-500 cursor-pointer">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3 mb-4 text-center">
          <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
            <div class="text-[11px] text-slate-400">Berekende Z-score</div>
            <div id="l2-z-display" class="text-base font-bold text-rose-400 font-mono">Z = +2.00</div>
          </div>
          <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
            <div class="text-[11px] text-slate-400">Kans boven grens P(X > x)</div>
            <div id="l2-tail-display" class="text-base font-bold text-amber-400 font-mono">2.28%</div>
          </div>
          <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
            <div class="text-[11px] text-slate-400">Binnen ± 2 SD</div>
            <div class="text-base font-bold text-emerald-400 font-mono">95.45%</div>
          </div>
        </div>

        <div class="relative h-64 sm:h-72 w-full">
          <canvas id="l2-canvas"></canvas>
        </div>
      </div>
    `;

    function normalPdf(x, mu, sigma) {
      return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
    }

    const ctx = document.getElementById("l2-canvas").getContext("2d");
    const sigmaSlider = document.getElementById("l2-sigma-slider");
    const cutoffSlider = document.getElementById("l2-cutoff-slider");

    function update() {
      const mu = 120;
      const sigma = parseFloat(sigmaSlider.value);
      const cutoff = parseFloat(cutoffSlider.value);

      document.getElementById("l2-sigma-val").innerText = `${sigma.toFixed(1)} mmHg`;
      document.getElementById("l2-cutoff-val").innerText = `${cutoff.toFixed(1)} mmHg`;

      const z = (cutoff - mu) / sigma;
      document.getElementById("l2-z-display").innerText = `Z = ${z >= 0 ? '+' : ''}${z.toFixed(2)}`;

      const points = 100;
      const labels = [];
      const curveData = [];
      const rejectedData = [];

      for (let i = 0; i <= points; i++) {
        const x = 110 + (i / points) * 20;
        labels.push(x.toFixed(1));
        const y = normalPdf(x, mu, sigma);
        curveData.push(y);
        rejectedData.push(x >= cutoff ? y : null);
      }

      if (currentChart) {
        currentChart.data.labels = labels;
        currentChart.data.datasets[0].data = curveData;
        currentChart.data.datasets[1].data = rejectedData;
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "line",
          data: {
            labels,
            datasets: [
              { label: "Normale Curve N(120, σ²)", data: curveData, borderColor: '#38bdf8', fill: true, backgroundColor: 'rgba(56,189,248,0.1)', pointRadius: 0 },
              { label: "Afgekeurd Gebied", data: rejectedData, borderColor: '#f43f5e', fill: true, backgroundColor: 'rgba(244,63,94,0.4)', pointRadius: 0 }
            ]
          },
          options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { display: false } } }
        });
      }
    }

    sigmaSlider.addEventListener("input", update);
    cutoffSlider.addEventListener("input", update);
    update();
  }

  // Levels 3-15 behouden de geteste implementaties
  function renderLevel3(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-emerald-400 mb-2">CLT Simulator</h3><p class="text-xs text-slate-300">Zie hoe de som van willekeurige variabelen transformeert naar een Gauss-curve bij N ≥ 30.</p><div class="relative h-60 mt-3"><canvas id="l3-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l3-canvas").getContext("2d");
    const counts = [2, 6, 15, 35, 78, 140, 210, 245, 205, 138, 72, 33, 12, 3];
    currentChart = new Chart(ctx, {
      type: "bar",
      data: { labels: counts.map((_, i) => `${i + 1}`), datasets: [{ label: "Gemiddelden N=35", data: counts, backgroundColor: '#10b981' }] },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  function renderLevel4(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-sky-400 mb-2">95% Betrouwbaarheidsinterval Visualizer</h3><p class="text-xs text-slate-300">95 van de 100 intervallen omvatten de werkelijke populatiewaarde μ (groen); 5 missen de waarheid (rood).</p><div class="relative h-60 mt-3"><canvas id="l4-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l4-canvas").getContext("2d");
    const pts = Array.from({ length: 30 }, (_, i) => ({ x: 74 + (Math.random() - 0.5) * 3, y: i + 1 }));
    currentChart = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          { label: "Steekproef Intervallen", data: pts, backgroundColor: pts.map(p => Math.abs(p.x - 75) < 2 ? '#10b981' : '#f43f5e'), pointRadius: 4 },
          { label: "Populatiewaarde μ = 75", data: [{ x: 75, y: 0 }, { x: 75, y: 31 }], type: "line", borderColor: '#38bdf8', borderDash: [5, 5], pointRadius: 0 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { min: 70, max: 80, ticks: { color: '#94a3b8' } }, y: { display: false } } }
    });
  }

  function renderLevel5(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-emerald-400 mb-2">T-toets & Effectgrootte (Cohen's d)</h3><p class="text-xs text-slate-300">Statistische p-waarde (0.018) versus substantiële fysiologische winst (+36 min slaap).</p><div class="relative h-60 mt-3"><canvas id="l5-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l5-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: 40 }, (_, i) => (3 + i * 0.2).toFixed(1)),
        datasets: [
          { label: "Placebo (5.8u)", data: Array.from({ length: 40 }, (_, i) => Math.exp(-0.5 * Math.pow((3 + i * 0.2 - 5.8) / 1.1, 2))), borderColor: '#94a3b8', pointRadius: 0 },
          { label: "SomnoCalm (6.4u)", data: Array.from({ length: 40 }, (_, i) => Math.exp(-0.5 * Math.pow((3 + i * 0.2 - 6.4) / 1.05, 2))), borderColor: '#10b981', pointRadius: 0 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { display: false } } }
    });
  }

  function renderLevel6(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-sky-400 mb-2">OLS Kleinste Kwadraten Lijn</h3><p class="text-xs text-slate-300">Ŷ = 2.75 + 0.18 · Studie-uren. Minimaliseert verticale residuen.</p><div class="relative h-60 mt-3"><canvas id="l6-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l6-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          { label: "Studenten", data: [{ x: 10, y: 4.5 }, { x: 15, y: 5.5 }, { x: 20, y: 6.5 }, { x: 25, y: 7.0 }, { x: 30, y: 8.5 }, { x: 35, y: 9.0 }], backgroundColor: '#38bdf8', pointRadius: 6 },
          { label: "OLS Lijn", data: [{ x: 5, y: 3.65 }, { x: 40, y: 9.95 }], type: "line", borderColor: '#10b981', borderWidth: 2.5, pointRadius: 0 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  function renderLevel7(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-amber-400 mb-2">R² vs Gecorrigeerde R² bij Ruis</h3><p class="text-xs text-slate-300">Gewone R² stijgt door toeval; Adjusted R² daalt en beschermt tegen overfitting.</p><div class="relative h-60 mt-3"><canvas id="l7-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l7-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ['k=1', 'k=2', 'k=3 (+ruis)', 'k=4 (+ruis)', 'k=5 (+ruis)'],
        datasets: [
          { label: "Gewone R²", data: [0.65, 0.72, 0.728, 0.732, 0.735], borderColor: '#38bdf8' },
          { label: "Adjusted R²", data: [0.643, 0.708, 0.702, 0.695, 0.690], borderColor: '#10b981' }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { min: 0.6, max: 0.8, ticks: { color: '#94a3b8' } } } }
    });
  }

  function renderLevel8(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-rose-400 mb-2">Residuendiagnostiek: Heteroscedasticiteit (Trompet)</h3><p class="text-xs text-slate-300">Uitwaaierende spreiding leidt tot vertekende standaardfouten.</p><div class="relative h-60 mt-3"><canvas id="l8-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l8-canvas").getContext("2d");
    const pts = Array.from({ length: 40 }, (_, i) => {
      const fitted = 10 + i;
      const res = (Math.random() - 0.5) * (fitted / 3);
      return { x: fitted, y: res };
    });
    currentChart = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          { label: "Residuen", data: pts, backgroundColor: '#f43f5e', pointRadius: 4 },
          { label: "Nullijn", data: [{ x: 10, y: 0 }, { x: 50, y: 0 }], type: "line", borderColor: '#94a3b8', borderDash: [5, 5], pointRadius: 0 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  function renderLevel9(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-sky-400 mb-2">Simpson's Paradox (Sport vs Cholesterol)</h3><p class="text-xs text-slate-300">Geaggregeerd stijgend (rood, vertekend) vs binnen leeftijdsgroepen dalend (blauw/geel, gezond).</p><div class="relative h-60 mt-3"><canvas id="l9-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l9-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          { label: "Jongeren (β = -0.26)", data: [{ x: 2, y: 5.2 }, { x: 4, y: 4.4 }, { x: 6, y: 3.7 }], backgroundColor: '#38bdf8' },
          { label: "Senioren (β = -0.28)", data: [{ x: 6, y: 7.2 }, { x: 8, y: 6.5 }, { x: 10, y: 5.6 }], backgroundColor: '#fbbf24' },
          { label: "Geaggregeerd Trend (+0.32)", data: [{ x: 2, y: 4.3 }, { x: 10, y: 6.7 }], type: "line", borderColor: '#f43f5e', borderDash: [6, 4], pointRadius: 0 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  function renderLevel10(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-rose-400 mb-2">Multicollineariteit & VIF Explodeerder</h3><p class="text-xs text-slate-300">Als r = 0.99 tussen linker- en rechterbeen, blaast de SE op met VIF = 50.2.</p><div class="relative h-60 mt-3"><canvas id="l10-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l10-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ['r=0.0', 'r=0.5', 'r=0.8', 'r=0.9', 'r=0.95', 'r=0.99'],
        datasets: [{ label: "VIF Score (1 / (1 - r²))", data: [1.0, 1.33, 2.78, 5.26, 10.25, 50.25], borderColor: '#f43f5e', backgroundColor: 'rgba(244,63,94,0.15)', fill: true }]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  function renderLevel11(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-emerald-400 mb-2">Logistische S-curve (Kans op Heropname)</h3><p class="text-xs text-slate-300">p = 1 / (1 + e^-z). Odds Ratio = 2.51 per risicofactor.</p><div class="relative h-60 mt-3"><canvas id="l11-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l11-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: 30 }, (_, i) => 40 + i * 1.5),
        datasets: [{ label: "Voorspelde Kans p", data: Array.from({ length: 30 }, (_, i) => 1 / (1 + Math.exp(-(-4.5 + 0.08 * (40 + i * 1.5))))), borderColor: '#10b981', borderWidth: 3, pointRadius: 0 }]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { min: 0, max: 1, ticks: { color: '#94a3b8', callback: v => (v * 100) + '%' } } } }
    });
  }

  function renderLevel12(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-sky-400 mb-2">Ridge vs Lasso Coëfficiënten Krimp</h3><p class="text-xs text-slate-300">Lasso zet irrelevante variabelen exact op 0 (spaarzaam); Ridge krimpt gelijkmatig.</p><div class="relative h-60 mt-3"><canvas id="l12-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l12-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ['Klachten', 'Contractduur', 'Dataverbruik', 'Leeftijd', 'Ruis 1', 'Ruis 2'],
        datasets: [{ label: "Lasso Coëfficiënten", data: [0.72, -0.55, 0.32, 0.0, 0.0, 0.0], backgroundColor: '#10b981' }]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  function renderLevel13(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-amber-400 mb-2">Geclusterde Data & Intraclass Correlatie (ICC)</h3><p class="text-xs text-slate-300">Scholen verschillen onderling (ICC = 0.28). Pooled OLS faalt met schijnprecisie.</p><div class="relative h-60 mt-3"><canvas id="l13-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l13-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          { label: "School A", data: [{ x: 5, y: 7.5 }, { x: 8, y: 8.2 }, { x: 12, y: 9.1 }], backgroundColor: '#38bdf8' },
          { label: "School B", data: [{ x: 5, y: 6.0 }, { x: 8, y: 6.7 }, { x: 12, y: 7.4 }], backgroundColor: '#fbbf24' },
          { label: "School C", data: [{ x: 5, y: 4.8 }, { x: 8, y: 5.3 }, { x: 12, y: 6.0 }], backgroundColor: '#f43f5e' }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  function renderLevel14(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-indigo-400 mb-2">Linear Mixed Models I: Random Intercepts</h3><p class="text-xs text-slate-300">Parallelle regressielijnen per school met Empirical Bayes Shrinkage.</p><div class="relative h-60 mt-3"><canvas id="l14-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l14-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          { label: "School A (7.4)", data: [{ x: 0, y: 7.4 }, { x: 10, y: 7.4 + 4.0 }], borderColor: '#38bdf8', pointRadius: 0 },
          { label: "School B (6.2)", data: [{ x: 0, y: 6.2 }, { x: 10, y: 6.2 + 4.0 }], borderColor: '#fbbf24', pointRadius: 0 },
          { label: "School C (4.9)", data: [{ x: 0, y: 4.9 }, { x: 10, y: 4.9 + 4.0 }], borderColor: '#f43f5e', pointRadius: 0 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { min: 4, max: 12, ticks: { color: '#94a3b8' } } } }
    });
  }

  function renderLevel15(container) {
    container.innerHTML = `<div class="p-4 bg-slate-900/60 rounded-xl text-center"><h3 class="text-sm font-bold text-emerald-400 mb-2">Linear Mixed Models II: Random Slopes & Herhaalde Metingen</h3><p class="text-xs text-slate-300">De Praktische Sweet Spot: individuele herstelsnelheden per patiënt over 6 maanden.</p><div class="relative h-60 mt-3"><canvas id="l15-canvas"></canvas></div></div>`;
    const ctx = document.getElementById("l15-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          { label: "Patiënt 1 (Snel: +7.8/mnd)", data: [{ x: 0, y: 35 }, { x: 6, y: 82 }], borderColor: '#10b981', pointRadius: 3 },
          { label: "Patiënt 2 (Traag: +1.9/mnd)", data: [{ x: 0, y: 42 }, { x: 6, y: 53 }], borderColor: '#f43f5e', pointRadius: 3 },
          { label: "Patiënt 3 (Gemiddeld: +4.5/mnd)", data: [{ x: 0, y: 50 }, { x: 6, y: 77 }], borderColor: '#38bdf8', pointRadius: 3 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { min: 25, max: 90, ticks: { color: '#94a3b8' } } } }
    });
  }

  // =========================================================================
  // LEVELS 16 t/m 24: DE UITBREIDING TOT HET APEX
  // =========================================================================

  // Level 16: GLMM
  function renderLevel16(container) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <h3 class="text-sm font-bold text-indigo-400 mb-1">GLMM: Geclusterde Binaire Infectiekansen</h3>
        <p class="text-xs text-slate-300 mb-3">Elk ziekenhuis heeft een eigen S-curve door de variatie in willekeurig intercept $u_{0j}$ op logit-schaal.</p>
        <div class="relative h-64 w-full">
          <canvas id="l16-canvas"></canvas>
        </div>
      </div>
    `;
    const ctx = document.getElementById("l16-canvas").getContext("2d");
    const hours = Array.from({ length: 30 }, (_, i) => 1 + i * 0.2);
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: hours.map(h => h.toFixed(1) + 'u'),
        datasets: [
          { label: "Afdeling Hoog Risico (u₀ = +1.1)", data: hours.map(h => 1 / (1 + Math.exp(-(-2.2 + 1.1 + 0.45 * h)))), borderColor: '#f43f5e', pointRadius: 0 },
          { label: "Afdeling Gemiddeld (u₀ = 0.0)", data: hours.map(h => 1 / (1 + Math.exp(-(-2.2 + 0.45 * h)))), borderColor: '#38bdf8', borderWidth: 2.5, pointRadius: 0 },
          { label: "Afdeling Laag Risico (u₀ = -1.2)", data: hours.map(h => 1 / (1 + Math.exp(-(-2.2 - 1.2 + 0.45 * h)))), borderColor: '#10b981', pointRadius: 0 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8', callback: v => (v * 100).toFixed(0) + '%' } } } }
    });
  }

  // Level 17: GAM Splines
  function renderLevel17(container) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm font-bold text-emerald-400">GAM: Niet-Lineaire Spline f(Temperatuur)</h3>
          <span class="text-xs text-slate-400">U-vormig Energieverbruik</span>
        </div>
        <p class="text-xs text-slate-300 mb-3">Vrije vorm zonder geforceerde $X^2$ termen. Gladheid gereguleerd door $\\lambda$.</p>
        <div class="relative h-64 w-full">
          <canvas id="l17-canvas"></canvas>
        </div>
      </div>
    `;
    const ctx = document.getElementById("l17-canvas").getContext("2d");
    const temps = [-5, 0, 5, 10, 15, 18, 22, 26, 30, 35];
    const energy = [46, 38, 29, 21, 14, 12, 16, 24, 34, 44];
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: temps.map(t => `${t}°C`),
        datasets: [
          { label: "Geobserveerde Data", data: energy, type: "scatter", backgroundColor: '#fbbf24', pointRadius: 5 },
          { label: "GAM Spline Pasvorm f(X)", data: energy, borderColor: '#10b981', tension: 0.4, borderWidth: 3, pointRadius: 0 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  // Level 18: Survival Analysis
  function renderLevel18(container) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <h3 class="text-sm font-bold text-sky-400 mb-1">Kaplan-Meier Overlevingscurven</h3>
        <p class="text-xs text-slate-300 mb-3">Trapvormige cumulatieve overlevingskans met rechtscensurering. Hazard Ratio = 0.58 (p = 0.003).</p>
        <div class="relative h-64 w-full">
          <canvas id="l18-canvas"></canvas>
        </div>
      </div>
    `;
    const ctx = document.getElementById("l18-canvas").getContext("2d");
    const months = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
    const survControl = [1.0, 0.90, 0.78, 0.65, 0.52, 0.44, 0.38, 0.31, 0.26, 0.24, 0.22];
    const survTreatment = [1.0, 0.95, 0.89, 0.82, 0.76, 0.69, 0.64, 0.58, 0.54, 0.50, 0.48];
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: months.map(m => `${m} mnd`),
        datasets: [
          { label: "Nieuwe Therapie (HR = 0.58)", data: survTreatment, borderColor: '#10b981', stepped: true, borderWidth: 2.5 },
          { label: "Standaardzorg (Controle)", data: survControl, borderColor: '#f43f5e', stepped: true, borderWidth: 2.5 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { min: 0, max: 1, ticks: { color: '#94a3b8', callback: v => (v * 100) + '%' } } } }
    });
  }

  // Level 19: Bayesiaanse Update
  function renderLevel19(container) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <h3 class="text-sm font-bold text-amber-400 mb-1">Bayesiaanse Update: Prior ➔ Likelihood ➔ Posterior</h3>
        <p class="text-xs text-slate-300 mb-3">P(θ | Data) ∝ P(Data | θ) · P(θ). De posterior is de gewogen synthese van eerdere kennis en nieuwe data.</p>
        <div class="relative h-64 w-full">
          <canvas id="l19-canvas"></canvas>
        </div>
      </div>
    `;
    const ctx = document.getElementById("l19-canvas").getContext("2d");
    const theta = Array.from({ length: 50 }, (_, i) => i / 50);
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: theta.map(t => t.toFixed(2)),
        datasets: [
          { label: "Prior P(θ)", data: theta.map(t => Math.exp(-0.5 * Math.pow((t - 0.2) / 0.1, 2))), borderColor: '#94a3b8', borderDash: [5, 5], pointRadius: 0 },
          { label: "Likelihood P(Data | θ)", data: theta.map(t => Math.exp(-0.5 * Math.pow((t - 0.55) / 0.08, 2))), borderColor: '#38bdf8', pointRadius: 0 },
          { label: "Posterior P(θ | Data)", data: theta.map(t => Math.exp(-0.5 * Math.pow((t - 0.42) / 0.06, 2))), borderColor: '#10b981', fill: true, backgroundColor: 'rgba(16,185,129,0.2)', borderWidth: 3, pointRadius: 0 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { display: false } } }
    });
  }

  // Level 20: MCMC Sampler
  function renderLevel20(container) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <h3 class="text-sm font-bold text-purple-400 mb-1">Hamiltoniaanse MCMC Traceplot & Sampling</h3>
        <p class="text-xs text-slate-300 mb-3">Ketting wandelt representatief door het posterior landschap (R̂ = 1.002, stationaire 'harige rups').</p>
        <div class="relative h-64 w-full">
          <canvas id="l20-canvas"></canvas>
        </div>
      </div>
    `;
    const ctx = document.getElementById("l20-canvas").getContext("2d");
    const samples = Array.from({ length: 80 }, (_, i) => 5.0 + (Math.sin(i * 0.5) * 0.4) + (Math.random() - 0.5) * 0.8);
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: samples.map((_, i) => `${i}`),
        datasets: [{ label: "Posterior Parameter θ (MCMC Iteratie)", data: samples, borderColor: '#c084fc', borderWidth: 1.5, pointRadius: 2 }]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { title: { display: true, text: 'Iteratie', color: '#94a3b8' }, ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  // Level 21: Gaussiaanse Processen
  function renderLevel21(container) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <h3 class="text-sm font-bold text-sky-400 mb-1">Gaussiaans Proces (GP): Onzekerheidsbanden</h3>
        <p class="text-xs text-slate-300 mb-3">Waar metingen zijn gedaan knijpt de band samen naar nul; tussen meetpunten zwelt de onzekerheid op.</p>
        <div class="relative h-64 w-full">
          <canvas id="l21-canvas"></canvas>
        </div>
      </div>
    `;
    const ctx = document.getElementById("l21-canvas").getContext("2d");
    const xVals = Array.from({ length: 40 }, (_, i) => (i / 40) * 10);
    const meanCurve = xVals.map(x => Math.sin(x * 0.8) * 3);
    const upper = xVals.map((x, i) => meanCurve[i] + (Math.sin(x * 1.5) * 0.5 + 1.2));
    const lower = xVals.map((x, i) => meanCurve[i] - (Math.sin(x * 1.5) * 0.5 + 1.2));
    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: xVals.map(x => x.toFixed(1)),
        datasets: [
          { label: "Datapunten", data: [{ x: 5, y: -2.8 }, { x: 15, y: 2.9 }, { x: 28, y: -2.3 }], type: "scatter", backgroundColor: '#f43f5e', pointRadius: 6 },
          { label: "Bovengrens (95% CI)", data: upper, borderColor: 'transparent', backgroundColor: 'rgba(56,189,248,0.15)', fill: '+1', pointRadius: 0 },
          { label: "Ondergrens (95% CI)", data: lower, borderColor: 'transparent', pointRadius: 0 },
          { label: "GP Gemiddelde Schatting", data: meanCurve, borderColor: '#38bdf8', borderWidth: 2.5, pointRadius: 0 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  // Level 22: Causale Inferentie in Hilbertruimte
  function renderLevel22(container) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <h3 class="text-sm font-bold text-emerald-400 mb-1">Causale do(X) Interventie in Hilbertruimte</h3>
        <p class="text-xs text-slate-300 mb-3">Vergelijk de vertekende observationele associatie met de zuivere causale interventieverdeling in ℋ.</p>
        <div class="relative h-64 w-full">
          <canvas id="l22-canvas"></canvas>
        </div>
      </div>
    `;
    const ctx = document.getElementById("l22-canvas").getContext("2d");
    currentChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ['P(Y | X=0)', 'P(Y | X=1)', 'P(Y | do(X=0))', 'P(Y | do(X=1))'],
        datasets: [{ label: "Effectgrootte", data: [4.2, 7.8, 5.0, 3.8], backgroundColor: ['#94a3b8', '#94a3b8', '#10b981', '#10b981'] }]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  // Level 23: SDE's
  function renderLevel23(container) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <h3 class="text-sm font-bold text-amber-400 mb-1">Stochastische Differentiële Vergelijking: dX_t = μ dt + σ dB_t</h3>
        <p class="text-xs text-slate-300 mb-3">Ensemble van 5 parallelle Brownse diffusiepaden met constante drift.</p>
        <div class="relative h-64 w-full">
          <canvas id="l23-canvas"></canvas>
        </div>
      </div>
    `;
    const ctx = document.getElementById("l23-canvas").getContext("2d");
    const steps = 50;
    const dt = 0.05;
    const paths = Array.from({ length: 5 }, () => {
      let x = 0;
      const pts = [0];
      for (let i = 1; i < steps; i++) {
        x += 0.4 * dt + 0.8 * Math.sqrt(dt) * (Math.random() + Math.random() - 1);
        pts.push(x);
      }
      return pts;
    });

    currentChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: steps }, (_, i) => (i * dt).toFixed(2)),
        datasets: paths.map((p, idx) => ({
          label: `Pad ${idx + 1}`,
          data: p,
          borderWidth: 1.5,
          pointRadius: 0
        }))
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }
    });
  }

  // =========================================================================
  // LEVEL 24: HET ULTIEME APEX SIMULATOR
  // Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces
  // dX_t = \nabla_{\mathcal{M}} \Phi(X_t) dt + \sigma(X_t) d\mathbf{B}_t^{\text{rough}} \quad \text{in } \mathcal{H}
  // =========================================================================
  function renderLevel24(container) {
    container.innerHTML = `
      <div class="bg-slate-900/90 p-5 rounded-2xl border-2 border-purple-500/40 shadow-2xl relative overflow-hidden">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase">
              Theoretisch Apex • Manifold ℳ & Hilbertruimte ℋ
            </span>
            <h3 class="text-base font-extrabold text-white mt-1">
              Live SDE Simulatie op Riemannse Manifold met Rough Paths
            </h3>
          </div>
          <div class="flex items-center gap-3">
            <label class="text-xs text-slate-300">Hurst Roughness (H):</label>
            <input id="l24-hurst-slider" type="range" min="0.15" max="0.75" step="0.05" value="0.30" class="w-28 sm:w-36 accent-purple-500 cursor-pointer">
            <span id="l24-hurst-val" class="font-mono text-purple-400 font-bold text-xs">H = 0.30</span>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3 text-center">
          <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800">
            <div class="text-[10px] text-slate-400">Ruimte-Geometrie</div>
            <div class="text-xs font-bold text-purple-400 font-mono">Manifold ℳ (Kromming)</div>
          </div>
          <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800">
            <div class="text-[10px] text-slate-400">Driftgradiënt</div>
            <div class="text-xs font-bold text-emerald-400 font-mono">∇_ℳ Φ (Potentiaalveld)</div>
          </div>
          <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800">
            <div class="text-[10px] text-slate-400">Ruisregime (Hurst H)</div>
            <div id="l24-regime-display" class="text-xs font-bold text-rose-400 font-mono">Ruwe paden (H < 0.5)</div>
          </div>
          <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800">
            <div class="text-[10px] text-slate-400">Causale Toestand</div>
            <div class="text-xs font-bold text-sky-400 font-mono">X_t ∈ ℋ (Hilbertruimte)</div>
          </div>
        </div>

        <!-- Canvas voor interactieve stochastische flow op gekromde manifold -->
        <div class="relative w-full h-72 sm:h-80 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
          <canvas id="l24-manifold-canvas" class="w-full h-full block"></canvas>
          <div class="absolute bottom-2 left-3 text-[10px] text-slate-400 font-mono bg-slate-900/80 px-2 py-1 rounded border border-slate-800 pointer-events-none">
            dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ
          </div>
        </div>
      </div>
    `;

    const canvas = document.getElementById("l24-manifold-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const hurstSlider = document.getElementById("l24-hurst-slider");

    // Stel canvas resolutie in
    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }
    resizeCanvas();

    let hurst = 0.30;
    hurstSlider.addEventListener("input", () => {
      hurst = parseFloat(hurstSlider.value);
      document.getElementById("l24-hurst-val").innerText = `H = ${hurst.toFixed(2)}`;
      const regimeEl = document.getElementById("l24-regime-display");
      if (hurst < 0.5) {
        regimeEl.innerText = "Ruwe paden (H < 0.5: Terry Lyons)";
        regimeEl.className = "text-xs font-bold text-rose-400 font-mono";
      } else if (hurst === 0.5) {
        regimeEl.innerText = "Klassiek Brownse (Ito)";
        regimeEl.className = "text-xs font-bold text-emerald-400 font-mono";
      } else {
        regimeEl.innerText = "Fractioneel persistent (H > 0.5)";
        regimeEl.className = "text-xs font-bold text-sky-400 font-mono";
      }
    });

    // 25 stochastische deeltjes die bewegen over een gekromd zadeloppervlak (hyperbolische manifold)
    const numParticles = 30;
    const particles = Array.from({ length: numParticles }, (_, i) => ({
      u: (Math.random() - 0.5) * 3,
      v: (Math.random() - 0.5) * 3,
      history: [],
      color: `hsl(${(i * 12) % 360}, 85%, 65%)`
    }));

    function project3Dto2D(x, y, z, width, height) {
      // 3D isometrische projectie van het gekromde oppervlak z = (x^2 - y^2) / 3
      const angle = 0.55;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const px = x * cosA - y * sinA;
      const py = (x * sinA + y * cosA) * 0.45 - z * 0.7;
      const scale = width / 7.5;
      return {
        x: width / 2 + px * scale,
        y: height / 2 + py * scale
      };
    }

    let timeStep = 0;

    function renderLoop() {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.fillStyle = "#070b12";
      ctx.fillRect(0, 0, w, h);

      // 1. Teken het gekromde rooster van de Manifold ℳ (zadelvlak z = x^2 - y^2)
      ctx.strokeStyle = "rgba(168, 85, 247, 0.15)";
      ctx.lineWidth = 1;

      for (let u = -3; u <= 3; u += 0.5) {
        ctx.beginPath();
        for (let v = -3; v <= 3; v += 0.2) {
          const z = (u * u - v * v) * 0.18;
          const p = project3Dto2D(u, v, z, w, h);
          if (v === -3) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      for (let v = -3; v <= 3; v += 0.5) {
        ctx.beginPath();
        for (let u = -3; u <= 3; u += 0.2) {
          const z = (u * u - v * v) * 0.18;
          const p = project3Dto2D(u, v, z, w, h);
          if (u === -3) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // 2. Evolueer en teken de deeltjestrajecten volgens dX_t = ∇_ℳ Φ dt + σ dB_t^rough
      particles.forEach(pt => {
        // Deterministiche manifold gradiënt (steepest descent van potentiaalveld)
        const gradU = -0.015 * pt.u;
        const gradV = -0.015 * pt.v;

        // Ruwe ruiscomponent (schaalt met Hurst exponent)
        const roughnessFactor = Math.pow(0.08, hurst);
        const noiseU = (Math.random() - 0.5) * roughnessFactor;
        const noiseV = (Math.random() - 0.5) * roughnessFactor;

        pt.u += gradU + noiseU;
        pt.v += gradV + noiseV;

        // Wrap around als deeltjes ontsnappen
        if (Math.abs(pt.u) > 3.2 || Math.abs(pt.v) > 3.2) {
          pt.u = (Math.random() - 0.5) * 2;
          pt.v = (Math.random() - 0.5) * 2;
          pt.history = [];
        }

        const z = (pt.u * pt.u - pt.v * pt.v) * 0.18;
        const screenPos = project3Dto2D(pt.u, pt.v, z, w, h);

        pt.history.push(screenPos);
        if (pt.history.length > 25) pt.history.shift();

        // Teken trajectory trail
        if (pt.history.length > 1) {
          ctx.beginPath();
          ctx.strokeStyle = pt.color;
          ctx.lineWidth = 1.8;
          pt.history.forEach((hPos, idx) => {
            if (idx === 0) ctx.moveTo(hPos.x, hPos.y);
            else ctx.lineTo(hPos.x, hPos.y);
          });
          ctx.stroke();
        }

        // Deeltjeskop
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(screenPos.x, screenPos.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      timeStep++;
      animationFrameId = requestAnimationFrame(renderLoop);
    }

    renderLoop();
  }

  // =========================================================================
  // LANDING PAGE INTERACTIVE TEASER (SIMPSON'S PARADOX & MIXED MODEL REVEAL)
  // =========================================================================
  let landingTeaserChart = null;

  function renderLandingTeaser(container) {
    if (!container) return;
    const t = (k) => window.I18N ? window.I18N.t(k) : k;

    container.innerHTML = `
      <div class="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-0.5" data-i18n="teaser_badge">⚡ Live Intuition Preview</span>
            <h3 class="text-base sm:text-lg font-bold text-white" data-i18n="teaser_title">Simpson's Paradox in Real-Time</h3>
            <p class="text-xs text-slate-400" data-i18n="teaser_subtitle">Discover in 3 seconds how aggregated data can mislead, and why Linear Mixed Models are essential.</p>
          </div>
          <div class="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start sm:self-auto">
            <button id="teaser-btn-pooled" onclick="StatCharts.setTeaserMode('pooled')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 text-white shadow transition" data-i18n="teaser_pooled_btn">
              Pooled OLS (Deceptive Aggregate)
            </button>
            <button id="teaser-btn-mixed" onclick="StatCharts.setTeaserMode('mixed')" class="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition" data-i18n="teaser_mixed_btn">
              Mixed Model (Cluster Separation)
            </button>
          </div>
        </div>

        <div class="relative h-64 sm:h-80 w-full">
          <canvas id="landing-teaser-canvas"></canvas>
        </div>

        <div id="landing-teaser-explanation" class="mt-4 p-3.5 rounded-xl text-xs sm:text-sm bg-rose-950/40 border border-rose-500/40 text-rose-200">
          ${t('teaser_explanation_pooled')}
        </div>
      </div>
    `;

    updateLandingTeaserChart('pooled');
  }

  function setTeaserMode(mode) {
    const pooledBtn = document.getElementById("teaser-btn-pooled");
    const mixedBtn = document.getElementById("teaser-btn-mixed");
    const explBox = document.getElementById("landing-teaser-explanation");

    if (mode === 'pooled') {
      if (pooledBtn) pooledBtn.className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 text-white shadow transition";
      if (mixedBtn) mixedBtn.className = "px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition";
      if (explBox) {
        explBox.className = "mt-4 p-3.5 rounded-xl text-xs sm:text-sm bg-rose-950/40 border border-rose-500/40 text-rose-200";
        explBox.innerHTML = window.I18N ? window.I18N.t('teaser_explanation_pooled') : 'Pooled OLS error';
      }
    } else {
      if (pooledBtn) pooledBtn.className = "px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition";
      if (mixedBtn) mixedBtn.className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow transition";
      if (explBox) {
        explBox.className = "mt-4 p-3.5 rounded-xl text-xs sm:text-sm bg-emerald-950/40 border border-emerald-500/40 text-emerald-200";
        explBox.innerHTML = window.I18N ? window.I18N.t('teaser_explanation_mixed') : 'Mixed Model correct';
      }
    }

    updateLandingTeaserChart(mode);
  }

  function updateLandingTeaserChart(mode) {
    const canvas = document.getElementById("landing-teaser-canvas");
    if (!canvas || typeof Chart === 'undefined') return;

    if (landingTeaserChart) {
      landingTeaserChart.destroy();
      landingTeaserChart = null;
    }

    const cluster1 = [{x: 6, y: 175}, {x: 7, y: 168}, {x: 8, y: 155}, {x: 9, y: 148}, {x: 10, y: 142}];
    const cluster2 = [{x: 3.5, y: 205}, {x: 4.5, y: 195}, {x: 5.5, y: 188}, {x: 6.5, y: 180}, {x: 7.5, y: 172}];
    const cluster3 = [{x: 1.5, y: 245}, {x: 2.2, y: 235}, {x: 3.0, y: 228}, {x: 3.8, y: 220}, {x: 4.5, y: 210}];

    let datasets = [];

    const lang = (window.I18N && window.I18N.currentLang) || 'en';
    const isEn = lang === 'en';
    const isEs = lang === 'es';

    if (mode === 'pooled') {
      const allPoints = [...cluster1, ...cluster2, ...cluster3];
      datasets = [
        {
          label: isEs ? 'Todos los Pacientes (MCO Agrupado)' : (isEn ? 'All Patients (Pooled OLS)' : 'Alle Patiënten (Gepooled OLS)'),
          data: allPoints,
          backgroundColor: '#f43f5e',
          borderColor: '#fda4af',
          pointRadius: 6,
          type: 'scatter'
        },
        {
          label: isEs ? 'Tendencia Agrupada Engañosa (Trampa de Simpson)' : (isEn ? 'Deceptive Pooled Trend (Simpson\'s Trap)' : 'Vertekende Lijn (Aggregatievalkuil)'),
          data: [{x: 1.5, y: 240}, {x: 10, y: 145}],
          borderColor: '#f43f5e',
          borderWidth: 3,
          type: 'line',
          pointRadius: 0,
          borderDash: [6, 6]
        }
      ];
    } else {
      datasets = [
        {
          label: isEs ? 'Cohorte Joven (20–35)' : (isEn ? 'Young Cohort (20–35)' : 'Jongeren (20–35)'),
          data: cluster1,
          backgroundColor: '#10b981',
          borderColor: '#34d399',
          pointRadius: 6,
          type: 'scatter'
        },
        {
          label: isEs ? 'Edad Media (36–50)' : (isEn ? 'Middle-Aged (36–50)' : 'Middelbaar (36–50)'),
          data: cluster2,
          backgroundColor: '#38bdf8',
          borderColor: '#7dd3fc',
          pointRadius: 6,
          type: 'scatter'
        },
        {
          label: isEs ? 'Adultos Mayores (51–70)' : (isEn ? 'Seniors (51–70)' : 'Senioren (51–70)'),
          data: cluster3,
          backgroundColor: '#a855f7',
          borderColor: '#c084fc',
          pointRadius: 6,
          type: 'scatter'
        },
        {
          label: isEs ? 'Pendiente Joven' : 'Slope Young',
          data: [{x: 5.5, y: 180}, {x: 10.5, y: 138}],
          borderColor: '#10b981',
          borderWidth: 2,
          type: 'line',
          pointRadius: 0
        },
        {
          label: isEs ? 'Pendiente Media' : 'Slope Middle',
          data: [{x: 3, y: 210}, {x: 8, y: 167}],
          borderColor: '#38bdf8',
          borderWidth: 2,
          type: 'line',
          pointRadius: 0
        },
        {
          label: isEs ? 'Pendiente Senior' : 'Slope Senior',
          data: [{x: 1.2, y: 250}, {x: 5, y: 205}],
          borderColor: '#a855f7',
          borderWidth: 2,
          type: 'line',
          pointRadius: 0
        }
      ];
    }

    landingTeaserChart = new Chart(canvas, {
      data: { datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: isEs ? 'Ejercicio Físico Semanal (Horas)' : (isEn ? 'Weekly Physical Exercise (Hours)' : 'Wekelijkse Beweging (Uren)'),
              color: '#94a3b8'
            },
            grid: { color: 'rgba(255,255,255,0.06)' },
            ticks: { color: '#94a3b8' }
          },
          y: {
            title: {
              display: true,
              text: isEs ? 'Colesterol Sérico (mg/dL)' : (isEn ? 'Serum Cholesterol (mg/dL)' : 'Serum Cholesterol (mg/dL)'),
              color: '#94a3b8'
            },
            grid: { color: 'rgba(255,255,255,0.06)' },
            ticks: { color: '#94a3b8' }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#cbd5e1',
              filter: (item) => !item.text.startsWith('Slope')
            }
          }
        }
      }
    });
  }

  // Publieke render methode
  return {
    render: function(levelId, container) {
      destroyCharts();
      const levelData = window.LEVELS_DATA.find(l => l.id === levelId);
      if (!levelData) return;

      switch (levelId) {
        case 1: renderLevel1(container, levelData); break;
        case 2: renderLevel2(container, levelData); break;
        case 3: renderLevel3(container, levelData); break;
        case 4: renderLevel4(container, levelData); break;
        case 5: renderLevel5(container, levelData); break;
        case 6: renderLevel6(container, levelData); break;
        case 7: renderLevel7(container, levelData); break;
        case 8: renderLevel8(container, levelData); break;
        case 9: renderLevel9(container, levelData); break;
        case 10: renderLevel10(container, levelData); break;
        case 11: renderLevel11(container, levelData); break;
        case 12: renderLevel12(container, levelData); break;
        case 13: renderLevel13(container, levelData); break;
        case 14: renderLevel14(container, levelData); break;
        case 15: renderLevel15(container, levelData); break;
        case 16: renderLevel16(container, levelData); break;
        case 17: renderLevel17(container, levelData); break;
        case 18: renderLevel18(container, levelData); break;
        case 19: renderLevel19(container, levelData); break;
        case 20: renderLevel20(container, levelData); break;
        case 21: renderLevel21(container, levelData); break;
        case 22: renderLevel22(container, levelData); break;
        case 23: renderLevel23(container, levelData); break;
        case 24: renderLevel24(container, levelData); break;
        default:
          container.innerHTML = `<div class="p-4 text-slate-400">Geen simulatie beschikbaar voor level ${levelId}.</div>`;
      }
    },
    renderLandingTeaser: renderLandingTeaser,
    setTeaserMode: setTeaserMode,
    destroy: destroyCharts
  };
})();
