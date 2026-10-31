// Statistiek Leerplatform - Hoofd Applicatie & Adaptieve Statistical Journey Engine
// Ondersteunt interactieve oefeningenreeksen per level, Oefen-Arena en meertaligheid (NL/EN)

window.StatApp = (function() {
  const STORAGE_KEY = "statistiek_training_state_v3";

  // Weergave modus ('landing' of 'studio')
  let currentView = "landing";

  // Standaard staat
  let state = {
    currentLevel: 1,
    maxUnlocked: 24,
    xp: 0,
    completedLevels: [],
    completedExercises: {}, // { "l1_ex1": true, ... }
    soundEnabled: true,
    userName: "Statistiek Reiziger",
    competenceLevel: "Nog niet gescand",
    diagnosticScore: 0,
    scanCompleted: false,
    arenaStreak: 0
  };

  // Huidige oefening-index binnen het actieve level
  let currentExerciseIndex = 0;

  // Laad voortgang
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        state = { ...state, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error("Kon voortgang niet laden", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Kon voortgang niet opslaan", e);
    }
  }

  // Web Audio API feedback
  const audioCtx = (typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext))
    ? new (window.AudioContext || window.webkitAudioContext)()
    : null;

  function playTone(freq, type, duration, delay = 0) {
    if (!state.soundEnabled || !audioCtx) return;
    try {
      if (audioCtx.state === "suspended") audioCtx.resume();
      setTimeout(() => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      }, delay);
    } catch (e) {}
  }

  function playSuccessSound() {
    playTone(523.25, 'sine', 0.15, 0);
    playTone(659.25, 'sine', 0.18, 120);
    playTone(783.99, 'sine', 0.30, 240);
  }

  function playLevelUpFanfare() {
    playTone(523.25, 'triangle', 0.15, 0);
    playTone(659.25, 'triangle', 0.15, 120);
    playTone(783.99, 'triangle', 0.20, 240);
    playTone(1046.50, 'triangle', 0.45, 380);
    if (typeof confetti === 'function') {
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
    }
  }

  function playWrongSound() {
    playTone(240, 'sawtooth', 0.25, 0);
  }

  // KaTeX wiskunde renderen
  function renderMath() {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    }
  }

  // =========================================================================
  // WEERGAVESTURING (LANDING VS CURSUS STUDIO)
  // =========================================================================
  function switchView(mode) {
    if (mode !== 'landing' && mode !== 'studio') mode = 'landing';
    currentView = mode;

    const landingEl = document.getElementById("view-landing");
    const studioEl = document.getElementById("view-studio");
    const landingTabBtn = document.getElementById("nav-tab-landing-btn");
    const studioTabBtn = document.getElementById("nav-tab-studio-btn");
    const mobileSidebarBtn = document.getElementById("mobile-sidebar-btn");
    const studioCurriculumBtn = document.getElementById("studio-curriculum-btn");

    if (mode === 'landing') {
      if (landingEl) landingEl.classList.remove("hidden");
      if (studioEl) studioEl.classList.add("hidden");
      if (mobileSidebarBtn) mobileSidebarBtn.classList.add("hidden");
      if (studioCurriculumBtn) studioCurriculumBtn.classList.add("hidden");

      if (landingTabBtn && studioTabBtn) {
        landingTabBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white shadow transition";
        studioTabBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition";
      }

      setTimeout(() => {
        const teaserMount = document.getElementById("landing-teaser-mount");
        if (teaserMount && window.StatCharts && typeof window.StatCharts.renderLandingTeaser === 'function') {
          window.StatCharts.renderLandingTeaser(teaserMount);
        }
      }, 50);
    } else {
      if (landingEl) landingEl.classList.add("hidden");
      if (studioEl) studioEl.classList.remove("hidden");
      if (mobileSidebarBtn) mobileSidebarBtn.classList.remove("hidden");
      if (studioCurriculumBtn) studioCurriculumBtn.classList.remove("hidden");

      if (landingTabBtn && studioTabBtn) {
        landingTabBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition";
        studioTabBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white shadow transition";
      }

      renderSidebar();
      renderLevelContent(state.currentLevel);
    }

    if (window.StatAnalytics && typeof window.StatAnalytics.trackViewChange === 'function') {
      window.StatAnalytics.trackViewChange(mode);
    }
  }

  function jumpToLevel(levelId) {
    switchView('studio');
    selectLevel(levelId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setLanguage(lang) {
    if (window.I18N) {
      window.I18N.setLang(lang);
    }
    renderSidebar();
    updateProgressHeader();
    if (currentView === 'studio') {
      renderLevelContent(state.currentLevel);
    } else {
      const teaserMount = document.getElementById("landing-teaser-mount");
      if (teaserMount && window.StatCharts && typeof window.StatCharts.renderLandingTeaser === 'function') {
        window.StatCharts.renderLandingTeaser(teaserMount);
      }
    }
  }

  // Render Sidebar
  function renderSidebar() {
    const list = document.getElementById("level-nav-list");
    if (!list) return;

    list.innerHTML = "";
    const phases = [
      { id: 1, range: [1, 5], color: "emerald" },
      { id: 2, range: [6, 12], color: "sky" },
      { id: 3, range: [13, 19], color: "indigo" },
      { id: 4, range: [20, 24], color: "purple" }
    ];

    phases.forEach(ph => {
      const phTitle = window.I18N ? window.I18N.getPhaseTitle(ph.id) : `Fase ${ph.id}`;
      const header = document.createElement("div");
      header.className = "text-[11px] font-bold tracking-wider uppercase text-slate-400 mt-4 mb-2 px-3 flex items-center justify-between";
      header.innerHTML = `<span>${phTitle}</span>`;
      list.appendChild(header);

      window.LEVELS_DATA.filter(l => l.id >= ph.range[0] && l.id <= ph.range[1]).forEach(lvl => {
        const isCurrent = lvl.id === state.currentLevel;
        const isCompleted = state.completedLevels.includes(lvl.id);
        const isApex = lvl.id === 24;

        const levelTitle = window.I18N ? window.I18N.getLevelTitle(lvl) : lvl.title;

        const btn = document.createElement("button");
        btn.className = `w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition flex items-center justify-between group mb-1 ${
          isCurrent
            ? (isApex ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg font-bold" : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg font-semibold")
            : (isApex ? "text-purple-300 hover:bg-purple-950/40 hover:text-white border border-purple-800/40" : "text-slate-300 hover:bg-slate-800 hover:text-white")
        }`;

        btn.innerHTML = `
          <div class="flex items-center gap-2.5 truncate">
            <span class="w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-mono font-bold ${
              isCurrent
                ? "bg-white/20 text-white"
                : isCompleted
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : (isApex ? "bg-purple-950 text-purple-300 border border-purple-700" : "bg-slate-800 text-slate-300 border border-slate-700")
            }">
              ${isCompleted ? '✓' : (isApex ? 'Ω' : lvl.id)}
            </span>
            <span class="truncate ${isApex ? 'font-extrabold text-purple-200' : ''}">${isApex ? (window.I18N && window.I18N.currentLang === 'es' ? 'Nivel 24: El Modelo Apex' : (window.I18N && window.I18N.currentLang === 'en' ? 'Level 24: The Apex Model' : 'Level 24: Het Apex Model')) : levelTitle}</span>
          </div>
          ${isApex ? '<span class="text-xs">⚡</span>' : ''}
        `;

        btn.onclick = () => {
          selectLevel(lvl.id);
          toggleSidebar(false);
        };

        list.appendChild(btn);
      });
    });
  }

  function updateProgressHeader() {
    const totalLevels = 24;
    const completedCount = state.completedLevels.length;
    const progressPercent = Math.round((completedCount / totalLevels) * 100);

    const levelBadge = document.getElementById("header-current-level");
    if (levelBadge) levelBadge.innerText = `Level ${state.currentLevel} / ${totalLevels}`;

    const xpBadge = document.getElementById("header-xp-badge");
    if (xpBadge) xpBadge.innerText = `${state.xp} XP`;

    const progBar = document.getElementById("header-progress-fill");
    if (progBar) progBar.style.width = `${progressPercent}%`;

    const coachStatus = document.getElementById("header-coach-status");
    if (coachStatus) coachStatus.innerText = state.competenceLevel;
  }

  function getLevelExercises(levelId) {
    if (window.EXERCISES_DATA && window.EXERCISES_DATA[levelId]) {
      return window.EXERCISES_DATA[levelId];
    }
    const lvl = window.LEVELS_DATA.find(l => l.id === levelId);
    return [lvl.quiz];
  }

  // Render het scherm voor het huidige level
  function renderLevelContent(levelId) {
    const lvl = window.LEVELS_DATA.find(l => l.id === levelId);
    if (!lvl) return;

    const mainContainer = document.getElementById("level-view-container");
    if (!mainContainer) return;

    currentExerciseIndex = 0;
    const isApex = levelId === 24;

    const levelTitle = window.I18N ? window.I18N.getLevelTitle(lvl) : lvl.title;
    const levelSubtitle = window.I18N ? window.I18N.getLevelSubtitle(lvl) : lvl.subtitle;
    const levelBadge = window.I18N ? window.I18N.getLevelBadge(lvl) : lvl.badge;
    const phaseTitle = window.I18N ? window.I18N.getPhaseTitle(lvl.phase) : lvl.phaseTitle;

    const t = (k) => window.I18N ? window.I18N.t(k) : k;

    mainContainer.innerHTML = `
      <!-- Compact Top Level Navigation & Curriculum Toolbar (No permanent left sidebar) -->
      <div class="flex flex-wrap items-center justify-between gap-3 mb-5 bg-[#0f172a]/90 backdrop-blur border border-slate-800 rounded-2xl p-3 sm:px-5 shadow-lg">
        <button onclick="StatApp.toggleSidebar()" class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-600/25 hover:bg-indigo-600 border border-indigo-500/40 text-indigo-200 hover:text-white text-xs font-bold transition shadow-sm">
          <span>📚</span>
          <span>${t('curriculum_open_btn')} (1–24) ▾</span>
        </button>

        <div class="flex items-center gap-1.5 sm:gap-2">
          <button 
            onclick="StatApp.prevLevel()" 
            ${levelId === 1 ? 'disabled class="opacity-40 cursor-not-allowed text-xs text-slate-500 py-1.5 px-3 rounded-xl bg-slate-800 border border-slate-700/50"' : 'class="text-xs text-slate-300 hover:text-white py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition font-medium flex items-center gap-1"'}
          >
            <span>◀</span>
            <span class="hidden sm:inline">${t('btn_prev_level_short')}</span>
          </button>
          
          <div class="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-slate-300">
            <span class="text-emerald-400">L${levelId}</span> / 24
          </div>

          <button 
            onclick="StatApp.nextLevel()" 
            ${levelId === 24 ? 'disabled class="opacity-40 cursor-not-allowed text-xs text-slate-500 py-1.5 px-3 rounded-xl bg-slate-800 border border-slate-700/50"' : 'class="text-xs text-slate-300 hover:text-white py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition font-medium flex items-center gap-1"'}
          >
            <span class="hidden sm:inline">${t('btn_next_level_short')}</span>
            <span>▶</span>
          </button>
        </div>
      </div>

      <!-- Level Header Banner -->
      <div class="bg-gradient-to-br ${isApex ? 'from-purple-950 via-slate-900 to-indigo-950 border-purple-500/40 shadow-purple-950/50' : 'from-slate-900 via-slate-850 to-slate-900 border-slate-800'} border rounded-2xl p-6 sm:p-8 shadow-xl mb-6 relative overflow-hidden">
        <div class="absolute -right-12 -top-12 w-56 h-56 ${isApex ? 'bg-purple-500/20' : 'bg-emerald-500/10'} rounded-full blur-3xl pointer-events-none"></div>
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold ${isApex ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}">
              ${phaseTitle}
            </span>
            <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
              ${levelBadge}
            </span>
          </div>
          <div class="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
            <span>${t('step_indicator')} ${lvl.id} ${t('of')} 24</span>
          </div>
        </div>

        <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
          Level ${lvl.id}: ${levelTitle}
        </h1>
        <p class="text-sm sm:text-base text-slate-300 mt-2 max-w-4xl leading-relaxed">
          ${levelSubtitle}
        </p>
      </div>

      <!-- Adaptieve Mentor Kaart -->
      <div class="bg-gradient-to-r from-slate-900 to-indigo-950/60 border border-indigo-500/30 rounded-2xl p-4 sm:p-5 shadow-lg mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl shrink-0">
            🧠
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-indigo-300">${t('coach_title')}</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                ${t('coach_status_label')} ${state.competenceLevel}
              </span>
            </div>
            <p class="text-xs text-slate-300 mt-1">
              ${getAdaptiveMentorGuidance(levelId)}
            </p>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button onclick="StatApp.startAdaptiveScan()" class="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow transition">
            ${t('recalibrate_btn')}
          </button>
          <button onclick="StatApp.openPracticeArena()" class="px-3.5 py-2 bg-emerald-600/40 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-200 hover:text-white rounded-xl text-xs font-bold shadow transition">
            ${t('arena_btn')}
          </button>
        </div>
      </div>

      <!-- Grid: Links Casus & Uitleg, Rechts Interactief Lab & Resultaten -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

        <!-- Linker Kolom: Casus & Concept (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Blok 1: De Casus -->
          <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg">
            <div class="flex items-center gap-2.5 mb-3">
              <div class="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-sm font-bold">📋</div>
              <h2 class="text-base font-bold text-white">${lvl.case.title}</h2>
            </div>
            
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              ${lvl.case.context}
            </p>

            <!-- Datatabel -->
            <div class="bg-slate-950/70 rounded-xl border border-slate-800 overflow-x-auto mb-4">
              <table class="w-full text-left text-xs">
                <thead>
                  <tr class="border-b border-slate-800 text-slate-400 bg-slate-900/90">
                    ${Object.keys(lvl.case.data[0]).map(k => `
                      <th class="py-2 px-3 font-semibold capitalize">${k.replace(/([A-Z])/g, ' $1')}</th>
                    `).join('')}
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/60 font-mono text-[11px] text-slate-300">
                  ${lvl.case.data.slice(0, 6).map(row => `
                    <tr class="hover:bg-slate-800/40 transition">
                      ${Object.values(row).map(val => `<td class="py-1.5 px-3 whitespace-nowrap">${val}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="p-3 bg-amber-500/10 border border-amber-500/25 rounded-xl text-xs text-amber-200/90 flex items-start gap-2.5">
              <span class="text-base mt-[-2px]">❓</span>
              <div>
                <span class="font-bold">${t('research_question')}</span>
                <p class="mt-0.5">${lvl.case.question}</p>
              </div>
            </div>
          </div>

          <!-- Blok 2: Kernconcept & Wiskundig Inzicht -->
          <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg">
            <div class="flex items-center gap-2.5 mb-3">
              <div class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold">💡</div>
              <h2 class="text-base font-bold text-white">${t('core_concept')}</h2>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              ${lvl.theory.summary}
            </p>

            <!-- Formule Kaart -->
            <div class="bg-gradient-to-r from-slate-950 to-slate-900 border ${isApex ? 'border-purple-500/40 shadow-lg' : 'border-slate-800'} rounded-xl p-3.5 mb-4 text-center">
              <div class="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-1">
                ${isApex ? 'THEORETICAL APEX FORMULA' : t('key_formula')}
              </div>
              <div class="text-sm sm:text-base ${isApex ? 'text-purple-300 font-extrabold text-base sm:text-lg' : 'text-emerald-300'} font-mono py-1 overflow-x-auto">
                $$${lvl.theory.mathFormula}$$
              </div>
              <p class="text-[11px] text-slate-400 mt-1 italic">
                ${lvl.theory.formulaExplain}
              </p>
            </div>

            <!-- Sleutelbegrippen -->
            <div class="space-y-2">
              ${lvl.theory.keyConcepts.map(c => `
                <div class="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs">
                  <span class="font-bold ${isApex ? 'text-purple-400' : 'text-sky-400'}">${c.term}:</span>
                  <span class="text-slate-300 ml-1">${c.desc}</span>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Rechter Kolom: Interactief Lab & Resultaten (7 cols) -->
        <div class="lg:col-span-7 space-y-6">

          <!-- Blok 3: Het Interactieve Simulatie Lab -->
          <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold">🔬</div>
                <div>
                  <h2 class="text-base font-bold text-white">${lvl.simulation.name}</h2>
                  <span class="text-xs text-slate-400">${lvl.simulation.description}</span>
                </div>
              </div>
              <span class="text-[10px] px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800">
                ${t('simulation_title')}
              </span>
            </div>

            <div id="simulation-chart-mount" class="w-full">
              <!-- Dynamisch ingevuld via StatCharts.render(levelId) -->
            </div>
          </div>

          <!-- Blok 4: Model & Output Interpretatie -->
          <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg">
            <div class="flex items-center gap-2.5 mb-3">
              <div class="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm font-bold">📊</div>
              <h2 class="text-base font-bold text-white">${lvl.interpretation.title}</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              ${lvl.interpretation.metrics.map(m => `
                <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div class="text-[11px] text-slate-400">${m.label}</div>
                  <div class="text-sm font-bold text-white font-mono mt-0.5">${m.value}</div>
                  <div class="text-[10px] text-slate-400/90 mt-0.5">${m.note}</div>
                </div>
              `).join('')}
            </div>

            <div class="p-3.5 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-xs text-emerald-200">
              <div class="font-bold flex items-center gap-1.5 mb-1">
                <span>🎯</span>
                <span>${t('recommendations_title')}:</span>
              </div>
              <p class="leading-relaxed text-emerald-100/90">
                ${lvl.interpretation.recommendation}
              </p>
            </div>
          </div>

          <!-- Blok 5: Uitgebreide Oefeningen & Diagnostische Uitdagingen -->
          <div id="level-exercise-card" class="bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-indigo-900/40 rounded-2xl p-5 shadow-lg">
            <!-- Dynamisch gerenderd via renderLevelExerciseStep() -->
          </div>

        </div>

      </div>
    `;

    // Render de oefening-container
    renderLevelExerciseStep(levelId);

    // Render de interactieve simulator
    const mountPoint = document.getElementById("simulation-chart-mount");
    if (mountPoint && window.StatCharts) {
      window.StatCharts.render(levelId, mountPoint);

      // Diepe GA4 Analytics tracking op schuifregelaars (ge-throttled)
      const sliders = mountPoint.querySelectorAll("input[type=range]");
      sliders.forEach(slider => {
        slider.addEventListener("input", (e) => {
          if (window.StatAnalytics) {
            window.StatAnalytics.trackSliderChange(levelId, e.target.id, e.target.value);
          }
        });
      });
    }

    renderMath();
  }

  // Render specifieke oefening binnen het huidige level
  function renderLevelExerciseStep(levelId) {
    const card = document.getElementById("level-exercise-card");
    if (!card) return;

    const exercises = getLevelExercises(levelId);
    const ex = exercises[currentExerciseIndex];
    if (!ex) return;

    const completedInLevel = exercises.filter(e => state.completedExercises[e.id]).length;
    const allDone = completedInLevel === exercises.length;

    const t = (k) => window.I18N ? window.I18N.t(k) : k;

    card.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold">🏆</div>
          <div>
            <h2 class="text-base font-bold text-white">${t('exercises_title')}</h2>
            <span class="text-xs text-slate-400 font-mono">${t('exercise_step')} ${currentExerciseIndex + 1} ${t('of')} ${exercises.length}</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold text-amber-400 font-mono">+50 XP per vraag</span>
        </div>
      </div>

      <!-- Stepper Badges -->
      <div class="flex items-center gap-2 mb-4">
        ${exercises.map((e, idx) => {
          const isDone = !!state.completedExercises[e.id];
          const isCurrent = idx === currentExerciseIndex;
          return `
            <button 
              onclick="StatApp.jumpToExercise(${idx})" 
              class="flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
                isCurrent 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : (isDone 
                      ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/40 hover:bg-emerald-900/50' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200')
              }"
            >
              <span>${isDone ? '✓' : idx + 1}</span>
              <span class="hidden sm:inline text-[11px] opacity-80">${e.category || 'Vraag'}</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- Oefening Vraag & Categorie -->
      <div class="mb-4">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
            ex.category === 'Valkuil' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' :
            ex.category === 'Dilemma' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
            ex.category === 'Berekening' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' :
            'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
          }">
            ${ex.category || 'Concept'}
          </span>
          <span class="text-xs font-bold text-white">${ex.title || ''}</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
          ${ex.question}
        </p>
      </div>

      <!-- Antwoordopties -->
      <div class="space-y-2 mb-4" id="exercise-options-container">
        ${ex.options.map((opt, idx) => `
          <button 
            onclick="StatApp.handleExerciseAnswer(${levelId}, ${idx})"
            class="ex-option-btn w-full text-left p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/60 text-xs sm:text-sm text-slate-200 transition flex items-center justify-between group"
          >
            <span>${opt}</span>
            <span class="ex-check text-slate-500 group-hover:text-indigo-400 font-bold ml-2">○</span>
          </button>
        `).join('')}
      </div>

      <!-- Feedback Venster (Verborgen tot antwoord) -->
      <div id="exercise-feedback-box" class="hidden p-3.5 rounded-xl text-xs mb-4">
        <!-- Dynamisch gevuld -->
      </div>

      <!-- Stepper Navigatie & Level Afronding -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
        <div class="flex items-center gap-2">
          <button 
            onclick="StatApp.prevExercise()" 
            ${currentExerciseIndex === 0 ? 'disabled class="opacity-40 cursor-not-allowed text-xs text-slate-500 py-1.5 px-3"' : 'class="text-xs text-slate-300 hover:text-white py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition"'}
          >
            ◀ ${t('exercise_step')}
          </button>
          <button 
            onclick="StatApp.nextExercise()" 
            ${currentExerciseIndex === exercises.length - 1 ? 'disabled class="opacity-40 cursor-not-allowed text-xs text-slate-500 py-1.5 px-3"' : 'class="text-xs text-slate-300 hover:text-white py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition"'}
          >
            ${t('btn_next')} ▶
          </button>
        </div>

        <button 
          id="btn-complete-level"
          onclick="StatApp.completeAndNext(${levelId})"
          class="${allDone ? '' : 'hidden'} py-2 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg transition"
        >
          ${levelId === 24 
            ? (window.I18N && window.I18N.currentLang === 'es' ? '🎉 ¡Completa el Nivel 24 y Reclama la Maestría Apex!' : (window.I18N && window.I18N.currentLang === 'en' ? '🎉 Complete Level 24 & Claim Apex Mastery!' : '🎉 Rond Level 24 Af & Claim Apex Meesterschap!')) 
            : (window.I18N && window.I18N.currentLang === 'es' ? 'Completar Nivel y Siguiente ➔' : (window.I18N && window.I18N.currentLang === 'en' ? 'Complete Level & Next ➔' : 'Rond Level Af & Naar Volgend Level ➔'))}
        </button>
      </div>
    `;

    renderMath();
  }

  function jumpToExercise(idx) {
    currentExerciseIndex = idx;
    renderLevelExerciseStep(state.currentLevel);
  }

  function prevExercise() {
    if (currentExerciseIndex > 0) {
      currentExerciseIndex--;
      renderLevelExerciseStep(state.currentLevel);
    }
  }

  function nextExercise() {
    const exercises = getLevelExercises(state.currentLevel);
    if (currentExerciseIndex < exercises.length - 1) {
      currentExerciseIndex++;
      renderLevelExerciseStep(state.currentLevel);
    }
  }

  function handleExerciseAnswer(levelId, selectedIdx) {
    const exercises = getLevelExercises(levelId);
    const ex = exercises[currentExerciseIndex];
    if (!ex) return;

    const buttons = document.querySelectorAll(".ex-option-btn");
    const feedbackBox = document.getElementById("exercise-feedback-box");
    const completeBtn = document.getElementById("btn-complete-level");

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      const check = btn.querySelector(".ex-check");
      if (idx === ex.correctIndex) {
        btn.classList.add("bg-emerald-950/70", "border-emerald-500", "text-emerald-200");
        if (check) check.innerText = "✓";
      } else if (idx === selectedIdx) {
        btn.classList.add("bg-rose-950/70", "border-rose-500", "text-rose-200");
        if (check) check.innerText = "✗";
      }
    });

    feedbackBox.classList.remove("hidden");
    const isCorrect = (selectedIdx === ex.correctIndex);

    // Diepe GA4 Analytics tracking voor oefeningen
    if (window.StatAnalytics) {
      window.StatAnalytics.trackExerciseAnswer(levelId, ex.id, isCorrect, isCorrect ? 50 : 0);
    }

    if (isCorrect) {
      playSuccessSound();
      if (!state.completedExercises[ex.id]) {
        state.completedExercises[ex.id] = true;
        state.xp += 50;
        saveState();
        updateProgressHeader();
      }

      feedbackBox.className = "p-3.5 rounded-xl text-xs mb-4 bg-emerald-950/60 border border-emerald-500/40 text-emerald-200";
      feedbackBox.innerHTML = `
        <div class="font-bold mb-1 flex items-center gap-1.5">
          <span>✨</span>
          <span>${window.I18N && window.I18N.currentLang === 'es' ? '¡Respuesta correcta! (+50 XP)' : (window.I18N && window.I18N.currentLang === 'en' ? 'Correctly answered! (+50 XP)' : 'Uitstekend beantwoord! (+50 XP)')}</span>
        </div>
        <p class="leading-relaxed">${ex.explanation}</p>
      `;

      // Controleer of alle oefeningen voltooid zijn
      const allDone = exercises.every(e => state.completedExercises[e.id]);
      if (allDone && completeBtn) {
        completeBtn.classList.remove("hidden");
      }
    } else {
      playWrongSound();
      feedbackBox.className = "p-3.5 rounded-xl text-xs mb-4 bg-rose-950/60 border border-rose-500/40 text-rose-200";
      feedbackBox.innerHTML = `
        <div class="font-bold mb-1 flex items-center gap-1.5">
          <span>💡</span>
          <span>${window.I18N && window.I18N.currentLang === 'es' ? 'Aún no es del todo correcto:' : (window.I18N && window.I18N.currentLang === 'en' ? 'Not quite right yet:' : 'Nog niet helemaal juist:')}</span>
        </div>
        <p class="leading-relaxed">${ex.explanation}</p>
        <button onclick="StatApp.retryExercise()" class="mt-2 text-rose-300 underline font-semibold text-xs">
          ${window.I18N && window.I18N.currentLang === 'es' ? 'Intentar de nuevo' : (window.I18N && window.I18N.currentLang === 'en' ? 'Try again' : 'Probeer opnieuw')}
        </button>
      `;
    }
  }

  function retryExercise() {
    const buttons = document.querySelectorAll(".ex-option-btn");
    const feedbackBox = document.getElementById("exercise-feedback-box");
    buttons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove("bg-emerald-950/70", "border-emerald-500", "text-emerald-200", "bg-rose-950/70", "border-rose-500", "text-rose-200");
      const check = btn.querySelector(".ex-check");
      if (check) check.innerText = "○";
    });
    if (feedbackBox) feedbackBox.classList.add("hidden");
  }

  function getAdaptiveMentorGuidance(levelId) {
    const lang = (window.I18N && window.I18N.currentLang) || 'en';
    if (lang === 'es') {
      if (levelId <= 5) {
        return "Concéntrate en esta fase de fundamentos en la intuición práctica. No te dejes cegar por los valores p; presta atención a las medidas de dispersión (IQR) y tamaños del efecto (d de Cohen).";
      } else if (levelId <= 12) {
        return "En esta fase de regresión, mantén la guardia ante las trampas clásicas de MCO: inspecciona siempre los gráficos de residuos L.I.N.E. en busca de formas de trompeta y vigila la paradoja de Simpson.";
      } else if (levelId <= 18) {
        return "¡Este es el Punto Clave Práctico indispensable! Los datos reales son agrupados o longitudinales; MCO agrupado ignora dependencias. Domina la diferencia entre Interceptos y Pendientes Aleatorias.";
      } else {
        return "¡Has alcanzado la frontera teórica! Aquí transformamos tablas finitas en funciones continuas en espacios de Hilbert y trayectorias estocásticas rugosas en variedades no euclidianas.";
      }
    } else if (lang === 'en') {
      if (levelId <= 5) {
        return "Focus in this foundational phase on practical intuition. Do not be blinded by p-values; pay close attention to dispersion metrics (IQR) and effect sizes (Cohen's d).";
      } else if (levelId <= 12) {
        return "In this regression phase, watch out for classical OLS traps: always inspect L.I.N.E. residual plots for trumpet patterns and beware of Simpson's paradox with omitted confounders.";
      } else if (levelId <= 18) {
        return "This is the crucial Practical Sweet Spot! Real-world data is clustered or longitudinal; pooled OLS ignores dependencies. Master the difference between Random Intercepts and Slopes.";
      } else {
        return "You have reached the theoretical frontier. Here we transform from finite tables to continuous functions in Hilbert spaces and rough stochastic paths on curved manifolds!";
      }
    } else {
      if (levelId <= 5) {
        return "Focus in deze fundament-fase op de fysiologische en praktische intuïtie. Laat je niet verblinden door p-waarden; let vooral op de spreidingsmaten (IQR) en effectgroottes (Cohen's d).";
      } else if (levelId <= 12) {
        return "In deze regressie-fase waarschuw ik voor de klassieke OLS-valkuilen: controleer altijd de L.I.N.E. residu-plots op trompetvormen en wees alert op Simpson's paradox bij weggelaten variabelen.";
      } else if (levelId <= 18) {
        return "Dit is de cruciale Sweet Spot! Omdat de meeste echte data geclusterd of longitudinaal is, negeert pooled OLS cruciale afhankelijkheden. Let goed op het verschil tussen Random Intercepts en Slopes.";
      } else {
        return "Je bevindt je nu op het theoretische grensvlak. Hier transformeren we van eindige tabellen naar continue functies in Hilbertruimten en niet-gladde stochastische paden op gekromde manifolds!";
      }
    }
  }

  function completeAndNext(levelId) {
    if (!state.completedLevels.includes(levelId)) {
      state.completedLevels.push(levelId);
      state.xp += 100;
    }

    // Diepe GA4 Analytics tracking bij level afronding
    if (window.StatAnalytics) {
      window.StatAnalytics.trackLevelComplete(levelId, state.xp, state.completedLevels.length);
    }

    saveState();
    playLevelUpFanfare();

    if (levelId === 24) {
      openCertificateModal();
    } else {
      selectLevel(levelId + 1);
    }
  }

  function selectLevel(levelId) {
    state.currentLevel = levelId;
    saveState();

    // Diepe GA4 Analytics tracking bij level weergave
    const lvl = window.LEVELS_DATA.find(l => l.id === levelId);
    if (window.StatAnalytics && lvl) {
      window.StatAnalytics.trackLevelView(levelId, lvl.title, lvl.phaseTitle);
    }

    renderSidebar();
    updateProgressHeader();
    renderLevelContent(levelId);
  }

  function prevLevel() {
    if (state.currentLevel > 1) {
      selectLevel(state.currentLevel - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function nextLevel() {
    if (state.currentLevel < 24) {
      selectLevel(state.currentLevel + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    saveState();
    const btn = document.getElementById("toggle-sound-btn");
    if (btn) btn.innerText = state.soundEnabled ? "🔊" : "🔇";

    if (window.StatAnalytics) {
      window.StatAnalytics.trackSoundToggle(state.soundEnabled);
    }
  }

  function toggleSidebar(forceState) {
    const sidebar = document.getElementById("sidebar-drawer");
    const overlay = document.getElementById("sidebar-overlay");
    if (!sidebar) return;

    const isCurrentlyOpen = !sidebar.classList.contains("-translate-x-full");
    const shouldOpen = (typeof forceState === 'boolean') ? forceState : !isCurrentlyOpen;

    if (shouldOpen) {
      sidebar.classList.remove("-translate-x-full");
      if (overlay) overlay.classList.remove("hidden");
    } else {
      sidebar.classList.add("-translate-x-full");
      if (overlay) overlay.classList.add("hidden");
    }
  }

  // =========================================================================
  // ADAPTIEVE NIVEAU-SCAN (10 Diagnostische Vragen)
  // =========================================================================
  let adaptiveCurrentStep = 0;
  let adaptiveUserScore = 0;

  function startAdaptiveScan() {
    const modal = document.getElementById("modal-adaptive-scan");
    if (modal) modal.classList.remove("hidden");
    adaptiveCurrentStep = 0;
    adaptiveUserScore = 0;

    // GA4 tracking
    if (window.StatAnalytics) {
      window.StatAnalytics.trackScanStart();
    }

    renderAdaptiveScanStep();
  }

  function renderAdaptiveScanStep() {
    const container = document.getElementById("adaptive-scan-content");
    if (!container || !window.ADAPTIVE_ASSESSMENT) return;

    const totalSteps = window.ADAPTIVE_ASSESSMENT.length;
    const lang = (window.I18N && window.I18N.currentLang) || 'en';
    const isEn = lang === 'en';
    const isEs = lang === 'es';

    if (adaptiveCurrentStep >= totalSteps) {
      // Bereken eindoordeel
      let recommendedLevel = 1;
      let competenceName = isEs ? "Explorador de Fundamentos" : (isEn ? "Foundations Explorer" : "Fundamenten Leerling");

      if (adaptiveUserScore >= 20) {
        recommendedLevel = 24;
        competenceName = isEs ? "Cosmólogo del Apex" : (isEn ? "Apex Cosmologist" : "Apex Kosmoloog");
      } else if (adaptiveUserScore >= 16) {
        recommendedLevel = 19;
        competenceName = isEs ? "Experto Bayesiano" : (isEn ? "Bayesian Expert" : "Bayesiaans Expert");
      } else if (adaptiveUserScore >= 11) {
        recommendedLevel = 13;
        competenceName = isEs ? "Virtuoso de Modelos Mixtos" : (isEn ? "Mixed Models Virtuoso" : "Mixed Models Virtuoos");
      } else if (adaptiveUserScore >= 6) {
        recommendedLevel = 6;
        competenceName = isEs ? "Analista de Regresión" : (isEn ? "Regression Analyst" : "Regressie Analist");
      } else {
        recommendedLevel = 1;
        competenceName = isEs ? "Explorador de Fundamentos" : (isEn ? "Foundations Explorer" : "Fundamenten Verkenner");
      }

      state.competenceLevel = competenceName;
      state.diagnosticScore = adaptiveUserScore;
      state.scanCompleted = true;
      saveState();
      updateProgressHeader();

      // GA4 tracking
      if (window.StatAnalytics) {
        window.StatAnalytics.trackScanComplete(adaptiveUserScore, competenceName, recommendedLevel);
      }

      const scanResultTitle = isEs ? '¡Evaluación Completada!' : (isEn ? 'Assessment Complete!' : 'Intake Analyse Voltooid!');
      const scorePrefix = isEs ? 'Según tu puntuación diagnóstica de' : (isEn ? 'Based on your diagnostic score of' : 'Op basis van je diagnostische score van');
      const detectedLabel = isEs ? 'Nivel de Competencia Detectado:' : (isEn ? 'Detected Competence Level:' : 'Gedetecteerd Competentieniveau:');
      const recommendedLabel = isEs ? 'Nivel de Inicio Recomendado:' : (isEn ? 'Recommended Start Level:' : 'Geadviseerd Startlevel:');
      const adviceText = recommendedLevel === 1
        ? (isEs ? 'Comienza en el Nivel 1 para construir una base sólida e inquebrantable.' : (isEn ? 'Start at Level 1 to build an unbreakable rock-solid foundation.' : 'Start bij Level 1 om een onwrikbare basis op te bouwen.'))
        : (isEs ? `Cuentas con los conocimientos previos para avanzar directamente al Nivel ${recommendedLevel}.` : (isEn ? `You have sufficient prior knowledge to jump straight to Level ${recommendedLevel}.` : `Je beschikt over voldoende voorkennis om direct bij Level ${recommendedLevel} aan te haken.`));
      const ctaBtnText = isEs ? `Ir Directamente al Nivel ${recommendedLevel}` : (isEn ? `Go Directly to Level ${recommendedLevel}` : `Ga Direct naar Level ${recommendedLevel}`);
      const closeBtnText = isEs ? 'Cerrar' : (isEn ? 'Close' : 'Sluiten');

      container.innerHTML = `
        <div class="text-center py-4">
          <div class="w-16 h-16 mx-auto rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-3xl mb-3">
            🎯
          </div>
          <h3 class="text-xl font-bold text-white mb-1">
            ${scanResultTitle}
          </h3>
          <p class="text-xs text-slate-400 mb-4">
            ${scorePrefix} <strong class="text-indigo-400">${adaptiveUserScore} / 25 pt</strong>:
          </p>

          <div class="p-4 bg-indigo-950/60 border border-indigo-500/40 rounded-2xl mb-6 text-left">
            <div class="text-[11px] text-slate-400 uppercase font-mono">${detectedLabel}</div>
            <div class="text-lg font-bold text-white mt-0.5">${competenceName}</div>
            <div class="text-xs text-emerald-400 mt-2 font-semibold">
              ${recommendedLabel} ${isEs ? 'Nivel' : 'Level'} ${recommendedLevel}
            </div>
            <p class="text-xs text-slate-300 mt-1 leading-relaxed">
              ${adviceText}
            </p>
          </div>

          <div class="flex items-center justify-center gap-3">
            <button onclick="StatApp.jumpToLevel(${recommendedLevel}); StatApp.closeModal('modal-adaptive-scan');" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg transition">
              ${ctaBtnText} ➔
            </button>
            <button onclick="StatApp.closeModal('modal-adaptive-scan')" class="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs sm:text-sm transition">
              ${closeBtnText}
            </button>
          </div>
        </div>
      `;
      return;
    }

    const q = window.ADAPTIVE_ASSESSMENT[adaptiveCurrentStep];
    const questionText = (isEs && q.question_es) ? q.question_es : ((isEn && q.question_en) ? q.question_en : q.question);
    const currentOptions = (isEs && q.options_es) ? q.options_es : ((isEn && q.options_en) ? q.options_en : q.options);
    const stepLabel = isEs ? 'Pregunta' : (isEn ? 'Question' : 'Vraag');

    container.innerHTML = `
      <div class="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
        <span>${stepLabel} ${adaptiveCurrentStep + 1} / ${totalSteps}</span>
        <span class="text-indigo-400 font-bold">${Math.round((adaptiveCurrentStep / totalSteps) * 100)}%</span>
      </div>
      <div class="w-full bg-slate-800 rounded-full h-1.5 mb-4">
        <div class="bg-indigo-500 h-1.5 rounded-full transition-all duration-300" style="width: ${(adaptiveCurrentStep / totalSteps) * 100}%"></div>
      </div>

      <h3 class="text-sm sm:text-base font-bold text-white mb-4 leading-relaxed">
        ${questionText}
      </h3>

      <div class="space-y-2.5">
        ${currentOptions.map((opt, idx) => `
          <button onclick="StatApp.answerAdaptiveStep(${idx})" class="w-full text-left p-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/60 text-xs sm:text-sm text-slate-200 transition flex items-center justify-between group">
            <span>${opt.text}</span>
            <span class="text-slate-500 group-hover:text-indigo-400 font-bold ml-2">➔</span>
          </button>
        `).join('')}
      </div>
    `;

    renderMath();
  }

  function answerAdaptiveStep(optionIndex) {
    const q = window.ADAPTIVE_ASSESSMENT[adaptiveCurrentStep];
    const lang = (window.I18N && window.I18N.currentLang) || 'en';
    const isEn = lang === 'en';
    const isEs = lang === 'es';
    const currentOptions = (isEs && q.options_es) ? q.options_es : ((isEn && q.options_en) ? q.options_en : q.options);
    const opt = currentOptions[optionIndex] || q.options[optionIndex];
    adaptiveUserScore += (opt.score || 0);

    // Diepe GA4 Analytics tracking per stap in de intake
    if (window.StatAnalytics) {
      window.StatAnalytics.trackScanStep(adaptiveCurrentStep, q.id, q.domain, opt.score || 0);
    }

    adaptiveCurrentStep++;
    renderAdaptiveScanStep();
  }

  // =========================================================================
  // OEFEN-ARENA (Willekeurige Quiz & Drill Hub)
  // =========================================================================
  let arenaCurrentQuestion = null;
  let arenaFilter = "all";

  function openPracticeArena() {
    const modal = document.getElementById("modal-practice-arena");
    if (modal) modal.classList.remove("hidden");
    arenaFilter = "all";
    loadNextArenaQuestion();
  }

  function setArenaFilter(filter) {
    arenaFilter = filter;
    loadNextArenaQuestion();
  }

  function loadNextArenaQuestion() {
    const container = document.getElementById("arena-question-container");
    if (!container || !window.EXERCISES_DATA) return;

    let pool = [];
    Object.keys(window.EXERCISES_DATA).forEach(lvlId => {
      const id = parseInt(lvlId, 10);
      let match = false;
      if (arenaFilter === "all") match = true;
      else if (arenaFilter === "fase1" && id <= 5) match = true;
      else if (arenaFilter === "fase2" && id >= 6 && id <= 12) match = true;
      else if (arenaFilter === "fase3" && id >= 13 && id <= 18) match = true;
      else if (arenaFilter === "fase4" && id >= 19) match = true;

      if (match) {
        window.EXERCISES_DATA[lvlId].forEach(ex => {
          pool.push({ ...ex, levelId: id });
        });
      }
    });

    if (pool.length === 0) return;
    const randomIdx = Math.floor(Math.random() * pool.length);
    arenaCurrentQuestion = pool[randomIdx];

    const lvlData = window.LEVELS_DATA.find(l => l.id === arenaCurrentQuestion.levelId);
    const lvlTitle = lvlData ? (window.I18N ? window.I18N.getLevelTitle(lvlData) : lvlData.title) : '';

    container.innerHTML = `
      <div class="flex items-center justify-between mb-3 text-xs">
        <span class="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold">
          Level ${arenaCurrentQuestion.levelId}: ${lvlTitle}
        </span>
        <span class="text-amber-400 font-mono font-bold">Streak: 🔥 ${state.arenaStreak}</span>
      </div>

      <h3 class="text-sm sm:text-base font-bold text-white mb-2 leading-relaxed">
        ${arenaCurrentQuestion.title || 'Oefening'}: ${arenaCurrentQuestion.question}
      </h3>

      <div id="arena-options-container" class="space-y-2 mt-4">
        ${arenaCurrentQuestion.options.map((opt, idx) => `
          <button onclick="StatApp.handleArenaAnswer(${idx})" class="arena-opt-btn w-full text-left p-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-xs sm:text-sm text-slate-200 transition flex items-center justify-between">
            <span>${opt}</span>
            <span class="arena-check text-slate-500 font-bold ml-2">○</span>
          </button>
        `).join('')}
      </div>

      <div id="arena-feedback-box" class="hidden p-3.5 rounded-xl text-xs mt-4"></div>

      <div class="mt-4 pt-3 border-t border-slate-800 flex justify-end">
        <button id="arena-next-btn" onclick="StatApp.loadNextArenaQuestion()" class="hidden px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl text-xs shadow transition">
          ${window.I18N && window.I18N.currentLang === 'es' ? 'Siguiente Pregunta ➔' : (window.I18N && window.I18N.currentLang === 'en' ? 'Next Question ➔' : 'Volgende Vraag ➔')}
        </button>
      </div>
    `;

    renderMath();
  }

  function handleArenaAnswer(selectedIdx) {
    if (!arenaCurrentQuestion) return;
    const buttons = document.querySelectorAll(".arena-opt-btn");
    const feedbackBox = document.getElementById("arena-feedback-box");
    const nextBtn = document.getElementById("arena-next-btn");

    const isCorrect = (selectedIdx === arenaCurrentQuestion.correctIndex);

    // Diepe GA4 Analytics tracking voor de Oefen-Arena
    if (window.StatAnalytics) {
      window.StatAnalytics.trackArenaAnswer(
        arenaCurrentQuestion.levelId,
        arenaFilter,
        isCorrect,
        isCorrect ? state.arenaStreak + 1 : 0
      );
    }

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      const check = btn.querySelector(".arena-check");
      if (idx === arenaCurrentQuestion.correctIndex) {
        btn.classList.add("bg-emerald-950/70", "border-emerald-500", "text-emerald-200");
        if (check) check.innerText = "✓";
      } else if (idx === selectedIdx) {
        btn.classList.add("bg-rose-950/70", "border-rose-500", "text-rose-200");
        if (check) check.innerText = "✗";
      }
    });

    feedbackBox.classList.remove("hidden");
    if (isCorrect) {
      playSuccessSound();
      state.arenaStreak++;
      state.xp += 50;
      saveState();
      updateProgressHeader();

      feedbackBox.className = "p-3.5 rounded-xl text-xs mt-4 bg-emerald-950/60 border border-emerald-500/40 text-emerald-200";
      feedbackBox.innerHTML = `
        <div class="font-bold mb-1">${window.I18N && window.I18N.currentLang === 'es' ? `✨ ¡Respuesta correcta! (+50 XP, Racha: 🔥 ${state.arenaStreak})` : (window.I18N && window.I18N.currentLang === 'en' ? `✨ Correctly answered! (+50 XP, Streak: 🔥 ${state.arenaStreak})` : `✨ Juist beantwoord! (+50 XP, Streak: 🔥 ${state.arenaStreak})`)}</div>
        <p class="leading-relaxed">${arenaCurrentQuestion.explanation}</p>
      `;
    } else {
      playWrongSound();
      state.arenaStreak = 0;
      saveState();
      updateProgressHeader();

      feedbackBox.className = "p-3.5 rounded-xl text-xs mt-4 bg-rose-950/60 border border-rose-500/40 text-rose-200";
      feedbackBox.innerHTML = `
        <div class="font-bold mb-1">${window.I18N && window.I18N.currentLang === 'es' ? '💡 Esa no era la respuesta correcta (Racha reiniciada)' : (window.I18N && window.I18N.currentLang === 'en' ? '💡 That was not the right answer (Streak reset)' : '💡 Helaas niet juist (Streak gereset)')}</div>
        <p class="leading-relaxed">${arenaCurrentQuestion.explanation}</p>
      `;
    }

    if (nextBtn) nextBtn.classList.remove("hidden");
  }

  // =========================================================================
  // CERTIFICAAT
  // =========================================================================
  function openCertificateModal() {
    const modal = document.getElementById("modal-certificate");
    if (modal) modal.classList.remove("hidden");

    if (window.StatAnalytics) {
      window.StatAnalytics.trackCertificateView(24, state.xp);
    }

    const dateSpan = document.getElementById("cert-date");
    if (dateSpan) {
      const today = new Date();
      const currentLang = (window.I18N && window.I18N.currentLang) || 'en';
      const locale = currentLang === 'es' ? 'es-ES' : (currentLang === 'en' ? 'en-US' : 'nl-NL');
      dateSpan.innerText = today.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }

  function printCertificate() {
    if (window.StatAnalytics) {
      window.StatAnalytics.trackCertificatePrint();
    }
    window.print();
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("hidden");
  }

  function resetProgress() {
    const currentLang = (window.I18N && window.I18N.currentLang) || 'en';
    const confirmMsg = currentLang === 'es'
      ? "¿Estás seguro de que deseas restablecer todo el progreso, XP y rachas al Nivel 1?"
      : (currentLang === 'en'
          ? "Are you sure you want to reset all progress, XP, and streaks back to Level 1?"
          : "Weet je zeker dat je alle voortgang, XP en streaks wilt resetten naar Level 1?");

    if (confirm(confirmMsg)) {
      if (window.StatAnalytics) {
        window.StatAnalytics.trackProgressReset();
      }
      localStorage.removeItem(STORAGE_KEY);
      state = {
        currentLevel: 1,
        maxUnlocked: 24,
        xp: 0,
        completedLevels: [],
        completedExercises: {},
        soundEnabled: true,
        userName: currentLang === 'es' ? "Viajero/a Estadístico/a" : (currentLang === 'en' ? "Statistics Voyager" : "Statistiek Reiziger"),
        competenceLevel: currentLang === 'es' ? "Aún no evaluado" : (currentLang === 'en' ? "Not yet scanned" : "Nog niet gescand"),
        diagnosticScore: 0,
        scanCompleted: false,
        arenaStreak: 0
      };
      saveState();
      renderSidebar();
      updateProgressHeader();
      if (currentView === 'studio') {
        renderLevelContent(1);
      }
    }
  }

  function init() {
    if (window.I18N) {
      window.I18N.init();
      window.I18N.applyToDOM();
    }

    loadState();
    renderSidebar();
    updateProgressHeader();

    // Controleer of URL hash direct naar studio of een level wijst
    const hash = window.location.hash;
    if (hash && (hash.startsWith("#level-") || hash === "#studio")) {
      const match = hash.match(/#level-(\d+)/);
      const targetLvl = match ? parseInt(match[1], 10) : state.currentLevel;
      switchView('studio');
      selectLevel(targetLvl);
    } else {
      switchView('landing');
    }

    const soundBtn = document.getElementById("toggle-sound-btn");
    if (soundBtn) soundBtn.innerText = state.soundEnabled ? "🔊" : "🔇";
  }

  return {
    init,
    switchView,
    jumpToLevel,
    setLanguage,
    selectLevel,
    prevLevel,
    nextLevel,
    renderLevelExerciseStep,
    jumpToExercise,
    prevExercise,
    nextExercise,
    handleExerciseAnswer,
    retryExercise,
    completeAndNext,
    toggleSound,
    toggleSidebar,
    startAdaptiveScan,
    answerAdaptiveStep,
    openPracticeArena,
    setArenaFilter,
    loadNextArenaQuestion,
    handleArenaAnswer,
    openCertificateModal,
    printCertificate,
    closeModal,
    resetProgress
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  window.StatApp.init();
});
