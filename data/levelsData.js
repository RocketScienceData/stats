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
      { text: "Het rekenkundig gemiddelde, want dat gebruikt alle observaties zonder informatieverlies", score: 0, feedback: "Het rekenkundig gemiddelde wordt enorm opgeblazen door de 6-uur uitschieters en vertekent de typische ervaring." },
      { text: "De mediaan, omdat deze robuust is tegen extreme asymmetrische uitschieters", score: 2, feedback: "Uitstekend! De mediaan splitst de populatie zuiver op het 50e percentiel, ongeacht de staartlengte." },
      { text: "De modus, omdat de wachttijd die het vaakst voorkomt (10 min) de hoogste kansdichtheid heeft voor een binnenkomende patiënt", score: 0, feedback: "De modus negeert de gehele spreiding en de levensbedreigende vertragingen in de rechterstaart." }
    ],
    options_en: [
      { text: "The arithmetic mean, because it incorporates all data points without information loss", score: 0, feedback: "The mean is heavily distorted by the 6-hour outlier patients and misrepresents typical wait time." },
      { text: "The median, because it is robust against extreme skewed outliers", score: 2, feedback: "Excellent! The median provides an unskewed 50th percentile view of the typical patient." },
      { text: "The mode, because the most frequent wait time (10 min) represents peak probability density for an incoming patient", score: 0, feedback: "The mode ignores the overall distribution and the severe clinical delays in the right tail." }
    ],
    options_es: [
      { text: "La media aritmética, ya que utiliza todas las observaciones sin pérdida de información", score: 0, feedback: "La media aritmética se infla desproporcionadamente por los valores atípicos de 6 horas." },
      { text: "La mediana, porque es robusta frente a valores atípicos asimétricos extremos", score: 2, feedback: "¡Excelente! La mediana parte la muestra limpiamente en el percentil 50 sin sesgo de cola." },
      { text: "La moda, porque el tiempo de espera más frecuente (10 min) representa la mayor densidad de probabilidad para un paciente", score: 0, feedback: "La moda descarta toda la dispersión y la gravedad de las esperas prolongadas en la cola derecha." }
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
      { text: "De foutmarge wordt 4x zo klein, omdat de precisie recht evenredig toeneemt met de steekproefgrootte", score: 0, feedback: "Klassieke lineaire denkval: vanwege de wortel in de noemer deelt men door √4 = 2, niet door 4." },
      { text: "De foutmarge wordt 16x zo klein, omdat de variantiereductie kwadratisch schaalt met de steekproefomvang", score: 0, feedback: "Verwarring tussen variantie en standaardafwijking: de standaardfout deelt door √N, niet door N²." }
    ],
    options_en: [
      { text: "The margin of error halves (becomes 2x smaller, because √4 = 2)", score: 2, feedback: "Exact! Law of diminishing returns in empirical sampling." },
      { text: "The margin of error becomes 4x smaller, because precision scales linearly with sample size", score: 0, feedback: "Classic linear trap: due to the square root in the denominator, you divide by √4 = 2, not 4." },
      { text: "The margin of error becomes 16x smaller, because variance reduction scales quadratically with sample size", score: 0, feedback: "Confusion between variance and standard error: standard error scales with 1/√N, not 1/N²." }
    ],
    options_es: [
      { text: "El margen de error se reduce a la mitad (2 veces menor, porque √4 = 2)", score: 2, feedback: "¡Exacto! Ley de rendimientos decrecientes en el muestreo empírico." },
      { text: "El margen de error se reduce 4 veces, porque la precisión escala linealmente con la muestra", score: 0, feedback: "Trampa clásica de proporcionalidad lineal: por la raíz en el denominador, se divide por √4 = 2, no por 4." },
      { text: "El margen de error se reduce 16 veces, porque la reducción de varianza escala cuadráticamente con la muestra", score: 0, feedback: "Confusión entre varianza y error estándar: el error estándar divide por √N, no por N²." }
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
      { text: "De nulhypothese kan formeel niet verworpen worden omdat het effect onder de biologische ruisgrens van 2 mmHg valt", score: 0, feedback: "Valkuil: H0 (Δ = 0) wordt statistisch wél overtuigend verworpen, maar de effectgrootte mist elke therapeutische waarde." }
    ],
    options_en: [
      { text: "The drug is a revolutionary breakthrough because p is infinitesimally small", score: 0, feedback: "Caution: p-values only measure evidence against chance, not practical relevance!" },
      { text: "The effect is statistically significant but clinically negligible (0.3 mmHg is unnoticeable)", score: 3, feedback: "Spot on! With massive sample size N, even trivial noise effects become significant." },
      { text: "The null hypothesis cannot formally be rejected because the effect lies below the 2 mmHg biological noise threshold", score: 0, feedback: "Trap: H0 (Δ = 0) is formally rejected (p < 0.05), yet statistical rejection does not confer clinical importance." }
    ],
    options_es: [
      { text: "El fármaco es un avance revolucionario porque el valor p es diminuto", score: 0, feedback: "Cuidado: el valor p solo mide evidencia contra el azar, no relevancia práctica." },
      { text: "El efecto es estadísticamente significativo pero clínicamente despreciable (0,3 mmHg no es perceptible)", score: 3, feedback: "¡Muy agudo! Con tamaños de muestra masivos, hasta el ruido más trivial resulta significativo." },
      { text: "La hipótesis nula no puede rechazarse formalmente porque el efecto está por debajo del umbral biológico de 2 mmHg", score: 0, feedback: "Trampa común: H0 se rechaza con rotundidad estadística (p < 0.05), pero la magnitud carece de impacto terapéutico." }
    ],
    domain: "fundamenten"
  },
  {
    id: "q4",
    question: "In een regressiemodel voeg je 4 volstrekt willekeurige toevalsgetallen toe als extra voorspellers. Wat gebeurt er gegarandeerd met de gewone R² en de Gecorrigeerde R² (Adjusted R²)?",
    question_en: "In a regression model, you add 4 completely random noise variables as additional predictors. What is guaranteed to happen to regular R² and Adjusted R²?",
    question_es: "En un modelo de regresión añades 4 variables aleatorias de puro ruido como predictores. ¿Qué ocurrirá con certeza con el R² ordinario y el R² Ajustado?",
    options: [
      { text: "Gewone R² blijft strikt constant omdat de toevalsfactoren populatiecorrelatie nul hebben; Adjusted R² stijgt licht", score: 0, feedback: "Niet juist. OLS modelleert altijd steekproefruis, waardoor de gewone R² gegarandeerd stijgt of gelijk blijft." },
      { text: "Gewone R² stijgt of blijft gelijk; Adjusted R² daalt omdat toeval wordt bestraft", score: 3, feedback: "Haarscherp! Adjusted R² beschermt tegen schijnverbetering door ruis." },
      { text: "Zowel de gewone R² als de Adjusted R² stijgen licht, omdat elke extra variabele de residuele kwadratensom (RSS) wiskundig verlaagt", score: 0, feedback: "RSS daalt, maar de strafterm voor vrijheidsgraden in Adjusted R² weegt zwaarder dan de toevallige ruiswinst." }
    ],
    options_en: [
      { text: "Ordinary R² remains strictly constant because noise features have zero true correlation; Adjusted R² slightly increases", score: 0, feedback: "Incorrect. OLS always fits empirical sample noise, so ordinary R² cannot decrease." },
      { text: "Ordinary R² increases or stays constant; Adjusted R² decreases because noise is penalized", score: 3, feedback: "Razor sharp! Adjusted R² protects against spurious overfitting from noise." },
      { text: "Both ordinary R² and Adjusted R² slightly increase, because any extra feature mathematically reduces Residual Sum of Squares (RSS)", score: 0, feedback: "RSS drops, but the degrees-of-freedom penalty in Adjusted R² penalizes uninformative predictors more severely." }
    ],
    options_es: [
      { text: "El R² ordinario permanece estrictamente constante porque el ruido tiene correlación nula; el R² Ajustado sube ligeramente", score: 0, feedback: "Incorrecto. MCO siempre captura fluctuaciones del ruido muestral, por lo que el R² ordinario nunca disminuye." },
      { text: "El R² ordinario aumenta o permanece constante; el R² Ajustado disminuye al penalizar el ruido", score: 3, feedback: "¡Impecable! El R² Ajustado protege contra el sobreajuste espurio por variables sin valor." },
      { text: "Tanto el R² ordinario como el Ajustado aumentan, pues cualquier predictor reduce matemáticamente la suma de residuos al cuadrado (RSS)", score: 0, feedback: "La RSS disminuye, pero la penalización por pérdida de grados de libertad en el R² Ajustado supera la ganancia espuria." }
    ],
    domain: "regressie"
  },
  {
    id: "q5",
    question: "In de 'Residuals vs Fitted' plot van een regressiemodel zie je dat de punten steeds verder uitwaaieren naarmate de voorspelde waarde stijgt (trompetvorm). Wat is het gevaar?",
    question_en: "In the 'Residuals vs Fitted' plot of an OLS model, the points fan out progressively as fitted values increase (trumpet shape). What is the hazard?",
    question_es: "En el gráfico de 'Residuos vs Valores Ajustados' de un modelo MCO, los puntos se dispersan cada vez más a medida que sube el valor predicho (forma de trompeta). ¿Cuál es el peligro?",
    options: [
      { text: "De OLS-puntschattingen β̂ worden inconsistent en structureel vertekend (biased)", score: 0, feedback: "Grote valkuil! Onder heteroscedasticiteit blijven de OLS-coëfficiënten zuiver, maar hun standaardfouten zijn foutief." },
      { text: "Heteroscedasticiteit: de standaardfouten zijn vertekend, waardoor p-waarden en betrouwbaarheidsintervallen onbetrouwbaar zijn", score: 3, feedback: "Juist! Pas een log-transformatie of robuuste Huber-White standaardfouten toe." },
      { text: "Het model is automatisch niet-lineair en moet vervangen worden door een polynoom van de 3e graad", score: 0, feedback: "Niet per se; heteroscedasticiteit slaat op ongelijke residuele variantie, niet noodzakelijk op kromming in het conditionele gemiddelde." }
    ],
    options_en: [
      { text: "The OLS point estimates β̂ become inconsistent and structurally biased", score: 0, feedback: "Classic trap! Under heteroscedasticity, OLS estimates remain unbiased, but their standard errors are invalid." },
      { text: "Heteroscedasticity: standard errors are biased, invalidating p-values and confidence intervals", score: 3, feedback: "Correct! Apply a log-transformation or robust Huber-White standard errors." },
      { text: "The model is automatically non-linear and must be replaced by a 3rd-degree polynomial", score: 0, feedback: "Not necessarily: heteroscedasticity concerns non-constant error variance, not non-linearity in the conditional mean." }
    ],
    options_es: [
      { text: "Las estimaciones puntuales MCO β̂ se vuelven inconsistentes y sesgadas estructuralmente", score: 0, feedback: "¡Gran trampa! Con heterocedasticidad, los coeficientes siguen siendo insesgados, pero sus errores estándar quedan invalidados." },
      { text: "Heterocedasticidad: los errores estándar están sesgados, invalidando valores p e intervalos de confianza", score: 3, feedback: "¡Correcto! Aplica una transformación logarítmica o errores estándar robustos de Huber-White." },
      { text: "El modelo es necesariamente no lineal y debe reemplazarse por un polinomio de tercer grado", score: 0, feedback: "No necesariamente; la heterocedasticidad concierne a la varianza residual heterogénea, no a la curvatura de la media condicional." }
    ],
    domain: "regressie"
  },
  {
    id: "q6",
    question: "Twee voorspellers in je regressiemodel correleren met r = 0.98 (VIF = 25.3). Wat is het symptoom in de modeloutput?",
    question_en: "Two predictors in your regression model correlate with r = 0.98 (VIF = 25.3). What is the classic symptom in your model output?",
    question_es: "Dos predictores en tu modelo de regresión correlacionan con r = 0,98 (FIV = 25,3). ¿Cuál es el síntoma clásico en la salida del modelo?",
    options: [
      { text: "De F-toets voor het totale model is hoog-significant, maar de individuele t-toetsen van beide variabelen zijn plotseling niet-significant (p > 0.05)", score: 4, feedback: "Meesterlijk! Dit is de klassieke handtekening van ernstige multicollineariteit." },
      { text: "Het model schendt de Gauss-Markov aanname van exogeniteit (E[ε|X] ≠ 0), waardoor OLS-schatters inconsistent worden", score: 0, feedback: "Multicollineariteit is een probleem van correlatie tussen regressoren onderling, geen endogeniteit of correlatie met de foutterm." },
      { text: "De residuele variantie σ² explodeert, waardoor het verklaringspercentage R² van het totale model instort naar nul", score: 0, feedback: "Onjuist: R² blijft juist hoog; de variantie-inflatiefactor blaast slechts de individuele standaardfouten op." }
    ],
    options_en: [
      { text: "The overall model F-test is highly significant, yet individual t-tests for both predictors become insignificant (p > 0.05)", score: 4, feedback: "Masterful! This is the textbook signature of severe multicollinearity." },
      { text: "The model violates Gauss-Markov strict exogeneity (E[ε|X] ≠ 0), rendering OLS estimators inconsistent", score: 0, feedback: "Multicollinearity is sample correlation between regressors, not an endogeneity violation involving the error term." },
      { text: "Residual variance σ² explodes, causing total model R² to collapse toward zero", score: 0, feedback: "Incorrect: R² remains high and stable; variance inflation inflates only the individual standard errors." }
    ],
    options_es: [
      { text: "La prueba F global del modelo es altamente significativa, pero las pruebas t individuales de ambos predictores resultan no significativas (p > 0,05)", score: 4, feedback: "¡Magistral! Es la firma distintiva clásica de la multicolinealidad severa." },
      { text: "El modelo viola el supuesto de exogeneidad de Gauss-Markov (E[ε|X] ≠ 0), haciendo inconsistentes los estimadores", score: 0, feedback: "La colinealidad es correlación mutua entre covariables, no una correlación con el término de perturbación (endogeneidad)." },
      { text: "La varianza residual σ² explota, provocando que el R² global del modelo colapse hacia cero", score: 0, feedback: "Incorrecto: el R² se mantiene elevado; el factor de inflación de varianza solo ensancha los errores estándar individuales." }
    ],
    domain: "regressie"
  },
  {
    id: "q7",
    question: "Je onderzoekt toetsscores van 600 leerlingen verdeeld over 20 basisscholen (30 lln per school). Waarom is een standaard OLS regressie hier gevaarlijk?",
    question_en: "You analyze test scores of 600 pupils distributed across 20 primary schools (30 pupils per school). Why is standard OLS regression hazardous?",
    question_es: "Analizas las calificaciones de 600 estudiantes distribuidos en 20 colegios (30 alumnos por escuela). ¿Por qué la regresión MCO ordinaria es peligrosa aquí?",
    options: [
      { text: "Omdat OLS-puntschattingen bij geclusterde steekproeven inconsistent worden en de regressielijn verdraaien", score: 0, feedback: "De regressiecoëfficiënten zijn vaak nog consistent; het werkelijke gevaar is dat OLS de standaardfouten dramatisch onderschat." },
      { text: "Omdat leerlingen binnen dezelfde school op elkaar lijken (clustering, ICC > 0), waardoor OLS de standaardfouten dramatisch onderschat en valse significantie rapporteert (schijnprecisie)", score: 4, feedback: "Meesterlijk! Dit is de essentie van intraclass correlatie en pseudo-replicatie." },
      { text: "Omdat dummy-variabelen voor alle 20 scholen verplicht zijn om selectiebias te neutraliseren volgens Gauss-Markov", score: 0, feedback: "Vaste dummies voor 20 scholen kosten veel vrijheidsgraden en wissen school-niveau variabelen uit; een mixed model biedt superieure partial pooling." }
    ],
    options_en: [
      { text: "Because OLS point estimates become inconsistent in clustered samples and twist the regression slope", score: 0, feedback: "Point estimates are often consistent; the acute danger is that OLS drastically underestimates standard errors." },
      { text: "Pupils in the same school correlate (clustering, ICC > 0), causing OLS to drastically underestimate standard errors and produce false significance (spurious precision)", score: 4, feedback: "Masterful! This is the essence of intraclass correlation (ICC) and pseudoreplication." },
      { text: "Because indicator dummy variables for all 20 schools are mandatory to eliminate selection bias under Gauss-Markov", score: 0, feedback: "School fixed dummies consume 19 degrees of freedom and destroy school-level predictors; multilevel partial pooling is superior." }
    ],
    options_es: [
      { text: "Porque los coeficientes puntuales MCO se vuelven inconsistentes en datos agrupados y distorsionan la pendiente", score: 0, feedback: "Los coeficientes suelen ser consistentes; el peligro letal es que MCO subestima masivamente los errores estándar." },
      { text: "Los alumnos de la misma escuela se parecen (clustering, CCI > 0), provocando que MCO subestime drásticamente los errores estándar y reporte significación falsa (precisión ilusoria)", score: 4, feedback: "¡Magistral! Esta es la esencia de la correlación intraclase y la pseudorreplicación." },
      { text: "Porque incluir variables ficticias fijas para las 20 escuelas es imperativo para neutralizar sesgo de selección según Gauss-Markov", score: 0, feedback: "Las variables ficticias consumen muchos grados de libertad y eliminan factores contextuales; un modelo multinivel aporta contracción óptima." }
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
      { text: "Random Slope introduceert vaste interactie-effecten met clusterlabels, terwijl Random Intercept een zuiver additief error-component model is", score: 0, feedback: "Random Slopes schatten een continue verdeling van hellingsafwijkingen (u₁ⱼ ~ N(0, σ²_u1)), geen vaste interacties." },
      { text: "Random Intercept dwingt gelijke hellingen af; Random Slope veronderstelt dat helling en intercept strikt ongecorreleerd zijn (Cov(u₀, u₁) = 0)", score: 0, feedback: "Onjuist: Random Slope modellen schatten expliciet de correlatie parameter ρ₀₁ tussen intercept en helling." }
    ],
    options_en: [
      { text: "Random Intercept varies baseline levels across clusters; Random Slope allows the treatment effect/trajectory to vary per cluster as well", score: 5, feedback: "Exact! In Random Slope models, each cluster possesses its own custom slope angle." },
      { text: "Random Slope introduces fixed interaction parameters with cluster labels, whereas Random Intercept is an additive error model", score: 0, feedback: "Random slopes estimate a continuous stochastic distribution of slope deviations (u₁ⱼ ~ N(0, σ²_u1)), not fixed dummy interactions." },
      { text: "Random Intercept forces parallel slopes; Random Slope requires intercept and slope to be strictly uncorrelated (Cov(u₀, u₁) = 0)", score: 0, feedback: "Incorrect: Random Slope models explicitly estimate the correlation parameter ρ₀₁ between baseline intercept and slope." }
    ],
    options_es: [
      { text: "El Intercepto Aleatorio varía el punto de partida por grupo; la Pendiente Aleatoria permite además que el efecto/trayectoria varíe según cada grupo", score: 5, feedback: "¡Exacto! En modelos de pendiente aleatoria cada clúster tiene su propia inclinación." },
      { text: "La Pendiente Aleatoria introduce interacciones fijas con las etiquetas de grupo, mientras que el Intercepto Aleatorio es puramente aditivo", score: 0, feedback: "Las pendientes aleatorias modelan una distribución estocástica continua de pendientes (u₁ⱼ ~ N(0, σ²_u1)), no interacciones fijas." },
      { text: "El Intercepto Aleatorio asume pendientes paralelas; la Pendiente Aleatoria exige que intercepto y pendiente sean incorrelacionados (Cov(u₀, u₁) = 0)", score: 0, feedback: "Falso: los modelos con pendiente aleatoria estiman explícitamente el parámetro de correlación ρ₀₁ entre intercepto y pendiente." }
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
      { text: "P(Y | do(X)) is identiek aan multivariabele regressie waarin gecontroleerd wordt voor alle beschikbare covariaten", score: 0, feedback: "Grote valkuil: blind controleren voor alle variabelen kan colliders activeren (M-bias / Berkson) of mediatoren blokkeren." },
      { text: "P(Y | do(X)) conditioneert strikt op alle nakomelingen van X in de graaf om selectie-effecten uit te sluiten", score: 0, feedback: "Conditioneren op nakomelingen van de behandeling (descendants) vertekent juist het causale effect en introduceert bias." }
    ],
    options_en: [
      { text: "P(Y | X) reflects passive observational association including confounders; P(Y | do(X)) severs incoming arrows into X to isolate the pure effect of an external intervention", score: 5, feedback: "Brilliant causal insight! This formalizes the difference between passive prediction and true policy intervention." },
      { text: "P(Y | do(X)) is mathematically identical to multivariable regression controlling for every available covariate", score: 0, feedback: "Classic trap: blindly adjusting for all variables can open collider paths (Berkson's bias / M-bias) or block intermediate mechanisms." },
      { text: "P(Y | do(X)) strictly conditions on all descendant nodes of X to eliminate selection effects", score: 0, feedback: "Conditioning on descendants of treatment distorts or completely absorbs the very causal effect you aim to measure." }
    ],
    options_es: [
      { text: "P(Y | X) refleja asociación observacional pasiva incluyendo confusores; P(Y | do(X)) corta las flechas entrantes hacia X para aislar el efecto puro de una intervención", score: 5, feedback: "¡Brillante intuición causal! Formaliza la diferencia entre predecir e intervenir activamente." },
      { text: "P(Y | do(X)) es matemáticamente idéntico a una regresión multivariable ajustando por todas las covariables disponibles", score: 0, feedback: "Trampa clásica: ajustar ciegamente por todas las variables puede activar colisionadores (sesgo de Berkson / M-bias) o bloquear mediadores." },
      { text: "P(Y | do(X)) condiciona estrictamente en todos los descendientes de X en el grafo para eliminar efectos de selección", score: 0, feedback: "Condicionar en descendientes del tratamiento introduce sesgo colisionador o destruye la transmisión del efecto causal." }
    ],
    domain: "apex"
  },
  {
    id: "q10",
    question: "Waarom faalt klassieke stochastische calculus (Itô/Stratonovich) in de apex-formule dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough wanneer de ruis een Hurst exponent H < 1/2 heeft?",
    question_en: "Why does classical stochastic calculus (Itô/Stratonovich) fail in the apex formula dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough when driving noise has Hurst exponent H < 1/2?",
    question_es: "¿Por qué falla el cálculo estocástico clásico (Itô/Stratonovich) en la fórmula apex dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough cuando el ruido tiene un exponente de Hurst H < 1/2?",
    options: [
      { text: "Omdat fractional Brownian motion bij H < 1/2 stationaire increments verliest en de Malliavin-calculus ongeldig maakt", score: 0, feedback: "Increments blijven wel stationair, maar het pad is geen semimartingaal meer voor H < 1/2, waardoor de Itô-isometrie instort." },
      { text: "Omdat de kwadratische variatie divergeert en klassieke Riemann-Stieltjes integratie niet langer continu is in de p-variatie topologie, wat Terry Lyons oploste via geïtereerde integralen (Signatures)", score: 6, feedback: "Fenomenaal inzicht op het niveau van de theoretische fysica en moderne stochastiek!" },
      { text: "Omdat de Kolmogorov continuïteitsstelling bewijst dat paden met H < 1/2 niet integreerbaar zijn zonder Stratonovich correctie", score: 0, feedback: "Stratonovich calculus vereist nog steeds semimartingalen en faalt evenzeer bij H < 1/2; alleen Terry Lyons' Rough Path theorie biedt continuïteit." }
    ],
    options_en: [
      { text: "Because fractional Brownian motion at H < 1/2 loses stationary increments, invalidating Malliavin calculus", score: 0, feedback: "Increments remain stationary, but the process ceases to be a semimartingale when H < 1/2, collapsing the Itô isometry." },
      { text: "Quadratic variation diverges and integration is no longer continuous in p-variation topology, solved by Terry Lyons via iterated integrals (Rough Path Signatures)", score: 6, feedback: "Phenomenal insight at the pinnacle of theoretical physics and modern stochastic analysis!" },
      { text: "Because Kolmogorov continuity guarantees paths with H < 1/2 are unintegrable without Stratonovich correction", score: 0, feedback: "Stratonovich calculus still relies on semimartingales and fails identically for H < 1/2; Terry Lyons' Rough Path theory is strictly required." }
    ],
    options_es: [
      { text: "Porque el movimiento browniano fraccionario con H < 1/2 pierde incrementos estacionarios e invalida el cálculo de Malliavin", score: 0, feedback: "Los incrementos siguen siendo estacionarios, pero deja de ser semimartingala para H < 1/2, colapsando la isometría de Itô." },
      { text: "La variación cuadrática diverge y la integración ya no es continua en la topología de p-variación, resuelto por Terry Lyons mediante integrales iteradas (Signaturas de Trayectorias Rugosas)", score: 6, feedback: "¡Conocimiento de nivel superior en la vanguardia del análisis estocástico moderno!" },
      { text: "Porque el teorema de Kolmogorov asegura que trayectorias con H < 1/2 no se integran sin la corrección de Stratonovich", score: 0, feedback: "El cálculo de Stratonovich también depende de semimartingalas y fracasa para H < 1/2; la teoría de trayectorias rugosas de Terry Lyons es indispensable." }
    ],
    domain: "apex"
  }
];

