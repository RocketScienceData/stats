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
    nav_curriculum_btn: "📚 Lessen (1–24)",
    curriculum_open_btn: "📚 Alle 24 Lessen",
    btn_prev_level_short: "Vorig Level",
    btn_next_level_short: "Volgend Level",
    nav_btn_sound_title: "Geluid aan/uit",
    nav_btn_reset_title: "Voortgang resetten",

    // Landing Page Hero
    hero_badge: "🎁 100% Gratis & Open Access • Niveau van een €2.500+ Masteropleiding • Direct Starten Zonder Account",
    hero_title_1: "Beheers de Echte Statistiek.",
    hero_title_2: "Van Centrummaten tot Hilbertruimten.",
    hero_subtitle: "Geen syntax-hoofdpijn in R of Python. Begrijp wát een model doet, waarom aannames breken, hoe Linear Mixed Models hiërarchische data temmen en hoe oneindig-dimensionale SDE's werken. Volledig adaptief, visueel en interactief — 100% gratis en open access.",
    hero_cta_scan: "🧠 Start Direct Gratis Niveau-Scan (2 min)",
    hero_cta_studio: "🚀 Bekijk Alle 24 Gratis Lessen",
    hero_cta_sweetspot: "🎯 Direct naar Mixed Models (L13)",

    // Stats
    stat_levels: "24 Levels",
    stat_levels_desc: "100% Direct Toegankelijk",
    stat_exercises: "80+ Vragen",
    stat_exercises_desc: "Casussen, Dilemma's & Valkuilen",
    stat_simulators: "24 Simulators",
    stat_simulators_desc: "Directe Visuele Feedback",
    stat_coding: "€0 Kosten",
    stat_coding_desc: "100% Gratis & Open Access",

    // Gratis Garantie Waardestack
    free_section_badge: "💎 De 100% Gratis & Open Access Garantie",
    free_section_title: "Kwaliteit van een €2.500+ Masteropleiding. Voor Altijd 100% Gratis.",
    free_section_subtitle: "Waar universiteiten en data science bootcamps duizenden euro's voor vragen achter betaalmuren, maken wij statistische scherpte openbaar en kosteloos toegankelijk voor iedereen ter wereld.",
    free_pillar_1_title: "🔓 24 Niveaus Direct Volledig Ontgrendeld",
    free_pillar_1_desc: "Geen 'freemium'-valstrik waarbij geavanceerde lessen ineens achter een betaalmuur zitten. Spring direct naar Mixed Models (L13) of het Apex (L24).",
    free_pillar_2_title: "💳 Geen Creditcard, Geen 'Trial'",
    free_pillar_2_desc: "Je hoeft nooit betaalgegevens in te vullen. Geen proefperiode die stilletjes overgaat in een maandelijks abonnement. Geen addertjes onder het gras.",
    free_pillar_3_title: "⚡ Direct Starten Zonder Account",
    free_pillar_3_desc: "Geen verplichte formulieren, geen wachtwoorden, geen marketing-spam in je inbox. Je start letterlijk binnen 2 seconden direct in je browser.",
    free_pillar_4_title: "📜 Gratis Geverifieerd Certificaat",
    free_pillar_4_desc: "Voltooi Level 24 en download je officiële digitale certificaat kosteloos als PDF. Geen upgrade-kosten voor jouw bewijs van wiskundig meesterschap.",
    free_compare_title: "De Eerlijke Waardevergelijking:",
    free_compare_trad_label: "Universitair Mastervak of Commerciële Bootcamp",
    free_compare_trad_price: "€1.800 – €4.500+",
    free_compare_trad_desc: "Vaak gedomineerd door syntax-fouten in R/Python debuggen en starre theorie zonder interactieve simulaties.",
    free_compare_our_label: "Statistical Journey Platform",
    free_compare_our_price: "€0 (Voor Altijd 100% Gratis & Open)",
    free_compare_our_desc: "24 interactieve simulators, 80+ praktijkcasussen, adaptieve intake-scan en geverifieerd certificaat inbegrepen.",

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
    phase3_subtitle: "Levels 13 t/m 18",
    phase3_desc: "Random intercepts, random slopes, ICC, herhaalde metingen, GEE en GLMM. De ruggengraat van 90% van modern empirisch onderzoek.",
    phase4_title: "Fase 4: Geavanceerde Grenzen & Apex",
    phase4_subtitle: "Levels 19 t/m 24",
    phase4_desc: "Bayesiaans denken, MCMC sampling, survival curves, causale DAGs, manifold geometrie en oneindig-dimensionale SDEs.",

    // Live Teaser Demo
    teaser_badge: "⚡ Live Intuïtie Preview",
    teaser_title: "Ervaar het 'Aha!' Moment: Simpson's Paradox in Actie",
    teaser_subtitle: "Ontdek in 3 seconden hoe samengevoegde data kan liegen en waarom Mixed Models onmisbaar zijn.",
    teaser_pooled_btn: "Gepoolde OLS (Vertekend Totaal)",
    teaser_mixed_btn: "Mixed Model (Cluster Scheiding)",
    teaser_explanation_pooled: "⚠️ <strong>Gepoolde OLS tekent een stijgende lijn (β = +0.54):</strong> doordat ouderen vaker sporten én een hoger basischolesterol hebben, lijkt het alsof sporten cholesterol <em>verhoogt</em>! Dit is de klassieke Simpson's Paradox aggregatievalkuil.",
    teaser_explanation_mixed: "✨ <strong>Binnen elke leeftijdscategorie daalt cholesterol krachtig (β = -0.78):</strong> sporten verlaagt cholesterol wél degelijk! Een Mixed Model scheidt leeftijd van het ware trainingseffect.",

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
    sweetspot_spotlight_title: "De Praktische Sweet Spot: Linear Mixed Models (Levels 13–18)",
    sweetspot_spotlight_desc: "Meer dan 90% van alle reële data in geneeskunde, biologie, psychologie en e-commerce is geclusterd of longitudinaal. Standaard OLS onderschat standaardfouten dramatisch. Levels 13 t/m 18 leren je exact wanneer en hoe je Random Intercepts en Random Slopes inzet.",
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
    nav_curriculum_btn: "📚 Curriculum (1–24)",
    curriculum_open_btn: "📚 All 24 Lessons",
    btn_prev_level_short: "Previous Level",
    btn_next_level_short: "Next Level",
    nav_btn_sound_title: "Toggle sound",
    nav_btn_reset_title: "Reset progress",

    // Landing Page Hero
    hero_badge: "🎁 100% Free & Open Access • $2,500+ Graduate University Quality • Start Instantly Without Sign-Up",
    hero_title_1: "Master Real Statistics.",
    hero_title_2: "From Descriptives to Hilbert Spaces.",
    hero_subtitle: "No syntax headaches in R or Python. Understand what models truly do, why assumptions fail, how Linear Mixed Models tame hierarchical data, and how infinite-dimensional SDEs operate. Completely adaptive, visual, and interactive — 100% free and open access.",
    hero_cta_scan: "🧠 Start Free Level Scan (2 min)",
    hero_cta_studio: "🚀 Explore All 24 Free Levels",
    hero_cta_sweetspot: "🎯 Jump to Mixed Models (L13)",

    // Stats
    stat_levels: "24 Levels",
    stat_levels_desc: "100% Instantly Unlocked",
    stat_exercises: "80+ Problems",
    stat_exercises_desc: "Cases, Dilemmas & Pitfalls",
    stat_simulators: "24 Simulators",
    stat_simulators_desc: "Real-Time Visual Feedback",
    stat_coding: "$0 Cost",
    stat_coding_desc: "100% Free & Open Access",

    // Free Guarantee Value Stack
    free_section_badge: "💎 The 100% Free & Open Access Guarantee",
    free_section_title: "Quality of a $2,500+ Graduate Program. Free Forever.",
    free_section_subtitle: "What universities and commercial data science bootcamps lock behind high tuition paywalls, we deliver as an open-access public resource for learners, researchers, and engineers worldwide.",
    free_pillar_1_title: "🔓 All 24 Levels 100% Unlocked",
    free_pillar_1_desc: "No 'freemium' bait-and-switch where advanced modules require payment. Jump straight to Mixed Models (L13) or Apex (L24) without restrictions.",
    free_pillar_2_title: "💳 Zero Credit Card, No 'Trial'",
    free_pillar_2_desc: "You will never be asked for billing details. No trial periods that quietly transition into recurring monthly charges. No hidden surprises.",
    free_pillar_3_title: "⚡ Instant Start Without Sign-Up",
    free_pillar_3_desc: "No mandatory forms, no passwords, no marketing spam in your inbox. You start literally within 2 seconds inside your browser.",
    free_pillar_4_title: "📜 Free Verified Certificate Included",
    free_pillar_4_desc: "Complete Level 24 and download your official digital certificate as a PDF free of charge. Zero fees to claim your credential of mathematical mastery.",
    free_compare_title: "The Honest Value Comparison:",
    free_compare_trad_label: "University Graduate Course or Commercial Bootcamp",
    free_compare_trad_price: "$2,000 – $5,000+",
    free_compare_trad_desc: "Often dominated by debugging package syntax in R/Python and rigid theory without real-time visual labs.",
    free_compare_our_label: "Statistical Journey Platform",
    free_compare_our_price: "$0 (Free Forever & Open Access)",
    free_compare_our_desc: "24 real-time simulators, 80+ empirical cases, adaptive level diagnostic, and verified certificate included.",

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
    phase3_subtitle: "Levels 13 to 18",
    phase3_desc: "Random intercepts, random slopes, ICC, repeated measures, GEE, and GLMMs. The powerhouse for 90% of real-world research.",
    phase4_title: "Phase 4: Advanced Frontiers & Apex",
    phase4_subtitle: "Levels 19 to 24",
    phase4_desc: "Bayesian thinking, MCMC sampling, survival analysis, causal DAGs, manifold geometry, and infinite-dimensional SDEs.",

    // Live Teaser Demo
    teaser_badge: "⚡ Live Intuition Preview",
    teaser_title: "Experience the 'Aha!' Moment: Simpson's Paradox in Real-Time",
    teaser_subtitle: "Discover in 3 seconds how aggregated data can mislead, and why Linear Mixed Models are essential.",
    teaser_pooled_btn: "Pooled OLS (Deceptive Aggregate)",
    teaser_mixed_btn: "Mixed Model (Cluster Separation)",
    teaser_explanation_pooled: "⚠️ <strong>Pooled OLS produces an upward slope (β = +0.54):</strong> because seniors exercise more yet have higher baseline cholesterol, it deceptively appears as if exercise <em>increases</em> cholesterol! This is Simpson's Paradox.",
    teaser_explanation_mixed: "✨ <strong>Within each age group, exercise sharply reduces cholesterol (β = -0.78):</strong> physical activity is genuinely protective! A Mixed Model separates age confounding from the true treatment effect.",

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
    sweetspot_spotlight_title: "The Practical Sweet Spot: Linear Mixed Models (Levels 13–18)",
    sweetspot_spotlight_desc: "Over 90% of empirical data in medicine, biology, psychology, and commerce is clustered or longitudinal. Standard OLS severely underestimates standard errors, generating spurious precision. Levels 13 to 18 teach you exactly when and how to deploy Random Intercepts and Random Slopes.",
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
  },

  es: {
    // SEO & Meta
    meta_title: "Statistical Journey | Curso Adaptativo de Estadística del Nivel 1 al 24 Apex",
    meta_desc: "Domina el razonamiento estadístico real sin la fricción de programar. 24 niveles progresivos desde estadística descriptiva y modelos mixtos hasta SDEs dimensionalmente infinitas en variedades. Con evaluación diagnóstica adaptativa y arena interactiva de práctica.",

    // Navegación
    nav_brand_title: "Statistical",
    nav_brand_sub: "Journey",
    nav_subtitle: "Aprendizaje Adaptativo • Nivel 1 a 24 Apex (Geometría, SDEs y Espacios de Hilbert)",
    nav_status_prefix: "Estado:",
    nav_status_unscanned: "Aún no evaluado",
    nav_btn_scan: "Diagnóstico",
    nav_btn_arena: "Arena de Práctica",
    nav_tab_landing: "🏠 Inicio",
    nav_tab_studio: "🔬 Estudio del Curso",
    nav_curriculum_btn: "📚 Temario (1–24)",
    curriculum_open_btn: "📚 Los 24 Niveles",
    btn_prev_level_short: "Nivel Anterior",
    btn_next_level_short: "Siguiente Nivel",
    nav_btn_sound_title: "Activar/Desactivar sonido",
    nav_btn_reset_title: "Restablecer progreso",

    // Landing Page Hero
    hero_badge: "🎁 100% Gratis y Acceso Abierto • Nivel Universitario de 2.500€+ • Inicio Inmediato Sin Registro",
    hero_title_1: "Domina la Estadística Real.",
    hero_title_2: "De Medidas Descriptivas a Espacios de Hilbert.",
    hero_subtitle: "Sin dolores de cabeza con la sintaxis de R o Python. Comprende qué hace realmente un modelo, por qué fallan los supuestos, cómo los Modelos Lineales Mixtos dominan los datos jerárquicos y cómo operan las SDEs en variedades continuas. Totalmente adaptativo, visual e interactivo — 100% gratuito y de libre acceso.",
    hero_cta_scan: "🧠 Iniciar Diagnóstico Gratuito (2 min)",
    hero_cta_studio: "🚀 Explorar los 24 Niveles Gratuitos",
    hero_cta_sweetspot: "🎯 Ir a Modelos Mixtos (N13)",

    // Estadísticas Clave
    stat_levels: "24 Niveles",
    stat_levels_desc: "100% Desbloqueados de Inicio",
    stat_exercises: "80+ Problemas",
    stat_exercises_desc: "Casos, Dilemas y Trampas",
    stat_simulators: "24 Simuladores",
    stat_simulators_desc: "Retroalimentación Visual en Tiempo Real",
    stat_coding: "0€ Coste",
    stat_coding_desc: "100% Gratis y Libre para Siempre",

    // Garantía 100% Gratuito
    free_section_badge: "💎 La Garantía 100% Gratuita y de Libre Acceso",
    free_section_title: "Calidad de un Programa de Máster de 2.500€+. Gratis para Siempre.",
    free_section_subtitle: "Lo que las universidades y bootcamps comerciales ocultan tras elevadas matrículas, nosotros lo ofrecemos en libre acceso a investigadores, estudiantes e ingenieros de todo el mundo.",
    free_pillar_1_title: "🔓 Los 24 Niveles 100% Desbloqueados",
    free_pillar_1_desc: "Sin trampas de 'freemium' donde los módulos avanzados requieran suscripción de pago. Salta directo a Modelos Mixtos (N13) o al Apex (N24) con total libertad.",
    free_pillar_2_title: "💳 Sin Tarjeta de Crédito, Sin 'Prueba'",
    free_pillar_2_desc: "Nunca se te pedirán datos bancarios ni de facturación. Sin períodos de prueba que pasen en silencio a cobros mensuales. Cero letra pequeña.",
    free_pillar_3_title: "⚡ Inicio Inmediato Sin Registro",
    free_pillar_3_desc: "Sin formularios forzados, sin contraseñas ni correos publicitarios. Comienzas a aprender en literalmente 2 segundos dentro de tu navegador.",
    free_pillar_4_title: "📜 Certificado Oficial Verificado Incluido",
    free_pillar_4_desc: "Completa el Nivel 24 y descarga tu certificado digital verificado oficial en formato PDF de manera totalmente gratuita. Sin costes por tu acreditación.",
    free_compare_title: "La Comparación Honesta de Valor:",
    free_compare_trad_label: "Máster Universitario o Bootcamp Comercial",
    free_compare_trad_price: "2.000€ – 5.000€+",
    free_compare_trad_desc: "A menudo enfocado en resolver fallos de sintaxis en R/Python y memorizar fórmulas sin laboratorios visuales dinámicos.",
    free_compare_our_label: "Plataforma Statistical Journey",
    free_compare_our_price: "0€ (100% Gratuito y Libre para Siempre)",
    free_compare_our_desc: "24 simuladores interactivos, 80+ casos empíricos, evaluación adaptativa y certificado oficial incluido.",

    // 4 Fases Roadmap
    roadmap_title: "Las Cuatro Fases de tu Viaje Estadístico",
    roadmap_subtitle: "Una hoja de ruta cristalina: identifica tu nivel actual y avanza hacia la maestría estadística.",
    phase1_title: "Fase 1: Fundamentos y Probabilidad",
    phase1_subtitle: "Niveles 1 al 5",
    phase1_desc: "Puntajes Z, pruebas t, ANOVA, valores p e intervalos de confianza. Construye una base inquebrantable.",
    phase2_title: "Fase 2: Regresión Clásica y Diagnósticos",
    phase2_subtitle: "Niveles 6 al 12",
    phase2_desc: "MCO (OLS), análisis de residuos, multicolinealidad, heterocedasticidad, regresión logística GLM y modelos de Poisson.",
    phase3_title: "Fase 3: Modelos Mixtos (El Punto Clave Práctico)",
    phase3_subtitle: "Niveles 13 al 18",
    phase3_desc: "Interceptos aleatorios, pendientes aleatorias, CCI, medidas repetidas, GEE y GLMMs. El pilar del 90% de la investigación empírica.",
    phase4_title: "Fase 4: Fronteras Avanzadas y Apex",
    phase4_subtitle: "Niveles 19 al 24",
    phase4_desc: "Inferencia bayesiana, MCMC, análisis de supervivencia, razonamiento causal con DAGs, geometría de variedades y SDEs de dimensión infinita.",

    // Live Teaser Demo
    teaser_badge: "⚡ Demostración Intuitiva en Vivo",
    teaser_title: "Experimenta el Momento '¡Eureka!': La Paradoja de Simpson en Tiempo Real",
    teaser_subtitle: "Descubre en 3 segundos cómo los datos agregados pueden engañar y por qué los Modelos Mixtos son indispensables.",
    teaser_pooled_btn: "MCO Agrupado (Agregado Engañoso)",
    teaser_mixed_btn: "Modelo Mixto (Separación por Clúster)",
    teaser_explanation_pooled: "⚠️ <strong>MCO Agrupado dibuja una pendiente ascendente (β = +0.54):</strong> dado que los adultos mayores hacen más ejercicio pero tienen mayor colesterol basal, ¡parece que el ejercicio <em>aumenta</em> el colesterol! Es la Paradoja de Simpson.",
    teaser_explanation_mixed: "✨ <strong>Dentro de cada grupo de edad, el ejercicio reduce con fuerza el colesterol (β = -0.78):</strong> ¡la actividad física es protectora! Un Modelo Mixto aísla la edad del verdadero efecto del ejercicio.",

    // Dolor vs Avance
    pain_title: "Por Qué la Educación Estadística Clásica Falla (Y Cómo lo Solucionamos)",
    pain_subtitle: "Deja de desperdiciar el 80% de tu energía depurando sintaxis de librerías y comas perdidas. Concéntrate en lo que de verdad importa: el criterio científico.",
    pain_trad_title: "La Forma Antigua y Frustrante",
    pain_trad_1: "Horas interminables depurando errores de sintaxis en R o Python en lugar de comprender la mecánica del modelo.",
    pain_trad_2: "Memorizar fórmulas griegas a ciegas y reportar p < 0.05 sin comprobar los supuestos de los residuos (L.I.N.E.).",
    pain_trad_3: "Ignorar el agrupamiento y la dependencia en los datos, lo que produce errores estándar subestimados y conclusiones falsas.",
    pain_our_title: "El Método Statistical Journey",
    pain_our_1: "100% comprensión conceptual con controles interactivos, visualizaciones instantáneas y conjuntos de datos reales.",
    pain_our_2: "Identifica trampas al instante: p-hacking, paradoja de Simpson, multicolinealidad y heterocedasticidad.",
    pain_our_3: "Domina desde el Punto Clave Práctico (Modelos Mixtos N13–19) hasta el Cenit Matemático (Apex N24).",

    // Personas Objetivo
    target_title: "Diseñado para Investigadores, Científicos de Datos y Analistas",
    target_subtitle: "Tanto si publicas en revistas de alto impacto como si tomas decisiones estratégicas: la intuición estadística pura es tu mayor ventaja.",
    target_1_title: "Doctorandos e Investigadores Académicos",
    target_1_desc: "Modela con total seguridad medidas repetidas, clústeres jerárquicos (CCI) y curvas de supervivencia para artículos revisados por pares.",
    target_2_title: "Científicos de Datos e Ingenieros de ML",
    target_2_desc: "Mira más allá de 'model.fit()'. Domina diagramas causales (DAGs), distribuciones a priori bayesianas y variedades riemannianas.",
    target_3_title: "Analistas y Tomadores de Decisiones",
    target_3_desc: "Detecta paneles engañosos, desenmascara factores de confusión ocultos y evita errores costosos debidos a supuestos erróneos.",

    // Enfoques Destacados
    sweetspot_spotlight_title: "El Punto Clave Práctico: Modelos Lineales Mixtos (Niveles 13–18)",
    sweetspot_spotlight_desc: "Más del 90% de los datos empíricos en medicina, biología, psicología y negocios son agrupados o longitudinales. El MCO estándar subestima severamente los errores estándar, generando precisión ilusoria. Los niveles 13 al 18 te enseñan exactamente cuándo y cómo usar interceptos y pendientes aleatorias.",
    sweetspot_spotlight_cta: "🎯 Ir a Modelos Mixtos (N13)",
    cert_spotlight_title: "El Apex Teórico: Nivel 24 y Certificado Verificado",
    cert_spotlight_desc: "Para quienes desean explorar la frontera matemática absoluta: SDEs bayesianas no paramétricas de dimensión infinita en variedades con trayectorias rugosas y espacios causales de Hilbert. Completa los 24 niveles y obtén tu certificado oficial.",
    cert_spotlight_cta: "🏆 Explorar el Apex Nivel 24",
    final_cta_title: "¿Listo para Transformar tu Forma de Ver los Datos?",
    final_cta_subtitle: "Sin registro obligatorio. Sin tarjeta de crédito. 100% gratuito y de libre acceso. Comienza en el Nivel 1 o realiza la evaluación diagnóstica de 2 minutos.",

    // Características
    features_title: "Por Qué Funciona este Enfoque",
    features_subtitle: "La enseñanza tradicional te obliga a luchar con la sintaxis de librerías. Nosotros agudizamos tu razonamiento matemático y analítico.",
    feat1_title: "Escáner Diagnóstico Adaptativo",
    feat1_desc: "Cero tiempo perdido. Nuestra evaluación de 10 escenarios detecta tu nivel real de conocimientos y te sitúa de inmediato en tu punto óptimo.",
    feat2_title: "24 Simuladores Interactivos",
    feat2_desc: "Modifica parámetros, añade ruido, rota variedades 3D y observa cómo reaccionan los valores p y las distribuciones posteriores en tiempo real.",
    feat3_title: "Arena de Práctica y Trampas Críticas",
    feat3_desc: "80+ dilemas realistas sobre p-hacking, paradoja de Simpson, sesgo de colisionador, residuos no normales y sobredispersión.",
    feat4_title: "Apex Teórico y Certificado",
    feat4_desc: "Domina el Nivel 24 y obtén un certificado digital verificable en SDEs Bayesianas No Paramétricas de Dimensión Infinita en Variedades.",

    // FAQ
    faq_title: "Preguntas Frecuentes (FAQ)",
    faq_q1: "¿Necesito experiencia previa en programación (R o Python)?",
    faq_a1: "No, en absoluto. Este curso se centra al 100% en la intuición estadística, supuestos, selección de modelos e interpretación de diagnósticos. Todo el cálculo y las simulaciones se ejecutan en vivo en tu navegador.",
    faq_q2: "¿Cómo funciona la evaluación diagnóstica adaptativa?",
    faq_a2: "En 10 preguntas de escenarios prácticos, el algoritmo evalúa tu dominio desde contrastes básicos hasta modelos mixtos avanzados y principios bayesianos, recomendándote tu nivel de inicio ideal.",
    faq_q3: "¿Puedo saltar directamente a cualquier nivel?",
    faq_a3: "¡Sí! Los 24 niveles están completamente desbloqueados. Puedes ir directamente a Modelos Mixtos (Nivel 13) o al Apex (Nivel 24).",
    faq_q4: "¿Existe una constancia oficial de finalización?",
    faq_a4: "Sí. Al completar el Nivel 24 puedes generar, imprimir o guardar un certificado digital verificado oficial en formato PDF.",

    // App Studio View
    sidebar_title: "Statistical Journey (1–24)",
    step_indicator: "Paso",
    of: "de",
    coach_title: "Tutor Estadístico Adaptativo",
    coach_status_label: "Tu Estado:",
    recalibrate_btn: "⚡ Recalibrar Nivel",
    arena_btn: "🎯 Arena de Práctica",
    case_title: "El Caso de Estudio",
    research_question: "Pregunta de Investigación:",
    core_concept: "Concepto Clave y Perspectiva Matemática",
    key_formula: "Definición Matemática:",
    metrics_title: "Métricas del Modelo y Diagnósticos",
    simulation_title: "Laboratorio de Simulación Interactiva",
    recommendations_title: "Consejos Prácticos y Selección de Modelos",
    exercises_title: "Serie de Ejercicios Interactivos",
    exercise_step: "Ejercicio",
    btn_check: "Verificar Respuesta",
    btn_retry: "Intentar de Nuevo",
    btn_next: "Siguiente Ejercicio",
    btn_complete_level: "Completar Nivel y Continuar",
    congrats_title: "¡Excelente Trabajo!",
    congrats_desc: "Has dominado todos los ejercicios de este nivel. ¿Listo para el siguiente desafío?",
    btn_prev_level: "← Nivel Anterior",
    btn_next_level: "Siguiente Nivel →",
    btn_apex_cert: "🏆 Ver Certificado Apex",

    // Modal Diagnóstico
    scan_modal_title: "Evaluación Estadística Adaptativa",
    scan_modal_desc: "Responde 10 preguntas diagnósticas de casos reales para determinar tu nivel óptimo de inicio.",
    scan_step: "Pregunta",
    scan_btn_start: "🚀 Iniciar Diagnóstico",
    scan_result_title: "¡Evaluación Completada!",
    scan_result_advice: "Nivel de Inicio Recomendado:",
    scan_btn_go: "Ir Directamente a este Nivel",

    // Modal Arena
    arena_modal_title: "La Arena de Práctica",
    arena_modal_desc: "Pon a prueba tus habilidades con un flujo infinito de desafíos a lo largo de los 24 niveles.",
    arena_filter_all: "Todo (N1–N24)",
    arena_filter_f1: "Fase 1: Fundamentos",
    arena_filter_f2: "Fase 2: Regresión",
    arena_filter_f3: "Fase 3: Modelos Mixtos",
    arena_filter_f4: "Fase 4: Avanzado",
    arena_streak: "Racha Actual:",
    arena_btn_next: "Siguiente Pregunta →",

    // Modal Certificado
    cert_badge: "Certificado del Apex Teórico",
    cert_headline: "Maestría en Modelos Estadísticos Avanzados",
    cert_desc: "Se certifica que el/la candidato/a ha completado satisfactoriamente los 24 niveles del Statistical Journey: desde la Estadística Descriptiva y Regresión Clásica, pasando por el Punto Clave de los Modelos Lineales Mixtos, hasta el Cenit de:",
    cert_name_default: "Viajero/a Estadístico/a",
    cert_earned_on: "Obtenido el",
    cert_total_xp: "Total obtenido: 2.400+ XP",
    cert_btn_print: "🖨️ Imprimir / Guardar en PDF",
    cert_btn_close: "Cerrar",

    // Footer
    footer_text: "Statistical Journey • 80+ Ejercicios y Escenarios Diagnósticos • Desde Medidas Descriptivas hasta SDEs Bayesianas No Paramétricas de Dimensión Infinita en Variedades con Trayectorias Rugosas y Espacios Causales de Hilbert"
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
  },
  es: {
    phases: {
      1: "Fase 1: Fundamentos y Probabilidad",
      2: "Fase 2: Regresión Clásica y Diagnósticos",
      3: "Fase 3: Modelos Mixtos (Punto Clave Práctico)",
      4: "Fase 4: Fronteras Avanzadas y Cenit Teórico"
    },
    levels: {
      1: { title: "Estadística Descriptiva y la Trampa de los Atípicos", badge: "Fundamento", subtitle: "Media, mediana, dispersión y por qué una sola métrica puede distorsionar la realidad." },
      2: { title: "Distribuciones de Probabilidad y la Curva Normal", badge: "Fundamento", subtitle: "Puntuaciones Z, la regla 68-95-99.7 y desviaciones de la campana de Gauss." },
      3: { title: "El Teorema del Límite Central (TLC)", badge: "Fundamento", subtitle: "Por qué las medias muestrales convergen a la normalidad independientemente de la forma poblacional." },
      4: { title: "Intervalos de Confianza (IC) y Margen de Error", badge: "Fundamento", subtitle: "¿Qué tan seguros podemos estar? La interpretación rigurosa del intervalo de confianza al 95%." },
      5: { title: "Contraste de Hipótesis, Pruebas t y el Valor p", badge: "Fundamento", subtitle: "Hipótesis nula, errores Tipo I/II y el abismo entre significación estadística y relevancia clínica." },
      6: { title: "Regresión Lineal I: MCO (OLS) y la Recta de Mejor Ajuste", badge: "Regresión Clásica", subtitle: "Línea de mejor ajuste, pendiente beta_1, intercepto y suma de cuadrados residuales." },
      7: { title: "Bondad de Ajuste: R², R² Ajustado y la Prueba F", badge: "Regresión Clásica", subtitle: "Explicar varianza frente a penalizar predictores que solo aportan ruido." },
      8: { title: "Supuestos del Modelo y Diagnósticos (L.I.N.E.)", badge: "Regresión Clásica", subtitle: "Linealidad, independencia, normalidad de residuos y homocedasticidad." },
      9: { title: "Regresión Múltiple y Confusión (Paradoja de Simpson)", badge: "Regresión Clásica", subtitle: "Cómo los factores de confusión omitidos pueden invertir por completo los efectos observados." },
      10: { title: "Multicolinealidad y FIV (Factor de Inflación de la Varianza)", badge: "Regresión Clásica", subtitle: "Cuando los predictores correlacionan fuertemente: errores estándar inflados y coeficientes erráticos." },
      11: { title: "Regresión Logística y Odds Ratios", badge: "Regresión Clásica", subtitle: "Modelado de respuestas binarias, log-odds, curva sigmoide y razones de momios clínicas." },
      12: { title: "Regularización: Ridge (L₂) y Lasso (L₁)", badge: "Regresión Clásica", subtitle: "Penalización por contracción, dispersión, selección de características y el dilema sesgo-varianza." },
      13: { title: "Datos Agrupados y el Fracaso de MCO Estándar", badge: "Modelos Mixtos (Punto Clave)", subtitle: "Correlación intraclase (CCI), pseudorreplicación y por qué MCO subestima los errores estándar." },
      14: { title: "Modelos Lineales Mixtos I: Interceptos Aleatorios", badge: "Modelos Mixtos (Punto Clave)", subtitle: "Permitir que los grupos tengan variabilidad basal compartiendo una pendiente común." },
      15: { title: "Modelos Lineales Mixtos II: Pendientes Aleatorias y Medidas Repetidas", badge: "Punto Clave Práctico", subtitle: "Modelado jerárquico donde los efectos del tratamiento varían entre unidades a lo largo del tiempo." },
      16: { title: "Modelos Mixtos Lineales Generalizados (GLMM)", badge: "GLMM", subtitle: "Respuestas no normales (binarias, conteos) combinadas con efectos aleatorios de grupo." },
      17: { title: "Modelos Aditivos Generalizados (GAMs)", badge: "GAMs", subtitle: "Splines de suavizado y relaciones no lineales sin ajuste manual de polinomios." },
      18: { title: "Análisis de Supervivencia y Modelado de Tiempo hasta el Evento", badge: "Supervivencia", subtitle: "Censura por la derecha, curvas de Kaplan-Meier, hazard ratios y riesgos proporcionales de Cox." },
      19: { title: "Fundamentos Bayesianos: Priori, Verosimilitud y Posteriori", badge: "Bayesiano", subtitle: "Actualización de creencias previas con evidencia empírica mediante el Teorema de Bayes." },
      20: { title: "MCMC Bayesiano y Monte Carlo Hamiltoniano (HMC)", badge: "MCMC", subtitle: "Muestreo en geometrías posteriores intratables usando Stan y PyMC." },
      21: { title: "Modelos Bayesianos No Paramétricos y Procesos Gaussianos", badge: "Procesos Gaussianos", subtitle: "El truco del kernel y distribución sobre espacios de funciones en lugar de parámetros fijos." },
      22: { title: "Inferencia Causal en Espacios de Hilbert y Do-Cálculo", badge: "Inferencia Causal", subtitle: "Do-cálculo de Pearl, ajuste por confusión, variables instrumentales y kernels RKHS." },
      23: { title: "Ecuaciones Diferenciales Estocásticas (SDEs)", badge: "SDEs", subtitle: "Cálculo de Itô, difusión continua, movimiento browniano y volatilidad estocástica." },
      24: { title: "SDEs Bayesianas No Paramétricas de Dimensión Infinita en Variedades con Trayectorias Rugosas y Espacios Causales de Hilbert", badge: "El Apex Definitivo (Nivel 24)", subtitle: "Variedades riemannianas no euclidianas, signaturas de trayectorias rugosas y operadores en RKHS de dimensión infinita." }
    }
  }
};

