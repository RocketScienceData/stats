// Statistiek Leerplatform - Uitgebreide Oefeningenbank (Levels 1 t/m 24)
// Meertalige didactische oefeningenbank met volledige ondersteuning voor Nederlands, Engels en Spaans.
// Biedt 3 tot 4 diepgaande interactieve oefeningen per level:
// - Concept & Intuïtie
// - Praktijk Dilemma & Besluitvorming
// - De Valkuil-Detector
// - Data & Parameter Schatting
// Alle antwoordopties zijn wetenschappelijk getoetst en qua tekstlengte uitgebalanceerd.

window.EXERCISES_DATA = {
  "1": [
    {
      "id": "l1_ex1",
      "category": "Concept",
      "title": "Oefening 1: Centrummaten & Scheefheid",
      "question": "In een landelijke inkomensenquête is het gemiddelde inkomen € 42.000 per jaar, terwijl het mediane inkomen € 31.000 per jaar is. Wat zegt dit onmiddellijk over de vorm van de inkomensverdeling?",
      "options": [
        "De verdeling is rechtsscheef (positief scheef): een kleine groep topinkomens trekt het gemiddelde omhoog",
        "De verdeling is linksscheef (negatief scheef): de overgrote meerderheid verdient meer dan het gemiddelde",
        "De inkomensverdeling is volkomen symmetrisch rond € 36.500",
        "De verdeling is bimodaal met identieke pieken op € 31.000 en € 42.000"
      ],
      "correctIndex": 0,
      "explanation": "Juist! Wanneer Gemiddelde > Mediaan, trekken hoge uitschieters (de topinkomens) het rekenkundig gemiddelde naar rechts. De mediaan geeft de zuivere middelste burger weer.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: Measures of Central Tendency & Skewness",
      "title_es": "Ejercicio 1: Medidas de Tendencia Central y Asimetría",
      "question_en": "In a national income survey, the mean income is €42,000 per year, while the median income is €31,000 per year. What does this immediately indicate regarding the shape of the income distribution?",
      "question_es": "En una encuesta nacional de ingresos, el ingreso medio anual es de 42.000 €, mientras que el ingreso mediano es de 31.000 €. ¿Qué indica esto de inmediato sobre la forma de la distribución de ingresos?",
      "options_en": [
        "The distribution is perfectly symmetric around €36,500",
        "The distribution is right-skewed (positively skewed): a small group of high earners pulls the mean upward",
        "The distribution is left-skewed (negatively skewed): the vast majority earns more than the mean",
        "The distribution is bimodal with identical peaks at €31,000 and €42,000"
      ],
      "options_es": [
        "La distribución de ingresos es perfectamente simétrica alrededor de 36.500 €",
        "La distribución es asimétrica a la derecha (positiva): un reducido grupo de ingresos muy altos eleva la media",
        "La distribución es asimétrica a la izquierda (negativa): la gran mayoría percibe más que la media",
        "La distribución es bimodal con picos idénticos en 31.000 € y 42.000 €"
      ],
      "explanation_en": "Correct! When Mean > Median, extreme high values (top incomes) drag the arithmetic mean to the right. The median reflects the true middle citizen.",
      "explanation_es": "¡Correcto! Cuando Media > Mediana, los valores atípicos elevados arrastran la media hacia la derecha. La mediana representa al ciudadano intermedio real."
    },
    {
      "id": "l1_ex2",
      "category": "Dilemma",
      "title": "Oefening 2: Praktijk Dilemma bij een E-Commerce Platform",
      "question": "Je meet de laadtijden van een mobiele app. Bij 90% van de gebruikers laadt de pagina in 0.5 seconde. Bij 10% van de gebruikers met een haperende verbinding duurt het 25 seconden. De marketingdirecteur wil 'de gemiddelde laadtijd van 2.95 seconden' in een persbericht zetten. Wat adviseer je?",
      "options": [
        "Rapporteer uitsluitend de standaardafwijking (SD = 7.35s) omdat spreiding belangrijker is dan centrum bij internetdiensten",
        "Mee eens: het rekenkundig gemiddelde van 2.95s integreert immers alle ervaringen in één onvertekende verwachtingswaarde",
        "Bereken het getrimde gemiddelde (10% trimmed mean) door de traagste 10% weg te laten, omdat die metingen als toevallige verbindingsfouten beschouwd moeten worden",
        "Niet mee eens: rapporteer de mediaan (0.5s) én het 95e percentiel (p95 = 25s). Het gemiddelde beschrijft noch de typische gebruiker, noch de zwaarst getroffen groep"
      ],
      "correctIndex": 3,
      "explanation": "Uitstekend besluit! In latency- en prestatiemetingen is het gemiddelde misleidend. Men rapporteert altijd mediaan (typische ervaring) én p95 of p99 (tail latency).",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 2: Practical Dilemma at an E-Commerce Platform",
      "title_es": "Ejercicio 2: Dilema Práctico en una Plataforma de Comercio Electrónico",
      "question_en": "You measure load times of a mobile app. For 90% of users, the page loads in 0.5 seconds. For 10% of users with degraded connections, it takes 45 seconds. The marketing VP wants to publish 'our average load time of 4.95 seconds' in a press release. What do you advise?",
      "question_es": "Mides los tiempos de carga de una app. Para el 90% de usuarios la página carga en 0,5 segundos. Para el 10% restante con mala conexión tarda 45 segundos. El director de marketing desea publicar 'el tiempo medio de carga de 4,95 segundos' en prensa. ¿Qué recomiendas?",
      "options_en": [
        "Agree: the arithmetic mean integrates all experiences into a single expectation value",
        "Disagree: report both the median (0.5s) and the 95th percentile (p95 = 45s). The mean reflects neither the typical experience nor tail degradation",
        "Calculate a 5% trimmed mean by dropping slow connections as random errors",
        "Report solely standard deviation because dispersion matters more than central location"
      ],
      "options_es": [
        "De acuerdo: la media aritmética integra todas las experiencias en un valor esperado único",
        "En desacuerdo: informa la mediana (0,5 s) y el percentil 95 (p95 = 45 s). La media no describe al usuario típico ni refleja la gravedad del percentil crítico",
        "Calcular una media recortada al 5% excluyendo conexiones lentas como errores aleatorios",
        "Reportar únicamente la desviación estándar porque la dispersión importa más que el centro"
      ],
      "explanation_en": "Excellent decision! In latency measurements, the mean is misleading. Always report median (typical user) alongside p95/p99 (tail latency).",
      "explanation_es": "¡Excelente decisión! En latencias el promedio es engañoso. Se debe informar siempre la mediana (experiencia típica) junto al percentil 95 o 99 (latencia de cola)."
    },
    {
      "id": "l1_ex3",
      "category": "Valkuil",
      "title": "Oefening 3: De Valkuil-Detector van Spreiding",
      "question": "Waarom is de Interkwartielafstand (IQR = Q3 - Q1) veel betrouwbaarder dan het Bereik (Range = Max - Min) bij data met mogelijke meetfouten?",
      "options": [
        "Omdat het Bereik afhankelijk is van slechts 2 extremen en explodeert bij één enkele typfout of outlier, terwijl de IQR de middelste 50% van de data omvat",
        "Omdat de IQR alleen berekend kan worden bij perfect symmetrische normale verdelingen",
        "Omdat het Bereik asymptotisch convergeert naar de standaarddeviatie bij grotere steekproeven, terwijl de IQR onafhankelijk blijft",
        "Omdat de IQR een parametrische toets is die de variantie van uitschieters compenseert via Bessel's correctie"
      ],
      "correctIndex": 0,
      "explanation": "Spot-on! Eén foute invoer (bv. leeftijd 999 ipv 99) ruïneert de Range en SD compleet, maar laat de IQR volkomen koud.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 3: The Dispersion Pitfall Detector",
      "title_es": "Ejercicio 3: El Detector de Trampas en Dispersión",
      "question_en": "Why is the Interquartile Range (IQR = Q3 - Q1) far more reliable than the Range (Max - Min) for data prone to measurement errors?",
      "question_es": "¿Por qué el Rango Intercuartílico (IQR = Q3 - Q1) es mucho más fiable que el Rango Total (Máx - Mín) ante posibles errores de medida?",
      "options_en": [
        "The IQR is always numerically larger than the standard deviation",
        "The Range depends entirely on the two most extreme observations; a single measurement typo completely distorts it, whereas the IQR has a 25% breakdown point",
        "The IQR assumes strict normality of underlying data",
        "The Range can only be calculated for discrete variables"
      ],
      "options_es": [
        "El IQR siempre es numéricamente superior a la desviación estándar",
        "El Rango Total depende exclusivamente de los dos valores más extremos; un único error tipográfico lo falsea, mientras que el IQR tiene un punto de ruptura del 25%",
        "El IQR asume estricta normalidad en la distribución subyacente",
        "El Rango Total solo se puede calcular en variables discretas"
      ],
      "explanation_en": "Haute precision! Range has a 0% breakdown point: a single typo ruins it. The IQR ignores the bottom 25% and top 25%, isolating the clean middle 50%.",
      "explanation_es": "¡Gran precisión! El Rango tiene un punto de ruptura del 0%: un único error lo arruina. El IQR ignora los cuartiles extremos y mide el 50% central robusto."
    }
  ],
  "2": [
    {
      "id": "l2_ex1",
      "category": "Berekening",
      "title": "Oefening 1: Z-score Berekening & Positie",
      "question": "Een toetsscore volgt een normale verdeling met μ = 70 en σ = 10. Een student scoort 90 punten. Wat is de Z-score van deze student en welk percentage studenten scoort lager?",
      "options": [
        "Z = +2.0, precies 95.4% scoort lager (volgens de tweezijdige 2-sigma regel)",
        "Z = +2.0, ongeveer 97.7% scoort lager (slechts 2.3% scoort nog hoger in de rechterstaart)",
        "Z = +1.96, precies 95.0% van alle studenten scoort lager",
        "Z = +1.0, ongeveer 84.1% van de studenten scoort lager"
      ],
      "correctIndex": 1,
      "explanation": "Exact! Z = (90 - 70) / 10 = +2.0. Binnen ±2 SD ligt 95.4% van de verdeling. In de twee staarten resteert 4.6% (2.3% links en 2.3% rechts). Dus lager dan Z = +2.0 scoort 100% - 2.3% = 97.7%.",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 1: Z-score Calculation & Relative Position",
      "title_es": "Ejercicio 1: Cálculo de Puntuación Z y Posición Relativa",
      "question_en": "An exam score follows a normal distribution with μ = 70 and σ = 10. A candidate scores 85. What is their Z-score and what percentage of candidates score lower?",
      "question_es": "Una calificación sigue una distribución normal con μ = 70 y σ = 10. Un aspirante obtiene 85. ¿Cuál es su puntuación Z y qué porcentaje queda por debajo?",
      "options_en": [
        "Z = +1.50; approximately 93.3% score lower",
        "Z = +0.85; approximately 80.2% score lower",
        "Z = +2.00; exactly 97.7% score lower",
        "Z = +1.20; approximately 88.5% score lower"
      ],
      "options_es": [
        "Z = +1,50; aproximadamente el 93,3% de los aspirantes puntúa por debajo",
        "Z = +0,85; aproximadamente el 80,2% puntúa por debajo",
        "Z = +2,00; exactamente el 97,7% puntúa por debajo",
        "Z = +1,20; aproximadamente el 88,5% puntúa por debajo"
      ],
      "explanation_en": "Correct! Z = (85 - 70) / 10 = +1.50. From standard normal tables: Φ(1.50) ≈ 0.9332 (93.32%).",
      "explanation_es": "¡Correcto! Z = (85 - 70) / 10 = +1,50. Consultando tablas normales acumuladas: Φ(1,50) ≈ 0,9332 (93,32%)."
    },
    {
      "id": "l2_ex2",
      "category": "Valkuil",
      "title": "Oefening 2: De Normaliteits-Aanname Valkuil",
      "question": "Mag je de 68-95-99.7 vuistregel toepassen op het aantal volgers van accounts op Twitter/X?",
      "options": [
        "Ja, zolang de steekproefomvang N maar groter is dan 30, want de Centrale Limietstelling maakt de populatieverdeling normaal",
        "Ja, mits je eerst de Z-scores standaardiseert met de mediaan in plaats van het rekenkundig gemiddelde",
        "Nee! Volgersaantallen volgen een power-law / zwaar scheve Pareto-verdeling (enkele accounts hebben miljoenen volgers, de meesten <100). De normale verdeling slaat hier de plank volkomen mis",
        "Ja, omdat het aantal volgers een som is van onafhankelijke binaire beslissingen en dus een Gaussische klokvorm benadert"
      ],
      "correctIndex": 2,
      "explanation": "Spot-on! De normale verdeling mag je NOOIT blind aannemen. Veel data in de echte wereld (volgers, inkomen, webverkeer) volgt zware machtswetten (power laws).",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 2: The Normality Assumption Trap",
      "title_es": "Ejercicio 2: La Trampa del Supuesto de Normalidad",
      "question_en": "Can you apply the 68-95-99.7 empirical rule to user follower counts on social media (where μ = 500, σ = 3,000, and 90% have < 100 followers)?",
      "question_es": "¿Se puede aplicar la regla empírica 68-95-99.7 al número de seguidores en redes sociales (donde μ = 500, σ = 3.000 y el 90% tiene < 100 seguidores)?",
      "options_en": [
        "Yes, the 68-95-99.7 rule is a universal mathematical theorem for all datasets",
        "No! The 68-95-99.7 rule applies strictly to normal distributions. Follower count is a power law (heavy-tailed Pareto); applying normal rules would predict negative followers!",
        "Yes, provided sample size N exceeds 30",
        "Only if we double the standard deviation to correct for skewness"
      ],
      "options_es": [
        "Sí, la regla 68-95-99.7 es un teorema matemático universal para cualquier conjunto de datos",
        "¡No! La regla 68-95-99.7 exige estricta normalidad. El recuento de seguidores sigue una ley de potencia (Pareto); ¡la regla normal predeciría seguidores negativos!",
        "Sí, siempre que el tamaño de muestra N sea mayor a 30",
        "Solo si duplicamos la desviación estándar para compensar la asimetría"
      ],
      "explanation_en": "Spot on! The empirical rule requires a Gaussian bell curve. Power-law distributions violate symmetry: μ - 2σ = 500 - 6,000 = -5,500 followers, which is impossible.",
      "explanation_es": "¡Exacto! La regla exige distribución normal. Las leyes de potencia violan la simetría: μ - 2σ = 500 - 6.000 = -5.500 seguidores, lo cual es físicamente absurdo."
    },
    {
      "id": "l2_ex3",
      "category": "Dilemma",
      "title": "Oefening 3: Fabrieks-Tolerantiegrenzen",
      "question": "Een productiemachine vult flessen frisdrank met μ = 500 ml en σ = 5 ml. Flessen onder 490 ml (onder -2 SD) mogen wettelijk niet verkocht worden. Wat is de effectiefste manier om het afkeurpercentage structureel te verlagen zonder productverspilling?",
      "options": [
        "Het vulgemiddelde verhogen naar 510 ml om de linkerstaart volledig boven 490 ml te tillen",
        "De precisie van de doseerklep verbeteren zodat de proces-spreiding σ daalt van 5 ml naar 2.5 ml",
        "Een niet-lineaire Box-Cox transformatie toepassen op de vulmetingen zodat de linkerstaart mathematisch krimpt",
        "De steekproef van de kwaliteitsmeting vergroten naar N = 10.000 om de tolerantiegrenzen smaller te maken"
      ],
      "correctIndex": 1,
      "explanation": "Briljant inzicht in Six Sigma kwaliteitsbeheersing! Door de variantie σ te verkleinen wordt de curve smaller en steiler, waardoor de staarten buiten de grenzen verdwijnen.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 3: Factory Tolerance Limits",
      "title_es": "Ejercicio 3: Límites de Tolerancia en Fábrica",
      "question_en": "A bottling line fills bottles with μ = 500 ml and σ = 5 ml (normal). Bottles under 490 ml violate consumer protection law. What percentage of bottles will breach the legal minimum?",
      "question_es": "Una embotelladora llena botellas con μ = 500 ml y σ = 5 ml (normal). Botellas con menos de 490 ml vulneran la ley del consumidor. ¿Qué porcentaje incumplirá el mínimo legal?",
      "options_en": [
        "Approximately 2.28% (Z = -2.00, bottom tail of normal curve)",
        "Exactly 5.00%",
        "Approximately 0.13% (Z = -3.00)",
        "Zero percent, because the mean is exactly 500 ml"
      ],
      "options_es": [
        "Aproximadamente el 2,28% (Z = -2,00, cola inferior de la curva normal)",
        "Exactamente el 5,00%",
        "Aproximadamente el 0,13% (Z = -3,00)",
        "Cero por ciento, porque la media se calibra exactamente en 500 ml"
      ],
      "explanation_en": "Superb! Z = (490 - 500) / 5 = -2.00. For a normal curve, exactly 2.28% sits below -2 SD.",
      "explanation_es": "¡Excelente! Z = (490 - 500) / 5 = -2,00. En la curva normal, exactamente el 2,28% de la masa reside por debajo de -2 DE."
    }
  ],
  "3": [
    {
      "id": "l3_ex1",
      "category": "Concept",
      "title": "Oefening 1: Het Gedrag van het Steekproefgemiddelde",
      "question": "We gooien 100 keer met een zuivere dobbelsteen (elk getal 1 t/m 6 heeft 1/6 kans; een perfect platte/uniforme verdeling). Wat is de vorm van de verdeling van het GEMIDDELDE van deze 100 worpen als we dit experiment 1.000 keer herhalen?",
      "options": [
        "Een Cauchy-verdeling met zware staarten door de grilligheid van individuele toevalsworpen",
        "Een volkomen platte uniforme verdeling tussen 1 en 6, conform de wet van behoud van verdelingsvorm",
        "Een klokvormige normale verdeling gecentreerd rond 3.5 met sterk verminderde variantie, dankzij de Centrale Limietstelling",
        "Een Poisson-verdeling met parameter λ = 3.5 omdat dobbelsteenogen gehele getallen zijn"
      ],
      "correctIndex": 2,
      "explanation": "Juist! Dit is het wonder van de CLT: ongeacht hoe de oorspronkelijke data verdeeld is (zelfs kurkdroog uniform), de som of het gemiddelde van voldoende onafhankelijke waarnemingen wordt altijd normaal verdeeld.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: Behavior of the Sample Mean",
      "title_es": "Ejercicio 1: Comportamiento de la Media Muestral",
      "question_en": "We roll a fair die (uniform 1 to 6, flat distribution). We calculate the mean of 100 rolls, repeating this experiment 10,000 times. What does the histogram of these 10,000 means look like?",
      "question_es": "Lanzamos un dado equilibrado (distribución uniforme plana de 1 a 6). Calculamos la media de 100 tiradas y repetimos el experimento 10.000 veces. ¿Qué aspecto tiene el histograma de esas 10.000 medias?",
      "options_en": [
        "A completely flat uniform distribution between 1 and 6",
        "A narrow, symmetric Gaussian bell curve centered tightly around 3.50 with variance σ² / 100",
        "A right-skewed exponential distribution",
        "A bimodal distribution with peaks at 1 and 6"
      ],
      "options_es": [
        "Una distribución uniforme totalmente plana entre 1 y 6",
        "Una campana de Gauss estrecha y simétrica centrada en 3,50 con varianza σ² / 100",
        "Una distribución exponencial asimétrica a la derecha",
        "Una distribución bimodal con picos en 1 y 6"
      ],
      "explanation_en": "Brilliant! This is the core miracle of the CLT: even though individual rolls are uniform, the average of 100 rolls forms a bell curve around μ = 3.5.",
      "explanation_es": "¡Brillante! Este es el milagro del Teorema del Límite Central: aunque cada tirada es uniforme, el promedio de 100 tiradas forma una campana normal perfecta en 3,5."
    },
    {
      "id": "l3_ex2",
      "category": "Valkuil",
      "title": "Oefening 2: De Grote Misvatting over Data-Transformatie",
      "question": "Een junior onderzoeker zegt: 'Mijn patiëntendata is zwaar scheef. Maar omdat ik N = 500 patiënten heb, is mijn data nu vanzelf normaal verdeeld!' Waarom heeft hij ongelijk?",
      "options": [
        "Omdat de CLT alleen zegt dat de verdeling van de STEEKPROEFSTATISTIEK (het gemiddelde) normaal wordt; de onderliggende verdeling van de individuele patiënten blijft exact even scheef",
        "Omdat de CLT alleen geldt voor continue variabelen die al bij benadering symmetrisch zijn",
        "Omdat de Centrale Limietstelling pas intreedt bij N > 10.000 voor asymmetrische biologische verdelingen",
        "Omdat de standaardafwijking s bij N = 500 convergeert naar nul, waardoor de verdeling ontaardt in een Dirac-delta"
      ],
      "correctIndex": 0,
      "explanation": "Precies! Dit is misschien wel de meest gemaakte fout in toegepaste statistiek. De CLT verandert jouw ruwe data NIET. Jouw data blijft scheef.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 2: The Data Transformation Fallacy",
      "title_es": "Ejercicio 2: La Falacia de la Transformación de Datos",
      "question_en": "A researcher states: 'My patient data is skewed, but by collecting N = 500 patients, my raw data distribution automatically became normal thanks to the CLT!' What fundamental error did they commit?",
      "question_es": "Un investigador afirma: 'Mis datos de pacientes son asimétricos, pero al reclutar N = 500 pacientes, ¡la distribución de mis datos crudos se volvió normal gracias al TLC!' ¿Qué error conceptual cometió?",
      "options_en": [
        "No error: the CLT guarantees all large datasets become normally distributed",
        "Fatal confusion: the CLT states that the SAMPLING DISTRIBUTION OF THE MEAN converges to normality, NOT the raw underlying patient observations!",
        "N = 500 is insufficient; normality requires N ≥ 10,000",
        "The CLT only operates on medical data after logarithmic transformation"
      ],
      "options_es": [
        "Ningún error: el TLC garantiza que todos los conjuntos grandes de datos se normalizan",
        "Confusión letal: el TLC establece que la DISTRIBUCIÓN MUESTRAL DE LA MEDIA converge a la normalidad, ¡NO las observaciones individuales de los pacientes!",
        "N = 500 es insuficiente; la normalidad exige N ≥ 10.000",
        "El TLC solo opera en variables médicas tras una transformación logarítmica"
      ],
      "explanation_en": "Haute conceptual precision! The CLT governs the behavior of sample statistics (like means), never the original population distribution.",
      "explanation_es": "¡Máxima precisión conceptual! El TLC rige el comportamiento de estadísticos muestrales (como las medias), jamás la distribución de las observaciones brutas."
    },
    {
      "id": "l3_ex3",
      "category": "Berekening",
      "title": "Oefening 3: Standaardfout Schalen",
      "question": "De populatiespreiding is σ = 20. Bij N = 25 is de standaardfout SE = 20 / √25 = 4.0. Welke steekproefgrootte N heb je nodig om de standaardfout te halveren naar SE = 2.0?",
      "options": [
        "N = 50 (verdubbelen, omdat precisie evenredig is met N)",
        "N = 200 (want een halvering van de foutmarge vereist een achtvoudige steekproefvergroting)",
        "N = 100 (verviervoudigen, want √100 = 10 en 20 / 10 = 2.0)",
        "N = 625 (want de variantie schaalt met het kwadraat van de initiële steekproef)"
      ],
      "correctIndex": 2,
      "explanation": "Spot-on! Om een standaardfout door 2 te delen, moet je steekproefomvang met 2² = 4 worden vermenigvuldigd. De wortelwet eist steeds meer data voor marginale precisiewinst.",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 3: Standard Error Scaling",
      "title_es": "Ejercicio 3: Escala del Error Estándar",
      "question_en": "Population spread is σ = 20. At N = 25, the standard error is SE = 20 / √25 = 4.0. We want to cut our estimation error in half (SE = 2.0). What sample size N is required?",
      "question_es": "La desviación poblacional es σ = 20. Con N = 25, el error estándar es EE = 20 / √25 = 4,0. Deseamos reducir a la mitad el error de estimación (EE = 2,0). ¿Qué tamaño N es necesario?",
      "options_en": [
        "N = 50 (double the sample)",
        "N = 100 (quadruple the sample, because SE scales with 1/√N)",
        "N = 200 (scale by eight)",
        "N = 625 (square the sample size)"
      ],
      "options_es": [
        "N = 50 (duplicar la muestra)",
        "N = 100 (cuadruplicar la muestra, porque el EE escala con 1/√N)",
        "N = 200 (multiplicar por ocho)",
        "N = 625 (elevar al cuadrado el tamaño muestral)"
      ],
      "explanation_en": "Correct! SE = σ / √N. To divide SE by 2, √N must double, meaning N must be multiplied by 2² = 4 (25 × 4 = 100).",
      "explanation_es": "¡Correcto! EE = σ / √N. Para dividir el EE entre 2, √N debe duplicarse, lo que exige multiplicar N por 2² = 4 (25 × 4 = 100)."
    }
  ],
  "4": [
    {
      "id": "l4_ex1",
      "category": "Valkuil",
      "title": "Oefening 1: De Klassieke Frequentistische Denkval",
      "question": "Een peiling rapporteert: '95% betrouwbaarheidsinterval voor partij A is [28%, 32%]'. Welke stelling is mathematisch ONJUIST?",
      "options": [
        "Bij herhaald bemonsteren onder identieke condities zal 95% van de geconstrueerde intervallen het werkelijke populatiepercentage omvatten",
        "Als we een 99% interval hadden berekend met dezelfde data, zou het resulterende interval breder zijn geweest",
        "De puntschatting van deze specifieke steekproef is 30% met een geschatte foutmarge van ± 2%",
        "Er is nu een a-posteriori kans van 95% dat het werkelijke populatiepercentage binnen [28%, 32%] ligt"
      ],
      "correctIndex": 3,
      "explanation": "Precies! Optie B is de klassieke frequentistische denkfout. Het werkelijke populatiepercentage is een vast getal (geen toevalsvariabele). Het ligt erin of niet (kans is 0 of 1). De 95% slaat op de betrouwbaarheid van de meetprocedure.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 1: The Classical Frequentist Trap",
      "title_es": "Ejercicio 1: La Trampa Frecuentista Clásica",
      "question_en": "A political poll reports: '95% confidence interval for candidate approval is [52%, 58%]'. A journalist writes: 'There is a 95% probability that the candidate's true support lies between 52% and 58%'. Is this statement correct?",
      "question_es": "Un sondeo electoral publica: 'El intervalo de confianza al 95% para la aprobación del candidato es [52%, 58%]'. Un periodista concluye: 'Hay un 95% de probabilidad de que el apoyo real del candidato esté entre el 52% y el 58%'. ¿Es correcta esta afirmación?",
      "options_en": [
        "Yes, that is the literal textbook definition of a 95% confidence interval",
        "No! In frequentist statistics, the true parameter is fixed (not random). Once computed, the interval either contains it (P=1) or does not (P=0). The 95% refers to procedure coverage across repeated hypothetical samples",
        "Yes, provided the sample was drawn via simple random sampling",
        "No, because the margin of error is asymmetric for percentages"
      ],
      "options_es": [
        "Sí, esa es la definición literal de un intervalo de confianza al 95%",
        "¡No! En estadística frecuentista el parámetro real es fijo (no aleatorio). Una vez calculado, el intervalo lo contiene (P=1) o no (P=0). El 95% alude a la tasa de cobertura del procedimiento en infinitas muestras repetidas",
        "Sí, siempre que el muestreo haya sido estrictamente probabilístico",
        "No, porque el margen de error es asimétrico en porcentajes"
      ],
      "explanation_en": "Spot on! The frequentist parameter is immutable. Saying '95% probability of being in this specific interval' assigns probability to a constant, which is a Bayesian concept.",
      "explanation_es": "¡Precisión impecable! En inferencia frecuentista el parámetro no es aleatorio. Atribuir una probabilidad a un intervalo numérico fijo es confundir la filosofía frecuentista con la bayesiana."
    },
    {
      "id": "l4_ex2",
      "category": "Dilemma",
      "title": "Oefening 2: Overlappende Intervallen & Significantie",
      "question": "Twee groepen hebben elk een 95% CI voor hun gemiddelde: Groep 1 = [10, 16], Groep 2 = [14, 20]. De intervallen overlappen licht (tussen 14 en 16). Mag je concluderen dat het verschil niet-significant is (p > 0.05)?",
      "options": [
        "Nee! Twee intervallen kunnen licht overlappen terwijl de formele two-sample t-toets op het verschil toch statistisch significant is (p < 0.05). Pas bij substantiële overlap verdwijnt de significantie",
        "Ja, omdat de som van twee onafhankelijke 95% intervallen altijd resulteert in een gezamenlijk betrouwbaarheidsniveau van 90%",
        "Nee, maar alleen als beide steekproeven een identieke variantie vertonen onder de Levene's toets",
        "Ja: zodra twee afzonderlijke 95% betrouwbaarheidsintervallen elkaar overlappen, is het verschil per definitie p > 0.05"
      ],
      "correctIndex": 0,
      "explanation": "Groot inzicht! Een klassieke beginnersfout. Het betrouwbaarheidsinterval voor het VERSCHIL tussen twee gemiddelden gebruikt de kwadratische som van de standaardfouten (√(SE1² + SE2²)), wat kleiner is dan SE1 + SE2.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 2: Overlapping Confidence Intervals & Significance",
      "title_es": "Ejercicio 2: Intervalos Solapados y Significación",
      "question_en": "Two clinical trial groups have 95% CIs: Group A [10, 20] and Group B [18, 28]. Because they overlap between 18 and 20, a clinician asserts: 'The groups are definitely not significantly different (p > 0.05)!' Is this reasoning sound?",
      "question_es": "Dos grupos de un ensayo clínico tienen IC al 95%: Grupo A [10, 20] y Grupo B [18, 28]. Como se solapan entre 18 y 20, un médico asegura: '¡Los grupos no difieren significativamente (p > 0,05)!' ¿Es válido este razonamiento?",
      "options_en": [
        "Yes: overlapping 95% confidence intervals mathematically prove p > 0.05",
        "No! Two 95% CIs can overlap slightly and still yield a statistically significant two-sample t-test (p < 0.05). Testing the difference SE_diff = √(SE_A² + SE_B²) is narrower than summing individual margins!",
        "Yes, but only if both group sample sizes are identical",
        "No, because overlapping intervals only apply to non-parametric median tests"
      ],
      "options_es": [
        "Sí: el solapamiento de intervalos al 95% demuestra matemáticamente que p > 0,05",
        "¡No! Dos IC al 95% pueden solaparse ligeramente y, sin embargo, la diferencia entre ambos ser estadísticamente significativa (p < 0,05). ¡El error de la diferencia √(EE_A² + EE_B²) es menor que la suma de márgenes individuales!",
        "Sí, pero únicamente si ambos grupos tienen idéntico tamaño muestral",
        "No, porque el solapamiento solo es aplicable a pruebas no paramétricas de medianas"
      ],
      "explanation_en": "Profound statistical nuance! When individual CIs overlap by less than ~29%, the difference test can still be significant at p < 0.05. Never judge significance solely by eyeballing separate CIs.",
      "explanation_es": "¡Gran sutileza estadística! Dos intervalos pueden solaparse hasta en un ~29% de su longitud y resultar significativos con p < 0,05. Nunca juzgues significación solo mirando intervalos individuales superpuestos."
    },
    {
      "id": "l4_ex3",
      "category": "Concept",
      "title": "Oefening 3: 90% vs 95% vs 99% Betrouwbaarheid",
      "question": "Wat gebeurt er met de breedte van een betrouwbaarheidsinterval als je het betrouwbaarheidsniveau verhoogt van 95% naar 99% bij gelijke steekproefomvang?",
      "options": [
        "De breedte blijft identiek, maar de residuen worden getoetst tegen de t-verdeling met N - 1 vrijheidsgraden",
        "Het interval wordt smaller (de Z-factor daalt) omdat een hogere betrouwbaarheid minder tolerantie voor fouten toestaat",
        "Het interval wordt breder (de kritieke Z-waarde stijgt van 1.96 naar 2.58), want om met grotere zekerheid de ware parameter te vangen moet je marge toenemen",
        "Het interval behoudt dezelfde absolute marge, maar het centrum verschuift richting de nulhypothese"
      ],
      "correctIndex": 2,
      "explanation": "Precies! Zekerheid heeft een prijs. Als je 99% zeker wilt zijn dat de waarheid in je interval zit, moet je een groter bereik accepteren.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 3: 90% vs 95% vs 99% Confidence",
      "title_es": "Ejercicio 3: Confianza al 90% vs 95% vs 99%",
      "question_en": "What happens to the width of a confidence interval if we increase our required confidence level from 95% to 99% for a fixed sample size?",
      "question_es": "¿Qué le ocurre a la amplitud de un intervalo de confianza si elevamos el nivel requerido del 95% al 99% manteniendo fija la muestra?",
      "options_en": [
        "The interval becomes narrower, providing higher precision",
        "The interval becomes wider (Z* expands from 1.96 to 2.576): greater confidence demands casting a wider net",
        "The width stays identical, only the p-value changes",
        "The width collapses to zero because 99% approaches absolute certainty"
      ],
      "options_es": [
        "El intervalo se vuelve más estrecho, proporcionando mayor precisión",
        "El intervalo se ensancha (Z* pasa de 1,96 a 2,576): mayor certeza exige abarcar un rango más amplio",
        "La amplitud permanece idéntica, solo cambia el valor p",
        "La amplitud colapsa a cero porque el 99% se aproxima a la certeza absoluta"
      ],
      "explanation_en": "Exact! To be 99% sure of capturing the true mean, we must widen the net. Higher confidence trades off against estimation precision.",
      "explanation_es": "¡Exacto! Para tener un 99% de certeza de atrapar la verdadera media, la red debe ser más ancha. Mayor confianza exige sacrificar precisión milimétrica."
    }
  ],
  "5": [
    {
      "id": "l5_ex1",
      "category": "Dilemma",
      "title": "Oefening 1: P-waarde vs Effectgrootte bij Grote N",
      "question": "Een A/B-test met N = 10 miljoen bezoekers toont een conversiestijging van 2.000% naar 2.004% met p = 0.000008. Wat is de juiste zakelijke en statistische conclusie?",
      "options": [
        "Voorzichtig zijn: bij N = 10 miljoen detecteert een hypothesetoets zelfs minuscule ruis als hoog-significant; een absolute toename van 0.004% heeft vrijwel nul praktische of bedrijfseconomische waarde",
        "Direct uitrollen naar productie en investeren, want p < 0.00001 garandeert dat het effect gigantisch is",
        "De p-waarde normaliseren door te delen door √N om de werkelijke nulhypothese te herstellen",
        "De nulhypothese handhaven omdat effecten kleiner dan 0.1% a priori als meetfouten worden gedefinieerd"
      ],
      "correctIndex": 0,
      "explanation": "Cruciaal onderscheid! Statistische significantie (p-waarde) zegt alleen of een effect waarschijnlijk niet op toeval berust. Praktische relevantie (effectgrootte) zegt of het effect er in de echte wereld toe doet.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 1: P-value vs Effect Size with Massive N",
      "title_es": "Ejercicio 1: Valor p frente a Tamaño del Efecto con N Masiva",
      "question_en": "An A/B test with N = 10,000,000 visitors shows a checkout conversion increase from 2.000% to 2.003% with p = 0.000002. What do you conclude?",
      "question_es": "Un test A/B con N = 10.000.000 de visitas muestra un aumento de conversión de compra del 2,000% al 2,003% con p = 0,000002. ¿Qué concluyes?",
      "options_en": [
        "The change is a revolutionary breakthrough because p is infinitesimally small",
        "The result is statistically significant due to colossal sample size, but the trivial effect size (+0.003%) may not justify deployment costs",
        "The test is invalid because p-values cannot be computed when N > 1,000,000",
        "The conversion gain is guaranteed to expand tenfold over time"
      ],
      "options_es": [
        "El cambio es un éxito revolucionario porque el valor p es infinitamente pequeño",
        "El resultado es estadísticamente significativo debido a la colosal muestra, pero el efecto trivial (+0,003%) puede no amortizar los costes de implementación",
        "El test no es válido porque no se pueden calcular valores p con N > 1.000.000",
        "El aumento de conversión se multiplicará por diez de forma garantizada a largo plazo"
      ],
      "explanation_en": "Masterful! With massive N, even biologically or commercially meaningless differences become 'statistically significant'. Always evaluate effect size!",
      "explanation_es": "¡Magistral! Con N masiva, cualquier diferencia irrelevante se vuelve 'estadísticamente significativa'. ¡Evalúa siempre la magnitud del efecto y el impacto real!"
    },
    {
      "id": "l5_ex2",
      "category": "Concept",
      "title": "Oefening 2: Type I en Type II Fouten in de Praktijk",
      "question": "Bij de ontwikkeling van een autonoom remsysteem voor auto's: wat is een Type II fout (vals negatief)?",
      "options": [
        "Onterecht krachtig remmen voor een onschuldig plastic zakje dat over de weg waait (vals alarm / Type I fout)",
        "Niet remmen terwijl er daadwerkelijk een overstekende voetganger staat (gemist reëel gevaar / Type II fout)",
        "Het sensorsysteem kalibreert de meetafstand opnieuw met behulp van een Kalman filter",
        "De camera detecteert een voetganger correct en activeert de noodstop (True Positive)"
      ],
      "correctIndex": 1,
      "explanation": "Juist! Type I fout = Vals Alarm (je ziet een effect/gevaar dat er niet is). Type II fout = Gemist Signaal (er is wél gevaar/effect, maar je systeem grijpt niet in).",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 2: Type I and Type II Errors in Practice",
      "title_es": "Ejercicio 2: Errores Tipo I y Tipo II en la Práctica",
      "question_en": "In autonomous emergency braking systems: H₀: 'There is no pedestrian on the road'. What are the real-world consequences of Type I and Type II errors?",
      "question_es": "En sistemas de frenado autónomo de vehículos: H₀: 'No hay peatón en la carretera'. ¿Cuáles son las consecuencias de los errores Tipo I y Tipo II?",
      "options_en": [
        "Type I: False alarm (brakes trigger unnecessarily); Type II: Missed detection (car fails to brake for a pedestrian, potentially fatal)",
        "Type I: Fatal collision; Type II: Phantom phantom brake alarm",
        "Both errors carry identical safety profiles",
        "Type I error cannot occur in computer vision systems"
      ],
      "options_es": [
        "Tipo I: Falsa alarma (el coche frena innecesariamente); Tipo II: Detección fallida (el coche no frena ante un peatón real, potencialmente letal)",
        "Tipo I: Colisión letal; Tipo II: Alarma fantasma",
        "Ambos errores conllevan exactamente el mismo perfil de riesgo",
        "El error Tipo I no puede ocurrir en visión artificial"
      ],
      "explanation_en": "Crystal clear! Type I = False positive (rejecting H₀ when false). Type II = False negative (missing the true emergency). Safety engineering tunes algorithms to minimize Type II errors.",
      "explanation_es": "¡Claridad absoluta! Tipo I = Falso positivo (frenazo innecesario). Tipo II = Falso negativo (no detectar el peligro real). La ingeniería minimiza el error Tipo II a toda costa."
    },
    {
      "id": "l5_ex3",
      "category": "Valkuil",
      "title": "Oefening 3: Wat zegt p = 0.04 werkelijk?",
      "question": "Een onderzoeker claimt: 'Mijn p-waarde is 0.04, dus er is 96% kans dat mijn onderzoekshypothese waar is.' Klopt dit?",
      "options": [
        "Ja, want het complement van de overschrijdingskans (1 - p = 0.96) is de posterior waarschijnlijkheid van H1",
        "Ja, mits de statistische power (1 - β) van het experiment vooraf op exact 80% was vastgesteld",
        "Absoluut onjuist! De p-waarde is P(Data of extremer | H0 waar), NIET P(H0 waar | Data). De werkelijke waarschijnlijkheid van de hypothese hangt cruciaal af van de a priori kans en de power van de studie",
        "Ja, want de frequentistische p-waarde is wiskundig identiek aan de Bayes Factor BF10 gedeeld door de steekproefgrootte"
      ],
      "correctIndex": 2,
      "explanation": "Spot-on! De p-waarde berekent hoe onwaarschijnlijk de DATA is ALS de nulhypothese waar zou zijn. Het vertelt je niets over hoe waarschijnlijk de HYPOTHESE zelf is.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 3: What Does p = 0.04 Truly Mean?",
      "title_es": "Ejercicio 3: ¿Qué Significa Realmente p = 0,04?",
      "question_en": "A researcher claims: 'My p-value is 0.04, which proves there is a 96% probability that my alternative hypothesis H₁ is true!' What is the logical flaw?",
      "question_es": "Un investigador declara: 'Mi valor p es 0,04, lo que demuestra un 96% de probabilidad de que mi hipótesis H₁ sea cierta'. ¿Cuál es el error lógico?",
      "options_en": [
        "There is no flaw; p = 0.04 implies P(H₁) = 1 - 0.04 = 0.96",
        "Gross error: p-values only measure P(Data ≥ Observed | H₀ is true). They cannot calculate P(H₁ | Data) without specifying Bayesian prior probabilities",
        "The researcher should have set α = 0.01 instead of 0.05",
        "p-values can only be interpreted when testing two-tailed hypotheses"
      ],
      "options_es": [
        "No hay error; p = 0,04 implica que P(H₁) = 1 - 0,04 = 0,96",
        "Grave error: el valor p solo mide P(Datos ≥ Observados | H₀ cierta). No evalúa P(H₁ | Datos), lo cual exige probabilidades a priori bayesianas",
        "El investigador debió fijar α = 0,01 en lugar de 0,05",
        "Los valores p solo son interpretables en contrastes bilaterales"
      ],
      "explanation_en": "Flawless! A p-value is P(Data|H₀), NOT P(H₀|Data). Transposing conditionals without Bayes' theorem is the most widespread fallacy in academic science.",
      "explanation_es": "¡Impecable! El valor p es P(Datos|H₀), NUNCA P(H₀|Datos). Invertir los términos condicionales sin el Teorema de Bayes es la falacia más extendida en la ciencia."
    }
  ],
  "6": [
    {
      "id": "l6_ex1",
      "category": "Berekening",
      "title": "Oefening 1: Helling & Intercept Lezen",
      "question": "In het model Salaris (€/jaar) = 50.000 + 12.500 × Ervaring (jaren): wat is het verwachte salaris van een werknemer met 4 jaar ervaring?",
      "options": [
        "€ 50.000 (het basisniveau zonder rekening te houden met de hellingscoëfficiënt)",
        "€ 62.500 (de toename na het eerste ervaringsjaar als cumulatieve limiet)",
        "€ 125.000 (de veronderstelling dat het basissalaris verdubbelt per decennium)",
        "€ 100.000 (want 50.000 + 12.500 × 4 = 100.000)"
      ],
      "correctIndex": 3,
      "explanation": "Juist! Vul 4 in voor Ervaring: 50.000 + (12.500 × 4) = 50.000 + 50.000 = € 100.000. Het intercept is de startwaarde bij 0 jaar, de helling is de jaarlijkse groei.",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 1: Interpreting Slope & Intercept",
      "title_es": "Ejercicio 1: Interpretar Pendiente e Intercepto",
      "question_en": "In the model Salary (€/year) = 50,000 + 12,500 × Experience (years), what is the expected annual salary of an engineer with 4 years of experience?",
      "question_es": "En el modelo Salario (€/año) = 50.000 + 12.500 × Experiencia (años), ¿cuál es el salario anual esperado de un ingeniero con 4 años de experiencia?",
      "options_en": [
        "€ 100,000 per year (50,000 + 4 × 12,500)",
        "€ 75,000 per year",
        "€ 112,500 per year",
        "€ 62,500 per year"
      ],
      "options_es": [
        "100.000 € al año (50.000 + 4 × 12.500)",
        "75.000 € al año",
        "112.500 € al año",
        "62.500 € al año"
      ],
      "explanation_en": "Correct! Ŷ = 50,000 + 12,500 × 4 = 50,000 + 50,000 = €100,000.",
      "explanation_es": "¡Correcto! Ŷ = 50.000 + 12.500 × 4 = 50.000 + 50.000 = 100.000 €."
    },
    {
      "id": "l6_ex2",
      "category": "Concept",
      "title": "Oefening 2: Waarom Kwadrateren in OLS?",
      "question": "Waarom minimaliseert de methode van de Kleinste Kwadraten (OLS) de kwadratensom van residuen Σ e_i² in plaats van de gewone som van residuen Σ e_i of de absolute residuen Σ |e_i|?",
      "options": [
        "Omdat de gewone som Σ e_i uitschieters zwaarder bestraft dan kwadraten, waardoor OLS anders instabiel wordt bij grote steekproeven",
        "Omdat de gewone som Σ e_i bij elke willekeurige lijn door het zwaartepunt (x̄, ȳ) al nul is, en kwadrateren (L2) overal differentieerbaar is met een unieke analytische oplossing (XᵀX)⁻¹Xᵀy, terwijl de absolute som Σ |e_i| (L1) niet overal differentieerbaar is",
        "Omdat de Gauss-Markov stelling vereist dat de som van de residuen strikt groter dan nul is voor unbiased schattingen",
        "Omdat de absolute som Σ |e_i| wiskundig niet gedefinieerd is voor continue residuen die rond nul oscilleren"
      ],
      "correctIndex": 1,
      "explanation": "Exact! Bij de gewone som Σ e_i heffen positieve en negatieve fouten elkaar op (elke lijn door het zwaartepunt levert Σ e_i = 0). De absolute som Σ |e_i| (L1 / LAD-regressie) heft niet op, maar is bij het nulpunt niet differentieerbaar en mist een gesloten matrixoplossing. De kwadratensom Σ e_i² (OLS / L2) is overal continu differentieerbaar, levert de analytische schatter (XᵀX)⁻¹Xᵀy en is volgens Gauss-Markov de beste lineaire zuivere schatter (BLUE).",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 2: Why Square Residuals in OLS?",
      "title_es": "Ejercicio 2: ¿Por Qué Elevar al Cuadrado en MCO?",
      "question_en": "Why does Ordinary Least Squares minimize the SUM OF SQUARED residuals Σ(y_i - ŷ_i)² rather than the simple sum of raw residuals Σ(y_i - ŷ_i)?",
      "question_es": "¿Por qué Mínimos Cuadrados Ordinarios minimiza la SUMA DE RESIDUOS AL CUADRADO Σ(y_i - ŷ_i)² en lugar de la suma simple de residuos Σ(y_i - ŷ_i)?",
      "options_en": [
        "Squaring makes calculation faster on digital microprocessors",
        "Because positive and negative residuals cancel each other out to zero for any line passing through (x̄, ȳ); squaring eliminates signs and penalizes large errors more heavily",
        "Squaring forces all slope parameters to be strictly positive",
        "Because the sum of raw residuals can never equal zero"
      ],
      "options_es": [
        "Elevar al cuadrado acelera el cálculo matricial en microprocesadores",
        "Porque los residuos positivos y negativos se cancelan sumando exactamente cero en cualquier recta que cruce (x̄, ȳ); elevar al cuadrado elimina signos y castiga más las desviaciones grandes",
        "Elevar al cuadrado fuerza que todas las pendientes sean estrictamente positivas",
        "Porque la suma simple de residuos nunca puede ser igual a cero"
      ],
      "explanation_en": "Fundamental regression insight! Any line through the center of gravity has Σ e_i = 0. Squaring forces all errors positive and mathematically yields the Gauss-Markov BLUE property.",
      "explanation_es": "¡Concepto cardinal de regresión! Cualquier recta que pase por el centro de gravedad (x̄, ȳ) tiene Σ e_i = 0. Elevar al cuadrado evita cancelaciones y confiere propiedades óptimas según Gauss-Markov."
    },
    {
      "id": "l6_ex3",
      "category": "Valkuil",
      "title": "Oefening 3: Correlatie vs Causaliteit",
      "question": "Er is een sterke correlatie (r = 0.85) tussen de verkoop van zonnebrillen en het aantal verdrinkingen in de zomer. Betekent dit dat het verbieden van zonnebrillen verdrinkingen zal voorkomen?",
      "options": [
        "Alleen als het regressiemodel een verklaringskracht R² van boven 0.95 bereikt",
        "Ja, want een correlatiecoëfficiënt r > 0.80 overschrijdt de drempel voor causaal bewijs in observationele studies",
        "Nee! Hoge buitentemperatuur is een confounder: warm weer leidt tot zowel meer zonnebrillen als meer zwemmers. Het verband tussen bril en verdrinking is zuiver onecht (spurious)",
        "Ja, mits de p-waarde van de Pearson correlatietoets kleiner is dan 0.001"
      ],
      "correctIndex": 2,
      "explanation": "Cruciaal! Correlatie impliceert NOOIT causaliteit. Een verborgen gemeenschappelijke oorzaak (confounder Z: hitte/zomer) stuurt zowel X als Y aan.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 3: Correlation vs Causation",
      "title_es": "Ejercicio 3: Correlación frente a Causalidad",
      "question_en": "There is a strong correlation (r = 0.85) between ice cream sales and drownings. An OLS model yields Drownings = 1.2 + 0.08 × IceCream (p < 0.001). Can a city reduce drownings by banning ice cream sales?",
      "question_es": "Existe una fuerte correlación (r = 0,85) entre ventas de helados y ahogamientos. Un modelo MCO reporta Ahogamientos = 1,2 + 0,08 × Helados (p < 0,001). ¿Puede una ciudad reducir ahogamientos prohibiendo los helados?",
      "options_en": [
        "Yes: the statistically significant slope proves that selling ice cream causes drowning",
        "No! Both are driven by an unmeasured confounder: Summer Temperature (Z). OLS models association, not interventional causal mechanics",
        "Yes, but only if the regression R² exceeds 0.90",
        "No, because the correlation coefficient r is less than 1.0"
      ],
      "options_es": [
        "Sí: la pendiente estadísticamente significativa demuestra que los helados causan ahogamientos",
        "¡No! Ambas variables están impulsadas por un confusor común: la temperatura estival (Z). MCO modela asociación condicional, no causalidad intervencional",
        "Sí, pero únicamente si el R² del modelo supera 0,90",
        "No, porque el coeficiente de correlación r es inferior a 1,0"
      ],
      "explanation_en": "Classic confounding! High summer heat causes both swimming (more drownings) and ice cream consumption. Banning ice cream leaves summer heat untouched.",
      "explanation_es": "¡Confusión clásica! El calor del verano impulsa el baño (más riesgo) y el consumo de helados. Prohibir los helados no enfría el clima ni reduce los nadadores."
    }
  ],
  "7": [
    {
      "id": "l7_ex1",
      "category": "Concept",
      "title": "Oefening 1: Het Gedrag van Gewone R²",
      "question": "Waarom kan de gewone R² nooit dalen wanneer je extra voorspellers toevoegt aan een meervoudig OLS-model?",
      "options": [
        "Omdat de totale kwadratensom (SST) lineair meedaalt met elke nieuw toegevoegde vector",
        "Omdat de F-toets voor modelverbetering wiskundig verbiedt dat de correlatiematrix krimpt",
        "Omdat OLS de residuele kwadratensom (RSS) minimaliseert via orthogonale projectie; extra kolommen vergroten de kolomruimte en kunnen de passing alleen maar verbeteren of gelijk houden",
        "Omdat Adjusted R² en gewone R² altijd monotoon naar 1.0 convergeren"
      ],
      "correctIndex": 2,
      "explanation": "Juist! Wiskundig gezien kan OLS een extra variabele altijd de coëfficiënt 0 geven als hij niets toevoegt. In de praktijk pikt OLS altijd een beetje toevalsruis op, waardoor gewone R² altijd kunstmatig stijgt.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: Behavior of Standard R²",
      "title_es": "Ejercicio 1: Comportamiento del R² Ordinario",
      "question_en": "Why can standard R² never decrease when adding extra predictors to an OLS model, even when the new predictors are pure random noise?",
      "question_es": "¿Por qué el R² ordinario jamás puede descender al agregar predictores adicionales a un modelo MCO, incluso cuando son puro ruido?",
      "options_en": [
        "Because the computer optimizes the F-statistic directly",
        "Because OLS minimizes SSE; adding a variable provides extra mathematical freedom to capture finite-sample noise, so SSE can never increase",
        "Because R² is defined strictly as the sum of squared correlation coefficients",
        "Because the Gauss-Markov theorem forces monotonic convergence"
      ],
      "options_es": [
        "Porque el algoritmo optimiza directamente el estadístico F global",
        "Porque MCO minimiza la SCE; añadir una variable ofrece libertad matemática para explotar correlaciones accidentales en muestras finitas, por lo que la SCE nunca puede crecer",
        "Porque R² se define estrictamente como la suma de correlaciones al cuadrado",
        "Porque el teorema de Gauss-Markov exige convergencia monótona"
      ],
      "explanation_en": "Masterful! Adding a dimension allows OLS to fit random blips in the sample. SSE never increases, meaning R² = 1 - (SSE/SST) never decreases.",
      "explanation_es": "¡Magistral! Añadir dimensiones permite a MCO aprovechar fluctuaciones casuales de la muestra. La SCE nunca sube, por lo que R² jamás decrece."
    },
    {
      "id": "l7_ex2",
      "category": "Dilemma",
      "title": "Oefening 2: Modelvergelijking in de Praktijk",
      "question": "Model A heeft 3 voorspellers met R² = 0.74 en Adj-R² = 0.73. Model B voegt 12 willekeurige variabelen toe en haalt R² = 0.76 en Adj-R² = 0.69. Welk model kies je?",
      "options": [
        "Model A, want de Adjusted R² is substantieel hoger (0.73 vs 0.69). De extra 12 variabelen in Model B voegen voornamelijk overfitting en ruis toe die zwaarder worden bestraft dan ze bijdragen",
        "Model B, omdat de ruwe verklaarde variantie R² van 0.76 de hoogste empirische passing representeert",
        "Model B, mits alle 12 extra variabelen individueel getoetst worden met een tweezijdige z-toets",
        "Beide modellen zijn gelijkwaardig omdat de BIC altijd de kleinste residu-vector kiest"
      ],
      "correctIndex": 0,
      "explanation": "Uitstekend! De daling in Adjusted R² van 0.73 naar 0.69 bewijst onomstotelijk dat de 12 extra variabelen niets toevoegen behalve ruis en overfitting. Kies het compacte, parsimonieuze Model A.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 2: Model Comparison in Practice",
      "title_es": "Ejercicio 2: Comparación de Modelos en la Práctica",
      "question_en": "Model A has 3 predictors with R² = 0.74 and Adj-R² = 0.73. Model B adds 12 extra predictors, reaching R² = 0.76 and Adj-R² = 0.68. Which model should you deploy for operational forecasting?",
      "question_es": "El Modelo A tiene 3 predictores con R² = 0,74 y R²-Adj = 0,73. El Modelo B añade 12 predictores más, logrando R² = 0,76 y R²-Adj = 0,68. ¿Qué modelo debes implementar en producción?",
      "options_en": [
        "Model B, because standard R² is higher (0.76 > 0.74)",
        "Model A: its Adjusted R² is higher (0.73 vs 0.68), proving the 12 extra variables burned degrees of freedom and overfit random noise",
        "Both models are identical because the difference in R² is less than 0.05",
        "Model B, provided the AIC is ignored"
      ],
      "options_es": [
        "El Modelo B, porque su R² ordinario es mayor (0,76 > 0,74)",
        "El Modelo A: su R² Ajustado es superior (0,73 frente a 0,68), demostrando que las 12 variables adicionales sobreajustaron ruido a costa de grados de libertad",
        "Ambos modelos son equivalentes porque la diferencia de R² es menor a 0,05",
        "El Modelo B, siempre que se prescinda del criterio AIC"
      ],
      "explanation_en": "Flawless model selection! Model B consumed 12 degrees of freedom for a negligible 2% variance gain. Adjusted R² penalized this overfitting correctly.",
      "explanation_es": "¡Selección de modelos impecable! El Modelo B consumió 12 grados de libertad para ganar un insignificante 2%. El R² Ajustado penaliza certeramente este sobreajuste."
    },
    {
      "id": "l7_ex3",
      "category": "Concept",
      "title": "Oefening 3: Wat toetst de algemene F-toets?",
      "question": "In een meervoudig regressiemodel met 4 voorspellers: wat is de exacte nulhypothese (H0) van de algemene omnibus F-toets?",
      "options": [
        "H0: Het regressie-intercept β0 is statistisch gelijk aan het steekproefgemiddelde ȳ",
        "H0: De populatie R² is gelijk aan de residuele standaardfout σ",
        "H0: Alle vier de partiële regressiehellingen zijn tegelijkertijd exact gelijk aan nul (β1 = β2 = β3 = β4 = 0)",
        "H0: De residuen van alle vier de voorspellers volgen onafhankelijke univariate Gauss-verdelingen"
      ],
      "correctIndex": 2,
      "explanation": "Exact! De F-toets toetst het MODEL ALS GEHEEL tegen een model met alleen een intercept. Als F significant is (p < 0.05), voegt minstens één van de voorspellers echte informatie toe.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 3: What Does the Overall F-test Test?",
      "title_es": "Ejercicio 3: ¿Qué Evalúa la Prueba F Global?",
      "question_en": "In a multivariable regression with 4 predictors: what is the null hypothesis H₀ tested by the overall ANOVA F-test?",
      "question_es": "En una regresión multivariable con 4 predictores: ¿cuál es la hipótesis nula H₀ que evalúa la prueba F global del análisis de varianza?",
      "options_en": [
        "H₀: All four slope coefficients are simultaneously equal to zero (β₁ = β₂ = β₃ = β₄ = 0)",
        "H₀: The intercept equals zero (β₀ = 0)",
        "H₀: At least one predictor is significant",
        "H₀: The residuals are normally distributed"
      ],
      "options_es": [
        "H₀: Los cuatro coeficientes de pendiente son simultáneamente iguales a cero (β₁ = β₂ = β₃ = β₄ = 0)",
        "H₀: El intercepto es igual a cero (β₀ = 0)",
        "H₀: Al menos uno de los predictores es significativo",
        "H₀: Los residuos se distribuyen normalmente"
      ],
      "explanation_en": "Exact! The omnibus F-test evaluates whether the model as a collective whole explains significantly more variance than a flat horizontal line.",
      "explanation_es": "¡Exacto! La prueba F global contrasta si el conjunto de predictores explica colectivamente más variabilidad que una simple línea horizontal promedio."
    }
  ],
  "8": [
    {
      "id": "l8_ex1",
      "category": "Valkuil",
      "title": "Oefening 1: Heteroscedasticiteit & Standaardfouten",
      "question": "Wat is de concrete consequentie als de storingstermen in OLS heteroscedastisch zijn (ongelijke residuele variantie)?",
      "options": [
        "De berekende standaardfouten (SE) zijn vertekend, waardoor betrouwbaarheidsintervallen en hypothesetoetsen (t- en F-waarden) ongeldig worden",
        "De Gauss-Markov aanname van exogeniteit E[ε|X] = 0 wordt direct geschonden",
        "De OLS-puntschattingen van de coëfficiënten worden biased en inconsistent",
        "De residuele kwadratensom kan niet langer berekend worden via de normale vergelijkingen"
      ],
      "correctIndex": 0,
      "explanation": "Heel belangrijk! Onder heteroscedasticiteit blijven de coëfficiënten β̂ nog steeds onvertekend (unbiased), maar de standaardfouten zijn fout berekend. Je p-waarden zijn daardoor waardeloos.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 1: Heteroscedasticity & Standard Errors",
      "title_es": "Ejercicio 1: Heterocedasticidad y Errores Estándar",
      "question_en": "What is the concrete consequence if residuals in an OLS model exhibit severe heteroscedasticity (expanding trumpet pattern)?",
      "question_es": "¿Cuál es la consecuencia concreta si los residuos en un modelo MCO presentan heterocedasticidad severa (patrón en abanico)?",
      "options_en": [
        "The regression slope estimates β̂ become biased and must be discarded",
        "The regression slopes remain unbiased, but the standard errors are biased, causing p-values and confidence intervals to be completely untrustworthy",
        "R² collapses to zero automatically",
        "Multicollinearity increases exponentially"
      ],
      "options_es": [
        "Las estimaciones de las pendientes β̂ se vuelven sesgadas y deben descartarse",
        "Las pendientes siguen siendo insesgadas, pero los errores estándar se sesgan, volviendo los valores p e intervalos de confianza totalmente engañosos",
        "El R² colapsa automáticamente a cero",
        "La multicolinealidad se incrementa exponencialmente"
      ],
      "explanation_en": "Precision diagnostics! Heteroscedasticity does not introduce bias into slope estimates; it breaks the variance formula, generating false p-values.",
      "explanation_es": "¡Diagnóstico riguroso! La heterocedasticidad no sesga las estimaciones de la pendiente; distorsiona la fórmula de varianza, arrojando valores p falsos."
    },
    {
      "id": "l8_ex2",
      "category": "Dilemma",
      "title": "Oefening 2: Kromming in de Residuals vs Fitted Plot",
      "question": "In de 'Residuals vs Fitted' plot zie je een duidelijke U-vorm (paraboolpatroon). Wat is de juiste methodologische reactie?",
      "options": [
        "Verwijder de bovenste 10% van de observaties om het residuenpatroon kunstmatig recht te trekken",
        "Negeer de kromming zolang de omnibus F-toets een p-waarde < 0.001 aangeeft",
        "Pas robuuste Huber-White standaardfouten toe om de functionele kromming te absorberen",
        "De assumptie van lineariteit is geschonden; voeg een kwadratische term (X²), spline of niet-lineaire transformatie toe om het model te corrigeren"
      ],
      "correctIndex": 3,
      "explanation": "Precies! Een kromming in de residuen toont onmiskenbaar aan dat een rechte lijn een verkeerd model is voor deze data. Pas de modelstructuur aan met polynomen, logs of splines.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 2: Curvature in Residuals vs Fitted Plot",
      "title_es": "Ejercicio 2: Curvatura en el Gráfico de Residuos vs Ajustados",
      "question_en": "In a Residuals vs Fitted plot, you observe a pronounced U-shaped curve. What does this diagnosis reveal and how do you resolve it?",
      "question_es": "En el gráfico de Residuos vs Ajustados observas una marcada forma en U. ¿Qué revela este diagnóstico y cómo se soluciona?",
      "options_en": [
        "Violation of linearity: the true relationship is non-linear; add a quadratic term (X²) or apply a non-linear transformation",
        "Violation of homoscedasticity; apply HC3 robust standard errors",
        "Violation of residual independence; fit an autoregressive time series model",
        "Data contains extreme outliers that should be deleted"
      ],
      "options_es": [
        "Violación del supuesto de linealidad: la relación funcional es curva; agrega un término cuadrático (X²) o aplica una transformación no lineal",
        "Violación de homocedasticidad; aplica errores estándar robustos HC3",
        "Violación de independencia; ajusta un modelo autorregresivo de series temporales",
        "Presencia de valores atípicos que deben eliminarse manualmente"
      ],
      "explanation_en": "Superb! A U-pattern in residuals indicates the linear model failed to capture curvature. Adding polynomial terms or a GAM spline resolves it.",
      "explanation_es": "¡Excelente! Un patrón en U en los residuos delata que el modelo lineal ignoró la curvatura real. Incorporar términos cuadráticos o splines GAM lo soluciona."
    },
    {
      "id": "l8_ex3",
      "category": "Concept",
      "title": "Oefening 3: Q-Q Plot Interpretatie",
      "question": "In de Normal Q-Q plot van de residuen buigen de punten aan de rechterbovenzijde steil omhoog boven de 45-graden diagonaal. Wat duidt dit aan?",
      "options": [
        "De residuen zijn perfect symmetrisch verdeeld met minimale kurtosis",
        "Het model lijdt aan ernstige multicollineariteit in de rechter kwadranten",
        "De residuen hebben een zwaardere rechterstaart dan een zuivere normale verdeling (positief scheve uitschieters)",
        "De conditionele variantie van de residuen convergeert monotoon naar nul"
      ],
      "correctIndex": 2,
      "explanation": "Juist! Als residuen boven de diagonaallijn uitstijgen aan de rechterkant, zijn de werkelijke observaties extremer dan de normale verdeling voorspelt. Je hebt te maken met een rechtsscheve verdeling of extreme positieve outliers.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 3: Normal Q-Q Plot Interpretation",
      "title_es": "Ejercicio 3: Interpretación del Gráfico Q-Q Normal",
      "question_en": "In the Normal Q-Q plot of residuals, the points curve upward on the left and downward on the right (an S-shape). What does this pattern diagnose?",
      "question_es": "En el gráfico Q-Q normal de residuos, los puntos se curvan hacia arriba a la izquierda y hacia abajo a la derecha (forma en S invertida). ¿Qué diagnostica este patrón?",
      "options_en": [
        "Residuals are perfectly normal",
        "Heavy tails (leptokurtic distribution): extreme errors occur far more frequently than predicted by a normal distribution",
        "Residuals are severely autocorrelated",
        "The sample size is too large for the normality test"
      ],
      "options_es": [
        "Los residuos son perfectamente gaussianos",
        "Colas pesadas (distribución leptocúrtica): ocurren errores extremos con mucha mayor frecuencia de lo previsto por una distribución normal",
        "Los residuos presentan fuerte autocorrelación serial",
        "El tamaño muestral es excesivo para la prueba de normalidad"
      ],
      "explanation_en": "Exact! Deviations in the tails of a Q-Q plot diagnose kurtosis and skewness. Heavy tails alert you that extreme risks are underestimated.",
      "explanation_es": "¡Exacto! Las desviaciones en los extremos del gráfico Q-Q diagnostican curtosis y asimetría. Colas pesadas advierten que los riesgos extremos están subestimados."
    }
  ],
  "9": [
    {
      "id": "l9_ex1",
      "category": "Concept",
      "title": "Oefening 1: Wat veroorzaakt Simpson's Paradox?",
      "question": "Wat is het onderliggende mechanisme waardoor een positieve correlatie tussen X en Y kan omslaan in een negatieve associatie binnen subgroepen (Simpson's Paradox)?",
      "options": [
        "Een onevenwichtig verdeelde confounder Z die sterk correleert met zowel de predictor X als de uitkomst Y",
        "Het gelijktijdig optreden van heteroscedasticiteit en multicollineariteit in de residuen",
        "Een rekenkundige inconsistentie veroorzaakt door het niet-standaardiseren van continue regressoren",
        "Het overschrijden van de statistische powerdrempel bij te grote steekproeven"
      ],
      "correctIndex": 0,
      "explanation": "Precies! Simpson's paradox ontstaat wanneer een derde factor (confounder) over het hoofd wordt gezien die de groepsindeling en uitkomst tegelijk domineert.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: What Drives Simpson's Paradox?",
      "title_es": "Ejercicio 1: ¿Qué Desencadena la Paradoja de Simpson?",
      "question_en": "What underlying causal mechanism allows a positive bivariate correlation to completely invert to a negative relationship when controlling for a confounder?",
      "question_es": "¿Qué mecanismo causal subyacente permite que una correlación positiva se invierta a negativa al controlar por un factor confusor?",
      "options_en": [
        "Random measurement noise in the outcome variable",
        "An omitted confounder correlated with both treatment and outcome, where subgroup differences dominate aggregate marginal data",
        "Severe multicollinearity between independent predictors",
        "Overfitting due to excessive degrees of freedom"
      ],
      "options_es": [
        "Ruido aleatorio de medición en la variable de respuesta",
        "Un confusor omitido correlacionado simultáneamente con el tratamiento y el desenlace, donde la disparidad entre subgrupos domina los datos agregados",
        "Multicolinealidad severa entre variables independientes",
        "Sobreajuste empírico por exceso de grados de libertad"
      ],
      "explanation_en": "Classic causal wisdom! Confounders open backdoor paths. Without conditioning on the common cause, the observed slope is contaminated by group selection.",
      "explanation_es": "¡Conocimiento causal clásico! Los factores de confusión abren caminos de puerta trasera que distorsionan por completo la pendiente agregada observada."
    },
    {
      "id": "l9_ex2",
      "category": "Dilemma",
      "title": "Oefening 2: Toelatingen aan de Universiteit",
      "question": "In de beroemde UC Berkeley toelatingsstudie leken mannen overall een hogere toelatingskans te hebben dan vrouwen. Binnen elke afzonderlijke faculteit hadden vrouwen echter een gelijk of hoger toelatingspercentage. Hoe verklaart meervoudige regressie dit?",
      "options": [
        "De data werd vertekend door meetruis in de afhankelijke binaire variabele",
        "Vrouwen solliciteerden onevenredig vaak bij zwaar competitieve faculteiten met zeer lage algemene toelatingspercentages (confounding door studiekeuze)",
        "De selectieprocedure schond de aanname van homoscedasticiteit tussen de verschillende departementen",
        "De lineaire linkfunctie convergeerde niet door een te laag aantal mannelijke respondenten"
      ],
      "correctIndex": 1,
      "explanation": "Briljant inzicht! Faculteit was de confounder. Zodra je faculteit toevoegt aan de regressie (conditioneert op afdeling), verdwijnt de schijnbare discriminatie tegen vrouwen direct.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 2: UC Berkeley Admissions Study",
      "title_es": "Ejercicio 2: El Estudio de Admisiones de UC Berkeley",
      "question_en": "In the famous UC Berkeley admissions study, men had higher aggregate admission rates than women (44% vs 35%). But within almost every individual department, women had equal or higher admission rates. Why?",
      "question_es": "En el célebre estudio de admisiones de UC Berkeley, los hombres tenían mayor tasa de admisión global que las mujeres (44% vs 35%). Sin embargo, dentro de casi cada departamento individual, las mujeres tenían tasas iguales o superiores. ¿Por qué?",
      "options_en": [
        "The university manipulated the data tables",
        "Department Choice was a confounder: women applied disproportionately to highly competitive departments with low admission rates, while men applied to departments with high acceptance rates",
        "The sample size of female applicants was too small to draw conclusions",
        "The chi-square test was computed incorrectly"
      ],
      "options_es": [
        "La universidad alteró los registros de admisiones",
        "La Elección de Departamento actuó como confusor: las mujeres solicitaron masivamente departamentos muy competitivos con bajas tasas de admisión, mientras los hombres postularon a facultades con alta aceptación",
        "El número de candidatas era demasiado pequeño para concluir",
        "La prueba de chi-cuadrado se calculó erróneamente"
      ],
      "explanation_en": "Iconic historical paradox! Stratifying by department revealed the true conditional parity. Aggregating over departments created an illusion of systemic bias.",
      "explanation_es": "¡Paradoja histórica emblemática! Estratificar por departamento reveló equidad condicional. Agregar los datos sin estratificar creó la ilusión óptica de un sesgo inexistente."
    },
    {
      "id": "l9_ex3",
      "category": "Concept",
      "title": "Oefening 3: Wat betekent 'Ceteris Paribus'?",
      "question": "In het model Salaris = 30.000 + 2.500 × Opleidingsjaren + 1.200 × Ervaring: hoe interpreteer je de coëfficiënt 2.500 correct?",
      "options": [
        "Iedere burger met een afgeronde opleiding verdient minstens € 2.500 meer dan het gemiddelde salaris",
        "Opleidingsjaren verklaart exact € 2.500 van de totale residuele variantie in de populatie",
        "De correlatiecoëfficiënt tussen opleiding en ervaring is vastgezet op € 2.500",
        "Bij een gelijkblijvend aantal jaren werkervaring (ceteris paribus) levert elk extra opleidingsjaar een verwachte salarisstijging van € 2.500 op"
      ],
      "correctIndex": 3,
      "explanation": "Exact! Het woord 'partieel' in partiële regressiecoëfficiënt betekent letterlijk: het effect van X1 wanneer alle andere voorspellers (hier: ervaring) constant worden gehouden.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 3: What Does 'Ceteris Paribus' Mean?",
      "title_es": "Ejercicio 3: ¿Qué Significa 'Ceteris Paribus'?",
      "question_en": "In the model Salary = 30,000 + 2,500 × Education + 1,200 × Experience, what is the precise interpretation of coefficient 2,500?",
      "question_es": "En el modelo Salario = 30.000 + 2.500 × Educación + 1.200 × Experiencia, ¿cuál es la interpretación exacta del coeficiente 2.500?",
      "options_en": [
        "Each additional year of education yields €2,500 more salary, regardless of experience",
        "Each additional year of education associates with an average salary increase of €2,500, HOLDING YEARS OF EXPERIENCE CONSTANT (ceteris paribus)",
        "Education explains 25% of the total salary variance",
        "The baseline salary without education is €2,500"
      ],
      "options_es": [
        "Cada año adicional de educación aporta 2.500 € más de salario, sin importar los años de experiencia",
        "Cada año adicional de educación se asocia a un aumento medio de 2.500 € en el salario, MANTENIENDO CONSTANTE LA EXPERIENCIA (ceteris paribus)",
        "La educación explica el 25% de la varianza total del salario",
        "El salario basal sin educación es de 2.500 €"
      ],
      "explanation_en": "Exact! The core virtue of multiple regression is partial conditioning: evaluating one predictor while mathematically locking all other covariates in place.",
      "explanation_es": "¡Exacto! La virtud medular de la regresión múltiple es el condicionamiento parcial: aislar el influjo de una variable fijando matemáticamente las demás."
    }
  ],
  "10": [
    {
      "id": "l10_ex1",
      "category": "Berekening",
      "title": "Oefening 1: De Betekenis van VIF = 10",
      "question": "Een predictor X₁ heeft een Variance Inflation Factor van VIF = 10 in een regressiemodel. Wat betekent dit concreet voor de schatting?",
      "options": [
        "De correlatiecoëfficiënt tussen X₁ en de responsvariabele Y is gelijk aan r = 0.90",
        "De p-waarde van de t-toets is met een factor 10 gedaald ten gunste van de alternatieve hypothese",
        "De variantie van de geschatte coëfficiënt β̂₁ is 10 keer groter en de standaardfout is √10 ≈ 3.16 keer zo wijd vergeleken met een orthogonale situatie waarin X₁ ongecorreleerd is met andere predictoren",
        "Het model vereist 10 extra covariabelen om de schattingsonzekerheid van β̂₁ te compenseren"
      ],
      "correctIndex": 2,
      "explanation": "Juist! VIF meet hoeveel de variantie van een geschatte coëfficiënt wordt opgeblazen door collineariteit met andere variabelen. Bij VIF = 10 is je standaardfout meer dan 3x zo breed als nodig!",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 1: Meaning of VIF = 10",
      "title_es": "Ejercicio 1: Significado de FIV = 10",
      "question_en": "A predictor X₁ has a Variance Inflation Factor of VIF = 10.0. By what factor is the standard error of its coefficient inflated compared to orthogonal predictors?",
      "question_es": "Un predictor X₁ tiene un Factor de Inflación de la Varianza FIV = 10,0. ¿Por qué factor se multiplica el error estándar de su coeficiente frente a predictores ortogonales?",
      "options_en": [
        "Inflated by √10 ≈ 3.16 times wider standard error",
        "Inflated by 10.0 times wider standard error",
        "Inflated by 100 times",
        "Inflated by 1.0 (no inflation)"
      ],
      "options_es": [
        "Se multiplica por √10 ≈ 3,16 veces de error estándar más ancho",
        "Se multiplica por 10,0 veces",
        "Se multiplica por 100 veces",
        "No se infla (factor 1,0)"
      ],
      "explanation_en": "Correct! Variance inflates by VIF = 10. Because standard error is the square root of variance, SE inflates by √10 ≈ 3.16 (confidence interval is over 3x wider).",
      "explanation_es": "¡Correcto! La varianza se multiplica por FIV = 10. Como el error estándar es la raíz de la varianza, el EE se infla por √10 ≈ 3,16 (el intervalo es más del triple de ancho)."
    },
    {
      "id": "l10_ex2",
      "category": "Valkuil",
      "title": "Oefening 2: Het 'Significante Niets' Symptoom",
      "question": "Je regressiemodel heeft een zeer hoge R² = 0.88 en een algemene F-toets met p < 0.0001. Echter, geen enkele van de 4 individuele regressoren bereikt statistische significantie (alle p > 0.15). Wat is hier aan de hand?",
      "options": [
        "Het model lijdt aan selectiebias doordat de afhankelijke variabele niet-Gaussisch verdeeld is",
        "Ernstige multicollineariteit: de voorspellers delen onderling zoveel overlappende variantie dat OLS hun unieke bijdragen niet met precisie kan isoleren",
        "De steekproef is te groot, waardoor de centrale limietstelling de t-statistieken afvlakt",
        "Er is sprake van endogeniteit veroorzaakt door weggelaten interactietermen"
      ],
      "correctIndex": 1,
      "explanation": "Meesterlijk! Dit is het klassieke handtekening-patroon van ernstige collineariteit: het team als geheel presteert uitstekend (hoge F en R²), maar niemand krijgt individueel de credits omdat ze overlappende taken doen.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 2: The 'Significant Nothing' Symptom",
      "title_es": "Ejercicio 2: El Síntoma de 'Significación Fantasma'",
      "question_en": "Your regression model achieves a very high R² = 0.88 and overall F-test p < 0.0001, but NONE of the 5 individual predictor t-tests reach significance (all p > 0.20). What is occurring?",
      "question_es": "Tu modelo logra un R² = 0,88 muy alto y prueba F global con p < 0,0001, pero NINGUNO de los 5 predictores individuales alcanza significación (todos p > 0,20). ¿Qué está sucediendo?",
      "options_en": [
        "The sample size is too small",
        "Classic severe multicollinearity: predictors share so much redundant information that OLS cannot disentangle individual credits, despite high joint explanatory power",
        "The dependent variable is non-normal",
        "The intercept was omitted from the regression"
      ],
      "options_es": [
        "El tamaño muestral es insuficiente",
        "Clásica multicolinealidad severa: los predictores comparten tanta información redundante que MCO no puede asignar el mérito individual, pese al gran poder predictivo conjunto",
        "La variable dependiente vulnera la normalidad",
        "Se omitió el término de intercepto en la regresión"
      ],
      "explanation_en": "Textbook multicollinearity symptom! Joint significance (F-test) with individual insignificance (t-tests) is the defining diagnostic hallmark of collinear predictors.",
      "explanation_es": "¡Síntoma clásico de libro! Alta significación conjunta (prueba F) combinada con insignificancia individual (pruebas t) es la huella digital de la multicolinealidad."
    },
    {
      "id": "l10_ex3",
      "category": "Dilemma",
      "title": "Oefening 3: Heeft Multicollineariteit Invloed op Voorspellingen?",
      "question": "Stel dat twee predictoren sterk gecorreleerd zijn (r = 0.95). Heeft dit een negatief effect op de algehele voorspellende kracht (Ŷ) van het model voor nieuwe data uit dezelfde populatie?",
      "options": [
        "Ja: multicollineariteit leidt gegarandeerd tot een exponentiële vertekening in de puntschatting van Ŷ",
        "Ja: de conditionele variantie van de voorspelling convergeert direct naar oneindig",
        "Alleen wanneer de afzonderlijke VIF-waarden de drempelwaarde van 1.0 onderschrijden",
        "Nee: OLS kan de gecombineerde uitkomst Ŷ nog steeds accuraat voorspellen mits de correlatiestructuur tussen de predictoren in de doelpopulatie stabiel blijft; alleen de afzonderlijke interpretatie van individuele β's is onbetrouwbaar"
      ],
      "correctIndex": 3,
      "explanation": "Subtiel maar essentieel! Multicollineariteit schaadt zuiver de interpretatie van individuele coëfficiënten, NIET de totale voorspellende kracht van het model (mits de correlatie tussen de voorspellers behouden blijft).",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 3: Does Multicollinearity Harm Predictions?",
      "title_es": "Ejercicio 3: ¿Perjudica la Multicolinealidad a las Predicciones?",
      "question_en": "Two predictors are heavily correlated (r = 0.95). If your SOLE objective is predicting outcome Y on new data following the same correlation pattern (not causal attribution), is multicollinearity harmful?",
      "question_es": "Dos predictores correlacionan fuertemente (r = 0,95). Si tu ÚNICO objetivo es predecir Y en nuevos datos con el mismo patrón correlacional (sin inferencia causal), ¿es perjudicial la multicolinealidad?",
      "options_en": [
        "Yes: predictions will be systematically biased and invalid",
        "No: overall predictions Ŷ remain unbiased and highly accurate, provided the correlation structure between predictors remains stable in future data",
        "Yes, because R² drops to zero",
        "Only if Ridge regression is applied"
      ],
      "options_es": [
        "Sí: las predicciones serán sistemáticamente sesgadas e inválidas",
        "No: las predicciones globales Ŷ siguen siendo insesgadas y precisas, siempre que la estructura de correlación entre predictores permanezca estable en el futuro",
        "Sí, porque el R² colapsa a cero",
        "Solo si se aplica regularización Ridge"
      ],
      "explanation_en": "Subtle econometric insight! Multicollinearity cripples coefficient interpretation (causal inference), but does not damage joint prediction Ŷ when covariance structures persist.",
      "explanation_es": "¡Sutileza econométrica clave! La multicolinealidad arruina la interpretación de coeficientes individuales (inferencia causal), pero no perjudica la predicción conjunta Ŷ si el patrón se mantiene."
    }
  ],
  "11": [
    {
      "id": "l11_ex1",
      "category": "Berekening",
      "title": "Oefening 1: Van Log-Odds naar Odds Ratio",
      "question": "In een logistische regressie naar hartinfarcten is de geschatte coëfficiënt voor roken β = 0.693. Wat is de Odds Ratio (OR) en wat betekent dit klinisch?",
      "options": [
        "OR = 0.693; de absolute kans op een hartinfarct stijgt met 69.3% bij rokers",
        "OR = 1.0; er is geen statistisch aantoonbare associatie tussen roken en infarcten",
        "OR = e^0.693 = 2.0; rokers hebben een 2 keer zo hoge kansverhouding (odds) op een hartinfarct vergeleken met niet-rokers",
        "OR = 0.50; rokers hebben een gehalveerd relatief risico op cardiovasculaire complicaties"
      ],
      "correctIndex": 2,
      "explanation": "Juist! In logistische regressie is de uitkomst gemodelleerd als ln(odds). Om terug te rekenen naar de odds ratio neem je de e-macht: e^0.693 ≈ 2.0. Rokers hebben 2x zo hoge odds.",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 1: From Log-Odds to Odds Ratio",
      "title_es": "Ejercicio 1: De Log-Odds a Odds Ratio",
      "question_en": "In a logistic regression for myocardial infarction, the estimated slope for Smoking is β̂ = +0.693. What is the Odds Ratio and clinical interpretation?",
      "question_es": "En una regresión logística sobre infarto de miocardio, la pendiente para Tabaquismo es β̂ = +0,693. ¿Cuál es la Odds Ratio y su interpretación clínica?",
      "options_en": [
        "OR = e^0.693 ≈ 2.00: smokers have double the odds of infarction compared to non-smokers",
        "OR = 0.693: risk increases by 69.3%",
        "OR = 1.48: risk increases by 48%",
        "OR = 0.50: smokers have half the risk"
      ],
      "options_es": [
        "OR = e^0,693 ≈ 2,00: los fumadores tienen el doble de probabilidades relativas (momios) de infarto frente a los no fumadores",
        "OR = 0,693: el riesgo aumenta un 69,3%",
        "OR = 1,48: el riesgo aumenta un 48%",
        "OR = 0,50: los fumadores tienen la mitad de riesgo"
      ],
      "explanation_en": "Exact! OR = exp(β). Because exp(0.693) ≈ 2.0, smokers face twice the odds of a cardiac event.",
      "explanation_es": "¡Exacto! OR = exp(β). Como exp(0,693) ≈ 2,0, los fumadores afrontan exactamente el doble de chances de sufrir un infarto."
    },
    {
      "id": "l11_ex2",
      "category": "Dilemma",
      "title": "Oefening 2: Beslisgrens bij Kankerdiagnostiek",
      "question": "Een machine learning model voorspelt de kans op een kwaadaardige tumor. De standaard beslisgrens (cutoff) is p = 0.50. Hoe pas je deze drempel aan als je gemiste tumoren (vals negatieven) koste wat het kost wilt minimaliseren?",
      "options": [
        "De drempel verlagen (bv. naar p = 0.20) om de Sensitiviteit (Recall) te maximaliseren, ook al stijgt het aantal valse positieven (biopsies)",
        "De drempel strikt op 0.50 handhaven, omdat dit mathematisch altijd de maximale AUC-ROC garandeert",
        "De drempel verhogen naar p = 0.85 om de Specificiteit te maximaliseren en onnodige paniek te vermijden",
        "De drempel instellen op het complement van de prevalentie (1 - prevalentie) om Bayes' theorema te balanceren"
      ],
      "correctIndex": 0,
      "explanation": "Levensreddend besluit! De 0.50 drempel is willekeurig. Bij fatale ziektes verlaag je de drempel om maximale Sensitiviteit (Recall) te halen: liever 10 onnodige onderzoeken dan 1 gemiste tumor.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 2: Decision Threshold in Cancer Diagnostics",
      "title_es": "Ejercicio 2: Umbral de Decisión en Diagnóstico Oncológico",
      "question_en": "A machine learning model predicts probability of a malignant tumor. A default cutoff p = 0.50 yields Sensitivity = 70% and Specificity = 95%. Why should a hospital LOWER the cutoff to p = 0.15?",
      "question_es": "Un modelo predice la probabilidad de tumor maligno. El umbral por defecto p = 0,50 ofrece Sensibilidad = 70% y Especificidad = 95%. ¿Por qué un hospital debe BAJAR el umbral a p = 0,15?",
      "options_en": [
        "Lowering the cutoff speeds up computation",
        "In lethal diseases, missing a cancer (False Negative) is catastrophic, whereas a False Alarm (False Positive) is resolved via a harmless biopsy. Lowering p maximizes Sensitivity (Recall)",
        "Lowering p automatically increases Specificity",
        "Because p = 0.50 violates the Gauss-Markov theorem"
      ],
      "options_es": [
        "Reducir el umbral acelera el procesamiento computacional",
        "En patologías letales, no detectar un tumor (Falso Negativo) es fatal, mientras que una falsa alarma se descarta con biopsia. Bajar p maximiza la Sensibilidad",
        "Reducir p incrementa automáticamente la Especificidad",
        "Porque p = 0,50 vulnera el teorema de Gauss-Markov"
      ],
      "explanation_en": "Clinical decision science! Cutoff selection must reflect asymmetric costs of error. In oncology, minimizing False Negatives takes absolute priority.",
      "explanation_es": "¡Ciencia de decisión clínica! La selección del umbral debe ponderar costes asimétricos. En oncología, minimizar los Falsos Negativos es la prioridad absoluta."
    },
    {
      "id": "l11_ex3",
      "category": "Valkuil",
      "title": "Oefening 3: De '99% Accuratesse' Schijnvertoning",
      "question": "Een fraudedetectiemodel voor creditcardtransacties (waar slechts 0.1% van alle transacties frauduleus is) haalt een 'Accuratesse' van 99.9% door simpelweg ELKE transactie als 'Niet-frauduleus' te classificeren. Waarom is dit model waardeloos?",
      "options": [
        "Omdat de Brier-score van dit model wiskundig niet gedefinieerd is bij binaire uitkomsten",
        "Omdat de Sensitiviteit (True Positive Rate) exact 0% is: het model detecteert letterlijk geen enkele daadwerkelijke fraudeur. Bij zeldzame klassen moet men Precision, Recall en F1 of PR-AUC evalueren",
        "Omdat een accuratesse van 99.9% direct wijst op een te kleine steekproefomvang",
        "Omdat de logit linkfunctie instabiel wordt wanneer de prevalentie onder de 5% daalt"
      ],
      "correctIndex": 1,
      "explanation": "Klassieke data science valkuil! De zogeheten 'Accuracy Paradox'. Bij sterk scheve klassen zegt gewone accuratesse niets. Kijk naar Recall, Precision en de PR-curve.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 3: The '99% Accuracy' Fallacy",
      "title_es": "Ejercicio 3: La Falacia de la 'Exactitud del 99%'",
      "question_en": "A credit card fraud model (where only 0.1% of transactions are fraudulent) achieves 99.9% overall accuracy by simply classifying EVERY transaction as non-fraudulent. Why is Accuracy a useless metric here?",
      "question_es": "Un modelo de fraude con tarjetas (donde solo el 0,1% de transacciones es fraude) logra una exactitud del 99,9% clasificando TODAS las transacciones como legítimas. ¿Por qué la Exactitud es inútil aquí?",
      "options_en": [
        "Because accuracy cannot be computed for financial datasets",
        "Under severe class imbalance, a naive majority-class model achieves 99.9% accuracy while detecting ZERO frauds (Sensitivity = 0%). Precision, Recall, and AUC-ROC must be used instead",
        "Because 99.9% is mathematically impossible in statistics",
        "Only F-tests should be evaluated for classification"
      ],
      "options_es": [
        "Porque la exactitud no puede computarse en finanzas",
        "Bajo desbalance severo de clases, predecir siempre la clase mayoritaria da 99,9% de acierto pero detecta CERO fraudes (Sensibilidad = 0%). Deben usarse Precisión, Recall y AUC-ROC",
        "Porque el 99,9% es matemáticamente imposible en estadística",
        "Solo deben evaluarse pruebas F en clasificación"
      ],
      "explanation_en": "The accuracy paradox! Always use AUC-ROC, Precision-Recall AUC, or F1-score when evaluating rare event detection.",
      "explanation_es": "¡La paradoja de la exactitud! Utiliza siempre AUC-ROC, curvas Precision-Recall o F1-score ante eventos desbalanceados."
    }
  ],
  "12": [
    {
      "id": "l12_ex1",
      "category": "Concept",
      "title": "Oefening 1: Het Geometrische Verschil tussen L1 en L2",
      "question": "Waarom leidt Lasso (L₁-regularisatie: Σ |β_j|) wél tot exacte spaarzaamheid (coëfficiënten exact nul) en Ridge (L₂-regularisatie: Σ β_j²) niet?",
      "options": [
        "Omdat Ridge-regularisatie uitsluitend toepasbaar is op gestandaardiseerde Gaussische covariaten",
        "Omdat de L₂-straf kwadratisch divergeert en daardoor gradiëntdaling naar nul wiskundig blokkeert",
        "Omdat de L₁-beperkingsruimte scherpe hoeken heeft die samenvallen met de coördinaatassen (een ruit in 2D), waardoor elliptische OLS-contouren de rand vaak exact op een as raken waar β_j = 0",
        "Omdat Lasso gebruikmaakt van analytische matrixinversie terwijl Ridge iteratief moet worden opgelost"
      ],
      "correctIndex": 2,
      "explanation": "Meesterlijk geometrisch inzicht! De diamantvorm van L1 heeft scherpe punten op de assen. De ellipsoïde foutcontouren raken als eerste een punt, waardoor overtollige parameters exact op 0 worden gezet.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: Geometric Difference Between L1 and L2",
      "title_es": "Ejercicio 1: Diferencia Geométrica entre L1 y L2",
      "question_en": "Why does Lasso (L₁ regularization: Σ|β_j|) produce exact zero coefficients for automated feature selection, while Ridge (L₂: Σβ_j²) only shrinks them asymptotically toward zero?",
      "question_es": "¿Por qué Lasso (L₁: Σ|β_j|) anula coeficientes exactamente a cero para selección automática, mientras Ridge (L₂: Σβ_j²) solo los aproxima asintóticamente?",
      "options_en": [
        "Ridge is computed with gradient descent and Lasso with analytical inversion",
        "The L₁ constraint has sharp corners on coordinate axes where elliptical loss contours make first contact at exactly β_j = 0; the smooth L₂ hypersphere lacks sharp corners",
        "Lasso requires strictly normally distributed predictors",
        "L₁ penalties ignore negative values"
      ],
      "options_es": [
        "Ridge se computa con gradiente descendente y Lasso con inversión analítica",
        "La restricción L₁ posee vértices puntiagudos en los ejes coordenados donde las elipses de verosimilitud hacen contacto en β_j = 0; la hiperesfera suave L₂ carece de esquinas",
        "Lasso exige que todos los predictores sean normales",
        "La penalización L₁ descarta los valores negativos"
      ],
      "explanation_en": "Iconic geometric insight! The diamond corners of L₁ regularization intersect likelihood contours on coordinate hyperplanes, setting coefficients to exactly zero.",
      "explanation_es": "¡Brillante intuición geométrica! Los vértices angulares del rombo L₁ intersecan el contorno elíptico en los ejes, fijando coeficientes en cero exacto."
    },
    {
      "id": "l12_ex2",
      "category": "Dilemma",
      "title": "Oefening 2: Keuze tussen Ridge en Lasso bij Genexpressie",
      "question": "Je analyseert 20.000 genen bij N = 150 patiënten. Je verwacht dat slechts een klein handjevol (ca. 10-15 genen) daadwerkelijk een biologische rol speelt bij de ziekte. Welke regularisatiemethode geniet de voorkeur?",
      "options": [
        "Lasso (L₁), omdat de L₁-penalisatie automatische variabele-selectie uitvoert en de duizenden irrelevante genen exact op nul stelt",
        "Ridge (L₂), omdat het alle 20.000 genen behoudt met proportioneel gekrompen effecten en daardoor biologische netwerken intact laat",
        "Principal Component Regression zonder penalisatie, omdat orthogonale rotatie collineariteit elimineert",
        "Gewone OLS-regressie, omdat het Gauss-Markov theorema nog steeds garandeert dat schatters BLUE zijn bij N < P"
      ],
      "correctIndex": 0,
      "explanation": "Juist! In high-dimensional data (P >> N) met spaarzame ware signalen (sparse ground truth) is Lasso ongeëvenaard omdat het niet-relevante genen eruit filtert.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 2: Choosing Between Ridge and Lasso in Genomics",
      "title_es": "Ejercicio 2: Elegir entre Ridge y Lasso en Genómica",
      "question_en": "You analyze 20,000 gene expression levels across N = 150 cancer patients. You hypothesize that only 10 to 15 key driver mutations cause the tumor. Which regularization should you choose?",
      "question_es": "Analizas 20.000 genes en N = 150 pacientes oncológicos. Tu hipótesis biológica es que solo 10 o 15 mutaciones clave causan el tumor. ¿Qué regularización debes elegir?",
      "options_en": [
        "Ridge (L₂), because it retains all 20,000 genes in the final equation",
        "Lasso (L₁), because sparse feature selection will eliminate thousands of irrelevant genes and identify the true compact set of biological drivers",
        "Ordinary Least Squares without regularization",
        "Polynomial regression of degree 4"
      ],
      "options_es": [
        "Ridge (L₂), porque conserva los 20.000 genes en la ecuación final",
        "Lasso (L₁), porque su selección dispersa de variables anulará miles de genes irrelevantes e identificará el conjunto compacto de genes causales",
        "Mínimos Cuadrados Ordinarios sin regularización",
        "Regresión polinómica de 4º grado"
      ],
      "explanation_en": "Biostatistical mastery! When true signal is sparse (few causal genes among thousands of noise transcripts), Lasso is the scientifically superior model.",
      "explanation_es": "¡Gran criterio bioestadístico! Ante señales dispersas (pocos genes causales entre miles de transcritos irrelevantes), Lasso es el método científicamente idóneo."
    },
    {
      "id": "l12_ex3",
      "category": "Concept",
      "title": "Oefening 3: Wat gebeurt er als de strafparameter λ oneindig groot wordt?",
      "question": "In zowel Ridge als Lasso regressie: wat gebeurt er met de geschatte coëfficiëntenvector β̂ wanneer de hyperparameter λ naar oneindig nadert (λ → ∞)?",
      "options": [
        "De coëfficiënten convergeren naar de onbegrensde OLS-schatters (minimale bias, maximale variantie)",
        "Alle hellingscoëfficiënten worden exact naar nul gedreven; het model voorspelt voor iedereen simpelweg het algemene gemiddelde ȳ (maximale bias, minimale variantie)",
        "De correlatiematrix tussen de predictoren wordt singulier waardoor de residuen naar oneindig exploderen",
        "Het model convergeert naar een niet-parametrische k-nearest neighbors schatter"
      ],
      "correctIndex": 1,
      "explanation": "Exact! Als de straf λ oneindig zwaar weegt, wordt elke coëfficiënt 0. Je model heeft dan 0 variantie (voorspelt altijd hetzelfde), maar maximale bias. Dit toont de kern van de bias-variance tradeoff.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 3: What Happens as Penalty Parameter λ Approaches Infinity?",
      "title_es": "Ejercicio 3: ¿Qué Ocurre cuando la Penalización λ Tiende a Infinito?",
      "question_en": "In both Ridge and Lasso regression: what happens to estimated slope coefficients β̂ as tuning parameter λ → ∞?",
      "question_es": "Tanto en regresión Ridge como en Lasso: ¿qué ocurre con las pendientes estimadas β̂ cuando el parámetro de penalización λ → ∞?",
      "options_en": [
        "All slope coefficients explode to infinity",
        "All slope coefficients shrink to exactly zero, leaving only the sample mean intercept ȳ (maximum bias, zero variance)",
        "Coefficients converge to ordinary OLS estimates",
        "Model R² reaches 1.00"
      ],
      "options_es": [
        "Todos los coeficientes de pendiente explotan a infinito",
        "Todas las pendientes se contraen exactamente a cero, quedando únicamente el intercepto de la media ȳ (máximo sesgo, varianza nula)",
        "Los coeficientes convergen a las estimaciones ordinarias de MCO",
        "El R² del modelo alcanza 1,00"
      ],
      "explanation_en": "Exact! Infinite penalty extinguishes all slope variance, collapsing the model to a flat horizontal line at ȳ (the ultimate extreme of the bias-variance tradeoff).",
      "explanation_es": "¡Exacto! Una penalización infinita elimina toda la varianza de los coeficientes, colapsando el modelo a una recta horizontal plana en ȳ."
    }
  ],
  "13": [
    {
      "id": "l13_ex1",
      "category": "Berekening",
      "title": "Oefening 1: Intraclass Correlation (ICC) Berekenen",
      "question": "In een onderzoek naar toetsscores op scholen is de tussen-school variantie σ²_u0 = 4.0 en de binnen-school residuele variantie σ²_e = 16.0. Wat is de Intraclass Correlatiecoëfficiënt (ICC)?",
      "options": [
        "ICC = 4.0 / 16.0 = 0.25 (een kwart van de residuele spreiding)",
        "ICC = √(4.0 / 20.0) ≈ 0.447 (de gecorrigeerde Pearson-correlatie tussen klassen)",
        "ICC = 16.0 / (4.0 + 16.0) = 0.80 (de betrouwbaarheidsindex van de leerlingenspreiding)",
        "ICC = 4.0 / (4.0 + 16.0) = 4.0 / 20.0 = 0.20 (20% van alle variantie zit tussen scholen)"
      ],
      "correctIndex": 3,
      "explanation": "Juist! ICC = σ²_between / (σ²_between + σ²_within) = 4 / (4 + 16) = 0.20. Maar liefst 20% van alle verschillen in cijfers wordt verklaard door de school waar de leerling op zit!",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 1: Calculating Intraclass Correlation (ICC)",
      "title_es": "Ejercicio 1: Calcular la Correlación Intraclase (CCI)",
      "question_en": "In a study of exam scores across schools, between-school variance is τ² = 25 and within-school residual student variance is σ² = 75. What is the ICC?",
      "question_es": "En un estudio de notas entre escuelas, la varianza entre escuelas es τ² = 25 y la varianza residual entre alumnos es σ² = 75. ¿Cuál es el CCI?",
      "options_en": [
        "ICC = 25 / (25 + 75) = 0.25 (25% of total variance is at the school level)",
        "ICC = 75 / 25 = 3.00",
        "ICC = 25 / 75 = 0.33",
        "ICC = √(25 / 100) = 0.50"
      ],
      "options_es": [
        "CCI = 25 / (25 + 75) = 0,25 (el 25% de la varianza total reside a nivel de escuela)",
        "CCI = 75 / 25 = 3,00",
        "CCI = 25 / 75 = 0,33",
        "CCI = √(25 / 100) = 0,50"
      ],
      "explanation_en": "Correct! ICC = τ² / (τ² + σ²) = 25 / 100 = 0.25. A quarter of all variance is attributable to school clustering.",
      "explanation_es": "¡Correcto! CCI = τ² / (τ² + σ²) = 25 / 100 = 0,25. Una cuarta parte de toda la variabilidad es atribuible al agrupamiento escolar."
    },
    {
      "id": "l13_ex2",
      "category": "Valkuil",
      "title": "Oefening 2: Waarom faalt de onafhankelijkheidsaanname?",
      "question": "Je meet bloeddruk bij 30 patiënten op 10 opeenvolgende dagen (in totaal 300 metingen). Waarom mag je hier GEEN gewone lineaire regressie met N = 300 op uitvoeren?",
      "options": [
        "Omdat OLS wiskundig niet kan convergeren wanneer het aantal metingen per persoon gelijk is",
        "OLS rekent alsof je 300 volkomen onafhankelijke individuen hebt; door de clustering binnen patiënten worden standaardfouten gigantisch onderschat en rapporteert OLS massaal valse significante effecten (pseudoreplicatie)",
        "Omdat de conditionele verwachtingswaarde van bloeddruk per definitie niet-lineair is",
        "Omdat herhaalde metingen de normaliteit van de responsvariabele altijd vernietigen"
      ],
      "correctIndex": 1,
      "explanation": "Spot-on! Dit heet 'pseudoreplicatie'. Metingen binnen dezelfde patiënt lijken sterk op elkaar. Gewone regressie overschat de effectieve steekproefgrootte enorm en rapporteert schijnzekerheid.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 2: Why Does the Independence Assumption Fail?",
      "title_es": "Ejercicio 2: ¿Por Qué Falla el Supuesto de Independencia?",
      "question_en": "You measure blood pressure in 30 patients across 10 consecutive days (300 total rows). A junior analyst fits standard OLS with N = 300. Why is this statistical pseudoreplication?",
      "question_es": "Mides la presión arterial en 30 pacientes durante 10 días consecutivos (300 filas). Un analista ajusta MCO estándar con N = 300. ¿Por qué esto es pseudorreplicación estadística?",
      "options_en": [
        "Because blood pressure cannot be measured in millimetres of mercury",
        "Because 10 measurements from the same patient correlate heavily; the true independent sample size is N = 30 patients, not 300 independent units. OLS underestimates standard errors by √10 ≈ 3.16x!",
        "Because OLS requires at least 1,000 observations for longitudinal data",
        "Because repeated measurements eliminate residual variance"
      ],
      "options_es": [
        "Porque la presión arterial no puede medirse en milímetros de mercurio",
        "Porque 10 registros del mismo paciente están fuertemente correlacionados; la muestra independiente real es N = 30 pacientes, no 300 unidades independientes. ¡MCO subestima los errores estándar en √10 ≈ 3,16 veces!",
        "Porque MCO exige al menos 1.000 observaciones en datos longitudinales",
        "Porque las medidas repetidas eliminan la varianza residual"
      ],
      "explanation_en": "Phenomenal! Pseudoreplication treats dependent repeated measures as new independent information, manufacturing false statistical significance.",
      "explanation_es": "¡Fenomenal! La pseudorreplicación confunde medidas repetidas con nuevas unidades de información independiente, fabricando significación estadística espuria."
    },
    {
      "id": "l13_ex3",
      "category": "Dilemma",
      "title": "Oefening 3: Wanneer is OLS nog acceptabel?",
      "question": "Wanneer is het statistisch verantwoord om een geclusterde dataset toch met gewone OLS te analyseren zonder multilevel model?",
      "options": [
        "Zodra de binnen-groep correlatie groter is dan 0.75",
        "Als het totale aantal observaties groter is dan N = 10.000 ongeacht de clustergrootte",
        "Wanneer alle clustergemiddelden exact symmetrisch verdeeld zijn rond het grand mean",
        "Als ICC < 0.05 (minder dan 5% tussen-groep variantie) én het Design Effect (DEFF = 1 + (m - 1) × ICC) dicht bij 1.0 ligt (bv. DEFF < 1.1)"
      ],
      "correctIndex": 3,
      "explanation": "Zeer verstandig! Als de ICC verwaarloosbaar klein is (< 0.05) en de groepsgroottes klein zijn, is de clusterbias minimaal en levert OLS vrijwel identieke resultaten op.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 3: When is Pooled OLS Still Acceptable?",
      "title_es": "Ejercicio 3: ¿Cuándo es Aceptable MCO Agrupado?",
      "question_en": "When is it statistically sound to apply standard OLS to clustered data without mixed modeling?",
      "question_es": "¿Cuándo es estadísticamente lícito aplicar MCO clásico a datos agrupados sin recurrir a modelos mixtos?",
      "options_en": [
        "When the Intraclass Correlation is virtually zero (ICC < 0.01) and cluster design effect is close to 1.0, or cluster size is m = 1",
        "Whenever the total sample size N exceeds 500",
        "When the response variable is strictly normally distributed",
        "When the researcher is only interested in R²"
      ],
      "options_es": [
        "Cuando la Correlación Intraclase es prácticamente nula (CCI < 0,01) y el efecto de diseño es cercano a 1,0, o el tamaño de grupo es m = 1",
        "Siempre que el tamaño total de la muestra N supere 500",
        "Cuando la variable de respuesta es estrictamente normal",
        "Cuando al investigador solo le interesa el R²"
      ],
      "explanation_en": "Exact! If ICC ≈ 0, observations within clusters behave as independent random draws. Once ICC > 0.05, multilevel models are strictly necessary.",
      "explanation_es": "¡Exacto! Si CCI ≈ 0, las observaciones dentro de cada grupo se comportan como datos independientes. A partir de CCI > 0,05 los modelos multinivel son obligatorios."
    }
  ],
  "14": [
    {
      "id": "l14_ex1",
      "category": "Concept",
      "title": "Oefening 1: Vast Effect vs Willekeurig Effect",
      "question": "In de multilevel vergelijking Y_ij = (β0 + u_0j) + β1 X_ij + e_ij: wat is het fundamentele verschil tussen β1 en u_0j?",
      "options": [
        "β1 is de meetfout op individueel niveau en u_0j is de regressieconstante",
        "β1 is het vaste (fixed) effect dat voor de totale populatie geldt; u_0j is de willekeurige (random) residu-afwijking van het startniveau van specifiek cluster j",
        "β1 varieert per cluster en u_0j is constant voor alle scholen tegelijk",
        "Beide zijn identieke Gaussische storingstermen die willekeurig verdeeld zijn met gemiddelde nul"
      ],
      "correctIndex": 1,
      "explanation": "Exact! β1 is de algemene fixed slope (bijvoorbeeld het landelijke effect van studietijd). u_0j is het unieke random intercept van school j (hoeveel scoort school j gemiddeld hoger of lager dan het landelijk gemiddelde β0).",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: Fixed Effect vs Random Effect",
      "title_es": "Ejercicio 1: Efecto Fijo frente a Efecto Aleatorio",
      "question_en": "In the multilevel equation Y_ij = (β₀ + u_0j) + β₁ X_ij + ε_ij, what is the exact conceptual distinction between fixed effect β₀ and random intercept u_0j?",
      "question_es": "En la ecuación multinivel Y_ij = (β₀ + u_0j) + β₁ X_ij + ε_ij, ¿cuál es la distinción conceptual exacta entre el efecto fijo β₀ y el intercepto aleatorio u_0j?",
      "options_en": [
        "β₀ is estimated with OLS and u_0j with Lasso",
        "β₀ is the fixed global population average; u_0j is a random stochastic deviation drawn from N(0, τ²) specific to cluster j",
        "u_0j is a non-linear spline function",
        "β₀ applies only to the first school"
      ],
      "options_es": [
        "β₀ se estima con MCO y u_0j con Lasso",
        "β₀ representa el promedio poblacional global fijo; u_0j es una desviación estocástica aleatoria extraída de N(0, τ²) propia del grupo j",
        "u_0j es una función spline no lineal",
        "β₀ aplica únicamente a la primera escuela"
      ],
      "explanation_en": "Flawless! Fixed effects describe universal population properties. Random effects model stochastic variation across sampled clusters.",
      "explanation_es": "¡Impecable! Los efectos fijos describen propiedades promedio de la población. Los efectos aleatorios modelan la variabilidad estocástica entre los grupos muestreados."
    },
    {
      "id": "l14_ex2",
      "category": "Valkuil",
      "title": "Oefening 2: Empirical Bayes Shrinkage in Actie",
      "question": "Op school X zitten slechts 2 leerlingen, die toevallig allebei een 9.5 scoren. Waarom schat een Random Intercept model het verwachte niveau van school X toch op 7.8 (veel dichter bij het landelijk gemiddelde van 7.0)?",
      "options": [
        "Omdat shrinkage kleine clusters met weinig bewijskracht automatisch naar het centrale populatiegemiddelde trekt (partial pooling) om overfitting op toevallige extreme ruis te voorkomen",
        "Omdat observaties met een score boven de 9.0 automatisch als meetfouten worden getrimd",
        "Omdat het model een penalty berekent op basis van de student-t verdeling met 1 vrijheidsgraad",
        "Omdat restricted maximum likelihood (REML) clusters kleiner dan N = 5 altijd negeert"
      ],
      "correctIndex": 0,
      "explanation": "Meesterlijk! Dit is de genialiteit van 'Shrinkage' (Empirical Bayes). Met slechts 2 leerlingen is de onzekerheid enorm. Het model 'leent kracht' van de rest van de dataset en trekt de schatting naar het midden.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 2: Empirical Bayes Shrinkage in Action",
      "title_es": "Ejercicio 2: Contracción Empírica de Bayes en Acción",
      "question_en": "School X has only 2 enrolled students, who happen to both score 10/10. Why does a Random Intercept model estimate School X's intercept at 7.8 rather than 10.0?",
      "question_es": "El colegio X cuenta con solo 2 alumnos, y ambos obtienen un 10/10. ¿Por qué un modelo de Intercepto Aleatorio estima el intercepto del colegio X en 7,8 en lugar de 10,0?",
      "options_en": [
        "The software encountered a numerical calculation bug",
        "Empirical Bayes shrinkage recognizes that N = 2 carries massive sampling noise, pulling the group intercept heavily toward the grand mean (7.2) to prevent overfitting",
        "The model caps all school intercepts at 8.0",
        "Because REML automatically subtracts 20% from small schools"
      ],
      "options_es": [
        "El software cometió un error de cálculo numérico",
        "La contracción empírica de Bayes reconoce que N = 2 conlleva gran ruido muestral, contrayendo la estimación del grupo hacia la media global (7,2) para evitar sobreajuste",
        "El modelo limita todos los interceptos a un máximo de 8,0",
        "Porque REML resta automáticamente un 20% a los grupos pequeños"
      ],
      "explanation_en": "Masterful! Partial pooling trusts groups with large sample sizes (little shrinkage) and pulls tiny noisy clusters toward the population mean.",
      "explanation_es": "¡Magistral! El agrupamiento parcial confía en grupos con muchas observaciones (poca contracción) y atrae a los grupos pequeños ruidosos hacia la media poblacional."
    },
    {
      "id": "l14_ex3",
      "category": "Dilemma",
      "title": "Oefening 3: Random Intercepts vs Dummy Variabelen",
      "question": "Je onderzoekt complicaties in 200 ziekenhuizen. Waarom gebruik je liever een Random Intercept model dan 199 afzonderlijke dummy-variabelen (Fixed Effects model)?",
      "options": [
        "Omdat dummy-variabelen wiskundig niet geschat kunnen worden met gewone matrixinversie",
        "Omdat fixed effects dummies de Gauss-Markov stelling direct ongeldig maken",
        "199 dummies verslinden 199 vrijheidsgraden en overfitten kleine ziekenhuizen, terwijl een Random Intercept slechts 1 enkele variantieparameter σ²_u0 schat én ziekenhuiskarakteristieken (zoals budget) toestaat",
        "Omdat een Random Intercept model altijd resulteert in een residu-variantie van nul"
      ],
      "correctIndex": 2,
      "explanation": "Prachtig statistisch inzicht! Het zogeheten 'dummy-kerkhof'. 199 dummies kosten 199 parameters en maken het onmogelijk om ziekenhuiseigenschappen (zoals academisch vs streekziekenhuis) te onderzoeken.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 3: Random Intercepts vs Fixed Dummy Variables",
      "title_es": "Ejercicio 3: Interceptos Aleatorios vs Variables Ficticias Fijas",
      "question_en": "You investigate surgical complications across 200 hospitals. Why use a Random Intercept model rather than 199 fixed dummy indicator variables?",
      "question_es": "Investigas complicaciones quirúrgicas en 200 hospitales. ¿Por qué usar un modelo de Interceptos Aleatorios en lugar de 199 variables ficticias fijas?",
      "options_en": [
        "Fixed dummies consume 199 degrees of freedom, cannot generalize to unobserved hospitals, and destroy hospital-level predictors; random intercepts estimate a single variance parameter τ²",
        "Fixed dummies produce negative probabilities in linear models",
        "Random intercepts eliminate all residual variance",
        "Statistical software cannot estimate more than 50 dummy variables"
      ],
      "options_es": [
        "Las variables fijas consumen 199 grados de libertad, impiden generalizar a hospitales no muestreados y eliminan predictores a nivel de hospital; los interceptos aleatorios estiman un único parámetro de varianza τ²",
        "Las variables ficticias producen probabilidades negativas",
        "Los interceptos aleatorios eliminan toda la varianza residual",
        "El software estadístico no puede computar más de 50 variables ficticias"
      ],
      "explanation_en": "Sublime hierarchical insight! Random intercepts allow borrowing strength across groups, generalizability to the broader population, and inclusion of group-level covariates.",
      "explanation_es": "¡Gran dominio jerárquico! Los interceptos aleatorios permiten compartir fuerza estadística entre grupos, generalizar a la población e incluir predictores contextuales de grupo."
    }
  ],
  "15": [
    {
      "id": "l15_ex1",
      "category": "Concept",
      "title": "Oefening 1: Wat voegt een Random Slope toe?",
      "question": "Wat is het visuele en inhoudelijke verschil tussen een Random Intercept model en een Random Slope model in een longitudinaal onderzoek?",
      "options": [
        "Random Intercept modelleert uitsluitend niet-lineaire curven; Random Slope modelleert strikt rechte lijnen",
        "Random Slope dwingt af dat alle clusters naar exact hetzelfde eindpunt convergeren",
        "Er is geen mathematisch verschil; beide modellen schatten dezelfde variantiecomponenten",
        "Random Intercept: parallelle lijnen (zelfde helling, ander startpunt). Random Slope: lijnen met een eigen hellingshoek per cluster (verschillende reactiesnelheid of hersteltempo per patiënt)"
      ],
      "correctIndex": 3,
      "explanation": "Juist! Bij Random Slopes reageert niet elk individu hetzelfde op tijd of behandeling. De lijnen lopen niet meer parallel, maar waaieren uit of kruisen elkaar.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: What Does a Random Slope Add?",
      "title_es": "Ejercicio 1: ¿Qué Aporta una Pendiente Aleatoria?",
      "question_en": "What is the visual and substantive difference between a Random Intercept model and a Random Slope model?",
      "question_es": "¿Cuál es la diferencia visual y conceptual entre un modelo de Interceptos Aleatorios y uno de Pendientes Aleatorias?",
      "options_en": [
        "Random Intercepts produce strictly parallel lines (same treatment effect in all groups); Random Slopes allow lines to have different angles, modeling heterogeneous treatment responses across groups",
        "Random Slopes can only be fitted to non-linear datasets",
        "Random Intercepts allow slopes to cross each other",
        "Random Slopes eliminate between-subject covariance"
      ],
      "options_es": [
        "El Intercepto Aleatorio genera rectas estrictamente paralelas (mismo efecto en todos los grupos); la Pendiente Aleatoria permite inclinaciones distintas, modelando respuestas heterogéneas al tratamiento",
        "La Pendiente Aleatoria solo se aplica a datos no lineales",
        "El Intercepto Aleatorio permite que las rectas se crucen",
        "La Pendiente Aleatoria elimina la covarianza entre sujetos"
      ],
      "explanation_en": "Crystal clear! Random intercepts assume treatment effects are identical across clusters (parallel trajectories). Random slopes permit personalized rates of change.",
      "explanation_es": "¡Claridad meridiana! Los interceptos aleatorios asumen efectos idénticos en todos los grupos (rectas paralelas). Las pendientes aleatorias permiten trayectorias personalizadas."
    },
    {
      "id": "l15_ex2",
      "category": "Valkuil",
      "title": "Oefening 2: Negatieve Correlatie tussen Intercept en Slope",
      "question": "In een revalidatie-onderzoek schat je model een correlatie van ρ = -0.65 tussen het Random Intercept (u_0j) en de Random Slope (u_1j). Wat betekent dit biologisch/klinisch?",
      "options": [
        "Patiënten die starten met een ernstiger toestand (laag beginniveau u_0) vertonen een sneller hersteltempo per maand (hoge positieve helling u_1): een klassiek inhaaleffect!",
        "De therapie werkt averechts voor patiënten met een laag startniveau",
        "De schatting is wiskundig ongeldig omdat covarianties tussen willekeurige effecten altijd positief moeten zijn",
        "Het model lijdt aan ernstige overspecificatie en moet worden vereenvoudigd tot een gewone ANOVA"
      ],
      "correctIndex": 0,
      "explanation": "Spot-on! Een negatieve correlatie tussen startniveau en groei/herstel is een bekend biologisch fenomeen: patiënten met de meeste schade hebben de meeste ruimte voor spectaculaire verbetering (ceiling effect).",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 2: Negative Correlation Between Intercept and Slope",
      "title_es": "Ejercicio 2: Correlación Negativa entre Intercepto y Pendiente",
      "question_en": "In a cognitive stroke recovery trial, your mixed model estimates Corr(u₀, u₁) = -0.65. What does this mean clinically?",
      "question_es": "En un ensayo de recuperación tras un ictus, tu modelo mixto estima Corr(u₀, u₁) = -0,65. ¿Qué significa clínicamente?",
      "options_en": [
        "The model is defective and should be simplified",
        "Patients who start with poorer initial cognitive baselines (low intercept u₀) experience steeper recovery trajectories (high positive slope u₁): a clinical catch-up phenomenon",
        "Cognitive recovery ceases after 6 weeks",
        "Treatment causes cognitive decline in senior patients"
      ],
      "options_es": [
        "El modelo es defectuoso y debe simplificarse",
        "Los pacientes con peor estado cognitivo inicial (bajo intercepto u₀) experimentan pendientes de recuperación más pronunciadas (alta pendiente u₁): fenómeno clínico de convergencia",
        "La recuperación cognitiva se detiene tras 6 semanas",
        "El tratamiento provoca deterioro cognitivo en pacientes mayores"
      ],
      "explanation_en": "Clinical gold! A negative correlation between intercept and slope captures convergence: patients starting furthest behind make the most rapid initial gains.",
      "explanation_es": "¡Oro clínico! Una correlación negativa intercepto-pendiente captura convergencia: quienes parten de una situación basal más desfavorable mejoran a un ritmo más acelerado."
    },
    {
      "id": "l15_ex3",
      "category": "Dilemma",
      "title": "Oefening 3: Omgaan met Ontbrekende Waarden (Unbalanced Data)",
      "question": "In een 5-jarig onderzoek missen 30% van de patiënten minstens één meetmoment (dropout of gemiste afspraak). Waarom is een Mixed Model superieur aan een klassieke Repeated Measures ANOVA?",
      "options": [
        "Omdat Mixed Models aannemen dat ontbrekende gegevens altijd Missing Completely at Random (MCAR) zijn",
        "Omdat Mixed Models ontbrekende waarden altijd vervangen door de mediaan van de populatie",
        "Omdat Repeated Measures ANOVA geen betrouwbaarheidsintervallen kan berekenen",
        "Repeated Measures ANOVA gooit een patiënt compleet weg zodra er 1 meetmoment mist (listwise deletion); een Mixed Model gebruikt alle beschikbare meetmomenten optimaal onder Missing at Random (MAR)"
      ],
      "correctIndex": 3,
      "explanation": "Cruciaal voordeel van mixed models! RM-ANOVA gooit data weg zodra 1 bezoek mist (enorme vermindering van power en risico op bias). Mixed models gebruiken elk beschikbaar datapunt.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 3: Handling Missing Values (Unbalanced Data)",
      "title_es": "Ejercicio 3: Tratamiento de Datos Incompletos (Datos Desbalanceados)",
      "question_en": "In a 5-year longitudinal study, 30% of patients miss at least one follow-up visit. Why are Linear Mixed Models vastly superior to Repeated Measures ANOVA here?",
      "question_es": "En un estudio longitudinal de 5 años, el 30% de pacientes pierde al menos una visita de seguimiento. ¿Por qué los Modelos Mixtos son infinitamente superiores al ANOVA de Medidas Repetidas?",
      "options_en": [
        "Repeated Measures ANOVA requires complete cases and discards any patient missing a single visit (huge power loss and attrition bias); Mixed Models use all available data under Missing at Random (MAR)",
        "ANOVA only works on samples smaller than 20",
        "Mixed models impute missing numbers with zero",
        "Because ANOVA does not permit continuous time"
      ],
      "options_es": [
        "El ANOVA de medidas repetidas exige casos completos y descarta a cualquier paciente que falte a una sola visita (pérdida masiva de potencia y sesgo de atrición); los Modelos Mixtos aprovechan todos los registros disponibles bajo MAR",
        "El ANOVA solo funciona con muestras menores a 20 sujetos",
        "Los modelos mixtos imputan los datos faltantes con ceros",
        "Porque el ANOVA no admite variables de tiempo continuo"
      ],
      "explanation_en": "The primary practical advantage of mixed models! LMMs effortlessly handle unbalanced visit schedules and missing timepoints without deleting patients.",
      "explanation_es": "¡La mayor ventaja práctica de los modelos mixtos! Manejan sin esfuerzo visitas desbalanceadas y datos incompletos sin desechar al paciente del análisis."
    }
  ],
  "16": [
    {
      "id": "l16_ex1",
      "category": "Dilemma",
      "title": "Oefening 1: Wanneer stap je over naar GLMM?",
      "question": "Je telt het aantal epileptische aanvallen per maand (discrete teldata: 0, 1, 2, 5...) bij 80 patiënten over 6 maanden. Welk model is hier theoretisch en praktisch het meest passend?",
      "options": [
        "Gewone lineaire OLS regressie met robuuste Newey-West standaardfouten",
        "Een logistische regressie waarin aanvallen worden gedichotomiseerd tot 0 vs ≥ 1",
        "Een Poisson of Negatief-Binomiaal GLMM (Generalized Linear Mixed Model) met log-link en random intercepts per patiënt",
        "Een klassieke herhaalde metingen ANOVA na een worteltransformatie van de teldata"
      ],
      "correctIndex": 2,
      "explanation": "Uitstekend! Teldata is discreet, altijd ≥ 0 en vertoont vaak scheefheid. De Poisson/Negatief-Binomiaal linkfunctie garandeert positieve voorspellingen en modelleert de geclusterde variantie via random effects.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 1: When to Transition to GLMM?",
      "title_es": "Ejercicio 1: ¿Cuándo Pasar a GLMM?",
      "question_en": "You count the number of epileptic seizures per month (discrete positive counts: 0, 1, 2...) in patients nested across 12 hospitals. What model is scientifically required?",
      "question_es": "Cuentas el número de crisis epilépticas mensuales (recuentos discretos positivos: 0, 1, 2...) en pacientes tratados en 12 hospitales. ¿Qué modelo es científicamente exigible?",
      "options_en": [
        "Ordinary Linear Regression with log-transformed counts",
        "A Poisson or Negative Binomial Generalized Linear Mixed Model (GLMM) with a log link function and random hospital intercepts",
        "Repeated measures ANOVA",
        "Linear Mixed Model with Gaussian errors"
      ],
      "options_es": [
        "Regresión lineal ordinaria con recuentos transformados por logaritmo",
        "Un Modelo Lineal Mixto Generalizado (GLMM) Poisson o Binomial Negativo con función de enlace logarítmica e interceptos aleatorios por hospital",
        "ANOVA de medidas repetidas",
        "Modelo Lineal Mixto con errores gaussianos estándar"
      ],
      "explanation_en": "Superb! Discrete non-negative count data with clustering strictly demands a count GLMM (Poisson/Negative Binomial) with random effects.",
      "explanation_es": "¡Excelente! Los datos de recuento no negativos con estructura agrupada exigen estrictamente un GLMM de conteo (Poisson/Binomial Negativa) con efectos aleatorios."
    },
    {
      "id": "l16_ex2",
      "category": "Concept",
      "title": "Oefening 2: Interpretatie van Vaste Effecten in GLMM",
      "question": "In een logistisch GLMM voor ziekenhuisinfecties is de fixed effect coëfficiënt voor een nieuw hygiëneprotocol β = -0.85. Hoe interpreteer je dit effect?",
      "options": [
        "Het absolute risico op een infectie daalt met exact 85 procentpunt voor elke opgenomen patiënt",
        "Odds Ratio = e^-0.85 ≈ 0.43: bij implementatie van het protocol dalen de odds op een infectie met circa 57% binnen hetzelfde ziekenhuis (conditioneel effect)",
        "De kans op infectie wordt gedeeld door een factor -0.85 ongeacht het ziekenhuisniveau",
        "De correlatie tussen het hygiëneprotocol en complicaties is gelijk aan r = -0.85"
      ],
      "correctIndex": 1,
      "explanation": "Juist! e^-0.85 = 0.427. Dat betekent dat de odds op een infectie afnemen tot 43% van het oorspronkelijke niveau (een reductie van 57%). In GLMM zijn effecten 'cluster-specifiek' (conditioneel).",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 2: Interpretation of Fixed Effects in GLMM",
      "title_es": "Ejercicio 2: Interpretación de Efectos Fijos en GLMM",
      "question_en": "In a logistic GLMM for hospital-acquired infections, the fixed effect for Antibiotic Prophylaxis is β̂ = -0.51 (p = 0.002). What does this mean?",
      "question_es": "En un GLMM logístico de infecciones hospitalarias, el efecto fijo de Profilaxis Antibiótica es β̂ = -0,51 (p = 0,002). ¿Qué significa?",
      "options_en": [
        "Infection rate drops by 51 percentage points",
        "Odds Ratio OR = e^-0.51 ≈ 0.60: prophylaxis reduces infection odds by 40% for a patient within any given hospital, holding hospital-level baseline risk constant",
        "The hospital infection variance τ² drops by 51%",
        "40% of patients developed antibiotic resistance"
      ],
      "options_es": [
        "La tasa de infección se reduce en 51 puntos porcentuales",
        "Odds Ratio OR = e^-0,51 ≈ 0,60: la profilaxis reduce las odds de infección un 40% para un paciente en cualquier hospital dado, manteniendo constante el riesgo basal del centro",
        "La varianza entre hospitales τ² se reduce en un 51%",
        "El 40% de los pacientes desarrolló resistencia a antibióticos"
      ],
      "explanation_en": "Conditional interpretation mastery! In GLMM, fixed effects represent subject-specific (conditional) effects holding random cluster effects constant.",
      "explanation_es": "¡Interpretación condicional de nivel maestro! En GLMM, los efectos fijos expresan efectos condicionales a nivel de sujeto manteniendo constantes los efectos aleatorios del clúster."
    },
    {
      "id": "l16_ex3",
      "category": "Valkuil",
      "title": "Oefening 3: Wat is Overdispersie?",
      "question": "In een Poisson GLMM zie je dat de residuele deviance tweemaal zo groot is als het aantal vrijheidsgraden (Ratio = 2.4). Wat duidt dit aan en wat is de oplossing?",
      "options": [
        "Overdispersie: de variantie in de data is groter dan het gemiddelde (schending van de Poisson-aanname Var = Mean). Schakel over naar een Negatief-Binomiaal model of voeg een observation-level random effect toe",
        "Multicollineariteit tussen de random intercepten en de vaste tijdsfactoren",
        "Het model convergeert niet omdat de log-linkfunctie vervangen moet worden door een probit-link",
        "Underdispersie: de steekproef is te homogeen; verwijder de patiënten met nul aanvallen"
      ],
      "correctIndex": 0,
      "explanation": "Spot-on! Poisson veronderstelt Mean = Variance. In de praktijk is de variantie vaak veel groter (overdispersie). Een Negatief-Binomiaal model heeft een extra parameter om deze extra spreiding op te vangen.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 3: What is Overdispersion?",
      "title_es": "Ejercicio 3: ¿Qué es la Sobredispersión?",
      "question_en": "In a Poisson GLMM, residual deviance is double the residual degrees of freedom (Ratio = 2.1). What does this overdispersion diagnosis imply?",
      "question_es": "En un GLMM Poisson, la devianza residual duplica los grados de libertad residuales (Razón = 2,1). ¿Qué implica este diagnóstico de sobredispersión?",
      "options_en": [
        "Poisson assumption Var(Y) = E[Y] is violated: variance exceeds the mean, deflating standard errors; transition to a Negative Binomial GLMM or observation-level random effects",
        "The model has too few predictors",
        "The sample size is too large",
        "The link function must be changed to probit"
      ],
      "options_es": [
        "El supuesto de Poisson Var(Y) = E[Y] se vulnera: la varianza supera a la media, desinflando los errores estándar; debe pasarse a un GLMM Binomial Negativo o efectos aleatorios a nivel de observación",
        "El modelo contiene muy pocos predictores",
        "El tamaño muestral es excesivo",
        "La función de enlace debe cambiarse a probit"
      ],
      "explanation_en": "Essential diagnostic rigor! Poisson assumes equidispersance (Mean = Var). When data is overdispersed, Negative Binomial GLMM correctly models extra variance.",
      "explanation_es": "¡Rigor diagnóstico fundamental! Poisson asume equidispersión (Media = Varianza). Ante sobredispersión, el GLMM Binomial Negativo modela adecuadamente la varianza excedente."
    }
  ],
  "17": [
    {
      "id": "l17_ex1",
      "category": "Concept",
      "title": "Oefening 1: Wat zijn Splines in GAMs?",
      "question": "Hoe modelleert een Generalized Additive Model (GAM) een niet-lineaire relatie tussen een predictor X en de uitkomst Y?",
      "options": [
        "Door de dataset op te knippen in afzonderlijke intervallen en per interval een discrete boomstructuur te trainen",
        "Door een 10e-graads polynoom zonder regularisatie te fitten op de data",
        "Via een lineaire combinatie van flexibele basisfuncties (zoals kubische splines of B-splines) met knooppunten, gecombineerd met een straf op overmatige wiebeligheid (smoothing penalty)",
        "Door alle continue predictoren om te zetten in categoriale dummy-variabelen"
      ],
      "correctIndex": 2,
      "explanation": "Exact! GAMs bouwen gladde curven uit een set wiskundige basisfuncties. Een smoothing parameter bestraft te scherpe bochten, waardoor de curve data-gestuurd maar vloeiend blijft.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: What are Splines in GAMs?",
      "title_es": "Ejercicio 1: ¿Qué son los Splines en GAMs?",
      "question_en": "How does a Generalized Additive Model (GAM) model a non-linear relationship without forcing a global polynomial curve?",
      "question_es": "¿Cómo modela un Modelo Aditivo Generalizado (GAM) una relación no lineal sin forzar una curva polinómica global rígida?",
      "options_en": [
        "By connecting smooth local basis functions (splines) joined at knots, penalized by a curvature roughness penalty ∫[f''(x)]² dx",
        "By calculating moving averages across 5-point windows",
        "By converting all continuous numbers into categorical quartiles",
        "By using decision trees with binary splits"
      ],
      "options_es": [
        "Uniendo funciones base locales suaves (splines) en nudos, penalizadas por una penalización de rugosidad por curvatura ∫[f''(x)]² dx",
        "Calculando medias móviles en ventanas de 5 observaciones",
        "Transformando los valores continuos en cuartiles discretos",
        "Utilizando árboles de decisión con particiones binarias"
      ],
      "explanation_en": "Exact! Penalized splines construct flexible modular curves from basis functions while curvature penalties prevent wiggly overfitting.",
      "explanation_es": "¡Exacto! Los splines penalizados construyen curvas suaves flexibles uniendo funciones base locales y penalizando oscilaciones excesivas."
    },
    {
      "id": "l17_ex2",
      "category": "Berekening",
      "title": "Oefening 2: Effective Degrees of Freedom (edf)",
      "question": "In de output van een GAM heeft de gladde term s(Leeftijd) een geschatte 'edf' (effective degrees of freedom) van 1.02. Wat betekent dit concreet?",
      "options": [
        "De smoothing parameter λ is automatisch naar 0 gedreven door de REML-optimalisatie",
        "De relatie is sterk oscillerend met minimaal één lokaal maximum en één lokaal minimum",
        "Het model kan het effect van Leeftijd niet schatten wegens een gebrek aan datapunten",
        "Het verband tussen Leeftijd en de uitkomst is nagenoeg kaarsrecht (lineair), want een rechte lijn heeft per definitie edf = 1"
      ],
      "correctIndex": 3,
      "explanation": "Haarscherp inzicht! edf = 1 staat voor een zuiver lineair verband. Hoe hoger de edf (bv. 4 of 8), hoe meer bochten en golven de relatie vertoont. Bij edf ≈ 1 volstaat een gewone rechte lijn!",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 2: Effective Degrees of Freedom (EDF)",
      "title_es": "Ejercicio 2: Grados de Libertad Efectivos (EDF)",
      "question_en": "In a GAM output, smooth term s(Age) has EDF = 1.002. Smooth term s(Income) has EDF = 4.25. How do you interpret these two terms?",
      "question_es": "En la salida de un GAM, el término s(Edad) tiene EDF = 1,002. El término s(Ingresos) tiene EDF = 4,25. ¿Cómo interpretas ambos términos?",
      "options_en": [
        "s(Age) is effectively a simple linear relationship; s(Income) possesses complex non-linear curvature with multiple bends",
        "s(Age) is statistically insignificant; s(Income) is significant",
        "s(Income) is overfitted and must be removed",
        "Both terms are quadratic curves"
      ],
      "options_es": [
        "s(Edad) es prácticamente una relación lineal simple; s(Ingresos) posee una marcada curvatura no lineal con múltiples puntos de inflexión",
        "s(Edad) no es estadísticamente significativo; s(Ingresos) sí lo es",
        "s(Ingresos) está sobreajustado y debe eliminarse",
        "Ambos términos son parábolas cuadráticas"
      ],
      "explanation_en": "Brilliant GAM fluency! EDF = 1 denotes a pure straight line. EDF > 3 indicates rich non-linear behavior.",
      "explanation_es": "¡Fluidez matemática en GAMs! EDF = 1 equivale a una línea recta pura. EDF > 3 evidencia comportamientos no lineales ricos."
    },
    {
      "id": "l17_ex3",
      "category": "Valkuil",
      "title": "Oefening 3: De Smoothing Penalty λ",
      "question": "Wat gebeurt er met de geschatte curve in een GAM als je de strafparameter voor kromming instelt op λ = 0?",
      "options": [
        "De curve degradeert naar een horizontale lijn op het niveau van het gemiddelde ȳ",
        "De effectieve vrijheidsgraden krimpen exact naar nul",
        "De curve overfit maximaal: hij kronkelt door elk individueel toevallig datapunt heen (pure interpolatie van ruis)",
        "Het model weigert te berekenen omdat de Hessian matrix niet langer inverteerbaar is"
      ],
      "correctIndex": 2,
      "explanation": "Juist! Zonder straf (λ = 0) heeft het model vrij spel om zo wild mogelijk te kronkelen en elk ruispunt te raken. De smoothing penalty is essentieel om overmatig wiebelen te voorkomen.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 3: The Smoothing Penalty λ",
      "title_es": "Ejercicio 3: La Penalización de Suavizado λ",
      "question_en": "What happens to the estimated spline curve in a GAM if you force smoothing penalty λ to approach infinity (λ → ∞)?",
      "question_es": "¿Qué le sucede a la curva spline estimada en un GAM si fuerzas la penalización de suavizado λ hacia infinito (λ → ∞)?",
      "options_en": [
        "The curve interpolates every single data point like a connect-the-dots zigzag",
        "All curvature is completely extinguished: the spline collapses to a strict linear Ordinary Least Squares line (EDF = 1)",
        "The model produces NaN errors",
        "Effective degrees of freedom expand to infinity"
      ],
      "options_es": [
        "La curva interpola cada punto muestral individual en un zigzag continuo",
        "Toda curvatura se elimina por completo: el spline colapsa a una recta de regresión lineal estándar MCO (EDF = 1)",
        "El modelo arroja errores numéricos NaN",
        "Los grados de libertad efectivos se expanden hacia infinito"
      ],
      "explanation_en": "Precision theoretical understanding! The curvature penalty ∫[f''(x)]² dx penalizes bending. When λ → ∞, zero bending is permitted: f''(x) = 0, which is a straight line.",
      "explanation_es": "¡Comprensión teórica impecable! La penalización penaliza la segunda derivada. Si λ → ∞, no se tolera curvatura: f''(x) = 0, lo que define una línea recta."
    }
  ],
  "18": [
    {
      "id": "l18_ex1",
      "category": "Concept",
      "title": "Oefening 1: Wat is Censurering?",
      "question": "In een oncologische studie stopt het onderzoek na 5 jaar. Sommige patiënten zijn op dat moment nog steeds kankervrij en in leven. Waarom mag je hen NIET simpelweg uit de analyse verwijderen?",
      "options": [
        "Omdat de Kaplan-Meier schatter vereist dat alle proefpersonen uiteindelijk het event meemaken",
        "Omdat zij bewezen hebben minstens 5 jaar te overleven; hun informatie (rechtscensurering) is essentieel om de overlevingskans op lange termijn niet zwaar te onderschatten",
        "Omdat gecensureerde patiënten altijd een Hazard Ratio van exact 1.0 moeten krijgen toebedeeld",
        "Omdat de follow-up tijd wiskundig niet gedefinieerd is voor patiënten zonder overlijdensdatum"
      ],
      "correctIndex": 1,
      "explanation": "Spot-on! Dit heet 'rechtscensurering'. Deze patiënten leveren waardevol bewijs dat ze minstens 5 jaar overleven. Als je ze weglaat, houd je alleen patiënten over die snel sterven en onderschat je de overleving enorm.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: What is Censoring in Survival Analysis?",
      "title_es": "Ejercicio 1: ¿Qué es la Censura en Análisis de Supervivencia?",
      "question_en": "In an oncology trial terminating after 5 years, some patients remain alive and cancer-free. Why is deleting these patients or treating their follow-up duration as their time of death completely wrong?",
      "question_es": "En un ensayo oncológico que termina a los 5 años, varios pacientes siguen vivos y sin enfermedad. ¿Por qué descartar a estos pacientes o tratar la fecha final como fecha de muerte es un grave error?",
      "options_en": [
        "Deleting them discards the healthiest patients (severe survival underestimation); setting death at 5 years treats living patients as dead. Survival analysis uses right-censoring to retain their living time without inventing deaths",
        "Because surviving patients should be analyzed with logistic regression instead",
        "Censoring only matters in animal studies",
        "Because 5-year survival is always 100%"
      ],
      "options_es": [
        "Excluirlos descarta a los pacientes más sanos (subestimando gravemente la supervivencia); asumir su muerte a los 5 años contabiliza muertes inexistentes. El análisis de supervivencia retiene su tiempo vivido mediante censura por la derecha",
        "Porque los pacientes supervivientes deben analizarse con regresión logística",
        "La censura solo es relevante en ensayos con animales",
        "Porque la supervivencia a 5 años siempre es del 100%"
      ],
      "explanation_en": "Spot on! Right-censoring acknowledges: 'We know this patient survived AT LEAST 5 years'. Kaplan-Meier integrates partial information unbiassedly.",
      "explanation_es": "¡Exacto! La censura por la derecha incorpora: 'Sabemos que este paciente vivió AL MENOS 5 años'. Kaplan-Meier aprovecha esta información sin sesgos."
    },
    {
      "id": "l18_ex2",
      "category": "Berekening",
      "title": "Oefening 2: Hazard Ratio Lezen",
      "question": "In een klinische trial naar hartfalen rapporteert het Cox-model voor Medicijn X een Hazard Ratio van HR = 0.60 (95% CI: [0.45, 0.80], p = 0.001). Wat concludeer je?",
      "options": [
        "Precies 60% van de behandelde patiënten zal na afloop van de trial nog in leven zijn",
        "De mediane levensduur van patiënten verdubbelt met 60 procentpunten onder de behandeling",
        "Patiënten met Medicijn X hebben op elk willekeurig moment een 40% lager risico (hazard rate) om te overlijden vergeleken met de controlegroep",
        "Het risico op overlijden daalt met 60% in het eerste jaar, maar stabiliseert daarna op nul"
      ],
      "correctIndex": 2,
      "explanation": "Juist! HR = 0.60 betekent dat het momentane risico 60% is van de controlegroep, wat neerkomt op een risicoreductie van 1 - 0.60 = 40%.",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 2: Interpreting a Hazard Ratio",
      "title_es": "Ejercicio 2: Interpretar una Hazard Ratio",
      "question_en": "In a clinical heart failure trial, a Cox model reports a Hazard Ratio of HR = 0.65 (95% CI [0.48, 0.88], p = 0.005) for an ACE inhibitor. What does this mean?",
      "question_es": "En un ensayo de insuficiencia cardíaca, un modelo de Cox reporta una Hazard Ratio de HR = 0,65 (IC 95% [0,48; 0,88], p = 0,005) para un fármaco. ¿Qué significa?",
      "options_en": [
        "Treated patients have a 35% lower instantaneous risk of dying at any timepoint during follow-up compared to controls",
        "35% of patients survived",
        "Life expectancy increases by exactly 0.65 years",
        "The drug is ineffective because HR is below 1.0"
      ],
      "options_es": [
        "Los pacientes tratados presentan una reducción del 35% en el riesgo instantáneo de muerte en cualquier instante del seguimiento frente al grupo control",
        "El 35% de los pacientes sobrevivió",
        "La esperanza de vida aumenta exactamente 0,65 años",
        "El fármaco es ineficaz porque la HR es menor a 1,0"
      ],
      "explanation_en": "Haute clinical fluency! 1 - 0.65 = 0.35: a 35% reduction in hazard rate across the trial period.",
      "explanation_es": "¡Gran dominio clínico! 1 - 0,65 = 0,35: reducción del 35% en la tasa instantánea de riesgo durante todo el seguimiento."
    },
    {
      "id": "l18_ex3",
      "category": "Valkuil",
      "title": "Oefening 3: De Proportional Hazards Assumptie",
      "question": "In een Cox-regressie kruisen de overlevingscurven van twee behandelingen elkaar na 1.5 jaar (Behandeling A is eerst beter, maar na 1.5 jaar is B superieur). Wat betekent dit voor het model?",
      "options": [
        "Er is geen enkel probleem: de hazard ratio middelt beide periodes automatisch uit tot een valide algemeen effect",
        "De 'Proportional Hazards' aanname is fundamenteel geschonden: de hazard ratio is niet constant over tijd. Een standaard Cox model is ongeldig en vereist tijd-afhankelijke covariabelen of een gestratificeerde analyse",
        "Het model moet vervangen worden door een lineaire OLS regressie op de totale overlevingstijd",
        "De p-waarde van de log-rank toets kan direct vermenigvuldigd worden met de kruisingstijd om het effect te corrigeren"
      ],
      "correctIndex": 1,
      "explanation": "Meesterlijk! Als curven kruisen, is de hazard ratio tijd-afhankelijk (eerst < 1, later > 1). Het basismodel van Cox veronderstelt dat het relatieve risico constant is over de gehele tijdsduur.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 3: The Proportional Hazards Assumption",
      "title_es": "Ejercicio 3: El Supuesto de Riesgos Proporcionales",
      "question_en": "In a Cox regression, the survival curves of surgery and radiation therapy CROSS at month 12 (surgery has high initial mortality but better 5-year survival). What does this cross signal?",
      "question_es": "En una regresión de Cox, las curvas de supervivencia de cirugía y radioterapia se CRUZAN en el mes 12 (la cirugía tiene alta mortalidad inicial pero mejor supervivencia a 5 años). ¿Qué delata este cruce?",
      "options_en": [
        "Both treatments are equally effective at all times",
        "Violation of the Proportional Hazards assumption: Hazard Ratio changes over time (HR < 1 early, HR > 1 late); a single static Cox HR is invalid and requires time-varying coefficients",
        "The sample size must be doubled",
        "The log-rank test is automatically invalid"
      ],
      "options_es": [
        "Que ambos tratamientos son idénticamente eficaces en todo momento",
        "Violación del supuesto de Riesgos Proporcionales: la Hazard Ratio cambia con el tiempo (HR < 1 al inicio, HR > 1 después); una única HR estática de Cox queda invalidada y exige coeficientes variables en el tiempo",
        "Que el tamaño muestral debe duplicarse",
        "Que el test de log-rank queda invalidado"
      ],
      "explanation_en": "Masterful survival insight! Crossing curves prove the risk ratio is not proportional across time. Time-dependent covariates or stratified Cox models are required.",
      "explanation_es": "¡Maestría en supervivencia! Curvas que se cruzan demuestran que la razón de riesgos no es constante en el tiempo. Requiere covariables dependientes del tiempo o modelos estratificados."
    }
  ],
  "19": [
    {
      "id": "l19_ex1",
      "category": "Concept",
      "title": "Oefening 1: De Drie Bouwstenen van Bayes",
      "question": "Welke fundamentele formule beschrijft de kern van de Bayesiaanse epistemologie?",
      "options": [
        "Prior Overtuiging = Likelihood × Standaardfout van het Steekproefgemiddelde",
        "Posterior Kans = Frequentistische P-waarde gedeeld door het Aantal Toetsen",
        "Posterior Kennis ∝ Likelihood van de Data × Prior Overtuiging (P(θ | Data) ∝ P(Data | θ) × P(θ))",
        "Posterior Distributie = Conditionele Expectatie onder de Nulhypothese H0"
      ],
      "correctIndex": 2,
      "explanation": "De hoeksteen van alle moderne wetenschap! Je begint met bestaande kennis (prior), confronteert deze met empirisch bewijs (likelihood), en actualiseert je wereldbeeld (posterior).",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: The Three Pillars of Bayes",
      "title_es": "Ejercicio 1: Los Tres Pilares de Bayes",
      "question_en": "Which fundamental formula formalizes how Bayesian statistics updates prior knowledge with newly observed empirical evidence?",
      "question_es": "¿Qué formulación fundamental formaliza cómo la estadística bayesiana actualiza el conocimiento previo con la evidencia empírica recién observada?",
      "options_en": [
        "Posterior ∝ Likelihood × Prior",
        "R² = 1 - (SSE / SST)",
        "p = P(Data | H₀)",
        "Z = (X - μ) / σ"
      ],
      "options_es": [
        "Posteriori ∝ Verosimilitud × Priori",
        "R² = 1 - (SCE / SCT)",
        "p = P(Datos | H₀)",
        "Z = (X - μ) / σ"
      ],
      "explanation_en": "The heart of Bayesian statistics! The posterior distribution is the mathematical product of the likelihood of observed data and prior belief.",
      "explanation_es": "¡El corazón de la estadística bayesiana! La distribución posterior es el producto directo de la verosimilitud de los datos y la distribución a priori."
    },
    {
      "id": "l19_ex2",
      "category": "Concept",
      "title": "Oefening 2: De Invloed van de Prior bij Grote N",
      "question": "Wat gebeurt er met de invloed van de gekozen prior-verdeling op de posterior verdeling naarmate je steekproefomvang N toeneemt naar 100.000 observaties?",
      "options": [
        "De prior wordt oneindig dominant en overschrijft alle empirische observaties",
        "De posterior variantie groeit proportioneel met de informatiedichtheid van de prior",
        "De posterior verdeling splitst zich automatisch op in twee onafhankelijke Gaussiaanse componenten",
        "De invloed van de prior vervliegt nagenoeg geheel; de Likelihood (de data) domineert de posterior volledig en de schatting convergeert naar de Maximum Likelihood schatting"
      ],
      "correctIndex": 3,
      "explanation": "Geruststellende wetmatigheid (Bernstein-von Mises theorema)! 'Data overwint de prior'. Tenzij je prior letterlijk een kans van 0 toekent aan een waarde, zal voldoende data de prior altijd overstemmen.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 2: Influence of the Prior as N Grows Large",
      "title_es": "Ejercicio 2: Influencia de la Priori con N Grande",
      "question_en": "What happens to the influence of the chosen prior distribution P(θ) as sample size N grows toward infinity (N → ∞)?",
      "question_es": "¿Qué le sucede a la influencia de la distribución a priori P(θ) conforme el tamaño muestral N crece hacia infinito (N → ∞)?",
      "options_en": [
        "The prior dominates the posterior completely",
        "The likelihood completely overwhelms the prior: the posterior converges to the Maximum Likelihood Estimate regardless of reasonable prior choices (Bernstein-von Mises Theorem)",
        "The posterior variance expands to infinity",
        "The prior probability distribution becomes non-integrable"
      ],
      "options_es": [
        "La priori domina por completo a la distribución posterior",
        "La verosimilitud satura y domina a la priori: la posterior converge a la estimación de máxima verosimilitud independientemente de prioris razonables (Teorema de Bernstein-von Mises)",
        "La varianza posterior se expande a infinito",
        "La distribución a priori se vuelve inintegrable"
      ],
      "explanation_en": "Bernstein-von Mises theorem! With abundant data, the likelihood dominates. Priors provide crucial regularization in small samples but yield to massive evidence.",
      "explanation_es": "¡Teorema de Bernstein-von Mises! Con abundantes datos, la verosimilitud prevalece. La priori aporta regularización en muestras pequeñas pero cede ante la evidencia masiva."
    },
    {
      "id": "l19_ex3",
      "category": "Valkuil",
      "title": "Oefening 3: Wat mag je wél zeggen over een 95% Credible Interval?",
      "question": "In tegenstelling tot een frequentistisch betrouwbaarheidsinterval: waarom mag je bij een Bayesiaans 95% Credible Interval wél spreken van '95% kans dat de parameter binnen de grenzen ligt'?",
      "options": [
        "Omdat in de Bayesiaanse statistiek de parameter zelf als een toevalsvariabele met een kansverdeling (posterior) wordt beschouwd, conditioneel op de geobserveerde data",
        "Omdat de Markov Chain Monte Carlo sampler alle Type I fouten automatisch tot nul reduceert",
        "Omdat een Credible Interval mathematisch gelijkstaat aan de p-waarde verheven tot de macht van de prior",
        "Omdat Bayesiaanse intervallen altijd rekenen met een oneindig grote steekproefomvang"
      ],
      "correctIndex": 0,
      "explanation": "Eindelijk intuïtief! In frequentisme is de parameter een vast getal en is het interval willekeurig. In Bayes is de data vast en is de parameter stochastisch, waardoor je wél directe kansuitspraken mag doen.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 3: What Can You Say About a 95% Credible Interval?",
      "title_es": "Ejercicio 3: ¿Qué Puedes Afirmar de un Intervalo de Credibilidad al 95%?",
      "question_en": "Unlike a frequentist confidence interval, what straightforward probabilistic statement CAN you make about a Bayesian 95% Credible Interval [2.4, 6.8]?",
      "question_es": "A diferencia de un intervalo frecuentista, ¿qué afirmación probabilística directa SÍ es formalmente válida sobre un Intervalo de Credibilidad Bayesiano al 95% [2,4; 6,8]?",
      "options_en": [
        "There is literally a 95% probability that the true parameter θ lies between 2.4 and 6.8, given our data and prior",
        "95% of future sample means will equal 4.6",
        "The p-value is strictly equal to 0.05",
        "The null hypothesis is rejected with 95% power"
      ],
      "options_es": [
        "Existe literalmente un 95% de probabilidad de que el verdadero parámetro θ se encuentre entre 2,4 y 6,8, dados los datos observados y la distribución a priori",
        "El 95% de las futuras medias muestrales será igual a 4,6",
        "El valor p es estrictamente igual a 0,05",
        "La hipótesis nula se rechaza con un 95% de potencia"
      ],
      "explanation_en": "The intuitive beauty of Bayes! Because parameters are random variables with posterior distributions, credible intervals directly express probability.",
      "explanation_es": "¡La elegancia intuitiva de Bayes! Al ser los parámetros variables con distribución posterior, los intervalos de credibilidad permiten afirmaciones probabilísticas directas."
    }
  ],
  "20": [
    {
      "id": "l20_ex1",
      "category": "Concept",
      "title": "Oefening 1: Waarom MCMC?",
      "question": "Waarom gebruiken moderne statistici MCMC (Markov Chain Monte Carlo) sampling in plaats van de exacte noemer van Bayes' theorema P(Data) = ∫ P(Data|θ) P(θ) dθ direct uit te rekenen?",
      "options": [
        "Omdat numerieke integralen altijd resulteren in een singuliere Hessiaan matrix",
        "Omdat de likelihood-functie alleen gedefinieerd is over discrete Markov ketens",
        "Omdat MCMC gegarandeerd deterministische antwoorden geeft zonder simulatie-onzekerheid",
        "Omdat de noemer P(Data) een hoog-dimensionale integraal is over alle parameters tegelijk; bij meer dan 4 parameters is dit analytisch onmogelijk te integreren, maar MCMC kan wel steekproeven trekken uit de vorm van de teller zonder de normalisatieconstante te kennen"
      ],
      "correctIndex": 3,
      "explanation": "De revolutie van MCMC! De noemer (evidence) is onberekenbaar in hoge dimensies. MCMC omzeilt de noemer briljant door alleen de relatieve verhoudingen van de teller te verkennen.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: Why MCMC?",
      "title_es": "Ejercicio 1: ¿Por Qué MCMC?",
      "question_en": "Why do modern statisticians use Markov Chain Monte Carlo (MCMC) instead of standard analytical integration in complex Bayesian models?",
      "question_es": "¿Por qué los estadísticos modernos emplean MCMC en lugar de integración analítica en modelos bayesianos complejos?",
      "options_en": [
        "Because the Bayesian normalizing constant ∫ P(Data|θ)P(θ)dθ is mathematically impossible to solve analytically in high dimensions; MCMC samples from the posterior without calculating this constant",
        "Because MCMC eliminates the need for prior distributions",
        "Because MCMC always runs faster than OLS",
        "Because MCMC guarantees p-values below 0.05"
      ],
      "options_es": [
        "Porque la constante normalizadora ∫ P(Datos|θ)P(θ)dθ es analíticamente irresoluble en altas dimensiones; MCMC extrae muestras de la posterior sin necesidad de calcular esa integral",
        "Porque MCMC prescinde de distribuciones a priori",
        "Porque MCMC siempre es más rápido que MCO",
        "Porque MCMC garantiza valores p inferiores a 0,05"
      ],
      "explanation_en": "Exact! The denominator integral in Bayes' rule is an intractable multi-dimensional volume. MCMC evaluates unnormalized ratios, bypassing the integral entirely.",
      "explanation_es": "¡Exacto! El denominador del teorema de Bayes es una integral multivariante intratable. MCMC evalúa cocientes no normalizados, sorteando la integral por completo."
    },
    {
      "id": "l20_ex2",
      "category": "Berekening",
      "title": "Oefening 2: Gelman-Rubin R̂ Diagnostiek",
      "question": "In een Stan-model draaien 4 ketens. De Gelman-Rubin convergentiediagnostiek toont R̂ = 1.002 voor alle parameters. Wat is de conclusie?",
      "options": [
        "De vier ketens zijn uitstekend gemengd en geconvergeerd naar dezelfde stationaire posterior verdeling (R̂ < 1.05 is de gouden standaard voor convergentie)",
        "De effectieve steekproefomvang (ESS) is gedaald tot nul wegens overmatige autocorrelatie",
        "De ketens zijn vastgelopen in een lokaal minimum en verkennen de parameterruimte onvoldoende",
        "De prior-verdeling was te smal gespecificeerd en domineert de ketens volledig"
      ],
      "correctIndex": 0,
      "explanation": "Juist! R̂ vergelijkt de variantie tussen de ketens met de variantie binnen de ketens. Als R̂ ≈ 1.00 lopen alle ketens perfect synchroon door hetzelfde posterior landschap.",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 2: Gelman-Rubin R̂ Diagnostics",
      "title_es": "Ejercicio 2: Diagnóstico Gelman-Rubin R̂",
      "question_en": "In a Bayesian Stan model running 4 chains: Chain 1 has mean 12.0, Chain 2 has mean 12.1, Chain 3 has mean 28.5, and Chain 4 has mean 11.9. Gelman-Rubin is R̂ = 1.84. What must you conclude?",
      "question_es": "En un modelo Stan con 4 cadenas: Cadena 1 tiene media 12,0; Cadena 2 tiene 12,1; Cadena 3 tiene 28,5; y Cadena 4 tiene 11,9. El estadístico R̂ es 1,84. ¿Qué concluyes?",
      "options_en": [
        "Chains have converged because R̂ is greater than 1.0",
        "Convergence failure (R̂ = 1.84 >> 1.05): Chain 3 is stuck in an unrepresentative local mode; results are invalid and cannot be interpreted",
        "The sample size of chains should be reduced",
        "The posterior is perfectly Gaussian"
      ],
      "options_es": [
        "Las cadenas han convergido porque R̂ es mayor que 1,0",
        "Fallo crítico de convergencia (R̂ = 1,84 >> 1,05): la Cadena 3 quedó atrapada en un modo local aislado; las estimaciones son inválidas",
        "El número de iteraciones de las cadenas debe reducirse",
        "La distribución posterior es perfectamente gaussiana"
      ],
      "explanation_en": "Essential MCMC quality control! R̂ compares between-chain variance to within-chain variance. R̂ must be < 1.05 (ideally < 1.01). R̂ = 1.84 proves lack of convergence.",
      "explanation_es": "¡Control de calidad MCMC indispensable! R̂ compara la varianza entre cadenas frente a la varianza interna. R̂ debe ser < 1,05 (idealmente < 1,01). R̂ = 1,84 delata falta de convergencia."
    },
    {
      "id": "l20_ex3",
      "category": "Concept",
      "title": "Oefening 3: Wat maakt Hamiltoniaanse Monte Carlo (HMC) superieur?",
      "question": "Waarom schaalt Hamiltoniaanse Monte Carlo (HMC / NUTS in Stan) zo fenomenaal veel beter naar honderden parameters dan traditionele Metropolis-Hastings algoritmes?",
      "options": [
        "Omdat HMC uitsluitend discrete parameters samplet en daardoor differentiatie overbodig maakt",
        "HMC berekent de exacte multivariate inverse covariantiematrix zonder gradiënten te evalueren",
        "Omdat HMC alle hyperparameters automatisch op nul stelt via analytische Laplace benadering",
        "Metropolis-Hastings doet een willekeurige 'dronkenmanswandeling' (random walk) en verdwaalt in hoge dimensies; HMC simuleert de wrijvingloze fysica van een deeltje dat over het gradiëntoppervlak rolt en zet grote, doelgerichte stappen door de parameterruimte"
      ],
      "correctIndex": 3,
      "explanation": "Briljante fysica in de statistiek! HMC gebruikt de gradiënt (helling) van de posterior om een virtueel deeltje vaart te geven. Daardoor verplaatst het zich pijlsnel naar gebieden met hoge waarschijnlijkheid.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 3: What Makes Hamiltonian Monte Carlo (HMC) Superior?",
      "title_es": "Ejercicio 3: ¿Qué Hace Superior a Monte Carlo Hamiltoniano (HMC)?",
      "question_en": "Why does Hamiltonian Monte Carlo (HMC / NUTS in Stan) scale to hundreds of parameters while classical Metropolis-Hastings suffers from curse of dimensionality?",
      "question_es": "¿Por qué Monte Carlo Hamiltoniano (HMC / NUTS en Stan) escala a cientos de dimensiones mientras Metropolis-Hastings sufre la maldición de la dimensionalidad?",
      "options_en": [
        "HMC calculates the gradient ∇log P(θ|D) and uses physical momentum to glide through parameter space, avoiding diffusive random-walk behavior",
        "HMC replaces calculus with random coin flips",
        "HMC requires no burn-in or warmup iterations",
        "HMC only samples discrete integers"
      ],
      "options_es": [
        "HMC calcula el gradiente ∇log P(θ|D) y utiliza momento físico para deslizarse por la geometría posterior, evitando el paseo aleatorio difusivo ineficiente",
        "HMC sustituye el cálculo diferencial por lanzamientos de monedas",
        "HMC no requiere iteraciones de calentamiento (warmup)",
        "HMC solo muestrea valores enteros discretos"
      ],
      "explanation_en": "Physical elegance! HMC simulates frictionless physics across the posterior energy landscape. Gradients direct proposals into high-probability volumes.",
      "explanation_es": "¡Elegancia física! HMC simula dinámica hamiltoniana sin fricción sobre el paisaje energético posterior. Los gradientes guían las trayectorias hacia zonas de alta probabilidad."
    }
  ],
  "21": [
    {
      "id": "l21_ex1",
      "category": "Concept",
      "title": "Oefening 1: Wat is een Gaussiaans Proces?",
      "question": "Wat is de meest intuïtieve en mathematisch correcte definitie van een Gaussiaans Proces (GP)?",
      "options": [
        "Een niet-parametrische dichtheidsschatting gebaseerd op histogrammen met variabele bakbreedte",
        "Een neuraal netwerk met één enkele verborgen laag en ReLU activatiefuncties",
        "Een autoregressief tijdreeksmodel dat uitsluitend stationaire Markov processen simuleert",
        "Een oneindig-dimensionale multivariate normale verdeling: in plaats van een gemiddelde vector en covariantiematrix over getallen, definieert een GP een gemiddelde functie en een covariantie-kernel over complete continue functies"
      ],
      "correctIndex": 3,
      "explanation": "Meesterlijk! Een GP is 'een verdeling over functies'. Elk eindig aantal punten dat je kiest op die functie volgt gezamenlijk een multivariate normale verdeling.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: What is a Gaussian Process?",
      "title_es": "Ejercicio 1: ¿Qué es un Proceso Gaussiano?",
      "question_en": "What is the most intuitive and mathematically rigorous definition of a Gaussian Process (GP)?",
      "question_es": "¿Cuál es la definición más intuitiva y matemáticamente rigurosa de un Proceso Gaussiano (GP)?",
      "options_en": [
        "A software algorithm that runs normal distribution tests",
        "An infinite collection of random variables, any finite subset of which has a joint multivariate Gaussian distribution, defining a probability distribution over continuous functions",
        "A linear regression model with normally distributed predictors",
        "A Markov chain that generates Gaussian noise"
      ],
      "options_es": [
        "Un algoritmo de software que ejecuta pruebas de normalidad",
        "Una colección infinita de variables aleatorias, donde cualquier subconjunto finito sigue una distribución normal multivariante conjunta, definiendo una distribución sobre funciones continuas",
        "Un modelo de regresión lineal con predictores gaussianos",
        "Una cadena de Markov que genera ruido blanco normal"
      ],
      "explanation_en": "Exact textbook definition! A GP is non-parametric Bayesian learning over function spaces, fully determined by its mean function m(x) and covariance kernel k(x, x').",
      "explanation_es": "¡Definición rigurosa exacta! Un GP es aprendizaje bayesiano no paramétrico sobre espacios de funciones continuas, gobernado por su media m(x) y kernel k(x, x')."
    },
    {
      "id": "l21_ex2",
      "category": "Berekening",
      "title": "Oefening 2: De RBF Kernel Lengteschaal ℓ",
      "question": "In een Radial Basis Function (RBF) kernel k(x, x') = σ² exp(-||x - x'||² / (2ℓ²)): wat gebeurt er met de geschatte functie als de lengteschaal parameter ℓ heel groot wordt gekozen?",
      "options": [
        "De curve wordt extreem wild, grillig en interpoleert alle ruispunten met hoge frequentie",
        "De correlatie tussen punten blijft over grote afstanden hoog, waardoor de voorspelde functie heel stijf, glad en langzaam golvend wordt",
        "De covariance-kernel convergeert naar een diagonale identiteitsmatrix",
        "De conditionele onzekerheidsband krimpt overal direct naar nul"
      ],
      "correctIndex": 1,
      "explanation": "Exact! De lengteschaal ℓ bepaalt hoe snel de correlatie tussen twee punten afneemt naarmate ze verder uit elkaar liggen. Grote ℓ = punten blijven lang gecorreleerd = zeer gladde, trage curve.",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 2: The RBF Kernel Lengthscale ℓ",
      "title_es": "Ejercicio 2: La Escala de Longitud ℓ del Kernel RBF",
      "question_en": "In a Radial Basis Function (RBF) kernel k(x, x') = σ² exp(-||x - x'||² / 2ℓ²), what happens to the predictive function when lengthscale ℓ is set exceedingly small (ℓ → 0)?",
      "question_es": "En un kernel RBF k(x, x') = σ² exp(-||x - x'||² / 2ℓ²), ¿qué le ocurre a la función predicha si fijamos la escala de longitud ℓ extremadamente pequeña (ℓ → 0)?",
      "options_en": [
        "The function becomes an ultra-smooth straight line",
        "Spatial correlation collapses: the function spikes sharply through observed data points and immediately reverts to prior mean zero between points (extreme overfitting)",
        "The kernel matrix becomes singular and unsolvable",
        "The uncertainty ribbon expands uniformly across all space"
      ],
      "options_es": [
        "La función se convierte en una línea recta perfectamente lisa",
        "La correlación espacial colapsa: la función oscila bruscamente conectando los puntos observados y cae de inmediato a la media previa cero en los intervalos intermedios (sobreajuste extremo)",
        "La matriz del kernel se vuelve singular e incalculable",
        "La banda de incertidumbre se ensancha uniformemente en todo el espacio"
      ],
      "explanation_en": "Profound GP intuition! Lengthscale ℓ defines the horizontal memory of the kernel. If ℓ is tiny, points do not share information with their neighbors.",
      "explanation_es": "¡Gran intuición en GPs! La escala ℓ define el alcance de memoria espacial del kernel. Si ℓ es diminuta, los puntos observados no comparten información con sus vecinos."
    },
    {
      "id": "l21_ex3",
      "category": "Dilemma",
      "title": "Oefening 3: Bayesiaanse Optimalisatie met GPs",
      "question": "Waarom zijn Gaussiaanse Processen het voorkeursmodel bij Bayesiaanse Optimalisatie van dure experimenten (bv. medicijnontwikkeling of hyperparameter tuning)?",
      "options": [
        "Omdat een GP op elk onbekend punt niet alleen de verwachte uitkomst voorspelt, maar ook de exacte posterior onzekerheid σ(x); hiermee balanceer je exploitatie (hoge verwachting) en exploratie (hoge onzekerheid)",
        "Omdat GPs geen matrixinversie vereisen en daardoor lineair schalen met miljoenen datapunten",
        "Omdat de RBF-kernel garandeert dat het globale optimum altijd binnen 3 evaluaties wordt gevonden",
        "Omdat GPs immuun zijn voor meetruis in de afhankelijke observaties"
      ],
      "correctIndex": 0,
      "explanation": "De kracht van onzekerheid! Met een GP weet je niet alleen wát je verwacht, maar ook wáár je nog niets weet. De acquisitiefunctie (bv. Expected Improvement) vertelt je precies welk volgend experiment het meeste oplevert.",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 3: Bayesian Optimization with GPs",
      "title_es": "Ejercicio 3: Optimización Bayesiana con Procesos Gaussianos",
      "question_en": "Why are Gaussian Processes the gold-standard surrogate model in Bayesian Optimization (e.g. tuning expensive deep neural net hyperparameters or drug molecules)?",
      "question_es": "¿Por qué los Procesos Gaussianos son el modelo sustituto predilecto en Optimización Bayesiana (ej. calibrar hiperparámetros costosos o moléculas químicas)?",
      "options_en": [
        "Because GPs provide both a predicted mean AND a closed-form predictive uncertainty σ(x) at every location, enabling acquisition functions (like Expected Improvement) to balance exploration vs exploitation",
        "Because GPs can evaluate millions of points per second without GPU memory",
        "Because GPs guarantee global optimality in non-convex spaces without assumptions",
        "Because GPs eliminate the need for acquisition functions"
      ],
      "options_es": [
        "Porque los GPs proporcionan tanto la media predicha COMO la incertidumbre analítica exacta σ(x) en cada punto, permitiendo funciones de adquisición (como Expected Improvement) que equilibran exploración y explotación",
        "Porque los GPs evalúan millones de puntos por segundo sin memoria GPU",
        "Porque los GPs garantizan óptimos globales no convexos sin supuestos",
        "Porque los GPs prescinden de funciones de adquisición"
      ],
      "explanation_en": "State-of-the-art machine learning! Accurate uncertainty quantification allows algorithms to strategically sample unmeasured regions with high upside.",
      "explanation_es": "¡Vanguardia en machine learning! Una cuantificación rigurosa de la incertidumbre permite muestrear zonas inexploradas con alto potencial de mejora."
    }
  ],
  "22": [
    {
      "id": "l22_ex1",
      "category": "Concept",
      "title": "Oefening 1: Zien vs Doen (Judea Pearl)",
      "question": "Wat is volgens Judea Pearl's causale hiërarchie het fundamentele verschil tussen de observatie P(Y | X = x) en de interventie P(Y | do(X = x))?",
      "options": [
        "P(Y | X = x) observeert passief in een bestaande wereld inclusief alle verstorende selectie-effecten; P(Y | do(X = x)) simuleert een actieve fysieke ingreep waarbij alle natuurlijke oorzaken van X worden losgekoppeld via graph surgery",
        "P(Y | do(X)) kan uitsluitend berekend worden wanneer alle variabelen in de graaf normaal verdeeld zijn",
        "Er is geen mathematisch verschil; do(X) is louter een didactische notatie voor multivariabele OLS regressie",
        "P(Y | X) conditioneert op instrumentele variabelen, terwijl do(X) conditioneert op colliders"
      ],
      "correctIndex": 0,
      "explanation": "Briljant causaal inzicht! Dit scheidt passieve data mining van echte beleidsinterventie. Als de haan kraait en de zon komt op, is P(Zon | Haan) hoog, maar P(Zon | do(Haan = stil)) blijft exact even hoog!",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: Seeing vs Doing (Judea Pearl)",
      "title_es": "Ejercicio 1: Observar frente a Actuar (Judea Pearl)",
      "question_en": "According to Judea Pearl's Causal Ladder, what is the fundamental mathematical difference between passive conditioning P(Y | X = x) and active intervention P(Y | do(X = x))?",
      "question_es": "Según la Escalera de Causalidad de Judea Pearl, ¿cuál es la diferencia matemática esencial entre el condicionamiento pasivo P(Y | X = x) y la intervención activa P(Y | do(X = x))?",
      "options_en": [
        "There is no difference; both produce identical probabilities under infinite sample size",
        "P(Y | X = x) filters existing passive observational data including all confounding paths; P(Y | do(X = x)) models the outcome under an active external intervention that severs all incoming causal arrows into X",
        "P(Y | do(X)) can only be computed in laboratory experiments",
        "The do-operator is identical to standard Bayesian updating"
      ],
      "options_es": [
        "No existe diferencia; ambos arrojan idénticas probabilidades con muestras infinitas",
        "P(Y | X = x) filtra datos observacionales pasivos incluyendo caminos de confusión; P(Y | do(X = x)) modela el resultado bajo una intervención física externa que corta todas las flechas entrantes hacia X",
        "P(Y | do(X)) solo es computable en experimentos de laboratorio",
        "El operador do es equivalente a la actualización bayesiana ordinaria"
      ],
      "explanation_en": "Pinnacle causal distinction! Seeing updates beliefs within a static system. Doing alters the physical data-generating mechanism itself (graph surgery).",
      "explanation_es": "¡La distinción causal cumbre! Observar filtra probabilidades en un sistema estático. Actuar interviene sobre el mecanismo generador cortando dependencias (cirugía de grafos)."
    },
    {
      "id": "l22_ex2",
      "category": "Valkuil",
      "title": "Oefening 2: De Collider Valkuil (Berkson's Paradox)",
      "question": "In een model beïnvloeden Talent (X) en Geluk (Y) beiden de kans op Beroemdheid (Z). Er is geen enkel causaal verband tussen Talent en Geluk in de algemene bevolking. Wat gebeurt er als je conditioneert op Beroemdheid (bv. door alleen beroemdheden te analyseren)?",
      "options": [
        "Je elimineert alle resterende confounding bias tussen Talent en Geluk volgens het d-separatie theorema",
        "Je opent een onecht pad en introduceert een VALSE negatieve correlatie tussen Talent en Geluk: onder beroemdheden lijkt iemand met weinig talent automatisch 'heel veel geluk' te hebben gehad!",
        "De correlatie tussen Talent en Geluk blijft exact nul omdat Z een collider is",
        "Het causale effect van Talent op Beroemdheid wordt verdubbeld via de back-door formule"
      ],
      "correctIndex": 1,
      "explanation": "Spot-on! Dit is Berkson's bias / collider stratification bias. Het conditioneren op een gemeenschappelijk gevolg (collider) koppelt twee onafhankelijke oorzaken kunstmatig aan elkaar.",
      "category_en": "Pitfall",
      "category_es": "Trampa",
      "title_en": "Exercise 2: The Collider Trap (Berkson's Paradox)",
      "title_es": "Ejercicio 2: La Trampa del Colisionador (Paradoja de Berkson)",
      "question_en": "In a DAG: Talent (X) → Hollywood Stardom (Z) ← Charm (Y). Both talent and charm independently cause stardom (a collider Z). What catastrophe happens if you condition on Stardom Z in your regression?",
      "question_es": "En un DAG: Talento (X) → Fama en Hollywood (Z) ← Carisma (Y). Ambos causan de forma independiente la fama (colisionador Z). ¿Qué catástrofe ocurre si condicionas por Fama Z en tu regresión?",
      "options_en": [
        "Conditioning on a collider opens a spurious non-causal path between X and Y, generating a false negative correlation between talent and charm among famous actors!",
        "It eliminates all residual variance and perfects causal estimation",
        "Collider conditioning blocks all confounding",
        "It transforms the model into a Random Intercept model"
      ],
      "options_es": [
        "¡Condicionar en un colisionador abre un camino espurio no causal entre X e Y, generando una correlación negativa artificial entre talento y carisma entre los actores famosos!",
        "Elimina toda la varianza residual y perfecciona la inferencia causal",
        "Condicionar en colisionadores neutraliza la confusión de puerta trasera",
        "Transforma automáticamente el modelo en uno de interceptos aleatorios"
      ],
      "explanation_en": "Berkson's collider bias! Unlike confounders (which must be conditioned on), conditioning on a common effect (collider) ACTIVATES spurious bias.",
      "explanation_es": "¡Sesgo de colisionador de Berkson! A diferencia de los confusores (que deben controlarse), condicionar en un efecto común (colisionador) ACTIVA correlaciones espurias."
    },
    {
      "id": "l22_ex3",
      "category": "Concept",
      "title": "Oefening 3: Kernel Mean Embeddings in Hilbertruimten (ℋ)",
      "question": "Waarom embedden moderne statistici kansverdelingen in Reproducing Kernel Hilbert Spaces (RKHS ℋ)?",
      "options": [
        "Omdat causaliteit alleen gedefinieerd kan worden op eindige Euclidesche vectorruimten",
        "Om data te comprimeren naar discrete gehele getallen voor snellere OLS-berekeningen",
        "Omdat Hilbertruimten de noodzaak voor p-waarden en betrouwbaarheidsintervallen overbodig maken",
        "Het transformeert complexe, oneindig-dimensionale kansverdelingen naar afzonderlijke punten (vectoren) in een Hilbertruimte, waardoor je niet-lineaire afstanden (zoals Maximum Mean Discrepancy MMD) simpel met inproducten kunt berekenen zonder dichtheidsschatting"
      ],
      "correctIndex": 3,
      "explanation": "Statistische magie op topniveau! Door een complete kansverdeling P af te beelden op een enkel element μ_P in een Hilbertruimte, kun je verdelingen met elkaar vergelijken en tweesteekproeftoetsen uitvoeren zonder aannames over hun parametrische vorm.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 3: Kernel Mean Embeddings in Hilbert Spaces (ℋ)",
      "title_es": "Ejercicio 3: Incrustación de Medias en Espacios de Hilbert (ℋ)",
      "question_en": "Why do modern mathematical statisticians embed probability distributions into Reproducing Kernel Hilbert Spaces (RKHS): μ_P = E_P[k(·, X)] ∈ ℋ?",
      "question_es": "¿Por qué los estadísticos modernos incrustan distribuciones de probabilidad en Espacios de Hilbert (RKHS): μ_P = E_P[k(·, X)] ∈ ℋ?",
      "options_en": [
        "To compress data tables into small text files",
        "Because when the kernel is characteristic (like Gaussian RBF), the mapping P ↦ μ_P is strictly injective; all moments and non-linear properties of the distribution are preserved as a single geometric vector in Hilbert space ℋ",
        "Because Hilbert spaces forbid non-linear transformations",
        "To force all causal graphs to be linear"
      ],
      "options_es": [
        "Para comprimir tablas de datos en archivos pequeños de texto",
        "Porque cuando el kernel es característico (como el RBF gaussiano), la aplicación P ↦ μ_P es estrictamente inyectiva; todos los momentos y propiedades no lineales se preservan como un vector geométrico en el espacio de Hilbert ℋ",
        "Porque los espacios de Hilbert prohíben transformaciones no lineales",
        "Para obligar a que todos los grafos causales sean lineales"
      ],
      "explanation_en": "Ultimate statistical mathematics! Kernel embeddings allow non-parametric two-sample testing (Maximum Mean Discrepancy) and causal discovery without parametric assumptions.",
      "explanation_es": "¡Cúspide de la matemática estadística! La incrustación en RKHS permite contrastes no paramétricos universales (MMD) y descubrimiento causal sin supuestos distribucionales."
    }
  ],
  "23": [
    {
      "id": "l23_ex1",
      "category": "Concept",
      "title": "Oefening 1: Wat betekent dX_t = μ dt + σ dB_t?",
      "question": "Wat representeren de twee termen aan de rechterkant van een klassieke Stochastische Differentiële Vergelijking?",
      "options": [
        "μ dt is de residuele meetfout en σ dB_t is de deterministische trendlijn",
        "μ dt is de deterministische drift (de verwachte richting en snelheid over tijd); σ dB_t is de stochastische diffusie (de continue willekeurige fluctuaties gedreven door Brownse beweging)",
        "Het is een discrete AR(1) tijdreeksvergelijking die alleen geldig is bij teltijdstippen",
        "Beide termen representeren gewone Newtoniaanse snelheden die differentieerbaar zijn naar de tijd"
      ],
      "correctIndex": 1,
      "explanation": "Juist! Drift μ dt stuurt het systeem gemiddeld een bepaalde kant op; diffusie σ dB_t voegt continue, niet-differentieerbare Gaussische ruis toe.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: Meaning of dX_t = μ dt + σ dB_t",
      "title_es": "Ejercicio 1: Significado de dX_t = μ dt + σ dB_t",
      "question_en": "In the Stochastic Differential Equation dX_t = μ(X_t) dt + σ(X_t) dB_t, what physical roles do the two terms play?",
      "question_es": "En la Ecuación Diferencial Estocástica dX_t = μ(X_t) dt + σ(X_t) dB_t, ¿qué papeles físicos desempeñan ambos términos?",
      "options_en": [
        "μ dt is deterministic directional drift (gradient flow); σ dB_t is stochastic Brownian diffusion representing continuous microscopic random shocks",
        "Both terms represent deterministic velocity",
        "μ dt is white noise and σ dB_t is potential energy",
        "dB_t is the ordinary derivative of time"
      ],
      "options_es": [
        "μ dt es la deriva determinista direccional (flujo de gradiente); σ dB_t es la difusión estocástica browniana que modela perturbaciones microscópicas continuas",
        "Ambos términos representan velocidad determinista pura",
        "μ dt es ruido blanco y σ dB_t es energía potencial",
        "dB_t es la derivada clásica del tiempo"
      ],
      "explanation_en": "Exact! An SDE unifies deterministic physics (drift) with stochastic continuous noise (Brownian motion diffusion).",
      "explanation_es": "¡Exacto! Una SDE unifica la física determinista (deriva) con el azar estocástico continuo (difusión browniana)."
    },
    {
      "id": "l23_ex2",
      "category": "Berekening",
      "title": "Oefening 2: Het Geheim van Itô's Lemma",
      "question": "Waarom heeft de stochastische kettingregel (Itô's Lemma) df(X_t) = f'(X_t) dX_t + ½ f''(X_t) σ² dt een extra term met de TWEEDE afgeleide, die in de klassieke schoolcalculus ontbreekt?",
      "options": [
        "Omdat Itô een wiskundige correctie moest toevoegen voor de afronding van continue tijdstappen",
        "Omdat de verwachtingswaarde van Brownse beweging E[B_t] kwadratisch toeneemt met de tijd",
        "Omdat de kwadratische variatie van een Brownse beweging niet nul is: (dB_t)² = dt. De fluctuaties zijn zo oneindig grillig dat tweede-orde termen in de Taylor-expansie niet verdwijnen in de limiet!",
        "Omdat stochastische integralen uitsluitend gedefinieerd kunnen worden op convexe functies"
      ],
      "correctIndex": 2,
      "explanation": "Fenomenaal diep inzicht! In gewone calculus is (dt)² verwaarloosbaar klein. Maar voor Brownse beweging is de kwadratische variatie (dB_t)² = dt van dezelfde orde als dt, waardoor de tweede afgeleide overleeft.",
      "category_en": "Calculation",
      "category_es": "Cálculo",
      "title_en": "Exercise 2: The Secret of Itô's Lemma",
      "title_es": "Ejercicio 2: El Secreto del Lema de Itô",
      "question_en": "Why does the stochastic chain rule df(X_t) = f'(X_t)dX_t + ½ f''(X_t)(dX_t)² retain the second derivative, whereas ordinary calculus discards it as negligible?",
      "question_es": "¿Por qué la regla de la cadena estocástica df(X_t) = f'(X_t)dX_t + ½ f''(X_t)(dX_t)² conserva la segunda derivada, mientras el cálculo clásico la descarta por infinitesimal?",
      "options_en": [
        "Because computers need second derivatives for matrix inversion",
        "Because Brownian motion has non-zero quadratic variation: (dB_t)² = dt. Since (dB_t)² is first-order in dt, ½ f''(X) σ² dt does not vanish in the continuous limit!",
        "Because f(X) is non-differentiable",
        "Because Itô calculus only works on quadratic polynomials"
      ],
      "options_es": [
        "Porque los ordenadores requieren segundas derivadas para invertir matrices",
        "Porque el movimiento browniano posee variación cuadrática no nula: (dB_t)² = dt. Al ser (dB_t)² de primer orden en dt, ¡½ f''(X) σ² dt no se desvanece en el límite infinitesimal!",
        "Porque f(X) no es diferenciable",
        "Porque el cálculo de Itô solo es aplicable a polinomios cuadráticos"
      ],
      "explanation_en": "The foundation of stochastic analysis! Brownian motion trajectories are fractal: increments scale with √dt, so their square (dt) contributes directly to drift.",
      "explanation_es": "¡El pilar del análisis estocástico! Las trayectorias brownianas son fractales: sus incrementos escalan con √dt, por lo que su cuadrado (dt) contribuye a la deriva."
    },
    {
      "id": "l23_ex3",
      "category": "Concept",
      "title": "Oefening 3: Itô vs Stratonovich Integratie",
      "question": "Wat is het fundamentele conceptuele en wiskundige verschil tussen een Itô-integraal en een Stratonovich-integraal?",
      "options": [
        "Stratonovich werkt uitsluitend in 2 dimensies terwijl Itô oneindig-dimensionaal is",
        "Er is geen enkel wiskundig verschil; beide definities leveren identieke padtrajecten op",
        "Itô is alleen gedefinieerd voor stationaire processen, terwijl Stratonovich alleen werkt voor discrete sprongen",
        "Stratonovich evalueert de integrand in het midden van het tijdsinterval [t, t+dt] waardoor de gewone kettingregel behouden blijft; Itô evalueert aan het begin (non-anticipating) waardoor de integraal een martingaal is zonder toekomstvoorkennis"
      ],
      "correctIndex": 3,
      "explanation": "Exact! Itô kijkt niet vooruit (non-anticipating), wat cruciaal is in financiën en statistische schatting omdat het de martingaaleigenschap behoudt. Stratonovich gehoorzaamt de gewone kettingregel en geniet de voorkeur in de fysica.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 3: Itô vs Stratonovich Integration",
      "title_es": "Ejercicio 3: Integración de Itô frente a Stratonovich",
      "question_en": "What is the key difference between Itô integration (evaluating integrand at left endpoint t_i) and Stratonovich integration (evaluating at midpoint (t_i + t_{i+1})/2)?",
      "question_es": "¿Cuál es la diferencia clave entre la integral de Itô (evaluada en el extremo izquierdo t_i) y la de Stratonovich (evaluada en el punto medio (t_i + t_{i+1})/2)?",
      "options_en": [
        "Itô integrals are martingales with zero expectation (vital for finance/filtration) but alter the chain rule; Stratonovich preserves ordinary Leibniz chain rules but introduces drift",
        "Stratonovich is only for discrete numbers and Itô for continuous",
        "Itô integration cannot be computed numerically",
        "Both integrals produce identical numerical results"
      ],
      "options_es": [
        "La integral de Itô es una martingala con esperanza cero (esencial en finanzas y filtraciones) pero altera la regla de la cadena; Stratonovich preserva la regla clásica de Leibniz pero introduce deriva estocástica",
        "Stratonovich solo opera con enteros y Itô con números continuos",
        "La integral de Itô no puede simularse numéricamente",
        "Ambas integrales arrojan idénticos resultados muestrales"
      ],
      "explanation_en": "Mathematical elegance! Itô maintains non-anticipating martingales (fundamental in finance). Stratonovich preserves geometric chain rules on smooth manifolds.",
      "explanation_es": "¡Elegancia matemática pura! Itô preserva la propiedad de martingala no anticipativa (crucial en finanzas). Stratonovich conserva la regla de la cadena en variedades diferenciables."
    }
  ],
  "24": [
    {
      "id": "l24_ex1",
      "category": "Concept",
      "title": "Oefening 1: De Geometrie van ∇_ℳ Φ op een Manifold",
      "question": "In de apex-formule dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ: wat betekent het dat de driftgradiënt gedefinieerd is op een Riemannse manifold ℳ?",
      "options": [
        "Dat de gradiënt altijd gelijk moet zijn aan nul om convergentie naar een zadelpunt te forceren",
        "Dat de stochastische diffusie alleen kan bewegen langs de coördinaatassen van de Euclidische ruimte",
        "Dat de toestand X_t uitsluitend discrete waarden kan aannemen op de knooppunten van een graaf",
        "Data leeft niet in een vlakke Euclidische ruimte, maar op een gekromde variëteit (bv. een bol, torus of informatiemeetkundig landschap); de gradiënt ∇_ℳ buigt via de metrische tensor g_ij mee met de kromming van de ruimte langs geodeten"
      ],
      "correctIndex": 3,
      "explanation": "Meesterlijk! Echte complexe systemen (hersengolven, biochemische vouwing, relativistische ruimtetijd) leven op gekromde oppervlakken. De Riemannse gradiënt respecteert de intrinsieke kromming van de data.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 1: Geometry of ∇_ℳ Φ on a Riemannian Manifold",
      "title_es": "Ejercicio 1: Geometría de ∇_ℳ Φ en una Variedad Riemanniana",
      "question_en": "In the apex equation dX_t = -∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ, why can standard Euclidean gradient vectors not be used on a curved manifold ℳ?",
      "question_es": "En la ecuación apex dX_t = -∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough en ℋ, ¿por qué no se pueden usar gradientes euclidianos clásicos sobre una variedad curva ℳ?",
      "options_en": [
        "Euclidean gradients do not account for metric tensor g_ij; on a curved manifold, directional steepest descent requires the Levi-Civita Riemannian gradient: ∇_ℳ Φ = g^{ij} (∂Φ/∂x^j) ∂/∂x^i",
        "Because manifolds have zero dimension",
        "Because curvature eliminates all potential energy",
        "Euclidean gradients only operate in one dimension"
      ],
      "options_es": [
        "Los gradientes euclidianos ignoran el tensor métrico g_ij; sobre variedades curvadas, el descenso más pronunciado exige el gradiente riemanniano de Levi-Civita: ∇_ℳ Φ = g^{ij} (∂Φ/∂x^j) ∂/∂x^i",
        "Porque las variedades carecen de dimensión matemática",
        "Porque la curvatura extingue toda la energía potencial",
        "Porque los gradientes euclidianos solo existen en una dimensión"
      ],
      "explanation_en": "Apex differential geometry! Steepest descent on curved spaces must be evaluated through the Riemannian metric tensor g, respecting intrinsic curvature.",
      "explanation_es": "¡Geometría diferencial de nivel apex! El descenso más rápido en espacios curvados debe computarse mediante el tensor métrico riemanniano g, respetando la curvatura intrínseca."
    },
    {
      "id": "l24_ex2",
      "category": "Concept",
      "title": "Oefening 2: Terry Lyons' Rough Path Theorie (H < 1/2)",
      "question": "Waarom faalt klassieke Itô calculus wanneer het stochastische pad extreem ruw is (Hurst exponent H < 1/2), en hoe lost Terry Lyons' theorie van 'Rough Paths' dit op?",
      "options": [
        "Omdat paden met H < 1/2 te glad zijn om een tweede afgeleide te bezitten",
        "Bij H < 1/2 divergeert de klassieke kwadratische variatie en is de Itô integraal niet continu in de p-variatie topologie; Terry Lyons breidde het pad uit met 'Signatures' (geïtereerde integralen over tensorruimten) waardoor stochastische differentiaalvergelijkingen weer continu en robuust oplosbaar worden",
        "Terry Lyons verving alle stochastische termen door een deterministische Fourier-reeks",
        "Omdat fractional Brownian motion met H < 1/2 een stationair nulpunt dwingt in de Malliavin matrix"
      ],
      "correctIndex": 1,
      "explanation": "Pinnacle van moderne wiskunde! Terry Lyons ontdekte dat ruwe paden (p > 2) niet als losse coördinaten gezien moeten worden, maar vergezeld moeten worden van hun oppervlakte-integralen (signatures). Dit maakte Lyons wereldberoemd.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 2: Terry Lyons' Rough Path Theory (H < 1/2)",
      "title_es": "Ejercicio 2: Teoría de Trayectorias Rugosas de Terry Lyons (H < 1/2)",
      "question_en": "Why does classical stochastic calculus collapse when driving noise has Hurst roughness H < 1/2, and how did Terry Lyons resolve it with Signatures?",
      "question_es": "¿Por qué colapsa el cálculo estocástico clásico cuando el ruido tiene rugosidad de Hurst H < 1/2 y cómo lo resolvió Terry Lyons con Signaturas?",
      "options_en": [
        "For H < 1/2, p-variation index exceeds p > 2; paths cease to be semimartingales and the Itô integral loses continuity. Terry Lyons enriched paths with iterated tensor integrals (Rough Path Signatures), restoring deterministic continuity",
        "Because fractional Brownian motion loses continuity at H = 1/2",
        "Terry Lyons proved that noise disappears when H < 1/2",
        "Because p-variation cannot be computed for non-integer exponents"
      ],
      "options_es": [
        "Para H < 1/2, la p-variación supera p > 2; las trayectorias dejan de ser semimartingalas y la aplicación de Itô pierde continuidad. Terry Lyons enriqueció los caminos con integrales tensoriales iteradas (Signaturas), restaurando la continuidad determinista",
        "Porque el movimiento browniano fraccionario pierde continuidad en H = 1/2",
        "Terry Lyons demostró que el ruido desaparece cuando H < 1/2",
        "Porque la p-variación no puede computarse con exponentes no enteros"
      ],
      "explanation_en": "The pinnacle of modern stochastic analysis! Terry Lyons proved that augmenting rough trajectories with tensor signatures renders differential equation solutions continuous.",
      "explanation_es": "¡La cumbre del análisis estocástico moderno! Terry Lyons demostró que enriquecer caminos rugosos con signaturas tensoriales hace continua la solución de ecuaciones diferenciales."
    },
    {
      "id": "l24_ex3",
      "category": "Concept",
      "title": "Oefening 3: De Oneindig-Dimensionale Hilbertruimte ℋ",
      "question": "Wat betekent het dat de toestand X_t leeft in een oneindig-dimensionale Hilbertruimte ℋ?",
      "options": [
        "X_t is geen los getal of eindige tabelrij meer, maar een complete continue functie of oneindig veld (bv. het continue elektrochemische potentiaalveld over de gehele hersenschors) waarin afstanden worden gemeten via een inproduct ⟨f, g⟩_ℋ",
        "Dat de variantie van het systeem over alle frequentiebanden divergeert naar oneindig",
        "Dat de toestand X_t divergeert naar oneindige kinetische energie en niet langer genormaliseerd kan worden via een L²-norm",
        "Dat de responsvariabele uitsluitend imaginaire getallen kan bevatten in het Fourierdomein"
      ],
      "correctIndex": 0,
      "explanation": "Pure grootsheid! In Hilbertruimten representeert één enkel punt X_t een gehele functie (zoals een continu neuraal activiteitsveld of een kwantumgolfvergelijking). Je modelleert velden in plaats van losse getallen.",
      "category_en": "Concept",
      "category_es": "Concepto",
      "title_en": "Exercise 3: The Infinite-Dimensional Hilbert Space ℋ",
      "title_es": "Ejercicio 3: El Espacio de Hilbert ℋ de Dimensión Infinita",
      "question_en": "What does it mean that system state X_t lives in an infinite-dimensional Reproducing Kernel Hilbert Space ℋ?",
      "question_es": "¿Qué implica que el estado del sistema X_t resida en un Espacio de Hilbert con Núcleo Reproducible (RKHS) ℋ de dimensión infinita?",
      "options_en": [
        "At every instant t, the state is not a single finite number or vector, but an entire continuous function or probability distribution embedded into a complete inner-product space ℋ",
        "The model has an infinite number of training parameters that cannot be computed",
        "The dataset contains infinite rows",
        "The probability of the model is zero"
      ],
      "options_es": [
        "En cada instante t, el estado no es un escalar o vector finito, sino una función continua completa o distribución de probabilidad incrustada en un espacio dotado de producto interno ℋ",
        "Que el modelo tiene infinitos parámetros de entrenamiento incalculables",
        "Que la base de datos contiene infinitas filas",
        "Que la verosimilitud del modelo es nula"
      ],
      "explanation_en": "Sublime apex mastery! In infinite-dimensional Hilbert spaces, states evolve as functional fields, uniting stochastic paths with non-parametric operator theory.",
      "explanation_es": "¡Maestría cumbre sublime! En espacios de Hilbert de dimensión infinita, los estados evolucionan como campos funcionales continuos, uniendo SDEs con teoría de operadores."
    },
    {
      "id": "l24_ex4",
      "category": "Dilemma",
      "title": "Oefening 4: Het Causale Synthese Dilemma",
      "question": "Waarom is het verenigen van causale inferentie (do-calculus) met dit oneindig-dimensionale stochastische manifold-veld de ultieme heilige graal voor wetenschap en geneeskunde?",
      "options": [
        "Omdat causale operatoren alle stochastische fluctuaties wiskundig reduceren tot lineaire deterministische banen",
        "Omdat louter voorspellen hoe het veld autonoom evolueert niet vertelt hoe je het systeem moet aansturen; causale Hilbert-inferentie modelleert exact hoe actieve externe manipulatie (bv. gerichte diepe hersenstimulatie of klimaatinterventie) de attractorlandschappen herprogrammeert",
        "Omdat do-interventies de dimensie van de Hilbertruimte altijd reduceren tot N = 1",
        "Omdat hiermee statistische steekproeven overbodig worden gemaakt in klinisch onderzoek"
      ],
      "correctIndex": 1,
      "explanation": "Het Ultieme Apex Meesterschap! Weten hoe het veld stroomt is passieve observatie. Begrijpen hoe een gerichte ingreep do(X) het veld en de attractors fundamenteel transformeert, is de ultieme macht van de causale stochastische wetenschap. Gefeliciteerd met het bereiken van de absolute top!",
      "category_en": "Dilemma",
      "category_es": "Dilema",
      "title_en": "Exercise 4: The Causal Synthesis Dilemma",
      "title_es": "Ejercicio 4: El Dilema de la Síntesis Causal",
      "question_en": "Why is unifying causal inference (do-calculus) with non-parametric Bayesian SDEs on manifolds the ultimate frontier of modern artificial intelligence and statistical science?",
      "question_es": "¿Por qué unificar la inferencia causal (do-cálculo) con SDEs bayesianas no paramétricas sobre variedades es la frontera definitiva de la inteligencia artificial y la estadística?",
      "options_en": [
        "Because it bridges passive correlation with active interventional physics: models can reason about counterfactual 'what-if' interventions in complex continuous, non-linear dynamical systems without parametric constraints",
        "Because it replaces computers with quantum mechanics",
        "Because it proves that all p-values are equal to zero",
        "Because it eliminates the need for experimental data"
      ],
      "options_es": [
        "Porque une la correlación pasiva con la física intervencional activa: permite razonar sobre contrafácticos ('qué pasaría si...') en sistemas dinámicos continuos y no lineales sin restricciones paramétricas",
        "Porque sustituye los ordenadores por mecánica cuántica",
        "Porque demuestra que todos los valores p son iguales a cero",
        "Porque prescinde de la necesidad de datos empíricos"
      ],
      "explanation_en": "The Grand Unified Apex! Blending Pearl's causal interventions with continuous stochastic manifold geometry empowers true scientific intelligence: predicting the consequences of action in an uncertain, non-linear universe.",
      "explanation_es": "¡El Cenit Unificado Definitivo! Fundir intervenciones causales de Pearl con geometría estocástica continua sobre variedades permite la verdadera inteligencia científica: predecir los efectos de la acción en un universo no lineal e incierto."
    }
  ]
};
