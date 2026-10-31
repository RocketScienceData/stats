const fs = require('fs');

const i18nPath = 'data/i18n.js';
let content = fs.readFileSync(i18nPath, 'utf8');

// The new dictionary keys for nl, en, es
const newKeys = {
  nl: {
    phase1_btn: "Start Fase 1 →",
    phase2_btn: "Start Fase 2 →",
    phase3_btn: "Duik in Mixed Models →",
    phase4_btn: "Verken het Apex (L24) →",
    phase1_link_l1: "• L1: De Outlier Valstrik & Mediaan",
    phase1_link_l2: "• L2: Normale Verdeling & 68-95-99.7",
    phase1_link_l3: "• L3: Centrale Limietstelling (CLT)",
    phase1_link_l5: "• L5: p-waarde vs Klinische Relevantie",
    phase2_link_l6: "• L6: OLS & Het Verhaal van de Lijn",
    phase2_link_l8: "• L8: Modeldiagnostiek (L.I.N.E.)",
    phase2_link_l9: "• L9: Simpson's Paradox & Confounders",
    phase2_link_l11: "• L11: Logistische Regressie & Odds Ratios",
    phase3_link_l13: "• L13: Geclusterde Data & Falen van OLS",
    phase3_link_l14: "• L14: Mixed Models: Random Intercepts",
    phase3_link_l15: "• L15: Random Slopes & Herhaalde Metingen",
    phase3_link_l16: "• L16: GLMM voor Binaire/Telling Data",
    phase3_link_l18: "• L18: Overlevingsanalyse & Cox Modellen",
    phase4_link_l19: "• L19: Bayesiaanse Grondslagen (Prior & Posterior)",
    phase4_link_l20: "• L20: Bayesiaanse MCMC & Stan/PyMC",
    phase4_link_l21: "• L21: Gaussiaanse Processen (GP)",
    phase4_link_l22: "• L22: Causale Inferentie in Hilbertruimten",
    phase4_link_l23: "• L23: SDEs & Stochastische Diffusie",
    phase4_link_l24: "• L24: Het Ultieme Apex Model (Ω)",

    sweetspot_badge: "Sweet Spot ⭐",
    spotlight_practical_tag: "Praktische Sweet Spot",
    spotlight_levels_range: "Levels 13–18",
    causal_preview_tag: "Causale Grondslagen Preview (Level 22)",
    apex_badge_tag: "Theoretisch Apex",
    apex_mastery_tag: "Level 24 • Geverifieerd Meesterschap",
    footer_link_landing: "Overzicht",
    footer_link_roadmap: "Curriculum",
    footer_link_studio: "Studio",

    xp_per_question: "+50 XP per vraag",
    level_word: "Level",
    streak_label: "Streak",
    feedback_correct: "Uitstekend beantwoord! (+50 XP)",
    feedback_wrong: "Nog niet helemaal juist:",
    btn_retry_exercise: "Probeer opnieuw",
    confirm_reset: "Weet je zeker dat je alle voortgang, XP en streaks wilt resetten naar Level 1?",
    complete_and_next: "Rond Level Af & Naar Volgend Level ➔",
    complete_apex: "🎉 Rond Level 24 Af & Claim Apex Meesterschap!",

    sim_l1_ceo_salary: "Salaris CEO (Uitschieter):",
    sim_l1_mean_note: "Gevoelig voor outlier!",
    sim_l1_median_note: "Robuust tegen outlier",
    sim_l1_sd_note: "Opgeblazen spreiding",
    sim_l1_iqr_note: "Zuivere midden-50%",
    sim_l2_sigma: "Standaardafwijking (σ):",
    sim_l2_cutoff: "Afkeurgrens (X):",
    sim_l2_calc_z: "Berekende Z-score",
    sim_l2_rejection: "Afkeurpercentage",
    sim_l2_assumption: "Binnen ± 2 SD",
    sim_l3_title: "Centrale Limietstelling (CLT) Monte Carlo Simulator",
    sim_l3_desc: "Trek 1.000 steekproeven van grootte N en zie de Gauss-curve ontstaan.",
    sim_l3_sample_size: "Steekproefgrootte (N):",
    sim_l3_shape: "Verdelingsvorm",
    sim_l3_shape_normal: "Klokvormig Normaal",
    sim_l3_mean_xbar: "Gemiddelde van x̄",
    sim_l3_emp_se: "Empirische SE",
    sim_l3_theo_se: "Theoretische SE (σ/√N)",
    sim_l3_dist_dice: "Dobbelsteen (Uniform)",
    sim_l3_dist_skew: "Zwaar Scheef (Exp)",
    sim_l4_title: "95% Betrouwbaarheidsinterval Visualizer",
    sim_l4_desc: "Simuleer 100 onafhankelijke steekproeven. Zie hoe exact ~95 intervallen de werkelijke populatiewaarde vangen.",
    sim_l4_capture_rate: "Vangstpercentage",
    sim_l4_ci_hit: "Vangt de Waarheid",
    sim_l4_ci_miss: "Mist de Waarheid",
    sim_l5_effect_size: "Effectgrootte Cohen's d:",
    sim_l5_sample_n: "Steekproefgrootte per groep (N):",
    sim_l5_alpha: "Significantiedrempel α",
    sim_l5_power: "Statistische Power (1 - β)",
    sim_l5_beta: "Kans Type II Fout (β)",
    sim_l6_slope: "Helling (Slope β₁):",
    sim_l6_intercept: "Intercept (β₀):",
    sim_l6_model: "Model:",
    sim_l6_sse: "Kwadratensom der Fouten (SSE):",
    sim_l7_title: "R² vs Gecorrigeerde R² bij Ruis",
    sim_l7_noise_vars: "Aantal Ruisvariabelen:",
    sim_l8_title: "Residuendiagnostiek: Heteroscedasticiteit (Trompet)",
    sim_l8_homo: "Homoscedastisch (Gelijkmatig)",
    sim_l8_hetero: "Heteroscedastisch (Trompet)",
    sim_l9_title: "Simpson's Paradox (Sport vs Cholesterol)",
    sim_l10_title: "Multicollineariteit & VIF Explodeerder",
    sim_l10_desc: "Schuif de correlatie tussen twee predictoren op naar 0.99 en zie de foutmarge exploderen.",
    sim_l10_corr: "Correlatie (r₁₂):",
    sim_l10_vif_formula: "VIF = 1 / (1 - r²)",
    sim_l10_se_inflation: "SE Inflatie (√VIF)",
    sim_l10_diag_status: "Diagnostische Status",
    sim_l11_title: "Logistische S-curve & Live Confusion Matrix",
    sim_l11_desc: "Verschuif de beslisgrens (cutoff) en zie hoe Sensitiviteit en Specificiteit elkaars tegenpolen zijn.",
    sim_l11_cutoff: "Beslisgrens (Cutoff):",
    sim_l11_tp: "True Positive (TP)",
    sim_l11_fp: "False Positive (FP - Vals Alarm)",
    sim_l11_fn: "False Negative (FN - Gemist)",
    sim_l11_tn: "True Negative (TN)",
    sim_l11_sens: "Sensitiviteit (Recall):",
    sim_l11_spec: "Specificiteit:",
    sim_l11_f1: "F1-Score:",
    sim_l12_title: "Ridge vs Lasso Coëfficiënten Krimp",
    sim_l12_penalty: "Strafparameter (λ):",
    sim_l13_title: "Geclusterde Data & Intraclass Correlatie (ICC)",
    sim_l14_title: "Linear Mixed Models I: Random Intercepts",
    sim_l15_title: "Linear Mixed Models II: Random Slopes & Herhaalde Metingen",
    sim_l16_title: "GLMM: Geclusterde Binaire Infectiekansen",
    sim_l17_title: "GAM: Niet-Lineaire Spline f(Temperatuur)",
    sim_l18_title: "Kaplan-Meier Overlevingscurven",
    sim_l18_desc: "Trapvormige cumulatieve overlevingskans met rechtscensurering. Hazard Ratio = 0.58 (p = 0.003).",
    sim_l19_title: "Bayesiaanse Update: Prior ➔ Likelihood ➔ Posterior",
    sim_l19_desc: "P(θ | Data) ∝ P(Data | θ) · P(θ). De posterior is de gewogen synthese van eerdere kennis en nieuwe data.",
    sim_l20_title: "Hamiltoniaanse MCMC Traceplot & Sampling",
    sim_l20_desc: "Ketting wandelt representatief door het posterior landschap (R̂ = 1.002, stationaire 'harige rups').",
    sim_l21_title: "Gaussiaans Proces (GP): Posterior Onzekerheid",
    sim_l21_desc: "Op elk meetpunt knijpt de band samen naar exact nul; daartussen groeit de onzekerheid.",
    sim_l22_title: "Causale do(X) Interventie in Hilbertruimte",
    sim_l22_desc: "Vergelijk de vertekende observationele associatie met de zuivere causale interventieverdeling in ℋ.",
    sim_l23_drift: "Deterministische Drift (μ):",
    sim_l23_diffusion: "Stochastische Diffusie (σ):",
    sim_l24_roughness: "Hurst Roughness (H):",
    sim_l24_geometry: "Ruimte-Geometrie",
    sim_l24_manifold: "Manifold ℳ (Kromming)",
    sim_l24_gradient: "Driftgradiënt",
    sim_l24_potential: "∇_ℳ Φ (Potentiaalveld)",
    sim_l24_regime: "Ruisregime (Hurst H)",
    sim_l24_state: "Causale Toestand",
    sim_l24_hilbert: "X_t ∈ ℋ (Hilbertruimte)"
  },

  en: {
    phase1_btn: "Start Phase 1 →",
    phase2_btn: "Start Phase 2 →",
    phase3_btn: "Dive into Mixed Models →",
    phase4_btn: "Explore the Apex (L24) →",
    phase1_link_l1: "• L1: Outlier Trap & Median",
    phase1_link_l2: "• L2: Normal Curve & 68-95-99.7",
    phase1_link_l3: "• L3: Central Limit Theorem (CLT)",
    phase1_link_l5: "• L5: p-values vs Clinical Relevance",
    phase2_link_l6: "• L6: OLS & The Story of the Line",
    phase2_link_l8: "• L8: Diagnostics (L.I.N.E.)",
    phase2_link_l9: "• L9: Simpson's Paradox & Confounders",
    phase2_link_l11: "• L11: Logistic Regression & Odds Ratios",
    phase3_link_l13: "• L13: Clustered Data & OLS Failure",
    phase3_link_l14: "• L14: Mixed Models: Random Intercepts",
    phase3_link_l15: "• L15: Random Slopes & Trajectories",
    phase3_link_l16: "• L16: GLMM for Binary/Count Data",
    phase3_link_l18: "• L18: Survival Analysis (Cox Proportional Hazards)",
    phase4_link_l19: "• L19: Bayesian Foundations (Prior & Posterior)",
    phase4_link_l20: "• L20: Bayesian MCMC & Stan/PyMC",
    phase4_link_l21: "• L21: Gaussian Processes",
    phase4_link_l22: "• L22: Causal Inference in Hilbert Spaces",
    phase4_link_l23: "• L23: SDEs & Stochastic Diffusion",
    phase4_link_l24: "• L24: The Ultimate Apex Model (Ω)",

    sweetspot_badge: "Sweet Spot ⭐",
    spotlight_practical_tag: "Practical Sweet Spot",
    spotlight_levels_range: "Levels 13–18",
    causal_preview_tag: "Causal Foundation Preview (Level 22)",
    apex_badge_tag: "Theoretical Apex",
    apex_mastery_tag: "Level 24 • Verified Mastery",
    footer_link_landing: "Landing",
    footer_link_roadmap: "Roadmap",
    footer_link_studio: "Studio",

    xp_per_question: "+50 XP per question",
    level_word: "Level",
    streak_label: "Streak",
    feedback_correct: "Correctly answered! (+50 XP)",
    feedback_wrong: "Not quite right yet:",
    btn_retry_exercise: "Try again",
    confirm_reset: "Are you sure you want to reset all progress, XP, and streaks back to Level 1?",
    complete_and_next: "Complete Level & Next ➔",
    complete_apex: "🎉 Complete Level 24 & Claim Apex Mastery!",

    sim_l1_ceo_salary: "CEO Salary (Outlier):",
    sim_l1_mean_note: "Sensitive to outlier!",
    sim_l1_median_note: "Robust against outlier",
    sim_l1_sd_note: "Inflated dispersion",
    sim_l1_iqr_note: "Pure middle 50%",
    sim_l2_sigma: "Standard Deviation (σ):",
    sim_l2_cutoff: "Rejection Threshold (X):",
    sim_l2_calc_z: "Calculated Z-score",
    sim_l2_rejection: "Rejection Percentage",
    sim_l2_assumption: "Within ± 2 SD",
    sim_l3_title: "Central Limit Theorem (CLT) Monte Carlo Simulator",
    sim_l3_desc: "Draw 1,000 samples of size N and watch the Gaussian bell curve emerge.",
    sim_l3_sample_size: "Sample Size (N):",
    sim_l3_shape: "Distribution Shape",
    sim_l3_shape_normal: "Bell-Shaped Normal",
    sim_l3_mean_xbar: "Mean of x̄",
    sim_l3_emp_se: "Empirical SE",
    sim_l3_theo_se: "Theoretical SE (σ/√N)",
    sim_l3_dist_dice: "Fair Die (Uniform)",
    sim_l3_dist_skew: "Heavy Skew (Exp)",
    sim_l4_title: "95% Confidence Interval Visualizer",
    sim_l4_desc: "Simulate 100 independent samples. See how exactly ~95 intervals capture the ground-truth population parameter.",
    sim_l4_capture_rate: "Coverage Rate",
    sim_l4_ci_hit: "Captures True μ",
    sim_l4_ci_miss: "Misses True μ",
    sim_l5_effect_size: "Cohen's d Effect Size:",
    sim_l5_sample_n: "Sample Size per Group (N):",
    sim_l5_alpha: "Significance Threshold α",
    sim_l5_power: "Statistical Power (1 - β)",
    sim_l5_beta: "Type II Error Risk (β)",
    sim_l6_slope: "Slope (β₁):",
    sim_l6_intercept: "Intercept (β₀):",
    sim_l6_model: "Model:",
    sim_l6_sse: "Sum of Squared Errors (SSE):",
    sim_l7_title: "R² vs Adjusted R² Stress Test",
    sim_l7_noise_vars: "Number of Noise Predictors:",
    sim_l8_title: "Residual Diagnostics: Heteroscedasticity (Trumpet)",
    sim_l8_homo: "Homoscedastic (Equal Spread)",
    sim_l8_hetero: "Heteroscedastic (Trumpet)",
    sim_l9_title: "Simpson's Paradox (Exercise vs Cholesterol)",
    sim_l10_title: "Multicollinearity & VIF Exploder",
    sim_l10_desc: "Slide correlation between two predictors to 0.99 and watch standard error explode.",
    sim_l10_corr: "Correlation (r₁₂):",
    sim_l10_vif_formula: "VIF = 1 / (1 - r²)",
    sim_l10_se_inflation: "SE Inflation (√VIF)",
    sim_l10_diag_status: "Diagnostic Status",
    sim_l11_title: "Logistic S-Curve & Live Confusion Matrix",
    sim_l11_desc: "Shift the decision cutoff and observe the trade-off between Sensitivity and Specificity.",
    sim_l11_cutoff: "Decision Cutoff:",
    sim_l11_tp: "True Positive (TP)",
    sim_l11_fp: "False Positive (FP - False Alarm)",
    sim_l11_fn: "False Negative (FN - Missed)",
    sim_l11_tn: "True Negative (TN)",
    sim_l11_sens: "Sensitivity (Recall):",
    sim_l11_spec: "Specificity:",
    sim_l11_f1: "F1-Score:",
    sim_l12_title: "Ridge vs Lasso Coefficient Shrinkage",
    sim_l12_penalty: "Penalty Parameter (λ):",
    sim_l13_title: "Clustered Data & Intraclass Correlation (ICC)",
    sim_l14_title: "Linear Mixed Models I: Random Intercepts",
    sim_l15_title: "Linear Mixed Models II: Random Slopes & Trajectories",
    sim_l16_title: "GLMM: Clustered Binary Infection Risk",
    sim_l17_title: "GAM: Non-Linear Spline f(Temperature)",
    sim_l18_title: "Kaplan-Meier Survival Curves",
    sim_l18_desc: "Step-function cumulative survival probability with right-censoring. Hazard Ratio = 0.58 (p = 0.003).",
    sim_l19_title: "Bayesian Update: Prior ➔ Likelihood ➔ Posterior",
    sim_l19_desc: "P(θ | Data) ∝ P(Data | θ) · P(θ). The posterior is the weighted synthesis of prior knowledge and new data.",
    sim_l20_title: "Hamiltonian MCMC Traceplot & Sampling",
    sim_l20_desc: "Chains seamlessly explore the posterior landscape (R̂ = 1.002, stationary 'hairy caterpillar').",
    sim_l21_title: "Gaussian Process (GP): Posterior Uncertainty",
    sim_l21_desc: "At every measured location, uncertainty collapses to exactly zero; between observations, it smoothly expands.",
    sim_l22_title: "Causal do(X) Intervention in Hilbert Space",
    sim_l22_desc: "Compare confounded observational association against the pure interventional distribution in ℋ.",
    sim_l23_drift: "Deterministic Drift (μ):",
    sim_l23_diffusion: "Stochastic Volatility (σ):",
    sim_l24_roughness: "Hurst Roughness (H):",
    sim_l24_geometry: "Space Geometry",
    sim_l24_manifold: "Manifold ℳ (Curvature)",
    sim_l24_gradient: "Drift Gradient",
    sim_l24_potential: "∇_ℳ Φ (Potential Field)",
    sim_l24_regime: "Noise Regime (Hurst H)",
    sim_l24_state: "Causal State",
    sim_l24_hilbert: "X_t ∈ ℋ (Hilbert Space)"
  },

  es: {
    phase1_btn: "Comenzar Fase 1 →",
    phase2_btn: "Comenzar Fase 2 →",
    phase3_btn: "Explorar Modelos Mixtos →",
    phase4_btn: "Explorar el Cenit Apex (L24) →",
    phase1_link_l1: "• L1: Trampa de Atípicos y Mediana",
    phase1_link_l2: "• L2: Curva Normal y Regla 68-95-99.7",
    phase1_link_l3: "• L3: Teorema del Límite Central (TLC)",
    phase1_link_l5: "• L5: Valores p frente a Relevancia Clínica",
    phase2_link_l6: "• L6: MCO y la Recta de Regresión",
    phase2_link_l8: "• L8: Diagnósticos del Modelo (L.I.N.E.)",
    phase2_link_l9: "• L9: Paradoja de Simpson y Confusión",
    phase2_link_l11: "• L11: Regresión Logística y Odds Ratios",
    phase3_link_l13: "• L13: Datos Agrupados y Fracaso de MCO",
    phase3_link_l14: "• L14: Modelos Mixtos: Interceptos Aleatorios",
    phase3_link_l15: "• L15: Pendientes Aleatorias y Medidas Repetidas",
    phase3_link_l16: "• L16: GLMM para Respuestas Binarias y Conteos",
    phase3_link_l18: "• L18: Análisis de Supervivencia (Riesgos Proporcionales de Cox)",
    phase4_link_l19: "• L19: Fundamentos Bayesianos (Priori y Posteriori)",
    phase4_link_l20: "• L20: MCMC Bayesiano y Stan/PyMC",
    phase4_link_l21: "• L21: Procesos Gaussianos",
    phase4_link_l22: "• L22: Inferencia Causal en Espacios de Hilbert",
    phase4_link_l23: "• L23: SDEs y Difusión Estocástica",
    phase4_link_l24: "• L24: El Modelo Cenit Apex (Ω)",

    sweetspot_badge: "Punto Clave ⭐",
    spotlight_practical_tag: "Punto Clave Práctico",
    spotlight_levels_range: "Niveles 13–18",
    causal_preview_tag: "Avance de Fundamentos Causales (Nivel 22)",
    apex_badge_tag: "Cenit Teórico",
    apex_mastery_tag: "Nivel 24 • Maestría Verificada",
    footer_link_landing: "Inicio",
    footer_link_roadmap: "Trayectoria",
    footer_link_studio: "Estudio",

    xp_per_question: "+50 XP por pregunta",
    level_word: "Nivel",
    streak_label: "Racha",
    feedback_correct: "¡Respuesta correcta! (+50 XP)",
    feedback_wrong: "Aún no es del todo correcto:",
    btn_retry_exercise: "Intentar de nuevo",
    confirm_reset: "¿Estás seguro de que deseas restablecer todo el progreso, XP y rachas al Nivel 1?",
    complete_and_next: "Completar Nivel y Siguiente ➔",
    complete_apex: "🎉 ¡Completa el Nivel 24 y Reclama la Maestría Apex!",

    sim_l1_ceo_salary: "Salario CEO (Atípico):",
    sim_l1_mean_note: "¡Sensible a atípicos!",
    sim_l1_median_note: "Robusto ante atípicos",
    sim_l1_sd_note: "Dispersión inflada",
    sim_l1_iqr_note: "50% central puro",
    sim_l2_sigma: "Desviación Estándar (σ):",
    sim_l2_cutoff: "Umbral de Rechazo (X):",
    sim_l2_calc_z: "Puntuación Z Calculada",
    sim_l2_rejection: "Porcentaje de Rechazo",
    sim_l2_assumption: "Dentro de ± 2 DE",
    sim_l3_title: "Simulador Monte Carlo del Teorema del Límite Central (TLC)",
    sim_l3_desc: "Extrae 1.000 muestras de tamaño N y observa cómo emerge la campana de Gauss.",
    sim_l3_sample_size: "Tamaño Muestral (N):",
    sim_l3_shape: "Forma de Distribución",
    sim_l3_shape_normal: "Normal Acampanada",
    sim_l3_mean_xbar: "Media de x̄",
    sim_l3_emp_se: "EE Empírico",
    sim_l3_theo_se: "EE Teórico (σ/√N)",
    sim_l3_dist_dice: "Dado (Uniforme)",
    sim_l3_dist_skew: "Asimetría Severa (Exp)",
    sim_l4_title: "Visualizador de Intervalos de Confianza al 95%",
    sim_l4_desc: "Simula 100 muestras independientes. Observa cómo exactamente ~95 intervalos capturan el parámetro real.",
    sim_l4_capture_rate: "Tasa de Cobertura",
    sim_l4_ci_hit: "Captura el Parámetro Real",
    sim_l4_ci_miss: "No Captura el Parámetro",
    sim_l5_effect_size: "Tamaño del Efecto (d de Cohen):",
    sim_l5_sample_n: "Muestra por Grupo (N):",
    sim_l5_alpha: "Umbral de Significación α",
    sim_l5_power: "Potencia Estadística (1 - β)",
    sim_l5_beta: "Riesgo de Error Tipo II (β)",
    sim_l6_slope: "Pendiente (β₁):",
    sim_l6_intercept: "Intercepto (β₀):",
    sim_l6_model: "Modelo:",
    sim_l6_sse: "Suma de Cuadrados Residual (SCE):",
    sim_l7_title: "Estrés de Modelos: R² vs R² Ajustado",
    sim_l7_noise_vars: "Número de Variables de Ruido:",
    sim_l8_title: "Diagnósticos Residuales: Heterocedasticidad (Abanico)",
    sim_l8_homo: "Homocedástico (Dispersión Homogénea)",
    sim_l8_hetero: "Heterocedástico (En Abanico)",
    sim_l9_title: "Paradoja de Simpson (Ejercicio vs Colesterol)",
    sim_l10_title: "Explosión de Multicolinealidad y FIV",
    sim_l10_desc: "Desplaza la correlación a 0,99 y observa cómo se dispara el error estándar.",
    sim_l10_corr: "Correlación (r₁₂):",
    sim_l10_vif_formula: "FIV = 1 / (1 - r²)",
    sim_l10_se_inflation: "Inflación de EE (√FIV)",
    sim_l10_diag_status: "Estado Diagnóstico",
    sim_l11_title: "Curva Sigmoide y Matriz de Confusión en Vivo",
    sim_l11_desc: "Desplaza el umbral de decisión y analiza el dilema entre Sensibilidad y Especificidad.",
    sim_l11_cutoff: "Umbral de Decisión:",
    sim_l11_tp: "Verdadero Positivo (VP)",
    sim_l11_fp: "Falso Positivo (FP - Falsa Alarma)",
    sim_l11_fn: "Falso Negativo (FN - No Detectado)",
    sim_l11_tn: "Verdadero Negativo (VN)",
    sim_l11_sens: "Sensibilidad (Recall):",
    sim_l11_spec: "Especificidad:",
    sim_l11_f1: "Puntuación F1:",
    sim_l12_title: "Contracción de Coeficientes: Ridge vs Lasso",
    sim_l12_penalty: "Parámetro de Penalización (λ):",
    sim_l13_title: "Datos Agrupados y Correlación Intraclase (CCI)",
    sim_l14_title: "Modelos Lineales Mixtos I: Interceptos Aleatorios",
    sim_l15_title: "Modelos Lineales Mixtos II: Pendientes Aleatorias",
    sim_l16_title: "GLMM: Riesgo Infeccioso Binario por Clúster",
    sim_l17_title: "GAM: Splines No Lineales f(Temperatura)",
    sim_l18_title: "Curvas de Supervivencia de Kaplan-Meier",
    sim_l18_desc: "Probabilidad acumulada escalonada con censura por la derecha. Hazard Ratio = 0,58 (p = 0,003).",
    sim_l19_title: "Actualización Bayesiana: Priori ➔ Verosimilitud ➔ Posteriori",
    sim_l19_desc: "P(θ | Datos) ∝ P(Datos | θ) · P(θ). La posterior sintetiza el conocimiento previo y los nuevos datos.",
    sim_l20_title: "Muestreo y Traceplot de MCMC Hamiltoniano",
    sim_l20_desc: "Las cadenas exploran con fluidez la geometría posterior (R̂ = 1,002, 'oruga peluda' estacionaria).",
    sim_l21_title: "Procesos Gaussianos (GP): Incertidumbre a Posteriori",
    sim_l21_desc: "En cada punto medido la incertidumbre colapsa a cero; en las zonas desiertas se ensancha suavemente.",
    sim_l22_title: "Intervención Causal do(X) en Espacio de Hilbert",
    sim_l22_desc: "Compara la asociación observacional sesgada con la distribución intervencional pura en ℋ.",
    sim_l23_drift: "Deriva Determinista (μ):",
    sim_l23_diffusion: "Volatilidad Estocástica (σ):",
    sim_l24_roughness: "Rugosidad de Hurst (H):",
    sim_l24_geometry: "Geometría Espacial",
    sim_l24_manifold: "Variedad ℳ (Curvatura)",
    sim_l24_gradient: "Gradiente de Deriva",
    sim_l24_potential: "∇_ℳ Φ (Campo de Potencial)",
    sim_l24_regime: "Régimen de Ruido (Hurst H)",
    sim_l24_state: "Estado Causal",
    sim_l24_hilbert: "X_t ∈ ℋ (Espacio de Hilbert)"
  }
};

