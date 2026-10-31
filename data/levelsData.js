// Statistiek Leerplatform - Level Data & Didactische Inhoud (Levels 1 t/m 24)
// Van de Fundamenten tot het Ultieme Apex:
// Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces

window.ADAPTIVE_ASSESSMENT = [
  {
    id: "q1",
    question: "Stel: je analyseert de wachttijden van spoedeisende hulp patiënten. De meeste patiënten wachten 10 minuten, maar een paar wachten 6 uur. De directie wil één betrouwbaar centrumgetal rapporteren. Welk getal adviseer je?",
    question_en: "Suppose you analyze Emergency Room patient wait times. Most patients wait 10 minutes, but a few wait 6 hours. Hospital management wants a single reliable central tendency figure. What metric do you recommend?",
    question_es: "Supón que analizas los tiempos de espera de pacientes en Urgencias. La mayoría espera 10 minutos, pero unos pocos esperan 6 horas. La dirección solicita una sola métrica de tendencia central fiable. ¿Cuál recomiendas?",
    options: [
      { text: "Het rekenkundig gemiddelde, want dat gebruikt alle data", score: 0, feedback: "Het gemiddelde wordt enorm opgeblazen door de 6-uur uitschieters." },
      { text: "De mediaan, omdat deze robuust is tegen extreme uitschieters", score: 2, feedback: "Uitstekend! De mediaan geeft een zuiver beeld van de typische patiënt." },
      { text: "De standaardafwijking", score: 0, feedback: "De standaardafwijking is een spreidingsmaat, geen centrumgetal." }
    ],
    options_en: [
      { text: "The arithmetic mean, because it utilizes all data points", score: 0, feedback: "The mean is heavily inflated by the 6-hour outlier patients." },
      { text: "The median, because it is robust against extreme outliers", score: 2, feedback: "Excellent! The median provides an accurate, unskewed view of the typical patient." },
      { text: "The standard deviation", score: 0, feedback: "Standard deviation measures dispersion, not central tendency." }
    ],
    options_es: [
      { text: "La media aritmética, ya que utiliza todos los datos", score: 0, feedback: "La media se infla drásticamente por los pacientes atípicos de 6 horas." },
      { text: "La mediana, porque es robusta frente a valores atípicos extremos", score: 2, feedback: "¡Excelente! La mediana proporciona una visión fiel y sin sesgo del paciente típico." },
      { text: "La desviación estándar", score: 0, feedback: "La desviación estándar mide dispersión, no tendencia central." }
    ],
    domain: "fundamenten"
  },
  {
    id: "q2",
    question: "Wat gebeurt er met de standaardfout (SE = σ / √N) van een gemiddelde als je de steekproefomvang N verviervoudigt (bv. van 25 naar 100)?",
    question_en: "What happens to the Standard Error (SE = σ / √N) of a sample mean if you quadruple sample size N (e.g. from 25 to 100)?",
    question_es: "¿Qué le ocurre al Error Estándar (SE = σ / √N) de una media muestral si cuadruplicas el tamaño de muestra N (ej. de 25 a 100)?",
    options: [
      { text: "De foutmarge halveert (wordt 2x zo klein, want √4 = 2)", score: 2, feedback: "Exact! Wet van de afnemende meeropbrengst bij steekproeftrekking." },
      { text: "De foutmarge wordt 4x zo klein", score: 0, feedback: "Niet juist, vanwege de wortel in de noemer deelt men door √4 = 2." },
      { text: "De standaardfout blijft exact gelijk", score: 0, feedback: "Onjuist, grotere steekproeven verkleinen altijd de schattingsonzekerheid." }
    ],
    options_en: [
      { text: "The margin of error halves (becomes 2x smaller, because √4 = 2)", score: 2, feedback: "Exact! Law of diminishing returns in empirical sampling." },
      { text: "The margin of error becomes 4x smaller", score: 0, feedback: "Incorrect: due to the square root in the denominator, you divide by √4 = 2." },
      { text: "The standard error remains identical", score: 0, feedback: "Incorrect: larger samples always reduce estimation uncertainty." }
    ],
    options_es: [
      { text: "El margen de error se reduce a la mitad (2 veces menor, porque √4 = 2)", score: 2, feedback: "¡Exacto! Ley de rendimientos decrecientes en el muestreo empírico." },
      { text: "El margen de error se reduce 4 veces", score: 0, feedback: "Incorrecto: debido a la raíz cuadrada en el denominador, se divide por √4 = 2." },
      { text: "El error estándar permanece exactamente idéntico", score: 0, feedback: "Incorrecto: muestras más grandes siempre reducen la incertidumbre de estimación." }
    ],
    domain: "fundamenten"
  },
  {
    id: "q3",
    question: "Een farmaceutisch onderzoek met N = 200.000 patiënten vindt een bloeddrukdaling van 0.3 mmHg met p = 0.00004. Wat concludeer je?",
    question_en: "A clinical trial with N = 200,000 patients discovers a blood pressure decrease of 0.3 mmHg with p = 0.00004. What is your conclusion?",
    question_es: "Un ensayo clínico con N = 200.000 pacientes halla una reducción de presión arterial de 0,3 mmHg con p = 0,00004. ¿Cuál es tu conclusión?",
    options: [
      { text: "Het medicijn is een revolutionaire doorbraak omdat p zo minuscuul klein is", score: 0, feedback: "Pas op: p-waarde meet alleen bewijs tegen toeval, niet de praktische relevantie!" },
      { text: "Het effect is statistisch significant maar klinisch volstrekt verwaarloosbaar (0.3 mmHg is niet merkbaar)", score: 3, feedback: "Heel scherp! Bij gigantische N worden zelfs triviale effecten significant." },
      { text: "De studie moet overgedaan worden wegens een rekenfout", score: 0, feedback: "De berekening klopt, maar de effectgrootte is te klein om therapeutisch relevant te zijn." }
    ],
    options_en: [
      { text: "The drug is a revolutionary breakthrough because p is infinitesimally small", score: 0, feedback: "Caution: p-values only measure evidence against chance, not practical relevance!" },
      { text: "The effect is statistically significant but clinically negligible (0.3 mmHg is unnoticeable)", score: 3, feedback: "Spot on! With massive sample size N, even trivial noise effects become significant." },
      { text: "The study must be repeated due to a computational error", score: 0, feedback: "The math is correct, but effect size is far too small to be therapeutically meaningful." }
    ],
    options_es: [
      { text: "El fármaco es un avance revolucionario porque el valor p es diminuto", score: 0, feedback: "Cuidado: el valor p solo mide evidencia contra el azar, no relevancia práctica." },
      { text: "El efecto es estadísticamente significativo pero clínicamente despreciable (0,3 mmHg no es perceptible)", score: 3, feedback: "¡Muy agudo! Con tamaños de muestra masivos, hasta el ruido más trivial resulta significativo." },
      { text: "El estudio debe repetirse por un error de cálculo", score: 0, feedback: "El cálculo es correcto, pero el tamaño del efecto es demasiado pequeño para tener utilidad terapéutica." }
    ],
    domain: "fundamenten"
  },
  {
    id: "q4",
    question: "In een regressiemodel voeg je 4 volstrekt willekeurige toevalsgetallen toe als extra voorspellers. Wat gebeurt er gegarandeerd met de gewone R² en de Gecorrigeerde R² (Adjusted R²)?",
    question_en: "In a regression model, you add 4 completely random noise variables as additional predictors. What is guaranteed to happen to regular R² and Adjusted R²?",
    question_es: "En un modelo de regresión añades 4 variables aleatorias de puro ruido como predictores. ¿Qué ocurrirá con certeza con el R² ordinario y el R² Ajustado?",
    options: [
      { text: "Beide dalen direct naar nul", score: 0, feedback: "Niet juist. Gewone R² kan wiskundig gezien nooit dalen bij extra variabelen." },
      { text: "Gewone R² stijgt of blijft gelijk; Adjusted R² daalt omdat toeval wordt bestraft", score: 3, feedback: "Haarscherp! Adjusted R² beschermt tegen schijnverbetering door ruis." },
      { text: "Gewone R² daalt, maar de p-waarde wordt automatisch kleiner", score: 0, feedback: "Onjuist. OLS pikt altijd minieme toevallige correlatie op." }
    ],
    options_en: [
      { text: "Both drop immediately to zero", score: 0, feedback: "Incorrect. Mathematically, ordinary R² can never decrease when adding predictors." },
      { text: "Ordinary R² increases or stays constant; Adjusted R² decreases because noise is penalized", score: 3, feedback: "Razor sharp! Adjusted R² protects against spurious overfitting from noise." },
      { text: "Ordinary R² drops, but the model p-value automatically decreases", score: 0, feedback: "Incorrect. OLS always picks up minute chance correlations." }
    ],
    options_es: [
      { text: "Ambos caen inmediatamente a cero", score: 0, feedback: "Incorrecto. Matemáticamente, el R² ordinario nunca disminuye al añadir predictores." },
      { text: "El R² ordinario aumenta o permanece constante; el R² Ajustado disminuye al penalizar el ruido", score: 3, feedback: "¡Impecable! El R² Ajustado protege contra el sobreajuste espurio por variables sin valor." },
      { text: "El R² ordinario cae, pero el valor p disminuye automáticamente", score: 0, feedback: "Incorrecto. MCO siempre captura correlaciones minúsculas debidas al azar." }
    ],
    domain: "regressie"
  },
  {
    id: "q5",
    question: "In de 'Residuals vs Fitted' plot van een regressiemodel zie je dat de punten steeds verder uitwaaieren naarmate de voorspelde waarde stijgt (trompetvorm). Wat is het gevaar?",
    question_en: "In the 'Residuals vs Fitted' plot of an OLS model, the points fan out progressively as fitted values increase (trumpet shape). What is the hazard?",
    question_es: "En el gráfico de 'Residuos vs Valores Ajustados' de un modelo MCO, los puntos se dispersan cada vez más a medida que sube el valor predicho (forma de trompeta). ¿Cuál es el peligro?",
    options: [
      { text: "Geen enkel gevaar, zolang R² maar boven 0.70 ligt", score: 0, feedback: "Fataal misverstand. Heteroscedasticiteit ondermijnt de validiteit van je toetsen." },
      { text: "Heteroscedasticiteit: de standaardfouten zijn vertekend, waardoor p-waarden en betrouwbaarheidsintervallen onbetrouwbaar zijn", score: 3, feedback: "Juist! Pas een log-transformatie of robuuste Huber-White standaardfouten toe." },
      { text: "Het model is automatisch niet-lineair", score: 0, feedback: "Niet per se; heteroscedasticiteit slaat op ongelijke variantie, niet op kromming van de lijn." }
    ],
    options_en: [
      { text: "No danger at all, as long as R² exceeds 0.70", score: 0, feedback: "Fatal misconception. Heteroscedasticity undermines inference validity regardless of R²." },
      { text: "Heteroscedasticity: standard errors are biased, invalidating p-values and confidence intervals", score: 3, feedback: "Correct! Apply a log-transformation or robust Huber-White standard errors." },
      { text: "The model is automatically non-linear", score: 0, feedback: "Not necessarily: heteroscedasticity refers to unequal error variance, not functional curvature." }
    ],
    options_es: [
      { text: "Ningún peligro, siempre que el R² supere 0,70", score: 0, feedback: "Error crítico. La heterocedasticidad invalida la inferencia independientemente del R²." },
      { text: "Heterocedasticidad: los errores estándar están sesgados, invalidando valores p e intervalos de confianza", score: 3, feedback: "¡Correcto! Aplica una transformación logarítmica o errores estándar robustos de Huber-White." },
      { text: "El modelo es automáticamente no lineal", score: 0, feedback: "No necesariamente; la heterocedasticidad se refiere a varianza desigual, no a curvatura funcional." }
    ],
    domain: "regressie"
  },
  {
    id: "q6",
    question: "Twee voorspellers in je regressiemodel correleren met r = 0.98. De VIF is 26. Wat is het symptoom in de modeloutput?",
    question_en: "Two predictors in your regression model correlate with r = 0.98. The VIF is 26. What is the classic symptom in your model output?",
    question_es: "Dos predictores en tu modelo de regresión correlacionan con r = 0,98. El FIV (VIF) es 26. ¿Cuál es el síntoma clásico en la salida del modelo?",
    options: [
      { text: "De F-toets voor het totale model is hoog-significant, maar de individuele t-toetsen van beide variabelen zijn plotseling niet-significant (p > 0.05)", score: 4, feedback: "Meesterlijk! Dit is de klassieke handtekening van ernstige multicollineariteit." },
      { text: "De coëfficiënten worden automatisch negatief", score: 0, feedback: "Niet waar, collineariteit kan tekens doen flippen maar maakt ze niet automatisch negatief." },
      { text: "R² wordt exact gelijk aan nul", score: 0, feedback: "Onjuist, R² blijft gewoon hoog." }
    ],
    options_en: [
      { text: "The overall model F-test is highly significant, yet individual t-tests for both predictors become insignificant (p > 0.05)", score: 4, feedback: "Masterful! This is the textbook signature of severe multicollinearity." },
      { text: "Both regression coefficients automatically turn negative", score: 0, feedback: "Untrue: collinearity can cause sign flipping, but does not guarantee negativity." },
      { text: "R² drops exactly to zero", score: 0, feedback: "Incorrect: R² remains high, but variance inflation destroys individual estimates." }
    ],
    options_es: [
      { text: "La prueba F global del modelo es altamente significativa, pero las pruebas t individuales de ambos predictores resultan no significativas (p > 0,05)", score: 4, feedback: "¡Magistral! Es la firma distintiva clásica de la multicolinealidad severa." },
      { text: "Ambos coeficientes se vuelven automáticamente negativos", score: 0, feedback: "Falso: la colinealidad puede invertir signos, pero no garantiza signo negativo." },
      { text: "El R² cae exactamente a cero", score: 0, feedback: "Incorrecto: el R² sigue siendo alto, pero la inflación de varianza arruina las estimaciones individuales." }
    ],
    domain: "regressie"
  },
  {
    id: "q7",
    question: "Je onderzoekt toetsscores van 600 leerlingen verdeeld over 20 basisscholen (30 lln per school). Waarom is een standaard OLS regressie hier gevaarlijk?",
    question_en: "You analyze test scores of 600 pupils distributed across 20 primary schools (30 pupils per school). Why is standard OLS regression hazardous?",
    question_es: "Analizas las calificaciones de 600 estudiantes distribuidos en 20 colegios (30 alumnos por escuela). ¿Por qué la regresión MCO ordinaria es peligrosa aquí?",
    options: [
      { text: "Omdat de data niet lineair kan zijn met zoveel leerlingen", score: 0, feedback: "Niet de kern. Het probleem zit in de afhankelijkheid binnen clusters." },
      { text: "Omdat leerlingen binnen dezelfde school op elkaar lijken (clustering, ICC > 0), waardoor OLS de standaardfouten dramatisch onderschat en valse significantie rapporteert (schijnprecisie)", score: 4, feedback: "Meesterlijk! Dit is de essentie van intraclass correlatie en pseudo-replicatie." },
      { text: "Omdat OLS alleen werkt als alle scholen exact evenveel leerlingen hebben", score: 0, feedback: "Niet waar, OLS kan ongelijke groepen aan, maar negeert cluster-correlatie." }
    ],
    options_en: [
      { text: "Because the data cannot be linear with so many students", score: 0, feedback: "Not the core issue. The problem lies in dependency within school clusters." },
      { text: "Pupils in the same school correlate (clustering, ICC > 0), causing OLS to drastically underestimate standard errors and produce false significance (spurious precision)", score: 4, feedback: "Masterful! This is the essence of intraclass correlation (ICC) and pseudoreplication." },
      { text: "Because OLS only functions when all schools have identical pupil counts", score: 0, feedback: "Untrue: OLS handles unbalanced designs, but completely ignores cluster correlation." }
    ],
    options_es: [
      { text: "Porque los datos no pueden ser lineales con tantos estudiantes", score: 0, feedback: "Ese no es el problema clave. El riesgo reside en la dependencia intragrupo." },
      { text: "Los alumnos de la misma escuela se parecen (clustering, CCI > 0), provocando que MCO subestime drásticamente los errores estándar y reporte significación falsa (precisión ilusoria)", score: 4, feedback: "¡Magistral! Esta es la esencia de la correlación intraclase y la pseudorreplicación." },
      { text: "Porque MCO solo funciona si todas las escuelas tienen exactamente la misma cantidad de alumnos", score: 0, feedback: "Falso: MCO admite diseños desbalanceados, pero ignora la correlación clúster." }
    ],
    domain: "mixed_models"
  },
  {
    id: "q8",
    question: "Wat is het fundamentele verschil tussen een Random Intercept model en een Random Slope model?",
    question_en: "What is the fundamental distinction between a Random Intercept model and a Random Slope model?",
    question_es: "¿Cuál es la diferencia fundamental entre un modelo de Intercepto Aleatorio y uno de Pendiente Aleatoria?",
    options: [
      { text: "Random Intercept varieert het beginniveau per cluster; Random Slope laat ook het effect/de reactiesnelheid per cluster variëren", score: 5, feedback: "Exact! Bij Random Slopes heeft elk cluster een eigen hellingshoek." },
      { text: "Random Slope werkt alleen met binaire uitkomsten", score: 0, feedback: "Onjuist. Random Slopes worden breed toegepast op continue en herhaalde metingen." },
      { text: "Random Intercept is Bayesiaans en Random Slope is frequentistisch", score: 0, feedback: "Onjuist, beide modellen kunnen zowel frequentistisch als Bayesiaans geschat worden." }
    ],
    options_en: [
      { text: "Random Intercept varies baseline levels across clusters; Random Slope allows the treatment effect/trajectory to vary per cluster as well", score: 5, feedback: "Exact! In Random Slope models, each cluster possesses its own custom slope angle." },
      { text: "Random Slope only functions with binary outcome data", score: 0, feedback: "Incorrect. Random Slopes are widely used in continuous and repeated measures data." },
      { text: "Random Intercept is Bayesian while Random Slope is frequentist", score: 0, feedback: "Incorrect: both models can be estimated via either frequentist (REML) or Bayesian (MCMC) paradigms." }
    ],
    options_es: [
      { text: "El Intercepto Aleatorio varía el punto de partida por grupo; la Pendiente Aleatoria permite además que el efecto/trayectoria varíe según cada grupo", score: 5, feedback: "¡Exacto! En modelos de pendiente aleatoria cada clúster tiene su propia inclinación." },
      { text: "La Pendiente Aleatoria solo funciona con variables de respuesta binarias", score: 0, feedback: "Incorrecto. Se utiliza ampliamente en datos continuos y medidas repetidas." },
      { text: "El Intercepto Aleatorio es bayesiano y la Pendiente Aleatoria es frecuentista", score: 0, feedback: "Falso: ambos se pueden estimar tanto por métodos frecuentistas (REML) como bayesianos (MCMC)." }
    ],
    domain: "mixed_models"
  },
  {
    id: "q9",
    question: "Wat is in causale inferentie (Judea Pearl) het verschil tussen de passieve observatie P(Y | X) en de causale interventie P(Y | do(X))?",
    question_en: "In causal inference (Judea Pearl), what is the crucial difference between observational conditional P(Y | X) and interventional P(Y | do(X))?",
    question_es: "En inferencia causal (Judea Pearl), ¿cuál es la diferencia crucial entre la observación pasiva P(Y | X) y la intervención P(Y | do(X))?",
    options: [
      { text: "P(Y | X) kijkt alleen naar natuurlijke associaties inclusief confounders; P(Y | do(X)) 'knipt' alle binnenkomende pijlen naar X door om het zuivere effect van een externe ingreep te modelleren", score: 5, feedback: "Briljant causaal inzicht! Dit scheidt passief observeren van echt beleidsmatig ingrijpen." },
      { text: "do(X) is alleen een andere notatie voor de p-waarde", score: 0, feedback: "Onjuist, do(X) is de fundamentele operator van de causale do-calculus." },
      { text: "Er is mathematisch geen enkel verschil", score: 0, feedback: "Fundamenteel onjuist. Correlatie ≠ Causaliteit." }
    ],
    options_en: [
      { text: "P(Y | X) reflects passive observational association including confounders; P(Y | do(X)) severs incoming arrows into X to isolate the pure effect of an external intervention", score: 5, feedback: "Brilliant causal insight! This formalizes the difference between passive prediction and true policy intervention." },
      { text: "do(X) is merely alternative mathematical notation for p-values", score: 0, feedback: "Incorrect: do(X) is the fundamental algebraic operator of Pearl's causal do-calculus." },
      { text: "There is mathematically no difference between the two", score: 0, feedback: "Fundamentally wrong. Correlation ≠ Causation." }
    ],
    options_es: [
      { text: "P(Y | X) refleja asociación observacional pasiva incluyendo confusores; P(Y | do(X)) corta las flechas entrantes hacia X para aislar el efecto puro de una intervención", score: 5, feedback: "¡Brillante intuición causal! Formaliza la diferencia entre predecir e intervenir activamente." },
      { text: "do(X) es solo una notación alternativa para el valor p", score: 0, feedback: "Incorrecto: do(X) es el operador algebraico fundamental del do-cálculo de Pearl." },
      { text: "Matemáticamente no existe diferencia alguna entre ambas", score: 0, feedback: "Totalmente erróneo. Correlación ≠ Causalidad." }
    ],
    domain: "apex"
  },
  {
    id: "q10",
    question: "Waarom faalt klassieke stochastische calculus (Itô/Stratonovich) in de apex-formule dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough wanneer de ruis een Hurst exponent H < 1/2 heeft?",
    question_en: "Why does classical stochastic calculus (Itô/Stratonovich) fail in the apex formula dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough when driving noise has Hurst exponent H < 1/2?",
    question_es: "¿Por qué falla el cálculo estocástico clásico (Itô/Stratonovich) en la fórmula apex dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough cuando el ruido tiene un exponente de Hurst H < 1/2?",
    options: [
      { text: "Omdat het pad dan te glad is om een integraal te berekenen", score: 0, feedback: "Integendeel: H < 1/2 betekent dat het pad extreem grillig en ruw is." },
      { text: "Omdat de kwadratische variatie divergeert en klassieke Riemann-Stieltjes integratie niet langer continu is in de p-variatie topologie, wat Terry Lyons oploste via geïtereerde integralen (Signatures)", score: 6, feedback: "Fenomenaal inzicht op het niveau van de theoretische fysica en moderne stochastiek!" },
      { text: "Omdat Hilbertruimten alleen kunnen bestaan bij normale verdelingen", score: 0, feedback: "Niet waar, Hilbertruimten zijn lineaire vectorruimten met een inproduct, onafhankelijk van verdelingen." }
    ],
    options_en: [
      { text: "Because the trajectory is too smooth to calculate an integral", score: 0, feedback: "On the contrary: H < 1/2 signifies extreme roughness and wild irregularity." },
      { text: "Quadratic variation diverges and integration is no longer continuous in p-variation topology, solved by Terry Lyons via iterated integrals (Rough Path Signatures)", score: 6, feedback: "Phenomenal insight at the pinnacle of theoretical physics and modern stochastic analysis!" },
      { text: "Because Hilbert spaces only exist for Gaussian distributions", score: 0, feedback: "Untrue: Hilbert spaces are complete inner product vector spaces, independent of probability distributions." }
    ],
    options_es: [
      { text: "Porque la trayectoria es demasiado suave para integrar", score: 0, feedback: "Al contrario: H < 1/2 significa que la trayectoria es extremadamente rugosa e irregular." },
      { text: "La variación cuadrática diverge y la integración ya no es continua en la topología de p-variación, resuelto por Terry Lyons mediante integrales iteradas (Signaturas de Trayectorias Rugosas)", score: 6, feedback: "¡Conocimiento de nivel superior en la vanguardia del análisis estocástico moderno!" },
      { text: "Porque los espacios de Hilbert solo existen para distribuciones gaussianas", score: 0, feedback: "Falso: los espacios de Hilbert son espacios vectoriales completos con producto interno, independientes de distribuciones de probabilidad." }
    ],
    domain: "apex"
  }
];

