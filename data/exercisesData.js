// Statistiek Leerplatform - Uitgebreide Oefeningenbank (Levels 1 t/m 24)
// Meertalige didactische oefeningenbank met volledige ondersteuning voor Nederlands, Engels, Spaans en Duits.
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
      "title_en": "Exercise 1: Measures of Central Tendency & Skewness",
      "question_en": "In a national income survey, the mean income is €42,000 per year, while the median income is €31,000 per year. What does this immediately indicate regarding the shape of the income distribution?",
      "options_en": [
        "The distribution is right-skewed (positively skewed): a small group of high earners pulls the mean upward",
        "The distribution is left-skewed (negatively skewed): the vast majority earns more than the mean",
        "The income distribution is perfectly symmetric around €36,500",
        "The distribution is bimodal with identical peaks at €31,000 and €42,000"
      ],
      "explanation_en": "Correct! When Mean > Median, extreme high values (top incomes) drag the arithmetic mean to the right. The median reflects the true middle citizen.",
      "title_es": "Ejercicio 1: Medidas de Tendencia Central y Asimetría",
      "question_es": "En una encuesta nacional de ingresos, el ingreso medio anual es de 42.000 €, mientras que el ingreso mediano es de 31.000 €. ¿Qué indica esto de inmediato sobre la forma de la distribución de ingresos?",
      "options_es": [
        "La distribución es asimétrica a la derecha (positiva): un reducido grupo de ingresos muy altos eleva la media",
        "La distribución es asimétrica a la izquierda (negativa): la gran mayoría percibe más que la media",
        "La distribución de ingresos es perfectamente simétrica alrededor de 36.500 €",
        "La distribución es bimodal con picos idénticos en 31.000 € y 42.000 €"
      ],
      "explanation_es": "¡Correcto! Cuando Media > Mediana, los valores atípicos elevados arrastran la media hacia la derecha. La mediana representa al ciudadano intermedio real.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Lagemaße & Schiefe",
      "question_de": "In einer nationalen Einkommensumfrage beträgt das durchschnittliche Einkommen 42.000 € pro Jahr, während das Medianeinkommen bei 31.000 € liegt. Was sagt dies unmittelbar über die Form der Einkommensverteilung aus?",
      "options_de": [
        "Die Verteilung ist rechtsschief (positiv schief): Eine kleine Gruppe von Spitzenverdienern zieht das arithmetische Mittel nach oben",
        "Die Verteilung ist linksschief (negativ schief): Die überwiegende Mehrheit verdient mehr als den Durchschnitt",
        "Die Einkommensverteilung ist perfekt symmetrisch um 36.500 €",
        "Die Verteilung ist bimodal mit identischen Spitzen bei 31.000 € und 42.000 €"
      ],
      "explanation_de": "Richtig! Wenn Mittelwert > Median gilt, ziehen extreme Ausreißer nach oben (Spitzengehälter) das arithmetische Mittel nach rechts. Der Median spiegelt den echten mittleren Bürger wider."
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
      "title_en": "Exercise 2: Practical Dilemma at an E-Commerce Platform",
      "question_en": "You measure load times of a mobile app. For 90% of users, the page loads in 0.5 seconds. For 10% of users with degraded connections, it takes 25 seconds. The marketing VP wants to publish 'our average load time of 2.95 seconds' in a press release. What do you advise?",
      "options_en": [
        "Report solely standard deviation (SD = 7.35s) because dispersion matters more than central location for internet services",
        "Agree: the arithmetic mean of 2.95s integrates all experiences into a single unbiased expectation value",
        "Calculate a 10% trimmed mean by dropping the slowest 10%, because those measurements should be treated as random connection failures",
        "Disagree: report both the median (0.5s) and the 95th percentile (p95 = 25s). The mean reflects neither the typical user nor the worst-hit group"
      ],
      "explanation_en": "Excellent decision! In latency measurements, the mean is misleading. Always report median (typical user) alongside p95/p99 (tail latency).",
      "title_es": "Ejercicio 2: Dilema Práctico en una Plataforma de Comercio Electrónico",
      "question_es": "Mides los tiempos de carga de una app móvil. Para el 90% de usuarios la página carga en 0,5 segundos. Para el 10% restante con mala conexión tarda 25 segundos. El director de marketing desea publicar 'el tiempo medio de carga de 2,95 segundos' en prensa. ¿Qué recomiendas?",
      "options_es": [
        "Reportar únicamente la desviación estándar (SD = 7,35 s) porque la dispersión importa más que la localización central en servicios web",
        "De acuerdo: la media aritmética de 2,95 s integra todas las experiencias en un valor esperado insesgado único",
        "Calcular una media recortada al 10% excluyendo el 10% más lento como fallos aleatorios de conexión",
        "En desacuerdo: informa la mediana (0,5 s) y el percentil 95 (p95 = 25 s). La media no describe al usuario típico ni refleja al grupo más perjudicado"
      ],
      "explanation_es": "¡Excelente decisión! En latencias el promedio es engañoso. Se debe informar siempre la mediana (experiencia típica) junto al percentil 95 o 99 (latencia de cola).",
      "category_de": "Dilemma",
      "title_de": "Übung 2: Praxisdilemma bei einer E-Commerce-Plattform",
      "question_de": "Du misst die Ladezeiten einer mobilen App. Bei 90% der Nutzer lädt die Seite in 0,5 Sekunden. Bei 10% der Nutzer mit schlechter Verbindung dauert es 25 Sekunden. Der Marketingleiter möchte 'die durchschnittliche Ladezeit von 2,95 Sekunden' in einer Pressemitteilung veröffentlichen. Was rätst du?",
      "options_de": [
        "Berichte ausschließlich die Standardabweichung (SD = 7,35 s), da Streuung wichtiger ist als Lage bei Internetdiensten",
        "Zustimmen: Das arithmetische Mittel von 2,95 s integriert alle Erfahrungen in einen einzigen unverzerrten Erwartungswert",
        "Berechne ein 10% getrimmtes Mittel, indem die langsamsten 10% als zufällige Verbindungsfehler verworfen werden",
        "Nicht zustimmen: Berichte sowohl den Median (0,5 s) als auch das 95. Perzentil (p95 = 25 s). Der Mittelwert beschreibt weder den typischen Nutzer noch die Schwere der Tail-Latenz"
      ],
      "explanation_de": "Hervorragende Entscheidung! Bei Latenzmessungen ist der Mittelwert irreführend. Man berichtet stets den Median (typischer Nutzer) zusammen mit p95 oder p99 (Tail-Latenz)."
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
      "title_en": "Exercise 3: The Dispersion Pitfall Detector",
      "question_en": "Why is the Interquartile Range (IQR = Q3 - Q1) far more reliable than the Range (Max - Min) for data prone to measurement errors?",
      "options_en": [
        "Because the Range depends entirely on the two most extreme observations and explodes from a single typo or outlier, whereas the IQR covers the clean middle 50% of the data",
        "Because the IQR can only be calculated for perfectly symmetric normal distributions",
        "Because the Range asymptotically converges to standard deviation in larger samples, whereas the IQR remains independent",
        "Because the IQR is a parametric test that compensates for outlier variance via Bessel's correction"
      ],
      "explanation_en": "Spot-on! A single corrupt entry (e.g., age 999 instead of 99) completely ruins the Range and SD, but leaves the IQR unaffected.",
      "title_es": "Ejercicio 3: El Detector de Trampas en Dispersión",
      "question_es": "¿Por qué el Rango Intercuartílico (IQR = Q3 - Q1) es mucho más fiable que el Rango Total (Máx - Mín) ante posibles errores de medida?",
      "options_es": [
        "Porque el Rango Total depende exclusivamente de los dos valores más extremos y explota ante un solo error tipográfico, mientras que el IQR abarca el 50% central de los datos",
        "Porque el IQR solo puede calcularse en distribuciones normales perfectamente simétricas",
        "Porque el Rango converge asintóticamente a la desviación estándar en muestras grandes, mientras que el IQR permanece independiente",
        "Porque el IQR es una prueba paramétrica que compensa la varianza de atípicos mediante la corrección de Bessel"
      ],
      "explanation_es": "¡Exacto! Una sola entrada errónea arruina por completo el Rango y la desviación estándar, pero no afecta al IQR.",
      "category_de": "Fallstrick",
      "title_de": "Übung 3: Der Streuungs-Fallstrick-Detektor",
      "question_de": "Warum ist der Interquartilsabstand (IQR = Q3 - Q1) bei Daten mit potenziellen Messfehlern weitaus robuster als die Spannweite (Range = Max - Min)?",
      "options_de": [
        "Weil die Spannweite ausschließlich von den beiden extremsten Beobachtungen abhängt und bei einem einzigen Tippfehler explodiert, während der IQR die sauberen mittleren 50% der Daten umfasst",
        "Weil der IQR nur bei perfekt symmetrischen Normalverteilungen berechnet werden kann",
        "Weil die Spannweite bei größeren Stichproben asymptotisch gegen die Standardabweichung konvergiert, während der IQR unabhängig bleibt",
        "Weil der IQR ein parametrischer Test ist, der die Ausreißervarianz über Bessels Korrektur kompensiert"
      ],
      "explanation_de": "Volltreffer! Ein einziger fehlerhafter Eintrag ruiniert die Spannweite und Standardabweichung völlig, lässt den IQR jedoch unberührt."
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
      "title_en": "Exercise 1: Z-Score Calculation & Position",
      "question_en": "An exam score follows a normal distribution with μ = 70 and σ = 10. A student scores 90 points. What is this student's Z-score and what percentage of students score lower?",
      "options_en": [
        "Z = +2.0, exactly 95.4% score lower (according to the two-sided 2-sigma rule)",
        "Z = +2.0, approximately 97.7% score lower (only 2.3% score higher in the right tail)",
        "Z = +1.96, exactly 95.0% of all students score lower",
        "Z = +1.0, approximately 84.1% of students score lower"
      ],
      "explanation_en": "Exact! Z = (90 - 70) / 10 = +2.0. Within ±2 SD lies 95.4% of the distribution. The two tails contain 4.6% (2.3% left and 2.3% right). Thus, below Z = +2.0 scores 100% - 2.3% = 97.7%.",
      "title_es": "Ejercicio 1: Cálculo de Puntuación Z y Posición",
      "question_es": "Una calificación sigue una distribución normal con μ = 70 y σ = 10. Un estudiante obtiene 90 puntos. ¿Cuál es la puntuación Z de este estudiante y qué porcentaje de estudiantes puntúa por debajo?",
      "options_es": [
        "Z = +2,0; exactamente el 95,4% puntúa por debajo (según la regla bilateral 2-sigma)",
        "Z = +2,0; aproximadamente el 97,7% puntúa por debajo (solo el 2,3% puntúa aún más alto en la cola derecha)",
        "Z = +1,96; exactamente el 95,0% de todos los estudiantes puntúa por debajo",
        "Z = +1,0; aproximadamente el 84,1% de los estudiantes puntúa por debajo"
      ],
      "explanation_es": "¡Exacto! Z = (90 - 70) / 10 = +2,0. Dentro de ±2 SD se encuentra el 95,4% de la distribución. En las dos colas queda el 4,6% (2,3% izquierda y 2,3% derecha). Por tanto, por debajo de Z = +2,0 puntúa el 100% - 2,3% = 97,7%.",
      "category_de": "Berechnung",
      "title_de": "Übung 1: Z-Score-Berechnung & Position",
      "question_de": "Ein Testergebnis folgt einer Normalverteilung mit μ = 70 und σ = 10. Ein Student erzielt 90 Punkte. Was ist der Z-Score dieses Studenten und welcher Prozentsatz der Studenten schneidet schlechter ab?",
      "options_de": [
        "Z = +2,0; genau 95,4% schneiden schlechter ab (nach der zweiseitigen 2-Sigma-Regel)",
        "Z = +2,0; etwa 97,7% schneiden schlechter ab (nur 2,3% schneiden im rechten Ausläufer noch besser ab)",
        "Z = +1,96; genau 95,0% aller Studenten schneiden schlechter ab",
        "Z = +1,0; etwa 84,1% der Studenten schneiden schlechter ab"
      ],
      "explanation_de": "Exakt! Z = (90 - 70) / 10 = +2,0. Binnen ±2 SD liegen 95,4% der Verteilung. In den zwei Tails verbleiben 4,6% (2,3% links und 2,3% rechts). Unter Z = +2,0 liegen also 100% - 2,3% = 97,7%."
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
      "title_en": "Exercise 2: The Normality Assumption Pitfall",
      "question_en": "Can you apply the 68-95-99.7 empirical rule to user follower counts on social media (Twitter/X)?",
      "options_en": [
        "Yes, as long as sample size N exceeds 30, because the Central Limit Theorem forces the population distribution to be normal",
        "Yes, provided you standardize Z-scores using the median instead of the arithmetic mean",
        "No! Follower counts follow a power-law / heavily skewed Pareto distribution (few accounts have millions, most have <100). The normal distribution is completely inappropriate here",
        "Yes, because follower count is a sum of independent binary decisions and therefore approximates a Gaussian bell curve"
      ],
      "explanation_en": "Spot-on! The normal distribution must never be blindly assumed. Many real-world datasets (followers, income, web traffic) follow heavy power laws.",
      "title_es": "Ejercicio 2: La Trampa del Supuesto de Normalidad",
      "question_es": "¿Se puede aplicar la regla empírica 68-95-99.7 al recuento de seguidores de cuentas en Twitter/X?",
      "options_es": [
        "Sí, siempre que el tamaño muestral N supere 30, porque el Teorema del Límite Central normaliza la distribución poblacional",
        "Sí, siempre que se estandaricen las puntuaciones Z con la mediana en lugar de la media aritmética",
        "¡No! El número de seguidores sigue una ley de potencias / distribución de Pareto muy asimétrica (pocas cuentas tienen millones, la mayoría <100). La distribución normal fracasa por completo",
        "Sí, porque el recuento de seguidores es suma de decisiones binarias independientes y aproxima una campana gaussiana"
      ],
      "explanation_es": "¡Totalmente acertado! Jamás se debe asumir normalidad a ciegas. Fenómenos reales como seguidores, riqueza o tráfico web siguen leyes de potencias con colas pesadas.",
      "category_de": "Fallstrick",
      "title_de": "Übung 2: Die Normalitäts-Annahme-Falle",
      "question_de": "Darf man die 68-95-99,7-Faustregel auf die Follower-Zahlen von Accounts auf Twitter/X anwenden?",
      "options_de": [
        "Ja, solange der Stichprobenumfang N > 30 ist, da der Zentrale Grenzwertsatz die Populationsverteilung normalisiert",
        "Ja, vorausgesetzt man standardisiert die Z-Scores mit dem Median anstelle des arithmetischen Mittels",
        "Nein! Followerzahlen folgen einer Potenzgesetz- / stark rechtsschiefen Pareto-Verteilung (wenige Accounts haben Millionen, die meisten <100). Die Normalverteilung verfehlt die Realität völlig",
        "Ja, weil die Followerzahl eine Summe unabhängiger binärer Entscheidungen ist und sich daher einer Gauß-Glocke annähert"
      ],
      "explanation_de": "Volltreffer! Die Normalverteilung darf man niemals blind voraussetzen. Viele reale Daten (Follower, Einkommen, Webtraffic) folgen extremen Potenzgesetzen (Power Laws)."
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
      "title_en": "Exercise 3: Factory Tolerance Limits",
      "question_en": "A production machine fills soda bottles with μ = 500 ml and σ = 5 ml. Bottles under 490 ml (below -2 SD) cannot legally be sold. What is the most effective way to structurally reduce the rejection rate without wasting product?",
      "options_en": [
        "Increase the fill mean to 510 ml to lift the left tail completely above 490 ml",
        "Improve the precision of the dispensing valve so process variation σ drops from 5 ml to 2.5 ml",
        "Apply a non-linear Box-Cox transformation to the fill measurements so the left tail shrinks mathematically",
        "Increase the quality measurement sample size to N = 10,000 to narrow tolerance limits"
      ],
      "explanation_en": "Brilliant insight into Six Sigma quality control! By reducing variance σ, the curve becomes narrower and steeper, pulling the tails safely inside tolerance boundaries.",
      "title_es": "Ejercicio 3: Límites de Tolerancia en Fábrica",
      "question_es": "Una máquina envasadora llena botellas con μ = 500 ml y σ = 5 ml. Las botellas por debajo de 490 ml (bajo -2 SD) no pueden comercializarse legalmente. ¿Cuál es la forma más efectiva de reducir el porcentaje de rechazo sin desperdiciar producto?",
      "options_es": [
        "Aumentar la media de llenado a 510 ml para elevar la cola izquierda completamente por encima de 490 ml",
        "Mejorar la precisión de la válvula de dosificación para que la dispersión del proceso σ baje de 5 ml a 2,5 ml",
        "Aplicar una transformación no lineal Box-Cox para contraer matemáticamente la cola izquierda",
        "Aumentar el tamaño muestral de control a N = 10.000 para estrechar los límites de tolerancia"
      ],
      "explanation_es": "¡Brillante visión de control de calidad Six Sigma! Al reducir la varianza σ, la curva se vuelve más estrecha y empinada, eliminando las colas fuera de los límites de tolerancia.",
      "category_de": "Dilemma",
      "title_de": "Übung 3: Fertigungstoleranzen in der Produktion",
      "question_de": "Eine Abfüllmaschine füllt Getränkeflaschen mit μ = 500 ml und σ = 5 ml. Flaschen unter 490 ml (unter -2 SD) dürfen gesetzlich nicht verkauft werden. Was ist der effektivste Weg, die Ausschussquote strukturell zu senken, ohne Produkt zu verschwenden?",
      "options_de": [
        "Den Abfüllmittelwert auf 510 ml erhöhen, um den linken Ausläufer vollständig über 490 ml zu heben",
        "Die Präzision des Dosierventils verbessern, sodass die Prozessstreuung σ von 5 ml auf 2,5 ml sinkt",
        "Eine nichtlineare Box-Cox-Transformation auf die Messdaten anwenden, damit der linke Ausläufer mathematisch schrumpft",
        "Die Stichprobe der Qualitätskontrolle auf N = 10.000 vergrößern, um die Toleranzgrenzen zu verengen"
      ],
      "explanation_de": "Brillante Einsicht in die Six-Sigma-Qualitätskontrolle! Durch Reduktion der Prozessstreuung σ wird die Glockenkurve schmaler und steiler, wodurch die Ausläufer innerhalb der Toleranzgrenzen verschwinden."
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
      "title_en": "Exercise 1: Behavior of the Sample Mean",
      "question_en": "We roll a fair die 100 times (each number 1 to 6 has probability 1/6; a perfectly flat/uniform distribution). What is the shape of the distribution of the MEAN of these 100 rolls if we repeat this experiment 1,000 times?",
      "options_en": [
        "A Cauchy distribution with heavy tails caused by erratic individual rolls",
        "A completely flat uniform distribution between 1 and 6, according to conservation of distribution shape",
        "A bell-shaped normal distribution centered around 3.5 with greatly reduced variance, thanks to the Central Limit Theorem",
        "A Poisson distribution with parameter λ = 3.5 because die faces are integers"
      ],
      "explanation_en": "Brilliant! The core miracle of the CLT: even though individual rolls are uniform, the average of 100 rolls forms a tight normal bell curve around μ = 3.5 with variance σ²/100.",
      "title_es": "Ejercicio 1: El Comportamiento de la Media Muestral",
      "question_es": "Lanzamos un dado equilibrado 100 veces (cada número del 1 al 6 tiene probabilidad 1/6; distribución uniforme plana). ¿Cuál es la forma de la distribución de la MEDIA de estas 100 tiradas al repetir el experimento 1.000 veces?",
      "options_es": [
        "Una distribución de Cauchy con colas pesadas por la irregularidad de las tiradas individuales",
        "Una distribución uniforme totalmente plana entre 1 y 6, según la conservación de forma de distribución",
        "Una distribución normal acampanada centrada en 3,5 con varianza muy reducida, gracias al Teorema del Límite Central",
        "Una distribución de Poisson con parámetro λ = 3,5 porque las caras del dado son números enteros"
      ],
      "explanation_es": "¡Brillante! El milagro del TLC: aunque cada tirada es uniforme, el promedio de 100 tiradas forma una campana normal estrecha en torno a μ = 3,5 con varianza σ²/100.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Das Verhalten des Stichprobenmittelwerts",
      "question_de": "Wir werfen 100-mal einen fairen Würfel (jede Zahl 1 bis 6 hat Wahrscheinlichkeit 1/6; perfekt flache Gleichverteilung). Welche Form hat die Verteilung des MITTELWERTS dieser 100 Würfe, wenn wir dieses Experiment 1.000-mal wiederholen?",
      "options_de": [
        "Eine Cauchy-Verteilung mit schweren Ausläufern aufgrund der Launenhaftigkeit einzelner Zufallswürfe",
        "Eine vollkommen flache Gleichverteilung zwischen 1 und 6 gemäß dem Gesetz der Formkonstanz",
        "Eine glockenförmige Normalverteilung zentriert um 3,5 mit stark verringerter Varianz, dank des Zentralen Grenzwertsatzes",
        "Eine Poisson-Verteilung mit Parameter λ = 3,5, da Würfelaugen ganze Zahlen sind"
      ],
      "explanation_de": "Brillant! Der Kern des Zentralen Grenzwertsatzes: Obwohl Einzelwürfe gleichverteilt sind, bildet der Durchschnitt aus 100 Würfen eine schmale Normalverteilung um μ = 3,5 mit Varianz σ²/100."
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
      "title_en": "Exercise 2: The CLT Misconception Pitfall",
      "question_en": "A junior researcher states: 'My patient data is heavily skewed. But because I have N = 500 patients, my data has automatically become normally distributed!' Why are they wrong?",
      "options_en": [
        "Because the CLT only states that the distribution of the SAMPLE STATISTIC (the mean) becomes normal; the underlying raw patient distribution remains exactly as skewed",
        "Because the CLT only applies to continuous variables that are already approximately symmetric",
        "Because the Central Limit Theorem only takes effect when N > 10,000 for asymmetric biological distributions",
        "Because the sample standard deviation s at N = 500 converges to zero, collapsing the distribution into a Dirac delta"
      ],
      "explanation_en": "Crucial distinction! The CLT guarantees that sample averages x̄ are normally distributed. It NEVER changes raw population data into a bell curve.",
      "title_es": "Ejercicio 2: La Trampa de la Mala Interpretación del TLC",
      "question_es": "Un investigador novel afirma: 'Mis datos de pacientes son muy asimétricos. ¡Pero como tengo N = 500 pacientes, mis datos ya son normales por el TLC!' ¿Por qué se equivoca?",
      "options_es": [
        "Porque el TLC solo establece que la distribución del ESTADÍSTICO MUESTRAL (la media) se vuelve normal; la distribución subyacente de los pacientes sigue siendo igual de asimétrica",
        "Porque el TLC solo se aplica a variables continuas que ya son aproximadamente simétricas",
        "Porque el Teorema del Límite Central solo actúa con N > 10.000 en distribuciones biológicas asimétricas",
        "Porque la desviación típica muestral s con N = 500 converge a cero, degenerando la distribución en una delta de Dirac"
      ],
      "explanation_es": "¡Distinción fundamental! El TLC garantiza que el promedio muestral x̄ tiene distribución normal. NUNCA transforma los datos brutos poblacionales en una campana.",
      "category_de": "Fallstrick",
      "title_de": "Übung 2: Das CLT-Missverständnis",
      "question_de": "Ein Nachwuchsforscher behauptet: 'Meine Patientendaten sind stark schief. Aber weil ich N = 500 Patienten habe, sind meine Daten dank des CLT nun automatisch normalverteilt!' Warum liegt er falsch?",
      "options_de": [
        "Weil der CLT nur besagt, dass die Verteilung der STICHPROBENSTATISTIK (des Mittelwerts) normal wird; die zugrunde liegende Verteilung der Einzelpatienten bleibt exakt gleich schief",
        "Weil der CLT nur für stetige Variablen gilt, die bereits näherungsweise symmetrisch sind",
        "Weil der Zentrale Grenzwertsatz bei asymmetrischen biologischen Verteilungen erst ab N > 10.000 einsetzt",
        "Weil die Stichproben-Standardabweichung s bei N = 500 gegen null konvergiert und die Verteilung zur Dirac-Delta entartet"
      ],
      "explanation_de": "Kardinaler Unterschied! Der CLT garantiert, dass Stichprobenmittelwerte x̄ normalverteilt sind. Er verwandelt niemals Rohdaten in eine Gauß-Glocke."
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
      "title_en": "Exercise 3: Calculating Sample Size for Precision",
      "question_en": "The population standard deviation is σ = 20. At N = 25, the standard error is SE = 20 / √25 = 4.0. What sample size N do you need to halve the standard error to SE = 2.0?",
      "options_en": [
        "N = 50 (double the sample, because precision is proportional to N)",
        "N = 200 (because halving the margin of error requires an eightfold sample expansion)",
        "N = 100 (quadruple the sample, because √100 = 10 and 20 / 10 = 2.0)",
        "N = 625 (because variance scales with the square of the initial sample)"
      ],
      "explanation_en": "Correct! Because SE = σ / √N, halving SE requires doubling the denominator √N, which means quadrupling N: 25 × 4 = 100.",
      "title_es": "Ejercicio 3: Cálculo del Tamaño Muestral para Precisión",
      "question_es": "La desviación estándar poblacional es σ = 20. Con N = 25, el error estándar es EE = 20 / √25 = 4,0. ¿Qué tamaño muestral N necesitas para reducir el error estándar a la mitad (EE = 2,0)?",
      "options_es": [
        "N = 50 (duplicar, porque la precisión es directamente proporcional a N)",
        "N = 200 (porque reducir a la mitad el margen exige multiplicar la muestra por ocho)",
        "N = 100 (cuadruplicar la muestra, porque √100 = 10 y 20 / 10 = 2,0)",
        "N = 625 (porque la varianza escala con el cuadrado de la muestra inicial)"
      ],
      "explanation_es": "¡Correcto! Como EE = σ / √N, para reducir el EE a la mitad hay que duplicar √N, lo que implica cuadruplicar N: 25 × 4 = 100.",
      "category_de": "Berechnung",
      "title_de": "Übung 3: Berechnung des Stichprobenumfangs für Präzision",
      "question_de": "Die Populationsstreuung beträgt σ = 20. Bei N = 25 ist der Standardfehler SE = 20 / √25 = 4,0. Welchen Stichprobenumfang N benötigst du, um den Standardfehler auf SE = 2,0 zu halbieren?",
      "options_de": [
        "N = 50 (verdoppeln, da Präzision proportional zu N ist)",
        "N = 200 (da die Halbierung der Fehlerspanne eine achtfache Stichprobenvergrößerung erfordert)",
        "N = 100 (vervierfachen, da √100 = 10 und 20 / 10 = 2,0 ergibt)",
        "N = 625 (da die Varianz mit dem Quadrat der Anfangsstichprobe skaliert)"
      ],
      "explanation_de": "Richtig! Weil SE = σ / √N gilt, verlangt eine Halbierung des SE eine Verdopplung von √N, also eine Vervierfachung von N: 25 × 4 = 100."
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
      "title_en": "Exercise 1: The Interpretation of Confidence Intervals",
      "question_en": "A poll reports: '95% confidence interval for Party A is [28%, 32%]'. Which statement is mathematically FALSE?",
      "options_en": [
        "Under repeated sampling in identical conditions, 95% of constructed intervals will contain the true population percentage",
        "If we had computed a 99% interval with the same data, the resulting interval would have been wider",
        "The point estimate for this specific sample is 30% with an estimated margin of error of ± 2%",
        "There is now an a posteriori 95% probability that the true population percentage lies within [28%, 32%]"
      ],
      "explanation_en": "Precisely! Statement 4 is the classic frequentist fallacy. The true parameter is a fixed number, not a random variable. The 95% refers to the procedure, not this specific interval.",
      "title_es": "Ejercicio 1: La Interpretación de Intervalos de Confianza",
      "question_es": "Una encuesta informa: 'El intervalo de confianza al 95% para el partido A es [28%, 32%]'. ¿Qué afirmación es matemáticamente FALSA?",
      "options_es": [
        "En muestreo repetido bajo idénticas condiciones, el 95% de los intervalos construidos contendrá el verdadero porcentaje poblacional",
        "Si hubiéramos calculado un intervalo al 99% con los mismos datos, el intervalo resultante habría sido más ancho",
        "La estimación puntual de esta muestra específica es 30% con un margen de error estimado de ± 2%",
        "Existe ahora una probabilidad a posteriori del 95% de que el verdadero porcentaje poblacional se encuentre dentro de [28%, 32%]"
      ],
      "explanation_es": "¡Exacto! La opción 4 es la falacia frecuentista clásica. El parámetro real es fijo, no aleatorio. El 95% mide la fiabilidad del procedimiento.",
      "category_de": "Fallstrick",
      "title_de": "Übung 1: Die Interpretation von Konfidenzintervallen",
      "question_de": "Eine Wahlumfrage berichtet: 'Das 95%-Konfidenzintervall für Partei A liegt bei [28%, 32%]'. Welche Aussage ist mathematisch FALSCH?",
      "options_de": [
        "Bei wiederholter Stichprobenziehung unter identischen Bedingungen werden 95% der konstruierten Intervalle den wahren Populationsanteil überdecken",
        "Hätten wir mit denselben Daten ein 99%-Intervall berechnet, wäre das resultierende Intervall breiter ausgefallen",
        "Der Punktschätzer dieser spezifischen Stichprobe liegt bei 30% mit einer geschätzten Fehlerspanne von ± 2%",
        "Es besteht nun eine A-posteriori-Wahrscheinlichkeit von 95%, dass der wahre Populationsanteil innerhalb von [28%, 32%] liegt"
      ],
      "explanation_de": "Präzise! Aussage 4 ist der klassische frequentistische Denkfehler. Der wahre Parameter ist fest, nicht zufällig. Die 95% beziehen sich auf die Verlässlichkeit des Verfahrens."
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
      "title_en": "Exercise 2: Overlapping Confidence Intervals",
      "question_en": "Two groups each have a 95% CI for their mean: Group 1 = [10, 16], Group 2 = [14, 20]. The intervals slightly overlap (between 14 and 16). May you conclude that the difference is not significant (p > 0.05)?",
      "options_en": [
        "No! Two intervals can overlap slightly while the formal two-sample t-test on the difference remains statistically significant (p < 0.05). Significance disappears only under substantial overlap",
        "Yes, because the sum of two independent 95% intervals always results in a joint confidence level of 90%",
        "No, but only if both samples demonstrate identical variance under Levene's test",
        "Yes: whenever two separate 95% confidence intervals overlap, the difference is by definition p > 0.05"
      ],
      "explanation_en": "Haute precision! Testing the difference uses SE_diff = √(SE₁² + SE₂²), which is strictly smaller than SE₁ + SE₂. CIs can overlap by up to ~29% and still yield p < 0.05.",
      "title_es": "Ejercicio 2: Intervalos de Confianza Solapados",
      "question_es": "Dos grupos tienen cada uno un IC al 95% para su media: Grupo 1 = [10, 16], Grupo 2 = [14, 20]. Se solapan ligeramente (entre 14 y 16). ¿Se puede concluir que la diferencia no es significativa (p > 0,05)?",
      "options_es": [
        "¡No! Dos intervalos pueden solaparse ligeramente y, sin embargo, la prueba t formal de dos muestras sobre la diferencia ser significativa (p < 0,05). Solo con solapamiento sustancial desaparece la significancia",
        "Sí, porque la suma de dos intervalos al 95% independientes resulta siempre en un nivel conjunto del 90%",
        "No, pero solo si ambas muestras presentan varianzas idénticas bajo la prueba de Levene",
        "Sí: en cuanto dos intervalos al 95% separados se solapan, la diferencia es por definición p > 0,05"
      ],
      "explanation_es": "¡Gran precisión! La prueba de la diferencia usa EE_dif = √(EE₁² + EE₂²), que es menor que la suma aritmética. Los IC pueden solaparse hasta un ~29% y seguir siendo p < 0,05.",
      "category_de": "Konzept",
      "title_de": "Übung 2: Überlappende Konfidenzintervalle",
      "question_de": "Zwei Gruppen haben jeweils ein 95%-KI für ihren Mittelwert: Gruppe 1 = [10, 16], Gruppe 2 = [14, 20]. Die Intervalle überlappen leicht (zwischen 14 und 16). Darf man folgern, dass der Unterschied nicht signifikant ist (p > 0,05)?",
      "options_de": [
        "Nein! Zwei Intervalle können leicht überlappen, während der formale Zweistichproben-t-Test auf die Differenz dennoch statistisch signifikant ist (p < 0,05). Erst bei substanzieller Überlappung verschwindet die Signifikanz",
        "Ja, weil die Summe zweier unabhängiger 95%-Intervalle stets zu einem gemeinsamen Konfidenzniveau von 90% führt",
        "Nein, aber nur wenn beide Stichproben unter dem Levene-Test identische Varianzen aufweisen",
        "Ja: Sobald zwei getrennte 95%-Konfidenzintervalle einander überlappen, ist der Unterschied per Definition p > 0,05"
      ],
      "explanation_de": "Höchste Präzision! Der Test der Differenz nutzt SE_diff = √(SE₁² + SE₂²), was strikt kleiner als SE₁ + SE₂ ist. KIs können bis zu ca. 29% überlappen und dennoch p < 0,05 ergeben."
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
      "title_en": "Exercise 3: Confidence Level vs Margin of Error",
      "question_en": "What happens to the width of a confidence interval if you increase the confidence level from 95% to 99% for a fixed sample size?",
      "options_en": [
        "The width stays identical, but residuals are tested against the t-distribution with N - 1 degrees of freedom",
        "The interval becomes narrower (Z-factor drops) because higher confidence tolerates less error",
        "The interval becomes wider (critical Z-value rises from 1.96 to 2.58), because capturing the true parameter with greater certainty requires a wider margin",
        "The interval retains the same absolute margin, but shifts toward the null hypothesis"
      ],
      "explanation_en": "Exact! Greater confidence requires casting a wider net. Critical value Z* increases from 1.96 (95%) to 2.576 (99%), expanding interval width by about 31%.",
      "title_es": "Ejercicio 3: Nivel de Confianza frente a Margen de Error",
      "question_es": "¿Qué le ocurre al ancho de un intervalo de confianza si aumentas el nivel de confianza del 95% al 99% manteniendo el tamaño muestral fijo?",
      "options_es": [
        "El ancho se mantiene idéntico, pero los residuos se evalúan contra la distribución t con N - 1 grados de libertad",
        "El intervalo se vuelve más estrecho (el factor Z cae) porque mayor confianza tolera menor error",
        "El intervalo se ensancha (el valor Z crítico sube de 1,96 a 2,58), ya que asegurar la captura del parámetro exige mayor margen",
        "El intervalo conserva el mismo margen absoluto, pero su centro se desplaza hacia la hipótesis nula"
      ],
      "explanation_es": "¡Exacto! Mayor confianza exige una red más ancha. El valor crítico Z* sube de 1,96 (95%) a 2,576 (99%), ensanchando el intervalo en un 31%.",
      "category_de": "Berechnung",
      "title_de": "Übung 3: Konfidenzniveau vs. Fehlerspanne",
      "question_de": "Was passiert mit der Breite eines Konfidenzintervalls, wenn man das Konfidenzniveau bei unverändertem Stichprobenumfang von 95% auf 99% erhöht?",
      "options_de": [
        "Die Breite bleibt identisch, aber die Residuen werden gegen die t-Verteilung mit N - 1 Freiheitsgraden getestet",
        "Das Intervall wird schmaler (der Z-Faktor sinkt), da höhere Sicherheit weniger Fehlertoleranz erlaubt",
        "Das Intervall wird breiter (der kritische Z-Wert steigt von 1,96 auf 2,58), da ein sicheres Einfangen des wahren Parameters eine größere Spanne erfordert",
        "Das Intervall behält dieselbe absolute Fehlerspanne, aber sein Zentrum verschiebt sich zur Nullhypothese"
      ],
      "explanation_de": "Exakt! Höhere Sicherheit verlangt ein breiteres Fangnetz. Der kritische Wert Z* steigt von 1,96 (95%) auf 2,576 (99%), was die Intervallbreite um ca. 31% vergrößert."
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
      "title_en": "Exercise 1: Statistical Significance vs Practical Relevance",
      "question_en": "An A/B test with N = 10 million visitors shows a conversion increase from 2.000% to 2.004% with p = 0.000008. What is the correct business and statistical conclusion?",
      "options_en": [
        "Be cautious: with N = 10 million, a hypothesis test detects even minuscule noise as highly significant; an absolute increase of 0.004% has virtually zero practical or economic value",
        "Immediately deploy to production and invest, because p < 0.00001 guarantees a massive effect",
        "Normalize the p-value by dividing by √N to restore the true null hypothesis",
        "Maintain the null hypothesis because effects under 0.1% are defined a priori as measurement error"
      ],
      "explanation_en": "Essential statistical wisdom! Large sample size shrinks SE to near zero, making negligible trivialities statistically significant. Always evaluate effect size!",
      "title_es": "Ejercicio 1: Significancia Estadística frente a Relevancia Práctica",
      "question_es": "Un test A/B con N = 10 millones de visitantes muestra un incremento de conversión del 2,000% al 2,004% con p = 0,000008. ¿Cuál es la conclusión estadística y empresarial correcta?",
      "options_es": [
        "Tener cautela: con N = 10 millones, el test detecta hasta el ruido más minúsculo como muy significativo; un aumento de 0,004% apenas tiene valor práctico o empresarial",
        "Desplegar inmediatamente en producción e invertir, ya que p < 0,00001 garantiza un efecto colosal",
        "Normalizar el valor p dividiendo por √N para restaurar la verdadera hipótesis nula",
        "Mantener la hipótesis nula porque efectos menores al 0,1% se definen a priori como error de medida"
      ],
      "explanation_es": "¡Sabiduría estadística básica! Muestras gigantes reducen el EE a casi cero, volviendo trivialidades despreciables estadísticamente significativas. ¡Evalúa siempre el tamaño del efecto!",
      "category_de": "Dilemma",
      "title_de": "Übung 1: Statistische Signifikanz vs. Praktische Relevanz",
      "question_de": "Ein A/B-Test mit N = 10 Millionen Besuchern zeigt einen Anstieg der Conversion-Rate von 2,000% auf 2,004% mit p = 0,000008. Was ist das korrekte geschäftliche und statistische Fazit?",
      "options_de": [
        "Vorsichtig sein: Bei N = 10 Millionen stuft ein Hypothesentest selbst winziges Rauschen als hochsignifikant ein; ein absoluter Zuwachs von 0,004% hat praktisch keinen wirtschaftlichen Nutzen",
        "Sofort für die Produktion freigeben und investieren, da p < 0,00001 einen gigantischen Effekt garantiert",
        "Den p-Wert durch Division durch √N normalisieren, um die echte Nullhypothese wiederherzustellen",
        "Die Nullhypothese beibehalten, da Effekte unter 0,1% a priori als Messfehler definiert sind"
      ],
      "explanation_de": "Elementare statistische Weisheit! Riesige Fallzahlen drücken den SE gegen null, sodass kleinste Belanglosigkeiten signifikant werden. Stets die Effektstärke bewerten!"
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
      "title_en": "Exercise 2: Type I and Type II Errors in Critical Systems",
      "question_en": "In the development of an autonomous emergency braking system for cars: what is a Type II error (false negative)?",
      "options_en": [
        "Braking forcefully for a harmless plastic bag blowing across the road (false alarm / Type I error)",
        "Failing to brake when an actual pedestrian is crossing the road (missed real hazard / Type II error)",
        "The sensor system recalibrates distance using a Kalman filter",
        "The camera correctly detects a pedestrian and activates the emergency brake (True Positive)"
      ],
      "explanation_en": "Life-saving difference! Type I = False alarm (unnecessary stop). Type II = Missed hazard (failure to brake for pedestrian). In safety-critical systems, Type II errors are far deadlier.",
      "title_es": "Ejercicio 2: Errores Tipo I y Tipo II en Sistemas Críticos",
      "question_es": "En el desarrollo de un sistema de frenado autónomo de emergencia para coches: ¿qué es un error Tipo II (falso negativo)?",
      "options_es": [
        "Frenar bruscamente ante una bolsa de plástico inofensiva movida por el viento (falsa alarma / error Tipo I)",
        "No frenar cuando hay un peatón cruzando la calzada (peligro real omitido / error Tipo II)",
        "El sistema de sensores recalibra la distancia de medición usando un filtro de Kalman",
        "La cámara detecta correctamente al peatón y activa la frenada de emergencia (Verdadero Positivo)"
      ],
      "explanation_es": "¡Diferencia vital! Tipo I = Falsa alarma (frenazo innecesario). Tipo II = Peligro omitido (no frenar ante peatón). En sistemas críticos, el Tipo II es letal.",
      "category_de": "Konzept",
      "title_de": "Übung 2: Typ-I- und Typ-II-Fehler in kritischen Systemen",
      "question_de": "Bei der Entwicklung eines autonomen Notbremssystems für Pkw: Was ist ein Typ-II-Fehler (falsch-negativ)?",
      "options_de": [
        "Ungerechtfertigtes Vollbremsen wegen einer harmlosen Plastiktüte auf der Fahrbahn (Fehlalarm / Typ-I-Fehler)",
        "Nicht bremsen, obwohl tatsächlich ein Fußgänger die Straße überquert (übersehene reale Gefahr / Typ-II-Fehler)",
        "Das Sensorsystem kalibriert den Messabstand mithilfe eines Kalman-Filters neu",
        "Die Kamera erkennt einen Fußgänger korrekt und leitet eine Notbremsung ein (True Positive)"
      ],
      "explanation_de": "Lebensrettender Unterschied! Typ I = Fehlalarm (unnötiger Halt). Typ II = Übersehene Gefahr (kein Bremsen bei Fußgänger). In sicherheitskritischen Systemen ist Typ II fatal."
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
      "title_en": "Exercise 3: The P-Value Misconception",
      "question_en": "A researcher claims: 'My p-value is 0.04, so there is a 96% probability that my research hypothesis is true.' Is this correct?",
      "options_en": [
        "Yes, because the complement of the p-value (1 - p = 0.96) is the posterior probability of H1",
        "Yes, provided the statistical power (1 - β) of the experiment was set in advance to exactly 80%",
        "Absolutely false! The p-value is P(Data or more extreme | H0 true), NOT P(H0 true | Data). The true probability of the hypothesis depends crucially on prior odds and statistical power",
        "Yes, because the frequentist p-value is mathematically identical to Bayes Factor BF10 divided by sample size"
      ],
      "explanation_en": "Crucial distinction! P(Data | H0) is NOT P(H0 | Data). Confusing the two is the classic 'fallacy of the transposed conditional'.",
      "title_es": "Ejercicio 3: La Mala Interpretación del Valor P",
      "question_es": "Un investigador afirma: 'Mi valor p es 0,04, por lo que hay un 96% de probabilidad de que mi hipótesis de investigación sea verdadera'. ¿Es correcto?",
      "options_es": [
        "Sí, porque el complemento del valor p (1 - p = 0,96) es la probabilidad posterior de H1",
        "Sí, siempre que la potencia estadística (1 - β) del experimento se fijase previamente en el 80%",
        "¡Totalmente falso! El valor p es P(Datos o más extremos | H0 cierta), NO P(H0 cierta | Datos). La probabilidad real de la hipótesis depende decisivamente de la probabilidad previa y la potencia",
        "Sí, porque el valor p frecuentista es matemáticamente idéntico al Factor Bayes BF10 dividido entre el tamaño muestral"
      ],
      "explanation_es": "¡Distinción crucial! P(Datos | H0) NO es P(H0 | Datos). Confundir ambas es la clásica 'falacia de la condicional traspuesta'.",
      "category_de": "Fallstrick",
      "title_de": "Übung 3: Der p-Wert-Trugschluss",
      "question_de": "Ein Forscher behauptet: 'Mein p-Wert ist 0,04, also besteht eine 96%-Wahrscheinlichkeit, dass meine Forschungshypothese wahr ist.' Stimmt das?",
      "options_de": [
        "Ja, weil das Komplement der Überschreitungswahrscheinlichkeit (1 - p = 0,96) die Posterior-Wahrscheinlichkeit von H1 ist",
        "Ja, vorausgesetzt die statistische Power (1 - β) des Experiments wurde vorab auf exakt 80% festgelegt",
        "Völlig falsch! Der p-Wert ist P(Daten oder extremer | H0 wahr), NICHT P(H0 wahr | Daten). Die wahre Wahrscheinlichkeit der Hypothese hängt entscheidend von der A-priori-Wahrscheinlichkeit und der Power ab",
        "Ja, weil der frequentistische p-Wert mathematisch identisch mit dem Bayes-Faktor BF10 geteilt durch den Stichprobenumfang ist"
      ],
      "explanation_de": "Kardinaler Unterschied! P(Daten | H0) ist NICHT P(H0 | Daten). Dies zu verwechseln ist der klassische 'Trugschluss der transponierten Bedingung'."
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
      "title_en": "Exercise 1: Calculating OLS Predictions",
      "question_en": "In the model Salary (€/year) = 50,000 + 12,500 × Experience (years): what is the expected salary of an employee with 4 years of experience?",
      "options_en": [
        "€ 62,500 (because experience is multiplied by only the first year)",
        "€ 75,000 (because 50,000 + 12,500 × 2)",
        "€ 112,500 (because 50,000 + 12,500 × 5)",
        "€ 100,000 (because 50,000 + 12,500 × 4 = 100,000)"
      ],
      "explanation_en": "Simple linear algebra! Ŷ = β0 + β1 × X = 50,000 + 12,500 × 4 = 50,000 + 50,000 = €100,000.",
      "title_es": "Ejercicio 1: Cálculo de Predicciones MCO",
      "question_es": "En el modelo Salario (€/año) = 50.000 + 12.500 × Experiencia (años): ¿cuál es el salario esperado de un empleado con 4 años de experiencia?",
      "options_es": [
        "62.500 € (porque la experiencia solo se multiplica por el primer año)",
        "75.000 € (porque 50.000 + 12.500 × 2)",
        "112.500 € (porque 50.000 + 12.500 × 5)",
        "100.000 € (porque 50.000 + 12.500 × 4 = 100.000)"
      ],
      "explanation_es": "¡Álgebra lineal básica! Ŷ = β0 + β1 × X = 50.000 + 12.500 × 4 = 50.000 + 50.000 = 100.000 €.",
      "category_de": "Berechnung",
      "title_de": "Übung 1: Berechnung von OLS-Vorhersagen",
      "question_de": "Im Modell Gehalt (€/Jahr) = 50.000 + 12.500 × Erfahrung (Jahre): Wie hoch ist das erwartete Gehalt eines Mitarbeiters mit 4 Jahren Erfahrung?",
      "options_de": [
        "62.500 € (da die Erfahrung nur für das erste Jahr angerechnet wird)",
        "75.000 € (da 50.000 + 12.500 × 2 gerechnet wurde)",
        "112.500 € (da 50.000 + 12.500 × 5 gerechnet wurde)",
        "100.000 € (da 50.000 + 12.500 × 4 = 100.000)"
      ],
      "explanation_de": "Einfache Lineare Regression! Ŷ = β0 + β1 × X = 50.000 + 12.500 × 4 = 50.000 + 50.000 = 100.000 €."
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
      "title_en": "Exercise 2: Why Minimize Sum of Squared Residuals (L2)?",
      "question_en": "Why does Ordinary Least Squares (OLS) minimize the sum of squared residuals Σ e_i² rather than the simple sum of residuals Σ e_i or absolute residuals Σ |e_i|?",
      "options_en": [
        "Because the raw sum Σ e_i penalizes outliers more severely than squaring, making OLS unstable in large samples",
        "Because the raw sum Σ e_i is already zero for any line passing through the centroid (x̄, ȳ), and squaring (L2) is everywhere differentiable with a unique analytical solution (XᵀX)⁻¹Xᵀy, whereas absolute sum Σ |e_i| (L1) is non-differentiable at zero",
        "Because the absolute sum Σ |e_i| is mathematically undefined for continuous residuals oscillating around zero",
        "Because the Gauss-Markov theorem requires the sum of residuals to be strictly positive for unbiased estimation"
      ],
      "explanation_en": "Exact! Raw sum Σ e_i always cancels to zero. Absolute sum L1 is non-differentiable at zero (requiring linear programming). L2 is smooth, convex, everywhere differentiable, and by Gauss-Markov yields the Best Linear Unbiased Estimator (BLUE).",
      "title_es": "Ejercicio 2: ¿Por qué Minimizar la Suma de Residuos al Cuadrado (L2)?",
      "question_es": "¿Por qué el método de Mínimos Cuadrados Ordinarios (MCO) minimiza la suma de residuos al cuadrado Σ e_i² en lugar de la suma simple Σ e_i o los residuos absolutos Σ |e_i|?",
      "options_es": [
        "Porque la suma simple Σ e_i penaliza los valores atípicos con mayor dureza que los cuadrados, volviendo inestable a MCO",
        "Porque la suma simple Σ e_i ya es cero para cualquier recta que pase por el centroide (x̄, ȳ), y elevar al cuadrado (L2) es diferenciable en todo punto con solución analítica única (XᵀX)⁻¹Xᵀy, mientras que la suma absoluta Σ |e_i| (L1) no es diferenciable en cero",
        "Porque la suma absoluta Σ |e_i| no está definida matemáticamente para residuos continuos que oscilan alrededor de cero",
        "Porque el teorema de Gauss-Markov exige que la suma de residuos sea estrictamente positiva para estimadores insesgados"
      ],
      "explanation_es": "¡Exacto! La suma simple se anula a cero. La suma absoluta L1 no es diferenciable en cero. L2 es convexa, diferenciable en todo punto y por Gauss-Markov produce el estimador lineal insesgado óptimo (BLUE).",
      "category_de": "Konzept",
      "title_de": "Übung 2: Warum die Summe der quadrierten Residuen (L2) minimieren?",
      "question_de": "Warum minimiert die Methode der kleinsten Quadrate (OLS) die Summe der quadrierten Residuen Σ e_i² anstelle der einfachen Summe Σ e_i oder der absoluten Beträge Σ |e_i|?",
      "options_de": [
        "Weil die einfache Summe Σ e_i Ausreißer härter bestraft als Quadrate, wodurch OLS bei großen Stichproben instabil würde",
        "Weil die einfache Summe Σ e_i bei jeder Geraden durch den Schwerpunkt (x̄, ȳ) stets null ist und Quadrieren (L2) überall glatt differenzierbar mit einer eindeutigen geschlossenen Matrixlösung (XᵀX)⁻¹Xᵀy ist, während die absolute Summe Σ |e_i| (L1) bei null nicht differenzierbar ist",
        "Weil die absolute Summe Σ |e_i| für stetige Residuen, die um null oszillieren, mathematisch nicht definiert ist",
        "Weil das Gauß-Markov-Theorem für erwartungstreue Schätzer verlangt, dass die Summe der Residuen strikt größer null ist"
      ],
      "explanation_de": "Exakt! Die einfache Summe hebt sich stets zu Null auf. L1 ist bei Null nicht differenzierbar. L2 ist glatt differenzierbar, liefert die analytische Normagleichung und ist nach Gauß-Markov der beste lineare Schätzer (BLUE)."
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
      "title_en": "Exercise 3: Correlation vs Causation",
      "question_en": "There is a strong correlation (r = 0.85) between sunglasses sales and drownings in the summer. Does this mean banning sunglasses will prevent drownings?",
      "options_en": [
        "Yes, because r > 0.80 mathematically proves a causal relationship under the Gauss-Markov theorem",
        "Yes, provided the statistical test shows p < 0.001 with high power",
        "No! High outdoor temperature is a confounder: hot weather causes both more sunglasses sales and more swimmers. The link between sunglasses and drownings is purely spurious",
        "Only if sunglasses are made of non-reflective materials that do not distort water visibility"
      ],
      "explanation_en": "Classic spurious correlation! Temperature is the confounding common cause driving both variables. Correlation never implies causation without controlling for confounders.",
      "title_es": "Ejercicio 3: Correlación frente a Causalidad",
      "question_es": "Existe una fuerte correlación (r = 0,85) entre la venta de gafas de sol y los ahogamientos en verano. ¿Significa esto que prohibir las gafas de sol evitará ahogamientos?",
      "options_es": [
        "Sí, porque r > 0,80 demuestra matemáticamente una relación causal según el teorema de Gauss-Markov",
        "Sí, siempre que el contraste estadístico arroje p < 0,001 con alta potencia",
        "¡No! La alta temperatura estival es un confusor: el calor causa tanto más ventas de gafas como más bañistas. La relación entre gafas y ahogamientos es puramente espuria",
        "Solo si las gafas de sol están fabricadas con materiales no reflectantes que impidan ver el agua"
      ],
      "explanation_es": "¡Clásica correlación espuria! La temperatura es el confusor que impulsa ambas variables. Correlación jamás implica causalidad sin controlar confusores.",
      "category_de": "Fallstrick",
      "title_de": "Übung 3: Korrelation vs. Kausalität",
      "question_de": "Es gibt eine starke Korrelation (r = 0,85) zwischen dem Verkauf von Sonnenbrillen und Ertrinkungsunfällen im Sommer. Bedeutet dies, dass ein Verbot von Sonnenbrillen Ertrinkungsunfälle verhindert?",
      "options_de": [
        "Ja, weil r > 0,80 gemäß dem Gauß-Markov-Theorem mathematisch einen Kausalzusammenhang beweist",
        "Ja, vorausgesetzt der statistische Test weist p < 0,001 mit hoher Power auf",
        "Nein! Die hohe Außentemperatur ist ein Confounder: Heißes Wetter führt zu mehr Sonnenbrillenkäufen UND mehr Badegästen. Die Beziehung zwischen Brille und Ertrinken ist rein scheinbar (spurious)",
        "Nur dann, wenn die Sonnenbrillen aus nicht-reflektierenden Materialien bestehen"
      ],
      "explanation_de": "Klassische Scheinkorrelation! Die Temperatur ist der Confounder, der beide Variablen antreibt. Korrelation impliziert niemals Kausalität!"
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
      "title_en": "Exercise 1: Behavior of Standard R²",
      "question_en": "Why can standard R² never decrease when adding extra predictors to a multiple OLS regression model?",
      "options_en": [
        "Because total sum of squares (SST) decreases linearly with each newly added vector",
        "Because the F-test for model improvement mathematically forbids the correlation matrix from shrinking",
        "Because OLS minimizes residual sum of squares (RSS) via orthogonal projection; extra columns expand the column space and can only improve or preserve the fit",
        "Because Adjusted R² and standard R² always converge monotonically to 1.0"
      ],
      "explanation_en": "Correct! Mathematically, OLS can assign a coefficient of 0 to an irrelevant variable. In practice, OLS always fits minor random noise, artificially inflating standard R².",
      "title_es": "Ejercicio 1: El Comportamiento del R² Ordinario",
      "question_es": "¿Por qué el R² ordinario nunca disminuye al añadir predictores adicionales a un modelo de regresión múltiple MCO?",
      "options_es": [
        "Porque la suma total de cuadrados (SST) decrece linealmente con cada vector añadido",
        "Porque la prueba F de mejora del modelo prohíbe matemáticamente que la matriz de correlación se contraiga",
        "Porque MCO minimiza la suma de cuadrados residuales (RSS) mediante proyección ortogonal; añadir columnas expande el espacio vectorial y solo puede mejorar o igualar el ajuste",
        "Porque el R² ajustado y el R² ordinario siempre convergen monótonamente a 1,0"
      ],
      "explanation_es": "¡Correcto! Matemáticamente, MCO siempre puede asignar coeficiente 0 a una variable inútil. En la práctica, captura ruido aleatorio, inflando R².",
      "category_de": "Konzept",
      "title_de": "Übung 1: Das Verhalten des gewöhnlichen R²",
      "question_de": "Warum kann das gewöhnliche R² niemals sinken, wenn man zusätzliche Prädiktoren zu einem multiplen OLS-Modell hinzufügt?",
      "options_de": [
        "Weil die Gesamtsumme der Quadrate (SST) mit jedem neu hinzugefügten Vektor linear abnimmt",
        "Weil der F-Test für Modellverbesserung ein Schrumpfen der Korrelationsmatrix mathematisch verbietet",
        "Weil OLS die Summe der quadrierten Residuen (RSS) über orthogonale Projektion minimiert; zusätzliche Spalten vergrößern den Spaltenraum und können die Anpassung nur verbessern oder gleich lassen",
        "Weil das adjustierte R² und das gewöhnliche R² immer monoton gegen 1,0 konvergieren"
      ],
      "explanation_de": "Richtig! Mathematisch kann OLS einer überflüssigen Variablen stets Koeffizient 0 zuweisen. In der Praxis passt OLS immer Zufallsrauschen an, wodurch R² künstlich steigt."
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
      "title_en": "Exercise 2: Model Comparison in Practice",
      "question_en": "Model A has 3 predictors with R² = 0.74 and Adj-R² = 0.73. Model B adds 12 random variables, achieving R² = 0.76 and Adj-R² = 0.69. Which model do you choose?",
      "options_en": [
        "Model A, because Adjusted R² is substantially higher (0.73 vs 0.69). The 12 extra variables in Model B mainly introduce noise and overfitting penalized more heavily than their marginal gain",
        "Model B, because the raw explained variance R² of 0.76 represents the highest empirical fit",
        "Model B, provided all 12 extra variables are individually tested with a two-tailed z-test",
        "Both models are equivalent because BIC always selects the smallest residual vector"
      ],
      "explanation_en": "Excellent! The drop in Adjusted R² from 0.73 to 0.69 conclusively proves that the 12 extra variables add only noise and overfitting. Choose the parsimonious Model A.",
      "title_es": "Ejercicio 2: Comparación de Modelos en la Práctica",
      "question_es": "El Modelo A tiene 3 predictores con R² = 0,74 y R²-Adj = 0,73. El Modelo B añade 12 variables aleatorias y obtiene R² = 0,76 y R²-Adj = 0,69. ¿Qué modelo eliges?",
      "options_es": [
        "El Modelo A, porque el R² ajustado es sustancialmente mayor (0,73 frente a 0,69). Las 12 variables adicionales en el Modelo B aportan sobreajuste y ruido penalizado con más fuerza que su aporte",
        "El Modelo B, porque la varianza explicada bruta R² de 0,76 representa el mayor ajuste empírico",
        "El Modelo B, siempre que las 12 variables adicionales se contrasten individualmente con una prueba z bilateral",
        "Ambos modelos son equivalentes porque el BIC siempre selecciona el vector residual más pequeño"
      ],
      "explanation_es": "¡Excelente! La caída del R² ajustado de 0,73 a 0,69 demuestra de forma concluyente que las 12 variables aportan ruido y sobreajuste. Elige el Modelo A.",
      "category_de": "Dilemma",
      "title_de": "Übung 2: Modellvergleich in der Praxis",
      "question_de": "Modell A hat 3 Prädiktoren mit R² = 0,74 und Adj-R² = 0,73. Modell B fügt 12 zufällige Variablen hinzu und erreicht R² = 0,76 und Adj-R² = 0,69. Welches Modell wählst du?",
      "options_de": [
        "Modell A, da das adjustierte R² substanziell höher ist (0,73 vs. 0,69). Die 12 zusätzlichen Variablen in Modell B fügen hauptsächlich Overfitting und Rauschen hinzu, was stärker bestraft wird als ihr Beitrag",
        "Modell B, weil die rohe erklärte Varianz R² von 0,76 die höchste empirische Anpassung darstellt",
        "Modell B, vorausgesetzt alle 12 zusätzlichen Variablen werden einzeln mit einem zweiseitigen Z-Test geprüft",
        "Beide Modelle sind gleichwertig, da das BIC stets den kleinsten Residualvektor wählt"
      ],
      "explanation_de": "Hervorragend! Der Abfall des adjustierten R² von 0,73 auf 0,69 beweist zweifelsfrei, dass die 12 Zusatzvariablen nur Rauschen und Overfitting bringen. Wähle Modell A."
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
      "title_en": "Exercise 3: What Does the Omnibus F-Test Evaluate?",
      "question_en": "In a multiple regression model with 4 predictors: what is the exact null hypothesis (H0) of the omnibus F-test?",
      "options_en": [
        "H0: The regression intercept β0 is statistically equal to the sample mean ȳ",
        "H0: Population R² equals the residual standard error σ",
        "H0: All four partial regression slopes are simultaneously equal to zero (β1 = β2 = β3 = β4 = 0)",
        "H0: Residuals of all four predictors follow independent univariate Gaussian distributions"
      ],
      "explanation_en": "Exact! The F-test evaluates the MODEL AS A WHOLE against an intercept-only null model. If F is significant (p < 0.05), at least one predictor contributes real explanatory power.",
      "title_es": "Ejercicio 3: ¿Qué Contrasta la Prueba F Global?",
      "question_es": "En un modelo de regresión múltiple con 4 predictores: ¿cuál es la hipótesis nula (H0) exacta de la prueba F global?",
      "options_es": [
        "H0: El intercepto de regresión β0 es estadísticamente igual a la media muestral ȳ",
        "H0: El R² poblacional es igual al error estándar residual σ",
        "H0: Las cuatro pendientes de regresión parcial son simultáneamente iguales a cero (β1 = β2 = β3 = β4 = 0)",
        "H0: Los residuos de los cuatro predictores siguen distribuciones gaussianas univariantes independientes"
      ],
      "explanation_es": "¡Exacto! La prueba F evalúa el MODELO COMPLETO frente al modelo nulo de solo constante. Si F es significativo (p < 0,05), al menos un predictor aporta información real.",
      "category_de": "Konzept",
      "title_de": "Übung 3: Was prüft der globale F-Test?",
      "question_de": "In einem multiplen Regressionsmodell mit 4 Prädiktoren: Was ist die exakte Nullhypothese (H0) des globalen Omnibus-F-Tests?",
      "options_de": [
        "H0: Der Regressions-Achsenabschnitt β0 ist statistisch gleich dem Stichprobenmittelwert ȳ",
        "H0: Das Populations-R² entspricht dem Residual-Standardfehler σ",
        "H0: Alle vier partiellen Regressionssteigungen sind gleichzeitig exakt gleich null (β1 = β2 = β3 = β4 = 0)",
        "H0: Die Residuen aller vier Prädiktoren folgen unabhängigen univariaten Gauß-Verteilungen"
      ],
      "explanation_de": "Exakt! Der F-Test prüft das GESAMTMODELL gegen ein reines Intercept-Modell. Ist F signifikant (p < 0,05), liefert mindestens ein Prädiktor echte Erklärungskraft."
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
      "title_en": "Exercise 1: Heteroscedasticity & Standard Errors",
      "question_en": "What is the concrete consequence if error terms in OLS exhibit heteroscedasticity (unequal residual variance)?",
      "options_en": [
        "Calculated standard errors (SE) are biased, rendering confidence intervals and hypothesis tests (t- and F-values) invalid",
        "The Gauss-Markov assumption of exogeneity E[ε|X] = 0 is immediately violated",
        "OLS point estimates of coefficients become biased and inconsistent",
        "The residual sum of squares can no longer be computed via normal equations"
      ],
      "explanation_en": "Crucial distinction! Under heteroscedasticity, OLS coefficient estimates β̂ remain unbiased, but their standard errors are distorted, making p-values untrustworthy.",
      "title_es": "Ejercicio 1: Heterocedasticidad y Errores Estándar",
      "question_es": "¿Cuál es la consecuencia concreta si las perturbaciones en MCO son heterocedásticas (varianza residual desigual)?",
      "options_es": [
        "Los errores estándar (EE) calculados quedan sesgados, invalidando los intervalos de confianza y contrastes de hipótesis (valores t y F)",
        "Se viola de inmediato el supuesto de exogeneidad de Gauss-Markov E[ε|X] = 0",
        "Las estimaciones puntuales de MCO de los coeficientes se vuelven sesgadas e inconsistentes",
        "La suma de cuadrados residuales ya no puede calcularse mediante las ecuaciones normales"
      ],
      "explanation_es": "¡Distinción vital! Con heterocedasticidad, los coeficientes β̂ siguen siendo insesgados, pero los errores estándar están mal calculados, invalidando los valores p.",
      "category_de": "Fallstrick",
      "title_de": "Übung 1: Heteroskedastizität & Standardfehler",
      "question_de": "Was ist die konkrete Konsequenz, wenn die Störterme in OLS heteroskedastisch sind (ungleiche Residualvarianz)?",
      "options_de": [
        "Die berechneten Standardfehler (SE) sind verzerrt, wodurch Konfidenzintervalle und Hypothesentests (t- und F-Werte) ungültig werden",
        "Die Gauß-Markov-Annahme der Exogenität E[ε|X] = 0 wird direkt verletzt",
        "Die OLS-Punktschätzer der Koeffizienten werden verzerrt und inkonsistent",
        "Die Summe der quadrierten Residuen kann nicht länger über die Normalgleichungen berechnet werden"
      ],
      "explanation_de": "Sehr wichtig! Unter Heteroskedastizität bleiben die Schätzer β̂ weiterhin erwartungstreu, aber die Standardfehler sind falsch berechnet. Die p-Werte sind wertlos."
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
      "title_en": "Exercise 2: Curvature in Residuals vs Fitted Plot",
      "question_en": "In a Residuals vs Fitted plot, you observe a clear U-shaped parabolic curve. What is the appropriate methodological response?",
      "options_en": [
        "Remove the top 10% of observations to artificially straighten the residual pattern",
        "Ignore the curvature as long as the omnibus F-test reports p < 0.001",
        "Apply robust Huber-White standard errors to absorb functional curvature",
        "The assumption of linearity is violated; add a quadratic term (X²), spline, or non-linear transformation to correct the model"
      ],
      "explanation_en": "Precisely! Residual curvature indicates that a straight line misrepresents the data structure. Adjust the functional form using polynomials, logs, or splines.",
      "title_es": "Ejercicio 2: Curvatura en el Gráfico de Residuos frente a Ajustados",
      "question_es": "En el gráfico de Residuos frente a Valores Ajustados se observa una clara forma de U (curva parabólica). ¿Cuál es la respuesta metodológica adecuada?",
      "options_es": [
        "Eliminar el 10% superior de observaciones para enderezar artificialmente el patrón residual",
        "Ignorar la curvatura mientras la prueba F global indique p < 0,001",
        "Aplicar errores estándar robustos de Huber-White para absorber la curvatura funcional",
        "El supuesto de linealidad se ha violado; añade un término cuadrático (X²), spline o transformación no lineal para corregir el modelo"
      ],
      "explanation_es": "¡Exacto! La curvatura residual demuestra que una recta es un modelo incorrecto para estos datos. Ajusta la estructura funcional con polinomios, logaritmos o splines.",
      "category_de": "Dilemma",
      "title_de": "Übung 2: Krümmung im Residuals-vs-Fitted-Plot",
      "question_de": "Im 'Residuals vs Fitted'-Plot siehst du ein deutliches U-förmiges Parabelmuster. Was ist die methodisch korrekte Reaktion?",
      "options_de": [
        "Entferne die oberen 10% der Beobachtungen, um das Residuenmuster künstlich zu begradigen",
        "Ignoriere die Krümmung, solange der globale F-Test p < 0,001 anzeigt",
        "Wende robuste Huber-White-Standardfehler an, um die funktionale Krümmung aufzufangen",
        "Die Annahme der Linearität ist verletzt; füge einen quadratischen Term (X²), Spline oder eine nichtlineare Transformation hinzu, um das Modell zu korrigieren"
      ],
      "explanation_de": "Präzise! Eine Krümmung in den Residuen zeigt unmissverständlich, dass eine Gerade das falsche Modell ist. Passe die Modellstruktur mit Polynomen, Logs oder Splines an."
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
      "title_en": "Exercise 3: Normal Q-Q Plot Interpretation",
      "question_en": "In the Normal Q-Q plot of residuals, points curve steeply upward above the 45-degree diagonal on the top right. What does this indicate?",
      "options_en": [
        "Residuals are perfectly symmetrically distributed with minimal kurtosis",
        "The model suffers from severe multicollinearity in the right quadrants",
        "Residuals have a heavier right tail than a pure normal distribution (positive skewness and extreme outliers)",
        "Conditional residual variance converges monotonically to zero"
      ],
      "explanation_en": "Correct! When residuals curve above the diagonal on the right, observed values are larger than expected under normality, diagnosing a heavy right tail.",
      "title_es": "Ejercicio 3: Interpretación del Gráfico Q-Q Normal",
      "question_es": "En el gráfico Q-Q normal de residuos, los puntos se curvan pronunciadamente hacia arriba por encima de la diagonal de 45° en el extremo superior derecho. ¿Qué indica esto?",
      "options_es": [
        "Los residuos están distribuidos de forma perfectamente simétrica con curtosis mínima",
        "El modelo padece multicolinealidad severa en los cuadrantes derechos",
        "Los residuos presentan una cola derecha más pesada que una distribución normal pura (asimetría positiva y atípicos extremos)",
        "La varianza condicional de los residuos converge monótonamente a cero"
      ],
      "explanation_es": "¡Correcto! Si los residuos se sitúan por encima de la diagonal en la derecha, los valores observados son más extremos de lo previsto bajo normalidad (cola pesada a la derecha).",
      "category_de": "Konzept",
      "title_de": "Übung 3: Normal-Q-Q-Plot-Interpretation",
      "question_de": "Im Normal-Q-Q-Plot der Residuen biegen sich die Punkte oben rechts steil nach oben über die 45-Grad-Diagonale. Was signalisiert dieser Befund?",
      "options_de": [
        "Die Residuen sind perfekt symmetrisch mit minimaler Kurtosis verteilt",
        "Das Modell leidet unter schwerer Multikollinearität in den rechten Quadranten",
        "Die Residuen besitzen einen schwereren rechten Ausläufer als eine reine Normalverteilung (rechtsschiefe Ausreißer)",
        "Die bedingte Varianz der Residuen konvergiert monoton gegen null"
      ],
      "explanation_de": "Richtig! Steigen Residuen rechts über die Diagonale, sind reale Beobachtungen extremer als unter Normalität erwartet: Die Verteilung besitzt schwere rechte Ausläufer."
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
      "title_en": "Exercise 1: What Causes Simpson's Paradox?",
      "question_en": "What is the underlying mechanism that can flip a positive overall correlation between X and Y into a negative association within subgroups (Simpson's Paradox)?",
      "options_en": [
        "An unevenly distributed confounder Z that correlates strongly with both predictor X and outcome Y",
        "Simultaneous occurrence of heteroscedasticity and multicollinearity in the residuals",
        "An arithmetic inconsistency caused by failing to standardize continuous regressors",
        "Exceeding statistical power thresholds in excessively large sample sizes"
      ],
      "explanation_en": "Precisely! Simpson's paradox arises when an omitted third variable (confounder) drives both group assignment and outcome simultaneously.",
      "title_es": "Ejercicio 1: ¿Qué Causa la Paradoja de Simpson?",
      "question_es": "¿Cuál es el mecanismo subyacente por el cual una correlación positiva general entre X e Y puede invertirse a negativa dentro de los subgrupos (Paradoja de Simpson)?",
      "options_es": [
        "Un confusor Z desigualmente distribuido que correlaciona fuertemente tanto con el predictor X como con la respuesta Y",
        "La presencia simultánea de heterocedasticidad y multicolinealidad en los residuos",
        "Una inconsistencia aritmética provocada por no estandarizar regresores continuos",
        "Superar los umbrales de potencia estadística con muestras excesivamente grandes"
      ],
      "explanation_es": "¡Exacto! La paradoja de Simpson surge cuando se omite un confusor que condiciona simultáneamente la asignación de grupos y la respuesta.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Was verursacht das Simpson-Paradoxon?",
      "question_de": "Was ist der zugrunde liegende Mechanismus, durch den eine positive Gesamtkorrelation zwischen X und Y innerhalb von Untergruppen in eine negative Assoziation umschlagen kann (Simpson-Paradoxon)?",
      "options_de": [
        "Ein ungleichmäßig verteilter Confounder Z, der stark mit sowohl dem Prädiktor X als auch der Zielgröße Y korreliert",
        "Das gleichzeitige Auftreten von Heteroskedastizität und Multikollinearität in den Residuen",
        "Eine arithmetische Inkonsistenz, die durch fehlende Standardisierung stetiger Regressoren entsteht",
        "Das Überschreiten statistischer Powergrenzen bei zu großen Stichproben"
      ],
      "explanation_de": "Präzise! Das Simpson-Paradoxon entsteht, wenn ein übersehener Confounder sowohl die Gruppenzuordnung als auch die Zielgröße dominiert."
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
      "title_en": "Exercise 2: Simpson's Paradox at UC Berkeley",
      "question_en": "In the famous UC Berkeley admissions study, men overall appeared to have higher admission rates than women. Yet within nearly every individual department, women had equal or higher acceptance rates. How does multiple regression explain this?",
      "options_en": [
        "Data was distorted by measurement noise in the binary dependent variable",
        "Women disproportionately applied to highly competitive departments with very low baseline admission rates (confounding by department choice)",
        "The selection procedure violated the homoscedasticity assumption across departments",
        "The linear link function failed to converge due to low male respondent counts"
      ],
      "explanation_en": "Brilliant insight! Department was the confounder. Once you control for department in regression, the apparent gender disparity disappears.",
      "title_es": "Ejercicio 2: La Paradoja de Simpson en UC Berkeley",
      "question_es": "En el famoso estudio de admisiones de UC Berkeley, los hombres parecían tener mayor tasa de admisión global que las mujeres. Sin embargo, dentro de cada departamento, las mujeres tenían tasas iguales o superiores. ¿Cómo lo explica la regresión múltiple?",
      "options_es": [
        "Los datos estaban distorsionados por ruido de medida en la variable dependiente binaria",
        "Las mujeres solicitaron admisión desproporcionadamente en departamentos muy competitivos con tasas de admisión bajas (confusión por elección de carrera)",
        "El proceso de selección violó el supuesto de homocedasticidad entre departamentos",
        "La función de enlace lineal no convergió debido a un número insuficiente de hombres"
      ],
      "explanation_es": "¡Brillante! El departamento era el confusor. Al incluir departamento en la regresión (condicionar por facultad), la supuesta discriminación se esfuma.",
      "category_de": "Praxis",
      "title_de": "Übung 2: Das Simpson-Paradoxon an der UC Berkeley",
      "question_de": "In der berühmten Zulassungsstudie der UC Berkeley schienen Männer insgesamt höhere Zulassungschancen zu haben als Frauen. Innerhalb der einzelnen Fakultäten wiesen Frauen jedoch gleiche oder höhere Zulassungsquoten auf. Wie erklärt multiple Regression dies?",
      "options_de": [
        "Die Daten wurden durch Messrauschen in der binären Zielvariablen verzerrt",
        "Frauen bewarben sich überproportional häufig bei stark umkämpften Fakultäten mit sehr niedrigen Gesamtzulassungsquoten (Confounding durch Studienwahl)",
        "Das Auswahlverfahren verletzte die Homoskedastizitätsannahme zwischen den Fachbereichen",
        "Die lineare Linkfunktion konvergierte aufgrund zu geringer männlicher Fallzahlen nicht"
      ],
      "explanation_de": "Brillante Einsicht! Die Fakultät war der Confounder. Sobald man für die Fakultät kontrolliert, verschwindet die scheinbare Ungleichbehandlung sofort."
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
      "title_en": "Exercise 3: Interpreting Partial Regression Coefficients",
      "question_en": "In the model Salary = 30,000 + 2,500 × Education (years) + 1,200 × Experience: how do you correctly interpret the coefficient 2,500?",
      "options_en": [
        "Every citizen with completed education earns at least €2,500 above the average salary",
        "Education explains exactly €2,500 of total residual variance in the population",
        "The correlation coefficient between education and experience is fixed at €2,500",
        "Holding years of work experience constant (ceteris paribus), each additional year of education yields an expected salary increase of €2,500"
      ],
      "explanation_en": "Exact! 'Partial' means the effect of X1 when all other predictors (experience) are held strictly constant.",
      "title_es": "Ejercicio 3: Interpretación de Coeficientes de Regresión Parcial",
      "question_es": "En el modelo Salario = 30.000 + 2.500 × Educación (años) + 1.200 × Experiencia: ¿cómo se interpreta correctamente el coeficiente 2.500?",
      "options_es": [
        "Todo ciudadano con titulación gana al menos 2.500 € por encima del salario medio",
        "Los años de educación explican exactamente 2.500 € de la varianza residual poblacional",
        "El coeficiente de correlación entre educación y experiencia se ha fijado en 2.500 €",
        "Manteniendo constantes los años de experiencia laboral (ceteris paribus), cada año adicional de educación se asocia con un aumento salarial esperado de 2.500 €"
      ],
      "explanation_es": "¡Exacto! 'Parcial' significa el efecto de X1 manteniendo estrictamente constantes los demás predictores (experiencia).",
      "category_de": "Konzept",
      "title_de": "Übung 3: Interpretation partieller Regressionskoeffizienten",
      "question_de": "Im Modell Gehalt = 30.000 + 2.500 × Bildung (Jahre) + 1.200 × Erfahrung: Wie interpretiert man den Koeffizienten 2.500 korrekt?",
      "options_de": [
        "Jeder Bürger mit abgeschlossener Ausbildung verdient mindestens 2.500 € mehr als das Durchschnittsgehalt",
        "Bildungsjahre erklären exakt 2.500 € der gesamten Residualvarianz in der Population",
        "Der Korrelationskoeffizient zwischen Bildung und Erfahrung ist auf 2.500 € fixiert",
        "Bei gleichbleibender Berufserfahrung (ceteris paribus) bringt jedes zusätzliche Bildungsjahr einen erwarteten Gehaltsanstieg von 2.500 €"
      ],
      "explanation_de": "Exakt! 'Partiell' bedeutet: der Effekt von X1, wenn alle anderen Prädiktoren (hier: Erfahrung) konstant gehalten werden."
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
      "title_en": "Exercise 1: Variance Inflation Factor (VIF)",
      "question_en": "A predictor X₁ has a Variance Inflation Factor of VIF = 10 in a regression model. What does this concretely imply for estimation?",
      "options_en": [
        "The correlation coefficient between X₁ and response Y equals r = 0.90",
        "The t-test p-value dropped by a factor of 10 in favor of the alternative hypothesis",
        "The variance of the estimated coefficient β̂₁ is 10 times larger and its standard error is √10 ≈ 3.16 times wider compared to an orthogonal scenario where X₁ is uncorrelated with other predictors",
        "The model requires 10 extra covariates to compensate for estimation uncertainty in β̂₁"
      ],
      "explanation_en": "Correct! VIF measures how much coefficient variance is inflated by collinearity. At VIF = 10, the standard error is over 3x wider than necessary!",
      "title_es": "Ejercicio 1: Factor de Inflación de la Varianza (VIF)",
      "question_es": "Un predictor X₁ tiene un Factor de Inflación de la Varianza VIF = 10 en un modelo de regresión. ¿Qué implica esto concretamente para la estimación?",
      "options_es": [
        "El coeficiente de correlación entre X₁ y la respuesta Y es igual a r = 0,90",
        "El valor p de la prueba t se ha reducido por un factor de 10 a favor de H1",
        "La varianza del coeficiente estimado β̂₁ es 10 veces mayor y su error estándar es √10 ≈ 3,16 veces más amplio en comparación con un escenario ortogonal donde X₁ no está correlacionado con otros predictores",
        "El modelo requiere 10 covariables adicionales para compensar la incertidumbre de β̂₁"
      ],
      "explanation_es": "¡Correcto! El VIF mide cuánto se infla la varianza del coeficiente por colinealidad. Con VIF = 10, ¡el error estándar es más del triple de amplio!",
      "category_de": "Berechnung",
      "title_de": "Übung 1: Varianzinflationsfaktor (VIF)",
      "question_de": "Ein Prädiktor X₁ weist in einem Regressionsmodell einen Varianzinflationsfaktor von VIF = 10 auf. Was bedeutet dies konkret für die Schätzung?",
      "options_de": [
        "Der Korrelationskoeffizient zwischen X₁ und Zielgröße Y ist gleich r = 0,90",
        "Der p-Wert des t-Tests ist um den Faktor 10 zugunsten der Alternativhypothese gesunken",
        "Die Varianz des geschätzten Koeffizienten β̂₁ ist 10-mal größer und der Standardfehler √10 ≈ 3,16-mal breiter im Vergleich zu einem orthogonalen Szenario, in dem X₁ unkorreliert mit anderen Prädiktoren ist",
        "Das Modell benötigt 10 zusätzliche Kovariaten, um die Unsicherheit von β̂₁ auszugleichen"
      ],
      "explanation_de": "Richtig! VIF misst, wie stark die Varianz eines Koeffizienten durch Kollinearität aufgebläht wird. Bei VIF = 10 ist der SE mehr als dreimal so breit wie nötig!"
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
      "title_en": "Exercise 2: High R² with Non-Significant Coefficients",
      "question_en": "Your regression model achieves a very high R² = 0.88 and overall F-test p < 0.0001. Yet none of the 4 individual regressors achieves statistical significance (all p > 0.15). What is happening?",
      "options_en": [
        "The model suffers from selection bias because the dependent variable is non-Gaussian",
        "Severe multicollinearity: predictors share so much overlapping variance that OLS cannot isolate their unique contributions with precision",
        "The sample is too large, causing the Central Limit Theorem to flatten t-statistics",
        "Endogeneity caused by omitted interaction terms"
      ],
      "explanation_en": "Masterful! Classic hallmark of severe multicollinearity: the team as a whole explains the outcome brilliantly, but individual credits cannot be disentangled.",
      "title_es": "Ejercicio 2: Alto R² con Coeficientes No Significativos",
      "question_es": "Tu modelo de regresión tiene un R² = 0,88 muy alto y prueba F global con p < 0,0001. Sin embargo, ninguno de los 4 regresores alcanza significancia estadística individual (todos p > 0,15). ¿Qué ocurre?",
      "options_es": [
        "El modelo sufre sesgo de selección porque la variable dependiente no es gaussiana",
        "Multicolinealidad severa: los predictores comparten tanta varianza solapada que MCO no puede aislar sus aportaciones individuales con precisión",
        "La muestra es demasiado grande, haciendo que el TLC aplane los estadísticos t",
        "Endogeneidad provocada por omitir términos de interacción"
      ],
      "explanation_es": "¡Magistral! Firma clásica de multicolinealidad: el conjunto del modelo funciona de forma excelente, pero no se pueden aislar los créditos individuales.",
      "category_de": "Fallstrick",
      "title_de": "Übung 2: Hohes R² mit nicht-signifikanten Koeffizienten",
      "question_de": "Dein Regressionsmodell hat ein sehr hohes R² = 0,88 und einen F-Test mit p < 0,0001. Jedoch erreicht keiner der 4 einzelnen Regressoren statistische Signifikanz (alle p > 0,15). Was liegt hier vor?",
      "options_de": [
        "Das Modell leidet unter Selektionsbias, weil die abhängige Variable nicht-gaußförmig ist",
        "Schwere Multikollinearität: Die Prädiktoren teilen so viel überlappende Varianz, dass OLS ihre individuellen Beiträge nicht präzise isolieren kann",
        "Die Stichprobe ist zu groß, sodass der Zentrale Grenzwertsatz die t-Statistiken abflacht",
        "Endogenität durch weggelassene Interaktionsterme"
      ],
      "explanation_de": "Meisterhaft! Das typische Muster schwerer Multikollinearität: Das Gesamtensemble liefert Top-Ergebnisse (hohes F und R²), aber Einzeleffekte lassen sich nicht trennen."
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
      "title_en": "Exercise 3: Multicollinearity and Prediction",
      "question_en": "Suppose two predictors are strongly correlated (r = 0.95). Does this harm the overall predictive accuracy (Ŷ) of the model for new data from the same population?",
      "options_en": [
        "Yes: multicollinearity is guaranteed to exponentially bias the point estimate of Ŷ",
        "Yes: conditional prediction variance immediately diverges to infinity",
        "Only when individual VIF values drop below the threshold of 1.0",
        "No: OLS can still accurately predict the combined outcome Ŷ provided the correlation structure among predictors remains stable in the target population; only individual β interpretations are untrustworthy"
      ],
      "explanation_en": "Subtle but vital! Multicollinearity damages parameter interpretation, NOT overall predictive accuracy (as long as predictor correlations remain intact).",
      "title_es": "Ejercicio 3: Multicolinealidad y Predicción",
      "question_es": "Supón que dos predictores están fuertemente correlacionados (r = 0,95). ¿Perjudica esto la capacidad predictiva global (Ŷ) del modelo en datos nuevos de la misma población?",
      "options_es": [
        "Sí: la multicolinealidad sesga exponencialmente la estimación puntual de Ŷ",
        "Sí: la varianza condicional de la predicción diverge de inmediato a infinito",
        "Solo cuando los valores VIF individuales caen por debajo del umbral de 1,0",
        "No: MCO puede predecir con precisión la respuesta combinada Ŷ siempre que la estructura de correlación entre predictores sea estable; solo la interpretación individual de los β no es fiable"
      ],
      "explanation_es": "¡Sutil pero crucial! La multicolinealidad daña la interpretación de coeficientes, NO la precisión predictiva combinada (siempre que la correlación se mantenga).",
      "category_de": "Dilemma",
      "title_de": "Übung 3: Multikollinearität und Prognose",
      "question_de": "Angenommen, zwei Prädiktoren sind stark korreliert (r = 0,95). Beeinträchtigt dies die allgemeine Vorhersagekraft (Ŷ) des Modells für neue Daten aus derselben Population?",
      "options_de": [
        "Ja: Multikollinearität führt garantiert zu einer exponentiellen Verzerrung der Punktschätzung von Ŷ",
        "Ja: Die bedingte Prognosevarianz divergiert sofort gegen unendlich",
        "Nur dann, wenn die einzelnen VIF-Werte den Schwellenwert von 1,0 unterschreiten",
        "Nein: OLS kann die kombinierte Zielgröße Ŷ weiterhin präzise vorhersagen, sofern die Korrelationsstruktur zwischen den Prädiktoren stabil bleibt; nur die Einzelinterpretation der β's ist unzuverlässig"
      ],
      "explanation_de": "Subtil aber essenziell! Multikollinearität schadet der Koeffizienteninterpretation, NICHT der Gesamtprognosekraft (sofern Prädiktorkorrelationen stabil bleiben)."
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
      "title_en": "Exercise 1: From Log-Odds to Odds Ratio",
      "question_en": "In a logistic regression on myocardial infarctions, the estimated coefficient for smoking is β = 0.693. What is the Odds Ratio (OR) and what does it mean clinically?",
      "options_en": [
        "OR = 0.693; absolute risk of heart attack increases by 69.3% in smokers",
        "OR = 1.0; there is no statistically detectable association between smoking and infarction",
        "OR = e^0.693 = 2.0; smokers have twice the odds of experiencing a heart attack compared to non-smokers",
        "OR = 0.50; smokers have half the relative risk of cardiovascular complications"
      ],
      "explanation_en": "Correct! Logistic regression models ln(odds). Exponentiating β yields OR = e^0.693 ≈ 2.0: smokers face twice the odds of a heart attack.",
      "title_es": "Ejercicio 1: De Log-Odds a Odds Ratio",
      "question_es": "En una regresión logística sobre infartos, el coeficiente estimado para tabaquismo es β = 0,693. ¿Cuál es la Odds Ratio (OR) y qué significa clínicamente?",
      "options_es": [
        "OR = 0,693; el riesgo absoluto de infarto aumenta un 69,3% en fumadores",
        "OR = 1,0; no existe asociación estadística demostrable entre fumar e infartos",
        "OR = e^0,693 = 2,0; los fumadores tienen el doble de odds (razón de momios) de sufrir un infarto frente a los no fumadores",
        "OR = 0,50; los fumadores tienen la mitad de riesgo relativo de complicaciones"
      ],
      "explanation_es": "¡Correcto! La regresión logística modela ln(odds). Exponenciando β se obtiene OR = e^0,693 ≈ 2,0: los fumadores tienen el doble de odds.",
      "category_de": "Berechnung",
      "title_de": "Übung 1: Von Log-Odds zur Odds Ratio",
      "question_de": "In einer logistischen Regression zu Herzinfarkten beträgt der geschätzte Koeffizient für Rauchen β = 0,693. Wie lautet die Odds Ratio (OR) und was bedeutet sie klinisch?",
      "options_de": [
        "OR = 0,693; das absolute Infarktrisiko steigt bei Rauchern um 69,3%",
        "OR = 1,0; es gibt keinen statistisch nachweisbaren Zusammenhang",
        "OR = e^0,693 = 2,0; Raucher haben eine doppelt so hohe Chance (Odds) auf einen Herzinfarkt im Vergleich zu Nichtrauchern",
        "OR = 0,50; Raucher haben ein halbiertes relatives Risiko für Komplikationen"
      ],
      "explanation_de": "Richtig! Logistische Regression modelliert ln(Odds). Über die Exponentialfunktion erhält man e^0,693 ≈ 2,0: Raucher haben doppelt so hohe Odds."
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
      "title_en": "Exercise 2: Decision Threshold in Cancer Diagnostics",
      "question_en": "A machine learning model predicts the probability of a malignant tumor. Default decision cutoff is p = 0.50. How do you adjust this cutoff if missed tumors (false negatives) must be minimized at all costs?",
      "options_en": [
        "Lower the threshold (e.g., to p = 0.20) to maximize Sensitivity (Recall), even though false positives (biopsies) increase",
        "Strictly keep the threshold at 0.50, because this mathematically maximizes AUC-ROC",
        "Raise the threshold to p = 0.85 to maximize Specificity and avoid unnecessary panic",
        "Set threshold to complement of prevalence (1 - prevalence) to balance Bayes' theorem"
      ],
      "explanation_en": "Life-saving choice! When consequences of false negatives are fatal, lower the threshold to prioritize Sensitivity (Recall): better 10 benign biopsies than 1 missed tumor.",
      "title_es": "Ejercicio 2: Umbral de Decisión en Diagnóstico Oncológico",
      "question_es": "Un modelo predice la probabilidad de tumor maligno con umbral predeterminado de p = 0,50. ¿Cómo ajustas este umbral si minimizar tumores omitidos (falsos negativos) es prioritario a toda costa?",
      "options_es": [
        "Bajar el umbral (p. ej., a p = 0,20) para maximizar Sensibilidad (Recall), aunque aumenten los falsos positivos (biopsias)",
        "Mantener estrictamente el umbral en 0,50 porque maximiza siempre el AUC-ROC",
        "Subir el umbral a p = 0,85 para maximizar Especificidad y evitar alarmas",
        "Fijar el umbral en el complemento de la prevalencia (1 - prevalencia) para balancear el teorema de Bayes"
      ],
      "explanation_es": "¡Decisión vital! Cuando omitir un positivo es mortal, baja el umbral para priorizar Sensibilidad: mejor 10 biopsias innecesarias que 1 tumor omitido.",
      "category_de": "Dilemma",
      "title_de": "Übung 2: Entscheidungsschwelle in der Krebsdiagnostik",
      "question_de": "Ein KI-Modell prognostiziert die Wahrscheinlichkeit eines bösartigen Tumors. Die Standardschwelle liegt bei p = 0,50. Wie passt du diese Schwelle an, wenn übersehene Tumore (falsch-negativ) um jeden Preis minimiert werden müssen?",
      "options_de": [
        "Die Schwelle senken (z.B. auf p = 0,20), um die Sensitivität (Recall) zu maximieren, auch wenn dadurch falsch-positive Befunde (Biopsien) zunehmen",
        "Die Schwelle strikt bei 0,50 belassen, da dies mathematisch die maximale AUC-ROC garantiert",
        "Die Schwelle auf p = 0,85 anheben, um die Spezifität zu maximieren und Panik zu vermeiden",
        "Die Schwelle auf das Komplement der Prävalenz (1 - Prävalenz) setzen, um den Satz von Bayes auszugleichen"
      ],
      "explanation_de": "Lebensrettende Entscheidung! Wenn falsch-negative Fehler tödlich sind, senkt man die Schwelle zur Maximierung der Sensitivität: Lieber 10 Biopsien zu viel als 1 übersehener Tumor."
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
      "title_en": "Exercise 3: The '99% Accuracy' Fallacy",
      "question_en": "A fraud detection model for credit card transactions (where only 0.1% are fraudulent) achieves 99.9% accuracy by simply classifying EVERY transaction as non-fraudulent. Why is this model useless?",
      "options_en": [
        "Because the Brier score of this model is mathematically undefined for binary outcomes",
        "Because Sensitivity (True Positive Rate) is exactly 0%: it detects literally zero fraudsters. In imbalanced classes, evaluate Precision, Recall, and PR-AUC",
        "Because 99.9% accuracy directly proves the sample size was too small",
        "Because the logit link function becomes unstable when prevalence drops below 5%"
      ],
      "explanation_en": "Classic data science pitfall! The 'Accuracy Paradox'. In imbalanced classes, raw accuracy is meaningless; examine Recall, Precision, and the PR curve.",
      "title_es": "Ejercicio 3: La Falacia de la 'Exactitud del 99%'",
      "question_es": "Un modelo antifraude con tarjetas (donde solo el 0,1% es fraude) alcanza un 99,9% de exactitud clasificando simplemente TODAS las transacciones como no fraudulentas. ¿Por qué es inútil?",
      "options_es": [
        "Porque el Brier score del modelo no está definido para respuestas binarias",
        "Porque la Sensibilidad (True Positive Rate) es exactamente del 0%: no detecta a ningún defraudador. En clases desbalanceadas evalúa Precisión, Recall y PR-AUC",
        "Porque una exactitud del 99,9% indica directamente un tamaño muestral insuficiente",
        "Porque la función logit se desestabiliza cuando la prevalencia cae por debajo del 5%"
      ],
      "explanation_es": "¡Clásica trampa de ciencia de datos! La 'Paradoja de la Exactitud'. Con clases desbalanceadas, la exactitud no sirve; examina Recall, Precisión y la curva PR.",
      "category_de": "Fallstrick",
      "title_de": "Übung 3: Die Täuschung der '99%-Genauigkeit'",
      "question_de": "Ein Betrugserkennungsmodell für Kreditkartentransaktionen (wovon nur 0,1% betrügerisch sind) erreicht 99,9% Genauigkeit, indem es einfach JEDE Transaktion als 'Nicht-betrügerisch' einstuft. Warum ist dieses Modell nutzlos?",
      "options_de": [
        "Weil der Brier-Score dieses Modells bei binären Zielgrößen mathematisch nicht definiert ist",
        "Weil die Sensitivität (True Positive Rate) exakt 0% beträgt: Das Modell erkennt buchstäblich keinen einzigen Betrüger. Bei seltenen Klassen muss man Precision, Recall und PR-AUC bewerten",
        "Weil eine Genauigkeit von 99,9% direkt auf einen zu kleinen Stichprobenumfang hinweist",
        "Weil die Logit-Linkfunktion instabil wird, sobald die Prävalenz unter 5% sinkt"
      ],
      "explanation_de": "Klassischer Fallstrick: Das Genauigkeitsparadoxon (Accuracy Paradox). Bei extrem ungleichen Klassen sagt einfache Genauigkeit nichts aus. Betrachte Recall, Precision und PR-AUC."
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
      "title_en": "Exercise 1: Geometric Difference Between L1 and L2",
      "question_en": "Why does Lasso (L₁ regularization: Σ |β_j|) produce exact sparsity (coefficients set to exactly zero) while Ridge (L₂ regularization: Σ β_j²) does not?",
      "options_en": [
        "Because Ridge regularization can only be applied to standardized Gaussian covariates",
        "Because the L₂ penalty diverges quadratically, mathematically blocking gradient descent to zero",
        "Because the L₁ constraint region has sharp corners on coordinate axes (a diamond in 2D); elliptical OLS contours typically touch a corner first where β_j = 0",
        "Because Lasso relies on analytical matrix inversion while Ridge must be solved iteratively"
      ],
      "explanation_en": "Masterful geometric insight! The diamond shape of L1 has sharp points on the axes. Elliptical error contours hit corners first, driving redundant coefficients to exactly zero.",
      "title_es": "Ejercicio 1: La Diferencia Geométrica entre L1 y L2",
      "question_es": "¿Por qué Lasso (regularización L₁: Σ |β_j|) genera dispersión exacta (coeficientes exactamente cero) mientras que Ridge (regularización L₂: Σ β_j²) no?",
      "options_es": [
        "Porque Ridge solo es aplicable a covariables gaussianas estandarizadas",
        "Porque la penalización L₂ diverge cuadráticamente, bloqueando el descenso del gradiente a cero",
        "Porque la región de restricción L₁ tiene vértices afilados sobre los ejes (un rombo en 2D); las elipses de MCO suelen contactar primero en un vértice donde β_j = 0",
        "Porque Lasso utiliza inversión matricial analítica mientras que Ridge debe resolverse de forma iterativa"
      ],
      "explanation_es": "¡Magistral visión geométrica! La forma de diamante de L1 tiene puntas en los ejes. Las elipses de error contactan primero en las esquinas, fijando parámetros superfluos a cero.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Der geometrische Unterschied zwischen L1 und L2",
      "question_de": "Warum führt Lasso (L₁-Regularisierung: Σ |β_j|) zu exakter Sparsity (Koeffizienten exakt null) und Ridge (L₂-Regularisierung: Σ β_j²) nicht?",
      "options_de": [
        "Weil Ridge-Regularisierung ausschließlich auf standardisierte Gauß-Kovariaten anwendbar ist",
        "Weil die L₂-Strafe quadratisch divergiert und dadurch den Gradientenabstieg nach null blockiert",
        "Weil der L₁-Restriktionsbereich spitze Ecken auf den Koordinatenachsen besitzt (ein Rhombus in 2D); elliptische OLS-Fehlerkonturen berühren typischerweise zuerst eine Ecke, wo β_j = 0 ist",
        "Weil Lasso analytische Matrixinversion nutzt, während Ridge iterativ gelöst werden muss"
      ],
      "explanation_de": "Meisterhafte geometrische Einsicht! Der Rhombus von L1 hat Ecken auf den Achsen. Die Fehlerellipsen berühren zuerst diese Spitzen, wodurch irrelevante Parameter exakt auf 0 gesetzt werden."
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
      "title_en": "Exercise 2: Choosing Between Ridge and Lasso in Gene Expression",
      "question_en": "You analyze 20,000 genes across N = 150 patients. You expect only a small handful (ca. 10–15 genes) to have an authentic biological role in the disease. Which regularization method is preferred?",
      "options_en": [
        "Lasso (L₁), because the L₁ penalty performs automatic variable selection and drives thousands of irrelevant genes to exactly zero",
        "Ridge (L₂), because it retains all 20,000 genes with proportionally shrunken effects, keeping biological pathways intact",
        "Principal Component Regression without penalty, because orthogonal rotation eliminates collinearity",
        "Standard OLS regression, because the Gauss-Markov theorem guarantees BLUE estimators when N < P"
      ],
      "explanation_en": "Correct! In high-dimensional settings (P >> N) with sparse underlying truth, Lasso is unmatched because it eliminates irrelevant features completely.",
      "title_es": "Ejercicio 2: Elección entre Ridge y Lasso en Expresión Génica",
      "question_es": "Analizas 20.000 genes en N = 150 pacientes. Esperas que solo un puñado (unos 10–15 genes) tenga un papel biológico real en la patología. ¿Qué método de regularización es preferible?",
      "options_es": [
        "Lasso (L₁), porque la penalización L₁ realiza selección automática de variables y fija exactamente en cero los miles de genes irrelevantes",
        "Ridge (L₂), porque conserva los 20.000 genes con efectos contraídos proporcionalmente, manteniendo intactas las redes biológicas",
        "Regresión de Componentes Principales sin penalización, porque la rotación ortogonal elimina la colinealidad",
        "Regresión MCO estándar, porque el teorema de Gauss-Markov garantiza estimadores BLUE con N < P"
      ],
      "explanation_es": "¡Correcto! En escenarios de alta dimensionalidad (P >> N) con señales dispersas, Lasso es inigualable porque elimina los factores irrelevantes.",
      "category_de": "Dilemma",
      "title_de": "Übung 2: Wahl zwischen Ridge und Lasso bei Genexpression",
      "question_de": "Du analysierst 20.000 Gene bei N = 150 Patienten. Du erwartest, dass nur eine kleine Handvoll (ca. 10–15 Gene) tatsächlich eine biologische Rolle bei der Erkrankung spielt. Welche Regularisierungsmethode ist zu bevorzugen?",
      "options_de": [
        "Lasso (L₁), da die L₁-Strafe automatische Variablenselektion durchführt und tausende irrelevante Gene exakt auf null setzt",
        "Ridge (L₂), da es alle 20.000 Gene mit proportional geschrumpften Effekten behält und biologische Netzwerke intakt lässt",
        "Hauptkomponentenregression ohne Strafe, da orthogonale Rotation Kollinearität eliminiert",
        "Gewöhnliche OLS-Regression, da das Gauß-Markov-Theorem auch bei N < P beste lineare Schätzer garantiert"
      ],
      "explanation_de": "Richtig! Bei hochdimensionalen Daten (P >> N) mit dünner wahrer Signalstruktur (Sparsity) ist Lasso unübertroffen, da es irrelevante Gene ausfiltert."
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
      "title_en": "Exercise 3: What Happens as Penalty Parameter λ Approaches Infinity?",
      "question_en": "In both Ridge and Lasso regression: what happens to the estimated coefficient vector β̂ as the hyperparameter λ approaches infinity (λ → ∞)?",
      "options_en": [
        "Coefficients converge to unconstrained OLS estimates (minimum bias, maximum variance)",
        "All slope coefficients are driven to exactly zero; the model simply predicts the grand mean ȳ for everyone (maximum bias, minimum variance)",
        "The predictor correlation matrix becomes singular, causing residuals to explode to infinity",
        "The model converges to a non-parametric k-nearest neighbors estimator"
      ],
      "explanation_en": "Exact! When λ = ∞, slopes are zeroed out completely. The model has zero variance across datasets, but maximum bias. This embodies the bias-variance tradeoff.",
      "title_es": "Ejercicio 3: ¿Qué Ocurre cuando el Parámetro de Penalización λ Tiende a Infinito?",
      "question_es": "Tanto en regresión Ridge como Lasso: ¿qué le ocurre al vector de coeficientes estimados β̂ cuando el hiperparámetro λ tiende a infinito (λ → ∞)?",
      "options_es": [
        "Los coeficientes convergen a los estimadores MCO sin restricciones (sesgo mínimo, varianza máxima)",
        "Todas las pendientes se reducen exactamente a cero; el modelo predice simplemente la media general ȳ para todos (sesgo máximo, varianza mínima)",
        "La matriz de correlación de predictores se vuelve singular y los residuos explotan hacia infinito",
        "El modelo converge a un estimador no paramétrico de k vecinos más cercanos"
      ],
      "explanation_es": "¡Exacto! Con λ = ∞, las pendientes se anulan por completo. El modelo tiene varianza cero entre muestras, pero sesgo máximo.",
      "category_de": "Konzept",
      "title_de": "Übung 3: Was geschieht, wenn der Strafparameter λ gegen unendlich geht?",
      "question_de": "Sowohl bei Ridge als auch bei Lasso: Was passiert mit dem geschätzten Koeffizientenvektor β̂, wenn der Hyperparameter λ gegen unendlich strebt (λ → ∞)?",
      "options_de": [
        "Die Koeffizienten konvergieren gegen die unbeschränkten OLS-Schätzer (minimaler Bias, maximale Varianz)",
        "Alle Steigungskoeffizienten werden exakt auf null gesetzt; das Modell prognostiziert für jeden schlicht den Gesamtmittelwert ȳ (maximaler Bias, minimale Varianz)",
        "Die Korrelationsmatrix wird singulär, wodurch die Residuen gegen unendlich explodieren",
        "Das Modell konvergiert gegen einen nicht-parametrischen k-Nächste-Nachbarn-Schätzer"
      ],
      "explanation_de": "Exakt! Bei unendlicher Strafe λ werden alle Steigungen 0. Das Modell hat null Varianz (prognostiziert stets ȳ), aber maximalen Bias."
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
      "title_en": "Exercise 1: Calculating Intraclass Correlation (ICC)",
      "question_en": "In a study of exam scores across schools, between-school variance is σ²_u0 = 4.0 and within-school residual variance is σ²_e = 16.0. What is the Intraclass Correlation Coefficient (ICC)?",
      "options_en": [
        "ICC = 4.0 / 16.0 = 0.25 (a quarter of residual dispersion)",
        "ICC = √(4.0 / 20.0) ≈ 0.447 (adjusted Pearson correlation across classes)",
        "ICC = 16.0 / (4.0 + 16.0) = 0.80 (reliability index of student dispersion)",
        "ICC = 4.0 / (4.0 + 16.0) = 4.0 / 20.0 = 0.20 (20% of all variance is between schools)"
      ],
      "explanation_en": "Correct! ICC = σ²_between / (σ²_between + σ²_within) = 4 / (4 + 16) = 0.20. Fully 20% of score variation is attributable to school-level clustering!",
      "title_es": "Ejercicio 1: Cálculo del Coeficiente de Correlación Intraclase (ICC)",
      "question_es": "En un estudio de calificaciones entre colegios, la varianza entre centros es σ²_u0 = 4,0 y la varianza residual intra-centro es σ²_e = 16,0. ¿Cuál es el Coeficiente de Correlación Intraclase (ICC)?",
      "options_es": [
        "ICC = 4,0 / 16,0 = 0,25 (un cuarto de la dispersión residual)",
        "ICC = √(4,0 / 20,0) ≈ 0,447 (correlación de Pearson corregida entre clases)",
        "ICC = 16,0 / (4,0 + 16,0) = 0,80 (índice de fiabilidad de la dispersión)",
        "ICC = 4,0 / (4,0 + 16,0) = 4,0 / 20,0 = 0,20 (el 20% de la varianza total se sitúa entre colegios)"
      ],
      "explanation_es": "¡Correcto! ICC = σ²_entre / (σ²_entre + σ²_intra) = 4 / (4 + 16) = 0,20. ¡Un 20% de toda la variabilidad se debe al centro escolar!",
      "category_de": "Berechnung",
      "title_de": "Übung 1: Berechnung der Intraclass-Korrelation (ICC)",
      "question_de": "In einer Schulleistungsstudie beträgt die Varianz zwischen Schulen σ²_u0 = 4,0 und die Residualvarianz innerhalb der Schulen σ²_e = 16,0. Wie hoch ist der Intraklassen-Korrelationskoeffizient (ICC)?",
      "options_de": [
        "ICC = 4,0 / 16,0 = 0,25 (ein Viertel der Residualstreuung)",
        "ICC = √(4,0 / 20,0) ≈ 0,447 (korrigierte Pearson-Korrelation zwischen Klassen)",
        "ICC = 16,0 / (4,0 + 16,0) = 0,80 (Zuverlässigkeitsindex der Schülerstreuung)",
        "ICC = 4,0 / (4,0 + 16,0) = 4,0 / 20,0 = 0,20 (20% der Gesamtvarianz liegt zwischen den Schulen)"
      ],
      "explanation_de": "Richtig! ICC = σ²_between / (σ²_between + σ²_within) = 4 / (4 + 16) = 0,20. Ganze 20% der Gesamtvarianz der Noten gehen auf Schulunterschiede zurück!"
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
      "title_en": "Exercise 2: Pseudoreplication Pitfall",
      "question_en": "You measure blood pressure in 30 patients across 10 consecutive days (300 total measurements). Why must you NOT run standard OLS regression with N = 300?",
      "options_en": [
        "Because OLS cannot mathematically converge when measurements per person are balanced",
        "OLS assumes 300 completely independent individuals; due to clustering within patients, standard errors are severely underestimated, leading to rampant false-positive significant effects (pseudoreplication)",
        "Because the conditional expectation of blood pressure is strictly non-linear by definition",
        "Because repeated measurements destroy the normality of the response variable"
      ],
      "explanation_en": "Spot-on! Pseudoreplication treats dependent repeat measures as new independent evidence, artificially shrinking standard errors and exaggerating certainty.",
      "title_es": "Ejercicio 2: La Trampa de la Pseudoreplicación",
      "question_es": "Mides la presión arterial en 30 pacientes durante 10 días consecutivos (300 mediciones en total). ¿Por qué NO debes aplicar regresión lineal MCO estándar con N = 300?",
      "options_es": [
        "Porque MCO no puede converger cuando el número de mediciones por persona es idéntico",
        "MCO calcula como si tuvieses 300 individuos independientes; por la agrupación en pacientes, los errores estándar se subestiman enormemente, inflando falsos positivos (pseudoreplicación)",
        "Porque la esperanza condicional de la presión arterial es estrictamente no lineal",
        "Porque las medidas repetidas destruyen la normalidad de la variable dependiente"
      ],
      "explanation_es": "¡Totalmente acertado! Pseudoreplicación trata medidas repetidas dependientes como nueva evidencia independiente, subestimando errores y creando falsa certidumbre.",
      "category_de": "Fallstrick",
      "title_de": "Übung 2: Die Pseudoreplikations-Falle",
      "question_de": "Du misst den Blutdruck bei 30 Patienten an 10 aufeinanderfolgenden Tagen (insgesamt 300 Messungen). Warum darfst du hier KEINE Standard-OLS-Regression mit N = 300 durchführen?",
      "options_de": [
        "Weil OLS mathematisch nicht konvergieren kann, wenn die Anzahl der Messungen pro Person balanciert ist",
        "OLS rechnet so, als lägen 300 völlig unabhängige Individuen vor; durch die Clusterung innerhalb der Patienten werden Standardfehler drastisch unterschätzt und OLS meldet massive Scheinsignifikanzen (Pseudoreplikation)",
        "Weil der bedingte Erwartungswert des Blutdrucks per Definition nichtlinear ist",
        "Weil wiederholte Messungen die Normalität der Zielgröße zerstören"
      ],
      "explanation_de": "Volltreffer! Pseudoreplikation behandelt abhängige Wiederholungsmessungen als unabhängige Information und erzeugt künstliche Scheinsignifikanz."
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
      "title_en": "Exercise 3: When is Pooled OLS Acceptable?",
      "question_en": "When is it statistically sound to analyze a clustered dataset with standard OLS without requiring a multilevel model?",
      "options_en": [
        "Whenever the intra-cluster correlation exceeds 0.75",
        "If total observations exceed N = 10,000 regardless of cluster size",
        "When all cluster means are symmetrically distributed around the grand mean",
        "When ICC < 0.05 (less than 5% between-group variance) AND the Design Effect (DEFF = 1 + (m - 1) × ICC) is close to 1.0 (e.g., DEFF < 1.1)"
      ],
      "explanation_en": "Very prudent! If ICC is negligible (< 0.05) and cluster sizes are small, design effects approach 1.0 and OLS yields virtually unbiased inferences.",
      "title_es": "Ejercicio 3: ¿Cuándo es Aceptable MCO Agrupado?",
      "question_es": "¿Cuándo es estadísticamente justificable analizar un conjunto de datos agrupados con MCO estándar sin recurrir a un modelo multinivel?",
      "options_es": [
        "En cuanto la correlación intraclase sea superior a 0,75",
        "Si el total de observaciones supera N = 10.000 independientemente del tamaño del cluster",
        "Cuando todas las medias de grupo sean perfectamente simétricas respecto a la media global",
        "Cuando el ICC < 0,05 (menos del 5% de varianza entre grupos) Y el Efecto de Diseño (DEFF = 1 + (m - 1) × ICC) esté próximo a 1,0 (p. ej., DEFF < 1,1)"
      ],
      "explanation_es": "¡Muy sensato! Si el ICC es despreciable (< 0,05) y los clusters son pequeños, el efecto de diseño es cercano a 1,0 y MCO arroja inferencias válidas.",
      "category_de": "Dilemma",
      "title_de": "Übung 3: Wann ist gepooltes OLS vertretbar?",
      "question_de": "Wann ist es statistisch vertretbar, einen geclusterten Datensatz mit Standard-OLS ohne Mehrebenenmodell zu analysieren?",
      "options_de": [
        "Sobald die Intraklassen-Korrelation größer als 0,75 ist",
        "Wenn die Gesamtzahl der Beobachtungen größer als N = 10.000 ist, unabhängig von der Clustergröße",
        "Wenn alle Clustermittelwerte exakt symmetrisch um den Gesamtmittelwert liegen",
        "Wenn ICC < 0,05 (weniger als 5% Zwischengruppenvarianz) UND der Design-Effekt (DEFF = 1 + (m - 1) × ICC) nahe bei 1,0 liegt (z.B. DEFF < 1,1)"
      ],
      "explanation_de": "Sehr klug! Bei vernachlässigbarem ICC (< 0,05) und kleinen Gruppen ist der Designeffekt nahe 1,0 und Standard-OLS liefert unverzerrte Ergebnisse."
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
      "title_en": "Exercise 1: Fixed vs Random Effects",
      "question_en": "In the multilevel model Y_ij = (β0 + u_0j) + β1 X_ij + e_ij: what is the fundamental conceptual difference between β1 and u_0j?",
      "options_en": [
        "β1 is individual-level measurement error and u_0j is the regression constant",
        "β1 is the fixed effect applicable across the entire population; u_0j is the random residual deviation of baseline level for specific cluster j",
        "β1 varies across clusters while u_0j is constant for all schools simultaneously",
        "Both are identical Gaussian error terms randomly distributed with mean zero"
      ],
      "explanation_en": "Exact! β1 is the population-wide fixed slope. u_0j is the random intercept deviation for group j (how much group j differs from baseline β0).",
      "title_es": "Ejercicio 1: Efectos Fijos frente a Efectos Aleatorios",
      "question_es": "En el modelo multinivel Y_ij = (β0 + u_0j) + β1 X_ij + e_ij: ¿cuál es la diferencia conceptual fundamental entre β1 y u_0j?",
      "options_es": [
        "β1 es el error de medida individual y u_0j es la constante de regresión",
        "β1 es el efecto fijo aplicable a toda la población; u_0j es la desviación residual aleatoria del nivel base del cluster j",
        "β1 varía por cluster mientras que u_0j es constante para todas las escuelas",
        "Ambos son términos de error gaussianos idénticos distribuidos con media cero"
      ],
      "explanation_es": "¡Exacto! β1 es la pendiente fija poblacional. u_0j es el intercepto aleatorio del cluster j respecto a la media global β0.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Feste vs. Zufällige Effekte",
      "question_de": "In der Mehrebenengleichung Y_ij = (β0 + u_0j) + β1 X_ij + e_ij: Was ist der fundamentale Unterschied zwischen β1 und u_0j?",
      "options_de": [
        "β1 ist der Messfehler auf individueller Ebene und u_0j ist die Regressionskonstante",
        "β1 ist der feste (fixed) Effekt für die Gesamtpopulation; u_0j ist die zufällige (random) Residualabweichung des Startniveaus für das spezifische Cluster j",
        "β1 variiert pro Cluster und u_0j ist für alle Schulen konstant",
        "Beide sind identische gaußförmige Störterme mit Mittelwert null"
      ],
      "explanation_de": "Exakt! β1 ist die feste Populationssteigung. u_0j ist das zufällige Intercept von Cluster j relativ zum Gesamtmittelwert β0."
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
      "title_en": "Exercise 2: Shrinkage and Partial Pooling",
      "question_en": "At School X, only 2 students are enrolled, both happening to score 9.5. Why does a Random Intercept model estimate School X's expected score at 7.8 (much closer to the grand mean of 7.0)?",
      "options_en": [
        "Because shrinkage automatically pulls small clusters with little evidence toward the grand population mean (partial pooling) to prevent overfitting to extreme noise",
        "Because observations scoring above 9.0 are automatically trimmed as measurement errors",
        "Because the model applies a penalty based on Student's t distribution with 1 degree of freedom",
        "Because restricted maximum likelihood (REML) always discards clusters smaller than N = 5"
      ],
      "explanation_en": "Masterful! Empirical Bayes shrinkage borrows statistical strength from the entire population, pulling noisy, low-sample clusters safely toward the global mean.",
      "title_es": "Ejercicio 2: Contracción (Shrinkage) y Agrupación Parcial",
      "question_es": "En la Escuela X solo hay 2 estudiantes matriculados, y ambos obtienen 9,5. ¿Por qué un modelo de interceptos aleatorios estima el nivel esperado de la Escuela X en 7,8 (mucho más cerca de la media global de 7,0)?",
      "options_es": [
        "Porque la contracción (shrinkage) atrae automáticamente los clusters pequeños hacia la media poblacional (partial pooling) para evitar sobreajuste a ruido extremo",
        "Porque las observaciones por encima de 9,0 se recortan como errores de medida",
        "Porque el modelo aplica una penalización basada en t de Student con 1 grado de libertad",
        "Porque la máxima verosimilitud restringida (REML) siempre descarta clusters menores de N = 5"
      ],
      "explanation_es": "¡Magistral! La contracción empírica de Bayes toma fuerza del conjunto poblacional, contrayendo clusters ruidosos hacia la media global.",
      "category_de": "Konzept",
      "title_de": "Übung 2: Shrinkage und Partial Pooling",
      "question_de": "An Schule X lernen nur 2 Schüler, die zufällig beide eine 9,5 erzielen. Warum schätzt ein Random-Intercept-Modell das erwartete Niveau von Schule X auf 7,8 (viel näher am Gesamtmittelwert von 7,0)?",
      "options_de": [
        "Weil Shrinkage kleine Cluster mit geringer Evidenz automatisch zum Gesamtpopulationsmittelwert zieht (Partial Pooling), um Overfitting auf extremes Rauschen zu verhindern",
        "Weil Beobachtungen über 9,0 automatisch als Messfehler bereinigt werden",
        "Weil das Modell eine Strafe basierend auf der t-Verteilung mit 1 Freiheitsgrad berechnet",
        "Weil Restricted Maximum Likelihood (REML) Cluster kleiner als N = 5 stets ignoriert"
      ],
      "explanation_de": "Meisterhaft! Empirical Bayes Shrinkage leiht Information aus der Gesamtpopulation und zieht kleine, verrauschte Cluster verlässlich zur Mitte."
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
      "title_en": "Exercise 3: Random Intercepts vs 199 Dummy Variables",
      "question_en": "You investigate clinical complications across 200 hospitals. Why is a Random Intercept model superior to fitting 199 separate hospital dummy variables (Fixed Effects)?",
      "options_en": [
        "Because dummy variables cannot mathematically be estimated via standard matrix inversion",
        "Because fixed effects dummies immediately invalidate the Gauss-Markov theorem",
        "199 dummies consume 199 degrees of freedom and overfit small hospitals, while a Random Intercept estimates only 1 variance parameter σ²_u0 and allows hospital-level predictors (like budget)",
        "Because a Random Intercept forces all hospital complication rates to be strictly equal"
      ],
      "explanation_en": "Spot-on! 199 fixed dummies waste statistical power and forbid hospital-level covariates. Random intercepts treat hospitals as draws from a population, estimating just σ²_u0.",
      "title_es": "Ejercicio 3: Interceptos Aleatorios frente a 199 Variables Ficticias",
      "question_es": "Investigas complicaciones en 200 hospitales. ¿Por qué es preferible un modelo de interceptos aleatorios antes que ajustar 199 variables ficticias por hospital (efectos fijos)?",
      "options_es": [
        "Porque las variables ficticias no pueden estimarse mediante inversión matricial clásica",
        "Porque las variables ficticias invalidan inmediatamente el teorema de Gauss-Markov",
        "199 variables ficticias consumen 199 grados de libertad y sobreajustan hospitales pequeños, mientras que el intercepto aleatorio solo estima 1 parámetro de varianza σ²_u0 y permite predictores de hospital",
        "Porque el intercepto aleatorio fuerza que todos los hospitales tengan idéntica tasa de complicaciones"
      ],
      "explanation_es": "¡Totalmente acertado! 199 ficticias destruyen grados de libertad e impiden variables de nivel hospital. El intercepto aleatorio solo estima σ²_u0.",
      "category_de": "Dilemma",
      "title_de": "Übung 3: Random Intercepts vs. 199 Dummy-Variablen",
      "question_de": "Du untersuchst Komplikationen in 200 Krankenhäusern. Warum ist ein Random-Intercept-Modell 199 separaten Dummy-Variablen (Fixed Effects) überlegen?",
      "options_de": [
        "Weil Dummy-Variablen über normale Matrixinversion mathematisch nicht geschätzt werden können",
        "Weil Fixed-Effects-Dummies das Gauß-Markov-Theorem sofort ungültig machen",
        "199 Dummies verbrauchen 199 Freiheitsgrade und überfitten kleine Kliniken, während ein Random Intercept nur 1 Varianzparameter σ²_u0 schätzt und Prädiktoren auf Klinikebene (wie Budget) erlaubt",
        "Weil ein Random Intercept erzwingt, dass alle Kliniken identische Komplikationsraten aufweisen"
      ],
      "explanation_de": "Volltreffer! 199 Dummies vernichten Freiheitsgrade und verbieten Variablen auf Klinikebene. Random Intercepts schätzen lediglich einen einzigen Varianzparameter σ²_u0."
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
      "title_en": "Exercise 1: Random Intercept vs Random Slope",
      "question_en": "What is the visual and mathematical difference between a Random Intercept model and a Random Slope model in longitudinal patient trajectories?",
      "options_en": [
        "Random Intercept yields crossing lines; Random Slope yields purely horizontal trajectories",
        "Random Slope can only be fitted when patient follow-up intervals are discrete integers",
        "There is no mathematical difference; both models estimate identical variance components",
        "Random Intercept: parallel lines (same rate of change, different starting levels). Random Slope: lines with individual slopes per cluster (varying recovery speeds or treatment responses per patient)"
      ],
      "explanation_en": "Correct! Random slopes allow each subject to respond differently over time. Lines are no longer parallel, but fan out or cross.",
      "title_es": "Ejercicio 1: Intercepto Aleatorio frente a Pendiente Aleatoria",
      "question_es": "¿Cuál es la diferencia visual y matemática entre un modelo de interceptos aleatorios y uno de pendientes aleatorias en trayectorias longitudinales de pacientes?",
      "options_es": [
        "El intercepto aleatorio produce líneas cruzadas; la pendiente aleatoria produce rectas horizontales",
        "La pendiente aleatoria solo se puede ajustar con intervalos de seguimiento enteros discretos",
        "No existe diferencia matemática; ambos modelos estiman idénticos componentes de varianza",
        "Intercepto Aleatorio: rectas paralelas (misma pendiente, distinto punto de partida). Pendiente Aleatoria: rectas con pendiente propia por cluster (distinto ritmo de recuperación por paciente)"
      ],
      "explanation_es": "¡Correcto! Las pendientes aleatorias permiten que cada paciente responda a distinto ritmo. Las trayectorias dejan de ser paralelas.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Random Intercept vs. Random Slope",
      "question_de": "Was ist der visuelle und mathematische Unterschied zwischen einem Random-Intercept- und einem Random-Slope-Modell bei Längsschnitt-Trajektorien von Patienten?",
      "options_de": [
        "Random Intercept ergibt kreuzende Linien; Random Slope erzeugt rein horizontale Trajektorien",
        "Random Slope kann nur angepasst werden, wenn die Folgeintervalle ganzzahlig diskret sind",
        "Es gibt keinen mathematischen Unterschied; beide Modelle schätzen identische Varianzkomponenten",
        "Random Intercept: parallele Linien (gleiche Steigung, unterschiedlicher Startwert). Random Slope: Linien mit individuellem Steigungswinkel pro Cluster (unterschiedliche Genesungsgeschwindigkeit pro Patient)"
      ],
      "explanation_de": "Richtig! Bei Random Slopes reagiert jedes Individuum unterschiedlich auf die Zeit. Die Linien verlaufen nicht mehr parallel, sondern fächern auf."
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
      "title_en": "Exercise 2: Correlation Between Intercept and Slope",
      "question_en": "In a rehabilitation clinical trial, your mixed model estimates a correlation of ρ = -0.65 between Random Intercept (u_0j) and Random Slope (u_1j). What does this mean clinically?",
      "options_en": [
        "Patients starting in a more severe baseline condition (lower initial level u_0) exhibit a faster rate of recovery per month (higher positive slope u_1): a classic catch-up effect!",
        "The therapy has adverse effects for patients starting with low baseline values",
        "The estimate is mathematically invalid because random effect covariances must be positive",
        "The model suffers from severe overspecification and should be reduced to standard ANOVA"
      ],
      "explanation_en": "Spot-on! Negative correlation between intercept and slope is a well-known clinical phenomenon: patients with the greatest impairment have the most room for substantial improvement.",
      "title_es": "Ejercicio 2: Correlación entre Intercepto y Pendiente",
      "question_es": "En un ensayo de rehabilitación, tu modelo mixto estima una correlación de ρ = -0,65 entre el intercepto aleatorio (u_0j) y la pendiente aleatoria (u_1j). ¿Qué significa clínicamente?",
      "options_es": [
        "Los pacientes que parten de un estado más grave (menor nivel basal u_0) muestran un ritmo de recuperación más rápido (pendiente positiva u_1 más alta): ¡efecto recuperación clásico!",
        "La terapia resulta contraproducente para pacientes con nivel basal bajo",
        "La estimación es matemáticamente inválida porque las covarianzas de efectos aleatorios deben ser positivas",
        "El modelo sufre sobreajuste severo y debe simplificarse a un ANOVA clásico"
      ],
      "explanation_es": "¡Totalmente acertado! Correlación negativa entre intercepto y pendiente refleja que pacientes con mayor gravedad tienen mayor margen de mejora.",
      "category_de": "Praxis",
      "title_de": "Übung 2: Korrelation zwischen Intercept und Slope",
      "question_de": "In einer Reha-Studie schätzt dein Modell eine Korrelation von ρ = -0,65 zwischen Random Intercept (u_0j) und Random Slope (u_1j). Was bedeutet dies klinisch?",
      "options_de": [
        "Patienten mit schlechterem Ausgangszustand (niedriges Startniveau u_0) weisen ein schnelleres monatliches Genesungstempo auf (hohe positive Steigung u_1): ein klassischer Aufholeffekt!",
        "Die Therapie wirkt kontraproduktiv bei Patienten mit niedrigem Startwert",
        "Die Schätzung ist ungültig, da Kovarianzen zwischen Zufallseffekten stets positiv sein müssen",
        "Das Modell leidet unter Überspezifikation und muss zu einer ANOVA vereinfacht werden"
      ],
      "explanation_de": "Volltreffer! Eine negative Korrelation zwischen Startwert und Zuwachs ist klinisch typisch: Patienten mit schwerem Ausgangszustand haben das größte Verbesserungspotenzial."
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
      "title_en": "Exercise 3: Mixed Models vs Repeated Measures ANOVA with Dropouts",
      "question_en": "In a 5-year longitudinal study, 30% of patients miss at least one follow-up visit. Why is a Linear Mixed Model far superior to classical Repeated Measures ANOVA?",
      "options_en": [
        "Because Mixed Models assume missing data is always Missing Completely at Random (MCAR)",
        "Because Mixed Models always impute missing values using the population median",
        "Because Repeated Measures ANOVA cannot compute confidence intervals",
        "Repeated Measures ANOVA discards a subject completely if a single visit is missing (listwise deletion); a Mixed Model utilizes all available visits under Missing at Random (MAR)"
      ],
      "explanation_en": "Crucial advantage! RM-ANOVA discards entire subjects upon a single missing visit, destroying statistical power and introducing attrition bias. Mixed models handle unbalanced longitudinal panels seamlessly.",
      "title_es": "Ejercicio 3: Modelos Mixtos frente a ANOVA de Medidas Repetidas ante Abandonos",
      "question_es": "En un estudio longitudinal de 5 años, el 30% de pacientes falta al menos a una visita de seguimiento. ¿Por qué es un Modelo Mixto muy superior al ANOVA de medidas repetidas clásico?",
      "options_es": [
        "Porque los modelos mixtos asumen que los datos faltan completamente al azar (MCAR)",
        "Porque los modelos mixtos siempre imputan datos faltantes con la mediana poblacional",
        "Porque el ANOVA de medidas repetidas no puede calcular intervalos de confianza",
        "El ANOVA de medidas repetidas descarta por completo al paciente si falta una sola visita (eliminación por lista); el Modelo Mixto aprovecha todas las visitas disponibles bajo Datos Faltantes al Azar (MAR)"
      ],
      "explanation_es": "¡Ventaja decisiva! RM-ANOVA descarta pacientes enteros por una sola visita perdida. Los modelos mixtos aprovechan todos los datos observados bajo el supuesto MAR.",
      "category_de": "Dilemma",
      "title_de": "Übung 3: Mixed Models vs. Repeated Measures ANOVA bei Dropouts",
      "question_de": "In einer 5-jährigen Längsschnittstudie verpassen 30% der Patienten mindestens einen Untersuchungstermin. Warum ist ein lineares gemischtes Modell (LMM) einer klassischen Repeated Measures ANOVA überlegen?",
      "options_de": [
        "Weil gemischte Modelle voraussetzen, dass fehlende Werte stets Missing Completely at Random (MCAR) sind",
        "Weil gemischte Modelle fehlende Werte immer durch den Populationsmedian ersetzen",
        "Weil Repeated Measures ANOVA keine Konfidenzintervalle berechnen kann",
        "Repeated Measures ANOVA verwirft einen Patienten komplett, sobald ein einziger Messtermin fehlt (Listwise Deletion); ein gemischtes Modell nutzt alle verfügbaren Zeitpunkte optimal unter Missing at Random (MAR)"
      ],
      "explanation_de": "Kardinaler Vorteil gemischter Modelle! RM-ANOVA wirft Patienten mit einer einzigen Fehlmessung komplett weg. Mixed Models nutzen jeden vorhandenen Datenpunkt unter MAR optimal."
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
      "title_en": "Exercise 1: Modeling Clustered Count Data",
      "question_en": "You count the monthly number of epileptic seizures (discrete count data: 0, 1, 2, 5...) in 80 patients tracked over 6 months. Which statistical model is theoretically and practically best suited?",
      "options_en": [
        "Standard linear OLS regression with robust Newey-West standard errors",
        "Logistic regression where seizures are dichotomized into 0 vs ≥ 1",
        "A Poisson or Negative Binomial Generalized Linear Mixed Model (GLMM) with log link and random intercepts per patient",
        "Classical repeated measures ANOVA after square-root transforming the counts"
      ],
      "explanation_en": "Excellent! Count data is non-negative and integer-valued. A Poisson/Negative Binomial GLMM enforces positive predictions while modeling patient-level repeated measures.",
      "title_es": "Ejercicio 1: Modelado de Datos de Conteo Agrupados",
      "question_es": "Cuentas el número mensual de crisis epilépticas (datos de conteo discretos: 0, 1, 2, 5...) en 80 pacientes seguidos durante 6 meses. ¿Qué modelo estadístico es el más adecuado?",
      "options_es": [
        "Regresión lineal MCO estándar con errores robustos de Newey-West",
        "Regresión logística dicotomizando las crisis en 0 frente a ≥ 1",
        "Un Modelo Mixto Lineal Generalizado (GLMM) Poisson o Binomial Negativo con enlace logarítmico e interceptos aleatorios por paciente",
        "ANOVA clásico de medidas repetidas tras transformar las cuentas con raíz cuadrada"
      ],
      "explanation_es": "¡Excelente! Los conteos son enteros no negativos. Un GLMM Poisson/Binomial Negativo garantiza valores positivos y modela la dependencia intra-paciente.",
      "category_de": "Praxis",
      "title_de": "Übung 1: Modellierung geclusterter Zähldaten",
      "question_de": "Du erfasst die monatliche Anzahl epileptischer Anfälle (diskrete Zähldaten: 0, 1, 2, 5...) bei 80 Patienten über 6 Monate. Welches Modell ist theoretisch und praktisch am besten geeignet?",
      "options_de": [
        "Gewöhnliche lineare OLS-Regression mit robusten Newey-West-Standardfehlern",
        "Eine logistische Regression, bei der Anfälle in 0 vs. ≥ 1 dichotomisiert werden",
        "Ein Poisson- oder Negativ-Binomial-GLMM (Generalized Linear Mixed Model) mit Log-Link und Random Intercepts pro Patient",
        "Eine klassische ANOVA mit wiederholten Messungen nach Quadratwurzeltransformation"
      ],
      "explanation_de": "Ausgezeichnet! Zähldaten sind ganzzahlig und nicht-negativ. Ein Poisson/Negativ-Binomial-GLMM garantiert positive Vorhersagen und modelliert Patientencluster."
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
      "title_en": "Exercise 2: Interpreting GLMM Coefficients",
      "question_en": "In a logistic GLMM for hospital-acquired infections, the fixed effect coefficient for a new hygiene protocol is β = -0.85. How do you interpret this coefficient?",
      "options_en": [
        "The absolute risk of infection drops by exactly 85 percentage points for every admitted patient",
        "Odds Ratio = e^-0.85 ≈ 0.43: protocol implementation reduces the odds of infection by approximately 57% within the same hospital (cluster-specific conditional effect)",
        "The probability of infection is divided by a factor of -0.85 regardless of hospital level",
        "The correlation between hygiene protocol and complications equals r = -0.85"
      ],
      "explanation_en": "Correct! Exponentiating β yields OR = e^-0.85 ≈ 0.427, representing a 1 - 0.427 = 57.3% reduction in infection odds within any given hospital.",
      "title_es": "Ejercicio 2: Interpretación de Coeficientes en GLMM",
      "question_es": "En un GLMM logístico sobre infecciones hospitalarias, el coeficiente de efecto fijo de un nuevo protocolo de higiene es β = -0,85. ¿Cómo se interpreta este coeficiente?",
      "options_es": [
        "El riesgo absoluto de infección se reduce exactamente en 85 puntos porcentuales para cada paciente",
        "Odds Ratio = e^-0,85 ≈ 0,43: el protocolo reduce las odds de infección en torno al 57% dentro de un mismo hospital (efecto condicional por cluster)",
        "La probabilidad de infección se divide por un factor de -0,85 independientemente del hospital",
        "La correlación entre el protocolo y las complicaciones es igual a r = -0,85"
      ],
      "explanation_es": "¡Correcto! Exponenciando β: OR = e^-0,85 ≈ 0,427, lo que supone una reducción del 1 - 0,427 = 57,3% en las odds de infección dentro de un hospital.",
      "category_de": "Berechnung",
      "title_de": "Übung 2: Interpretation von GLMM-Koeffizienten",
      "question_de": "In einem logistischen GLMM für Krankenhausinfektionen beträgt der Fixed-Effect-Koeffizient für ein neues Hygieneprotokoll β = -0,85. Wie interpretiert man diesen Effekt?",
      "options_de": [
        "Das absolute Infektionsrisiko sinkt für jeden aufgenommenen Patienten um exakt 85 Prozentpunkte",
        "Odds Ratio = e^-0,85 ≈ 0,43: Die Einführung des Protokolls senkt die Infektions-Odds innerhalb desselben Krankenhauses um ca. 57% (konditionaler clusterspezifischer Effekt)",
        "Die Infektionswahrscheinlichkeit wird unabhängig vom Krankenhaus durch den Faktor -0,85 geteilt",
        "Die Korrelation zwischen Hygieneprotokoll und Komplikationen beträgt r = -0,85"
      ],
      "explanation_de": "Richtig! Über die e-Funktion ergibt sich e^-0,85 ≈ 0,427, was einer 57%igen Reduktion der Infektions-Odds innerhalb derselben Klinik entspricht."
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
      "title_en": "Exercise 3: Overdispersion in Poisson GLMM",
      "question_en": "In a Poisson GLMM, residual deviance is more than double the residual degrees of freedom (Ratio = 2.4). What does this diagnose and how do you resolve it?",
      "options_en": [
        "Overdispersion: data variance exceeds the mean (violating the Poisson assumption Var = Mean). Transition to a Negative Binomial model or add an observation-level random effect",
        "Multicollinearity between random intercepts and fixed time factors",
        "The model fails to converge because the log link must be replaced by a probit link",
        "Underdispersion: the sample is excessively homogeneous; drop subjects with zero counts"
      ],
      "explanation_en": "Spot-on! Poisson forces Mean = Variance. When variance exceeds the mean (overdispersion), standard errors are underestimated; Negative Binomial GLMM includes a dispersion parameter to account for extra variance.",
      "title_es": "Ejercicio 3: Sobredispersión en GLMM Poisson",
      "question_es": "En un GLMM Poisson observas que la devianza residual duplica los grados de libertad (ratio = 2,4). ¿Qué diagnostica esto y cuál es la solución?",
      "options_es": [
        "Sobredispersión: la varianza de los datos supera a la media (violando el supuesto Poisson Var = Media). Cambia a Binomial Negativa o añade un efecto aleatorio a nivel de observación",
        "Multicolinealidad entre los interceptos aleatorios y los factores temporales fijos",
        "El modelo no converge porque el enlace logarítmico debe sustituirse por probit",
        "Subdispersión: la muestra es demasiado homogénea; elimina los pacientes con cero crisis"
      ],
      "explanation_es": "¡Totalmente acertado! Poisson asume Media = Varianza. Cuando la varianza es superior (sobredispersión), la Binomial Negativa modela la variabilidad extra.",
      "category_de": "Fallstrick",
      "title_de": "Übung 3: Überdispersion im Poisson-GLMM",
      "question_de": "In einem Poisson-GLMM ist die Residual-Devianz mehr als doppelt so groß wie die Freiheitsgrade (Verhältnis = 2,4). Was bedeutet das und was ist die Lösung?",
      "options_de": [
        "Überdispersion: Die Datenvarianz übersteigt den Mittelwert (Verletzung der Poisson-Annahme Var = Mean). Wechsle zu einem Negativ-Binomial-Modell oder ergänze einen Random Effect auf Beobachtungsebene",
        "Multikollinearität zwischen den Random Intercepts und festen Zeitfaktoren",
        "Das Modell konvergiert nicht, weil der Log-Link durch einen Probit-Link ersetzt werden muss",
        "Unterdispersion: Die Stichprobe ist zu homogen; entferne Patienten mit null Anfällen"
      ],
      "explanation_de": "Volltreffer! Poisson setzt Mean = Var voraus. Ist die Varianz größer (Überdispersion), fängt ein Negativ-Binomial-Modell die zusätzliche Streuung zuverlässig auf."
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
      "title_en": "Exercise 1: How GAMs Model Non-Linearity",
      "question_en": "How does a Generalized Additive Model (GAM) represent non-linear relationships between a predictor X and outcome Y?",
      "options_en": [
        "By segmenting the dataset into discrete intervals and training a decision tree within each bin",
        "By fitting an unpenalized 10th-degree polynomial to the raw observations",
        "Via a linear combination of flexible basis functions (such as cubic splines or B-splines) joined at knots, combined with a wiggliness penalty (smoothing penalty)",
        "By categorizing all continuous regressors into discrete dummy variables"
      ],
      "explanation_en": "Exact! GAMs compose smooth functional trajectories from spline bases while an integrated penalty prevents erratic overfitting.",
      "title_es": "Ejercicio 1: Cómo Modela la No Linealidad un GAM",
      "question_es": "¿Cómo representa un Modelo Aditivo Generalizado (GAM) relaciones no lineales entre un predictor X y la respuesta Y?",
      "options_es": [
        "Dividiendo el conjunto de datos en intervalos y entrenando un árbol de decisión por tramo",
        "Ajustando un polinomio de grado 10 sin regularización sobre los datos brutos",
        "Mediante una combinación lineal de funciones base flexibles (como splines cúbicos o B-splines) con nodos, combinada con una penalización de oscilación (smoothing penalty)",
        "Transformando todos los predictores continuos en variables ficticias categóricas"
      ],
      "explanation_es": "¡Exacto! Los GAM construyen curvas suaves a partir de funciones base de splines, penalizando la oscilación para evitar sobreajuste.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Wie GAMs Nichtlinearität modellieren",
      "question_de": "Wie modelliert ein Generalized Additive Model (GAM) eine nichtlineare Beziehung zwischen Prädiktor X und Zielgröße Y?",
      "options_de": [
        "Durch Aufteilen des Datensatzes in diskrete Intervalle und Trainieren eines Entscheidungsbaums pro Intervall",
        "Durch Anpassen eines unpenalisierten Polynoms 10. Grades an die Rohdaten",
        "Über eine Linearkombination flexibler Basisfunktionen (wie kubische Splines oder B-Splines) mit Knotenpunkten, kombiniert mit einer Strafe auf übermäßige Krümmung (Smoothing Penalty)",
        "Durch Umwandeln aller stetigen Prädiktoren in kategoriale Dummy-Variablen"
      ],
      "explanation_de": "Exakt! GAMs setzen glatte Kurven aus mathematischen Basisfunktionen zusammen, während ein Glättungsparameter übermäßiges Oszillieren bestraft."
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
      "title_en": "Exercise 2: Effective Degrees of Freedom in GAMs",
      "question_en": "In a GAM output, smooth term s(Age) has an estimated effective degrees of freedom of edf = 1.02. What does this mean concretely?",
      "options_en": [
        "The smoothing parameter λ was driven to zero by REML optimization",
        "The relationship is strongly oscillatory with at least one local peak and one valley",
        "The model cannot estimate the age effect due to sample starvation",
        "The relationship between Age and outcome is virtually straight (linear), because a straight line has by definition edf = 1"
      ],
      "explanation_en": "Sharp insight! edf = 1 indicates a strictly linear function. Higher edf values (e.g., 4 or 8) indicate increasing non-linear waviness. Here, a straight line suffices!",
      "title_es": "Ejercicio 2: Grados de Libertad Efectivos en GAM",
      "question_es": "En la salida de un GAM, el término suave s(Edad) tiene unos grados de libertad efectivos estimados de edf = 1,02. ¿Qué significa esto?",
      "options_es": [
        "El parámetro de suavizado λ se anuló por optimización REML",
        "La relación es fuertemente oscilatoria con al menos un pico y un valle",
        "El modelo no puede estimar el efecto de la edad por falta de datos",
        "La relación entre Edad y respuesta es prácticamente recta (lineal), ya que una recta tiene por definición edf = 1"
      ],
      "explanation_es": "¡Aguda apreciación! edf = 1 representa una relación estrictamente lineal. Cuanto mayor sea el edf, más ondulada es la curva.",
      "category_de": "Konzept",
      "title_de": "Übung 2: Effektive Freiheitsgrade im GAM",
      "question_de": "Im GAM-Output weist der Glättungsterm s(Alter) geschätzte effektive Freiheitsgrade von edf = 1,02 auf. Was bedeutet dies konkret?",
      "options_de": [
        "Der Glättungsparameter λ wurde durch REML-Optimierung auf null gesetzt",
        "Die Beziehung oszilliert stark mit mindestens einem lokalen Maximum und Minimum",
        "Das Modell kann den Alterseffekt wegen Datenmangels nicht schätzen",
        "Der Zusammenhang zwischen Alter und Zielgröße ist nahezu geradlinig (linear), da eine Gerade per Definition edf = 1 besitzt"
      ],
      "explanation_de": "Haarscharfer Einblick! edf = 1 steht für einen linearen Zusammenhang. Je höher edf ist, desto welliger ist die Funktion. Bei edf ≈ 1 reicht eine Gerade!"
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
      "title_en": "Exercise 3: Penalty Parameter λ = 0 in GAMs",
      "question_en": "What happens to the fitted curve in a GAM if you set the smoothing penalty parameter to λ = 0?",
      "options_en": [
        "The curve collapses to a horizontal line at grand mean ȳ",
        "The effective degrees of freedom shrink to exactly zero",
        "The curve overfits maximally: it wiggles wildly through every single observed data point (pure interpolation of random noise)",
        "The algorithm crashes because the Hessian matrix is singular"
      ],
      "explanation_en": "Correct! Without a smoothing penalty (λ = 0), spline flexibility is unconstrained, resulting in severe overfitting and noisy interpolation.",
      "title_es": "Ejercicio 3: Parámetro de Penalización λ = 0 en GAM",
      "question_es": "¿Qué le ocurre a la curva ajustada en un GAM si fijas el parámetro de penalización de suavizado en λ = 0?",
      "options_es": [
        "La curva colapsa a una recta horizontal al nivel de la media ȳ",
        "Los grados de libertad efectivos se reducen exactamente a cero",
        "La curva sobreajusta al máximo: serpentea a través de cada punto observado (pura interpolación de ruido)",
        "El algoritmo falla porque la matriz hessiana se vuelve singular"
      ],
      "explanation_es": "¡Correcto! Sin penalización (λ = 0), los splines tienen libertad absoluta para sobreajustar e interpolar cada residuo.",
      "category_de": "Praxis",
      "title_de": "Übung 3: Strafparameter λ = 0 im GAM",
      "question_de": "Was passiert mit der geschätzten Kurve in einem GAM, wenn man den Glättungs-Strafparameter auf λ = 0 setzt?",
      "options_de": [
        "Die Kurve kollabiert zu einer horizontalen Linie auf Höhe des Mittelwerts ȳ",
        "Die effektiven Freiheitsgrade schrumpfen exakt auf null",
        "Die Kurve überfittet maximal: Sie schlängelt sich durch jeden einzelnen Datenpunkt (reine Interpolation von Rauschen)",
        "Das Modell bricht ab, weil die Hesse-Matrix singulär wird"
      ],
      "explanation_de": "Richtig! Ohne Strafe (λ = 0) überfittet das Modell extrem und interpoliert jedes einzelne Rauschsignal im Datensatz."
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
      "title_en": "Exercise 1: Right-Censoring in Survival Analysis",
      "question_en": "In an oncology trial, follow-up ends at 5 years. Several patients remain cancer-free and alive at study closure. Why must you NOT simply remove them from the analysis?",
      "options_en": [
        "Because the Kaplan-Meier estimator requires all subjects to ultimately experience the event",
        "Because they proved survival of at least 5 years; their right-censored information is essential to prevent severe underestimation of long-term survival probability",
        "Because censored patients must always receive an assigned Hazard Ratio of 1.0",
        "Because follow-up time is undefined for patients without death records"
      ],
      "explanation_en": "Spot-on! Right-censored subjects contribute vital person-time evidence of disease-free survival. Removing them induces fatal survivorship bias.",
      "title_es": "Ejercicio 1: Censura por la Derecha en Análisis de Supervivencia",
      "question_es": "En un ensayo oncológico el seguimiento concluye a los 5 años. Varios pacientes continúan vivos y libres de enfermedad. ¿Por qué NO debes simplemente eliminarlos del análisis?",
      "options_es": [
        "Porque el estimador de Kaplan-Meier exige que todos los sujetos sufran el evento",
        "Porque han demostrado sobrevivir al menos 5 años; su información (censura derecha) es crucial para no subestimar drásticamente la supervivencia a largo plazo",
        "Porque a los pacientes censurados se les debe asignar siempre un Hazard Ratio de 1,0",
        "Porque el tiempo de seguimiento no está definido para pacientes sin fecha de defunción"
      ],
      "explanation_es": "¡Totalmente acertado! Los pacientes censurados aportan tiempo de seguimiento esencial; omitirlos subestima drásticamente la supervivencia.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Rechtszensierung in der Survival-Analyse",
      "question_de": "In einer onkologischen Studie endet die Nachbeobachtung nach 5 Jahren. Einige Patienten leben zu diesem Zeitpunkt noch krebsfrei. Warum darf man sie NICHT aus der Analyse ausschließen?",
      "options_de": [
        "Weil der Kaplan-Meier-Schätzer verlangt, dass alle Probanden das Ereignis erleiden",
        "Weil sie nachgewiesen haben, mindestens 5 Jahre zu überleben; ihre Information (Rechtszensierung) ist unverzichtbar, um die Langzeitüberlebensrate nicht drastisch zu unterschätzen",
        "Weil zensierten Patienten stets eine Hazard Ratio von exakt 1,0 zugewiesen werden muss",
        "Weil die Nachbeobachtungszeit für Patienten ohne Todesdatum mathematisch nicht definiert ist"
      ],
      "explanation_de": "Volltreffer! Rechtszensierte Patienten liefern essenzielle Überlebenszeit; ihr Weglassen verzerrt die Überlebenswahrscheinlichkeit dramatisch nach unten."
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
      "title_en": "Exercise 2: Interpreting Hazard Ratios",
      "question_en": "In a heart failure clinical trial, the Cox model for Drug X reports a Hazard Ratio of HR = 0.60 (95% CI: [0.45, 0.80], p = 0.001). What do you conclude?",
      "options_en": [
        "Exactly 60% of treated patients will remain alive at trial conclusion",
        "Median patient survival doubles by 60 percentage points under therapy",
        "Patients receiving Drug X experience a 40% lower instantaneous risk (hazard rate) of death at any given time point compared to the control group",
        "Mortality drops by 60% in the first year but stabilizes at zero thereafter"
      ],
      "explanation_en": "Correct! HR = 0.60 indicates the instantaneous hazard is 60% of control, reflecting a 1 - 0.60 = 40% hazard reduction.",
      "title_es": "Ejercicio 2: Interpretación de Razones de Riesgo (Hazard Ratio)",
      "question_es": "En un ensayo de insuficiencia cardíaca, el modelo de Cox para el Fármaco X reporta un Hazard Ratio de HR = 0,60 (IC 95%: [0,45; 0,80], p = 0,001). ¿Qué concluyes?",
      "options_es": [
        "Exactamente el 60% de los pacientes tratados seguirá vivo al final del ensayo",
        "La mediana de supervivencia se duplica en 60 puntos porcentuales",
        "Los pacientes con el Fármaco X tienen en cualquier instante un riesgo instantáneo (hazard rate) de fallecer un 40% menor frente al grupo control",
        "El riesgo de muerte cae un 60% el primer año pero luego se estabiliza a cero"
      ],
      "explanation_es": "¡Correcto! HR = 0,60 significa que el riesgo instantáneo es el 60% del control, logrando una reducción del 40%.",
      "category_de": "Berechnung",
      "title_de": "Übung 2: Interpretation der Hazard Ratio",
      "question_de": "In einer klinischen Studie zu Herzinsuffizienz berichtet das Cox-Modell für Medikament X eine Hazard Ratio von HR = 0,60 (95%-KI: [0,45; 0,80], p = 0,001). Was folgerst du?",
      "options_de": [
        "Exakt 60% der behandelten Patienten sind nach Studienende noch am Leben",
        "Die mediane Überlebenszeit verdoppelt sich um 60 Prozentpunkte unter der Therapie",
        "Patienten mit Medikament X haben zu jedem Zeitpunkt ein um 40% geringeres momentanes Sterberisiko (Hazard Rate) im Vergleich zur Kontrollgruppe",
        "Das Sterberisiko sinkt im ersten Jahr um 60%, stabilisiert sich danach jedoch bei null"
      ],
      "explanation_de": "Richtig! HR = 0,60 bedeutet, dass das momentane Risiko 60% der Kontrollgruppe beträgt (eine Risikoreduktion von 40%)."
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
      "title_en": "Exercise 3: Crossing Survival Curves in Cox Models",
      "question_en": "In a Cox regression, survival curves for two treatments cross at 1.5 years (Treatment A is initially superior, but after 1.5 years Treatment B dominates). What does this imply?",
      "options_en": [
        "There is no issue: the hazard ratio automatically averages both periods into a valid overall effect",
        "The Proportional Hazards assumption is fundamentally violated: the hazard ratio is not constant over time. Standard Cox regression is invalid, requiring time-dependent covariates or stratified modeling",
        "The model must be replaced by standard linear OLS regression on total survival duration",
        "The log-rank p-value can simply be multiplied by 2"
      ],
      "explanation_en": "Crucial diagnostic! Crossing survival curves violate the core proportional hazards assumption (HR = constant). Standard Cox summaries are misleading.",
      "title_es": "Ejercicio 3: Curvas de Supervivencia Cruzadas en Modelos de Cox",
      "question_es": "En una regresión de Cox, las curvas de supervivencia de dos tratamientos se cruzan al cabo de 1,5 años (Tratamiento A es mejor al inicio, pero tras 1,5 años B es superior). ¿Qué implica esto?",
      "options_es": [
        "No hay problema: el hazard ratio promedia automáticamente ambos periodos en un efecto global válido",
        "El supuesto de Riesgos Proporcionales (Proportional Hazards) se ha violado: la razón de riesgos no es constante en el tiempo. El modelo de Cox estándar queda invalidado, requiriendo covariables dependientes del tiempo o estratificación",
        "El modelo debe sustituirse por regresión lineal MCO sobre el tiempo total de supervivencia",
        "El valor p de la prueba de log-rank puede multiplicarse directamente por 2"
      ],
      "explanation_es": "¡Diagnóstico crucial! Curvas cruzadas violan el supuesto de riesgos proporcionales (HR constante). Se requiere modelar efectos dependientes del tiempo.",
      "category_de": "Fallstrick",
      "title_de": "Übung 3: Kreuzende Überlebenskurven im Cox-Modell",
      "question_de": "In einer Cox-Regression kreuzen sich die Überlebenskurven zweier Behandlungen nach 1,5 Jahren (Behandlung A ist anfangs überlegen, nach 1,5 Jahren B). Was bedeutet dies für das Modell?",
      "options_de": [
        "Es gibt kein Problem: Die Hazard Ratio mittelt beide Phasen automatisch zu einem gültigen Gesamteffekt",
        "Die Proportional-Hazards-Annahme ist fundamental verletzt: Die Hazard Ratio ist nicht zeitlich konstant. Ein Standard-Cox-Modell ist unzulässig und erfordert zeitabhängige Kovariaten oder eine Stratifizierung",
        "Das Modell muss durch eine lineare OLS-Regression auf die Gesamtüberlebenszeit ersetzt werden",
        "Der p-Wert des Log-Rank-Tests kann einfach mit 2 multipliziert werden"
      ],
      "explanation_de": "Wichtige Diagnose! Kreuzende Kurven verletzen die Proportional-Hazards-Annahme fundamental. Standard-Cox-Modelle führen hier zu falschen Schlüssen."
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
      "title_en": "Exercise 1: Core Formulation of Bayes' Theorem",
      "question_en": "What is the core conceptual and mathematical equation of Bayesian inference?",
      "options_en": [
        "P(H0 | Data) = α × Degree of Freedom / p-value",
        "Likelihood = Prior Odds × Posterior Variance",
        "Posterior Knowledge ∝ Data Likelihood × Prior Belief (P(θ | Data) ∝ P(Data | θ) × P(θ))",
        "Posterior Distribution = Conditional Expectation under Null Hypothesis H0"
      ],
      "explanation_en": "Cornerstone of Bayesian reasoning! You begin with prior belief, confront it with empirical data via likelihood, and update your state of knowledge (posterior).",
      "title_es": "Ejercicio 1: Formulación Central del Teorema de Bayes",
      "question_es": "¿Cuál es la ecuación conceptual y matemática central de la inferencia bayesiana?",
      "options_es": [
        "P(H0 | Datos) = α × Grados de Libertad / valor p",
        "Verosimilitud = Odds Previas × Varianza Posterior",
        "Conocimiento Posterior ∝ Verosimilitud de los Datos × Creencia Previa (P(θ | Datos) ∝ P(Datos | θ) × P(θ))",
        "Distribución Posterior = Esperanza Condicional bajo Hipótesis Nula H0"
      ],
      "explanation_es": "¡Piedra angular bayesiana! Partes de conocimiento previo (prior), lo confrontas con la evidencia (likelihood), y actualizas tu visión del mundo (posterior).",
      "category_de": "Konzept",
      "title_de": "Übung 1: Die Kernformel des Bayes-Theorems",
      "question_de": "Was ist die konzeptionelle und mathematische Kernformel der bayesianischen Inferenz?",
      "options_de": [
        "P(H0 | Daten) = α × Freiheitsgrade / p-Wert",
        "Likelihood = Prior Odds × Posterior-Varianz",
        "Posterior-Wissen ∝ Likelihood der Daten × Prior-Überzeugung (P(θ | Daten) ∝ P(Daten | θ) × P(θ))",
        "Posterior-Verteilung = Bedingte Erwartung unter der Nullhypothese H0"
      ],
      "explanation_de": "Grundpfeiler bayesianischer Inferenz! Man beginnt mit Vorwissen (Prior), konfrontiert dieses mit empirischer Evidenz (Likelihood) und aktualisiert sein Weltbild (Posterior)."
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
      "title_en": "Exercise 2: Bernstein-von Mises Theorem",
      "question_en": "What happens to the influence of your chosen prior distribution on the posterior distribution as sample size N expands to 100,000 observations?",
      "options_en": [
        "The prior becomes infinitely dominant, overwriting empirical observations",
        "Posterior variance grows proportionally with prior information density",
        "The posterior distribution bifurcates into two independent Gaussian components",
        "The influence of the prior virtually evaporates; the Likelihood dominates the posterior completely and the estimate converges to Maximum Likelihood"
      ],
      "explanation_en": "Reassuring theorem (Bernstein-von Mises)! Unless a prior places strict probability zero on a parameter, sufficient empirical data overwhelms the prior.",
      "title_es": "Ejercicio 2: El Teorema de Bernstein-von Mises",
      "question_es": "¿Qué ocurre con la influencia de la distribución previa (prior) en la posterior a medida que el tamaño muestral N aumenta a 100.000 observaciones?",
      "options_es": [
        "La previa se vuelve dominante y sobreescribe las observaciones empíricas",
        "La varianza posterior crece proporcionalmente con la densidad de la previa",
        "La distribución posterior se bifurca en dos componentes gaussianas independientes",
        "La influencia de la previa se desvanece casi por completo; la Verosimilitud domina la posterior y la estimación converge a la Máxima Verosimilitud"
      ],
      "explanation_es": "¡Teorema tranquilizador de Bernstein-von Mises! Salvo que la previa asigne probabilidad cero absoluta, datos suficientes dominan siempre a la previa.",
      "category_de": "Konzept",
      "title_de": "Übung 2: Bernstein-von-Mises-Theorem",
      "question_de": "Was geschieht mit dem Einfluss der gewählten Prior-Verteilung auf die Posterior-Verteilung, wenn der Stichprobenumfang N auf 100.000 Beobachtungen anwächst?",
      "options_de": [
        "Der Prior wird unendlich dominant und überschreibt alle empirischen Beobachtungen",
        "Die Posterior-Varianz wächst proportional zur Informationsdichte des Priors",
        "Die Posterior-Verteilung spaltet sich in zwei unabhängige Gauß-Komponenten auf",
        "Der Einfluss des Priors verflüchtigt sich nahezu vollständig; die Likelihood (die Daten) dominiert die Posterior komplett und die Schätzung konvergiert gegen Maximum Likelihood"
      ],
      "explanation_de": "Beruhigender Lehrsatz (Bernstein-von-Mises-Theorem)! Sofern der Prior nicht exakt die Wahrscheinlichkeit null zuweist, überstimmen hinreichend viele Daten jeden Prior."
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
      "title_en": "Exercise 3: Credible Intervals vs Frequentist CIs",
      "question_en": "In contrast to frequentist confidence intervals: why may you state with a Bayesian 95% Credible Interval that 'there is a 95% probability the parameter lies within these boundaries'?",
      "options_en": [
        "Because in Bayesian statistics the parameter itself is treated as a random variable with a probability distribution (posterior), conditioned on the observed data",
        "Because MCMC sampling automatically reduces all Type I errors to zero",
        "Because a Credible Interval is mathematically equal to the p-value raised to the power of the prior",
        "Because Bayesian intervals assume infinite sample size"
      ],
      "explanation_en": "Intuitively empowering! In frequentism, the parameter is fixed and intervals are random. In Bayes, the data is fixed and the parameter is stochastic, permitting direct probability statements.",
      "title_es": "Ejercicio 3: Intervalos de Credibilidad frente a Intervalos de Confianza",
      "question_es": "A diferencia del intervalo de confianza frecuentista: ¿por qué en un Intervalo de Credibilidad bayesiano al 95% sí se puede afirmar que 'hay un 95% de probabilidad de que el parámetro esté dentro'?",
      "options_es": [
        "Porque en estadística bayesiana el parámetro se concibe como una variable aleatoria con distribución de probabilidad (posterior), condicionada a los datos observados",
        "Porque el muestreador MCMC reduce todos los errores Tipo I a cero",
        "Porque el intervalo de credibilidad equivale matemáticamente al valor p elevado a la previa",
        "Porque los intervalos bayesianos asumen tamaños de muestra infinitos"
      ],
      "explanation_es": "¡Intuitivo y directo! En frecuentismo el parámetro es fijo e intervalos aleatorios. En Bayes, los datos son fijos y el parámetro estocástico, permitiendo probabilidad directa.",
      "category_de": "Konzept",
      "title_de": "Übung 3: Credible Intervals vs. frequentistische KIs",
      "question_de": "Im Gegensatz zu einem frequentistischen Konfidenzintervall: Warum darf man bei einem bayesianischen 95% Credible Interval sagen: 'Es besteht eine 95%-Wahrscheinlichkeit, dass der Parameter in diesen Grenzen liegt'?",
      "options_de": [
        "Weil in der Bayes-Statistik der Parameter selbst als Zufallsvariable mit einer Wahrscheinlichkeitsverteilung (Posterior) conditionell auf den Daten betrachtet wird",
        "Weil der MCMC-Sampler alle Typ-I-Fehler automatisch eliminiert",
        "Weil ein Credible Interval dem p-Wert potenziert mit dem Prior entspricht",
        "Weil Bayes-Intervalle immer mit unendlicher Stichprobengröße rechnen"
      ],
      "explanation_de": "Endlich intuitiv! Im Frequentismus ist der Parameter fix und das Intervall zufällig. Bei Bayes sind die Daten fix und der Parameter stochastisch, was direkte Wahrscheinlichkeitsaussagen erlaubt."
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
      "title_en": "Exercise 1: Why MCMC Sampling is Essential",
      "question_en": "Why do modern statisticians use MCMC (Markov Chain Monte Carlo) sampling instead of computing the exact denominator of Bayes' theorem P(Data) = ∫ P(Data|θ) P(θ) dθ directly?",
      "options_en": [
        "Because numerical integrals always produce singular Hessian matrices",
        "Because likelihood functions are only defined across discrete Markov chains",
        "Because MCMC guarantees deterministic answers without simulation noise",
        "Because the denominator P(Data) is a high-dimensional integral over all parameters simultaneously; in high dimensions analytical integration is impossible, whereas MCMC samples the unnormalized numerator shape directly"
      ],
      "explanation_en": "The MCMC revolution! Normalizing constant evidence P(Data) is intractable in high dimensions. MCMC circumvents it by evaluating relative posterior density ratios.",
      "title_es": "Ejercicio 1: Por Qué el Muestreo MCMC es Indispensable",
      "question_es": "¿Por qué los estadísticos utilizan muestreo MCMC en lugar de calcular directamente el denominador de Bayes P(Datos) = ∫ P(Datos|θ) P(θ) dθ?",
      "options_es": [
        "Porque las integrales numéricas siempre generan matrices hessianas singulares",
        "Porque la verosimilitud solo se define en cadenas de Markov discretas",
        "Porque MCMC arroja respuestas deterministas sin varianza muestral",
        "Porque el denominador P(Datos) es una integral de alta dimensión sobre todos los parámetros; analíticamente imposible de resolver, mientras que MCMC extrae muestras de la forma del numerador sin calcular la constante"
      ],
      "explanation_es": "¡La revolución de MCMC! La constante normalizadora es intratable en altas dimensiones. MCMC la elude evaluando razones relativas del numerador.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Warum MCMC-Sampling unverzichtbar ist",
      "question_de": "Warum nutzen moderne Statistiker MCMC-Sampling (Markov Chain Monte Carlo), anstatt den Nenner des Bayes-Theorems P(Daten) = ∫ P(Daten|θ) P(θ) dθ direkt exakt zu integrieren?",
      "options_de": [
        "Weil numerische Integrale immer zu singulären Hesse-Matrizen führen",
        "Weil die Likelihood-Funktion nur über diskreten Markov-Ketten definiert ist",
        "Weil MCMC stets deterministische Ergebnisse ohne Simulationsunsicherheit liefert",
        "Weil der Nenner P(Daten) ein hochdimensionales Integral über alle Parameter ist; analytisch unlösbar, während MCMC Stichproben aus der Zählergestalt zieht, ohne die Normalisierungskonstante zu kennen"
      ],
      "explanation_de": "Die MCMC-Revolution! Der Nenner ist in hohen Dimensionen unberechenbar. MCMC umgeht die Integrationskonstante genial über relative Dichtequotienten."
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
      "title_en": "Exercise 2: Gelman-Rubin R̂ Convergence Diagnostics",
      "question_en": "In a Stan model, 4 chains are run. Gelman-Rubin convergence diagnostics show R̂ = 1.002 for all parameters. What is the conclusion?",
      "options_en": [
        "The four chains are exceptionally well mixed and converged to the identical stationary posterior distribution (R̂ < 1.05 is the gold standard for convergence)",
        "Effective sample size (ESS) has collapsed to zero due to excessive autocorrelation",
        "Chains are stuck in a local minimum and fail to explore parameter space",
        "The prior distribution was too narrow and dominates the chains completely"
      ],
      "explanation_en": "Correct! R̂ compares between-chain variance to within-chain variance. When R̂ ≈ 1.00, chains are synchronized and exploring the same posterior landscape.",
      "title_es": "Ejercicio 2: Diagnóstico de Convergencia R̂ de Gelman-Rubin",
      "question_es": "En un modelo Stan corren 4 cadenas. El diagnóstico de convergencia de Gelman-Rubin muestra R̂ = 1,002 para todos los parámetros. ¿Cuál es la conclusión?",
      "options_es": [
        "Las cuatro cadenas están magníficamente mezcladas y han convergido a la misma distribución posterior estacionaria (R̂ < 1,05 es el estándar de oro de convergencia)",
        "El tamaño muestral efectivo (ESS) ha caído a cero por autocorrelación",
        "Las cadenas están atrapadas en un mínimo local sin explorar el espacio",
        "La previa era excesivamente estrecha y domina totalmente las cadenas"
      ],
      "explanation_es": "¡Correcto! R̂ compara la varianza entre cadenas frente a la varianza intra-cadena. Con R̂ ≈ 1,00, las cadenas están perfectamente sincronizadas.",
      "category_de": "Praxis",
      "title_de": "Übung 2: Gelman-Rubin R̂ Konvergenzdiagnostik",
      "question_de": "In einem Stan-Modell laufen 4 Ketten. Die Gelman-Rubin-Konvergenzdiagnostik zeigt R̂ = 1,002 für alle Parameter. Was ist das Fazit?",
      "options_de": [
        "Die vier Ketten sind exzellent durchmischt und zur identischen stationären Posterior-Verteilung konvergiert (R̂ < 1,05 ist der Goldstandard für Konvergenz)",
        "Der effektive Stichprobenumfang (ESS) ist wegen Autokorrelation auf null kollabiert",
        "Die Ketten stecken in lokalen Minima fest und explorieren unzureichend",
        "Der Prior war zu schmal spezifiziert und dominiert die Ketten komplett"
      ],
      "explanation_de": "Richtig! R̂ vergleicht die Varianz zwischen Ketten mit der Varianz innerhalb der Ketten. Wenn R̂ ≈ 1,00, durchqueren alle Ketten synchron dieselbe Posterior."
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
      "title_en": "Exercise 3: Hamiltonian Monte Carlo (HMC / NUTS)",
      "question_en": "Why does Hamiltonian Monte Carlo (HMC / NUTS in Stan) scale dramatically better to hundreds of parameters than traditional Metropolis-Hastings algorithms?",
      "options_en": [
        "Because HMC samples only discrete parameters, eliminating the need for differentiation",
        "HMC computes the exact multivariate inverse covariance matrix without evaluating gradients",
        "Because HMC zeroes out all hyperparameters via analytical Laplace approximation",
        "Metropolis-Hastings conducts a random walk and gets lost in high dimensions; HMC simulates frictionless physics of a particle rolling along the posterior gradient surface, taking large, targeted leaps through parameter space"
      ],
      "explanation_en": "Brilliant physics applied to statistics! HMC uses the gradient ∇ log P(θ|Data) to impart momentum to a virtual particle, gliding seamlessly across complex geometry.",
      "title_es": "Ejercicio 3: Monte Carlo Hamiltoniano (HMC / NUTS)",
      "question_es": "¿Por qué el algoritmo de Monte Carlo Hamiltoniano (HMC / NUTS en Stan) escala infinitamente mejor a cientos de parámetros que Metropolis-Hastings tradicional?",
      "options_es": [
        "Porque HMC solo muestrea parámetros discretos, prescindiendo de derivadas",
        "HMC calcula la inversa de la matriz de covarianza sin evaluar gradientes",
        "Porque HMC anula todos los hiperparámetros mediante la aproximación analítica de Laplace",
        "Metropolis-Hastings realiza un camino aleatorio y se pierde en altas dimensiones; HMC simula la física sin fricción de una partícula sobre la superficie del gradiente posterior, dando saltos amplios y certeros"
      ],
      "explanation_es": "¡Física genial aplicada a la estadística! HMC emplea el gradiente para impulsar una partícula virtual a través de geometrías posteriores intrincadas.",
      "category_de": "Konzept",
      "title_de": "Übung 3: Hamiltonian Monte Carlo (HMC / NUTS)",
      "question_de": "Warum skaliert Hamiltonian Monte Carlo (HMC / NUTS in Stan) dramatisch besser auf hunderte Parameter als traditionelle Metropolis-Hastings-Algorithmen?",
      "options_de": [
        "Weil HMC ausschließlich diskrete Parameter sampelt und Ableitungen überflüssig macht",
        "HMC berechnet die inverse Kovarianzmatrix ohne Gradientenevaluierung",
        "Weil HMC alle Hyperparameter über analytische Laplace-Approximation eliminiert",
        "Metropolis-Hastings unternimmt einen Random Walk und verliert sich in hohen Dimensionen; HMC simuliert die reibungsfreie Physik eines Teilchens auf der Gradientenfläche und vollführt weite, zielgerichtete Sprünge"
      ],
      "explanation_de": "Brillante Physik in der Statistik! HMC nutzt den Gradienten der Posterior, um ein virtuelles Teilchen mit Impuls durch komplexe Posterior-Geometrien gleiten zu lassen."
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
      "title_en": "Exercise 1: Defining a Gaussian Process (GP)",
      "question_en": "What is the most intuitive and mathematically rigorous definition of a Gaussian Process (GP)?",
      "options_en": [
        "A non-parametric density estimation method based on variable bin-width histograms",
        "A neural network with a single hidden layer and ReLU activation functions",
        "An autoregressive time series model that simulates only stationary Markov processes",
        "An infinite-dimensional multivariate normal distribution: instead of a mean vector and covariance matrix over numbers, a GP defines a mean function and covariance kernel over complete continuous functions"
      ],
      "explanation_en": "Masterful! A GP is a distribution over functions: any finite collection of evaluated points forms a joint multivariate Gaussian distribution.",
      "title_es": "Ejercicio 1: Definición de un Proceso Gaussiano (GP)",
      "question_es": "¿Cuál es la definición más intuitiva y matemáticamente rigurosa de un Proceso Gaussiano (GP)?",
      "options_es": [
        "Una estimación no paramétrica de densidad basada en histogramas de ancho variable",
        "Una red neuronal de una sola capa oculta y activación ReLU",
        "Un modelo autorregresivo temporal que solo simula procesos estacionarios de Markov",
        "Una distribución normal multivariante de dimensión infinita: en vez de vector de medias y matriz de covarianza sobre números, un GP define una función de media y un kernel de covarianza sobre funciones continuas completas"
      ],
      "explanation_es": "¡Magistral! Un GP es una distribución sobre funciones: cualquier conjunto finito de puntos evaluados sigue una distribución gaussiana multivariante conjunta.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Definition eines Gauß-Prozesses (GP)",
      "question_de": "Was ist die intuitivste und mathematisch präziseste Definition eines Gauß-Prozesses (GP)?",
      "options_de": [
        "Eine nichtparametrische Dichteschätzung basierend auf Histogrammen mit variabler Klassenbreite",
        "Ein neuronales Netz mit einer einzigen verborgenen Schicht und ReLU-Aktivierungsfunktionen",
        "Ein autoregressives Zeitreihenmodell, das ausschließlich stationäre Markov-Prozesse simuliert",
        "Eine unendlich-dimensionale multivariate Normalverteilung: Anstelle von Mittelwertvektor und Kovarianzmatrix über Zahlen definiert ein GP eine Mittelwertfunktion und einen Kovarianz-Kernel über kompletten stetigen Funktionen"
      ],
      "explanation_de": "Meisterhaft! Ein GP ist eine Verteilung über Funktionen: Jede endliche Auswahl von Punkten auf der Funktion folgt gemeinsam einer multivariaten Normalverteilung."
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
      "title_en": "Exercise 2: RBF Kernel Lengthscale Parameter",
      "question_en": "In a Radial Basis Function (RBF) kernel k(x, x') = σ² exp(-||x - x'||² / (2ℓ²)): what happens to the estimated function when the lengthscale parameter ℓ is chosen very large?",
      "options_en": [
        "The curve becomes erratic and wild, interpolating all noise points with high frequency",
        "Correlation between points remains high across large distances, causing the predicted function to become stiff, ultra-smooth, and slowly undulating",
        "The covariance kernel converges to a diagonal identity matrix",
        "The conditional uncertainty ribbon collapses everywhere to zero"
      ],
      "explanation_en": "Exact! Lengthscale ℓ dictates how rapidly correlation decays across distance. Large ℓ = points stay strongly correlated = stiff, smooth function.",
      "title_es": "Ejercicio 2: Parámetro de Escala de Longitud del Kernel RBF",
      "question_es": "En un kernel de Base Radial (RBF) k(x, x') = σ² exp(-||x - x'||² / (2ℓ²)): ¿qué le ocurre a la función estimada cuando el parámetro de escala de longitud ℓ es muy grande?",
      "options_es": [
        "La curva se vuelve errática y oscilante, interpolando el ruido a alta frecuencia",
        "La correlación entre puntos permanece alta a grandes distancias, haciendo que la función sea rígida, ultra suave y de ondulación muy lenta",
        "El kernel de covarianza converge a la matriz identidad diagonal",
        "La banda de incertidumbre condicional colapsa a cero en todo el espacio"
      ],
      "explanation_es": "¡Exacto! ℓ controla la caída espacial de la correlación. Un ℓ grande mantiene correlación a gran distancia, creando funciones rígidas y suaves.",
      "category_de": "Konzept",
      "title_de": "Übung 2: Längenskalen-Parameter des RBF-Kernels",
      "question_de": "In einem Radial-Basis-Function-Kernel (RBF) k(x, x') = σ² exp(-||x - x'||² / (2ℓ²)): Was geschieht mit der geschätzten Funktion, wenn der Längenskalen-Parameter ℓ sehr groß gewählt wird?",
      "options_de": [
        "Die Kurve wird extrem wild und interpoliert alle Rauschpunkte mit hoher Frequenz",
        "Die Korrelation zwischen Punkten bleibt über große Distanzen hoch, wodurch die geschätzte Funktion sehr steif, extrem glatt und langsam schwingend wird",
        "Der Kovarianz-Kernel konvergiert gegen eine diagonale Identitätsmatrix",
        "Das bedingte Unsicherheitsband schrumpft überall sofort auf null"
      ],
      "explanation_de": "Exakt! Die Längenskala ℓ bestimmt, wie schnell die Korrelation mit der Distanz abfällt. Großes ℓ = weitreichende Korrelation = extrem glatte Kurve."
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
      "title_en": "Exercise 3: Bayesian Optimization with GPs",
      "question_en": "Why are Gaussian Processes the preferred surrogate model in Bayesian Optimization for expensive experiments (e.g., drug discovery or hyperparameter tuning)?",
      "options_en": [
        "Because a GP provides not only the predicted mean at unobserved coordinates, but also closed-form posterior uncertainty σ(x), enabling principled balancing of exploitation and exploration",
        "Because GPs require no matrix inversion and scale linearly to billions of data points",
        "Because RBF kernels guarantee locating the global optimum in under 3 iterations",
        "Because GPs are completely immune to measurement noise in observations"
      ],
      "explanation_en": "The power of uncertainty! GPs quantify what we expect alongside where we are ignorant. Acquisition functions (like Expected Improvement) guide the next best experiment.",
      "title_es": "Ejercicio 3: Optimización Bayesiana con GPs",
      "question_es": "¿Por qué son los Procesos Gaussianos el modelo sustituto predilecto en Optimización Bayesiana para experimentos costosos (fármacos, tuning de hiperparámetros)?",
      "options_es": [
        "Porque el GP predice tanto la media esperada como la incertidumbre posterior analítica σ(x), permitiendo equilibrar explotación y exploración",
        "Porque los GPs no requieren inversión de matrices y escalan linealmente a miles de millones de datos",
        "Porque el kernel RBF garantiza hallar el óptimo global en menos de 3 evaluaciones",
        "Porque los GPs son inmunes al ruido de medida en las observaciones"
      ],
      "explanation_es": "¡El valor de la incertidumbre! Los GPs cuantifican qué esperar y dónde ignoramos más. Las funciones de adquisición guían el experimento óptimo.",
      "category_de": "Praxis",
      "title_de": "Übung 3: Bayesianische Optimierung mit GPs",
      "question_de": "Warum sind Gauß-Prozesse das bevorzugte Surrogatmodell bei der bayesianischen Optimierung teurer Experimente (z.B. Wirkstoffforschung oder Hyperparameter-Tuning)?",
      "options_de": [
        "Weil ein GP an jedem unbekannten Punkt nicht nur den Erwartungswert prognostiziert, sondern auch die exakte Posterior-Unsicherheit σ(x) liefert, womit Ausbeutung (Exploitation) und Erkundung (Exploration) balanciert werden",
        "Weil GPs keine Matrixinversion erfordern und linear mit Milliarden Punkten skalieren",
        "Weil der RBF-Kernel garantiert, dass das globale Optimum in maximal 3 Schritten gefunden wird",
        "Weil GPs immun gegenüber Messrauschen sind"
      ],
      "explanation_de": "Die Macht der Unsicherheit! Ein GP beziffert Prognose und Nichtwissen. Die Akquisitionsfunktion steuert das nächste Experiment optimal."
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
      "title_en": "Exercise 1: Observation vs Intervention (do-calculus)",
      "question_en": "According to Judea Pearl's Causal Hierarchy, what is the fundamental difference between passive observation P(Y | X = x) and physical intervention P(Y | do(X = x))?",
      "options_en": [
        "P(Y | X = x) passively observes in an existing world including all confounding selection effects; P(Y | do(X = x)) simulates an active physical intervention by severing all incoming causal arrows to X via graph surgery",
        "P(Y | do(X)) can only be computed when all variables in the graph are normally distributed",
        "There is no mathematical difference; do(X) is merely didactic shorthand for multivariable OLS regression",
        "P(Y | X) conditions on instrumental variables, whereas do(X) conditions on colliders"
      ],
      "explanation_en": "Brilliant causal insight! Observation conditions on natural selection. Intervention physically modifies the data generating mechanism via graph surgery.",
      "title_es": "Ejercicio 1: Observación frente a Intervención (do-cálculo)",
      "question_es": "Según la Jerarquía Causal de Judea Pearl, ¿cuál es la diferencia fundamental entre la observación pasiva P(Y | X = x) y la intervención P(Y | do(X = x))?",
      "options_es": [
        "P(Y | X = x) observa pasivamente el mundo incluyendo la selección por confusión; P(Y | do(X = x)) simula una intervención activa cortando los influjos causales a X mediante cirugía de grafos",
        "P(Y | do(X)) solo se puede calcular si todas las variables del grafo son normales",
        "No existe diferencia matemática; do(X) es solo notación didáctica para regresión MCO",
        "P(Y | X) condiciona en variables instrumentales, mientras que do(X) condiciona en colisionadores"
      ],
      "explanation_es": "¡Brillante visión causal! Observación condiciona en selección natural. Intervención modifica el mecanismo generador cortando causas entrantes.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Beobachtung vs. Intervention (do-Kalkül)",
      "question_de": "Was ist gemäß Judea Pearls Kausalhierarchie der fundamentale Unterschied zwischen passiver Beobachtung P(Y | X = x) und aktiver Intervention P(Y | do(X = x))?",
      "options_de": [
        "P(Y | X = x) beobachtet passiv in der bestehenden Welt inklusive aller Confounder-Auswahleffekte; P(Y | do(X = x)) simuliert einen aktiven Eingriff, bei dem alle natürlichen Ursachen von X durch Graph Surgery getrennt werden",
        "P(Y | do(X)) kann nur berechnet werden, wenn alle Variablen im Graphen normalverteilt sind",
        "Es gibt keinen mathematischen Unterschied; do(X) ist nur eine didaktische Schreibweise für OLS",
        "P(Y | X) konditioniert auf Instrumentalvariablen, während do(X) auf Collider konditioniert"
      ],
      "explanation_de": "Brillante Kausaleinsicht! Beobachtung konditioniert auf bestehende Selektion. Intervention greift aktiv in das System ein und trennt einströmende Kausalkanten ab."
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
      "title_en": "Exercise 2: Collider Stratification Bias (Berkson's Paradox)",
      "question_en": "In a DAG: Talent (X) → Stardom (Z) ← Luck (Y). Talent and Luck are completely uncorrelated in the general population. What happens if you condition on Stardom (e.g., analyzing only celebrities)?",
      "options_en": [
        "You eliminate all remaining confounding bias between Talent and Luck according to d-separation",
        "You open a spurious non-causal path and induce a FALSE negative correlation between Talent and Luck: among stars, someone with low talent must have had extraordinary luck!",
        "The correlation between Talent and Luck remains exactly zero because Z is a collider",
        "The causal effect of Talent on Stardom doubles via the backdoor formula"
      ],
      "explanation_en": "Spot-on! Conditioning on a collider (common effect) creates spurious association between independent causes: Berkson's bias / collider stratification.",
      "title_es": "Ejercicio 2: Sesgo de Colisionador (Paradoja de Berkson)",
      "question_es": "En un DAG: Talento (X) → Fama (Z) ← Suerte (Y). Talento y Suerte son independientes en la población. ¿Qué ocurre si condicionas en Fama (analizando solo celebridades)?",
      "options_es": [
        "Eliminas todo sesgo de confusión remanente entre Talento y Suerte por d-separación",
        "Abres un camino espurio no causal e induces una FALSA correlación negativa entre Talento y Suerte: ¡entre famosos, quien tiene poco talento debe haber tenido muchísima suerte!",
        "La correlación entre Talento y Suerte permanece exactamente en cero porque Z es un colisionador",
        "El efecto causal de Talento sobre Fama se duplica por la fórmula de la puerta trasera"
      ],
      "explanation_es": "¡Totalmente acertado! Condicionar en un colisionador genera asociación espuria entre causas independientes: sesgo de Berkson.",
      "category_de": "Fallstrick",
      "title_de": "Übung 2: Collider-Bias (Berkson-Paradoxon)",
      "question_de": "In einem Kausalmodell beeinflussen Talent (X) und Glück (Y) die Chance auf Berühmtheit (Z). Talent und Glück sind in der Gesamtbevölkerung völlig unkorreliert. Was geschieht, wenn man auf Berühmtheit konditioniert (z.B. nur Stars analysiert)?",
      "options_de": [
        "Man eliminiert jegliches Confounding zwischen Talent und Glück gemäß dem d-Separationstheorem",
        "Man öffnet einen Scheinkorrelations-Pfad und erzeugt eine FALSCHE negative Korrelation: Unter Berühmtheiten muss jemand mit wenig Talent automatisch extremes Glück gehabt haben!",
        "Die Korrelation zwischen Talent und Glück bleibt exakt null, da Z ein Collider ist",
        "Der Kausaleffekt von Talent auf Ruhm verdoppelt sich über die Backdoor-Formel"
      ],
      "explanation_de": "Volltreffer! Konditionieren auf einen Collider (gemeinsamen Effekt) verknüpft unabhängige Ursachen künstlich: Berkson-Bias."
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
      "title_en": "Exercise 3: Kernel Mean Embeddings in RKHS",
      "question_en": "Why do mathematical statisticians embed probability distributions into Reproducing Kernel Hilbert Spaces (RKHS ℋ)?",
      "options_en": [
        "Because causality can only be formalized on finite Euclidean vector spaces",
        "To compress data tables into discrete integers for memory storage",
        "Because RKHS embeddings forbid non-linear functional transformations",
        "It transforms complex, infinite-dimensional probability distributions into individual points in a Hilbert space where differences between distributions collapse to simple geometric distances (Maximum Mean Discrepancy - MMD)"
      ],
      "explanation_en": "Apex mathematical insight! Kernel mean embeddings represent distributions as single vectors in ℋ. Two distributions are identical if and only if their distance in ℋ is zero (MMD = 0).",
      "title_es": "Ejercicio 3: Incrustación de Medias en Núcleos (RKHS)",
      "question_es": "¿Por qué incrustan los estadísticos matemáticos distribuciones de probabilidad en Espacios de Hilbert con Núcleo Reproductor (RKHS ℋ)?",
      "options_es": [
        "Porque la causalidad solo puede formalizarse en espacios vectoriales euclidianos finitos",
        "Para comprimir tablas de datos a números enteros discretos",
        "Porque las incrustaciones RKHS prohíben transformaciones no lineales",
        "Transforma distribuciones complejas e infinitas en puntos individuales de un espacio de Hilbert, donde las discrepancias entre distribuciones se reducen a distancias geométricas simples (MMD)"
      ],
      "explanation_es": "¡Cúspide matemática! Las incrustaciones representan distribuciones completas como puntos en ℋ. Dos distribuciones son idénticas si y solo si su distancia MMD es cero.",
      "category_de": "Konzept",
      "title_de": "Übung 3: Kernel Mean Embeddings im RKHS",
      "question_de": "Warum betten moderne mathematische Statistiker Wahrscheinlichkeitsverteilungen in Reproducing Kernel Hilbert Spaces (RKHS ℋ) ein?",
      "options_de": [
        "Weil Kausalität nur auf endlich-dimensionalen euklidischen Räumen formalisiert werden kann",
        "Um Datentabellen zur Speichereinsparung in diskrete Ganzzahlen zu komprimieren",
        "Weil RKHS-Einbettungen nichtlineare Funktionstransformationen verbieten",
        "Es überführt komplexe, unendlich-dimensionale Wahrscheinlichkeitsverteilungen in einzelne Punkte eines Hilbertraums, wo Unterschiede zwischen Verteilungen zu einfachen geometrischen Abständen werden (Maximum Mean Discrepancy - MMD)"
      ],
      "explanation_de": "Höchste mathematische Eleganz! Verteilungen werden zu Punkten im Hilbertraum. Verteilungen sind identisch genau dann, wenn ihre Distanz MMD in ℋ null ist."
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
      "title_en": "Exercise 1: Drift and Diffusion in SDEs",
      "question_en": "In the Stochastic Differential Equation dX_t = μ(X_t) dt + σ(X_t) dB_t: what do the two terms on the right-hand side represent?",
      "options_en": [
        "Both terms represent deterministic physical velocity along orthogonal coordinates",
        "μ dt is deterministic directional drift (expected velocity over time); σ dB_t is stochastic Brownian diffusion representing continuous microscopic random shocks",
        "dB_t is the ordinary calculus derivative of time",
        "μ dt is white noise and σ dB_t is deterministic potential energy"
      ],
      "explanation_en": "Sublime foundation! μ dt dictates the systematic flow (drift), while σ dB_t introduces Gaussian stochastic diffusion.",
      "title_es": "Ejercicio 1: Deriva y Difusión en Ecuaciones Diferenciales Estocásticas",
      "question_es": "En la Ecuación Diferencial Estocástica dX_t = μ(X_t) dt + σ(X_t) dB_t: ¿qué representan los dos términos del lado derecho?",
      "options_es": [
        "Ambos términos representan velocidad física determinista en coordenadas ortogonales",
        "μ dt es la deriva determinista direccional (velocidad esperada en el tiempo); σ dB_t es la difusión browniana estocástica que modela choques aleatorios microscópicos",
        "dB_t es la derivada clásica del tiempo",
        "μ dt es ruido blanco y σ dB_t es energía potencial determinista"
      ],
      "explanation_es": "¡Fundamento estocástico! μ dt determina el flujo sistemático (deriva), mientras σ dB_t modela la difusión browniana gaussiana.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Drift und Diffusion in SDEs",
      "question_de": "Was repräsentieren die beiden Terme auf der rechten Seite einer stochastischen Differentialgleichung dX_t = μ(X_t) dt + σ(X_t) dB_t?",
      "options_de": [
        "Beide Terme repräsentieren deterministische physikalische Geschwindigkeiten entlang orthogonaler Achsen",
        "μ dt ist die deterministische Drift (die erwartete Richtung und Geschwindigkeit über die Zeit); σ dB_t ist die stochastische Brownsche Diffusion kontinuierlicher mikroskopischer Zufallsschocks",
        "dB_t ist die gewöhnliche Zeitableitung",
        "μ dt ist weißes Rauschen und σ dB_t ist deterministische potentielle Energie"
      ],
      "explanation_de": "Das Fundament stochastischer Prozesse! μ dt beschreibt den systematischen Fluss (Drift), σ dB_t die stochastische Brownsche Diffusion."
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
      "title_en": "Exercise 2: Quadratic Variation and Itô's Lemma",
      "question_en": "Why does the stochastic chain rule (Itô's Lemma) df(X_t) = f'(X_t) dX_t + ½ f''(X_t) (dX_t)² require an extra second-derivative term unlike ordinary calculus?",
      "options_en": [
        "Because Brownian motion trajectories have zero continuous variation",
        "Because non-linear functions cannot be integrated across probability spaces",
        "Because the quadratic variation of Brownian motion is non-zero: (dB_t)² = dt. Fluctuations are so erratic that second-order Taylor terms do not vanish in the limit!",
        "Because computers need second derivatives for numerical matrix stability"
      ],
      "explanation_en": "The core miracle of stochastic calculus! Brownian increments scale with √dt, so their square (dB_t)² is of order dt, surviving into the differential rule.",
      "title_es": "Ejercicio 2: Variación Cuadrática y Lema de Itô",
      "question_es": "¿Por qué la regla de la cadena estocástica (Lema de Itô) df(X_t) = f'(X_t) dX_t + ½ f''(X_t) (dX_t)² exige un término extra con segunda derivada a diferencia del cálculo ordinario?",
      "options_es": [
        "Porque las trayectorias brownianas tienen variación continua nula",
        "Porque las funciones no lineales no pueden integrarse sobre espacios de probabilidad",
        "Porque la variación cuadrática del movimiento browniano no es nula: (dB_t)² = dt. ¡Las fluctuaciones son tan fractales que los términos de segundo orden no desaparecen en el límite!",
        "Porque los ordenadores precisan segundas derivadas para estabilidad matricial"
      ],
      "explanation_es": "¡El milagro del cálculo estocástico! Los incrementos brownianos escalan con √dt, por lo que su cuadrado (dB_t)² es de orden dt y sobrevive en el cálculo diferencial.",
      "category_de": "Konzept",
      "title_de": "Übung 2: Quadratische Variation und Itô-Lemma",
      "question_de": "Warum benötigt die stochastische Kettenregel (Itô-Lemma) df(X_t) = f'(X_t) dX_t + ½ f''(X_t) (dX_t)² im Gegensatz zur gewöhnlichen Analysis einen zusätzlichen Term zweiter Ordnung?",
      "options_de": [
        "Weil Trajektorien der Brownschen Bewegung stetige Variation null besitzen",
        "Weil nichtlineare Funktionen über Wahrscheinlichkeitsräumen nicht integrierbar sind",
        "Weil die quadratische Variation der Brownschen Bewegung nicht null ist: (dB_t)² = dt. Die Fluktuationen sind so extrem fraktal, dass Terme zweiter Ordnung in der Taylor-Reihe im Grenzwert nicht verschwinden!",
        "Weil Computer zweite Ableitungen für numerische Stabilität benötigen"
      ],
      "explanation_de": "Das Herzstück stochastischer Analysis! Brownsche Inkremente skalieren mit √dt; ihr Quadrat (dB_t)² ist daher von der Ordnung dt und bleibt im Differential erhalten."
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
      "title_en": "Exercise 3: Itô vs Stratonovich Integration",
      "question_en": "What is the fundamental conceptual and mathematical difference between an Itô integral and a Stratonovich integral?",
      "options_en": [
        "Stratonovich operates strictly in 2 dimensions while Itô is infinite-dimensional",
        "There is no mathematical difference; both yield identical sample trajectories",
        "Itô is defined solely for stationary processes, while Stratonovich is for jump processes",
        "Stratonovich evaluates the integrand at the midpoint of interval [t, t+dt], preserving ordinary Leibniz chain rules; Itô evaluates at the left endpoint (non-anticipating), preserving the zero-drift martingale property"
      ],
      "explanation_en": "Exact! Itô is non-anticipating (vital in finance and filtering, maintaining martingales). Stratonovich obeys ordinary calculus rules, making it natural in geometric physics and manifolds.",
      "title_es": "Ejercicio 3: Integración de Itô frente a Stratonovich",
      "question_es": "¿Cuál es la diferencia conceptual y matemática fundamental entre una integral de Itô y una integral de Stratonovich?",
      "options_es": [
        "Stratonovich solo opera en 2 dimensiones mientras Itô es de dimensión infinita",
        "No existe diferencia matemática; ambas producen trayectorias idénticas",
        "Itô solo se define en procesos estacionarios, mientras Stratonovich es para saltos",
        "Stratonovich evalúa el integrando en el punto medio del intervalo [t, t+dt], conservando la regla de la cadena clásica; Itô evalúa en el extremo izquierdo (no anticipativo), conservando la propiedad de martingala"
      ],
      "explanation_es": "¡Exacto! Itô es no anticipativo (clave en finanzas para mantener martingalas). Stratonovich respeta las reglas clásicas de Leibniz, ideal en física y geometría.",
      "category_de": "Dilemma",
      "title_de": "Übung 3: Itô- vs. Stratonovich-Integration",
      "question_de": "Was ist der fundamentale konzeptionelle und mathematische Unterschied zwischen einem Itô- und einem Stratonovich-Integral?",
      "options_de": [
        "Stratonovich arbeitet nur in 2 Dimensionen, während Itô unendlich-dimensional ist",
        "Es gibt keinen mathematischen Unterschied; beide liefern identische Pfade",
        "Itô ist nur für stationäre Prozesse definiert, während Stratonovich nur für Sprünge gilt",
        "Stratonovich evaluiert den Integranden am Mittelpunkt des Intervalls [t, t+dt] und bewahrt die klassische Kettenregel; Itô evaluiert am linken Rand (nicht-antizipierend) und bewahrt die Martingal-Eigenschaft ohne Vorwissen"
      ],
      "explanation_de": "Exakt! Itô blickt nicht voraus (nicht-antizipierend, essenziell in der Finanzmathematik für Martingale). Stratonovich gehorcht der gewöhnlichen Kettenregel (ideal für Differentialgeometrie)."
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
      "title_en": "Exercise 1: Riemannian Gradients on Curved Manifolds",
      "question_en": "In the apex equation dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ: what does it mean that drift gradient ∇_ℳ is defined on a Riemannian manifold ℳ?",
      "options_en": [
        "That the gradient must always equal zero to force convergence to a saddle point",
        "That stochastic diffusion can only propagate along Cartesian Euclidean axes",
        "That system state X_t can only take discrete values at graph vertices",
        "Data does not live in flat Euclidean space, but on a curved manifold (e.g., sphere, torus, or information geometry landscape); Riemannian gradient ∇_ℳ curves along geodesics via metric tensor g_ij"
      ],
      "explanation_en": "Apex differential geometry! Real complex systems evolve across curved geometric spaces. The Riemannian natural gradient respects intrinsic geometry and metric curvature.",
      "title_es": "Ejercicio 1: Gradientes Riemannianos sobre Variedades Curvas",
      "question_es": "En la ecuación cúspide dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough en ℋ: ¿qué significa que el gradiente de deriva ∇_ℳ esté definido sobre una variedad riemanniana ℳ?",
      "options_es": [
        "Que el gradiente debe ser siempre nulo para forzar la convergencia a un punto de silla",
        "Que la difusión estocástica solo puede avanzar sobre los ejes euclidianos",
        "Que el estado X_t solo puede tomar valores discretos sobre vértices de grafos",
        "Los datos no residen en un espacio euclidiano plano, sino sobre una variedad curvada; el gradiente riemanniano ∇_ℳ curva a lo largo de geodésicas mediante el tensor métrico g_ij"
      ],
      "explanation_es": "¡Geometría diferencial cumbre! Los sistemas complejos evolucionan sobre variedades curvas. El gradiente natural respeta la geometría intrínseca del tensor métrico.",
      "category_de": "Konzept",
      "title_de": "Übung 1: Riemannsche Gradienten auf gekrümmten Mannigfaltigkeiten",
      "question_de": "In der Apex-Formel dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ: Was bedeutet es, dass der Driftgradient ∇_ℳ auf einer Riemannschen Mannigfaltigkeit ℳ definiert ist?",
      "options_de": [
        "Dass der Gradient stets null sein muss, um Konvergenz zu einem Sattelpunkt zu erzwingen",
        "Dass sich die stochastische Diffusion nur entlang der euklidischen Koordinatenachsen ausbreiten kann",
        "Dass der Zustand X_t nur diskrete Werte auf Knotenpunkten annehmen kann",
        "Daten leben nicht im flachen euklidischen Raum, sondern auf einer gekrümmten Mannigfaltigkeit; der Gradient ∇_ℳ biegt sich über den metrischen Tensor g_ij entlang von Geodäten mit der Raumkrümmung"
      ],
      "explanation_de": "Spitzen-Differentialgeometrie! Komplexe Systeme bewegen sich auf gekrümmten Flächen. Der Riemannsche Gradient respektiert die intrinsische Geometrie über den metrischen Tensor."
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
      "title_en": "Exercise 2: Terry Lyons' Rough Path Theory",
      "question_en": "Why does classical Itô calculus fail when noise trajectories are extremely rough (Hurst exponent H < 1/2), and how does Terry Lyons' Rough Path Theory resolve this?",
      "options_en": [
        "Because trajectories with H < 1/2 are too smooth to possess second derivatives",
        "For H < 1/2, classical quadratic variation diverges and the Itô integral loses continuity in p-variation topology; Terry Lyons enriched paths with iterated tensor integrals (Signatures), restoring continuity to SDE solution maps",
        "Terry Lyons replaced all stochastic terms with deterministic Fourier series",
        "Because fractional Brownian motion forces a stationary null in the Malliavin matrix"
      ],
      "explanation_en": "Pinnacle of modern stochastic analysis! Rough paths (p > 2) cannot be analyzed purely coordinate-by-coordinate; augmenting them with iterated integrals (signatures) establishes continuous deterministic solution maps.",
      "title_es": "Ejercicio 2: Teoría de Rough Paths de Terry Lyons",
      "question_es": "¿Por qué fracasa el cálculo de Itô clásico cuando las trayectorias de ruido son extremadamente rugosas (Hurst H < 1/2), y cómo lo resuelve la teoría de Rough Paths de Terry Lyons?",
      "options_es": [
        "Porque las trayectorias con H < 1/2 son demasiado suaves para tener segundas derivadas",
        "Con H < 1/2, la variación cuadrática diverge y la integral de Itô pierde continuidad en la topología de p-variación; Terry Lyons enriqueció los caminos con integrales tensoriales iteradas (Signaturas), restaurando la continuidad determinista de las soluciones SDE",
        "Terry Lyons sustituyó los términos estocásticos por series deterministas de Fourier",
        "Porque el movimiento browniano fraccionario impone un cero estacionario en Malliavin"
      ],
      "explanation_es": "¡Cúspide del análisis estocástico! Caminos muy rugosos exigen enriquecerse con integrales tensoriales iteradas (signaturas), haciendo continua la solución de ecuaciones diferenciales.",
      "category_de": "Konzept",
      "title_de": "Übung 2: Terry Lyons' Rough-Path-Theorie",
      "question_de": "Warum versagt die klassische Itô-Analysis bei extrem rauen Rauschpfaden (Hurst-Exponent H < 1/2) und wie löst Terry Lyons' Rough-Path-Theorie dies?",
      "options_de": [
        "Weil Pfade mit H < 1/2 zu glatt sind, um eine zweite Ableitung zu besitzen",
        "Bei H < 1/2 divergiert die klassische quadratische Variation und das Itô-Integral verliert die Stetigkeit in der p-Variations-Topologie; Terry Lyons erweiterte den Pfad um iterierte Integrale (Signaturen), wodurch SDE-Lösungsabbildungen wieder stetig werden",
        "Terry Lyons ersetzte alle stochastischen Terme durch deterministische Fourierreihen",
        "Weil gebrochene Brownsche Bewegung bei H < 1/2 eine Nullstelle in der Malliavin-Matrix erzwingt"
      ],
      "explanation_de": "Höchste Stochastik-Kunst! Raue Pfade (p > 2) erfordern iterierte Tensorintegrale (Signaturen). Dies stellt die Stetigkeit der Lösungsabbildung von Differentialgleichungen wieder her."
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
      "title_en": "Exercise 3: Infinite-Dimensional Hilbert Space ℋ",
      "question_en": "What does it mean that system state X_t lives in an infinite-dimensional Hilbert space ℋ?",
      "options_en": [
        "X_t is no longer a single scalar or finite table row, but an entire continuous function or infinite field (e.g., continuous cortical electrochemical potential) with inner-product geometry ⟨f, g⟩_ℋ",
        "That system variance diverges to infinity across all frequency bands",
        "That state X_t diverges to infinite kinetic energy and can no longer be normalized via an L² norm",
        "That the response variable can only contain imaginary numbers in the Fourier domain"
      ],
      "explanation_en": "Pure mathematical grandeur! In Hilbert spaces, a single point X_t represents an entire continuous function or neural field, modeled through inner products and functional operators.",
      "title_es": "Ejercicio 3: El Espacio de Hilbert de Dimensión Infinita ℋ",
      "question_es": "¿Qué significa que el estado del sistema X_t resida en un espacio de Hilbert de dimensión infinita ℋ?",
      "options_es": [
        "X_t ya no es un escalar ni un vector finito, sino una función continua completa o campo infinito con geometría de producto interno ⟨f, g⟩_ℋ",
        "Que la varianza del sistema diverge a infinito en todas las bandas de frecuencia",
        "Que el estado X_t diverge a energía infinita y no puede normalizarse por norma L²",
        "Que la variable de respuesta solo contiene números imaginarios en el dominio Fourier"
      ],
      "explanation_es": "¡Grandeza matemática absoluta! En espacios de Hilbert, un solo punto X_t representa una función continua completa o campo funcional con geometría de producto interno.",
      "category_de": "Konzept",
      "title_de": "Übung 3: Der unendlich-dimensionale Hilbertraum ℋ",
      "question_de": "Was bedeutet es, dass der Systemzustand X_t in einem unendlich-dimensionalen Hilbertraum ℋ lebt?",
      "options_de": [
        "X_t ist kein einzelner Skalar oder Vektor mehr, sondern eine vollständige stetige Funktion bzw. ein kontinuierliches Feld mit Skalarproduktgeometrie ⟨f, g⟩_ℋ",
        "Dass die Varianz des Systems über alle Frequenzbänder gegen unendlich divergiert",
        "Dass der Zustand X_t zu unendlicher Energie divergiert und nicht mehr normiert werden kann",
        "Dass die Zielgröße im Fourier-Bereich ausschließlich imaginäre Zahlen annehmen darf"
      ],
      "explanation_de": "Reine mathematische Größe! Im Hilbertraum repräsentiert ein einziger Punkt X_t eine vollständige stetige Funktion oder ein neuronales Feld."
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
      "title_en": "Exercise 4: The Causal Synthesis Dilemma",
      "question_en": "Why is unifying causal inference (do-calculus) with this infinite-dimensional stochastic manifold field the ultimate holy grail for science and medicine?",
      "options_en": [
        "Because causal operators reduce all stochastic fluctuations to linear deterministic trajectories",
        "Because merely predicting how the field autonomously evolves does not tell you how to steer it; causal Hilbert inference models exactly how targeted active manipulation (e.g., deep brain stimulation or climate intervention) reprograms attractor landscapes",
        "Because do-interventions always collapse the dimension of the Hilbert space to N = 1",
        "Because this renders empirical statistical sampling entirely obsolete in clinical research"
      ],
      "explanation_en": "The Grand Unified Apex! Blending Pearl's causal do-interventions with infinite-dimensional stochastic manifold geometry empowers true scientific intelligence: predicting the consequences of action in an uncertain, non-linear universe.",
      "title_es": "Ejercicio 4: El Dilema de la Síntesis Causal",
      "question_es": "¿Por qué unificar la inferencia causal (do-cálculo) con este campo estocástico sobre variedades es el santo grial definitivo de la ciencia y la medicina?",
      "options_es": [
        "Porque los operadores causales reducen las fluctuaciones a trayectorias lineales deterministas",
        "Porque limitarse a predecir la evolución autónoma del campo no enseña cómo gobernarlo; la inferencia causal modela con exactitud cómo manipulaciones activas (p. ej., estimulación cerebral profunda o intervenciones climáticas) reprograman las cuencas de atracción",
        "Porque las do-intervenciones siempre colapsan la dimensión del espacio de Hilbert a N = 1",
        "Porque prescinde por completo de muestras estadísticas en investigación clínica"
      ],
      "explanation_es": "¡El Cenit Unificado Definitivo! Fundir intervenciones causales de Pearl con geometría estocástica sobre variedades permite la verdadera inteligencia científica: predecir los efectos de la acción en un universo no lineal e incierto.",
      "category_de": "Dilemma",
      "title_de": "Übung 4: Das kausale Synthese-Dilemma",
      "question_de": "Warum ist die Vereinigung von Kausalinferenz (do-Kalkül) mit diesem unendlich-dimensionalen stochastischen Mannigfaltigkeitsfeld der heilige Gral für Wissenschaft und Medizin?",
      "options_de": [
        "Weil Kausaloperatoren alle stochastischen Fluktuationen zu linearen deterministischen Bahnen reduzieren",
        "Weil die bloße Vorhersage des autonomen Flusses nicht erklärt, wie man das System gezielt steuert; kausale Inferenz modelliert exakt, wie aktive externe Eingriffe (z.B. tiefe Hirnstimulation oder Klimainterventionen) Attraktorlandschaften umprogrammieren",
        "Weil do-Interventionen die Dimension des Hilbertraums stets auf N = 1 kollabieren lassen",
        "Weil empirische statistische Stichproben in der klinischen Forschung dadurch überflüssig werden"
      ],
      "explanation_de": "Das ultimative Apex-Meisterstück! Zu wissen, wie ein System fließt, ist passive Wissenschaft. Zu verstehen, wie ein do(X)-Eingriff das Vektorfeld und die Attraktoren fundamental transformiert, ist die höchste Stufe stochastischer Kausalwissenschaft."
    }
  ]
};
