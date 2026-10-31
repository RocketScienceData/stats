const fs = require("fs");
const vm = require("vm");

// Read existing i18n.js
const i18nPath = "data/i18n.js";
let i18nContent = fs.readFileSync(i18nPath, "utf8");

// Load sandbox to inspect dict.en and dict.nl
const sandbox = {
  window: {},
  document: { documentElement: {}, addEventListener: () => {} },
  localStorage: { getItem: () => null, setItem: () => {} }
};
vm.createContext(sandbox);
vm.runInContext(i18nContent, sandbox);
const enDict = sandbox.window.I18N.dict.en;
const enMeta = sandbox.window.I18N.levelMeta.en;

console.log("English keys count:", Object.keys(enDict).length);

// Comprehensive, mathematically rigorous German dictionary
const deDict = {
  // Metadata & Navigation
  "meta_title": "Statistical Journey | Adaptiver Statistikkurs von Level 1 bis 24 Apex",
  "meta_desc": "Lerne echte Statistik ohne Code-Frustration. 24 Level von Lageparametern und Mixed Models bis zu unendlichdimensionalen SDEs auf Mannigfaltigkeiten. Mit adaptivem Niveau-Scan und interaktiver Übungs-Arena.",
  "nav_brand_title": "Statistical",
  "nav_brand_sub": "Journey",
  "nav_subtitle": "Adaptives Lernen • Level 1 bis 24 Apex (Geometrie, SDEs & Hilberträume)",
  "nav_status_prefix": "Status:",
  "nav_status_unscanned": "Noch nicht eingestuft",
  "nav_btn_scan": "Niveau-Scan",
  "nav_btn_arena": "Übungs-Arena",
  "nav_tab_landing": "🏠 Übersicht",
  "nav_tab_studio": "🔬 Kurs-Studio",
  "nav_curriculum_btn": "📚 Lektionen (1–24)",
  "curriculum_open_btn": "📚 Alle 24 Lektionen",
  "btn_prev_level_short": "Vorheriges Level",
  "btn_next_level_short": "Nächstes Level",
  "nav_btn_sound_title": "Ton an/aus",
  "nav_btn_reset_title": "Fortschritt zurücksetzen",

  // Hero Section
  "hero_badge": "🎁 100% Kostenlos & Open Access • Niveau eines 2.500€+ Masterstudiengangs • Sofortiger Start ohne Account",
  "hero_title_1": "Echte Statistik Meistern.",
  "hero_title_2": "Von Lageparametern bis zu Hilberträumen.",
  "hero_subtitle": "Keine Syntax-Kopfschmerzen in R oder Python. Verstehe, was ein Modell wirklich tut, warum Annahmen verletzen, wie Linear Mixed Models hierarchische Daten bändigen und wie unendlichdimensionale SDEs operieren. Vollständig adaptiv, visuell und interaktiv — 100% kostenlos und Open Access.",
  "hero_cta_scan": "🧠 Kostenlosen Niveau-Scan starten (2 Min.)",
  "hero_cta_studio": "🚀 Alle 24 kostenlosen Lektionen ansehen",
  "hero_cta_sweetspot": "🎯 Direkt zu Mixed Models (L13)",
  "stat_levels": "24 Level",
  "stat_levels_desc": "100% Direkt Freigeschaltet",
  "stat_exercises": "80+ Aufgaben",
  "stat_exercises_desc": "Praxisfälle, Dilemmata & Fallstricke",
  "stat_simulators": "24 Simulatoren",
  "stat_simulators_desc": "Echtzeit-Visuelles Feedback",
  "stat_coding": "0€ Kosten",
  "stat_coding_desc": "100% Kostenlos & Open Access",

  // Free Guarantee Pillars
  "free_section_badge": "💎 Die 100% Kostenlos- & Open-Access-Garantie",
  "free_section_title": "Qualität eines 2.500€+ Masterstudiengangs. Für immer 100% kostenlos.",
  "free_section_subtitle": "Wofür Universitäten und kommerzielle Bootcamps tausende Euro hinter Paywalls verlangen, machen wir statistisches Denken für jeden weltweit frei und bedingungslos zugänglich.",
  "free_pillar_1_title": "🔓 Alle 24 Level Sofort Vollständig Freigeschaltet",
  "free_pillar_1_desc": "Keine 'Freemium'-Falle, bei der fortgeschrittene Module plötzlich Geld kosten. Springe direkt zu Mixed Models (L13) oder zum theoretischen Apex (L24).",
  "free_pillar_2_title": "💳 Keine Kreditkarte, Keine 'Testphase'",
  "free_pillar_2_desc": "Du musst niemals Zahlungsdaten eingeben. Keine Testphasen, die heimlich in ein monatliches Abonnement übergehen. Keine versteckten Haken.",
  "free_pillar_3_title": "⚡ Sofortiger Start ohne Registrierung",
  "free_pillar_3_desc": "Keine Pflichtformulare, keine Passwörter, kein Werbespam in deinem Postfach. Du startest buchstäblich innerhalb von 2 Sekunden direkt im Browser.",
  "free_pillar_4_title": "📜 Kostenloses Verifiziertes Zertifikat",
  "free_pillar_4_desc": "Schließe Level 24 ab und lade dein offizielles digitales Abschlusszertifikat kostenlos als PDF herunter. Null Gebühren für deinen Nachweis.",
  "free_instant_access": "✓ 100% Sofortiger Zugang",
  "free_no_billing": "✓ Keine Abrechnungsfalle",
  "free_instant_start": "✓ 0 Sekunden Registrierungsaufwand",
  "free_cert_included": "✓ Offizielles Zertifikat inklusive",

  // Value Comparison
  "free_compare_title": "Der ehrliche Wertvergleich:",
  "free_compare_trad_label": "Universitätskurs oder Kommerzielles Bootcamp",
  "free_compare_trad_price": "2.000€ – 5.000€",
  "free_compare_trad_desc": "Oft dominiert vom Debuggen kryptischer R/Python-Paketsyntax und starrer Theorie ohne Echtzeit-Simulatoren.",
  "free_compare_our_label": "Statistical Journey Plattform",
  "free_compare_our_price": "0€ (Für immer kostenlos & Open Access)",
  "free_compare_our_desc": "100% Fokus auf konzeptionelle Beherrschung, Annahmen-Diagnostik, Mixed Models und mathematische Eleganz.",

  // Pain vs Solution
  "pain_title": "Warum klassische Statistikausbildung scheitert (und wie wir es lösen)",
  "pain_subtitle": "Verschwende nicht 80% deiner Energie mit Paket-Fehlermeldungen und fehlenden Kommas. Konzentriere dich auf das, was wirklich zählt: wissenschaftliche Urteilskraft.",
  "pain_trad_title": "Der alte, frustrierende Weg",
  "pain_trad_1": "Endloses Syntax-Debugging in R oder Python, statt die mathematische Mechanik der Modelle zu verstehen.",
  "pain_trad_2": "Blindes Auswendiglernen griechischer Formeln und Melden von p < 0.05, ohne Residuenannahmen (L.I.N.E.) zu prüfen.",
  "pain_trad_3": "Ignorieren von Daten-Clustern und Abhängigkeiten, was zu dramatisch unterschätzten Standardfehlern und Scheinfunden führt.",
  "pain_trad_result": "Ergebnis: Impostor-Syndrom, p-Hacking und fehlerhafte wissenschaftliche Modelle.",
  "pain_our_title": "Die Statistical Journey Methode",
  "pain_our_1": "100% konzeptionelle Meisterschaft durch interaktive Parameterschieberegler, sofortiges visuelles Feedback und reale Praxisfälle.",
  "pain_our_2": "Gefährliche Fallstricke sofort entlarven: p-Hacking, Simpson-Paradoxon, Multikollinearität und Heteroskedastizität.",
  "pain_our_3": "Vollständige Beherrschung des praktischen Sweet Spots (Mixed Models L13–18) bis hin zur mathematischen Spitze (Apex L24).",
  "pain_our_result": "Ergebnis: Selbstsicheres wissenschaftliches Denken und unerschütterliche statistische Intuition.",

  // Personas
  "target_title": "Entwickelt für Forscher, Data Scientists & Analysten",
  "target_subtitle": "Ob du in Top-Journals publizierst oder geschäftskritische Entscheidungen triffst: Reine statistische Intuition ist dein wirkungsvollster Hebel.",
  "target_1_title": "Doktoranden & Akademische Forscher",
  "target_1_desc": "Modelliere Messwiederholungen, hierarchische Cluster (ICC) und Überlebenskurven mit voller Zuversicht für peer-reviewte Publikationen.",
  "target_2_title": "Data Scientists & ML Engineers",
  "target_2_desc": "Verstehe Kausalität, Simpson-Paradoxon, Regularisierung (Ridge/Lasso) und Bayes'sche Unsicherheitsbänder über reine Vorhersagegenauigkeit hinaus.",
  "target_3_title": "Analysten & Strategische Berater",
  "target_3_desc": "Lass dich nicht von aggregierten Scheinkorrelationen täuschen. Kommuniziere Unsicherheit, Effektstärken und Modellgrenzen glasklar.",
  "focus_mixed": "Fokus: Mixed Models & Power",
  "focus_causality": "Fokus: Kausalität & Mannigfaltigkeiten",
  "focus_diagnostics": "Fokus: Diagnostik & Fallstricke",

  // 4 Phase Continuum
  "curriculum_title": "Das 4-Phasen-Kontinuum: Von Grundlagen bis zum Apex",
  "curriculum_subtitle": "Ein sorgfältig konstruierter Entwicklungspfad. Jedes Level baut organisch auf dem vorherigen auf — ohne didaktische Lücken.",
  "continuum_badge": "Visuelles Kontinuum",
  "continuum_title": "Das statistische Kontinuum: 4 progressive Phasen",
  "continuum_range": "Level 1 → 24 Apex",
  "phase1_title": "Phase 1: Grundlagen & Wahrscheinlichkeit",
  "phase1_subtitle": "Level 1 bis 5",
  "phase1_desc": "Lage- und Streumaße, Normalverteilung, Z-Scores, Zentraler Grenzwertsatz, Konfidenzintervalle und statistische Power.",
  "phase2_title": "Phase 2: Klassische Regression & Diagnostik",
  "phase2_subtitle": "Level 6 bis 12",
  "phase2_desc": "OLS, Residuenanalyse, Multikollinearität, Heteroskedastizität, GLM logistische Regression und Poisson-Modelle.",
  "phase3_title": "Phase 3: Mixed Models (Der Praktische Sweet Spot)",
  "phase3_subtitle": "Level 13 bis 18",
  "phase3_desc": "Zufällige Achsenabschnitte, zufällige Steigungen, ICC, Messwiederholungen, GEE und GLMMs. Das Rückgrat von 90% aller realen Studien.",
  "phase4_title": "Phase 4: Fortgeschrittene Grenzen & Apex",
  "phase4_subtitle": "Level 19 bis 24",
  "phase4_desc": "Bayes'sches Denken, MCMC-Sampling, Überlebenszeitanalyse, kausale DAGs, Mannigfaltigkeitsgeometrie und unendlichdimensionale SDEs.",

  // Teaser
  "teaser_badge": "⚡ Live-Intuitions-Vorschau",
  "teaser_title": "Simpson-Paradoxon: Warum aggregierte Daten lügen",
  "teaser_subtitle": "Entdecke in 3 Sekunden, wie zusammengefasste Daten täuschen können und warum Mixed Models unverzichtbar sind.",
  "teaser_pooled_btn": "Gepooltes OLS (Verzerrtes Gesamtergebnis)",
  "teaser_mixed_btn": "Mixed Model (Cluster-Trennung)",
  "teaser_explanation_pooled": "⚠️ <strong>Gepooltes OLS zeichnet eine steigende Linie (β = +0.54):</strong> Da Ältere mehr Sport treiben und höhere Basiswerte haben, wirkt es, als ob Sport Cholesterin <em>erhöht</em>! Dies ist die klassische Aggregationsfalle des Simpson-Paradoxons.",
  "teaser_explanation_mixed": "✨ <strong>Innerhalb jeder Altersgruppe senkt Sport das Cholesterin deutlich (β = -0.78):</strong> Sport ist hochwirksam und gesund! Ein Mixed Model trennt das Alter vom echten Trainingseffekt.",

  // Sweet Spot Feature Card
  "sweetspot_spotlight_title": "Der praktische Sweet Spot: Lineare Gemischte Modelle (Level 13–18)",
  "sweetspot_spotlight_desc": "Über 90% aller empirischen Daten in Medizin, Biologie, Psychologie und Wirtschaft sind geclustert oder longitudinal. Standard-OLS unterschätzt Standardfehler dramatisch und erzeugt Scheingenauigkeit. Level 13 bis 18 zeigen dir exakt, wann und wie man Random Intercepts und Slopes einsetzt.",
  "sweetspot_spotlight_cta": "🎯 Direkt zu Mixed Models (L13)",

  // Features Section
  "features_title": "Warum dieser Ansatz funktioniert",
  "features_subtitle": "Klassische Lehre zwingt dich zum Ringen mit Paketsyntax. Wir schärfen dein mathematisches und wissenschaftliches Urteilsvermögen.",
  "feat1_title": "Adaptiver Einstufungs-Scanner",
  "feat1_desc": "Keine Zeitverschwendung. Unser 10-stufiger diagnostischer Scan misst deinen statistischen Horizont und platziert dich genau auf deinem Startlevel.",
  "feat2_title": "24 Interaktive Simulatoren",
  "feat2_desc": "Verstelle Parameter, streue Rauschen ein, drehe 3D-Mannigfaltigkeiten und beobachte live, wie sich p-Werte und Posterior-Verteilungen verändern.",
  "feat3_title": "Übungs-Arena & Fallstrick-Drills",
  "feat3_desc": "80+ realistische Dilemmata zu p-Hacking, Simpson-Paradoxon, Collider Bias, nicht-normalen Residuen und Overdispersion.",
  "feat4_title": "Theoretischer Apex & Verifiziertes Zertifikat",
  "feat4_desc": "Meistere Level 24 und erhalte ein offizielles druckbares Zertifikat in Unendlichdimensionalen Nichtparametrischen Bayes'schen SDEs auf Mannigfaltigkeiten.",
  "cert_spotlight_title": "Der theoretische Apex: Level 24 & Verifizierter Abschluss",
  "cert_spotlight_desc": "Für alle, die an die absolute mathematische Grenze vorstoßen wollen: Unendlichdimensionale nichtparametrische Bayes'sche SDEs auf Mannigfaltigkeiten mit Rough Paths und kausalen Hilberträumen. Schließe alle 24 Level ab und sichere dir dein Zertifikat.",
  "cert_spotlight_cta": "🌌 Das Apex erkunden (L24)",
  "cert_apex_subtitle": "Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces",

  // FAQ
  "faq_title": "Häufig gestellte Fragen (FAQ)",
  "faq_subtitle": "Alles, was du über die Plattform, das Zertifikat und die Methodik wissen musst.",
  "faq_q1": "Warum gibt es in diesem Kurs keine Code-Zeilen in R oder Python?",
  "faq_a1": "Syntax ändert sich ständig; statistische Prinzipien bleiben ewig. 80% der Studierenden scheitern nicht an der Statistik, sondern an Syntaxfehlern und Bibliothekskonflikten. Indem wir den Code entfernen, konzentrierst du dich zu 100% auf Annahmen, Schätztheorie und korrekte wissenschaftliche Interpretation.",
  "faq_q2": "Ist die Plattform wirklich für immer 100% kostenlos?",
  "faq_a2": "Ja, uneingeschränkt. Alle 24 Level, alle Simulatoren, alle 80+ Übungsaufgaben und das offizielle PDF-Zertifikat sind für jeden weltweit frei zugänglich — ohne Paywall, ohne Kreditkarte und ohne Abo.",
  "faq_q3": "Welches Level ist für die meisten Forscher am wertvollsten?",
  "faq_a3": "Phase 3: Lineare Gemischte Modelle (Level 13 bis 18). Weil über 90% aller realen Daten in Medizin, Biologie und Sozialwissenschaften geclustert oder wiederholt gemessen sind, scheitert Standard-OLS regelmäßig. Mixed Models sind das unverzichtbare Werkzeug moderner Forschung.",
  "faq_q4": "Was ist das 'Apex' in Level 24?",
  "faq_a4": "Level 24 vereint Differentialgeometrie (Riemannsche Mannigfaltigkeiten), Terry Lyons' Rough Path Theorie für fraktales Rauschen, unendlichdimensionale Hilberträume (RKHS) und Pearl's kausale Interventionslogik in einer einzigen Synthese-Gleichung.",
  "faq_q5": "Wie funktioniert der adaptive Einstufungs-Scan?",
  "faq_a5": "Ein kurzer 10-Fragen-Test erfasst deine intuitive Schätzkompetenz und dein Methodenwissen. Basierend auf deinem Profil schlägt das System dein optimales Einstiegslevel vor.",
  "faq_bottom_title": "Bereit, dein statistisches Denken auf ein neues Level zu heben?",
  "faq_bottom_subtitle": "Starte in 2 Sekunden. Keine Kreditkarte, keine Registrierung, keine Hürden.",
  "faq_bottom_scan_btn": "🧠 Kostenlose Einstufung starten",
  "faq_bottom_studio_btn": "🚀 Kurs-Studio öffnen",

  // Footer
  "footer_tagline": "Konzeptionelle Meisterschaft in moderner Statistik — von elementaren Lageparametern bis zur Grenze unendlichdimensionaler stochastischer Systeme.",
  "footer_rights": "Alle Rechte vorbehalten. 100% kostenlos & Open Access für die weltweite wissenschaftliche Gemeinschaft.",

  // Studio UI
  "tab_case": "📖 Fallstudie",
  "tab_theory": "🧠 Theorie & Formel",
  "tab_sim": "📊 Interaktiver Simulator",
  "tab_exercises": "🎯 Übungen & Fallstricke",
  "tab_interpretation": "💡 Modellinterpretation",
  "btn_prev_level": "← Vorheriges Level",
  "btn_next_level": "Nächstes Level →",
  "btn_reset_curriculum": "Fortschritt zurücksetzen",
  "arena_title": "🎯 Interaktive Übungs-Arena",
  "arena_subtitle": "80+ vertiefte statistische Dilemmata, Konzeptfragen und Fallstrick-Detektoren über alle 24 Level.",
  "arena_filter_all": "Alle Level (1–24)",
  "arena_filter_f1": "Phase 1: Grundlagen (1–5)",
  "arena_filter_f2": "Phase 2: Regression (6–12)",
  "arena_filter_f3": "Phase 3: Mixed Models (13–18)",
  "arena_filter_f4": "Phase 4: Apex Grenzen (19–24)",
  "arena_stat_answered": "Beantwortet:",
  "arena_stat_score": "Score:",
  "arena_close_btn": "Zurück zum Kurs",
  "scan_modal_title": "🧠 Adaptiver Niveau-Scan",
  "scan_modal_subtitle": "Finde in 10 Fragen dein ideales statistisches Startlevel.",
  "scan_btn_submit": "Antwort bestätigen",
  "scan_btn_next": "Nächste Frage →",
  "scan_btn_finish": "Ergebnis anzeigen",
  "scan_result_title": "🎯 Dein Einstufungsergebnis",
  "scan_btn_jump": "Direkt zu Level starten →",
  "scan_btn_close": "Schließen",
  "cert_modal_title": "🏆 Offizielles Abschlusszertifikat",
  "cert_modal_subtitle": "Herzlichen Glückwunsch! Du hast die vollständige statistische Reise bis Level 24 gemeistert.",
  "cert_name_label": "Dein vollständiger Name für das Zertifikat:",
  "cert_name_default": "Statistik-Forscher",
  "cert_btn_print": "🖨️ Zertifikat drucken / Als PDF speichern",
  "cert_btn_close": "Schließen",

  // Exercises Component
  "ex_title_prefix": "Übungs-Set",
  "ex_btn_prev": "← Vorherige",
  "ex_btn_next": "Nächste Frage →",
  "ex_btn_finish": "Level abschließen ✓",
  "ex_btn_retry": "Erneut versuchen ↺",
  "ex_feedback_correct": "✨ Richtig! Hervorragende statistische Intuition.",
  "ex_feedback_incorrect": "⚠️ Nicht ganz korrekt. Lies die Erklärung unten:",

  // Simulator Specific Strings (83 keys)
  "sim_l1_ceo_salary": "CEO Gehalt:",
  "sim_l1_mean_note": "Stark verzerrt durch Ausreißer",
  "sim_l1_median_note": "Robust & repräsentativ",
  "sim_l1_sd_note": "Aufgeblähte Streuung",
  "sim_l1_iqr_note": "Wahre Kernstreuung",
  "sim_l2_sigma": "Standardabweichung (σ):",
  "sim_l2_cutoff": "Toleranzgrenze:",
  "sim_l2_calc_z": "Berechneter Z-Wert:",
  "sim_l2_rejection": "Ausschuss-Wahrscheinlichkeit P(X > x):",
  "sim_l2_assumption": "Annahme: Reine Normalverteilung",
  "sim_l3_title": "Zentraler Grenzwertsatz (ZGS) Simulator",
  "sim_l3_desc": "Beobachte, wie die Stichprobenmittelwerte einer schiefen Verteilung bei wachsendem N perfekt glockenförmig normalverteilt werden.",
  "sim_l3_sample_size": "Stichprobengröße (N):",
  "sim_l3_shape": "Form der Verteilung:",
  "sim_l3_shape_normal": "Klingt glockenförmig normal (ZGS wirkt)",
  "sim_l3_shape_skewed": "Noch schief / N zu klein für extreme Schiefe",
  "sim_l3_sample_btn": "🎲 1.000 Stichproben Ziehen",
  "sim_l4_samples_btn": "🎲 100 Stichproben Ziehen",
  "sim_l4_coverage": "Empirische Überdeckung:",
  "sim_l5_cohen": "Effektstärke (Cohen's d):",
  "sim_l5_n": "Stichprobengröße pro Gruppe (N):",
  "sim_l5_power": "Statistische Power (1 - β):",
  "sim_l5_type2": "Beta-Fehler (Typ-II-Fehler β):",
  "sim_l6_slope": "Steigung (Slope β₁):",
  "sim_l6_intercept": "Achsenabschnitt (β₀):",
  "sim_l6_model": "Modell:",
  "sim_l6_sse": "Fehlerquadratsumme (SSE):",
  "sim_l6_reset_btn": "🎯 Auf optimale KQ/OLS-Linie zurücksetzen",
  "sim_l7_noise_vars": "Anzahl Rauschvariablen:",
  "sim_l7_r2": "Bestimmtheitsmaß R²:",
  "sim_l7_adj_r2": "Korrigiertes R² (Adjusted):",
  "sim_l7_gap": "Überanpassungs-Lücke (Overfitting Gap):",
  "sim_l8_title": "Residuen-Diagnostik: Heteroskedastizität (Trichterform)",
  "sim_l8_desc": "Bewege den Schieberegler für Heteroskedastizität. Siehe, wie der Trichtereffekt wächst und OLS-Standardfehler ungültig macht!",
  "sim_l8_slider": "Grad der Heteroskedastizität (Trichterstärke):",
  "sim_l8_status_clean": "Homoskedastisch (Gleichmäßige Varianz)",
  "sim_l8_status_severe": "Schwere Heteroskedastizität (Robuste SEs erforderlich!)",
  "sim_l8_bp_test": "Breusch-Pagan Test p-Wert:",
  "sim_l8_white_se": "Einfluss: Robuste Huber-White Standardfehler anwenden",
  "sim_l9_title": "Simpson-Paradoxon Interaktiver Zerleger",
  "sim_l9_desc": "Vergleiche die gepoolte OLS-Trendlinie mit der stratifizierten Kontrollanalyse nach Alter.",
  "sim_l9_btn_pooled": "Gepooltes OLS (Täuschend positiv)",
  "sim_l9_btn_split": "Nach Altersgruppen getrennt (Wahrhaft negativ)",
  "sim_l10_title": "Multikollinearität & VIF-Explosion",
  "sim_l10_desc": "Erhöhe die Korrelation zwischen Prädiktoren von 0.0 auf 0.99 und beobachte die explodierenden Standardfehler.",
  "sim_l10_corr": "Korrelation zwischen X₁ und X₂ (r):",
  "sim_l10_vif": "VIF-Wert:",
  "sim_l10_se_inf": "Standardfehler-Aufblähung (√VIF):",
  "sim_l10_status_safe": "Sicher (VIF < 5)",
  "sim_l10_status_mod": "Mäßig erhöht (5 ≤ VIF < 10)",
  "sim_l10_status_crit": "Kritisch! (VIF ≥ 10, Schätzungen instabil)",
  "sim_l11_title": "Logistische Regressons-Kurve & Konfusionsmatrix",
  "sim_l11_desc": "Verschiebe den Entscheidungsschwellenwert (Cutoff) und sieh die Konfusionsmatrix und Fehlerraten in Echtzeit mitwandern.",
  "sim_l11_cutoff": "Klassifikations-Schwelle (Cutoff τ):",
  "sim_l11_prec": "Präzision (Precision):",
  "sim_l11_rec": "Sensitivität (Recall):",
  "sim_l11_spec": "Spezifität:",
  "sim_l11_f1": "F1-Score:",
  "sim_l12_title": "Koeffizienten-Schrumpfung: Ridge vs Lasso",
  "sim_l12_desc": "Erhöhe die Regularisierungsstärke λ und beobachte, wie Lasso Variablen exakt auf null setzt.",
  "sim_l12_mode_ridge": "L2 Ridge (Schrumpfung)",
  "sim_l12_mode_lasso": "L1 Lasso (Variablenselektion)",
  "sim_l12_lambda": "Strafparameter (λ):",
  "sim_l12_active": "Aktive Nicht-Null-Variablen:",
  "sim_l13_title": "Hierarchische Daten: Scheinkorrelation durch Pseudoreplikation",
  "sim_l13_desc": "Erkenne, warum gepooltes OLS bei Patienten innerhalb von Kliniken dramatisch zu enge Standardfehler meldet.",
  "sim_l14_title": "Mixed Models: Random Intercepts & Shrinkage",
  "sim_l14_desc": "Sieh, wie kleine Gruppen mit wenigen Datenpunkten durch Empirical Bayes zur Gesamtnorm gezogen werden (Partial Pooling).",
  "sim_l15_title": "Mixed Models: Random Slopes & Individuelle Trajektorien",
  "sim_l15_desc": "Jeder Proband erhält seine eigene Steigung und Startniveau. Beobachte den Korrelationseffekt zwischen Start und Tempo.",
  "sim_l16_title": "Verallgemeinerte Lineare Gemischte Modelle (GLMM)",
  "sim_l16_desc": "Logistische und Poisson-Modelle für geclusterte Zähl- und Binärdaten.",
  "sim_l17_title": "Verallgemeinerte Schätzgleichungen (GEE)",
  "sim_l17_desc": "Marginale Populationsmittelwerte mit Arbeitskorrelationsmatrix für robuste Inferenz.",
  "sim_l18_title": "Überlebenszeitanalyse: Kaplan-Meier & Cox-Regression",
  "sim_l18_desc": "Zensierte Ereigniszeiten, Hazard Ratios und Überlebenskurven im Vergleich.",
  "sim_l19_title": "Bayes'sche Grundlagen: Prior, Likelihood & Posterior",
  "sim_l19_desc": "Verschiebe den Prior-Glauben und beobachte, wie Evidenz die Posterior-Verteilung formt.",
  "sim_l20_title": "MCMC-Sampling & Stan/PyMC Ketten-Diagnostik",
  "sim_l20_desc": "Traceplots, R-hat Konvergenz und effektive Stichprobengröße (ESS) interaktiv prüfen.",
  "sim_l21_title": "Gauß-Prozesse: Nichtparametrische Regression & Unsicherheitsband",
  "sim_l21_desc": "Echte Gauß-Prozess-Posterior-Regression mit RBF-Kernel. Das Unsicherheitsband schnürt sich an den Messpunkten auf null zusammen!",
  "sim_l21_add_btn": "➕ Messpunkt Hinzufügen",
  "sim_l22_title": "Kausale Inferenz: Judea Pearl's do-Operator & DAGs",
  "sim_l22_desc": "Schalte zwischen passiver Beobachtung P(Y|X) und do(X)-Intervention um und sieh die Graph Surgery in Aktion.",
  "sim_l23_title": "Stochastische Differentialgleichungen (SDE) & Itô-Diffusion",
  "sim_l23_desc": "Box-Muller Normalrauschen, Drift μ und Diffusions-Ensemble mit theoretischem Erwartungswert.",
  "sim_l23_drift": "Drift-Koeffizient (μ):",
  "sim_l23_diff": "Diffusions-Stärke (σ):",
  "sim_l23_mean_trace": "Erwartungswert E[X_t] = μ·t",
  "sim_l24_title": "Apex Manifold SDE & Fraktale Rough Paths",
  "sim_l24_desc": "Partikelfluss entlang des Sattelflächen-Potenzials unter Rough Path Gedächtniseffekten.",
  "sim_l24_hurst": "Hurst Roughness Exponent (H):",
  "sim_l24_regime_rough": "Ultra-Raues Regime (H < 0.50, Terry Lyons Signatures aktiv)",
  "sim_l24_regime_brownian": "Standard Brownsche Bewegung (H = 0.50, Itô-Diffusion)",
  "sim_l24_regime_persist": "Persistentes Gedächtnisregime (H > 0.50)"
};

