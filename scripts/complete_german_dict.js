const fs = require("fs");
const vm = require("vm");

const i18nPath = "data/i18n.js";
let i18nContent = fs.readFileSync(i18nPath, "utf8");

const sandbox = {
  window: {},
  document: { documentElement: {}, addEventListener: () => {} },
  localStorage: { getItem: () => null, setItem: () => {} }
};
vm.createContext(sandbox);
vm.runInContext(i18nContent, sandbox);
const en = sandbox.window.I18N.dict.en;
const de = sandbox.window.I18N.dict.de;

const additions = {
  "roadmap_title": "Die vier Phasen deiner statistischen Reise",
  "roadmap_subtitle": "Ein glasklarer Entwicklungsplan: Bestimme deinen aktuellen Wissensstand und wachse zur statistischen Meisterschaft.",
  "final_cta_title": "Bereit, deine Sicht auf Daten fundamental zu transformieren?",
  "final_cta_subtitle": "Keine Registrierung erforderlich. Keine Kreditkarte. 100% kostenlos und Open Access. Starte mit Level 1 oder mache den 2-minütigen diagnostischen Einstufungstest.",
  "sidebar_title": "Statistische Reise (1–24)",
  "step_indicator": "Schritt",
  "of": "von",
  "coach_title": "Adaptiver Statistik-Coach",
  "coach_status_label": "Dein Status:",
  "recalibrate_btn": "⚡ Niveau neu einstufen",
  "arena_btn": "🎯 Übungs-Arena",
  "case_title": "Die Fallstudie",
  "research_question": "Die Forschungsfrage:",
  "core_concept": "Kernkonzept & Mathematische Einsicht",
  "key_formula": "Mathematische Definition:",
  "metrics_title": "Modell-Kennzahlen & Diagnostik",
  "simulation_title": "Interaktives Simulations-Labor",
  "recommendations_title": "Praxis-Leitfaden & Modellwahl",
  "exercises_title": "Interaktives Übungs-Set",
  "exercise_step": "Übung",
  "btn_check": "Antwort prüfen",
  "btn_retry": "Erneut versuchen",
  "btn_next": "Nächste Übung",
  "btn_complete_level": "Level abschließen & Weiter",
  "congrats_title": "Hervorragende Leistung!",
  "congrats_desc": "Du hast alle Übungen dieses Levels gemeistert. Bereit für die nächste Herausforderung?",
  "btn_apex_cert": "🏆 Apex-Zertifikat ansehen",
  "scan_modal_desc": "Beantworte 10 diagnostische Szenario-Fragen, um dein ideales Einstiegslevel zu ermitteln.",
  "scan_step": "Frage",
  "scan_btn_start": "🚀 Niveau-Scan starten",
  "scan_result_advice": "Empfohlenes Start-Level:",
  "scan_btn_go": "Zu diesem Level springen",
  "arena_modal_title": "Die Übungs-Arena",
  "arena_modal_desc": "Schärfe deine Urteilskraft mit einer unendlichen Auswahl an Herausforderungen über alle 24 Level.",
  "arena_streak": "Aktuelle Serie:",
  "arena_btn_next": "Nächste Frage →",
  "cert_badge": "Zertifikat der Theoretischen Apex-Meisterschaft",
  "cert_headline": "Meisterschaft in Fortgeschrittenen Statistischen Modellen",
  "cert_desc": "Dies bescheinigt, dass der Kandidat alle 24 Level der Statistical Journey erfolgreich absolviert hat: von Deskriptiver Statistik und Klassischer Regression über den praktischen Sweet Spot der Linearen Gemischten Modelle bis zum mathematischen Zenith:",
  "cert_earned_on": "Abgeschlossen am",
  "cert_total_xp": "Gesamtergebnis: 2.400+ XP",
  "footer_text": "Statistical Journey • 80+ Aufgaben & Diagnostische Szenarien • Von Deskriptiver Statistik bis zu Unendlichdimensionalen Nichtparametrischen Bayes'schen SDEs auf Mannigfaltigkeiten mit Rough Paths & Kausale Hilberträume",
  "phase1_btn": "Phase 1 starten →",
  "phase2_btn": "Phase 2 starten →",
  "phase3_btn": "Zu den Mixed Models eintauchen →",
  "phase4_btn": "Das Apex erkunden (L24) →",
  "phase1_link_l1": "• L1: Ausreißerfalle & Median",
  "phase1_link_l2": "• L2: Glockenkurve & 68-95-99.7",
  "phase1_link_l3": "• L3: Zentraler Grenzwertsatz (ZGS)",
  "phase1_link_l5": "• L5: p-Werte vs. Klinische Relevanz",
  "phase2_link_l6": "• L6: OLS & Die Geschichte der Linie",
  "phase2_link_l8": "• L8: Diagnostik (L.I.N.E.)",
  "phase2_link_l9": "• L9: Simpson-Paradoxon & Confounder",
  "phase2_link_l11": "• L11: Logistische Regression & Odds Ratios",
  "phase3_link_l13": "• L13: Geclusterte Daten & OLS-Versagen",
  "phase3_link_l14": "• L14: Mixed Models: Random Intercepts",
  "phase3_link_l15": "• L15: Random Slopes & Trajektorien",
  "phase3_link_l16": "• L16: GLMM für Binäre/Zähldaten",
  "phase3_link_l18": "• L18: Überlebenszeitanalyse (Cox-Regression)",
  "phase4_link_l19": "• L19: Bayes'sche Grundlagen (Prior & Posterior)",
  "phase4_link_l20": "• L20: Bayes'sche MCMC & Stan/PyMC",
  "phase4_link_l21": "• L21: Gauß-Prozesse",
  "phase4_link_l22": "• L22: Kausale Inferenz in Hilberträumen",
  "phase4_link_l23": "• L23: SDEs & Stochastische Diffusion",
  "phase4_link_l24": "• L24: Das Ultimative Apex-Modell (Ω)",
  "sweetspot_badge": "Sweet Spot ⭐",
  "spotlight_practical_tag": "Praktischer Sweet Spot",
  "spotlight_levels_range": "Level 13–18",
  "causal_preview_tag": "Kausalitäts-Vorschau (Level 22)",
  "apex_badge_tag": "Theoretischer Apex",
  "apex_mastery_tag": "Level 24 • Verifizierte Meisterschaft",
  "footer_link_landing": "Startseite",
  "footer_link_roadmap": "Roadmap",
  "footer_link_studio": "Studio",
  "xp_per_question": "+50 XP pro Frage",
  "level_word": "Level",
  "streak_label": "Serie",
  "feedback_correct": "Richtig beantwortet! (+50 XP)",
  "feedback_wrong": "Noch nicht ganz richtig:",
  "btn_retry_exercise": "Erneut versuchen",
  "confirm_reset": "Bist du sicher, dass du deinen gesamten Fortschritt, XP und Serien auf Level 1 zurücksetzen möchtest?",
  "complete_and_next": "Level abschließen & Weiter ➔",
  "complete_apex": "🎉 Level 24 abschließen & Apex-Meisterschaft beanspruchen!",
  "sim_l3_mean_xbar": "Mittelwert von x̄",
  "sim_l3_emp_se": "Empirischer SE",
  "sim_l3_theo_se": "Theoretischer SE (σ/√N)",
  "sim_l3_dist_dice": "Faires Würfeln (Gleichverteilt)",
  "sim_l3_dist_skew": "Starke Schiefe (Exp)",
  "sim_l4_title": "95% Konfidenzintervall Simulator",
  "sim_l4_desc": "Simuliere 100 unabhängige Stichproben. Beobachte, wie exakt ~95 Intervalle den wahren Populationsparameter einfangen.",
  "sim_l4_capture_rate": "Überdeckungsrate",
  "sim_l4_ci_hit": "Enthält wahres μ",
  "sim_l4_ci_miss": "Verfehlt wahres μ",
  "sim_l5_effect_size": "Cohen's d Effektstärke:",
  "sim_l5_sample_n": "Stichprobengröße pro Gruppe (N):",
  "sim_l5_alpha": "Signifikanzschwelle α",
  "sim_l5_beta": "Typ-II-Fehlerrisiko (β)",
  "sim_l7_title": "R² vs. Korrigiertes R² Stresstest",
  "sim_l8_homo": "Homoskedastisch (Gleichmäßig)",
  "sim_l8_hetero": "Heteroskedastisch (Trichter)",
  "sim_l10_vif_formula": "VIF = 1 / (1 - r²)",
  "sim_l10_se_inflation": "SE-Aufblähung (√VIF)",
  "sim_l10_diag_status": "Diagnosestatus",
  "sim_l11_tp": "Richtig Positiv (TP)",
  "sim_l11_fp": "Falsch Positiv (FP - Fehlalarm)",
  "sim_l11_fn": "Falsch Negativ (FN - Übersehen)",
  "sim_l11_tn": "Richtig Negativ (TN)",
  "sim_l11_sens": "Sensitivität (Recall):",
  "sim_l12_penalty": "Strafparameter (λ):",
  "sim_l23_diffusion": "Stochastische Volatilität (σ):",
  "sim_l24_roughness": "Hurst Roughness (H):",
  "sim_l24_geometry": "Raumgeometrie",
  "sim_l24_manifold": "Mannigfaltigkeit ℳ (Krümmung)",
  "sim_l24_gradient": "Drift-Gradient",
  "sim_l24_potential": "-∇_ℳ Φ (Potenzialfeld)",
  "sim_l24_regime": "Rausch-Regime (Hurst H)",
  "sim_l24_state": "Kausaler Zustand",
  "sim_l24_hilbert": "X_t ∈ ℋ (Hilbertraum)"
};

Object.assign(de, additions);

// Re-serialize dict.de inside i18nContent
const dictStart = i18nContent.indexOf('const dict = {');
const deStart = i18nContent.indexOf('"de": {', dictStart);
const deEnd = i18nContent.indexOf('\n  "nl": {', deStart);

const newDeStr = `"de": ${JSON.stringify(de, null, 4)},`;
i18nContent = i18nContent.slice(0, deStart) + newDeStr + i18nContent.slice(deEnd);

fs.writeFileSync(i18nPath, i18nContent, "utf8");
console.log("Successfully completed German dictionary!");
