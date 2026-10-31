/**
 * Statistiek Leerplatform - Internationalization (i18n) Module
 * Ondersteunt volledige meertaligheid: Nederlands (nl) en Engels (en).
 */

const dict = {
  nl: {
    // SEO & Meta
    meta_title: "Statistical Journey | Adaptieve Statistiek Cursus van Level 1 t/m 24 Apex",
    meta_desc: "Leer echte statistiek zonder codeer-frustratie. 24 niveaus van centrummaten en mixed models tot oneindig-dimensionale SDEs op manifolds. Met adaptieve niveau-scan en interactieve oefen-arena.",

    // Navigatie
    nav_brand_title: "Statistical",
    nav_brand_sub: "Journey",
    nav_subtitle: "Adaptief Leren • Level 1 t/m 24 Apex (Geometrie, SDE's & Hilbertruimten)",
    nav_status_prefix: "Status:",
    nav_status_unscanned: "Nog niet gescand",
    nav_btn_scan: "Niveau-Scan",
    nav_btn_arena: "Oefen-Arena",
    nav_tab_landing: "🏠 Overzicht",
    nav_tab_studio: "🔬 Cursus Studio",
    nav_btn_sound_title: "Geluid aan/uit",
    nav_btn_reset_title: "Voortgang resetten",

    // Landing Page Hero
    hero_badge: "✨ 100% Statistische Intuïtie • 0 Regels Codeerwerk • Van Basis tot Apex",
    hero_title_1: "Beheers de Echte Statistiek.",
    hero_title_2: "Van Centrummaten tot Hilbertruimten.",
    hero_subtitle: "Geen syntax-hoofdpijn in R of Python. Begrijp wát een model doet, waarom aannames breken, hoe Linear Mixed Models hiërarchische data temmen en hoe oneindig-dimensionale SDE's werken. Volledig adaptief, visueel en interactief.",
    hero_cta_scan: "🧠 Doe de Gratis Niveau-Scan",
    hero_cta_studio: "🚀 Naar de Cursus Studio (Level 1–24)",
    hero_cta_sweetspot: "🎯 Direct naar Mixed Models (L13)",

    // Stats
    stat_levels: "24 Levels",
    stat_levels_desc: "Van Nulmeting tot Apex",
    stat_exercises: "80+ Vragen",
    stat_exercises_desc: "Casussen, Dilemma's & Valkuilen",
    stat_simulators: "24 Simulators",
    stat_simulators_desc: "Directe Visuele Feedback",
    stat_coding: "0 Regels Code",
    stat_coding_desc: "100% Statistische Redeneerkracht",

    // 4 Fases Roadmap
    roadmap_title: "De Vier Fases van Jouw Statistische Reis",
    roadmap_subtitle: "Een helder gestructureerd pad: ontdek waar jij nu staat en werk toe naar statistisch meesterschap.",
    phase1_title: "Fase 1: Fundamenten & Kansrekening",
    phase1_subtitle: "Levels 1 t/m 5",
    phase1_desc: "Z-scores, t-toetsen, ANOVA, p-waarden en betrouwbaarheidsintervallen. Bouw een onwrikbare basis.",
    phase2_title: "Fase 2: Klassieke Regressie & Diagnostiek",
    phase2_subtitle: "Levels 6 t/m 12",
    phase2_desc: "OLS, residuen-analyse, multicollineariteit, heteroscedasticiteit, GLM logistische regressie en Poisson.",
    phase3_title: "Fase 3: Mixed Models (De Praktische Sweet Spot)",
    phase3_subtitle: "Levels 13 t/m 19",
    phase3_desc: "Random intercepts, random slopes, ICC, herhaalde metingen, GEE en introductie tot Bayesiaanse priors. De ruggengraat van 90% van modern onderzoek.",
    phase4_title: "Fase 4: Geavanceerde Grenzen & Apex",
    phase4_subtitle: "Levels 20 t/m 24",
    phase4_desc: "MCMC inferentie, survival curves, causaal redeneren met DAGs, manifold geometrie en oneindig-dimensionale SDEs.",

    // Live Teaser Demo
    teaser_badge: "⚡ Live Intuïtie Preview",
    teaser_title: "Ervaar het 'Aha!' Moment: Simpson's Paradox in Actie",
    teaser_subtitle: "Ontdek in 3 seconden hoe samengevoegde data kan liegen en waarom Mixed Models onmisbaar zijn.",
    teaser_pooled_btn: "Gepoolde OLS (Vertekend Totaal)",
    teaser_mixed_btn: "Mixed Model (Cluster Scheiding)",
    teaser_explanation_pooled: "⚠️ <strong>Gepoolde OLS tekent een negatieve lijn (β = -0.42):</strong> het lijkt alsof sporten cholesterol <em>verhoogt</em>! Dit is de klassieke aggregatievalkuil.",
    teaser_explanation_mixed: "✨ <strong>Binnen elke leeftijdscategorie daalt cholesterol krachtig (β = -0.78):</strong> sporten is juist enorm gezond! In 3 seconden begrijp je waarom Linear Mixed Models bestaan.",

    // Pijn vs Doorbraak
    pain_title: "Waarom Klassiek Statistiekonderwijs Faalt (En Hoe Wij Dit Oplossen)",
    pain_subtitle: "Stop met 80% van je tijd verspillen aan package syntax en missing commas. Focus op wat er écht toe doet: wetenschappelijke en analytische scherpte.",
    pain_trad_title: "De Oude, Frustrerende Manier",
    pain_trad_1: "Eindeloos syntax-fouten debuggen in R of Python in plaats van modelmechanica begrijpen.",
    pain_trad_2: "Blindelings formules stampen en p < 0.05 rapporteren zonder residu-aannames (L.I.N.E.) te controleren.",
    pain_trad_3: "Clustering en afhankelijkheden in data negeren, wat leidt tot dramatisch onderschatte standaardfouten en foute conclusies.",
    pain_our_title: "De Statistical Journey Methode",
    pain_our_1: "100% conceptuele intuïtie met interactieve sliders, directe visualisaties en tastbare datasets.",
    pain_our_2: "Valkuilen direct ontmaskeren: p-hacking, Simpson's paradox, multicollineariteit en heteroscedasticiteit.",
    pain_our_3: "Meesterschap in de Praktische Sweet Spot (Mixed Models L13–19) tot het wiskundige Zenith (Apex L24).",

    // Doelgroepen
    target_title: "Gebouwd voor Onderzoekers, Data Scientists & Analisten",
    target_subtitle: "Of je nu publiceert in toptijdschriften of strategische keuzes onderbouwt: zuivere statistische intuïtie is je grootste hefboom.",
    target_1_title: "Promovendi & Academische Onderzoekers",
    target_1_desc: "Modelleer herhaalde metingen, patiënt-clusters en survivaldata vol zelfvertrouwen voor peer-reviewed papers.",
    target_2_title: "Data Scientists & Machine Learning Engineers",
    target_2_desc: "Kijk dieper dan 'model.fit()'. Begrijp causale DAGs, Bayesiaanse priors, en manifold-structuren.",
    target_3_title: "Analisten & Strategische Beslissers",
    target_3_desc: "Herken misleidende dashboards, ontmasker p-hacking en voorkom kostbare bedrijfsfouten door foute data-aannames.",

    // Spotlights
    sweetspot_spotlight_title: "De Praktische Sweet Spot: Linear Mixed Models (Levels 13–19)",
    sweetspot_spotlight_desc: "Meer dan 90% van alle reële data in geneeskunde, biologie, psychologie en e-commerce is geclusterd of longitudinaal. Standaard OLS onderschat standaardfouten dramatisch. Levels 13 t/m 19 leren je exact wanneer en hoe je Random Intercepts en Random Slopes inzet.",
    sweetspot_spotlight_cta: "🎯 Spring Direct naar Mixed Models (L13)",
    cert_spotlight_title: "Het Theoretische Apex: Level 24 & Geverifieerd Certificaat",
    cert_spotlight_desc: "Voor wie de uiterste grenzen wil verkennen: Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces. Voltooi alle 24 niveaus en download je geverifieerde certificaat.",
    cert_spotlight_cta: "🏆 Bekijk Level 24 Apex",
    final_cta_title: "Klaar om Jouw Kijk op Data Voorgoed te Veranderen?",
    final_cta_subtitle: "Geen account verplicht. Geen creditcard. 100% gratis en open access. Begin direct bij Level 1 of doe de 2-minuten intake.",

    // Waarom Deze Training
    features_title: "Waarom Deze Aanpak Werkt",
    features_subtitle: "Traditioneel onderwijs dwingt je te vechten met syntax. Wij trainen je wiskundige en conceptuele denkvermogen.",
    feat1_title: "Adaptieve Intake Scanner",
    feat1_desc: "Geen tijdverspilling. Onze 10-delige scenario-scan detecteert je actuele kennishorizon en plaatst je direct bij het juiste niveau.",
    feat2_title: "24 Interactieve Simulators",
    feat2_desc: "Verschuif parameters, voeg ruis toe, roteer 3D manifolds en ervaar direct hoe p-waarden en posterior distributies reageren.",
    feat3_title: "Oefen-Arena & Valkuilen",
    feat3_desc: "80+ realistische casussen over p-hacking, Simpson's paradox, collider bias, residu-afwijkingen en overdispersie.",
    feat4_title: "Theoretisch Apex & Certificaat",
    feat4_desc: "Rond Level 24 af en behaal het felbegeerde certificaat in Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds.",

    // FAQ
    faq_title: "Veelgestelde Vragen (FAQ)",
    faq_q1: "Heb ik programmeerervaring nodig (Python / R)?",
    faq_a1: "Nee, absoluut niet. Deze cursus focust 100% op statistische intuïtie, aannames, modelkeuze en interpretatie van diagnostiek. Alle wiskunde en simulaties draaien live in je browser.",
    faq_q2: "Hoe werkt de adaptieve niveauscan?",
    faq_a2: "In 10 diagnostische scenario-vragen toetst het algoritme je beheersing van basishypotheses tot gevorderde mixed models en bayesiaanse principes, en beveelt direct een startlevel aan.",
    faq_q3: "Kan ik direct naar een specifiek level springen?",
    faq_a3: "Ja, alle 24 niveaus zijn direct toegankelijk via het menu. Je kunt meteen duiken in Mixed Models (Level 13) of het Apex (Level 24).",
    faq_q4: "Is er een officieel bewijs van voltooiing?",
    faq_a4: "Ja, bij het voltooien van Level 24 kun je een officieel, geverifieerd digitaal certificaat genereren en afdrukken of opslaan als PDF.",

    // App Studio View
    sidebar_title: "Statistical Journey (1–24)",
    step_indicator: "Stap",
    of: "van",
    coach_title: "Adaptieve Statistiek Coach",
    coach_status_label: "Jouw Status:",
    recalibrate_btn: "⚡ Herijk Niveau",
    arena_btn: "🎯 Oefen-Arena",
    case_title: "De Casus",
    research_question: "De Onderzoeksvraag:",
    core_concept: "Kernconcept & Wiskundig Inzicht",
    key_formula: "Wiskundige Definitie:",
    metrics_title: "Model Metrieken & Diagnostiek",
    simulation_title: "Interactief Simulatie-Lab",
    recommendations_title: "Praktijkadvies & Modelselectie",
    exercises_title: "Interactieve Oefenreeks",
    exercise_step: "Oefening",
    btn_check: "Controleer Antwoord",
    btn_retry: "Opnieuw Proberen",
    btn_next: "Volgende Oefening",
    btn_complete_level: "Level Voltooien & Volgende",
    congrats_title: "Uitstekend Gedaan!",
    congrats_desc: "Je hebt alle oefeningen van dit level onder de knie. Klaar voor de volgende stap?",
    btn_prev_level: "← Vorig Level",
    btn_next_level: "Volgend Level →",
    btn_apex_cert: "🏆 Bekijk Apex Certificaat",

    // Adaptive Scan Modal
    scan_modal_title: "Adaptieve Statistische Intake",
    scan_modal_desc: "Beantwoord 10 diagnostische scenario-vragen om jouw startniveau te bepalen.",
    scan_step: "Vraag",
    scan_btn_start: "🚀 Start Niveau-Scan",
    scan_result_title: "Intake Analyse Voltooid!",
    scan_result_advice: "Geadviseerd Startlevel:",
    scan_btn_go: "Ga Direct naar Dit Level",

    // Practice Arena Modal
    arena_modal_title: "De Oefen-Arena",
    arena_modal_desc: "Test je vaardigheid met een oneindige stroom vragen over alle 24 levels.",
    arena_filter_all: "Alles (L1–L24)",
    arena_filter_f1: "Fase 1: Fundamenten",
    arena_filter_f2: "Fase 2: Regressie",
    arena_filter_f3: "Fase 3: Mixed Models",
    arena_filter_f4: "Fase 4: Geavanceerd",
    arena_streak: "Huidige Reeks:",
    arena_btn_next: "Volgende Vraag →",

    // Certificaat Modal
    cert_badge: "Certificaat van het Theoretische Apex",
    cert_headline: "Meesterschap in Geavanceerde Statistische Modellen",
    cert_desc: "Hierbij wordt bevestigd dat de kandidaat alle 24 levels van de Statistical Journey heeft voltooid: van Beschrijvende Statistiek en Klassieke Regressie, via de Praktische Sweet Spot van Linear Mixed Models, tot het Zenith van:",
    cert_name_default: "Statistiek Reiziger",
    cert_earned_on: "Behaald op",
    cert_total_xp: "Totaal behaald: 2.400+ XP",
    cert_btn_print: "🖨️ Print / Opslaan als PDF",
    cert_btn_close: "Sluiten",

    // Footer
    footer_text: "Statistical Journey • 80+ Oefeningen & Diagnostische Vragen • Van Centrummaten tot Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces"
  },

  en: {
    // SEO & Meta
    meta_title: "Statistical Journey | Adaptive Statistics Course from Level 1 to Level 24 Apex",
    meta_desc: "Master true statistical reasoning without coding friction. 24 progressive levels from descriptive statistics and mixed models to infinite-dimensional SDEs on manifolds. Adaptive intake scan and interactive practice arena.",

    // Navigation
    nav_brand_title: "Statistical",
    nav_brand_sub: "Journey",
    nav_subtitle: "Adaptive Learning • Level 1 to 24 Apex (Geometry, SDEs & Hilbert Spaces)",
    nav_status_prefix: "Status:",
    nav_status_unscanned: "Not yet scanned",
    nav_btn_scan: "Level Scan",
    nav_btn_arena: "Practice Arena",
    nav_tab_landing: "🏠 Overview",
    nav_tab_studio: "🔬 Course Studio",
    nav_btn_sound_title: "Toggle sound",
    nav_btn_reset_title: "Reset progress",

    // Landing Page Hero
    hero_badge: "✨ 100% Statistical Intuition • Zero Code Friction • From Basics to Apex",
    hero_title_1: "Master Real Statistics.",
    hero_title_2: "From Descriptives to Hilbert Spaces.",
    hero_subtitle: "No syntax headaches in R or Python. Understand what models truly do, why assumptions fail, how Linear Mixed Models tame hierarchical data, and how infinite-dimensional SDEs operate. Completely adaptive, visual, and interactive.",
    hero_cta_scan: "🧠 Take the Free Level Scan",
    hero_cta_studio: "🚀 Enter Course Studio (Levels 1–24)",
    hero_cta_sweetspot: "🎯 Jump to Mixed Models (L13)",

    // Stats
    stat_levels: "24 Levels",
    stat_levels_desc: "From Zero to Apex",
    stat_exercises: "80+ Problems",
    stat_exercises_desc: "Cases, Dilemmas & Pitfalls",
    stat_simulators: "24 Simulators",
    stat_simulators_desc: "Real-Time Visual Feedback",
    stat_coding: "0 Lines of Code",
    stat_coding_desc: "100% Statistical Reasoning",

    // 4 Phases Roadmap
    roadmap_title: "The Four Phases of Your Statistical Journey",
    roadmap_subtitle: "A crystal-clear roadmap: identify your current standing and advance to statistical mastery.",
    phase1_title: "Phase 1: Foundations & Probability",
    phase1_subtitle: "Levels 1 to 5",
    phase1_desc: "Z-scores, t-tests, ANOVA, p-values, and confidence intervals. Build an unbreakable bedrock.",
    phase2_title: "Phase 2: Classical Regression & Diagnostics",
    phase2_subtitle: "Levels 6 to 12",
    phase2_desc: "OLS, residual diagnostics, multicollinearity, heteroscedasticity, GLM logistic regression, and Poisson models.",
    phase3_title: "Phase 3: Mixed Models (The Practical Sweet Spot)",
    phase3_subtitle: "Levels 13 to 19",
    phase3_desc: "Random intercepts, random slopes, ICC, repeated measures, GEE, and Bayesian priors. The powerhouse for 90% of real-world research.",
    phase4_title: "Phase 4: Advanced Frontiers & Apex",
    phase4_subtitle: "Levels 20 to 24",
    phase4_desc: "MCMC inference, survival analysis, causal reasoning with DAGs, manifold geometry, and infinite-dimensional SDEs.",

    // Live Teaser Demo
    teaser_badge: "⚡ Live Intuition Preview",
    teaser_title: "Experience the 'Aha!' Moment: Simpson's Paradox in Real-Time",
    teaser_subtitle: "Discover in 3 seconds how aggregated data can mislead, and why Linear Mixed Models are essential.",
    teaser_pooled_btn: "Pooled OLS (Deceptive Aggregate)",
    teaser_mixed_btn: "Mixed Model (Cluster Separation)",
    teaser_explanation_pooled: "⚠️ <strong>Pooled OLS produces a negative slope (β = -0.42):</strong> it suggests exercise <em>increases</em> cholesterol! This is the classical aggregation trap.",
    teaser_explanation_mixed: "✨ <strong>Within each age group, exercise sharply reduces cholesterol (β = -0.78):</strong> physical activity is protective! In 3 seconds, you intuitively grasped why Linear Mixed Models exist.",

    // Pain vs Breakthrough
    pain_title: "Why Traditional Statistics Education Fails (And How We Fix It)",
    pain_subtitle: "Stop wasting 80% of your energy debugging package syntax and missing commas. Focus on what truly matters: scientific judgment.",
    pain_trad_title: "The Old, Frustrating Way",
    pain_trad_1: "Endless syntax debugging in R or Python instead of understanding underlying model mechanics.",
    pain_trad_2: "Blindly memorizing Greek formulas and reporting p < 0.05 without inspecting residual assumptions (L.I.N.E.).",
    pain_trad_3: "Ignoring clustering and dependencies, yielding dramatically deflated standard errors and false discoveries.",
    pain_our_title: "The Statistical Journey Method",
    pain_our_1: "100% conceptual mastery through interactive parameter sliders, instant visual feedback, and real-world cases.",
    pain_our_2: "Spot dangerous traps instantly: p-hacking, Simpson's paradox, multicollinearity, and heteroscedasticity.",
    pain_our_3: "Master the Practical Sweet Spot (Mixed Models L13–19) up to the mathematical Zenith (Apex L24).",

    // Target Personas
    target_title: "Built for Serious Researchers, Data Scientists & Analysts",
    target_subtitle: "Whether you publish in top journals or make high-stakes business bets: pure statistical intuition is your highest-leverage asset.",
    target_1_title: "PhD Candidates & Academic Researchers",
    target_1_desc: "Confidently model repeated measures, hierarchical clustering (ICC), and survival curves for peer-reviewed papers.",
    target_2_title: "Data Scientists & Machine Learning Engineers",
    target_2_desc: "Look deeper than 'model.fit()'. Master causal diagrams (DAGs), Bayesian priors, and curved manifold structures.",
    target_3_title: "Analysts & Strategic Decision Makers",
    target_3_desc: "Spot misleading dashboards, unmask hidden confounders, and avoid costly strategic blunders caused by flawed assumptions.",

    // Spotlights
    sweetspot_spotlight_title: "The Practical Sweet Spot: Linear Mixed Models (Levels 13–19)",
    sweetspot_spotlight_desc: "Over 90% of empirical data in medicine, biology, psychology, and commerce is clustered or longitudinal. Standard OLS severely underestimates standard errors, generating spurious precision. Levels 13 to 19 teach you exactly when and how to deploy Random Intercepts and Random Slopes.",
    sweetspot_spotlight_cta: "🎯 Jump to Mixed Models (L13)",
    cert_spotlight_title: "The Theoretical Apex: Level 24 & Verified Completion",
    cert_spotlight_desc: "For those who want to venture to the absolute mathematical frontier: Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces. Complete all 24 levels and claim your official certificate.",
    cert_spotlight_cta: "🏆 Explore Level 24 Apex",
    final_cta_title: "Ready to Transform How You Think About Data?",
    final_cta_subtitle: "No registration required. No credit card. 100% free and open access. Start with Level 1 or take the 2-minute diagnostic intake.",

    // Why This Platform
    features_title: "Why This Approach Works",
    features_subtitle: "Traditional education forces you to wrestle with library syntax. We sharpen your mathematical and scientific reasoning.",
    feat1_title: "Adaptive Intake Scanner",
    feat1_desc: "Zero time wasted. Our 10-step diagnostic scan measures your mathematical horizon and places you right at your optimal start level.",
    feat2_title: "24 Interactive Simulators",
    feat2_desc: "Adjust parameters, inject noise, rotate 3D manifolds, and observe how p-values and posterior distributions shift in real time.",
    feat3_title: "Practice Arena & Pitfall Drills",
    feat3_desc: "80+ realistic dilemmas covering p-hacking, Simpson's paradox, collider bias, non-normal residuals, and overdispersion.",
    feat4_title: "Theoretical Apex & Verified Certificate",
    feat4_desc: "Master Level 24 and earn an official printable certificate in Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds.",

    // FAQ
    faq_title: "Frequently Asked Questions (FAQ)",
    faq_q1: "Do I need any programming experience in R or Python?",
    faq_a1: "No, absolutely not. This course focuses 100% on statistical intuition, assumptions, model selection, and residual diagnostics. All mathematics and simulations execute live inside your browser.",
    faq_q2: "How does the adaptive intake scan work?",
    faq_a2: "In 10 diagnostic scenario questions, the algorithm evaluates your grasp from foundational hypothesis testing to advanced mixed models and Bayesian principles, recommending your ideal starting level.",
    faq_q3: "Can I jump directly to any level?",
    faq_a3: "Yes! All 24 levels are fully unlocked. You can jump directly to Linear Mixed Models (Level 13) or explore the Apex (Level 24).",
    faq_q4: "Is there an official proof of completion?",
    faq_a4: "Yes, once you finish Level 24, you can generate and print or save an official verified completion certificate as PDF.",

    // App Studio View
    sidebar_title: "Statistical Journey (1–24)",
    step_indicator: "Step",
    of: "of",
    coach_title: "Adaptive Statistics Coach",
    coach_status_label: "Your Status:",
    recalibrate_btn: "⚡ Recalibrate Level",
    arena_btn: "🎯 Practice Arena",
    case_title: "The Case Study",
    research_question: "The Research Question:",
    core_concept: "Core Concept & Mathematical Insight",
    key_formula: "Mathematical Definition:",
    metrics_title: "Model Metrics & Diagnostics",
    simulation_title: "Interactive Simulation Lab",
    recommendations_title: "Practical Guidance & Model Choice",
    exercises_title: "Interactive Exercise Set",
    exercise_step: "Exercise",
    btn_check: "Check Answer",
    btn_retry: "Try Again",
    btn_next: "Next Exercise",
    btn_complete_level: "Complete Level & Next",
    congrats_title: "Outstanding Work!",
    congrats_desc: "You have mastered all exercises in this level. Ready for the next challenge?",
    btn_prev_level: "← Previous Level",
    btn_next_level: "Next Level →",
    btn_apex_cert: "🏆 View Apex Certificate",

    // Adaptive Scan Modal
    scan_modal_title: "Adaptive Statistical Intake",
    scan_modal_desc: "Answer 10 diagnostic scenario questions to pinpoint your ideal starting level.",
    scan_step: "Question",
    scan_btn_start: "🚀 Start Level Scan",
    scan_result_title: "Intake Analysis Complete!",
    scan_result_advice: "Recommended Starting Level:",
    scan_btn_go: "Proceed to This Level",

    // Practice Arena Modal
    arena_modal_title: "The Practice Arena",
    arena_modal_desc: "Sharpen your skills with an infinite stream of challenges across all 24 levels.",
    arena_filter_all: "All (L1–L24)",
    arena_filter_f1: "Phase 1: Foundations",
    arena_filter_f2: "Phase 2: Regression",
    arena_filter_f3: "Phase 3: Mixed Models",
    arena_filter_f4: "Phase 4: Advanced",
    arena_streak: "Current Streak:",
    arena_btn_next: "Next Question →",

    // Certificate Modal
    cert_badge: "Certificate of Theoretical Apex",
    cert_headline: "Mastery in Advanced Statistical Models",
    cert_desc: "This certifies that the candidate has successfully completed all 24 levels of the Statistical Journey: from Descriptive Statistics and Classical Regression, through the Practical Sweet Spot of Linear Mixed Models, to the Zenith of:",
    cert_name_default: "Statistics Voyager",
    cert_earned_on: "Completed on",
    cert_total_xp: "Total Earned: 2,400+ XP",
    cert_btn_print: "🖨️ Print / Save as PDF",
    cert_btn_close: "Close",

    // Footer
    footer_text: "Statistical Journey • 80+ Problems & Diagnostic Scenarios • From Descriptive Statistics to Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces"
  }
};