// German level metadata
const deMeta = {
  phases: {
    "1": "Phase 1: Grundlagen & Wahrscheinlichkeit",
    "2": "Phase 2: Klassische Regression & Diagnostik",
    "3": "Phase 3: Mixed Models (Praktischer Sweet Spot)",
    "4": "Phase 4: Fortgeschrittene Grenzen & Theoretischer Apex"
  },
  levels: {
    "1": { title: "Deskriptive Statistik & Die Ausreißerfalle", subtitle: "Mittelwert, Median, Standardabweichung und IQR unter Schiefe." },
    "2": { title: "Die Normalverteilung & Z-Scores", subtitle: "Gauss-Glockenkurve, 68-95-99.7-Regel und Z-Standardisierung." },
    "3": { title: "Der Zentrale Grenzwertsatz (ZGS)", subtitle: "Warum Stichprobenmittelwerte normalverteilt konvergieren (mitsamt endlicher Varianz)." },
    "4": { title: "Konfidenzintervalle & Irrtumswahrscheinlichkeit", subtitle: "95%-Überdeckungsgrad, Standardfehler und die Überlappungs-Nuance." },
    "5": { title: "Hypothesentests, Signifikanz & Power", subtitle: "Nullhypothese, p-Werte, Alpha/Beta-Fehler und Cohen's d." },
    "6": { title: "Lineare Regression I: OLS & Die KQ-Linie", subtitle: "Kleinste Quadrate (OLS), Steigung, Achsenabschnitt und Residuen-Eigenschaften." },
    "7": { title: "Lineare Regression II: R² & Scheinkorrelation", subtitle: "Bestimmtheitsmaß, korrigiertes R² und das Risiko von Überanpassung." },
    "8": { title: "Residuenanalyse & Modellannahmen", subtitle: "L.I.N.E.-Kriterien, Heteroskedastizität und Breusch-Pagan-Diagnostik." },
    "9": { title: "Multiple Regression & Confounding", subtitle: "Simpson-Paradoxon, Drittvariablenkontrolle und Ceteris-Paribus-Effekte." },
    "10": { title: "Multikollinearität & VIF-Explosion", subtitle: "Variance Inflation Factor, aufgeblähte Standardfehler und Kollinearitätsfallen." },
    "11": { title: "Logistische Regression & Binäre Klassifikation", subtitle: "Log-Odds, Sigmoid-Funktion, Odds Ratios und Konfusionsmatrix." },
    "12": { title: "Regularisierung: Ridge & Lasso Regression", subtitle: "L1- und L2-Penalisierung, Bias-Variance-Tradeoff und Variablenselektion." },
    "13": { title: "Geclusterte Daten & Das Versagen von OLS", subtitle: "Pseudoreplikation, Intra-Class Correlation (ICC) und Designeffekt." },
    "14": { title: "Mixed Models: Random Intercepts", subtitle: "Hierarchische Modellierung, Varianzkomponenten und Empirical Bayes Shrinkage." },
    "15": { title: "Mixed Models: Random Slopes & Trajektorien", subtitle: "Individuelle Steigungen, Kreuzlevel-Interaktionen und longitudinale Daten." },
    "16": { title: "GLMM: Verallgemeinerte Lineare Gemischte Modelle", subtitle: "Geclusterte Zähldaten und binäre Outcomes mit Random Effects." },
    "17": { title: "Generalisierte Schätzgleichungen (GEE)", subtitle: "Populationsgemittelte Modelle, Arbeitskorrelation und Sandwich-Schätzer." },
    "18": { title: "Überlebenszeitanalyse (Survival Analysis)", subtitle: "Zensierung, Kaplan-Meier-Kurven und Cox Proportional Hazards Modelle." },
    "19": { title: "Bayes'sche Statistik: Prior, Likelihood & Posterior", subtitle: "Satz von Bayes, konjugierte Priors und Glaubwürdigkeitsintervalle." },
    "20": { title: "Bayes'sche MCMC & Probabilistische Programmierung", subtitle: "Markov Chain Monte Carlo, Metropolis-Hastings und Stan/PyMC-Diagnostik." },
    "21": { title: "Gauß-Prozesse (Gaussian Processes)", subtitle: "Nichtparametrische Regression, Kernelfunktionen (RBF) und Unsicherheitsbänder." },
    "22": { title: "Kausale Inferenz in Hilberträumen & Do-Calculus", subtitle: "Gerichtete azyklische Graphen (DAGs), Pearl's do-Operator und Kernel Mean Embeddings." },
    "23": { title: "Stochastische Differentialgleichungen (SDEs)", subtitle: "Brownsche Bewegung, Itô-Lemma und kontinuierliche stochastische Diffusion." },
    "24": { title: "Theoretischer Apex: Manifold SDEs mit Rough Paths", subtitle: "Riemannsche Geometrie, Terry Lyons Rough Paths, Hilberträume und Kausalität." }
  }
};

