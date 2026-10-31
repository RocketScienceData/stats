const fs = require('fs');

let chartsCode = fs.readFileSync('js/charts.js', 'utf8');

// 1. Helper function gaussianRandom
const helperCode = `
  // Box-Muller standaardnormale generator N(0, 1)
  function gaussianRandom() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }
`;

if (!chartsCode.includes('function gaussianRandom()')) {
  chartsCode = chartsCode.replace('window.StatCharts = (function() {', 'window.StatCharts = (function() {\n' + helperCode);
}

// 2. Replace renderLevel3
const newRenderLevel3 = `  function renderLevel3(container) {
    container.innerHTML = \`
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
    \`;

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
      document.getElementById("l3-n-val").innerText = \`N = \${N}\`;

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

      document.getElementById("l3-mean-val").innerText = \`μ̂ = \${meanOfMeans.toFixed(2)}\`;
      document.getElementById("l3-se-val").innerText = \`SÊ = \${empSE.toFixed(2)}\`;
      document.getElementById("l3-se-theo").innerText = \`SE = \${seTheoretical.toFixed(2)}\`;

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
        currentChart.data.datasets[0].label = \`1.000 Steekproefgemiddelden (N=\${N})\`;
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: binLabels,
            datasets: [{
              label: \`1.000 Steekproefgemiddelden (N=\${N})\`,
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
  }`;

chartsCode = chartsCode.replace(/function renderLevel3\(container\)[\s\S]*?\n  \}/m, newRenderLevel3);

// 3. Replace renderLevel5 (T-test, Cohen's d & Power)
const newRenderLevel5 = `  function renderLevel5(container) {
    container.innerHTML = \`
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
    \`;

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

      document.getElementById("l5-d-val").innerText = \`d = \${d.toFixed(2)}\`;
      document.getElementById("l5-n-val").innerText = \`N = \${N}\`;

      // Non-centrality parameter: delta = d * sqrt(N / 2)
      const delta = d * Math.sqrt(N / 2);
      const zCrit = 1.96;
      // Power = P(Z > zCrit | H1) = 1 - Phi(zCrit - delta)
      const power = (1.0 - normalCdf(zCrit - delta)) * 100;
      const beta = 100 - power;

      const powerEl = document.getElementById("l5-power-val");
      powerEl.innerText = \`\${power.toFixed(1)}%\`;
      powerEl.className = power >= 80 ? "text-sm font-bold text-emerald-400 font-mono" : "text-sm font-bold text-amber-400 font-mono";
      document.getElementById("l5-beta-val").innerText = \`\${beta.toFixed(1)}%\`;

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
  }`;

chartsCode = chartsCode.replace(/function renderLevel5\(container\)[\s\S]*?\n  \}/m, newRenderLevel5);

// 4. Replace renderLevel6 (OLS Fit & Manual Residuals)
const newRenderLevel6 = `  function renderLevel6(container) {
    container.innerHTML = \`
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
    \`;

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
      document.getElementById("l6-eq-display").innerText = \`Ŷ = \${b0.toFixed(2)} + \${b1.toFixed(2)}·X\`;

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
  }`;

chartsCode = chartsCode.replace(/function renderLevel6\(container\)[\s\S]*?\n  \}/m, newRenderLevel6);

// 5. Replace renderLevel10 (Multicollinearity & VIF)
const newRenderLevel10 = `  function renderLevel10(container) {
    container.innerHTML = \`
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
    \`;

    const ctx = document.getElementById("l10-canvas").getContext("2d");
    const rSlider = document.getElementById("l10-r-slider");

    function update() {
      const r = parseFloat(rSlider.value);
      document.getElementById("l10-r-val").innerText = \`r = \${r.toFixed(2)}\`;

      const vif = 1.0 / (1.0 - r * r);
      const seFactor = Math.sqrt(vif);

      document.getElementById("l10-vif-val").innerText = vif >= 50 ? "> 50 (Extreem!)" : vif.toFixed(2);
      document.getElementById("l10-se-factor").innerText = \`\${seFactor.toFixed(2)}x breder\`;

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
  }`;