const levelMeta = {
  en: {
    phases: {
      1: "Phase 1: Foundations & Probability",
      2: "Phase 2: Classical Regression & Diagnostics",
      3: "Phase 3: Mixed Models (Practical Sweet Spot)",
      4: "Phase 4: Advanced Frontiers & Theoretical Apex"
    },
    levels: {
      1: { title: "Descriptive Statistics & The Outlier Trap", badge: "Foundation", subtitle: "Mean, median, dispersion, and why a single metric can distort reality." },
      2: { title: "Probability Distributions & The Normal Curve", badge: "Foundation", subtitle: "Z-scores, the 68-95-99.7 rule, and deviations from bell shapes." },
      3: { title: "The Central Limit Theorem (CLT)", badge: "Foundation", subtitle: "Why sample means converge to normality regardless of the underlying population shape." },
      4: { title: "Confidence Intervals (CI) & Margin of Error", badge: "Foundation", subtitle: "How certain can we be? The true interpretation of the 95% Confidence Interval." },
      5: { title: "Hypothesis Testing, t-tests & The p-value", badge: "Foundation", subtitle: "Null hypothesis, Type I/II errors, and the gulf between statistical and clinical relevance." },
      6: { title: "Linear Regression I: OLS & The Story of the Line", badge: "Classical Regression", subtitle: "Best fit line, slope beta_1, intercept, and sum of squared residuals." },
      7: { title: "Goodness of Fit: R², Adjusted R² and the F-test", badge: "Classical Regression", subtitle: "Explaining variance vs penalizing noise predictors." },
      8: { title: "Model Assumptions & Diagnostics (L.I.N.E.)", badge: "Classical Regression", subtitle: "Linearity, independence, normality of residuals, and homoscedasticity." },
      9: { title: "Multiple Regression & Confounding (Simpson's Paradox)", badge: "Classical Regression", subtitle: "How omitted confounders can reverse observed directional effects." },
      10: { title: "Multicollinearity & VIF (Variance Inflation Factor)", badge: "Classical Regression", subtitle: "When predictors correlate heavily: inflated standard errors and erratic coefficients." },
      11: { title: "Logistic Regression & Odds Ratios", badge: "Classical Regression", subtitle: "Modeling binary outcomes, log-odds, sigmoid curve, and clinical odds ratios." },
      12: { title: "Regularization: Ridge (L₂) & Lasso (L₁)", badge: "Classical Regression", subtitle: "Shrinkage penalties, sparsity, feature selection, and the bias-variance tradeoff." },
      13: { title: "Clustered Data & The Failure of Standard OLS", badge: "Mixed Models (Sweet Spot)", subtitle: "Intraclass correlation (ICC), pseudoreplication, and why OLS underestimates standard errors." },
      14: { title: "Linear Mixed Models I: Random Intercepts", badge: "Mixed Models (Sweet Spot)", subtitle: "Allowing groups to have baseline variability while sharing a common slope." },
      15: { title: "Linear Mixed Models II: Random Slopes & Repeated Measures", badge: "Practical Sweet Spot", subtitle: "Hierarchical modeling where treatment effects vary across individual units over time." },
      16: { title: "Generalized Linear Mixed Models (GLMM)", badge: "GLMM", subtitle: "Non-normal responses (binary, count) combined with random group effects." },
      17: { title: "Generalized Additive Models (GAMs)", badge: "GAMs", subtitle: "Smoothing splines and non-linear relationships without manual polynomial tuning." },
      18: { title: "Survival Analysis & Time-to-Event Modeling", badge: "Survival Analysis", subtitle: "Right-censoring, Kaplan-Meier curves, hazard ratios, and Cox proportional hazards." },
      19: { title: "Bayesian Foundations: Prior, Likelihood & Posterior", badge: "Bayesian", subtitle: "Updating prior beliefs with empirical evidence using Bayes' Theorem." },
      20: { title: "Bayesian MCMC & Hamiltonian Monte Carlo (HMC)", badge: "MCMC", subtitle: "Sampling intractable posterior geometries using Stan and PyMC." },
      21: { title: "Non-parametric Bayesian Models & Gaussian Processes", badge: "Gaussian Processes", subtitle: "Kernel tricks and placing distributions over function spaces rather than fixed parameters." },
      22: { title: "Causal Inference in Hilbert Spaces & Do-Calculus", badge: "Causal Inference", subtitle: "Pearl's do-calculus, confounder adjustment, instrumental variables, and RKHS kernels." },
      23: { title: "Stochastic Differential Equations (SDEs)", badge: "SDEs", subtitle: "Ito calculus, continuous diffusion drift, Brownian motion, and stochastic volatility." },
      24: { title: "Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces", badge: "The Ultimate Apex (Level 24)", subtitle: "Non-Euclidean Riemannian manifolds, rough path signatures, and infinite-dimensional RKHS operators." }
    }
  }
};