// German column translations
const deColumns = {
  student: 'Student', studieUren: 'Lernstunden', cijfer: 'Note', model: 'Modell',
  uur: 'Stunde', reactietijdMs: 'Reaktionszeit (ms)', concentratie: 'Konzentration',
  afwijkingMm: 'Abweichung (mm)', afkeur: 'Ausschuss', ziekenhuis: 'Klinik',
  patientId: 'Patienten-ID', hersteld: 'Genesen', leeftijd: 'Alter',
  bmi: 'BMI', bloeddruk: 'Blutdruck', dosisMg: 'Dosis (mg)',
  tempo: 'Tempo', afdeling: 'Abteilung', nPatienten: 'N Patienten', infecties: 'Infektionen',
  behandeling: 'Behandlung', tijdstip: 'Zeitpunkt', score: 'Score',
  regime: 'Regime', maandenTotEvent: 'Monate bis Ereignis', overleden: 'Ereignis / Zensiert',
  succes: 'Erfolg', conditie: 'Bedingung', respons: 'Reaktion'
};

const deCells = {
  'Ja': 'Ja', 'Nee': 'Nein', 'True': 'Wahr', 'False': 'Falsch',
  'Gecontroleerd': 'Kontrolliert', 'Controle': 'Kontrolle', 'Placebo': 'Placebo',
  'Interventie': 'Intervention', 'Hoog': 'Hoch', 'Laag': 'Niedrig',
  'Matig': 'Mäßig', 'Ernstig': 'Schwer', 'Mild': 'Mild'
};