chartsCode = chartsCode.replace(/function renderLevel10\(container\)[\s\S]*?\n  \}/m, newRenderLevel10);

// 6. Replace renderLevel11 (Logistic Cutoff & Confusion Matrix)
const newRenderLevel11 = `  function renderLevel11(container) {
    container.innerHTML = \`
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
    \`;

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
      document.getElementById("l11-cutoff-val").innerText = \`p = \${cutoff.toFixed(2)}\`;

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

      document.getElementById("l11-recall").innerText = \`\${recall.toFixed(1)}%\`;
      document.getElementById("l11-spec").innerText = \`\${spec.toFixed(1)}%\`;
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
        currentChart.data.datasets[1].label = \`Beslisgrens (Cutoff = \${cutoff.toFixed(2)})\`;
        currentChart.update();
      } else {
        currentChart = new Chart(ctx, {
          type: "line",
          data: {
            datasets: [
              { label: "Logistische S-curve (Voorspelde Kans)", data: sCurve, borderColor: '#10b981', borderWidth: 3, pointRadius: 0 },
              { label: \`Beslisgrens (Cutoff = \${cutoff.toFixed(2)})\`, data: thresholdLine, borderColor: '#f43f5e', borderDash: [6, 4], borderWidth: 2, pointRadius: 0 }
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
  }`;

chartsCode = chartsCode.replace(/function renderLevel11\(container\)[\s\S]*?\n  \}/m, newRenderLevel11);

// 7. Replace renderLevel21 (Gaussian Process with pinching uncertainty)
const newRenderLevel21 = `  function renderLevel21(container) {
    container.innerHTML = \`
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
    \`;

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
  }`;

chartsCode = chartsCode.replace(/function renderLevel21\(container\)[\s\S]*?\n  \}/m, newRenderLevel21);

// 8. Replace renderLevel23 (SDEs with true Gaussian noise & controls)
const newRenderLevel23 = `  function renderLevel23(container) {
    container.innerHTML = \`
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
    \`;

    const ctx = document.getElementById("l23-canvas").getContext("2d");
    const driftSlider = document.getElementById("l23-drift-slider");
    const diffSlider = document.getElementById("l23-diff-slider");
    const resimBtn = document.getElementById("l23-resim-btn");

    function simulatePaths() {
      const mu = parseFloat(driftSlider.value);
      const sigma = parseFloat(diffSlider.value);

      document.getElementById("l23-drift-val").innerText = \`μ = \${mu >= 0 ? '+' : ''}\${mu.toFixed(2)}\`;
      document.getElementById("l23-diff-val").innerText = \`σ = \${sigma.toFixed(2)}\`;

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
          label: \`Pad \${p + 1}\`,
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
  }`;

chartsCode = chartsCode.replace(/function renderLevel23\(container\)[\s\S]*?\n  \}/m, newRenderLevel23);

// 9. Fix Level 24 saddle gradient & Hurst memory
const l24SliderReplacement = `    hurstSlider.addEventListener("input", () => {
      hurst = parseFloat(hurstSlider.value);
      document.getElementById("l24-hurst-val").innerText = \`H = \${hurst.toFixed(2)}\`;
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
    });`;

chartsCode = chartsCode.replace(/hurstSlider\.addEventListener\("input"[\s\S]*?\}\);/m, l24SliderReplacement);

const l24PhysicsReplacement = `      // 2. Evolueer en teken de deeltjestrajecten volgens dX_t = ∇_ℳ Φ dt + σ dB_t^rough
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
        pt.v += gradV + pt.prevNoiseV;`;

chartsCode = chartsCode.replace(/\/\/ 2\. Evolueer en teken de deeltjestrajecten[\s\S]*?pt\.v \+= gradV \+ noiseV;/m, l24PhysicsReplacement);

fs.writeFileSync('js/charts.js', chartsCode, 'utf8');
console.log('Successfully patched js/charts.js with interactive simulators and statistical fixes!');