window.I18N = {
  currentLang: 'en',
  dict: dict,
  levelMeta: levelMeta,

  t(key) {
    const lang = this.currentLang || 'en';
    if (this.dict[lang] && this.dict[lang][key]) {
      return this.dict[lang][key];
    }
    if (this.dict['en'] && this.dict['en'][key]) {
      return this.dict['en'][key];
    }
    if (this.dict['nl'] && this.dict['nl'][key]) {
      return this.dict['nl'][key];
    }
    return key;
  },

  getLevelTitle(level) {
    if (this.currentLang === 'en' && this.levelMeta.en.levels[level.id]) {
      return this.levelMeta.en.levels[level.id].title;
    }
    return level.title;
  },

  getLevelSubtitle(level) {
    if (this.currentLang === 'en' && this.levelMeta.en.levels[level.id]) {
      return this.levelMeta.en.levels[level.id].subtitle;
    }
    return level.subtitle;
  },

  getLevelBadge(level) {
    if (this.currentLang === 'en' && this.levelMeta.en.levels[level.id]) {
      return this.levelMeta.en.levels[level.id].badge;
    }
    return level.badge;
  },

  getPhaseTitle(phaseNumber) {
    if (this.currentLang === 'en' && this.levelMeta.en.phases[phaseNumber]) {
      return this.levelMeta.en.phases[phaseNumber];
    }
    const defaultPhases = {
      1: "Fase 1: De Fundamenten",
      2: "Fase 2: Klassieke Regressie & Diagnostiek",
      3: "Fase 3: Mixed Models (De Praktische Sweet Spot)",
      4: "Fase 4: Geavanceerde Grenzen & Apex"
    };
    return defaultPhases[phaseNumber] || `Fase ${phaseNumber}`;
  },

  setLang(lang) {
    if (lang !== 'nl' && lang !== 'en') lang = 'en';
    this.currentLang = lang;
    try {
      localStorage.setItem('statistiek_lang', lang);
    } catch(e) {}

    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      this.applyToDOM();
    }

    if (window.StatAnalytics && typeof window.StatAnalytics.trackLanguageChange === 'function') {
      window.StatAnalytics.trackLanguageChange(lang);
    }
  },

  init() {
    try {
      const saved = localStorage.getItem('statistiek_lang');
      if (saved === 'en' || saved === 'nl') {
        this.currentLang = saved;
      } else {
        // English first by default!
        this.currentLang = 'en';
      }
    } catch(e) {
      this.currentLang = 'en';
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.currentLang;
    }
  },

  applyToDOM() {
    if (typeof document === 'undefined') return;

    // Update title
    document.title = this.t('meta_title');

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', this.t('meta_desc'));
    }

    // Update alle elementen met data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val) {
        if (el.tagName === 'INPUT' && el.getAttribute('type') === 'button') {
          el.value = val;
        } else {
          el.innerHTML = val;
        }
      }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.t(key);
      if (val) el.setAttribute('placeholder', val);
    });

    // Update titles
    const titles = document.querySelectorAll('[data-i18n-title]');
    titles.forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const val = this.t(key);
      if (val) el.setAttribute('title', val);
    });

    // Update active state in language selector buttons
    const nlBtn = document.getElementById('lang-btn-nl');
    const enBtn = document.getElementById('lang-btn-en');
    if (nlBtn && enBtn) {
      if (this.currentLang === 'nl') {
        nlBtn.className = "px-2 py-1 rounded bg-indigo-600 text-white font-bold text-xs shadow transition";
        enBtn.className = "px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-white font-medium text-xs transition";
      } else {
        nlBtn.className = "px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-white font-medium text-xs transition";
        enBtn.className = "px-2 py-1 rounded bg-indigo-600 text-white font-bold text-xs shadow transition";
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.I18N.init();
}
