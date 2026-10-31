// Multilingual translations for Levels 1 to 12 (Phases 1 & 2)

module.exports = {
  1: {
    case_en: {
      title: "Case Study: The 'Average' Salary at Tech Startup NovaData",
      context: "You advise the works council of a tech startup with 10 employees. Management claims: 'Our average salary is €7,700 per month!' However, employees take home between €2,800 and €3,200 per month.",
      question: "What is statistically occurring here, and which measures of central tendency and dispersion provide an honest reflection?"
    },
    case_es: {
      title: "Caso de Estudio: El Salario 'Medio' en la Startup NovaData",
      context: "Asesoras al comité de empresa de una startup de 10 empleados. La dirección afirma: '¡Nuestro salario medio es de 7.700 € al mes!' Sin embargo, los empleados perciben entre 2.800 € y 3.200 € al mes.",
      question: "¿Qué fenómeno estadístico ocurre aquí y qué medidas de tendencia central y dispersión reflejan la realidad fielmente?"
    },
    theory_en: {
      summary: "The arithmetic mean is extremely sensitive to outliers. A single massive salary inflates the mean. The median (the middle observation) and the IQR are robust.",
      formulaExplain: "When the distribution is skewed, Median ≠ x̄. In such cases, always report the median and IQR.",
      keyConcepts: [
        { term: "Mean (x̄)", desc: "Sum of all values divided by N. Highly sensitive to outliers." },
        { term: "Median", desc: "The 50th percentile: 50% falls below, 50% above. Robust to extreme values." },
        { term: "Standard Deviation (SD)", desc: "Average distance to the mean. Explodes in the presence of outliers." },
        { term: "Interquartile Range (IQR)", desc: "Difference between 75th and 25th percentiles (Q3 - Q1)." }
      ]
    },
    theory_es: {
      summary: "La media aritmética es sumamente sensible a valores atípicos. Un único megasalario infla el promedio. La mediana (el valor central) y el rango intercuartílico (IQR) son robustos.",
      formulaExplain: "Si la distribución es asimétrica, Mediana ≠ x̄. En esos casos, reporta siempre la mediana y el IQR.",
      keyConcepts: [
        { term: "Media (x̄)", desc: "Suma de todos los valores dividida entre N. Extremadamente sensible a atípicos." },
        { term: "Mediana", desc: "El percentil 50: 50% por debajo, 50% por encima. Robusta ante extremos." },
        { term: "Desviación Estándar (DE)", desc: "Distancia promedio a la media. Se dispara ante valores atípicos." },
        { term: "Rango Intercuartílico (IQR)", desc: "Diferencia entre el percentil 75 y el percentil 25 (Q3 - Q1)." }
      ]
    },
    simulation_en: {
      name: "Outlier Impact Simulator",
      description: "Adjust the CEO salary slider. Watch how the mean skyrockets while the median remains rock-solid!"
    },
    simulation_es: {
      name: "Simulador del Impacto de Atípicos",
      description: "Desplaza el salario del CEO. Observa cómo la media se dispara mientras la mediana se mantiene inalterable."
    },
    interpretation_en: {
      title: "Model & Output Interpretation",
      recommendation: "Advise management and the board to report median and IQR for income and wait-time distributions.",
      metrics: [
        { label: "Arithmetic Mean", note: "Distorted by the single CEO outlier!" },
        { label: "Median", note: "Representative of the typical employee" },
        { label: "Standard Deviation (SD)", note: "Severely inflated dispersion metric" },
        { label: "IQR (Q3 - Q1)", note: "True compact dispersion of the middle 50%" }
      ]
    },
    interpretation_es: {
      title: "Interpretación del Modelo y Salida",
      recommendation: "Aconseja a la dirección reportar la mediana y el IQR en distribuciones de salarios y tiempos de espera.",
      metrics: [
        { label: "Media Aritmética", note: "¡Completamente distorsionada por el atípico del CEO!" },
        { label: "Mediana", note: "Representativa del empleado típico" },
        { label: "Desviación Estándar (DE)", note: "Métrica de dispersión inflada" },
        { label: "IQR (Q3 - Q1)", note: "Dispersión compacta real del 50% central" }
      ]
    },
    quiz_en: {
      question: "When do you prefer the median over the arithmetic mean as the measure of central tendency?",
      options: [
        "When data is symmetrically distributed and minimal estimation variance is strictly required",
        "When facing skewed distributions or extreme outliers (robust 50% breakdown point)",
        "When observations are discrete and modeled via a Poisson process",
        "Never, because the arithmetic mean always minimizes the sum of absolute deviations more effectively"
      ],
      explanation: "Correct! The median is a robust estimator with a 50% breakdown point, unaffected by extreme tail values or skewness."
    },
    quiz_es: {
      question: "¿Cuándo se prefiere la mediana frente a la media aritmética como medida de localización central?",
      options: [
        "Cuando los datos se distribuyen simétricamente y se requiere mínima varianza de estimación",
        "Cuando hay distribuciones asimétricas o valores atípicos extremos (medida robusta con punto de ruptura del 50%)",
        "Cuando las observaciones son discretas y se modelan mediante una distribución de Poisson",
        "Nunca, porque la media aritmética siempre minimiza la suma de desviaciones absolutas con mayor precisión"
      ],
      explanation: "¡Correcto! La mediana es un estimador robusto (punto de ruptura del 50%) inmune a colas pesadas o asimetrías severas."
    }
  },

  2: {
    case_en: {
      title: "Case Study: Quality Control of Digital Blood Pressure Monitors",
      context: "A medical device manufacturer produces blood pressure monitors. Pressure readings follow a normal distribution with μ = 120 mmHg and σ = 2 mmHg. A monitor deviating by more than 4 mmHg is rejected.",
      question: "Statistically, what percentage of monitors will fall outside acceptable tolerance boundaries?"
    },
    case_es: {
      title: "Caso de Estudio: Control de Calidad de Tensiómetros Digitales",
      context: "Un fabricante médico produce tensiómetros. Las lecturas de presión siguen una distribución normal con μ = 120 mmHg y σ = 2 mmHg. Se rechaza cualquier monitor con desviación superior a 4 mmHg.",
      question: "¿Qué porcentaje de tensiómetros quedará estadísticamente fuera de los límites de tolerancia aceptables?"
    },
    theory_en: {
      summary: "The normal distribution (Gaussian curve) is symmetric about the mean μ. Every measurement can be transformed into a Z-score: how many standard deviations the observation lies from the mean.",
      formulaExplain: "A Z-score of +2.0 means the measurement sits exactly 2 standard deviations above the population mean.",
      keyConcepts: [
        { term: "Z-score", desc: "Z = (X - μ) / σ. Quantifies relative distance from the mean." },
        { term: "68% Rule", desc: "68.27% of all observations lie within ± 1 SD [μ - σ, μ + σ]." },
        { term: "95% Rule", desc: "95.45% lie within ± 2 SD (exactly 95% at ± 1.96 SD)." },
        { term: "99.7% Rule", desc: "99.73% lie within ± 3 SD. Values beyond are rare statistical anomalies." }
      ]
    },
    theory_es: {
      summary: "La distribución normal (campana de Gauss) es simétrica respecto a la media μ. Cada medición puede convertirse en una puntuación Z: cuántas desviaciones estándar se aleja de la media.",
      formulaExplain: "Una puntuación Z de +2,0 indica que el valor se encuentra exactamente 2 desviaciones estándar sobre la media poblacional.",
      keyConcepts: [
        { term: "Puntuación Z", desc: "Z = (X - μ) / σ. Cuantifica la distancia relativa a la media." },
        { term: "Regla del 68%", desc: "El 68,27% de las observaciones cae dentro de ± 1 DE [μ - σ, μ + σ]." },
        { term: "Regla del 95%", desc: "El 95,45% cae dentro de ± 2 DE (exactamente el 95% en ± 1,96 DE)." },
        { term: "Regla del 99.7%", desc: "El 99,73% cae dentro de ± 3 DE. Valores más allá son anomalías excepcionales." }
      ]
    },
    simulation_en: {
      name: "Gaussian Curve & Z-score Calculator",
      description: "Adjust σ and the rejection threshold. Observe in real time which proportion falls into the critical rejection tails."
    },
    simulation_es: {
      name: "Campana de Gauss y Calculadora de Puntuación Z",
      description: "Ajusta σ y el umbral de rechazo. Observa en tiempo real qué porcentaje cae en las colas críticas de descarte."
    },
    interpretation_en: {
      title: "Model & Quality Decision",
      recommendation: "Calibrate assembly sensors if rejection rates exceed 4.55% (the theoretical 2-tailed threshold).",
      metrics: [
        { label: "Lower Cutoff (-2 SD)", note: "116.0 mmHg (P(Z < -2) = 2.28%)" },
        { label: "Upper Cutoff (+2 SD)", note: "124.0 mmHg (P(Z > +2) = 2.28%)" },
        { label: "Total Rejection Rate", note: "4.55% of the total batch production" },
        { label: "Process Quality (Cp)", note: "Cp = 1.00 (Standard industrial baseline)" }
      ]
    },
    interpretation_es: {
      title: "Interpretación del Modelo y Decisión de Calidad",
      recommendation: "Recalibra los sensores de la línea si la tasa de rechazo supera el 4,55% (umbral teórico bilateral).",
      metrics: [
        { label: "Límite Inferior (-2 DE)", note: "116,0 mmHg (P(Z < -2) = 2,28%)" },
        { label: "Límite Superior (+2 DE)", note: "124,0 mmHg (P(Z > +2) = 2,28%)" },
        { label: "Tasa Total de Rechazo", note: "4,55% de toda la producción del lote" },
        { label: "Calidad del Proceso (Cp)", note: "Cp = 1,00 (Línea de base industrial)" }
      ]
    },
    quiz_en: {
      question: "What does a Z-score of -1.96 signify in a normal probability distribution?",
      options: [
        "The observation is 1.96 units below the median in original scale units",
        "The value lies 1.96 standard deviations below the population mean (exactly 2.5% of the population scores lower)",
        "The cumulative upper-tail probability P(Z > -1.96) is exactly equal to 2.5%",
        "The confidence interval of the sample has a width of 1.96 standard errors"
      ],
      explanation: "Superb! The Z-score expresses exactly how many standard deviations an observation falls above (+) or below (-) the mean. At Z = -1.96, exactly 2.5% sits in the lower tail."
    },
    quiz_es: {
      question: "¿Qué representa una puntuación Z de -1,96 en una distribución de probabilidad normal?",
      options: [
        "La observación está a 1,96 unidades de medida bajo la mediana en su escala original",
        "El valor se sitúa a 1,96 desviaciones estándar bajo la media poblacional (exactamente el 2,5% puntúa por debajo)",
        "La probabilidad acumulada en la cola derecha P(Z > -1,96) es exactamente igual al 2,5%",
        "El intervalo de confianza de la muestra tiene un ancho total de 1,96 errores estándar"
      ],
      explanation: "¡Excelente! La puntuación Z expresa cuántas desviaciones estándar dista una observación de la media. En Z = -1,96, exactamente el 2,5% de la masa de probabilidad reside en la cola inferior."
    }
  },

  3: {
    case_en: {
      title: "Case Study: Helpdesk Wait Times (Heavily Skewed Data)",
      context: "A software helpdesk records wait times. 80% of calls are answered within 1 minute, but 5% wait 45 minutes (extreme positive exponential skew). The support manager asks: 'Can we apply standard normal statistics to our daily average wait time?'",
      question: "Why does the Central Limit Theorem allow us to use normal inference on sample means despite deeply non-normal raw times?"
    },
    case_es: {
      title: "Caso de Estudio: Tiempos de Espera en Soporte Técnico (Datos Muy Asimétricos)",
      context: "El soporte técnico de una empresa tecnológica registra tiempos de espera. El 80% de llamadas se atiende en 1 minuto, pero el 5% espera 45 minutos (asimetría exponencial positiva extrema). El jefe de soporte pregunta: '¿Podemos aplicar estadística normal al promedio diario?'",
      question: "¿Por qué el Teorema del Límite Central nos permite utilizar inferencia normal en las medias muestrales a pesar de datos originales marcadamente asimétricos?"
    },
    theory_en: {
      summary: "The Central Limit Theorem (CLT) guarantees that for any population with finite mean μ and variance σ², the distribution of the sample mean x̄ converges to a normal distribution as N grows.",
      formulaExplain: "As sample size N increases, the spread of the sample mean contracts at rate 1/√N, forming a Gaussian bell curve regardless of the underlying population shape.",
      keyConcepts: [
        { term: "Sampling Distribution", desc: "The probability distribution of a sample statistic across repeated samples." },
        { term: "Standard Error (SE)", desc: "SE = σ / √N. The standard deviation of the sample mean." },
        { term: "Law of Large Numbers", desc: "As N increases, sample mean x̄ converges almost surely to population mean μ." },
        { term: "Sample Size Rule (N ≥ 30)", desc: "For moderate skewness, N ≥ 30 yields excellent normal approximations." }
      ]
    },
    theory_es: {
      summary: "El Teorema del Límite Central (TLC) garantiza que, para cualquier población con media finita μ y varianza σ², la distribución de la media muestral x̄ converge a una normal conforme N crece.",
      formulaExplain: "A medida que el tamaño muestral N aumenta, la dispersión de la media muestral se contrae a razón de 1/√N, formando una campana de Gauss sin importar la forma de la población original.",
      keyConcepts: [
        { term: "Distribución Muestral", desc: "La distribución de probabilidad de un estimador a través de infinitas muestras repetidas." },
        { term: "Error Estándar (EE)", desc: "EE = σ / √N. La desviación estándar de la media muestral." },
        { term: "Ley de Grandes Números", desc: "Conforme N aumenta, la media muestral x̄ converge de forma casi segura a la media poblacional μ." },
        { term: "Regla Muestral (N ≥ 30)", desc: "Para asimetrías moderadas, N ≥ 30 proporciona aproximaciones normales excepcionales." }
      ]
    },
    simulation_en: {
      name: "CLT Generator: From Skewed to Bell-Shaped",
      description: "Draw 1,000 samples of size N from an exponential or uniform distribution. Watch how the histogram of sample means transforms into a pristine Gaussian bell!"
    },
    simulation_es: {
      name: "Generador del TLC: De Asimétrico a Campana de Gauss",
      description: "Extrae 1.000 muestras de tamaño N a partir de una distribución exponencial o uniforme. ¡Comprueba cómo el histograma de medias muestrales transmuta en una perfecta campana de Gauss!"
    },
    interpretation_en: {
      title: "Model & Practical Decision",
      recommendation: "With N = 50 calls daily, the daily mean wait time is safely normal, permitting Gaussian hypothesis tests.",
      metrics: [
        { label: "Population Skewness (Raw)", note: "+2.85 (Extreme positive tail)" },
        { label: "Sample Mean Skewness (N=50)", note: "+0.40 (Virtually symmetric)" },
        { label: "Theoretical SE (σ/√50)", note: "0.85 minutes" },
        { label: "Empirical Sampling SD", note: "0.84 minutes (Flawless match)" }
      ]
    },
    interpretation_es: {
      title: "Interpretación del Modelo y Decisión Práctica",
      recommendation: "Con N = 50 llamadas diarias, el promedio diario es fiable y normalmente distribuido, permitiendo contrastes de hipótesis gaussianos.",
      metrics: [
        { label: "Asimetría Poblacional (Cruda)", note: "+2,85 (Cola positiva extrema)" },
        { label: "Asimetría de la Media (N=50)", note: "+0,40 (Prácticamente simétrica)" },
        { label: "EE Teórico (σ/√50)", note: "0,85 minutos" },
        { label: "DE Muestral Empírica", note: "0,84 minutos (Concordancia perfecta)" }
      ]
    },
    quiz_en: {
      question: "What happens to the standard error (SE = σ / √N) of the mean if you quadruple sample size N (e.g. from 25 to 100)?",
      options: [
        "The SE becomes 4x smaller, as precision scales linearly with sample size N",
        "The SE halves (becomes 2x smaller, because √4 = 2)",
        "The SE becomes 16x smaller, since variance reduction scales with N²",
        "The population standard deviation σ also halves proportionally"
      ],
      explanation: "Exact! Due to the square root in the denominator (√N), quadrupling sample size halves estimation error."
    },
    quiz_es: {
      question: "¿Qué ocurre con el error estándar (EE = σ / √N) de la media si cuadruplicas el tamaño de muestra N (ej. de 25 a 100)?",
      options: [
        "El EE se reduce 4 veces, ya que la precisión escala linealmente con N",
        "El EE se reduce a la mitad (2 veces menor, porque √4 = 2)",
        "El EE se reduce 16 veces, ya que la reducción de varianza escala cuadráticamente con N²",
        "La desviación estándar poblacional σ también se reduce a la mitad proporcionalmente"
      ],
      explanation: "¡Exacto! Debido a la raíz cuadrada en el denominador (√N), multiplicar por 4 el tamaño muestral reduce el error de estimación exactamente a la mitad."
    }
  },

  4: {
    case_en: {
      title: "Case Study: Customer Satisfaction Survey (CSAT)",
      context: "A retail company surveys N = 400 customers. The average satisfaction score is 7.4 on a 10-point scale with s = 1.2. The CEO asks: 'Can we conclude with 95% certainty that the true score of all customers lies between 7.28 and 7.52?'",
      question: "What does a 95% Confidence Interval truly communicate in rigorous scientific statistics?"
    },
    case_es: {
      title: "Caso de Estudio: Encuesta de Satisfacción del Cliente (CSAT)",
      context: "Una empresa encuesta a N = 400 clientes. La satisfacción media es 7,4 sobre 10 con s = 1,2. El director pregunta: '¿Podemos asegurar con 95% de certeza que la verdadera satisfacción de todos los clientes está entre 7,28 y 7,52?'",
      question: "¿Qué comunica formalmente un Intervalo de Confianza del 95% en la estadística científica rigurosa?"
    },
    theory_en: {
      summary: "A confidence interval provides a plausible range for an unknown fixed population parameter. In frequentist statistics, the true parameter is fixed; the calculated interval bounds vary randomly from sample to sample.",
      formulaExplain: "If we repeat the experiment 100 times, exactly 95 of the 100 constructed intervals will enclose the true population mean μ.",
      keyConcepts: [
        { term: "Confidence Level (1 - α)", desc: "The long-run coverage proportion across repeated hypothetical trials." },
        { term: "Margin of Error", desc: "Z* · (s / √N). Determines interval width." },
        { term: "Frequentist Trap", desc: "Do not say: 'There is a 95% probability that μ lies in this interval'. Once computed, μ is either inside (1) or outside (0)." },
        { term: "Precision vs Confidence", desc: "Higher confidence requires a wider interval for fixed sample size N." }
      ]
    },
    theory_es: {
      summary: "Un intervalo de confianza ofrece un rango plausible para un parámetro poblacional fijo desconocido. En la estadística frecuentista, el parámetro poblacional es fijo; los límites del intervalo varían aleatoriamente en cada muestra.",
      formulaExplain: "Si repitiéramos el experimento 100 veces, exactamente 95 de los 100 intervalos construidos contendrán la verdadera media poblacional μ.",
      keyConcepts: [
        { term: "Nivel de Confianza (1 - α)", desc: "La proporción de cobertura a largo plazo en infinitas muestras idénticas repetidas." },
        { term: "Margen de Error", desc: "Z* · (s / √N). Determina la amplitud del intervalo." },
        { term: "Trampa Frecuentista", desc: "Evita afirmar: 'Hay un 95% de probabilidad de que μ esté en este intervalo concreto'. Una vez calculado, μ está dentro (1) o fuera (0)." },
        { term: "Precisión vs Confianza", desc: "A mayor confianza requerida, mayor amplitud del intervalo para un tamaño N dado." }
      ]
    },
    simulation_en: {
      name: "100 Samples Visualizer: Catch the Truth",
      description: "Generate 100 simultaneous 95% confidence intervals from the same ground-truth population. Count how many intervals capture μ and see the ~5 misses turn red!"
    },
    simulation_es: {
      name: "Visualizador de 100 Muestras: Atrapa el Parámetro Real",
      description: "Genera simultáneamente 100 intervalos de confianza al 95% de una misma población. Cuenta cuántos contienen a μ y observa cómo aproximadamente 5 fallos se tiñen de rojo."
    },
    interpretation_en: {
      title: "Practical Decision Making",
      recommendation: "Report the 95% CI [7.28; 7.52] along with the point estimate. Since 7.0 lies well below the lower bound, satisfaction comfortably exceeds target.",
      metrics: [
        { label: "Point Estimate (x̄)", note: "7.40 / 10" },
        { label: "Margin of Error (ME)", note: "± 0.118 (Z* = 1.96)" },
        { label: "95% Confidence Interval", note: "[7.28, 7.52]" },
        { label: "Benchmark Target (7.00)", note: "Outside interval (Statistically superior)" }
      ]
    },
    interpretation_es: {
      title: "Toma de Decisiones Práctica",
      recommendation: "Informa el IC al 95% [7,28; 7,52] junto a la estimación puntual. Al quedar el objetivo 7,00 por debajo del límite inferior, la satisfacción supera la meta de forma concluyente.",
      metrics: [
        { label: "Estimación Puntual (x̄)", note: "7,40 / 10" },
        { label: "Margen de Error (ME)", note: "± 0,118 (Z* = 1,96)" },
        { label: "Intervalo de Confianza al 95%", note: "[7,28; 7,52]" },
        { label: "Meta de Referencia (7,00)", note: "Fuera del intervalo (Estadísticamente superior)" }
      ]
    },
    quiz_en: {
      question: "What is the correct frequentist interpretation of a calculated 95% Confidence Interval [7.28, 7.52]?",
      options: [
        "There is a 95% probability that the true population mean μ lies between 7.28 and 7.52",
        "If this sampling procedure is repeated infinite times, 95% of the calculated intervals will contain the true parameter μ",
        "95% of all surveyed customers scored between 7.28 and 7.52 on the survey",
        "The probability of committing a Type I error is exactly 5% in this specific sample"
      ],
      explanation: "Spot-on! In frequentist philosophy, the true parameter μ is an immutable constant. It is the interval boundaries that vary randomly across hypothetical replications."
    },
    quiz_es: {
      question: "¿Cuál es la interpretación frecuentista rigurosa de un Intervalo de Confianza al 95% calculado como [7,28; 7,52]?",
      options: [
        "Hay una probabilidad del 95% de que la verdadera media poblacional μ esté entre 7,28 y 7,52",
        "Si este procedimiento de muestreo se repitiese infinitas veces, el 95% de los intervalos calculados contendría el verdadero parámetro μ",
        "El 95% de los clientes encuestados puntuó entre 7,28 y 7,52 en su respuesta",
        "La probabilidad de cometer un error Tipo I en esta muestra específica es exactamente del 5%"
      ],
      explanation: "¡Riguroso y certero! Para los frecuentistas el parámetro μ es una constante fija desconocida. Son los límites del intervalo los que varían aleatoriamente entre réplicas muestrales."
    }
  },

  5: {
    case_en: {
      title: "Case Study: Does the New Sleep Medication SomnoCalm Work?",
      context: "A randomized controlled trial compares a new sleeping pill against placebo across N = 60 insomniacs. Sleep duration increases by 32 minutes with p = 0.041. The research team celebrates: 'We proved the drug is highly clinically effective!'",
      question: "Does p = 0.041 prove that the treatment effect is large, clinically meaningful, and replicable?"
    },
    case_es: {
      title: "Caso de Estudio: ¿Funciona el Nuevo Somnífero SomnoCalm?",
      context: "Un ensayo aleatorizado compara un nuevo somnífero con placebo en N = 60 pacientes con insomnio. El tiempo de sueño aumenta 32 minutos con p = 0,041. El equipo celebra: '¡Hemos demostrado que el fármaco es altamente eficaz en la clínica!'",
      question: "¿Acredita un valor p = 0,041 que el efecto del tratamiento sea grande, clínicamente relevante y replicable?"
    },
    theory_en: {
      summary: "A p-value measures only one thing: how improbable observed data (or more extreme) would be if the null hypothesis H₀ were strictly true. It does NOT state whether H₀ is true, nor does it measure effect magnitude.",
      formulaExplain: "p = P(Data ≥ Observed | H₀ is true). A tiny p-value only rejects random chance as the sole explanation; effect size (Cohen's d) determines real clinical relevance.",
      keyConcepts: [
        { term: "Null Hypothesis (H₀)", desc: "Baseline presumption of no effect (μ₁ - μ₂ = 0)." },
        { term: "Type I Error (α)", desc: "False positive: rejecting H₀ when H₀ is actually true (set at 0.05)." },
        { term: "Type II Error (β)", desc: "False negative: failing to reject H₀ when a true effect exists." },
        { term: "Statistical Power (1 - β)", desc: "Probability of detecting a true effect when it genuinely exists." },
        { term: "Cohen's d", desc: "Standardized effect size: d = (x̄₁ - x̄₂) / s_pooled." }
      ]
    },
    theory_es: {
      summary: "El valor p mide una única cosa: qué tan improbables serían los datos observados (o más extremos) si la hipótesis nula H₀ fuese estrictamente cierta. NO mide la probabilidad de H₀ ni la magnitud del efecto.",
      formulaExplain: "p = P(Datos ≥ Observados | H₀ es cierta). Un valor p pequeño solo descarta el azar puro como explicación; el tamaño del efecto (d de Cohen) determina la relevancia clínica real.",
      keyConcepts: [
        { term: "Hipótesis Nula (H₀)", desc: "Presunción basal de ausencia de efecto (μ₁ - μ₂ = 0)." },
        { term: "Error Tipo I (α)", desc: "Falso positivo: rechazar H₀ cuando H₀ es realmente cierta (habitualmente 0,05)." },
        { term: "Error Tipo II (β)", desc: "Falso negativo: no rechazar H₀ cuando existe un efecto genuino." },
        { term: "Potencia Estadística (1 - β)", desc: "Probabilidad de detectar un efecto real cuando verdaderamente existe." },
        { term: "d de Cohen", desc: "Tamaño del efecto estandarizado: d = (x̄₁ - x̄₂) / s_agrupada." }
      ]
    },
    simulation_en: {
      name: "T-test & Effect Size Simulator",
      description: "Shift the true effect size d and sample size N. Watch how the t-distribution shifts, how statistical power climbs to 80%+, and observe when p drops below 0.05."
    },
    simulation_es: {
      name: "Simulador de Prueba t y Tamaño del Efecto",
      description: "Modifica el tamaño del efecto d y el tamaño muestral N. Observa el desplazamiento de la distribución t, cómo la potencia alcanza el 80%+ y en qué punto p desciende de 0,05."
    },
    interpretation_en: {
      title: "Statistical vs Practical Relevance",
      recommendation: "Although p = 0.041 reaches statistical significance at α = 0.05, an effect size of d = 0.28 represents a modest gain. Evaluate side effects and costs before adoption.",
      metrics: [
        { label: "Observed p-value", note: "p = 0.041 (Statistically significant at α = 0.05)" },
        { label: "Cohen's d Effect Size", note: "d = 0.28 (Small clinical effect)" },
        { label: "95% CI for Difference", note: "[+1.5 min, +62.5 min] (Wide uncertainty)" },
        { label: "Post-hoc Power", note: "54% (Substantially underpowered trial)" }
      ]
    },
    interpretation_es: {
      title: "Relevancia Estadística frente a Clínica",
      recommendation: "Aunque p = 0,041 alcanza significación con α = 0,05, un tamaño del efecto d = 0,28 representa una ganancia modesta. Valora efectos adversos y costes antes de adoptarlo.",
      metrics: [
        { label: "Valor p Observado", note: "p = 0,041 (Significativo con α = 0,05)" },
        { label: "Tamaño del Efecto (d)", note: "d = 0,28 (Efecto clínico pequeño)" },
        { label: "IC al 95% de la Diferencia", note: "[+1,5 min; +62,5 min] (Gran incertidumbre)" },
        { label: "Potencia Obtenida", note: "54% (Estudio marcadamente falto de potencia)" }
      ]
    },
    quiz_en: {
      question: "What is the exact formal definition of a p-value in classical null hypothesis testing?",
      options: [
        "The probability that the null hypothesis H₀ is objectively true given our empirical data",
        "The probability of obtaining a test statistic at least as extreme as observed, assuming the null hypothesis H₀ is strictly true",
        "The probability that the alternative hypothesis H₁ is false",
        "The proportion of future replications that will fail to achieve statistical significance"
      ],
      explanation: "Flawless! A p-value is the conditional probability P(Test Statistic ≥ Observed | H₀). It never states the probability of a hypothesis itself."
    },
    quiz_es: {
      question: "¿Cuál es la definición formal exacta de un valor p en el contraste clásico de hipótesis nula?",
      options: [
        "La probabilidad de que la hipótesis nula H₀ sea objetivamente cierta dados los datos empíricos",
        "La probabilidad de obtener un estadístico de prueba al menos tan extremo como el observado, asumiendo que la hipótesis nula H₀ es estrictamente cierta",
        "La probabilidad de que la hipótesis alternativa H₁ sea falsa",
        "La proporción de réplicas futuras que fracasará en alcanzar significación estadística"
      ],
      explanation: "¡Precisión impecable! El valor p es la probabilidad condicional P(Estadístico ≥ Observado | H₀). Jamás cuantifica la probabilidad de que la hipótesis sea cierta."
    }
  },

  6: {
    case_en: {
      title: "Case Study: Predicting Exam Grades from Study Hours",
      context: "A university tracks N = 80 statistics students: weekly study hours (X) and final exam grades (Y on a 1–10 scale). The best fit line is Grade = 2.5 + 0.20 × Hours.",
      question: "How does Ordinary Least Squares (OLS) identify the unique line that mathematically minimizes prediction error?"
    },
    case_es: {
      title: "Caso de Estudio: Predecir Calificaciones según Horas de Estudio",
      context: "Una universidad monitoriza a N = 80 estudiantes de estadística: horas de estudio semanales (X) y calificación final (Y de 1 a 10). La recta ajustada es Nota = 2,5 + 0,20 × Horas.",
      question: "¿Cómo identifica el método de Mínimos Cuadrados Ordinarios (MCO) la recta que minimiza de forma matemática el error de predicción?"
    },
    theory_en: {
      summary: "Ordinary Least Squares (OLS) minimizes the sum of squared vertical residuals: SSE = Σ(y_i - ŷ_i)². By squaring deviations, larger errors are penalized more heavily, yielding the optimal unbiased linear predictor under Gauss-Markov assumptions.",
      formulaExplain: "Slope β₁ = Cov(X, Y) / Var(X). Intercept β₀ = ȳ - β₁ · x̄. These closed-form normal equations guarantee a unique analytical global minimum.",
      keyConcepts: [
        { term: "Intercept (β₀)", desc: "The expected baseline value of Y when all predictors X equal zero." },
        { term: "Slope (β₁)", desc: "Expected marginal change in Y for each 1-unit increase in predictor X." },
        { term: "Residual (e_i)", desc: "e_i = y_i - ŷ_i. The vertical gap between observation and regression line." },
        { term: "Gauss-Markov Theorem", desc: "Under standard OLS assumptions, OLS estimators are BLUE (Best Linear Unbiased Estimator)." }
      ]
    },
    theory_es: {
      summary: "Mínimos Cuadrados Ordinarios (MCO/OLS) minimiza la suma de residuos verticales al cuadrado: SCE = Σ(y_i - ŷ_i)². Elevar al cuadrado penaliza con mayor dureza los grandes desvíos, produciendo el estimador lineal insesgado óptimo según Gauss-Markov.",
      formulaExplain: "Pendiente β₁ = Cov(X, Y) / Var(X). Intercepto β₀ = ȳ - β₁ · x̄. Estas ecuaciones normales analíticas garantizan un mínimo global único.",
      keyConcepts: [
        { term: "Intercepto (β₀)", desc: "El valor basal esperado de Y cuando los predictores X equivalen a cero." },
        { term: "Pendiente (β₁)", desc: "Cambio marginal esperado en Y por cada incremento de 1 unidad en el predictor X." },
        { term: "Residuo (e_i)", desc: "e_i = y_i - ŷ_i. La distancia vertical entre el dato observado y la recta predicha." },
        { term: "Teorema de Gauss-Markov", desc: "Bajo supuestos clásicos, los estimadores MCO son MELI (Mejor Estimador Lineal Insesgado)." }
      ]
    },
    simulation_en: {
      name: "OLS Line Fitter & Squared Residuals",
      description: "Manually rotate the slope and adjust the intercept. Watch the sum of squared errors (SSE) fluctuate and discover why OLS mathematically locks onto the absolute minimum!"
    },
    simulation_es: {
      name: "Ajustador de Recta MCO y Residuos Cuadráticos",
      description: "Gira la pendiente y ajusta el intercepto manualmente. Observa cómo fluctúa la suma de cuadrados de error (SCE) y comprueba por qué MCO converge al mínimo absoluto."
    },
    interpretation_en: {
      title: "Model & Policy Guidance",
      recommendation: "Every additional 5 hours of study increases expected score by +1.0 grade point. Encourage at least 15 study hours weekly.",
      metrics: [
        { label: "Intercept (β₀)", note: "2.50 (Baseline grade without studying)" },
        { label: "Slope (β₁)", note: "+0.20 per study hour (p < 0.001)" },
        { label: "R-squared (R²)", note: "0.64 (64% of grade variance explained)" },
        { label: "Residual Std Error", note: "0.82 grade points" }
      ]
    },
    interpretation_es: {
      title: "Interpretación del Modelo y Orientación",
      recommendation: "Cada 5 horas adicionales de estudio incrementan la calificación esperada en +1,0 punto. Fomenta al menos 15 horas semanales.",
      metrics: [
        { label: "Intercepto (β₀)", note: "2,50 (Calificación basal sin estudiar)" },
        { label: "Pendiente (β₁)", note: "+0,20 por hora de estudio (p < 0,001)" },
        { label: "Coeficiente R²", note: "0,64 (64% de la varianza explicada)" },
        { label: "Error Estándar Residual", note: "0,82 puntos de calificación" }
      ]
    },
    quiz_en: {
      question: "In the fitted regression model Grade = 2.5 + 0.20 × Hours, what is the precise interpretation of slope coefficient 0.20?",
      options: [
        "A student who studies 20 hours will receive an expected score increase of 2.5 grade points",
        "For each additional hour of study per week, expected final grade increases by 0.20 points on average",
        "20% of final grade variation is caused by hours studied",
        "The correlation coefficient between study hours and exam grade is r = 0.20"
      ],
      explanation: "Superb! In simple linear regression, the slope coefficient measures the expected marginal change in Y per unit increase in X."
    },
    quiz_es: {
      question: "En el modelo ajustado Nota = 2,5 + 0,20 × Horas, ¿cuál es la interpretación exacta del coeficiente de pendiente 0,20?",
      options: [
        "Un estudiante que estudie 20 horas tendrá un incremento esperado de 2,5 puntos en su nota",
        "Por cada hora adicional de estudio por semana, la calificación final esperada se incrementa en promedio 0,20 puntos",
        "El 20% de la variación en las notas finales está causada directamente por las horas de estudio",
        "El coeficiente de correlación de Pearson entre horas y nota es exactamente r = 0,20"
      ],
      explanation: "¡Excelente! En regresión lineal simple, la pendiente cuantifica el cambio medio esperado en la variable respuesta Y por cada unidad adicional del predictor X."
    }
  },

  7: {
    case_en: {
      title: "Case Study: Predicting House Prices & Noise Variables",
      context: "A real estate analytics agency models sale prices (N = 300 homes). A baseline model with square footage achieves R² = 0.65. Adding 8 random noise variables (lottery numbers, agent shoe size) boosts R² to 0.71, but Adjusted R² drops to 0.62.",
      question: "Why does standard R² automatically increase when adding useless noise, and why does Adjusted R² protect against overfitting?"
    },
    case_es: {
      title: "Caso de Estudio: Predecir Precios Inmobiliarios y Variables de Ruido",
      context: "Una agencia inmobiliaria modela precios de venta (N = 300 viviendas). El modelo basal con superficie habitable alcanza R² = 0,65. Añadir 8 variables aleatorias de ruido (lotería, talla de calzado) eleva R² a 0,71, pero el R² Ajustado cae a 0,62.",
      question: "¿Por qué el R² ordinario aumenta mecánicamente al agregar ruido irrelevante y por qué el R² Ajustado previene el sobreajuste?"
    },
    theory_en: {
      summary: "R² measures the proportion of total outcome variance explained by the model: R² = 1 - (SSE / SST). Mathematically, R² can NEVER decrease when adding predictors, even pure random noise. Adjusted R² penalizes degrees of freedom consumed.",
      formulaExplain: "Adjusted R² = 1 - [(1 - R²) · (N - 1) / (N - k - 1)]. It increases only if a newly added predictor improves the model more than expected by chance alone.",
      keyConcepts: [
        { term: "Total Sum of Squares (SST)", desc: "Σ(y_i - ȳ)². Total raw variance of outcome Y." },
        { term: "Residual Sum of Squares (SSE)", desc: "Σ(y_i - ŷ_i)². Variance left unexplained by model." },
        { term: "Adjusted R²", desc: "Penalizes model complexity (k predictors) to prevent overfitting." },
        { term: "Overall F-test", desc: "Tests joint hypothesis that all slope coefficients equal zero (H₀: β₁ = ... = β_k = 0)." }
      ]
    },
    theory_es: {
      summary: "El R² cuantifica la proporción de varianza total explicada por el modelo: R² = 1 - (SCE / SCT). Matemáticamente, el R² ordinario NUNCA puede descender al añadir predictores, incluso ruido aleatorio. El R² Ajustado penaliza los grados de libertad consumidos.",
      formulaExplain: "R² Ajustado = 1 - [(1 - R²) · (N - 1) / (N - k - 1)]. Solo aumenta si el predictor recién incorporado mejora el modelo más de lo atribuible al puro azar.",
      keyConcepts: [
        { term: "Suma Total de Cuadrados (SCT)", desc: "Σ(y_i - ȳ)². La variabilidad total observada en la variable respuesta Y." },
        { term: "Suma de Cuadrados Residual (SCE)", desc: "Σ(y_i - ŷ_i)². La porción de varianza no explicada por el modelo." },
        { term: "R² Ajustado", desc: "Penaliza la complejidad (k predictores) para evitar el sobreajuste empírico." },
        { term: "Prueba F Global", desc: "Contrasta la hipótesis conjunta de que todas las pendientes son nulas (H₀: β₁ = ... = β_k = 0)." }
      ]
    },
    simulation_en: {
      name: "R² vs Adjusted R² Stress Test",
      description: "Inject 1 to 20 pure random noise predictors into the model. Watch standard R² artificially climb while Adjusted R² plummets as degrees of freedom burn!"
    },
    simulation_es: {
      name: "Prueba de Estrés: R² vs R² Ajustado",
      description: "Inyecta de 1 a 20 predictores de puro ruido aleatorio. ¡Comprueba cómo el R² ordinario sube artificialmente mientras el R² Ajustado cae en picado al penalizar la complejidad!"
    },
    interpretation_en: {
      title: "Model Comparison & Selection",
      recommendation: "Reject the 9-predictor model. Retain the parsimonious model (Square footage + Bedrooms), as its Adjusted R² is highest and avoids spurious variance inflation.",
      metrics: [
        { label: "Standard R² (Noise Model)", note: "0.71 (Deceptive variance capture)" },
        { label: "Adjusted R² (Noise Model)", note: "0.62 (Severe degree-of-freedom penalty)" },
        { label: "Adjusted R² (Parsimonious)", note: "0.65 (True generalizable fit)" },
        { label: "F-test p-value for Noise", note: "p = 0.48 (Insignificant joint contribution)" }
      ]
    },
    interpretation_es: {
      title: "Comparación de Modelos y Selección",
      recommendation: "Descarta el modelo inflado de 9 predictores. Quédate con el modelo parsimonioso (Superficie + Dormitorios), cuyo R² Ajustado es superior y generalizable.",
      metrics: [
        { label: "R² Ordinario (Con Ruido)", note: "0,71 (Captura engañosa de varianza)" },
        { label: "R² Ajustado (Con Ruido)", note: "0,62 (Severa penalización por grados de libertad)" },
        { label: "R² Ajustado (Parsimonioso)", note: "0,65 (Ajuste genuino generalizable)" },
        { label: "Valor p de Prueba F (Ruido)", note: "p = 0,48 (Aporte conjunto insignificante)" }
      ]
    },
    quiz_en: {
      question: "What happens to standard R² when 5 completely uncorrelated random noise variables are added to an OLS regression?",
      options: [
        "Standard R² drops, as noise disrupts estimation of true regression coefficients",
        "Standard R² stays exactly identical or marginally increases, as sample correlation with noise in finite samples is rarely precisely zero",
        "Standard R² converges to Adjusted R² according to the Gauss-Markov theorem",
        "The F-test automatically inflates to compensate for the added degrees of freedom"
      ],
      explanation: "Exactly! In any finite sample, noise variables have minuscule accidental correlations with Y. Ordinary Least Squares exploits these, so standard R² can never decrease."
    },
    quiz_es: {
      question: "¿Qué le ocurre al R² ordinario cuando se añaden 5 variables de puro ruido aleatorio incorrelacionadas a una regresión MCO?",
      options: [
        "El R² ordinario desciende, ya que el ruido entorpece la estimación de los coeficientes reales",
        "El R² ordinario permanece idéntico o se incrementa ligeramente, pues en muestras finitas la correlación accidental con el ruido casi nunca es estrictamente cero",
        "El R² ordinario converge al R² Ajustado según el teorema de Gauss-Markov",
        "El estadístico F aumenta automáticamente para compensar los grados de libertad consumidos"
      ],
      explanation: "¡Exacto! En cualquier muestra finita, las variables aleatorias poseen leves correlaciones accidentales con Y. MCO las aprovecha para reducir la suma de cuadrados, por lo que R² jamás decrece."
    }
  },

  8: {
    case_en: {
      title: "Case Study: The 'Trumpet' in Corporate Profits (Heteroscedasticity)",
      context: "An economist regresses company annual profit on marketing spend across N = 150 firms. For small firms with €10k budgets, profits vary tightly around €25k. For large firms with €1M budgets, profits fluctuate wildly from -€500k to +€5M (expanding fan pattern).",
      question: "Why does this expanding trumpet pattern in residuals invalidate standard OLS p-values and standard errors?"
    },
    case_es: {
      title: "Caso de Estudio: La 'Trompeta' en Beneficios Empresariales (Heterocedasticidad)",
      context: "Un economista analiza el beneficio anual en función del presupuesto publicitario en N = 150 empresas. En empresas pequeñas (10.000 € de gasto), el beneficio oscila poco en torno a 25.000 €. En grandes corporaciones (1.000.000 €), oscila entre -500.000 € y +5.000.000 € (patrón en abanico).",
      question: "¿Por qué este patrón en abanico o trompeta en los residuos invalida los errores estándar y los valores p de MCO clásico?"
    },
    theory_en: {
      summary: "The Gauss-Markov theorem relies on 4 core diagnostic pillars (L.I.N.E.): Linearity, Independence, Normality of residuals, and Equal variance (Homoscedasticity). Heteroscedasticity produces biased standard errors, rendering hypothesis tests untrustworthy.",
      formulaExplain: "Var(ε_i | X) = σ² (Constant variance). When Var(ε_i | X) = σ_i², use White's heteroscedasticity-consistent robust standard errors (HC3) or a logarithmic transformation.",
      keyConcepts: [
        { term: "Linearity (L)", desc: "Residuals must scatter randomly around zero with no quadratic or curved trend." },
        { term: "Independence (I)", desc: "Observations must not be autocorrelated (Durbin-Watson ≈ 2.0)." },
        { term: "Normality (N)", desc: "Residuals should follow a straight diagonal on a Q-Q plot." },
        { term: "Equal Variance (E)", desc: "Homoscedasticity: residual band must remain constant across all fitted values Ŷ." }
      ]
    },
    theory_es: {
      summary: "El teorema de Gauss-Markov descansa en 4 pilares diagnósticos (L.I.N.E.): Linealidad, Independencia, Normalidad de residuos y Ecuanimidad de varianza (Homocedasticidad). La heterocedasticidad sesga los errores estándar e invalida los valores p.",
      formulaExplain: "Var(ε_i | X) = σ² (Varianza constante). Si Var(ε_i | X) = σ_i², es imprescindible aplicar errores estándar robustos de White (HC3) o transformación logarítmica.",
      keyConcepts: [
        { term: "Linealidad (L)", desc: "Los residuos deben dispersarse aleatoriamente en torno a cero sin curvaturas sistemáticas." },
        { term: "Independencia (I)", desc: "Las observaciones no deben presentar autocorrelación serial ni agrupamiento (Durbin-Watson ≈ 2,0)." },
        { term: "Normalidad (N)", desc: "Los residuos deben alinearse sobre la diagonal recta en un gráfico Q-Q." },
        { term: "Ecuanimidad Varianza (E)", desc: "Homocedasticidad: la dispersión residual debe ser homogénea para todos los valores predichos Ŷ." }
      ]
    },
    simulation_en: {
      name: "Residual Diagnostics & L.I.N.E. Lab",
      description: "Switch between clean homoscedastic data and trumpet heteroscedasticity. Observe how the residual plot instantly betrays assumption violations!"
    },
    simulation_es: {
      name: "Laboratorio de Diagnósticos de Residuos L.I.N.E.",
      description: "Alterna entre datos homocedásticos limpios y heterocedasticidad en abanico. ¡Comprueba cómo el gráfico de residuos delata de inmediato el incumplimiento de supuestos!"
    },
    interpretation_en: {
      title: "Diagnostic Assessment & Remedy",
      recommendation: "Breusch-Pagan test strongly rejects homoscedasticity (p < 0.001). Apply a log-log transformation ln(Profit) ~ ln(Marketing) or HC3 robust standard errors.",
      metrics: [
        { label: "Breusch-Pagan Test", note: "p = 0.0002 (Heteroscedasticity confirmed)" },
        { label: "Durbin-Watson Statistic", note: "1.98 (Residuals are independent)" },
        { label: "Shapiro-Wilk on Residuals", note: "W = 0.985, p = 0.18 (Normal residuals)" },
        { label: "Recommended Remedy", note: "HC3 Robust SEs or Log-transformation" }
      ]
    },
    interpretation_es: {
      title: "Evaluación Diagnóstica y Remedio",
      recommendation: "El test de Breusch-Pagan rechaza tajantemente la homocedasticidad (p < 0,001). Aplica transformación log-log o errores estándar robustos HC3.",
      metrics: [
        { label: "Prueba de Breusch-Pagan", note: "p = 0,0002 (Heterocedasticidad confirmada)" },
        { label: "Estadístico Durbin-Watson", note: "1,98 (Independencia de residuos válida)" },
        { label: "Shapiro-Wilk en Residuos", note: "W = 0,985, p = 0,18 (Residuos normales)" },
        { label: "Remedio Recomendado", note: "Errores Robustos HC3 o Transformación Log" }
      ]
    },
    quiz_en: {
      question: "What does an expanding trumpet pattern in a Residuals vs Fitted plot signal in linear regression?",
      options: [
        "Multicollinearity between independent predictors, inflating standard errors",
        "Heteroscedasticity: error variance increases with fitted values, biasing classical standard errors and p-values",
        "Severe non-linearity requiring a polynomial regression model",
        "Violation of residual normality, demanding non-parametric rank tests"
      ],
      explanation: "Masterful! A trumpet shape indicates variance grows with Ŷ (heteroscedasticity). OLS coefficient estimates remain unbiased, but ordinary standard errors are wrong."
    },
    quiz_es: {
      question: "¿Qué indica un patrón en abanico o trompeta en el gráfico de Residuos vs Valores Ajustados en regresión lineal?",
      options: [
        "Multicolinealidad entre predictores independientes, inflando los errores estándar",
        "Heterocedasticidad: la varianza del error aumenta con los valores predichos, invalidando los errores estándar clásicos y los valores p",
        "No linealidad severa que exige ajustar un polinomio de orden superior",
        "Violación de normalidad en los residuos, que obliga a emplear pruebas no paramétricas de rangos"
      ],
      explanation: "¡Magistral! La forma de trompeta delata que la varianza residual crece con Ŷ (heterocedasticidad). Los coeficientes MCO siguen siendo insesgados, pero sus errores estándar convencionales son falsos."
    }
  },

  9: {
    case_en: {
      title: "Case Study: Exercise and Cholesterol (The Paradox)",
      context: "A public health study of N = 1,500 adults investigates weekly physical exercise (X) and serum cholesterol (Y). A simple regression reports a positive slope: 'More exercise increases cholesterol (β = +0.54, p < 0.001)!' However, older individuals exercise more and naturally possess higher cholesterol.",
      question: "How can omitting Age (a severe confounder) completely invert the observed effect direction of exercise on cholesterol?"
    },
    case_es: {
      title: "Caso de Estudio: Ejercicio Físico y Colesterol (La Paradoja)",
      context: "Un estudio de salud pública con N = 1.500 adultos investiga horas semanales de ejercicio (X) y colesterol sérico (Y). Una regresión simple arroja una pendiente positiva: '¡Más ejercicio eleva el colesterol (β = +0,54, p < 0,001)!' Sin embargo, los adultos mayores hacen más ejercicio y poseen mayor colesterol basal.",
      question: "¿Cómo puede la omisión de la Edad (un confusor crítico) invertir por completo la dirección del efecto del ejercicio sobre el colesterol?"
    },
    theory_en: {
      summary: "Simpson's Paradox occurs when an apparent relationship observed at the aggregate level reverses once data is stratified by a key confounder. Multiple regression resolves this by estimating partial slopes while holding confounders constant.",
      formulaExplain: "Y = β₀ + β₁·Exercise + β₂·Age + ε. β₁ now isolates the causal effect of exercise holding age fixed, transforming a spurious positive slope (+0.54) into its true beneficial negative slope (-0.82).",
      keyConcepts: [
        { term: "Confounder (Z)", desc: "A common cause influencing both predictor X and outcome Y, creating spurious association." },
        { term: "Omitted Variable Bias", desc: "Bias created when a confounder correlated with both X and Y is left out of the regression." },
        { term: "Partial Regression Slope", desc: "The unique relationship between X₁ and Y after mathematically removing the linear influence of X₂." },
        { term: "Simpson's Reversal", desc: "When the partial slope has the opposite mathematical sign from the bivariate marginal slope." }
      ]
    },
    theory_es: {
      summary: "La Paradoja de Simpson surge cuando una asociación observada a nivel global se invierte por completo al estratificar por un confusor relevante. La regresión múltiple lo soluciona estimando pendientes parciales manteniendo constantes los confusores.",
      formulaExplain: "Y = β₀ + β₁·Ejercicio + β₂·Edad + ε. β₁ aísla el efecto del ejercicio manteniendo constante la edad, transformando una pendiente engañosa positiva (+0,54) en su verdadero efecto reductor negativo (-0,82).",
      keyConcepts: [
        { term: "Confusor (Z)", desc: "Causa común que influye simultáneamente sobre el predictor X y el desenlace Y, generando correlaciones espurias." },
        { term: "Sesgo por Variable Omitida", desc: "Distorsión sistemática producida cuando un confusor relevante queda fuera de la ecuación de regresión." },
        { term: "Pendiente Parcial", desc: "El vínculo directo entre X₁ e Y tras eliminar matemáticamente el influjo lineal de X₂." },
        { term: "Inversión de Simpson", desc: "Fenómeno en el que la pendiente parcial exhibe signo algebraico opuesto a la correlación marginal bruta." }
      ]
    },
    simulation_en: {
      name: "Simpson's Paradox Visualizer",
      description: "Toggle between pooled aggregate data (positive upward slope) and age-stratified cohorts. Watch the slopes simultaneously invert to negative slopes within every group!"
    },
    simulation_es: {
      name: "Visualizador de la Paradoja de Simpson",
      description: "Alterna entre datos globales agregados (pendiente ascendente positiva) y cohortes estratificadas por edad. ¡Observa cómo las pendientes se invierten de inmediato a negativas en cada estrato!"
    },
    interpretation_en: {
      title: "Bivariate vs Multivariable Comparison",
      recommendation: "Always adjust for Age. Physical exercise reduces cholesterol by 0.82 mg/dL per weekly hour. The bivariate positive trend was entirely an artifact of confounding.",
      metrics: [
        { label: "Bivariate Slope (No Age)", note: "β₁ = +0.54 (Deceptive aggregation trap)" },
        { label: "Multivariable Slope (+Age)", note: "β₁ = -0.82 (True protective physiological effect)" },
        { label: "Age Covariate Slope", note: "β₂ = +1.45 per year of age (Strong confounder)" },
        { label: "Model R² Improvement", note: "R² climbs from 0.08 to 0.76" }
      ]
    },
    interpretation_es: {
      title: "Comparación Bivariada vs Multivariable",
      recommendation: "Ajusta obligatoriamente por Edad. El ejercicio reduce el colesterol a razón de 0,82 mg/dL por hora semanal. La pendiente positiva inicial era un artefacto puro de confusión.",
      metrics: [
        { label: "Pendiente Bivariada (Sin Edad)", note: "β₁ = +0,54 (Trampa de agregación espuria)" },
        { label: "Pendiente Multivariable (+Edad)", note: "β₁ = -0,82 (Efecto fisiológico protector real)" },
        { label: "Efecto de la Variable Edad", note: "β₂ = +1,45 por año de edad (Potente confusor)" },
        { label: "Mejora del R² del Modelo", note: "R² aumenta de 0,08 a 0,76" }
      ]
    },
    quiz_en: {
      question: "What does it indicate when the partial regression coefficient β₁ in a multivariable model has the opposite sign of the bivariate correlation r_xy?",
      options: [
        "Multicollinearity has destroyed the numerical precision of the matrix inversion",
        "A classic Simpson's Paradox / omitted variable bias: the omitted confounder was masking or reversing the true conditional relationship",
        "The model violates normality of residuals, rendering coefficients invalid",
        "The sample size is insufficient to support multiple predictors"
      ],
      explanation: "Sharp causal thinking! When controlling for a confounder reverses the sign, it exposes how aggregate data can deceive when baseline confounding paths are open."
    },
    quiz_es: {
      question: "¿Qué indica que el coeficiente de regresión parcial β₁ en un modelo multivariable tenga signo opuesto a la correlación bivariada simple r_xy?",
      options: [
        "Que la multicolinealidad ha corrompido la precisión numérica de la inversión matricial",
        "Una clásica Paradoja de Simpson / sesgo por variable omitida: el confusor no controlado distorsionaba o invertía el vínculo condicional genuino",
        "Que el modelo infringe el supuesto de normalidad residual, invalidando las estimaciones",
        "Que el tamaño de muestra es insuficiente para incorporar múltiples predictores"
      ],
      explanation: "¡Pensamiento causal riguroso! La inversión de signo al ajustar por un factor de confusión demuestra cómo los datos agregados inducen a conclusiones erróneas si no se cierran los caminos de puerta trasera."
    }
  },

  10: {
    case_en: {
      title: "Case Study: The Hurdler and Two Legs",
      context: "A sports biomechanist predicts hurdle sprint speed using Left Leg Length (X₁) and Right Leg Length (X₂) across N = 80 athletes. The two predictors correlate at r = 0.992. Overall model R² is 0.82 (p < 0.001), but both individual t-tests are non-significant (p = 0.38 and p = 0.44).",
      question: "Why does extreme multicollinearity inflate standard errors and produce erratic, statistically insignificant individual coefficients?"
    },
    case_es: {
      title: "Caso de Estudio: El Vallista y las Dos Piernas",
      context: "Un biomecánico predice la velocidad de atletas en vallas usando la Longitud de la Pierna Izquierda (X₁) y Derecha (X₂) en N = 80 velocistas. La correlación entre ambas es r = 0,992. El R² global es 0,82 (p < 0,001), pero ambos contrastes t individuales resultan no significativos (p = 0,38 y p = 0,44).",
      question: "¿Por qué la multicolinealidad severa infla los errores estándar y produce coeficientes erráticos y aparentemente no significativos?"
    },
    theory_en: {
      summary: "When predictors correlate heavily, OLS struggles to isolate the unique marginal contribution of each variable. Variance Inflation Factor (VIF) measures how much the estimation variance of a coefficient is blown up relative to orthogonal predictors.",
      formulaExplain: "VIF_j = 1 / (1 - R²_j). Standard error inflates by √VIF. A VIF > 5 signals severe collinearity; VIF > 10 indicates catastrophic multicollinearity.",
      keyConcepts: [
        { term: "Variance Inflation Factor (VIF)", desc: "Quantifies the inflation of SE(β_j) caused by collinearity with other predictors." },
        { term: "Tolerance (1 / VIF)", desc: "Proportion of predictor variance not explained by other predictors in the model." },
        { term: "Symptom of Collinearity", desc: "High overall R² and significant F-test, yet individual t-tests are non-significant." },
        { term: "Solutions", desc: "Drop redundant predictor, combine into an index (PCA), or apply Ridge regularization." }
      ]
    },
    theory_es: {
      summary: "Cuando dos predictores correlacionan fuertemente, MCO no puede separar el aporte marginal único de cada variable. El Factor de Inflación de la Varianza (FIV/VIF) cuantifica cuánto se multiplica la varianza del estimador respecto a predictores ortogonales.",
      formulaExplain: "FIV_j = 1 / (1 - R²_j). El error estándar se infla por un factor √FIV. Un FIV > 5 indica colinealidad seria; FIV > 10 es multicolinealidad crítica.",
      keyConcepts: [
        { term: "Factor de Inflación Varianza (FIV)", desc: "Mide cuánto se infla el EE(β_j) debido a la colinealidad con el resto de predictores." },
        { term: "Tolerancia (1 / FIV)", desc: "Proporción de varianza del predictor que no es explicada por las demás variables." },
        { term: "Síntoma Clásico", desc: "R² global muy alto y prueba F significativa, pero contrastes t individuales no significativos." },
        { term: "Estrategias de Solución", desc: "Eliminar predictor redundante, promediar en índice sintético (PCA) o regularización Ridge." }
      ]
    },
    simulation_en: {
      name: "Multicollinearity & VIF Exploder",
      description: "Slide correlation r₁₂ toward 0.99. Watch the confidence ellipse expand, observe VIF explode to 60+, and see how standard errors balloon out of control!"
    },
    simulation_es: {
      name: "Explosión de Multicolinealidad y FIV",
      description: "Desplaza la correlación r₁₂ hacia 0,99. ¡Observa la dilatación de la elipse de confianza, cómo el FIV se dispara sobre 60 y cómo los errores estándar se descontrolan!"
    },
    interpretation_en: {
      title: "Diagnosis & Practical Resolution",
      recommendation: "VIF = 62.5 exceeds critical threshold 10. Drop one leg variable or average both into 'Total Leg Length'. Standard error instantly contracts by 85%.",
      metrics: [
        { label: "Correlation r(X₁, X₂)", note: "0.992 (Extreme redundancy)" },
        { label: "VIF (Left Leg)", note: "62.5 (Catastrophic multicollinearity)" },
        { label: "SE Inflation Factor (√VIF)", note: "7.9x wider confidence intervals" },
        { label: "After Dropping One Leg", note: "VIF = 1.0, p < 0.0001 (Pristine precision)" }
      ]
    },
    interpretation_es: {
      title: "Diagnóstico y Resolución Práctica",
      recommendation: "El FIV = 62,5 sobrepasa el umbral crítico de 10. Elimina una pierna o promedio en 'Longitud Media'. El error estándar se reduce de inmediato un 85%.",
      metrics: [
        { label: "Correlación r(X₁, X₂)", note: "0,992 (Redundancia extrema)" },
        { label: "FIV (Pierna Izquierda)", note: "62,5 (Multicolinealidad catastrófica)" },
        { label: "Factor de Inflación (√FIV)", note: "Intervalos de confianza 7,9 veces más anchos" },
        { label: "Tras Eliminar Redundancia", note: "FIV = 1,0, p < 0,0001 (Precisión máxima)" }
      ]
    },
    quiz_en: {
      question: "What is the primary danger of severe multicollinearity (e.g. VIF > 10) in an OLS regression model?",
      options: [
        "The OLS coefficient estimates become biased and systematic prediction error increases",
        "The variance of regression coefficients explodes, yielding massive standard errors and erratic, unstable estimates that swing wildly upon minor data perturbations",
        "The overall model R² artificially collapses toward zero",
        "The residuals immediately violate normality and homoscedasticity"
      ],
      explanation: "Precision thinking! Multicollinearity does not bias estimates (they remain unbiased), but it explodes standard errors and destabilizes individual coefficient values."
    },
    quiz_es: {
      question: "¿Cuál es el principal peligro de la multicolinealidad severa (ej. FIV > 10) en un modelo de regresión MCO?",
      options: [
        "Que los estimadores MCO se vuelven sesgados y el error sistemático de predicción se dispara",
        "Que la varianza de los coeficientes de regresión explota, inflando los errores estándar y generando estimaciones erráticas e hipersensibles a cambios mínimos en los datos",
        "Que el R² global del modelo colapsa artificialmente hacia cero",
        "Que los residuos vulneran inmediatamente los supuestos de normalidad y homocedasticidad"
      ],
      explanation: "¡Conocimiento riguroso! La multicolinealidad no genera sesgo (los estimadores siguen siendo insesgados), pero infla masivamente los errores estándar y desestabiliza las estimaciones individuales."
    }
  },

  11: {
    case_en: {
      title: "Case Study: Hospital 30-Day Readmission for Heart Failure Patients",
      context: "A hospital predicts 30-day readmission (0 = No, 1 = Yes) for N = 500 cardiac patients based on age, ejection fraction, and comorbidities. Linear regression yields nonsensical probabilities like -0.15 and +1.28.",
      question: "Why is Logistic Regression required for binary outcomes, and how do we interpret Odds Ratios (OR = e^β)?"
    },
    case_es: {
      title: "Caso de Estudio: Reingreso Hospitalario a 30 Días en Pacientes Cardíacos",
      context: "Un hospital modela el reingreso a 30 días (0 = No, 1 = Sí) en N = 500 pacientes con insuficiencia cardíaca según edad y comorbilidades. La regresión lineal genera probabilidades absurdas como -0,15 y +1,28.",
      question: "¿Por qué es indispensable la Regresión Logística para desenlaces binarios y cómo interpretamos las Odds Ratios (OR = e^β)?"
    },
    theory_en: {
      summary: "Logistic regression uses the logit link function ln[p / (1 - p)] = β₀ + β₁X to map predicted probabilities strictly into the interval [0, 1]. Exponentiating slope coefficients yields Odds Ratios: OR = e^β.",
      formulaExplain: "p(X) = 1 / (1 + e^-(β₀ + β₁X)). If β₁ = 0.405, OR = e^0.405 = 1.50: each unit increase in X increases the odds of the outcome by 50%.",
      keyConcepts: [
        { term: "Odds vs Probability", desc: "Odds = p / (1 - p). Probability = Odds / (1 + Odds)." },
        { term: "Odds Ratio (OR = e^β)", desc: "Ratio of odds between two groups. OR > 1 implies increased risk; OR < 1 indicates protective effect." },
        { term: "Sigmoid S-Curve", desc: "S-shaped curve ensuring predicted probabilities stay strictly between 0 and 1." },
        { term: "Log-Likelihood", desc: "Estimated via Maximum Likelihood Estimation (MLE) rather than ordinary least squares." }
      ]
    },
    theory_es: {
      summary: "La regresión logística utiliza la función de enlace logit ln[p / (1 - p)] = β₀ + β₁X para restringir las probabilidades predichas al intervalo [0, 1]. Al exponenciar los coeficientes de regresión se obtienen Odds Ratios: OR = e^β.",
      formulaExplain: "p(X) = 1 / (1 + e^-(β₀ + β₁X)). Si β₁ = 0,405, OR = e^0,405 = 1,50: cada unidad adicional en X incrementa las chances (momios) del suceso en un 50%.",
      keyConcepts: [
        { term: "Odds vs Probabilidad", desc: "Odds = p / (1 - p). Probabilidad = Odds / (1 + Odds)." },
        { term: "Odds Ratio (OR = e^β)", desc: "Razón de momios entre grupos. OR > 1 implica mayor riesgo; OR < 1 efecto protector." },
        { term: "Curva Sigmoide", desc: "Curva en forma de S que garantiza que las probabilidades estimadas residan estrictamente entre 0 y 1." },
        { term: "Máxima Verosimilitud (MLE)", desc: "Se estima optimizando la función de verosimilitud en lugar de mínimos cuadrados ordinarios." }
      ]
    },
    simulation_en: {
      name: "The Sigmoid S-Curve & Confusion Matrix",
      description: "Shift the decision threshold (cutoff). Observe how sensitivity and specificity trade off, and watch the ROC curve trace your diagnostic choices!"
    },
    simulation_es: {
      name: "Curva Sigmoide y Matriz de Confusión en Vivo",
      description: "Modifica el umbral de decisión. ¡Observa el dilema entre sensibilidad y especificidad y comprueba cómo la curva ROC mapea tus elecciones diagnósticas!"
    },
    interpretation_en: {
      title: "Model Output & Clinical Decision",
      recommendation: "Prior myocardial infarction exhibits OR = 2.45 (p = 0.002). Enroll these high-risk patients in intensive post-discharge telemedicine programs.",
      metrics: [
        { label: "Logit Slope β₁ (Prior MI)", note: "+0.896 (p = 0.002)" },
        { label: "Odds Ratio (e^0.896)", note: "OR = 2.45 (145% higher odds of readmission)" },
        { label: "Area Under ROC (AUC)", note: "0.84 (Strong diagnostic discrimination)" },
        { label: "Optimal Cutoff", note: "p = 0.35 (Sensitivity 82%, Specificity 78%)" }
      ]
    },
    interpretation_es: {
      title: "Salida del Modelo y Decisión Clínica",
      recommendation: "El infarto previo exhibe una OR = 2,45 (p = 0,002). Incluye a estos pacientes de alto riesgo en programas intensivos de telemedicina post-alta.",
      metrics: [
        { label: "Pendiente Logit β₁ (Infarto)", note: "+0,896 (p = 0,002)" },
        { label: "Odds Ratio (e^0,896)", note: "OR = 2,45 (145% más probabilidades relativas de reingreso)" },
        { label: "Área bajo la Curva ROC (AUC)", note: "0,84 (Elevada capacidad discriminatoria)" },
        { label: "Umbral Óptimo", note: "p = 0,35 (Sensibilidad 82%, Especificidad 78%)" }
      ]
    },
    quiz_en: {
      question: "What is the resulting Odds Ratio (OR) when the logistic regression slope coefficient β₁ is equal to +0.693?",
      options: [
        "OR = 0.693: risk increases by 69.3%",
        "OR = e^0.693 ≈ 2.00: the odds of the outcome double for each 1-unit increase in X",
        "OR = 1 / 0.693 ≈ 1.44: the risk ratio is 1.44",
        "OR = 0.50: the probability of the outcome is halved"
      ],
      explanation: "Spot-on! In logistic regression, OR = e^β. Because e^0.693 ≈ 2.00, each unit increase in predictor X exactly doubles the odds."
    },
    quiz_es: {
      question: "¿Cuál es la Odds Ratio (OR) resultante cuando el coeficiente logit de regresión logística β₁ es igual a +0,693?",
      options: [
        "OR = 0,693: el riesgo relativo aumenta exactamente un 69,3%",
        "OR = e^0,693 ≈ 2,00: las chances (momios) del desenlace se duplican por cada unidad adicional en X",
        "OR = 1 / 0,693 ≈ 1,44: la razón de riesgo poblacional es de 1,44",
        "OR = 0,50: la probabilidad del evento se reduce exactamente a la mitad"
      ],
      explanation: "¡Exacto! En regresión logística, OR = e^β. Puesto que e^0,693 ≈ 2,00, cada unidad de aumento en el predictor duplica exactamente las odds del desenlace."
    }
  },

  12: {
    case_en: {
      title: "Case Study: Customer Churn with 50 Marketing Variables on N = 60",
      context: "A SaaS subscription company wants to predict customer churn. They have N = 60 clients but measured P = 50 behavioral metrics. Standard OLS severely overfits (R² = 0.96 in-sample, but R² = -0.42 on new validation customers).",
      question: "How do Ridge (L₂) and Lasso (L₁) regularization prevent overfitting, and which one enforces sparse feature selection?"
    },
    case_es: {
      title: "Caso de Estudio: Abandono de Clientes con 50 Variables en N = 60",
      context: "Una empresa SaaS modela la cancelación de clientes (churn). Dispone de N = 60 cuentas pero mide P = 50 variables de comportamiento. MCO clásico sobreajusta salvajemente (R² = 0,96 en entrenamiento, pero R² = -0,42 en validación externa).",
      question: "¿Cómo previenen el sobreajuste las regularizaciones Ridge (L₂) y Lasso (L₁), y cuál de ellas realiza selección automática de variables?"
    },
    theory_en: {
      summary: "Regularization penalizes large coefficients by adding a shrinkage penalty λ to the loss function. Ridge (L₂) shrinks coefficients smoothly toward zero; Lasso (L₁) uses absolute values, driving irrelevant coefficients exactly to zero for automated feature selection.",
      formulaExplain: "Ridge Loss: SSE + λ·Σβ_j². Lasso Loss: SSE + λ·Σ|β_j|. Tuning penalty λ via k-fold cross-validation balances the fundamental bias-variance tradeoff.",
      keyConcepts: [
        { term: "L₂ Regularization (Ridge)", desc: "Shrinks correlated coefficients together. Retains all predictors with shrunk weights." },
        { term: "L₁ Regularization (Lasso)", desc: "Produces sparse models: forces uninformative coefficients to exactly 0 (automated variable selection)." },
        { term: "Elastic Net", desc: "Hybrid combination of L₁ and L₂ penalties to handle groups of correlated predictors." },
        { term: "Cross-Validation (CV)", desc: "Rotational data splitting to identify the optimal penalty parameter λ_min." }
      ]
    },
    theory_es: {
      summary: "La regularización penaliza coeficientes excesivos agregando una penalización por contracción λ a la función de pérdida. Ridge (L₂) contrae los coeficientes suavemente hacia cero; Lasso (L₁) emplea valores absolutos, anulando a cero los coeficientes irrelevantes.",
      formulaExplain: "Pérdida Ridge: SCE + λ·Σβ_j². Pérdida Lasso: SCE + λ·Σ|β_j|. El ajuste de λ mediante validación cruzada equilibra el dilema fundamental sesgo-varianza.",
      keyConcepts: [
        { term: "Regularización L₂ (Ridge)", desc: "Contrae coeficientes colineales en conjunto. Conserva todas las variables con magnitudes atenuadas." },
        { term: "Regularización L₁ (Lasso)", desc: "Produce modelos dispersos (sparse): fija coeficientes irrelevantes exactamente en 0 (selección automática)." },
        { term: "Elastic Net", desc: "Combinación híbrida de L₁ y L₂ que maneja eficazmente grupos de variables correlacionadas." },
        { term: "Validación Cruzada (CV)", desc: "Técnica de partición rotativa para seleccionar el parámetro de penalización óptimo λ_min." }
      ]
    },
    simulation_en: {
      name: "Ridge vs Lasso Coefficient Shrinkage Lab",
      description: "Increase regularization strength λ. Watch how Ridge compresses coefficients asymptotically while Lasso drives coefficients to zero one by one!"
    },
    simulation_es: {
      name: "Laboratorio de Contracción de Coeficientes: Ridge vs Lasso",
      description: "Aumenta la fuerza de penalización λ. ¡Observa cómo Ridge atenúa suavemente todos los coeficientes mientras Lasso los anula secuencialmente a cero!"
    },
    interpretation_en: {
      title: "Model Comparison & Practical Conclusion",
      recommendation: "Deploy Lasso with λ = 0.14. It eliminated 44 noise metrics and preserved the 6 critical predictors, delivering R² = 0.68 on unseen validation data.",
      metrics: [
        { label: "Optimal Penalty (λ)", note: "0.14 (Selected via 10-fold CV)" },
        { label: "Active Predictors in Lasso", note: "6 out of 50 (44 coefficients zeroed out)" },
        { label: "Out-of-Sample R² (OLS)", note: "-0.42 (Catastrophic overfitting)" },
        { label: "Out-of-Sample R² (Lasso)", note: "+0.68 (Superb generalizability)" }
      ]
    },
    interpretation_es: {
      title: "Comparación de Modelos y Conclusión",
      recommendation: "Implementa Lasso con λ = 0,14. Descartó 44 variables de ruido y conservó los 6 predictores cruciales, logrando un R² = 0,68 en datos de validación.",
      metrics: [
        { label: "Penalización Óptima (λ)", note: "0,14 (Seleccionada mediante CV de 10 pliegues)" },
        { label: "Predictores Activos en Lasso", note: "6 de 50 (44 coeficientes anulados a 0)" },
        { label: "R² Fuera de Muestra (MCO)", note: "-0,42 (Sobreajuste catastrófico)" },
        { label: "R² Fuera de Muestra (Lasso)", note: "+0,68 (Excelente capacidad de generalización)" }
      ]
    },
    quiz_en: {
      question: "What is the unique mathematical advantage of Lasso (L₁) regularization compared to Ridge (L₂)?",
      options: [
        "Lasso always achieves lower training error than OLS",
        "Because of its diamond-shaped L₁ constraint geometry, Lasso forces uninformative coefficients to exactly zero, performing automated feature selection",
        "Lasso provides closed-form matrix solutions, eliminating the need for iterative numerical solvers",
        "Lasso eliminates heteroscedasticity without requiring robust standard errors"
      ],
      explanation: "Haute statistical expertise! The diamond corners of the L₁ norm intersect objective contours along coordinate axes, zeroing out non-essential parameters."
    },
    quiz_es: {
      question: "¿Cuál es la ventaja matemática distintiva de la regularización Lasso (L₁) frente a Ridge (L₂)?",
      options: [
        "Que Lasso logra siempre un error de entrenamiento inferior al de MCO",
        "Que debido a la geometría romboidal de la norma L₁, Lasso fuerza coeficientes no informativos exactamente a cero, realizando selección automática de variables",
        "Que Lasso admite soluciones matriciales cerradas sin requerir algoritmos iterativos",
        "Que Lasso neutraliza la heterocedasticidad sin recurrir a errores estándar robustos"
      ],
      explanation: "¡Conocimiento de alta precisión! Los vértices angulares de la restricción L₁ intersecan el contorno de verosimilitud en los ejes coordenados, fijando coeficientes irrelevantes exactamente en 0."
    }
  }
};