const deCategories = {
  'Concept': 'Konzept', 'Valkuil': 'Fallstrick', 'Dilemma': 'Dilemma',
  'Berekening': 'Berechnung', 'Vraag': 'Frage'
};

const deCompetences = {
  'novice': 'Entdecker der Grundlagen (Level 1–5)',
  'intermediate': 'Regressions-Stratege (Level 6–12)',
  'advanced': 'Meister der Gemischten Modelle (Level 13–18)',
  'expert': 'Pionier der Apex-Theorie (Level 19–24)'
};

console.log("deDict created with keys:", Object.keys(deDict).length);

// Now update data/i18n.js
// 1. Add de to dict
i18nContent = i18nContent.replace(
  'const dict = {\n  "nl": {',
  `const dict = {\n  "de": ${JSON.stringify(deDict, null, 4)},\n  "nl": {`
);

// 2. Add de to levelMeta
i18nContent = i18nContent.replace(
  'const levelMeta = {\n  "en": {',
  `const levelMeta = {\n  "de": ${JSON.stringify(deMeta, null, 4)},\n  "en": {`
);

// 3. Update category mapping in i18n.js
i18nContent = i18nContent.replace(
  "es: { 'Concept': 'Concepto', 'Valkuil': 'Trampa', 'Dilemma': 'Dilema', 'Berekening': 'Cálculo', 'Vraag': 'Pregunta' },",
  `es: { 'Concept': 'Concepto', 'Valkuil': 'Trampa', 'Dilemma': 'Dilema', 'Berekening': 'Cálculo', 'Vraag': 'Pregunta' },\n      de: ${JSON.stringify(deCategories)},`
);