window.I18N = {
  currentLang: 'nl',
  dict: dict,
  levelMeta: levelMeta,

  t(key) {
    const lang = this.currentLang || 'nl';
    if (this.dict[lang] && this.dict[lang][key]) {
      return this.dict[lang][key];
    }
    if (this.dict['nl'] && this.dict['nl'][key]) {
      return this.dict['nl'][key];
    }
    if (this.dict['en'] && this.dict['en'][key]) {
      return this.dict['en'][key];
    }
    return key;
  },

  getLevelTitle(level) {
    const lang = this.currentLang || 'en';
    if (this.levelMeta[lang] && this.levelMeta[lang].levels[level.id]) {
      return this.levelMeta[lang].levels[level.id].title;
    }
    if (this.levelMeta.en && this.levelMeta.en.levels[level.id]) {
      return this.levelMeta.en.levels[level.id].title;
    }
    return level.title;
  },

  getLevelSubtitle(level) {
    const lang = this.currentLang || 'en';
    if (this.levelMeta[lang] && this.levelMeta[lang].levels[level.id]) {
      return this.levelMeta[lang].levels[level.id].subtitle;
    }
    if (this.levelMeta.en && this.levelMeta.en.levels[level.id]) {
      return this.levelMeta.en.levels[level.id].subtitle;
    }
    return level.subtitle;
  },

  getLevelBadge(level) {
    const lang = this.currentLang || 'en';
    if (this.levelMeta[lang] && this.levelMeta[lang].levels[level.id]) {
      return this.levelMeta[lang].levels[level.id].badge;
    }
    if (this.levelMeta.en && this.levelMeta.en.levels[level.id]) {
      return this.levelMeta.en.levels[level.id].badge;
    }
    return level.badge;
  },

  getPhaseTitle(phaseNumber) {
    const lang = this.currentLang || 'en';
    if (lang === 'nl') {
      const defaultPhases = {
        1: "Fase 1: De Fundamenten",
        2: "Fase 2: Klassieke Regressie & Diagnostiek",
        3: "Fase 3: Mixed Models (De Praktische Sweet Spot)",
        4: "Fase 4: Geavanceerde Grenzen & Apex"
      };
      return defaultPhases[phaseNumber] || `Fase ${phaseNumber}`;
    }
    if (this.levelMeta[lang] && this.levelMeta[lang].phases[phaseNumber]) {
      return this.levelMeta[lang].phases[phaseNumber];
    }
    if (this.levelMeta.en && this.levelMeta.en.phases[phaseNumber]) {
      return this.levelMeta.en.phases[phaseNumber];
    }
    return `Phase ${phaseNumber}`;
  },

  setLang(lang) {
    if (lang !== 'nl' && lang !== 'en' && lang !== 'es') lang = 'en';
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
      if (saved === 'en' || saved === 'nl' || saved === 'es') {
        this.currentLang = saved;
      } else {
        // Dutch by default
        this.currentLang = 'nl';
      }
    } catch(e) {
      this.currentLang = 'nl';
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
    const esBtn = document.getElementById('lang-btn-es');

    const inactiveClass = "px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-white font-medium text-xs transition";
    const activeClass = "px-2 py-1 rounded bg-indigo-600 text-white font-bold text-xs shadow transition";

    if (nlBtn) nlBtn.className = inactiveClass;
    if (enBtn) enBtn.className = inactiveClass;
    if (esBtn) esBtn.className = inactiveClass;

    if (this.currentLang === 'nl' && nlBtn) {
      nlBtn.className = activeClass;
    } else if (this.currentLang === 'es' && esBtn) {
      esBtn.className = activeClass;
    } else if (enBtn) {
      enBtn.className = activeClass;
    }
  }
};

if (typeof window !== 'undefined') {
  window.I18N.init();
}
