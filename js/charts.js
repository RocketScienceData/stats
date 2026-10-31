// Statistiek Leerplatform - Interactieve Simulaties & Chart.js Engine
// Biedt interactieve visualisaties voor alle 24 levels, inclusief het Ultieme Apex (Level 24)

window.StatCharts = (function() {

  // Box-Muller standaardnormale generator N(0, 1)
  function gaussianRandom() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

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
            <div id="l1-iqr-display" class="text-lg font-bold text-sky-400 font-mono mt-1">€ 400</div>
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

    function normalCdf(z) {
      const t = 1.0 / (1.0 + 0.2316419 * Math.abs(z));
      const d = 0.3989422804014327 * Math.exp(-z * z / 2.0);
      const prob = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
      return z > 0 ? 1.0 - prob : prob;
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
      const pTail = (1.0 - normalCdf(z)) * 100;
      const tailEl = document.getElementById("l2-tail-display");
      if (tailEl) tailEl.innerText = `${pTail.toFixed(2)}%`;

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
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div>
            <h3 class="text-sm font-bold text-emerald-400">Centrale Limietstelling (CLT) Monte Carlo Simulator</h3>
            <p class="text-xs text-slate-300">Trek 1.000 steekproeven van grootte N en zie de Gauss-curve ontstaan.</p>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-xs text-slate-300 font-medium">Steekproefgrootte (N):</label>
            <input id="l3-n-slider" type="range" min="1" max="100" step="1" value="30" class="w-32 sm:w-44 accent-emerald-500 cursor-pointer">
            <span id="l3-n-val" class="font-mono text-emerald-400 font-bold text-xs">N = 30</span>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 text-center">
          <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400">Verdelingsvorm</div>
            <div id="l3-shape-val" class="text-xs font-bold text-emerald-400">Klokvormig Normaal</div>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400">Gemiddelde van x̄</div>
            <div id="l3-mean-val" class="text-xs font-bold text-sky-400 font-mono">μ̂ = 3.50</div>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400">Empirische SE</div>
            <div id="l3-se-val" class="text-xs font-bold text-amber-400 font-mono">SE = 0.31</div>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400">Theoretische SE (σ/√N)</div>
            <div id="l3-se-theo" class="text-xs font-bold text-purple-400 font-mono">0.31</div>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <button id="l3-dist-uniform" class="px-2.5 py-1 text-[11px] rounded font-semibold bg-emerald-600 text-white shadow">Dobbelsteen (Uniform)</button>
            <button id="l3-dist-skewed" class="px-2.5 py-1 text-[11px] rounded font-semibold bg-slate-800 text-slate-400 hover:text-white">Zwaar Scheef (Exp)</button>
          </div>
          <button id="l3-resample-btn" class="px-3 py-1 bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded text-xs font-bold transition flex items-center gap-1">
            <span>🎲</span><span>Nieuwe 1.000 Steekproeven</span>
          </button>
        </div>

        <div class="relative h-60 w-full">
          <canvas id="l3-canvas"></canvas>
        </div>
      </div>
    `;

    const ctx = document.getElementById("l3-canvas").getContext("2d");
    const nSlider = document.getElementById("l3-n-slider");
    const resampleBtn = document.getElementById("l3-resample-btn");
    const btnUniform = document.getElementById("l3-dist-uniform");
    const btnSkewed = document.getElementById("l3-dist-skewed");

    let distType = 'uniform';

    function samplePop() {
      if (distType === 'uniform') {
        return 1.0 + Math.random() * 5.0;
      } else {
        return -Math.log(1.0 - Math.random()) * 2.0;
      }
    }

    function runSim() {
      const N = parseInt(nSlider.value, 10);
      document.getElementById("l3-n-val").innerText = `N = ${N}`;

      const numSims = 1000;
      const means = [];
      for (let s = 0; s < numSims; s++) {
        let sum = 0;
        for (let i = 0; i < N; i++) sum += samplePop();
        means.push(sum / N);
      }

      const sigmaTrue = distType === 'uniform' ? Math.sqrt(35.0 / 12.0) : 2.0;
      const seTheoretical = sigmaTrue / Math.sqrt(N);

      const meanOfMeans = means.reduce((a, b) => a + b, 0) / numSims;
      const empVariance = means.reduce((a, b) => a + Math.pow(b - meanOfMeans, 2), 0) / (numSims - 1);
      const empSE = Math.sqrt(empVariance);

      document.getElementById("l3-mean-val").innerText = `μ̂ = ${meanOfMeans.toFixed(2)}`;
      document.getElementById("l3-se-val").innerText = `SÊ = ${empSE.toFixed(2)}`;
      document.getElementById("l3-se-theo").innerText = `SE = ${seTheoretical.toFixed(2)}`;

      const shapeEl = document.getElementById("l3-shape-val");
      if (N === 1) {
        shapeEl.innerText = distType === 'uniform' ? "Plat / Uniform" : "Zwaar Scheef";
        shapeEl.className = "text-xs font-bold text-amber-400";
      } else if (N < 15) {
        shapeEl.innerText = "Overgangsvorm";
        shapeEl.className = "text-xs font-bold text-sky-400";
      } else {
        shapeEl.innerText = "Klokvormig Normaal";
        shapeEl.className = "text-xs font-bold text-emerald-400";
      }

      const minVal = distType === 'uniform' ? 1.0 : 0.0;
      const maxVal = distType === 'uniform' ? 6.0 : (N === 1 ? 8.0 : 4.5);
      const numBins = 20;
      const binWidth = (maxVal - minVal) / numBins;
      const binCounts = new Array(numBins).fill(0);
      const binLabels = [];

      for (let b = 0; b < numBins; b++) {
        binLabels.push((minVal + (b + 0.5) * binWidth).toFixed(1));
      }

      means.forEach(m => {
        let bIdx = Math.floor((m - minVal) / binWidth);
        if (bIdx < 0) bIdx = 0;
        if (bIdx >= numBins) bIdx = numBins - 1;
        binCounts[bIdx]++;
      });

      if (currentChart) {
        currentChart.data.labels = binLabels;
        currentChart.data.datasets[0].data = binCounts;
        currentChart.data.datasets[0].label = `1.000 Steekproefgemiddelden (N=${N})`;
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: binLabels,
            datasets: [{
              label: `1.000 Steekproefgemiddelden (N=${N})`,
              data: binCounts,
              backgroundColor: '#10b981',
              borderRadius: 3
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { ticks: { color: '#94a3b8' }, title: { display: true, text: 'Steekproefgemiddelde (x̄)', color: '#64748b' } },
              y: { ticks: { color: '#94a3b8' }, title: { display: true, text: 'Aantal Steekproeven', color: '#64748b' } }
            }
          }
        });
      }
    }

    nSlider.addEventListener("input", runSim);
    resampleBtn.addEventListener("click", runSim);

    btnUniform.addEventListener("click", () => {
      distType = 'uniform';
      btnUniform.className = "px-2.5 py-1 text-[11px] rounded font-semibold bg-emerald-600 text-white shadow";
      btnSkewed.className = "px-2.5 py-1 text-[11px] rounded font-semibold bg-slate-800 text-slate-400 hover:text-white";
      runSim();
    });

    btnSkewed.addEventListener("click", () => {
      distType = 'skewed';
      btnSkewed.className = "px-2.5 py-1 text-[11px] rounded font-semibold bg-emerald-600 text-white shadow";
      btnUniform.className = "px-2.5 py-1 text-[11px] rounded font-semibold bg-slate-800 text-slate-400 hover:text-white";
      runSim();
    });

    runSim();
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
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <div>
            <label class="text-xs text-slate-300 block mb-1">Effectgrootte Cohen's d: <span id="l5-d-val" class="font-bold text-emerald-400">d = 0.50</span></label>
            <input id="l5-d-slider" type="range" min="0.10" max="1.20" step="0.05" value="0.50" class="w-full accent-emerald-500 cursor-pointer">
          </div>
          <div>
            <label class="text-xs text-slate-300 block mb-1">Steekproefgrootte per groep (N): <span id="l5-n-val" class="font-bold text-sky-400">N = 64</span></label>
            <input id="l5-n-slider" type="range" min="10" max="250" step="5" value="64" class="w-full accent-sky-500 cursor-pointer">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2.5 mb-3 text-center">
          <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400">Significantiedrempel α</div>
            <div class="text-sm font-bold text-rose-400 font-mono">α = 0.05 (Type I)</div>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400">Statistische Power (1 - β)</div>
            <div id="l5-power-val" class="text-sm font-bold text-emerald-400 font-mono">80.2%</div>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400">Kans Type II Fout (β)</div>
            <div id="l5-beta-val" class="text-sm font-bold text-amber-400 font-mono">19.8%</div>
          </div>
        </div>

        <div class="relative h-60 w-full">
          <canvas id="l5-canvas"></canvas>
        </div>
      </div>
    `;

    function normalCdf(z) {
      const t = 1.0 / (1.0 + 0.2316419 * Math.abs(z));
      const d = 0.3989422804014327 * Math.exp(-z * z / 2.0);
      const prob = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
      return z > 0 ? 1.0 - prob : prob;
    }

    const ctx = document.getElementById("l5-canvas").getContext("2d");
    const dSlider = document.getElementById("l5-d-slider");
    const nSlider = document.getElementById("l5-n-slider");

    function update() {
      const d = parseFloat(dSlider.value);
      const N = parseInt(nSlider.value, 10);

      document.getElementById("l5-d-val").innerText = `d = ${d.toFixed(2)}`;
      document.getElementById("l5-n-val").innerText = `N = ${N}`;

      // Non-centrality parameter: delta = d * sqrt(N / 2)
      const delta = d * Math.sqrt(N / 2);
      const zCrit = 1.96;
      // Power = P(Z > zCrit | H1) = 1 - Phi(zCrit - delta)
      const power = (1.0 - normalCdf(zCrit - delta)) * 100;
      const beta = 100 - power;

      const powerEl = document.getElementById("l5-power-val");
      powerEl.innerText = `${power.toFixed(1)}%`;
      powerEl.className = power >= 80 ? "text-sm font-bold text-emerald-400 font-mono" : "text-sm font-bold text-amber-400 font-mono";
      document.getElementById("l5-beta-val").innerText = `${beta.toFixed(1)}%`;

      // Maak curves
      const pts = 80;
      const xLabels = [];
      const h0Data = [];
      const h1Data = [];

      for (let i = 0; i <= pts; i++) {
        const x = -3.5 + (i / pts) * 8.5;
        xLabels.push(x.toFixed(1));
        const y0 = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x);
        const y1 = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * Math.pow(x - delta, 2));
        h0Data.push(y0);
        h1Data.push(y1);
      }

      if (currentChart) {
        currentChart.data.labels = xLabels;
        currentChart.data.datasets[0].data = h0Data;
        currentChart.data.datasets[1].data = h1Data;
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: xLabels,
            datasets: [
              { label: "Nulhypothese H₀ (Geen Effect, μ=0)", data: h0Data, borderColor: '#94a3b8', fill: true, backgroundColor: 'rgba(148,163,184,0.1)', pointRadius: 0 },
              { label: "Alternatief H₁ (Ware Effect, μ=δ)", data: h1Data, borderColor: '#10b981', fill: true, backgroundColor: 'rgba(16,185,129,0.2)', pointRadius: 0 }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { ticks: { color: '#94a3b8' }, title: { display: true, text: 'Toetsingsgrootheid Z', color: '#64748b' } },
              y: { display: false }
            }
          }
        });
      }
    }

    dSlider.addEventListener("input", update);
    nSlider.addEventListener("input", update);
    update();
  }

    function renderLevel6(container) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <div>
            <label class="text-xs text-slate-300 block mb-1">Helling (Slope β₁): <span id="l6-slope-val" class="font-bold text-sky-400">0.18</span></label>
            <input id="l6-slope-slider" type="range" min="0.00" max="0.36" step="0.01" value="0.18" class="w-full accent-sky-500 cursor-pointer">
          </div>
          <div>
            <label class="text-xs text-slate-300 block mb-1">Intercept (β₀): <span id="l6-intercept-val" class="font-bold text-indigo-400">2.75</span></label>
            <input id="l6-intercept-slider" type="range" min="1.0" max="5.0" step="0.05" value="2.75" class="w-full accent-indigo-500 cursor-pointer">
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-3">
            <div class="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <span class="text-[10px] text-slate-400">Model: </span>
              <span id="l6-eq-display" class="font-mono text-xs font-bold text-white">Ŷ = 2.75 + 0.18·X</span>
            </div>
            <div class="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <span class="text-[10px] text-slate-400">Kwadratensom der Fouten (SSE): </span>
              <span id="l6-sse-display" class="font-mono text-xs font-bold text-emerald-400">0.38</span>
            </div>
          </div>
          <button id="l6-opt-btn" class="px-3 py-1.5 bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded-lg text-xs font-bold transition">
            🎯 Reset naar Optimale OLS Lijn
          </button>
        </div>

        <div class="relative h-60 w-full">
          <canvas id="l6-canvas"></canvas>
        </div>
      </div>
    `;

    const ctx = document.getElementById("l6-canvas").getContext("2d");
    const slopeSlider = document.getElementById("l6-slope-slider");
    const interceptSlider = document.getElementById("l6-intercept-slider");
    const optBtn = document.getElementById("l6-opt-btn");

    const points = [{ x: 10, y: 4.5 }, { x: 15, y: 5.5 }, { x: 20, y: 6.5 }, { x: 25, y: 7.0 }, { x: 30, y: 8.5 }, { x: 35, y: 9.0 }];

    function update() {
      const b1 = parseFloat(slopeSlider.value);
      const b0 = parseFloat(interceptSlider.value);

      document.getElementById("l6-slope-val").innerText = b1.toFixed(2);
      document.getElementById("l6-intercept-val").innerText = b0.toFixed(2);
      document.getElementById("l6-eq-display").innerText = `Ŷ = ${b0.toFixed(2)} + ${b1.toFixed(2)}·X`;

      // Bereken SSE: sum of (y - (b0 + b1*x))^2
      let sse = 0;
      points.forEach(pt => {
        const yHat = b0 + b1 * pt.x;
        sse += Math.pow(pt.y - yHat, 2);
      });

      const sseEl = document.getElementById("l6-sse-display");
      sseEl.innerText = sse.toFixed(2);
      sseEl.className = sse < 0.6 ? "font-mono text-xs font-bold text-emerald-400" : "font-mono text-xs font-bold text-rose-400";

      const lineData = [{ x: 5, y: b0 + b1 * 5 }, { x: 40, y: b0 + b1 * 40 }];

      if (currentChart) {
        currentChart.data.datasets[1].data = lineData;
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "scatter",
          data: {
            datasets: [
              { label: "Studenten (Data)", data: points, backgroundColor: '#38bdf8', pointRadius: 6 },
              { label: "Regressielijn", data: lineData, type: "line", borderColor: '#10b981', borderWidth: 2.5, pointRadius: 0 }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { ticks: { color: '#94a3b8' }, title: { display: true, text: 'Studie-uren per Week', color: '#64748b' } },
              y: { min: 2, max: 10, ticks: { color: '#94a3b8' }, title: { display: true, text: 'Tentamencijfer', color: '#64748b' } }
            }
          }
        });
      }
    }

    slopeSlider.addEventListener("input", update);
    interceptSlider.addEventListener("input", update);
    optBtn.addEventListener("click", () => {
      slopeSlider.value = "0.18";
      interceptSlider.value = "2.75";
      update();
    });

    update();
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
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div>
            <h3 class="text-sm font-bold text-rose-400">Multicollineariteit & VIF Explodeerder</h3>
            <p class="text-xs text-slate-300">Schuif de correlatie tussen twee predictoren op naar 0.99 en zie de foutmarge exploderen.</p>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-xs text-slate-300 font-medium">Correlatie (r₁₂):</label>
            <input id="l10-r-slider" type="range" min="0.00" max="0.99" step="0.01" value="0.80" class="w-32 sm:w-44 accent-rose-500 cursor-pointer">
            <span id="l10-r-val" class="font-mono text-rose-400 font-bold text-xs">r = 0.80</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2.5 mb-3 text-center">
          <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400">VIF = 1 / (1 - r²)</div>
            <div id="l10-vif-val" class="text-sm font-bold text-rose-400 font-mono">2.78</div>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400">SE Inflatie (√VIF)</div>
            <div id="l10-se-factor" class="text-sm font-bold text-amber-400 font-mono">1.67x breder</div>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
            <div class="text-[10px] text-slate-400">Diagnostische Status</div>
            <div id="l10-status-val" class="text-xs font-bold text-emerald-400">Veilig (VIF < 5)</div>
          </div>
        </div>

        <div class="relative h-60 w-full">
          <canvas id="l10-canvas"></canvas>
        </div>
      </div>
    `;

    const ctx = document.getElementById("l10-canvas").getContext("2d");
    const rSlider = document.getElementById("l10-r-slider");

    function update() {
      const r = parseFloat(rSlider.value);
      document.getElementById("l10-r-val").innerText = `r = ${r.toFixed(2)}`;

      const vif = 1.0 / (1.0 - r * r);
      const seFactor = Math.sqrt(vif);

      document.getElementById("l10-vif-val").innerText = vif >= 50 ? "> 50 (Extreem!)" : vif.toFixed(2);
      document.getElementById("l10-se-factor").innerText = `${seFactor.toFixed(2)}x breder`;

      const statusEl = document.getElementById("l10-status-val");
      if (vif < 5) {
        statusEl.innerText = "Veilig (VIF < 5)";
        statusEl.className = "text-xs font-bold text-emerald-400";
      } else if (vif < 10) {
        statusEl.innerText = "Matige Collineariteit";
        statusEl.className = "text-xs font-bold text-amber-400";
      } else {
        statusEl.innerText = "⚠️ Ernstig (VIF ≥ 10)";
        statusEl.className = "text-xs font-bold text-rose-400 animate-pulse";
      }

      // Plot hyperbool
      const rSteps = [0.0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.85, 0.90, 0.95, 0.98, 0.99];
      const curveData = rSteps.map(val => ({ x: val, y: Math.min(55, 1.0 / (1.0 - val * val)) }));
      const currentPoint = [{ x: r, y: Math.min(55, vif) }];

      if (currentChart) {
        currentChart.data.datasets[1].data = currentPoint;
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "line",
          data: {
            datasets: [
              { label: "VIF Curve: 1 / (1 - r²)", data: curveData, borderColor: '#f43f5e', fill: true, backgroundColor: 'rgba(244,63,94,0.1)', pointRadius: 0 },
              { label: "Huidig Punt", data: currentPoint, type: "scatter", backgroundColor: '#38bdf8', borderColor: '#ffffff', borderWidth: 2, pointRadius: 8 }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { type: 'linear', min: 0, max: 1.0, ticks: { color: '#94a3b8' }, title: { display: true, text: 'Correlatie tussen Predictoren (r₁₂)', color: '#64748b' } },
              y: { min: 1, max: 55, ticks: { color: '#94a3b8' }, title: { display: true, text: 'Variance Inflation Factor (VIF)', color: '#64748b' } }
            }
          }
        });
      }
    }

    rSlider.addEventListener("input", update);
    update();
  }

    function renderLevel11(container) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div>
            <h3 class="text-sm font-bold text-emerald-400">Logistische S-curve & Live Confusion Matrix</h3>
            <p class="text-xs text-slate-300">Verschuif de beslisgrens (cutoff) en zie hoe Sensitiviteit en Specificiteit elkaars tegenpolen zijn.</p>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-xs text-slate-300 font-medium">Beslisgrens (Cutoff):</label>
            <input id="l11-cutoff-slider" type="range" min="0.10" max="0.90" step="0.05" value="0.50" class="w-32 sm:w-44 accent-emerald-500 cursor-pointer">
            <span id="l11-cutoff-val" class="font-mono text-emerald-400 font-bold text-xs">p = 0.50</span>
          </div>
        </div>

        <!-- Live Confusion Matrix Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 text-center">
          <div class="bg-emerald-950/50 p-2 rounded-lg border border-emerald-500/30">
            <div class="text-[10px] text-emerald-300 font-semibold">True Positive (TP)</div>
            <div id="l11-tp" class="text-base font-bold text-emerald-400 font-mono">38</div>
          </div>
          <div class="bg-rose-950/50 p-2 rounded-lg border border-rose-500/30">
            <div class="text-[10px] text-rose-300 font-semibold">False Positive (FP - Vals Alarm)</div>
            <div id="l11-fp" class="text-base font-bold text-rose-400 font-mono">7</div>
          </div>
          <div class="bg-rose-950/50 p-2 rounded-lg border border-rose-500/30">
            <div class="text-[10px] text-rose-300 font-semibold">False Negative (FN - Gemist)</div>
            <div id="l11-fn" class="text-base font-bold text-rose-400 font-mono">12</div>
          </div>
          <div class="bg-emerald-950/50 p-2 rounded-lg border border-emerald-500/30">
            <div class="text-[10px] text-emerald-300 font-semibold">True Negative (TN)</div>
            <div id="l11-tn" class="text-base font-bold text-emerald-400 font-mono">43</div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 mb-3 text-center">
          <div class="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700">
            <span class="text-[10px] text-slate-400">Sensitiviteit (Recall): </span>
            <span id="l11-recall" class="font-mono text-xs font-bold text-emerald-400">76.0%</span>
          </div>
          <div class="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700">
            <span class="text-[10px] text-slate-400">Specificiteit: </span>
            <span id="l11-spec" class="font-mono text-xs font-bold text-sky-400">86.0%</span>
          </div>
          <div class="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700">
            <span class="text-[10px] text-slate-400">F1-Score: </span>
            <span id="l11-f1" class="font-mono text-xs font-bold text-amber-400">0.80</span>
          </div>
        </div>

        <div class="relative h-60 w-full">
          <canvas id="l11-canvas"></canvas>
        </div>
      </div>
    `;

    const ctx = document.getElementById("l11-canvas").getContext("2d");
    const cutoffSlider = document.getElementById("l11-cutoff-slider");

    // 100 synthetische patiënten: 50 werkelijk ziek (1), 50 gezond (0)
    const cohort = [];
    for (let i = 0; i < 50; i++) {
      // Gezond: p geconcentreerd rond 0.25
      cohort.push({ actual: 0, p: Math.min(0.95, Math.max(0.02, 0.25 + (Math.random() - 0.5) * 0.35)) });
    }
    for (let i = 0; i < 50; i++) {
      // Ziek: p geconcentreerd rond 0.75
      cohort.push({ actual: 1, p: Math.min(0.98, Math.max(0.05, 0.72 + (Math.random() - 0.5) * 0.35)) });
    }

    function update() {
      const cutoff = parseFloat(cutoffSlider.value);
      document.getElementById("l11-cutoff-val").innerText = `p = ${cutoff.toFixed(2)}`;

      let tp = 0, fp = 0, tn = 0, fn = 0;
      cohort.forEach(pt => {
        const pred = pt.p >= cutoff ? 1 : 0;
        if (pred === 1 && pt.actual === 1) tp++;
        else if (pred === 1 && pt.actual === 0) fp++;
        else if (pred === 0 && pt.actual === 0) tn++;
        else if (pred === 0 && pt.actual === 1) fn++;
      });

      document.getElementById("l11-tp").innerText = tp;
      document.getElementById("l11-fp").innerText = fp;
      document.getElementById("l11-tn").innerText = tn;
      document.getElementById("l11-fn").innerText = fn;

      const recall = (tp / (tp + fn || 1)) * 100;
      const spec = (tn / (tn + fp || 1)) * 100;
      const prec = tp / (tp + fp || 1);
      const rec = tp / (tp + fn || 1);
      const f1 = (prec + rec > 0) ? (2 * prec * rec) / (prec + rec) : 0;

      document.getElementById("l11-recall").innerText = `${recall.toFixed(1)}%`;
      document.getElementById("l11-spec").innerText = `${spec.toFixed(1)}%`;
      document.getElementById("l11-f1").innerText = f1.toFixed(2);

      // S-curve punten
      const sCurve = Array.from({ length: 40 }, (_, i) => {
        const age = 40 + i * 1.0;
        const z = -4.8 + 0.10 * age;
        return { x: age, y: 1 / (1 + Math.exp(-z)) };
      });

      const thresholdLine = [{ x: 40, y: cutoff }, { x: 80, y: cutoff }];

      if (currentChart) {
        currentChart.data.datasets[1].data = thresholdLine;
        currentChart.data.datasets[1].label = `Beslisgrens (Cutoff = ${cutoff.toFixed(2)})`;
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "line",
          data: {
            datasets: [
              { label: "Logistische S-curve (Voorspelde Kans)", data: sCurve, borderColor: '#10b981', borderWidth: 3, pointRadius: 0 },
              { label: `Beslisgrens (Cutoff = ${cutoff.toFixed(2)})`, data: thresholdLine, borderColor: '#f43f5e', borderDash: [6, 4], borderWidth: 2, pointRadius: 0 }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { type: 'linear', min: 40, max: 80, ticks: { color: '#94a3b8' }, title: { display: true, text: 'Leeftijd / Risicoscore', color: '#64748b' } },
              y: { min: 0, max: 1, ticks: { color: '#94a3b8', callback: v => (v * 100) + '%' }, title: { display: true, text: 'Kans op Incident p', color: '#64748b' } }
            }
          }
        });
      }
    }

    cutoffSlider.addEventListener("input", update);
    update();
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
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <h3 class="text-sm font-bold text-sky-400">Gaussiaans Proces (GP): Posterior Onzekerheid</h3>
            <p class="text-xs text-slate-300">Op elk meetpunt knijpt de band samen naar exact nul; daartussen groeit de onzekerheid.</p>
          </div>
          <div class="flex items-center gap-2">
            <button id="l21-add-pt-btn" class="px-2.5 py-1 bg-sky-600/30 hover:bg-sky-600 text-sky-300 hover:text-white rounded text-xs font-bold transition flex items-center gap-1">
              <span>➕</span><span>Voeg Meetpunt Toe</span>
            </button>
            <button id="l21-reset-btn" class="px-2.5 py-1 bg-slate-800 text-slate-400 hover:text-white rounded text-xs font-semibold transition">
              Reset
            </button>
          </div>
        </div>

        <div class="relative h-64 w-full">
          <canvas id="l21-canvas"></canvas>
        </div>
      </div>
    `;

    const ctx = document.getElementById("l21-canvas").getContext("2d");
    const addPtBtn = document.getElementById("l21-add-pt-btn");
    const resetBtn = document.getElementById("l21-reset-btn");

    let obsPoints = [
      { x: 1.8, y: 1.5 },
      { x: 5.0, y: -2.0 },
      { x: 8.2, y: 2.2 }
    ];

    // RBF Kernel k(x, x') = sigma_f^2 * exp(-(x - x')^2 / (2 * lengthScale^2))
    const lengthScale = 1.3;
    const sigmaF2 = 3.0;
    const noiseVar = 0.005; // Bijna 0 ruis zodat de band exact dichtknijpt

    function rbfKernel(x1, x2) {
      return sigmaF2 * Math.exp(-Math.pow(x1 - x2, 2) / (2 * lengthScale * lengthScale));
    }

    // Invert small matrix (up to 6x6) via Gauss-Jordan
    function invertMatrix(M) {
      const n = M.length;
      const A = M.map((row, i) => [...row, ...Array.from({ length: n }, (_, j) => i === j ? 1 : 0)]);
      for (let i = 0; i < n; i++) {
        let pivot = A[i][i];
        if (Math.abs(pivot) < 1e-9) pivot = 1e-9;
        for (let j = 0; j < 2 * n; j++) A[i][j] /= pivot;
        for (let k = 0; k < n; k++) {
          if (k !== i) {
            const factor = A[k][i];
            for (let j = 0; j < 2 * n; j++) A[k][j] -= factor * A[i][j];
          }
        }
      }
      return A.map(row => row.slice(n));
    }

    function computeGP() {
      const nObs = obsPoints.length;
      // Kernel matrix K(X, X) + noise * I
      const K = [];
      for (let i = 0; i < nObs; i++) {
        K[i] = [];
        for (let j = 0; j < nObs; j++) {
          K[i][j] = rbfKernel(obsPoints[i].x, obsPoints[j].x) + (i === j ? noiseVar : 0);
        }
      }
      const KInv = invertMatrix(K);
      const Y = obsPoints.map(p => p.y);

      // Alpha = KInv * Y
      const alpha = new Array(nObs).fill(0);
      for (let i = 0; i < nObs; i++) {
        for (let j = 0; j < nObs; j++) {
          alpha[i] += KInv[i][j] * Y[j];
        }
      }

      // Evalueer over grid x in [0, 10]
      const gridSteps = 50;
      const meanCurve = [];
      const upperBand = [];
      const lowerBand = [];

      for (let s = 0; s <= gridSteps; s++) {
        const xStar = (s / gridSteps) * 10;
        const kStar = obsPoints.map(p => rbfKernel(xStar, p.x));

        // Posterior mean: kStar^T * alpha
        let mu = 0;
        for (let i = 0; i < nObs; i++) mu += kStar[i] * alpha[i];

        // Posterior variance: k(xStar, xStar) - kStar^T * KInv * kStar
        let v = 0;
        for (let i = 0; i < nObs; i++) {
          for (let j = 0; j < nObs; j++) {
            v += kStar[i] * KInv[i][j] * kStar[j];
          }
        }
        let postVar = Math.max(0.0001, rbfKernel(xStar, xStar) - v);
        const postSd = Math.sqrt(postVar);

        meanCurve.push({ x: xStar, y: mu });
        upperBand.push({ x: xStar, y: mu + 1.96 * postSd });
        lowerBand.push({ x: xStar, y: mu - 1.96 * postSd });
      }

      if (currentChart) {
        currentChart.data.datasets[0].data = obsPoints;
        currentChart.data.datasets[1].data = upperBand;
        currentChart.data.datasets[2].data = lowerBand;
        currentChart.data.datasets[3].data = meanCurve;
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "line",
          data: {
            datasets: [
              { label: "Metingen (Data)", data: obsPoints, type: "scatter", backgroundColor: '#f43f5e', borderColor: '#ffffff', borderWidth: 2, pointRadius: 7 },
              { label: "Bovengrens (95% CI)", data: upperBand, borderColor: 'rgba(56,189,248,0.4)', backgroundColor: 'rgba(56,189,248,0.18)', fill: '+1', pointRadius: 0, borderWidth: 1 },
              { label: "Ondergrens (95% CI)", data: lowerBand, borderColor: 'rgba(56,189,248,0.4)', pointRadius: 0, borderWidth: 1 },
              { label: "GP Posterior Verwachting", data: meanCurve, borderColor: '#38bdf8', borderWidth: 3, pointRadius: 0 }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { type: 'linear', min: 0, max: 10, ticks: { color: '#94a3b8' }, title: { display: true, text: 'Input Domein (X)', color: '#64748b' } },
              y: { min: -4.5, max: 4.5, ticks: { color: '#94a3b8' }, title: { display: true, text: 'GP Functie f(x)', color: '#64748b' } }
            }
          }
        });
      }
    }

    addPtBtn.addEventListener("click", () => {
      if (obsPoints.length >= 6) return;
      const newX = parseFloat((1.0 + Math.random() * 8.0).toFixed(1));
      const newY = parseFloat(((Math.random() - 0.5) * 4.0).toFixed(1));
      obsPoints.push({ x: newX, y: newY });
      computeGP();
    });

    resetBtn.addEventListener("click", () => {
      obsPoints = [
        { x: 1.8, y: 1.5 },
        { x: 5.0, y: -2.0 },
        { x: 8.2, y: 2.2 }
      ];
      computeGP();
    });

    computeGP();
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
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <div>
            <label class="text-xs text-slate-300 block mb-1">Deterministische Drift (μ): <span id="l23-drift-val" class="font-bold text-amber-400">μ = +0.40</span></label>
            <input id="l23-drift-slider" type="range" min="-0.80" max="1.20" step="0.10" value="0.40" class="w-full accent-amber-500 cursor-pointer">
          </div>
          <div>
            <label class="text-xs text-slate-300 block mb-1">Stochastische Diffusie (σ): <span id="l23-diff-val" class="font-bold text-sky-400">σ = 0.80</span></label>
            <input id="l23-diff-slider" type="range" min="0.10" max="1.80" step="0.10" value="0.80" class="w-full accent-sky-500 cursor-pointer">
          </div>
        </div>

        <div class="flex items-center justify-between gap-2 mb-2">
          <div class="text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
            Itô SDE: dX_t = μ dt + σ dB_t (Euler-Maruyama met Gaussische ruis)
          </div>
          <button id="l23-resim-btn" class="px-3 py-1 bg-amber-600/30 hover:bg-amber-600 text-amber-300 hover:text-white rounded text-xs font-bold transition flex items-center gap-1">
            <span>⚡</span><span>Genereer Nieuwe Paden</span>
          </button>
        </div>

        <div class="relative h-60 w-full">
          <canvas id="l23-canvas"></canvas>
        </div>
      </div>
    `;

    const ctx = document.getElementById("l23-canvas").getContext("2d");
    const driftSlider = document.getElementById("l23-drift-slider");
    const diffSlider = document.getElementById("l23-diff-slider");
    const resimBtn = document.getElementById("l23-resim-btn");

    function simulatePaths() {
      const mu = parseFloat(driftSlider.value);
      const sigma = parseFloat(diffSlider.value);

      document.getElementById("l23-drift-val").innerText = `μ = ${mu >= 0 ? '+' : ''}${mu.toFixed(2)}`;
      document.getElementById("l23-diff-val").innerText = `σ = ${sigma.toFixed(2)}`;

      const steps = 60;
      const dt = 0.04;
      const numPaths = 5;
      const colors = ['#38bdf8', '#10b981', '#f59e0b', '#ec4899', '#a855f7'];

      const pathDatasets = [];
      const labels = Array.from({ length: steps }, (_, i) => (i * dt).toFixed(2));

      for (let p = 0; p < numPaths; p++) {
        let x = 0;
        const pts = [0];
        for (let i = 1; i < steps; i++) {
          // Exacte Gaussische Euler-Maruyama stap: mu*dt + sigma*sqrt(dt)*Z
          x += mu * dt + sigma * Math.sqrt(dt) * gaussianRandom();
          pts.push(x);
        }
        pathDatasets.push({
          label: `Pad ${p + 1}`,
          data: pts,
          borderColor: colors[p],
          borderWidth: 1.8,
          pointRadius: 0
        });
      }

      // Voeg theoretische driftlijn toe (E[X_t] = mu * t)
      const driftLine = Array.from({ length: steps }, (_, i) => mu * (i * dt));
      pathDatasets.push({
        label: "Verwachte Drift E[X_t] = μ·t",
        data: driftLine,
        borderColor: '#ffffff',
        borderDash: [5, 4],
        borderWidth: 2,
        pointRadius: 0
      });

      if (currentChart) {
        currentChart.data.labels = labels;
        currentChart.data.datasets = pathDatasets;
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "line",
          data: {
            labels,
            datasets: pathDatasets
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { ticks: { color: '#94a3b8' }, title: { display: true, text: 'Tijd t (seconden)', color: '#64748b' } },
              y: { ticks: { color: '#94a3b8' }, title: { display: true, text: 'Toestand X_t', color: '#64748b' } }
            }
          }
        });
      }
    }

    driftSlider.addEventListener("input", simulatePaths);
    diffSlider.addEventListener("input", simulatePaths);
    resimBtn.addEventListener("click", simulatePaths);
    simulatePaths();
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
      if (hurst < 0.48) {
        regimeEl.innerText = "Ruwe paden (H < 0.5: Terry Lyons)";
        regimeEl.className = "text-xs font-bold text-rose-400 font-mono";
      } else if (Math.abs(hurst - 0.5) <= 0.02) {
        regimeEl.innerText = "Klassiek Brownse (Ito / Markov)";
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
      // Hyperbolische zadelmanifold: Phi(u, v) = (u^2 - v^2) * 0.18
      // Gradient: dPhi/du = +0.36*u (dalend naar 0 in u-as), dPhi/dv = -0.36*v (afglijdend van zadel in v-as)
      const memoryRho = Math.max(-0.6, Math.min(0.6, Math.pow(2, 2 * hurst - 1) - 1));

      particles.forEach(pt => {
        const gradU = -0.015 * pt.u;
        const gradV = 0.015 * pt.v;

        // Ruwe ruis met fractionele autocorrelatie (Terry Lyons Rough Path / Fractional Brownian)
        const roughnessFactor = Math.pow(0.08, hurst);
        const rawNoiseU = gaussianRandom() * roughnessFactor;
        const rawNoiseV = gaussianRandom() * roughnessFactor;

        pt.prevNoiseU = (pt.prevNoiseU || 0) * memoryRho + rawNoiseU * (1 - Math.abs(memoryRho));
        pt.prevNoiseV = (pt.prevNoiseV || 0) * memoryRho + rawNoiseV * (1 - Math.abs(memoryRho));

        pt.u += gradU + pt.prevNoiseU;
        pt.v += gradV + pt.prevNoiseV;

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

    // Simpson's Paradox:
    // Jongeren: laag cholesterol (142-172), sporten minder (1.5 - 4.5u)
    // Middelbaar: gemiddeld cholesterol (172-205), sporten gemiddeld (3.5 - 7.5u)
    // Senioren: hoog cholesterol (210-245), sporten meer (6.0 - 10.0u)
    // Binnen elke groep: sporten verlaagt cholesterol (negatieve helling!)
    // Gepoold over alle groepen: positieve helling (+0.54, schijnbaar paradoxaal verband!)
    const cluster1 = [{x: 1.5, y: 172}, {x: 2.2, y: 165}, {x: 3.0, y: 158}, {x: 3.8, y: 150}, {x: 4.5, y: 142}];
    const cluster2 = [{x: 3.5, y: 205}, {x: 4.5, y: 196}, {x: 5.5, y: 188}, {x: 6.5, y: 180}, {x: 7.5, y: 172}];
    const cluster3 = [{x: 6.0, y: 245}, {x: 7.0, y: 236}, {x: 8.0, y: 228}, {x: 9.0, y: 219}, {x: 10.0, y: 210}];

    let datasets = [];

    const lang = (window.I18N && window.I18N.currentLang) || 'nl';
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
          label: isEs ? 'Tendencia Agrupada Engañosa (+0.54 Ascendente)' : (isEn ? 'Deceptive Pooled Trend (+0.54 Upward)' : 'Vertekende Lijn (+0.54 Stijgend)'),
          data: [{x: 1.2, y: 148}, {x: 10.2, y: 238}],
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
          label: isEs ? 'Cohorte Joven (20–35, β < 0)' : (isEn ? 'Young Cohort (20–35, β < 0)' : 'Jongeren (20–35, β < 0)'),
          data: cluster1,
          backgroundColor: '#10b981',
          borderColor: '#34d399',
          pointRadius: 6,
          type: 'scatter'
        },
        {
          label: isEs ? 'Edad Media (36–50, β < 0)' : (isEn ? 'Middle-Aged (36–50, β < 0)' : 'Middelbaar (36–50, β < 0)'),
          data: cluster2,
          backgroundColor: '#38bdf8',
          borderColor: '#7dd3fc',
          pointRadius: 6,
          type: 'scatter'
        },
        {
          label: isEs ? 'Adultos Mayores (51–70, β < 0)' : (isEn ? 'Seniors (51–70, β < 0)' : 'Senioren (51–70, β < 0)'),
          data: cluster3,
          backgroundColor: '#a855f7',
          borderColor: '#c084fc',
          pointRadius: 6,
          type: 'scatter'
        },
        {
          label: isEs ? 'Pendiente Joven (Dalend)' : (isEn ? 'Young Slope (Decreasing)' : 'Helling Jongeren (Dalend)'),
          data: [{x: 1.2, y: 175}, {x: 4.8, y: 139}],
          borderColor: '#10b981',
          borderWidth: 2,
          type: 'line',
          pointRadius: 0
        },
        {
          label: isEs ? 'Pendiente Media (Dalend)' : (isEn ? 'Middle Slope (Decreasing)' : 'Helling Middelbaar (Dalend)'),
          data: [{x: 3.2, y: 208}, {x: 7.8, y: 169}],
          borderColor: '#38bdf8',
          borderWidth: 2,
          type: 'line',
          pointRadius: 0
        },
        {
          label: isEs ? 'Pendiente Senior (Dalend)' : (isEn ? 'Senior Slope (Decreasing)' : 'Helling Senioren (Dalend)'),
          data: [{x: 5.7, y: 248}, {x: 10.3, y: 207}],
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
