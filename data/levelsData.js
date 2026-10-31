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
    question: "Twee voorspellers in je regressiemodel correleren met r = 0.98. De VIF is 26. Wat is het symptoom in de modeloutput?",
    question_en: "Two predictors in your regression model correlate with r = 0.98. The VIF is 26. What is the classic symptom in your model output?",
    question_es: "Dos predictores en tu modelo de regresión correlacionan con r = 0,98. El FIV (VIF) es 26. ¿Cuál es el síntoma clásico en la salida del modelo?",
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
      question: "Wanneer verkies je de mediaan boven het rekenkundig gemiddelde als centrale locatiemaat?",
      options: [
              "Wanneer de data symmetrisch verdeeld is en minimale schattingsvariantie vereist is",
              "Wanneer er sprake is van een scheve verdeling of extreme uitschieters (robuuste 50%-locatiemaat)",
              "Wanneer de observaties discreet zijn en gemodelleerd worden met een Poisson-verdeling",
              "Nooit, omdat het rekenkundig gemiddelde de som van absolute afwijkingen altijd beter minimaliseert"
      ],
      correctIndex: 1,
      explanation: "Juist! De mediaan is een robuuste maatstaf (breakdown point 50%) die niet beïnvloed wordt door extreme uitschieters of asymmetrie in de staarten."
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
      question: "Wat betekent een Z-score van -1.96 in een normale kansverdeling?",
      options: [
              "De observatie ligt 1.96 meeteenheden onder de mediaan in de oorspronkelijke schaal",
              "De waarde ligt 1.96 standaardafwijkingen onder het populatiegemiddelde (exact 2.5% van de populatie scoort lager)",
              "De cumulatieve overschrijdingskans in de rechterstaart P(Z > -1.96) is exact gelijk aan 2.5%",
              "Het betrouwbaarheidsinterval van de steekproef heeft een breedte van 1.96 standaardfouten"
      ],
      correctIndex: 1,
      explanation: "Uitstekend! De Z-score drukt exact uit hoeveel standaardafwijkingen een observatie boven (+) of onder (-) het gemiddelde ligt. Bij Z = -1.96 ligt 2.5% in de linkerstaart."
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
      question: "Wat gebeurt er met de standaardfout (SE = σ / √N) van het gemiddelde als je de steekproefomvang N verviervoudigt?",
      options: [
              "De SE wordt 4x zo klein, omdat de precisie recht evenredig toeneemt met steekproefomvang N",
              "De SE halveert (wordt 2x zo klein, want √4 = 2)",
              "De SE wordt 16x zo klein, omdat de variantiereductie kwadratisch schaalt met N²",
              "De populatiestandaardafwijking σ halveert eveneens evenredig met de steekproefvergroting"
      ],
      correctIndex: 1,
      explanation: "Exact! Vanwege de wortel in de noemer (√N) levert een 4-voudige steekproefomvang een halvering van de schattingsfout op."
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
      question: "Wat is de juiste frequentistische interpretatie van een berekend 95% betrouwbaarheidsinterval van [10, 20]?",
      options: [
              "Er is a-posteriori 95% kans dat de werkelijke populatieparameter μ binnen dit specifieke interval [10, 20] ligt",
              "Bij herhaaldelijke steekproeven onder identieke condities zal 95% van de op identieke wijze geconstrueerde intervallen de werkelijke populatieparameter bevatten",
              "95% van alle individuele observaties in de doelpopulatie valt tussen de waarden 10 en 20",
              "Als we morgen een nieuwe steekproef trekken, is de kans 95% dat het nieuwe steekproefgemiddelde binnen [10, 20] valt"
      ],
      correctIndex: 1,
      explanation: "Haarscherp! In de frequentistische statistiek is de parameter een vast getal (geen toevalsvariabele). De 95% slaat op de dekkingsgraad van de meetprocedure bij oneindige herhaling."
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
      question: "Wat is de exacte formele definitie van een p-waarde van 0.03 bij een hypothesetoets?",
      options: [
              "De kans dat de nulhypothese H0 waar is bedraagt exact 3% gegeven onze steekproefdata",
              "De kans dat de alternatieve hypothese H1 waar is bedraagt 97%",
              "Gegeven dat de nulhypothese waar is, is de kans om een toetsingsgrootheid te vinden die minstens zo extreem is als de geobserveerde waarde 3%",
              "De kans op een Type II fout (vals negatief) bij het handhaven van de nulhypothese bedraagt 3%"
      ],
      correctIndex: 2,
      explanation: "Briljant! De p-waarde is P(Data of extremer | H0 waar), NIET P(H0 | Data). Het is een conditionele kans op de data onder de aanname van de nulhypothese."
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
      question: "In het model Cijfer = 2.5 + 0.20 × Uren, wat is het verwachte effect als een student 10 uur extra studeert?",
      options: [
              "Het cijfer stijgt met 0.20 punt ongeacht het aantal gestudeerde uren",
              "Het verwachte cijfer stijgt met 2.0 punten (ΔŶ = 10 × 0.20)",
              "Het cijfer wordt minimaal een 4.5, omdat 2.5 de harde ondergrens is voor elke student",
              "De correlatiecoëfficiënt r tussen uren en cijfer stijgt automatisch met 0.20"
      ],
      correctIndex: 1,
      explanation: "Correct! De helling β₁ geeft de verwachte verandering in Y per eenheid verandering in X. Voor ΔX = 10 is de stijging 10 × 0.20 = 2.0 punten."
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
      question: "Wat gebeurt er met de gewone R² als je 5 zuivere toevalsvectoren als extra regressoren toevoegt aan een OLS-model?",
      options: [
              "R² daalt evenredig met het aantal irrelevante voorspellers",
              "R² blijft gegarandeerd gelijk of stijgt een klein beetje, omdat OLS toevalsruis meeneemt in de modelpassing",
              "R² wordt ongedefinieerd omdat toevalsvectoren een singuliere covariantiematrix veroorzaken",
              "De Adjusted R² stijgt mee, omdat de residuele kwadratensom (RSS) altijd omlaag gaat"
      ],
      correctIndex: 1,
      explanation: "Juist! De gewone R² kan wiskundig gezien nooit dalen bij toevoeging van extra variabelen. Daarom gebruiken we Adjusted R², AIC of BIC om te corrigeren voor overbodige modelcomplexiteit."
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
      question: "Wat signaleert een uitwaaierend trompetpatroon in een 'Residuals vs Fitted' spreidingsdiagram?",
      options: [
              "Ernstige multicollineariteit tussen twee of meer verklarende variabelen",
              "Heteroscedasticiteit (niet-constante residuele variantie), waardoor standaardfouten en hypothesetoetsen onbetrouwbaar worden",
              "Structurele kromming in het conditionele verwachtingsgemiddelde van Y",
              "Endogeniteit: correlatie tussen de voorspellers en de residuele storingsterm"
      ],
      correctIndex: 1,
      explanation: "Spot-on! Heteroscedasticiteit schendt de aanname van gelijke foutvariantie. OLS-puntschattingen blijven zuiver, maar standaardfouten en p-waarden zijn ongeldig zonder robuuste Huber-White correctie."
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
      question: "Wat betekent het als de partiële regressiecoëfficiënt β₁ geschat wordt 'gecorrigeerd voor X₂'?",
      options: [
              "Dat de correlatie tussen X₁ en Y kunstmatig op nul is gesteld via orthogonalisatie",
              "Dat we kijken naar de associatie tussen X₁ en Y voor observaties met een identieke waarde op X₂ (ceteris paribus)",
              "Dat X₁ en X₂ met elkaar vermenigvuldigd zijn als interactieterm in de ontwerpmatrix",
              "Dat het causale pad van X₂ naar Y volledig geëlimineerd is via instrumentele variabelen"
      ],
      correctIndex: 1,
      explanation: "Exact! Meervoudige regressie isoleert het unieke partiële effect van X₁ op Y terwijl alle overige variabelen in het model constant worden gehouden."
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
      question: "Wat is het voornaamste gevaar van ernstige multicollineariteit (VIF > 15) tussen verklarende variabelen?",
      options: [
              "De OLS-puntschattingen worden structureel vertekend en verliezen hun consistentie",
              "Standaardfouten worden gigantisch opgeblazen, waardoor betrouwbaarheidsintervallen breed worden en afzonderlijke t-toetsen niet-significant lijken",
              "Het totale verklaringspercentage R² en de globale F-toets van het model storten in naar nul",
              "De residuen vertonen direct sterke seriële autocorrelatie"
      ],
      correctIndex: 1,
      explanation: "Meesterlijk! Collineariteit maakt puntschattingen uiterst instabiel en blaast de standaardfouten op (VIF), hoewel het model als geheel vaak wel een hoge en significante R² behoudt."
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
      question: "Wat is de resulterende Odds Ratio (OR) wanneer de logistische regressiecoëfficiënt van een predictor β = 0 is?",
      options: [
              "OR = 0 (de gebeurtenis kan onder geen enkele voorwaarde plaatsvinden)",
              "OR = 1.0 (geen effect op de kansverhouding, want e⁰ = 1)",
              "OR = 0.5 (gelijke kansen voor beide vergelijkingsgroepen)",
              "OR is mathematisch onbepaald omdat men niet kan delen door de exponent van nul"
      ],
      correctIndex: 1,
      explanation: "Juist! Omdat logistische regressie de log-odds modelleert, is de odds ratio e^β. Voor β = 0 geldt e⁰ = 1, wat duidt op volledige afwezigheid van een effect."
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
      question: "Wat is het unieke voordeel van Lasso (L₁) regularisatie boven Ridge (L₂) regularisatie?",
      options: [
              "Lasso levert altijd een gesloten analytische OLS-oplossing zonder numerieke optimalisatie",
              "Lasso zet coëfficiënten van minder relevante variabelen exact op nul (automatische feature selectie dankzij de hoekige L₁-norm)",
              "Lasso is wiskundig immuun voor multicollineariteit wanneer variabelen perfect gecorreleerd zijn",
              "Lasso minimaliseert de conditionele verwachting zonder afhankelijkheid van de strafparameter λ"
      ],
      correctIndex: 1,
      explanation: "Uitstekend! De ruitvormige L₁-contouren raken de OLS-ellipsen op de assen, waardoor irrelevante coëfficiënten exact nul worden. Ridge krimpt ze naar nul maar behoudt alle variabelen."
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
      question: "Wat is het grootste risico wanneer hiërarchisch geclusterde data geanalyseerd wordt met standaard OLS-regressie?",
      options: [
              "OLS overschat de tussen-cluster variantie, waardoor geschatte hellingen structureel te steil worden",
              "Standaardfouten worden dramatisch te klein geschat door schending van de onafhankelijkheidsaanname, wat leidt tot massale Type I fouten (schijnprecisie)",
              "De Intraclass Correlatiecoëfficiënt (ICC) wordt wiskundig negatief",
              "De schatting faalt omdat OLS vereist dat elk cluster exact hetzelfde aantal observaties telt"
      ],
      correctIndex: 1,
      explanation: "Helemaal goed! OLS behandelt afhankelijke observaties binnen clusters als onafhankelijke bewijspunten (pseudoreplicatie), waardoor standaardfouten te klein worden en toeval als significant wordt bestempeld."
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
      question: "Wat gebeurt er dankzij 'shrinkage' (partial pooling) met een cluster of school waar toevallig slechts 2 observaties zijn gemeten?",
      options: [
              "Het cluster wordt behandeld als een extreme uitschieter en krijgt een afzonderlijke dummy-parameter",
              "Haar geschatte willekeurige intercept wordt sterk richting het overkoepelende populatiegemiddelde (grand mean) getrokken",
              "De residuele variantie binnen dat specifieke cluster wordt gelijkgesteld aan nul",
              "Haar geschatte helling wordt geforceerd om exact de maximale fixed-effect waarde aan te nemen"
      ],
      correctIndex: 1,
      explanation: "Exact! Bij kleine steekproeven is de empirische data lawaaierig; het mixed model vertrouwt meer op de overkoepelende populatieverdeling en 'krimpt' de schatting naar het centrum."
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
      question: "Wat betekent het in een Random Slope model als de variantie van de helling σ²_u1 statistisch significant groter is dan nul?",
      options: [
              "Dat het verband tussen de predictor en de uitkomst puur door heteroscedasticiteit wordt gedreven",
              "Dat het effect van de predictor (de veranderingssnelheid) niet voor elk cluster gelijk is, maar betekenisvol varieert tussen groepen of individuen",
              "Dat het model overgespecificeerd is en gereduceerd moet worden tot een Random Intercept model",
              "Dat de correlatie tussen het intercept en de slope per definitie gelijk is aan nul"
      ],
      correctIndex: 1,
      explanation: "Juist! Een significante σ²_u1 toont aan dat clusters niet alleen een ander startniveau hebben (intercept), maar ook fundamenteel verschillen in hun reactiesnelheid of groeipatroon (helling)."
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
      question: "Wanneer stap je over van een Linear Mixed Model (LMM) naar een Generalized Linear Mixed Model (GLMM)?",
      options: [
              "Wanneer het aantal niveaus in de hiërarchie toeneemt van twee naar drie of meer niveaus",
              "Wanneer de geclusterde responsvariabele niet-Gaussisch is (zoals binaire uitkomsten, odds of Poisson-tellingen) en een linkfunctie vereist",
              "Wanneer de predictoren onderling gecorreleerd zijn en de VIF groter is dan 10",
              "Wanneer men Bayesiaanse MCMC-schatting verkiest boven Restricted Maximum Likelihood (REML)"
      ],
      correctIndex: 1,
      explanation: "Spot-on! GLMM combineert de flexibiliteit van GLM (voor binaire of teldata via linkfuncties zoals logit of log) met de clustering van mixed models (random effects)."
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
      question: "Wat gebeurt er in een Generalized Additive Model (GAM) als de smoothing parameter λ naar oneindig nadert (λ → ∞)?",
      options: [
              "De splines interpoleren elk individueel datapunt exact (extreme overfitting)",
              "De strafterm op kromming domineert volledig, waardoor de geschatte functie convergeert naar een rechte lineaire lijn",
              "De effectieve vrijheidsgraden (EDF) stijgen naar het maximale aantal basisknopen",
              "De gegeneraliseerde kruisvalidatiescore (GCV) daalt altijd naar exact nul"
      ],
      correctIndex: 1,
      explanation: "Juist! De smoothing penalty bestraft de geïntegreerde kwadratische tweede afgeleide (kromming). Als λ → ∞ wordt elke kromming oneindig zwaar bestraft en blijft er een gewone rechte lijn over."
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
      question: "Wat betekent een Hazard Ratio van HR = 0.70 voor een nieuw medicijn in een Cox Proportional Hazards model?",
      options: [
              "Dat de mediane overlevingstijd van behandelde patiënten met exact 70% toeneemt",
              "Dat op elk moment tijdens de follow-up het risico op het optreden van het event 30% lager is in de behandelde groep dan in de controlegroep",
              "Dat na afloop van de follow-up periode 70% van de behandelde patiënten nog in leven is",
              "Dat de cumulatieve overlevingscurve een lineaire daling vertoont met een constante helling van 0.70"
      ],
      correctIndex: 1,
      explanation: "Uitstekend! De hazard ratio is de verhouding van de instantane gebeurteniskansen: HR = 0.70 betekent dat behandelde patiënten op elk tijdstip 70% van het risico van de controlegroep ervaren (een risicoreductie van 30%)."
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
      question: "Wat is het fundamentele conceptuele verschil tussen een frequentistisch 95% betrouwbaarheidsinterval en een Bayesiaans 95% Credible Interval?",
      options: [
              "Frequentistische intervallen gebruiken altijd een uniforme prior, terwijl Bayesiaanse intervallen Gaussiaanse priors vereisen",
              "In een Bayesiaans Credible Interval is er conditioneel op de data en de prior daadwerkelijk 95% kans dat de parameter binnen de grenzen ligt; in de frequentistische leer is de parameter vast en dekt 95% van denkbeeldige herhaalde intervallen de parameter",
              "Frequentistische intervallen corrigeren automatisch voor meervoudig toetsen, terwijl Bayesiaanse intervallen de posterior opblazen",
              "Een Bayesiaans Highest Posterior Density (HPD) interval is wiskundig altijd identiek aan het frequentistische Wald-interval"
      ],
      correctIndex: 1,
      explanation: "Briljant! In Bayes is de parameter een stochastische variabele met een posterior verdeling, waardoor je wél directe kansuitspraken mag doen over parameterwaarden."
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
      question: "Wat duidt op gezonde MCMC-convergentie in een traceplot en Gelman-Rubin diagnostiek?",
      options: [
              "Ketenwaarden die snel convergeren naar één constante horizontale lijn zonder enige oscillatie",
              "Een 'harige rups' waarin meerdere onafhankelijke ketens homogeen door elkaar heen mengen met een Gelman-Rubin R̂ dicht bij 1.00 (R̂ < 1.05)",
              "Een periodieke sinusgolf waarin de keten systematisch de prior en de likelihood afwisselt",
              "Een acceptatieratio van exact 100% bij Metropolis-Hastings voorstellen"
      ],
      correctIndex: 1,
      explanation: "Haarscherp! Goede MCMC-ketens verkennen de gehele posterior doelgericht. Een 'harige rups' en R̂ ≈ 1.00 bewijzen dat de ketens stationair zijn en dezelfde verdeling samplen."
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
      question: "Wat gebeurt er met de predictieve onzekerheid van een Gaussiaans Proces (zonder observatieruis, σ_n = 0) op de exacte locatie van een waargenomen datapunt?",
      options: [
              "De voorspelde variantie convergeert naar de marginale prior variantie σ_f²",
              "De residuele onzekerheid krimpt exact naar nul, waardoor de functie strict door het geobserveerde punt interpoleert",
              "De lengteschaal ℓ daalt lokaal naar nul, waardoor de covariantiekernel instort",
              "De onzekerheid wordt gelijk aan het conditionele gemiddelde van de RBF-kernel"
      ],
      correctIndex: 1,
      explanation: "Exact! Zonder meetruis is de observatie een absolute zekerheid. De conditionele multivariate normale verdeling heeft op dat punt variantie 0 en de GP-onzekerheidsband krimpt tot nul."
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
      question: "Wat is het doel van Judea Pearl's do-operator do(X = x) in een causaal Directed Acyclic Graph (DAG) model?",
      options: [
              "Het conditioneert op alle colliders en tussenliggende variabelen om confounding te minimaliseren",
              "Het simuleert een actieve fysieke interventie door alle inkomende causale pijlen naar X door te knippen, waarmee het zuivere effect op Y wordt geïsoleerd van confounders",
              "Het transformeert niet-lineaire afhankelijkheden naar lineaire correlaties volgens de back-door stelling",
              "Het berekent de inverse kansgewichten van een propensity score model zonder grafentheorie"
      ],
      correctIndex: 1,
      explanation: "Meesterlijk! De do-operator scheidt associatie P(Y|X) van echte interventie P(Y|do(X)) door het 'graph surgery' principe: knip de pijlen door die X bepalen en meet het onvervalste effect."
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
      question: "Wat is volgens Itô calculus de doorslaggevende reden dat we de term ½ f''(X_t) σ² dt meenemen in Itô's Lemma?",
      options: [
              "Omdat de verwachting van een Brownse beweging met de tijd kwadratisch divergeert",
              "Omdat de kwadratische variatie van een Brownse beweging niet nul is, maar deterministisch gelijk is aan dt ((dB_t)² = dt), waardoor tweede-orde Taylor-termen niet verwaarloosbaar zijn in de limiet",
              "Omdat Itô calculus alleen toepasbaar is op niet-continue martingalen met sprongprocessen",
              "Omdat de Stratonovich integraal anders een niet-nul verwachtingsdrift zou opleveren in de driftterm"
      ],
      correctIndex: 1,
      explanation: "Fenomenaal! Omdat (dB_t)² = dt van dezelfde orde is als dt, blijft de tweede afgeleide in de Taylor-expansie behouden. Dit is het hart van stochastische calculus."
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
      question: "Waarom vereist de apex-vergelijking dX_t = ∇_ℳ Φ dt + σ dB_t^rough Terry Lyons' Rough Path theorie wanneer de Hurst exponent H < 1/2 is?",
      options: [
              "Omdat paden met H < 1/2 Markoviaans zijn en de Fokker-Planck vergelijking niet-oplosbaar maken",
              "Omdat voor H < 1/2 de p-variatie index p > 2 overschrijdt, waardoor klassieke Itô/Stratonovich integratie discontinu wordt en het pad verrijkt moet worden met hogere-orde tensor 'signatures' om een continue oplossing te garanderen",
              "Omdat gekromde Riemannse manifolds geen diffusietensoren toestaan in ruimtes met fractale dimensies",
              "Omdat de Malliavin-afgeleide van het rough vectorveld convergeert naar nul in de reproduceerbare kern"
      ],
      correctIndex: 1,
      explanation: "Ultieme apex-beheersing! Terry Lyons bewees dat voor extreem ruwe paden (p > 2, H < 1/2) de Itô-kaart discontinu is. Door het pad uit te breiden met tensor signatures wordt de oplossing weer continu in de p-variatie metriek."
    }
  }
];