// Insert new keys into dict.nl, dict.en, dict.es
const sandbox = { window: {}, localStorage: { getItem: () => 'nl', setItem: () => {} } };
require('vm').runInNewContext(content, sandbox);
const currentDict = sandbox.window.I18N.dict;

['nl', 'en', 'es'].forEach(lang => {
  Object.assign(currentDict[lang], newKeys[lang]);
});

// Reconstruct i18n.js with updated dict and helper functions
const newI18nCode = `/**
 * Statistiek Leerplatform - Internationalization (i18n) Module
 * Ondersteunt volledige meertaligheid: Nederlands (nl), Engels (en) en Spaans (es).
 */

const dict = ${JSON.stringify(currentDict, null, 2)};

const levelMeta = ${JSON.stringify(sandbox.window.I18N.levelMeta, null, 2)};

window.I18N = {
  currentLang: 'nl',
  dict: dict,
  levelMeta: levelMeta,

  t(key) {
    const lang = this.currentLang || 'nl';
    if (this.dict[lang] && this.dict[lang][key]) {
      return this.dict[lang][key];
    }
    if (this.dict.en && this.dict.en[key]) {
      return this.dict.en[key];
    }
    if (this.dict.nl && this.dict.nl[key]) {
      return this.dict.nl[key];
    }
    return key;
  },

  getLevelTitle(level) {
    if (!level) return '';
    const lang = this.currentLang || 'nl';
    if (this.levelMeta[lang] && this.levelMeta[lang].levels[level.id]) {
      return this.levelMeta[lang].levels[level.id].title;
    }
    if (this.levelMeta.en && this.levelMeta.en.levels[level.id]) {
      return this.levelMeta.en.levels[level.id].title;
    }
    return level.title;
  },

  getLevelSubtitle(level) {
    if (!level) return '';
    const lang = this.currentLang || 'nl';
    if (this.levelMeta[lang] && this.levelMeta[lang].levels[level.id]) {
      return this.levelMeta[lang].levels[level.id].subtitle;
    }
    if (this.levelMeta.en && this.levelMeta.en.levels[level.id]) {
      return this.levelMeta.en.levels[level.id].subtitle;
    }
    return level.subtitle;
  },

  getLevelBadge(level) {
    if (!level) return '';
    const lang = this.currentLang || 'nl';
    if (this.levelMeta[lang] && this.levelMeta[lang].levels[level.id]) {
      return this.levelMeta[lang].levels[level.id].badge;
    }
    if (this.levelMeta.en && this.levelMeta.en.levels[level.id]) {
      return this.levelMeta.en.levels[level.id].badge;
    }
    return level.badge;
  },

  getPhaseTitle(phaseNumber) {
    const lang = this.currentLang || 'nl';
    if (lang === 'nl') {
      const defaultPhases = {
        1: "Fase 1: De Fundamenten",
        2: "Fase 2: Klassieke Regressie & Diagnostiek",
        3: "Fase 3: Mixed Models (De Praktische Sweet Spot)",
        4: "Fase 4: Geavanceerde Grenzen & Apex"
      };
      return defaultPhases[phaseNumber] || \`Fase \${phaseNumber}\`;
    }
    if (this.levelMeta[lang] && this.levelMeta[lang].phases[phaseNumber]) {
      return this.levelMeta[lang].phases[phaseNumber];
    }
    if (this.levelMeta.en && this.levelMeta.en.phases[phaseNumber]) {
      return this.levelMeta.en.phases[phaseNumber];
    }
    return \`Phase \${phaseNumber}\`;
  },

  getLevelCase(level) {
    if (!level) return null;
    const lang = this.currentLang || 'nl';
    if (lang === 'es' && level.case_es) return { ...level.case, ...level.case_es };
    if (lang === 'en' && level.case_en) return { ...level.case, ...level.case_en };
    return level.case;
  },

  getLevelTheory(level) {
    if (!level) return null;
    const lang = this.currentLang || 'nl';
    if (lang === 'es' && level.theory_es) return { ...level.theory, ...level.theory_es };
    if (lang === 'en' && level.theory_en) return { ...level.theory, ...level.theory_en };
    return level.theory;
  },

  getLevelSimulation(level) {
    if (!level) return null;
    const lang = this.currentLang || 'nl';
    if (lang === 'es' && level.simulation_es) return { ...level.simulation, ...level.simulation_es };
    if (lang === 'en' && level.simulation_en) return { ...level.simulation, ...level.simulation_en };
    return level.simulation;
  },

  getLevelInterpretation(level) {
    if (!level) return null;
    const lang = this.currentLang || 'nl';
    const orig = level.interpretation;
    if (!orig) return null;
    if (lang === 'es' && level.interpretation_es) {
      const trans = level.interpretation_es;
      return {
        title: trans.title || orig.title,
        recommendation: trans.recommendation || orig.recommendation,
        metrics: orig.metrics.map((m, idx) => {
          const tm = trans.metrics && trans.metrics[idx];
          return {
            label: tm ? tm.label : m.label,
            value: m.value,
            note: tm ? tm.note : m.note
          };
        })
      };
    }
    if (lang === 'en' && level.interpretation_en) {
      const trans = level.interpretation_en;
      return {
        title: trans.title || orig.title,
        recommendation: trans.recommendation || orig.recommendation,
        metrics: orig.metrics.map((m, idx) => {
          const tm = trans.metrics && trans.metrics[idx];
          return {
            label: tm ? tm.label : m.label,
            value: m.value,
            note: tm ? tm.note : m.note
          };
        })
      };
    }
    return orig;
  },

  getLevelQuiz(level) {
    if (!level) return null;
    const lang = this.currentLang || 'nl';
    if (lang === 'es' && level.quiz_es) return { ...level.quiz, ...level.quiz_es };
    if (lang === 'en' && level.quiz_en) return { ...level.quiz, ...level.quiz_en };
    return level.quiz;
  },

  getExercise(ex) {
    if (!ex) return ex;
    const lang = this.currentLang || 'nl';
    if (lang === 'es') {
      return {
        ...ex,
        category: ex.category_es || this.translateCategory(ex.category, 'es'),
        title: ex.title_es || ex.title,
        question: ex.question_es || ex.question,
        options: ex.options_es || ex.options,
        explanation: ex.explanation_es || ex.explanation
      };
    }
    if (lang === 'en') {
      return {
        ...ex,
        category: ex.category_en || this.translateCategory(ex.category, 'en'),
        title: ex.title_en || ex.title,
        question: ex.question_en || ex.question,
        options: ex.options_en || ex.options,
        explanation: ex.explanation_en || ex.explanation
      };
    }
    return ex;
  },

  translateCategory(cat, lang) {
    const l = lang || this.currentLang || 'nl';
    const map = {
      en: { 'Concept': 'Concept', 'Valkuil': 'Pitfall', 'Dilemma': 'Dilemma', 'Berekening': 'Calculation', 'Vraag': 'Question' },
      es: { 'Concept': 'Concepto', 'Valkuil': 'Trampa', 'Dilemma': 'Dilema', 'Berekening': 'Cálculo', 'Vraag': 'Pregunta' },
      nl: { 'Concept': 'Concept', 'Valkuil': 'Valkuil', 'Dilemma': 'Dilemma', 'Berekening': 'Berekening', 'Vraag': 'Vraag' }
    };
    return (map[l] && map[l][cat]) || cat;
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

    // Update all elements with data-i18n
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
`;

fs.writeFileSync(i18nPath, newI18nCode, 'utf8');
console.log('data/i18n.js patched successfully with new dictionary keys and helper methods!');