// 4. Update column mapping in i18n.js
i18nContent = i18nContent.replace(
  "es: {\n        student: 'Estudiante',",
  `de: ${JSON.stringify(deColumns, null, 8)},\n      es: {\n        student: 'Estudiante',`
);

// 5. Update cell mapping in i18n.js
i18nContent = i18nContent.replace(
  "es: {\n        'Ja': 'Sí',",
  `de: ${JSON.stringify(deCells, null, 8)},\n      es: {\n        'Ja': 'Sí',`
);

// 6. Update competence mapping in i18n.js
i18nContent = i18nContent.replace(
  "es: {\n        'novice': 'Explorador de Fundamentos (Nivel 1–5)',",
  `de: ${JSON.stringify(deCompetences, null, 8)},\n      es: {\n        'novice': 'Explorador de Fundamentos (Nivel 1–5)',`
);

// 7. Update getLevelCase, getLevelTheory, getLevelSimulation, getLevelInterpretation, getLevelQuiz to handle 'de'
i18nContent = i18nContent.replace(
  "if (lang === 'es' && level.case_es) return { ...level.case, ...level.case_es };",
  "if (lang === 'de' && level.case_de) return { ...level.case, ...level.case_de };\n    if (lang === 'es' && level.case_es) return { ...level.case, ...level.case_es };"
);

