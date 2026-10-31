# -*- coding: utf-8 -*-
ALIGNED_P3_P4 = {
  "l13_ex1": {
    "category_en": "Calculation",
    "category_es": "Cálculo",
    "category_de": "Berechnung",
    "title_en": "Exercise 1: Calculating Intraclass Correlation (ICC)",
    "title_es": "Ejercicio 1: Cálculo del Coeficiente de Correlación Intraclase (ICC)",
    "title_de": "Übung 1: Berechnung der Intraclass-Korrelation (ICC)",
    "question_en": "In a study of exam scores across schools, between-school variance is σ²_u0 = 4.0 and within-school residual variance is σ²_e = 16.0. What is the Intraclass Correlation Coefficient (ICC)?",
    "question_es": "En un estudio de calificaciones entre colegios, la varianza entre centros es σ²_u0 = 4,0 y la varianza residual intra-centro es σ²_e = 16,0. ¿Cuál es el Coeficiente de Correlación Intraclase (ICC)?",
    "question_de": "In einer Schulleistungsstudie beträgt die Varianz zwischen Schulen σ²_u0 = 4,0 und die Residualvarianz innerhalb der Schulen σ²_e = 16,0. Wie hoch ist der Intraklassen-Korrelationskoeffizient (ICC)?",
    "options_en": [
      "ICC = 4.0 / 16.0 = 0.25 (a quarter of residual dispersion)",
      "ICC = √(4.0 / 20.0) ≈ 0.447 (adjusted Pearson correlation across classes)",
      "ICC = 16.0 / (4.0 + 16.0) = 0.80 (reliability index of student dispersion)",
      "ICC = 4.0 / (4.0 + 16.0) = 4.0 / 20.0 = 0.20 (20% of all variance is between schools)"
    ],
    "options_es": [
      "ICC = 4,0 / 16,0 = 0,25 (un cuarto de la dispersión residual)",
      "ICC = √(4,0 / 20,0) ≈ 0,447 (correlación de Pearson corregida entre clases)",
      "ICC = 16,0 / (4,0 + 16,0) = 0,80 (índice de fiabilidad de la dispersión)",
      "ICC = 4,0 / (4,0 + 16,0) = 4,0 / 20,0 = 0,20 (el 20% de la varianza total se sitúa entre colegios)"
    ],
    "options_de": [
      "ICC = 4,0 / 16,0 = 0,25 (ein Viertel der Residualstreuung)",
      "ICC = √(4,0 / 20,0) ≈ 0,447 (korrigierte Pearson-Korrelation zwischen Klassen)",
      "ICC = 16,0 / (4,0 + 16,0) = 0,80 (Zuverlässigkeitsindex der Schülerstreuung)",
      "ICC = 4,0 / (4,0 + 16,0) = 4,0 / 20,0 = 0,20 (20% der Gesamtvarianz liegt zwischen den Schulen)"
    ],
    "explanation_en": "Correct! ICC = σ²_between / (σ²_between + σ²_within) = 4 / (4 + 16) = 0.20. Fully 20% of score variation is attributable to school-level clustering!",
    "explanation_es": "¡Correcto! ICC = σ²_entre / (σ²_entre + σ²_intra) = 4 / (4 + 16) = 0,20. ¡Un 20% de toda la variabilidad se debe al centro escolar!",
    "explanation_de": "Richtig! ICC = σ²_between / (σ²_between + σ²_within) = 4 / (4 + 16) = 0,20. Ganze 20% der Gesamtvarianz der Noten gehen auf Schulunterschiede zurück!"
  },
  "l13_ex2": {
    "category_en": "Pitfall",
    "category_es": "Trampa",
    "category_de": "Fallstrick",
    "title_en": "Exercise 2: Pseudoreplication Pitfall",
    "title_es": "Ejercicio 2: La Trampa de la Pseudoreplicación",
    "title_de": "Übung 2: Die Pseudoreplikations-Falle",
    "question_en": "You measure blood pressure in 30 patients across 10 consecutive days (300 total measurements). Why must you NOT run standard OLS regression with N = 300?",
    "question_es": "Mides la presión arterial en 30 pacientes durante 10 días consecutivos (300 mediciones en total). ¿Por qué NO debes aplicar regresión lineal MCO estándar con N = 300?",
    "question_de": "Du misst den Blutdruck bei 30 Patienten an 10 aufeinanderfolgenden Tagen (insgesamt 300 Messungen). Warum darfst du hier KEINE Standard-OLS-Regression mit N = 300 durchführen?",
    "options_en": [
      "Because OLS cannot mathematically converge when measurements per person are balanced",
      "OLS assumes 300 completely independent individuals; due to clustering within patients, standard errors are severely underestimated, leading to rampant false-positive significant effects (pseudoreplication)",
      "Because the conditional expectation of blood pressure is strictly non-linear by definition",
      "Because repeated measurements destroy the normality of the response variable"
    ],
    "options_es": [
      "Porque MCO no puede converger cuando el número de mediciones por persona es idéntico",
      "MCO calcula como si tuvieses 300 individuos independientes; por la agrupación en pacientes, los errores estándar se subestiman enormemente, inflando falsos positivos (pseudoreplicación)",
      "Porque la esperanza condicional de la presión arterial es estrictamente no lineal",
      "Porque las medidas repetidas destruyen la normalidad de la variable dependiente"
    ],
    "options_de": [
      "Weil OLS mathematisch nicht konvergieren kann, wenn die Anzahl der Messungen pro Person balanciert ist",
      "OLS rechnet so, als lägen 300 völlig unabhängige Individuen vor; durch die Clusterung innerhalb der Patienten werden Standardfehler drastisch unterschätzt und OLS meldet massive Scheinsignifikanzen (Pseudoreplikation)",
      "Weil der bedingte Erwartungswert des Blutdrucks per Definition nichtlinear ist",
      "Weil wiederholte Messungen die Normalität der Zielgröße zerstören"
    ],
    "explanation_en": "Spot-on! Pseudoreplication treats dependent repeat measures as new independent evidence, artificially shrinking standard errors and exaggerating certainty.",
    "explanation_es": "¡Totalmente acertado! Pseudoreplicación trata medidas repetidas dependientes como nueva evidencia independiente, subestimando errores y creando falsa certidumbre.",
    "explanation_de": "Volltreffer! Pseudoreplikation behandelt abhängige Wiederholungsmessungen als unabhängige Information und erzeugt künstliche Scheinsignifikanz."
  },
  "l13_ex3": {
    "category_en": "Dilemma",
    "category_es": "Dilema",
    "category_de": "Dilemma",
    "title_en": "Exercise 3: When is Pooled OLS Acceptable?",
    "title_es": "Ejercicio 3: ¿Cuándo es Aceptable MCO Agrupado?",
    "title_de": "Übung 3: Wann ist gepooltes OLS vertretbar?",
    "question_en": "When is it statistically sound to analyze a clustered dataset with standard OLS without requiring a multilevel model?",
    "question_es": "¿Cuándo es estadísticamente justificable analizar un conjunto de datos agrupados con MCO estándar sin recurrir a un modelo multinivel?",
    "question_de": "Wann ist es statistisch vertretbar, einen geclusterten Datensatz mit Standard-OLS ohne Mehrebenenmodell zu analysieren?",
    "options_en": [
      "Whenever the intra-cluster correlation exceeds 0.75",
      "If total observations exceed N = 10,000 regardless of cluster size",
      "When all cluster means are symmetrically distributed around the grand mean",
      "When ICC < 0.05 (less than 5% between-group variance) AND the Design Effect (DEFF = 1 + (m - 1) × ICC) is close to 1.0 (e.g., DEFF < 1.1)"
    ],
    "options_es": [
      "En cuanto la correlación intraclase sea superior a 0,75",
      "Si el total de observaciones supera N = 10.000 independientemente del tamaño del cluster",
      "Cuando todas las medias de grupo sean perfectamente simétricas respecto a la media global",
      "Cuando el ICC < 0,05 (menos del 5% de varianza entre grupos) Y el Efecto de Diseño (DEFF = 1 + (m - 1) × ICC) esté próximo a 1,0 (p. ej., DEFF < 1,1)"
    ],
    "options_de": [
      "Sobald die Intraklassen-Korrelation größer als 0,75 ist",
      "Wenn die Gesamtzahl der Beobachtungen größer als N = 10.000 ist, unabhängig von der Clustergröße",
      "Wenn alle Clustermittelwerte exakt symmetrisch um den Gesamtmittelwert liegen",
      "Wenn ICC < 0,05 (weniger als 5% Zwischengruppenvarianz) UND der Design-Effekt (DEFF = 1 + (m - 1) × ICC) nahe bei 1,0 liegt (z.B. DEFF < 1,1)"
    ],
    "explanation_en": "Very prudent! If ICC is negligible (< 0.05) and cluster sizes are small, design effects approach 1.0 and OLS yields virtually unbiased inferences.",
    "explanation_es": "¡Muy sensato! Si el ICC es despreciable (< 0,05) y los clusters son pequeños, el efecto de diseño es cercano a 1,0 y MCO arroja inferencias válidas.",
    "explanation_de": "Sehr klug! Bei vernachlässigbarem ICC (< 0,05) und kleinen Gruppen ist der Designeffekt nahe 1,0 und Standard-OLS liefert unverzerrte Ergebnisse."
  },
  "l14_ex1": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 1: Fixed vs Random Effects",
    "title_es": "Ejercicio 1: Efectos Fijos frente a Efectos Aleatorios",
    "title_de": "Übung 1: Feste vs. Zufällige Effekte",
    "question_en": "In the multilevel model Y_ij = (β0 + u_0j) + β1 X_ij + e_ij: what is the fundamental conceptual difference between β1 and u_0j?",
    "question_es": "En el modelo multinivel Y_ij = (β0 + u_0j) + β1 X_ij + e_ij: ¿cuál es la diferencia conceptual fundamental entre β1 y u_0j?",
    "question_de": "In der Mehrebenengleichung Y_ij = (β0 + u_0j) + β1 X_ij + e_ij: Was ist der fundamentale Unterschied zwischen β1 und u_0j?",
    "options_en": [
      "β1 is individual-level measurement error and u_0j is the regression constant",
      "β1 is the fixed effect applicable across the entire population; u_0j is the random residual deviation of baseline level for specific cluster j",
      "β1 varies across clusters while u_0j is constant for all schools simultaneously",
      "Both are identical Gaussian error terms randomly distributed with mean zero"
    ],
    "options_es": [
      "β1 es el error de medida individual y u_0j es la constante de regresión",
      "β1 es el efecto fijo aplicable a toda la población; u_0j es la desviación residual aleatoria del nivel base del cluster j",
      "β1 varía por cluster mientras que u_0j es constante para todas las escuelas",
      "Ambos son términos de error gaussianos idénticos distribuidos con media cero"
    ],
    "options_de": [
      "β1 ist der Messfehler auf individueller Ebene und u_0j ist die Regressionskonstante",
      "β1 ist der feste (fixed) Effekt für die Gesamtpopulation; u_0j ist die zufällige (random) Residualabweichung des Startniveaus für das spezifische Cluster j",
      "β1 variiert pro Cluster und u_0j ist für alle Schulen konstant",
      "Beide sind identische gaußförmige Störterme mit Mittelwert null"
    ],
    "explanation_en": "Exact! β1 is the population-wide fixed slope. u_0j is the random intercept deviation for group j (how much group j differs from baseline β0).",
    "explanation_es": "¡Exacto! β1 es la pendiente fija poblacional. u_0j es el intercepto aleatorio del cluster j respecto a la media global β0.",
    "explanation_de": "Exakt! β1 ist die feste Populationssteigung. u_0j ist das zufällige Intercept von Cluster j relativ zum Gesamtmittelwert β0."
  },
  "l14_ex2": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 2: Shrinkage and Partial Pooling",
    "title_es": "Ejercicio 2: Contracción (Shrinkage) y Agrupación Parcial",
    "title_de": "Übung 2: Shrinkage und Partial Pooling",
    "question_en": "At School X, only 2 students are enrolled, both happening to score 9.5. Why does a Random Intercept model estimate School X's expected score at 7.8 (much closer to the grand mean of 7.0)?",
    "question_es": "En la Escuela X solo hay 2 estudiantes matriculados, y ambos obtienen 9,5. ¿Por qué un modelo de interceptos aleatorios estima el nivel esperado de la Escuela X en 7,8 (mucho más cerca de la media global de 7,0)?",
    "question_de": "An Schule X lernen nur 2 Schüler, die zufällig beide eine 9,5 erzielen. Warum schätzt ein Random-Intercept-Modell das erwartete Niveau von Schule X auf 7,8 (viel näher am Gesamtmittelwert von 7,0)?",
    "options_en": [
      "Because shrinkage automatically pulls small clusters with little evidence toward the grand population mean (partial pooling) to prevent overfitting to extreme noise",
      "Because observations scoring above 9.0 are automatically trimmed as measurement errors",
      "Because the model applies a penalty based on Student's t distribution with 1 degree of freedom",
      "Because restricted maximum likelihood (REML) always discards clusters smaller than N = 5"
    ],
    "options_es": [
      "Porque la contracción (shrinkage) atrae automáticamente los clusters pequeños hacia la media poblacional (partial pooling) para evitar sobreajuste a ruido extremo",
      "Porque las observaciones por encima de 9,0 se recortan como errores de medida",
      "Porque el modelo aplica una penalización basada en t de Student con 1 grado de libertad",
      "Porque la máxima verosimilitud restringida (REML) siempre descarta clusters menores de N = 5"
    ],
    "options_de": [
      "Weil Shrinkage kleine Cluster mit geringer Evidenz automatisch zum Gesamtpopulationsmittelwert zieht (Partial Pooling), um Overfitting auf extremes Rauschen zu verhindern",
      "Weil Beobachtungen über 9,0 automatisch als Messfehler bereinigt werden",
      "Weil das Modell eine Strafe basierend auf der t-Verteilung mit 1 Freiheitsgrad berechnet",
      "Weil Restricted Maximum Likelihood (REML) Cluster kleiner als N = 5 stets ignoriert"
    ],
    "explanation_en": "Masterful! Empirical Bayes shrinkage borrows statistical strength from the entire population, pulling noisy, low-sample clusters safely toward the global mean.",
    "explanation_es": "¡Magistral! La contracción empírica de Bayes toma fuerza del conjunto poblacional, contrayendo clusters ruidosos hacia la media global.",
    "explanation_de": "Meisterhaft! Empirical Bayes Shrinkage leiht Information aus der Gesamtpopulation und zieht kleine, verrauschte Cluster verlässlich zur Mitte."
  },
  "l14_ex3": {
    "category_en": "Dilemma",
    "category_es": "Dilema",
    "category_de": "Dilemma",
    "title_en": "Exercise 3: Random Intercepts vs 199 Dummy Variables",
    "title_es": "Ejercicio 3: Interceptos Aleatorios frente a 199 Variables Ficticias",
    "title_de": "Übung 3: Random Intercepts vs. 199 Dummy-Variablen",
    "question_en": "You investigate clinical complications across 200 hospitals. Why is a Random Intercept model superior to fitting 199 separate hospital dummy variables (Fixed Effects)?",
    "question_es": "Investigas complicaciones en 200 hospitales. ¿Por qué es preferible un modelo de interceptos aleatorios antes que ajustar 199 variables ficticias por hospital (efectos fijos)?",
    "question_de": "Du untersuchst Komplikationen in 200 Krankenhäusern. Warum ist ein Random-Intercept-Modell 199 separaten Dummy-Variablen (Fixed Effects) überlegen?",
    "options_en": [
      "Because dummy variables cannot mathematically be estimated via standard matrix inversion",
      "Because fixed effects dummies immediately invalidate the Gauss-Markov theorem",
      "199 dummies consume 199 degrees of freedom and overfit small hospitals, while a Random Intercept estimates only 1 variance parameter σ²_u0 and allows hospital-level predictors (like budget)",
      "Because a Random Intercept forces all hospital complication rates to be strictly equal"
    ],
    "options_es": [
      "Porque las variables ficticias no pueden estimarse mediante inversión matricial clásica",
      "Porque las variables ficticias invalidan inmediatamente el teorema de Gauss-Markov",
      "199 variables ficticias consumen 199 grados de libertad y sobreajustan hospitales pequeños, mientras que el intercepto aleatorio solo estima 1 parámetro de varianza σ²_u0 y permite predictores de hospital",
      "Porque el intercepto aleatorio fuerza que todos los hospitales tengan idéntica tasa de complicaciones"
    ],
    "options_de": [
      "Weil Dummy-Variablen über normale Matrixinversion mathematisch nicht geschätzt werden können",
      "Weil Fixed-Effects-Dummies das Gauß-Markov-Theorem sofort ungültig machen",
      "199 Dummies verbrauchen 199 Freiheitsgrade und überfitten kleine Kliniken, während ein Random Intercept nur 1 Varianzparameter σ²_u0 schätzt und Prädiktoren auf Klinikebene (wie Budget) erlaubt",
      "Weil ein Random Intercept erzwingt, dass alle Kliniken identische Komplikationsraten aufweisen"
    ],
    "explanation_en": "Spot-on! 199 fixed dummies waste statistical power and forbid hospital-level covariates. Random intercepts treat hospitals as draws from a population, estimating just σ²_u0.",
    "explanation_es": "¡Totalmente acertado! 199 ficticias destruyen grados de libertad e impiden variables de nivel hospital. El intercepto aleatorio solo estima σ²_u0.",
    "explanation_de": "Volltreffer! 199 Dummies vernichten Freiheitsgrade und verbieten Variablen auf Klinikebene. Random Intercepts schätzen lediglich einen einzigen Varianzparameter σ²_u0."
  },
  "l15_ex1": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 1: Random Intercept vs Random Slope",
    "title_es": "Ejercicio 1: Intercepto Aleatorio frente a Pendiente Aleatoria",
    "title_de": "Übung 1: Random Intercept vs. Random Slope",
    "question_en": "What is the visual and mathematical difference between a Random Intercept model and a Random Slope model in longitudinal patient trajectories?",
    "question_es": "¿Cuál es la diferencia visual y matemática entre un modelo de interceptos aleatorios y uno de pendientes aleatorias en trayectorias longitudinales de pacientes?",
    "question_de": "Was ist der visuelle und mathematische Unterschied zwischen einem Random-Intercept- und einem Random-Slope-Modell bei Längsschnitt-Trajektorien von Patienten?",
    "options_en": [
      "Random Intercept yields crossing lines; Random Slope yields purely horizontal trajectories",
      "Random Slope can only be fitted when patient follow-up intervals are discrete integers",
      "There is no mathematical difference; both models estimate identical variance components",
      "Random Intercept: parallel lines (same rate of change, different starting levels). Random Slope: lines with individual slopes per cluster (varying recovery speeds or treatment responses per patient)"
    ],
    "options_es": [
      "El intercepto aleatorio produce líneas cruzadas; la pendiente aleatoria produce rectas horizontales",
      "La pendiente aleatoria solo se puede ajustar con intervalos de seguimiento enteros discretos",
      "No existe diferencia matemática; ambos modelos estiman idénticos componentes de varianza",
      "Intercepto Aleatorio: rectas paralelas (misma pendiente, distinto punto de partida). Pendiente Aleatoria: rectas con pendiente propia por cluster (distinto ritmo de recuperación por paciente)"
    ],
    "options_de": [
      "Random Intercept ergibt kreuzende Linien; Random Slope erzeugt rein horizontale Trajektorien",
      "Random Slope kann nur angepasst werden, wenn die Folgeintervalle ganzzahlig diskret sind",
      "Es gibt keinen mathematischen Unterschied; beide Modelle schätzen identische Varianzkomponenten",
      "Random Intercept: parallele Linien (gleiche Steigung, unterschiedlicher Startwert). Random Slope: Linien mit individuellem Steigungswinkel pro Cluster (unterschiedliche Genesungsgeschwindigkeit pro Patient)"
    ],
    "explanation_en": "Correct! Random slopes allow each subject to respond differently over time. Lines are no longer parallel, but fan out or cross.",
    "explanation_es": "¡Correcto! Las pendientes aleatorias permiten que cada paciente responda a distinto ritmo. Las trayectorias dejan de ser paralelas.",
    "explanation_de": "Richtig! Bei Random Slopes reagiert jedes Individuum unterschiedlich auf die Zeit. Die Linien verlaufen nicht mehr parallel, sondern fächern auf."
  },
  "l15_ex2": {
    "category_en": "Practice",
    "category_es": "Práctica",
    "category_de": "Praxis",
    "title_en": "Exercise 2: Correlation Between Intercept and Slope",
    "title_es": "Ejercicio 2: Correlación entre Intercepto y Pendiente",
    "title_de": "Übung 2: Korrelation zwischen Intercept und Slope",
    "question_en": "In a rehabilitation clinical trial, your mixed model estimates a correlation of ρ = -0.65 between Random Intercept (u_0j) and Random Slope (u_1j). What does this mean clinically?",
    "question_es": "En un ensayo de rehabilitación, tu modelo mixto estima una correlación de ρ = -0,65 entre el intercepto aleatorio (u_0j) y la pendiente aleatoria (u_1j). ¿Qué significa clínicamente?",
    "question_de": "In einer Reha-Studie schätzt dein Modell eine Korrelation von ρ = -0,65 zwischen Random Intercept (u_0j) und Random Slope (u_1j). Was bedeutet dies klinisch?",
    "options_en": [
      "Patients starting in a more severe baseline condition (lower initial level u_0) exhibit a faster rate of recovery per month (higher positive slope u_1): a classic catch-up effect!",
      "The therapy has adverse effects for patients starting with low baseline values",
      "The estimate is mathematically invalid because random effect covariances must be positive",
      "The model suffers from severe overspecification and should be reduced to standard ANOVA"
    ],
    "options_es": [
      "Los pacientes que parten de un estado más grave (menor nivel basal u_0) muestran un ritmo de recuperación más rápido (pendiente positiva u_1 más alta): ¡efecto recuperación clásico!",
      "La terapia resulta contraproducente para pacientes con nivel basal bajo",
      "La estimación es matemáticamente inválida porque las covarianzas de efectos aleatorios deben ser positivas",
      "El modelo sufre sobreajuste severo y debe simplificarse a un ANOVA clásico"
    ],
    "options_de": [
      "Patienten mit schlechterem Ausgangszustand (niedriges Startniveau u_0) weisen ein schnelleres monatliches Genesungstempo auf (hohe positive Steigung u_1): ein klassischer Aufholeffekt!",
      "Die Therapie wirkt kontraproduktiv bei Patienten mit niedrigem Startwert",
      "Die Schätzung ist ungültig, da Kovarianzen zwischen Zufallseffekten stets positiv sein müssen",
      "Das Modell leidet unter Überspezifikation und muss zu einer ANOVA vereinfacht werden"
    ],
    "explanation_en": "Spot-on! Negative correlation between intercept and slope is a well-known clinical phenomenon: patients with the greatest impairment have the most room for substantial improvement.",
    "explanation_es": "¡Totalmente acertado! Correlación negativa entre intercepto y pendiente refleja que pacientes con mayor gravedad tienen mayor margen de mejora.",
    "explanation_de": "Volltreffer! Eine negative Korrelation zwischen Startwert und Zuwachs ist klinisch typisch: Patienten mit schwerem Ausgangszustand haben das größte Verbesserungspotenzial."
  },
  "l15_ex3": {
    "category_en": "Dilemma",
    "category_es": "Dilema",
    "category_de": "Dilemma",
    "title_en": "Exercise 3: Mixed Models vs Repeated Measures ANOVA with Dropouts",
    "title_es": "Ejercicio 3: Modelos Mixtos frente a ANOVA de Medidas Repetidas ante Abandonos",
    "title_de": "Übung 3: Mixed Models vs. Repeated Measures ANOVA bei Dropouts",
    "question_en": "In a 5-year longitudinal study, 30% of patients miss at least one follow-up visit. Why is a Linear Mixed Model far superior to classical Repeated Measures ANOVA?",
    "question_es": "En un estudio longitudinal de 5 años, el 30% de pacientes falta al menos a una visita de seguimiento. ¿Por qué es un Modelo Mixto muy superior al ANOVA de medidas repetidas clásico?",
    "question_de": "In einer 5-jährigen Längsschnittstudie verpassen 30% der Patienten mindestens einen Untersuchungstermin. Warum ist ein lineares gemischtes Modell (LMM) einer klassischen Repeated Measures ANOVA überlegen?",
    "options_en": [
      "Because Mixed Models assume missing data is always Missing Completely at Random (MCAR)",
      "Because Mixed Models always impute missing values using the population median",
      "Because Repeated Measures ANOVA cannot compute confidence intervals",
      "Repeated Measures ANOVA discards a subject completely if a single visit is missing (listwise deletion); a Mixed Model utilizes all available visits under Missing at Random (MAR)"
    ],
    "options_es": [
      "Porque los modelos mixtos asumen que los datos faltan completamente al azar (MCAR)",
      "Porque los modelos mixtos siempre imputan datos faltantes con la mediana poblacional",
      "Porque el ANOVA de medidas repetidas no puede calcular intervalos de confianza",
      "El ANOVA de medidas repetidas descarta por completo al paciente si falta una sola visita (eliminación por lista); el Modelo Mixto aprovecha todas las visitas disponibles bajo Datos Faltantes al Azar (MAR)"
    ],
    "options_de": [
      "Weil gemischte Modelle voraussetzen, dass fehlende Werte stets Missing Completely at Random (MCAR) sind",
      "Weil gemischte Modelle fehlende Werte immer durch den Populationsmedian ersetzen",
      "Weil Repeated Measures ANOVA keine Konfidenzintervalle berechnen kann",
      "Repeated Measures ANOVA verwirft einen Patienten komplett, sobald ein einziger Messtermin fehlt (Listwise Deletion); ein gemischtes Modell nutzt alle verfügbaren Zeitpunkte optimal unter Missing at Random (MAR)"
    ],
    "explanation_en": "Crucial advantage! RM-ANOVA discards entire subjects upon a single missing visit, destroying statistical power and introducing attrition bias. Mixed models handle unbalanced longitudinal panels seamlessly.",
    "explanation_es": "¡Ventaja decisiva! RM-ANOVA descarta pacientes enteros por una sola visita perdida. Los modelos mixtos aprovechan todos los datos observados bajo el supuesto MAR.",
    "explanation_de": "Kardinaler Vorteil gemischter Modelle! RM-ANOVA wirft Patienten mit einer einzigen Fehlmessung komplett weg. Mixed Models nutzen jeden vorhandenen Datenpunkt unter MAR optimal."
  },
  "l16_ex1": {
    "category_en": "Practice",
    "category_es": "Práctica",
    "category_de": "Praxis",
    "title_en": "Exercise 1: Modeling Clustered Count Data",
    "title_es": "Ejercicio 1: Modelado de Datos de Conteo Agrupados",
    "title_de": "Übung 1: Modellierung geclusterter Zähldaten",
    "question_en": "You count the monthly number of epileptic seizures (discrete count data: 0, 1, 2, 5...) in 80 patients tracked over 6 months. Which statistical model is theoretically and practically best suited?",
    "question_es": "Cuentas el número mensual de crisis epilépticas (datos de conteo discretos: 0, 1, 2, 5...) en 80 pacientes seguidos durante 6 meses. ¿Qué modelo estadístico es el más adecuado?",
    "question_de": "Du erfasst die monatliche Anzahl epileptischer Anfälle (diskrete Zähldaten: 0, 1, 2, 5...) bei 80 Patienten über 6 Monate. Welches Modell ist theoretisch und praktisch am besten geeignet?",
    "options_en": [
      "Standard linear OLS regression with robust Newey-West standard errors",
      "Logistic regression where seizures are dichotomized into 0 vs ≥ 1",
      "A Poisson or Negative Binomial Generalized Linear Mixed Model (GLMM) with log link and random intercepts per patient",
      "Classical repeated measures ANOVA after square-root transforming the counts"
    ],
    "options_es": [
      "Regresión lineal MCO estándar con errores robustos de Newey-West",
      "Regresión logística dicotomizando las crisis en 0 frente a ≥ 1",
      "Un Modelo Mixto Lineal Generalizado (GLMM) Poisson o Binomial Negativo con enlace logarítmico e interceptos aleatorios por paciente",
      "ANOVA clásico de medidas repetidas tras transformar las cuentas con raíz cuadrada"
    ],
    "options_de": [
      "Gewöhnliche lineare OLS-Regression mit robusten Newey-West-Standardfehlern",
      "Eine logistische Regression, bei der Anfälle in 0 vs. ≥ 1 dichotomisiert werden",
      "Ein Poisson- oder Negativ-Binomial-GLMM (Generalized Linear Mixed Model) mit Log-Link und Random Intercepts pro Patient",
      "Eine klassische ANOVA mit wiederholten Messungen nach Quadratwurzeltransformation"
    ],
    "explanation_en": "Excellent! Count data is non-negative and integer-valued. A Poisson/Negative Binomial GLMM enforces positive predictions while modeling patient-level repeated measures.",
    "explanation_es": "¡Excelente! Los conteos son enteros no negativos. Un GLMM Poisson/Binomial Negativo garantiza valores positivos y modela la dependencia intra-paciente.",
    "explanation_de": "Ausgezeichnet! Zähldaten sind ganzzahlig und nicht-negativ. Ein Poisson/Negativ-Binomial-GLMM garantiert positive Vorhersagen und modelliert Patientencluster."
  },
  "l16_ex2": {
    "category_en": "Calculation",
    "category_es": "Cálculo",
    "category_de": "Berechnung",
    "title_en": "Exercise 2: Interpreting GLMM Coefficients",
    "title_es": "Ejercicio 2: Interpretación de Coeficientes en GLMM",
    "title_de": "Übung 2: Interpretation von GLMM-Koeffizienten",
    "question_en": "In a logistic GLMM for hospital-acquired infections, the fixed effect coefficient for a new hygiene protocol is β = -0.85. How do you interpret this coefficient?",
    "question_es": "En un GLMM logístico sobre infecciones hospitalarias, el coeficiente de efecto fijo de un nuevo protocolo de higiene es β = -0,85. ¿Cómo se interpreta este coeficiente?",
    "question_de": "In einem logistischen GLMM für Krankenhausinfektionen beträgt der Fixed-Effect-Koeffizient für ein neues Hygieneprotokoll β = -0,85. Wie interpretiert man diesen Effekt?",
    "options_en": [
      "The absolute risk of infection drops by exactly 85 percentage points for every admitted patient",
      "Odds Ratio = e^-0.85 ≈ 0.43: protocol implementation reduces the odds of infection by approximately 57% within the same hospital (cluster-specific conditional effect)",
      "The probability of infection is divided by a factor of -0.85 regardless of hospital level",
      "The correlation between hygiene protocol and complications equals r = -0.85"
    ],
    "options_es": [
      "El riesgo absoluto de infección se reduce exactamente en 85 puntos porcentuales para cada paciente",
      "Odds Ratio = e^-0,85 ≈ 0,43: el protocolo reduce las odds de infección en torno al 57% dentro de un mismo hospital (efecto condicional por cluster)",
      "La probabilidad de infección se divide por un factor de -0,85 independientemente del hospital",
      "La correlación entre el protocolo y las complicaciones es igual a r = -0,85"
    ],
    "options_de": [
      "Das absolute Infektionsrisiko sinkt für jeden aufgenommenen Patienten um exakt 85 Prozentpunkte",
      "Odds Ratio = e^-0,85 ≈ 0,43: Die Einführung des Protokolls senkt die Infektions-Odds innerhalb desselben Krankenhauses um ca. 57% (konditionaler clusterspezifischer Effekt)",
      "Die Infektionswahrscheinlichkeit wird unabhängig vom Krankenhaus durch den Faktor -0,85 geteilt",
      "Die Korrelation zwischen Hygieneprotokoll und Komplikationen beträgt r = -0,85"
    ],
    "explanation_en": "Correct! Exponentiating β yields OR = e^-0.85 ≈ 0.427, representing a 1 - 0.427 = 57.3% reduction in infection odds within any given hospital.",
    "explanation_es": "¡Correcto! Exponenciando β: OR = e^-0,85 ≈ 0,427, lo que supone una reducción del 1 - 0,427 = 57,3% en las odds de infección dentro de un hospital.",
    "explanation_de": "Richtig! Über die e-Funktion ergibt sich e^-0,85 ≈ 0,427, was einer 57%igen Reduktion der Infektions-Odds innerhalb derselben Klinik entspricht."
  },
  "l16_ex3": {
    "category_en": "Pitfall",
    "category_es": "Trampa",
    "category_de": "Fallstrick",
    "title_en": "Exercise 3: Overdispersion in Poisson GLMM",
    "title_es": "Ejercicio 3: Sobredispersión en GLMM Poisson",
    "title_de": "Übung 3: Überdispersion im Poisson-GLMM",
    "question_en": "In a Poisson GLMM, residual deviance is more than double the residual degrees of freedom (Ratio = 2.4). What does this diagnose and how do you resolve it?",
    "question_es": "En un GLMM Poisson observas que la devianza residual duplica los grados de libertad (ratio = 2,4). ¿Qué diagnostica esto y cuál es la solución?",
    "question_de": "In einem Poisson-GLMM ist die Residual-Devianz mehr als doppelt so groß wie die Freiheitsgrade (Verhältnis = 2,4). Was bedeutet das und was ist die Lösung?",
    "options_en": [
      "Overdispersion: data variance exceeds the mean (violating the Poisson assumption Var = Mean). Transition to a Negative Binomial model or add an observation-level random effect",
      "Multicollinearity between random intercepts and fixed time factors",
      "The model fails to converge because the log link must be replaced by a probit link",
      "Underdispersion: the sample is excessively homogeneous; drop subjects with zero counts"
    ],
    "options_es": [
      "Sobredispersión: la varianza de los datos supera a la media (violando el supuesto Poisson Var = Media). Cambia a Binomial Negativa o añade un efecto aleatorio a nivel de observación",
      "Multicolinealidad entre los interceptos aleatorios y los factores temporales fijos",
      "El modelo no converge porque el enlace logarítmico debe sustituirse por probit",
      "Subdispersión: la muestra es demasiado homogénea; elimina los pacientes con cero crisis"
    ],
    "options_de": [
      "Überdispersion: Die Datenvarianz übersteigt den Mittelwert (Verletzung der Poisson-Annahme Var = Mean). Wechsle zu einem Negativ-Binomial-Modell oder ergänze einen Random Effect auf Beobachtungsebene",
      "Multikollinearität zwischen den Random Intercepts und festen Zeitfaktoren",
      "Das Modell konvergiert nicht, weil der Log-Link durch einen Probit-Link ersetzt werden muss",
      "Unterdispersion: Die Stichprobe ist zu homogen; entferne Patienten mit null Anfällen"
    ],
    "explanation_en": "Spot-on! Poisson forces Mean = Variance. When variance exceeds the mean (overdispersion), standard errors are underestimated; Negative Binomial GLMM includes a dispersion parameter to account for extra variance.",
    "explanation_es": "¡Totalmente acertado! Poisson asume Media = Varianza. Cuando la varianza es superior (sobredispersión), la Binomial Negativa modela la variabilidad extra.",
    "explanation_de": "Volltreffer! Poisson setzt Mean = Var voraus. Ist die Varianz größer (Überdispersion), fängt ein Negativ-Binomial-Modell die zusätzliche Streuung zuverlässig auf."
  },
  "l17_ex1": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 1: How GAMs Model Non-Linearity",
    "title_es": "Ejercicio 1: Cómo Modela la No Linealidad un GAM",
    "title_de": "Übung 1: Wie GAMs Nichtlinearität modellieren",
    "question_en": "How does a Generalized Additive Model (GAM) represent non-linear relationships between a predictor X and outcome Y?",
    "question_es": "¿Cómo representa un Modelo Aditivo Generalizado (GAM) relaciones no lineales entre un predictor X y la respuesta Y?",
    "question_de": "Wie modelliert ein Generalized Additive Model (GAM) eine nichtlineare Beziehung zwischen Prädiktor X und Zielgröße Y?",
    "options_en": [
      "By segmenting the dataset into discrete intervals and training a decision tree within each bin",
      "By fitting an unpenalized 10th-degree polynomial to the raw observations",
      "Via a linear combination of flexible basis functions (such as cubic splines or B-splines) joined at knots, combined with a wiggliness penalty (smoothing penalty)",
      "By categorizing all continuous regressors into discrete dummy variables"
    ],
    "options_es": [
      "Dividiendo el conjunto de datos en intervalos y entrenando un árbol de decisión por tramo",
      "Ajustando un polinomio de grado 10 sin regularización sobre los datos brutos",
      "Mediante una combinación lineal de funciones base flexibles (como splines cúbicos o B-splines) con nodos, combinada con una penalización de oscilación (smoothing penalty)",
      "Transformando todos los predictores continuos en variables ficticias categóricas"
    ],
    "options_de": [
      "Durch Aufteilen des Datensatzes in diskrete Intervalle und Trainieren eines Entscheidungsbaums pro Intervall",
      "Durch Anpassen eines unpenalisierten Polynoms 10. Grades an die Rohdaten",
      "Über eine Linearkombination flexibler Basisfunktionen (wie kubische Splines oder B-Splines) mit Knotenpunkten, kombiniert mit einer Strafe auf übermäßige Krümmung (Smoothing Penalty)",
      "Durch Umwandeln aller stetigen Prädiktoren in kategoriale Dummy-Variablen"
    ],
    "explanation_en": "Exact! GAMs compose smooth functional trajectories from spline bases while an integrated penalty prevents erratic overfitting.",
    "explanation_es": "¡Exacto! Los GAM construyen curvas suaves a partir de funciones base de splines, penalizando la oscilación para evitar sobreajuste.",
    "explanation_de": "Exakt! GAMs setzen glatte Kurven aus mathematischen Basisfunktionen zusammen, während ein Glättungsparameter übermäßiges Oszillieren bestraft."
  },
  "l17_ex2": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 2: Effective Degrees of Freedom in GAMs",
    "title_es": "Ejercicio 2: Grados de Libertad Efectivos en GAM",
    "title_de": "Übung 2: Effektive Freiheitsgrade im GAM",
    "question_en": "In a GAM output, smooth term s(Age) has an estimated effective degrees of freedom of edf = 1.02. What does this mean concretely?",
    "question_es": "En la salida de un GAM, el término suave s(Edad) tiene unos grados de libertad efectivos estimados de edf = 1,02. ¿Qué significa esto?",
    "question_de": "Im GAM-Output weist der Glättungsterm s(Alter) geschätzte effektive Freiheitsgrade von edf = 1,02 auf. Was bedeutet dies konkret?",
    "options_en": [
      "The smoothing parameter λ was driven to zero by REML optimization",
      "The relationship is strongly oscillatory with at least one local peak and one valley",
      "The model cannot estimate the age effect due to sample starvation",
      "The relationship between Age and outcome is virtually straight (linear), because a straight line has by definition edf = 1"
    ],
    "options_es": [
      "El parámetro de suavizado λ se anuló por optimización REML",
      "La relación es fuertemente oscilatoria con al menos un pico y un valle",
      "El modelo no puede estimar el efecto de la edad por falta de datos",
      "La relación entre Edad y respuesta es prácticamente recta (lineal), ya que una recta tiene por definición edf = 1"
    ],
    "options_de": [
      "Der Glättungsparameter λ wurde durch REML-Optimierung auf null gesetzt",
      "Die Beziehung oszilliert stark mit mindestens einem lokalen Maximum und Minimum",
      "Das Modell kann den Alterseffekt wegen Datenmangels nicht schätzen",
      "Der Zusammenhang zwischen Alter und Zielgröße ist nahezu geradlinig (linear), da eine Gerade per Definition edf = 1 besitzt"
    ],
    "explanation_en": "Sharp insight! edf = 1 indicates a strictly linear function. Higher edf values (e.g., 4 or 8) indicate increasing non-linear waviness. Here, a straight line suffices!",
    "explanation_es": "¡Aguda apreciación! edf = 1 representa una relación estrictamente lineal. Cuanto mayor sea el edf, más ondulada es la curva.",
    "explanation_de": "Haarscharfer Einblick! edf = 1 steht für einen linearen Zusammenhang. Je höher edf ist, desto welliger ist die Funktion. Bei edf ≈ 1 reicht eine Gerade!"
  },
  "l17_ex3": {
    "category_en": "Practice",
    "category_es": "Práctica",
    "category_de": "Praxis",
    "title_en": "Exercise 3: Penalty Parameter λ = 0 in GAMs",
    "title_es": "Ejercicio 3: Parámetro de Penalización λ = 0 en GAM",
    "title_de": "Übung 3: Strafparameter λ = 0 im GAM",
    "question_en": "What happens to the fitted curve in a GAM if you set the smoothing penalty parameter to λ = 0?",
    "question_es": "¿Qué le ocurre a la curva ajustada en un GAM si fijas el parámetro de penalización de suavizado en λ = 0?",
    "question_de": "Was passiert mit der geschätzten Kurve in einem GAM, wenn man den Glättungs-Strafparameter auf λ = 0 setzt?",
    "options_en": [
      "The curve collapses to a horizontal line at grand mean ȳ",
      "The effective degrees of freedom shrink to exactly zero",
      "The curve overfits maximally: it wiggles wildly through every single observed data point (pure interpolation of random noise)",
      "The algorithm crashes because the Hessian matrix is singular"
    ],
    "options_es": [
      "La curva colapsa a una recta horizontal al nivel de la media ȳ",
      "Los grados de libertad efectivos se reducen exactamente a cero",
      "La curva sobreajusta al máximo: serpentea a través de cada punto observado (pura interpolación de ruido)",
      "El algoritmo falla porque la matriz hessiana se vuelve singular"
    ],
    "options_de": [
      "Die Kurve kollabiert zu einer horizontalen Linie auf Höhe des Mittelwerts ȳ",
      "Die effektiven Freiheitsgrade schrumpfen exakt auf null",
      "Die Kurve überfittet maximal: Sie schlängelt sich durch jeden einzelnen Datenpunkt (reine Interpolation von Rauschen)",
      "Das Modell bricht ab, weil die Hesse-Matrix singulär wird"
    ],
    "explanation_en": "Correct! Without a smoothing penalty (λ = 0), spline flexibility is unconstrained, resulting in severe overfitting and noisy interpolation.",
    "explanation_es": "¡Correcto! Sin penalización (λ = 0), los splines tienen libertad absoluta para sobreajustar e interpolar cada residuo.",
    "explanation_de": "Richtig! Ohne Strafe (λ = 0) überfittet das Modell extrem und interpoliert jedes einzelne Rauschsignal im Datensatz."
  },
  "l18_ex1": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 1: Right-Censoring in Survival Analysis",
    "title_es": "Ejercicio 1: Censura por la Derecha en Análisis de Supervivencia",
    "title_de": "Übung 1: Rechtszensierung in der Survival-Analyse",
    "question_en": "In an oncology trial, follow-up ends at 5 years. Several patients remain cancer-free and alive at study closure. Why must you NOT simply remove them from the analysis?",
    "question_es": "En un ensayo oncológico el seguimiento concluye a los 5 años. Varios pacientes continúan vivos y libres de enfermedad. ¿Por qué NO debes simplemente eliminarlos del análisis?",
    "question_de": "In einer onkologischen Studie endet die Nachbeobachtung nach 5 Jahren. Einige Patienten leben zu diesem Zeitpunkt noch krebsfrei. Warum darf man sie NICHT aus der Analyse ausschließen?",
    "options_en": [
      "Because the Kaplan-Meier estimator requires all subjects to ultimately experience the event",
      "Because they proved survival of at least 5 years; their right-censored information is essential to prevent severe underestimation of long-term survival probability",
      "Because censored patients must always receive an assigned Hazard Ratio of 1.0",
      "Because follow-up time is undefined for patients without death records"
    ],
    "options_es": [
      "Porque el estimador de Kaplan-Meier exige que todos los sujetos sufran el evento",
      "Porque han demostrado sobrevivir al menos 5 años; su información (censura derecha) es crucial para no subestimar drásticamente la supervivencia a largo plazo",
      "Porque a los pacientes censurados se les debe asignar siempre un Hazard Ratio de 1,0",
      "Porque el tiempo de seguimiento no está definido para pacientes sin fecha de defunción"
    ],
    "options_de": [
      "Weil der Kaplan-Meier-Schätzer verlangt, dass alle Probanden das Ereignis erleiden",
      "Weil sie nachgewiesen haben, mindestens 5 Jahre zu überleben; ihre Information (Rechtszensierung) ist unverzichtbar, um die Langzeitüberlebensrate nicht drastisch zu unterschätzen",
      "Weil zensierten Patienten stets eine Hazard Ratio von exakt 1,0 zugewiesen werden muss",
      "Weil die Nachbeobachtungszeit für Patienten ohne Todesdatum mathematisch nicht definiert ist"
    ],
    "explanation_en": "Spot-on! Right-censored subjects contribute vital person-time evidence of disease-free survival. Removing them induces fatal survivorship bias.",
    "explanation_es": "¡Totalmente acertado! Los pacientes censurados aportan tiempo de seguimiento esencial; omitirlos subestima drásticamente la supervivencia.",
    "explanation_de": "Volltreffer! Rechtszensierte Patienten liefern essenzielle Überlebenszeit; ihr Weglassen verzerrt die Überlebenswahrscheinlichkeit dramatisch nach unten."
  },
  "l18_ex2": {
    "category_en": "Calculation",
    "category_es": "Cálculo",
    "category_de": "Berechnung",
    "title_en": "Exercise 2: Interpreting Hazard Ratios",
    "title_es": "Ejercicio 2: Interpretación de Razones de Riesgo (Hazard Ratio)",
    "title_de": "Übung 2: Interpretation der Hazard Ratio",
    "question_en": "In a heart failure clinical trial, the Cox model for Drug X reports a Hazard Ratio of HR = 0.60 (95% CI: [0.45, 0.80], p = 0.001). What do you conclude?",
    "question_es": "En un ensayo de insuficiencia cardíaca, el modelo de Cox para el Fármaco X reporta un Hazard Ratio de HR = 0,60 (IC 95%: [0,45; 0,80], p = 0,001). ¿Qué concluyes?",
    "question_de": "In einer klinischen Studie zu Herzinsuffizienz berichtet das Cox-Modell für Medikament X eine Hazard Ratio von HR = 0,60 (95%-KI: [0,45; 0,80], p = 0,001). Was folgerst du?",
    "options_en": [
      "Exactly 60% of treated patients will remain alive at trial conclusion",
      "Median patient survival doubles by 60 percentage points under therapy",
      "Patients receiving Drug X experience a 40% lower instantaneous risk (hazard rate) of death at any given time point compared to the control group",
      "Mortality drops by 60% in the first year but stabilizes at zero thereafter"
    ],
    "options_es": [
      "Exactamente el 60% de los pacientes tratados seguirá vivo al final del ensayo",
      "La mediana de supervivencia se duplica en 60 puntos porcentuales",
      "Los pacientes con el Fármaco X tienen en cualquier instante un riesgo instantáneo (hazard rate) de fallecer un 40% menor frente al grupo control",
      "El riesgo de muerte cae un 60% el primer año pero luego se estabiliza a cero"
    ],
    "options_de": [
      "Exakt 60% der behandelten Patienten sind nach Studienende noch am Leben",
      "Die mediane Überlebenszeit verdoppelt sich um 60 Prozentpunkte unter der Therapie",
      "Patienten mit Medikament X haben zu jedem Zeitpunkt ein um 40% geringeres momentanes Sterberisiko (Hazard Rate) im Vergleich zur Kontrollgruppe",
      "Das Sterberisiko sinkt im ersten Jahr um 60%, stabilisiert sich danach jedoch bei null"
    ],
    "explanation_en": "Correct! HR = 0.60 indicates the instantaneous hazard is 60% of control, reflecting a 1 - 0.60 = 40% hazard reduction.",
    "explanation_es": "¡Correcto! HR = 0,60 significa que el riesgo instantáneo es el 60% del control, logrando una reducción del 40%.",
    "explanation_de": "Richtig! HR = 0,60 bedeutet, dass das momentane Risiko 60% der Kontrollgruppe beträgt (eine Risikoreduktion von 40%)."
  },
  "l18_ex3": {
    "category_en": "Pitfall",
    "category_es": "Trampa",
    "category_de": "Fallstrick",
    "title_en": "Exercise 3: Crossing Survival Curves in Cox Models",
    "title_es": "Ejercicio 3: Curvas de Supervivencia Cruzadas en Modelos de Cox",
    "title_de": "Übung 3: Kreuzende Überlebenskurven im Cox-Modell",
    "question_en": "In a Cox regression, survival curves for two treatments cross at 1.5 years (Treatment A is initially superior, but after 1.5 years Treatment B dominates). What does this imply?",
    "question_es": "En una regresión de Cox, las curvas de supervivencia de dos tratamientos se cruzan al cabo de 1,5 años (Tratamiento A es mejor al inicio, pero tras 1,5 años B es superior). ¿Qué implica esto?",
    "question_de": "In einer Cox-Regression kreuzen sich die Überlebenskurven zweier Behandlungen nach 1,5 Jahren (Behandlung A ist anfangs überlegen, nach 1,5 Jahren B). Was bedeutet dies für das Modell?",
    "options_en": [
      "There is no issue: the hazard ratio automatically averages both periods into a valid overall effect",
      "The Proportional Hazards assumption is fundamentally violated: the hazard ratio is not constant over time. Standard Cox regression is invalid, requiring time-dependent covariates or stratified modeling",
      "The model must be replaced by standard linear OLS regression on total survival duration",
      "The log-rank p-value can simply be multiplied by 2"
    ],
    "options_es": [
      "No hay problema: el hazard ratio promedia automáticamente ambos periodos en un efecto global válido",
      "El supuesto de Riesgos Proporcionales (Proportional Hazards) se ha violado: la razón de riesgos no es constante en el tiempo. El modelo de Cox estándar queda invalidado, requiriendo covariables dependientes del tiempo o estratificación",
      "El modelo debe sustituirse por regresión lineal MCO sobre el tiempo total de supervivencia",
      "El valor p de la prueba de log-rank puede multiplicarse directamente por 2"
    ],
    "options_de": [
      "Es gibt kein Problem: Die Hazard Ratio mittelt beide Phasen automatisch zu einem gültigen Gesamteffekt",
      "Die Proportional-Hazards-Annahme ist fundamental verletzt: Die Hazard Ratio ist nicht zeitlich konstant. Ein Standard-Cox-Modell ist unzulässig und erfordert zeitabhängige Kovariaten oder eine Stratifizierung",
      "Das Modell muss durch eine lineare OLS-Regression auf die Gesamtüberlebenszeit ersetzt werden",
      "Der p-Wert des Log-Rank-Tests kann einfach mit 2 multipliziert werden"
    ],
    "explanation_en": "Crucial diagnostic! Crossing survival curves violate the core proportional hazards assumption (HR = constant). Standard Cox summaries are misleading.",
    "explanation_es": "¡Diagnóstico crucial! Curvas cruzadas violan el supuesto de riesgos proporcionales (HR constante). Se requiere modelar efectos dependientes del tiempo.",
    "explanation_de": "Wichtige Diagnose! Kreuzende Kurven verletzen die Proportional-Hazards-Annahme fundamental. Standard-Cox-Modelle führen hier zu falschen Schlüssen."
  },
  "l19_ex1": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 1: Core Formulation of Bayes' Theorem",
    "title_es": "Ejercicio 1: Formulación Central del Teorema de Bayes",
    "title_de": "Übung 1: Die Kernformel des Bayes-Theorems",
    "question_en": "What is the core conceptual and mathematical equation of Bayesian inference?",
    "question_es": "¿Cuál es la ecuación conceptual y matemática central de la inferencia bayesiana?",
    "question_de": "Was ist die konzeptionelle und mathematische Kernformel der bayesianischen Inferenz?",
    "options_en": [
      "P(H0 | Data) = α × Degree of Freedom / p-value",
      "Likelihood = Prior Odds × Posterior Variance",
      "Posterior Knowledge ∝ Data Likelihood × Prior Belief (P(θ | Data) ∝ P(Data | θ) × P(θ))",
      "Posterior Distribution = Conditional Expectation under Null Hypothesis H0"
    ],
    "options_es": [
      "P(H0 | Datos) = α × Grados de Libertad / valor p",
      "Verosimilitud = Odds Previas × Varianza Posterior",
      "Conocimiento Posterior ∝ Verosimilitud de los Datos × Creencia Previa (P(θ | Datos) ∝ P(Datos | θ) × P(θ))",
      "Distribución Posterior = Esperanza Condicional bajo Hipótesis Nula H0"
    ],
    "options_de": [
      "P(H0 | Daten) = α × Freiheitsgrade / p-Wert",
      "Likelihood = Prior Odds × Posterior-Varianz",
      "Posterior-Wissen ∝ Likelihood der Daten × Prior-Überzeugung (P(θ | Daten) ∝ P(Daten | θ) × P(θ))",
      "Posterior-Verteilung = Bedingte Erwartung unter der Nullhypothese H0"
    ],
    "explanation_en": "Cornerstone of Bayesian reasoning! You begin with prior belief, confront it with empirical data via likelihood, and update your state of knowledge (posterior).",
    "explanation_es": "¡Piedra angular bayesiana! Partes de conocimiento previo (prior), lo confrontas con la evidencia (likelihood), y actualizas tu visión del mundo (posterior).",
    "explanation_de": "Grundpfeiler bayesianischer Inferenz! Man beginnt mit Vorwissen (Prior), konfrontiert dieses mit empirischer Evidenz (Likelihood) und aktualisiert sein Weltbild (Posterior)."
  },
  "l19_ex2": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 2: Bernstein-von Mises Theorem",
    "title_es": "Ejercicio 2: El Teorema de Bernstein-von Mises",
    "title_de": "Übung 2: Bernstein-von-Mises-Theorem",
    "question_en": "What happens to the influence of your chosen prior distribution on the posterior distribution as sample size N expands to 100,000 observations?",
    "question_es": "¿Qué ocurre con la influencia de la distribución previa (prior) en la posterior a medida que el tamaño muestral N aumenta a 100.000 observaciones?",
    "question_de": "Was geschieht mit dem Einfluss der gewählten Prior-Verteilung auf die Posterior-Verteilung, wenn der Stichprobenumfang N auf 100.000 Beobachtungen anwächst?",
    "options_en": [
      "The prior becomes infinitely dominant, overwriting empirical observations",
      "Posterior variance grows proportionally with prior information density",
      "The posterior distribution bifurcates into two independent Gaussian components",
      "The influence of the prior virtually evaporates; the Likelihood dominates the posterior completely and the estimate converges to Maximum Likelihood"
    ],
    "options_es": [
      "La previa se vuelve dominante y sobreescribe las observaciones empíricas",
      "La varianza posterior crece proporcionalmente con la densidad de la previa",
      "La distribución posterior se bifurca en dos componentes gaussianas independientes",
      "La influencia de la previa se desvanece casi por completo; la Verosimilitud domina la posterior y la estimación converge a la Máxima Verosimilitud"
    ],
    "options_de": [
      "Der Prior wird unendlich dominant und überschreibt alle empirischen Beobachtungen",
      "Die Posterior-Varianz wächst proportional zur Informationsdichte des Priors",
      "Die Posterior-Verteilung spaltet sich in zwei unabhängige Gauß-Komponenten auf",
      "Der Einfluss des Priors verflüchtigt sich nahezu vollständig; die Likelihood (die Daten) dominiert die Posterior komplett und die Schätzung konvergiert gegen Maximum Likelihood"
    ],
    "explanation_en": "Reassuring theorem (Bernstein-von Mises)! Unless a prior places strict probability zero on a parameter, sufficient empirical data overwhelms the prior.",
    "explanation_es": "¡Teorema tranquilizador de Bernstein-von Mises! Salvo que la previa asigne probabilidad cero absoluta, datos suficientes dominan siempre a la previa.",
    "explanation_de": "Beruhigender Lehrsatz (Bernstein-von-Mises-Theorem)! Sofern der Prior nicht exakt die Wahrscheinlichkeit null zuweist, überstimmen hinreichend viele Daten jeden Prior."
  },
  "l19_ex3": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 3: Credible Intervals vs Frequentist CIs",
    "title_es": "Ejercicio 3: Intervalos de Credibilidad frente a Intervalos de Confianza",
    "title_de": "Übung 3: Credible Intervals vs. frequentistische KIs",
    "question_en": "In contrast to frequentist confidence intervals: why may you state with a Bayesian 95% Credible Interval that 'there is a 95% probability the parameter lies within these boundaries'?",
    "question_es": "A diferencia del intervalo de confianza frecuentista: ¿por qué en un Intervalo de Credibilidad bayesiano al 95% sí se puede afirmar que 'hay un 95% de probabilidad de que el parámetro esté dentro'?",
    "question_de": "Im Gegensatz zu einem frequentistischen Konfidenzintervall: Warum darf man bei einem bayesianischen 95% Credible Interval sagen: 'Es besteht eine 95%-Wahrscheinlichkeit, dass der Parameter in diesen Grenzen liegt'?",
    "options_en": [
      "Because in Bayesian statistics the parameter itself is treated as a random variable with a probability distribution (posterior), conditioned on the observed data",
      "Because MCMC sampling automatically reduces all Type I errors to zero",
      "Because a Credible Interval is mathematically equal to the p-value raised to the power of the prior",
      "Because Bayesian intervals assume infinite sample size"
    ],
    "options_es": [
      "Porque en estadística bayesiana el parámetro se concibe como una variable aleatoria con distribución de probabilidad (posterior), condicionada a los datos observados",
      "Porque el muestreador MCMC reduce todos los errores Tipo I a cero",
      "Porque el intervalo de credibilidad equivale matemáticamente al valor p elevado a la previa",
      "Porque los intervalos bayesianos asumen tamaños de muestra infinitos"
    ],
    "options_de": [
      "Weil in der Bayes-Statistik der Parameter selbst als Zufallsvariable mit einer Wahrscheinlichkeitsverteilung (Posterior) conditionell auf den Daten betrachtet wird",
      "Weil der MCMC-Sampler alle Typ-I-Fehler automatisch eliminiert",
      "Weil ein Credible Interval dem p-Wert potenziert mit dem Prior entspricht",
      "Weil Bayes-Intervalle immer mit unendlicher Stichprobengröße rechnen"
    ],
    "explanation_en": "Intuitively empowering! In frequentism, the parameter is fixed and intervals are random. In Bayes, the data is fixed and the parameter is stochastic, permitting direct probability statements.",
    "explanation_es": "¡Intuitivo y directo! En frecuentismo el parámetro es fijo e intervalos aleatorios. En Bayes, los datos son fijos y el parámetro estocástico, permitiendo probabilidad directa.",
    "explanation_de": "Endlich intuitiv! Im Frequentismus ist der Parameter fix und das Intervall zufällig. Bei Bayes sind die Daten fix und der Parameter stochastisch, was direkte Wahrscheinlichkeitsaussagen erlaubt."
  },
  "l20_ex1": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 1: Why MCMC Sampling is Essential",
    "title_es": "Ejercicio 1: Por Qué el Muestreo MCMC es Indispensable",
    "title_de": "Übung 1: Warum MCMC-Sampling unverzichtbar ist",
    "question_en": "Why do modern statisticians use MCMC (Markov Chain Monte Carlo) sampling instead of computing the exact denominator of Bayes' theorem P(Data) = ∫ P(Data|θ) P(θ) dθ directly?",
    "question_es": "¿Por qué los estadísticos utilizan muestreo MCMC en lugar de calcular directamente el denominador de Bayes P(Datos) = ∫ P(Datos|θ) P(θ) dθ?",
    "question_de": "Warum nutzen moderne Statistiker MCMC-Sampling (Markov Chain Monte Carlo), anstatt den Nenner des Bayes-Theorems P(Daten) = ∫ P(Daten|θ) P(θ) dθ direkt exakt zu integrieren?",
    "options_en": [
      "Because numerical integrals always produce singular Hessian matrices",
      "Because likelihood functions are only defined across discrete Markov chains",
      "Because MCMC guarantees deterministic answers without simulation noise",
      "Because the denominator P(Data) is a high-dimensional integral over all parameters simultaneously; in high dimensions analytical integration is impossible, whereas MCMC samples the unnormalized numerator shape directly"
    ],
    "options_es": [
      "Porque las integrales numéricas siempre generan matrices hessianas singulares",
      "Porque la verosimilitud solo se define en cadenas de Markov discretas",
      "Porque MCMC arroja respuestas deterministas sin varianza muestral",
      "Porque el denominador P(Datos) es una integral de alta dimensión sobre todos los parámetros; analíticamente imposible de resolver, mientras que MCMC extrae muestras de la forma del numerador sin calcular la constante"
    ],
    "options_de": [
      "Weil numerische Integrale immer zu singulären Hesse-Matrizen führen",
      "Weil die Likelihood-Funktion nur über diskreten Markov-Ketten definiert ist",
      "Weil MCMC stets deterministische Ergebnisse ohne Simulationsunsicherheit liefert",
      "Weil der Nenner P(Daten) ein hochdimensionales Integral über alle Parameter ist; analytisch unlösbar, während MCMC Stichproben aus der Zählergestalt zieht, ohne die Normalisierungskonstante zu kennen"
    ],
    "explanation_en": "The MCMC revolution! Normalizing constant evidence P(Data) is intractable in high dimensions. MCMC circumvents it by evaluating relative posterior density ratios.",
    "explanation_es": "¡La revolución de MCMC! La constante normalizadora es intratable en altas dimensiones. MCMC la elude evaluando razones relativas del numerador.",
    "explanation_de": "Die MCMC-Revolution! Der Nenner ist in hohen Dimensionen unberechenbar. MCMC umgeht die Integrationskonstante genial über relative Dichtequotienten."
  },
  "l20_ex2": {
    "category_en": "Practice",
    "category_es": "Práctica",
    "category_de": "Praxis",
    "title_en": "Exercise 2: Gelman-Rubin R̂ Convergence Diagnostics",
    "title_es": "Ejercicio 2: Diagnóstico de Convergencia R̂ de Gelman-Rubin",
    "title_de": "Übung 2: Gelman-Rubin R̂ Konvergenzdiagnostik",
    "question_en": "In a Stan model, 4 chains are run. Gelman-Rubin convergence diagnostics show R̂ = 1.002 for all parameters. What is the conclusion?",
    "question_es": "En un modelo Stan corren 4 cadenas. El diagnóstico de convergencia de Gelman-Rubin muestra R̂ = 1,002 para todos los parámetros. ¿Cuál es la conclusión?",
    "question_de": "In einem Stan-Modell laufen 4 Ketten. Die Gelman-Rubin-Konvergenzdiagnostik zeigt R̂ = 1,002 für alle Parameter. Was ist das Fazit?",
    "options_en": [
      "The four chains are exceptionally well mixed and converged to the identical stationary posterior distribution (R̂ < 1.05 is the gold standard for convergence)",
      "Effective sample size (ESS) has collapsed to zero due to excessive autocorrelation",
      "Chains are stuck in a local minimum and fail to explore parameter space",
      "The prior distribution was too narrow and dominates the chains completely"
    ],
    "options_es": [
      "Las cuatro cadenas están magníficamente mezcladas y han convergido a la misma distribución posterior estacionaria (R̂ < 1,05 es el estándar de oro de convergencia)",
      "El tamaño muestral efectivo (ESS) ha caído a cero por autocorrelación",
      "Las cadenas están atrapadas en un mínimo local sin explorar el espacio",
      "La previa era excesivamente estrecha y domina totalmente las cadenas"
    ],
    "options_de": [
      "Die vier Ketten sind exzellent durchmischt und zur identischen stationären Posterior-Verteilung konvergiert (R̂ < 1,05 ist der Goldstandard für Konvergenz)",
      "Der effektive Stichprobenumfang (ESS) ist wegen Autokorrelation auf null kollabiert",
      "Die Ketten stecken in lokalen Minima fest und explorieren unzureichend",
      "Der Prior war zu schmal spezifiziert und dominiert die Ketten komplett"
    ],
    "explanation_en": "Correct! R̂ compares between-chain variance to within-chain variance. When R̂ ≈ 1.00, chains are synchronized and exploring the same posterior landscape.",
    "explanation_es": "¡Correcto! R̂ compara la varianza entre cadenas frente a la varianza intra-cadena. Con R̂ ≈ 1,00, las cadenas están perfectamente sincronizadas.",
    "explanation_de": "Richtig! R̂ vergleicht die Varianz zwischen Ketten mit der Varianz innerhalb der Ketten. Wenn R̂ ≈ 1,00, durchqueren alle Ketten synchron dieselbe Posterior."
  },
  "l20_ex3": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 3: Hamiltonian Monte Carlo (HMC / NUTS)",
    "title_es": "Ejercicio 3: Monte Carlo Hamiltoniano (HMC / NUTS)",
    "title_de": "Übung 3: Hamiltonian Monte Carlo (HMC / NUTS)",
    "question_en": "Why does Hamiltonian Monte Carlo (HMC / NUTS in Stan) scale dramatically better to hundreds of parameters than traditional Metropolis-Hastings algorithms?",
    "question_es": "¿Por qué el algoritmo de Monte Carlo Hamiltoniano (HMC / NUTS en Stan) escala infinitamente mejor a cientos de parámetros que Metropolis-Hastings tradicional?",
    "question_de": "Warum skaliert Hamiltonian Monte Carlo (HMC / NUTS in Stan) dramatisch besser auf hunderte Parameter als traditionelle Metropolis-Hastings-Algorithmen?",
    "options_en": [
      "Because HMC samples only discrete parameters, eliminating the need for differentiation",
      "HMC computes the exact multivariate inverse covariance matrix without evaluating gradients",
      "Because HMC zeroes out all hyperparameters via analytical Laplace approximation",
      "Metropolis-Hastings conducts a random walk and gets lost in high dimensions; HMC simulates frictionless physics of a particle rolling along the posterior gradient surface, taking large, targeted leaps through parameter space"
    ],
    "options_es": [
      "Porque HMC solo muestrea parámetros discretos, prescindiendo de derivadas",
      "HMC calcula la inversa de la matriz de covarianza sin evaluar gradientes",
      "Porque HMC anula todos los hiperparámetros mediante la aproximación analítica de Laplace",
      "Metropolis-Hastings realiza un camino aleatorio y se pierde en altas dimensiones; HMC simula la física sin fricción de una partícula sobre la superficie del gradiente posterior, dando saltos amplios y certeros"
    ],
    "options_de": [
      "Weil HMC ausschließlich diskrete Parameter sampelt und Ableitungen überflüssig macht",
      "HMC berechnet die inverse Kovarianzmatrix ohne Gradientenevaluierung",
      "Weil HMC alle Hyperparameter über analytische Laplace-Approximation eliminiert",
      "Metropolis-Hastings unternimmt einen Random Walk und verliert sich in hohen Dimensionen; HMC simuliert die reibungsfreie Physik eines Teilchens auf der Gradientenfläche und vollführt weite, zielgerichtete Sprünge"
    ],
    "explanation_en": "Brilliant physics applied to statistics! HMC uses the gradient ∇ log P(θ|Data) to impart momentum to a virtual particle, gliding seamlessly across complex geometry.",
    "explanation_es": "¡Física genial aplicada a la estadística! HMC emplea el gradiente para impulsar una partícula virtual a través de geometrías posteriores intrincadas.",
    "explanation_de": "Brillante Physik in der Statistik! HMC nutzt den Gradienten der Posterior, um ein virtuelles Teilchen mit Impuls durch komplexe Posterior-Geometrien gleiten zu lassen."
  },
  "l21_ex1": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 1: Defining a Gaussian Process (GP)",
    "title_es": "Ejercicio 1: Definición de un Proceso Gaussiano (GP)",
    "title_de": "Übung 1: Definition eines Gauß-Prozesses (GP)",
    "question_en": "What is the most intuitive and mathematically rigorous definition of a Gaussian Process (GP)?",
    "question_es": "¿Cuál es la definición más intuitiva y matemáticamente rigurosa de un Proceso Gaussiano (GP)?",
    "question_de": "Was ist die intuitivste und mathematisch präziseste Definition eines Gauß-Prozesses (GP)?",
    "options_en": [
      "A non-parametric density estimation method based on variable bin-width histograms",
      "A neural network with a single hidden layer and ReLU activation functions",
      "An autoregressive time series model that simulates only stationary Markov processes",
      "An infinite-dimensional multivariate normal distribution: instead of a mean vector and covariance matrix over numbers, a GP defines a mean function and covariance kernel over complete continuous functions"
    ],
    "options_es": [
      "Una estimación no paramétrica de densidad basada en histogramas de ancho variable",
      "Una red neuronal de una sola capa oculta y activación ReLU",
      "Un modelo autorregresivo temporal que solo simula procesos estacionarios de Markov",
      "Una distribución normal multivariante de dimensión infinita: en vez de vector de medias y matriz de covarianza sobre números, un GP define una función de media y un kernel de covarianza sobre funciones continuas completas"
    ],
    "options_de": [
      "Eine nichtparametrische Dichteschätzung basierend auf Histogrammen mit variabler Klassenbreite",
      "Ein neuronales Netz mit einer einzigen verborgenen Schicht und ReLU-Aktivierungsfunktionen",
      "Ein autoregressives Zeitreihenmodell, das ausschließlich stationäre Markov-Prozesse simuliert",
      "Eine unendlich-dimensionale multivariate Normalverteilung: Anstelle von Mittelwertvektor und Kovarianzmatrix über Zahlen definiert ein GP eine Mittelwertfunktion und einen Kovarianz-Kernel über kompletten stetigen Funktionen"
    ],
    "explanation_en": "Masterful! A GP is a distribution over functions: any finite collection of evaluated points forms a joint multivariate Gaussian distribution.",
    "explanation_es": "¡Magistral! Un GP es una distribución sobre funciones: cualquier conjunto finito de puntos evaluados sigue una distribución gaussiana multivariante conjunta.",
    "explanation_de": "Meisterhaft! Ein GP ist eine Verteilung über Funktionen: Jede endliche Auswahl von Punkten auf der Funktion folgt gemeinsam einer multivariaten Normalverteilung."
  },
  "l21_ex2": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 2: RBF Kernel Lengthscale Parameter",
    "title_es": "Ejercicio 2: Parámetro de Escala de Longitud del Kernel RBF",
    "title_de": "Übung 2: Längenskalen-Parameter des RBF-Kernels",
    "question_en": "In a Radial Basis Function (RBF) kernel k(x, x') = σ² exp(-||x - x'||² / (2ℓ²)): what happens to the estimated function when the lengthscale parameter ℓ is chosen very large?",
    "question_es": "En un kernel de Base Radial (RBF) k(x, x') = σ² exp(-||x - x'||² / (2ℓ²)): ¿qué le ocurre a la función estimada cuando el parámetro de escala de longitud ℓ es muy grande?",
    "question_de": "In einem Radial-Basis-Function-Kernel (RBF) k(x, x') = σ² exp(-||x - x'||² / (2ℓ²)): Was geschieht mit der geschätzten Funktion, wenn der Längenskalen-Parameter ℓ sehr groß gewählt wird?",
    "options_en": [
      "The curve becomes erratic and wild, interpolating all noise points with high frequency",
      "Correlation between points remains high across large distances, causing the predicted function to become stiff, ultra-smooth, and slowly undulating",
      "The covariance kernel converges to a diagonal identity matrix",
      "The conditional uncertainty ribbon collapses everywhere to zero"
    ],
    "options_es": [
      "La curva se vuelve errática y oscilante, interpolando el ruido a alta frecuencia",
      "La correlación entre puntos permanece alta a grandes distancias, haciendo que la función sea rígida, ultra suave y de ondulación muy lenta",
      "El kernel de covarianza converge a la matriz identidad diagonal",
      "La banda de incertidumbre condicional colapsa a cero en todo el espacio"
    ],
    "options_de": [
      "Die Kurve wird extrem wild und interpoliert alle Rauschpunkte mit hoher Frequenz",
      "Die Korrelation zwischen Punkten bleibt über große Distanzen hoch, wodurch die geschätzte Funktion sehr steif, extrem glatt und langsam schwingend wird",
      "Der Kovarianz-Kernel konvergiert gegen eine diagonale Identitätsmatrix",
      "Das bedingte Unsicherheitsband schrumpft überall sofort auf null"
    ],
    "explanation_en": "Exact! Lengthscale ℓ dictates how rapidly correlation decays across distance. Large ℓ = points stay strongly correlated = stiff, smooth function.",
    "explanation_es": "¡Exacto! ℓ controla la caída espacial de la correlación. Un ℓ grande mantiene correlación a gran distancia, creando funciones rígidas y suaves.",
    "explanation_de": "Exakt! Die Längenskala ℓ bestimmt, wie schnell die Korrelation mit der Distanz abfällt. Großes ℓ = weitreichende Korrelation = extrem glatte Kurve."
  },
  "l21_ex3": {
    "category_en": "Practice",
    "category_es": "Práctica",
    "category_de": "Praxis",
    "title_en": "Exercise 3: Bayesian Optimization with GPs",
    "title_es": "Ejercicio 3: Optimización Bayesiana con GPs",
    "title_de": "Übung 3: Bayesianische Optimierung mit GPs",
    "question_en": "Why are Gaussian Processes the preferred surrogate model in Bayesian Optimization for expensive experiments (e.g., drug discovery or hyperparameter tuning)?",
    "question_es": "¿Por qué son los Procesos Gaussianos el modelo sustituto predilecto en Optimización Bayesiana para experimentos costosos (fármacos, tuning de hiperparámetros)?",
    "question_de": "Warum sind Gauß-Prozesse das bevorzugte Surrogatmodell bei der bayesianischen Optimierung teurer Experimente (z.B. Wirkstoffforschung oder Hyperparameter-Tuning)?",
    "options_en": [
      "Because a GP provides not only the predicted mean at unobserved coordinates, but also closed-form posterior uncertainty σ(x), enabling principled balancing of exploitation and exploration",
      "Because GPs require no matrix inversion and scale linearly to billions of data points",
      "Because RBF kernels guarantee locating the global optimum in under 3 iterations",
      "Because GPs are completely immune to measurement noise in observations"
    ],
    "options_es": [
      "Porque el GP predice tanto la media esperada como la incertidumbre posterior analítica σ(x), permitiendo equilibrar explotación y exploración",
      "Porque los GPs no requieren inversión de matrices y escalan linealmente a miles de millones de datos",
      "Porque el kernel RBF garantiza hallar el óptimo global en menos de 3 evaluaciones",
      "Porque los GPs son inmunes al ruido de medida en las observaciones"
    ],
    "options_de": [
      "Weil ein GP an jedem unbekannten Punkt nicht nur den Erwartungswert prognostiziert, sondern auch die exakte Posterior-Unsicherheit σ(x) liefert, womit Ausbeutung (Exploitation) und Erkundung (Exploration) balanciert werden",
      "Weil GPs keine Matrixinversion erfordern und linear mit Milliarden Punkten skalieren",
      "Weil der RBF-Kernel garantiert, dass das globale Optimum in maximal 3 Schritten gefunden wird",
      "Weil GPs immun gegenüber Messrauschen sind"
    ],
    "explanation_en": "The power of uncertainty! GPs quantify what we expect alongside where we are ignorant. Acquisition functions (like Expected Improvement) guide the next best experiment.",
    "explanation_es": "¡El valor de la incertidumbre! Los GPs cuantifican qué esperar y dónde ignoramos más. Las funciones de adquisición guían el experimento óptimo.",
    "explanation_de": "Die Macht der Unsicherheit! Ein GP beziffert Prognose und Nichtwissen. Die Akquisitionsfunktion steuert das nächste Experiment optimal."
  },
  "l22_ex1": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 1: Observation vs Intervention (do-calculus)",
    "title_es": "Ejercicio 1: Observación frente a Intervención (do-cálculo)",
    "title_de": "Übung 1: Beobachtung vs. Intervention (do-Kalkül)",
    "question_en": "According to Judea Pearl's Causal Hierarchy, what is the fundamental difference between passive observation P(Y | X = x) and physical intervention P(Y | do(X = x))?",
    "question_es": "Según la Jerarquía Causal de Judea Pearl, ¿cuál es la diferencia fundamental entre la observación pasiva P(Y | X = x) y la intervención P(Y | do(X = x))?",
    "question_de": "Was ist gemäß Judea Pearls Kausalhierarchie der fundamentale Unterschied zwischen passiver Beobachtung P(Y | X = x) und aktiver Intervention P(Y | do(X = x))?",
    "options_en": [
      "P(Y | X = x) passively observes in an existing world including all confounding selection effects; P(Y | do(X = x)) simulates an active physical intervention by severing all incoming causal arrows to X via graph surgery",
      "P(Y | do(X)) can only be computed when all variables in the graph are normally distributed",
      "There is no mathematical difference; do(X) is merely didactic shorthand for multivariable OLS regression",
      "P(Y | X) conditions on instrumental variables, whereas do(X) conditions on colliders"
    ],
    "options_es": [
      "P(Y | X = x) observa pasivamente el mundo incluyendo la selección por confusión; P(Y | do(X = x)) simula una intervención activa cortando los influjos causales a X mediante cirugía de grafos",
      "P(Y | do(X)) solo se puede calcular si todas las variables del grafo son normales",
      "No existe diferencia matemática; do(X) es solo notación didáctica para regresión MCO",
      "P(Y | X) condiciona en variables instrumentales, mientras que do(X) condiciona en colisionadores"
    ],
    "options_de": [
      "P(Y | X = x) beobachtet passiv in der bestehenden Welt inklusive aller Confounder-Auswahleffekte; P(Y | do(X = x)) simuliert einen aktiven Eingriff, bei dem alle natürlichen Ursachen von X durch Graph Surgery getrennt werden",
      "P(Y | do(X)) kann nur berechnet werden, wenn alle Variablen im Graphen normalverteilt sind",
      "Es gibt keinen mathematischen Unterschied; do(X) ist nur eine didaktische Schreibweise für OLS",
      "P(Y | X) konditioniert auf Instrumentalvariablen, während do(X) auf Collider konditioniert"
    ],
    "explanation_en": "Brilliant causal insight! Observation conditions on natural selection. Intervention physically modifies the data generating mechanism via graph surgery.",
    "explanation_es": "¡Brillante visión causal! Observación condiciona en selección natural. Intervención modifica el mecanismo generador cortando causas entrantes.",
    "explanation_de": "Brillante Kausaleinsicht! Beobachtung konditioniert auf bestehende Selektion. Intervention greift aktiv in das System ein und trennt einströmende Kausalkanten ab."
  },
  "l22_ex2": {
    "category_en": "Pitfall",
    "category_es": "Trampa",
    "category_de": "Fallstrick",
    "title_en": "Exercise 2: Collider Stratification Bias (Berkson's Paradox)",
    "title_es": "Ejercicio 2: Sesgo de Colisionador (Paradoja de Berkson)",
    "title_de": "Übung 2: Collider-Bias (Berkson-Paradoxon)",
    "question_en": "In a DAG: Talent (X) → Stardom (Z) ← Luck (Y). Talent and Luck are completely uncorrelated in the general population. What happens if you condition on Stardom (e.g., analyzing only celebrities)?",
    "question_es": "En un DAG: Talento (X) → Fama (Z) ← Suerte (Y). Talento y Suerte son independientes en la población. ¿Qué ocurre si condicionas en Fama (analizando solo celebridades)?",
    "question_de": "In einem Kausalmodell beeinflussen Talent (X) und Glück (Y) die Chance auf Berühmtheit (Z). Talent und Glück sind in der Gesamtbevölkerung völlig unkorreliert. Was geschieht, wenn man auf Berühmtheit konditioniert (z.B. nur Stars analysiert)?",
    "options_en": [
      "You eliminate all remaining confounding bias between Talent and Luck according to d-separation",
      "You open a spurious non-causal path and induce a FALSE negative correlation between Talent and Luck: among stars, someone with low talent must have had extraordinary luck!",
      "The correlation between Talent and Luck remains exactly zero because Z is a collider",
      "The causal effect of Talent on Stardom doubles via the backdoor formula"
    ],
    "options_es": [
      "Eliminas todo sesgo de confusión remanente entre Talento y Suerte por d-separación",
      "Abres un camino espurio no causal e induces una FALSA correlación negativa entre Talento y Suerte: ¡entre famosos, quien tiene poco talento debe haber tenido muchísima suerte!",
      "La correlación entre Talento y Suerte permanece exactamente en cero porque Z es un colisionador",
      "El efecto causal de Talento sobre Fama se duplica por la fórmula de la puerta trasera"
    ],
    "options_de": [
      "Man eliminiert jegliches Confounding zwischen Talent und Glück gemäß dem d-Separationstheorem",
      "Man öffnet einen Scheinkorrelations-Pfad und erzeugt eine FALSCHE negative Korrelation: Unter Berühmtheiten muss jemand mit wenig Talent automatisch extremes Glück gehabt haben!",
      "Die Korrelation zwischen Talent und Glück bleibt exakt null, da Z ein Collider ist",
      "Der Kausaleffekt von Talent auf Ruhm verdoppelt sich über die Backdoor-Formel"
    ],
    "explanation_en": "Spot-on! Conditioning on a collider (common effect) creates spurious association between independent causes: Berkson's bias / collider stratification.",
    "explanation_es": "¡Totalmente acertado! Condicionar en un colisionador genera asociación espuria entre causas independientes: sesgo de Berkson.",
    "explanation_de": "Volltreffer! Konditionieren auf einen Collider (gemeinsamen Effekt) verknüpft unabhängige Ursachen künstlich: Berkson-Bias."
  },
  "l22_ex3": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 3: Kernel Mean Embeddings in RKHS",
    "title_es": "Ejercicio 3: Incrustación de Medias en Núcleos (RKHS)",
    "title_de": "Übung 3: Kernel Mean Embeddings im RKHS",
    "question_en": "Why do mathematical statisticians embed probability distributions into Reproducing Kernel Hilbert Spaces (RKHS ℋ)?",
    "question_es": "¿Por qué incrustan los estadísticos matemáticos distribuciones de probabilidad en Espacios de Hilbert con Núcleo Reproductor (RKHS ℋ)?",
    "question_de": "Warum betten moderne mathematische Statistiker Wahrscheinlichkeitsverteilungen in Reproducing Kernel Hilbert Spaces (RKHS ℋ) ein?",
    "options_en": [
      "Because causality can only be formalized on finite Euclidean vector spaces",
      "To compress data tables into discrete integers for memory storage",
      "Because RKHS embeddings forbid non-linear functional transformations",
      "It transforms complex, infinite-dimensional probability distributions into individual points in a Hilbert space where differences between distributions collapse to simple geometric distances (Maximum Mean Discrepancy - MMD)"
    ],
    "options_es": [
      "Porque la causalidad solo puede formalizarse en espacios vectoriales euclidianos finitos",
      "Para comprimir tablas de datos a números enteros discretos",
      "Porque las incrustaciones RKHS prohíben transformaciones no lineales",
      "Transforma distribuciones complejas e infinitas en puntos individuales de un espacio de Hilbert, donde las discrepancias entre distribuciones se reducen a distancias geométricas simples (MMD)"
    ],
    "options_de": [
      "Weil Kausalität nur auf endlich-dimensionalen euklidischen Räumen formalisiert werden kann",
      "Um Datentabellen zur Speichereinsparung in diskrete Ganzzahlen zu komprimieren",
      "Weil RKHS-Einbettungen nichtlineare Funktionstransformationen verbieten",
      "Es überführt komplexe, unendlich-dimensionale Wahrscheinlichkeitsverteilungen in einzelne Punkte eines Hilbertraums, wo Unterschiede zwischen Verteilungen zu einfachen geometrischen Abständen werden (Maximum Mean Discrepancy - MMD)"
    ],
    "explanation_en": "Apex mathematical insight! Kernel mean embeddings represent distributions as single vectors in ℋ. Two distributions are identical if and only if their distance in ℋ is zero (MMD = 0).",
    "explanation_es": "¡Cúspide matemática! Las incrustaciones representan distribuciones completas como puntos en ℋ. Dos distribuciones son idénticas si y solo si su distancia MMD es cero.",
    "explanation_de": "Höchste mathematische Eleganz! Verteilungen werden zu Punkten im Hilbertraum. Verteilungen sind identisch genau dann, wenn ihre Distanz MMD in ℋ null ist."
  },
  "l23_ex1": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 1: Drift and Diffusion in SDEs",
    "title_es": "Ejercicio 1: Deriva y Difusión en Ecuaciones Diferenciales Estocásticas",
    "title_de": "Übung 1: Drift und Diffusion in SDEs",
    "question_en": "In the Stochastic Differential Equation dX_t = μ(X_t) dt + σ(X_t) dB_t: what do the two terms on the right-hand side represent?",
    "question_es": "En la Ecuación Diferencial Estocástica dX_t = μ(X_t) dt + σ(X_t) dB_t: ¿qué representan los dos términos del lado derecho?",
    "question_de": "Was repräsentieren die beiden Terme auf der rechten Seite einer stochastischen Differentialgleichung dX_t = μ(X_t) dt + σ(X_t) dB_t?",
    "options_en": [
      "Both terms represent deterministic physical velocity along orthogonal coordinates",
      "μ dt is deterministic directional drift (expected velocity over time); σ dB_t is stochastic Brownian diffusion representing continuous microscopic random shocks",
      "dB_t is the ordinary calculus derivative of time",
      "μ dt is white noise and σ dB_t is deterministic potential energy"
    ],
    "options_es": [
      "Ambos términos representan velocidad física determinista en coordenadas ortogonales",
      "μ dt es la deriva determinista direccional (velocidad esperada en el tiempo); σ dB_t es la difusión browniana estocástica que modela choques aleatorios microscópicos",
      "dB_t es la derivada clásica del tiempo",
      "μ dt es ruido blanco y σ dB_t es energía potencial determinista"
    ],
    "options_de": [
      "Beide Terme repräsentieren deterministische physikalische Geschwindigkeiten entlang orthogonaler Achsen",
      "μ dt ist die deterministische Drift (die erwartete Richtung und Geschwindigkeit über die Zeit); σ dB_t ist die stochastische Brownsche Diffusion kontinuierlicher mikroskopischer Zufallsschocks",
      "dB_t ist die gewöhnliche Zeitableitung",
      "μ dt ist weißes Rauschen und σ dB_t ist deterministische potentielle Energie"
    ],
    "explanation_en": "Sublime foundation! μ dt dictates the systematic flow (drift), while σ dB_t introduces Gaussian stochastic diffusion.",
    "explanation_es": "¡Fundamento estocástico! μ dt determina el flujo sistemático (deriva), mientras σ dB_t modela la difusión browniana gaussiana.",
    "explanation_de": "Das Fundament stochastischer Prozesse! μ dt beschreibt den systematischen Fluss (Drift), σ dB_t die stochastische Brownsche Diffusion."
  },
  "l23_ex2": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 2: Quadratic Variation and Itô's Lemma",
    "title_es": "Ejercicio 2: Variación Cuadrática y Lema de Itô",
    "title_de": "Übung 2: Quadratische Variation und Itô-Lemma",
    "question_en": "Why does the stochastic chain rule (Itô's Lemma) df(X_t) = f'(X_t) dX_t + ½ f''(X_t) (dX_t)² require an extra second-derivative term unlike ordinary calculus?",
    "question_es": "¿Por qué la regla de la cadena estocástica (Lema de Itô) df(X_t) = f'(X_t) dX_t + ½ f''(X_t) (dX_t)² exige un término extra con segunda derivada a diferencia del cálculo ordinario?",
    "question_de": "Warum benötigt die stochastische Kettenregel (Itô-Lemma) df(X_t) = f'(X_t) dX_t + ½ f''(X_t) (dX_t)² im Gegensatz zur gewöhnlichen Analysis einen zusätzlichen Term zweiter Ordnung?",
    "options_en": [
      "Because Brownian motion trajectories have zero continuous variation",
      "Because non-linear functions cannot be integrated across probability spaces",
      "Because the quadratic variation of Brownian motion is non-zero: (dB_t)² = dt. Fluctuations are so erratic that second-order Taylor terms do not vanish in the limit!",
      "Because computers need second derivatives for numerical matrix stability"
    ],
    "options_es": [
      "Porque las trayectorias brownianas tienen variación continua nula",
      "Porque las funciones no lineales no pueden integrarse sobre espacios de probabilidad",
      "Porque la variación cuadrática del movimiento browniano no es nula: (dB_t)² = dt. ¡Las fluctuaciones son tan fractales que los términos de segundo orden no desaparecen en el límite!",
      "Porque los ordenadores precisan segundas derivadas para estabilidad matricial"
    ],
    "options_de": [
      "Weil Trajektorien der Brownschen Bewegung stetige Variation null besitzen",
      "Weil nichtlineare Funktionen über Wahrscheinlichkeitsräumen nicht integrierbar sind",
      "Weil die quadratische Variation der Brownschen Bewegung nicht null ist: (dB_t)² = dt. Die Fluktuationen sind so extrem fraktal, dass Terme zweiter Ordnung in der Taylor-Reihe im Grenzwert nicht verschwinden!",
      "Weil Computer zweite Ableitungen für numerische Stabilität benötigen"
    ],
    "explanation_en": "The core miracle of stochastic calculus! Brownian increments scale with √dt, so their square (dB_t)² is of order dt, surviving into the differential rule.",
    "explanation_es": "¡El milagro del cálculo estocástico! Los incrementos brownianos escalan con √dt, por lo que su cuadrado (dB_t)² es de orden dt y sobrevive en el cálculo diferencial.",
    "explanation_de": "Das Herzstück stochastischer Analysis! Brownsche Inkremente skalieren mit √dt; ihr Quadrat (dB_t)² ist daher von der Ordnung dt und bleibt im Differential erhalten."
  },
  "l23_ex3": {
    "category_en": "Dilemma",
    "category_es": "Dilema",
    "category_de": "Dilemma",
    "title_en": "Exercise 3: Itô vs Stratonovich Integration",
    "title_es": "Ejercicio 3: Integración de Itô frente a Stratonovich",
    "title_de": "Übung 3: Itô- vs. Stratonovich-Integration",
    "question_en": "What is the fundamental conceptual and mathematical difference between an Itô integral and a Stratonovich integral?",
    "question_es": "¿Cuál es la diferencia conceptual y matemática fundamental entre una integral de Itô y una integral de Stratonovich?",
    "question_de": "Was ist der fundamentale konzeptionelle und mathematische Unterschied zwischen einem Itô- und einem Stratonovich-Integral?",
    "options_en": [
      "Stratonovich operates strictly in 2 dimensions while Itô is infinite-dimensional",
      "There is no mathematical difference; both yield identical sample trajectories",
      "Itô is defined solely for stationary processes, while Stratonovich is for jump processes",
      "Stratonovich evaluates the integrand at the midpoint of interval [t, t+dt], preserving ordinary Leibniz chain rules; Itô evaluates at the left endpoint (non-anticipating), preserving the zero-drift martingale property"
    ],
    "options_es": [
      "Stratonovich solo opera en 2 dimensiones mientras Itô es de dimensión infinita",
      "No existe diferencia matemática; ambas producen trayectorias idénticas",
      "Itô solo se define en procesos estacionarios, mientras Stratonovich es para saltos",
      "Stratonovich evalúa el integrando en el punto medio del intervalo [t, t+dt], conservando la regla de la cadena clásica; Itô evalúa en el extremo izquierdo (no anticipativo), conservando la propiedad de martingala"
    ],
    "options_de": [
      "Stratonovich arbeitet nur in 2 Dimensionen, während Itô unendlich-dimensional ist",
      "Es gibt keinen mathematischen Unterschied; beide liefern identische Pfade",
      "Itô ist nur für stationäre Prozesse definiert, während Stratonovich nur für Sprünge gilt",
      "Stratonovich evaluiert den Integranden am Mittelpunkt des Intervalls [t, t+dt] und bewahrt die klassische Kettenregel; Itô evaluiert am linken Rand (nicht-antizipierend) und bewahrt die Martingal-Eigenschaft ohne Vorwissen"
    ],
    "explanation_en": "Exact! Itô is non-anticipating (vital in finance and filtering, maintaining martingales). Stratonovich obeys ordinary calculus rules, making it natural in geometric physics and manifolds.",
    "explanation_es": "¡Exacto! Itô es no anticipativo (clave en finanzas para mantener martingalas). Stratonovich respeta las reglas clásicas de Leibniz, ideal en física y geometría.",
    "explanation_de": "Exakt! Itô blickt nicht voraus (nicht-antizipierend, essenziell in der Finanzmathematik für Martingale). Stratonovich gehorcht der gewöhnlichen Kettenregel (ideal für Differentialgeometrie)."
  },
  "l24_ex1": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 1: Riemannian Gradients on Curved Manifolds",
    "title_es": "Ejercicio 1: Gradientes Riemannianos sobre Variedades Curvas",
    "title_de": "Übung 1: Riemannsche Gradienten auf gekrümmten Mannigfaltigkeiten",
    "question_en": "In the apex equation dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ: what does it mean that drift gradient ∇_ℳ is defined on a Riemannian manifold ℳ?",
    "question_es": "En la ecuación cúspide dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough en ℋ: ¿qué significa que el gradiente de deriva ∇_ℳ esté definido sobre una variedad riemanniana ℳ?",
    "question_de": "In der Apex-Formel dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ: Was bedeutet es, dass der Driftgradient ∇_ℳ auf einer Riemannschen Mannigfaltigkeit ℳ definiert ist?",
    "options_en": [
      "That the gradient must always equal zero to force convergence to a saddle point",
      "That stochastic diffusion can only propagate along Cartesian Euclidean axes",
      "That system state X_t can only take discrete values at graph vertices",
      "Data does not live in flat Euclidean space, but on a curved manifold (e.g., sphere, torus, or information geometry landscape); Riemannian gradient ∇_ℳ curves along geodesics via metric tensor g_ij"
    ],
    "options_es": [
      "Que el gradiente debe ser siempre nulo para forzar la convergencia a un punto de silla",
      "Que la difusión estocástica solo puede avanzar sobre los ejes euclidianos",
      "Que el estado X_t solo puede tomar valores discretos sobre vértices de grafos",
      "Los datos no residen en un espacio euclidiano plano, sino sobre una variedad curvada; el gradiente riemanniano ∇_ℳ curva a lo largo de geodésicas mediante el tensor métrico g_ij"
    ],
    "options_de": [
      "Dass der Gradient stets null sein muss, um Konvergenz zu einem Sattelpunkt zu erzwingen",
      "Dass sich die stochastische Diffusion nur entlang der euklidischen Koordinatenachsen ausbreiten kann",
      "Dass der Zustand X_t nur diskrete Werte auf Knotenpunkten annehmen kann",
      "Daten leben nicht im flachen euklidischen Raum, sondern auf einer gekrümmten Mannigfaltigkeit; der Gradient ∇_ℳ biegt sich über den metrischen Tensor g_ij entlang von Geodäten mit der Raumkrümmung"
    ],
    "explanation_en": "Apex differential geometry! Real complex systems evolve across curved geometric spaces. The Riemannian natural gradient respects intrinsic geometry and metric curvature.",
    "explanation_es": "¡Geometría diferencial cumbre! Los sistemas complejos evolucionan sobre variedades curvas. El gradiente natural respeta la geometría intrínseca del tensor métrico.",
    "explanation_de": "Spitzen-Differentialgeometrie! Komplexe Systeme bewegen sich auf gekrümmten Flächen. Der Riemannsche Gradient respektiert die intrinsische Geometrie über den metrischen Tensor."
  },
  "l24_ex2": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 2: Terry Lyons' Rough Path Theory",
    "title_es": "Ejercicio 2: Teoría de Rough Paths de Terry Lyons",
    "title_de": "Übung 2: Terry Lyons' Rough-Path-Theorie",
    "question_en": "Why does classical Itô calculus fail when noise trajectories are extremely rough (Hurst exponent H < 1/2), and how does Terry Lyons' Rough Path Theory resolve this?",
    "question_es": "¿Por qué fracasa el cálculo de Itô clásico cuando las trayectorias de ruido son extremadamente rugosas (Hurst H < 1/2), y cómo lo resuelve la teoría de Rough Paths de Terry Lyons?",
    "question_de": "Warum versagt die klassische Itô-Analysis bei extrem rauen Rauschpfaden (Hurst-Exponent H < 1/2) und wie löst Terry Lyons' Rough-Path-Theorie dies?",
    "options_en": [
      "Because trajectories with H < 1/2 are too smooth to possess second derivatives",
      "For H < 1/2, classical quadratic variation diverges and the Itô integral loses continuity in p-variation topology; Terry Lyons enriched paths with iterated tensor integrals (Signatures), restoring continuity to SDE solution maps",
      "Terry Lyons replaced all stochastic terms with deterministic Fourier series",
      "Because fractional Brownian motion forces a stationary null in the Malliavin matrix"
    ],
    "options_es": [
      "Porque las trayectorias con H < 1/2 son demasiado suaves para tener segundas derivadas",
      "Con H < 1/2, la variación cuadrática diverge y la integral de Itô pierde continuidad en la topología de p-variación; Terry Lyons enriqueció los caminos con integrales tensoriales iteradas (Signaturas), restaurando la continuidad determinista de las soluciones SDE",
      "Terry Lyons sustituyó los términos estocásticos por series deterministas de Fourier",
      "Porque el movimiento browniano fraccionario impone un cero estacionario en Malliavin"
    ],
    "options_de": [
      "Weil Pfade mit H < 1/2 zu glatt sind, um eine zweite Ableitung zu besitzen",
      "Bei H < 1/2 divergiert die klassische quadratische Variation und das Itô-Integral verliert die Stetigkeit in der p-Variations-Topologie; Terry Lyons erweiterte den Pfad um iterierte Integrale (Signaturen), wodurch SDE-Lösungsabbildungen wieder stetig werden",
      "Terry Lyons ersetzte alle stochastischen Terme durch deterministische Fourierreihen",
      "Weil gebrochene Brownsche Bewegung bei H < 1/2 eine Nullstelle in der Malliavin-Matrix erzwingt"
    ],
    "explanation_en": "Pinnacle of modern stochastic analysis! Rough paths (p > 2) cannot be analyzed purely coordinate-by-coordinate; augmenting them with iterated integrals (signatures) establishes continuous deterministic solution maps.",
    "explanation_es": "¡Cúspide del análisis estocástico! Caminos muy rugosos exigen enriquecerse con integrales tensoriales iteradas (signaturas), haciendo continua la solución de ecuaciones diferenciales.",
    "explanation_de": "Höchste Stochastik-Kunst! Raue Pfade (p > 2) erfordern iterierte Tensorintegrale (Signaturen). Dies stellt die Stetigkeit der Lösungsabbildung von Differentialgleichungen wieder her."
  },
  "l24_ex3": {
    "category_en": "Concept",
    "category_es": "Concepto",
    "category_de": "Konzept",
    "title_en": "Exercise 3: Infinite-Dimensional Hilbert Space ℋ",
    "title_es": "Ejercicio 3: El Espacio de Hilbert de Dimensión Infinita ℋ",
    "title_de": "Übung 3: Der unendlich-dimensionale Hilbertraum ℋ",
    "question_en": "What does it mean that system state X_t lives in an infinite-dimensional Hilbert space ℋ?",
    "question_es": "¿Qué significa que el estado del sistema X_t resida en un espacio de Hilbert de dimensión infinita ℋ?",
    "question_de": "Was bedeutet es, dass der Systemzustand X_t in einem unendlich-dimensionalen Hilbertraum ℋ lebt?",
    "options_en": [
      "X_t is no longer a single scalar or finite table row, but an entire continuous function or infinite field (e.g., continuous cortical electrochemical potential) with inner-product geometry ⟨f, g⟩_ℋ",
      "That system variance diverges to infinity across all frequency bands",
      "That state X_t diverges to infinite kinetic energy and can no longer be normalized via an L² norm",
      "That the response variable can only contain imaginary numbers in the Fourier domain"
    ],
    "options_es": [
      "X_t ya no es un escalar ni un vector finito, sino una función continua completa o campo infinito con geometría de producto interno ⟨f, g⟩_ℋ",
      "Que la varianza del sistema diverge a infinito en todas las bandas de frecuencia",
      "Que el estado X_t diverge a energía infinita y no puede normalizarse por norma L²",
      "Que la variable de respuesta solo contiene números imaginarios en el dominio Fourier"
    ],
    "options_de": [
      "X_t ist kein einzelner Skalar oder Vektor mehr, sondern eine vollständige stetige Funktion bzw. ein kontinuierliches Feld mit Skalarproduktgeometrie ⟨f, g⟩_ℋ",
      "Dass die Varianz des Systems über alle Frequenzbänder gegen unendlich divergiert",
      "Dass der Zustand X_t zu unendlicher Energie divergiert und nicht mehr normiert werden kann",
      "Dass die Zielgröße im Fourier-Bereich ausschließlich imaginäre Zahlen annehmen darf"
    ],
    "explanation_en": "Pure mathematical grandeur! In Hilbert spaces, a single point X_t represents an entire continuous function or neural field, modeled through inner products and functional operators.",
    "explanation_es": "¡Grandeza matemática absoluta! En espacios de Hilbert, un solo punto X_t representa una función continua completa o campo funcional con geometría de producto interno.",
    "explanation_de": "Reine mathematische Größe! Im Hilbertraum repräsentiert ein einziger Punkt X_t eine vollständige stetige Funktion oder ein neuronales Feld."
  },
  "l24_ex4": {
    "category_en": "Dilemma",
    "category_es": "Dilema",
    "category_de": "Dilemma",
    "title_en": "Exercise 4: The Causal Synthesis Dilemma",
    "title_es": "Ejercicio 4: El Dilema de la Síntesis Causal",
    "title_de": "Übung 4: Das kausale Synthese-Dilemma",
    "question_en": "Why is unifying causal inference (do-calculus) with this infinite-dimensional stochastic manifold field the ultimate holy grail for science and medicine?",
    "question_es": "¿Por qué unificar la inferencia causal (do-cálculo) con este campo estocástico sobre variedades es el santo grial definitivo de la ciencia y la medicina?",
    "question_de": "Warum ist die Vereinigung von Kausalinferenz (do-Kalkül) mit diesem unendlich-dimensionalen stochastischen Mannigfaltigkeitsfeld der heilige Gral für Wissenschaft und Medizin?",
    "options_en": [
      "Because causal operators reduce all stochastic fluctuations to linear deterministic trajectories",
      "Because merely predicting how the field autonomously evolves does not tell you how to steer it; causal Hilbert inference models exactly how targeted active manipulation (e.g., deep brain stimulation or climate intervention) reprograms attractor landscapes",
      "Because do-interventions always collapse the dimension of the Hilbert space to N = 1",
      "Because this renders empirical statistical sampling entirely obsolete in clinical research"
    ],
    "options_es": [
      "Porque los operadores causales reducen las fluctuaciones a trayectorias lineales deterministas",
      "Porque limitarse a predecir la evolución autónoma del campo no enseña cómo gobernarlo; la inferencia causal modela con exactitud cómo manipulaciones activas (p. ej., estimulación cerebral profunda o intervenciones climáticas) reprograman las cuencas de atracción",
      "Porque las do-intervenciones siempre colapsan la dimensión del espacio de Hilbert a N = 1",
      "Porque prescinde por completo de muestras estadísticas en investigación clínica"
    ],
    "options_de": [
      "Weil Kausaloperatoren alle stochastischen Fluktuationen zu linearen deterministischen Bahnen reduzieren",
      "Weil die bloße Vorhersage des autonomen Flusses nicht erklärt, wie man das System gezielt steuert; kausale Inferenz modelliert exakt, wie aktive externe Eingriffe (z.B. tiefe Hirnstimulation oder Klimainterventionen) Attraktorlandschaften umprogrammieren",
      "Weil do-Interventionen die Dimension des Hilbertraums stets auf N = 1 kollabieren lassen",
      "Weil empirische statistische Stichproben in der klinischen Forschung dadurch überflüssig werden"
    ],
    "explanation_en": "The Grand Unified Apex! Blending Pearl's causal do-interventions with infinite-dimensional stochastic manifold geometry empowers true scientific intelligence: predicting the consequences of action in an uncertain, non-linear universe.",
    "explanation_es": "¡El Cenit Unificado Definitivo! Fundir intervenciones causales de Pearl con geometría estocástica sobre variedades permite la verdadera inteligencia científica: predecir los efectos de la acción en un universo no lineal e incierto.",
    "explanation_de": "Das ultimative Apex-Meisterstück! Zu wissen, wie ein System fließt, ist passive Wissenschaft. Zu verstehen, wie ein do(X)-Eingriff das Vektorfeld und die Attraktoren fundamental transformiert, ist die höchste Stufe stochastischer Kausalwissenschaft."
  }
}
