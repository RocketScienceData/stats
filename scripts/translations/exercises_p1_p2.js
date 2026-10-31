// Multilingual translations for Exercises in Levels 1 to 12 (Phases 1 & 2)

module.exports = {
  // LEVEL 1
  l1_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: Measures of Central Tendency & Skewness",
    title_es: "Ejercicio 1: Medidas de Tendencia Central y Asimetría",
    question_en: "In a national income survey, the mean income is €42,000 per year, while the median income is €31,000 per year. What does this immediately indicate regarding the shape of the income distribution?",
    question_es: "En una encuesta nacional de ingresos, el ingreso medio anual es de 42.000 €, mientras que el ingreso mediano es de 31.000 €. ¿Qué indica esto de inmediato sobre la forma de la distribución de ingresos?",
    options_en: [
      "The distribution is perfectly symmetric around €36,500",
      "The distribution is right-skewed (positively skewed): a small group of high earners pulls the mean upward",
      "The distribution is left-skewed (negatively skewed): the vast majority earns more than the mean",
      "The distribution is bimodal with identical peaks at €31,000 and €42,000"
    ],
    options_es: [
      "La distribución de ingresos es perfectamente simétrica alrededor de 36.500 €",
      "La distribución es asimétrica a la derecha (positiva): un reducido grupo de ingresos muy altos eleva la media",
      "La distribución es asimétrica a la izquierda (negativa): la gran mayoría percibe más que la media",
      "La distribución es bimodal con picos idénticos en 31.000 € y 42.000 €"
    ],
    explanation_en: "Correct! When Mean > Median, extreme high values (top incomes) drag the arithmetic mean to the right. The median reflects the true middle citizen.",
    explanation_es: "¡Correcto! Cuando Media > Mediana, los valores atípicos elevados arrastran la media hacia la derecha. La mediana representa al ciudadano intermedio real."
  },
  l1_ex2: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 2: Practical Dilemma at an E-Commerce Platform",
    title_es: "Ejercicio 2: Dilema Práctico en una Plataforma de Comercio Electrónico",
    question_en: "You measure load times of a mobile app. For 90% of users, the page loads in 0.5 seconds. For 10% of users with degraded connections, it takes 45 seconds. The marketing VP wants to publish 'our average load time of 4.95 seconds' in a press release. What do you advise?",
    question_es: "Mides los tiempos de carga de una app. Para el 90% de usuarios la página carga en 0,5 segundos. Para el 10% restante con mala conexión tarda 45 segundos. El director de marketing desea publicar 'el tiempo medio de carga de 4,95 segundos' en prensa. ¿Qué recomiendas?",
    options_en: [
      "Agree: the arithmetic mean integrates all experiences into a single expectation value",
      "Disagree: report both the median (0.5s) and the 95th percentile (p95 = 45s). The mean reflects neither the typical experience nor tail degradation",
      "Calculate a 5% trimmed mean by dropping slow connections as random errors",
      "Report solely standard deviation because dispersion matters more than central location"
    ],
    options_es: [
      "De acuerdo: la media aritmética integra todas las experiencias en un valor esperado único",
      "En desacuerdo: informa la mediana (0,5 s) y el percentil 95 (p95 = 45 s). La media no describe al usuario típico ni refleja la gravedad del percentil crítico",
      "Calcular una media recortada al 5% excluyendo conexiones lentas como errores aleatorios",
      "Reportar únicamente la desviación estándar porque la dispersión importa más que el centro"
    ],
    explanation_en: "Excellent decision! In latency measurements, the mean is misleading. Always report median (typical user) alongside p95/p99 (tail latency).",
    explanation_es: "¡Excelente decisión! En latencias el promedio es engañoso. Se debe informar siempre la mediana (experiencia típica) junto al percentil 95 o 99 (latencia de cola)."
  },
  l1_ex3: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 3: The Dispersion Pitfall Detector",
    title_es: "Ejercicio 3: El Detector de Trampas en Dispersión",
    question_en: "Why is the Interquartile Range (IQR = Q3 - Q1) far more reliable than the Range (Max - Min) for data prone to measurement errors?",
    question_es: "¿Por qué el Rango Intercuartílico (IQR = Q3 - Q1) es mucho más fiable que el Rango Total (Máx - Mín) ante posibles errores de medida?",
    options_en: [
      "The IQR is always numerically larger than the standard deviation",
      "The Range depends entirely on the two most extreme observations; a single measurement typo completely distorts it, whereas the IQR has a 25% breakdown point",
      "The IQR assumes strict normality of underlying data",
      "The Range can only be calculated for discrete variables"
    ],
    options_es: [
      "El IQR siempre es numéricamente superior a la desviación estándar",
      "El Rango Total depende exclusivamente de los dos valores más extremos; un único error tipográfico lo falsea, mientras que el IQR tiene un punto de ruptura del 25%",
      "El IQR asume estricta normalidad en la distribución subyacente",
      "El Rango Total solo se puede calcular en variables discretas"
    ],
    explanation_en: "Haute precision! Range has a 0% breakdown point: a single typo ruins it. The IQR ignores the bottom 25% and top 25%, isolating the clean middle 50%.",
    explanation_es: "¡Gran precisión! El Rango tiene un punto de ruptura del 0%: un único error lo arruina. El IQR ignora los cuartiles extremos y mide el 50% central robusto."
  },

  // LEVEL 2
  l2_ex1: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 1: Z-score Calculation & Relative Position",
    title_es: "Ejercicio 1: Cálculo de Puntuación Z y Posición Relativa",
    question_en: "An exam score follows a normal distribution with μ = 70 and σ = 10. A candidate scores 85. What is their Z-score and what percentage of candidates score lower?",
    question_es: "Una calificación sigue una distribución normal con μ = 70 y σ = 10. Un aspirante obtiene 85. ¿Cuál es su puntuación Z y qué porcentaje queda por debajo?",
    options_en: [
      "Z = +1.50; approximately 93.3% score lower",
      "Z = +0.85; approximately 80.2% score lower",
      "Z = +2.00; exactly 97.7% score lower",
      "Z = +1.20; approximately 88.5% score lower"
    ],
    options_es: [
      "Z = +1,50; aproximadamente el 93,3% de los aspirantes puntúa por debajo",
      "Z = +0,85; aproximadamente el 80,2% puntúa por debajo",
      "Z = +2,00; exactamente el 97,7% puntúa por debajo",
      "Z = +1,20; aproximadamente el 88,5% puntúa por debajo"
    ],
    explanation_en: "Correct! Z = (85 - 70) / 10 = +1.50. From standard normal tables: Φ(1.50) ≈ 0.9332 (93.32%).",
    explanation_es: "¡Correcto! Z = (85 - 70) / 10 = +1,50. Consultando tablas normales acumuladas: Φ(1,50) ≈ 0,9332 (93,32%)."
  },
  l2_ex2: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 2: The Normality Assumption Trap",
    title_es: "Ejercicio 2: La Trampa del Supuesto de Normalidad",
    question_en: "Can you apply the 68-95-99.7 empirical rule to user follower counts on social media (where μ = 500, σ = 3,000, and 90% have < 100 followers)?",
    question_es: "¿Se puede aplicar la regla empírica 68-95-99.7 al número de seguidores en redes sociales (donde μ = 500, σ = 3.000 y el 90% tiene < 100 seguidores)?",
    options_en: [
      "Yes, the 68-95-99.7 rule is a universal mathematical theorem for all datasets",
      "No! The 68-95-99.7 rule applies strictly to normal distributions. Follower count is a power law (heavy-tailed Pareto); applying normal rules would predict negative followers!",
      "Yes, provided sample size N exceeds 30",
      "Only if we double the standard deviation to correct for skewness"
    ],
    options_es: [
      "Sí, la regla 68-95-99.7 es un teorema matemático universal para cualquier conjunto de datos",
      "¡No! La regla 68-95-99.7 exige estricta normalidad. El recuento de seguidores sigue una ley de potencia (Pareto); ¡la regla normal predeciría seguidores negativos!",
      "Sí, siempre que el tamaño de muestra N sea mayor a 30",
      "Solo si duplicamos la desviación estándar para compensar la asimetría"
    ],
    explanation_en: "Spot on! The empirical rule requires a Gaussian bell curve. Power-law distributions violate symmetry: μ - 2σ = 500 - 6,000 = -5,500 followers, which is impossible.",
    explanation_es: "¡Exacto! La regla exige distribución normal. Las leyes de potencia violan la simetría: μ - 2σ = 500 - 6.000 = -5.500 seguidores, lo cual es físicamente absurdo."
  },
  l2_ex3: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 3: Factory Tolerance Limits",
    title_es: "Ejercicio 3: Límites de Tolerancia en Fábrica",
    question_en: "A bottling line fills bottles with μ = 500 ml and σ = 5 ml (normal). Bottles under 490 ml violate consumer protection law. What percentage of bottles will breach the legal minimum?",
    question_es: "Una embotelladora llena botellas con μ = 500 ml y σ = 5 ml (normal). Botellas con menos de 490 ml vulneran la ley del consumidor. ¿Qué porcentaje incumplirá el mínimo legal?",
    options_en: [
      "Approximately 2.28% (Z = -2.00, bottom tail of normal curve)",
      "Exactly 5.00%",
      "Approximately 0.13% (Z = -3.00)",
      "Zero percent, because the mean is exactly 500 ml"
    ],
    options_es: [
      "Aproximadamente el 2,28% (Z = -2,00, cola inferior de la curva normal)",
      "Exactamente el 5,00%",
      "Aproximadamente el 0,13% (Z = -3,00)",
      "Cero por ciento, porque la media se calibra exactamente en 500 ml"
    ],
    explanation_en: "Superb! Z = (490 - 500) / 5 = -2.00. For a normal curve, exactly 2.28% sits below -2 SD.",
    explanation_es: "¡Excelente! Z = (490 - 500) / 5 = -2,00. En la curva normal, exactamente el 2,28% de la masa reside por debajo de -2 DE."
  },

  // LEVEL 3
  l3_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: Behavior of the Sample Mean",
    title_es: "Ejercicio 1: Comportamiento de la Media Muestral",
    question_en: "We roll a fair die (uniform 1 to 6, flat distribution). We calculate the mean of 100 rolls, repeating this experiment 10,000 times. What does the histogram of these 10,000 means look like?",
    question_es: "Lanzamos un dado equilibrado (distribución uniforme plana de 1 a 6). Calculamos la media de 100 tiradas y repetimos el experimento 10.000 veces. ¿Qué aspecto tiene el histograma de esas 10.000 medias?",
    options_en: [
      "A completely flat uniform distribution between 1 and 6",
      "A narrow, symmetric Gaussian bell curve centered tightly around 3.50 with variance σ² / 100",
      "A right-skewed exponential distribution",
      "A bimodal distribution with peaks at 1 and 6"
    ],
    options_es: [
      "Una distribución uniforme totalmente plana entre 1 y 6",
      "Una campana de Gauss estrecha y simétrica centrada en 3,50 con varianza σ² / 100",
      "Una distribución exponencial asimétrica a la derecha",
      "Una distribución bimodal con picos en 1 y 6"
    ],
    explanation_en: "Brilliant! This is the core miracle of the CLT: even though individual rolls are uniform, the average of 100 rolls forms a bell curve around μ = 3.5.",
    explanation_es: "¡Brillante! Este es el milagro del Teorema del Límite Central: aunque cada tirada es uniforme, el promedio de 100 tiradas forma una campana normal perfecta en 3,5."
  },
  l3_ex2: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 2: The Data Transformation Fallacy",
    title_es: "Ejercicio 2: La Falacia de la Transformación de Datos",
    question_en: "A researcher states: 'My patient data is skewed, but by collecting N = 500 patients, my raw data distribution automatically became normal thanks to the CLT!' What fundamental error did they commit?",
    question_es: "Un investigador afirma: 'Mis datos de pacientes son asimétricos, pero al reclutar N = 500 pacientes, ¡la distribución de mis datos crudos se volvió normal gracias al TLC!' ¿Qué error conceptual cometió?",
    options_en: [
      "No error: the CLT guarantees all large datasets become normally distributed",
      "Fatal confusion: the CLT states that the SAMPLING DISTRIBUTION OF THE MEAN converges to normality, NOT the raw underlying patient observations!",
      "N = 500 is insufficient; normality requires N ≥ 10,000",
      "The CLT only operates on medical data after logarithmic transformation"
    ],
    options_es: [
      "Ningún error: el TLC garantiza que todos los conjuntos grandes de datos se normalizan",
      "Confusión letal: el TLC establece que la DISTRIBUCIÓN MUESTRAL DE LA MEDIA converge a la normalidad, ¡NO las observaciones individuales de los pacientes!",
      "N = 500 es insuficiente; la normalidad exige N ≥ 10.000",
      "El TLC solo opera en variables médicas tras una transformación logarítmica"
    ],
    explanation_en: "Haute conceptual precision! The CLT governs the behavior of sample statistics (like means), never the original population distribution.",
    explanation_es: "¡Máxima precisión conceptual! El TLC rige el comportamiento de estadísticos muestrales (como las medias), jamás la distribución de las observaciones brutas."
  },
  l3_ex3: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 3: Standard Error Scaling",
    title_es: "Ejercicio 3: Escala del Error Estándar",
    question_en: "Population spread is σ = 20. At N = 25, the standard error is SE = 20 / √25 = 4.0. We want to cut our estimation error in half (SE = 2.0). What sample size N is required?",
    question_es: "La desviación poblacional es σ = 20. Con N = 25, el error estándar es EE = 20 / √25 = 4,0. Deseamos reducir a la mitad el error de estimación (EE = 2,0). ¿Qué tamaño N es necesario?",
    options_en: [
      "N = 50 (double the sample)",
      "N = 100 (quadruple the sample, because SE scales with 1/√N)",
      "N = 200 (scale by eight)",
      "N = 625 (square the sample size)"
    ],
    options_es: [
      "N = 50 (duplicar la muestra)",
      "N = 100 (cuadruplicar la muestra, porque el EE escala con 1/√N)",
      "N = 200 (multiplicar por ocho)",
      "N = 625 (elevar al cuadrado el tamaño muestral)"
    ],
    explanation_en: "Correct! SE = σ / √N. To divide SE by 2, √N must double, meaning N must be multiplied by 2² = 4 (25 × 4 = 100).",
    explanation_es: "¡Correcto! EE = σ / √N. Para dividir el EE entre 2, √N debe duplicarse, lo que exige multiplicar N por 2² = 4 (25 × 4 = 100)."
  },

  // LEVEL 4
  l4_ex1: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 1: The Classical Frequentist Trap",
    title_es: "Ejercicio 1: La Trampa Frecuentista Clásica",
    question_en: "A political poll reports: '95% confidence interval for candidate approval is [52%, 58%]'. A journalist writes: 'There is a 95% probability that the candidate's true support lies between 52% and 58%'. Is this statement correct?",
    question_es: "Un sondeo electoral publica: 'El intervalo de confianza al 95% para la aprobación del candidato es [52%, 58%]'. Un periodista concluye: 'Hay un 95% de probabilidad de que el apoyo real del candidato esté entre el 52% y el 58%'. ¿Es correcta esta afirmación?",
    options_en: [
      "Yes, that is the literal textbook definition of a 95% confidence interval",
      "No! In frequentist statistics, the true parameter is fixed (not random). Once computed, the interval either contains it (P=1) or does not (P=0). The 95% refers to procedure coverage across repeated hypothetical samples",
      "Yes, provided the sample was drawn via simple random sampling",
      "No, because the margin of error is asymmetric for percentages"
    ],
    options_es: [
      "Sí, esa es la definición literal de un intervalo de confianza al 95%",
      "¡No! En estadística frecuentista el parámetro real es fijo (no aleatorio). Una vez calculado, el intervalo lo contiene (P=1) o no (P=0). El 95% alude a la tasa de cobertura del procedimiento en infinitas muestras repetidas",
      "Sí, siempre que el muestreo haya sido estrictamente probabilístico",
      "No, porque el margen de error es asimétrico en porcentajes"
    ],
    explanation_en: "Spot on! The frequentist parameter is immutable. Saying '95% probability of being in this specific interval' assigns probability to a constant, which is a Bayesian concept.",
    explanation_es: "¡Precisión impecable! En inferencia frecuentista el parámetro no es aleatorio. Atribuir una probabilidad a un intervalo numérico fijo es confundir la filosofía frecuentista con la bayesiana."
  },
  l4_ex2: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 2: Overlapping Confidence Intervals & Significance",
    title_es: "Ejercicio 2: Intervalos Solapados y Significación",
    question_en: "Two clinical trial groups have 95% CIs: Group A [10, 20] and Group B [18, 28]. Because they overlap between 18 and 20, a clinician asserts: 'The groups are definitely not significantly different (p > 0.05)!' Is this reasoning sound?",
    question_es: "Dos grupos de un ensayo clínico tienen IC al 95%: Grupo A [10, 20] y Grupo B [18, 28]. Como se solapan entre 18 y 20, un médico asegura: '¡Los grupos no difieren significativamente (p > 0,05)!' ¿Es válido este razonamiento?",
    options_en: [
      "Yes: overlapping 95% confidence intervals mathematically prove p > 0.05",
      "No! Two 95% CIs can overlap slightly and still yield a statistically significant two-sample t-test (p < 0.05). Testing the difference SE_diff = √(SE_A² + SE_B²) is narrower than summing individual margins!",
      "Yes, but only if both group sample sizes are identical",
      "No, because overlapping intervals only apply to non-parametric median tests"
    ],
    options_es: [
      "Sí: el solapamiento de intervalos al 95% demuestra matemáticamente que p > 0,05",
      "¡No! Dos IC al 95% pueden solaparse ligeramente y, sin embargo, la diferencia entre ambos ser estadísticamente significativa (p < 0,05). ¡El error de la diferencia √(EE_A² + EE_B²) es menor que la suma de márgenes individuales!",
      "Sí, pero únicamente si ambos grupos tienen idéntico tamaño muestral",
      "No, porque el solapamiento solo es aplicable a pruebas no paramétricas de medianas"
    ],
    explanation_en: "Profound statistical nuance! When individual CIs overlap by less than ~29%, the difference test can still be significant at p < 0.05. Never judge significance solely by eyeballing separate CIs.",
    explanation_es: "¡Gran sutileza estadística! Dos intervalos pueden solaparse hasta en un ~29% de su longitud y resultar significativos con p < 0,05. Nunca juzgues significación solo mirando intervalos individuales superpuestos."
  },
  l4_ex3: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 3: 90% vs 95% vs 99% Confidence",
    title_es: "Ejercicio 3: Confianza al 90% vs 95% vs 99%",
    question_en: "What happens to the width of a confidence interval if we increase our required confidence level from 95% to 99% for a fixed sample size?",
    question_es: "¿Qué le ocurre a la amplitud de un intervalo de confianza si elevamos el nivel requerido del 95% al 99% manteniendo fija la muestra?",
    options_en: [
      "The interval becomes narrower, providing higher precision",
      "The interval becomes wider (Z* expands from 1.96 to 2.576): greater confidence demands casting a wider net",
      "The width stays identical, only the p-value changes",
      "The width collapses to zero because 99% approaches absolute certainty"
    ],
    options_es: [
      "El intervalo se vuelve más estrecho, proporcionando mayor precisión",
      "El intervalo se ensancha (Z* pasa de 1,96 a 2,576): mayor certeza exige abarcar un rango más amplio",
      "La amplitud permanece idéntica, solo cambia el valor p",
      "La amplitud colapsa a cero porque el 99% se aproxima a la certeza absoluta"
    ],
    explanation_en: "Exact! To be 99% sure of capturing the true mean, we must widen the net. Higher confidence trades off against estimation precision.",
    explanation_es: "¡Exacto! Para tener un 99% de certeza de atrapar la verdadera media, la red debe ser más ancha. Mayor confianza exige sacrificar precisión milimétrica."
  },

  // LEVEL 5
  l5_ex1: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 1: P-value vs Effect Size with Massive N",
    title_es: "Ejercicio 1: Valor p frente a Tamaño del Efecto con N Masiva",
    question_en: "An A/B test with N = 10,000,000 visitors shows a checkout conversion increase from 2.000% to 2.003% with p = 0.000002. What do you conclude?",
    question_es: "Un test A/B con N = 10.000.000 de visitas muestra un aumento de conversión de compra del 2,000% al 2,003% con p = 0,000002. ¿Qué concluyes?",
    options_en: [
      "The change is a revolutionary breakthrough because p is infinitesimally small",
      "The result is statistically significant due to colossal sample size, but the trivial effect size (+0.003%) may not justify deployment costs",
      "The test is invalid because p-values cannot be computed when N > 1,000,000",
      "The conversion gain is guaranteed to expand tenfold over time"
    ],
    options_es: [
      "El cambio es un éxito revolucionario porque el valor p es infinitamente pequeño",
      "El resultado es estadísticamente significativo debido a la colosal muestra, pero el efecto trivial (+0,003%) puede no amortizar los costes de implementación",
      "El test no es válido porque no se pueden calcular valores p con N > 1.000.000",
      "El aumento de conversión se multiplicará por diez de forma garantizada a largo plazo"
    ],
    explanation_en: "Masterful! With massive N, even biologically or commercially meaningless differences become 'statistically significant'. Always evaluate effect size!",
    explanation_es: "¡Magistral! Con N masiva, cualquier diferencia irrelevante se vuelve 'estadísticamente significativa'. ¡Evalúa siempre la magnitud del efecto y el impacto real!"
  },
  l5_ex2: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 2: Type I and Type II Errors in Practice",
    title_es: "Ejercicio 2: Errores Tipo I y Tipo II en la Práctica",
    question_en: "In autonomous emergency braking systems: H₀: 'There is no pedestrian on the road'. What are the real-world consequences of Type I and Type II errors?",
    question_es: "En sistemas de frenado autónomo de vehículos: H₀: 'No hay peatón en la carretera'. ¿Cuáles son las consecuencias de los errores Tipo I y Tipo II?",
    options_en: [
      "Type I: False alarm (brakes trigger unnecessarily); Type II: Missed detection (car fails to brake for a pedestrian, potentially fatal)",
      "Type I: Fatal collision; Type II: Phantom phantom brake alarm",
      "Both errors carry identical safety profiles",
      "Type I error cannot occur in computer vision systems"
    ],
    options_es: [
      "Tipo I: Falsa alarma (el coche frena innecesariamente); Tipo II: Detección fallida (el coche no frena ante un peatón real, potencialmente letal)",
      "Tipo I: Colisión letal; Tipo II: Alarma fantasma",
      "Ambos errores conllevan exactamente el mismo perfil de riesgo",
      "El error Tipo I no puede ocurrir en visión artificial"
    ],
    explanation_en: "Crystal clear! Type I = False positive (rejecting H₀ when false). Type II = False negative (missing the true emergency). Safety engineering tunes algorithms to minimize Type II errors.",
    explanation_es: "¡Claridad absoluta! Tipo I = Falso positivo (frenazo innecesario). Tipo II = Falso negativo (no detectar el peligro real). La ingeniería minimiza el error Tipo II a toda costa."
  },
  l5_ex3: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 3: What Does p = 0.04 Truly Mean?",
    title_es: "Ejercicio 3: ¿Qué Significa Realmente p = 0,04?",
    question_en: "A researcher claims: 'My p-value is 0.04, which proves there is a 96% probability that my alternative hypothesis H₁ is true!' What is the logical flaw?",
    question_es: "Un investigador declara: 'Mi valor p es 0,04, lo que demuestra un 96% de probabilidad de que mi hipótesis H₁ sea cierta'. ¿Cuál es el error lógico?",
    options_en: [
      "There is no flaw; p = 0.04 implies P(H₁) = 1 - 0.04 = 0.96",
      "Gross error: p-values only measure P(Data ≥ Observed | H₀ is true). They cannot calculate P(H₁ | Data) without specifying Bayesian prior probabilities",
      "The researcher should have set α = 0.01 instead of 0.05",
      "p-values can only be interpreted when testing two-tailed hypotheses"
    ],
    options_es: [
      "No hay error; p = 0,04 implica que P(H₁) = 1 - 0,04 = 0,96",
      "Grave error: el valor p solo mide P(Datos ≥ Observados | H₀ cierta). No evalúa P(H₁ | Datos), lo cual exige probabilidades a priori bayesianas",
      "El investigador debió fijar α = 0,01 en lugar de 0,05",
      "Los valores p solo son interpretables en contrastes bilaterales"
    ],
    explanation_en: "Flawless! A p-value is P(Data|H₀), NOT P(H₀|Data). Transposing conditionals without Bayes' theorem is the most widespread fallacy in academic science.",
    explanation_es: "¡Impecable! El valor p es P(Datos|H₀), NUNCA P(H₀|Datos). Invertir los términos condicionales sin el Teorema de Bayes es la falacia más extendida en la ciencia."
  },

  // LEVEL 6
  l6_ex1: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 1: Interpreting Slope & Intercept",
    title_es: "Ejercicio 1: Interpretar Pendiente e Intercepto",
    question_en: "In the model Salary (€/year) = 50,000 + 12,500 × Experience (years), what is the expected annual salary of an engineer with 4 years of experience?",
    question_es: "En el modelo Salario (€/año) = 50.000 + 12.500 × Experiencia (años), ¿cuál es el salario anual esperado de un ingeniero con 4 años de experiencia?",
    options_en: [
      "€ 100,000 per year (50,000 + 4 × 12,500)",
      "€ 75,000 per year",
      "€ 112,500 per year",
      "€ 62,500 per year"
    ],
    options_es: [
      "100.000 € al año (50.000 + 4 × 12.500)",
      "75.000 € al año",
      "112.500 € al año",
      "62.500 € al año"
    ],
    explanation_en: "Correct! Ŷ = 50,000 + 12,500 × 4 = 50,000 + 50,000 = €100,000.",
    explanation_es: "¡Correcto! Ŷ = 50.000 + 12.500 × 4 = 50.000 + 50.000 = 100.000 €."
  },
  l6_ex2: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 2: Why Square Residuals in OLS?",
    title_es: "Ejercicio 2: ¿Por Qué Elevar al Cuadrado en MCO?",
    question_en: "Why does Ordinary Least Squares minimize the SUM OF SQUARED residuals Σ(y_i - ŷ_i)² rather than the simple sum of raw residuals Σ(y_i - ŷ_i)?",
    question_es: "¿Por qué Mínimos Cuadrados Ordinarios minimiza la SUMA DE RESIDUOS AL CUADRADO Σ(y_i - ŷ_i)² en lugar de la suma simple de residuos Σ(y_i - ŷ_i)?",
    options_en: [
      "Squaring makes calculation faster on digital microprocessors",
      "Because positive and negative residuals cancel each other out to zero for any line passing through (x̄, ȳ); squaring eliminates signs and penalizes large errors more heavily",
      "Squaring forces all slope parameters to be strictly positive",
      "Because the sum of raw residuals can never equal zero"
    ],
    options_es: [
      "Elevar al cuadrado acelera el cálculo matricial en microprocesadores",
      "Porque los residuos positivos y negativos se cancelan sumando exactamente cero en cualquier recta que cruce (x̄, ȳ); elevar al cuadrado elimina signos y castiga más las desviaciones grandes",
      "Elevar al cuadrado fuerza que todas las pendientes sean estrictamente positivas",
      "Porque la suma simple de residuos nunca puede ser igual a cero"
    ],
    explanation_en: "Fundamental regression insight! Any line through the center of gravity has Σ e_i = 0. Squaring forces all errors positive and mathematically yields the Gauss-Markov BLUE property.",
    explanation_es: "¡Concepto cardinal de regresión! Cualquier recta que pase por el centro de gravedad (x̄, ȳ) tiene Σ e_i = 0. Elevar al cuadrado evita cancelaciones y confiere propiedades óptimas según Gauss-Markov."
  },
  l6_ex3: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 3: Correlation vs Causation",
    title_es: "Ejercicio 3: Correlación frente a Causalidad",
    question_en: "There is a strong correlation (r = 0.85) between ice cream sales and drownings. An OLS model yields Drownings = 1.2 + 0.08 × IceCream (p < 0.001). Can a city reduce drownings by banning ice cream sales?",
    question_es: "Existe una fuerte correlación (r = 0,85) entre ventas de helados y ahogamientos. Un modelo MCO reporta Ahogamientos = 1,2 + 0,08 × Helados (p < 0,001). ¿Puede una ciudad reducir ahogamientos prohibiendo los helados?",
    options_en: [
      "Yes: the statistically significant slope proves that selling ice cream causes drowning",
      "No! Both are driven by an unmeasured confounder: Summer Temperature (Z). OLS models association, not interventional causal mechanics",
      "Yes, but only if the regression R² exceeds 0.90",
      "No, because the correlation coefficient r is less than 1.0"
    ],
    options_es: [
      "Sí: la pendiente estadísticamente significativa demuestra que los helados causan ahogamientos",
      "¡No! Ambas variables están impulsadas por un confusor común: la temperatura estival (Z). MCO modela asociación condicional, no causalidad intervencional",
      "Sí, pero únicamente si el R² del modelo supera 0,90",
      "No, porque el coeficiente de correlación r es inferior a 1,0"
    ],
    explanation_en: "Classic confounding! High summer heat causes both swimming (more drownings) and ice cream consumption. Banning ice cream leaves summer heat untouched.",
    explanation_es: "¡Confusión clásica! El calor del verano impulsa el baño (más riesgo) y el consumo de helados. Prohibir los helados no enfría el clima ni reduce los nadadores."
  },

  // LEVEL 7
  l7_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: Behavior of Standard R²",
    title_es: "Ejercicio 1: Comportamiento del R² Ordinario",
    question_en: "Why can standard R² never decrease when adding extra predictors to an OLS model, even when the new predictors are pure random noise?",
    question_es: "¿Por qué el R² ordinario jamás puede descender al agregar predictores adicionales a un modelo MCO, incluso cuando son puro ruido?",
    options_en: [
      "Because the computer optimizes the F-statistic directly",
      "Because OLS minimizes SSE; adding a variable provides extra mathematical freedom to capture finite-sample noise, so SSE can never increase",
      "Because R² is defined strictly as the sum of squared correlation coefficients",
      "Because the Gauss-Markov theorem forces monotonic convergence"
    ],
    options_es: [
      "Porque el algoritmo optimiza directamente el estadístico F global",
      "Porque MCO minimiza la SCE; añadir una variable ofrece libertad matemática para explotar correlaciones accidentales en muestras finitas, por lo que la SCE nunca puede crecer",
      "Porque R² se define estrictamente como la suma de correlaciones al cuadrado",
      "Porque el teorema de Gauss-Markov exige convergencia monótona"
    ],
    explanation_en: "Masterful! Adding a dimension allows OLS to fit random blips in the sample. SSE never increases, meaning R² = 1 - (SSE/SST) never decreases.",
    explanation_es: "¡Magistral! Añadir dimensiones permite a MCO aprovechar fluctuaciones casuales de la muestra. La SCE nunca sube, por lo que R² jamás decrece."
  },
  l7_ex2: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 2: Model Comparison in Practice",
    title_es: "Ejercicio 2: Comparación de Modelos en la Práctica",
    question_en: "Model A has 3 predictors with R² = 0.74 and Adj-R² = 0.73. Model B adds 12 extra predictors, reaching R² = 0.76 and Adj-R² = 0.68. Which model should you deploy for operational forecasting?",
    question_es: "El Modelo A tiene 3 predictores con R² = 0,74 y R²-Adj = 0,73. El Modelo B añade 12 predictores más, logrando R² = 0,76 y R²-Adj = 0,68. ¿Qué modelo debes implementar en producción?",
    options_en: [
      "Model B, because standard R² is higher (0.76 > 0.74)",
      "Model A: its Adjusted R² is higher (0.73 vs 0.68), proving the 12 extra variables burned degrees of freedom and overfit random noise",
      "Both models are identical because the difference in R² is less than 0.05",
      "Model B, provided the AIC is ignored"
    ],
    options_es: [
      "El Modelo B, porque su R² ordinario es mayor (0,76 > 0,74)",
      "El Modelo A: su R² Ajustado es superior (0,73 frente a 0,68), demostrando que las 12 variables adicionales sobreajustaron ruido a costa de grados de libertad",
      "Ambos modelos son equivalentes porque la diferencia de R² es menor a 0,05",
      "El Modelo B, siempre que se prescinda del criterio AIC"
    ],
    explanation_en: "Flawless model selection! Model B consumed 12 degrees of freedom for a negligible 2% variance gain. Adjusted R² penalized this overfitting correctly.",
    explanation_es: "¡Selección de modelos impecable! El Modelo B consumió 12 grados de libertad para ganar un insignificante 2%. El R² Ajustado penaliza certeramente este sobreajuste."
  },
  l7_ex3: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 3: What Does the Overall F-test Test?",
    title_es: "Ejercicio 3: ¿Qué Evalúa la Prueba F Global?",
    question_en: "In a multivariable regression with 4 predictors: what is the null hypothesis H₀ tested by the overall ANOVA F-test?",
    question_es: "En una regresión multivariable con 4 predictores: ¿cuál es la hipótesis nula H₀ que evalúa la prueba F global del análisis de varianza?",
    options_en: [
      "H₀: All four slope coefficients are simultaneously equal to zero (β₁ = β₂ = β₃ = β₄ = 0)",
      "H₀: The intercept equals zero (β₀ = 0)",
      "H₀: At least one predictor is significant",
      "H₀: The residuals are normally distributed"
    ],
    options_es: [
      "H₀: Los cuatro coeficientes de pendiente son simultáneamente iguales a cero (β₁ = β₂ = β₃ = β₄ = 0)",
      "H₀: El intercepto es igual a cero (β₀ = 0)",
      "H₀: Al menos uno de los predictores es significativo",
      "H₀: Los residuos se distribuyen normalmente"
    ],
    explanation_en: "Exact! The omnibus F-test evaluates whether the model as a collective whole explains significantly more variance than a flat horizontal line.",
    explanation_es: "¡Exacto! La prueba F global contrasta si el conjunto de predictores explica colectivamente más variabilidad que una simple línea horizontal promedio."
  },

  // LEVEL 8
  l8_ex1: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 1: Heteroscedasticity & Standard Errors",
    title_es: "Ejercicio 1: Heterocedasticidad y Errores Estándar",
    question_en: "What is the concrete consequence if residuals in an OLS model exhibit severe heteroscedasticity (expanding trumpet pattern)?",
    question_es: "¿Cuál es la consecuencia concreta si los residuos en un modelo MCO presentan heterocedasticidad severa (patrón en abanico)?",
    options_en: [
      "The regression slope estimates β̂ become biased and must be discarded",
      "The regression slopes remain unbiased, but the standard errors are biased, causing p-values and confidence intervals to be completely untrustworthy",
      "R² collapses to zero automatically",
      "Multicollinearity increases exponentially"
    ],
    options_es: [
      "Las estimaciones de las pendientes β̂ se vuelven sesgadas y deben descartarse",
      "Las pendientes siguen siendo insesgadas, pero los errores estándar se sesgan, volviendo los valores p e intervalos de confianza totalmente engañosos",
      "El R² colapsa automáticamente a cero",
      "La multicolinealidad se incrementa exponencialmente"
    ],
    explanation_en: "Precision diagnostics! Heteroscedasticity does not introduce bias into slope estimates; it breaks the variance formula, generating false p-values.",
    explanation_es: "¡Diagnóstico riguroso! La heterocedasticidad no sesga las estimaciones de la pendiente; distorsiona la fórmula de varianza, arrojando valores p falsos."
  },
  l8_ex2: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 2: Curvature in Residuals vs Fitted Plot",
    title_es: "Ejercicio 2: Curvatura en el Gráfico de Residuos vs Ajustados",
    question_en: "In a Residuals vs Fitted plot, you observe a pronounced U-shaped curve. What does this diagnosis reveal and how do you resolve it?",
    question_es: "En el gráfico de Residuos vs Ajustados observas una marcada forma en U. ¿Qué revela este diagnóstico y cómo se soluciona?",
    options_en: [
      "Violation of linearity: the true relationship is non-linear; add a quadratic term (X²) or apply a non-linear transformation",
      "Violation of homoscedasticity; apply HC3 robust standard errors",
      "Violation of residual independence; fit an autoregressive time series model",
      "Data contains extreme outliers that should be deleted"
    ],
    options_es: [
      "Violación del supuesto de linealidad: la relación funcional es curva; agrega un término cuadrático (X²) o aplica una transformación no lineal",
      "Violación de homocedasticidad; aplica errores estándar robustos HC3",
      "Violación de independencia; ajusta un modelo autorregresivo de series temporales",
      "Presencia de valores atípicos que deben eliminarse manualmente"
    ],
    explanation_en: "Superb! A U-pattern in residuals indicates the linear model failed to capture curvature. Adding polynomial terms or a GAM spline resolves it.",
    explanation_es: "¡Excelente! Un patrón en U en los residuos delata que el modelo lineal ignoró la curvatura real. Incorporar términos cuadráticos o splines GAM lo soluciona."
  },
  l8_ex3: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 3: Normal Q-Q Plot Interpretation",
    title_es: "Ejercicio 3: Interpretación del Gráfico Q-Q Normal",
    question_en: "In the Normal Q-Q plot of residuals, the points curve upward on the left and downward on the right (an S-shape). What does this pattern diagnose?",
    question_es: "En el gráfico Q-Q normal de residuos, los puntos se curvan hacia arriba a la izquierda y hacia abajo a la derecha (forma en S invertida). ¿Qué diagnostica este patrón?",
    options_en: [
      "Residuals are perfectly normal",
      "Heavy tails (leptokurtic distribution): extreme errors occur far more frequently than predicted by a normal distribution",
      "Residuals are severely autocorrelated",
      "The sample size is too large for the normality test"
    ],
    options_es: [
      "Los residuos son perfectamente gaussianos",
      "Colas pesadas (distribución leptocúrtica): ocurren errores extremos con mucha mayor frecuencia de lo previsto por una distribución normal",
      "Los residuos presentan fuerte autocorrelación serial",
      "El tamaño muestral es excesivo para la prueba de normalidad"
    ],
    explanation_en: "Exact! Deviations in the tails of a Q-Q plot diagnose kurtosis and skewness. Heavy tails alert you that extreme risks are underestimated.",
    explanation_es: "¡Exacto! Las desviaciones en los extremos del gráfico Q-Q diagnostican curtosis y asimetría. Colas pesadas advierten que los riesgos extremos están subestimados."
  },

  // LEVEL 9
  l9_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: What Drives Simpson's Paradox?",
    title_es: "Ejercicio 1: ¿Qué Desencadena la Paradoja de Simpson?",
    question_en: "What underlying causal mechanism allows a positive bivariate correlation to completely invert to a negative relationship when controlling for a confounder?",
    question_es: "¿Qué mecanismo causal subyacente permite que una correlación positiva se invierta a negativa al controlar por un factor confusor?",
    options_en: [
      "Random measurement noise in the outcome variable",
      "An omitted confounder correlated with both treatment and outcome, where subgroup differences dominate aggregate marginal data",
      "Severe multicollinearity between independent predictors",
      "Overfitting due to excessive degrees of freedom"
    ],
    options_es: [
      "Ruido aleatorio de medición en la variable de respuesta",
      "Un confusor omitido correlacionado simultáneamente con el tratamiento y el desenlace, donde la disparidad entre subgrupos domina los datos agregados",
      "Multicolinealidad severa entre variables independientes",
      "Sobreajuste empírico por exceso de grados de libertad"
    ],
    explanation_en: "Classic causal wisdom! Confounders open backdoor paths. Without conditioning on the common cause, the observed slope is contaminated by group selection.",
    explanation_es: "¡Conocimiento causal clásico! Los factores de confusión abren caminos de puerta trasera que distorsionan por completo la pendiente agregada observada."
  },
  l9_ex2: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 2: UC Berkeley Admissions Study",
    title_es: "Ejercicio 2: El Estudio de Admisiones de UC Berkeley",
    question_en: "In the famous UC Berkeley admissions study, men had higher aggregate admission rates than women (44% vs 35%). But within almost every individual department, women had equal or higher admission rates. Why?",
    question_es: "En el célebre estudio de admisiones de UC Berkeley, los hombres tenían mayor tasa de admisión global que las mujeres (44% vs 35%). Sin embargo, dentro de casi cada departamento individual, las mujeres tenían tasas iguales o superiores. ¿Por qué?",
    options_en: [
      "The university manipulated the data tables",
      "Department Choice was a confounder: women applied disproportionately to highly competitive departments with low admission rates, while men applied to departments with high acceptance rates",
      "The sample size of female applicants was too small to draw conclusions",
      "The chi-square test was computed incorrectly"
    ],
    options_es: [
      "La universidad alteró los registros de admisiones",
      "La Elección de Departamento actuó como confusor: las mujeres solicitaron masivamente departamentos muy competitivos con bajas tasas de admisión, mientras los hombres postularon a facultades con alta aceptación",
      "El número de candidatas era demasiado pequeño para concluir",
      "La prueba de chi-cuadrado se calculó erróneamente"
    ],
    explanation_en: "Iconic historical paradox! Stratifying by department revealed the true conditional parity. Aggregating over departments created an illusion of systemic bias.",
    explanation_es: "¡Paradoja histórica emblemática! Estratificar por departamento reveló equidad condicional. Agregar los datos sin estratificar creó la ilusión óptica de un sesgo inexistente."
  },
  l9_ex3: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 3: What Does 'Ceteris Paribus' Mean?",
    title_es: "Ejercicio 3: ¿Qué Significa 'Ceteris Paribus'?",
    question_en: "In the model Salary = 30,000 + 2,500 × Education + 1,200 × Experience, what is the precise interpretation of coefficient 2,500?",
    question_es: "En el modelo Salario = 30.000 + 2.500 × Educación + 1.200 × Experiencia, ¿cuál es la interpretación exacta del coeficiente 2.500?",
    options_en: [
      "Each additional year of education yields €2,500 more salary, regardless of experience",
      "Each additional year of education associates with an average salary increase of €2,500, HOLDING YEARS OF EXPERIENCE CONSTANT (ceteris paribus)",
      "Education explains 25% of the total salary variance",
      "The baseline salary without education is €2,500"
    ],
    options_es: [
      "Cada año adicional de educación aporta 2.500 € más de salario, sin importar los años de experiencia",
      "Cada año adicional de educación se asocia a un aumento medio de 2.500 € en el salario, MANTENIENDO CONSTANTE LA EXPERIENCIA (ceteris paribus)",
      "La educación explica el 25% de la varianza total del salario",
      "El salario basal sin educación es de 2.500 €"
    ],
    explanation_en: "Exact! The core virtue of multiple regression is partial conditioning: evaluating one predictor while mathematically locking all other covariates in place.",
    explanation_es: "¡Exacto! La virtud medular de la regresión múltiple es el condicionamiento parcial: aislar el influjo de una variable fijando matemáticamente las demás."
  },

  // LEVEL 10
  l10_ex1: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 1: Meaning of VIF = 10",
    title_es: "Ejercicio 1: Significado de FIV = 10",
    question_en: "A predictor X₁ has a Variance Inflation Factor of VIF = 10.0. By what factor is the standard error of its coefficient inflated compared to orthogonal predictors?",
    question_es: "Un predictor X₁ tiene un Factor de Inflación de la Varianza FIV = 10,0. ¿Por qué factor se multiplica el error estándar de su coeficiente frente a predictores ortogonales?",
    options_en: [
      "Inflated by √10 ≈ 3.16 times wider standard error",
      "Inflated by 10.0 times wider standard error",
      "Inflated by 100 times",
      "Inflated by 1.0 (no inflation)"
    ],
    options_es: [
      "Se multiplica por √10 ≈ 3,16 veces de error estándar más ancho",
      "Se multiplica por 10,0 veces",
      "Se multiplica por 100 veces",
      "No se infla (factor 1,0)"
    ],
    explanation_en: "Correct! Variance inflates by VIF = 10. Because standard error is the square root of variance, SE inflates by √10 ≈ 3.16 (confidence interval is over 3x wider).",
    explanation_es: "¡Correcto! La varianza se multiplica por FIV = 10. Como el error estándar es la raíz de la varianza, el EE se infla por √10 ≈ 3,16 (el intervalo es más del triple de ancho)."
  },
  l10_ex2: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 2: The 'Significant Nothing' Symptom",
    title_es: "Ejercicio 2: El Síntoma de 'Significación Fantasma'",
    question_en: "Your regression model achieves a very high R² = 0.88 and overall F-test p < 0.0001, but NONE of the 5 individual predictor t-tests reach significance (all p > 0.20). What is occurring?",
    question_es: "Tu modelo logra un R² = 0,88 muy alto y prueba F global con p < 0,0001, pero NINGUNO de los 5 predictores individuales alcanza significación (todos p > 0,20). ¿Qué está sucediendo?",
    options_en: [
      "The sample size is too small",
      "Classic severe multicollinearity: predictors share so much redundant information that OLS cannot disentangle individual credits, despite high joint explanatory power",
      "The dependent variable is non-normal",
      "The intercept was omitted from the regression"
    ],
    options_es: [
      "El tamaño muestral es insuficiente",
      "Clásica multicolinealidad severa: los predictores comparten tanta información redundante que MCO no puede asignar el mérito individual, pese al gran poder predictivo conjunto",
      "La variable dependiente vulnera la normalidad",
      "Se omitió el término de intercepto en la regresión"
    ],
    explanation_en: "Textbook multicollinearity symptom! Joint significance (F-test) with individual insignificance (t-tests) is the defining diagnostic hallmark of collinear predictors.",
    explanation_es: "¡Síntoma clásico de libro! Alta significación conjunta (prueba F) combinada con insignificancia individual (pruebas t) es la huella digital de la multicolinealidad."
  },
  l10_ex3: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 3: Does Multicollinearity Harm Predictions?",
    title_es: "Ejercicio 3: ¿Perjudica la Multicolinealidad a las Predicciones?",
    question_en: "Two predictors are heavily correlated (r = 0.95). If your SOLE objective is predicting outcome Y on new data following the same correlation pattern (not causal attribution), is multicollinearity harmful?",
    question_es: "Dos predictores correlacionan fuertemente (r = 0,95). Si tu ÚNICO objetivo es predecir Y en nuevos datos con el mismo patrón correlacional (sin inferencia causal), ¿es perjudicial la multicolinealidad?",
    options_en: [
      "Yes: predictions will be systematically biased and invalid",
      "No: overall predictions Ŷ remain unbiased and highly accurate, provided the correlation structure between predictors remains stable in future data",
      "Yes, because R² drops to zero",
      "Only if Ridge regression is applied"
    ],
    options_es: [
      "Sí: las predicciones serán sistemáticamente sesgadas e inválidas",
      "No: las predicciones globales Ŷ siguen siendo insesgadas y precisas, siempre que la estructura de correlación entre predictores permanezca estable en el futuro",
      "Sí, porque el R² colapsa a cero",
      "Solo si se aplica regularización Ridge"
    ],
    explanation_en: "Subtle econometric insight! Multicollinearity cripples coefficient interpretation (causal inference), but does not damage joint prediction Ŷ when covariance structures persist.",
    explanation_es: "¡Sutileza econométrica clave! La multicolinealidad arruina la interpretación de coeficientes individuales (inferencia causal), pero no perjudica la predicción conjunta Ŷ si el patrón se mantiene."
  },

  // LEVEL 11
  l11_ex1: {
    category_en: "Calculation", category_es: "Cálculo",
    title_en: "Exercise 1: From Log-Odds to Odds Ratio",
    title_es: "Ejercicio 1: De Log-Odds a Odds Ratio",
    question_en: "In a logistic regression for myocardial infarction, the estimated slope for Smoking is β̂ = +0.693. What is the Odds Ratio and clinical interpretation?",
    question_es: "En una regresión logística sobre infarto de miocardio, la pendiente para Tabaquismo es β̂ = +0,693. ¿Cuál es la Odds Ratio y su interpretación clínica?",
    options_en: [
      "OR = e^0.693 ≈ 2.00: smokers have double the odds of infarction compared to non-smokers",
      "OR = 0.693: risk increases by 69.3%",
      "OR = 1.48: risk increases by 48%",
      "OR = 0.50: smokers have half the risk"
    ],
    options_es: [
      "OR = e^0,693 ≈ 2,00: los fumadores tienen el doble de probabilidades relativas (momios) de infarto frente a los no fumadores",
      "OR = 0,693: el riesgo aumenta un 69,3%",
      "OR = 1,48: el riesgo aumenta un 48%",
      "OR = 0,50: los fumadores tienen la mitad de riesgo"
    ],
    explanation_en: "Exact! OR = exp(β). Because exp(0.693) ≈ 2.0, smokers face twice the odds of a cardiac event.",
    explanation_es: "¡Exacto! OR = exp(β). Como exp(0,693) ≈ 2,0, los fumadores afrontan exactamente el doble de chances de sufrir un infarto."
  },
  l11_ex2: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 2: Decision Threshold in Cancer Diagnostics",
    title_es: "Ejercicio 2: Umbral de Decisión en Diagnóstico Oncológico",
    question_en: "A machine learning model predicts probability of a malignant tumor. A default cutoff p = 0.50 yields Sensitivity = 70% and Specificity = 95%. Why should a hospital LOWER the cutoff to p = 0.15?",
    question_es: "Un modelo predice la probabilidad de tumor maligno. El umbral por defecto p = 0,50 ofrece Sensibilidad = 70% y Especificidad = 95%. ¿Por qué un hospital debe BAJAR el umbral a p = 0,15?",
    options_en: [
      "Lowering the cutoff speeds up computation",
      "In lethal diseases, missing a cancer (False Negative) is catastrophic, whereas a False Alarm (False Positive) is resolved via a harmless biopsy. Lowering p maximizes Sensitivity (Recall)",
      "Lowering p automatically increases Specificity",
      "Because p = 0.50 violates the Gauss-Markov theorem"
    ],
    options_es: [
      "Reducir el umbral acelera el procesamiento computacional",
      "En patologías letales, no detectar un tumor (Falso Negativo) es fatal, mientras que una falsa alarma se descarta con biopsia. Bajar p maximiza la Sensibilidad",
      "Reducir p incrementa automáticamente la Especificidad",
      "Porque p = 0,50 vulnera el teorema de Gauss-Markov"
    ],
    explanation_en: "Clinical decision science! Cutoff selection must reflect asymmetric costs of error. In oncology, minimizing False Negatives takes absolute priority.",
    explanation_es: "¡Ciencia de decisión clínica! La selección del umbral debe ponderar costes asimétricos. En oncología, minimizar los Falsos Negativos es la prioridad absoluta."
  },
  l11_ex3: {
    category_en: "Pitfall", category_es: "Trampa",
    title_en: "Exercise 3: The '99% Accuracy' Fallacy",
    title_es: "Ejercicio 3: La Falacia de la 'Exactitud del 99%'",
    question_en: "A credit card fraud model (where only 0.1% of transactions are fraudulent) achieves 99.9% overall accuracy by simply classifying EVERY transaction as non-fraudulent. Why is Accuracy a useless metric here?",
    question_es: "Un modelo de fraude con tarjetas (donde solo el 0,1% de transacciones es fraude) logra una exactitud del 99,9% clasificando TODAS las transacciones como legítimas. ¿Por qué la Exactitud es inútil aquí?",
    options_en: [
      "Because accuracy cannot be computed for financial datasets",
      "Under severe class imbalance, a naive majority-class model achieves 99.9% accuracy while detecting ZERO frauds (Sensitivity = 0%). Precision, Recall, and AUC-ROC must be used instead",
      "Because 99.9% is mathematically impossible in statistics",
      "Only F-tests should be evaluated for classification"
    ],
    options_es: [
      "Porque la exactitud no puede computarse en finanzas",
      "Bajo desbalance severo de clases, predecir siempre la clase mayoritaria da 99,9% de acierto pero detecta CERO fraudes (Sensibilidad = 0%). Deben usarse Precisión, Recall y AUC-ROC",
      "Porque el 99,9% es matemáticamente imposible en estadística",
      "Solo deben evaluarse pruebas F en clasificación"
    ],
    explanation_en: "The accuracy paradox! Always use AUC-ROC, Precision-Recall AUC, or F1-score when evaluating rare event detection.",
    explanation_es: "¡La paradoja de la exactitud! Utiliza siempre AUC-ROC, curvas Precision-Recall o F1-score ante eventos desbalanceados."
  },

  // LEVEL 12
  l12_ex1: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 1: Geometric Difference Between L1 and L2",
    title_es: "Ejercicio 1: Diferencia Geométrica entre L1 y L2",
    question_en: "Why does Lasso (L₁ regularization: Σ|β_j|) produce exact zero coefficients for automated feature selection, while Ridge (L₂: Σβ_j²) only shrinks them asymptotically toward zero?",
    question_es: "¿Por qué Lasso (L₁: Σ|β_j|) anula coeficientes exactamente a cero para selección automática, mientras Ridge (L₂: Σβ_j²) solo los aproxima asintóticamente?",
    options_en: [
      "Ridge is computed with gradient descent and Lasso with analytical inversion",
      "The L₁ constraint has sharp corners on coordinate axes where elliptical loss contours make first contact at exactly β_j = 0; the smooth L₂ hypersphere lacks sharp corners",
      "Lasso requires strictly normally distributed predictors",
      "L₁ penalties ignore negative values"
    ],
    options_es: [
      "Ridge se computa con gradiente descendente y Lasso con inversión analítica",
      "La restricción L₁ posee vértices puntiagudos en los ejes coordenados donde las elipses de verosimilitud hacen contacto en β_j = 0; la hiperesfera suave L₂ carece de esquinas",
      "Lasso exige que todos los predictores sean normales",
      "La penalización L₁ descarta los valores negativos"
    ],
    explanation_en: "Iconic geometric insight! The diamond corners of L₁ regularization intersect likelihood contours on coordinate hyperplanes, setting coefficients to exactly zero.",
    explanation_es: "¡Brillante intuición geométrica! Los vértices angulares del rombo L₁ intersecan el contorno elíptico en los ejes, fijando coeficientes en cero exacto."
  },
  l12_ex2: {
    category_en: "Dilemma", category_es: "Dilema",
    title_en: "Exercise 2: Choosing Between Ridge and Lasso in Genomics",
    title_es: "Ejercicio 2: Elegir entre Ridge y Lasso en Genómica",
    question_en: "You analyze 20,000 gene expression levels across N = 150 cancer patients. You hypothesize that only 10 to 15 key driver mutations cause the tumor. Which regularization should you choose?",
    question_es: "Analizas 20.000 genes en N = 150 pacientes oncológicos. Tu hipótesis biológica es que solo 10 o 15 mutaciones clave causan el tumor. ¿Qué regularización debes elegir?",
    options_en: [
      "Ridge (L₂), because it retains all 20,000 genes in the final equation",
      "Lasso (L₁), because sparse feature selection will eliminate thousands of irrelevant genes and identify the true compact set of biological drivers",
      "Ordinary Least Squares without regularization",
      "Polynomial regression of degree 4"
    ],
    options_es: [
      "Ridge (L₂), porque conserva los 20.000 genes en la ecuación final",
      "Lasso (L₁), porque su selección dispersa de variables anulará miles de genes irrelevantes e identificará el conjunto compacto de genes causales",
      "Mínimos Cuadrados Ordinarios sin regularización",
      "Regresión polinómica de 4º grado"
    ],
    options_es: [
      "Ridge (L₂), porque conserva los 20.000 genes en la ecuación final",
      "Lasso (L₁), porque su selección dispersa de variables anulará miles de genes irrelevantes e identificará el conjunto compacto de genes causales",
      "Mínimos Cuadrados Ordinarios sin regularización",
      "Regresión polinómica de 4º grado"
    ],
    explanation_en: "Biostatistical mastery! When true signal is sparse (few causal genes among thousands of noise transcripts), Lasso is the scientifically superior model.",
    explanation_es: "¡Gran criterio bioestadístico! Ante señales dispersas (pocos genes causales entre miles de transcritos irrelevantes), Lasso es el método científicamente idóneo."
  },
  l12_ex3: {
    category_en: "Concept", category_es: "Concepto",
    title_en: "Exercise 3: What Happens as Penalty Parameter λ Approaches Infinity?",
    title_es: "Ejercicio 3: ¿Qué Ocurre cuando la Penalización λ Tiende a Infinito?",
    question_en: "In both Ridge and Lasso regression: what happens to estimated slope coefficients β̂ as tuning parameter λ → ∞?",
    question_es: "Tanto en regresión Ridge como en Lasso: ¿qué ocurre con las pendientes estimadas β̂ cuando el parámetro de penalización λ → ∞?",
    options_en: [
      "All slope coefficients explode to infinity",
      "All slope coefficients shrink to exactly zero, leaving only the sample mean intercept ȳ (maximum bias, zero variance)",
      "Coefficients converge to ordinary OLS estimates",
      "Model R² reaches 1.00"
    ],
    options_es: [
      "Todos los coeficientes de pendiente explotan a infinito",
      "Todas las pendientes se contraen exactamente a cero, quedando únicamente el intercepto de la media ȳ (máximo sesgo, varianza nula)",
      "Los coeficientes convergen a las estimaciones ordinarias de MCO",
      "El R² del modelo alcanza 1,00"
    ],
    explanation_en: "Exact! Infinite penalty extinguishes all slope variance, collapsing the model to a flat horizontal line at ȳ (the ultimate extreme of the bias-variance tradeoff).",
    explanation_es: "¡Exacto! Una penalización infinita elimina toda la varianza de los coeficientes, colapsando el modelo a una recta horizontal plana en ȳ."
  }
};