i18nContent = i18nContent.replace(
  "if (lang === 'es' && level.theory_es) return { ...level.theory, ...level.theory_es };",
  "if (lang === 'de' && level.theory_de) return { ...level.theory, ...level.theory_de };\n    if (lang === 'es' && level.theory_es) return { ...level.theory, ...level.theory_es };"
);

i18nContent = i18nContent.replace(
  "if (lang === 'es' && level.simulation_es) return { ...level.simulation, ...level.simulation_es };",
  "if (lang === 'de' && level.simulation_de) return { ...level.simulation, ...level.simulation_de };\n    if (lang === 'es' && level.simulation_es) return { ...level.simulation, ...level.simulation_es };"
);

i18nContent = i18nContent.replace(
  "if (lang === 'es' && level.quiz_es) return { ...level.quiz, ...level.quiz_es };",
  "if (lang === 'de' && level.quiz_de) return { ...level.quiz, ...level.quiz_de };\n    if (lang === 'es' && level.quiz_es) return { ...level.quiz, ...level.quiz_es };"
);

// Update getLevelInterpretation for 'de'
i18nContent = i18nContent.replace(
  "if (lang === 'es' && level.interpretation_es) {",
  `if (lang === 'de' && level.interpretation_de) {
      const trans = level.interpretation_de;
      const transMetrics = trans.metrics && trans.metrics.length > 0 ? trans.metrics : orig.metrics;
      return {
        title: trans.title || orig.title,
        recommendation: trans.recommendation || orig.recommendation,
        metrics: transMetrics.map((tm, idx) => formatMetric(tm, orig.metrics ? orig.metrics[idx] : null))
      };
    }
    if (lang === 'es' && level.interpretation_es) {`
);

