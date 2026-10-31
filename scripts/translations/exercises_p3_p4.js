// Multilingual translations for Exercises in Levels 13 to 24 (Phases 3 & 4)

module.exports = {
  // LEVEL 13
  l13_ex1: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 1: Calculating Intraclass Correlation (ICC)",
    title_es: "Ejercicio 1: Calcular la Correlación Intraclase (CCI)",
    question_en: "In a study of exam scores across schools, between-school variance is τ² = 25 and within-school residual student variance is σ² = 75. What is the ICC?",
    question_es: "En un estudio de notas entre escuelas, la varianza entre escuelas es τ² = 25 y la varianza residual entre alumnos es σ² = 75. ¿Cuál es el CCI?",
    options_en: [
      "ICC = 25 / (25 + 75) = 0.25 (25% of total variance is at the school level)",
      "ICC = 75 / 25 = 3.00",
      "ICC = 25 / 75 = 0.33",
      "ICC = √(25 / 100) = 0.50"
    ],
    options_es: [
      "CCI = 25 / (25 + 75) = 0,25 (el 25% de la varianza total reside a nivel de escuela)",
      "CCI = 75 / 25 = 3,00",
      "CCI = 25 / 75 = 0,33",
      "CCI = √(25 / 100) = 0,50"
    ],
    explanation_en: "Correct! ICC = τ² / (τ² + σ²) = 25 / 100 = 0.25. A quarter of all variance is attributable to school clustering.",
    explanation_es: "¡Correcto! CCI = τ² / (τ² + σ²) = 25 / 100 = 0,25. Una cuarta parte de toda la variabilidad es atribuible al agrupamiento escolar."
  },
  l13_ex2: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 2: Why Does the Independence Assumption Fail?",
    title_es: "Ejercicio 2: ¿Por Qué Falla el Supuesto de Independencia?",
    question_en: "You measure blood pressure in 30 patients across 10 consecutive days (300 total rows). A junior analyst fits standard OLS with N = 300. Why is this statistical pseudoreplication?",
    question_es: "Mides la presión arterial en 30 pacientes durante 10 días consecutivos (300 filas). Un analista ajusta MCO estándar con N = 300. ¿Por qué esto es pseudorreplicación estadística?",
    options_en: [
      "Because blood pressure cannot be measured in millimetres of mercury",
      "Because 10 measurements from the same patient correlate heavily; the true independent sample size is N = 30 patients, not 300 independent units. OLS underestimates standard errors by √10 ≈ 3.16x!",
      "Because OLS requires at least 1,000 observations for longitudinal data",
      "Because repeated measurements eliminate residual variance"
    ],
    options_es: [
      "Porque la presión arterial no puede medirse en milímetros de mercurio",
      "Porque 10 registros del mismo paciente están fuertemente correlacionados; la muestra independiente real es N = 30 pacientes, no 300 unidades independientes. ¡MCO subestima los errores estándar en √10 ≈ 3,16 veces!",
      "Porque MCO exige al menos 1.000 observaciones en datos longitudinales",
      "Porque las medidas repetidas eliminan la varianza residual"
    ],
    explanation_en: "Phenomenal! Pseudoreplication treats dependent repeated measures as new independent information, manufacturing false statistical significance.",
    explanation_es: "¡Fenomenal! La pseudorreplicación confunde medidas repetidas con nuevas unidades de información independiente, fabricando significación estadística espuria."
  },
  l13_ex3: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 3: When is Pooled OLS Still Acceptable?",
    title_es: "Ejercicio 3: ¿Cuándo es Aceptable MCO Agrupado?",
    question_en: "When is it statistically sound to apply standard OLS to clustered data without mixed modeling?",
    question_es: "¿Cuándo es estadísticamente lícito aplicar MCO clásico a datos agrupados sin recurrir a modelos mixtos?",
    options_en: [
      "When the Intraclass Correlation is virtually zero (ICC < 0.01) and cluster design effect is close to 1.0, or cluster size is m = 1",
      "Whenever the total sample size N exceeds 500",
      "When the response variable is strictly normally distributed",
      "When the researcher is only interested in R²"
    ],
    options_es: [
      "Cuando la Correlación Intraclase es prácticamente nula (CCI < 0,01) y el efecto de diseño es cercano a 1,0, o el tamaño de grupo es m = 1",
      "Siempre que el tamaño total de la muestra N supere 500",
      "Cuando la variable de respuesta es estrictamente normal",
      "Cuando al investigador solo le interesa el R²"
    ],
    explanation_en: "Exact! If ICC ≈ 0, observations within clusters behave as independent random draws. Once ICC > 0.05, multilevel models are strictly necessary.",
    explanation_es: "¡Exacto! Si CCI ≈ 0, las observaciones dentro de cada grupo se comportan como datos independientes. A partir de CCI > 0,05 los modelos multinivel son obligatorios."
  },

  // LEVEL 14
  l14_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: Fixed Effect vs Random Effect",
    title_es: "Ejercicio 1: Efecto Fijo frente a Efecto Aleatorio",
    question_en: "In the multilevel equation Y_ij = (β₀ + u_0j) + β₁ X_ij + ε_ij, what is the exact conceptual distinction between fixed effect β₀ and random intercept u_0j?",
    question_es: "En la ecuación multinivel Y_ij = (β₀ + u_0j) + β₁ X_ij + ε_ij, ¿cuál es la distinción conceptual exacta entre el efecto fijo β₀ y el intercepto aleatorio u_0j?",
    options_en: [
      "β₀ is estimated with OLS and u_0j with Lasso",
      "β₀ is the fixed global population average; u_0j is a random stochastic deviation drawn from N(0, τ²) specific to cluster j",
      "u_0j is a non-linear spline function",
      "β₀ applies only to the first school"
    ],
    options_es: [
      "β₀ se estima con MCO y u_0j con Lasso",
      "β₀ representa el promedio poblacional global fijo; u_0j es una desviación estocástica aleatoria extraída de N(0, τ²) propia del grupo j",
      "u_0j es una función spline no lineal",
      "β₀ aplica únicamente a la primera escuela"
    ],
    explanation_en: "Flawless! Fixed effects describe universal population properties. Random effects model stochastic variation across sampled clusters.",
    explanation_es: "¡Impecable! Los efectos fijos describen propiedades promedio de la población. Los efectos aleatorios modelan la variabilidad estocástica entre los grupos muestreados."
  },
  l14_ex2: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 2: Empirical Bayes Shrinkage in Action",
    title_es: "Ejercicio 2: Contracción Empírica de Bayes en Acción",
    question_en: "School X has only 2 enrolled students, who happen to both score 10/10. Why does a Random Intercept model estimate School X's intercept at 7.8 rather than 10.0?",
    question_es: "El colegio X cuenta con solo 2 alumnos, y ambos obtienen un 10/10. ¿Por qué un modelo de Intercepto Aleatorio estima el intercepto del colegio X en 7,8 en lugar de 10,0?",
    options_en: [
      "The software encountered a numerical calculation bug",
      "Empirical Bayes shrinkage recognizes that N = 2 carries massive sampling noise, pulling the group intercept heavily toward the grand mean (7.2) to prevent overfitting",
      "The model caps all school intercepts at 8.0",
      "Because REML automatically subtracts 20% from small schools"
    ],
    options_es: [
      "El software cometió un error de cálculo numérico",
      "La contracción empírica de Bayes reconoce que N = 2 conlleva gran ruido muestral, contrayendo la estimación del grupo hacia la media global (7,2) para evitar sobreajuste",
      "El modelo limita todos los interceptos a un máximo de 8,0",
      "Porque REML resta automáticamente un 20% a los grupos pequeños"
    ],
    explanation_en: "Masterful! Partial pooling trusts groups with large sample sizes (little shrinkage) and pulls tiny noisy clusters toward the population mean.",
    explanation_es: "¡Magistral! El agrupamiento parcial confía en grupos con muchas observaciones (poca contracción) y atrae a los grupos pequeños ruidosos hacia la media poblacional."
  },
  l14_ex3: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 3: Random Intercepts vs Fixed Dummy Variables",
    title_es: "Ejercicio 3: Interceptos Aleatorios vs Variables Ficticias Fijas",
    question_en: "You investigate surgical complications across 200 hospitals. Why use a Random Intercept model rather than 199 fixed dummy indicator variables?",
    question_es: "Investigas complicaciones quirúrgicas en 200 hospitales. ¿Por qué usar un modelo de Interceptos Aleatorios en lugar de 199 variables ficticias fijas?",
    options_en: [
      "Fixed dummies consume 199 degrees of freedom, cannot generalize to unobserved hospitals, and destroy hospital-level predictors; random intercepts estimate a single variance parameter τ²",
      "Fixed dummies produce negative probabilities in linear models",
      "Random intercepts eliminate all residual variance",
      "Statistical software cannot estimate more than 50 dummy variables"
    ],
    options_es: [
      "Las variables fijas consumen 199 grados de libertad, impiden generalizar a hospitales no muestreados y eliminan predictores a nivel de hospital; los interceptos aleatorios estiman un único parámetro de varianza τ²",
      "Las variables ficticias producen probabilidades negativas",
      "Los interceptos aleatorios eliminan toda la varianza residual",
      "El software estadístico no puede computar más de 50 variables ficticias"
    ],
    explanation_en: "Sublime hierarchical insight! Random intercepts allow borrowing strength across groups, generalizability to the broader population, and inclusion of group-level covariates.",
    explanation_es: "¡Gran dominio jerárquico! Los interceptos aleatorios permiten compartir fuerza estadística entre grupos, generalizar a la población e incluir predictores contextuales de grupo."
  },

  // LEVEL 15
  l15_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: What Does a Random Slope Add?",
    title_es: "Ejercicio 1: ¿Qué Aporta una Pendiente Aleatoria?",
    question_en: "What is the visual and substantive difference between a Random Intercept model and a Random Slope model?",
    question_es: "¿Cuál es la diferencia visual y conceptual entre un modelo de Interceptos Aleatorios y uno de Pendientes Aleatorias?",
    options_en: [
      "Random Intercepts produce strictly parallel lines (same treatment effect in all groups); Random Slopes allow lines to have different angles, modeling heterogeneous treatment responses across groups",
      "Random Slopes can only be fitted to non-linear datasets",
      "Random Intercepts allow slopes to cross each other",
      "Random Slopes eliminate between-subject covariance"
    ],
    options_es: [
      "El Intercepto Aleatorio genera rectas estrictamente paralelas (mismo efecto en todos los grupos); la Pendiente Aleatoria permite inclinaciones distintas, modelando respuestas heterogéneas al tratamiento",
      "La Pendiente Aleatoria solo se aplica a datos no lineales",
      "El Intercepto Aleatorio permite que las rectas se crucen",
      "La Pendiente Aleatoria elimina la covarianza entre sujetos"
    ],
    explanation_en: "Crystal clear! Random intercepts assume treatment effects are identical across clusters (parallel trajectories). Random slopes permit personalized rates of change.",
    explanation_es: "¡Claridad meridiana! Los interceptos aleatorios asumen efectos idénticos en todos los grupos (rectas paralelas). Las pendientes aleatorias permiten trayectorias personalizadas."
  },
  l15_ex2: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 2: Negative Correlation Between Intercept and Slope",
    title_es: "Ejercicio 2: Correlación Negativa entre Intercepto y Pendiente",
    question_en: "In a cognitive stroke recovery trial, your mixed model estimates Corr(u₀, u₁) = -0.65. What does this mean clinically?",
    question_es: "En un ensayo de recuperación tras un ictus, tu modelo mixto estima Corr(u₀, u₁) = -0,65. ¿Qué significa clínicamente?",
    options_en: [
      "The model is defective and should be simplified",
      "Patients who start with poorer initial cognitive baselines (low intercept u₀) experience steeper recovery trajectories (high positive slope u₁): a clinical catch-up phenomenon",
      "Cognitive recovery ceases after 6 weeks",
      "Treatment causes cognitive decline in senior patients"
    ],
    options_es: [
      "El modelo es defectuoso y debe simplificarse",
      "Los pacientes con peor estado cognitivo inicial (bajo intercepto u₀) experimentan pendientes de recuperación más pronunciadas (alta pendiente u₁): fenómeno clínico de convergencia",
      "La recuperación cognitiva se detiene tras 6 semanas",
      "El tratamiento provoca deterioro cognitivo en pacientes mayores"
    ],
    explanation_en: "Clinical gold! A negative correlation between intercept and slope captures convergence: patients starting furthest behind make the most rapid initial gains.",
    explanation_es: "¡Oro clínico! Una correlación negativa intercepto-pendiente captura convergencia: quienes parten de una situación basal más desfavorable mejoran a un ritmo más acelerado."
  },
  l15_ex3: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 3: Handling Missing Values (Unbalanced Data)",
    title_es: "Ejercicio 3: Tratamiento de Datos Incompletos (Datos Desbalanceados)",
    question_en: "In a 5-year longitudinal study, 30% of patients miss at least one follow-up visit. Why are Linear Mixed Models vastly superior to Repeated Measures ANOVA here?",
    question_es: "En un estudio longitudinal de 5 años, el 30% de pacientes pierde al menos una visita de seguimiento. ¿Por qué los Modelos Mixtos son infinitamente superiores al ANOVA de Medidas Repetidas?",
    options_en: [
      "Repeated Measures ANOVA requires complete cases and discards any patient missing a single visit (huge power loss and attrition bias); Mixed Models use all available data under Missing at Random (MAR)",
      "ANOVA only works on samples smaller than 20",
      "Mixed models impute missing numbers with zero",
      "Because ANOVA does not permit continuous time"
    ],
    options_es: [
      "El ANOVA de medidas repetidas exige casos completos y descarta a cualquier paciente que falte a una sola visita (pérdida masiva de potencia y sesgo de atrición); los Modelos Mixtos aprovechan todos los registros disponibles bajo MAR",
      "El ANOVA solo funciona con muestras menores a 20 sujetos",
      "Los modelos mixtos imputan los datos faltantes con ceros",
      "Porque el ANOVA no admite variables de tiempo continuo"
    ],
    explanation_en: "The primary practical advantage of mixed models! LMMs effortlessly handle unbalanced visit schedules and missing timepoints without deleting patients.",
    explanation_es: "¡La mayor ventaja práctica de los modelos mixtos! Manejan sin esfuerzo visitas desbalanceadas y datos incompletos sin desechar al paciente del análisis."
  },

  // LEVEL 16
  l16_ex1: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 1: When to Transition to GLMM?",
    title_es: "Ejercicio 1: ¿Cuándo Pasar a GLMM?",
    question_en: "You count the number of epileptic seizures per month (discrete positive counts: 0, 1, 2...) in patients nested across 12 hospitals. What model is scientifically required?",
    question_es: "Cuentas el número de crisis epilépticas mensuales (recuentos discretos positivos: 0, 1, 2...) en pacientes tratados en 12 hospitales. ¿Qué modelo es científicamente exigible?",
    options_en: [
      "Ordinary Linear Regression with log-transformed counts",
      "A Poisson or Negative Binomial Generalized Linear Mixed Model (GLMM) with a log link function and random hospital intercepts",
      "Repeated measures ANOVA",
      "Linear Mixed Model with Gaussian errors"
    ],
    options_es: [
      "Regresión lineal ordinaria con recuentos transformados por logaritmo",
      "Un Modelo Lineal Mixto Generalizado (GLMM) Poisson o Binomial Negativo con función de enlace logarítmica e interceptos aleatorios por hospital",
      "ANOVA de medidas repetidas",
      "Modelo Lineal Mixto con errores gaussianos estándar"
    ],
    explanation_en: "Superb! Discrete non-negative count data with clustering strictly demands a count GLMM (Poisson/Negative Binomial) with random effects.",
    explanation_es: "¡Excelente! Los datos de recuento no negativos con estructura agrupada exigen estrictamente un GLMM de conteo (Poisson/Binomial Negativa) con efectos aleatorios."
  },
  l16_ex2: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 2: Interpretation of Fixed Effects in GLMM",
    title_es: "Ejercicio 2: Interpretación de Efectos Fijos en GLMM",
    question_en: "In a logistic GLMM for hospital-acquired infections, the fixed effect for Antibiotic Prophylaxis is β̂ = -0.51 (p = 0.002). What does this mean?",
    question_es: "En un GLMM logístico de infecciones hospitalarias, el efecto fijo de Profilaxis Antibiótica es β̂ = -0,51 (p = 0,002). ¿Qué significa?",
    options_en: [
      "Infection rate drops by 51 percentage points",
      "Odds Ratio OR = e^-0.51 ≈ 0.60: prophylaxis reduces infection odds by 40% for a patient within any given hospital, holding hospital-level baseline risk constant",
      "The hospital infection variance τ² drops by 51%",
      "40% of patients developed antibiotic resistance"
    ],
    options_es: [
      "La tasa de infección se reduce en 51 puntos porcentuales",
      "Odds Ratio OR = e^-0,51 ≈ 0,60: la profilaxis reduce las odds de infección un 40% para un paciente en cualquier hospital dado, manteniendo constante el riesgo basal del centro",
      "La varianza entre hospitales τ² se reduce en un 51%",
      "El 40% de los pacientes desarrolló resistencia a antibióticos"
    ],
    explanation_en: "Conditional interpretation mastery! In GLMM, fixed effects represent subject-specific (conditional) effects holding random cluster effects constant.",
    explanation_es: "¡Interpretación condicional de nivel maestro! En GLMM, los efectos fijos expresan efectos condicionales a nivel de sujeto manteniendo constantes los efectos aleatorios del clúster."
  },
  l16_ex3: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 3: What is Overdispersion?",
    title_es: "Ejercicio 3: ¿Qué es la Sobredispersión?",
    question_en: "In a Poisson GLMM, residual deviance is double the residual degrees of freedom (Ratio = 2.1). What does this overdispersion diagnosis imply?",
    question_es: "En un GLMM Poisson, la devianza residual duplica los grados de libertad residuales (Razón = 2,1). ¿Qué implica este diagnóstico de sobredispersión?",
    options_en: [
      "Poisson assumption Var(Y) = E[Y] is violated: variance exceeds the mean, deflating standard errors; transition to a Negative Binomial GLMM or observation-level random effects",
      "The model has too few predictors",
      "The sample size is too large",
      "The link function must be changed to probit"
    ],
    options_es: [
      "El supuesto de Poisson Var(Y) = E[Y] se vulnera: la varianza supera a la media, desinflando los errores estándar; debe pasarse a un GLMM Binomial Negativo o efectos aleatorios a nivel de observación",
      "El modelo contiene muy pocos predictores",
      "El tamaño muestral es excesivo",
      "La función de enlace debe cambiarse a probit"
    ],
    explanation_en: "Essential diagnostic rigor! Poisson assumes equidispersance (Mean = Var). When data is overdispersed, Negative Binomial GLMM correctly models extra variance.",
    explanation_es: "¡Rigor diagnóstico fundamental! Poisson asume equidispersión (Media = Varianza). Ante sobredispersión, el GLMM Binomial Negativo modela adecuadamente la varianza excedente."
  },

  // LEVEL 17
  l17_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: What are Splines in GAMs?",
    title_es: "Ejercicio 1: ¿Qué son los Splines en GAMs?",
    question_en: "How does a Generalized Additive Model (GAM) model a non-linear relationship without forcing a global polynomial curve?",
    question_es: "¿Cómo modela un Modelo Aditivo Generalizado (GAM) una relación no lineal sin forzar una curva polinómica global rígida?",
    options_en: [
      "By connecting smooth local basis functions (splines) joined at knots, penalized by a curvature roughness penalty ∫[f''(x)]² dx",
      "By calculating moving averages across 5-point windows",
      "By converting all continuous numbers into categorical quartiles",
      "By using decision trees with binary splits"
    ],
    options_es: [
      "Uniendo funciones base locales suaves (splines) en nudos, penalizadas por una penalización de rugosidad por curvatura ∫[f''(x)]² dx",
      "Calculando medias móviles en ventanas de 5 observaciones",
      "Transformando los valores continuos en cuartiles discretos",
      "Utilizando árboles de decisión con particiones binarias"
    ],
    explanation_en: "Exact! Penalized splines construct flexible modular curves from basis functions while curvature penalties prevent wiggly overfitting.",
    explanation_es: "¡Exacto! Los splines penalizados construyen curvas suaves flexibles uniendo funciones base locales y penalizando oscilaciones excesivas."
  },
  l17_ex2: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 2: Effective Degrees of Freedom (EDF)",
    title_es: "Ejercicio 2: Grados de Libertad Efectivos (EDF)",
    question_en: "In a GAM output, smooth term s(Age) has EDF = 1.002. Smooth term s(Income) has EDF = 4.25. How do you interpret these two terms?",
    question_es: "En la salida de un GAM, el término s(Edad) tiene EDF = 1,002. El término s(Ingresos) tiene EDF = 4,25. ¿Cómo interpretas ambos términos?",
    options_en: [
      "s(Age) is effectively a simple linear relationship; s(Income) possesses complex non-linear curvature with multiple bends",
      "s(Age) is statistically insignificant; s(Income) is significant",
      "s(Income) is overfitted and must be removed",
      "Both terms are quadratic curves"
    ],
    options_es: [
      "s(Edad) es prácticamente una relación lineal simple; s(Ingresos) posee una marcada curvatura no lineal con múltiples puntos de inflexión",
      "s(Edad) no es estadísticamente significativo; s(Ingresos) sí lo es",
      "s(Ingresos) está sobreajustado y debe eliminarse",
      "Ambos términos son parábolas cuadráticas"
    ],
    explanation_en: "Brilliant GAM fluency! EDF = 1 denotes a pure straight line. EDF > 3 indicates rich non-linear behavior.",
    explanation_es: "¡Fluidez matemática en GAMs! EDF = 1 equivale a una línea recta pura. EDF > 3 evidencia comportamientos no lineales ricos."
  },
  l17_ex3: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 3: The Smoothing Penalty λ",
    title_es: "Ejercicio 3: La Penalización de Suavizado λ",
    question_en: "What happens to the estimated spline curve in a GAM if you force smoothing penalty λ to approach infinity (λ → ∞)?",
    question_es: "¿Qué le sucede a la curva spline estimada en un GAM si fuerzas la penalización de suavizado λ hacia infinito (λ → ∞)?",
    options_en: [
      "The curve interpolates every single data point like a connect-the-dots zigzag",
      "All curvature is completely extinguished: the spline collapses to a strict linear Ordinary Least Squares line (EDF = 1)",
      "The model produces NaN errors",
      "Effective degrees of freedom expand to infinity"
    ],
    options_es: [
      "La curva interpola cada punto muestral individual en un zigzag continuo",
      "Toda curvatura se elimina por completo: el spline colapsa a una recta de regresión lineal estándar MCO (EDF = 1)",
      "El modelo arroja errores numéricos NaN",
      "Los grados de libertad efectivos se expanden hacia infinito"
    ],
    explanation_en: "Precision theoretical understanding! The curvature penalty ∫[f''(x)]² dx penalizes bending. When λ → ∞, zero bending is permitted: f''(x) = 0, which is a straight line.",
    explanation_es: "¡Comprensión teórica impecable! La penalización penaliza la segunda derivada. Si λ → ∞, no se tolera curvatura: f''(x) = 0, lo que define una línea recta."
  },

  // LEVEL 18
  l18_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: What is Censoring in Survival Analysis?",
    title_es: "Ejercicio 1: ¿Qué es la Censura en Análisis de Supervivencia?",
    question_en: "In an oncology trial terminating after 5 years, some patients remain alive and cancer-free. Why is deleting these patients or treating their follow-up duration as their time of death completely wrong?",
    question_es: "En un ensayo oncológico que termina a los 5 años, varios pacientes siguen vivos y sin enfermedad. ¿Por qué descartar a estos pacientes o tratar la fecha final como fecha de muerte es un grave error?",
    options_en: [
      "Deleting them discards the healthiest patients (severe survival underestimation); setting death at 5 years treats living patients as dead. Survival analysis uses right-censoring to retain their living time without inventing deaths",
      "Because surviving patients should be analyzed with logistic regression instead",
      "Censoring only matters in animal studies",
      "Because 5-year survival is always 100%"
    ],
    options_es: [
      "Excluirlos descarta a los pacientes más sanos (subestimando gravemente la supervivencia); asumir su muerte a los 5 años contabiliza muertes inexistentes. El análisis de supervivencia retiene su tiempo vivido mediante censura por la derecha",
      "Porque los pacientes supervivientes deben analizarse con regresión logística",
      "La censura solo es relevante en ensayos con animales",
      "Porque la supervivencia a 5 años siempre es del 100%"
    ],
    explanation_en: "Spot on! Right-censoring acknowledges: 'We know this patient survived AT LEAST 5 years'. Kaplan-Meier integrates partial information unbiassedly.",
    explanation_es: "¡Exacto! La censura por la derecha incorpora: 'Sabemos que este paciente vivió AL MENOS 5 años'. Kaplan-Meier aprovecha esta información sin sesgos."
  },
  l18_ex2: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 2: Interpreting a Hazard Ratio",
    title_es: "Ejercicio 2: Interpretar una Hazard Ratio",
    question_en: "In a clinical heart failure trial, a Cox model reports a Hazard Ratio of HR = 0.65 (95% CI [0.48, 0.88], p = 0.005) for an ACE inhibitor. What does this mean?",
    question_es: "En un ensayo de insuficiencia cardíaca, un modelo de Cox reporta una Hazard Ratio de HR = 0,65 (IC 95% [0,48; 0,88], p = 0,005) para un fármaco. ¿Qué significa?",
    options_en: [
      "Treated patients have a 35% lower instantaneous risk of dying at any timepoint during follow-up compared to controls",
      "35% of patients survived",
      "Life expectancy increases by exactly 0.65 years",
      "The drug is ineffective because HR is below 1.0"
    ],
    options_es: [
      "Los pacientes tratados presentan una reducción del 35% en el riesgo instantáneo de muerte en cualquier instante del seguimiento frente al grupo control",
      "El 35% de los pacientes sobrevivió",
      "La esperanza de vida aumenta exactamente 0,65 años",
      "El fármaco es ineficaz porque la HR es menor a 1,0"
    ],
    explanation_en: "Haute clinical fluency! 1 - 0.65 = 0.35: a 35% reduction in hazard rate across the trial period.",
    explanation_es: "¡Gran dominio clínico! 1 - 0,65 = 0,35: reducción del 35% en la tasa instantánea de riesgo durante todo el seguimiento."
  },
  l18_ex3: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 3: The Proportional Hazards Assumption",
    title_es: "Ejercicio 3: El Supuesto de Riesgos Proporcionales",
    question_en: "In a Cox regression, the survival curves of surgery and radiation therapy CROSS at month 12 (surgery has high initial mortality but better 5-year survival). What does this cross signal?",
    question_es: "En una regresión de Cox, las curvas de supervivencia de cirugía y radioterapia se CRUZAN en el mes 12 (la cirugía tiene alta mortalidad inicial pero mejor supervivencia a 5 años). ¿Qué delata este cruce?",
    options_en: [
      "Both treatments are equally effective at all times",
      "Violation of the Proportional Hazards assumption: Hazard Ratio changes over time (HR < 1 early, HR > 1 late); a single static Cox HR is invalid and requires time-varying coefficients",
      "The sample size must be doubled",
      "The log-rank test is automatically invalid"
    ],
    options_es: [
      "Que ambos tratamientos son idénticamente eficaces en todo momento",
      "Violación del supuesto de Riesgos Proporcionales: la Hazard Ratio cambia con el tiempo (HR < 1 al inicio, HR > 1 después); una única HR estática de Cox queda invalidada y exige coeficientes variables en el tiempo",
      "Que el tamaño muestral debe duplicarse",
      "Que el test de log-rank queda invalidado"
    ],
    explanation_en: "Masterful survival insight! Crossing curves prove the risk ratio is not proportional across time. Time-dependent covariates or stratified Cox models are required.",
    explanation_es: "¡Maestría en supervivencia! Curvas que se cruzan demuestran que la razón de riesgos no es constante en el tiempo. Requiere covariables dependientes del tiempo o modelos estratificados."
  },

  // LEVEL 19
  l19_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: The Three Pillars of Bayes",
    title_es: "Ejercicio 1: Los Tres Pilares de Bayes",
    question_en: "Which fundamental formula formalizes how Bayesian statistics updates prior knowledge with newly observed empirical evidence?",
    question_es: "¿Qué formulación fundamental formaliza cómo la estadística bayesiana actualiza el conocimiento previo con la evidencia empírica recién observada?",
    options_en: [
      "Posterior ∝ Likelihood × Prior",
      "R² = 1 - (SSE / SST)",
      "p = P(Data | H₀)",
      "Z = (X - μ) / σ"
    ],
    options_es: [
      "Posteriori ∝ Verosimilitud × Priori",
      "R² = 1 - (SCE / SCT)",
      "p = P(Datos | H₀)",
      "Z = (X - μ) / σ"
    ],
    explanation_en: "The heart of Bayesian statistics! The posterior distribution is the mathematical product of the likelihood of observed data and prior belief.",
    explanation_es: "¡El corazón de la estadística bayesiana! La distribución posterior es el producto directo de la verosimilitud de los datos y la distribución a priori."
  },
  l19_ex2: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 2: Influence of the Prior as N Grows Large",
    title_es: "Ejercicio 2: Influencia de la Priori con N Grande",
    question_en: "What happens to the influence of the chosen prior distribution P(θ) as sample size N grows toward infinity (N → ∞)?",
    question_es: "¿Qué le sucede a la influencia de la distribución a priori P(θ) conforme el tamaño muestral N crece hacia infinito (N → ∞)?",
    options_en: [
      "The prior dominates the posterior completely",
      "The likelihood completely overwhelms the prior: the posterior converges to the Maximum Likelihood Estimate regardless of reasonable prior choices (Bernstein-von Mises Theorem)",
      "The posterior variance expands to infinity",
      "The prior probability distribution becomes non-integrable"
    ],
    options_es: [
      "La priori domina por completo a la distribución posterior",
      "La verosimilitud satura y domina a la priori: la posterior converge a la estimación de máxima verosimilitud independientemente de prioris razonables (Teorema de Bernstein-von Mises)",
      "La varianza posterior se expande a infinito",
      "La distribución a priori se vuelve inintegrable"
    ],
    explanation_en: "Bernstein-von Mises theorem! With abundant data, the likelihood dominates. Priors provide crucial regularization in small samples but yield to massive evidence.",
    explanation_es: "¡Teorema de Bernstein-von Mises! Con abundantes datos, la verosimilitud prevalece. La priori aporta regularización en muestras pequeñas pero cede ante la evidencia masiva."
  },
  l19_ex3: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 3: What Can You Say About a 95% Credible Interval?",
    title_es: "Ejercicio 3: ¿Qué Puedes Afirmar de un Intervalo de Credibilidad al 95%?",
    question_en: "Unlike a frequentist confidence interval, what straightforward probabilistic statement CAN you make about a Bayesian 95% Credible Interval [2.4, 6.8]?",
    question_es: "A diferencia de un intervalo frecuentista, ¿qué afirmación probabilística directa SÍ es formalmente válida sobre un Intervalo de Credibilidad Bayesiano al 95% [2,4; 6,8]?",
    options_en: [
      "There is literally a 95% probability that the true parameter θ lies between 2.4 and 6.8, given our data and prior",
      "95% of future sample means will equal 4.6",
      "The p-value is strictly equal to 0.05",
      "The null hypothesis is rejected with 95% power"
    ],
    options_es: [
      "Existe literalmente un 95% de probabilidad de que el verdadero parámetro θ se encuentre entre 2,4 y 6,8, dados los datos observados y la distribución a priori",
      "El 95% de las futuras medias muestrales será igual a 4,6",
      "El valor p es estrictamente igual a 0,05",
      "La hipótesis nula se rechaza con un 95% de potencia"
    ],
    explanation_en: "The intuitive beauty of Bayes! Because parameters are random variables with posterior distributions, credible intervals directly express probability.",
    explanation_es: "¡La elegancia intuitiva de Bayes! Al ser los parámetros variables con distribución posterior, los intervalos de credibilidad permiten afirmaciones probabilísticas directas."
  },

  // LEVEL 20
  l20_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: Why MCMC?",
    title_es: "Ejercicio 1: ¿Por Qué MCMC?",
    question_en: "Why do modern statisticians use Markov Chain Monte Carlo (MCMC) instead of standard analytical integration in complex Bayesian models?",
    question_es: "¿Por qué los estadísticos modernos emplean MCMC en lugar de integración analítica en modelos bayesianos complejos?",
    options_en: [
      "Because the Bayesian normalizing constant ∫ P(Data|θ)P(θ)dθ is mathematically impossible to solve analytically in high dimensions; MCMC samples from the posterior without calculating this constant",
      "Because MCMC eliminates the need for prior distributions",
      "Because MCMC always runs faster than OLS",
      "Because MCMC guarantees p-values below 0.05"
    ],
    options_es: [
      "Porque la constante normalizadora ∫ P(Datos|θ)P(θ)dθ es analíticamente irresoluble en altas dimensiones; MCMC extrae muestras de la posterior sin necesidad de calcular esa integral",
      "Porque MCMC prescinde de distribuciones a priori",
      "Porque MCMC siempre es más rápido que MCO",
      "Porque MCMC garantiza valores p inferiores a 0,05"
    ],
    explanation_en: "Exact! The denominator integral in Bayes' rule is an intractable multi-dimensional volume. MCMC evaluates unnormalized ratios, bypassing the integral entirely.",
    explanation_es: "¡Exacto! El denominador del teorema de Bayes es una integral multivariante intratable. MCMC evalúa cocientes no normalizados, sorteando la integral por completo."
  },
  l20_ex2: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 2: Gelman-Rubin R̂ Diagnostics",
    title_es: "Ejercicio 2: Diagnóstico Gelman-Rubin R̂",
    question_en: "In a Bayesian Stan model running 4 chains: Chain 1 has mean 12.0, Chain 2 has mean 12.1, Chain 3 has mean 28.5, and Chain 4 has mean 11.9. Gelman-Rubin is R̂ = 1.84. What must you conclude?",
    question_es: "En un modelo Stan con 4 cadenas: Cadena 1 tiene media 12,0; Cadena 2 tiene 12,1; Cadena 3 tiene 28,5; y Cadena 4 tiene 11,9. El estadístico R̂ es 1,84. ¿Qué concluyes?",
    options_en: [
      "Chains have converged because R̂ is greater than 1.0",
      "Convergence failure (R̂ = 1.84 >> 1.05): Chain 3 is stuck in an unrepresentative local mode; results are invalid and cannot be interpreted",
      "The sample size of chains should be reduced",
      "The posterior is perfectly Gaussian"
    ],
    options_es: [
      "Las cadenas han convergido porque R̂ es mayor que 1,0",
      "Fallo crítico de convergencia (R̂ = 1,84 >> 1,05): la Cadena 3 quedó atrapada en un modo local aislado; las estimaciones son inválidas",
      "El número de iteraciones de las cadenas debe reducirse",
      "La distribución posterior es perfectamente gaussiana"
    ],
    explanation_en: "Essential MCMC quality control! R̂ compares between-chain variance to within-chain variance. R̂ must be < 1.05 (ideally < 1.01). R̂ = 1.84 proves lack of convergence.",
    explanation_es: "¡Control de calidad MCMC indispensable! R̂ compara la varianza entre cadenas frente a la varianza interna. R̂ debe ser < 1,05 (idealmente < 1,01). R̂ = 1,84 delata falta de convergencia."
  },
  l20_ex3: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 3: What Makes Hamiltonian Monte Carlo (HMC) Superior?",
    title_es: "Ejercicio 3: ¿Qué Hace Superior a Monte Carlo Hamiltoniano (HMC)?",
    question_en: "Why does Hamiltonian Monte Carlo (HMC / NUTS in Stan) scale to hundreds of parameters while classical Metropolis-Hastings suffers from curse of dimensionality?",
    question_es: "¿Por qué Monte Carlo Hamiltoniano (HMC / NUTS en Stan) escala a cientos de dimensiones mientras Metropolis-Hastings sufre la maldición de la dimensionalidad?",
    options_en: [
      "HMC calculates the gradient ∇log P(θ|D) and uses physical momentum to glide through parameter space, avoiding diffusive random-walk behavior",
      "HMC replaces calculus with random coin flips",
      "HMC requires no burn-in or warmup iterations",
      "HMC only samples discrete integers"
    ],
    options_es: [
      "HMC calcula el gradiente ∇log P(θ|D) y utiliza momento físico para deslizarse por la geometría posterior, evitando el paseo aleatorio difusivo ineficiente",
      "HMC sustituye el cálculo diferencial por lanzamientos de monedas",
      "HMC no requiere iteraciones de calentamiento (warmup)",
      "HMC solo muestrea valores enteros discretos"
    ],
    explanation_en: "Physical elegance! HMC simulates frictionless physics across the posterior energy landscape. Gradients direct proposals into high-probability volumes.",
    explanation_es: "¡Elegancia física! HMC simula dinámica hamiltoniana sin fricción sobre el paisaje energético posterior. Los gradientes guían las trayectorias hacia zonas de alta probabilidad."
  },

  // LEVEL 21
  l21_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: What is a Gaussian Process?",
    title_es: "Ejercicio 1: ¿Qué es un Proceso Gaussiano?",
    question_en: "What is the most intuitive and mathematically rigorous definition of a Gaussian Process (GP)?",
    question_es: "¿Cuál es la definición más intuitiva y matemáticamente rigurosa de un Proceso Gaussiano (GP)?",
    options_en: [
      "A software algorithm that runs normal distribution tests",
      "An infinite collection of random variables, any finite subset of which has a joint multivariate Gaussian distribution, defining a probability distribution over continuous functions",
      "A linear regression model with normally distributed predictors",
      "A Markov chain that generates Gaussian noise"
    ],
    options_es: [
      "Un algoritmo de software que ejecuta pruebas de normalidad",
      "Una colección infinita de variables aleatorias, donde cualquier subconjunto finito sigue una distribución normal multivariante conjunta, definiendo una distribución sobre funciones continuas",
      "Un modelo de regresión lineal con predictores gaussianos",
      "Una cadena de Markov que genera ruido blanco normal"
    ],
    explanation_en: "Exact textbook definition! A GP is non-parametric Bayesian learning over function spaces, fully determined by its mean function m(x) and covariance kernel k(x, x').",
    explanation_es: "¡Definición rigurosa exacta! Un GP es aprendizaje bayesiano no paramétrico sobre espacios de funciones continuas, gobernado por su media m(x) y kernel k(x, x')."
  },
  l21_ex2: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 2: The RBF Kernel Lengthscale ℓ",
    title_es: "Ejercicio 2: La Escala de Longitud ℓ del Kernel RBF",
    question_en: "In a Radial Basis Function (RBF) kernel k(x, x') = σ² exp(-||x - x'||² / 2ℓ²), what happens to the predictive function when lengthscale ℓ is set exceedingly small (ℓ → 0)?",
    question_es: "En un kernel RBF k(x, x') = σ² exp(-||x - x'||² / 2ℓ²), ¿qué le ocurre a la función predicha si fijamos la escala de longitud ℓ extremadamente pequeña (ℓ → 0)?",
    options_en: [
      "The function becomes an ultra-smooth straight line",
      "Spatial correlation collapses: the function spikes sharply through observed data points and immediately reverts to prior mean zero between points (extreme overfitting)",
      "The kernel matrix becomes singular and unsolvable",
      "The uncertainty ribbon expands uniformly across all space"
    ],
    options_es: [
      "La función se convierte en una línea recta perfectamente lisa",
      "La correlación espacial colapsa: la función oscila bruscamente conectando los puntos observados y cae de inmediato a la media previa cero en los intervalos intermedios (sobreajuste extremo)",
      "La matriz del kernel se vuelve singular e incalculable",
      "La banda de incertidumbre se ensancha uniformemente en todo el espacio"
    ],
    explanation_en: "Profound GP intuition! Lengthscale ℓ defines the horizontal memory of the kernel. If ℓ is tiny, points do not share information with their neighbors.",
    explanation_es: "¡Gran intuición en GPs! La escala ℓ define el alcance de memoria espacial del kernel. Si ℓ es diminuta, los puntos observados no comparten información con sus vecinos."
  },
  l21_ex3: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 3: Bayesian Optimization with GPs",
    title_es: "Ejercicio 3: Optimización Bayesiana con Procesos Gaussianos",
    question_en: "Why are Gaussian Processes the gold-standard surrogate model in Bayesian Optimization (e.g. tuning expensive deep neural net hyperparameters or drug molecules)?",
    question_es: "¿Por qué los Procesos Gaussianos son el modelo sustituto predilecto en Optimización Bayesiana (ej. calibrar hiperparámetros costosos o moléculas químicas)?",
    options_en: [
      "Because GPs provide both a predicted mean AND a closed-form predictive uncertainty σ(x) at every location, enabling acquisition functions (like Expected Improvement) to balance exploration vs exploitation",
      "Because GPs can evaluate millions of points per second without GPU memory",
      "Because GPs guarantee global optimality in non-convex spaces without assumptions",
      "Because GPs eliminate the need for acquisition functions"
    ],
    options_es: [
      "Porque los GPs proporcionan tanto la media predicha COMO la incertidumbre analítica exacta σ(x) en cada punto, permitiendo funciones de adquisición (como Expected Improvement) que equilibran exploración y explotación",
      "Porque los GPs evalúan millones de puntos por segundo sin memoria GPU",
      "Porque los GPs garantizan óptimos globales no convexos sin supuestos",
      "Porque los GPs prescinden de funciones de adquisición"
    ],
    explanation_en: "State-of-the-art machine learning! Accurate uncertainty quantification allows algorithms to strategically sample unmeasured regions with high upside.",
    explanation_es: "¡Vanguardia en machine learning! Una cuantificación rigurosa de la incertidumbre permite muestrear zonas inexploradas con alto potencial de mejora."
  },

  // LEVEL 22
  l22_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: Seeing vs Doing (Judea Pearl)",
    title_es: "Ejercicio 1: Observar frente a Actuar (Judea Pearl)",
    question_en: "According to Judea Pearl's Causal Ladder, what is the fundamental mathematical difference between passive conditioning P(Y | X = x) and active intervention P(Y | do(X = x))?",
    question_es: "Según la Escalera de Causalidad de Judea Pearl, ¿cuál es la diferencia matemática esencial entre el condicionamiento pasivo P(Y | X = x) y la intervención activa P(Y | do(X = x))?",
    options_en: [
      "There is no difference; both produce identical probabilities under infinite sample size",
      "P(Y | X = x) filters existing passive observational data including all confounding paths; P(Y | do(X = x)) models the outcome under an active external intervention that severs all incoming causal arrows into X",
      "P(Y | do(X)) can only be computed in laboratory experiments",
      "The do-operator is identical to standard Bayesian updating"
    ],
    options_es: [
      "No existe diferencia; ambos arrojan idénticas probabilidades con muestras infinitas",
      "P(Y | X = x) filtra datos observacionales pasivos incluyendo caminos de confusión; P(Y | do(X = x)) modela el resultado bajo una intervención física externa que corta todas las flechas entrantes hacia X",
      "P(Y | do(X)) solo es computable en experimentos de laboratorio",
      "El operador do es equivalente a la actualización bayesiana ordinaria"
    ],
    explanation_en: "Pinnacle causal distinction! Seeing updates beliefs within a static system. Doing alters the physical data-generating mechanism itself (graph surgery).",
    explanation_es: "¡La distinción causal cumbre! Observar filtra probabilidades en un sistema estático. Actuar interviene sobre el mecanismo generador cortando dependencias (cirugía de grafos)."
  },
  l22_ex2: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 2: The Collider Trap (Berkson's Paradox)",
    title_es: "Ejercicio 2: La Trampa del Colisionador (Paradoja de Berkson)",
    question_en: "In a DAG: Talent (X) → Hollywood Stardom (Z) ← Charm (Y). Both talent and charm independently cause stardom (a collider Z). What catastrophe happens if you condition on Stardom Z in your regression?",
    question_es: "En un DAG: Talento (X) → Fama en Hollywood (Z) ← Carisma (Y). Ambos causan de forma independiente la fama (colisionador Z). ¿Qué catástrofe ocurre si condicionas por Fama Z en tu regresión?",
    options_en: [
      "Conditioning on a collider opens a spurious non-causal path between X and Y, generating a false negative correlation between talent and charm among famous actors!",
      "It eliminates all residual variance and perfects causal estimation",
      "Collider conditioning blocks all confounding",
      "It transforms the model into a Random Intercept model"
    ],
    options_es: [
      "¡Condicionar en un colisionador abre un camino espurio no causal entre X e Y, generando una correlación negativa artificial entre talento y carisma entre los actores famosos!",
      "Elimina toda la varianza residual y perfecciona la inferencia causal",
      "Condicionar en colisionadores neutraliza la confusión de puerta trasera",
      "Transforma automáticamente el modelo en uno de interceptos aleatorios"
    ],
    explanation_en: "Berkson's collider bias! Unlike confounders (which must be conditioned on), conditioning on a common effect (collider) ACTIVATES spurious bias.",
    explanation_es: "¡Sesgo de colisionador de Berkson! A diferencia de los confusores (que deben controlarse), condicionar en un efecto común (colisionador) ACTIVA correlaciones espurias."
  },
  l22_ex3: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 3: Kernel Mean Embeddings in Hilbert Spaces (ℋ)",
    title_es: "Ejercicio 3: Incrustación de Medias en Espacios de Hilbert (ℋ)",
    question_en: "Why do modern mathematical statisticians embed probability distributions into Reproducing Kernel Hilbert Spaces (RKHS): μ_P = E_P[k(·, X)] ∈ ℋ?",
    question_es: "¿Por qué los estadísticos modernos incrustan distribuciones de probabilidad en Espacios de Hilbert (RKHS): μ_P = E_P[k(·, X)] ∈ ℋ?",
    options_en: [
      "To compress data tables into small text files",
      "Because when the kernel is characteristic (like Gaussian RBF), the mapping P ↦ μ_P is strictly injective; all moments and non-linear properties of the distribution are preserved as a single geometric vector in Hilbert space ℋ",
      "Because Hilbert spaces forbid non-linear transformations",
      "To force all causal graphs to be linear"
    ],
    options_es: [
      "Para comprimir tablas de datos en archivos pequeños de texto",
      "Porque cuando el kernel es característico (como el RBF gaussiano), la aplicación P ↦ μ_P es estrictamente inyectiva; todos los momentos y propiedades no lineales se preservan como un vector geométrico en el espacio de Hilbert ℋ",
      "Porque los espacios de Hilbert prohíben transformaciones no lineales",
      "Para obligar a que todos los grafos causales sean lineales"
    ],
    explanation_en: "Ultimate statistical mathematics! Kernel embeddings allow non-parametric two-sample testing (Maximum Mean Discrepancy) and causal discovery without parametric assumptions.",
    explanation_es: "¡Cúspide de la matemática estadística! La incrustación en RKHS permite contrastes no paramétricos universales (MMD) y descubrimiento causal sin supuestos distribucionales."
  },

  // LEVEL 23
  l23_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: Meaning of dX_t = μ dt + σ dB_t",
    title_es: "Ejercicio 1: Significado de dX_t = μ dt + σ dB_t",
    question_en: "In the Stochastic Differential Equation dX_t = μ(X_t) dt + σ(X_t) dB_t, what physical roles do the two terms play?",
    question_es: "En la Ecuación Diferencial Estocástica dX_t = μ(X_t) dt + σ(X_t) dB_t, ¿qué papeles físicos desempeñan ambos términos?",
    options_en: [
      "μ dt is deterministic directional drift (gradient flow); σ dB_t is stochastic Brownian diffusion representing continuous microscopic random shocks",
      "Both terms represent deterministic velocity",
      "μ dt is white noise and σ dB_t is potential energy",
      "dB_t is the ordinary derivative of time"
    ],
    options_es: [
      "μ dt es la deriva determinista direccional (flujo de gradiente); σ dB_t es la difusión estocástica browniana que modela perturbaciones microscópicas continuas",
      "Ambos términos representan velocidad determinista pura",
      "μ dt es ruido blanco y σ dB_t es energía potencial",
      "dB_t es la derivada clásica del tiempo"
    ],
    explanation_en: "Exact! An SDE unifies deterministic physics (drift) with stochastic continuous noise (Brownian motion diffusion).",
    explanation_es: "¡Exacto! Una SDE unifica la física determinista (deriva) con el azar estocástico continuo (difusión browniana)."
  },
  l23_ex2: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 2: The Secret of Itô's Lemma",
    title_es: "Ejercicio 2: El Secreto del Lema de Itô",
    question_en: "Why does the stochastic chain rule df(X_t) = f'(X_t)dX_t + ½ f''(X_t)(dX_t)² retain the second derivative, whereas ordinary calculus discards it as negligible?",
    question_es: "¿Por qué la regla de la cadena estocástica df(X_t) = f'(X_t)dX_t + ½ f''(X_t)(dX_t)² conserva la segunda derivada, mientras el cálculo clásico la descarta por infinitesimal?",
    options_en: [
      "Because computers need second derivatives for matrix inversion",
      "Because Brownian motion has non-zero quadratic variation: (dB_t)² = dt. Since (dB_t)² is first-order in dt, ½ f''(X) σ² dt does not vanish in the continuous limit!",
      "Because f(X) is non-differentiable",
      "Because Itô calculus only works on quadratic polynomials"
    ],
    options_es: [
      "Porque los ordenadores requieren segundas derivadas para invertir matrices",
      "Porque el movimiento browniano posee variación cuadrática no nula: (dB_t)² = dt. Al ser (dB_t)² de primer orden en dt, ¡½ f''(X) σ² dt no se desvanece en el límite infinitesimal!",
      "Porque f(X) no es diferenciable",
      "Porque el cálculo de Itô solo es aplicable a polinomios cuadráticos"
    ],
    explanation_en: "The foundation of stochastic analysis! Brownian motion trajectories are fractal: increments scale with √dt, so their square (dt) contributes directly to drift.",
    explanation_es: "¡El pilar del análisis estocástico! Las trayectorias brownianas son fractales: sus incrementos escalan con √dt, por lo que su cuadrado (dt) contribuye a la deriva."
  },
  l23_ex3: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 3: Itô vs Stratonovich Integration",
    title_es: "Ejercicio 3: Integración de Itô frente a Stratonovich",
    question_en: "What is the key difference between Itô integration (evaluating integrand at left endpoint t_i) and Stratonovich integration (evaluating at midpoint (t_i + t_{i+1})/2)?",
    question_es: "¿Cuál es la diferencia clave entre la integral de Itô (evaluada en el extremo izquierdo t_i) y la de Stratonovich (evaluada en el punto medio (t_i + t_{i+1})/2)?",
    options_en: [
      "Itô integrals are martingales with zero expectation (vital for finance/filtration) but alter the chain rule; Stratonovich preserves ordinary Leibniz chain rules but introduces drift",
      "Stratonovich is only for discrete numbers and Itô for continuous",
      "Itô integration cannot be computed numerically",
      "Both integrals produce identical numerical results"
    ],
    options_es: [
      "La integral de Itô es una martingala con esperanza cero (esencial en finanzas y filtraciones) pero altera la regla de la cadena; Stratonovich preserva la regla clásica de Leibniz pero introduce deriva estocástica",
      "Stratonovich solo opera con enteros y Itô con números continuos",
      "La integral de Itô no puede simularse numéricamente",
      "Ambas integrales arrojan idénticos resultados muestrales"
    ],
    explanation_en: "Mathematical elegance! Itô maintains non-anticipating martingales (fundamental in finance). Stratonovich preserves geometric chain rules on smooth manifolds.",
    explanation_es: "¡Elegancia matemática pura! Itô preserva la propiedad de martingala no anticipativa (crucial en finanzas). Stratonovich conserva la regla de la cadena en variedades diferenciables."
  },

  // LEVEL 24
  l24_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: Geometry of ∇_ℳ Φ on a Riemannian Manifold",
    title_es: "Ejercicio 1: Geometría de ∇_ℳ Φ en una Variedad Riemanniana",
    question_en: "In the apex equation dX_t = -∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ, why can standard Euclidean gradient vectors not be used on a curved manifold ℳ?",
    question_es: "En la ecuación apex dX_t = -∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough en ℋ, ¿por qué no se pueden usar gradientes euclidianos clásicos sobre una variedad curva ℳ?",
    options_en: [
      "Euclidean gradients do not account for metric tensor g_ij; on a curved manifold, directional steepest descent requires the Levi-Civita Riemannian gradient: ∇_ℳ Φ = g^{ij} (∂Φ/∂x^j) ∂/∂x^i",
      "Because manifolds have zero dimension",
      "Because curvature eliminates all potential energy",
      "Euclidean gradients only operate in one dimension"
    ],
    options_es: [
      "Los gradientes euclidianos ignoran el tensor métrico g_ij; sobre variedades curvadas, el descenso más pronunciado exige el gradiente riemanniano de Levi-Civita: ∇_ℳ Φ = g^{ij} (∂Φ/∂x^j) ∂/∂x^i",
      "Porque las variedades carecen de dimensión matemática",
      "Porque la curvatura extingue toda la energía potencial",
      "Porque los gradientes euclidianos solo existen en una dimensión"
    ],
    explanation_en: "Apex differential geometry! Steepest descent on curved spaces must be evaluated through the Riemannian metric tensor g, respecting intrinsic curvature.",
    explanation_es: "¡Geometría diferencial de nivel apex! El descenso más rápido en espacios curvados debe computarse mediante el tensor métrico riemanniano g, respetando la curvatura intrínseca."
  },
  l24_ex2: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 2: Terry Lyons' Rough Path Theory (H < 1/2)",
    title_es: "Ejercicio 2: Teoría de Trayectorias Rugosas de Terry Lyons (H < 1/2)",
    question_en: "Why does classical stochastic calculus collapse when driving noise has Hurst roughness H < 1/2, and how did Terry Lyons resolve it with Signatures?",
    question_es: "¿Por qué colapsa el cálculo estocástico clásico cuando el ruido tiene rugosidad de Hurst H < 1/2 y cómo lo resolvió Terry Lyons con Signaturas?",
    options_en: [
      "For H < 1/2, p-variation index exceeds p > 2; paths cease to be semimartingales and the Itô integral loses continuity. Terry Lyons enriched paths with iterated tensor integrals (Rough Path Signatures), restoring deterministic continuity",
      "Because fractional Brownian motion loses continuity at H = 1/2",
      "Terry Lyons proved that noise disappears when H < 1/2",
      "Because p-variation cannot be computed for non-integer exponents"
    ],
    options_es: [
      "Para H < 1/2, la p-variación supera p > 2; las trayectorias dejan de ser semimartingalas y la aplicación de Itô pierde continuidad. Terry Lyons enriqueció los caminos con integrales tensoriales iteradas (Signaturas), restaurando la continuidad determinista",
      "Porque el movimiento browniano fraccionario pierde continuidad en H = 1/2",
      "Terry Lyons demostró que el ruido desaparece cuando H < 1/2",
      "Porque la p-variación no puede computarse con exponentes no enteros"
    ],
    explanation_en: "The pinnacle of modern stochastic analysis! Terry Lyons proved that augmenting rough trajectories with tensor signatures renders differential equation solutions continuous.",
    explanation_es: "¡La cumbre del análisis estocástico moderno! Terry Lyons demostró que enriquecer caminos rugosos con signaturas tensoriales hace continua la solución de ecuaciones diferenciales."
  },
  l24_ex3: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 3: The Infinite-Dimensional Hilbert Space ℋ",
    title_es: "Ejercicio 3: El Espacio de Hilbert ℋ de Dimensión Infinita",
    question_en: "What does it mean that system state X_t lives in an infinite-dimensional Reproducing Kernel Hilbert Space ℋ?",
    question_es: "¿Qué implica que el estado del sistema X_t resida en un Espacio de Hilbert con Núcleo Reproducible (RKHS) ℋ de dimensión infinita?",
    options_en: [
      "At every instant t, the state is not a single finite number or vector, but an entire continuous function or probability distribution embedded into a complete inner-product space ℋ",
      "The model has an infinite number of training parameters that cannot be computed",
      "The dataset contains infinite rows",
      "The probability of the model is zero"
    ],
    options_es: [
      "En cada instante t, el estado no es un escalar o vector finito, sino una función continua completa o distribución de probabilidad incrustada en un espacio dotado de producto interno ℋ",
      "Que el modelo tiene infinitos parámetros de entrenamiento incalculables",
      "Que la base de datos contiene infinitas filas",
      "Que la verosimilitud del modelo es nula"
    ],
    explanation_en: "Sublime apex mastery! In infinite-dimensional Hilbert spaces, states evolve as functional fields, uniting stochastic paths with non-parametric operator theory.",
    explanation_es: "¡Maestría cumbre sublime! En espacios de Hilbert de dimensión infinita, los estados evolucionan como campos funcionales continuos, uniendo SDEs con teoría de operadores."
  },
  l24_ex4: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 4: The Causal Synthesis Dilemma",
    title_es: "Ejercicio 4: El Dilema de la Síntesis Causal",
    question_en: "Why is unifying causal inference (do-calculus) with non-parametric Bayesian SDEs on manifolds the ultimate frontier of modern artificial intelligence and statistical science?",
    question_es: "¿Por qué unificar la inferencia causal (do-cálculo) con SDEs bayesianas no paramétricas sobre variedades es la frontera definitiva de la inteligencia artificial y la estadística?",
    options_en: [
      "Because it bridges passive correlation with active interventional physics: models can reason about counterfactual 'what-if' interventions in complex continuous, non-linear dynamical systems without parametric constraints",
      "Because it replaces computers with quantum mechanics",
      "Because it proves that all p-values are equal to zero",
      "Because it eliminates the need for experimental data"
    ],
    options_es: [
      "Porque une la correlación pasiva con la física intervencional activa: permite razonar sobre contrafácticos ('qué pasaría si...') en sistemas dinámicos continuos y no lineales sin restricciones paramétricas",
      "Porque sustituye los ordenadores por mecánica cuántica",
      "Porque demuestra que todos los valores p son iguales a cero",
      "Porque prescinde de la necesidad de datos empíricos"
    ],
    explanation_en: "The Grand Unified Apex! Blending Pearl's causal interventions with continuous stochastic manifold geometry empowers true scientific intelligence: predicting the consequences of action in an uncertain, non-linear universe.",
    explanation_es: "¡El Cenit Unificado Definitivo! Fundir intervenciones causales de Pearl con geometría estocástica continua sobre variedades permite la verdadera inteligencia científica: predecir los efectos de la acción en un universo no lineal e incierto."
  }
};