window.LEVELS_DATA = [
  // =========================================================================
  // FASE 1: DE FUNDAMENTEN (Levels 1 t/m 5)
  // =========================================================================
  {
    id: 1,
    phase: 1,
    phaseTitle: "Fase 1: De Fundamenten",
    title: "Beschrijvende Statistiek & De 'Outlier' Valstrik",
    subtitle: "Gemiddelde, mediaan, spreiding en waarom één getal de werkelijkheid kan vertekenen.",
    badge: "Fundament",
    case: {
      title: "Casus: Het 'Gemiddelde' Salaris bij Tech-Startup NovaData",
      context: "Je adviseert de OR van een tech-startup met 10 medewerkers. De directie meldt: 'Ons gemiddelde salaris is € 7.700 per maand!' Maar de werknemers ontvangen tussen de € 2.800 en € 3.200 per maand.",
      data: [
        { medewerker: "Anna (Junior)", salaris: 2800 },
        { medewerker: "Bram (Junior)", salaris: 2900 },
        { medewerker: "Claire (Junior)", salaris: 3000 },
        { medewerker: "Daan (Medior)", salaris: 3000 },
        { medewerker: "Eva (Medior)", salaris: 3100 },
        { medewerker: "Frank (Medior)", salaris: 3100 },
        { medewerker: "Gijs (Senior)", salaris: 3200 },
        { medewerker: "Hanna (Senior)", salaris: 3400 },
        { medewerker: "Ivo (Lead)", salaris: 4500 },
        { medewerker: "Jeroen (CEO)", salaris: 48000 }
      ],
      question: "Wat is hier statistisch aan de hand en welke centrum- en spreidingsmaat geeft wél een eerlijk beeld?"
    },
    theory: {
      summary: "Het rekenkundig gemiddelde is extreem gevoelig voor uitschieters (outliers). Eén megasalaris trekt het gemiddelde omhoog. De mediaan (de middelste observatie) en de IQR zijn robuust.",
      keyConcepts: [
        { term: "Gemiddelde (Mean)", desc: "Som van alle waarden gedeeld door N. Gevoelig voor uitschieters." },
        { term: "Mediaan (Median)", desc: "De 50e percentiel. 50% ligt eronder, 50% erboven. Robuust." },
        { term: "Standaardafwijking (SD)", desc: "Gemiddelde afstand tot het gemiddelde. Explodeert bij outliers." },
        { term: "Interkwartielafstand (IQR)", desc: "Verschil tussen 75e en 25e percentiel ($Q_3 - Q_1$)." }
      ],
      mathFormula: "\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i \\quad \\text{vs.} \\quad \\text{Mediaan} = X_{(\\frac{n+1}{2})}",
      formulaExplain: "Als de verdeling scheef is, is $\\text{Mediaan} \\neq \\bar{x}$. Rapporteer dan altijd mediaan en IQR."
    },
    simulation: {
      type: "outlier_simulator",
      name: "Outlier Impact Simulator",
      description: "Verschuif het salaris van de CEO. Zie direct hoe het gemiddelde wegschiet terwijl de mediaan rotsvast blijft!",
      defaultOutlier: 48000
    },
    interpretation: {
      title: "Model & Output Interpretatie",
      metrics: [
        { label: "Gemiddelde (Mean)", value: "€ 7.700", note: "Vertekend door de CEO-uitschieter!" },
        { label: "Mediaan (Median)", value: "€ 3.100", note: "Representatief voor de typische medewerker" },
        { label: "Standaardafwijking (SD)", value: "€ 14.168", note: "Opgeblazen spreidingsgetal" },
        { label: "IQR (Q3 - Q1)", value: "€ 350", note: "De werkelijke compacte spreiding" }
      ],
      recommendation: "Adviseer de directie en OR om de mediaan en IQR te rapporteren bij inkomens- en wachttijddata."
    },
    quiz: {
      question: "Wanneer verkies je de mediaan boven het gemiddelde?",
      options: [
        "Wanneer de data perfect normaal verdeeld is",
        "Wanneer er sprake is van een scheve verdeling of extreme uitschieters",
        "Alleen wanneer de steekproef kleiner is dan 5",
        "Nooit, het rekenkundig gemiddelde is altijd superieur"
      ],
      correctIndex: 1,
      explanation: "Juist! De mediaan is een robuuste maat die niet beïnvloed wordt door extreme uitschieters of scheefheid."
    }
  },

  {
    id: 2,
    phase: 1,
    phaseTitle: "Fase 1: De Fundamenten",
    title: "Kansverdelingen & De Normale Verdeling",
    subtitle: "Z-scores, de 68-95-99.7 vuistregel en afwijkingen van de klokvorm.",
    badge: "Fundament",
    case: {
      title: "Casus: Kwaliteitscontrole van Digitale Bloeddrukmeters",
      context: "Een medisch fabrikant produceert bloeddrukmeters. De drukmeting volgt een normale verdeling met $\\mu = 120$ mmHg en $\\sigma = 2$ mmHg. Een meter met een afwijking van meer dan 4 mmHg wordt afgekeurd.",
      data: [
        { meterId: "M-101", meting: 119.8, status: "Goedgekeurd" },
        { meterId: "M-102", meting: 121.2, status: "Goedgekeurd" },
        { meterId: "M-103", meting: 124.5, status: "AFGEKEURD (> +2 SD)" },
        { meterId: "M-104", meting: 118.9, status: "Goedgekeurd" },
        { meterId: "M-105", meting: 115.8, status: "AFGEKEURD (< -2 SD)" }
      ],
      question: "Hoeveel procent van de meters zal statistisch gezien buiten de tolerantiegrenzen vallen?"
    },
    theory: {
      summary: "De normale verdeling (Gauss-kromme) is symmetrisch rond het gemiddelde $\\mu$. Elke meting kan omgezet worden in een Z-score: hoeveel standaardafwijkingen ligt deze waarde van het gemiddelde?",
      keyConcepts: [
        { term: "Z-score", desc: "Z = (X - μ) / σ. Duidt relatieve afstand tot het gemiddelde aan." },
        { term: "68% Regel", desc: "68.27% van alle waarden ligt binnen ± 1 SD [μ - σ, μ + σ]." },
        { term: "95% Regel", desc: "95.45% ligt binnen ± 2 SD (exact 95% bij ± 1.96 SD)." },
        { term: "99.7% Regel", desc: "99.73% van alle waarden ligt binnen ± 3 SD." }
      ],
      mathFormula: "Z = \\frac{X - \\mu}{\\sigma} \\quad \\implies \\quad P(X > 124) = P(Z > 2.0) \\approx 0.0228",
      formulaExplain: "Met een Z-score van +2.0 ligt de meting 2 standaardafwijkingen boven het gemiddelde. Buiten ±2 SD valt ongeveer 4.55% van alle apparaten."
    },
    simulation: {
      type: "normal_distribution_explorer",
      name: "Gauss-curve & Z-score Calculator",
      description: "Verander het gemiddelde en de spreiding of kies een afkeurgrens om direct de kans in de staarten te zien.",
      defaultMean: 120,
      defaultSD: 2
    },
    interpretation: {
      title: "Model & Kwaliteitsconclusie",
      metrics: [
        { label: "Binnen tolerantie [116, 124]", value: "95.45%", note: "Binnen ± 2 standaardafwijkingen" },
        { label: "Buiten tolerantie (uitval)", value: "4.55%", note: "2.27% te laag + 2.27% te hoog" },
        { label: "Z-score van afkeurgrens", value: "Z = ± 2.00", note: "Kritieke grens voor kwaliteitsafdeling" }
      ],
      recommendation: "Bij een dagproductie van 1.000 meters verwacht de kwaliteitsmanager ongeveer 45 afkeuringen puur door natuurlijke spreiding."
    },
    quiz: {
      question: "Wat betekent een Z-score van -1.96?",
      options: [
        "De waarde is negatief en onmogelijk",
        "De waarde ligt 1.96 standaardafwijkingen onder het populatiegemiddelde",
        "Het betrouwbaarheidsinterval is 95% breed",
        "Er is 1.96% kans dat deze meting klopt"
      ],
      correctIndex: 1,
      explanation: "Uitstekend! De Z-score drukt exact uit hoeveel standaardafwijkingen een observatie boven (+) of onder (-) het gemiddelde ligt."
    }
  },

  {
    id: 3,
    phase: 1,
    phaseTitle: "Fase 1: De Fundamenten",
    title: "De Centrale Limietstelling (CLT)",
    subtitle: "Waarom gemiddelden van steekproeven altijd normaal verdeeld zijn, ongeacht de oorspronkelijke vorm.",
    badge: "Fundament",
    case: {
      title: "Casus: Wachttijden bij de Helpdesk (Zwaar Scheve Data)",
      context: "Klantenservice TelecomPlus heeft wachttijden die zwaar exponentieel verdeeld zijn. De manager vraagt: 'Kunnen we eigenlijk wel statistiek bedrijven als de ruwe data zo scheef is?'",
      data: [
        { klant: 1, wachttijdMin: 0.5 },
        { klant: 2, wachttijdMin: 1.2 },
        { klant: 3, wachttijdMin: 0.8 },
        { klant: 4, wachttijdMin: 34.0 },
        { klant: 5, wachttijdMin: 0.4 },
        { klant: 6, wachttijdMin: 28.5 }
      ],
      question: "Waarom redt de Centrale Limietstelling ons hier wanneer we het GEMIDDELDE over steekproeven analyseren?"
    },
    theory: {
      summary: "De Centrale Limietstelling stelt dat ongeacht de vorm van de oorspronkelijke populatie, de verdeling van steekproefgemiddelden $(\\bar{X})$ naar een normale verdeling convergeert zodra $N \\ge 30$.",
      keyConcepts: [
        { term: "Populatieverdeling", desc: "De ruwe data van individuen (mag willekeurig scheef zijn)." },
        { term: "Steekproevenverdeling", desc: "De verdeling van GEMIDDELDEN bij herhaald trekken van steekproeven." },
        { term: "Standaardfout (SE)", desc: "De spreiding van de gemiddelden: SE = σ / √N. Neemt af bij grotere N!" }
      ],
      mathFormula: "\\bar{X} \\sim \\mathcal{N}\\left(\\mu, \\; \\frac{\\sigma}{\\sqrt{N}}\\right) \\quad \\text{voor } N \\ge 30",
      formulaExplain: "Als $N$ 4 keer zo groot wordt, halveert de onzekerheid (SE) van je schatting."
    },
    simulation: {
      type: "clt_simulator",
      name: "CLT Generator: Van Scheef naar Klokvormig",
      description: "Trek 1.000 steekproeven uit een zwaar scheve verdeling. Kijk hoe de verdeling van gemiddelden klokvormig wordt bij grotere N!",
      defaultN: 35
    },
    interpretation: {
      title: "Model & Praktijk Conclusie",
      metrics: [
        { label: "Ruwe wachttijden verdeling", value: "Zwaar asymmetrisch (Skewed)", note: "Individuele bellers" },
        { label: "Verdeling gemiddelde bij N=35", value: "Normaal verdeeld (Gauss)", note: "Dankzij CLT!" },
        { label: "Standaardfout (SE = σ/√35)", value: "1.05 minuten", note: "Spreiding van de gemiddelde schatting" }
      ],
      recommendation: "Je kunt gerust t-toetsen en betrouwbaarheidsintervallen gebruiken voor het gemiddelde, mits je steekproef $N \\ge 30$ telt."
    },
    quiz: {
      question: "Wat gebeurt er met de standaardfout (SE) van het gemiddelde als je de steekproefomvang N verviervoudigt?",
      options: [
        "De SE wordt 4x zo klein",
        "De SE halveert (wordt 2x zo klein, want √4 = 2)",
        "De SE blijft gelijk",
        "De SE wordt juist groter"
      ],
      correctIndex: 1,
      explanation: "Precies! Omdat SE = σ / √N, levert een factor 4 vergroting van N een deling door √4 = 2 op."
    }
  },

  {
    id: 4,
    phase: 1,
    phaseTitle: "Fase 1: De Fundamenten",
    title: "Betrouwbaarheidsintervallen (CI) & Foutmarge",
    subtitle: "Hoe zeker weten we iets? De ware betekenis van het 95% Betrouwbaarheidsinterval.",
    badge: "Fundament",
    case: {
      title: "Casus: De Klanttevredenheid Peiling (CSAT)",
      context: "Een platform peilt tevredenheid op schaal 0-100. Uit een steekproef van $N = 100$ komt een gemiddelde van $\\bar{x} = 74.0$ met $\\text{SD} = 10.0$. Het 95% interval is $[72.04, 75.96]$. Klopt de claim dat er 95% kans is dat de echte populatiewaarde hierin ligt?",
      data: [
        { metric: "Steekproefgrootte (N)", waarde: "100" },
        { metric: "Gemeten gemiddelde", waarde: "74.0 punten" },
        { metric: "Standaardfout (SE)", waarde: "1.00 punten" },
        { metric: "95% Interval", waarde: "[72.04, 75.96]" }
      ],
      question: "Wat is het fundamentele verschil tussen een puntschatting en een interval, en wat betekent die 95% echt?"
    },
    theory: {
      summary: "Het betrouwbaarheidsinterval geeft een bandbreedte die rekening houdt met steekproefvariatie. De 95% slaat op de *methode*: als we 100 steekproeven trekken, bevatten 95 van de 100 geconstrueerde intervallen de werkelijke vaste populatieparameter $\\mu$.",
      keyConcepts: [
        { term: "Klassieke Denkvalstrik", desc: "FOUT: 'Er is 95% kans dat het echte gemiddelde in dit specifieke interval ligt.'" },
        { term: "Juiste Definitie", desc: "GOED: '95% van de op deze wijze geconstrueerde intervallen omvat de werkelijke populatiewaarde.'" },
        { term: "Foutmarge", desc: "1.96 × SE (voor 95% niveau). Bepaalt de breedte van het interval." }
      ],
      mathFormula: "95\\% \\text{ CI} = \\bar{x} \\pm 1.96 \\cdot \\frac{\\sigma}{\\sqrt{N}} = \\left[\\bar{x} - 1.96 \\cdot \\text{SE}, \\; \\bar{x} + 1.96 \\cdot \\text{SE}\\right]",
      formulaExplain: "Als de intervallen van twee groepen niet overlappen, is het verschil statistisch significant."
    },
    simulation: {
      type: "ci_simulator",
      name: "100 Steekproeven Visualizer: Vang de Waarheid",
      description: "Genereer 50 steekproefintervallen tegen de echte populatie $\\mu = 75$. Tel de groene treffers en rode missers!",
      trueMean: 75
    },
    interpretation: {
      title: "Praktische Besluitvorming",
      metrics: [
        { label: "Puntschatting", value: "74.0", note: "Eén meting uit één steekproef" },
        { label: "95% Betrouwbaarheidsinterval", value: "[72.04, 75.96]", note: "Onzekerheidsmarge" },
        { label: "Drempel voor directiebonus", value: "> 75.0", note: "75 valt binnen het interval (onzeker!)" }
      ],
      recommendation: "Omdat 75 binnen het interval ligt, kan de directie niet claimen dat het doel van 75 punten statistisch bewezen is."
    },
    quiz: {
      question: "Wat is de juiste interpretatie van een berekend 95% betrouwbaarheidsinterval van [10, 20]?",
      options: [
        "95% van alle individuen scoort tussen 10 en 20",
        "Bij herhaaldelijke steekproeven zal 95% van de berekende intervallen de werkelijke parameter bevatten",
        "Er is 5% kans dat onze data ongeldig is",
        "De kans is exact 95% dat het interval morgen verschuift naar [15, 25]"
      ],
      correctIndex: 1,
      explanation: "Helemaal goed! Dit is de strikte en correcte frequentistische interpretatie."
    }
  },

  {
    id: 5,
    phase: 1,
    phaseTitle: "Fase 1: De Fundamenten",
    title: "Hypothesetoetsing, t-toets & De p-waarde",
    subtitle: "Nulhypothese, Type I en II fouten, en de kloof tussen statistische en klinische relevantie.",
    badge: "Fundament",
    case: {
      title: "Casus: Werkt het Nieuwe Slaapmiddel SomnoCalm?",
      context: "Patiënten met slaapproblemen testen SomnoCalm tegen placebo. Placebo slaapt gemiddeld 5.8 uur; SomnoCalm 6.4 uur (+36 min extra). De t-toets geeft $p = 0.018$.",
      data: [
        { groep: "Placebo (N=30)", gemSlaapUur: "5.80 uur", sd: "1.10 uur" },
        { groep: "SomnoCalm (N=30)", gemSlaapUur: "6.40 uur", sd: "1.05 uur" },
        { vergelijking: "Verschil (Δ)", gemSlaapUur: "+0.60 uur (36 min)", tWaarde: "t = 2.42" },
        { toets: "Independent t-test", pWaarde: "p = 0.018", conclusie: "Significant bij α = 0.05" }
      ],
      question: "Wat vertelt de p-waarde ons hier nu ÉCHT over de werkzaamheid en wat zegt het NIET?"
    },
    theory: {
      summary: "De p-waarde meet uitsluitend: hoe onwaarschijnlijk zijn deze data als de interventie in werkelijkheid GEEN effect zou hebben ($H_0$ is waar)? Het is GEEN kans dat het medicijn werkt. Kijk altijd naar effectgrootte (Cohen's d).",
      keyConcepts: [
        { term: "Nulhypothese (H₀)", desc: "De aanname van géén effect of géén verschil (Δ = 0)." },
        { term: "De p-waarde", desc: "P(Data minstens zo extreem | H₀ is WAAR)." },
        { term: "Type I Fout (α)", desc: "Vals alarm: H₀ verwerpen terwijl er geen effect is." },
        { term: "Cohen's d", desc: "De inhoudelijke grootte van het effect: d = (μ₁ - μ₂) / SD." }
      ],
      mathFormula: "t = \\frac{\\bar{X}_1 - \\bar{X}_2}{\\text{SE}_{\\text{diff}}} = 2.42 \\quad (p = 0.018, \\; d = 0.56)",
      formulaExplain: "Met een gigantische steekproef ($N=100.000$) wordt zelfs 5 seconden slaapverschil $p < 0.001$. Kijk altijd naar Cohen's d!"
    },
    simulation: {
      type: "ttest_power_simulator",
      name: "T-toets & Effectgrootte Simulator",
      description: "Pas Cohen's d en steekproefgrootte N aan. Zie hoe de p-waarde daalt en ontdek hoe een minuscuul effect met genoeg N significant wordt!",
      defaultEffectSize: 0.55,
      defaultN: 30
    },
    interpretation: {
      title: "Statistische vs Praktische Relevantie",
      metrics: [
        { label: "p-waarde", value: "0.018", note: "Statistisch significant (p < 0.05)" },
        { label: "Absolute winst", value: "+36 minuten", note: "Klinisch merkbaar voor slapelozen" },
        { label: "Cohen's d", value: "0.56", note: "Matig tot redelijk groot effect" }
      ],
      recommendation: "Hier vallen statistische significantie ($p=0.018$) én klinische relevantie (+36 min slaap, Cohen's d = 0.56) samen."
    },
    quiz: {
      question: "Wat is de exacte definitie van een p-waarde van 0.03?",
      options: [
        "De kans dat de nulhypothese waar is bedraagt 3%",
        "De kans is 97% dat het medicijn effectief is",
        "Als de nulhypothese waar zou zijn, is de kans om minstens zo'n extreem verschil te vinden 3%",
        "Er is 3% kans op fraude"
      ],
      correctIndex: 2,
      explanation: "Spot-on! De p-waarde is $P(\\text{data} \\mid H_0)$, NIET $P(H_0 \\mid \\text{data})$."
    }
  },

  // =========================================================================
  // FASE 2: KLASSIEKE REGRESSIE & DIAGNOSTIEK (Levels 6 t/m 12)
  // =========================================================================
  {
    id: 6,
    phase: 2,
    phaseTitle: "Fase 2: Klassieke Regressie & Diagnostiek",
    title: "Lineaire Regressie I: OLS & Het Verhaal van de Lijn",
    subtitle: "Kleinste Kwadraten (OLS), hellingsgetal, intercept en residuen.",
    badge: "Klassieke Regressie",
    case: {
      title: "Casus: Voorspellen van Tentamencijfers o.b.v. Studie-uren",
      context: "Een coördinator wil weten hoe studie-uren samenhangen met het tentamencijfer Statistiek I. Ze wil studenten waarschuwen hoeveel uur nodig is voor een voldoende (5.5).",
      data: [
        { student: "Lucas", studieUren: 10, cijfer: 4.5 },
        { student: "Sanne", studieUren: 15, cijfer: 5.5 },
        { student: "Timo", studieUren: 20, cijfer: 6.5 },
        { student: "Noor", studieUren: 25, cijfer: 7.0 },
        { student: "Lars", studieUren: 30, cijfer: 8.5 },
        { student: "Femke", studieUren: 35, cijfer: 9.0 }
      ],
      question: "Hoe vinden we de 'allerbeste' lijn door deze puntenwolk en wat betekent de helling in mensentaal?"
    },
    theory: {
      summary: "Gewone Kleinste Kwadraten (Ordinary Least Squares, OLS) zoekt de lijn die de som van de gekwadrateerde residuen (verticale afwijkingen $\\sum e_i^2$) minimaliseert.",
      keyConcepts: [
        { term: "Intercept (β₀)", desc: "Verwachte waarde van Y als X gelijk is aan 0." },
        { term: "Hellingsgetal (β₁)", desc: "Verwachte toename in Y bij 1 eenheid toename in X." },
        { term: "Residu (eᵢ)", desc: "Verschil tussen waargenomen en voorspelde waarde: eᵢ = yᵢ - ŷᵢ." }
      ],
      mathFormula: "Y = \\beta_0 + \\beta_1 X + \\epsilon \\quad \\implies \\quad \\hat{Y} = 2.75 + 0.18 \\cdot X",
      formulaExplain: "Voor elk extra studie-uur stijgt het verwachte cijfer met 0.18 punt."
    },
    simulation: {
      type: "ols_line_fitter",
      name: "OLS Lijn-Passer & Residu-Kwadraten",
      description: "Beweeg helling en intercept handmatig. Zoek de stand waarbij de totale som van vierkanten (SS_res) minimaal is!"
    },
    interpretation: {
      title: "Model & Beleidsadvies",
      metrics: [
        { label: "Intercept (β₀)", value: "2.75", note: "Basisscore zonder voorbereiding" },
        { label: "Helling (β₁)", value: "+0.18 per uur", note: "Winst per studie-uur" },
        { label: "Uren voor een 5.5", value: "15.3 uur", note: "(5.5 - 2.75) / 0.18 ≈ 15 uur" }
      ],
      recommendation: "Adviseer studenten minimaal 16 uur te reserveren voor dit vak om een voldoende veilig te stellen."
    },
    quiz: {
      question: "In Cijfer = 2.5 + 0.20 × Uren, wat gebeurt er als een student 10 uur extra studeert?",
      options: [
        "Het cijfer stijgt met 0.20 punt",
        "Het cijfer stijgt met 2.0 punten (10 × 0.20)",
        "Het cijfer wordt een 2.5",
        "Dat kan niet worden voorspeld"
      ],
      correctIndex: 1,
      explanation: "Uitstekend! 10 × 0.20 = 2.0 punten winst."
    }
  },

  {
    id: 7,
    phase: 2,
    phaseTitle: "Fase 2: Klassieke Regressie & Diagnostiek",
    title: "Goedheid van de Pasvorm: R², Adj-R² en de F-toets",
    subtitle: "Hoeveel verklaart je model echt? De gevaren van overmatig toevoegen van variabelen.",
    badge: "Klassieke Regressie",
    case: {
      title: "Casus: Voorspellen van Huizenprijzen & De Ruisvariabelen",
      context: "Een analist voegt aan een huizenprijsmodel willekeurige toevalsgetallen toe. Zijn $R^2$ stijgt van 0.65 naar 0.73. Is het model werkelijk beter geworden?",
      data: [
        { model: "Model 1 (Oppervlakte)", r2: "0.650", adjR2: "0.643" },
        { model: "Model 2 (+ Kamers)", r2: "0.720", adjR2: "0.708" },
        { model: "Model 3 (+ 5 Ruisvariabelen)", r2: "0.735", adjR2: "0.690 (Daalt!)" }
      ],
      question: "Waarom stijgt R² ALTIJD als je variabelen toevoegt, en waarom beschermt Adjusted R² ons hiertegen?"
    },
    theory: {
      summary: "$R^2$ kan wiskundig gezien nooit dalen bij het toevoegen van variabelen. Gecorrigeerde $R^2$ (Adjusted $R^2$) straft voor extra parameters en daalt als een variabele minder bijdraagt dan toeval.",
      keyConcepts: [
        { term: "R²", desc: "Percentage verklaarde variantie (SS_reg / SS_tot)." },
        { term: "Adjusted R²", desc: "Gecorrigeerd voor aantal voorspellers k. Daalt bij ruis!" },
        { term: "F-toets", desc: "Toetst of alle regressiecoëfficiënten gezamenlijk afwijken van nul." }
      ],
      mathFormula: "R^2_{\\text{adj}} = 1 - \\left[ \\frac{(1 - R^2)(n - 1)}{n - k - 1} \\right]",
      formulaExplain: "Als $k$ toeneemt zonder dat $R^2$ substantieel stijgt, keldert Adjusted $R^2$."
    },
    simulation: {
      type: "r2_noise_simulator",
      name: "R² vs Adjusted R² Stress Test",
      description: "Voeg zinloze ruisvariabelen toe. Zie hoe de gewone R² kunstmatig stijgt, terwijl de Adjusted R² direct daalt!"
    },
    interpretation: {
      title: "Modelvergelijking & Keuze",
      metrics: [
        { label: "Beste model", value: "Model 2 (Oppervlakte + Kamers)", note: "Hoogste Adj-R² (0.708)" },
        { label: "Ruismodel (Model 3)", value: "Verwerpen!", note: "Adj-R² daalde naar 0.690" }
      ],
      recommendation: "Kies nooit een model puur op gewone $R^2$. Hanteer Adjusted $R^2$, AIC of BIC."
    },
    quiz: {
      question: "Wat gebeurt er met de gewone R² als je toevalsgetallen toevoegt aan een regressiemodel?",
      options: [
        "R² daalt direct naar 0",
        "R² blijft gegarandeerd gelijk of stijgt een klein beetje",
        "R² wordt negatief",
        "De F-toets crasht"
      ],
      correctIndex: 1,
      explanation: "Precies! OLS kan willekeurige ruis benutten om altijd een minieme fractie extra variantie op te pikken."
    }
  },

  {
    id: 8,
    phase: 2,
    phaseTitle: "Fase 2: Klassieke Regressie & Diagnostiek",
    title: "Modelassumpties & Diagnostiek (L.I.N.E.)",
    subtitle: "Residuendiagnostiek, heteroscedasticiteit, normaliteit en invloedrijke datapunten.",
    badge: "Klassieke Regressie",
    case: {
      title: "Casus: De 'Trompet' in Bedrijfswinsten (Heteroscedasticiteit)",
      context: "Bij kleine bedrijven liggen winstvoorspellingen strak rond de lijn; bij grote bedrijven waaiert de winst enorm uit (trompetvorm). Welke assumptie wordt geschonden?",
      data: [
        { bedrijfGrootte: "Klein (5 mdw)", werkelijk: "€ 45k", residu: "+5k" },
        { bedrijfGrootte: "Groot (120 mdw)", werkelijk: "€ 4.2M", residu: "+3.1M" }
      ],
      question: "Waarom zijn de standaardfouten en p-waarden onbetrouwbaar als homoscedasticiteit geschonden wordt?"
    },
    theory: {
      summary: "L.I.N.E.: Lineariteit, Onafhankelijkheid, Normaliteit van residuen, en Gelijke spreiding (Homoscedasticiteit). Schending van homoscedasticiteit vervalst de standaardfouten en p-waarden.",
      keyConcepts: [
        { term: "Homoscedasticiteit", desc: "Constante variantie van de residuen over het hele bereik." },
        { term: "Heteroscedasticiteit", desc: "Trompet- of trechtervorm in de Residuals vs Fitted plot." },
        { term: "Q-Q Plot", desc: "Controleert of residuen de rechte lijn van de normale verdeling volgen." }
      ],
      mathFormula: "\\text{Assumptie: } \\text{Var}(\\epsilon_i) = \\sigma^2 \\quad \\text{vs Heteroscedasticiteit: } \\text{Var}(\\epsilon_i) = \\sigma_i^2",
      formulaExplain: "Remedie: log-transformatie $\\ln(Y)$ of robuuste Huber-White standaardfouten."
    },
    simulation: {
      type: "diagnostics_lab",
      name: "Residuendiagnostiek & L.I.N.E. Lab",
      description: "Schakel tussen gezonde data, trompetvorm en niet-lineariteit in de Residuals vs Fitted en Q-Q plots."
    },
    interpretation: {
      title: "Diagnostisch Oordeel & Remedie",
      metrics: [
        { label: "Breusch-Pagan Toets", value: "p < 0.001", note: "Heteroscedasticiteit aangetoond" },
        { label: "Aanbevolen actie", value: "Log-transformatie ln(Y)", note: "Stabiliseert de spreiding" }
      ],
      recommendation: "Neem de natuurlijke logaritme van de winst of pas robuuste sandwich standaardfouten toe."
    },
    quiz: {
      question: "Wat signaleert een trompetvorm in een 'Residuals vs Fitted' plot?",
      options: [
        "Perfecte lineariteit",
        "Heteroscedasticiteit (ongelijke foutvariantie)",
        "Een te hoge R²",
        "Dat alle p-waarden exact 0.05 zijn"
      ],
      correctIndex: 1,
      explanation: "Juist! Uitwaaieren betekent dat fouten bij hoge voorspellingen veel groter zijn dan bij lage."
    }
  },

  {
    id: 9,
    phase: 2,
    phaseTitle: "Fase 2: Klassieke Regressie & Diagnostiek",
    title: "Meervoudige Regressie & Confounding (Simpson's Paradox)",
    subtitle: "Controleren voor covariabelen en hoe een verband 180 graden kan omdraaien.",
    badge: "Klassieke Regressie",
    case: {
      title: "Casus: Sporten en Cholesterol (De Paradox)",
      context: "In enkelvoudige regressie lijkt sporten cholesterol te verhogen (+0.32, p=0.002). Maar ouderen sporten vaker én hebben biologisch hoger cholesterol. Wat gebeurt er als we Leeftijd meenemen?",
      data: [
        { groep: "Jongeren", sportUur: "5 u/wk", hellingBinnenGroep: "-0.26 (Gezonde daling)" },
        { groep: "Senioren", sportUur: "8 u/wk", hellingBinnenGroep: "-0.28 (Gezonde daling)" },
        { analyse: "Gecombineerd (Zonder leeftijd)", hellingTotaal: "+0.32 (Schadelijke stijging!?)" }
      ],
      question: "Waarom keert het effect om als we Leeftijd toevoegen als covariabele in meervoudige regressie?"
    },
    theory: {
      summary: "Simpson's Paradox: een verband keert om zodra je controleert voor een confounder. In meervoudige regressie schatten we het effect ceteris paribus (onder gelijkblijvende omstandigheden).",
      keyConcepts: [
        { term: "Confounder", desc: "Variabele die samenhangt met zowel voorspeller als uitkomst (Leeftijd)." },
        { term: "Ceteris Paribus", desc: "Het zuivere effect van sport voor mensen van exact dezelfde leeftijd." }
      ],
      mathFormula: "Y_{\\text{Chol}} = \\beta_0 + \\beta_1 \\cdot \\text{Sport} + \\beta_2 \\cdot \\text{Leeftijd} + \\epsilon \\quad (\\beta_1 = -0.26)",
      formulaExplain: "Na controle voor leeftijd blijkt sporten fysiologisch gezond en cholesterol-verlagend."
    },
    simulation: {
      type: "simpsons_paradox_visualizer",
      name: "Simpson's Paradox Visualizer",
      description: "Bekijk de misleidende gecombineerde stijgende lijn versus de twee gezonde dalende lijnen binnen de leeftijdsgroepen."
    },
    interpretation: {
      title: "Enkelvoudig vs Meervoudig",
      metrics: [
        { label: "Enkelvoudig β (Sport)", value: "+0.32 (p = 0.002)", note: "Vertekend door confounder" },
        { label: "Meervoudig β (Sport | Leeftijd)", value: "-0.26 (p < 0.001)", note: "Zuiver fysiologisch effect" }
      ],
      recommendation: "Trek nooit causale conclusies uit enkelvoudige correlaties zonder te controleren voor confounders."
    },
    quiz: {
      question: "Wat betekent het als β₁ geschat wordt 'gecorrigeerd voor X₂'?",
      options: [
        "Dat X₂ uit de data is gewist",
        "Dat we kijken naar het effect van X₁ voor individuen met dezelfde score op X₂",
        "Dat X₁ en X₂ met elkaar vermenigvuldigd zijn",
        "Dat X₂ altijd nul moet zijn"
      ],
      correctIndex: 1,
      explanation: "Voltreffer! Meervoudige regressie bevriest wiskundig de andere covariabelen."
    }
  },

  {
    id: 10,
    phase: 2,
    phaseTitle: "Fase 2: Klassieke Regressie & Diagnostiek",
    title: "Multicollineariteit & VIF (Variance Inflation Factor)",
    subtitle: "Wat als voorspellers te sterk met elkaar correleren? Exploderende standaardfouten.",
    badge: "Klassieke Regressie",
    case: {
      title: "Casus: De Hordeloper en Twee Benen",
      context: "Sprinttijd voorspellen met 'Linkerbeenlengte' én 'Rechterbeenlengte' ($r = 0.99$). De F-toets is $p < 0.0001$, maar beide afzonderlijke benen zijn $p = 0.68$ (niet-significant).",
      data: [
        { variabele: "Overall Model (F-test)", pWaarde: "< 0.0001 (Significant)" },
        { variabele: "Linkerbeen (cm)", pWaarde: "0.681 (Niet significant!?)" },
        { variabele: "Rechterbeen (cm)", pWaarde: "0.785 (Niet significant!?)" }
      ],
      question: "Wat is multicollineariteit en hoe signaleert de VIF-score dit gevaar?"
    },
    theory: {
      summary: "Wanneer voorspellers onderling sterk correleren, kan OLS de effecten niet scheiden. De standaardfouten exploderen met een factor $\\sqrt{\\text{VIF}}$, waardoor echte effecten statistisch onzichtbaar worden.",
      keyConcepts: [
        { term: "Variance Inflation Factor (VIF)", desc: "VIF = 1 / (1 - R_j²). Geeft aan hoeveel keer groter de variantie is." },
        { term: "Drempelwaarden", desc: "VIF = 1 (ideaal), VIF > 5 (zorgelijk), VIF > 10 (kritiek: model is onbetrouwbaar)." }
      ],
      mathFormula: "\\text{VIF}_j = \\frac{1}{1 - R_j^2} \\quad \\implies \\quad \\text{SE}(\\beta_j) = \\sqrt{\\text{VIF}_j} \\cdot \\text{SE}_{\\text{ideaal}}",
      formulaExplain: "Bij $r = 0.99$ is $\\text{VIF} \\approx 50$. De standaardfout is 7x zo groot als nodig!"
    },
    simulation: {
      type: "multicollinearity_simulator",
      name: "Multicollineariteit & VIF Simulator",
      description: "Schuif de correlatie tussen X₁ en X₂ omhoog van 0.0 naar 0.99. Zie de betrouwbaarheidsintervallen exploderen!"
    },
    interpretation: {
      title: "Diagnose & Praktijk Oplossing",
      metrics: [
        { label: "Correlatie Linker/Rechterbeen", value: "r = 0.99", note: "Redundante voorspellers" },
        { label: "VIF Score", value: "VIF = 50.2", note: "Kritiek hoog (> 10)" },
        { label: "Oplossing", value: "Verwijder één variabele", note: "Of neem het gemiddelde" }
      ],
      recommendation: "Verwijder één van de twee benen. De VIF zakt direct naar 1.0 en de overblijvende variabele wordt zeer significant."
    },
    quiz: {
      question: "Wat is het belangrijkste gevolg van ernstige multicollineariteit (VIF > 15)?",
      options: [
        "Het model crasht",
        "Standaardfouten worden gigantisch opgeblazen, waardoor echte effecten statistisch niet-significant lijken",
        "R² wordt automatisch nul",
        "De residuen worden heteroscedastisch"
      ],
      correctIndex: 1,
      explanation: "Precies! De precisie verdampt doordat de standaardfout explodeert."
    }
  },

  {
    id: 11,
    phase: 2,
    phaseTitle: "Fase 2: Klassieke Regressie & Diagnostiek",
    title: "Logistische Regressie & Odds Ratios",
    subtitle: "Binaire uitkomsten (Ja/Nee), de sigmoïde curve en kansenverhoudingen.",
    badge: "Klassieke Regressie",
    case: {
      title: "Casus: Heropname van Hartpatiënten Binnen 30 Dagen",
      context: "Voorspel of een patiënt binnen 30 dagen opnieuw wordt opgenomen (1 = Ja, 0 = Nee). Gewone OLS geeft kansen van -15% of 120%. Hoe lost logistische regressie dit op?",
      data: [
        { patient: "P01", leeftijd: 62, hogeBloeddruk: 1, heropname: 1 },
        { patient: "P02", leeftijd: 45, hogeBloeddruk: 0, heropname: 0 },
        { patient: "P03", leeftijd: 78, hogeBloeddruk: 1, heropname: 1 }
      ],
      question: "Hoe transformeert logistische regressie kansen via de 'logit' linkfunctie naar een prachtige S-curve en wat is een Odds Ratio?"
    },
    theory: {
      summary: "De logit linkfunctie $\\ln(p / (1-p))$ transformeert kansen naar een onbegrensde schaal. De inverse is de sigmoïde functie, die garandeert dat voorspelde kansen strikt tussen 0 en 1 blijven. De Odds Ratio is $e^{\\beta_1}$.",
      keyConcepts: [
        { term: "Odds", desc: "Kans op wel / kans op niet: p / (1 - p)." },
        { term: "Odds Ratio (OR)", desc: "e^(β₁). Bij OR = 2.5 zijn de odds 2.5x zo hoog." },
        { term: "Cutoff", desc: "Beslisdrempel (bijv. 0.50 of 0.35 voor extra sensitiviteit)." }
      ],
      mathFormula: "\\ln\\left(\\frac{p}{1-p}\\right) = \\beta_0 + \\beta_1 X \\quad \\iff \\quad p = \\frac{1}{1 + e^{-(\\beta_0 + \\beta_1 X)}}",
      formulaExplain: "Als $\\beta_1 = 0.92$, is de Odds Ratio $\\text{OR} = e^{0.92} = 2.51$."
    },
    simulation: {
      type: "logistic_regression_simulator",
      name: "De Sigmoïde S-curve & Confusion Matrix",
      description: "Verander de beslisgrens (cutoff van 0.1 tot 0.9) en zie de Confusion Matrix live mee veranderen."
    },
    interpretation: {
      title: "Model Output & Medisch Besluit",
      metrics: [
        { label: "Odds Ratio Hoge Bloeddruk", value: "2.51 (p = 0.004)", note: "2.5x hogere odds op heropname" },
        { label: "Beslisgrens monitoring", value: "Cutoff = 0.35", note: "Voor 90% detectie van heropnames" }
      ],
      recommendation: "Patiënten met hypertensie hebben een 2.5x hogere kansverhouding op complicaties."
    },
    quiz: {
      question: "Wat is de Odds Ratio als de logistische regressie coëfficiënt β = 0 is?",
      options: [
        "OR = 0",
        "OR = 1.0 (geen effect op de odds, want e⁰ = 1)",
        "OR = 0.5",
        "OR is oneindig"
      ],
      correctIndex: 1,
      explanation: "Geweldig! Omdat $e^0 = 1.0$, betekent $\\beta = 0$ dat de odds exact gelijk blijven."
    }
  },

  {
    id: 12,
    phase: 2,
    phaseTitle: "Fase 2: Klassieke Regressie & Diagnostiek",
    title: "Regularisatie: Ridge (L₂) & Lasso (L₁)",
    subtitle: "Overfitting temmen, coëfficiënten krimpen en automatische feature selectie.",
    badge: "Klassieke Regressie",
    case: {
      title: "Casus: Klantverloop met 50 Marketingvariabelen op N = 60",
      context: "Een model met 50 variabelen op 60 klanten behaalt $R^2 = 0.98$ op training, maar $R^2 = 0.08$ op nieuwe klanten (catastrofale overfitting). Hoe temmen straftermen dit?",
      data: [
        { methode: "Standaard OLS", testR2: "0.08 (Drama)", actieveVars: "50" },
        { methode: "Ridge (L2)", testR2: "0.69 (Stabiel)", actieveVars: "50 (gekrompen)" },
        { methode: "Lasso (L1)", testR2: "0.72 (Optimaal)", actieveVars: "6 (geselecteerd!)" }
      ],
      question: "Waarom kan Lasso variabelen exact op nul zetten en Ridge niet?"
    },
    theory: {
      summary: "Regularisatie telt een straf $\\lambda$ op voor grote coëfficiënten. Ridge ($L_2$) straft $\\sum \\beta_j^2$ (krimpt evenredig). Lasso ($L_1$) straft $\\sum |\\beta_j|$ en zet irrelevante variabelen exact op 0.",
      keyConcepts: [
        { term: "Ridge (L₂)", desc: "Krimpt alle coëfficiënten richting 0; ideaal bij multicollineariteit." },
        { term: "Lasso (L₁)", desc: "Zet coëfficiënten exact op nul; automatische feature selectie." },
        { term: "Penalty (λ)", desc: "Bepaalt de sterkte van de krimp, gekozen via cross-validatie." }
      ],
      mathFormula: "\\text{Lasso: } \\min \\sum e_i^2 + \\lambda \\sum |\\beta_j| \\quad \\text{vs} \\quad \\text{Ridge: } + \\lambda \\sum \\beta_j^2",
      formulaExplain: "Lasso levert spaarzame, interpreteerbare modellen op."
    },
    simulation: {
      type: "regularization_trace_simulator",
      name: "Ridge vs Lasso Coëfficiënten Krimp Lab",
      description: "Schuif de penalty parameter λ omhoog en zie hoe Lasso variabelen uitschakelt naar nul."
    },
    interpretation: {
      title: "Modelvergelijking & Conclusie",
      metrics: [
        { label: "Beste Lasso Penalty (λ)", value: "0.22", note: "Bepaald via Kruisvalidatie" },
        { label: "Geselecteerde variabelen", value: "6 van de 50", note: "Alleen de echte signaalgevers" }
      ],
      recommendation: "Kies Lasso als je vermoedt dat slechts enkele variabelen er echt toe doen."
    },
    quiz: {
      question: "Wat is het unieke voordeel van Lasso (L₁) boven Ridge (L₂)?",
      options: [
        "Lasso kan rekenen zonder data",
        "Lasso zet irrelevante coëfficiënten exact op nul (feature selectie)",
        "Lasso garandeert altijd p = 0.05",
        "Lasso werkt alleen voor binaire uitkomsten"
      ],
      correctIndex: 1,
      explanation: "Exact! Door de geometrie van de L1-norm dwingt Lasso coëfficiënten naar exact 0."
    }
  },

  // =========================================================================
  // FASE 3: HIËRARCHIE, GEGENERALISEERDE & MIXED MODELS (Levels 13 t/m 18)
  // =========================================================================
  {
    id: 13,
    phase: 3,
    phaseTitle: "Fase 3: Mixed Models — De Praktische Sweet Spot",
    title: "Geclusterde Data & Het Falen van Standaard OLS",
    subtitle: "Waarom gewone regressie faalt bij geneste data en de Intraclass Correlatie (ICC).",
    badge: "Mixed Models (Sweet Spot)",
    case: {
      title: "Casus: Toetsscores over 20 Verschillende Basisscholen",
      context: "600 leerlingen verdeeld over 20 scholen. Pooled OLS geeft $p = 0.0004$. Maar leerlingen binnen dezelfde school lijken op elkaar. Is deze p-waarde echt betrouwbaar?",
      data: [
        { analyse: "Pooled OLS (Onafhankelijk aangenomen)", se: "0.082", pWaarde: "0.0004 (Vals alarm!)" },
        { analyse: "Cluster-gecorrigeerd (ICC)", se: "0.215", pWaarde: "0.084 (Niet significant!)" }
      ],
      question: "Waarom lijken leerlingen binnen dezelfde school op elkaar, en hoe leidt het negeren van clusters tot schijnprecisie?"
    },
    theory: {
      summary: "In de praktijk is data vaak genest (patiënten bij artsen, leerlingen in scholen). Standaard OLS negeert deze afhankelijkheid en onderschat de standaardfouten met een factor $\\sqrt{1 + (m-1)\\text{ICC}}$.",
      keyConcepts: [
        { term: "Intraclass Correlation (ICC)", desc: "Aandeel van totale variantie tussen clusters: σ²_tussen / (σ²_tussen + σ²_binnen)." },
        { term: "Schijnprecisie", desc: "Standaardfouten lijken tot 3x te klein, met een lawine aan Type I fouten tot gevolg." }
      ],
      mathFormula: "\\text{ICC} = \\frac{\\sigma^2_{\\text{school}}}{\\sigma^2_{\\text{school}} + \\sigma^2_{\\text{leerling}}} \\quad \\implies \\quad \\text{Design Effect} = 1 + (m - 1)\\text{ICC}",
      formulaExplain: "Als ICC = 0.30 en $m = 30$, is de variantie-inflatie $1 + 29 \\times 0.30 = 9.7$!"
    },
    simulation: {
      type: "cluster_icc_simulator",
      name: "Cluster Effect & ICC Simulator",
      description: "Verhoog de ICC van 0.0 naar 0.60. Zie hoe scholen uit elkaar drijven en de geclusterde SE toeneemt."
    },
    interpretation: {
      title: "Methodologisch Oordeel",
      metrics: [
        { label: "Berekende ICC", value: "0.28 (28%)", note: "28% van variantie zit tussen scholen" },
        { label: "Reële Standaardfout", value: "SE = 0.215", note: "Na rekening houden met clusters" }
      ],
      recommendation: "Gebruik nooit gewone OLS wanneer ICC > 0.05. Stap direct over naar Linear Mixed Models."
    },
    quiz: {
      question: "Wat is het grootste gevaar als je geclusterde data analyseert met gewone OLS?",
      options: [
        "De berekening duurt te lang",
        "Standaardfouten worden veel te klein geschat, wat leidt tot massale Type I fouten (schijnprecisie)",
        "Het gemiddelde wordt negatief",
        "R² wordt altijd 1"
      ],
      correctIndex: 1,
      explanation: "Cruciaal inzicht! OLS doet alsof alle waarnemingen onafhankelijk zijn."
    }
  },

  {
    id: 14,
    phase: 3,
    phaseTitle: "Fase 3: Mixed Models — De Praktische Sweet Spot",
    title: "Linear Mixed Models I: Random Intercepts",
    subtitle: "Vaste effecten vs willekeurige effecten en het magische fenomeen 'Shrinkage'.",
    badge: "Mixed Models (Sweet Spot)",
    case: {
      title: "Casus: Leertijd vs Cijfer met School-Specifieke Startniveaus",
      context: "Elke school heeft een ander startniveau (van 5.0 tot 7.5), maar op elke school levert een uur studeren ongeveer +0.4 punt op. We willen één algemeen leereffect, maar elke school haar eigen intercept.",
      data: [
        { school: "School A", startNiveau: "7.4", helling: "+0.41" },
        { school: "School B", startNiveau: "6.2", helling: "+0.39" },
        { school: "Kleine School D (3 lln)", startNiveau: "8.5", gekrompenNaar: "6.6 (Shrinkage!)" }
      ],
      question: "Hoe splitst een Random Intercept Model de werkelijkheid op in Vaste Effecten en Willekeurige Effecten?"
    },
    theory: {
      summary: "In een Random Intercept model splitsen we het intercept in een vast populatiegemiddelde $\\beta_0$ en een unieke afwijking per cluster $u_{0j} \\sim \\mathcal{N}(0, \\sigma^2_{u0})$. Dankzij Empirical Bayes Shrinkage worden kleine clusters behoedzaam naar het centrale gemiddelde getrokken.",
      keyConcepts: [
        { term: "Fixed Effect (β₁)", desc: "Het gemiddelde effect over de gehele populatie (+0.40 per uur)." },
        { term: "Random Intercept (u₀ⱼ)", desc: "Cluster-specifieke afwijking van het startniveau." },
        { term: "Shrinkage", desc: "Kleine groepen met weinig data leunen meer op het algehele gemiddelde." }
      ],
      mathFormula: "Y_{ij} = (\\beta_0 + u_{0j}) + \\beta_1 X_{ij} + \\epsilon_{ij} \\quad \\text{met } u_{0j} \\sim \\mathcal{N}(0, \\sigma^2_{u0})",
      formulaExplain: "We schatten slechts één variantieparameter $\\sigma^2_{u0}$ in plaats van 20 afzonderlijke dummies."
    },
    simulation: {
      type: "random_intercept_simulator",
      name: "Random Intercept & Shrinkage Visualizer",
      description: "Bekijk de parallelle regressielijnen per school. Verschuif de clustervariantie en zie shrinkage in actie."
    },
    interpretation: {
      title: "Statsmodels / R (lme4) Output",
      metrics: [
        { label: "Fixed Effect: Leertijd (β₁)", value: "+0.405 (p < 0.001)", note: "Zuiver overkoepelend leereffect" },
        { label: "Random Effect Var(u₀)", value: "σ²_u₀ = 1.42", note: "Variatie in startniveau tussen scholen" }
      ],
      recommendation: "Geeft een zuivere schatting van het leereffect mét respect voor startverschillen."
    },
    quiz: {
      question: "Wat gebeurt er dankzij 'shrinkage' met een school waar toevallig slechts 2 leerlingen zijn gemeten?",
      options: [
        "Die school wordt gewist",
        "Haar geschatte intercept wordt richting het algemene populatiegemiddelde getrokken",
        "Haar helling wordt exact nul",
        "Het model crasht"
      ],
      correctIndex: 1,
      explanation: "Geweldig! Dit is partial pooling: bij weinig bewijs leunt het model op het groepsgemiddelde."
    }
  },

  {
    id: 15,
    phase: 3,
    phaseTitle: "Fase 3: Mixed Models — De Praktische Sweet Spot",
    title: "Linear Mixed Models II: Random Slopes & Herhaalde Metingen",
    subtitle: "De ultieme praktische sweet spot: elk individu zijn eigen tempo en startpunt.",
    badge: "Praktische Sweet Spot",
    case: {
      title: "Casus: Cognitief Herstel na een Beroerte over 6 Maanden",
      context: "Patiënten worden 6 maanden gevolgd. Patiënt 1 herstelt met +7.8 pt/mnd; patiënt 2 met slechts +1.9 pt/mnd. Er is variatie in startniveau én in hersteltempo.",
      data: [
        { patient: "Patiënt 1", start: "35", tempo: "+7.8 pt/mnd" },
        { patient: "Patiënt 2", start: "42", tempo: "+1.9 pt/mnd" },
        { patient: "Patiënt 3", start: "50", tempo: "+4.5 pt/mnd" }
      ],
      question: "Hoe modelleer je zowel individuele startposities als individuele hersteltempo's over de tijd?"
    },
    theory: {
      summary: "In een Random Slope model mag niet alleen het intercept variëren ($u_{0j}$), maar ook de hellingshoek ($u_{1j}$). Bovendien schatten we de correlatie tussen startniveau en herstelsnelheid (inhaaleffect).",
      keyConcepts: [
        { term: "Random Slope (u₁ⱼ)", desc: "Individuele afwijking van het algemene hersteltempo: u₁ⱼ ~ N(0, σ²_u₁)." },
        { term: "Corr(u₀, u₁)", desc: "Negatieve correlatie duidt op een inhaaleffect: lagere starters herstellen sneller." }
      ],
      mathFormula: "Y_{ij} = (\\beta_0 + u_{0j}) + (\\beta_1 + u_{1j}) \\cdot \\text{Tijd}_{ij} + \\epsilon_{ij}",
      formulaExplain: "$\\beta_1$ is het gemiddelde effect van de therapie over alle mensen."
    },
    simulation: {
      type: "random_slope_simulator",
      name: "De Ultieme Mixed Model Simulator (Random Slopes)",
      description: "Speel met de random slope variantie en zie hoe individuele patiëntcurven uitwaaieren over de tijd."
    },
    interpretation: {
      title: "MixedLM Output Interpretatie",
      metrics: [
        { label: "Fixed Effect: Tijd", value: "+4.48 pt/mnd (p < 0.0001)", note: "Gemiddelde winst door therapie" },
        { label: "Random Slope Var(u₁)", value: "σ²_u₁ = 3.65", note: "Substantiële individuele verschillen" },
        { label: "Correlatie Intercept-Slope", value: "r = -0.42", note: "Inhaaleffect bij zware start" }
      ],
      recommendation: "Dit model is de absolute gouden standaard voor longitudinale data en herhaalde metingen."
    },
    quiz: {
      question: "Wat betekent het als de variantie van de slope σ²_u₁ significant groter is dan nul?",
      options: [
        "Dat de tijd geen effect heeft",
        "Dat de snelheid van verandering niet voor iedereen gelijk is, maar verschilt per individu",
        "Dat de data heteroscedastisch is",
        "Dat iedereen exact even snel herstelt"
      ],
      correctIndex: 1,
      explanation: "Meesterlijk! Precies dat is de definitie van een random slope."
    }
  },

  {
    id: 16,
    phase: 3,
    phaseTitle: "Fase 3: Hiërarchie, Gegeneraliseerde & Mixed Models",
    title: "Generalized Linear Mixed Models (GLMM)",
    subtitle: "Geclusterde binaire uitkomsten, odds ratios en tellingen met random effecten.",
    badge: "GLMM",
    case: {
      title: "Casus: Ziekenhuisinfecties over 40 Chirurgische Afdelingen",
      context: "We willen voorspellen of een patiënt een postoperatieve infectie oploopt (Ja/Nee = 1/0). Patiënten zijn geclusterd binnen 40 afdelingen. Het is dus én binair én geclusterd!",
      data: [
        { afdeling: "Chirurgie A (Algemeen)", nPatienten: 45, infecties: 3, clusterLogitIntercept: "-2.6" },
        { afdeling: "Chirurgie B (Trauma)", nPatienten: 60, infecties: 12, clusterLogitIntercept: "-1.3" },
        { afdeling: "Chirurgie C (Plastisch)", nPatienten: 35, infecties: 1, clusterLogitIntercept: "-3.5" }
      ],
      question: "Hoe combineert een GLMM de logit-linkfunctie met random intercepts om binaire geclusterde data correct te analyseren?"
    },
    theory: {
      summary: "Wanneer je uitkomst niet continu en normaal is (bijv. binair of tellingen) én je data is geclusterd, combineer je GLM met Mixed Models: GLMM. Via een linkfunctie (zoals logit of log) modelleren we de verwachte waarde met random intercepts.",
      keyConcepts: [
        { term: "Linkfunctie g(μ)", desc: "Transformeert de niet-lineaire kans naar lineaire predictorschaal (bijv. logit)." },
        { term: "Random Intercept op Logit-schaal", desc: "Elk ziekenhuis krijgt een eigen basis-risiconiveau u₀ⱼ op de log-odds schaal." }
      ],
      mathFormula: "\\text{logit}(P(Y_{ij}=1)) = (\\beta_0 + u_{0j}) + \\beta_1 X_{ij} \\quad \\text{met } u_{0j} \\sim \\mathcal{N}(0, \\sigma^2_u)",
      formulaExplain: "Hierdoor schat je betrouwbare Odds Ratios zonder dat ziekenhuizen met toevallig veel patiënten de data domineren."
    },
    simulation: {
      type: "glmm_simulator",
      name: "GLMM Cluster-Risico Simulator",
      description: "Bekijk hoe de infectiekans per ziekenhuis varieert op de S-curve door de variatie in random intercepts."
    },
    interpretation: {
      title: "GLMM Output Interpretatie",
      metrics: [
        { label: "Operatieduur (per uur)", value: "OR = 1.48 (p = 0.002)", note: "+48% kans op infectie per extra uur" },
        { label: "Tussen-Afdeling Variantie", value: "σ²_u = 0.64", note: "Aanzienlijke kwaliteitsverschillen tussen afdelingen" }
      ],
      recommendation: "GLMM voorkomt dat je ziekenhuis-verschillen aanziet voor patiënt-factoren."
    },
    quiz: {
      question: "Wanneer stap je over van een LMM naar een GLMM?",
      options: [
        "Wanneer de data perfect normaal verdeeld is",
        "Wanneer de geclusterde uitkomstvariabele niet-normaal is (zoals binair Ja/Nee of Poisson tellingen)",
        "Wanneer je minder dan 5 waarnemingen hebt",
        "Alleen als R² groter is dan 0.90"
      ],
      correctIndex: 1,
      explanation: "Juist! GLMM is de veralgemening voor geclusterde niet-normale uitkomsten."
    }
  },

  {
    id: 17,
    phase: 3,
    phaseTitle: "Fase 3: Hiërarchie, Gegeneraliseerde & Mixed Models",
    title: "Generalized Additive Models (GAMs)",
    subtitle: "Vrije niet-lineaire curven modelleren via splines zonder starre formules.",
    badge: "GAMs",
    case: {
      title: "Casus: Buitentemperatuur vs Energieverbruik (U-Vormige Kromming)",
      context: "Bij -5°C stijgt het gasverbruik hard (verwarming). Bij +18°C is het minimaal. Boven de 28°C stijgt het stroomverbruik weer hard (airco). Geen enkele rechte lijn kan dit vangen!",
      data: [
        { tempC: -5, verbruik: 45, regime: "Verwarming" },
        { tempC: 5, verbruik: 28, regime: "Verwarming" },
        { tempC: 18, verbruik: 12, regime: "Optimaal" },
        { tempC: 32, verbruik: 38, regime: "Airco" }
      ],
      question: "Hoe laten splines in een GAM de data zelf bepalen hoe de curve loopt, zonder overfitting?"
    },
    theory: {
      summary: "GAMs vervangen lineaire termen $\\beta X$ door gladde functies $f(X)$ (splines). Een gladheidsterm (smoothing parameter $\\lambda$) zorgt voor de balans tussen flexibiliteit en eenvoud.",
      keyConcepts: [
        { term: "Smooth Function f(X)", desc: "Opgebouwd uit stuksgewijze polynomen (spline basis functies)." },
        { term: "Smoothing Parameter λ", desc: "Bestraft te wiebelige curven om overfitting te voorkomen." }
      ],
      mathFormula: "Y = \\beta_0 + f(\\text{Temperatuur}) + \\epsilon \\quad \\text{minimaliseer } \\sum e_i^2 + \\lambda \\int [f''(x)]^2 dx",
      formulaExplain: "Als $\\lambda \\to \\infty$ wordt de curve een rechte lijn; als $\\lambda \\to 0$ volgt hij elke afzonderlijke ruispunt."
    },
    simulation: {
      type: "gam_spline_simulator",
      name: "GAM Spline & Smoothing Simulator",
      description: "Schuif aan smoothing parameter λ en zie hoe de curve verandert van een stijve rechte lijn naar een perfecte vloeiende curve."
    },
    interpretation: {
      title: "GAM Output Interpretatie",
      metrics: [
        { label: "Effective Degrees of Freedom (edf)", value: "edf = 4.2", note: "Geeft de complexiteit van de kromming aan" },
        { label: "P-waarde van f(Temperatuur)", value: "p < 0.0001", note: "Hoogst significant niet-lineair effect" }
      ],
      recommendation: "Gebruik GAMs wanneer de natuurwetenschappelijke relatie duidelijk gekromd is maar je geen arbitraire $X^2$ of $X^3$ wilt forceren."
    },
    quiz: {
      question: "Wat gebeurt er in een GAM als de smoothing parameter λ heel erg groot wordt?",
      options: [
        "De curve wordt extreem kronkelig en overfit",
        "De curve wordt kaarsrecht (gedraagt zich als gewone lineaire regressie)",
        "Het model crasht",
        "R² wordt automatisch nul"
      ],
      correctIndex: 1,
      explanation: "Precies! Een oneindige smoothing penalty dwingt de tweede afgeleide naar nul, wat resulteert in een rechte lijn."
    }
  },

  {
    id: 18,
    phase: 3,
    phaseTitle: "Fase 3: Hiërarchie, Gegeneraliseerde & Mixed Models",
    title: "Overleving- & Tijd-tot-Gebeurtenis Analyse",
    subtitle: "Kaplan-Meier curven, censurering en het Cox Proportional Hazards model.",
    badge: "Survival Analysis",
    case: {
      title: "Casus: Overlevingstijd bij Kankertherapie (Rechtscensurering)",
      context: "We volgen patiënten tot 5 jaar. Sommige patiënten overlijden; anderen zijn na 5 jaar nog in leven of verhuizen halverwege. Je mag hen niet weggooien, want ze hebben bewezen maandenlang te overleven!",
      data: [
        { patient: "P1", maandenTotEvent: 14, overleden: 1 },
        { patient: "P2", maandenTotEvent: 60, overleden: 0, status: "Gecensureerd (nog in leven)" },
        { patient: "P3", maandenTotEvent: 28, overleden: 0, status: "Gecensureerd (verhuisd)" }
      ],
      question: "Hoe berekent de Kaplan-Meier schatter de overlevingskans over de tijd ondanks ontbrekende eindpunten (censurering)?"
    },
    theory: {
      summary: "In survival analysis is de uitkomsttijd 'gecensureerd' voor wie het event nog niet heeft meegemaakt. De Kaplan-Meier curve berekent cumulatieve overlevingskansen stap voor stap. Het Cox PH model schat Hazard Ratios ($HR$): het relatieve risico per tijdseenheid.",
      keyConcepts: [
        { term: "Censurering", desc: "We weten dat de patiënt minstens T maanden heeft overleefd, maar niet wanneer het event daarna plaatsvindt." },
        { term: "Hazard Ratio (HR)", desc: "HR = 0.60 betekent 40% lager risico op overlijden op elk willekeurig moment." }
      ],
      mathFormula: "S(t) = \\prod_{t_i \\le t} \\left(1 - \\frac{d_i}{n_i}\\right) \\quad \\text{en } h(t) = h_0(t) e^{\\beta X}",
      formulaExplain: "De noemer $n_i$ krimpt alleen voor patiënten die nog 'at risk' zijn op dat specifieke moment."
    },
    simulation: {
      type: "survival_simulator",
      name: "Kaplan-Meier Curve & Hazard Ratio Lab",
      description: "Vergelijk de overlevingscurven van de nieuwe therapie vs standaardzorg. Zie de trapvormige dalingen bij events."
    },
    interpretation: {
      title: "Cox Model Output",
      metrics: [
        { label: "Hazard Ratio (Nieuwe Therapie)", value: "HR = 0.58 (p = 0.003)", note: "42% risicoreductie!" },
        { label: "Mediane Overleving", value: "38 mnd vs 22 mnd", note: "+16 maanden levensverlenging" }
      ],
      recommendation: "De nieuwe therapie biedt een statistisch en klinisch bewezen levensverlenging."
    },
    quiz: {
      question: "Wat betekent een Hazard Ratio van HR = 0.70 voor een nieuwe behandeling?",
      options: [
        "70% van de patiënten overlijdt",
        "Op elk moment tijdens de studie is het risico op het event 30% lager voor patiënten met de behandeling",
        "De behandeling duurt 70 dagen",
        "Het effect is niet significant"
      ],
      correctIndex: 1,
      explanation: "Uitstekend! HR = 0.70 betekent een 30% lagere hazard rate ten opzichte van controle."
    }
  },

  // =========================================================================
  // FASE 4: DE GEAVANCEERDE GRENZEN TOT HET APEX (Levels 19 t/m 24)
  // =========================================================================
  {
    id: 19,
    phase: 4,
    phaseTitle: "Fase 4: De Geavanceerde Grenzen",
    title: "Bayesiaanse Grondslagen: Prior, Likelihood & Posterior",
    subtitle: "Onzekerheid actualiseren via het theorema van Bayes: P(θ|D) ∝ P(D|θ) P(θ).",
    badge: "Bayesiaans",
    case: {
      title: "Casus: De Zeldzame Ziekte & De Positieve Test",
      context: "Een ziekte treft 1 op de 1.000 mensen (Prior = 0.1%). Een test is 99% accuraat. Een patiënt test positief. De arts denkt: 'Je bent voor 99% zeker ziek.' Maar wat zegt Thomas Bayes?",
      data: [
        { parameter: "Prior Prevalentie P(Ziek)", waarde: "0.001 (0.1%)" },
        { parameter: "Sensitiviteit P(+ | Ziek)", waarde: "0.99 (99%)" },
        { parameter: "Vals-Positief P(+ | Gezond)", waarde: "0.05 (5%)" },
        { parameter: "Werkelijke Posterior P(Ziek | +)", waarde: "Slechts ~1.9%!" }
      ],
      question: "Waarom is de werkelijke kans op ziekte na een positieve test slechts 2% en hoe actualiseert Bayesiaanse statistiek onze overtuigingen?"
    },
    theory: {
      summary: "In de Bayesiaanse statistiek zijn parameters geen vaste onbekende getallen, maar kansverdelingen die onze onzekerheid representeren. We combineren eerdere kennis (Prior) met nieuwe observaties (Likelihood) om tot een geactualiseerde overtuiging te komen (Posterior).",
      keyConcepts: [
        { term: "Prior P(θ)", desc: "Wat we wisten vóór we nieuwe data zagen." },
        { term: "Likelihood P(D | θ)", desc: "Hoe waarschijnlijk is de waargenomen data gegeven parameter θ." },
        { term: "Posterior P(θ | D)", desc: "Onze geactualiseerde kennis na het zien van de data." }
      ],
      mathFormula: "P(\\theta \\mid D) = \\frac{P(D \\mid \\theta) P(\\theta)}{P(D)} \\propto P(D \\mid \\theta) \\times P(\\theta)",
      formulaExplain: "Posterior = (Likelihood × Prior) / Bewijs."
    },
    simulation: {
      type: "bayesian_update_simulator",
      name: "Bayesiaanse Update Simulator",
      description: "Verander de sterkte van je Prior en voeg datapunten toe. Zie hoe de Posterior curve zich langzaam beweegt van de prior naar de data!"
    },
    interpretation: {
      title: "Bayesiaanse Uitkomst",
      metrics: [
        { label: "Posterior Mediaan", value: "θ = 0.42", note: "Geactualiseerde schatting" },
        { label: "95% Credible Interval", value: "[0.34, 0.51]", note: "Hierin ligt θ wél met 95% echte kans!" }
      ],
      recommendation: "Bayesiaanse credible intervals geven wél de intuïtieve interpretatie die frequentistische CI's niet mogen claimen."
    },
    quiz: {
      question: "Wat is het grote conceptuele verschil tussen een frequentistisch 95% CI en een Bayesiaans 95% Credible Interval?",
      options: [
        "Er is geen enkel verschil",
        "In een Bayesiaans Credible Interval is er daadwerkelijk 95% kans dat de parameter binnen de grenzen ligt, gegeven de data en prior",
        "Frequentistische intervallen zijn altijd 3x zo breed",
        "Bayesiaanse intervallen kunnen niet berekend worden"
      ],
      correctIndex: 1,
      explanation: "Precies! Omdat parameters in Bayesiaanse optiek verdelingen zijn, mag je wél spreken van de kans op de parameterwaarde."
    }
  },

  {
    id: 20,
    phase: 4,
    phaseTitle: "Fase 4: De Geavanceerde Grenzen",
    title: "Bayesiaanse MCMC & Hamiltoniaanse Monte Carlo",
    subtitle: "Steekproeftrekking uit complexe posteriors via Markov Chains (PyMC & Stan).",
    badge: "MCMC",
    case: {
      title: "Casus: Complexe Verdelingen die Wiskundig Niet Integreerbaar Zijn",
      context: "Bij complexe modellen met honderden parameters kan de noemer $P(D) = \\int P(D|\\theta)P(\\theta)d\\theta$ niet met pen en papier berekend worden. Hoe kan een computer dan toch de posterior verkennen?",
      data: [
        { methode: "Metropolis-Hastings", efficiency: "Trage random walk", acceptatie: "23%" },
        { methode: "No-U-Turn Sampler (NUTS / Stan)", efficiency: "Fysische simulatie (HMC)", acceptatie: "85%" }
      ],
      question: "Hoe wandelt een MCMC-keten door de parameterruimte om een representatieve wolk van posteriorsamples te verzamelen?"
    },
    theory: {
      summary: "Markov Chain Monte Carlo (MCMC) genereert steekproeven uit de posterior zonder de normalisatieconstante te berekenen. Hamiltoniaanse Monte Carlo (HMC) gebruikt wrijvingloze fysica (een knikker die over een heuvelachtig potentiaaloppervlak rolt) om razendsnel hoog-dimensionale ruimten te verkennen.",
      keyConcepts: [
        { term: "Traceplot", desc: "Tijdsreeks van de wandeling. Moet eruitzien als een wollige rups (goede convergentie)." },
        { term: "R-hat (R̂)", desc: "Gelman-Rubin diagnostiek. R̂ < 1.05 betekent dat onafhankelijke ketens het eens zijn." }
      ],
      mathFormula: "H(p, q) = U(q) + K(p) \\quad \\text{met } \\frac{dq}{dt} = \\frac{\\partial H}{\\partial p}, \\; \\frac{dp}{dt} = -\\frac{\\partial H}{\\partial q}",
      formulaExplain: "HMC lost Hamilton's bewegingsvergelijkingen op om grote sprongen door de kansruimte te maken."
    },
    simulation: {
      type: "mcmc_sampler_simulator",
      name: "Hamiltoniaanse MCMC Wandelaar",
      description: "Bekijk hoe de sampler stappen zet door een 2D posteriorlandschap en inspecteer de live traceplot."
    },
    interpretation: {
      title: "MCMC Diagnostiek",
      metrics: [
        { label: "R-hat (R̂)", value: "1.002", note: "Perfecte convergentie (< 1.05)" },
        { label: "Effectieve Steekproefgrootte (ESS)", value: "3.400 samples", note: "Voldoende onafhankelijke trekkingen" }
      ],
      recommendation: "Pas MCMC pas toe wanneer analytische benaderingen te kort schieten voor niet-lineaire hiërarchische modellen."
    },
    quiz: {
      question: "Wat duidt op een gezonde MCMC-keten in een traceplot?",
      options: [
        "Een strakke horizontale lijn",
        "Een 'harige rups' waarin de ketens kriskras door elkaar lopen rond dezelfde stationaire verdeling",
        "Grote langdurige golven en trappen",
        "Periodieke pieken"
      ],
      correctIndex: 1,
      explanation: "Juist! Een harige rups toont goede vermenging (mixing) en convergentie."
    }
  },

  {
    id: 21,
    phase: 4,
    phaseTitle: "Fase 4: De Geavanceerde Grenzen",
    title: "Niet-Parametrische Bayesiaanse Modellen & Gaussiaanse Processen",
    subtitle: "Oneindig veel parameters: modelleren van complete functies via Gaussische Processen (GPs).",
    badge: "Gaussiaanse Processen",
    case: {
      title: "Casus: Bodemschattingen op Onbekend Terrein (Kriging / GP)",
      context: "We boren op 12 plekken naar grondwaterkwaliteit. We willen niet alleen de kwaliteit voorspellen op ongemeten plekken, maar ook exact weten HOE ONZEKER we zijn tussen de boorpunten.",
      data: [
        { boorpunt: "B01", xCoord: 1.2, meting: 8.4, onzekerheid: "0.0 (exact gemeten)" },
        { boorpunt: "B02", xCoord: 3.5, meting: 4.1, onzekerheid: "0.0 (exact gemeten)" },
        { tussengebied: "X = 2.3", xCoord: 2.3, voorspelling: "6.2", onzekerheid: "± 2.4 (onzekerheidsband)" }
      ],
      question: "Wat is een Gaussiaans Proces en hoe levert een kernel-matrix een verdeling over oneindig veel functies op?"
    },
    theory: {
      summary: "Een Gaussiaans Proces (GP) is een niet-parametrische methode: we kiezen geen vaste formule, maar definiëren een verdeling over functies. Elke eindige subset van punten is multivariaat normaal verdeeld. Waar data ligt, knijpt de onzekerheidsband samen tot nul; tussen datapunten zwelt de onzekerheid op.",
      keyConcepts: [
        { term: "Covariantie Kernel k(x, x')", desc: "Bepaalt de gladheid (bijv. Radial Basis Function / Squared Exponential)." },
        { term: "Oneindig-dimensionaal", desc: "Een functie kan worden gezien als een oneindig lange vector van waarden." }
      ],
      mathFormula: "f(x) \\sim \\mathcal{GP}\\left(m(x), \\; k(x, x')\\right) \\quad \\text{met } k(x, x') = \\sigma^2 \\exp\\left(-\\frac{(x - x')^2}{2\\ell^2}\\right)",
      formulaExplain: "De lengteschaal $\\ell$ bepaalt hoe snel correlatie tussen twee punten vervalt in de ruimte."
    },
    simulation: {
      type: "gaussian_process_simulator",
      name: "Gaussiaans Proces (GP) Visualizer",
      description: "Klik om datapunten toe te voegen. Zie hoe de onzekerheidsband (95% credible band) rond je punten samenknijpt!"
    },
    interpretation: {
      title: "GP Resultaat",
      metrics: [
        { label: "Lengteschaal (ℓ)", value: "1.85 km", note: "Reikwijdte van ruimtelijke correlatie" },
        { label: "Signaalvariantie (σ²)", value: "3.20", note: "Totale ruimtelijke variabiliteit" }
      ],
      recommendation: "GPs zijn ongeëvenaard voor ruimtelijke interpolatie, bayesiaanse optimalisatie en fysische modellering."
    },
    quiz: {
      question: "Wat gebeurt er met de onzekerheid van een Gaussiaans Proces op de exacte plek waar je een meting hebt verricht (zonder meetruis)?",
      options: [
        "De onzekerheid wordt oneindig",
        "De onzekerheidsband krimpt exact naar nul",
        "De onzekerheid blijft 50%",
        "De voorspelling wordt een rechte lijn"
      ],
      correctIndex: 1,
      explanation: "Precies! Het proces wordt geconditioneerd op de data, waardoor op de meetpunten geen onzekerheid meer resteert."
    }
  },

  {
    id: 22,
    phase: 4,
    phaseTitle: "Fase 4: De Geavanceerde Grenzen",
    title: "Causale Inferentie in Hilbertruimten & Do-Calculus",
    subtitle: "Van correlatie naar causale interventies via DAGs, do-calculus en Kernel Hilbertruimten (RKHS).",
    badge: "Causale Inferentie",
    case: {
      title: "Casus: Kijken (Zien) versus Doen (Interveniëren)",
      context: "Als mensen paracetamol slikken, hebben ze vaak hoofdpijn: $P(\\text{Hoofdpijn} \\mid \\text{Paracetamol}) > P(\\text{Hoofdpijn} \\mid \\text{Geen})$. Maakt paracetamol ziek? Nee! Maar $P(Y \\mid X) \\neq P(Y \\mid \\text{do}(X))$. Hoe formaliseert Judea Pearl dit?",
      data: [
        { perspectief: "Passieve Observatie P(Y | X)", conclusie: "Positieve correlatie (hoofdpijn en pil)" },
        { perspectief: "Actieve Interventie P(Y | do(X))", conclusie: "Causale genezing (pil verlaagt hoofdpijn)" }
      ],
      question: "Wat is het verschil tussen conditioneren op een observatie en interveniëren met de do-operator in een causale graaf?"
    },
    theory: {
      summary: "Causaliteit vereist een structureel causaal model (Directed Acyclic Graph, DAG). Met de do-operator $\\text{do}(X=x)$ knippen we de inkomende pijlen naar $X$ door om confounding te elimineren. In oneindig-dimensionale Hilbertruimten ($\mathcal{H}$) embedden we complete kansverdelingen via Kernel Mean Embeddings om niet-lineaire causale effecten zonder parametrische aannames te schatten.",
      keyConcepts: [
        { term: "do(X = x)", desc: "Stelt X actief in door interventie; verwijdert confounding invloeden." },
        { term: "Backdoor Criterium", desc: "Regels om te bepalen voor welke variabelen je moet controleren om causale effecten te isoleren." },
        { term: "Reproducing Kernel Hilbert Space (RKHS, ℋ)", desc: "Een oneindig-dimensionale functieruimte waarin kansverdelingen als vectoren worden gerepresenteerd." }
      ],
      mathFormula: "P(Y \\mid \\text{do}(X = x)) = \\sum_z P(Y \\mid X=x, Z=z) P(Z=z) \\quad \\text{in } \\mathcal{H}",
      formulaExplain: "De do-operator berekent wat er gebeurt als je het systeem zélf bestuurt in plaats van slechts toekijkt."
    },
    simulation: {
      type: "causal_dag_simulator",
      name: "Causale DAG & do-Operator Lab",
      description: "Schakel tussen 'Passief Observeren' en 'do(X) Interventie'. Zie hoe de confounder-pijl wordt doorgeknipt!"
    },
    interpretation: {
      title: "Causaal Besluit",
      metrics: [
        { label: "Observationeel Verschil", value: "+0.35", note: "Misleidend door selectiebias" },
        { label: "Causaal Interventie-Effect", value: "-0.48 (p < 0.001)", note: "Het werkelijke genezende effect onder do(X)" }
      ],
      recommendation: "Trek nooit causale beleidsconclusies zonder expliciete causale DAG en backdoor-verantwoording."
    },
    quiz: {
      question: "Wat doet de do-operator do(X = x) met de causale graaf?",
      options: [
        "Het wist alle datapunten",
        "Het 'knipt' alle inkomende causale pijlen naar X door, omdat X nu van buitenaf wordt bepaald door de onderzoeker",
        "Het maakt alle variabelen onafhankelijk",
        "Het verdubbelt de steekproefgrootte"
      ],
      correctIndex: 1,
      explanation: "Voltreffer! De do-operator verbreekt de natuurlijke oorzaken van X en maakt X exogeen."
    }
  },

  {
    id: 23,
    phase: 4,
    phaseTitle: "Fase 4: De Geavanceerde Grenzen",
    title: "Stochastische Differentiële Vergelijkingen (SDE's)",
    subtitle: "Continue dynamische systemen onder invloed van Brownse ruis: dX_t = μ dt + σ dB_t.",
    badge: "SDE's",
    case: {
      title: "Casus: De Eiwitvouwing & Financiële Diffusie onder Ruis",
      context: "Een molecuul beweegt in een vloeistof. Het voelt een krachtveld (drift $\\mu$), maar botst ook voortdurend willekeurig tegen miljoenen watermoleculen (diffusie $\\sigma dB_t$). Gewone differentiaalvergelijkingen falen omdat het pad nergens differentieerbaar is!",
      data: [
        { tijd: "t = 0.0", positie: "x = 0.0", regime: "Start in potentiaalkuil" },
        { tijd: "t = 1.0", positie: "x = 1.4", regime: "Stochastische sprong over barrière" }
      ],
      question: "Waarom vereist stochastische ruis een nieuwe calculus (Itô calculus) en wat betekent dX_t = μ(X_t)dt + σ(X_t)dB_t?"
    },
    theory: {
      summary: "Een Stochastische Differentiële Vergelijking (SDE) modelleert de evolutie van een toevalsproces in continue tijd. Het combineert een deterministische drift-component met een stochastische diffusie-term aangedreven door een Brownse beweging ($B_t$). Omdat Brownse paden fractal-achtig en nergens differentieerbaar zijn, geldt Itô's Lemma: $(dB_t)^2 = dt$.",
      keyConcepts: [
        { term: "Drift μ(X_t) dt", desc: "De deterministische neiging of richting van het systeem." },
        { term: "Diffusie σ(X_t) dB_t", desc: "De intensiteit van de continue willekeurige fluctuaties." },
        { term: "Itô Lemma", desc: "De kettingregel voor stochastische functies waarin de tweede afgeleide meedoet: df = f' dX + ½ f'' σ² dt." }
      ],
      mathFormula: "dX_t = \\mu(X_t, t) dt + \\sigma(X_t, t) dB_t \\quad \\text{met } (dB_t)^2 = dt",
      formulaExplain: "De term $(dB_t)^2 = dt$ is het fundamentele verschil tussen klassieke Newtoniaanse calculus en stochastische calculus."
    },
    simulation: {
      type: "sde_brownian_simulator",
      name: "SDE Euler-Maruyama Traject Simulator",
      description: "Verander de drift μ en diffusie σ en genereer live 20 stochastische paden door de tijd."
    },
    interpretation: {
      title: "SDE Karakteristieken",
      metrics: [
        { label: "Verwachte Drift E[X_t]", value: "Lineaire trend", note: "Gemiddelde pad van het ensemble" },
        { label: "Variantie Var[X_t]", value: "Groeit evenredig met t", note: "Diffusie spreidt het ensemble uit" }
      ],
      recommendation: "SDE's zijn de standaardtaal voor biofysica, neurodynamica en continue financiële markten."
    },
    quiz: {
      question: "Wat is volgens Itô calculus de waarde van (dB_t)²?",
      options: [
        "0 (zoals in gewone calculus waar (dt)² verwaarloosbaar is)",
        "dt (een eerste-orde term in tijd!)",
        "Oneindig",
        "dB_t"
      ],
      correctIndex: 1,
      explanation: "Heel scherp! Omdat Brownse beweging schaalt met $\\sqrt{dt}$, is het kwadraat $(\\sqrt{dt})^2 = dt$. Dit introduceert de tweede afgeleide in Itô's kettingregel."
    }
  },

  // =========================================================================
  // LEVEL 24: HET THEORETISCHE APEX
  // =========================================================================
  {
    id: 24,
    phase: 4,
    phaseTitle: "Fase 4: De Geavanceerde Grenzen (Het Ultieme Apex)",
    title: "Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces",
    subtitle: "De theoretische grens van moderne statistiek: niet-euclidische manifolds, ruwe paden en oneindig-dimensionale causale inferentie.",
    badge: "Het Ultieme Apex (Level 24)",
    case: {
      title: "Casus: Het Hersenlandschap & Complexe Klimaatdynamica",
      context: "Stel je voor: we modelleren de dynamiek van 100 miljard neuronen of het planetaire klimaatsysteem. Data beweegt niet in een vlakke ruimte, maar op een gekromd energetisch oppervlak (Manifold $\\mathcal{M}$). De ruis is geen gladde Brownse beweging, maar extreem grillig fractaal (Rough Path met Hurst exponent $H < 1/2$). We kennen de vorm van de wetten niet (Non-parametric Bayesian), de toestand is een oneindig-dimensionaal veld in een Hilbertruimte ($\\mathcal{H}$), en we willen weten wat er gebeurt onder causale manipulatie (bijv. diepe hersenstimulatie of geo-engineering)!",
      data: [
        { dimensie: "Geometrie (Manifold M)", eigenschap: "Gekromde ruimte (Riemannse tensor)", rol: "Gradient buigt mee met kromming ∇_M" },
        { dimensie: "Stochastiek (Rough Paths)", eigenschap: "Hurst exponent H = 0.35 (< 0.5)", rol: "Klassieke Ito faalt; Terry Lyons signatures herstellen continuïteit" },
        { dimensie: "Parametrisatie (Bayesian GP)", eigenschap: "Oneindig-dimensionale prior", rol: "Geen starre formules, data vormt het potentiaalveld Φ" },
        { dimensie: "Causaliteit (Hilbertruimte H)", eigenschap: "Kernel Mean Embedding", rol: "do(X) interventies op continue velden" }
      ],
      question: "Hoe integreert de apex-formule geometrie, ruwe fractale stochastiek, oneindige dimensies en causaliteit tot één samenhangend model?"
    },
    theory: {
      summary: "Dit is het absolute theoretische zenith van de statistiek. Elk symbool in deze formule vertegenwoordigt een meesterwerk van de 20e en 21e-eeuwse wiskunde:",
      keyConcepts: [
        { term: "Riemannse Manifold (ℳ) & ∇_ℳ Φ", desc: "Data leeft op een gekromd oppervlak. De gradiënt ∇_ℳ Φ volgt de geodeten (de kromming) van de ruimte via de Laplace-Beltrami operator." },
        { term: "Ruwe Paden (Rough Paths dB_t^rough)", desc: "Wanneer ruis te ruw is (Hurst H < 1/2), divergeert klassieke stochastische calculus. Terry Lyons' rough path theorie lost dit op door paden uit te breiden met geïtereerde integralen (Signatures)." },
        { term: "Oneindig-dimensionale Hilbertruimte (ℋ)", desc: "X_t is geen los getal meer, maar een complete continue functie of kwantumveld. Inproducten ⟨f, g⟩_ℋ definiëren afstanden en energie." },
        { term: "Causale Hilbert Inferentie", desc: "We modelleren niet slechts de associatieve stroom, maar de causale propagator onder do-interventies via Kernel Mean Embeddings in ℋ." }
      ],
      mathFormula: "dX_t = \\nabla_{\\mathcal{M}} \\Phi(X_t) dt + \\sigma(X_t) d\\mathbf{B}_t^{\\text{rough}} \\quad \\text{in } \\mathcal{H}",
      formulaExplain: "In gewone mensentaal: een oneindig-dimensionaal toevalsproces ($X_t \\in \\mathcal{H}$) stroomt langs de steilste afdaling van een onbekend potentiaalveld over een gekromd oppervlak ($\\nabla_{\\mathcal{M}} \\Phi dt$), terwijl het voortdurend wordt bestookt door ultra-grillige fractale schokken ($d\\mathbf{B}_t^{\\text{rough}}$), waarbij causale interventies de stroomlijnen herprogrammeren."
    },
    simulation: {
      type: "apex_manifold_simulator",
      name: "De Ultieme Apex Simulator: Manifold, Rough Paths & Vectorveld",
      description: "Bekijk de dynamiek op een gekromd 3D-zadelvlak / manifold. Pas de Hurst roughness H aan van Brownse beweging (0.50) naar ultra-ruw (0.25) en zie hoe de deeltjes over het Riemannse oppervlak bewegen onder het potentiaalveld!"
    },
    interpretation: {
      title: "Apex Model Synthese",
      metrics: [
        { label: "Manifold Kromming (Ricci Scalar)", value: "R < 0 (Hyperbolisch)", note: "Kromming buigt de driftlijnen af" },
        { label: "Roughness Parameter (Hurst H)", value: "H = 0.32", note: "Niet-Markovian geheugeneffecten in ruis" },
        { label: "Hilbertruimte Dimensie", value: "dim(ℋ) = ∞", note: "Functieruimte L²(ℳ) met reproducerende kernel" },
        { label: "Causale Validatie", value: "do(Interventie) bewezen", note: "Stabiel onder externe perturbaties" }
      ],
      recommendation: "Gefeliciteerd! Je hebt de volledige reis voltooid van de meest basale centrummaten (€ 3.000 vs € 48.000 salaris) tot aan de wiskundige grens van de moderne theoretische statistiek. Je begrijpt nu hoe eenvoudige lineaire modellen stap voor stap transformeren tot oneindig-dimensionale stochastische systemen op gekromde ruimten!"
    },
    quiz: {
      question: "Wat is de voornaamste reden dat we 'Rough Path' theorie nodig hebben in plaats van gewone Itô calculus in de formule dX_t = ∇_ℳ Φ dt + σ dB_t^rough?",
      options: [
        "Omdat gewone Itô calculus te makkelijk is om uit te rekenen",
        "Omdat wanneer het stochastische pad een Hurst exponent H < 1/2 heeft, de klassieke kwadratische variatie niet volstaat en de Itô integraal niet continu is in de p-variatie metriek",
        "Omdat gekromde manifolds geen integralen toestaan",
        "Omdat de computersnelheid anders te laag wordt"
      ],
      correctIndex: 1,
      explanation: "Absoluut meesterlijk! Terry Lyons ontwikkelde rough path theorie precies hiervoor: om stochastische differentiaalvergelijkingen continu en deterministisch oplosbaar te maken voor niet-gladde, fractale paden via iterated integral signatures."
    }
  }
];