// Update getExercise for 'de'
i18nContent = i18nContent.replace(
  "if (lang === 'es') {",
  `if (lang === 'de') {
      return {
        ...ex,
        category: ex.category_de || this.translateCategory(ex.category, 'de'),
        title: ex.title_de || ex.title,
        question: ex.question_de || ex.question,
        options: ex.options_de || ex.options,
        explanation: ex.explanation_de || ex.explanation
      };
    }
    if (lang === 'es') {`
);

// 8. Update button active state handling in i18n.js
i18nContent = i18nContent.replace(
  "const esBtn = document.getElementById('lang-btn-es');",
  "const esBtn = document.getElementById('lang-btn-es');\n    const deBtn = document.getElementById('lang-btn-de');"
);

i18nContent = i18nContent.replace(
  "if (esBtn) esBtn.className = inactiveClass;",
  "if (esBtn) esBtn.className = inactiveClass;\n    if (deBtn) deBtn.className = inactiveClass;"
);

i18nContent = i18nContent.replace(
  "if (this.currentLang === 'es' && esBtn) {\n      esBtn.className = activeClass;\n    }",
  `if (this.currentLang === 'es' && esBtn) {
      esBtn.className = activeClass;
    }
    if (this.currentLang === 'de' && deBtn) {
      deBtn.className = activeClass;
    }`
);

fs.writeFileSync(i18nPath, i18nContent, "utf8");
console.log("Successfully updated data/i18n.js with German support!");