window.LEVELS_DATA = [
  {
    "id": 1,
    "phase": 1,
    "phaseTitle": "Fase 1: De Fundamenten",
    "title": "Beschrijvende Statistiek & De 'Outlier' Valstrik",
    "subtitle": "Gemiddelde, mediaan, spreiding en waarom één getal de werkelijkheid kan vertekenen.",
    "badge": "Fundament",
    "case": {
      "title": "Casus: Het 'Gemiddelde' Salaris bij Tech-Startup NovaData",
      "context": "Je adviseert de OR van een tech-startup met 10 medewerkers. De directie meldt: 'Ons gemiddelde salaris is € 7.700 per maand!' Maar de werknemers ontvangen tussen de € 2.800 en € 3.200 per maand.",
      "data": [
        {
          "medewerker": "Anna (Junior)",
          "salaris": 2800
        },
        {
          "medewerker": "Bram (Junior)",
          "salaris": 2900
        },
        {
          "medewerker": "Claire (Junior)",
          "salaris": 3000
        },
        {
          "medewerker": "Daan (Medior)",
          "salaris": 3000
        },
        {
          "medewerker": "Eva (Medior)",
          "salaris": 3100
        },
        {
          "medewerker": "Frank (Medior)",
          "salaris": 3100
        },
        {
          "medewerker": "Gijs (Senior)",
          "salaris": 3200
        },
        {
          "medewerker": "Hanna (Senior)",
          "salaris": 3400
        },
        {
          "medewerker": "Ivo (Lead)",
          "salaris": 4500
        },
        {
          "medewerker": "Jeroen (CEO)",
          "salaris": 48000
        }
      ],
      "question": "Wat is hier statistisch aan de hand en welke centrum- en spreidingsmaat geeft wél een eerlijk beeld?"
    },
    "theory": {
      "summary": "Het rekenkundig gemiddelde is extreem gevoelig voor uitschieters (outliers). Eén megasalaris trekt het gemiddelde omhoog. De mediaan (de middelste observatie) en de IQR zijn robuust.",
      "keyConcepts": [
        {
          "term": "Gemiddelde (Mean)",
          "desc": "Som van alle waarden gedeeld door N. Gevoelig voor uitschieters."
        },
        {
          "term": "Mediaan (Median)",
          "desc": "De 50e percentiel. 50% ligt eronder, 50% erboven. Robuust."
        },
        {
          "term": "Standaardafwijking (SD)",
          "desc": "Gemiddelde afstand tot het gemiddelde. Explodeert bij outliers."
        },
        {
          "term": "Interkwartielafstand (IQR)",
          "desc": "Verschil tussen 75e en 25e percentiel ($Q_3 - Q_1$)."
        }
      ],
      "mathFormula": "\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i \\quad \\text{vs.} \\quad \\text{Mediaan} = X_{(\\frac{n+1}{2})}",
      "formulaExplain": "Als de verdeling scheef is, is $\\text{Mediaan} \\neq \\bar{x}$. Rapporteer dan altijd mediaan en IQR."
    },
    "simulation": {
      "type": "outlier_simulator",
      "name": "Outlier Impact Simulator",
      "description": "Verschuif het salaris van de CEO. Zie direct hoe het gemiddelde wegschiet terwijl de mediaan rotsvast blijft!",
      "defaultOutlier": 48000
    },
    "interpretation": {
      "title": "Model & Output Interpretatie",
      "metrics": [
        {
          "label": "Gemiddelde (Mean)",
          "value": "€ 7.700",
          "note": "Vertekend door de CEO-uitschieter!"
        },
        {
          "label": "Mediaan (Median)",
          "value": "€ 3.100",
          "note": "Representatief voor de typische medewerker"
        },
        {
          "label": "Standaardafwijking (SD)",
          "value": "€ 14.168",
          "note": "Opgeblazen spreidingsgetal"
        },
        {
          "label": "IQR (Q3 - Q1)",
          "value": "€ 400",
          "note": "De werkelijke compacte spreiding (3400 - 3000)"
        }
      ],
      "recommendation": "Adviseer de directie en OR om de mediaan en IQR te rapporteren bij inkomens- en wachttijddata."
    },
    "quiz": {
      "question": "Wanneer verkies je de mediaan boven het rekenkundig gemiddelde als centrale locatiemaat?",
      "options": [
        "Wanneer de data symmetrisch verdeeld is en minimale schattingsvariantie vereist is",
        "Wanneer er sprake is van een scheve verdeling of extreme uitschieters (robuuste 50%-locatiemaat)",
        "Wanneer de observaties discreet zijn en gemodelleerd worden met een Poisson-verdeling",
        "Nooit, omdat het rekenkundig gemiddelde de som van absolute afwijkingen altijd beter minimaliseert"
      ],
      "correctIndex": 1,
      "explanation": "Juist! De mediaan is een robuuste maatstaf (breakdown point 50%) die niet beïnvloed wordt door extreme uitschieters of asymmetrie in de staarten."
    },
    "case_en": {
      "title": "Case Study: The 'Average' Salary at Tech Startup NovaData",
      "context": "You advise the works council of a tech startup with 10 employees. Management claims: 'Our average salary is €7,700 per month!' However, employees take home between €2,800 and €3,200 per month.",
      "question": "What is statistically occurring here, and which measures of central tendency and dispersion provide an honest reflection?"
    },
    "case_es": {
      "title": "Caso de Estudio: El Salario 'Medio' en la Startup NovaData",
      "context": "Asesoras al comité de empresa de una startup de 10 empleados. La dirección afirma: '¡Nuestro salario medio es de 7.700 € al mes!' Sin embargo, los empleados perciben entre 2.800 € y 3.200 € al mes.",
      "question": "¿Qué fenómeno estadístico ocurre aquí y qué medidas de tendencia central y dispersión reflejan la realidad fielmente?"
    },
    "theory_en": {
      "summary": "The arithmetic mean is extremely sensitive to outliers. A single massive salary inflates the mean. The median (the middle observation) and the IQR are robust.",
      "formulaExplain": "When the distribution is skewed, Median ≠ x̄. In such cases, always report the median and IQR.",
      "keyConcepts": [
        {
          "term": "Mean (x̄)",
          "desc": "Sum of all values divided by N. Highly sensitive to outliers."
        },
        {
          "term": "Median",
          "desc": "The 50th percentile: 50% falls below, 50% above. Robust to extreme values."
        },
        {
          "term": "Standard Deviation (SD)",
          "desc": "Average distance to the mean. Explodes in the presence of outliers."
        },
        {
          "term": "Interquartile Range (IQR)",
          "desc": "Difference between 75th and 25th percentiles (Q3 - Q1)."
        }
      ]
    },
    "theory_es": {
      "summary": "La media aritmética es sumamente sensible a valores atípicos. Un único megasalario infla el promedio. La mediana (el valor central) y el rango intercuartílico (IQR) son robustos.",
      "formulaExplain": "Si la distribución es asimétrica, Mediana ≠ x̄. En esos casos, reporta siempre la mediana y el IQR.",
      "keyConcepts": [
        {
          "term": "Media (x̄)",
          "desc": "Suma de todos los valores dividida entre N. Extremadamente sensible a atípicos."
        },
        {
          "term": "Mediana",
          "desc": "El percentil 50: 50% por debajo, 50% por encima. Robusta ante extremos."
        },
        {
          "term": "Desviación Estándar (DE)",
          "desc": "Distancia promedio a la media. Se dispara ante valores atípicos."
        },
        {
          "term": "Rango Intercuartílico (IQR)",
          "desc": "Diferencia entre el percentil 75 y el percentil 25 (Q3 - Q1)."
        }
      ]
    },
    "simulation_en": {
      "name": "Outlier Impact Simulator",
      "description": "Adjust the CEO salary slider. Watch how the mean skyrockets while the median remains rock-solid!"
    },
    "simulation_es": {
      "name": "Simulador del Impacto de Atípicos",
      "description": "Desplaza el salario del CEO. Observa cómo la media se dispara mientras la mediana se mantiene inalterable."
    },
    "interpretation_en": {
      "title": "Model & Output Interpretation",
      "recommendation": "Advise management and the board to report median and IQR for income and wait-time distributions.",
      "metrics": [
        {
          "label": "Arithmetic Mean",
          "note": "Distorted by the single CEO outlier!"
        },
        {
          "label": "Median",
          "note": "Representative of the typical employee"
        },
        {
          "label": "Standard Deviation (SD)",
          "note": "Severely inflated dispersion metric"
        },
        {
          "label": "IQR (Q3 - Q1)",
          "note": "True compact dispersion of the middle 50%"
        }
      ]
    },
    "interpretation_es": {
      "title": "Interpretación del Modelo y Salida",
      "recommendation": "Aconseja a la dirección reportar la mediana y el IQR en distribuciones de salarios y tiempos de espera.",
      "metrics": [
        {
          "label": "Media Aritmética",
          "note": "¡Completamente distorsionada por el atípico del CEO!"
        },
        {
          "label": "Mediana",
          "note": "Representativa del empleado típico"
        },
        {
          "label": "Desviación Estándar (DE)",
          "note": "Métrica de dispersión inflada"
        },
        {
          "label": "IQR (Q3 - Q1)",
          "note": "Dispersión compacta real del 50% central"
        }
      ]
    },
    "quiz_en": {
      "question": "When do you prefer the median over the arithmetic mean as the measure of central tendency?",
      "options": [
        "When data is symmetrically distributed and minimal estimation variance is strictly required",
        "When facing skewed distributions or extreme outliers (robust 50% breakdown point)",
        "When observations are discrete and modeled via a Poisson process",
        "Never, because the arithmetic mean always minimizes the sum of absolute deviations more effectively"
      ],
      "explanation": "Correct! The median is a robust estimator with a 50% breakdown point, unaffected by extreme tail values or skewness."
    },
    "quiz_es": {
      "question": "¿Cuándo se prefiere la mediana frente a la media aritmética como medida de localización central?",
      "options": [
        "Cuando los datos se distribuyen simétricamente y se requiere mínima varianza de estimación",
        "Cuando hay distribuciones asimétricas o valores atípicos extremos (medida robusta con punto de ruptura del 50%)",
        "Cuando las observaciones son discretas y se modelan mediante una distribución de Poisson",
        "Nunca, porque la media aritmética siempre minimiza la suma de desviaciones absolutas con mayor precisión"
      ],
      "explanation": "¡Correcto! La mediana es un estimador robusto (punto de ruptura del 50%) inmune a colas pesadas o asimetrías severas."
    }
  },
  {
    "id": 2,
    "phase": 1,
    "phaseTitle": "Fase 1: De Fundamenten",
    "title": "Kansverdelingen & De Normale Verdeling",
    "subtitle": "Z-scores, de 68-95-99.7 vuistregel en afwijkingen van de klokvorm.",
    "badge": "Fundament",
    "case": {
      "title": "Casus: Kwaliteitscontrole van Digitale Bloeddrukmeters",
      "context": "Een medisch fabrikant produceert bloeddrukmeters. De drukmeting volgt een normale verdeling met $\\mu = 120$ mmHg en $\\sigma = 2$ mmHg. Een meter met een afwijking van meer dan 4 mmHg wordt afgekeurd.",
      "data": [
        {
          "meterId": "M-101",
          "meting": 119.8,
          "status": "Goedgekeurd"
        },
        {
          "meterId": "M-102",
          "meting": 121.2,
          "status": "Goedgekeurd"
        },
        {
          "meterId": "M-103",
          "meting": 124.5,
          "status": "AFGEKEURD (> +2 SD)"
        },
        {
          "meterId": "M-104",
          "meting": 118.9,
          "status": "Goedgekeurd"
        },
        {
          "meterId": "M-105",
          "meting": 115.8,
          "status": "AFGEKEURD (< -2 SD)"
        }
      ],
      "question": "Hoeveel procent van de meters zal statistisch gezien buiten de tolerantiegrenzen vallen?"
    },
    "theory": {
      "summary": "De normale verdeling (Gauss-kromme) is symmetrisch rond het gemiddelde $\\mu$. Elke meting kan omgezet worden in een Z-score: hoeveel standaardafwijkingen ligt deze waarde van het gemiddelde?",
      "keyConcepts": [
        {
          "term": "Z-score",
          "desc": "Z = (X - μ) / σ. Duidt relatieve afstand tot het gemiddelde aan."
        },
        {
          "term": "68% Regel",
          "desc": "68.27% van alle waarden ligt binnen ± 1 SD [μ - σ, μ + σ]."
        },
        {
          "term": "95% Regel",
          "desc": "95.45% ligt binnen ± 2 SD (exact 95% bij ± 1.96 SD)."
        },
        {
          "term": "99.7% Regel",
          "desc": "99.73% van alle waarden ligt binnen ± 3 SD."
        }
      ],
      "mathFormula": "Z = \\frac{X - \\mu}{\\sigma} \\quad \\implies \\quad P(X > 124) = P(Z > 2.0) \\approx 0.0228",
      "formulaExplain": "Met een Z-score van +2.0 ligt de meting 2 standaardafwijkingen boven het gemiddelde. Buiten ±2 SD valt ongeveer 4.55% van alle apparaten."
    },
    "simulation": {
      "type": "normal_distribution_explorer",
      "name": "Gauss-curve & Z-score Calculator",
      "description": "Verander het gemiddelde en de spreiding of kies een afkeurgrens om direct de kans in de staarten te zien.",
      "defaultMean": 120,
      "defaultSD": 2
    },
    "interpretation": {
      "title": "Model & Kwaliteitsconclusie",
      "metrics": [
        {
          "label": "Binnen tolerantie [116, 124]",
          "value": "95.45%",
          "note": "Binnen ± 2 standaardafwijkingen"
        },
        {
          "label": "Buiten tolerantie (uitval)",
          "value": "4.55%",
          "note": "2.27% te laag + 2.27% te hoog"
        },
        {
          "label": "Z-score van afkeurgrens",
          "value": "Z = ± 2.00",
          "note": "Kritieke grens voor kwaliteitsafdeling"
        }
      ],
      "recommendation": "Bij een dagproductie van 1.000 meters verwacht de kwaliteitsmanager ongeveer 45 afkeuringen puur door natuurlijke spreiding."
    },
    "quiz": {
      "question": "Wat betekent een Z-score van -1.96 in een normale kansverdeling?",
      "options": [
        "De observatie ligt 1.96 meeteenheden onder de mediaan in de oorspronkelijke schaal",
        "De waarde ligt 1.96 standaardafwijkingen onder het populatiegemiddelde (exact 2.5% van de populatie scoort lager)",
        "De cumulatieve overschrijdingskans in de rechterstaart P(Z > -1.96) is exact gelijk aan 2.5%",
        "Het betrouwbaarheidsinterval van de steekproef heeft een breedte van 1.96 standaardfouten"
      ],
      "correctIndex": 1,
      "explanation": "Uitstekend! De Z-score drukt exact uit hoeveel standaardafwijkingen een observatie boven (+) of onder (-) het gemiddelde ligt. Bij Z = -1.96 ligt 2.5% in de linkerstaart."
    },
    "case_en": {
      "title": "Case Study: Quality Control of Digital Blood Pressure Monitors",
      "context": "A medical device manufacturer produces blood pressure monitors. Pressure readings follow a normal distribution with μ = 120 mmHg and σ = 2 mmHg. A monitor deviating by more than 4 mmHg is rejected.",
      "question": "Statistically, what percentage of monitors will fall outside acceptable tolerance boundaries?"
    },
    "case_es": {
      "title": "Caso de Estudio: Control de Calidad de Tensiómetros Digitales",
      "context": "Un fabricante médico produce tensiómetros. Las lecturas de presión siguen una distribución normal con μ = 120 mmHg y σ = 2 mmHg. Se rechaza cualquier monitor con desviación superior a 4 mmHg.",
      "question": "¿Qué porcentaje de tensiómetros quedará estadísticamente fuera de los límites de tolerancia aceptables?"
    },
    "theory_en": {
      "summary": "The normal distribution (Gaussian curve) is symmetric about the mean μ. Every measurement can be transformed into a Z-score: how many standard deviations the observation lies from the mean.",
      "formulaExplain": "A Z-score of +2.0 means the measurement sits exactly 2 standard deviations above the population mean.",
      "keyConcepts": [
        {
          "term": "Z-score",
          "desc": "Z = (X - μ) / σ. Quantifies relative distance from the mean."
        },
        {
          "term": "68% Rule",
          "desc": "68.27% of all observations lie within ± 1 SD [μ - σ, μ + σ]."
        },
        {
          "term": "95% Rule",
          "desc": "95.45% lie within ± 2 SD (exactly 95% at ± 1.96 SD)."
        },
        {
          "term": "99.7% Rule",
          "desc": "99.73% lie within ± 3 SD. Values beyond are rare statistical anomalies."
        }
      ]
    },
    "theory_es": {
      "summary": "La distribución normal (campana de Gauss) es simétrica respecto a la media μ. Cada medición puede convertirse en una puntuación Z: cuántas desviaciones estándar se aleja de la media.",
      "formulaExplain": "Una puntuación Z de +2,0 indica que el valor se encuentra exactamente 2 desviaciones estándar sobre la media poblacional.",
      "keyConcepts": [
        {
          "term": "Puntuación Z",
          "desc": "Z = (X - μ) / σ. Cuantifica la distancia relativa a la media."
        },
        {
          "term": "Regla del 68%",
          "desc": "El 68,27% de las observaciones cae dentro de ± 1 DE [μ - σ, μ + σ]."
        },
        {
          "term": "Regla del 95%",
          "desc": "El 95,45% cae dentro de ± 2 DE (exactamente el 95% en ± 1,96 DE)."
        },
        {
          "term": "Regla del 99.7%",
          "desc": "El 99,73% cae dentro de ± 3 DE. Valores más allá son anomalías excepcionales."
        }
      ]
    },
    "simulation_en": {
      "name": "Gaussian Curve & Z-score Calculator",
      "description": "Adjust σ and the rejection threshold. Observe in real time which proportion falls into the critical rejection tails."
    },
    "simulation_es": {
      "name": "Campana de Gauss y Calculadora de Puntuación Z",
      "description": "Ajusta σ y el umbral de rechazo. Observa en tiempo real qué porcentaje cae en las colas críticas de descarte."
    },
    "interpretation_en": {
      "title": "Model & Quality Decision",
      "recommendation": "Calibrate assembly sensors if rejection rates exceed 4.55% (the theoretical 2-tailed threshold).",
      "metrics": [
        {
          "label": "Lower Cutoff (-2 SD)",
          "note": "116.0 mmHg (P(Z < -2) = 2.28%)"
        },
        {
          "label": "Upper Cutoff (+2 SD)",
          "note": "124.0 mmHg (P(Z > +2) = 2.28%)"
        },
        {
          "label": "Total Rejection Rate",
          "note": "4.55% of the total batch production"
        },
        {
          "label": "Process Quality (Cp)",
          "note": "Cp = 1.00 (Standard industrial baseline)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Interpretación del Modelo y Decisión de Calidad",
      "recommendation": "Recalibra los sensores de la línea si la tasa de rechazo supera el 4,55% (umbral teórico bilateral).",
      "metrics": [
        {
          "label": "Límite Inferior (-2 DE)",
          "note": "116,0 mmHg (P(Z < -2) = 2,28%)"
        },
        {
          "label": "Límite Superior (+2 DE)",
          "note": "124,0 mmHg (P(Z > +2) = 2,28%)"
        },
        {
          "label": "Tasa Total de Rechazo",
          "note": "4,55% de toda la producción del lote"
        },
        {
          "label": "Calidad del Proceso (Cp)",
          "note": "Cp = 1,00 (Línea de base industrial)"
        }
      ]
    },
    "quiz_en": {
      "question": "What does a Z-score of -1.96 signify in a normal probability distribution?",
      "options": [
        "The observation is 1.96 units below the median in original scale units",
        "The value lies 1.96 standard deviations below the population mean (exactly 2.5% of the population scores lower)",
        "The cumulative upper-tail probability P(Z > -1.96) is exactly equal to 2.5%",
        "The confidence interval of the sample has a width of 1.96 standard errors"
      ],
      "explanation": "Superb! The Z-score expresses exactly how many standard deviations an observation falls above (+) or below (-) the mean. At Z = -1.96, exactly 2.5% sits in the lower tail."
    },
    "quiz_es": {
      "question": "¿Qué representa una puntuación Z de -1,96 en una distribución de probabilidad normal?",
      "options": [
        "La observación está a 1,96 unidades de medida bajo la mediana en su escala original",
        "El valor se sitúa a 1,96 desviaciones estándar bajo la media poblacional (exactamente el 2,5% puntúa por debajo)",
        "La probabilidad acumulada en la cola derecha P(Z > -1,96) es exactamente igual al 2,5%",
        "El intervalo de confianza de la muestra tiene un ancho total de 1,96 errores estándar"
      ],
      "explanation": "¡Excelente! La puntuación Z expresa cuántas desviaciones estándar dista una observación de la media. En Z = -1,96, exactamente el 2,5% de la masa de probabilidad reside en la cola inferior."
    }
  },
  {
    "id": 3,
    "phase": 1,
    "phaseTitle": "Fase 1: De Fundamenten",
    "title": "De Centrale Limietstelling (CLT)",
    "subtitle": "Waarom gemiddelden van steekproeven altijd normaal verdeeld zijn, ongeacht de oorspronkelijke vorm.",
    "badge": "Fundament",
    "case": {
      "title": "Casus: Wachttijden bij de Helpdesk (Zwaar Scheve Data)",
      "context": "Klantenservice TelecomPlus heeft wachttijden die zwaar exponentieel verdeeld zijn. De manager vraagt: 'Kunnen we eigenlijk wel statistiek bedrijven als de ruwe data zo scheef is?'",
      "data": [
        {
          "klant": 1,
          "wachttijdMin": 0.5
        },
        {
          "klant": 2,
          "wachttijdMin": 1.2
        },
        {
          "klant": 3,
          "wachttijdMin": 0.8
        },
        {
          "klant": 4,
          "wachttijdMin": 34
        },
        {
          "klant": 5,
          "wachttijdMin": 0.4
        },
        {
          "klant": 6,
          "wachttijdMin": 28.5
        }
      ],
      "question": "Waarom redt de Centrale Limietstelling ons hier wanneer we het GEMIDDELDE over steekproeven analyseren?"
    },
    "theory": {
      "summary": "De Centrale Limietstelling stelt dat voor elke populatie met een eindige variantie (σ² < ∞), de verdeling van steekproefgemiddelden (X̄) convergeert naar een normale verdeling als N toeneemt. Bij matig scheve verdelingen volstaat vaak N ≥ 30; bij zware scheefheid of uitschieters dicteert het Berry-Esseen theorema dat een grotere steekproef (N ≥ 100) nodig is.",
      "keyConcepts": [
        {
          "term": "Voorwaarde: Eindige Variantie",
          "desc": "CLT vereist σ² < ∞; de stelling faalt bij verdelingen met oneindige variantie zoals de Cauchy-verdeling."
        },
        {
          "term": "Steekproevenverdeling",
          "desc": "De verdeling van GEMIDDELDEN bij herhaald trekken van steekproeven."
        },
        {
          "term": "Standaardfout (SE)",
          "desc": "De spreiding van de gemiddelden: SE = σ / √N. Neemt af met de wortel van N!"
        }
      ],
      "mathFormula": "\\bar{X} \\xrightarrow{d} \\mathcal{N}\\left(\\mu, \\; \\frac{\\sigma^2}{N}\\right) \\quad \\text{als } N \\to \\infty \\quad (\\text{mits } \\sigma^2 < \\infty)",
      "formulaExplain": "Als N 4 keer zo groot wordt, halveert de standaardfout (SE). Bij zware scheefheid eist het Berry-Esseen theorema N > 50 voor Gaussische staarten."
    },
    "simulation": {
      "type": "clt_simulator",
      "name": "CLT Generator: Van Scheef naar Klokvormig",
      "description": "Trek 1.000 steekproeven uit een zwaar scheve verdeling. Kijk hoe de verdeling van gemiddelden klokvormig wordt bij grotere N!",
      "defaultN": 35
    },
    "interpretation": {
      "title": "Model & Praktijk Conclusie",
      "metrics": [
        {
          "label": "Ruwe wachttijden verdeling",
          "value": "Zwaar asymmetrisch (Skewed)",
          "note": "Individuele bellers"
        },
        {
          "label": "Verdeling gemiddelde bij N=35",
          "value": "Normaal verdeeld (Gauss)",
          "note": "Dankzij CLT!"
        },
        {
          "label": "Standaardfout (SE = σ/√35)",
          "value": "1.05 minuten",
          "note": "Spreiding van de gemiddelde schatting"
        }
      ],
      "recommendation": "Je kunt betrouwbaarheidsintervallen gebruiken voor het gemiddelde; bij sterke scheefheid is N ≥ 50 tot 100 aanbevolen, of een log-transformatie/bootstrap."
    },
    "quiz": {
      "question": "Wat gebeurt er met de standaardfout (SE = σ / √N) van het gemiddelde als je de steekproefomvang N verviervoudigt?",
      "options": [
        "De SE wordt 4x zo klein, omdat de precisie recht evenredig toeneemt met steekproefomvang N",
        "De SE halveert (wordt 2x zo klein, want √4 = 2)",
        "De SE wordt 16x zo klein, omdat de variantiereductie kwadratisch schaalt met N²",
        "De populatiestandaardafwijking σ halveert eveneens evenredig met de steekproefvergroting"
      ],
      "correctIndex": 1,
      "explanation": "Exact! Vanwege de wortel in de noemer (√N) levert een 4-voudige steekproefomvang een halvering van de schattingsfout op."
    },
    "case_en": {
      "title": "Case Study: Helpdesk Wait Times (Heavily Skewed Data)",
      "context": "A software helpdesk records wait times. 80% of calls are answered within 1 minute, but 5% wait 45 minutes (extreme positive exponential skew). The support manager asks: 'Can we apply standard normal statistics to our daily average wait time?'",
      "question": "Why does the Central Limit Theorem allow us to use normal inference on sample means despite deeply non-normal raw times?"
    },
    "case_es": {
      "title": "Caso de Estudio: Tiempos de Espera en Soporte Técnico (Datos Muy Asimétricos)",
      "context": "El soporte técnico de una empresa tecnológica registra tiempos de espera. El 80% de llamadas se atiende en 1 minuto, pero el 5% espera 45 minutos (asimetría exponencial positiva extrema). El jefe de soporte pregunta: '¿Podemos aplicar estadística normal al promedio diario?'",
      "question": "¿Por qué el Teorema del Límite Central nos permite utilizar inferencia normal en las medias muestrales a pesar de datos originales marcadamente asimétricos?"
    },
    "theory_en": {
      "summary": "The Central Limit Theorem (CLT) guarantees that for any population with finite mean μ and variance σ², the distribution of the sample mean x̄ converges to a normal distribution as N grows.",
      "formulaExplain": "As sample size N increases, the spread of the sample mean contracts at rate 1/√N, forming a Gaussian bell curve regardless of the underlying population shape.",
      "keyConcepts": [
        {
          "term": "Sampling Distribution",
          "desc": "The probability distribution of a sample statistic across repeated samples."
        },
        {
          "term": "Standard Error (SE)",
          "desc": "SE = σ / √N. The standard deviation of the sample mean."
        },
        {
          "term": "Law of Large Numbers",
          "desc": "As N increases, sample mean x̄ converges almost surely to population mean μ."
        },
        {
          "term": "Sample Size Rule (N ≥ 30)",
          "desc": "For moderate skewness, N ≥ 30 yields excellent normal approximations."
        }
      ]
    },
    "theory_es": {
      "summary": "El Teorema del Límite Central (TLC) garantiza que, para cualquier población con media finita μ y varianza σ², la distribución de la media muestral x̄ converge a una normal conforme N crece.",
      "formulaExplain": "A medida que el tamaño muestral N aumenta, la dispersión de la media muestral se contrae a razón de 1/√N, formando una campana de Gauss sin importar la forma de la población original.",
      "keyConcepts": [
        {
          "term": "Distribución Muestral",
          "desc": "La distribución de probabilidad de un estimador a través de infinitas muestras repetidas."
        },
        {
          "term": "Error Estándar (EE)",
          "desc": "EE = σ / √N. La desviación estándar de la media muestral."
        },
        {
          "term": "Ley de Grandes Números",
          "desc": "Conforme N aumenta, la media muestral x̄ converge de forma casi segura a la media poblacional μ."
        },
        {
          "term": "Regla Muestral (N ≥ 30)",
          "desc": "Para asimetrías moderadas, N ≥ 30 proporciona aproximaciones normales excepcionales."
        }
      ]
    },
    "simulation_en": {
      "name": "CLT Generator: From Skewed to Bell-Shaped",
      "description": "Draw 1,000 samples of size N from an exponential or uniform distribution. Watch how the histogram of sample means transforms into a pristine Gaussian bell!"
    },
    "simulation_es": {
      "name": "Generador del TLC: De Asimétrico a Campana de Gauss",
      "description": "Extrae 1.000 muestras de tamaño N a partir de una distribución exponencial o uniforme. ¡Comprueba cómo el histograma de medias muestrales transmuta en una perfecta campana de Gauss!"
    },
    "interpretation_en": {
      "title": "Model & Practical Decision",
      "recommendation": "With N = 50 calls daily, the daily mean wait time is safely normal, permitting Gaussian hypothesis tests.",
      "metrics": [
        {
          "label": "Population Skewness (Raw)",
          "note": "+2.85 (Extreme positive tail)"
        },
        {
          "label": "Sample Mean Skewness (N=50)",
          "note": "+0.40 (Virtually symmetric)"
        },
        {
          "label": "Theoretical SE (σ/√50)",
          "note": "0.85 minutes"
        },
        {
          "label": "Empirical Sampling SD",
          "note": "0.84 minutes (Flawless match)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Interpretación del Modelo y Decisión Práctica",
      "recommendation": "Con N = 50 llamadas diarias, el promedio diario es fiable y normalmente distribuido, permitiendo contrastes de hipótesis gaussianos.",
      "metrics": [
        {
          "label": "Asimetría Poblacional (Cruda)",
          "note": "+2,85 (Cola positiva extrema)"
        },
        {
          "label": "Asimetría de la Media (N=50)",
          "note": "+0,40 (Prácticamente simétrica)"
        },
        {
          "label": "EE Teórico (σ/√50)",
          "note": "0,85 minutos"
        },
        {
          "label": "DE Muestral Empírica",
          "note": "0,84 minutos (Concordancia perfecta)"
        }
      ]
    },
    "quiz_en": {
      "question": "What happens to the standard error (SE = σ / √N) of the mean if you quadruple sample size N (e.g. from 25 to 100)?",
      "options": [
        "The SE becomes 4x smaller, as precision scales linearly with sample size N",
        "The SE halves (becomes 2x smaller, because √4 = 2)",
        "The SE becomes 16x smaller, since variance reduction scales with N²",
        "The population standard deviation σ also halves proportionally"
      ],
      "explanation": "Exact! Due to the square root in the denominator (√N), quadrupling sample size halves estimation error."
    },
    "quiz_es": {
      "question": "¿Qué ocurre con el error estándar (EE = σ / √N) de la media si cuadruplicas el tamaño de muestra N (ej. de 25 a 100)?",
      "options": [
        "El EE se reduce 4 veces, ya que la precisión escala linealmente con N",
        "El EE se reduce a la mitad (2 veces menor, porque √4 = 2)",
        "El EE se reduce 16 veces, ya que la reducción de varianza escala cuadráticamente con N²",
        "La desviación estándar poblacional σ también se reduce a la mitad proporcionalmente"
      ],
      "explanation": "¡Exacto! Debido a la raíz cuadrada en el denominador (√N), multiplicar por 4 el tamaño muestral reduce el error de estimación exactamente a la mitad."
    }
  },
  {
    "id": 4,
    "phase": 1,
    "phaseTitle": "Fase 1: De Fundamenten",
    "title": "Betrouwbaarheidsintervallen (CI) & Foutmarge",
    "subtitle": "Hoe zeker weten we iets? De ware betekenis van het 95% Betrouwbaarheidsinterval.",
    "badge": "Fundament",
    "case": {
      "title": "Casus: De Klanttevredenheid Peiling (CSAT)",
      "context": "Een platform peilt tevredenheid op schaal 0-100. Uit een steekproef van $N = 100$ komt een gemiddelde van $\\bar{x} = 74.0$ met $\\text{SD} = 10.0$. Het 95% interval is $[72.04, 75.96]$. Klopt de claim dat er 95% kans is dat de echte populatiewaarde hierin ligt?",
      "data": [
        {
          "metric": "Steekproefgrootte (N)",
          "waarde": "100"
        },
        {
          "metric": "Gemeten gemiddelde",
          "waarde": "74.0 punten"
        },
        {
          "metric": "Standaardfout (SE)",
          "waarde": "1.00 punten"
        },
        {
          "metric": "95% Interval",
          "waarde": "[72.04, 75.96]"
        }
      ],
      "question": "Wat is het fundamentele verschil tussen een puntschatting en een interval, en wat betekent die 95% echt?"
    },
    "theory": {
      "summary": "Het betrouwbaarheidsinterval geeft een bandbreedte die rekening houdt met steekproefvariatie. De 95% slaat op de *methode*: als we 100 steekproeven trekken, bevatten 95 van de 100 geconstrueerde intervallen de werkelijke vaste populatieparameter $\\mu$.",
      "keyConcepts": [
        {
          "term": "Klassieke Denkvalstrik",
          "desc": "FOUT: 'Er is 95% kans dat het echte gemiddelde in dit specifieke interval ligt.'"
        },
        {
          "term": "Juiste Definitie",
          "desc": "GOED: '95% van de op deze wijze geconstrueerde intervallen omvat de werkelijke populatiewaarde.'"
        },
        {
          "term": "Foutmarge",
          "desc": "1.96 × SE (voor 95% niveau). Bepaalt de breedte van het interval."
        }
      ],
      "mathFormula": "95\\% \\text{ CI} = \\bar{x} \\pm 1.96 \\cdot \\frac{\\sigma}{\\sqrt{N}} = \\left[\\bar{x} - 1.96 \\cdot \\text{SE}, \\; \\bar{x} + 1.96 \\cdot \\text{SE}\\right]",
      "formulaExplain": "Let op de overlap-valkuil: niet-overlappende intervallen garanderen p < 0.01 (zeer conservatief). Twee onafhankelijke 95%-intervallen mogen echter tot ~29% overlappen en tóch statistisch significant verschillen (p < 0.05), omdat SE_verschil = √(SE₁² + SE₂²) < SE₁ + SE₂."
    },
    "simulation": {
      "type": "ci_simulator",
      "name": "100 Steekproeven Visualizer: Vang de Waarheid",
      "description": "Genereer 50 steekproefintervallen tegen de echte populatie $\\mu = 75$. Tel de groene treffers en rode missers!",
      "trueMean": 75
    },
    "interpretation": {
      "title": "Praktische Besluitvorming",
      "metrics": [
        {
          "label": "Puntschatting",
          "value": "74.0",
          "note": "Eén meting uit één steekproef"
        },
        {
          "label": "95% Betrouwbaarheidsinterval",
          "value": "[72.04, 75.96]",
          "note": "Onzekerheidsmarge"
        },
        {
          "label": "Drempel voor directiebonus",
          "value": "> 75.0",
          "note": "75 valt binnen het interval (onzeker!)"
        }
      ],
      "recommendation": "Omdat 75 binnen het interval ligt, kan de directie niet claimen dat het doel van 75 punten statistisch bewezen is."
    },
    "quiz": {
      "question": "Wat is de juiste frequentistische interpretatie van een berekend 95% betrouwbaarheidsinterval van [10, 20]?",
      "options": [
        "Er is a-posteriori 95% kans dat de werkelijke populatieparameter μ binnen dit specifieke interval [10, 20] ligt",
        "Bij herhaaldelijke steekproeven onder identieke condities zal 95% van de op identieke wijze geconstrueerde intervallen de werkelijke populatieparameter bevatten",
        "95% van alle individuele observaties in de doelpopulatie valt tussen de waarden 10 en 20",
        "Als we morgen een nieuwe steekproef trekken, is de kans 95% dat het nieuwe steekproefgemiddelde binnen [10, 20] valt"
      ],
      "correctIndex": 1,
      "explanation": "Haarscherp! In de frequentistische statistiek is de parameter een vast getal (geen toevalsvariabele). De 95% slaat op de dekkingsgraad van de meetprocedure bij oneindige herhaling."
    },
    "case_en": {
      "title": "Case Study: Customer Satisfaction Survey (CSAT)",
      "context": "A retail company surveys N = 400 customers. The average satisfaction score is 7.4 on a 10-point scale with s = 1.2. The CEO asks: 'Can we conclude with 95% certainty that the true score of all customers lies between 7.28 and 7.52?'",
      "question": "What does a 95% Confidence Interval truly communicate in rigorous scientific statistics?"
    },
    "case_es": {
      "title": "Caso de Estudio: Encuesta de Satisfacción del Cliente (CSAT)",
      "context": "Una empresa encuesta a N = 400 clientes. La satisfacción media es 7,4 sobre 10 con s = 1,2. El director pregunta: '¿Podemos asegurar con 95% de certeza que la verdadera satisfacción de todos los clientes está entre 7,28 y 7,52?'",
      "question": "¿Qué comunica formalmente un Intervalo de Confianza del 95% en la estadística científica rigurosa?"
    },
    "theory_en": {
      "summary": "A confidence interval provides a plausible range for an unknown fixed population parameter. In frequentist statistics, the true parameter is fixed; the calculated interval bounds vary randomly from sample to sample.",
      "formulaExplain": "If we repeat the experiment 100 times, exactly 95 of the 100 constructed intervals will enclose the true population mean μ.",
      "keyConcepts": [
        {
          "term": "Confidence Level (1 - α)",
          "desc": "The long-run coverage proportion across repeated hypothetical trials."
        },
        {
          "term": "Margin of Error",
          "desc": "Z* · (s / √N). Determines interval width."
        },
        {
          "term": "Frequentist Trap",
          "desc": "Do not say: 'There is a 95% probability that μ lies in this interval'. Once computed, μ is either inside (1) or outside (0)."
        },
        {
          "term": "Precision vs Confidence",
          "desc": "Higher confidence requires a wider interval for fixed sample size N."
        }
      ]
    },
    "theory_es": {
      "summary": "Un intervalo de confianza ofrece un rango plausible para un parámetro poblacional fijo desconocido. En la estadística frecuentista, el parámetro poblacional es fijo; los límites del intervalo varían aleatoriamente en cada muestra.",
      "formulaExplain": "Si repitiéramos el experimento 100 veces, exactamente 95 de los 100 intervalos construidos contendrán la verdadera media poblacional μ.",
      "keyConcepts": [
        {
          "term": "Nivel de Confianza (1 - α)",
          "desc": "La proporción de cobertura a largo plazo en infinitas muestras idénticas repetidas."
        },
        {
          "term": "Margen de Error",
          "desc": "Z* · (s / √N). Determina la amplitud del intervalo."
        },
        {
          "term": "Trampa Frecuentista",
          "desc": "Evita afirmar: 'Hay un 95% de probabilidad de que μ esté en este intervalo concreto'. Una vez calculado, μ está dentro (1) o fuera (0)."
        },
        {
          "term": "Precisión vs Confianza",
          "desc": "A mayor confianza requerida, mayor amplitud del intervalo para un tamaño N dado."
        }
      ]
    },
    "simulation_en": {
      "name": "100 Samples Visualizer: Catch the Truth",
      "description": "Generate 100 simultaneous 95% confidence intervals from the same ground-truth population. Count how many intervals capture μ and see the ~5 misses turn red!"
    },
    "simulation_es": {
      "name": "Visualizador de 100 Muestras: Atrapa el Parámetro Real",
      "description": "Genera simultáneamente 100 intervalos de confianza al 95% de una misma población. Cuenta cuántos contienen a μ y observa cómo aproximadamente 5 fallos se tiñen de rojo."
    },
    "interpretation_en": {
      "title": "Practical Decision Making",
      "recommendation": "Report the 95% CI [7.28; 7.52] along with the point estimate. Since 7.0 lies well below the lower bound, satisfaction comfortably exceeds target.",
      "metrics": [
        {
          "label": "Point Estimate (x̄)",
          "note": "7.40 / 10"
        },
        {
          "label": "Margin of Error (ME)",
          "note": "± 0.118 (Z* = 1.96)"
        },
        {
          "label": "95% Confidence Interval",
          "note": "[7.28, 7.52]"
        },
        {
          "label": "Benchmark Target (7.00)",
          "note": "Outside interval (Statistically superior)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Toma de Decisiones Práctica",
      "recommendation": "Informa el IC al 95% [7,28; 7,52] junto a la estimación puntual. Al quedar el objetivo 7,00 por debajo del límite inferior, la satisfacción supera la meta de forma concluyente.",
      "metrics": [
        {
          "label": "Estimación Puntual (x̄)",
          "note": "7,40 / 10"
        },
        {
          "label": "Margen de Error (ME)",
          "note": "± 0,118 (Z* = 1,96)"
        },
        {
          "label": "Intervalo de Confianza al 95%",
          "note": "[7,28; 7,52]"
        },
        {
          "label": "Meta de Referencia (7,00)",
          "note": "Fuera del intervalo (Estadísticamente superior)"
        }
      ]
    },
    "quiz_en": {
      "question": "What is the correct frequentist interpretation of a calculated 95% Confidence Interval [7.28, 7.52]?",
      "options": [
        "There is a 95% probability that the true population mean μ lies between 7.28 and 7.52",
        "If this sampling procedure is repeated infinite times, 95% of the calculated intervals will contain the true parameter μ",
        "95% of all surveyed customers scored between 7.28 and 7.52 on the survey",
        "The probability of committing a Type I error is exactly 5% in this specific sample"
      ],
      "explanation": "Spot-on! In frequentist philosophy, the true parameter μ is an immutable constant. It is the interval boundaries that vary randomly across hypothetical replications."
    },
    "quiz_es": {
      "question": "¿Cuál es la interpretación frecuentista rigurosa de un Intervalo de Confianza al 95% calculado como [7,28; 7,52]?",
      "options": [
        "Hay una probabilidad del 95% de que la verdadera media poblacional μ esté entre 7,28 y 7,52",
        "Si este procedimiento de muestreo se repitiese infinitas veces, el 95% de los intervalos calculados contendría el verdadero parámetro μ",
        "El 95% de los clientes encuestados puntuó entre 7,28 y 7,52 en su respuesta",
        "La probabilidad de cometer un error Tipo I en esta muestra específica es exactamente del 5%"
      ],
      "explanation": "¡Riguroso y certero! Para los frecuentistas el parámetro μ es una constante fija desconocida. Son los límites del intervalo los que varían aleatoriamente entre réplicas muestrales."
    }
  },
  {
    "id": 5,
    "phase": 1,
    "phaseTitle": "Fase 1: De Fundamenten",
    "title": "Hypothesetoetsing, t-toets & De p-waarde",
    "subtitle": "Nulhypothese, Type I en II fouten, en de kloof tussen statistische en klinische relevantie.",
    "badge": "Fundament",
    "case": {
      "title": "Casus: Werkt het Nieuwe Slaapmiddel SomnoCalm?",
      "context": "Patiënten met slaapproblemen testen SomnoCalm tegen placebo. Placebo slaapt gemiddeld 5.8 uur; SomnoCalm 6.4 uur (+36 min extra). De t-toets geeft $p = 0.018$.",
      "data": [
        {
          "groep": "Placebo (N=30)",
          "gemSlaapUur": "5.80 uur",
          "sd": "1.10 uur"
        },
        {
          "groep": "SomnoCalm (N=30)",
          "gemSlaapUur": "6.40 uur",
          "sd": "1.05 uur"
        },
        {
          "vergelijking": "Verschil (Δ)",
          "gemSlaapUur": "+0.60 uur (36 min)",
          "tWaarde": "t = 2.42"
        },
        {
          "toets": "Independent t-test",
          "pWaarde": "p = 0.018",
          "conclusie": "Significant bij α = 0.05"
        }
      ],
      "question": "Wat vertelt de p-waarde ons hier nu ÉCHT over de werkzaamheid en wat zegt het NIET?"
    },
    "theory": {
      "summary": "De p-waarde meet uitsluitend: hoe onwaarschijnlijk zijn deze data als de interventie in werkelijkheid GEEN effect zou hebben ($H_0$ is waar)? Het is GEEN kans dat het medicijn werkt. Kijk altijd naar effectgrootte (Cohen's d).",
      "keyConcepts": [
        {
          "term": "Nulhypothese (H₀)",
          "desc": "De aanname van géén effect of géén verschil (Δ = 0)."
        },
        {
          "term": "De p-waarde",
          "desc": "P(Data minstens zo extreem | H₀ is WAAR)."
        },
        {
          "term": "Type I Fout (α)",
          "desc": "Vals alarm: H₀ verwerpen terwijl er geen effect is."
        },
        {
          "term": "Cohen's d",
          "desc": "De inhoudelijke grootte van het effect: d = (μ₁ - μ₂) / SD."
        }
      ],
      "mathFormula": "t = \\frac{\\bar{X}_1 - \\bar{X}_2}{\\text{SE}_{\\text{diff}}} = 2.42 \\quad (p = 0.018, \\; d = 0.56)",
      "formulaExplain": "Met een gigantische steekproef ($N=100.000$) wordt zelfs 5 seconden slaapverschil $p < 0.001$. Kijk altijd naar Cohen's d!"
    },
    "simulation": {
      "type": "ttest_power_simulator",
      "name": "T-toets & Effectgrootte Simulator",
      "description": "Pas Cohen's d en steekproefgrootte N aan. Zie hoe de p-waarde daalt en ontdek hoe een minuscuul effect met genoeg N significant wordt!",
      "defaultEffectSize": 0.55,
      "defaultN": 30
    },
    "interpretation": {
      "title": "Statistische vs Praktische Relevantie",
      "metrics": [
        {
          "label": "p-waarde",
          "value": "0.018",
          "note": "Statistisch significant (p < 0.05)"
        },
        {
          "label": "Absolute winst",
          "value": "+36 minuten",
          "note": "Klinisch merkbaar voor slapelozen"
        },
        {
          "label": "Cohen's d",
          "value": "0.56",
          "note": "Matig tot redelijk groot effect"
        }
      ],
      "recommendation": "Hier vallen statistische significantie ($p=0.018$) én klinische relevantie (+36 min slaap, Cohen's d = 0.56) samen."
    },
    "quiz": {
      "question": "Wat is de exacte formele definitie van een p-waarde van 0.03 bij een hypothesetoets?",
      "options": [
        "De kans dat de nulhypothese H0 waar is bedraagt exact 3% gegeven onze steekproefdata",
        "De kans dat de alternatieve hypothese H1 waar is bedraagt 97%",
        "Gegeven dat de nulhypothese waar is, is de kans om een toetsingsgrootheid te vinden die minstens zo extreem is als de geobserveerde waarde 3%",
        "De kans op een Type II fout (vals negatief) bij het handhaven van de nulhypothese bedraagt 3%"
      ],
      "correctIndex": 2,
      "explanation": "Briljant! De p-waarde is P(Data of extremer | H0 waar), NIET P(H0 | Data). Het is een conditionele kans op de data onder de aanname van de nulhypothese."
    },
    "case_en": {
      "title": "Case Study: Does the New Sleep Medication SomnoCalm Work?",
      "context": "A randomized controlled trial compares a new sleeping pill against placebo across N = 60 insomniacs. Sleep duration increases by 32 minutes with p = 0.041. The research team celebrates: 'We proved the drug is highly clinically effective!'",
      "question": "Does p = 0.041 prove that the treatment effect is large, clinically meaningful, and replicable?"
    },
    "case_es": {
      "title": "Caso de Estudio: ¿Funciona el Nuevo Somnífero SomnoCalm?",
      "context": "Un ensayo aleatorizado compara un nuevo somnífero con placebo en N = 60 pacientes con insomnio. El tiempo de sueño aumenta 32 minutos con p = 0,041. El equipo celebra: '¡Hemos demostrado que el fármaco es altamente eficaz en la clínica!'",
      "question": "¿Acredita un valor p = 0,041 que el efecto del tratamiento sea grande, clínicamente relevante y replicable?"
    },
    "theory_en": {
      "summary": "A p-value measures only one thing: how improbable observed data (or more extreme) would be if the null hypothesis H₀ were strictly true. It does NOT state whether H₀ is true, nor does it measure effect magnitude.",
      "formulaExplain": "p = P(Data ≥ Observed | H₀ is true). A tiny p-value only rejects random chance as the sole explanation; effect size (Cohen's d) determines real clinical relevance.",
      "keyConcepts": [
        {
          "term": "Null Hypothesis (H₀)",
          "desc": "Baseline presumption of no effect (μ₁ - μ₂ = 0)."
        },
        {
          "term": "Type I Error (α)",
          "desc": "False positive: rejecting H₀ when H₀ is actually true (set at 0.05)."
        },
        {
          "term": "Type II Error (β)",
          "desc": "False negative: failing to reject H₀ when a true effect exists."
        },
        {
          "term": "Statistical Power (1 - β)",
          "desc": "Probability of detecting a true effect when it genuinely exists."
        },
        {
          "term": "Cohen's d",
          "desc": "Standardized effect size: d = (x̄₁ - x̄₂) / s_pooled."
        }
      ]
    },
    "theory_es": {
      "summary": "El valor p mide una única cosa: qué tan improbables serían los datos observados (o más extremos) si la hipótesis nula H₀ fuese estrictamente cierta. NO mide la probabilidad de H₀ ni la magnitud del efecto.",
      "formulaExplain": "p = P(Datos ≥ Observados | H₀ es cierta). Un valor p pequeño solo descarta el azar puro como explicación; el tamaño del efecto (d de Cohen) determina la relevancia clínica real.",
      "keyConcepts": [
        {
          "term": "Hipótesis Nula (H₀)",
          "desc": "Presunción basal de ausencia de efecto (μ₁ - μ₂ = 0)."
        },
        {
          "term": "Error Tipo I (α)",
          "desc": "Falso positivo: rechazar H₀ cuando H₀ es realmente cierta (habitualmente 0,05)."
        },
        {
          "term": "Error Tipo II (β)",
          "desc": "Falso negativo: no rechazar H₀ cuando existe un efecto genuino."
        },
        {
          "term": "Potencia Estadística (1 - β)",
          "desc": "Probabilidad de detectar un efecto real cuando verdaderamente existe."
        },
        {
          "term": "d de Cohen",
          "desc": "Tamaño del efecto estandarizado: d = (x̄₁ - x̄₂) / s_agrupada."
        }
      ]
    },
    "simulation_en": {
      "name": "T-test & Effect Size Simulator",
      "description": "Shift the true effect size d and sample size N. Watch how the t-distribution shifts, how statistical power climbs to 80%+, and observe when p drops below 0.05."
    },
    "simulation_es": {
      "name": "Simulador de Prueba t y Tamaño del Efecto",
      "description": "Modifica el tamaño del efecto d y el tamaño muestral N. Observa el desplazamiento de la distribución t, cómo la potencia alcanza el 80%+ y en qué punto p desciende de 0,05."
    },
    "interpretation_en": {
      "title": "Statistical vs Practical Relevance",
      "recommendation": "Although p = 0.041 reaches statistical significance at α = 0.05, an effect size of d = 0.28 represents a modest gain. Evaluate side effects and costs before adoption.",
      "metrics": [
        {
          "label": "Observed p-value",
          "note": "p = 0.041 (Statistically significant at α = 0.05)"
        },
        {
          "label": "Cohen's d Effect Size",
          "note": "d = 0.28 (Small clinical effect)"
        },
        {
          "label": "95% CI for Difference",
          "note": "[+1.5 min, +62.5 min] (Wide uncertainty)"
        },
        {
          "label": "Post-hoc Power",
          "note": "54% (Substantially underpowered trial)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Relevancia Estadística frente a Clínica",
      "recommendation": "Aunque p = 0,041 alcanza significación con α = 0,05, un tamaño del efecto d = 0,28 representa una ganancia modesta. Valora efectos adversos y costes antes de adoptarlo.",
      "metrics": [
        {
          "label": "Valor p Observado",
          "note": "p = 0,041 (Significativo con α = 0,05)"
        },
        {
          "label": "Tamaño del Efecto (d)",
          "note": "d = 0,28 (Efecto clínico pequeño)"
        },
        {
          "label": "IC al 95% de la Diferencia",
          "note": "[+1,5 min; +62,5 min] (Gran incertidumbre)"
        },
        {
          "label": "Potencia Obtenida",
          "note": "54% (Estudio marcadamente falto de potencia)"
        }
      ]
    },
    "quiz_en": {
      "question": "What is the exact formal definition of a p-value in classical null hypothesis testing?",
      "options": [
        "The probability that the null hypothesis H₀ is objectively true given our empirical data",
        "The probability of obtaining a test statistic at least as extreme as observed, assuming the null hypothesis H₀ is strictly true",
        "The probability that the alternative hypothesis H₁ is false",
        "The proportion of future replications that will fail to achieve statistical significance"
      ],
      "explanation": "Flawless! A p-value is the conditional probability P(Test Statistic ≥ Observed | H₀). It never states the probability of a hypothesis itself."
    },
    "quiz_es": {
      "question": "¿Cuál es la definición formal exacta de un valor p en el contraste clásico de hipótesis nula?",
      "options": [
        "La probabilidad de que la hipótesis nula H₀ sea objetivamente cierta dados los datos empíricos",
        "La probabilidad de obtener un estadístico de prueba al menos tan extremo como el observado, asumiendo que la hipótesis nula H₀ es estrictamente cierta",
        "La probabilidad de que la hipótesis alternativa H₁ sea falsa",
        "La proporción de réplicas futuras que fracasará en alcanzar significación estadística"
      ],
      "explanation": "¡Precisión impecable! El valor p es la probabilidad condicional P(Estadístico ≥ Observado | H₀). Jamás cuantifica la probabilidad de que la hipótesis sea cierta."
    }
  },
  {
    "id": 6,
    "phase": 2,
    "phaseTitle": "Fase 2: Klassieke Regressie & Diagnostiek",
    "title": "Lineaire Regressie I: OLS & Het Verhaal van de Lijn",
    "subtitle": "Kleinste Kwadraten (OLS), hellingsgetal, intercept en residuen.",
    "badge": "Klassieke Regressie",
    "case": {
      "title": "Casus: Voorspellen van Tentamencijfers o.b.v. Studie-uren",
      "context": "Een coördinator wil weten hoe studie-uren samenhangen met het tentamencijfer Statistiek I. Ze wil studenten waarschuwen hoeveel uur nodig is voor een voldoende (5.5).",
      "data": [
        {
          "student": "Lucas",
          "studieUren": 10,
          "cijfer": 4.5
        },
        {
          "student": "Sanne",
          "studieUren": 15,
          "cijfer": 5.5
        },
        {
          "student": "Timo",
          "studieUren": 20,
          "cijfer": 6.2
        },
        {
          "student": "Noor",
          "studieUren": 25,
          "cijfer": 7.1
        },
        {
          "student": "Lars",
          "studieUren": 30,
          "cijfer": 8.2
        },
        {
          "student": "Femke",
          "studieUren": 35,
          "cijfer": 9
        }
      ],
      "question": "Hoe vinden we de 'allerbeste' lijn door deze puntenwolk en wat betekent de helling in mensentaal?"
    },
    "theory": {
      "summary": "Gewone Kleinste Kwadraten (Ordinary Least Squares, OLS) zoekt de lijn die de som van de gekwadrateerde residuen (verticale afwijkingen $\\sum e_i^2$) minimaliseert.",
      "keyConcepts": [
        {
          "term": "Intercept (β₀)",
          "desc": "Verwachte waarde van Y als X gelijk is aan 0."
        },
        {
          "term": "Hellingsgetal (β₁)",
          "desc": "Verwachte toename in Y bij 1 eenheid toename in X."
        },
        {
          "term": "Residu (eᵢ)",
          "desc": "Verschil tussen waargenomen en voorspelde waarde: eᵢ = yᵢ - ŷᵢ. De OLS-normaalvergelijkingen garanderen dat ∑ eᵢ = 0."
        }
      ],
      "mathFormula": "Y = \\beta_0 + \\beta_1 X + \\epsilon \\quad \\implies \\quad \\hat{Y} = 2.70 + 0.18 \\cdot X",
      "formulaExplain": "Voor elk extra studie-uur stijgt het verwachte cijfer met 0.18 punt. De OLS-residuensom is exact nul (∑ eᵢ = 0)."
    },
    "simulation": {
      "type": "ols_line_fitter",
      "name": "OLS Lijn-Passer & Residu-Kwadraten",
      "description": "Beweeg helling en intercept handmatig. Zoek de stand waarbij de totale som van vierkanten (SS_res) minimaal is!"
    },
    "interpretation": {
      "title": "Model & Beleidsadvies",
      "metrics": [
        {
          "label": "Intercept (β₀)",
          "value": "2.70",
          "note": "Basisscore zonder voorbereiding"
        },
        {
          "label": "Helling (β₁)",
          "value": "+0.18 per uur",
          "note": "Winst per studie-uur"
        },
        {
          "label": "Uren voor een 5.5",
          "value": "15.6 uur",
          "note": "(5.5 - 2.70) / 0.18 ≈ 15.6 uur"
        }
      ],
      "recommendation": "Adviseer studenten minimaal 16 uur te reserveren voor dit vak om een voldoende veilig te stellen."
    },
    "quiz": {
      "question": "In het model Cijfer = 2.5 + 0.20 × Uren, wat is het verwachte effect als een student 10 uur extra studeert?",
      "options": [
        "Het cijfer stijgt met 0.20 punt ongeacht het aantal gestudeerde uren",
        "Het verwachte cijfer stijgt met 2.0 punten (ΔŶ = 10 × 0.20)",
        "Het cijfer wordt minimaal een 4.5, omdat 2.5 de harde ondergrens is voor elke student",
        "De correlatiecoëfficiënt r tussen uren en cijfer stijgt automatisch met 0.20"
      ],
      "correctIndex": 1,
      "explanation": "Correct! De helling β₁ geeft de verwachte verandering in Y per eenheid verandering in X. Voor ΔX = 10 is de stijging 10 × 0.20 = 2.0 punten."
    },
    "case_en": {
      "title": "Case Study: Predicting Exam Grades from Study Hours",
      "context": "A university tracks N = 80 statistics students: weekly study hours (X) and final exam grades (Y on a 1–10 scale). The best fit line is Grade = 2.5 + 0.20 × Hours.",
      "question": "How does Ordinary Least Squares (OLS) identify the unique line that mathematically minimizes prediction error?"
    },
    "case_es": {
      "title": "Caso de Estudio: Predecir Calificaciones según Horas de Estudio",
      "context": "Una universidad monitoriza a N = 80 estudiantes de estadística: horas de estudio semanales (X) y calificación final (Y de 1 a 10). La recta ajustada es Nota = 2,5 + 0,20 × Horas.",
      "question": "¿Cómo identifica el método de Mínimos Cuadrados Ordinarios (MCO) la recta que minimiza de forma matemática el error de predicción?"
    },
    "theory_en": {
      "summary": "Ordinary Least Squares (OLS) minimizes the sum of squared vertical residuals: SSE = Σ(y_i - ŷ_i)². By squaring deviations, larger errors are penalized more heavily, yielding the optimal unbiased linear predictor under Gauss-Markov assumptions.",
      "formulaExplain": "Slope β₁ = Cov(X, Y) / Var(X). Intercept β₀ = ȳ - β₁ · x̄. These closed-form normal equations guarantee a unique analytical global minimum.",
      "keyConcepts": [
        {
          "term": "Intercept (β₀)",
          "desc": "The expected baseline value of Y when all predictors X equal zero."
        },
        {
          "term": "Slope (β₁)",
          "desc": "Expected marginal change in Y for each 1-unit increase in predictor X."
        },
        {
          "term": "Residual (e_i)",
          "desc": "e_i = y_i - ŷ_i. The vertical gap between observation and regression line."
        },
        {
          "term": "Gauss-Markov Theorem",
          "desc": "Under standard OLS assumptions, OLS estimators are BLUE (Best Linear Unbiased Estimator)."
        }
      ]
    },
    "theory_es": {
      "summary": "Mínimos Cuadrados Ordinarios (MCO/OLS) minimiza la suma de residuos verticales al cuadrado: SCE = Σ(y_i - ŷ_i)². Elevar al cuadrado penaliza con mayor dureza los grandes desvíos, produciendo el estimador lineal insesgado óptimo según Gauss-Markov.",
      "formulaExplain": "Pendiente β₁ = Cov(X, Y) / Var(X). Intercepto β₀ = ȳ - β₁ · x̄. Estas ecuaciones normales analíticas garantizan un mínimo global único.",
      "keyConcepts": [
        {
          "term": "Intercepto (β₀)",
          "desc": "El valor basal esperado de Y cuando los predictores X equivalen a cero."
        },
        {
          "term": "Pendiente (β₁)",
          "desc": "Cambio marginal esperado en Y por cada incremento de 1 unidad en el predictor X."
        },
        {
          "term": "Residuo (e_i)",
          "desc": "e_i = y_i - ŷ_i. La distancia vertical entre el dato observado y la recta predicha."
        },
        {
          "term": "Teorema de Gauss-Markov",
          "desc": "Bajo supuestos clásicos, los estimadores MCO son MELI (Mejor Estimador Lineal Insesgado)."
        }
      ]
    },
    "simulation_en": {
      "name": "OLS Line Fitter & Squared Residuals",
      "description": "Manually rotate the slope and adjust the intercept. Watch the sum of squared errors (SSE) fluctuate and discover why OLS mathematically locks onto the absolute minimum!"
    },
    "simulation_es": {
      "name": "Ajustador de Recta MCO y Residuos Cuadráticos",
      "description": "Gira la pendiente y ajusta el intercepto manualmente. Observa cómo fluctúa la suma de cuadrados de error (SCE) y comprueba por qué MCO converge al mínimo absoluto."
    },
    "interpretation_en": {
      "title": "Model & Policy Guidance",
      "recommendation": "Every additional 5 hours of study increases expected score by +1.0 grade point. Encourage at least 15 study hours weekly.",
      "metrics": [
        {
          "label": "Intercept (β₀)",
          "note": "2.50 (Baseline grade without studying)"
        },
        {
          "label": "Slope (β₁)",
          "note": "+0.20 per study hour (p < 0.001)"
        },
        {
          "label": "R-squared (R²)",
          "note": "0.64 (64% of grade variance explained)"
        },
        {
          "label": "Residual Std Error",
          "note": "0.82 grade points"
        }
      ]
    },
    "interpretation_es": {
      "title": "Interpretación del Modelo y Orientación",
      "recommendation": "Cada 5 horas adicionales de estudio incrementan la calificación esperada en +1,0 punto. Fomenta al menos 15 horas semanales.",
      "metrics": [
        {
          "label": "Intercepto (β₀)",
          "note": "2,50 (Calificación basal sin estudiar)"
        },
        {
          "label": "Pendiente (β₁)",
          "note": "+0,20 por hora de estudio (p < 0,001)"
        },
        {
          "label": "Coeficiente R²",
          "note": "0,64 (64% de la varianza explicada)"
        },
        {
          "label": "Error Estándar Residual",
          "note": "0,82 puntos de calificación"
        }
      ]
    },
    "quiz_en": {
      "question": "In the fitted regression model Grade = 2.5 + 0.20 × Hours, what is the precise interpretation of slope coefficient 0.20?",
      "options": [
        "A student who studies 20 hours will receive an expected score increase of 2.5 grade points",
        "For each additional hour of study per week, expected final grade increases by 0.20 points on average",
        "20% of final grade variation is caused by hours studied",
        "The correlation coefficient between study hours and exam grade is r = 0.20"
      ],
      "explanation": "Superb! In simple linear regression, the slope coefficient measures the expected marginal change in Y per unit increase in X."
    },
    "quiz_es": {
      "question": "En el modelo ajustado Nota = 2,5 + 0,20 × Horas, ¿cuál es la interpretación exacta del coeficiente de pendiente 0,20?",
      "options": [
        "Un estudiante que estudie 20 horas tendrá un incremento esperado de 2,5 puntos en su nota",
        "Por cada hora adicional de estudio por semana, la calificación final esperada se incrementa en promedio 0,20 puntos",
        "El 20% de la variación en las notas finales está causada directamente por las horas de estudio",
        "El coeficiente de correlación de Pearson entre horas y nota es exactamente r = 0,20"
      ],
      "explanation": "¡Excelente! En regresión lineal simple, la pendiente cuantifica el cambio medio esperado en la variable respuesta Y por cada unidad adicional del predictor X."
    }
  },
  {
    "id": 7,
    "phase": 2,
    "phaseTitle": "Fase 2: Klassieke Regressie & Diagnostiek",
    "title": "Goedheid van de Pasvorm: R², Adj-R² en de F-toets",
    "subtitle": "Hoeveel verklaart je model echt? De gevaren van overmatig toevoegen van variabelen.",
    "badge": "Klassieke Regressie",
    "case": {
      "title": "Casus: Voorspellen van Huizenprijzen & De Ruisvariabelen",
      "context": "Een analist voegt aan een huizenprijsmodel willekeurige toevalsgetallen toe. Zijn $R^2$ stijgt van 0.65 naar 0.73. Is het model werkelijk beter geworden?",
      "data": [
        {
          "model": "Model 1 (Oppervlakte)",
          "r2": "0.650",
          "adjR2": "0.643"
        },
        {
          "model": "Model 2 (+ Kamers)",
          "r2": "0.720",
          "adjR2": "0.708"
        },
        {
          "model": "Model 3 (+ 5 Ruisvariabelen)",
          "r2": "0.735",
          "adjR2": "0.690 (Daalt!)"
        }
      ],
      "question": "Waarom stijgt R² ALTIJD als je variabelen toevoegt, en waarom beschermt Adjusted R² ons hiertegen?"
    },
    "theory": {
      "summary": "$R^2$ kan wiskundig gezien nooit dalen bij het toevoegen van variabelen. Gecorrigeerde $R^2$ (Adjusted $R^2$) straft voor extra parameters en daalt als een variabele minder bijdraagt dan toeval.",
      "keyConcepts": [
        {
          "term": "R²",
          "desc": "Percentage verklaarde variantie (SS_reg / SS_tot)."
        },
        {
          "term": "Adjusted R²",
          "desc": "Gecorrigeerd voor aantal voorspellers k. Daalt bij ruis!"
        },
        {
          "term": "F-toets",
          "desc": "Toetst of alle regressiecoëfficiënten gezamenlijk afwijken van nul."
        }
      ],
      "mathFormula": "R^2_{\\text{adj}} = 1 - \\left[ \\frac{(1 - R^2)(n - 1)}{n - k - 1} \\right]",
      "formulaExplain": "Als $k$ toeneemt zonder dat $R^2$ substantieel stijgt, keldert Adjusted $R^2$."
    },
    "simulation": {
      "type": "r2_noise_simulator",
      "name": "R² vs Adjusted R² Stress Test",
      "description": "Voeg zinloze ruisvariabelen toe. Zie hoe de gewone R² kunstmatig stijgt, terwijl de Adjusted R² direct daalt!"
    },
    "interpretation": {
      "title": "Modelvergelijking & Keuze",
      "metrics": [
        {
          "label": "Beste model",
          "value": "Model 2 (Oppervlakte + Kamers)",
          "note": "Hoogste Adj-R² (0.708)"
        },
        {
          "label": "Ruismodel (Model 3)",
          "value": "Verwerpen!",
          "note": "Adj-R² daalde naar 0.690"
        }
      ],
      "recommendation": "Kies nooit een model puur op gewone $R^2$. Hanteer Adjusted $R^2$, AIC of BIC."
    },
    "quiz": {
      "question": "Wat gebeurt er met de gewone R² als je 5 zuivere toevalsvectoren als extra regressoren toevoegt aan een OLS-model?",
      "options": [
        "R² daalt evenredig met het aantal irrelevante voorspellers",
        "R² blijft gegarandeerd gelijk of stijgt een klein beetje, omdat OLS toevalsruis meeneemt in de modelpassing",
        "R² wordt ongedefinieerd omdat toevalsvectoren een singuliere covariantiematrix veroorzaken",
        "De Adjusted R² stijgt mee, omdat de residuele kwadratensom (RSS) altijd omlaag gaat"
      ],
      "correctIndex": 1,
      "explanation": "Juist! De gewone R² kan wiskundig gezien nooit dalen bij toevoeging van extra variabelen. Daarom gebruiken we Adjusted R², AIC of BIC om te corrigeren voor overbodige modelcomplexiteit."
    },
    "case_en": {
      "title": "Case Study: Predicting House Prices & Noise Variables",
      "context": "A real estate analytics agency models sale prices (N = 300 homes). A baseline model with square footage achieves R² = 0.65. Adding 8 random noise variables (lottery numbers, agent shoe size) boosts R² to 0.71, but Adjusted R² drops to 0.62.",
      "question": "Why does standard R² automatically increase when adding useless noise, and why does Adjusted R² protect against overfitting?"
    },
    "case_es": {
      "title": "Caso de Estudio: Predecir Precios Inmobiliarios y Variables de Ruido",
      "context": "Una agencia inmobiliaria modela precios de venta (N = 300 viviendas). El modelo basal con superficie habitable alcanza R² = 0,65. Añadir 8 variables aleatorias de ruido (lotería, talla de calzado) eleva R² a 0,71, pero el R² Ajustado cae a 0,62.",
      "question": "¿Por qué el R² ordinario aumenta mecánicamente al agregar ruido irrelevante y por qué el R² Ajustado previene el sobreajuste?"
    },
    "theory_en": {
      "summary": "R² measures the proportion of total outcome variance explained by the model: R² = 1 - (SSE / SST). Mathematically, R² can NEVER decrease when adding predictors, even pure random noise. Adjusted R² penalizes degrees of freedom consumed.",
      "formulaExplain": "Adjusted R² = 1 - [(1 - R²) · (N - 1) / (N - k - 1)]. It increases only if a newly added predictor improves the model more than expected by chance alone.",
      "keyConcepts": [
        {
          "term": "Total Sum of Squares (SST)",
          "desc": "Σ(y_i - ȳ)². Total raw variance of outcome Y."
        },
        {
          "term": "Residual Sum of Squares (SSE)",
          "desc": "Σ(y_i - ŷ_i)². Variance left unexplained by model."
        },
        {
          "term": "Adjusted R²",
          "desc": "Penalizes model complexity (k predictors) to prevent overfitting."
        },
        {
          "term": "Overall F-test",
          "desc": "Tests joint hypothesis that all slope coefficients equal zero (H₀: β₁ = ... = β_k = 0)."
        }
      ]
    },
    "theory_es": {
      "summary": "El R² cuantifica la proporción de varianza total explicada por el modelo: R² = 1 - (SCE / SCT). Matemáticamente, el R² ordinario NUNCA puede descender al añadir predictores, incluso ruido aleatorio. El R² Ajustado penaliza los grados de libertad consumidos.",
      "formulaExplain": "R² Ajustado = 1 - [(1 - R²) · (N - 1) / (N - k - 1)]. Solo aumenta si el predictor recién incorporado mejora el modelo más de lo atribuible al puro azar.",
      "keyConcepts": [
        {
          "term": "Suma Total de Cuadrados (SCT)",
          "desc": "Σ(y_i - ȳ)². La variabilidad total observada en la variable respuesta Y."
        },
        {
          "term": "Suma de Cuadrados Residual (SCE)",
          "desc": "Σ(y_i - ŷ_i)². La porción de varianza no explicada por el modelo."
        },
        {
          "term": "R² Ajustado",
          "desc": "Penaliza la complejidad (k predictores) para evitar el sobreajuste empírico."
        },
        {
          "term": "Prueba F Global",
          "desc": "Contrasta la hipótesis conjunta de que todas las pendientes son nulas (H₀: β₁ = ... = β_k = 0)."
        }
      ]
    },
    "simulation_en": {
      "name": "R² vs Adjusted R² Stress Test",
      "description": "Inject 1 to 20 pure random noise predictors into the model. Watch standard R² artificially climb while Adjusted R² plummets as degrees of freedom burn!"
    },
    "simulation_es": {
      "name": "Prueba de Estrés: R² vs R² Ajustado",
      "description": "Inyecta de 1 a 20 predictores de puro ruido aleatorio. ¡Comprueba cómo el R² ordinario sube artificialmente mientras el R² Ajustado cae en picado al penalizar la complejidad!"
    },
    "interpretation_en": {
      "title": "Model Comparison & Selection",
      "recommendation": "Reject the 9-predictor model. Retain the parsimonious model (Square footage + Bedrooms), as its Adjusted R² is highest and avoids spurious variance inflation.",
      "metrics": [
        {
          "label": "Standard R² (Noise Model)",
          "note": "0.71 (Deceptive variance capture)"
        },
        {
          "label": "Adjusted R² (Noise Model)",
          "note": "0.62 (Severe degree-of-freedom penalty)"
        },
        {
          "label": "Adjusted R² (Parsimonious)",
          "note": "0.65 (True generalizable fit)"
        },
        {
          "label": "F-test p-value for Noise",
          "note": "p = 0.48 (Insignificant joint contribution)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Comparación de Modelos y Selección",
      "recommendation": "Descarta el modelo inflado de 9 predictores. Quédate con el modelo parsimonioso (Superficie + Dormitorios), cuyo R² Ajustado es superior y generalizable.",
      "metrics": [
        {
          "label": "R² Ordinario (Con Ruido)",
          "note": "0,71 (Captura engañosa de varianza)"
        },
        {
          "label": "R² Ajustado (Con Ruido)",
          "note": "0,62 (Severa penalización por grados de libertad)"
        },
        {
          "label": "R² Ajustado (Parsimonioso)",
          "note": "0,65 (Ajuste genuino generalizable)"
        },
        {
          "label": "Valor p de Prueba F (Ruido)",
          "note": "p = 0,48 (Aporte conjunto insignificante)"
        }
      ]
    },
    "quiz_en": {
      "question": "What happens to standard R² when 5 completely uncorrelated random noise variables are added to an OLS regression?",
      "options": [
        "Standard R² drops, as noise disrupts estimation of true regression coefficients",
        "Standard R² stays exactly identical or marginally increases, as sample correlation with noise in finite samples is rarely precisely zero",
        "Standard R² converges to Adjusted R² according to the Gauss-Markov theorem",
        "The F-test automatically inflates to compensate for the added degrees of freedom"
      ],
      "explanation": "Exactly! In any finite sample, noise variables have minuscule accidental correlations with Y. Ordinary Least Squares exploits these, so standard R² can never decrease."
    },
    "quiz_es": {
      "question": "¿Qué le ocurre al R² ordinario cuando se añaden 5 variables de puro ruido aleatorio incorrelacionadas a una regresión MCO?",
      "options": [
        "El R² ordinario desciende, ya que el ruido entorpece la estimación de los coeficientes reales",
        "El R² ordinario permanece idéntico o se incrementa ligeramente, pues en muestras finitas la correlación accidental con el ruido casi nunca es estrictamente cero",
        "El R² ordinario converge al R² Ajustado según el teorema de Gauss-Markov",
        "El estadístico F aumenta automáticamente para compensar los grados de libertad consumidos"
      ],
      "explanation": "¡Exacto! En cualquier muestra finita, las variables aleatorias poseen leves correlaciones accidentales con Y. MCO las aprovecha para reducir la suma de cuadrados, por lo que R² jamás decrece."
    }
  },
  {
    "id": 8,
    "phase": 2,
    "phaseTitle": "Fase 2: Klassieke Regressie & Diagnostiek",
    "title": "Modelassumpties & Diagnostiek (L.I.N.E.)",
    "subtitle": "Residuendiagnostiek, heteroscedasticiteit, normaliteit en invloedrijke datapunten.",
    "badge": "Klassieke Regressie",
    "case": {
      "title": "Casus: De 'Trompet' in Bedrijfswinsten (Heteroscedasticiteit)",
      "context": "Bij kleine bedrijven liggen winstvoorspellingen strak rond de lijn; bij grote bedrijven waaiert de winst enorm uit (trompetvorm). Welke assumptie wordt geschonden?",
      "data": [
        {
          "bedrijfGrootte": "Klein (5 mdw)",
          "werkelijk": "€ 45k",
          "residu": "+5k"
        },
        {
          "bedrijfGrootte": "Groot (120 mdw)",
          "werkelijk": "€ 4.2M",
          "residu": "+3.1M"
        }
      ],
      "question": "Waarom zijn de standaardfouten en p-waarden onbetrouwbaar als homoscedasticiteit geschonden wordt?"
    },
    "theory": {
      "summary": "L.I.N.E.: Lineariteit, Onafhankelijkheid, Normaliteit van residuen, en Gelijke spreiding (Homoscedasticiteit). Schending van homoscedasticiteit vervalst de standaardfouten en p-waarden.",
      "keyConcepts": [
        {
          "term": "Homoscedasticiteit",
          "desc": "Constante variantie van de residuen over het hele bereik."
        },
        {
          "term": "Heteroscedasticiteit",
          "desc": "Trompet- of trechtervorm in de Residuals vs Fitted plot."
        },
        {
          "term": "Q-Q Plot",
          "desc": "Controleert of residuen de rechte lijn van de normale verdeling volgen."
        }
      ],
      "mathFormula": "\\text{Assumptie: } \\text{Var}(\\epsilon_i) = \\sigma^2 \\quad \\text{vs Heteroscedasticiteit: } \\text{Var}(\\epsilon_i) = \\sigma_i^2",
      "formulaExplain": "Remedie: log-transformatie $\\ln(Y)$ of robuuste Huber-White standaardfouten."
    },
    "simulation": {
      "type": "diagnostics_lab",
      "name": "Residuendiagnostiek & L.I.N.E. Lab",
      "description": "Schakel tussen gezonde data, trompetvorm en niet-lineariteit in de Residuals vs Fitted en Q-Q plots."
    },
    "interpretation": {
      "title": "Diagnostisch Oordeel & Remedie",
      "metrics": [
        {
          "label": "Breusch-Pagan Toets",
          "value": "p < 0.001",
          "note": "Heteroscedasticiteit aangetoond"
        },
        {
          "label": "Aanbevolen actie",
          "value": "Log-transformatie ln(Y)",
          "note": "Stabiliseert de spreiding"
        }
      ],
      "recommendation": "Neem de natuurlijke logaritme van de winst of pas robuuste sandwich standaardfouten toe."
    },
    "quiz": {
      "question": "Wat signaleert een uitwaaierend trompetpatroon in een 'Residuals vs Fitted' spreidingsdiagram?",
      "options": [
        "Ernstige multicollineariteit tussen twee of meer verklarende variabelen",
        "Heteroscedasticiteit (niet-constante residuele variantie), waardoor standaardfouten en hypothesetoetsen onbetrouwbaar worden",
        "Structurele kromming in het conditionele verwachtingsgemiddelde van Y",
        "Endogeniteit: correlatie tussen de voorspellers en de residuele storingsterm"
      ],
      "correctIndex": 1,
      "explanation": "Spot-on! Heteroscedasticiteit schendt de aanname van gelijke foutvariantie. OLS-puntschattingen blijven zuiver, maar standaardfouten en p-waarden zijn ongeldig zonder robuuste Huber-White correctie."
    },
    "case_en": {
      "title": "Case Study: The 'Trumpet' in Corporate Profits (Heteroscedasticity)",
      "context": "An economist regresses company annual profit on marketing spend across N = 150 firms. For small firms with €10k budgets, profits vary tightly around €25k. For large firms with €1M budgets, profits fluctuate wildly from -€500k to +€5M (expanding fan pattern).",
      "question": "Why does this expanding trumpet pattern in residuals invalidate standard OLS p-values and standard errors?"
    },
    "case_es": {
      "title": "Caso de Estudio: La 'Trompeta' en Beneficios Empresariales (Heterocedasticidad)",
      "context": "Un economista analiza el beneficio anual en función del presupuesto publicitario en N = 150 empresas. En empresas pequeñas (10.000 € de gasto), el beneficio oscila poco en torno a 25.000 €. En grandes corporaciones (1.000.000 €), oscila entre -500.000 € y +5.000.000 € (patrón en abanico).",
      "question": "¿Por qué este patrón en abanico o trompeta en los residuos invalida los errores estándar y los valores p de MCO clásico?"
    },
    "theory_en": {
      "summary": "The Gauss-Markov theorem relies on 4 core diagnostic pillars (L.I.N.E.): Linearity, Independence, Normality of residuals, and Equal variance (Homoscedasticity). Heteroscedasticity produces biased standard errors, rendering hypothesis tests untrustworthy.",
      "formulaExplain": "Var(ε_i | X) = σ² (Constant variance). When Var(ε_i | X) = σ_i², use White's heteroscedasticity-consistent robust standard errors (HC3) or a logarithmic transformation.",
      "keyConcepts": [
        {
          "term": "Linearity (L)",
          "desc": "Residuals must scatter randomly around zero with no quadratic or curved trend."
        },
        {
          "term": "Independence (I)",
          "desc": "Observations must not be autocorrelated (Durbin-Watson ≈ 2.0)."
        },
        {
          "term": "Normality (N)",
          "desc": "Residuals should follow a straight diagonal on a Q-Q plot."
        },
        {
          "term": "Equal Variance (E)",
          "desc": "Homoscedasticity: residual band must remain constant across all fitted values Ŷ."
        }
      ]
    },
    "theory_es": {
      "summary": "El teorema de Gauss-Markov descansa en 4 pilares diagnósticos (L.I.N.E.): Linealidad, Independencia, Normalidad de residuos y Ecuanimidad de varianza (Homocedasticidad). La heterocedasticidad sesga los errores estándar e invalida los valores p.",
      "formulaExplain": "Var(ε_i | X) = σ² (Varianza constante). Si Var(ε_i | X) = σ_i², es imprescindible aplicar errores estándar robustos de White (HC3) o transformación logarítmica.",
      "keyConcepts": [
        {
          "term": "Linealidad (L)",
          "desc": "Los residuos deben dispersarse aleatoriamente en torno a cero sin curvaturas sistemáticas."
        },
        {
          "term": "Independencia (I)",
          "desc": "Las observaciones no deben presentar autocorrelación serial ni agrupamiento (Durbin-Watson ≈ 2,0)."
        },
        {
          "term": "Normalidad (N)",
          "desc": "Los residuos deben alinearse sobre la diagonal recta en un gráfico Q-Q."
        },
        {
          "term": "Ecuanimidad Varianza (E)",
          "desc": "Homocedasticidad: la dispersión residual debe ser homogénea para todos los valores predichos Ŷ."
        }
      ]
    },
    "simulation_en": {
      "name": "Residual Diagnostics & L.I.N.E. Lab",
      "description": "Switch between clean homoscedastic data and trumpet heteroscedasticity. Observe how the residual plot instantly betrays assumption violations!"
    },
    "simulation_es": {
      "name": "Laboratorio de Diagnósticos de Residuos L.I.N.E.",
      "description": "Alterna entre datos homocedásticos limpios y heterocedasticidad en abanico. ¡Comprueba cómo el gráfico de residuos delata de inmediato el incumplimiento de supuestos!"
    },
    "interpretation_en": {
      "title": "Diagnostic Assessment & Remedy",
      "recommendation": "Breusch-Pagan test strongly rejects homoscedasticity (p < 0.001). Apply a log-log transformation ln(Profit) ~ ln(Marketing) or HC3 robust standard errors.",
      "metrics": [
        {
          "label": "Breusch-Pagan Test",
          "note": "p = 0.0002 (Heteroscedasticity confirmed)"
        },
        {
          "label": "Durbin-Watson Statistic",
          "note": "1.98 (Residuals are independent)"
        },
        {
          "label": "Shapiro-Wilk on Residuals",
          "note": "W = 0.985, p = 0.18 (Normal residuals)"
        },
        {
          "label": "Recommended Remedy",
          "note": "HC3 Robust SEs or Log-transformation"
        }
      ]
    },
    "interpretation_es": {
      "title": "Evaluación Diagnóstica y Remedio",
      "recommendation": "El test de Breusch-Pagan rechaza tajantemente la homocedasticidad (p < 0,001). Aplica transformación log-log o errores estándar robustos HC3.",
      "metrics": [
        {
          "label": "Prueba de Breusch-Pagan",
          "note": "p = 0,0002 (Heterocedasticidad confirmada)"
        },
        {
          "label": "Estadístico Durbin-Watson",
          "note": "1,98 (Independencia de residuos válida)"
        },
        {
          "label": "Shapiro-Wilk en Residuos",
          "note": "W = 0,985, p = 0,18 (Residuos normales)"
        },
        {
          "label": "Remedio Recomendado",
          "note": "Errores Robustos HC3 o Transformación Log"
        }
      ]
    },
    "quiz_en": {
      "question": "What does an expanding trumpet pattern in a Residuals vs Fitted plot signal in linear regression?",
      "options": [
        "Multicollinearity between independent predictors, inflating standard errors",
        "Heteroscedasticity: error variance increases with fitted values, biasing classical standard errors and p-values",
        "Severe non-linearity requiring a polynomial regression model",
        "Violation of residual normality, demanding non-parametric rank tests"
      ],
      "explanation": "Masterful! A trumpet shape indicates variance grows with Ŷ (heteroscedasticity). OLS coefficient estimates remain unbiased, but ordinary standard errors are wrong."
    },
    "quiz_es": {
      "question": "¿Qué indica un patrón en abanico o trompeta en el gráfico de Residuos vs Valores Ajustados en regresión lineal?",
      "options": [
        "Multicolinealidad entre predictores independientes, inflando los errores estándar",
        "Heterocedasticidad: la varianza del error aumenta con los valores predichos, invalidando los errores estándar clásicos y los valores p",
        "No linealidad severa que exige ajustar un polinomio de orden superior",
        "Violación de normalidad en los residuos, que obliga a emplear pruebas no paramétricas de rangos"
      ],
      "explanation": "¡Magistral! La forma de trompeta delata que la varianza residual crece con Ŷ (heterocedasticidad). Los coeficientes MCO siguen siendo insesgados, pero sus errores estándar convencionales son falsos."
    }
  },
  {
    "id": 9,
    "phase": 2,
    "phaseTitle": "Fase 2: Klassieke Regressie & Diagnostiek",
    "title": "Meervoudige Regressie & Confounding (Simpson's Paradox)",
    "subtitle": "Controleren voor covariabelen en hoe een verband 180 graden kan omdraaien.",
    "badge": "Klassieke Regressie",
    "case": {
      "title": "Casus: Sporten en Cholesterol (De Paradox)",
      "context": "In enkelvoudige regressie lijkt sporten cholesterol te verhogen (+0.32, p=0.002). Maar ouderen sporten vaker én hebben biologisch hoger cholesterol. Wat gebeurt er als we Leeftijd meenemen?",
      "data": [
        {
          "groep": "Jongeren",
          "sportUur": "5 u/wk",
          "hellingBinnenGroep": "-0.26 (Gezonde daling)"
        },
        {
          "groep": "Senioren",
          "sportUur": "8 u/wk",
          "hellingBinnenGroep": "-0.28 (Gezonde daling)"
        },
        {
          "analyse": "Gecombineerd (Zonder leeftijd)",
          "hellingTotaal": "+0.32 (Schadelijke stijging!?)"
        }
      ],
      "question": "Waarom keert het effect om als we Leeftijd toevoegen als covariabele in meervoudige regressie?"
    },
    "theory": {
      "summary": "Simpson's Paradox: een verband keert om zodra je controleert voor een confounder. In meervoudige regressie schatten we het effect ceteris paribus (onder gelijkblijvende omstandigheden).",
      "keyConcepts": [
        {
          "term": "Confounder",
          "desc": "Variabele die samenhangt met zowel voorspeller als uitkomst (Leeftijd)."
        },
        {
          "term": "Ceteris Paribus",
          "desc": "Het zuivere effect van sport voor mensen van exact dezelfde leeftijd."
        }
      ],
      "mathFormula": "Y_{\\text{Chol}} = \\beta_0 + \\beta_1 \\cdot \\text{Sport} + \\beta_2 \\cdot \\text{Leeftijd} + \\epsilon \\quad (\\beta_1 = -0.26)",
      "formulaExplain": "Na controle voor leeftijd blijkt sporten fysiologisch gezond en cholesterol-verlagend."
    },
    "simulation": {
      "type": "simpsons_paradox_visualizer",
      "name": "Simpson's Paradox Visualizer",
      "description": "Bekijk de misleidende gecombineerde stijgende lijn versus de twee gezonde dalende lijnen binnen de leeftijdsgroepen."
    },
    "interpretation": {
      "title": "Enkelvoudig vs Meervoudig",
      "metrics": [
        {
          "label": "Enkelvoudig β (Sport)",
          "value": "+0.32 (p = 0.002)",
          "note": "Vertekend door confounder"
        },
        {
          "label": "Meervoudig β (Sport | Leeftijd)",
          "value": "-0.26 (p < 0.001)",
          "note": "Zuiver fysiologisch effect"
        }
      ],
      "recommendation": "Trek nooit causale conclusies uit enkelvoudige correlaties zonder te controleren voor confounders."
    },
    "quiz": {
      "question": "Wat betekent het als de partiële regressiecoëfficiënt β₁ geschat wordt 'gecorrigeerd voor X₂'?",
      "options": [
        "Dat de correlatie tussen X₁ en Y kunstmatig op nul is gesteld via orthogonalisatie",
        "Dat we kijken naar de associatie tussen X₁ en Y voor observaties met een identieke waarde op X₂ (ceteris paribus)",
        "Dat X₁ en X₂ met elkaar vermenigvuldigd zijn als interactieterm in de ontwerpmatrix",
        "Dat het causale pad van X₂ naar Y volledig geëlimineerd is via instrumentele variabelen"
      ],
      "correctIndex": 1,
      "explanation": "Exact! Meervoudige regressie isoleert het unieke partiële effect van X₁ op Y terwijl alle overige variabelen in het model constant worden gehouden."
    },
    "case_en": {
      "title": "Case Study: Exercise and Cholesterol (The Paradox)",
      "context": "A public health study of N = 1,500 adults investigates weekly physical exercise (X) and serum cholesterol (Y). A simple regression reports a positive slope: 'More exercise increases cholesterol (β = +0.54, p < 0.001)!' However, older individuals exercise more and naturally possess higher cholesterol.",
      "question": "How can omitting Age (a severe confounder) completely invert the observed effect direction of exercise on cholesterol?"
    },
    "case_es": {
      "title": "Caso de Estudio: Ejercicio Físico y Colesterol (La Paradoja)",
      "context": "Un estudio de salud pública con N = 1.500 adultos investiga horas semanales de ejercicio (X) y colesterol sérico (Y). Una regresión simple arroja una pendiente positiva: '¡Más ejercicio eleva el colesterol (β = +0,54, p < 0,001)!' Sin embargo, los adultos mayores hacen más ejercicio y poseen mayor colesterol basal.",
      "question": "¿Cómo puede la omisión de la Edad (un confusor crítico) invertir por completo la dirección del efecto del ejercicio sobre el colesterol?"
    },
    "theory_en": {
      "summary": "Simpson's Paradox occurs when an apparent relationship observed at the aggregate level reverses once data is stratified by a key confounder. Multiple regression resolves this by estimating partial slopes while holding confounders constant.",
      "formulaExplain": "Y = β₀ + β₁·Exercise + β₂·Age + ε. β₁ now isolates the causal effect of exercise holding age fixed, transforming a spurious positive slope (+0.54) into its true beneficial negative slope (-0.82).",
      "keyConcepts": [
        {
          "term": "Confounder (Z)",
          "desc": "A common cause influencing both predictor X and outcome Y, creating spurious association."
        },
        {
          "term": "Omitted Variable Bias",
          "desc": "Bias created when a confounder correlated with both X and Y is left out of the regression."
        },
        {
          "term": "Partial Regression Slope",
          "desc": "The unique relationship between X₁ and Y after mathematically removing the linear influence of X₂."
        },
        {
          "term": "Simpson's Reversal",
          "desc": "When the partial slope has the opposite mathematical sign from the bivariate marginal slope."
        }
      ]
    },
    "theory_es": {
      "summary": "La Paradoja de Simpson surge cuando una asociación observada a nivel global se invierte por completo al estratificar por un confusor relevante. La regresión múltiple lo soluciona estimando pendientes parciales manteniendo constantes los confusores.",
      "formulaExplain": "Y = β₀ + β₁·Ejercicio + β₂·Edad + ε. β₁ aísla el efecto del ejercicio manteniendo constante la edad, transformando una pendiente engañosa positiva (+0,54) en su verdadero efecto reductor negativo (-0,82).",
      "keyConcepts": [
        {
          "term": "Confusor (Z)",
          "desc": "Causa común que influye simultáneamente sobre el predictor X y el desenlace Y, generando correlaciones espurias."
        },
        {
          "term": "Sesgo por Variable Omitida",
          "desc": "Distorsión sistemática producida cuando un confusor relevante queda fuera de la ecuación de regresión."
        },
        {
          "term": "Pendiente Parcial",
          "desc": "El vínculo directo entre X₁ e Y tras eliminar matemáticamente el influjo lineal de X₂."
        },
        {
          "term": "Inversión de Simpson",
          "desc": "Fenómeno en el que la pendiente parcial exhibe signo algebraico opuesto a la correlación marginal bruta."
        }
      ]
    },
    "simulation_en": {
      "name": "Simpson's Paradox Visualizer",
      "description": "Toggle between pooled aggregate data (positive upward slope) and age-stratified cohorts. Watch the slopes simultaneously invert to negative slopes within every group!"
    },
    "simulation_es": {
      "name": "Visualizador de la Paradoja de Simpson",
      "description": "Alterna entre datos globales agregados (pendiente ascendente positiva) y cohortes estratificadas por edad. ¡Observa cómo las pendientes se invierten de inmediato a negativas en cada estrato!"
    },
    "interpretation_en": {
      "title": "Bivariate vs Multivariable Comparison",
      "recommendation": "Always adjust for Age. Physical exercise reduces cholesterol by 0.82 mg/dL per weekly hour. The bivariate positive trend was entirely an artifact of confounding.",
      "metrics": [
        {
          "label": "Bivariate Slope (No Age)",
          "note": "β₁ = +0.54 (Deceptive aggregation trap)"
        },
        {
          "label": "Multivariable Slope (+Age)",
          "note": "β₁ = -0.82 (True protective physiological effect)"
        },
        {
          "label": "Age Covariate Slope",
          "note": "β₂ = +1.45 per year of age (Strong confounder)"
        },
        {
          "label": "Model R² Improvement",
          "note": "R² climbs from 0.08 to 0.76"
        }
      ]
    },
    "interpretation_es": {
      "title": "Comparación Bivariada vs Multivariable",
      "recommendation": "Ajusta obligatoriamente por Edad. El ejercicio reduce el colesterol a razón de 0,82 mg/dL por hora semanal. La pendiente positiva inicial era un artefacto puro de confusión.",
      "metrics": [
        {
          "label": "Pendiente Bivariada (Sin Edad)",
          "note": "β₁ = +0,54 (Trampa de agregación espuria)"
        },
        {
          "label": "Pendiente Multivariable (+Edad)",
          "note": "β₁ = -0,82 (Efecto fisiológico protector real)"
        },
        {
          "label": "Efecto de la Variable Edad",
          "note": "β₂ = +1,45 por año de edad (Potente confusor)"
        },
        {
          "label": "Mejora del R² del Modelo",
          "note": "R² aumenta de 0,08 a 0,76"
        }
      ]
    },
    "quiz_en": {
      "question": "What does it indicate when the partial regression coefficient β₁ in a multivariable model has the opposite sign of the bivariate correlation r_xy?",
      "options": [
        "Multicollinearity has destroyed the numerical precision of the matrix inversion",
        "A classic Simpson's Paradox / omitted variable bias: the omitted confounder was masking or reversing the true conditional relationship",
        "The model violates normality of residuals, rendering coefficients invalid",
        "The sample size is insufficient to support multiple predictors"
      ],
      "explanation": "Sharp causal thinking! When controlling for a confounder reverses the sign, it exposes how aggregate data can deceive when baseline confounding paths are open."
    },
    "quiz_es": {
      "question": "¿Qué indica que el coeficiente de regresión parcial β₁ en un modelo multivariable tenga signo opuesto a la correlación bivariada simple r_xy?",
      "options": [
        "Que la multicolinealidad ha corrompido la precisión numérica de la inversión matricial",
        "Una clásica Paradoja de Simpson / sesgo por variable omitida: el confusor no controlado distorsionaba o invertía el vínculo condicional genuino",
        "Que el modelo infringe el supuesto de normalidad residual, invalidando las estimaciones",
        "Que el tamaño de muestra es insuficiente para incorporar múltiples predictores"
      ],
      "explanation": "¡Pensamiento causal riguroso! La inversión de signo al ajustar por un factor de confusión demuestra cómo los datos agregados inducen a conclusiones erróneas si no se cierran los caminos de puerta trasera."
    }
  },
  {
    "id": 10,
    "phase": 2,
    "phaseTitle": "Fase 2: Klassieke Regressie & Diagnostiek",
    "title": "Multicollineariteit & VIF (Variance Inflation Factor)",
    "subtitle": "Wat als voorspellers te sterk met elkaar correleren? Exploderende standaardfouten.",
    "badge": "Klassieke Regressie",
    "case": {
      "title": "Casus: De Hordeloper en Twee Benen",
      "context": "Sprinttijd voorspellen met 'Linkerbeenlengte' én 'Rechterbeenlengte' ($r = 0.99$). De F-toets is $p < 0.0001$, maar beide afzonderlijke benen zijn $p = 0.68$ (niet-significant).",
      "data": [
        {
          "variabele": "Overall Model (F-test)",
          "pWaarde": "< 0.0001 (Significant)"
        },
        {
          "variabele": "Linkerbeen (cm)",
          "pWaarde": "0.681 (Niet significant!?)"
        },
        {
          "variabele": "Rechterbeen (cm)",
          "pWaarde": "0.785 (Niet significant!?)"
        }
      ],
      "question": "Wat is multicollineariteit en hoe signaleert de VIF-score dit gevaar?"
    },
    "theory": {
      "summary": "Wanneer voorspellers onderling sterk correleren, kan OLS de effecten niet scheiden. De standaardfouten exploderen met een factor $\\sqrt{\\text{VIF}}$, waardoor echte effecten statistisch onzichtbaar worden.",
      "keyConcepts": [
        {
          "term": "Variance Inflation Factor (VIF)",
          "desc": "VIF = 1 / (1 - R_j²). Geeft aan hoeveel keer groter de variantie is."
        },
        {
          "term": "Drempelwaarden",
          "desc": "VIF = 1 (ideaal), VIF > 5 (zorgelijk), VIF > 10 (kritiek: model is onbetrouwbaar)."
        }
      ],
      "mathFormula": "\\text{VIF}_j = \\frac{1}{1 - R_j^2} \\quad \\implies \\quad \\text{SE}(\\beta_j) = \\sqrt{\\text{VIF}_j} \\cdot \\text{SE}_{\\text{ideaal}}",
      "formulaExplain": "Bij $r = 0.99$ is $\\text{VIF} = \\frac{1}{1 - 0.99^2} = 50.25 \\approx 50.3$. De standaardfout is $\\sqrt{50.25} \\approx 7.1\\times$ zo breed als zonder collineariteit!"
    },
    "simulation": {
      "type": "multicollinearity_simulator",
      "name": "Multicollineariteit & VIF Simulator",
      "description": "Schuif de correlatie tussen X₁ en X₂ omhoog van 0.0 naar 0.99. Zie de betrouwbaarheidsintervallen exploderen!"
    },
    "interpretation": {
      "title": "Diagnose & Praktijk Oplossing",
      "metrics": [
        {
          "label": "Correlatie Linker/Rechterbeen",
          "value": "r = 0.99",
          "note": "Redundante voorspellers"
        },
        {
          "label": "VIF Score",
          "value": "VIF = 50.3",
          "note": "Kritiek hoog (> 10; SE 7.1x opgeblazen)"
        },
        {
          "label": "Oplossing",
          "value": "Verwijder één variabele",
          "note": "Of neem het gemiddelde"
        }
      ],
      "recommendation": "Verwijder één van de twee benen. De VIF zakt direct naar 1.0 en de overblijvende variabele wordt zeer significant."
    },
    "quiz": {
      "question": "Wat is het voornaamste gevaar van ernstige multicollineariteit (VIF > 15) tussen verklarende variabelen?",
      "options": [
        "De OLS-puntschattingen worden structureel vertekend en verliezen hun consistentie",
        "Standaardfouten worden gigantisch opgeblazen, waardoor betrouwbaarheidsintervallen breed worden en afzonderlijke t-toetsen niet-significant lijken",
        "Het totale verklaringspercentage R² en de globale F-toets van het model storten in naar nul",
        "De residuen vertonen direct sterke seriële autocorrelatie"
      ],
      "correctIndex": 1,
      "explanation": "Meesterlijk! Collineariteit maakt puntschattingen uiterst instabiel en blaast de standaardfouten op (VIF), hoewel het model als geheel vaak wel een hoge en significante R² behoudt."
    },
    "case_en": {
      "title": "Case Study: The Hurdler and Two Legs",
      "context": "A sports biomechanist predicts hurdle sprint speed using Left Leg Length (X₁) and Right Leg Length (X₂) across N = 80 athletes. The two predictors correlate at r = 0.992. Overall model R² is 0.82 (p < 0.001), but both individual t-tests are non-significant (p = 0.38 and p = 0.44).",
      "question": "Why does extreme multicollinearity inflate standard errors and produce erratic, statistically insignificant individual coefficients?"
    },
    "case_es": {
      "title": "Caso de Estudio: El Vallista y las Dos Piernas",
      "context": "Un biomecánico predice la velocidad de atletas en vallas usando la Longitud de la Pierna Izquierda (X₁) y Derecha (X₂) en N = 80 velocistas. La correlación entre ambas es r = 0,992. El R² global es 0,82 (p < 0,001), pero ambos contrastes t individuales resultan no significativos (p = 0,38 y p = 0,44).",
      "question": "¿Por qué la multicolinealidad severa infla los errores estándar y produce coeficientes erráticos y aparentemente no significativos?"
    },
    "theory_en": {
      "summary": "When predictors correlate heavily, OLS struggles to isolate the unique marginal contribution of each variable. Variance Inflation Factor (VIF) measures how much the estimation variance of a coefficient is blown up relative to orthogonal predictors.",
      "formulaExplain": "VIF_j = 1 / (1 - R²_j). Standard error inflates by √VIF. A VIF > 5 signals severe collinearity; VIF > 10 indicates catastrophic multicollinearity.",
      "keyConcepts": [
        {
          "term": "Variance Inflation Factor (VIF)",
          "desc": "Quantifies the inflation of SE(β_j) caused by collinearity with other predictors."
        },
        {
          "term": "Tolerance (1 / VIF)",
          "desc": "Proportion of predictor variance not explained by other predictors in the model."
        },
        {
          "term": "Symptom of Collinearity",
          "desc": "High overall R² and significant F-test, yet individual t-tests are non-significant."
        },
        {
          "term": "Solutions",
          "desc": "Drop redundant predictor, combine into an index (PCA), or apply Ridge regularization."
        }
      ]
    },
    "theory_es": {
      "summary": "Cuando dos predictores correlacionan fuertemente, MCO no puede separar el aporte marginal único de cada variable. El Factor de Inflación de la Varianza (FIV/VIF) cuantifica cuánto se multiplica la varianza del estimador respecto a predictores ortogonales.",
      "formulaExplain": "FIV_j = 1 / (1 - R²_j). El error estándar se infla por un factor √FIV. Un FIV > 5 indica colinealidad seria; FIV > 10 es multicolinealidad crítica.",
      "keyConcepts": [
        {
          "term": "Factor de Inflación Varianza (FIV)",
          "desc": "Mide cuánto se infla el EE(β_j) debido a la colinealidad con el resto de predictores."
        },
        {
          "term": "Tolerancia (1 / FIV)",
          "desc": "Proporción de varianza del predictor que no es explicada por las demás variables."
        },
        {
          "term": "Síntoma Clásico",
          "desc": "R² global muy alto y prueba F significativa, pero contrastes t individuales no significativos."
        },
        {
          "term": "Estrategias de Solución",
          "desc": "Eliminar predictor redundante, promediar en índice sintético (PCA) o regularización Ridge."
        }
      ]
    },
    "simulation_en": {
      "name": "Multicollinearity & VIF Exploder",
      "description": "Slide correlation r₁₂ toward 0.99. Watch the confidence ellipse expand, observe VIF explode to 60+, and see how standard errors balloon out of control!"
    },
    "simulation_es": {
      "name": "Explosión de Multicolinealidad y FIV",
      "description": "Desplaza la correlación r₁₂ hacia 0,99. ¡Observa la dilatación de la elipse de confianza, cómo el FIV se dispara sobre 60 y cómo los errores estándar se descontrolan!"
    },
    "interpretation_en": {
      "title": "Diagnosis & Practical Resolution",
      "recommendation": "VIF = 62.5 exceeds critical threshold 10. Drop one leg variable or average both into 'Total Leg Length'. Standard error instantly contracts by 85%.",
      "metrics": [
        {
          "label": "Correlation r(X₁, X₂)",
          "note": "0.992 (Extreme redundancy)"
        },
        {
          "label": "VIF (Left Leg)",
          "note": "62.5 (Catastrophic multicollinearity)"
        },
        {
          "label": "SE Inflation Factor (√VIF)",
          "note": "7.9x wider confidence intervals"
        },
        {
          "label": "After Dropping One Leg",
          "note": "VIF = 1.0, p < 0.0001 (Pristine precision)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Diagnóstico y Resolución Práctica",
      "recommendation": "El FIV = 62,5 sobrepasa el umbral crítico de 10. Elimina una pierna o promedio en 'Longitud Media'. El error estándar se reduce de inmediato un 85%.",
      "metrics": [
        {
          "label": "Correlación r(X₁, X₂)",
          "note": "0,992 (Redundancia extrema)"
        },
        {
          "label": "FIV (Pierna Izquierda)",
          "note": "62,5 (Multicolinealidad catastrófica)"
        },
        {
          "label": "Factor de Inflación (√FIV)",
          "note": "Intervalos de confianza 7,9 veces más anchos"
        },
        {
          "label": "Tras Eliminar Redundancia",
          "note": "FIV = 1,0, p < 0,0001 (Precisión máxima)"
        }
      ]
    },
    "quiz_en": {
      "question": "What is the primary danger of severe multicollinearity (e.g. VIF > 10) in an OLS regression model?",
      "options": [
        "The OLS coefficient estimates become biased and systematic prediction error increases",
        "The variance of regression coefficients explodes, yielding massive standard errors and erratic, unstable estimates that swing wildly upon minor data perturbations",
        "The overall model R² artificially collapses toward zero",
        "The residuals immediately violate normality and homoscedasticity"
      ],
      "explanation": "Precision thinking! Multicollinearity does not bias estimates (they remain unbiased), but it explodes standard errors and destabilizes individual coefficient values."
    },
    "quiz_es": {
      "question": "¿Cuál es el principal peligro de la multicolinealidad severa (ej. FIV > 10) en un modelo de regresión MCO?",
      "options": [
        "Que los estimadores MCO se vuelven sesgados y el error sistemático de predicción se dispara",
        "Que la varianza de los coeficientes de regresión explota, inflando los errores estándar y generando estimaciones erráticas e hipersensibles a cambios mínimos en los datos",
        "Que el R² global del modelo colapsa artificialmente hacia cero",
        "Que los residuos vulneran inmediatamente los supuestos de normalidad y homocedasticidad"
      ],
      "explanation": "¡Conocimiento riguroso! La multicolinealidad no genera sesgo (los estimadores siguen siendo insesgados), pero infla masivamente los errores estándar y desestabiliza las estimaciones individuales."
    }
  },
  {
    "id": 11,
    "phase": 2,
    "phaseTitle": "Fase 2: Klassieke Regressie & Diagnostiek",
    "title": "Logistische Regressie & Odds Ratios",
    "subtitle": "Binaire uitkomsten (Ja/Nee), de sigmoïde curve en kansenverhoudingen.",
    "badge": "Klassieke Regressie",
    "case": {
      "title": "Casus: Heropname van Hartpatiënten Binnen 30 Dagen",
      "context": "Voorspel of een patiënt binnen 30 dagen opnieuw wordt opgenomen (1 = Ja, 0 = Nee). Gewone OLS geeft kansen van -15% of 120%. Hoe lost logistische regressie dit op?",
      "data": [
        {
          "patient": "P01",
          "leeftijd": 62,
          "hogeBloeddruk": 1,
          "heropname": 1
        },
        {
          "patient": "P02",
          "leeftijd": 45,
          "hogeBloeddruk": 0,
          "heropname": 0
        },
        {
          "patient": "P03",
          "leeftijd": 78,
          "hogeBloeddruk": 1,
          "heropname": 1
        }
      ],
      "question": "Hoe transformeert logistische regressie kansen via de 'logit' linkfunctie naar een prachtige S-curve en wat is een Odds Ratio?"
    },
    "theory": {
      "summary": "De logit linkfunctie $\\ln(p / (1-p))$ transformeert kansen naar een onbegrensde schaal. De inverse is de sigmoïde functie, die garandeert dat voorspelde kansen strikt tussen 0 en 1 blijven. De Odds Ratio is $e^{\\beta_1}$.",
      "keyConcepts": [
        {
          "term": "Odds",
          "desc": "Kans op wel / kans op niet: p / (1 - p)."
        },
        {
          "term": "Odds Ratio (OR)",
          "desc": "e^(β₁). Bij OR = 2.5 zijn de odds 2.5x zo hoog."
        },
        {
          "term": "Cutoff",
          "desc": "Beslisdrempel (bijv. 0.50 of 0.35 voor extra sensitiviteit)."
        }
      ],
      "mathFormula": "\\ln\\left(\\frac{p}{1-p}\\right) = \\beta_0 + \\beta_1 X \\quad \\iff \\quad p = \\frac{1}{1 + e^{-(\\beta_0 + \\beta_1 X)}}",
      "formulaExplain": "Als $\\beta_1 = 0.92$, is de Odds Ratio $\\text{OR} = e^{0.92} = 2.51$."
    },
    "simulation": {
      "type": "logistic_regression_simulator",
      "name": "De Sigmoïde S-curve & Confusion Matrix",
      "description": "Verander de beslisgrens (cutoff van 0.1 tot 0.9) en zie de Confusion Matrix live mee veranderen."
    },
    "interpretation": {
      "title": "Model Output & Medisch Besluit",
      "metrics": [
        {
          "label": "Odds Ratio Hoge Bloeddruk",
          "value": "2.51 (p = 0.004)",
          "note": "2.5x hogere odds op heropname"
        },
        {
          "label": "Beslisgrens monitoring",
          "value": "Cutoff = 0.35",
          "note": "Voor 90% detectie van heropnames"
        }
      ],
      "recommendation": "Patiënten met hypertensie hebben een 2.5x hogere kansverhouding op complicaties."
    },
    "quiz": {
      "question": "Wat is de resulterende Odds Ratio (OR) wanneer de logistische regressiecoëfficiënt van een predictor β = 0 is?",
      "options": [
        "OR = 0 (de gebeurtenis kan onder geen enkele voorwaarde plaatsvinden)",
        "OR = 1.0 (geen effect op de kansverhouding, want e⁰ = 1)",
        "OR = 0.5 (gelijke kansen voor beide vergelijkingsgroepen)",
        "OR is mathematisch onbepaald omdat men niet kan delen door de exponent van nul"
      ],
      "correctIndex": 1,
      "explanation": "Juist! Omdat logistische regressie de log-odds modelleert, is de odds ratio e^β. Voor β = 0 geldt e⁰ = 1, wat duidt op volledige afwezigheid van een effect."
    },
    "case_en": {
      "title": "Case Study: Hospital 30-Day Readmission for Heart Failure Patients",
      "context": "A hospital predicts 30-day readmission (0 = No, 1 = Yes) for N = 500 cardiac patients based on age, ejection fraction, and comorbidities. Linear regression yields nonsensical probabilities like -0.15 and +1.28.",
      "question": "Why is Logistic Regression required for binary outcomes, and how do we interpret Odds Ratios (OR = e^β)?"
    },
    "case_es": {
      "title": "Caso de Estudio: Reingreso Hospitalario a 30 Días en Pacientes Cardíacos",
      "context": "Un hospital modela el reingreso a 30 días (0 = No, 1 = Sí) en N = 500 pacientes con insuficiencia cardíaca según edad y comorbilidades. La regresión lineal genera probabilidades absurdas como -0,15 y +1,28.",
      "question": "¿Por qué es indispensable la Regresión Logística para desenlaces binarios y cómo interpretamos las Odds Ratios (OR = e^β)?"
    },
    "theory_en": {
      "summary": "Logistic regression uses the logit link function ln[p / (1 - p)] = β₀ + β₁X to map predicted probabilities strictly into the interval [0, 1]. Exponentiating slope coefficients yields Odds Ratios: OR = e^β.",
      "formulaExplain": "p(X) = 1 / (1 + e^-(β₀ + β₁X)). If β₁ = 0.405, OR = e^0.405 = 1.50: each unit increase in X increases the odds of the outcome by 50%.",
      "keyConcepts": [
        {
          "term": "Odds vs Probability",
          "desc": "Odds = p / (1 - p). Probability = Odds / (1 + Odds)."
        },
        {
          "term": "Odds Ratio (OR = e^β)",
          "desc": "Ratio of odds between two groups. OR > 1 implies increased risk; OR < 1 indicates protective effect."
        },
        {
          "term": "Sigmoid S-Curve",
          "desc": "S-shaped curve ensuring predicted probabilities stay strictly between 0 and 1."
        },
        {
          "term": "Log-Likelihood",
          "desc": "Estimated via Maximum Likelihood Estimation (MLE) rather than ordinary least squares."
        }
      ]
    },
    "theory_es": {
      "summary": "La regresión logística utiliza la función de enlace logit ln[p / (1 - p)] = β₀ + β₁X para restringir las probabilidades predichas al intervalo [0, 1]. Al exponenciar los coeficientes de regresión se obtienen Odds Ratios: OR = e^β.",
      "formulaExplain": "p(X) = 1 / (1 + e^-(β₀ + β₁X)). Si β₁ = 0,405, OR = e^0,405 = 1,50: cada unidad adicional en X incrementa las chances (momios) del suceso en un 50%.",
      "keyConcepts": [
        {
          "term": "Odds vs Probabilidad",
          "desc": "Odds = p / (1 - p). Probabilidad = Odds / (1 + Odds)."
        },
        {
          "term": "Odds Ratio (OR = e^β)",
          "desc": "Razón de momios entre grupos. OR > 1 implica mayor riesgo; OR < 1 efecto protector."
        },
        {
          "term": "Curva Sigmoide",
          "desc": "Curva en forma de S que garantiza que las probabilidades estimadas residan estrictamente entre 0 y 1."
        },
        {
          "term": "Máxima Verosimilitud (MLE)",
          "desc": "Se estima optimizando la función de verosimilitud en lugar de mínimos cuadrados ordinarios."
        }
      ]
    },
    "simulation_en": {
      "name": "The Sigmoid S-Curve & Confusion Matrix",
      "description": "Shift the decision threshold (cutoff). Observe how sensitivity and specificity trade off, and watch the ROC curve trace your diagnostic choices!"
    },
    "simulation_es": {
      "name": "Curva Sigmoide y Matriz de Confusión en Vivo",
      "description": "Modifica el umbral de decisión. ¡Observa el dilema entre sensibilidad y especificidad y comprueba cómo la curva ROC mapea tus elecciones diagnósticas!"
    },
    "interpretation_en": {
      "title": "Model Output & Clinical Decision",
      "recommendation": "Prior myocardial infarction exhibits OR = 2.45 (p = 0.002). Enroll these high-risk patients in intensive post-discharge telemedicine programs.",
      "metrics": [
        {
          "label": "Logit Slope β₁ (Prior MI)",
          "note": "+0.896 (p = 0.002)"
        },
        {
          "label": "Odds Ratio (e^0.896)",
          "note": "OR = 2.45 (145% higher odds of readmission)"
        },
        {
          "label": "Area Under ROC (AUC)",
          "note": "0.84 (Strong diagnostic discrimination)"
        },
        {
          "label": "Optimal Cutoff",
          "note": "p = 0.35 (Sensitivity 82%, Specificity 78%)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Salida del Modelo y Decisión Clínica",
      "recommendation": "El infarto previo exhibe una OR = 2,45 (p = 0,002). Incluye a estos pacientes de alto riesgo en programas intensivos de telemedicina post-alta.",
      "metrics": [
        {
          "label": "Pendiente Logit β₁ (Infarto)",
          "note": "+0,896 (p = 0,002)"
        },
        {
          "label": "Odds Ratio (e^0,896)",
          "note": "OR = 2,45 (145% más probabilidades relativas de reingreso)"
        },
        {
          "label": "Área bajo la Curva ROC (AUC)",
          "note": "0,84 (Elevada capacidad discriminatoria)"
        },
        {
          "label": "Umbral Óptimo",
          "note": "p = 0,35 (Sensibilidad 82%, Especificidad 78%)"
        }
      ]
    },
    "quiz_en": {
      "question": "What is the resulting Odds Ratio (OR) when the logistic regression slope coefficient β₁ is equal to +0.693?",
      "options": [
        "OR = 0.693: risk increases by 69.3%",
        "OR = e^0.693 ≈ 2.00: the odds of the outcome double for each 1-unit increase in X",
        "OR = 1 / 0.693 ≈ 1.44: the risk ratio is 1.44",
        "OR = 0.50: the probability of the outcome is halved"
      ],
      "explanation": "Spot-on! In logistic regression, OR = e^β. Because e^0.693 ≈ 2.00, each unit increase in predictor X exactly doubles the odds."
    },
    "quiz_es": {
      "question": "¿Cuál es la Odds Ratio (OR) resultante cuando el coeficiente logit de regresión logística β₁ es igual a +0,693?",
      "options": [
        "OR = 0,693: el riesgo relativo aumenta exactamente un 69,3%",
        "OR = e^0,693 ≈ 2,00: las chances (momios) del desenlace se duplican por cada unidad adicional en X",
        "OR = 1 / 0,693 ≈ 1,44: la razón de riesgo poblacional es de 1,44",
        "OR = 0,50: la probabilidad del evento se reduce exactamente a la mitad"
      ],
      "explanation": "¡Exacto! En regresión logística, OR = e^β. Puesto que e^0,693 ≈ 2,00, cada unidad de aumento en el predictor duplica exactamente las odds del desenlace."
    }
  },
  {
    "id": 12,
    "phase": 2,
    "phaseTitle": "Fase 2: Klassieke Regressie & Diagnostiek",
    "title": "Regularisatie: Ridge (L₂) & Lasso (L₁)",
    "subtitle": "Overfitting temmen, coëfficiënten krimpen en automatische feature selectie.",
    "badge": "Klassieke Regressie",
    "case": {
      "title": "Casus: Klantverloop met 50 Marketingvariabelen op N = 60",
      "context": "Een model met 50 variabelen op 60 klanten behaalt $R^2 = 0.98$ op training, maar $R^2 = 0.08$ op nieuwe klanten (catastrofale overfitting). Hoe temmen straftermen dit?",
      "data": [
        {
          "methode": "Standaard OLS",
          "testR2": "0.08 (Drama)",
          "actieveVars": "50"
        },
        {
          "methode": "Ridge (L2)",
          "testR2": "0.69 (Stabiel)",
          "actieveVars": "50 (gekrompen)"
        },
        {
          "methode": "Lasso (L1)",
          "testR2": "0.72 (Optimaal)",
          "actieveVars": "6 (geselecteerd!)"
        }
      ],
      "question": "Waarom kan Lasso variabelen exact op nul zetten en Ridge niet?"
    },
    "theory": {
      "summary": "Regularisatie telt een straf $\\lambda$ op voor grote coëfficiënten. Ridge ($L_2$) straft $\\sum \\beta_j^2$ (krimpt evenredig). Lasso ($L_1$) straft $\\sum |\\beta_j|$ en zet irrelevante variabelen exact op 0.",
      "keyConcepts": [
        {
          "term": "Ridge (L₂)",
          "desc": "Krimpt alle coëfficiënten richting 0; ideaal bij multicollineariteit."
        },
        {
          "term": "Lasso (L₁)",
          "desc": "Zet coëfficiënten exact op nul; automatische feature selectie."
        },
        {
          "term": "Penalty (λ)",
          "desc": "Bepaalt de sterkte van de krimp, gekozen via cross-validatie."
        }
      ],
      "mathFormula": "\\text{Lasso: } \\min \\sum e_i^2 + \\lambda \\sum |\\beta_j| \\quad \\text{vs} \\quad \\text{Ridge: } + \\lambda \\sum \\beta_j^2",
      "formulaExplain": "Lasso levert spaarzame, interpreteerbare modellen op."
    },
    "simulation": {
      "type": "regularization_trace_simulator",
      "name": "Ridge vs Lasso Coëfficiënten Krimp Lab",
      "description": "Schuif de penalty parameter λ omhoog en zie hoe Lasso variabelen uitschakelt naar nul."
    },
    "interpretation": {
      "title": "Modelvergelijking & Conclusie",
      "metrics": [
        {
          "label": "Beste Lasso Penalty (λ)",
          "value": "0.22",
          "note": "Bepaald via Kruisvalidatie"
        },
        {
          "label": "Geselecteerde variabelen",
          "value": "6 van de 50",
          "note": "Alleen de echte signaalgevers"
        }
      ],
      "recommendation": "Kies Lasso als je vermoedt dat slechts enkele variabelen er echt toe doen."
    },
    "quiz": {
      "question": "Wat is het unieke voordeel van Lasso (L₁) regularisatie boven Ridge (L₂) regularisatie?",
      "options": [
        "Lasso levert altijd een gesloten analytische OLS-oplossing zonder numerieke optimalisatie",
        "Lasso zet coëfficiënten van minder relevante variabelen exact op nul (automatische feature selectie dankzij de hoekige L₁-norm)",
        "Lasso is wiskundig immuun voor multicollineariteit wanneer variabelen perfect gecorreleerd zijn",
        "Lasso minimaliseert de conditionele verwachting zonder afhankelijkheid van de strafparameter λ"
      ],
      "correctIndex": 1,
      "explanation": "Uitstekend! De ruitvormige L₁-contouren raken de OLS-ellipsen op de assen, waardoor irrelevante coëfficiënten exact nul worden. Ridge krimpt ze naar nul maar behoudt alle variabelen."
    },
    "case_en": {
      "title": "Case Study: Customer Churn with 50 Marketing Variables on N = 60",
      "context": "A SaaS subscription company wants to predict customer churn. They have N = 60 clients but measured P = 50 behavioral metrics. Standard OLS severely overfits (R² = 0.96 in-sample, but R² = -0.42 on new validation customers).",
      "question": "How do Ridge (L₂) and Lasso (L₁) regularization prevent overfitting, and which one enforces sparse feature selection?"
    },
    "case_es": {
      "title": "Caso de Estudio: Abandono de Clientes con 50 Variables en N = 60",
      "context": "Una empresa SaaS modela la cancelación de clientes (churn). Dispone de N = 60 cuentas pero mide P = 50 variables de comportamiento. MCO clásico sobreajusta salvajemente (R² = 0,96 en entrenamiento, pero R² = -0,42 en validación externa).",
      "question": "¿Cómo previenen el sobreajuste las regularizaciones Ridge (L₂) y Lasso (L₁), y cuál de ellas realiza selección automática de variables?"
    },
    "theory_en": {
      "summary": "Regularization penalizes large coefficients by adding a shrinkage penalty λ to the loss function. Ridge (L₂) shrinks coefficients smoothly toward zero; Lasso (L₁) uses absolute values, driving irrelevant coefficients exactly to zero for automated feature selection.",
      "formulaExplain": "Ridge Loss: SSE + λ·Σβ_j². Lasso Loss: SSE + λ·Σ|β_j|. Tuning penalty λ via k-fold cross-validation balances the fundamental bias-variance tradeoff.",
      "keyConcepts": [
        {
          "term": "L₂ Regularization (Ridge)",
          "desc": "Shrinks correlated coefficients together. Retains all predictors with shrunk weights."
        },
        {
          "term": "L₁ Regularization (Lasso)",
          "desc": "Produces sparse models: forces uninformative coefficients to exactly 0 (automated variable selection)."
        },
        {
          "term": "Elastic Net",
          "desc": "Hybrid combination of L₁ and L₂ penalties to handle groups of correlated predictors."
        },
        {
          "term": "Cross-Validation (CV)",
          "desc": "Rotational data splitting to identify the optimal penalty parameter λ_min."
        }
      ]
    },
    "theory_es": {
      "summary": "La regularización penaliza coeficientes excesivos agregando una penalización por contracción λ a la función de pérdida. Ridge (L₂) contrae los coeficientes suavemente hacia cero; Lasso (L₁) emplea valores absolutos, anulando a cero los coeficientes irrelevantes.",
      "formulaExplain": "Pérdida Ridge: SCE + λ·Σβ_j². Pérdida Lasso: SCE + λ·Σ|β_j|. El ajuste de λ mediante validación cruzada equilibra el dilema fundamental sesgo-varianza.",
      "keyConcepts": [
        {
          "term": "Regularización L₂ (Ridge)",
          "desc": "Contrae coeficientes colineales en conjunto. Conserva todas las variables con magnitudes atenuadas."
        },
        {
          "term": "Regularización L₁ (Lasso)",
          "desc": "Produce modelos dispersos (sparse): fija coeficientes irrelevantes exactamente en 0 (selección automática)."
        },
        {
          "term": "Elastic Net",
          "desc": "Combinación híbrida de L₁ y L₂ que maneja eficazmente grupos de variables correlacionadas."
        },
        {
          "term": "Validación Cruzada (CV)",
          "desc": "Técnica de partición rotativa para seleccionar el parámetro de penalización óptimo λ_min."
        }
      ]
    },
    "simulation_en": {
      "name": "Ridge vs Lasso Coefficient Shrinkage Lab",
      "description": "Increase regularization strength λ. Watch how Ridge compresses coefficients asymptotically while Lasso drives coefficients to zero one by one!"
    },
    "simulation_es": {
      "name": "Laboratorio de Contracción de Coeficientes: Ridge vs Lasso",
      "description": "Aumenta la fuerza de penalización λ. ¡Observa cómo Ridge atenúa suavemente todos los coeficientes mientras Lasso los anula secuencialmente a cero!"
    },
    "interpretation_en": {
      "title": "Model Comparison & Practical Conclusion",
      "recommendation": "Deploy Lasso with λ = 0.14. It eliminated 44 noise metrics and preserved the 6 critical predictors, delivering R² = 0.68 on unseen validation data.",
      "metrics": [
        {
          "label": "Optimal Penalty (λ)",
          "note": "0.14 (Selected via 10-fold CV)"
        },
        {
          "label": "Active Predictors in Lasso",
          "note": "6 out of 50 (44 coefficients zeroed out)"
        },
        {
          "label": "Out-of-Sample R² (OLS)",
          "note": "-0.42 (Catastrophic overfitting)"
        },
        {
          "label": "Out-of-Sample R² (Lasso)",
          "note": "+0.68 (Superb generalizability)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Comparación de Modelos y Conclusión",
      "recommendation": "Implementa Lasso con λ = 0,14. Descartó 44 variables de ruido y conservó los 6 predictores cruciales, logrando un R² = 0,68 en datos de validación.",
      "metrics": [
        {
          "label": "Penalización Óptima (λ)",
          "note": "0,14 (Seleccionada mediante CV de 10 pliegues)"
        },
        {
          "label": "Predictores Activos en Lasso",
          "note": "6 de 50 (44 coeficientes anulados a 0)"
        },
        {
          "label": "R² Fuera de Muestra (MCO)",
          "note": "-0,42 (Sobreajuste catastrófico)"
        },
        {
          "label": "R² Fuera de Muestra (Lasso)",
          "note": "+0,68 (Excelente capacidad de generalización)"
        }
      ]
    },
    "quiz_en": {
      "question": "What is the unique mathematical advantage of Lasso (L₁) regularization compared to Ridge (L₂)?",
      "options": [
        "Lasso always achieves lower training error than OLS",
        "Because of its diamond-shaped L₁ constraint geometry, Lasso forces uninformative coefficients to exactly zero, performing automated feature selection",
        "Lasso provides closed-form matrix solutions, eliminating the need for iterative numerical solvers",
        "Lasso eliminates heteroscedasticity without requiring robust standard errors"
      ],
      "explanation": "Haute statistical expertise! The diamond corners of the L₁ norm intersect objective contours along coordinate axes, zeroing out non-essential parameters."
    },
    "quiz_es": {
      "question": "¿Cuál es la ventaja matemática distintiva de la regularización Lasso (L₁) frente a Ridge (L₂)?",
      "options": [
        "Que Lasso logra siempre un error de entrenamiento inferior al de MCO",
        "Que debido a la geometría romboidal de la norma L₁, Lasso fuerza coeficientes no informativos exactamente a cero, realizando selección automática de variables",
        "Que Lasso admite soluciones matriciales cerradas sin requerir algoritmos iterativos",
        "Que Lasso neutraliza la heterocedasticidad sin recurrir a errores estándar robustos"
      ],
      "explanation": "¡Conocimiento de alta precisión! Los vértices angulares de la restricción L₁ intersecan el contorno de verosimilitud en los ejes coordenados, fijando coeficientes irrelevantes exactamente en 0."
    }
  },
  {
    "id": 13,
    "phase": 3,
    "phaseTitle": "Fase 3: Mixed Models — De Praktische Sweet Spot",
    "title": "Geclusterde Data & Het Falen van Standaard OLS",
    "subtitle": "Waarom gewone regressie faalt bij geneste data en de Intraclass Correlatie (ICC).",
    "badge": "Mixed Models (Sweet Spot)",
    "case": {
      "title": "Casus: Toetsscores over 20 Verschillende Basisscholen",
      "context": "600 leerlingen verdeeld over 20 scholen. Pooled OLS geeft $p = 0.0004$. Maar leerlingen binnen dezelfde school lijken op elkaar. Is deze p-waarde echt betrouwbaar?",
      "data": [
        {
          "analyse": "Pooled OLS (Onafhankelijk aangenomen)",
          "se": "0.082",
          "pWaarde": "0.0004 (Vals alarm!)"
        },
        {
          "analyse": "Cluster-gecorrigeerd (ICC)",
          "se": "0.215",
          "pWaarde": "0.084 (Niet significant!)"
        }
      ],
      "question": "Waarom lijken leerlingen binnen dezelfde school op elkaar, en hoe leidt het negeren van clusters tot schijnprecisie?"
    },
    "theory": {
      "summary": "In de praktijk is data vaak genest (patiënten bij artsen, leerlingen in scholen). Standaard OLS negeert deze afhankelijkheid en onderschat de standaardfouten met een factor $\\sqrt{1 + (m-1)\\text{ICC}}$.",
      "keyConcepts": [
        {
          "term": "Intraclass Correlation (ICC)",
          "desc": "Aandeel van totale variantie tussen clusters: σ²_tussen / (σ²_tussen + σ²_binnen)."
        },
        {
          "term": "Schijnprecisie",
          "desc": "Standaardfouten lijken tot 3x te klein, met een lawine aan Type I fouten tot gevolg."
        }
      ],
      "mathFormula": "\\text{ICC} = \\frac{\\sigma^2_{\\text{school}}}{\\sigma^2_{\\text{school}} + \\sigma^2_{\\text{leerling}}} \\quad \\implies \\quad \\text{Design Effect} = 1 + (m - 1)\\text{ICC}",
      "formulaExplain": "Als ICC = 0.30 en $m = 30$, is de variantie-inflatie $1 + 29 \\times 0.30 = 9.7$!"
    },
    "simulation": {
      "type": "cluster_icc_simulator",
      "name": "Cluster Effect & ICC Simulator",
      "description": "Verhoog de ICC van 0.0 naar 0.60. Zie hoe scholen uit elkaar drijven en de geclusterde SE toeneemt."
    },
    "interpretation": {
      "title": "Methodologisch Oordeel",
      "metrics": [
        {
          "label": "Berekende ICC",
          "value": "0.28 (28%)",
          "note": "28% van variantie zit tussen scholen"
        },
        {
          "label": "Reële Standaardfout",
          "value": "SE = 0.215",
          "note": "Na rekening houden met clusters"
        }
      ],
      "recommendation": "Gebruik nooit gewone OLS wanneer ICC > 0.05. Stap direct over naar Linear Mixed Models."
    },
    "quiz": {
      "question": "Wat is het grootste risico wanneer hiërarchisch geclusterde data geanalyseerd wordt met standaard OLS-regressie?",
      "options": [
        "OLS overschat de tussen-cluster variantie, waardoor geschatte hellingen structureel te steil worden",
        "Standaardfouten worden dramatisch te klein geschat door schending van de onafhankelijkheidsaanname, wat leidt tot massale Type I fouten (schijnprecisie)",
        "De Intraclass Correlatiecoëfficiënt (ICC) wordt wiskundig negatief",
        "De schatting faalt omdat OLS vereist dat elk cluster exact hetzelfde aantal observaties telt"
      ],
      "correctIndex": 1,
      "explanation": "Helemaal goed! OLS behandelt afhankelijke observaties binnen clusters als onafhankelijke bewijspunten (pseudoreplicatie), waardoor standaardfouten te klein worden en toeval als significant wordt bestempeld."
    },
    "case_en": {
      "title": "Case Study: Test Scores Across 20 Different Primary Schools",
      "context": "An educational ministry analyzes math exam scores across N = 800 students nested in J = 20 distinct schools. Standard OLS reports a textbook study time effect with p = 0.0001. However, children within the same school share teachers, socioeconomic context, and grading culture.",
      "question": "Why does pooled OLS fail on clustered hierarchical data, and what is the Intraclass Correlation Coefficient (ICC)?"
    },
    "case_es": {
      "title": "Caso de Estudio: Puntuaciones en Exámenes en 20 Colegios",
      "context": "Un ministerio de educación analiza notas de matemáticas en N = 800 alumnos agrupados en J = 20 centros escolares distintos. MCO agregado reporta un efecto del tiempo de estudio con p = 0,0001. No obstante, los alumnos del mismo centro comparten profesorado y entorno socioeconómico.",
      "question": "¿Por qué fracasa MCO agrupado en datos jerárquicos y qué representa el Coeficiente de Correlación Intraclase (CCI)?"
    },
    "theory_en": {
      "summary": "Clustering violates the independence assumption of OLS. Intraclass Correlation (ICC = τ² / (τ² + σ²)) measures the proportion of outcome variance attributable to differences between groups. When ICC > 0, pooled OLS drastically underestimates standard errors, generating spurious precision (false positives).",
      "formulaExplain": "Design Effect: Deff = 1 + (m - 1)·ICC. Even a modest ICC = 0.15 with cluster size m = 40 produces Deff = 6.85, meaning true standard errors are √6.85 = 2.62 times larger than OLS reports!",
      "keyConcepts": [
        {
          "term": "Intraclass Correlation (ICC)",
          "desc": "Proportion of total outcome variance lying between clusters (τ² / (τ² + σ²))."
        },
        {
          "term": "Pseudoreplication",
          "desc": "Treating clustered dependent observations as if they were independent sample points."
        },
        {
          "term": "Design Effect (Deff)",
          "desc": "Factor by which estimation variance must be multiplied to correct for clustering."
        },
        {
          "term": "Effective Sample Size (N_eff)",
          "desc": "N_eff = N / Deff. The true amount of independent statistical information."
        }
      ]
    },
    "theory_es": {
      "summary": "El agrupamiento viola el supuesto de observaciones independientes en MCO. La Correlación Intraclase (CCI = τ² / (τ² + σ²)) cuantifica la fracción de varianza total atribuible a diferencias entre grupos. Con CCI > 0, MCO subestima masivamente los errores estándar, produciendo significación espuria.",
      "formulaExplain": "Efecto de Diseño: Deff = 1 + (m - 1)·CCI. Un CCI de apenas 0,15 con clústeres de m = 40 genera Deff = 6,85: ¡los verdaderos errores estándar son √6,85 = 2,62 veces mayores que los reportados por MCO!",
      "keyConcepts": [
        {
          "term": "Correlación Intraclase (CCI)",
          "desc": "Proporción de la varianza total explicada por diferencias entre grupos (τ² / (τ² + σ²))."
        },
        {
          "term": "Pseudorreplicación",
          "desc": "Tratar observaciones dependientes y agrupadas como si fuesen unidades independientes."
        },
        {
          "term": "Efecto de Diseño (Deff)",
          "desc": "Factor por el cual debe inflarse la varianza para corregir el agrupamiento."
        },
        {
          "term": "Tamaño Muestral Efectivo (N_eff)",
          "desc": "N_eff = N / Deff. La cantidad real de información estadística independiente."
        }
      ]
    },
    "simulation_en": {
      "name": "Cluster Effect & ICC Simulator",
      "description": "Dial up the between-school variance τ². Watch how observations clump together within schools and see the true standard error explode relative to naive OLS!"
    },
    "simulation_es": {
      "name": "Simulador de Efecto Clúster y CCI",
      "description": "Incrementa la varianza entre escuelas τ². ¡Comprueba cómo los datos se agrupan en cada colegio y observa cómo el verdadero error estándar se dispara frente a MCO ingenuo!"
    },
    "interpretation_en": {
      "title": "Methodological Diagnosis",
      "recommendation": "ICC = 0.32 confirms severe clustering. Standard OLS is invalid. Adopt a Linear Mixed Model with random school intercepts to prevent false policy conclusions.",
      "metrics": [
        {
          "label": "Intraclass Correlation (ICC)",
          "note": "0.32 (High clustering: 32% variance at school level)"
        },
        {
          "label": "Design Effect (Deff)",
          "note": "13.48 (Naive OLS standard errors are 3.67x too small!)"
        },
        {
          "label": "Naive OLS p-value",
          "note": "p = 0.0001 (Spurious precision / false discovery)"
        },
        {
          "label": "Cluster-Adjusted p-value",
          "note": "p = 0.12 (Correctly non-significant)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Diagnóstico Metodológico",
      "recommendation": "El CCI = 0,32 confirma un agrupamiento severo. MCO ordinario queda invalidado. Adopta un Modelo Lineal Mixto con interceptos aleatorios para evitar conclusiones erróneas.",
      "metrics": [
        {
          "label": "Correlación Intraclase (CCI)",
          "note": "0,32 (El 32% de la variabilidad reside entre escuelas)"
        },
        {
          "label": "Efecto de Diseño (Deff)",
          "note": "13,48 (¡Los errores estándar de MCO son 3,67 veces más pequeños de lo real!)"
        },
        {
          "label": "Valor p de MCO Ingenuo",
          "note": "p = 0,0001 (Precisión espuria / falso descubrimiento)"
        },
        {
          "label": "Valor p Ajustado por Clúster",
          "note": "p = 0,12 (Correctamente no significativo)"
        }
      ]
    },
    "quiz_en": {
      "question": "What is the primary risk when fitting standard pooled OLS to hierarchically clustered data with a high ICC?",
      "options": [
        "OLS point estimates β̂ become biased and overestimate the true slope systematically",
        "OLS severely underestimates the standard errors of coefficients, producing artificially narrow confidence intervals and inflated false-positive significance (spurious precision)",
        "The model automatically generates perfect collinearity between clusters",
        "Residuals become completely non-normal, preventing parameter estimation"
      ],
      "explanation": "Profound insight! Pooled OLS mistakes repeated cluster measurements for independent data points, underestimating standard errors by factors of 2 to 5."
    },
    "quiz_es": {
      "question": "¿Cuál es el riesgo crítico de aplicar MCO agrupado ordinario a datos con estructura jerárquica y alto CCI?",
      "options": [
        "Que los coeficientes puntuales β̂ se vuelven sistemáticamente sesgados",
        "Que MCO subestima severamente los errores estándar, produciendo intervalos de confianza artificialmente estrechos y falsos descubrimientos estadísticos (precisión ilusoria)",
        "Que el modelo genera automáticamente colinealidad exacta entre grupos",
        "Que los residuos vulneran la normalidad, impidiendo el cálculo de parámetros"
      ],
      "explanation": "¡Conocimiento de nivel maestro! MCO agrupado confunde medidas repetidas con información independiente, reduciendo artificialmente los errores estándar entre 2 y 5 veces."
    }
  },
  {
    "id": 14,
    "phase": 3,
    "phaseTitle": "Fase 3: Mixed Models — De Praktische Sweet Spot",
    "title": "Linear Mixed Models I: Random Intercepts",
    "subtitle": "Vaste effecten vs willekeurige effecten en het magische fenomeen 'Shrinkage'.",
    "badge": "Mixed Models (Sweet Spot)",
    "case": {
      "title": "Casus: Leertijd vs Cijfer met School-Specifieke Startniveaus",
      "context": "Elke school heeft een ander startniveau (van 5.0 tot 7.5), maar op elke school levert een uur studeren ongeveer +0.4 punt op. We willen één algemeen leereffect, maar elke school haar eigen intercept.",
      "data": [
        {
          "school": "School A",
          "startNiveau": "7.4",
          "helling": "+0.41"
        },
        {
          "school": "School B",
          "startNiveau": "6.2",
          "helling": "+0.39"
        },
        {
          "school": "Kleine School D (3 lln)",
          "startNiveau": "8.5",
          "gekrompenNaar": "6.6 (Shrinkage!)"
        }
      ],
      "question": "Hoe splitst een Random Intercept Model de werkelijkheid op in Vaste Effecten en Willekeurige Effecten?"
    },
    "theory": {
      "summary": "In een Random Intercept model splitsen we het intercept in een vast populatiegemiddelde $\\beta_0$ en een unieke afwijking per cluster $u_{0j} \\sim \\mathcal{N}(0, \\sigma^2_{u0})$. Dankzij Empirical Bayes Shrinkage worden kleine clusters behoedzaam naar het centrale gemiddelde getrokken.",
      "keyConcepts": [
        {
          "term": "Fixed Effect (β₁)",
          "desc": "Het gemiddelde effect over de gehele populatie (+0.40 per uur)."
        },
        {
          "term": "Random Intercept (u₀ⱼ)",
          "desc": "Cluster-specifieke afwijking van het startniveau."
        },
        {
          "term": "Shrinkage",
          "desc": "Kleine groepen met weinig data leunen meer op het algehele gemiddelde."
        }
      ],
      "mathFormula": "Y_{ij} = (\\beta_0 + u_{0j}) + \\beta_1 X_{ij} + \\epsilon_{ij} \\quad \\text{met } u_{0j} \\sim \\mathcal{N}(0, \\sigma^2_{u0})",
      "formulaExplain": "We schatten slechts één variantieparameter $\\sigma^2_{u0}$ in plaats van 20 afzonderlijke dummies."
    },
    "simulation": {
      "type": "random_intercept_simulator",
      "name": "Random Intercept & Shrinkage Visualizer",
      "description": "Bekijk de parallelle regressielijnen per school. Verschuif de clustervariantie en zie shrinkage in actie."
    },
    "interpretation": {
      "title": "Statsmodels / R (lme4) Output",
      "metrics": [
        {
          "label": "Fixed Effect: Leertijd (β₁)",
          "value": "+0.405 (p < 0.001)",
          "note": "Zuiver overkoepelend leereffect"
        },
        {
          "label": "Random Effect Var(u₀)",
          "value": "σ²_u₀ = 1.42",
          "note": "Variatie in startniveau tussen scholen"
        }
      ],
      "recommendation": "Geeft een zuivere schatting van het leereffect mét respect voor startverschillen."
    },
    "quiz": {
      "question": "Wat gebeurt er dankzij 'shrinkage' (partial pooling) met een cluster of school waar toevallig slechts 2 observaties zijn gemeten?",
      "options": [
        "Het cluster wordt behandeld als een extreme uitschieter en krijgt een afzonderlijke dummy-parameter",
        "Haar geschatte willekeurige intercept wordt sterk richting het overkoepelende populatiegemiddelde (grand mean) getrokken",
        "De residuele variantie binnen dat specifieke cluster wordt gelijkgesteld aan nul",
        "Haar geschatte helling wordt geforceerd om exact de maximale fixed-effect waarde aan te nemen"
      ],
      "correctIndex": 1,
      "explanation": "Exact! Bij kleine steekproeven is de empirische data lawaaierig; het mixed model vertrouwt meer op de overkoepelende populatieverdeling en 'krimpt' de schatting naar het centrum."
    },
    "case_en": {
      "title": "Case Study: Study Time vs Grades with School-Specific Baselines",
      "context": "Continuing the educational dataset: schools vary dramatically in baseline achievement due to neighborhood funding. A naive regression forces all schools through a single common intercept, while fixed dummy variables consume 19 degrees of freedom.",
      "question": "How does a Random Intercept model combine group-specific baselines with shrinkage (partial pooling) to achieve optimal estimation?"
    },
    "case_es": {
      "title": "Caso de Estudio: Tiempo de Estudio y Nota con Puntos de Partida Escolares",
      "context": "En el conjunto educativo anterior: los colegios difieren fuertemente en su nivel basal debido a recursos del distrito. Una regresión agregada fuerza a todos por el mismo intercepto, mientras que variables fijas consumen 19 grados de libertad.",
      "question": "¿Cómo combina un modelo de Intercepto Aleatorio los niveles basales por grupo con la contracción (partial pooling) para lograr estimaciones óptimas?"
    },
    "theory_en": {
      "summary": "A Random Intercept model allows each group j to have its own baseline intercept (β₀ + u₀ⱼ), where u₀ⱼ ~ N(0, τ²), while sharing a common fixed slope β₁. Shrinkage (partial pooling) pulls small or noisy clusters toward the grand mean, preventing overfitting.",
      "formulaExplain": "Y_ij = (β₀ + u_0j) + β₁·X_ij + ε_ij. The Best Linear Unbiased Predictor (BLUP) shrinks school intercepts toward the grand mean proportionally to sample size and noise.",
      "keyConcepts": [
        {
          "term": "Fixed Effects (β₀, β₁)",
          "desc": "Population-average parameters common to all units."
        },
        {
          "term": "Random Intercept (u_0j)",
          "desc": "Cluster-specific deviation from the global intercept: u_0j ~ N(0, τ²)."
        },
        {
          "term": "Partial Pooling (Shrinkage)",
          "desc": "Shrinks unreliable group estimates toward the overall mean; small clusters shrink most."
        },
        {
          "term": "REML Estimation",
          "desc": "Restricted Maximum Likelihood: accounts for degrees of freedom lost estimating fixed effects."
        }
      ]
    },
    "theory_es": {
      "summary": "Un modelo de Intercepto Aleatorio permite que cada grupo j posea su propio punto de partida (β₀ + u₀ⱼ), donde u₀ⱼ ~ N(0, τ²), compartiendo una pendiente fija común β₁. La contracción (partial pooling) atrae a los grupos pequeños o ruidosos hacia la media global, evitando el sobreajuste.",
      "formulaExplain": "Y_ij = (β₀ + u_0j) + β₁·X_ij + ε_ij. El Mejor Predictor Lineal Insesgado (BLUP) contrae los interceptos hacia la media poblacional según el tamaño muestral y la varianza residual.",
      "keyConcepts": [
        {
          "term": "Efectos Fijos (β₀, β₁)",
          "desc": "Parámetros promedio poblacionales comunes a todas las unidades."
        },
        {
          "term": "Intercepto Aleatorio (u_0j)",
          "desc": "Desviación del grupo j respecto al intercepto global: u_0j ~ N(0, τ²)."
        },
        {
          "term": "Contracción (Shrinkage)",
          "desc": "Atrae estimaciones ruidosas hacia la media global; los clústeres con pocas observaciones son los que más se contraen."
        },
        {
          "term": "Estimación REML",
          "desc": "Máxima Verosimilitud Restringida: corrige la pérdida de grados de libertad debida a los efectos fijos."
        }
      ]
    },
    "simulation_en": {
      "name": "Random Intercept & Shrinkage Visualizer",
      "description": "Compare No Pooling (separate OLS per school), Complete Pooling (one naive line), and Partial Pooling (Mixed Model). Watch how small sample sizes shrink toward the global line!"
    },
    "simulation_es": {
      "name": "Visualizador de Intercepto Aleatorio y Contracción",
      "description": "Compara Sin Agrupamiento (MCO por colegio), Agrupamiento Total (una sola recta) y Agrupamiento Parcial (Modelo Mixto). ¡Comprueba cómo los colegios pequeños se contraen hacia la media!"
    },
    "interpretation_en": {
      "title": "Linear Mixed Model (Statsmodels / lme4) Output",
      "recommendation": "Study time gains an estimated +0.22 grade points per hour (p = 0.003). School baseline variance τ = 0.84 explains between-school disparities without sacrificing degrees of freedom.",
      "metrics": [
        {
          "label": "Fixed Slope β₁ (Hours)",
          "note": "+0.22 (p = 0.003, Correctly estimated standard error)"
        },
        {
          "label": "Between-School SD (τ)",
          "note": "0.84 grade points"
        },
        {
          "label": "Residual SD (σ)",
          "note": "0.58 grade points"
        },
        {
          "label": "AIC Comparison vs OLS",
          "note": "ΔAIC = -142.6 (Massive statistical superiority)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Salida del Modelo Mixto (Statsmodels / lme4)",
      "recommendation": "El tiempo de estudio aporta +0,22 puntos por hora (p = 0,003). La dispersión entre centros τ = 0,84 explica las desigualdades basales preservando grados de libertad.",
      "metrics": [
        {
          "label": "Pendiente Fija β₁ (Horas)",
          "note": "+0,22 (p = 0,003, Error estándar estimado con rigor)"
        },
        {
          "label": "DE Entre Colegios (τ)",
          "note": "0,84 puntos de calificación"
        },
        {
          "label": "DE Residual (σ)",
          "note": "0,58 puntos de calificación"
        },
        {
          "label": "Comparativa AIC vs MCO",
          "note": "ΔAIC = -142,6 (Superioridad estadística aplastante)"
        }
      ]
    },
    "quiz_en": {
      "question": "What happens in a Random Intercept model thanks to shrinkage (partial pooling) when estimating a cluster with very few observations?",
      "options": [
        "The cluster is discarded as an unrepresentative outlier",
        "The estimated group intercept shrinks heavily toward the global population mean, protecting against extreme sample noise",
        "The cluster variance expands to equal total population variance",
        "The degrees of freedom are reduced to zero for that specific cluster"
      ],
      "explanation": "Precision mastery! Shrinkage balances individual group evidence against global population priors: small or noisy clusters are pulled toward the grand mean."
    },
    "quiz_es": {
      "question": "¿Qué ocurre en un modelo de Intercepto Aleatorio gracias a la contracción (partial pooling) al estimar un grupo con muy pocas observaciones?",
      "options": [
        "El grupo se descarta automáticamente por considerarse un valor atípico no representativo",
        "El intercepto estimado del grupo se contrae con fuerza hacia la media global poblacional, protegiendo al modelo frente al ruido de muestras pequeñas",
        "La varianza del grupo se expande hasta igualar la varianza poblacional total",
        "Los grados de libertad se reducen a cero para ese grupo específico"
      ],
      "explanation": "¡Dominio impecable! La contracción equilibra la evidencia muestral local con la distribución previa global: los grupos con escasas observaciones son atraídos hacia la media general."
    }
  },
  {
    "id": 15,
    "phase": 3,
    "phaseTitle": "Fase 3: Mixed Models — De Praktische Sweet Spot",
    "title": "Linear Mixed Models II: Random Slopes & Herhaalde Metingen",
    "subtitle": "De ultieme praktische sweet spot: elk individu zijn eigen tempo en startpunt.",
    "badge": "Praktische Sweet Spot",
    "case": {
      "title": "Casus: Cognitief Herstel na een Beroerte over 6 Maanden",
      "context": "Patiënten worden 6 maanden gevolgd. Patiënt 1 herstelt met +7.8 pt/mnd; patiënt 2 met slechts +1.9 pt/mnd. Er is variatie in startniveau én in hersteltempo.",
      "data": [
        {
          "patient": "Patiënt 1",
          "start": "35",
          "tempo": "+7.8 pt/mnd"
        },
        {
          "patient": "Patiënt 2",
          "start": "42",
          "tempo": "+1.9 pt/mnd"
        },
        {
          "patient": "Patiënt 3",
          "start": "50",
          "tempo": "+4.5 pt/mnd"
        }
      ],
      "question": "Hoe modelleer je zowel individuele startposities als individuele hersteltempo's over de tijd?"
    },
    "theory": {
      "summary": "In een Random Slope model mag niet alleen het intercept variëren ($u_{0j}$), maar ook de hellingshoek ($u_{1j}$). Bovendien schatten we de correlatie tussen startniveau en herstelsnelheid (inhaaleffect).",
      "keyConcepts": [
        {
          "term": "Random Slope (u₁ⱼ)",
          "desc": "Individuele afwijking van het algemene hersteltempo: u₁ⱼ ~ N(0, σ²_u₁)."
        },
        {
          "term": "Corr(u₀, u₁)",
          "desc": "Negatieve correlatie duidt op een inhaaleffect: lagere starters herstellen sneller."
        }
      ],
      "mathFormula": "Y_{ij} = (\\beta_0 + u_{0j}) + (\\beta_1 + u_{1j}) \\cdot \\text{Tijd}_{ij} + \\epsilon_{ij}",
      "formulaExplain": "$\\beta_1$ is het gemiddelde effect van de therapie over alle mensen."
    },
    "simulation": {
      "type": "random_slope_simulator",
      "name": "De Ultieme Mixed Model Simulator (Random Slopes)",
      "description": "Speel met de random slope variantie en zie hoe individuele patiëntcurven uitwaaieren over de tijd."
    },
    "interpretation": {
      "title": "MixedLM Output Interpretatie",
      "metrics": [
        {
          "label": "Fixed Effect: Tijd",
          "value": "+4.48 pt/mnd (p < 0.0001)",
          "note": "Gemiddelde winst door therapie"
        },
        {
          "label": "Random Slope Var(u₁)",
          "value": "σ²_u₁ = 3.65",
          "note": "Substantiële individuele verschillen"
        },
        {
          "label": "Correlatie Intercept-Slope",
          "value": "r = -0.42",
          "note": "Inhaaleffect bij zware start"
        }
      ],
      "recommendation": "Dit model is de absolute gouden standaard voor longitudinale data en herhaalde metingen."
    },
    "quiz": {
      "question": "Wat betekent het in een Random Slope model als de variantie van de helling σ²_u1 statistisch significant groter is dan nul?",
      "options": [
        "Dat het verband tussen de predictor en de uitkomst puur door heteroscedasticiteit wordt gedreven",
        "Dat het effect van de predictor (de veranderingssnelheid) niet voor elk cluster gelijk is, maar betekenisvol varieert tussen groepen of individuen",
        "Dat het model overgespecificeerd is en gereduceerd moet worden tot een Random Intercept model",
        "Dat de correlatie tussen het intercept en de slope per definitie gelijk is aan nul"
      ],
      "correctIndex": 1,
      "explanation": "Juist! Een significante σ²_u1 toont aan dat clusters niet alleen een ander startniveau hebben (intercept), maar ook fundamenteel verschillen in hun reactiesnelheid of groeipatroon (helling)."
    },
    "case_en": {
      "title": "Case Study: Cognitive Recovery Post-Stroke Across 6 Months",
      "context": "A neurological rehabilitation trial tracks N = 60 stroke patients over 6 consecutive months (repeated longitudinal measures). While all patients share an average positive trajectory, some patients recover 4x faster than others, and those starting with lower baselines improve more aggressively.",
      "question": "Why does a Random Slope model allow individualized recovery trajectories and estimate the correlation between baseline and slope?"
    },
    "case_es": {
      "title": "Caso de Estudio: Recuperación Cognitiva Post-Ictus durante 6 Meses",
      "context": "Un ensayo de neurorrehabilitación sigue a N = 60 pacientes tras un ictus a lo largo de 6 meses (medidas repetidas longitudinales). Aunque la trayectoria media es positiva, algunos pacientes se recuperan 4 veces más rápido, y quienes parten de puntuaciones basales más bajas mejoran más.",
      "question": "¿Por qué un modelo de Pendientes Aleatorias permite trayectorias individualizadas y estima la correlación entre punto de partida y velocidad de mejora?"
    },
    "theory_en": {
      "summary": "Random Slope models expand hierarchical modeling by letting both intercepts (u₀ⱼ) and slopes (u₁ⱼ) vary across individual units. Crucially, the model estimates the covariance parameter Cov(u₀, u₁) = ρ₀₁·τ₀·τ₁ between baseline level and rate of change.",
      "formulaExplain": "Y_ij = (β₀ + u_0j) + (β₁ + u_1j)·Time_ij + ε_ij, where [u₀ⱼ, u₁ⱼ] ~ MVN(0, Σ_u). A negative correlation ρ₀₁ indicates that patients with lower initial scores experience faster recovery rates.",
      "keyConcepts": [
        {
          "term": "Random Slope (u_1j)",
          "desc": "Individual-specific deviation in trajectory or treatment sensitivity."
        },
        {
          "term": "Covariance Matrix (Σ_u)",
          "desc": "Estimates variances τ₀², τ₁² and correlation parameter ρ₀₁ between intercept and slope."
        },
        {
          "term": "Longitudinal Repeated Measures",
          "desc": "Multiple observations nested within the same patient over chronological time."
        },
        {
          "term": "Autoregressive Errors (AR1)",
          "desc": "Modeling residual correlation that decays as time gap between measurements increases."
        }
      ]
    },
    "theory_es": {
      "summary": "Los modelos de Pendiente Aleatoria permiten que tanto el intercepto (u₀ⱼ) como la pendiente (u₁ⱼ) varíen según cada individuo. Estiman además el parámetro de covarianza Cov(u₀, u₁) = ρ₀₁·τ₀·τ₁ entre el nivel inicial y la tasa de cambio en el tiempo.",
      "formulaExplain": "Y_ij = (β₀ + u_0j) + (β₁ + u_1j)·Tiempo_ij + ε_ij, con [u₀ⱼ, u₁ⱼ] ~ NVM(0, Σ_u). Una correlación negativa ρ₀₁ refleja que los pacientes con peor estado inicial recuperan más aceleradamente.",
      "keyConcepts": [
        {
          "term": "Pendiente Aleatoria (u_1j)",
          "desc": "Desviación individual en la trayectoria o sensibilidad a la terapia en el tiempo."
        },
        {
          "term": "Matriz de Covarianza (Σ_u)",
          "desc": "Estima las varianzas τ₀², τ₁² y la correlación ρ₀₁ entre intercepto basal y pendiente."
        },
        {
          "term": "Medidas Repetidas Longitudinales",
          "desc": "Múltiples registros anidados dentro de un mismo paciente a lo largo del tiempo."
        },
        {
          "term": "Estructura AR(1)",
          "desc": "Modelado de correlación residual que decae conforme se amplía la distancia temporal entre mediciones."
        }
      ]
    },
    "simulation_en": {
      "name": "The Ultimate Mixed Model Simulator: Random Slopes",
      "description": "Adjust the slope variance τ₁ and baseline correlation ρ₀₁. Watch how individual patient recovery trajectories fan out, intersect, and converge over the 6-month trial!"
    },
    "simulation_es": {
      "name": "Simulador de Modelos Mixtos: Pendientes Aleatorias",
      "description": "Modifica la dispersión de pendientes τ₁ y la correlación basal ρ₀₁. ¡Observa cómo las trayectorias de recuperación de cada paciente se abren en abanico y se cruzan a lo largo de 6 meses!"
    },
    "interpretation_en": {
      "title": "MixedLM Output Interpretation",
      "recommendation": "Average recovery rate is β₁ = +2.4 points/month (p < 0.001). Correlation ρ₀₁ = -0.42 confirms that patients starting with severe cognitive deficits make the largest relative monthly strides.",
      "metrics": [
        {
          "label": "Population Slope (Fixed β₁)",
          "note": "+2.40 pts/month (p < 0.001)"
        },
        {
          "label": "Slope Variance (τ₁)",
          "note": "0.85 pts/month (Substantial patient heterogeneity)"
        },
        {
          "label": "Intercept-Slope Corr (ρ₀₁)",
          "note": "-0.42 (Catch-up recovery effect)"
        },
        {
          "label": "Likelihood Ratio vs Random Int",
          "note": "χ² = 28.4, p < 0.0001 (Random slopes mandatory)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Interpretación de Salida MixedLM",
      "recommendation": "La tasa media de mejora es β₁ = +2,4 puntos/mes (p < 0,001). La correlación ρ₀₁ = -0,42 corrobora que quienes parten de déficits severos experimentan los mayores avances relativos.",
      "metrics": [
        {
          "label": "Pendiente Poblacional (β₁)",
          "note": "+2,40 pts/mes (p < 0,001)"
        },
        {
          "label": "Dispersión de Pendientes (τ₁)",
          "note": "0,85 pts/mes (Elevada heterogeneidad individual)"
        },
        {
          "label": "Correlación Intercepto-Pendiente (ρ₀₁)",
          "note": "-0,42 (Efecto de convergencia o alcance)"
        },
        {
          "label": "Razón de Verosimilitud vs Intercepto",
          "note": "χ² = 28,4, p < 0,0001 (Pendientes aleatorias indispensables)"
        }
      ]
    },
    "quiz_en": {
      "question": "In a longitudinal Random Slope model, what does a negative estimated correlation ρ₀₁ between intercept and slope indicate?",
      "options": [
        "The model is mathematically unstable and must be restricted to fixed slopes",
        "Patients with lower baseline scores at time zero experience faster rates of improvement over time (catch-up effect)",
        "The overall treatment effect reverses and becomes harmful over time",
        "Residual variance exceeds between-subject variance, violating model assumptions"
      ],
      "explanation": "Clinical and mathematical perfection! A negative ρ₀₁ indicates that lower baseline values associate with steeper positive trajectories (convergence/catch-up)."
    },
    "quiz_es": {
      "question": "¿Qué indica en un modelo longitudinal de Pendientes Aleatorias una correlación negativa estimada ρ₀₁ entre intercepto y pendiente?",
      "options": [
        "Que el modelo es matemáticamente inestable y debe restringirse a pendientes fijas",
        "Que los pacientes que inician con puntuaciones basales más bajas experimentan tasas de recuperación más veloces (efecto de convergencia o alcance)",
        "Que el tratamiento pierde eficacia y se vuelve perjudicial con el tiempo",
        "Que la varianza residual supera a la varianza entre sujetos, vulnerando los supuestos"
      ],
      "explanation": "¡Perfección clínica y estadística! Una correlación negativa ρ₀₁ demuestra que valores basales inferiores se asocian a pendientes más empinadas de recuperación."
    }
  },
  {
    "id": 16,
    "phase": 3,
    "phaseTitle": "Fase 3: Hiërarchie, Gegeneraliseerde & Mixed Models",
    "title": "Generalized Linear Mixed Models (GLMM)",
    "subtitle": "Geclusterde binaire uitkomsten, odds ratios en tellingen met random effecten.",
    "badge": "GLMM",
    "case": {
      "title": "Casus: Ziekenhuisinfecties over 40 Chirurgische Afdelingen",
      "context": "We willen voorspellen of een patiënt een postoperatieve infectie oploopt (Ja/Nee = 1/0). Patiënten zijn geclusterd binnen 40 afdelingen. Het is dus én binair én geclusterd!",
      "data": [
        {
          "afdeling": "Chirurgie A (Algemeen)",
          "nPatienten": 45,
          "infecties": 3,
          "clusterLogitIntercept": "-2.6"
        },
        {
          "afdeling": "Chirurgie B (Trauma)",
          "nPatienten": 60,
          "infecties": 12,
          "clusterLogitIntercept": "-1.3"
        },
        {
          "afdeling": "Chirurgie C (Plastisch)",
          "nPatienten": 35,
          "infecties": 1,
          "clusterLogitIntercept": "-3.5"
        }
      ],
      "question": "Hoe combineert een GLMM de logit-linkfunctie met random intercepts om binaire geclusterde data correct te analyseren?"
    },
    "theory": {
      "summary": "Wanneer je uitkomst niet continu en normaal is (bijv. binair of tellingen) én je data is geclusterd, combineer je GLM met Mixed Models: GLMM. Via een linkfunctie (zoals logit of log) modelleren we de verwachte waarde met random intercepts.",
      "keyConcepts": [
        {
          "term": "Linkfunctie g(μ)",
          "desc": "Transformeert de niet-lineaire kans naar lineaire predictorschaal (bijv. logit)."
        },
        {
          "term": "Random Intercept op Logit-schaal",
          "desc": "Elk ziekenhuis krijgt een eigen basis-risiconiveau u₀ⱼ op de log-odds schaal."
        }
      ],
      "mathFormula": "\\text{logit}(P(Y_{ij}=1)) = (\\beta_0 + u_{0j}) + \\beta_1 X_{ij} \\quad \\text{met } u_{0j} \\sim \\mathcal{N}(0, \\sigma^2_u)",
      "formulaExplain": "Hierdoor schat je betrouwbare Odds Ratios zonder dat ziekenhuizen met toevallig veel patiënten de data domineren."
    },
    "simulation": {
      "type": "glmm_simulator",
      "name": "GLMM Cluster-Risico Simulator",
      "description": "Bekijk hoe de infectiekans per ziekenhuis varieert op de S-curve door de variatie in random intercepts."
    },
    "interpretation": {
      "title": "GLMM Output Interpretatie",
      "metrics": [
        {
          "label": "Operatieduur (per uur)",
          "value": "OR = 1.48 (p = 0.002)",
          "note": "+48% kans op infectie per extra uur"
        },
        {
          "label": "Tussen-Afdeling Variantie",
          "value": "σ²_u = 0.64",
          "note": "Aanzienlijke kwaliteitsverschillen tussen afdelingen"
        }
      ],
      "recommendation": "GLMM voorkomt dat je ziekenhuis-verschillen aanziet voor patiënt-factoren."
    },
    "quiz": {
      "question": "Wanneer stap je over van een Linear Mixed Model (LMM) naar een Generalized Linear Mixed Model (GLMM)?",
      "options": [
        "Wanneer het aantal niveaus in de hiërarchie toeneemt van twee naar drie of meer niveaus",
        "Wanneer de geclusterde responsvariabele niet-Gaussisch is (zoals binaire uitkomsten, odds of Poisson-tellingen) en een linkfunctie vereist",
        "Wanneer de predictoren onderling gecorreleerd zijn en de VIF groter is dan 10",
        "Wanneer men Bayesiaanse MCMC-schatting verkiest boven Restricted Maximum Likelihood (REML)"
      ],
      "correctIndex": 1,
      "explanation": "Spot-on! GLMM combineert de flexibiliteit van GLM (voor binaire of teldata via linkfuncties zoals logit of log) met de clustering van mixed models (random effects)."
    },
    "case_en": {
      "title": "Case Study: Surgical Site Infections Across 40 Hospital Departments",
      "context": "A health authority tracks surgical site infections (0 = Clean, 1 = Infected) across N = 2,400 surgeries nested in J = 40 surgical clinics. Infection rates vary from 1.2% in specialized cardiac clinics to 14.8% in trauma surgery.",
      "question": "Why do we require Generalized Linear Mixed Models (GLMM) when responses are non-normal (binary/count) and data is clustered?"
    },
    "case_es": {
      "title": "Caso de Estudio: Infecciones Quirúrgicas en 40 Departamentos",
      "context": "Un sistema sanitario monitoriza infecciones de herida quirúrgica (0 = Sin infección, 1 = Infectada) en N = 2.400 cirugías realizadas en J = 40 departamentos. La incidencia oscila entre el 1,2% en cirugía cardíaca y el 14,8% en traumatología.",
      "question": "¿Por qué es indispensable un Modelo Lineal Mixto Generalizado (GLMM) ante variables no normales (binarias/conteos) con estructura agrupada?"
    },
    "theory_en": {
      "summary": "GLMM marries Generalized Linear Models (link functions for non-normal distributions like binomial or Poisson) with hierarchical random effects. It models clustered log-odds: logit(p_ij) = β₀ + β₁·X_ij + u_0j.",
      "formulaExplain": "η_ij = g(E[Y_ij]) = X_ij·β + Z_ij·u. For binary data, the logit link maps probabilities to real numbers while random clinic effects u_0j ~ N(0, τ²) capture unobserved hospital-level risk.",
      "keyConcepts": [
        {
          "term": "Binomial GLMM",
          "desc": "Models binary responses clustered within hospitals, schools, or litters."
        },
        {
          "term": "Poisson / Negative Binomial GLMM",
          "desc": "Models overdispersed count data with hierarchical random effects."
        },
        {
          "term": "Link Function g(μ)",
          "desc": "Maps expected probability/rate to the linear predictor scale (logit, log, probit)."
        },
        {
          "term": "Laplace Approximation & AGHQ",
          "desc": "Numerical integration techniques used to solve analytically intractable random effect integrals."
        }
      ]
    },
    "theory_es": {
      "summary": "Los GLMM combinan los Modelos Lineales Generalizados (funciones de enlace para respuestas no gaussianas como binomial o Poisson) con efectos aleatorios jerárquicos: logit(p_ij) = β₀ + β₁·X_ij + u_0j.",
      "formulaExplain": "η_ij = g(E[Y_ij]) = X_ij·β + Z_ij·u. Para datos binarios, el enlace logit transforma probabilidades al rango real mientras los efectos aleatorios u_0j ~ N(0, τ²) modelan el riesgo propio de cada centro.",
      "keyConcepts": [
        {
          "term": "GLMM Binomial",
          "desc": "Modela respuestas binarias (éxito/fracaso) anidadas en clínicas, centros o sujetos."
        },
        {
          "term": "GLMM Poisson / Binomial Negativa",
          "desc": "Modela recuentos con sobredispersión mediante efectos aleatorios grupales."
        },
        {
          "term": "Función de Enlace g(μ)",
          "desc": "Traduce la media esperada a la escala aditiva del predictor lineal (logit, log, probit)."
        },
        {
          "term": "Aproximación de Laplace y AGHQ",
          "desc": "Métodos de integración numérica para resolver integrales complejas de efectos aleatorios."
        }
      ]
    },
    "simulation_en": {
      "name": "GLMM Cluster-Risk Simulator",
      "description": "Vary clinic-level hygiene variance τ². Observe how predicted infection probabilities diverge across departments while patient-level risk factors remain constant!"
    },
    "simulation_es": {
      "name": "Simulador de Riesgo por Clúster en GLMM",
      "description": "Modifica la variabilidad higiénica entre clínicas τ². ¡Comprueba cómo divergen las probabilidades predichas de infección entre departamentos manteniendo constantes los factores del paciente!"
    },
    "interpretation_en": {
      "title": "GLMM Output Interpretation",
      "recommendation": "Antimicrobial prophylaxis reduces infection odds by 58% (OR = 0.42, p < 0.001). Clinic random variance τ = 0.65 reveals substantial systemic variation between hospital departments.",
      "metrics": [
        {
          "label": "Fixed Effect OR (Prophylaxis)",
          "note": "0.42 (p < 0.001, 58% lower odds of infection)"
        },
        {
          "label": "Between-Clinic SD (τ)",
          "note": "0.65 in log-odds scale"
        },
        {
          "label": "Intraclass Correlation (latent)",
          "note": "ICC_latent = 0.11"
        },
        {
          "label": "Integration Technique",
          "note": "Adaptive Gauss-Hermite Quadrature (nAGQ = 7)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Interpretación de Salida GLMM",
      "recommendation": "La profilaxis antimicrobiana reduce las odds de infección un 58% (OR = 0,42, p < 0,001). La varianza clínica τ = 0,65 delata una marcada disparidad sistémica entre quirófanos.",
      "metrics": [
        {
          "label": "Efecto Fijo OR (Profilaxis)",
          "note": "0,42 (p < 0,001, 58% menos chances de infección)"
        },
        {
          "label": "DE Entre Quirófanos (τ)",
          "note": "0,65 en escala log-odds"
        },
        {
          "label": "Correlación Intraclase Latente",
          "note": "CCI_latente = 0,11"
        },
        {
          "label": "Método de Integración",
          "note": "Cuadratura Gauss-Hermite Adaptativa (nAGQ = 7)"
        }
      ]
    },
    "quiz_en": {
      "question": "When must an analyst transition from a standard Linear Mixed Model (LMM) to a Generalized Linear Mixed Model (GLMM)?",
      "options": [
        "When the number of random effect groups exceeds 100",
        "When the response variable is non-continuous and non-normal (such as binary binary success/failure or count rates) combined with clustered hierarchical dependency",
        "When the model contains multiple random slopes that correlate negatively",
        "When predictors correlate heavily and cause multicollinearity"
      ],
      "explanation": "Exact! LMM requires a continuous Gaussian conditional outcome. When responses are discrete (binary, binomial, Poisson) and clustered, GLMM with a link function is mandatory."
    },
    "quiz_es": {
      "question": "¿Cuándo es imperativo pasar de un Modelo Lineal Mixto estándar (LMM) a un Modelo Lineal Mixto Generalizado (GLMM)?",
      "options": [
        "Cuando el número de grupos en los efectos aleatorios supera los 100",
        "Cuando la variable de respuesta es discreta y no gaussiana (como desenlaces binarios de éxito/fracaso o recuentos) y los datos presentan estructura agrupada",
        "Cuando el modelo incluye múltiples pendientes aleatorias con correlación negativa",
        "Cuando los predictores exhiben alta multicolinealidad entre sí"
      ],
      "explanation": "¡Exacto! LMM exige una variable continua condicionalmente normal. Cuando los desenlaces son discretos (binarios, Poisson, conteos) y están agrupados, GLMM es estrictamente indispensable."
    }
  },
  {
    "id": 17,
    "phase": 3,
    "phaseTitle": "Fase 3: Hiërarchie, Gegeneraliseerde & Mixed Models",
    "title": "Generalized Additive Models (GAMs)",
    "subtitle": "Vrije niet-lineaire curven modelleren via splines zonder starre formules.",
    "badge": "GAMs",
    "case": {
      "title": "Casus: Buitentemperatuur vs Energieverbruik (U-Vormige Kromming)",
      "context": "Bij -5°C stijgt het gasverbruik hard (verwarming). Bij +18°C is het minimaal. Boven de 28°C stijgt het stroomverbruik weer hard (airco). Geen enkele rechte lijn kan dit vangen!",
      "data": [
        {
          "tempC": -5,
          "verbruik": 45,
          "regime": "Verwarming"
        },
        {
          "tempC": 5,
          "verbruik": 28,
          "regime": "Verwarming"
        },
        {
          "tempC": 18,
          "verbruik": 12,
          "regime": "Optimaal"
        },
        {
          "tempC": 32,
          "verbruik": 38,
          "regime": "Airco"
        }
      ],
      "question": "Hoe laten splines in een GAM de data zelf bepalen hoe de curve loopt, zonder overfitting?"
    },
    "theory": {
      "summary": "GAMs vervangen lineaire termen $\\beta X$ door gladde functies $f(X)$ (splines). Een gladheidsterm (smoothing parameter $\\lambda$) zorgt voor de balans tussen flexibiliteit en eenvoud.",
      "keyConcepts": [
        {
          "term": "Smooth Function f(X)",
          "desc": "Opgebouwd uit stuksgewijze polynomen (spline basis functies)."
        },
        {
          "term": "Smoothing Parameter λ",
          "desc": "Bestraft te wiebelige curven om overfitting te voorkomen."
        }
      ],
      "mathFormula": "Y = \\beta_0 + f(\\text{Temperatuur}) + \\epsilon \\quad \\text{minimaliseer } \\sum e_i^2 + \\lambda \\int [f''(x)]^2 dx",
      "formulaExplain": "Als $\\lambda \\to \\infty$ wordt de curve een rechte lijn; als $\\lambda \\to 0$ volgt hij elke afzonderlijke ruispunt."
    },
    "simulation": {
      "type": "gam_spline_simulator",
      "name": "GAM Spline & Smoothing Simulator",
      "description": "Schuif aan smoothing parameter λ en zie hoe de curve verandert van een stijve rechte lijn naar een perfecte vloeiende curve."
    },
    "interpretation": {
      "title": "GAM Output Interpretatie",
      "metrics": [
        {
          "label": "Effective Degrees of Freedom (edf)",
          "value": "edf = 4.2",
          "note": "Geeft de complexiteit van de kromming aan"
        },
        {
          "label": "P-waarde van f(Temperatuur)",
          "value": "p < 0.0001",
          "note": "Hoogst significant niet-lineair effect"
        }
      ],
      "recommendation": "Gebruik GAMs wanneer de natuurwetenschappelijke relatie duidelijk gekromd is maar je geen arbitraire $X^2$ of $X^3$ wilt forceren."
    },
    "quiz": {
      "question": "Wat gebeurt er in een Generalized Additive Model (GAM) als de smoothing parameter λ naar oneindig nadert (λ → ∞)?",
      "options": [
        "De splines interpoleren elk individueel datapunt exact (extreme overfitting)",
        "De strafterm op kromming domineert volledig, waardoor de geschatte functie convergeert naar een rechte lineaire lijn",
        "De effectieve vrijheidsgraden (EDF) stijgen naar het maximale aantal basisknopen",
        "De gegeneraliseerde kruisvalidatiescore (GCV) daalt altijd naar exact nul"
      ],
      "correctIndex": 1,
      "explanation": "Juist! De smoothing penalty bestraft de geïntegreerde kwadratische tweede afgeleide (kromming). Als λ → ∞ wordt elke kromming oneindig zwaar bestraft en blijft er een gewone rechte lijn over."
    },
    "case_en": {
      "title": "Case Study: Outdoor Temperature vs Energy Consumption (U-Shaped Curve)",
      "context": "A municipal grid records daily temperature (X in °C) and electricity consumption (Y in MWh). Power demand spikes both in freezing winters (-10°C, electric heating) and blistering summers (+35°C, air conditioning), forming a U-shaped non-linear curve.",
      "question": "Why do Generalized Additive Models (GAMs) model complex non-linear relationships without subjective polynomial guessing?"
    },
    "case_es": {
      "title": "Caso de Estudio: Temperatura Exterior y Consumo Energético (Curva en U)",
      "context": "Una red eléctrica monitoriza temperatura diaria (X en °C) y consumo eléctrico (Y en MWh). La demanda se dispara tanto en inviernos gélidos (-10 °C, calefacción) como en veranos caniculares (+35 °C, aire acondicionado), formando una curva en U no lineal.",
      "question": "¿Por qué los Modelos Aditivos Generalizados (GAMs) resuelven no linealidades complejas sin adivinanzas subjetivas de polinomios?"
    },
    "theory_en": {
      "summary": "GAMs replace rigid linear terms β·X with flexible, data-driven smooth functions f(X) constructed from penalized regression splines. The model automatically optimizes the balance between smoothness and data fit using Restricted Marginal Likelihood (REML).",
      "formulaExplain": "Y = β₀ + Σ f_j(X_j) + ε, where f(X) = Σ b_k(X)·β_k. Penalized smoothing minimizes: ||Y - f(X)||² + λ ∫ [f''(x)]² dx. The penalty parameter λ prevents overfitting.",
      "keyConcepts": [
        {
          "term": "Penalized Splines (P-Splines)",
          "desc": "Smooth curves constructed by joining polynomial segments at knots with curvature penalties."
        },
        {
          "term": "Effective Degrees of Freedom (EDF)",
          "desc": "Quantifies spline non-linearity. EDF = 1 is a straight line; EDF > 3 indicates rich non-linear curvature."
        },
        {
          "term": "Smoothing Penalty (λ)",
          "desc": "Controls wiggle penalty: large λ forces a straight line; λ = 0 interpolates every point."
        },
        {
          "term": "Additive Modularity",
          "desc": "Allows examining the isolated non-linear impact of each variable independently."
        }
      ]
    },
    "theory_es": {
      "summary": "Los GAMs sustituyen los términos lineales rígidos β·X por funciones suaves continuas f(X) generadas a partir de splines de regresión penalizados. El modelo optimiza automáticamente el equilibrio entre suavidad y ajuste mediante REML.",
      "formulaExplain": "Y = β₀ + Σ f_j(X_j) + ε, donde f(X) = Σ b_k(X)·β_k. La penalización minimiza: ||Y - f(X)||² + λ ∫ [f''(x)]² dx. El parámetro λ penaliza oscilaciones excesivas.",
      "keyConcepts": [
        {
          "term": "Splines Penalizados (P-Splines)",
          "desc": "Curvas suaves construidas uniendo segmentos polinómicos en nudos con penalización por curvatura."
        },
        {
          "term": "Grados de Libertad Efectivos (EDF)",
          "desc": "Miden la no linealidad. EDF = 1 es una recta; EDF > 3 refleja curvaturas complejas."
        },
        {
          "term": "Parámetro de Suavizado (λ)",
          "desc": "Controla la penalización de oscilación: λ grande fuerza una recta; λ = 0 sobreajusta los datos."
        },
        {
          "term": "Modularidad Aditiva",
          "desc": "Permite inspeccionar el impacto suave no lineal de cada variable manteniendo la interpretabilidad."
        }
      ]
    },
    "simulation_en": {
      "name": "GAM Spline & Smoothing Simulator",
      "description": "Adjust smoothing penalty λ and the number of spline basis functions. Watch how the spline adapts smoothly from an underfit linear bar to the true U-shaped energy curve!"
    },
    "simulation_es": {
      "name": "Simulador de Splines y Suavizado en GAM",
      "description": "Modifica el parámetro de penalización λ y el número de funciones base. ¡Comprueba cómo el spline se adapta desde una recta rígida hasta capturar la curva en U real!"
    },
    "interpretation_en": {
      "title": "GAM Output Interpretation",
      "recommendation": "EDF = 4.82 confirms robust non-linear curvature (p < 0.0001). Grid operators must schedule peak reserve capacity whenever forecasted temperatures drop below 2°C or exceed 26°C.",
      "metrics": [
        {
          "label": "Effective Degrees of Freedom (EDF)",
          "note": "4.82 (Substantial non-linear U-shape)"
        },
        {
          "label": "Optimal Smoothing Penalty (λ)",
          "note": "0.24 (Selected automatically by REML)"
        },
        {
          "label": "Deviance Explained",
          "note": "88.4% of total energy variance captured"
        },
        {
          "label": "Comfort Temperature Trough",
          "note": "18.5°C (Minimum electricity demand)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Interpretación de Salida GAM",
      "recommendation": "El EDF = 4,82 confirma una curvatura no lineal robusta (p < 0,0001). La red debe programar reservas energéticas críticas cuando la temperatura baje de 2 °C o supere los 26 °C.",
      "metrics": [
        {
          "label": "Grados de Libertad Efectivos (EDF)",
          "note": "4,82 (Marcada curvatura no lineal en U)"
        },
        {
          "label": "Penalización Óptima (λ)",
          "note": "0,24 (Seleccionada automáticamente por REML)"
        },
        {
          "label": "Desviación Explicada",
          "note": "88,4% de la varianza energética explicada"
        },
        {
          "label": "Zona de Confort Mínimo",
          "note": "18,5 °C (Mínimo consumo eléctrico)"
        }
      ]
    },
    "quiz_en": {
      "question": "What does an Effective Degrees of Freedom (EDF) value of EDF = 4.8 for a smooth term f(X) signify in a Generalized Additive Model (GAM)?",
      "options": [
        "The model is severely overparameterized and has exhausted available sample points",
        "The estimated relationship is non-linear and requires roughly the complexity of a 4th-to-5th degree polynomial curve without forcing polynomial edge instability",
        "The predictor is collinear with 4 other variables in the model",
        "The null hypothesis of zero effect is rejected at α = 0.048"
      ],
      "explanation": "Superb! In GAM theory, EDF = 1 indicates a simple linear relationship. An EDF of ~4.8 denotes a smooth, highly non-linear curve with multiple bends."
    },
    "quiz_es": {
      "question": "¿Qué significa un valor de Grados de Libertad Efectivos EDF = 4,8 para un término suave f(X) en un Modelo Aditivo Generalizado (GAM)?",
      "options": [
        "Que el modelo está sobreparametrizado y ha agotado los puntos muestrales",
        "Que la relación funcional es marcadamente no lineal y posee la flexibilidad aproximada de una curva polinómica de 4º o 5º orden sin sus inestabilidades en los bordes",
        "Que el predictor es colineal con otras 4 variables del modelo",
        "Que la hipótesis nula de ausencia de efecto se rechaza con α = 0,048"
      ],
      "explanation": "¡Conocimiento magistral! En GAMs, EDF = 1 equivale a una recta simple. Un EDF de ~4,8 denota una curva suave y flexible con múltiples puntos de inflexión."
    }
  },
  {
    "id": 18,
    "phase": 3,
    "phaseTitle": "Fase 3: Hiërarchie, Gegeneraliseerde & Mixed Models",
    "title": "Overleving- & Tijd-tot-Gebeurtenis Analyse",
    "subtitle": "Kaplan-Meier curven, censurering en het Cox Proportional Hazards model.",
    "badge": "Survival Analysis",
    "case": {
      "title": "Casus: Overlevingstijd bij Kankertherapie (Rechtscensurering)",
      "context": "We volgen patiënten tot 5 jaar. Sommige patiënten overlijden; anderen zijn na 5 jaar nog in leven of verhuizen halverwege. Je mag hen niet weggooien, want ze hebben bewezen maandenlang te overleven!",
      "data": [
        {
          "patient": "P1",
          "maandenTotEvent": 14,
          "overleden": 1
        },
        {
          "patient": "P2",
          "maandenTotEvent": 60,
          "overleden": 0,
          "status": "Gecensureerd (nog in leven)"
        },
        {
          "patient": "P3",
          "maandenTotEvent": 28,
          "overleden": 0,
          "status": "Gecensureerd (verhuisd)"
        }
      ],
      "question": "Hoe berekent de Kaplan-Meier schatter de overlevingskans over de tijd ondanks ontbrekende eindpunten (censurering)?"
    },
    "theory": {
      "summary": "In survival analysis is de uitkomsttijd 'gecensureerd' voor wie het event nog niet heeft meegemaakt. De Kaplan-Meier curve berekent cumulatieve overlevingskansen stap voor stap. Het Cox PH model schat Hazard Ratios ($HR$): het relatieve risico per tijdseenheid.",
      "keyConcepts": [
        {
          "term": "Censurering",
          "desc": "We weten dat de patiënt minstens T maanden heeft overleefd, maar niet wanneer het event daarna plaatsvindt."
        },
        {
          "term": "Hazard Ratio (HR)",
          "desc": "HR = 0.60 betekent 40% lager risico op overlijden op elk willekeurig moment."
        }
      ],
      "mathFormula": "S(t) = \\prod_{t_i \\le t} \\left(1 - \\frac{d_i}{n_i}\\right) \\quad \\text{en } h(t) = h_0(t) e^{\\beta X}",
      "formulaExplain": "De noemer $n_i$ krimpt alleen voor patiënten die nog 'at risk' zijn op dat specifieke moment."
    },
    "simulation": {
      "type": "survival_simulator",
      "name": "Kaplan-Meier Curve & Hazard Ratio Lab",
      "description": "Vergelijk de overlevingscurven van de nieuwe therapie vs standaardzorg. Zie de trapvormige dalingen bij events."
    },
    "interpretation": {
      "title": "Cox Model Output",
      "metrics": [
        {
          "label": "Hazard Ratio (Nieuwe Therapie)",
          "value": "HR = 0.58 (p = 0.003)",
          "note": "42% risicoreductie!"
        },
        {
          "label": "Mediane Overleving",
          "value": "38 mnd vs 22 mnd",
          "note": "+16 maanden levensverlenging"
        }
      ],
      "recommendation": "De nieuwe therapie biedt een statistisch en klinisch bewezen levensverlenging."
    },
    "quiz": {
      "question": "Wat betekent een Hazard Ratio van HR = 0.70 voor een nieuw medicijn in een Cox Proportional Hazards model?",
      "options": [
        "Dat de mediane overlevingstijd van behandelde patiënten met exact 70% toeneemt",
        "Dat op elk moment tijdens de follow-up het risico op het optreden van het event 30% lager is in de behandelde groep dan in de controlegroep",
        "Dat na afloop van de follow-up periode 70% van de behandelde patiënten nog in leven is",
        "Dat de cumulatieve overlevingscurve een lineaire daling vertoont met een constante helling van 0.70"
      ],
      "correctIndex": 1,
      "explanation": "Uitstekend! De hazard ratio is de verhouding van de instantane gebeurteniskansen: HR = 0.70 betekent dat behandelde patiënten op elk tijdstip 70% van het risico van de controlegroep ervaren (een risicoreductie van 30%)."
    },
    "case_en": {
      "title": "Case Study: Cancer Therapy Survival Time (Right-Censoring)",
      "context": "A clinical oncology trial compares novel immunotherapy against standard chemotherapy across N = 200 lung cancer patients over 36 months. At trial conclusion, 72 patients remain alive and active (their true survival time is right-censored).",
      "question": "Why does standard regression fail with time-to-event data, and how do Kaplan-Meier curves and Cox Proportional Hazards handle censoring?"
    },
    "case_es": {
      "title": "Caso de Estudio: Supervivencia en Oncología (Censura por la Derecha)",
      "context": "Un ensayo oncológico compara una inmunoterapia con quimioterapia estándar en N = 200 pacientes durante 36 meses. Al concluir el estudio, 72 pacientes siguen vivos (su tiempo de supervivencia exacto queda censurado por la derecha).",
      "question": "¿Por qué fracasa la regresión clásica con tiempos hasta el evento y cómo resuelven la censura las curvas de Kaplan-Meier y los modelos de Cox?"
    },
    "theory_en": {
      "summary": "Survival analysis models time-to-event under incomplete observation (censoring). Kaplan-Meier non-parametrically estimates the survival function S(t) = P(T > t). The semi-parametric Cox Proportional Hazards model evaluates risk via Hazard Ratios (HR = e^β).",
      "formulaExplain": "Hazard function: h(t | X) = h₀(t)·exp(β₁X₁ + ... + β_kX_k). The baseline hazard h₀(t) is left completely unspecified, requiring only the proportional hazards assumption: HR is constant over time.",
      "keyConcepts": [
        {
          "term": "Right-Censoring",
          "desc": "Occurs when a patient does not experience the event before study termination or drops out."
        },
        {
          "term": "Survival Function S(t)",
          "desc": "Probability that a subject survives beyond time t: S(t) = P(T > t)."
        },
        {
          "term": "Hazard Ratio (HR)",
          "desc": "Ratio of event rates between treated and control groups. HR < 1 indicates protective treatment."
        },
        {
          "term": "Proportional Hazards Assumption",
          "desc": "Hazard ratio between two groups remains constant across the entire follow-up period."
        }
      ]
    },
    "theory_es": {
      "summary": "El análisis de supervivencia modela tiempos hasta un evento bajo observación incompleta (censura). Kaplan-Meier estima de forma no paramétrica la función de supervivencia S(t) = P(T > t). El modelo semiparamétrico de Riesgos Proporcionales de Cox evalúa el riesgo relativo mediante Hazard Ratios (HR = e^β).",
      "formulaExplain": "Función de riesgo: h(t | X) = h₀(t)·exp(β₁X₁ + ... + β_kX_k). El riesgo basal h₀(t) no requiere especificación paramétrica, asumiendo únicamente que los riesgos son proporcionales en el tiempo.",
      "keyConcepts": [
        {
          "term": "Censura por la Derecha",
          "desc": "Sucede cuando el sujeto no sufre el evento antes de terminar el estudio o se pierde en el seguimiento."
        },
        {
          "term": "Función de Supervivencia S(t)",
          "desc": "Probabilidad de que un individuo sobreviva más allá del tiempo t: S(t) = P(T > t)."
        },
        {
          "term": "Hazard Ratio (HR)",
          "desc": "Razón instantánea de tasas de eventos entre grupos. HR < 1 refleja reducción del riesgo."
        },
        {
          "term": "Supuesto de Riesgos Proporcionales",
          "desc": "La razón de riesgos entre grupos se mantiene constante a lo largo de todo el seguimiento."
        }
      ]
    },
    "simulation_en": {
      "name": "Kaplan-Meier Curve & Hazard Ratio Lab",
      "description": "Adjust treatment hazard ratio HR and censoring rate. Watch the staircase Kaplan-Meier survival curves separate and observe log-rank test significance in real time!"
    },
    "simulation_es": {
      "name": "Curvas de Kaplan-Meier y Laboratorio de Hazard Ratio",
      "description": "Modifica el Hazard Ratio del tratamiento y la tasa de censura. ¡Observa cómo se separan las curvas escalonadas de supervivencia y comprueba el test de log-rank en tiempo real!"
    },
    "interpretation_en": {
      "title": "Cox Proportional Hazards Output",
      "recommendation": "Immunotherapy yields HR = 0.58 (p = 0.003), reducing risk of mortality by 42% over standard therapy. Schoenfeld residual test confirms proportional hazards hold (p = 0.62).",
      "metrics": [
        {
          "label": "Hazard Ratio (HR)",
          "note": "0.58 (42% reduction in instantaneous mortality risk)"
        },
        {
          "label": "95% Confidence Interval for HR",
          "note": "[0.41, 0.83] (p = 0.003)"
        },
        {
          "label": "Median Survival Gain",
          "note": "Extended from 14.2 months to 24.8 months (+10.6 mos)"
        },
        {
          "label": "Schoenfeld Residual Test",
          "note": "p = 0.62 (Proportional hazards assumption satisfied)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Salida del Modelo de Riesgos Proporcionales de Cox",
      "recommendation": "La inmunoterapia logra una HR = 0,58 (p = 0,003), reduciendo el riesgo de mortalidad un 42% frente al tratamiento estándar. Los residuos de Schoenfeld confirman riesgos proporcionales (p = 0,62).",
      "metrics": [
        {
          "label": "Hazard Ratio (HR)",
          "note": "0,58 (42% de reducción en la tasa instantánea de mortalidad)"
        },
        {
          "label": "IC al 95% para la HR",
          "note": "[0,41; 0,83] (p = 0,003)"
        },
        {
          "label": "Ganancia en Mediana de Supervivencia",
          "note": "Pasa de 14,2 a 24,8 meses (+10,6 meses)"
        },
        {
          "label": "Test de Schoenfeld",
          "note": "p = 0,62 (Supuesto de proporcionalidad plenamente cumplido)"
        }
      ]
    },
    "quiz_en": {
      "question": "What does an estimated Hazard Ratio of HR = 0.70 with 95% CI [0.55, 0.89] signify in a randomized oncology trial?",
      "options": [
        "Patients on treatment live 30% longer in total calendar months",
        "At any given instant in time, patients in the treatment arm experience a 30% lower instantaneous rate of the event compared to control",
        "70% of treated patients achieve complete remission after 5 years",
        "The treatment reduces absolute mortality by exactly 30 percentage points"
      ],
      "explanation": "Clinical mastery! A Hazard Ratio compares instantaneous event rates. HR = 0.70 represents a 30% reduction in the hazard rate at any point during follow-up."
    },
    "quiz_es": {
      "question": "¿Qué indica un Hazard Ratio estimado de HR = 0,70 con IC al 95% [0,55; 0,89] en un ensayo oncológico aleatorizado?",
      "options": [
        "Que los pacientes del grupo tratado viven un 30% más de meses en el calendario",
        "Que en cualquier instante de tiempo dado, los pacientes tratados experimentan una tasa instantánea de eventos un 30% inferior al grupo control",
        "Que el 70% de los pacientes tratados alcanza la remisión completa a los 5 años",
        "Que el tratamiento reduce la mortalidad absoluta exactamente en 30 puntos porcentuales"
      ],
      "explanation": "¡Dominio clínico impecable! La Hazard Ratio evalúa tasas instantáneas de riesgo: HR = 0,70 equivale a una reducción instantánea del 30% en el peligro del evento."
    }
  },
  {
    "id": 19,
    "phase": 4,
    "phaseTitle": "Fase 4: De Geavanceerde Grenzen",
    "title": "Bayesiaanse Grondslagen: Prior, Likelihood & Posterior",
    "subtitle": "Onzekerheid actualiseren via het theorema van Bayes: P(θ|D) ∝ P(D|θ) P(θ).",
    "badge": "Bayesiaans",
    "case": {
      "title": "Casus: De Zeldzame Ziekte & De Positieve Test",
      "context": "Een ziekte treft 1 op de 1.000 mensen (Prior = 0.1%). Een test is 99% accuraat. Een patiënt test positief. De arts denkt: 'Je bent voor 99% zeker ziek.' Maar wat zegt Thomas Bayes?",
      "data": [
        {
          "parameter": "Prior Prevalentie P(Ziek)",
          "waarde": "0.001 (0.1%)"
        },
        {
          "parameter": "Sensitiviteit P(+ | Ziek)",
          "waarde": "0.99 (99%)"
        },
        {
          "parameter": "Vals-Positief P(+ | Gezond)",
          "waarde": "0.05 (5%)"
        },
        {
          "parameter": "Werkelijke Posterior P(Ziek | +)",
          "waarde": "Slechts ~1.9%!"
        }
      ],
      "question": "Waarom is de werkelijke kans op ziekte na een positieve test slechts 2% en hoe actualiseert Bayesiaanse statistiek onze overtuigingen?"
    },
    "theory": {
      "summary": "In de Bayesiaanse statistiek zijn parameters geen vaste onbekende getallen, maar kansverdelingen die onze onzekerheid representeren. We combineren eerdere kennis (Prior) met nieuwe observaties (Likelihood) om tot een geactualiseerde overtuiging te komen (Posterior).",
      "keyConcepts": [
        {
          "term": "Prior P(θ)",
          "desc": "Wat we wisten vóór we nieuwe data zagen."
        },
        {
          "term": "Likelihood P(D | θ)",
          "desc": "Hoe waarschijnlijk is de waargenomen data gegeven parameter θ."
        },
        {
          "term": "Posterior P(θ | D)",
          "desc": "Onze geactualiseerde kennis na het zien van de data."
        }
      ],
      "mathFormula": "P(\\theta \\mid D) = \\frac{P(D \\mid \\theta) P(\\theta)}{P(D)} \\propto P(D \\mid \\theta) \\times P(\\theta)",
      "formulaExplain": "Posterior = (Likelihood × Prior) / Bewijs."
    },
    "simulation": {
      "type": "bayesian_update_simulator",
      "name": "Bayesiaanse Update Simulator",
      "description": "Verander de sterkte van je Prior en voeg datapunten toe. Zie hoe de Posterior curve zich langzaam beweegt van de prior naar de data!"
    },
    "interpretation": {
      "title": "Bayesiaanse Uitkomst",
      "metrics": [
        {
          "label": "Posterior Mediaan",
          "value": "θ = 0.42",
          "note": "Geactualiseerde schatting"
        },
        {
          "label": "95% Credible Interval",
          "value": "[0.34, 0.51]",
          "note": "Hierin ligt θ wél met 95% echte kans!"
        }
      ],
      "recommendation": "Bayesiaanse credible intervals geven wél de intuïtieve interpretatie die frequentistische CI's niet mogen claimen."
    },
    "quiz": {
      "question": "Wat is het fundamentele conceptuele verschil tussen een frequentistisch 95% betrouwbaarheidsinterval en een Bayesiaans 95% Credible Interval?",
      "options": [
        "Frequentistische intervallen gebruiken altijd een uniforme prior, terwijl Bayesiaanse intervallen Gaussiaanse priors vereisen",
        "In een Bayesiaans Credible Interval is er conditioneel op de data en de prior daadwerkelijk 95% kans dat de parameter binnen de grenzen ligt; in de frequentistische leer is de parameter vast en dekt 95% van denkbeeldige herhaalde intervallen de parameter",
        "Frequentistische intervallen corrigeren automatisch voor meervoudig toetsen, terwijl Bayesiaanse intervallen de posterior opblazen",
        "Een Bayesiaans Highest Posterior Density (HPD) interval is wiskundig altijd identiek aan het frequentistische Wald-interval"
      ],
      "correctIndex": 1,
      "explanation": "Briljant! In Bayes is de parameter een stochastische variabele met een posterior verdeling, waardoor je wél directe kansuitspraken mag doen over parameterwaarden."
    },
    "case_en": {
      "title": "Case Study: Rare Disease & The Positive Diagnostic Test",
      "context": "A rare metabolic disorder has a base prevalence of 0.1% (1 in 1,000). A diagnostic test boasts 99% sensitivity and 95% specificity. A patient tests positive. The physician informs the patient: 'You have a 95% chance of being sick!'",
      "question": "Why is the physician committing the Base Rate Fallacy, and how does Bayes' Theorem integrate prior knowledge with evidence?"
    },
    "case_es": {
      "title": "Caso de Estudio: Enfermedad Rara y Prueba Diagnóstica Positiva",
      "context": "Un trastorno metabólico raro tiene una prevalencia del 0,1% (1 de cada 1.000 personas). Un test posee 99% de sensibilidad y 95% de especificidad. Un paciente da positivo. El médico le dice: '¡Tiene un 95% de probabilidad de estar enfermo!'",
      "question": "¿Por qué el médico incurre en la Falacia de la Tasa Base y cómo combina el Teorema de Bayes la información previa con la evidencia?"
    },
    "theory_en": {
      "summary": "In Bayesian statistics, parameters and hypotheses are treated as random variables possessing probability distributions. Bayes' Theorem formalizes rational learning: Posterior ∝ Likelihood × Prior. When base rates are rare, false positives can vastly outnumber true positives.",
      "formulaExplain": "P(Disease | Positive) = [P(Pos | Dis)·P(Dis)] / [P(Pos | Dis)·P(Dis) + P(Pos | Healthy)·P(Healthy)]. With 0.1% prevalence, the true posterior probability is only ~1.9%!",
      "keyConcepts": [
        {
          "term": "Prior Distribution P(θ)",
          "desc": "State of scientific knowledge or belief before observing new experimental data."
        },
        {
          "term": "Likelihood P(Data | θ)",
          "desc": "Probability of generating observed data across different parameter values."
        },
        {
          "term": "Posterior Distribution P(θ | Data)",
          "desc": "Updated synthesis of prior knowledge and empirical evidence."
        },
        {
          "term": "Base Rate Fallacy",
          "desc": "Ignoring background prevalence when evaluating conditional test probabilities."
        }
      ]
    },
    "theory_es": {
      "summary": "En la estadística bayesiana, los parámetros y las hipótesis se modelan mediante distribuciones de probabilidad. El Teorema de Bayes formaliza el aprendizaje racional: Posteriori ∝ Verosimilitud × Priori. En eventos infrecuentes, los falsos positivos superan a los positivos reales.",
      "formulaExplain": "P(Enfermo | Positivo) = [P(Pos | Enf)·P(Enf)] / [P(Pos | Enf)·P(Enf) + P(Pos | Sano)·P(Sano)]. Con una prevalencia del 0,1%, ¡la probabilidad posterior real es de apenas el 1,9%!",
      "keyConcepts": [
        {
          "term": "Distribución a Priori P(θ)",
          "desc": "Estado de conocimiento o creencia científica previo a observar los nuevos datos."
        },
        {
          "term": "Función de Verosimilitud P(Datos | θ)",
          "desc": "Probabilidad del conjunto de datos observado para cada valor del parámetro."
        },
        {
          "term": "Distribución a Posteriori P(θ | Datos)",
          "desc": "Síntesis actualizada que une el conocimiento previo con la evidencia empírica."
        },
        {
          "term": "Falacia de la Tasa Base",
          "desc": "Ignorar la prevalencia basal al interpretar la probabilidad posterior de una prueba."
        }
      ]
    },
    "simulation_en": {
      "name": "Bayesian Update Simulator",
      "description": "Adjust prior prevalence and test specificity. Watch the prior distribution update through the likelihood function into the posterior distribution in real time!"
    },
    "simulation_es": {
      "name": "Simulador de Actualización Bayesiana",
      "description": "Ajusta la prevalencia a priori y la especificidad. ¡Observa cómo la distribución a priori se actualiza mediante la función de verosimilitud hasta conformar la posteriori!"
    },
    "interpretation_en": {
      "title": "Bayesian Outcome & Decision",
      "recommendation": "Posterior probability of disease is only 1.94%. Perform a confirmatory secondary test with independent error modalities before starting invasive treatment.",
      "metrics": [
        {
          "label": "Prior Probability P(Disease)",
          "note": "0.001 (0.1% base rate)"
        },
        {
          "label": "Positive Predictive Value (PPV)",
          "note": "1.94% (Posterior probability of disease)"
        },
        {
          "label": "False Positive Ratio",
          "note": "50 false positives for every 1 true positive"
        },
        {
          "label": "After 2nd Independent Positive",
          "note": "Posterior jumps to 98.2% (Diagnostic certainty)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Resultado y Decisión Bayesiana",
      "recommendation": "La probabilidad a posteriori de enfermedad es de apenas el 1,94%. Realiza una prueba confirmatoria ortogonal antes de iniciar terapias invasivas.",
      "metrics": [
        {
          "label": "Probabilidad a Priori P(Enfermedad)",
          "note": "0,001 (Tasa base del 0,1%)"
        },
        {
          "label": "Valor Predictivo Positivo (VPP)",
          "note": "1,94% (Probabilidad a posteriori real)"
        },
        {
          "label": "Proporción de Falsos Positivos",
          "note": "50 falsos positivos por cada 1 enfermo real"
        },
        {
          "label": "Tras 2º Test Positivo Independiente",
          "note": "La posteriori salta al 98,2% (Certeza diagnóstica)"
        }
      ]
    },
    "quiz_en": {
      "question": "What is the fundamental philosophical distinction between frequentist and Bayesian statistics regarding unknown parameters θ?",
      "options": [
        "Frequentists use computers, while Bayesians rely on analytical integrals",
        "Frequentists treat parameter θ as an unknown fixed constant and consider data random, while Bayesians model parameter θ itself as a random variable with a probability distribution",
        "Frequentists evaluate only binary outcomes, while Bayesians evaluate continuous outcomes",
        "Bayesian inference can only be computed when sample size N is less than 30"
      ],
      "explanation": "Profound philosophical clarity! Frequentists view parameters as fixed constants. Bayesians express all scientific uncertainty regarding parameters via probability distributions."
    },
    "quiz_es": {
      "question": "¿Cuál es la diferencia filosófica y metodológica fundamental entre la estadística frecuentista y la bayesiana sobre el parámetro θ?",
      "options": [
        "Los frecuentistas usan computación numérica y los bayesianos integrales analíticas exactas",
        "Los frecuentistas consideran el parámetro θ como una constante fija desconocida y los datos como aleatorios; los bayesianos modelan al propio parámetro θ como una variable aleatoria dotada de distribución de probabilidad",
        "Los frecuentistas solo analizan respuestas binarias y los bayesianos continuas",
        "La inferencia bayesiana solo es válida cuando el tamaño muestral N es inferior a 30"
      ],
      "explanation": "¡Claridad conceptual de primer orden! Los frecuentistas conciben los parámetros como constantes fijas; los bayesianos modelan la incertidumbre asignando distribuciones de probabilidad a los parámetros."
    }
  },
  {
    "id": 20,
    "phase": 4,
    "phaseTitle": "Fase 4: De Geavanceerde Grenzen",
    "title": "Bayesiaanse MCMC & Hamiltoniaanse Monte Carlo",
    "subtitle": "Steekproeftrekking uit complexe posteriors via Markov Chains (PyMC & Stan).",
    "badge": "MCMC",
    "case": {
      "title": "Casus: Complexe Verdelingen die Wiskundig Niet Integreerbaar Zijn",
      "context": "Bij complexe modellen met honderden parameters kan de noemer $P(D) = \\int P(D|\\theta)P(\\theta)d\\theta$ niet met pen en papier berekend worden. Hoe kan een computer dan toch de posterior verkennen?",
      "data": [
        {
          "methode": "Metropolis-Hastings",
          "efficiency": "Trage random walk",
          "acceptatie": "23%"
        },
        {
          "methode": "No-U-Turn Sampler (NUTS / Stan)",
          "efficiency": "Fysische simulatie (HMC)",
          "acceptatie": "85%"
        }
      ],
      "question": "Hoe wandelt een MCMC-keten door de parameterruimte om een representatieve wolk van posteriorsamples te verzamelen?"
    },
    "theory": {
      "summary": "Markov Chain Monte Carlo (MCMC) genereert steekproeven uit de posterior zonder de normalisatieconstante te berekenen. Hamiltoniaanse Monte Carlo (HMC) gebruikt wrijvingloze fysica (een knikker die over een heuvelachtig potentiaaloppervlak rolt) om razendsnel hoog-dimensionale ruimten te verkennen.",
      "keyConcepts": [
        {
          "term": "Traceplot",
          "desc": "Tijdsreeks van de wandeling. Moet eruitzien als een wollige rups (goede convergentie)."
        },
        {
          "term": "R-hat (R̂)",
          "desc": "Gelman-Rubin diagnostiek. R̂ < 1.05 betekent dat onafhankelijke ketens het eens zijn."
        }
      ],
      "mathFormula": "H(p, q) = U(q) + K(p) \\quad \\text{met } \\frac{dq}{dt} = \\frac{\\partial H}{\\partial p}, \\; \\frac{dp}{dt} = -\\frac{\\partial H}{\\partial q}",
      "formulaExplain": "HMC lost Hamilton's bewegingsvergelijkingen op om grote sprongen door de kansruimte te maken."
    },
    "simulation": {
      "type": "mcmc_sampler_simulator",
      "name": "Hamiltoniaanse MCMC Wandelaar",
      "description": "Bekijk hoe de sampler stappen zet door een 2D posteriorlandschap en inspecteer de live traceplot."
    },
    "interpretation": {
      "title": "MCMC Diagnostiek",
      "metrics": [
        {
          "label": "R-hat (R̂)",
          "value": "1.002",
          "note": "Perfecte convergentie (< 1.05)"
        },
        {
          "label": "Effectieve Steekproefgrootte (ESS)",
          "value": "3.400 samples",
          "note": "Voldoende onafhankelijke trekkingen"
        }
      ],
      "recommendation": "Pas MCMC pas toe wanneer analytische benaderingen te kort schieten voor niet-lineaire hiërarchische modellen."
    },
    "quiz": {
      "question": "Wat duidt op gezonde MCMC-convergentie in een traceplot en Gelman-Rubin diagnostiek?",
      "options": [
        "Ketenwaarden die snel convergeren naar één constante horizontale lijn zonder enige oscillatie",
        "Een 'harige rups' waarin meerdere onafhankelijke ketens homogeen door elkaar heen mengen met een Gelman-Rubin R̂ dicht bij 1.00 (R̂ < 1.05)",
        "Een periodieke sinusgolf waarin de keten systematisch de prior en de likelihood afwisselt",
        "Een acceptatieratio van exact 100% bij Metropolis-Hastings voorstellen"
      ],
      "correctIndex": 1,
      "explanation": "Haarscherp! Goede MCMC-ketens verkennen de gehele posterior doelgericht. Een 'harige rups' en R̂ ≈ 1.00 bewijzen dat de ketens stationair zijn en dezelfde verdeling samplen."
    },
    "case_en": {
      "title": "Case Study: Complex High-Dimensional Distributions Unintegrable by Hand",
      "context": "A research team specifies a 20-parameter non-linear hierarchical pharmacokinetic model. The Bayesian denominator integral ∫ P(D|θ)P(θ)dθ is mathematically impossible to solve analytically in 20 dimensions.",
      "question": "How do Markov Chain Monte Carlo (MCMC) and Hamiltonian Monte Carlo (HMC) sample the full posterior without calculating the normalizing denominator?"
    },
    "case_es": {
      "title": "Caso de Estudio: Distribuciones Complejas Analíticamente Inintegrables",
      "context": "Un equipo formula un modelo farmacocinético jerárquico no lineal de 20 parámetros. La integral del denominador bayesiano ∫ P(D|θ)P(θ)dθ es analíticamente irresoluble en 20 dimensiones.",
      "question": "¿Cómo logran MCMC y Monte Carlo Hamiltoniano (HMC) muestrear la distribución posterior completa sin evaluar el denominador normalizador?"
    },
    "theory_en": {
      "summary": "MCMC bypasses the intractable denominator by constructing a Markov chain whose stationary distribution is exactly the target posterior. Hamiltonian Monte Carlo (HMC/NUTS, used in Stan and PyMC) simulates frictionless particle physics along the gradient ∇log P(θ|D) to explore high dimensions efficiently.",
      "formulaExplain": "Hamilton's equations: dq/dt = ∂H/∂p, dp/dt = -∂H/∂q. By translating parameter geometry into potential energy and gradient momentum into kinetic energy, HMC avoids random-walk diffusion.",
      "keyConcepts": [
        {
          "term": "Hamiltonian Monte Carlo (HMC)",
          "desc": "Physics-inspired sampling utilizing gradient vectors ∇log P to glide through complex geometries."
        },
        {
          "term": "Gelman-Rubin Statistic (R̂)",
          "desc": "Convergence diagnostic: R̂ < 1.05 proves multiple independent chains have converged to the identical target."
        },
        {
          "term": "Effective Sample Size (ESS)",
          "desc": "Number of statistically independent draws produced after accounting for autocorrelation."
        },
        {
          "term": "Hairy Caterpillar Traceplot",
          "desc": "Visual proof of stationarity: chains overlay identically and fluctuate uniformly around the mode."
        }
      ]
    },
    "theory_es": {
      "summary": "MCMC sortea el denominador intratable generando una cadena de Markov cuya distribución estacionaria es exactamente la posterior objetivo. Monte Carlo Hamiltoniano (HMC/NUTS, en Stan y PyMC) simula física hamiltoniana guiada por el gradiente ∇log P(θ|D) para muestrear espacios complejos.",
      "formulaExplain": "Ecuaciones de Hamilton: dq/dt = ∂H/∂p, dp/dt = -∂H/∂q. Al traducir la geometría del parámetro a energía potencial y el gradiente a energía cinética, HMC supera la parálisis del paseo aleatorio.",
      "keyConcepts": [
        {
          "term": "Monte Carlo Hamiltoniano (HMC)",
          "desc": "Muestreador inspirado en la física que utiliza gradientes ∇log P para explorar altas dimensiones."
        },
        {
          "term": "Estadístico de Gelman-Rubin (R̂)",
          "desc": "Diagnóstico de convergencia: R̂ < 1,05 demuestra que múltiples cadenas independientes muestrean la misma distribución."
        },
        {
          "term": "Tamaño Muestral Efectivo (ESS)",
          "desc": "Número de extracciones incorrelacionadas tras descontar la autocorrelación de la cadena."
        },
        {
          "term": "Gráfico de Oruga Peluda (Traceplot)",
          "desc": "Evidencia visual de estacionariedad: cadenas superpuestas que oscilan uniformemente en torno a la moda."
        }
      ]
    },
    "simulation_en": {
      "name": "Hamiltonian MCMC Walker",
      "description": "Watch Hamiltonian momentum vectors explore a challenging banana-shaped posterior geometry. Compare HMC against naive random-walk Metropolis-Hastings!"
    },
    "simulation_es": {
      "name": "Caminante MCMC Hamiltoniano",
      "description": "Observa cómo vectores de momento hamiltonianos exploran una geometría posterior en forma de plátano. ¡Compara HMC frente al paseo aleatorio ineficiente de Metropolis-Hastings!"
    },
    "interpretation_en": {
      "title": "MCMC Convergence Diagnostics",
      "recommendation": "All 4 chains exhibit R̂ = 1.002 with Bulk-ESS > 2,400. Zero divergences observed. Posterior inference is fully validated for medical reporting.",
      "metrics": [
        {
          "label": "Gelman-Rubin (R̂)",
          "note": "1.002 (Ideal convergence: R̂ < 1.05)"
        },
        {
          "label": "Bulk Effective Sample Size (ESS)",
          "note": "2,840 independent draws"
        },
        {
          "label": "Divergent Transitions",
          "note": "0 (No funnel geometry traps)"
        },
        {
          "label": "95% Highest Density Interval (HDI)",
          "note": "[1.82, 3.44] (Bayesian credible interval)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Diagnósticos de Convergencia MCMC",
      "recommendation": "Las 4 cadenas exhiben R̂ = 1,002 con Bulk-ESS > 2.400. Cero divergencias detectadas. La inferencia a posteriori queda plenamente validada.",
      "metrics": [
        {
          "label": "Gelman-Rubin (R̂)",
          "note": "1,002 (Convergencia ideal: R̂ < 1,05)"
        },
        {
          "label": "Tamaño Muestral Efectivo (ESS)",
          "note": "2.840 muestras independientes"
        },
        {
          "label": "Transiciones Divergentes",
          "note": "0 (Sin colapsos geométricos)"
        },
        {
          "label": "Intervalo de Credibilidad al 95% (HDI)",
          "note": "[1,82; 3,44] (Rango bayesiano creíble)"
        }
      ]
    },
    "quiz_en": {
      "question": "What visual diagnostic and numeric threshold confirm healthy MCMC convergence in modern Bayesian modeling (Stan / PyMC)?",
      "options": [
        "A traceplot displaying four separated lines with R̂ > 1.50",
        "A traceplot resembling a stationary 'hairy caterpillar' with Gelman-Rubin R̂ ≈ 1.00 (< 1.05) and zero divergent transitions",
        "An autocorrelation plot that stays strictly positive at lag 50",
        "Proposing an acceptance rate of exactly 100% in Metropolis-Hastings"
      ],
      "explanation": "Razor-sharp mastery! Healthy MCMC chains explore the posterior seamlessly. A 'hairy caterpillar' traceplot and R̂ ≈ 1.00 prove chains are stationary and sampling identical geometry."
    },
    "quiz_es": {
      "question": "¿Qué diagnóstico visual y umbral numérico confirman una convergencia MCMC óptima en el modelado bayesiano moderno (Stan / PyMC)?",
      "options": [
        "Un traceplot que muestre 4 líneas separadas y un R̂ > 1,50",
        "Un traceplot con apariencia de 'oruga peluda' estacionaria, estadístico Gelman-Rubin R̂ ≈ 1,00 (< 1,05) y ausencia de transiciones divergentes",
        "Un gráfico de autocorrelación que permanezca estrictamente positivo en el retardo 50",
        "Lograr una tasa de aceptación del 100% exacto en Metropolis-Hastings"
      ],
      "explanation": "¡Riguroso y certero! Cadenas MCMC convergentes exploran la posterior con fluidez. El patrón de 'oruga peluda' y R̂ ≈ 1,00 demuestran que las cadenas son estacionarias y muestrean el mismo espacio."
    }
  },
  {
    "id": 21,
    "phase": 4,
    "phaseTitle": "Fase 4: De Geavanceerde Grenzen",
    "title": "Niet-Parametrische Bayesiaanse Modellen & Gaussiaanse Processen",
    "subtitle": "Oneindig veel parameters: modelleren van complete functies via Gaussische Processen (GPs).",
    "badge": "Gaussiaanse Processen",
    "case": {
      "title": "Casus: Bodemschattingen op Onbekend Terrein (Kriging / GP)",
      "context": "We boren op 12 plekken naar grondwaterkwaliteit. We willen niet alleen de kwaliteit voorspellen op ongemeten plekken, maar ook exact weten HOE ONZEKER we zijn tussen de boorpunten.",
      "data": [
        {
          "boorpunt": "B01",
          "xCoord": 1.2,
          "meting": 8.4,
          "onzekerheid": "0.0 (exact gemeten)"
        },
        {
          "boorpunt": "B02",
          "xCoord": 3.5,
          "meting": 4.1,
          "onzekerheid": "0.0 (exact gemeten)"
        },
        {
          "tussengebied": "X = 2.3",
          "xCoord": 2.3,
          "voorspelling": "6.2",
          "onzekerheid": "± 2.4 (onzekerheidsband)"
        }
      ],
      "question": "Wat is een Gaussiaans Proces en hoe levert een kernel-matrix een verdeling over oneindig veel functies op?"
    },
    "theory": {
      "summary": "Een Gaussiaans Proces (GP) is een niet-parametrische methode: we kiezen geen vaste formule, maar definiëren een verdeling over functies. Elke eindige subset van punten is multivariaat normaal verdeeld. Waar data ligt, knijpt de onzekerheidsband samen tot nul; tussen datapunten zwelt de onzekerheid op.",
      "keyConcepts": [
        {
          "term": "Covariantie Kernel k(x, x')",
          "desc": "Bepaalt de gladheid (bijv. Radial Basis Function / Squared Exponential)."
        },
        {
          "term": "Oneindig-dimensionaal",
          "desc": "Een functie kan worden gezien als een oneindig lange vector van waarden."
        }
      ],
      "mathFormula": "f(x) \\sim \\mathcal{GP}\\left(m(x), \\; k(x, x')\\right) \\quad \\text{met } k(x, x') = \\sigma^2 \\exp\\left(-\\frac{(x - x')^2}{2\\ell^2}\\right)",
      "formulaExplain": "De lengteschaal $\\ell$ bepaalt hoe snel correlatie tussen twee punten vervalt in de ruimte."
    },
    "simulation": {
      "type": "gaussian_process_simulator",
      "name": "Gaussiaans Proces (GP) Visualizer",
      "description": "Klik om datapunten toe te voegen. Zie hoe de onzekerheidsband (95% credible band) rond je punten samenknijpt!"
    },
    "interpretation": {
      "title": "GP Resultaat",
      "metrics": [
        {
          "label": "Lengteschaal (ℓ)",
          "value": "1.85 km",
          "note": "Reikwijdte van ruimtelijke correlatie"
        },
        {
          "label": "Signaalvariantie (σ²)",
          "value": "3.20",
          "note": "Totale ruimtelijke variabiliteit"
        }
      ],
      "recommendation": "GPs zijn ongeëvenaard voor ruimtelijke interpolatie, bayesiaanse optimalisatie en fysische modellering."
    },
    "quiz": {
      "question": "Wat gebeurt er met de predictieve onzekerheid van een Gaussiaans Proces (zonder observatieruis, σ_n = 0) op de exacte locatie van een waargenomen datapunt?",
      "options": [
        "De voorspelde variantie convergeert naar de marginale prior variantie σ_f²",
        "De residuele onzekerheid krimpt exact naar nul, waardoor de functie strict door het geobserveerde punt interpoleert",
        "De lengteschaal ℓ daalt lokaal naar nul, waardoor de covariantiekernel instort",
        "De onzekerheid wordt gelijk aan het conditionele gemiddelde van de RBF-kernel"
      ],
      "correctIndex": 1,
      "explanation": "Exact! Zonder meetruis is de observatie een absolute zekerheid. De conditionele multivariate normale verdeling heeft op dat punt variantie 0 en de GP-onzekerheidsband krimpt tot nul."
    },
    "case_en": {
      "title": "Case Study: Spatial Soil Contamination Mapping (Gaussian Processes)",
      "context": "Environmental scientists measure heavy metal soil pollution across 15 drill sites in an industrial basin. They need to predict contamination across the entire continuous surface, along with precise uncertainty bounds for unmeasured coordinates.",
      "question": "How do Gaussian Processes (GPs) place prior distributions over infinite function spaces rather than fixed finite parameter sets?"
    },
    "case_es": {
      "title": "Caso de Estudio: Mapeo de Contaminación del Suelo (Procesos Gaussianos)",
      "context": "Científicos ambientales miden metales pesados en 15 perforaciones en una cuenca industrial. Necesitan predecir la contaminación en toda la superficie continua, junto a límites precisos de incertidumbre en las coordenadas no medidas.",
      "question": "¿Cómo definen los Procesos Gaussianos (GPs) distribuciones previas sobre espacios continuos de funciones en lugar de vectores fijos de parámetros?"
    },
    "theory_en": {
      "summary": "A Gaussian Process (GP) is a non-parametric Bayesian collection of infinite random variables, any finite subset of which has a joint multivariate Gaussian distribution. Instead of fitting a parametric formula, a GP defines a distribution over possible continuous functions f(x) ~ GP(m(x), k(x, x')).",
      "formulaExplain": "Squared Exponential Kernel: k(x, x') = σ_f²·exp(-||x - x'||² / 2ℓ²). Points closer in space exhibit high covariance. Conditioning on observed points shrinks posterior predictive variance strictly to zero at measured locations.",
      "keyConcepts": [
        {
          "term": "Kernel Covariance Function k(x, x')",
          "desc": "Defines the smoothness, amplitude, and spatial correlation length ℓ of the function space."
        },
        {
          "term": "Lengthscale (ℓ)",
          "desc": "Determines how rapidly correlation decays across spatial distance."
        },
        {
          "term": "Posterior Predictive Mean",
          "desc": "The optimal smooth interpolating function passing through observed points."
        },
        {
          "term": "Predictive Uncertainty Band (± 2σ)",
          "desc": "Expands in unmeasured regions and collapses tightly to zero at measured locations."
        }
      ]
    },
    "theory_es": {
      "summary": "Un Proceso Gaussiano (GP) es una colección no paramétrica bayesiana de infinitas variables aleatorias, donde cualquier subconjunto finito sigue una distribución normal multivariante. En lugar de ajustar fórmulas rígidas, un GP coloca una distribución sobre espacios de funciones f(x) ~ GP(m(x), k(x, x')).",
      "formulaExplain": "Kernel Exponencial Cuadrático: k(x, x') = σ_f²·exp(-||x - x'||² / 2ℓ²). Puntos cercanos covarían fuertemente. Condicionar en datos observados reduce la varianza predictiva exactamente a cero en los puntos medidos.",
      "keyConcepts": [
        {
          "term": "Función Kernel de Covarianza k(x, x')",
          "desc": "Determina la suavidad, amplitud y escala de correlación espacial ℓ del espacio de funciones."
        },
        {
          "term": "Escala de Longitud (ℓ)",
          "desc": "Fija la velocidad a la que decae la correlación al alejarse en el espacio."
        },
        {
          "term": "Media Predictiva a Posteriori",
          "desc": "La función de interpolación suave óptima que conecta las observaciones."
        },
        {
          "term": "Banda de Incertidumbre (± 2σ)",
          "desc": "Se expande en zonas inexploradas y colapsa exactamente a cero en las ubicaciones muestreadas."
        }
      ]
    },
    "simulation_en": {
      "name": "Gaussian Process (GP) Visualizer",
      "description": "Click anywhere on the canvas to add observations. Watch how the posterior mean snaps to the point while the shaded uncertainty ribbon instantly pinches to zero!"
    },
    "simulation_es": {
      "name": "Visualizador de Procesos Gaussianos (GP)",
      "description": "Haz clic en el lienzo para añadir observaciones. ¡Observa cómo la media posterior interpola el punto mientras la banda de incertidumbre colapsa de inmediato a cero!"
    },
    "interpretation_en": {
      "title": "Gaussian Process Spatial Result",
      "recommendation": "Soil contamination exceeds safety threshold (>50 ppm) in the northeast quadrant with posterior probability P = 0.94. Immediate remediation required.",
      "metrics": [
        {
          "label": "Optimal Lengthscale (ℓ)",
          "note": "2.4 km (Spatial correlation range)"
        },
        {
          "label": "Output Variance (σ_f²)",
          "note": "18.2 ppm²"
        },
        {
          "label": "Uncertainty at Known Sites",
          "note": "σ_pred = 0.00 ppm (Noise-free interpolation)"
        },
        {
          "label": "Uncertainty in Exploration Gap",
          "note": "σ_pred = ± 3.8 ppm (High exploration priority)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Resultado Espacial del Proceso Gaussiano",
      "recommendation": "La contaminación supera el umbral de seguridad (>50 ppm) en el cuadrante noreste con probabilidad posterior P = 0,94. Se requiere intervención prioritaria.",
      "metrics": [
        {
          "label": "Escala de Longitud Óptima (ℓ)",
          "note": "2,4 km (Alcance de correlación espacial)"
        },
        {
          "label": "Varianza de Salida (σ_f²)",
          "note": "18,2 ppm²"
        },
        {
          "label": "Incertidumbre en Puntos Medidos",
          "note": "σ_pred = 0,00 ppm (Interpolación sin ruido)"
        },
        {
          "label": "Incertidumbre en Zonas Desiertas",
          "note": "σ_pred = ± 3,8 ppm (Prioridad de prospección)"
        }
      ]
    },
    "quiz_en": {
      "question": "What happens to the predictive uncertainty of a noiseless Gaussian Process (σ_noise = 0) at the exact coordinates of an observed data point?",
      "options": [
        "The predicted variance converges to the marginal prior variance σ_f²",
        "The residual uncertainty shrinks strictly to zero, forcing the posterior function to interpolate through the observation",
        "The lengthscale ℓ collapses locally to zero",
        "The uncertainty becomes equal to the conditional mean of the RBF kernel"
      ],
      "explanation": "Exact! Without measurement noise, the observed point is an absolute certainty. The conditional multivariate normal variance at that coordinate collapses to zero."
    },
    "quiz_es": {
      "question": "¿Qué le sucede a la incertidumbre predictiva de un Proceso Gaussiano sin ruido (σ_ruido = 0) en las coordenadas exactas de un dato observado?",
      "options": [
        "La varianza predicha converge a la varianza marginal a priori σ_f²",
        "La incertidumbre residual se reduce exactamente a cero, obligando a la función posterior a interpolar estrictamente por el punto observado",
        "La escala de longitud ℓ colapsa localmente a cero",
        "La incertidumbre se iguala a la media condicional del kernel RBF"
      ],
      "explanation": "¡Exacto! Sin ruido de medida, la observación es una certeza matemática. La varianza condicional multivariante normal en esa coordenada se anula por completo."
    }
  },
  {
    "id": 22,
    "phase": 4,
    "phaseTitle": "Fase 4: De Geavanceerde Grenzen",
    "title": "Causale Inferentie in Hilbertruimten & Do-Calculus",
    "subtitle": "Van correlatie naar causale interventies via DAGs, do-calculus en Kernel Hilbertruimten (RKHS).",
    "badge": "Causale Inferentie",
    "case": {
      "title": "Casus: Kijken (Zien) versus Doen (Interveniëren)",
      "context": "Als mensen paracetamol slikken, hebben ze vaak hoofdpijn: $P(\\text{Hoofdpijn} \\mid \\text{Paracetamol}) > P(\\text{Hoofdpijn} \\mid \\text{Geen})$. Maakt paracetamol ziek? Nee! Maar $P(Y \\mid X) \\neq P(Y \\mid \\text{do}(X))$. Hoe formaliseert Judea Pearl dit?",
      "data": [
        {
          "perspectief": "Passieve Observatie P(Y | X)",
          "conclusie": "Positieve correlatie (hoofdpijn en pil)"
        },
        {
          "perspectief": "Actieve Interventie P(Y | do(X))",
          "conclusie": "Causale genezing (pil verlaagt hoofdpijn)"
        }
      ],
      "question": "Wat is het verschil tussen conditioneren op een observatie en interveniëren met de do-operator in een causale graaf?"
    },
    "theory": {
      "summary": "Causaliteit vereist een structureel causaal model (Directed Acyclic Graph, DAG). Met de do-operator $\\text{do}(X=x)$ knippen we de inkomende pijlen naar $X$ door om confounding te elimineren. In oneindig-dimensionale Hilbertruimten ($mathcal{H}$) embedden we complete kansverdelingen via Kernel Mean Embeddings om niet-lineaire causale effecten zonder parametrische aannames te schatten.",
      "keyConcepts": [
        {
          "term": "do(X = x)",
          "desc": "Stelt X actief in door interventie; verwijdert confounding invloeden."
        },
        {
          "term": "Backdoor Criterium",
          "desc": "Regels om te bepalen voor welke variabelen je moet controleren om causale effecten te isoleren."
        },
        {
          "term": "Reproducing Kernel Hilbert Space (RKHS, ℋ)",
          "desc": "Een oneindig-dimensionale functieruimte waarin kansverdelingen als vectoren worden gerepresenteerd."
        }
      ],
      "mathFormula": "P(Y \\mid \\text{do}(X = x)) = \\sum_z P(Y \\mid X=x, Z=z) P(Z=z) \\quad \\implies \\quad \\mu_{Y \\mid \\text{do}(x)} = \\int \\mathcal{C}_{Y \\mid X, Z}(x, z) \\, d\\mathbb{P}(z) \\in \\mathcal{H}_Y",
      "formulaExplain": "Pearl's backdoor-aanpassing isoleert het effect onder do(X). In een Reproducing Kernel Hilbert Space (RKHS, ℋ_Y) embedt de Kernel Mean Embedding de continue causale verdeling als element zonder parametrische aannames."
    },
    "simulation": {
      "type": "causal_dag_simulator",
      "name": "Causale DAG & do-Operator Lab",
      "description": "Schakel tussen 'Passief Observeren' en 'do(X) Interventie'. Zie hoe de confounder-pijl wordt doorgeknipt!"
    },
    "interpretation": {
      "title": "Causaal Besluit",
      "metrics": [
        {
          "label": "Observationeel Verschil",
          "value": "+0.35",
          "note": "Misleidend door selectiebias"
        },
        {
          "label": "Causaal Interventie-Effect",
          "value": "-0.48 (p < 0.001)",
          "note": "Het werkelijke genezende effect onder do(X)"
        }
      ],
      "recommendation": "Trek nooit causale beleidsconclusies zonder expliciete causale DAG en backdoor-verantwoording."
    },
    "quiz": {
      "question": "Wat is het doel van Judea Pearl's do-operator do(X = x) in een causaal Directed Acyclic Graph (DAG) model?",
      "options": [
        "Het conditioneert op alle colliders en tussenliggende variabelen om confounding te minimaliseren",
        "Het simuleert een actieve fysieke interventie door alle inkomende causale pijlen naar X door te knippen, waarmee het zuivere effect op Y wordt geïsoleerd van confounders",
        "Het transformeert niet-lineaire afhankelijkheden naar lineaire correlaties volgens de back-door stelling",
        "Het berekent de inverse kansgewichten van een propensity score model zonder grafentheorie"
      ],
      "correctIndex": 1,
      "explanation": "Meesterlijk! De do-operator scheidt associatie P(Y|X) van echte interventie P(Y|do(X)) door het 'graph surgery' principe: knip de pijlen door die X bepalen en meet het onvervalste effect."
    },
    "case_en": {
      "title": "Case Study: Seeing vs Doing (Causal DAGs & Graph Surgery)",
      "context": "A hospital observational database links medication prescription X to patient recovery Y. Sicker patients receive the drug more often (confounding by indication). Passive correlation P(Y | X) suggests the drug increases mortality, whereas an active randomized intervention do(X = 1) saves lives.",
      "question": "Why does Judea Pearl's do-operator P(Y | do(X)) sever incoming causal arrows, and how do Hilbert spaces embed distributions?"
    },
    "case_es": {
      "title": "Caso de Estudio: Observar frente a Actuar (DAGs Causales y do-Cálculo)",
      "context": "Una base de datos clínica vincula la prescripción del fármaco X con la recuperación Y. Los pacientes más graves reciben el fármaco con mayor frecuencia (confusión por indicación). La correlación pasiva P(Y | X) sugiere que el fármaco aumenta la mortalidad, mientras que una intervención activa do(X = 1) salva vidas.",
      "question": "¿Por qué el do-operador de Judea Pearl P(Y | do(X)) corta las flechas causales entrantes y cómo incrustan los espacios de Hilbert las distribuciones?"
    },
    "theory_en": {
      "summary": "Association P(Y | X) is not causation P(Y | do(X)). Pearl's do-calculus represents physical intervention by performing 'graph surgery': severing all incoming arrows into treatment variable X. Reproducing Kernel Hilbert Spaces (RKHS) embed full probability distributions as elements μ_P ∈ ℋ to identify non-linear causal effects.",
      "formulaExplain": "Back-Door Adjustment: P(Y | do(X = x)) = Σ_z P(Y | X = x, Z = z)·P(Z = z). Graph surgery isolates the unconfounded interventional distribution without requiring active RCT experimentation.",
      "keyConcepts": [
        {
          "term": "do-operator do(X = x)",
          "desc": "Formalizes active external intervention vs passive conditioning."
        },
        {
          "term": "Graph Surgery",
          "desc": "Removing all inbound causal arrows into X to extinguish confounding backdoor paths."
        },
        {
          "term": "Back-Door Criterion",
          "desc": "Graphical rule identifying the exact conditioning set Z required to block spurious associations."
        },
        {
          "term": "Kernel Mean Embedding in ℋ",
          "desc": "Embedding probability distributions into Hilbert spaces: μ_P = E_P[k(·, X)] ∈ ℋ to evaluate causal distances."
        }
      ]
    },
    "theory_es": {
      "summary": "Asociación P(Y | X) no es causación P(Y | do(X)). El do-cálculo de Judea Pearl formaliza la intervención mediante 'cirugía de grafos': cortar todas las flechas entrantes hacia la variable de tratamiento X. Los Espacios de Hilbert con Núcleo Reproducible (RKHS) incrustan distribuciones completas como elementos μ_P ∈ ℋ para evaluar efectos causales no lineales.",
      "formulaExplain": "Ajuste de Puerta Trasera: P(Y | do(X = x)) = Σ_z P(Y | X = x, Z = z)·P(Z = z). La cirugía de grafos aísla la distribución intervencional pura sin necesidad de ejecutar un ensayo físico.",
      "keyConcepts": [
        {
          "term": "do-operador do(X = x)",
          "desc": "Formaliza la intervención física externa frente al mero condicionamiento observacional."
        },
        {
          "term": "Cirugía de Grafos",
          "desc": "Eliminar todas las flechas entrantes hacia X para clausurar los caminos de puerta trasera."
        },
        {
          "term": "Criterio de Puerta Trasera",
          "desc": "Regla gráfica que identifica el conjunto exacto de covariables Z necesario para bloquear asociaciones espurias."
        },
        {
          "term": "Incrustación de Medias en ℋ",
          "desc": "Representar distribuciones en espacios de Hilbert: μ_P = E_P[k(·, X)] ∈ ℋ para calcular distancias causales."
        }
      ]
    },
    "simulation_en": {
      "name": "Causal DAG & do-Operator Lab",
      "description": "Toggle between passive observation P(Y | X) and causal intervention do(X). Watch Pearl's graph surgery snip the confounding arrows in real time!"
    },
    "simulation_es": {
      "name": "Laboratorio de DAGs Causales y Operador do",
      "description": "Alterna entre observación pasiva P(Y | X) e intervención causal do(X). ¡Observa cómo la cirugía de grafos corta las flechas de confusión en tiempo real!"
    },
    "interpretation_en": {
      "title": "Causal Decision & Policy Assessment",
      "recommendation": "Observational association was confounded (P(Recovery|No Drug) = 0.72 vs P(Recovery|Drug) = 0.54). Causal graph surgery proves the true interventional effect is positive: P(Recovery|do(Drug)) = 0.84.",
      "metrics": [
        {
          "label": "Observational Association",
          "note": "-0.18 (Spurious harmful appearance)"
        },
        {
          "label": "Causal Average Treatment Effect (ATE)",
          "note": "+0.30 (True therapeutic benefit)"
        },
        {
          "label": "Back-Door Set Conditioned",
          "note": "{Severity, Age} (Backdoor paths completely blocked)"
        },
        {
          "label": "Maximum Mean Discrepancy (MMD in ℋ)",
          "note": "0.42 (Statistically validated causal separation)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Decisión Causal y Evaluación de Políticas",
      "recommendation": "La correlación observacional estaba confundida (P(Recuperación|Sin Fármaco) = 0,72 vs P(Recuperación|Fármaco) = 0,54). La cirugía causal demuestra que el efecto real es positivo: P(Recuperación|do(Fármaco)) = 0,84.",
      "metrics": [
        {
          "label": "Asociación Observacional",
          "note": "-0,18 (Efecto perjudicial espurio)"
        },
        {
          "label": "Efecto Causal Promedio (ATE)",
          "note": "+0,30 (Beneficio terapéutico genuino)"
        },
        {
          "label": "Conjunto de Puerta Trasera",
          "note": "{Gravedad, Edad} (Caminos espurios neutralizados)"
        },
        {
          "label": "Discrepancia Máxima de Medias (MMD en ℋ)",
          "note": "0,42 (Separación causal estadísticamente validada)"
        }
      ]
    },
    "quiz_en": {
      "question": "What is the purpose of Judea Pearl's do-operator do(X = x) in a causal Directed Acyclic Graph (DAG)?",
      "options": [
        "It conditions on all collider nodes and mediators to minimize residual confounding",
        "It simulates an active physical intervention by severing all incoming causal arrows into X, isolating the pure causal effect on Y from confounders",
        "It converts non-linear dependencies into linear correlations according to the backdoor theorem",
        "It calculates inverse probability weights without graphical theory"
      ],
      "explanation": "Masterful causal acumen! The do-operator separates observational association P(Y|X) from true interventional action P(Y|do(X)) through graph surgery: cutting the arrows determining X."
    },
    "quiz_es": {
      "question": "¿Cuál es el propósito del operador do(X = x) de Judea Pearl en un Grafo Acíclico Dirigido (DAG) causal?",
      "options": [
        "Condicionar en todos los colisionadores y mediadores para minimizar la confusión",
        "Simular una intervención física activa cortando todas las flechas causales entrantes hacia X, aislando el efecto causal directo sobre Y de cualquier factor de confusión",
        "Transformar dependencias no lineales en correlaciones lineales según el teorema de puerta trasera",
        "Calcular ponderaciones por inverso de probabilidad sin teoría de grafos"
      ],
      "explanation": "¡Pensamiento causal de vanguardia! El operador do separa la asociación P(Y|X) de la intervención P(Y|do(X)) mediante cirugía de grafos: seccionando las flechas que determinan a X."
    }
  },
  {
    "id": 23,
    "phase": 4,
    "phaseTitle": "Fase 4: De Geavanceerde Grenzen",
    "title": "Stochastische Differentiële Vergelijkingen (SDE's)",
    "subtitle": "Continue dynamische systemen onder invloed van Brownse ruis: dX_t = μ dt + σ dB_t.",
    "badge": "SDE's",
    "case": {
      "title": "Casus: De Eiwitvouwing & Financiële Diffusie onder Ruis",
      "context": "Een molecuul beweegt in een vloeistof. Het voelt een krachtveld (drift $\\mu$), maar botst ook voortdurend willekeurig tegen miljoenen watermoleculen (diffusie $\\sigma dB_t$). Gewone differentiaalvergelijkingen falen omdat het pad nergens differentieerbaar is!",
      "data": [
        {
          "tijd": "t = 0.0",
          "positie": "x = 0.0",
          "regime": "Start in potentiaalkuil"
        },
        {
          "tijd": "t = 1.0",
          "positie": "x = 1.4",
          "regime": "Stochastische sprong over barrière"
        }
      ],
      "question": "Waarom vereist stochastische ruis een nieuwe calculus (Itô calculus) en wat betekent dX_t = μ(X_t)dt + σ(X_t)dB_t?"
    },
    "theory": {
      "summary": "Een Stochastische Differentiële Vergelijking (SDE) modelleert de evolutie van een toevalsproces in continue tijd. Het combineert een deterministische drift-component met een stochastische diffusie-term aangedreven door een Brownse beweging ($B_t$). Omdat Brownse paden fractal-achtig en nergens differentieerbaar zijn, geldt Itô's Lemma: $(dB_t)^2 = dt$.",
      "keyConcepts": [
        {
          "term": "Drift μ(X_t) dt",
          "desc": "De deterministische neiging of richting van het systeem."
        },
        {
          "term": "Diffusie σ(X_t) dB_t",
          "desc": "De intensiteit van de continue willekeurige fluctuaties."
        },
        {
          "term": "Itô Lemma",
          "desc": "De kettingregel voor stochastische functies waarin de tweede afgeleide meedoet: df = f' dX + ½ f'' σ² dt."
        }
      ],
      "mathFormula": "dX_t = \\mu(X_t, t) dt + \\sigma(X_t, t) dB_t \\quad \\text{met } (dB_t)^2 = dt",
      "formulaExplain": "De term $(dB_t)^2 = dt$ is het fundamentele verschil tussen klassieke Newtoniaanse calculus en stochastische calculus."
    },
    "simulation": {
      "type": "sde_brownian_simulator",
      "name": "SDE Euler-Maruyama Traject Simulator",
      "description": "Verander de drift μ en diffusie σ en genereer live 20 stochastische paden door de tijd."
    },
    "interpretation": {
      "title": "SDE Karakteristieken",
      "metrics": [
        {
          "label": "Verwachte Drift E[X_t]",
          "value": "Lineaire trend",
          "note": "Gemiddelde pad van het ensemble"
        },
        {
          "label": "Variantie Var[X_t]",
          "value": "Groeit evenredig met t",
          "note": "Diffusie spreidt het ensemble uit"
        }
      ],
      "recommendation": "SDE's zijn de standaardtaal voor biofysica, neurodynamica en continue financiële markten."
    },
    "quiz": {
      "question": "Wat is volgens Itô calculus de doorslaggevende reden dat we de term ½ f''(X_t) σ² dt meenemen in Itô's Lemma?",
      "options": [
        "Omdat de verwachting van een Brownse beweging met de tijd kwadratisch divergeert",
        "Omdat de kwadratische variatie van een Brownse beweging niet nul is, maar deterministisch gelijk is aan dt ((dB_t)² = dt), waardoor tweede-orde Taylor-termen niet verwaarloosbaar zijn in de limiet",
        "Omdat Itô calculus alleen toepasbaar is op niet-continue martingalen met sprongprocessen",
        "Omdat de Stratonovich integraal anders een niet-nul verwachtingsdrift zou opleveren in de driftterm"
      ],
      "correctIndex": 1,
      "explanation": "Fenomenaal! Omdat (dB_t)² = dt van dezelfde orde is als dt, blijft de tweede afgeleide in de Taylor-expansie behouden. Dit is het hart van stochastische calculus."
    },
    "case_en": {
      "title": "Case Study: Protein Folding & Financial Diffusion Under Continuous Noise",
      "context": "A biophysics lab models molecular protein conformations driven by deterministic thermal gradient drift and continuous random Brownian motion collisions. Classical calculus dy/dt = f(y) fails because Brownian motion paths are nowhere differentiable.",
      "question": "Why does Itô Calculus require the second-order expansion term ½·σ²·f''(X_t)·dt in Itô's Lemma?"
    },
    "case_es": {
      "title": "Caso de Estudio: Plegamiento de Proteínas y Difusión Financiera bajo Ruido",
      "context": "Un laboratorio biofísico modela conformaciones moleculares impulsadas por gradientes térmicos y colisiones brownianas continuas. El cálculo diferencial clásico dy/dt = f(y) fracasa porque las trayectorias brownianas no son diferenciables en ningún punto.",
      "question": "¿Por qué el Cálculo de Itô exige retener el término de segundo orden ½·σ²·f''(X_t)·dt en el Lema de Itô?"
    },
    "theory_en": {
      "summary": "Stochastic Differential Equations (SDEs) model systems evolving under deterministic drift and stochastic Brownian noise: dX_t = μ(X_t)dt + σ(X_t)dB_t. Because Brownian motion has non-zero quadratic variation ((dB_t)² = dt), standard chain rules are invalid and require Itô's Lemma.",
      "formulaExplain": "Itô's Lemma: df(X_t) = [f'(X_t)·μ + ½·f''(X_t)·σ²]dt + f'(X_t)·σ·dB_t. The second derivative term ½·f''(X_t)·σ² dt is the non-zero correction arising from stochastic volatility.",
      "keyConcepts": [
        {
          "term": "Brownian Motion (B_t)",
          "desc": "Continuous Gaussian process with independent increments: B_t - B_s ~ N(0, t - s)."
        },
        {
          "term": "Deterministic Drift μ(X_t)dt",
          "desc": "Expected directional trajectory or energy gradient flow."
        },
        {
          "term": "Stochastic Diffusion σ(X_t)dB_t",
          "desc": "Random shocks scaling with the square root of time (dt^½)."
        },
        {
          "term": "Euler-Maruyama Scheme",
          "desc": "Numerical integration algorithm for simulating continuous SDE sample trajectories."
        }
      ]
    },
    "theory_es": {
      "summary": "Las Ecuaciones Diferenciales Estocásticas (SDEs) modelan sistemas sujetos a una deriva determinista y ruido browniano estocástico: dX_t = μ(X_t)dt + σ(X_t)dB_t. Puesto que el movimiento browniano posee variación cuadrática no nula ((dB_t)² = dt), la regla de la cadena clásica debe corregirse mediante el Lema de Itô.",
      "formulaExplain": "Lema de Itô: df(X_t) = [f'(X_t)·μ + ½·f''(X_t)·σ²]dt + f'(X_t)·σ·dB_t. El término de segunda derivada ½·f''(X_t)·σ² dt es la corrección obligatoria derivada de la volatilidad estocástica.",
      "keyConcepts": [
        {
          "term": "Movimiento Browniano (B_t)",
          "desc": "Proceso gaussiano continuo con incrementos independientes: B_t - B_s ~ N(0, t - s)."
        },
        {
          "term": "Deriva Determinista μ(X_t)dt",
          "desc": "Trayectoria direccional esperada o flujo de gradiente de energía potencial."
        },
        {
          "term": "Difusión Estocástica σ(X_t)dB_t",
          "desc": "Perturbaciones aleatorias continuas que escalan con la raíz cuadrada del tiempo (dt^½)."
        },
        {
          "term": "Esquema Euler-Maruyama",
          "desc": "Algoritmo numérico fundamental para simular trayectorias continuas de SDEs."
        }
      ]
    },
    "simulation_en": {
      "name": "SDE Euler-Maruyama Trajectory Simulator",
      "description": "Tweak drift velocity μ and diffusion volatility σ. Simulate 50 simultaneous stochastic paths and watch the Fokker-Planck probability density spread over time!"
    },
    "simulation_es": {
      "name": "Simulador de Trayectorias SDE: Euler-Maruyama",
      "description": "Modifica la velocidad de deriva μ y la volatilidad estocástica σ. ¡Simula 50 trayectorias simultáneas y comprueba cómo la densidad de Fokker-Planck se dilata en el tiempo!"
    },
    "interpretation_en": {
      "title": "SDE Characteristics & Physics Decision",
      "recommendation": "Drift μ = -0.50 stabilizes molecular folding toward minimal free energy, while diffusion σ = 1.2 enables stochastic barrier crossing out of local metastable traps.",
      "metrics": [
        {
          "label": "Deterministic Drift Rate (μ)",
          "note": "-0.50 (Gradient potential descent)"
        },
        {
          "label": "Stochastic Volatility (σ)",
          "note": "1.20 (Thermal Langevin excitation)"
        },
        {
          "label": "Quadratic Variation (dB_t)²",
          "note": "Exact match: (dB_t)² = dt"
        },
        {
          "label": "Stationary Distribution",
          "note": "Ornstein-Uhlenbeck Gaussian equilibrium"
        }
      ]
    },
    "interpretation_es": {
      "title": "Características SDE y Decisión Física",
      "recommendation": "La deriva μ = -0,50 estabiliza el plegamiento hacia el mínimo de energía libre, mientras la difusión σ = 1,20 permite superar barreras energéticas locales.",
      "metrics": [
        {
          "label": "Tasa de Deriva Determinista (μ)",
          "note": "-0,50 (Descenso por gradiente de potencial)"
        },
        {
          "label": "Volatilidad Estocástica (σ)",
          "note": "1,20 (Excitación térmica de Langevin)"
        },
        {
          "label": "Variación Cuadrática (dB_t)²",
          "note": "Concordancia exacta: (dB_t)² = dt"
        },
        {
          "label": "Distribución Estacionaria",
          "note": "Equilibrio gaussiano de Ornstein-Uhlenbeck"
        }
      ]
    },
    "quiz_en": {
      "question": "According to Itô calculus, what is the definitive mathematical justification for retaining the second-order term ½·f''(X_t)·σ²·dt in Itô's Lemma?",
      "options": [
        "Because the expectation of Brownian motion diverges quadratically over time",
        "Because the quadratic variation of Brownian motion is non-zero and deterministically equal to dt ((dB_t)² = dt), ensuring second-order Taylor terms do not vanish in the continuous limit",
        "Because Itô calculus only applies to discontinuous jump martingales",
        "Because the Stratonovich integral would otherwise generate non-zero drift in the potential gradient"
      ],
      "explanation": "Phenomenal! Because (dB_t)² = dt is of the exact same first-order magnitude as dt, the second derivative in Taylor expansion persists. This is the bedrock of stochastic calculus."
    },
    "quiz_es": {
      "question": "¿Cuál es la justificación matemática concluyente según el cálculo de Itô para retener el término de segundo orden ½·f''(X_t)·σ²·dt en el Lema de Itô?",
      "options": [
        "Que la esperanza del movimiento browniano diverge cuadráticamente con el tiempo",
        "Que la variación cuadrática del movimiento browniano es no nula y determinísticamente igual a dt ((dB_t)² = dt), impidiendo que los términos de Taylor de segundo orden se desvanezcan en el límite",
        "Que el cálculo de Itô solo es aplicable a martingalas con procesos de salto discontinuos",
        "Que la integral de Stratonovich produciría una deriva no nula en el gradiente de potencial"
      ],
      "explanation": "¡Fenomenal! Puesto que (dB_t)² = dt es del mismo orden de magnitud infinitesimal que dt, la segunda derivada de la expansión de Taylor se preserva. Es el corazón del cálculo estocástico."
    }
  },
  {
    "id": 24,
    "phase": 4,
    "phaseTitle": "Fase 4: De Geavanceerde Grenzen (Het Ultieme Apex)",
    "title": "Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces",
    "subtitle": "De theoretische grens van moderne statistiek: niet-euclidische manifolds, ruwe paden en oneindig-dimensionale causale inferentie.",
    "badge": "Het Ultieme Apex (Level 24)",
    "case": {
      "title": "Casus: Het Hersenlandschap & Complexe Klimaatdynamica",
      "context": "Stel je voor: we modelleren de dynamiek van 100 miljard neuronen of het planetaire klimaatsysteem. Data beweegt niet in een vlakke ruimte, maar op een gekromd energetisch oppervlak (Manifold $\\mathcal{M}$). De ruis is geen gladde Brownse beweging, maar extreem grillig fractaal (Rough Path met Hurst exponent $H < 1/2$). We kennen de vorm van de wetten niet (Non-parametric Bayesian), de toestand is een oneindig-dimensionaal veld in een Hilbertruimte ($\\mathcal{H}$), en we willen weten wat er gebeurt onder causale manipulatie (bijv. diepe hersenstimulatie of geo-engineering)!",
      "data": [
        {
          "dimensie": "Geometrie (Manifold M)",
          "eigenschap": "Gekromde ruimte (Riemannse tensor)",
          "rol": "Gradient buigt mee met kromming ∇_M"
        },
        {
          "dimensie": "Stochastiek (Rough Paths)",
          "eigenschap": "Hurst exponent H = 0.35 (< 0.5)",
          "rol": "Klassieke Ito faalt; Terry Lyons signatures herstellen continuïteit"
        },
        {
          "dimensie": "Parametrisatie (Bayesian GP)",
          "eigenschap": "Oneindig-dimensionale prior",
          "rol": "Geen starre formules, data vormt het potentiaalveld Φ"
        },
        {
          "dimensie": "Causaliteit (Hilbertruimte H)",
          "eigenschap": "Kernel Mean Embedding",
          "rol": "do(X) interventies op continue velden"
        }
      ],
      "question": "Hoe integreert de apex-formule geometrie, ruwe fractale stochastiek, oneindige dimensies en causaliteit tot één samenhangend model?"
    },
    "theory": {
      "summary": "Dit is het absolute theoretische zenith van de statistiek. Elk symbool in deze formule vertegenwoordigt een meesterwerk van de 20e en 21e-eeuwse wiskunde:",
      "keyConcepts": [
        {
          "term": "Riemannse Manifold (ℳ) & ∇_ℳ Φ",
          "desc": "Data leeft op een gekromd oppervlak. De gradiënt ∇_ℳ Φ volgt de geodeten (de kromming) van de ruimte via de Laplace-Beltrami operator."
        },
        {
          "term": "Ruwe Paden (Rough Paths dB_t^rough)",
          "desc": "Wanneer ruis te ruw is (Hurst H < 1/2), divergeert klassieke stochastische calculus. Terry Lyons' rough path theorie lost dit op door paden uit te breiden met geïtereerde integralen (Signatures)."
        },
        {
          "term": "Oneindig-dimensionale Hilbertruimte (ℋ)",
          "desc": "X_t is geen los getal meer, maar een complete continue functie of kwantumveld. Inproducten ⟨f, g⟩_ℋ definiëren afstanden en energie."
        },
        {
          "term": "Causale Hilbert Inferentie",
          "desc": "We modelleren niet slechts de associatieve stroom, maar de causale propagator onder do-interventies via Kernel Mean Embeddings in ℋ."
        }
      ],
      "mathFormula": "dX_t = -\\nabla_{\\mathcal{M}} \\Phi(X_t) dt + \\sigma(X_t) d\\mathbf{B}_t^{\\text{rough}} \\quad \\text{in } \\mathcal{H}",
      "formulaExplain": "In gewone mensentaal: een oneindig-dimensionaal toevalsproces ($X_t \\in \\mathcal{H}$) stroomt langs de steilste afdaling van een potentiaalveld over een gekromd oppervlak ($-\\nabla_{\\mathcal{M}} \\Phi dt$), terwijl het voortdurend wordt bestookt door ultra-grillige fractale schokken ($d\\mathbf{B}_t^{\\text{rough}}$), waarbij causale interventies de stroomlijnen herprogrammeren."
    },
    "simulation": {
      "type": "apex_manifold_simulator",
      "name": "De Ultieme Apex Simulator: Manifold, Rough Paths & Vectorveld",
      "description": "Bekijk de dynamiek op een gekromd 3D-zadelvlak / manifold. Pas de Hurst roughness H aan van Brownse beweging (0.50) naar ultra-ruw (0.25) en zie hoe de deeltjes over het Riemannse oppervlak bewegen onder het potentiaalveld!"
    },
    "interpretation": {
      "title": "Apex Model Synthese",
      "metrics": [
        {
          "label": "Manifold Kromming (Ricci Scalar)",
          "value": "R < 0 (Hyperbolisch)",
          "note": "Kromming buigt de driftlijnen af"
        },
        {
          "label": "Roughness Parameter (Hurst H)",
          "value": "H = 0.32",
          "note": "Niet-Markovian geheugeneffecten in ruis"
        },
        {
          "label": "Hilbertruimte Dimensie",
          "value": "dim(ℋ) = ∞",
          "note": "Functieruimte L²(ℳ) met reproducerende kernel"
        },
        {
          "label": "Causale Validatie",
          "value": "do(Interventie) bewezen",
          "note": "Stabiel onder externe perturbaties"
        }
      ],
      "recommendation": "Gefeliciteerd! Je hebt de volledige reis voltooid van de meest basale centrummaten (€ 3.000 vs € 48.000 salaris) tot aan de wiskundige grens van de moderne theoretische statistiek. Je begrijpt nu hoe eenvoudige lineaire modellen stap voor stap transformeren tot oneindig-dimensionale stochastische systemen op gekromde ruimten!"
    },
    "quiz": {
      "question": "Waarom vereist de apex-vergelijking dX_t = -∇_ℳ Φ dt + σ dB_t^rough Terry Lyons' Rough Path theorie wanneer de Hurst exponent H < 1/2 is?",
      "options": [
        "Omdat paden met H < 1/2 Markoviaans zijn en de Fokker-Planck vergelijking niet-oplosbaar maken",
        "Omdat voor H < 1/2 de p-variatie index p > 2 overschrijdt, waardoor klassieke Itô/Stratonovich integratie discontinu wordt en het pad verrijkt moet worden met hogere-orde tensor 'signatures' om een continue oplossing te garanderen",
        "Omdat gekromde Riemannse manifolds geen diffusietensoren toestaan in ruimtes met fractale dimensies",
        "Omdat de Malliavin-afgeleide van het rough vectorveld convergeert naar nul in de reproduceerbare kern"
      ],
      "correctIndex": 1,
      "explanation": "Ultieme apex-beheersing! Terry Lyons bewees dat voor extreem ruwe paden (p > 2, H < 1/2) de Itô-kaart discontinu is. Door het pad uit te breiden met tensor signatures wordt de oplossing weer continu in de p-variatie metriek."
    },
    "case_en": {
      "title": "Case Study: Cortical Dynamics & Infinite-Dimensional Climate Systems",
      "context": "At the absolute theoretical frontier of modern mathematical statistics, neuroscientists model non-linear cortical neural fields and geophysicists model turbulent climate attractors. Trajectories evolve on curved non-Euclidean Riemannian manifolds ℳ, driven by fractional rough noise with Hurst index H < 1/2, embedded in an infinite-dimensional causal Reproducing Kernel Hilbert Space ℋ.",
      "question": "Why does this ultimate apex model require Terry Lyons' Rough Path theory and infinite-dimensional RKHS operators?"
    },
    "case_es": {
      "title": "Caso de Estudio: Dinámica Cortical y Sistemas Climáticos de Dimensión Infinita",
      "context": "En el cénit teórico absoluto de la estadística matemática moderna, neurocientíficos modelan campos neuronales corticales y geofísicos estudian atractores climáticos turbulentos. Las trayectorias evolucionan sobre variedades riemannianas no euclidianas ℳ, impulsadas por ruido fraccionario rugoso con índice de Hurst H < 1/2, e incrustadas en un espacio causal de Hilbert ℋ de dimensión infinita.",
      "question": "¿Por qué este modelo cenit apex requiere la teoría de Trayectorias Rugosas de Terry Lyons y operadores en espacios de Hilbert ℋ?"
    },
    "theory_en": {
      "summary": "When driving stochastic noise is extremely rough (Hurst exponent H < 1/2, p-variation index p > 2), classical Itô and Stratonovich integration collapse because the Itô map ceases to be continuous. Terry Lyons' Rough Path theory restores deterministic continuity by augmenting paths with higher-order iterated integrals ('Signatures'). Embedding these into infinite-dimensional Hilbert spaces with Riemannian geometry yields the unified mathematical pinnacle of statistics.",
      "formulaExplain": "dX_t = -∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ. Φ is an infinite-dimensional free-energy potential on Riemannian manifold ℳ, ∇_ℳ is the Levi-Civita covariant gradient, and signatures ensure continuous stochastic solutions.",
      "keyConcepts": [
        {
          "term": "Riemannian Manifold (ℳ, g)",
          "desc": "Curved non-Euclidean state space where distances and covariant derivatives are governed by metric tensor g."
        },
        {
          "term": "Terry Lyons' Rough Paths",
          "desc": "Augmenting sub-Brownian paths (H < 1/2, p > 2) with tensor signatures to guarantee continuous differential solutions."
        },
        {
          "term": "Infinite-Dimensional RKHS (ℋ)",
          "desc": "Function space equipped with an inner product reproducing kernel: ⟨f, k(·, x)⟩_ℋ = f(x)."
        },
        {
          "term": "Unified Apex Synthesis (Ω)",
          "desc": "Unifies non-parametric Bayes, causal graph surgery, stochastic SDEs, and differential geometry into one supreme model."
        }
      ]
    },
    "theory_es": {
      "summary": "Cuando el ruido estocástico es extremadamente rugoso (exponente de Hurst H < 1/2, variación p > 2), el cálculo de Itô y Stratonovich colapsa porque la aplicación de Itô pierde continuidad. La teoría de Trayectorias Rugosas de Terry Lyons restablece la continuidad determinista enriqueciendo el camino con integrales iteradas ('Signaturas'). Incrustarlas en espacios de Hilbert con geometría riemanniana constituye la cumbre unificada de la estadística.",
      "formulaExplain": "dX_t = -∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough en ℋ. Φ representa un potencial de energía libre de dimensión infinita sobre la variedad riemanniana ℳ, ∇_ℳ es el gradiente covariante de Levi-Civita y las signaturas garantizan soluciones estocásticas continuas.",
      "keyConcepts": [
        {
          "term": "Variedad Riemanniana (ℳ, g)",
          "desc": "Espacio no euclidiano curvado donde distancias y derivadas covariantes se rigen por el tensor métrico g."
        },
        {
          "term": "Trayectorias Rugosas (Terry Lyons)",
          "desc": "Enriquecer caminos sub-brownianos (H < 1/2, p > 2) con signaturas tensoriales para asegurar soluciones continuas."
        },
        {
          "term": "RKHS de Dimensión Infinita (ℋ)",
          "desc": "Espacio funcional con producto interno que reproduce evaluaciones: ⟨f, k(·, x)⟩_ℋ = f(x)."
        },
        {
          "term": "Síntesis Unificada Apex (Ω)",
          "desc": "Unifica inferencia bayesiana, cirugía causal, SDEs estocásticas y geometría diferencial en una formulación suprema."
        }
      ]
    },
    "simulation_en": {
      "name": "The Ultimate Apex Simulator: Manifold, Rough Paths & Vector Field",
      "description": "Rotate the 3D non-Euclidean manifold ℳ. Dial down Hurst roughness H to 0.25 and watch Terry Lyons' rough signature trajectory track the potential descent gradient in ℋ!"
    },
    "simulation_es": {
      "name": "El Simulador Cenit Apex: Variedades, Trayectorias Rugosas y Campos Vectoriales",
      "description": "Gira la variedad riemanniana 3D ℳ. Reduce la rugosidad de Hurst H a 0,25 y ¡observa cómo la signatura rugosa de Terry Lyons desciende por el gradiente de potencial en ℋ!"
    },
    "interpretation_en": {
      "title": "Apex Model Synthesis & Verified Theoretical Mastery",
      "recommendation": "You have scaled the complete 24-level statistical continuum: from the descriptive Outlier Trap and Mixed Models Sweet Spot to Infinite-Dimensional SDEs on Curved Manifolds with Rough Paths. Claim your official Apex Certificate!",
      "metrics": [
        {
          "label": "Manifold Geometry (ℳ)",
          "note": "Riemannian Metric Tensor with non-zero sectional curvature"
        },
        {
          "label": "Rough Path Regime",
          "note": "Hurst H = 0.28 (p-variation index p = 3.57 > 2)"
        },
        {
          "label": "Causal Space Metric",
          "note": "Infinite-Dimensional RKHS kernel operator in ℋ"
        },
        {
          "label": "Curriculum Status",
          "note": "Level 24 Apex Mastery Achieved (100% Complete)"
        }
      ]
    },
    "interpretation_es": {
      "title": "Síntesis del Modelo Apex y Maestría Teórica Verificada",
      "recommendation": "Has culminado la trayectoria estadística completa de 24 niveles: desde la Trampa de los Atípicos y el Punto Clave de Modelos Mixtos hasta SDEs de Dimensión Infinita en Variedades Rugosas. ¡Reclama tu Certificado Oficial Apex!",
      "metrics": [
        {
          "label": "Geometría de la Variedad (ℳ)",
          "note": "Tensor Métrico Riemanniano con curvatura seccional no nula"
        },
        {
          "label": "Régimen de Trayectoria Rugosa",
          "note": "Hurst H = 0,28 (Índice de p-variación p = 3,57 > 2)"
        },
        {
          "label": "Métrica del Espacio Causal",
          "note": "Operador integral de núcleo en RKHS de dimensión infinita ℋ"
        },
        {
          "label": "Estado del Curriculum",
          "note": "Maestría Cenit Nivel 24 Alcanzada (100% Completado)"
        }
      ]
    },
    "quiz_en": {
      "question": "Why does the apex equation dX_t = -∇_ℳ Φ dt + σ dB_t^rough strictly require Terry Lyons' Rough Path theory when Hurst exponent H < 1/2?",
      "options": [
        "Because paths with H < 1/2 are Markovian and render the Fokker-Planck equation unsolvable",
        "Because for H < 1/2, the p-variation index exceeds p > 2, causing classical Itô/Stratonovich integration to lose continuity; the path must be enriched with higher-order tensor signatures to restore a continuous solution map",
        "Because curved Riemannian manifolds forbid diffusion tensors in fractional spaces",
        "Because the Malliavin derivative of the rough drift converges to zero in the reproducing kernel"
      ],
      "explanation": "Ultimate Apex Mastery! Terry Lyons proved that for paths with p > 2 (H < 1/2), the classical Itô map is discontinuous. Enhancing the path with iterated tensor signatures restores continuity in p-variation metrics."
    },
    "quiz_es": {
      "question": "¿Por qué la ecuación apex dX_t = -∇_ℳ Φ dt + σ dB_t^rough exige estrictamente la teoría de Trayectorias Rugosas de Terry Lyons cuando el exponente de Hurst H < 1/2?",
      "options": [
        "Porque las trayectorias con H < 1/2 son markovianas e impiden resolver la ecuación de Fokker-Planck",
        "Porque para H < 1/2 el índice de p-variación supera p > 2, provocando que la integración clásica de Itô/Stratonovich pierda continuidad; el camino debe enriquecerse con signaturas tensoriales iteradas para garantizar una aplicación solución continua",
        "Porque las variedades riemannianas curvadas prohíben tensores de difusión en espacios fraccionarios",
        "Porque la derivada de Malliavin del campo de deriva colapsa a cero en el núcleo reproducible"
      ],
      "explanation": "¡Maestría Cenit Definitiva! Terry Lyons demostró que para caminos rugosos con p > 2 (H < 1/2), la aplicación de Itô es discontinua. Al enriquecer el camino con signaturas tensoriales iteradas, la solución recobra continuidad en la topología de p-variación."
    }
  }
];
