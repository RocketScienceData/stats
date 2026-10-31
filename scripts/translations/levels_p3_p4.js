// Multilingual translations for Levels 13 to 24 (Phases 3 & 4)

module.exports = {
  13: {
    case_en: {
      title: "Case Study: Test Scores Across 20 Different Primary Schools",
      context: "An educational ministry analyzes math exam scores across N = 800 students nested in J = 20 distinct schools. Standard OLS reports a textbook study time effect with p = 0.0001. However, children within the same school share teachers, socioeconomic context, and grading culture.",
      question: "Why does pooled OLS fail on clustered hierarchical data, and what is the Intraclass Correlation Coefficient (ICC)?"
    },
    case_es: {
      title: "Caso de Estudio: Puntuaciones en Exámenes en 20 Colegios",
      context: "Un ministerio de educación analiza notas de matemáticas en N = 800 alumnos agrupados en J = 20 centros escolares distintos. MCO agregado reporta un efecto del tiempo de estudio con p = 0,0001. No obstante, los alumnos del mismo centro comparten profesorado y entorno socioeconómico.",
      question: "¿Por qué fracasa MCO agrupado en datos jerárquicos y qué representa el Coeficiente de Correlación Intraclase (CCI)?"
    },
    theory_en: {
      summary: "Clustering violates the independence assumption of OLS. Intraclass Correlation (ICC = τ² / (τ² + σ²)) measures the proportion of outcome variance attributable to differences between groups. When ICC > 0, pooled OLS drastically underestimates standard errors, generating spurious precision (false positives).",
      formulaExplain: "Design Effect: Deff = 1 + (m - 1)·ICC. Even a modest ICC = 0.15 with cluster size m = 40 produces Deff = 6.85, meaning true standard errors are √6.85 = 2.62 times larger than OLS reports!",
      keyConcepts: [
        { term: "Intraclass Correlation (ICC)", desc: "Proportion of total outcome variance lying between clusters (τ² / (τ² + σ²))." },
        { term: "Pseudoreplication", desc: "Treating clustered dependent observations as if they were independent sample points." },
        { term: "Design Effect (Deff)", desc: "Factor by which estimation variance must be multiplied to correct for clustering." },
        { term: "Effective Sample Size (N_eff)", desc: "N_eff = N / Deff. The true amount of independent statistical information." }
      ]
    },
    theory_es: {
      summary: "El agrupamiento viola el supuesto de observaciones independientes en MCO. La Correlación Intraclase (CCI = τ² / (τ² + σ²)) cuantifica la fracción de varianza total atribuible a diferencias entre grupos. Con CCI > 0, MCO subestima masivamente los errores estándar, produciendo significación espuria.",
      formulaExplain: "Efecto de Diseño: Deff = 1 + (m - 1)·CCI. Un CCI de apenas 0,15 con clústeres de m = 40 genera Deff = 6,85: ¡los verdaderos errores estándar son √6,85 = 2,62 veces mayores que los reportados por MCO!",
      keyConcepts: [
        { term: "Correlación Intraclase (CCI)", desc: "Proporción de la varianza total explicada por diferencias entre grupos (τ² / (τ² + σ²))." },
        { term: "Pseudorreplicación", desc: "Tratar observaciones dependientes y agrupadas como si fuesen unidades independientes." },
        { term: "Efecto de Diseño (Deff)", desc: "Factor por el cual debe inflarse la varianza para corregir el agrupamiento." },
        { term: "Tamaño Muestral Efectivo (N_eff)", desc: "N_eff = N / Deff. La cantidad real de información estadística independiente." }
      ]
    },
    simulation_en: {
      name: "Cluster Effect & ICC Simulator",
      description: "Dial up the between-school variance τ². Watch how observations clump together within schools and see the true standard error explode relative to naive OLS!"
    },
    simulation_es: {
      name: "Simulador de Efecto Clúster y CCI",
      description: "Incrementa la varianza entre escuelas τ². ¡Comprueba cómo los datos se agrupan en cada colegio y observa cómo el verdadero error estándar se dispara frente a MCO ingenuo!"
    },
    interpretation_en: {
      title: "Methodological Diagnosis",
      recommendation: "ICC = 0.32 confirms severe clustering. Standard OLS is invalid. Adopt a Linear Mixed Model with random school intercepts to prevent false policy conclusions.",
      metrics: [
        { label: "Intraclass Correlation (ICC)", note: "0.32 (High clustering: 32% variance at school level)" },
        { label: "Design Effect (Deff)", note: "13.48 (Naive OLS standard errors are 3.67x too small!)" },
        { label: "Naive OLS p-value", note: "p = 0.0001 (Spurious precision / false discovery)" },
        { label: "Cluster-Adjusted p-value", note: "p = 0.12 (Correctly non-significant)" }
      ]
    },
    interpretation_es: {
      title: "Diagnóstico Metodológico",
      recommendation: "El CCI = 0,32 confirma un agrupamiento severo. MCO ordinario queda invalidado. Adopta un Modelo Lineal Mixto con interceptos aleatorios para evitar conclusiones erróneas.",
      metrics: [
        { label: "Correlación Intraclase (CCI)", note: "0,32 (El 32% de la variabilidad reside entre escuelas)" },
        { label: "Efecto de Diseño (Deff)", note: "13,48 (¡Los errores estándar de MCO son 3,67 veces más pequeños de lo real!)" },
        { label: "Valor p de MCO Ingenuo", note: "p = 0,0001 (Precisión espuria / falso descubrimiento)" },
        { label: "Valor p Ajustado por Clúster", note: "p = 0,12 (Correctamente no significativo)" }
      ]
    },
    quiz_en: {
      question: "What is the primary risk when fitting standard pooled OLS to hierarchically clustered data with a high ICC?",
      options: [
        "OLS point estimates β̂ become biased and overestimate the true slope systematically",
        "OLS severely underestimates the standard errors of coefficients, producing artificially narrow confidence intervals and inflated false-positive significance (spurious precision)",
        "The model automatically generates perfect collinearity between clusters",
        "Residuals become completely non-normal, preventing parameter estimation"
      ],
      explanation: "Profound insight! Pooled OLS mistakes repeated cluster measurements for independent data points, underestimating standard errors by factors of 2 to 5."
    },
    quiz_es: {
      question: "¿Cuál es el riesgo crítico de aplicar MCO agrupado ordinario a datos con estructura jerárquica y alto CCI?",
      options: [
        "Que los coeficientes puntuales β̂ se vuelven sistemáticamente sesgados",
        "Que MCO subestima severamente los errores estándar, produciendo intervalos de confianza artificialmente estrechos y falsos descubrimientos estadísticos (precisión ilusoria)",
        "Que el modelo genera automáticamente colinealidad exacta entre grupos",
        "Que los residuos vulneran la normalidad, impidiendo el cálculo de parámetros"
      ],
      explanation: "¡Conocimiento de nivel maestro! MCO agrupado confunde medidas repetidas con información independiente, reduciendo artificialmente los errores estándar entre 2 y 5 veces."
    }
  },

  14: {
    case_en: {
      title: "Case Study: Study Time vs Grades with School-Specific Baselines",
      context: "Continuing the educational dataset: schools vary dramatically in baseline achievement due to neighborhood funding. A naive regression forces all schools through a single common intercept, while fixed dummy variables consume 19 degrees of freedom.",
      question: "How does a Random Intercept model combine group-specific baselines with shrinkage (partial pooling) to achieve optimal estimation?"
    },
    case_es: {
      title: "Caso de Estudio: Tiempo de Estudio y Nota con Puntos de Partida Escolares",
      context: "En el conjunto educativo anterior: los colegios difieren fuertemente en su nivel basal debido a recursos del distrito. Una regresión agregada fuerza a todos por el mismo intercepto, mientras que variables fijas consumen 19 grados de libertad.",
      question: "¿Cómo combina un modelo de Intercepto Aleatorio los niveles basales por grupo con la contracción (partial pooling) para lograr estimaciones óptimas?"
    },
    theory_en: {
      summary: "A Random Intercept model allows each group j to have its own baseline intercept (β₀ + u₀ⱼ), where u₀ⱼ ~ N(0, τ²), while sharing a common fixed slope β₁. Shrinkage (partial pooling) pulls small or noisy clusters toward the grand mean, preventing overfitting.",
      formulaExplain: "Y_ij = (β₀ + u_0j) + β₁·X_ij + ε_ij. The Best Linear Unbiased Predictor (BLUP) shrinks school intercepts toward the grand mean proportionally to sample size and noise.",
      keyConcepts: [
        { term: "Fixed Effects (β₀, β₁)", desc: "Population-average parameters common to all units." },
        { term: "Random Intercept (u_0j)", desc: "Cluster-specific deviation from the global intercept: u_0j ~ N(0, τ²)." },
        { term: "Partial Pooling (Shrinkage)", desc: "Shrinks unreliable group estimates toward the overall mean; small clusters shrink most." },
        { term: "REML Estimation", desc: "Restricted Maximum Likelihood: accounts for degrees of freedom lost estimating fixed effects." }
      ]
    },
    theory_es: {
      summary: "Un modelo de Intercepto Aleatorio permite que cada grupo j posea su propio punto de partida (β₀ + u₀ⱼ), donde u₀ⱼ ~ N(0, τ²), compartiendo una pendiente fija común β₁. La contracción (partial pooling) atrae a los grupos pequeños o ruidosos hacia la media global, evitando el sobreajuste.",
      formulaExplain: "Y_ij = (β₀ + u_0j) + β₁·X_ij + ε_ij. El Mejor Predictor Lineal Insesgado (BLUP) contrae los interceptos hacia la media poblacional según el tamaño muestral y la varianza residual.",
      keyConcepts: [
        { term: "Efectos Fijos (β₀, β₁)", desc: "Parámetros promedio poblacionales comunes a todas las unidades." },
        { term: "Intercepto Aleatorio (u_0j)", desc: "Desviación del grupo j respecto al intercepto global: u_0j ~ N(0, τ²)." },
        { term: "Contracción (Shrinkage)", desc: "Atrae estimaciones ruidosas hacia la media global; los clústeres con pocas observaciones son los que más se contraen." },
        { term: "Estimación REML", desc: "Máxima Verosimilitud Restringida: corrige la pérdida de grados de libertad debida a los efectos fijos." }
      ]
    },
    simulation_en: {
      name: "Random Intercept & Shrinkage Visualizer",
      description: "Compare No Pooling (separate OLS per school), Complete Pooling (one naive line), and Partial Pooling (Mixed Model). Watch how small sample sizes shrink toward the global line!"
    },
    simulation_es: {
      name: "Visualizador de Intercepto Aleatorio y Contracción",
      description: "Compara Sin Agrupamiento (MCO por colegio), Agrupamiento Total (una sola recta) y Agrupamiento Parcial (Modelo Mixto). ¡Comprueba cómo los colegios pequeños se contraen hacia la media!"
    },
    interpretation_en: {
      title: "Linear Mixed Model (Statsmodels / lme4) Output",
      recommendation: "Study time gains an estimated +0.22 grade points per hour (p = 0.003). School baseline variance τ = 0.84 explains between-school disparities without sacrificing degrees of freedom.",
      metrics: [
        { label: "Fixed Slope β₁ (Hours)", note: "+0.22 (p = 0.003, Correctly estimated standard error)" },
        { label: "Between-School SD (τ)", note: "0.84 grade points" },
        { label: "Residual SD (σ)", note: "0.58 grade points" },
        { label: "AIC Comparison vs OLS", note: "ΔAIC = -142.6 (Massive statistical superiority)" }
      ]
    },
    interpretation_es: {
      title: "Salida del Modelo Mixto (Statsmodels / lme4)",
      recommendation: "El tiempo de estudio aporta +0,22 puntos por hora (p = 0,003). La dispersión entre centros τ = 0,84 explica las desigualdades basales preservando grados de libertad.",
      metrics: [
        { label: "Pendiente Fija β₁ (Horas)", note: "+0,22 (p = 0,003, Error estándar estimado con rigor)" },
        { label: "DE Entre Colegios (τ)", note: "0,84 puntos de calificación" },
        { label: "DE Residual (σ)", note: "0,58 puntos de calificación" },
        { label: "Comparativa AIC vs MCO", note: "ΔAIC = -142,6 (Superioridad estadística aplastante)" }
      ]
    },
    quiz_en: {
      question: "What happens in a Random Intercept model thanks to shrinkage (partial pooling) when estimating a cluster with very few observations?",
      options: [
        "The cluster is discarded as an unrepresentative outlier",
        "The estimated group intercept shrinks heavily toward the global population mean, protecting against extreme sample noise",
        "The cluster variance expands to equal total population variance",
        "The degrees of freedom are reduced to zero for that specific cluster"
      ],
      explanation: "Precision mastery! Shrinkage balances individual group evidence against global population priors: small or noisy clusters are pulled toward the grand mean."
    },
    quiz_es: {
      question: "¿Qué ocurre en un modelo de Intercepto Aleatorio gracias a la contracción (partial pooling) al estimar un grupo con muy pocas observaciones?",
      options: [
        "El grupo se descarta automáticamente por considerarse un valor atípico no representativo",
        "El intercepto estimado del grupo se contrae con fuerza hacia la media global poblacional, protegiendo al modelo frente al ruido de muestras pequeñas",
        "La varianza del grupo se expande hasta igualar la varianza poblacional total",
        "Los grados de libertad se reducen a cero para ese grupo específico"
      ],
      explanation: "¡Dominio impecable! La contracción equilibra la evidencia muestral local con la distribución previa global: los grupos con escasas observaciones son atraídos hacia la media general."
    }
  },

  15: {
    case_en: {
      title: "Case Study: Cognitive Recovery Post-Stroke Across 6 Months",
      context: "A neurological rehabilitation trial tracks N = 60 stroke patients over 6 consecutive months (repeated longitudinal measures). While all patients share an average positive trajectory, some patients recover 4x faster than others, and those starting with lower baselines improve more aggressively.",
      question: "Why does a Random Slope model allow individualized recovery trajectories and estimate the correlation between baseline and slope?"
    },
    case_es: {
      title: "Caso de Estudio: Recuperación Cognitiva Post-Ictus durante 6 Meses",
      context: "Un ensayo de neurorrehabilitación sigue a N = 60 pacientes tras un ictus a lo largo de 6 meses (medidas repetidas longitudinales). Aunque la trayectoria media es positiva, algunos pacientes se recuperan 4 veces más rápido, y quienes parten de puntuaciones basales más bajas mejoran más.",
      question: "¿Por qué un modelo de Pendientes Aleatorias permite trayectorias individualizadas y estima la correlación entre punto de partida y velocidad de mejora?"
    },
    theory_en: {
      summary: "Random Slope models expand hierarchical modeling by letting both intercepts (u₀ⱼ) and slopes (u₁ⱼ) vary across individual units. Crucially, the model estimates the covariance parameter Cov(u₀, u₁) = ρ₀₁·τ₀·τ₁ between baseline level and rate of change.",
      formulaExplain: "Y_ij = (β₀ + u_0j) + (β₁ + u_1j)·Time_ij + ε_ij, where [u₀ⱼ, u₁ⱼ] ~ MVN(0, Σ_u). A negative correlation ρ₀₁ indicates that patients with lower initial scores experience faster recovery rates.",
      keyConcepts: [
        { term: "Random Slope (u_1j)", desc: "Individual-specific deviation in trajectory or treatment sensitivity." },
        { term: "Covariance Matrix (Σ_u)", desc: "Estimates variances τ₀², τ₁² and correlation parameter ρ₀₁ between intercept and slope." },
        { term: "Longitudinal Repeated Measures", desc: "Multiple observations nested within the same patient over chronological time." },
        { term: "Autoregressive Errors (AR1)", desc: "Modeling residual correlation that decays as time gap between measurements increases." }
      ]
    },
    theory_es: {
      summary: "Los modelos de Pendiente Aleatoria permiten que tanto el intercepto (u₀ⱼ) como la pendiente (u₁ⱼ) varíen según cada individuo. Estiman además el parámetro de covarianza Cov(u₀, u₁) = ρ₀₁·τ₀·τ₁ entre el nivel inicial y la tasa de cambio en el tiempo.",
      formulaExplain: "Y_ij = (β₀ + u_0j) + (β₁ + u_1j)·Tiempo_ij + ε_ij, con [u₀ⱼ, u₁ⱼ] ~ NVM(0, Σ_u). Una correlación negativa ρ₀₁ refleja que los pacientes con peor estado inicial recuperan más aceleradamente.",
      keyConcepts: [
        { term: "Pendiente Aleatoria (u_1j)", desc: "Desviación individual en la trayectoria o sensibilidad a la terapia en el tiempo." },
        { term: "Matriz de Covarianza (Σ_u)", desc: "Estima las varianzas τ₀², τ₁² y la correlación ρ₀₁ entre intercepto basal y pendiente." },
        { term: "Medidas Repetidas Longitudinales", desc: "Múltiples registros anidados dentro de un mismo paciente a lo largo del tiempo." },
        { term: "Estructura AR(1)", desc: "Modelado de correlación residual que decae conforme se amplía la distancia temporal entre mediciones." }
      ]
    },
    simulation_en: {
      name: "The Ultimate Mixed Model Simulator: Random Slopes",
      description: "Adjust the slope variance τ₁ and baseline correlation ρ₀₁. Watch how individual patient recovery trajectories fan out, intersect, and converge over the 6-month trial!"
    },
    simulation_es: {
      name: "Simulador de Modelos Mixtos: Pendientes Aleatorias",
      description: "Modifica la dispersión de pendientes τ₁ y la correlación basal ρ₀₁. ¡Observa cómo las trayectorias de recuperación de cada paciente se abren en abanico y se cruzan a lo largo de 6 meses!"
    },
    interpretation_en: {
      title: "MixedLM Output Interpretation",
      recommendation: "Average recovery rate is β₁ = +2.4 points/month (p < 0.001). Correlation ρ₀₁ = -0.42 confirms that patients starting with severe cognitive deficits make the largest relative monthly strides.",
      metrics: [
        { label: "Population Slope (Fixed β₁)", note: "+2.40 pts/month (p < 0.001)" },
        { label: "Slope Variance (τ₁)", note: "0.85 pts/month (Substantial patient heterogeneity)" },
        { label: "Intercept-Slope Corr (ρ₀₁)", note: "-0.42 (Catch-up recovery effect)" },
        { label: "Likelihood Ratio vs Random Int", note: "χ² = 28.4, p < 0.0001 (Random slopes mandatory)" }
      ]
    },
    interpretation_es: {
      title: "Interpretación de Salida MixedLM",
      recommendation: "La tasa media de mejora es β₁ = +2,4 puntos/mes (p < 0,001). La correlación ρ₀₁ = -0,42 corrobora que quienes parten de déficits severos experimentan los mayores avances relativos.",
      metrics: [
        { label: "Pendiente Poblacional (β₁)", note: "+2,40 pts/mes (p < 0,001)" },
        { label: "Dispersión de Pendientes (τ₁)", note: "0,85 pts/mes (Elevada heterogeneidad individual)" },
        { label: "Correlación Intercepto-Pendiente (ρ₀₁)", note: "-0,42 (Efecto de convergencia o alcance)" },
        { label: "Razón de Verosimilitud vs Intercepto", note: "χ² = 28,4, p < 0,0001 (Pendientes aleatorias indispensables)" }
      ]
    },
    quiz_en: {
      question: "In a longitudinal Random Slope model, what does a negative estimated correlation ρ₀₁ between intercept and slope indicate?",
      options: [
        "The model is mathematically unstable and must be restricted to fixed slopes",
        "Patients with lower baseline scores at time zero experience faster rates of improvement over time (catch-up effect)",
        "The overall treatment effect reverses and becomes harmful over time",
        "Residual variance exceeds between-subject variance, violating model assumptions"
      ],
      explanation: "Clinical and mathematical perfection! A negative ρ₀₁ indicates that lower baseline values associate with steeper positive trajectories (convergence/catch-up)."
    },
    quiz_es: {
      question: "¿Qué indica en un modelo longitudinal de Pendientes Aleatorias una correlación negativa estimada ρ₀₁ entre intercepto y pendiente?",
      options: [
        "Que el modelo es matemáticamente inestable y debe restringirse a pendientes fijas",
        "Que los pacientes que inician con puntuaciones basales más bajas experimentan tasas de recuperación más veloces (efecto de convergencia o alcance)",
        "Que el tratamiento pierde eficacia y se vuelve perjudicial con el tiempo",
        "Que la varianza residual supera a la varianza entre sujetos, vulnerando los supuestos"
      ],
      explanation: "¡Perfección clínica y estadística! Una correlación negativa ρ₀₁ demuestra que valores basales inferiores se asocian a pendientes más empinadas de recuperación."
    }
  },

  16: {
    case_en: {
      title: "Case Study: Surgical Site Infections Across 40 Hospital Departments",
      context: "A health authority tracks surgical site infections (0 = Clean, 1 = Infected) across N = 2,400 surgeries nested in J = 40 surgical clinics. Infection rates vary from 1.2% in specialized cardiac clinics to 14.8% in trauma surgery.",
      question: "Why do we require Generalized Linear Mixed Models (GLMM) when responses are non-normal (binary/count) and data is clustered?"
    },
    case_es: {
      title: "Caso de Estudio: Infecciones Quirúrgicas en 40 Departamentos",
      context: "Un sistema sanitario monitoriza infecciones de herida quirúrgica (0 = Sin infección, 1 = Infectada) en N = 2.400 cirugías realizadas en J = 40 departamentos. La incidencia oscila entre el 1,2% en cirugía cardíaca y el 14,8% en traumatología.",
      question: "¿Por qué es indispensable un Modelo Lineal Mixto Generalizado (GLMM) ante variables no normales (binarias/conteos) con estructura agrupada?"
    },
    theory_en: {
      summary: "GLMM marries Generalized Linear Models (link functions for non-normal distributions like binomial or Poisson) with hierarchical random effects. It models clustered log-odds: logit(p_ij) = β₀ + β₁·X_ij + u_0j.",
      formulaExplain: "η_ij = g(E[Y_ij]) = X_ij·β + Z_ij·u. For binary data, the logit link maps probabilities to real numbers while random clinic effects u_0j ~ N(0, τ²) capture unobserved hospital-level risk.",
      keyConcepts: [
        { term: "Binomial GLMM", desc: "Models binary responses clustered within hospitals, schools, or litters." },
        { term: "Poisson / Negative Binomial GLMM", desc: "Models overdispersed count data with hierarchical random effects." },
        { term: "Link Function g(μ)", desc: "Maps expected probability/rate to the linear predictor scale (logit, log, probit)." },
        { term: "Laplace Approximation & AGHQ", desc: "Numerical integration techniques used to solve analytically intractable random effect integrals." }
      ]
    },
    theory_es: {
      summary: "Los GLMM combinan los Modelos Lineales Generalizados (funciones de enlace para respuestas no gaussianas como binomial o Poisson) con efectos aleatorios jerárquicos: logit(p_ij) = β₀ + β₁·X_ij + u_0j.",
      formulaExplain: "η_ij = g(E[Y_ij]) = X_ij·β + Z_ij·u. Para datos binarios, el enlace logit transforma probabilidades al rango real mientras los efectos aleatorios u_0j ~ N(0, τ²) modelan el riesgo propio de cada centro.",
      keyConcepts: [
        { term: "GLMM Binomial", desc: "Modela respuestas binarias (éxito/fracaso) anidadas en clínicas, centros o sujetos." },
        { term: "GLMM Poisson / Binomial Negativa", desc: "Modela recuentos con sobredispersión mediante efectos aleatorios grupales." },
        { term: "Función de Enlace g(μ)", desc: "Traduce la media esperada a la escala aditiva del predictor lineal (logit, log, probit)." },
        { term: "Aproximación de Laplace y AGHQ", desc: "Métodos de integración numérica para resolver integrales complejas de efectos aleatorios." }
      ]
    },
    simulation_en: {
      name: "GLMM Cluster-Risk Simulator",
      description: "Vary clinic-level hygiene variance τ². Observe how predicted infection probabilities diverge across departments while patient-level risk factors remain constant!"
    },
    simulation_es: {
      name: "Simulador de Riesgo por Clúster en GLMM",
      description: "Modifica la variabilidad higiénica entre clínicas τ². ¡Comprueba cómo divergen las probabilidades predichas de infección entre departamentos manteniendo constantes los factores del paciente!"
    },
    interpretation_en: {
      title: "GLMM Output Interpretation",
      recommendation: "Antimicrobial prophylaxis reduces infection odds by 58% (OR = 0.42, p < 0.001). Clinic random variance τ = 0.65 reveals substantial systemic variation between hospital departments.",
      metrics: [
        { label: "Fixed Effect OR (Prophylaxis)", note: "0.42 (p < 0.001, 58% lower odds of infection)" },
        { label: "Between-Clinic SD (τ)", note: "0.65 in log-odds scale" },
        { label: "Intraclass Correlation (latent)", note: "ICC_latent = 0.11" },
        { label: "Integration Technique", note: "Adaptive Gauss-Hermite Quadrature (nAGQ = 7)" }
      ]
    },
    interpretation_es: {
      title: "Interpretación de Salida GLMM",
      recommendation: "La profilaxis antimicrobiana reduce las odds de infección un 58% (OR = 0,42, p < 0,001). La varianza clínica τ = 0,65 delata una marcada disparidad sistémica entre quirófanos.",
      metrics: [
        { label: "Efecto Fijo OR (Profilaxis)", note: "0,42 (p < 0,001, 58% menos chances de infección)" },
        { label: "DE Entre Quirófanos (τ)", note: "0,65 en escala log-odds" },
        { label: "Correlación Intraclase Latente", note: "CCI_latente = 0,11" },
        { label: "Método de Integración", note: "Cuadratura Gauss-Hermite Adaptativa (nAGQ = 7)" }
      ]
    },
    quiz_en: {
      question: "When must an analyst transition from a standard Linear Mixed Model (LMM) to a Generalized Linear Mixed Model (GLMM)?",
      options: [
        "When the number of random effect groups exceeds 100",
        "When the response variable is non-continuous and non-normal (such as binary binary success/failure or count rates) combined with clustered hierarchical dependency",
        "When the model contains multiple random slopes that correlate negatively",
        "When predictors correlate heavily and cause multicollinearity"
      ],
      explanation: "Exact! LMM requires a continuous Gaussian conditional outcome. When responses are discrete (binary, binomial, Poisson) and clustered, GLMM with a link function is mandatory."
    },
    quiz_es: {
      question: "¿Cuándo es imperativo pasar de un Modelo Lineal Mixto estándar (LMM) a un Modelo Lineal Mixto Generalizado (GLMM)?",
      options: [
        "Cuando el número de grupos en los efectos aleatorios supera los 100",
        "Cuando la variable de respuesta es discreta y no gaussiana (como desenlaces binarios de éxito/fracaso o recuentos) y los datos presentan estructura agrupada",
        "Cuando el modelo incluye múltiples pendientes aleatorias con correlación negativa",
        "Cuando los predictores exhiben alta multicolinealidad entre sí"
      ],
      explanation: "¡Exacto! LMM exige una variable continua condicionalmente normal. Cuando los desenlaces son discretos (binarios, Poisson, conteos) y están agrupados, GLMM es estrictamente indispensable."
    }
  },

  17: {
    case_en: {
      title: "Case Study: Outdoor Temperature vs Energy Consumption (U-Shaped Curve)",
      context: "A municipal grid records daily temperature (X in °C) and electricity consumption (Y in MWh). Power demand spikes both in freezing winters (-10°C, electric heating) and blistering summers (+35°C, air conditioning), forming a U-shaped non-linear curve.",
      question: "Why do Generalized Additive Models (GAMs) model complex non-linear relationships without subjective polynomial guessing?"
    },
    case_es: {
      title: "Caso de Estudio: Temperatura Exterior y Consumo Energético (Curva en U)",
      context: "Una red eléctrica monitoriza temperatura diaria (X en °C) y consumo eléctrico (Y en MWh). La demanda se dispara tanto en inviernos gélidos (-10 °C, calefacción) como en veranos caniculares (+35 °C, aire acondicionado), formando una curva en U no lineal.",
      question: "¿Por qué los Modelos Aditivos Generalizados (GAMs) resuelven no linealidades complejas sin adivinanzas subjetivas de polinomios?"
    },
    theory_en: {
      summary: "GAMs replace rigid linear terms β·X with flexible, data-driven smooth functions f(X) constructed from penalized regression splines. The model automatically optimizes the balance between smoothness and data fit using Restricted Marginal Likelihood (REML).",
      formulaExplain: "Y = β₀ + Σ f_j(X_j) + ε, where f(X) = Σ b_k(X)·β_k. Penalized smoothing minimizes: ||Y - f(X)||² + λ ∫ [f''(x)]² dx. The penalty parameter λ prevents overfitting.",
      keyConcepts: [
        { term: "Penalized Splines (P-Splines)", desc: "Smooth curves constructed by joining polynomial segments at knots with curvature penalties." },
        { term: "Effective Degrees of Freedom (EDF)", desc: "Quantifies spline non-linearity. EDF = 1 is a straight line; EDF > 3 indicates rich non-linear curvature." },
        { term: "Smoothing Penalty (λ)", desc: "Controls wiggle penalty: large λ forces a straight line; λ = 0 interpolates every point." },
        { term: "Additive Modularity", desc: "Allows examining the isolated non-linear impact of each variable independently." }
      ]
    },
    theory_es: {
      summary: "Los GAMs sustituyen los términos lineales rígidos β·X por funciones suaves continuas f(X) generadas a partir de splines de regresión penalizados. El modelo optimiza automáticamente el equilibrio entre suavidad y ajuste mediante REML.",
      formulaExplain: "Y = β₀ + Σ f_j(X_j) + ε, donde f(X) = Σ b_k(X)·β_k. La penalización minimiza: ||Y - f(X)||² + λ ∫ [f''(x)]² dx. El parámetro λ penaliza oscilaciones excesivas.",
      keyConcepts: [
        { term: "Splines Penalizados (P-Splines)", desc: "Curvas suaves construidas uniendo segmentos polinómicos en nudos con penalización por curvatura." },
        { term: "Grados de Libertad Efectivos (EDF)", desc: "Miden la no linealidad. EDF = 1 es una recta; EDF > 3 refleja curvaturas complejas." },
        { term: "Parámetro de Suavizado (λ)", desc: "Controla la penalización de oscilación: λ grande fuerza una recta; λ = 0 sobreajusta los datos." },
        { term: "Modularidad Aditiva", desc: "Permite inspeccionar el impacto suave no lineal de cada variable manteniendo la interpretabilidad." }
      ]
    },
    simulation_en: {
      name: "GAM Spline & Smoothing Simulator",
      description: "Adjust smoothing penalty λ and the number of spline basis functions. Watch how the spline adapts smoothly from an underfit linear bar to the true U-shaped energy curve!"
    },
    simulation_es: {
      name: "Simulador de Splines y Suavizado en GAM",
      description: "Modifica el parámetro de penalización λ y el número de funciones base. ¡Comprueba cómo el spline se adapta desde una recta rígida hasta capturar la curva en U real!"
    },
    interpretation_en: {
      title: "GAM Output Interpretation",
      recommendation: "EDF = 4.82 confirms robust non-linear curvature (p < 0.0001). Grid operators must schedule peak reserve capacity whenever forecasted temperatures drop below 2°C or exceed 26°C.",
      metrics: [
        { label: "Effective Degrees of Freedom (EDF)", note: "4.82 (Substantial non-linear U-shape)" },
        { label: "Optimal Smoothing Penalty (λ)", note: "0.24 (Selected automatically by REML)" },
        { label: "Deviance Explained", note: "88.4% of total energy variance captured" },
        { label: "Comfort Temperature Trough", note: "18.5°C (Minimum electricity demand)" }
      ]
    },
    interpretation_es: {
      title: "Interpretación de Salida GAM",
      recommendation: "El EDF = 4,82 confirma una curvatura no lineal robusta (p < 0,0001). La red debe programar reservas energéticas críticas cuando la temperatura baje de 2 °C o supere los 26 °C.",
      metrics: [
        { label: "Grados de Libertad Efectivos (EDF)", note: "4,82 (Marcada curvatura no lineal en U)" },
        { label: "Penalización Óptima (λ)", note: "0,24 (Seleccionada automáticamente por REML)" },
        { label: "Desviación Explicada", note: "88,4% de la varianza energética explicada" },
        { label: "Zona de Confort Mínimo", note: "18,5 °C (Mínimo consumo eléctrico)" }
      ]
    },
    quiz_en: {
      question: "What does an Effective Degrees of Freedom (EDF) value of EDF = 4.8 for a smooth term f(X) signify in a Generalized Additive Model (GAM)?",
      options: [
        "The model is severely overparameterized and has exhausted available sample points",
        "The estimated relationship is non-linear and requires roughly the complexity of a 4th-to-5th degree polynomial curve without forcing polynomial edge instability",
        "The predictor is collinear with 4 other variables in the model",
        "The null hypothesis of zero effect is rejected at α = 0.048"
      ],
      explanation: "Superb! In GAM theory, EDF = 1 indicates a simple linear relationship. An EDF of ~4.8 denotes a smooth, highly non-linear curve with multiple bends."
    },
    quiz_es: {
      question: "¿Qué significa un valor de Grados de Libertad Efectivos EDF = 4,8 para un término suave f(X) en un Modelo Aditivo Generalizado (GAM)?",
      options: [
        "Que el modelo está sobreparametrizado y ha agotado los puntos muestrales",
        "Que la relación funcional es marcadamente no lineal y posee la flexibilidad aproximada de una curva polinómica de 4º o 5º orden sin sus inestabilidades en los bordes",
        "Que el predictor es colineal con otras 4 variables del modelo",
        "Que la hipótesis nula de ausencia de efecto se rechaza con α = 0,048"
      ],
      explanation: "¡Conocimiento magistral! En GAMs, EDF = 1 equivale a una recta simple. Un EDF de ~4,8 denota una curva suave y flexible con múltiples puntos de inflexión."
    }
  },

  18: {
    case_en: {
      title: "Case Study: Cancer Therapy Survival Time (Right-Censoring)",
      context: "A clinical oncology trial compares novel immunotherapy against standard chemotherapy across N = 200 lung cancer patients over 36 months. At trial conclusion, 72 patients remain alive and active (their true survival time is right-censored).",
      question: "Why does standard regression fail with time-to-event data, and how do Kaplan-Meier curves and Cox Proportional Hazards handle censoring?"
    },
    case_es: {
      title: "Caso de Estudio: Supervivencia en Oncología (Censura por la Derecha)",
      context: "Un ensayo oncológico compara una inmunoterapia con quimioterapia estándar en N = 200 pacientes durante 36 meses. Al concluir el estudio, 72 pacientes siguen vivos (su tiempo de supervivencia exacto queda censurado por la derecha).",
      question: "¿Por qué fracasa la regresión clásica con tiempos hasta el evento y cómo resuelven la censura las curvas de Kaplan-Meier y los modelos de Cox?"
    },
    theory_en: {
      summary: "Survival analysis models time-to-event under incomplete observation (censoring). Kaplan-Meier non-parametrically estimates the survival function S(t) = P(T > t). The semi-parametric Cox Proportional Hazards model evaluates risk via Hazard Ratios (HR = e^β).",
      formulaExplain: "Hazard function: h(t | X) = h₀(t)·exp(β₁X₁ + ... + β_kX_k). The baseline hazard h₀(t) is left completely unspecified, requiring only the proportional hazards assumption: HR is constant over time.",
      keyConcepts: [
        { term: "Right-Censoring", desc: "Occurs when a patient does not experience the event before study termination or drops out." },
        { term: "Survival Function S(t)", desc: "Probability that a subject survives beyond time t: S(t) = P(T > t)." },
        { term: "Hazard Ratio (HR)", desc: "Ratio of event rates between treated and control groups. HR < 1 indicates protective treatment." },
        { term: "Proportional Hazards Assumption", desc: "Hazard ratio between two groups remains constant across the entire follow-up period." }
      ]
    },
    theory_es: {
      summary: "El análisis de supervivencia modela tiempos hasta un evento bajo observación incompleta (censura). Kaplan-Meier estima de forma no paramétrica la función de supervivencia S(t) = P(T > t). El modelo semiparamétrico de Riesgos Proporcionales de Cox evalúa el riesgo relativo mediante Hazard Ratios (HR = e^β).",
      formulaExplain: "Función de riesgo: h(t | X) = h₀(t)·exp(β₁X₁ + ... + β_kX_k). El riesgo basal h₀(t) no requiere especificación paramétrica, asumiendo únicamente que los riesgos son proporcionales en el tiempo.",
      keyConcepts: [
        { term: "Censura por la Derecha", desc: "Sucede cuando el sujeto no sufre el evento antes de terminar el estudio o se pierde en el seguimiento." },
        { term: "Función de Supervivencia S(t)", desc: "Probabilidad de que un individuo sobreviva más allá del tiempo t: S(t) = P(T > t)." },
        { term: "Hazard Ratio (HR)", desc: "Razón instantánea de tasas de eventos entre grupos. HR < 1 refleja reducción del riesgo." },
        { term: "Supuesto de Riesgos Proporcionales", desc: "La razón de riesgos entre grupos se mantiene constante a lo largo de todo el seguimiento." }
      ]
    },
    simulation_en: {
      name: "Kaplan-Meier Curve & Hazard Ratio Lab",
      description: "Adjust treatment hazard ratio HR and censoring rate. Watch the staircase Kaplan-Meier survival curves separate and observe log-rank test significance in real time!"
    },
    simulation_es: {
      name: "Curvas de Kaplan-Meier y Laboratorio de Hazard Ratio",
      description: "Modifica el Hazard Ratio del tratamiento y la tasa de censura. ¡Observa cómo se separan las curvas escalonadas de supervivencia y comprueba el test de log-rank en tiempo real!"
    },
    interpretation_en: {
      title: "Cox Proportional Hazards Output",
      recommendation: "Immunotherapy yields HR = 0.58 (p = 0.003), reducing risk of mortality by 42% over standard therapy. Schoenfeld residual test confirms proportional hazards hold (p = 0.62).",
      metrics: [
        { label: "Hazard Ratio (HR)", note: "0.58 (42% reduction in instantaneous mortality risk)" },
        { label: "95% Confidence Interval for HR", note: "[0.41, 0.83] (p = 0.003)" },
        { label: "Median Survival Gain", note: "Extended from 14.2 months to 24.8 months (+10.6 mos)" },
        { label: "Schoenfeld Residual Test", note: "p = 0.62 (Proportional hazards assumption satisfied)" }
      ]
    },
    interpretation_es: {
      title: "Salida del Modelo de Riesgos Proporcionales de Cox",
      recommendation: "La inmunoterapia logra una HR = 0,58 (p = 0,003), reduciendo el riesgo de mortalidad un 42% frente al tratamiento estándar. Los residuos de Schoenfeld confirman riesgos proporcionales (p = 0,62).",
      metrics: [
        { label: "Hazard Ratio (HR)", note: "0,58 (42% de reducción en la tasa instantánea de mortalidad)" },
        { label: "IC al 95% para la HR", note: "[0,41; 0,83] (p = 0,003)" },
        { label: "Ganancia en Mediana de Supervivencia", note: "Pasa de 14,2 a 24,8 meses (+10,6 meses)" },
        { label: "Test de Schoenfeld", note: "p = 0,62 (Supuesto de proporcionalidad plenamente cumplido)" }
      ]
    },
    quiz_en: {
      question: "What does an estimated Hazard Ratio of HR = 0.70 with 95% CI [0.55, 0.89] signify in a randomized oncology trial?",
      options: [
        "Patients on treatment live 30% longer in total calendar months",
        "At any given instant in time, patients in the treatment arm experience a 30% lower instantaneous rate of the event compared to control",
        "70% of treated patients achieve complete remission after 5 years",
        "The treatment reduces absolute mortality by exactly 30 percentage points"
      ],
      explanation: "Clinical mastery! A Hazard Ratio compares instantaneous event rates. HR = 0.70 represents a 30% reduction in the hazard rate at any point during follow-up."
    },
    quiz_es: {
      question: "¿Qué indica un Hazard Ratio estimado de HR = 0,70 con IC al 95% [0,55; 0,89] en un ensayo oncológico aleatorizado?",
      options: [
        "Que los pacientes del grupo tratado viven un 30% más de meses en el calendario",
        "Que en cualquier instante de tiempo dado, los pacientes tratados experimentan una tasa instantánea de eventos un 30% inferior al grupo control",
        "Que el 70% de los pacientes tratados alcanza la remisión completa a los 5 años",
        "Que el tratamiento reduce la mortalidad absoluta exactamente en 30 puntos porcentuales"
      ],
      explanation: "¡Dominio clínico impecable! La Hazard Ratio evalúa tasas instantáneas de riesgo: HR = 0,70 equivale a una reducción instantánea del 30% en el peligro del evento."
    }
  },

  19: {
    case_en: {
      title: "Case Study: Rare Disease & The Positive Diagnostic Test",
      context: "A rare metabolic disorder has a base prevalence of 0.1% (1 in 1,000). A diagnostic test boasts 99% sensitivity and 95% specificity. A patient tests positive. The physician informs the patient: 'You have a 95% chance of being sick!'",
      question: "Why is the physician committing the Base Rate Fallacy, and how does Bayes' Theorem integrate prior knowledge with evidence?"
    },
    case_es: {
      title: "Caso de Estudio: Enfermedad Rara y Prueba Diagnóstica Positiva",
      context: "Un trastorno metabólico raro tiene una prevalencia del 0,1% (1 de cada 1.000 personas). Un test posee 99% de sensibilidad y 95% de especificidad. Un paciente da positivo. El médico le dice: '¡Tiene un 95% de probabilidad de estar enfermo!'",
      question: "¿Por qué el médico incurre en la Falacia de la Tasa Base y cómo combina el Teorema de Bayes la información previa con la evidencia?"
    },
    theory_en: {
      summary: "In Bayesian statistics, parameters and hypotheses are treated as random variables possessing probability distributions. Bayes' Theorem formalizes rational learning: Posterior ∝ Likelihood × Prior. When base rates are rare, false positives can vastly outnumber true positives.",
      formulaExplain: "P(Disease | Positive) = [P(Pos | Dis)·P(Dis)] / [P(Pos | Dis)·P(Dis) + P(Pos | Healthy)·P(Healthy)]. With 0.1% prevalence, the true posterior probability is only ~1.9%!",
      keyConcepts: [
        { term: "Prior Distribution P(θ)", desc: "State of scientific knowledge or belief before observing new experimental data." },
        { term: "Likelihood P(Data | θ)", desc: "Probability of generating observed data across different parameter values." },
        { term: "Posterior Distribution P(θ | Data)", desc: "Updated synthesis of prior knowledge and empirical evidence." },
        { term: "Base Rate Fallacy", desc: "Ignoring background prevalence when evaluating conditional test probabilities." }
      ]
    },
    theory_es: {
      summary: "En la estadística bayesiana, los parámetros y las hipótesis se modelan mediante distribuciones de probabilidad. El Teorema de Bayes formaliza el aprendizaje racional: Posteriori ∝ Verosimilitud × Priori. En eventos infrecuentes, los falsos positivos superan a los positivos reales.",
      formulaExplain: "P(Enfermo | Positivo) = [P(Pos | Enf)·P(Enf)] / [P(Pos | Enf)·P(Enf) + P(Pos | Sano)·P(Sano)]. Con una prevalencia del 0,1%, ¡la probabilidad posterior real es de apenas el 1,9%!",
      keyConcepts: [
        { term: "Distribución a Priori P(θ)", desc: "Estado de conocimiento o creencia científica previo a observar los nuevos datos." },
        { term: "Función de Verosimilitud P(Datos | θ)", desc: "Probabilidad del conjunto de datos observado para cada valor del parámetro." },
        { term: "Distribución a Posteriori P(θ | Datos)", desc: "Síntesis actualizada que une el conocimiento previo con la evidencia empírica." },
        { term: "Falacia de la Tasa Base", desc: "Ignorar la prevalencia basal al interpretar la probabilidad posterior de una prueba." }
      ]
    },
    simulation_en: {
      name: "Bayesian Update Simulator",
      description: "Adjust prior prevalence and test specificity. Watch the prior distribution update through the likelihood function into the posterior distribution in real time!"
    },
    simulation_es: {
      name: "Simulador de Actualización Bayesiana",
      description: "Ajusta la prevalencia a priori y la especificidad. ¡Observa cómo la distribución a priori se actualiza mediante la función de verosimilitud hasta conformar la posteriori!"
    },
    interpretation_en: {
      title: "Bayesian Outcome & Decision",
      recommendation: "Posterior probability of disease is only 1.94%. Perform a confirmatory secondary test with independent error modalities before starting invasive treatment.",
      metrics: [
        { label: "Prior Probability P(Disease)", note: "0.001 (0.1% base rate)" },
        { label: "Positive Predictive Value (PPV)", note: "1.94% (Posterior probability of disease)" },
        { label: "False Positive Ratio", note: "50 false positives for every 1 true positive" },
        { label: "After 2nd Independent Positive", note: "Posterior jumps to 98.2% (Diagnostic certainty)" }
      ]
    },
    interpretation_es: {
      title: "Resultado y Decisión Bayesiana",
      recommendation: "La probabilidad a posteriori de enfermedad es de apenas el 1,94%. Realiza una prueba confirmatoria ortogonal antes de iniciar terapias invasivas.",
      metrics: [
        { label: "Probabilidad a Priori P(Enfermedad)", note: "0,001 (Tasa base del 0,1%)" },
        { label: "Valor Predictivo Positivo (VPP)", note: "1,94% (Probabilidad a posteriori real)" },
        { label: "Proporción de Falsos Positivos", note: "50 falsos positivos por cada 1 enfermo real" },
        { label: "Tras 2º Test Positivo Independiente", note: "La posteriori salta al 98,2% (Certeza diagnóstica)" }
      ]
    },
    quiz_en: {
      question: "What is the fundamental philosophical distinction between frequentist and Bayesian statistics regarding unknown parameters θ?",
      options: [
        "Frequentists use computers, while Bayesians rely on analytical integrals",
        "Frequentists treat parameter θ as an unknown fixed constant and consider data random, while Bayesians model parameter θ itself as a random variable with a probability distribution",
        "Frequentists evaluate only binary outcomes, while Bayesians evaluate continuous outcomes",
        "Bayesian inference can only be computed when sample size N is less than 30"
      ],
      explanation: "Profound philosophical clarity! Frequentists view parameters as fixed constants. Bayesians express all scientific uncertainty regarding parameters via probability distributions."
    },
    quiz_es: {
      question: "¿Cuál es la diferencia filosófica y metodológica fundamental entre la estadística frecuentista y la bayesiana sobre el parámetro θ?",
      options: [
        "Los frecuentistas usan computación numérica y los bayesianos integrales analíticas exactas",
        "Los frecuentistas consideran el parámetro θ como una constante fija desconocida y los datos como aleatorios; los bayesianos modelan al propio parámetro θ como una variable aleatoria dotada de distribución de probabilidad",
        "Los frecuentistas solo analizan respuestas binarias y los bayesianos continuas",
        "La inferencia bayesiana solo es válida cuando el tamaño muestral N es inferior a 30"
      ],
      explanation: "¡Claridad conceptual de primer orden! Los frecuentistas conciben los parámetros como constantes fijas; los bayesianos modelan la incertidumbre asignando distribuciones de probabilidad a los parámetros."
    }
  },

  20: {
    case_en: {
      title: "Case Study: Complex High-Dimensional Distributions Unintegrable by Hand",
      context: "A research team specifies a 20-parameter non-linear hierarchical pharmacokinetic model. The Bayesian denominator integral ∫ P(D|θ)P(θ)dθ is mathematically impossible to solve analytically in 20 dimensions.",
      question: "How do Markov Chain Monte Carlo (MCMC) and Hamiltonian Monte Carlo (HMC) sample the full posterior without calculating the normalizing denominator?"
    },
    case_es: {
      title: "Caso de Estudio: Distribuciones Complejas Analíticamente Inintegrables",
      context: "Un equipo formula un modelo farmacocinético jerárquico no lineal de 20 parámetros. La integral del denominador bayesiano ∫ P(D|θ)P(θ)dθ es analíticamente irresoluble en 20 dimensiones.",
      question: "¿Cómo logran MCMC y Monte Carlo Hamiltoniano (HMC) muestrear la distribución posterior completa sin evaluar el denominador normalizador?"
    },
    theory_en: {
      summary: "MCMC bypasses the intractable denominator by constructing a Markov chain whose stationary distribution is exactly the target posterior. Hamiltonian Monte Carlo (HMC/NUTS, used in Stan and PyMC) simulates frictionless particle physics along the gradient ∇log P(θ|D) to explore high dimensions efficiently.",
      formulaExplain: "Hamilton's equations: dq/dt = ∂H/∂p, dp/dt = -∂H/∂q. By translating parameter geometry into potential energy and gradient momentum into kinetic energy, HMC avoids random-walk diffusion.",
      keyConcepts: [
        { term: "Hamiltonian Monte Carlo (HMC)", desc: "Physics-inspired sampling utilizing gradient vectors ∇log P to glide through complex geometries." },
        { term: "Gelman-Rubin Statistic (R̂)", desc: "Convergence diagnostic: R̂ < 1.05 proves multiple independent chains have converged to the identical target." },
        { term: "Effective Sample Size (ESS)", desc: "Number of statistically independent draws produced after accounting for autocorrelation." },
        { term: "Hairy Caterpillar Traceplot", desc: "Visual proof of stationarity: chains overlay identically and fluctuate uniformly around the mode." }
      ]
    },
    theory_es: {
      summary: "MCMC sortea el denominador intratable generando una cadena de Markov cuya distribución estacionaria es exactamente la posterior objetivo. Monte Carlo Hamiltoniano (HMC/NUTS, en Stan y PyMC) simula física hamiltoniana guiada por el gradiente ∇log P(θ|D) para muestrear espacios complejos.",
      formulaExplain: "Ecuaciones de Hamilton: dq/dt = ∂H/∂p, dp/dt = -∂H/∂q. Al traducir la geometría del parámetro a energía potencial y el gradiente a energía cinética, HMC supera la parálisis del paseo aleatorio.",
      keyConcepts: [
        { term: "Monte Carlo Hamiltoniano (HMC)", desc: "Muestreador inspirado en la física que utiliza gradientes ∇log P para explorar altas dimensiones." },
        { term: "Estadístico de Gelman-Rubin (R̂)", desc: "Diagnóstico de convergencia: R̂ < 1,05 demuestra que múltiples cadenas independientes muestrean la misma distribución." },
        { term: "Tamaño Muestral Efectivo (ESS)", desc: "Número de extracciones incorrelacionadas tras descontar la autocorrelación de la cadena." },
        { term: "Gráfico de Oruga Peluda (Traceplot)", desc: "Evidencia visual de estacionariedad: cadenas superpuestas que oscilan uniformemente en torno a la moda." }
      ]
    },
    simulation_en: {
      name: "Hamiltonian MCMC Walker",
      description: "Watch Hamiltonian momentum vectors explore a challenging banana-shaped posterior geometry. Compare HMC against naive random-walk Metropolis-Hastings!"
    },
    simulation_es: {
      name: "Caminante MCMC Hamiltoniano",
      description: "Observa cómo vectores de momento hamiltonianos exploran una geometría posterior en forma de plátano. ¡Compara HMC frente al paseo aleatorio ineficiente de Metropolis-Hastings!"
    },
    interpretation_en: {
      title: "MCMC Convergence Diagnostics",
      recommendation: "All 4 chains exhibit R̂ = 1.002 with Bulk-ESS > 2,400. Zero divergences observed. Posterior inference is fully validated for medical reporting.",
      metrics: [
        { label: "Gelman-Rubin (R̂)", note: "1.002 (Ideal convergence: R̂ < 1.05)" },
        { label: "Bulk Effective Sample Size (ESS)", note: "2,840 independent draws" },
        { label: "Divergent Transitions", note: "0 (No funnel geometry traps)" },
        { label: "95% Highest Density Interval (HDI)", note: "[1.82, 3.44] (Bayesian credible interval)" }
      ]
    },
    interpretation_es: {
      title: "Diagnósticos de Convergencia MCMC",
      recommendation: "Las 4 cadenas exhiben R̂ = 1,002 con Bulk-ESS > 2.400. Cero divergencias detectadas. La inferencia a posteriori queda plenamente validada.",
      metrics: [
        { label: "Gelman-Rubin (R̂)", note: "1,002 (Convergencia ideal: R̂ < 1,05)" },
        { label: "Tamaño Muestral Efectivo (ESS)", note: "2.840 muestras independientes" },
        { label: "Transiciones Divergentes", note: "0 (Sin colapsos geométricos)" },
        { label: "Intervalo de Credibilidad al 95% (HDI)", note: "[1,82; 3,44] (Rango bayesiano creíble)" }
      ]
    },
    quiz_en: {
      question: "What visual diagnostic and numeric threshold confirm healthy MCMC convergence in modern Bayesian modeling (Stan / PyMC)?",
      options: [
        "A traceplot displaying four separated lines with R̂ > 1.50",
        "A traceplot resembling a stationary 'hairy caterpillar' with Gelman-Rubin R̂ ≈ 1.00 (< 1.05) and zero divergent transitions",
        "An autocorrelation plot that stays strictly positive at lag 50",
        "Proposing an acceptance rate of exactly 100% in Metropolis-Hastings"
      ],
      explanation: "Razor-sharp mastery! Healthy MCMC chains explore the posterior seamlessly. A 'hairy caterpillar' traceplot and R̂ ≈ 1.00 prove chains are stationary and sampling identical geometry."
    },
    quiz_es: {
      question: "¿Qué diagnóstico visual y umbral numérico confirman una convergencia MCMC óptima en el modelado bayesiano moderno (Stan / PyMC)?",
      options: [
        "Un traceplot que muestre 4 líneas separadas y un R̂ > 1,50",
        "Un traceplot con apariencia de 'oruga peluda' estacionaria, estadístico Gelman-Rubin R̂ ≈ 1,00 (< 1,05) y ausencia de transiciones divergentes",
        "Un gráfico de autocorrelación que permanezca estrictamente positivo en el retardo 50",
        "Lograr una tasa de aceptación del 100% exacto en Metropolis-Hastings"
      ],
      explanation: "¡Riguroso y certero! Cadenas MCMC convergentes exploran la posterior con fluidez. El patrón de 'oruga peluda' y R̂ ≈ 1,00 demuestran que las cadenas son estacionarias y muestrean el mismo espacio."
    }
  },

  21: {
    case_en: {
      title: "Case Study: Spatial Soil Contamination Mapping (Gaussian Processes)",
      context: "Environmental scientists measure heavy metal soil pollution across 15 drill sites in an industrial basin. They need to predict contamination across the entire continuous surface, along with precise uncertainty bounds for unmeasured coordinates.",
      question: "How do Gaussian Processes (GPs) place prior distributions over infinite function spaces rather than fixed finite parameter sets?"
    },
    case_es: {
      title: "Caso de Estudio: Mapeo de Contaminación del Suelo (Procesos Gaussianos)",
      context: "Científicos ambientales miden metales pesados en 15 perforaciones en una cuenca industrial. Necesitan predecir la contaminación en toda la superficie continua, junto a límites precisos de incertidumbre en las coordenadas no medidas.",
      question: "¿Cómo definen los Procesos Gaussianos (GPs) distribuciones previas sobre espacios continuos de funciones en lugar de vectores fijos de parámetros?"
    },
    theory_en: {
      summary: "A Gaussian Process (GP) is a non-parametric Bayesian collection of infinite random variables, any finite subset of which has a joint multivariate Gaussian distribution. Instead of fitting a parametric formula, a GP defines a distribution over possible continuous functions f(x) ~ GP(m(x), k(x, x')).",
      formulaExplain: "Squared Exponential Kernel: k(x, x') = σ_f²·exp(-||x - x'||² / 2ℓ²). Points closer in space exhibit high covariance. Conditioning on observed points shrinks posterior predictive variance strictly to zero at measured locations.",
      keyConcepts: [
        { term: "Kernel Covariance Function k(x, x')", desc: "Defines the smoothness, amplitude, and spatial correlation length ℓ of the function space." },
        { term: "Lengthscale (ℓ)", desc: "Determines how rapidly correlation decays across spatial distance." },
        { term: "Posterior Predictive Mean", desc: "The optimal smooth interpolating function passing through observed points." },
        { term: "Predictive Uncertainty Band (± 2σ)", desc: "Expands in unmeasured regions and collapses tightly to zero at measured locations." }
      ]
    },
    theory_es: {
      summary: "Un Proceso Gaussiano (GP) es una colección no paramétrica bayesiana de infinitas variables aleatorias, donde cualquier subconjunto finito sigue una distribución normal multivariante. En lugar de ajustar fórmulas rígidas, un GP coloca una distribución sobre espacios de funciones f(x) ~ GP(m(x), k(x, x')).",
      formulaExplain: "Kernel Exponencial Cuadrático: k(x, x') = σ_f²·exp(-||x - x'||² / 2ℓ²). Puntos cercanos covarían fuertemente. Condicionar en datos observados reduce la varianza predictiva exactamente a cero en los puntos medidos.",
      keyConcepts: [
        { term: "Función Kernel de Covarianza k(x, x')", desc: "Determina la suavidad, amplitud y escala de correlación espacial ℓ del espacio de funciones." },
        { term: "Escala de Longitud (ℓ)", desc: "Fija la velocidad a la que decae la correlación al alejarse en el espacio." },
        { term: "Media Predictiva a Posteriori", desc: "La función de interpolación suave óptima que conecta las observaciones." },
        { term: "Banda de Incertidumbre (± 2σ)", desc: "Se expande en zonas inexploradas y colapsa exactamente a cero en las ubicaciones muestreadas." }
      ]
    },
    simulation_en: {
      name: "Gaussian Process (GP) Visualizer",
      description: "Click anywhere on the canvas to add observations. Watch how the posterior mean snaps to the point while the shaded uncertainty ribbon instantly pinches to zero!"
    },
    simulation_es: {
      name: "Visualizador de Procesos Gaussianos (GP)",
      description: "Haz clic en el lienzo para añadir observaciones. ¡Observa cómo la media posterior interpola el punto mientras la banda de incertidumbre colapsa de inmediato a cero!"
    },
    interpretation_en: {
      title: "Gaussian Process Spatial Result",
      recommendation: "Soil contamination exceeds safety threshold (>50 ppm) in the northeast quadrant with posterior probability P = 0.94. Immediate remediation required.",
      metrics: [
        { label: "Optimal Lengthscale (ℓ)", note: "2.4 km (Spatial correlation range)" },
        { label: "Output Variance (σ_f²)", note: "18.2 ppm²" },
        { label: "Uncertainty at Known Sites", note: "σ_pred = 0.00 ppm (Noise-free interpolation)" },
        { label: "Uncertainty in Exploration Gap", note: "σ_pred = ± 3.8 ppm (High exploration priority)" }
      ]
    },
    interpretation_es: {
      title: "Resultado Espacial del Proceso Gaussiano",
      recommendation: "La contaminación supera el umbral de seguridad (>50 ppm) en el cuadrante noreste con probabilidad posterior P = 0,94. Se requiere intervención prioritaria.",
      metrics: [
        { label: "Escala de Longitud Óptima (ℓ)", note: "2,4 km (Alcance de correlación espacial)" },
        { label: "Varianza de Salida (σ_f²)", note: "18,2 ppm²" },
        { label: "Incertidumbre en Puntos Medidos", note: "σ_pred = 0,00 ppm (Interpolación sin ruido)" },
        { label: "Incertidumbre en Zonas Desiertas", note: "σ_pred = ± 3,8 ppm (Prioridad de prospección)" }
      ]
    },
    quiz_en: {
      question: "What happens to the predictive uncertainty of a noiseless Gaussian Process (σ_noise = 0) at the exact coordinates of an observed data point?",
      options: [
        "The predicted variance converges to the marginal prior variance σ_f²",
        "The residual uncertainty shrinks strictly to zero, forcing the posterior function to interpolate through the observation",
        "The lengthscale ℓ collapses locally to zero",
        "The uncertainty becomes equal to the conditional mean of the RBF kernel"
      ],
      explanation: "Exact! Without measurement noise, the observed point is an absolute certainty. The conditional multivariate normal variance at that coordinate collapses to zero."
    },
    quiz_es: {
      question: "¿Qué le sucede a la incertidumbre predictiva de un Proceso Gaussiano sin ruido (σ_ruido = 0) en las coordenadas exactas de un dato observado?",
      options: [
        "La varianza predicha converge a la varianza marginal a priori σ_f²",
        "La incertidumbre residual se reduce exactamente a cero, obligando a la función posterior a interpolar estrictamente por el punto observado",
        "La escala de longitud ℓ colapsa localmente a cero",
        "La incertidumbre se iguala a la media condicional del kernel RBF"
      ],
      explanation: "¡Exacto! Sin ruido de medida, la observación es una certeza matemática. La varianza condicional multivariante normal en esa coordenada se anula por completo."
    }
  },

  22: {
    case_en: {
      title: "Case Study: Seeing vs Doing (Causal DAGs & Graph Surgery)",
      context: "A hospital observational database links medication prescription X to patient recovery Y. Sicker patients receive the drug more often (confounding by indication). Passive correlation P(Y | X) suggests the drug increases mortality, whereas an active randomized intervention do(X = 1) saves lives.",
      question: "Why does Judea Pearl's do-operator P(Y | do(X)) sever incoming causal arrows, and how do Hilbert spaces embed distributions?"
    },
    case_es: {
      title: "Caso de Estudio: Observar frente a Actuar (DAGs Causales y do-Cálculo)",
      context: "Una base de datos clínica vincula la prescripción del fármaco X con la recuperación Y. Los pacientes más graves reciben el fármaco con mayor frecuencia (confusión por indicación). La correlación pasiva P(Y | X) sugiere que el fármaco aumenta la mortalidad, mientras que una intervención activa do(X = 1) salva vidas.",
      question: "¿Por qué el do-operador de Judea Pearl P(Y | do(X)) corta las flechas causales entrantes y cómo incrustan los espacios de Hilbert las distribuciones?"
    },
    theory_en: {
      summary: "Association P(Y | X) is not causation P(Y | do(X)). Pearl's do-calculus represents physical intervention by performing 'graph surgery': severing all incoming arrows into treatment variable X. Reproducing Kernel Hilbert Spaces (RKHS) embed full probability distributions as elements μ_P ∈ ℋ to identify non-linear causal effects.",
      formulaExplain: "Back-Door Adjustment: P(Y | do(X = x)) = Σ_z P(Y | X = x, Z = z)·P(Z = z). Graph surgery isolates the unconfounded interventional distribution without requiring active RCT experimentation.",
      keyConcepts: [
        { term: "do-operator do(X = x)", desc: "Formalizes active external intervention vs passive conditioning." },
        { term: "Graph Surgery", desc: "Removing all inbound causal arrows into X to extinguish confounding backdoor paths." },
        { term: "Back-Door Criterion", desc: "Graphical rule identifying the exact conditioning set Z required to block spurious associations." },
        { term: "Kernel Mean Embedding in ℋ", desc: "Embedding probability distributions into Hilbert spaces: μ_P = E_P[k(·, X)] ∈ ℋ to evaluate causal distances." }
      ]
    },
    theory_es: {
      summary: "Asociación P(Y | X) no es causación P(Y | do(X)). El do-cálculo de Judea Pearl formaliza la intervención mediante 'cirugía de grafos': cortar todas las flechas entrantes hacia la variable de tratamiento X. Los Espacios de Hilbert con Núcleo Reproducible (RKHS) incrustan distribuciones completas como elementos μ_P ∈ ℋ para evaluar efectos causales no lineales.",
      formulaExplain: "Ajuste de Puerta Trasera: P(Y | do(X = x)) = Σ_z P(Y | X = x, Z = z)·P(Z = z). La cirugía de grafos aísla la distribución intervencional pura sin necesidad de ejecutar un ensayo físico.",
      keyConcepts: [
        { term: "do-operador do(X = x)", desc: "Formaliza la intervención física externa frente al mero condicionamiento observacional." },
        { term: "Cirugía de Grafos", desc: "Eliminar todas las flechas entrantes hacia X para clausurar los caminos de puerta trasera." },
        { term: "Criterio de Puerta Trasera", desc: "Regla gráfica que identifica el conjunto exacto de covariables Z necesario para bloquear asociaciones espurias." },
        { term: "Incrustación de Medias en ℋ", desc: "Representar distribuciones en espacios de Hilbert: μ_P = E_P[k(·, X)] ∈ ℋ para calcular distancias causales." }
      ]
    },
    simulation_en: {
      name: "Causal DAG & do-Operator Lab",
      description: "Toggle between passive observation P(Y | X) and causal intervention do(X). Watch Pearl's graph surgery snip the confounding arrows in real time!"
    },
    simulation_es: {
      name: "Laboratorio de DAGs Causales y Operador do",
      description: "Alterna entre observación pasiva P(Y | X) e intervención causal do(X). ¡Observa cómo la cirugía de grafos corta las flechas de confusión en tiempo real!"
    },
    interpretation_en: {
      title: "Causal Decision & Policy Assessment",
      recommendation: "Observational association was confounded (P(Recovery|No Drug) = 0.72 vs P(Recovery|Drug) = 0.54). Causal graph surgery proves the true interventional effect is positive: P(Recovery|do(Drug)) = 0.84.",
      metrics: [
        { label: "Observational Association", note: "-0.18 (Spurious harmful appearance)" },
        { label: "Causal Average Treatment Effect (ATE)", note: "+0.30 (True therapeutic benefit)" },
        { label: "Back-Door Set Conditioned", note: "{Severity, Age} (Backdoor paths completely blocked)" },
        { label: "Maximum Mean Discrepancy (MMD in ℋ)", note: "0.42 (Statistically validated causal separation)" }
      ]
    },
    interpretation_es: {
      title: "Decisión Causal y Evaluación de Políticas",
      recommendation: "La correlación observacional estaba confundida (P(Recuperación|Sin Fármaco) = 0,72 vs P(Recuperación|Fármaco) = 0,54). La cirugía causal demuestra que el efecto real es positivo: P(Recuperación|do(Fármaco)) = 0,84.",
      metrics: [
        { label: "Asociación Observacional", note: "-0,18 (Efecto perjudicial espurio)" },
        { label: "Efecto Causal Promedio (ATE)", note: "+0,30 (Beneficio terapéutico genuino)" },
        { label: "Conjunto de Puerta Trasera", note: "{Gravedad, Edad} (Caminos espurios neutralizados)" },
        { label: "Discrepancia Máxima de Medias (MMD en ℋ)", note: "0,42 (Separación causal estadísticamente validada)" }
      ]
    },
    quiz_en: {
      question: "What is the purpose of Judea Pearl's do-operator do(X = x) in a causal Directed Acyclic Graph (DAG)?",
      options: [
        "It conditions on all collider nodes and mediators to minimize residual confounding",
        "It simulates an active physical intervention by severing all incoming causal arrows into X, isolating the pure causal effect on Y from confounders",
        "It converts non-linear dependencies into linear correlations according to the backdoor theorem",
        "It calculates inverse probability weights without graphical theory"
      ],
      explanation: "Masterful causal acumen! The do-operator separates observational association P(Y|X) from true interventional action P(Y|do(X)) through graph surgery: cutting the arrows determining X."
    },
    quiz_es: {
      question: "¿Cuál es el propósito del operador do(X = x) de Judea Pearl en un Grafo Acíclico Dirigido (DAG) causal?",
      options: [
        "Condicionar en todos los colisionadores y mediadores para minimizar la confusión",
        "Simular una intervención física activa cortando todas las flechas causales entrantes hacia X, aislando el efecto causal directo sobre Y de cualquier factor de confusión",
        "Transformar dependencias no lineales en correlaciones lineales según el teorema de puerta trasera",
        "Calcular ponderaciones por inverso de probabilidad sin teoría de grafos"
      ],
      explanation: "¡Pensamiento causal de vanguardia! El operador do separa la asociación P(Y|X) de la intervención P(Y|do(X)) mediante cirugía de grafos: seccionando las flechas que determinan a X."
    }
  },

  23: {
    case_en: {
      title: "Case Study: Protein Folding & Financial Diffusion Under Continuous Noise",
      context: "A biophysics lab models molecular protein conformations driven by deterministic thermal gradient drift and continuous random Brownian motion collisions. Classical calculus dy/dt = f(y) fails because Brownian motion paths are nowhere differentiable.",
      question: "Why does Itô Calculus require the second-order expansion term ½·σ²·f''(X_t)·dt in Itô's Lemma?"
    },
    case_es: {
      title: "Caso de Estudio: Plegamiento de Proteínas y Difusión Financiera bajo Ruido",
      context: "Un laboratorio biofísico modela conformaciones moleculares impulsadas por gradientes térmicos y colisiones brownianas continuas. El cálculo diferencial clásico dy/dt = f(y) fracasa porque las trayectorias brownianas no son diferenciables en ningún punto.",
      question: "¿Por qué el Cálculo de Itô exige retener el término de segundo orden ½·σ²·f''(X_t)·dt en el Lema de Itô?"
    },
    theory_en: {
      summary: "Stochastic Differential Equations (SDEs) model systems evolving under deterministic drift and stochastic Brownian noise: dX_t = μ(X_t)dt + σ(X_t)dB_t. Because Brownian motion has non-zero quadratic variation ((dB_t)² = dt), standard chain rules are invalid and require Itô's Lemma.",
      formulaExplain: "Itô's Lemma: df(X_t) = [f'(X_t)·μ + ½·f''(X_t)·σ²]dt + f'(X_t)·σ·dB_t. The second derivative term ½·f''(X_t)·σ² dt is the non-zero correction arising from stochastic volatility.",
      keyConcepts: [
        { term: "Brownian Motion (B_t)", desc: "Continuous Gaussian process with independent increments: B_t - B_s ~ N(0, t - s)." },
        { term: "Deterministic Drift μ(X_t)dt", desc: "Expected directional trajectory or energy gradient flow." },
        { term: "Stochastic Diffusion σ(X_t)dB_t", desc: "Random shocks scaling with the square root of time (dt^½)." },
        { term: "Euler-Maruyama Scheme", desc: "Numerical integration algorithm for simulating continuous SDE sample trajectories." }
      ]
    },
    theory_es: {
      summary: "Las Ecuaciones Diferenciales Estocásticas (SDEs) modelan sistemas sujetos a una deriva determinista y ruido browniano estocástico: dX_t = μ(X_t)dt + σ(X_t)dB_t. Puesto que el movimiento browniano posee variación cuadrática no nula ((dB_t)² = dt), la regla de la cadena clásica debe corregirse mediante el Lema de Itô.",
      formulaExplain: "Lema de Itô: df(X_t) = [f'(X_t)·μ + ½·f''(X_t)·σ²]dt + f'(X_t)·σ·dB_t. El término de segunda derivada ½·f''(X_t)·σ² dt es la corrección obligatoria derivada de la volatilidad estocástica.",
      keyConcepts: [
        { term: "Movimiento Browniano (B_t)", desc: "Proceso gaussiano continuo con incrementos independientes: B_t - B_s ~ N(0, t - s)." },
        { term: "Deriva Determinista μ(X_t)dt", desc: "Trayectoria direccional esperada o flujo de gradiente de energía potencial." },
        { term: "Difusión Estocástica σ(X_t)dB_t", desc: "Perturbaciones aleatorias continuas que escalan con la raíz cuadrada del tiempo (dt^½)." },
        { term: "Esquema Euler-Maruyama", desc: "Algoritmo numérico fundamental para simular trayectorias continuas de SDEs." }
      ]
    },
    simulation_en: {
      name: "SDE Euler-Maruyama Trajectory Simulator",
      description: "Tweak drift velocity μ and diffusion volatility σ. Simulate 50 simultaneous stochastic paths and watch the Fokker-Planck probability density spread over time!"
    },
    simulation_es: {
      name: "Simulador de Trayectorias SDE: Euler-Maruyama",
      description: "Modifica la velocidad de deriva μ y la volatilidad estocástica σ. ¡Simula 50 trayectorias simultáneas y comprueba cómo la densidad de Fokker-Planck se dilata en el tiempo!"
    },
    interpretation_en: {
      title: "SDE Characteristics & Physics Decision",
      recommendation: "Drift μ = -0.50 stabilizes molecular folding toward minimal free energy, while diffusion σ = 1.2 enables stochastic barrier crossing out of local metastable traps.",
      metrics: [
        { label: "Deterministic Drift Rate (μ)", note: "-0.50 (Gradient potential descent)" },
        { label: "Stochastic Volatility (σ)", note: "1.20 (Thermal Langevin excitation)" },
        { label: "Quadratic Variation (dB_t)²", note: "Exact match: (dB_t)² = dt" },
        { label: "Stationary Distribution", note: "Ornstein-Uhlenbeck Gaussian equilibrium" }
      ]
    },
    interpretation_es: {
      title: "Características SDE y Decisión Física",
      recommendation: "La deriva μ = -0,50 estabiliza el plegamiento hacia el mínimo de energía libre, mientras la difusión σ = 1,20 permite superar barreras energéticas locales.",
      metrics: [
        { label: "Tasa de Deriva Determinista (μ)", note: "-0,50 (Descenso por gradiente de potencial)" },
        { label: "Volatilidad Estocástica (σ)", note: "1,20 (Excitación térmica de Langevin)" },
        { label: "Variación Cuadrática (dB_t)²", note: "Concordancia exacta: (dB_t)² = dt" },
        { label: "Distribución Estacionaria", note: "Equilibrio gaussiano de Ornstein-Uhlenbeck" }
      ]
    },
    quiz_en: {
      question: "According to Itô calculus, what is the definitive mathematical justification for retaining the second-order term ½·f''(X_t)·σ²·dt in Itô's Lemma?",
      options: [
        "Because the expectation of Brownian motion diverges quadratically over time",
        "Because the quadratic variation of Brownian motion is non-zero and deterministically equal to dt ((dB_t)² = dt), ensuring second-order Taylor terms do not vanish in the continuous limit",
        "Because Itô calculus only applies to discontinuous jump martingales",
        "Because the Stratonovich integral would otherwise generate non-zero drift in the potential gradient"
      ],
      explanation: "Phenomenal! Because (dB_t)² = dt is of the exact same first-order magnitude as dt, the second derivative in Taylor expansion persists. This is the bedrock of stochastic calculus."
    },
    quiz_es: {
      question: "¿Cuál es la justificación matemática concluyente según el cálculo de Itô para retener el término de segundo orden ½·f''(X_t)·σ²·dt en el Lema de Itô?",
      options: [
        "Que la esperanza del movimiento browniano diverge cuadráticamente con el tiempo",
        "Que la variación cuadrática del movimiento browniano es no nula y determinísticamente igual a dt ((dB_t)² = dt), impidiendo que los términos de Taylor de segundo orden se desvanezcan en el límite",
        "Que el cálculo de Itô solo es aplicable a martingalas con procesos de salto discontinuos",
        "Que la integral de Stratonovich produciría una deriva no nula en el gradiente de potencial"
      ],
      explanation: "¡Fenomenal! Puesto que (dB_t)² = dt es del mismo orden de magnitud infinitesimal que dt, la segunda derivada de la expansión de Taylor se preserva. Es el corazón del cálculo estocástico."
    }
  },

  24: {
    case_en: {
      title: "Case Study: Cortical Dynamics & Infinite-Dimensional Climate Systems",
      context: "At the absolute theoretical frontier of modern mathematical statistics, neuroscientists model non-linear cortical neural fields and geophysicists model turbulent climate attractors. Trajectories evolve on curved non-Euclidean Riemannian manifolds ℳ, driven by fractional rough noise with Hurst index H < 1/2, embedded in an infinite-dimensional causal Reproducing Kernel Hilbert Space ℋ.",
      question: "Why does this ultimate apex model require Terry Lyons' Rough Path theory and infinite-dimensional RKHS operators?"
    },
    case_es: {
      title: "Caso de Estudio: Dinámica Cortical y Sistemas Climáticos de Dimensión Infinita",
      context: "En el cénit teórico absoluto de la estadística matemática moderna, neurocientíficos modelan campos neuronales corticales y geofísicos estudian atractores climáticos turbulentos. Las trayectorias evolucionan sobre variedades riemannianas no euclidianas ℳ, impulsadas por ruido fraccionario rugoso con índice de Hurst H < 1/2, e incrustadas en un espacio causal de Hilbert ℋ de dimensión infinita.",
      question: "¿Por qué este modelo cenit apex requiere la teoría de Trayectorias Rugosas de Terry Lyons y operadores en espacios de Hilbert ℋ?"
    },
    theory_en: {
      summary: "When driving stochastic noise is extremely rough (Hurst exponent H < 1/2, p-variation index p > 2), classical Itô and Stratonovich integration collapse because the Itô map ceases to be continuous. Terry Lyons' Rough Path theory restores deterministic continuity by augmenting paths with higher-order iterated integrals ('Signatures'). Embedding these into infinite-dimensional Hilbert spaces with Riemannian geometry yields the unified mathematical pinnacle of statistics.",
      formulaExplain: "dX_t = -∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ. Φ is an infinite-dimensional free-energy potential on Riemannian manifold ℳ, ∇_ℳ is the Levi-Civita covariant gradient, and signatures ensure continuous stochastic solutions.",
      keyConcepts: [
        { term: "Riemannian Manifold (ℳ, g)", desc: "Curved non-Euclidean state space where distances and covariant derivatives are governed by metric tensor g." },
        { term: "Terry Lyons' Rough Paths", desc: "Augmenting sub-Brownian paths (H < 1/2, p > 2) with tensor signatures to guarantee continuous differential solutions." },
        { term: "Infinite-Dimensional RKHS (ℋ)", desc: "Function space equipped with an inner product reproducing kernel: ⟨f, k(·, x)⟩_ℋ = f(x)." },
        { term: "Unified Apex Synthesis (Ω)", desc: "Unifies non-parametric Bayes, causal graph surgery, stochastic SDEs, and differential geometry into one supreme model." }
      ]
    },
    theory_es: {
      summary: "Cuando el ruido estocástico es extremadamente rugoso (exponente de Hurst H < 1/2, variación p > 2), el cálculo de Itô y Stratonovich colapsa porque la aplicación de Itô pierde continuidad. La teoría de Trayectorias Rugosas de Terry Lyons restablece la continuidad determinista enriqueciendo el camino con integrales iteradas ('Signaturas'). Incrustarlas en espacios de Hilbert con geometría riemanniana constituye la cumbre unificada de la estadística.",
      formulaExplain: "dX_t = -∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough en ℋ. Φ representa un potencial de energía libre de dimensión infinita sobre la variedad riemanniana ℳ, ∇_ℳ es el gradiente covariante de Levi-Civita y las signaturas garantizan soluciones estocásticas continuas.",
      keyConcepts: [
        { term: "Variedad Riemanniana (ℳ, g)", desc: "Espacio no euclidiano curvado donde distancias y derivadas covariantes se rigen por el tensor métrico g." },
        { term: "Trayectorias Rugosas (Terry Lyons)", desc: "Enriquecer caminos sub-brownianos (H < 1/2, p > 2) con signaturas tensoriales para asegurar soluciones continuas." },
        { term: "RKHS de Dimensión Infinita (ℋ)", desc: "Espacio funcional con producto interno que reproduce evaluaciones: ⟨f, k(·, x)⟩_ℋ = f(x)." },
        { term: "Síntesis Unificada Apex (Ω)", desc: "Unifica inferencia bayesiana, cirugía causal, SDEs estocásticas y geometría diferencial en una formulación suprema." }
      ]
    },
    simulation_en: {
      name: "The Ultimate Apex Simulator: Manifold, Rough Paths & Vector Field",
      description: "Rotate the 3D non-Euclidean manifold ℳ. Dial down Hurst roughness H to 0.25 and watch Terry Lyons' rough signature trajectory track the potential descent gradient in ℋ!"
    },
    simulation_es: {
      name: "El Simulador Cenit Apex: Variedades, Trayectorias Rugosas y Campos Vectoriales",
      description: "Gira la variedad riemanniana 3D ℳ. Reduce la rugosidad de Hurst H a 0,25 y ¡observa cómo la signatura rugosa de Terry Lyons desciende por el gradiente de potencial en ℋ!"
    },
    interpretation_en: {
      title: "Apex Model Synthesis & Verified Theoretical Mastery",
      recommendation: "You have scaled the complete 24-level statistical continuum: from the descriptive Outlier Trap and Mixed Models Sweet Spot to Infinite-Dimensional SDEs on Curved Manifolds with Rough Paths. Claim your official Apex Certificate!",
      metrics: [
        { label: "Manifold Geometry (ℳ)", note: "Riemannian Metric Tensor with non-zero sectional curvature" },
        { label: "Rough Path Regime", note: "Hurst H = 0.28 (p-variation index p = 3.57 > 2)" },
        { label: "Causal Space Metric", note: "Infinite-Dimensional RKHS kernel operator in ℋ" },
        { label: "Curriculum Status", note: "Level 24 Apex Mastery Achieved (100% Complete)" }
      ]
    },
    interpretation_es: {
      title: "Síntesis del Modelo Apex y Maestría Teórica Verificada",
      recommendation: "Has culminado la trayectoria estadística completa de 24 niveles: desde la Trampa de los Atípicos y el Punto Clave de Modelos Mixtos hasta SDEs de Dimensión Infinita en Variedades Rugosas. ¡Reclama tu Certificado Oficial Apex!",
      metrics: [
        { label: "Geometría de la Variedad (ℳ)", note: "Tensor Métrico Riemanniano con curvatura seccional no nula" },
        { label: "Régimen de Trayectoria Rugosa", note: "Hurst H = 0,28 (Índice de p-variación p = 3,57 > 2)" },
        { label: "Métrica del Espacio Causal", note: "Operador integral de núcleo en RKHS de dimensión infinita ℋ" },
        { label: "Estado del Curriculum", note: "Maestría Cenit Nivel 24 Alcanzada (100% Completado)" }
      ]
    },
    quiz_en: {
      question: "Why does the apex equation dX_t = -∇_ℳ Φ dt + σ dB_t^rough strictly require Terry Lyons' Rough Path theory when Hurst exponent H < 1/2?",
      options: [
        "Because paths with H < 1/2 are Markovian and render the Fokker-Planck equation unsolvable",
        "Because for H < 1/2, the p-variation index exceeds p > 2, causing classical Itô/Stratonovich integration to lose continuity; the path must be enriched with higher-order tensor signatures to restore a continuous solution map",
        "Because curved Riemannian manifolds forbid diffusion tensors in fractional spaces",
        "Because the Malliavin derivative of the rough drift converges to zero in the reproducing kernel"
      ],
      explanation: "Ultimate Apex Mastery! Terry Lyons proved that for paths with p > 2 (H < 1/2), the classical Itô map is discontinuous. Enhancing the path with iterated tensor signatures restores continuity in p-variation metrics."
    },
    quiz_es: {
      question: "¿Por qué la ecuación apex dX_t = -∇_ℳ Φ dt + σ dB_t^rough exige estrictamente la teoría de Trayectorias Rugosas de Terry Lyons cuando el exponente de Hurst H < 1/2?",
      options: [
        "Porque las trayectorias con H < 1/2 son markovianas e impiden resolver la ecuación de Fokker-Planck",
        "Porque para H < 1/2 el índice de p-variación supera p > 2, provocando que la integración clásica de Itô/Stratonovich pierda continuidad; el camino debe enriquecerse con signaturas tensoriales iteradas para garantizar una aplicación solución continua",
        "Porque las variedades riemannianas curvadas prohíben tensores de difusión en espacios fraccionarios",
        "Porque la derivada de Malliavin del campo de deriva colapsa a cero en el núcleo reproducible"
      ],
      explanation: "¡Maestría Cenit Definitiva! Terry Lyons demostró que para caminos rugosos con p > 2 (H < 1/2), la aplicación de Itô es discontinua. Al enriquecer el camino con signaturas tensoriales iteradas, la solución recobra continuidad en la topología de p-variación."
    }
  }
};
