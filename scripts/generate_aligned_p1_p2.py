# -*- coding: utf-8 -*-
"""
Generates scripts/translations/exercises_aligned_p1_p2.py
Levels 1 to 12 (36 exercises)
Every option at index j strictly translates Dutch option at index j.
"""

import json

P1_P2 = {
  # LEVEL 1
  "l1_ex1": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 1: Measures of Central Tendency & Skewness",
    "title_es": "Ejercicio 1: Medidas de Tendencia Central y Asimetría",
    "title_de": "Übung 1: Lagemaße & Schiefe",
    "question_en": "In a national income survey, the mean income is €42,000 per year, while the median income is €31,000 per year. What does this immediately indicate regarding the shape of the income distribution?",
    "question_es": "En una encuesta nacional de ingresos, el ingreso medio anual es de 42.000 €, mientras que el ingreso mediano es de 31.000 €. ¿Qué indica esto de inmediato sobre la forma de la distribución de ingresos?",
    "question_de": "In einer nationalen Einkommensumfrage beträgt das durchschnittliche Einkommen 42.000 € pro Jahr, während das Medianeinkommen bei 31.000 € liegt. Was sagt dies unmittelbar über die Form der Einkommensverteilung aus?",
    "options_en": [
      "The distribution is right-skewed (positively skewed): a small group of high earners pulls the mean upward",
      "The distribution is left-skewed (negatively skewed): the vast majority earns more than the mean",
      "The income distribution is perfectly symmetric around €36,500",
      "The distribution is bimodal with identical peaks at €31,000 and €42,000"
    ],
    "options_es": [
      "La distribución es asimétrica a la derecha (positiva): un reducido grupo de ingresos muy altos eleva la media",
      "La distribución es asimétrica a la izquierda (negativa): la gran mayoría percibe más que la media",
      "La distribución de ingresos es perfectamente simétrica alrededor de 36.500 €",
      "La distribución es bimodal con picos idénticos en 31.000 € y 42.000 €"
    ],
    "options_de": [
      "Die Verteilung ist rechtsschief (positiv schief): Eine kleine Gruppe von Spitzenverdienern zieht das arithmetische Mittel nach oben",
      "Die Verteilung ist linksschief (negativ schief): Die überwiegende Mehrheit verdient mehr als den Durchschnitt",
      "Die Einkommensverteilung ist perfekt symmetrisch um 36.500 €",
      "Die Verteilung ist bimodal mit identischen Spitzen bei 31.000 € und 42.000 €"
    ],
    "explanation_en": "Correct! When Mean > Median, extreme high values (top incomes) drag the arithmetic mean to the right. The median reflects the true middle citizen.",
    "explanation_es": "¡Correcto! Cuando Media > Mediana, los valores atípicos elevados arrastran la media hacia la derecha. La mediana representa al ciudadano intermedio real.",
    "explanation_de": "Richtig! Wenn Mittelwert > Median gilt, ziehen extreme Ausreißer nach oben (Spitzengehälter) das arithmetische Mittel nach rechts. Der Median spiegelt den echten mittleren Bürger wider."
  },
  "l1_ex2": {
    "category_en": "Dilemma", "category_es": "Dilema", "category_de": "Dilemma",
    "title_en": "Exercise 2: Practical Dilemma at an E-Commerce Platform",
    "title_es": "Ejercicio 2: Dilema Práctico en una Plataforma de Comercio Electrónico",
    "title_de": "Übung 2: Praxisdilemma bei einer E-Commerce-Plattform",
    "question_en": "You measure load times of a mobile app. For 90% of users, the page loads in 0.5 seconds. For 10% of users with degraded connections, it takes 25 seconds. The marketing VP wants to publish 'our average load time of 2.95 seconds' in a press release. What do you advise?",
    "question_es": "Mides los tiempos de carga de una app móvil. Para el 90% de usuarios la página carga en 0,5 segundos. Para el 10% restante con mala conexión tarda 25 segundos. El director de marketing desea publicar 'el tiempo medio de carga de 2,95 segundos' en prensa. ¿Qué recomiendas?",
    "question_de": "Du misst die Ladezeiten einer mobilen App. Bei 90% der Nutzer lädt die Seite in 0,5 Sekunden. Bei 10% der Nutzer mit schlechter Verbindung dauert es 25 Sekunden. Der Marketingleiter möchte 'die durchschnittliche Ladezeit von 2,95 Sekunden' in einer Pressemitteilung veröffentlichen. Was rätst du?",
    "options_en": [
      "Report solely standard deviation (SD = 7.35s) because dispersion matters more than central location for internet services",
      "Agree: the arithmetic mean of 2.95s integrates all experiences into a single unbiased expectation value",
      "Calculate a 10% trimmed mean by dropping the slowest 10%, because those measurements should be treated as random connection failures",
      "Disagree: report both the median (0.5s) and the 95th percentile (p95 = 25s). The mean reflects neither the typical user nor the worst-hit group"
    ],
    "options_es": [
      "Reportar únicamente la desviación estándar (SD = 7,35 s) porque la dispersión importa más que la localización central en servicios web",
      "De acuerdo: la media aritmética de 2,95 s integra todas las experiencias en un valor esperado insesgado único",
      "Calcular una media recortada al 10% excluyendo el 10% más lento como fallos aleatorios de conexión",
      "En desacuerdo: informa la mediana (0,5 s) y el percentil 95 (p95 = 25 s). La media no describe al usuario típico ni refleja al grupo más perjudicado"
    ],
    "options_de": [
      "Berichte ausschließlich die Standardabweichung (SD = 7,35 s), da Streuung wichtiger ist als Lage bei Internetdiensten",
      "Zustimmen: Das arithmetische Mittel von 2,95 s integriert alle Erfahrungen in einen einzigen unverzerrten Erwartungswert",
      "Berechne ein 10% getrimmtes Mittel, indem die langsamsten 10% als zufällige Verbindungsfehler verworfen werden",
      "Nicht zustimmen: Berichte sowohl den Median (0,5 s) als auch das 95. Perzentil (p95 = 25 s). Der Mittelwert beschreibt weder den typischen Nutzer noch die Schwere der Tail-Latenz"
    ],
    "explanation_en": "Excellent decision! In latency measurements, the mean is misleading. Always report median (typical user) alongside p95/p99 (tail latency).",
    "explanation_es": "¡Excelente decisión! En latencias el promedio es engañoso. Se debe informar siempre la mediana (experiencia típica) junto al percentil 95 o 99 (latencia de cola).",
    "explanation_de": "Hervorragende Entscheidung! Bei Latenzmessungen ist der Mittelwert irreführend. Man berichtet stets den Median (typischer Nutzer) zusammen mit p95 oder p99 (Tail-Latenz)."
  },
  "l1_ex3": {
    "category_en": "Pitfall", "category_es": "Trampa", "category_de": "Fallstrick",
    "title_en": "Exercise 3: The Dispersion Pitfall Detector",
    "title_es": "Ejercicio 3: El Detector de Trampas en Dispersión",
    "title_de": "Übung 3: Der Streuungs-Fallstrick-Detektor",
    "question_en": "Why is the Interquartile Range (IQR = Q3 - Q1) far more reliable than the Range (Max - Min) for data prone to measurement errors?",
    "question_es": "¿Por qué el Rango Intercuartílico (IQR = Q3 - Q1) es mucho más fiable que el Rango Total (Máx - Mín) ante posibles errores de medida?",
    "question_de": "Warum ist der Interquartilsabstand (IQR = Q3 - Q1) bei Daten mit potenziellen Messfehlern weitaus robuster als die Spannweite (Range = Max - Min)?",
    "options_en": [
      "Because the Range depends entirely on the two most extreme observations and explodes from a single typo or outlier, whereas the IQR covers the clean middle 50% of the data",
      "Because the IQR can only be calculated for perfectly symmetric normal distributions",
      "Because the Range asymptotically converges to standard deviation in larger samples, whereas the IQR remains independent",
      "Because the IQR is a parametric test that compensates for outlier variance via Bessel's correction"
    ],
    "options_es": [
      "Porque el Rango Total depende exclusivamente de los dos valores más extremos y explota ante un solo error tipográfico, mientras que el IQR abarca el 50% central de los datos",
      "Porque el IQR solo puede calcularse en distribuciones normales perfectamente simétricas",
      "Porque el Rango converge asintóticamente a la desviación estándar en muestras grandes, mientras que el IQR permanece independiente",
      "Porque el IQR es una prueba paramétrica que compensa la varianza de atípicos mediante la corrección de Bessel"
    ],
    "options_de": [
      "Weil die Spannweite ausschließlich von den beiden extremsten Beobachtungen abhängt und bei einem einzigen Tippfehler explodiert, während der IQR die sauberen mittleren 50% der Daten umfasst",
      "Weil der IQR nur bei perfekt symmetrischen Normalverteilungen berechnet werden kann",
      "Weil die Spannweite bei größeren Stichproben asymptotisch gegen die Standardabweichung konvergiert, während der IQR unabhängig bleibt",
      "Weil der IQR ein parametrischer Test ist, der die Ausreißervarianz über Bessels Korrektur kompensiert"
    ],
    "explanation_en": "Spot-on! A single corrupt entry (e.g., age 999 instead of 99) completely ruins the Range and SD, but leaves the IQR unaffected.",
    "explanation_es": "¡Exacto! Una sola entrada errónea arruina por completo el Rango y la desviación estándar, pero no afecta al IQR.",
    "explanation_de": "Volltreffer! Ein einziger fehlerhafter Eintrag ruiniert die Spannweite und Standardabweichung völlig, lässt den IQR jedoch unberührt."
  },

  # LEVEL 2
  "l2_ex1": {
    "category_en": "Calculation", "category_es": "Cálculo", "category_de": "Berechnung",
    "title_en": "Exercise 1: Z-Score Calculation & Position",
    "title_es": "Ejercicio 1: Cálculo de Puntuación Z y Posición",
    "title_de": "Übung 1: Z-Score-Berechnung & Position",
    "question_en": "An exam score follows a normal distribution with μ = 70 and σ = 10. A student scores 90 points. What is this student's Z-score and what percentage of students score lower?",
    "question_es": "Una calificación sigue una distribución normal con μ = 70 y σ = 10. Un estudiante obtiene 90 puntos. ¿Cuál es la puntuación Z de este estudiante y qué porcentaje de estudiantes puntúa por debajo?",
    "question_de": "Ein Testergebnis folgt einer Normalverteilung mit μ = 70 und σ = 10. Ein Student erzielt 90 Punkte. Was ist der Z-Score dieses Studenten und welcher Prozentsatz der Studenten schneidet schlechter ab?",
    "options_en": [
      "Z = +2.0, exactly 95.4% score lower (according to the two-sided 2-sigma rule)",
      "Z = +2.0, approximately 97.7% score lower (only 2.3% score higher in the right tail)",
      "Z = +1.96, exactly 95.0% of all students score lower",
      "Z = +1.0, approximately 84.1% of students score lower"
    ],
    "options_es": [
      "Z = +2,0; exactamente el 95,4% puntúa por debajo (según la regla bilateral 2-sigma)",
      "Z = +2,0; aproximadamente el 97,7% puntúa por debajo (solo el 2,3% puntúa aún más alto en la cola derecha)",
      "Z = +1,96; exactamente el 95,0% de todos los estudiantes puntúa por debajo",
      "Z = +1,0; aproximadamente el 84,1% de los estudiantes puntúa por debajo"
    ],
    "options_de": [
      "Z = +2,0; genau 95,4% schneiden schlechter ab (nach der zweiseitigen 2-Sigma-Regel)",
      "Z = +2,0; etwa 97,7% schneiden schlechter ab (nur 2,3% schneiden im rechten Ausläufer noch besser ab)",
      "Z = +1,96; genau 95,0% aller Studenten schneiden schlechter ab",
      "Z = +1,0; etwa 84,1% der Studenten schneiden schlechter ab"
    ],
    "explanation_en": "Exact! Z = (90 - 70) / 10 = +2.0. Within ±2 SD lies 95.4% of the distribution. The two tails contain 4.6% (2.3% left and 2.3% right). Thus, below Z = +2.0 scores 100% - 2.3% = 97.7%.",
    "explanation_es": "¡Exacto! Z = (90 - 70) / 10 = +2,0. Dentro de ±2 SD se encuentra el 95,4% de la distribución. En las dos colas queda el 4,6% (2,3% izquierda y 2,3% derecha). Por tanto, por debajo de Z = +2,0 puntúa el 100% - 2,3% = 97,7%.",
    "explanation_de": "Exakt! Z = (90 - 70) / 10 = +2,0. Binnen ±2 SD liegen 95,4% der Verteilung. In den zwei Tails verbleiben 4,6% (2,3% links und 2,3% rechts). Unter Z = +2,0 liegen also 100% - 2,3% = 97,7%."
  },
  "l2_ex2": {
    "category_en": "Pitfall", "category_es": "Trampa", "category_de": "Fallstrick",
    "title_en": "Exercise 2: The Normality Assumption Pitfall",
    "title_es": "Ejercicio 2: La Trampa del Supuesto de Normalidad",
    "title_de": "Übung 2: Die Normalitäts-Annahme-Falle",
    "question_en": "Can you apply the 68-95-99.7 empirical rule to user follower counts on social media (Twitter/X)?",
    "question_es": "¿Se puede aplicar la regla empírica 68-95-99.7 al recuento de seguidores de cuentas en Twitter/X?",
    "question_de": "Darf man die 68-95-99,7-Faustregel auf die Follower-Zahlen von Accounts auf Twitter/X anwenden?",
    "options_en": [
      "Yes, as long as sample size N exceeds 30, because the Central Limit Theorem forces the population distribution to be normal",
      "Yes, provided you standardize Z-scores using the median instead of the arithmetic mean",
      "No! Follower counts follow a power-law / heavily skewed Pareto distribution (few accounts have millions, most have <100). The normal distribution is completely inappropriate here",
      "Yes, because follower count is a sum of independent binary decisions and therefore approximates a Gaussian bell curve"
    ],
    "options_es": [
      "Sí, siempre que el tamaño muestral N supere 30, porque el Teorema del Límite Central normaliza la distribución poblacional",
      "Sí, siempre que se estandaricen las puntuaciones Z con la mediana en lugar de la media aritmética",
      "¡No! El número de seguidores sigue una ley de potencias / distribución de Pareto muy asimétrica (pocas cuentas tienen millones, la mayoría <100). La distribución normal fracasa por completo",
      "Sí, porque el recuento de seguidores es suma de decisiones binarias independientes y aproxima una campana gaussiana"
    ],
    "options_de": [
      "Ja, solange der Stichprobenumfang N > 30 ist, da der Zentrale Grenzwertsatz die Populationsverteilung normalisiert",
      "Ja, vorausgesetzt man standardisiert die Z-Scores mit dem Median anstelle des arithmetischen Mittels",
      "Nein! Followerzahlen folgen einer Potenzgesetz- / stark rechtsschiefen Pareto-Verteilung (wenige Accounts haben Millionen, die meisten <100). Die Normalverteilung verfehlt die Realität völlig",
      "Ja, weil die Followerzahl eine Summe unabhängiger binärer Entscheidungen ist und sich daher einer Gauß-Glocke annähert"
    ],
    "explanation_en": "Spot-on! The normal distribution must never be blindly assumed. Many real-world datasets (followers, income, web traffic) follow heavy power laws.",
    "explanation_es": "¡Totalmente acertado! Jamás se debe asumir normalidad a ciegas. Fenómenos reales como seguidores, riqueza o tráfico web siguen leyes de potencias con colas pesadas.",
    "explanation_de": "Volltreffer! Die Normalverteilung darf man niemals blind voraussetzen. Viele reale Daten (Follower, Einkommen, Webtraffic) folgen extremen Potenzgesetzen (Power Laws)."
  },
  "l2_ex3": {
    "category_en": "Dilemma", "category_es": "Dilema", "category_de": "Dilemma",
    "title_en": "Exercise 3: Factory Tolerance Limits",
    "title_es": "Ejercicio 3: Límites de Tolerancia en Fábrica",
    "title_de": "Übung 3: Fertigungstoleranzen in der Produktion",
    "question_en": "A production machine fills soda bottles with μ = 500 ml and σ = 5 ml. Bottles under 490 ml (below -2 SD) cannot legally be sold. What is the most effective way to structurally reduce the rejection rate without wasting product?",
    "question_es": "Una máquina envasadora llena botellas con μ = 500 ml y σ = 5 ml. Las botellas por debajo de 490 ml (bajo -2 SD) no pueden comercializarse legalmente. ¿Cuál es la forma más efectiva de reducir el porcentaje de rechazo sin desperdiciar producto?",
    "question_de": "Eine Abfüllmaschine füllt Getränkeflaschen mit μ = 500 ml und σ = 5 ml. Flaschen unter 490 ml (unter -2 SD) dürfen gesetzlich nicht verkauft werden. Was ist der effektivste Weg, die Ausschussquote strukturell zu senken, ohne Produkt zu verschwenden?",
    "options_en": [
      "Increase the fill mean to 510 ml to lift the left tail completely above 490 ml",
      "Improve the precision of the dispensing valve so process variation σ drops from 5 ml to 2.5 ml",
      "Apply a non-linear Box-Cox transformation to the fill measurements so the left tail shrinks mathematically",
      "Increase the quality measurement sample size to N = 10,000 to narrow tolerance limits"
    ],
    "options_es": [
      "Aumentar la media de llenado a 510 ml para elevar la cola izquierda completamente por encima de 490 ml",
      "Mejorar la precisión de la válvula de dosificación para que la dispersión del proceso σ baje de 5 ml a 2,5 ml",
      "Aplicar una transformación no lineal Box-Cox para contraer matemáticamente la cola izquierda",
      "Aumentar el tamaño muestral de control a N = 10.000 para estrechar los límites de tolerancia"
    ],
    "options_de": [
      "Den Abfüllmittelwert auf 510 ml erhöhen, um den linken Ausläufer vollständig über 490 ml zu heben",
      "Die Präzision des Dosierventils verbessern, sodass die Prozessstreuung σ von 5 ml auf 2,5 ml sinkt",
      "Eine nichtlineare Box-Cox-Transformation auf die Messdaten anwenden, damit der linke Ausläufer mathematisch schrumpft",
      "Die Stichprobe der Qualitätskontrolle auf N = 10.000 vergrößern, um die Toleranzgrenzen zu verengen"
    ],
    "explanation_en": "Brilliant insight into Six Sigma quality control! By reducing variance σ, the curve becomes narrower and steeper, pulling the tails safely inside tolerance boundaries.",
    "explanation_es": "¡Brillante visión de control de calidad Six Sigma! Al reducir la varianza σ, la curva se vuelve más estrecha y empinada, eliminando las colas fuera de los límites de tolerancia.",
    "explanation_de": "Brillante Einsicht in die Six-Sigma-Qualitätskontrolle! Durch Reduktion der Prozessstreuung σ wird die Glockenkurve schmaler und steiler, wodurch die Ausläufer innerhalb der Toleranzgrenzen verschwinden."
  },

  # LEVEL 3
  "l3_ex1": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 1: Behavior of the Sample Mean",
    "title_es": "Ejercicio 1: El Comportamiento de la Media Muestral",
    "title_de": "Übung 1: Das Verhalten des Stichprobenmittelwerts",
    "question_en": "We roll a fair die 100 times (each number 1 to 6 has probability 1/6; a perfectly flat/uniform distribution). What is the shape of the distribution of the MEAN of these 100 rolls if we repeat this experiment 1,000 times?",
    "question_es": "Lanzamos un dado equilibrado 100 veces (cada número del 1 al 6 tiene probabilidad 1/6; distribución uniforme plana). ¿Cuál es la forma de la distribución de la MEDIA de estas 100 tiradas al repetir el experimento 1.000 veces?",
    "question_de": "Wir werfen 100-mal einen fairen Würfel (jede Zahl 1 bis 6 hat Wahrscheinlichkeit 1/6; perfekt flache Gleichverteilung). Welche Form hat die Verteilung des MITTELWERTS dieser 100 Würfe, wenn wir dieses Experiment 1.000-mal wiederholen?",
    "options_en": [
      "A Cauchy distribution with heavy tails caused by erratic individual rolls",
      "A completely flat uniform distribution between 1 and 6, according to conservation of distribution shape",
      "A bell-shaped normal distribution centered around 3.5 with greatly reduced variance, thanks to the Central Limit Theorem",
      "A Poisson distribution with parameter λ = 3.5 because die faces are integers"
    ],
    "options_es": [
      "Una distribución de Cauchy con colas pesadas por la irregularidad de las tiradas individuales",
      "Una distribución uniforme totalmente plana entre 1 y 6, según la conservación de forma de distribución",
      "Una distribución normal acampanada centrada en 3,5 con varianza muy reducida, gracias al Teorema del Límite Central",
      "Una distribución de Poisson con parámetro λ = 3,5 porque las caras del dado son números enteros"
    ],
    "options_de": [
      "Eine Cauchy-Verteilung mit schweren Ausläufern aufgrund der Launenhaftigkeit einzelner Zufallswürfe",
      "Eine vollkommen flache Gleichverteilung zwischen 1 und 6 gemäß dem Gesetz der Formkonstanz",
      "Eine glockenförmige Normalverteilung zentriert um 3,5 mit stark verringerter Varianz, dank des Zentralen Grenzwertsatzes",
      "Eine Poisson-Verteilung mit Parameter λ = 3,5, da Würfelaugen ganze Zahlen sind"
    ],
    "explanation_en": "Brilliant! The core miracle of the CLT: even though individual rolls are uniform, the average of 100 rolls forms a tight normal bell curve around μ = 3.5 with variance σ²/100.",
    "explanation_es": "¡Brillante! El milagro del TLC: aunque cada tirada es uniforme, el promedio de 100 tiradas forma una campana normal estrecha en torno a μ = 3,5 con varianza σ²/100.",
    "explanation_de": "Brillant! Der Kern des Zentralen Grenzwertsatzes: Obwohl Einzelwürfe gleichverteilt sind, bildet der Durchschnitt aus 100 Würfen eine schmale Normalverteilung um μ = 3,5 mit Varianz σ²/100."
  },
  "l3_ex2": {
    "category_en": "Pitfall", "category_es": "Trampa", "category_de": "Fallstrick",
    "title_en": "Exercise 2: The CLT Misconception Pitfall",
    "title_es": "Ejercicio 2: La Trampa de la Mala Interpretación del TLC",
    "title_de": "Übung 2: Das CLT-Missverständnis",
    "question_en": "A junior researcher states: 'My patient data is heavily skewed. But because I have N = 500 patients, my data has automatically become normally distributed!' Why are they wrong?",
    "question_es": "Un investigador novel afirma: 'Mis datos de pacientes son muy asimétricos. ¡Pero como tengo N = 500 pacientes, mis datos ya son normales por el TLC!' ¿Por qué se equivoca?",
    "question_de": "Ein Nachwuchsforscher behauptet: 'Meine Patientendaten sind stark schief. Aber weil ich N = 500 Patienten habe, sind meine Daten dank des CLT nun automatisch normalverteilt!' Warum liegt er falsch?",
    "options_en": [
      "Because the CLT only states that the distribution of the SAMPLE STATISTIC (the mean) becomes normal; the underlying raw patient distribution remains exactly as skewed",
      "Because the CLT only applies to continuous variables that are already approximately symmetric",
      "Because the Central Limit Theorem only takes effect when N > 10,000 for asymmetric biological distributions",
      "Because the sample standard deviation s at N = 500 converges to zero, collapsing the distribution into a Dirac delta"
    ],
    "options_es": [
      "Porque el TLC solo establece que la distribución del ESTADÍSTICO MUESTRAL (la media) se vuelve normal; la distribución subyacente de los pacientes sigue siendo igual de asimétrica",
      "Porque el TLC solo se aplica a variables continuas que ya son aproximadamente simétricas",
      "Porque el Teorema del Límite Central solo actúa con N > 10.000 en distribuciones biológicas asimétricas",
      "Porque la desviación típica muestral s con N = 500 converge a cero, degenerando la distribución en una delta de Dirac"
    ],
    "options_de": [
      "Weil der CLT nur besagt, dass die Verteilung der STICHPROBENSTATISTIK (des Mittelwerts) normal wird; die zugrunde liegende Verteilung der Einzelpatienten bleibt exakt gleich schief",
      "Weil der CLT nur für stetige Variablen gilt, die bereits näherungsweise symmetrisch sind",
      "Weil der Zentrale Grenzwertsatz bei asymmetrischen biologischen Verteilungen erst ab N > 10.000 einsetzt",
      "Weil die Stichproben-Standardabweichung s bei N = 500 gegen null konvergiert und die Verteilung zur Dirac-Delta entartet"
    ],
    "explanation_en": "Crucial distinction! The CLT guarantees that sample averages x̄ are normally distributed. It NEVER changes raw population data into a bell curve.",
    "explanation_es": "¡Distinción fundamental! El TLC garantiza que el promedio muestral x̄ tiene distribución normal. NUNCA transforma los datos brutos poblacionales en una campana.",
    "explanation_de": "Kardinaler Unterschied! Der CLT garantiert, dass Stichprobenmittelwerte x̄ normalverteilt sind. Er verwandelt niemals Rohdaten in eine Gauß-Glocke."
  },
  "l3_ex3": {
    "category_en": "Calculation", "category_es": "Cálculo", "category_de": "Berechnung",
    "title_en": "Exercise 3: Calculating Sample Size for Precision",
    "title_es": "Ejercicio 3: Cálculo del Tamaño Muestral para Precisión",
    "title_de": "Übung 3: Berechnung des Stichprobenumfangs für Präzision",
    "question_en": "The population standard deviation is σ = 20. At N = 25, the standard error is SE = 20 / √25 = 4.0. What sample size N do you need to halve the standard error to SE = 2.0?",
    "question_es": "La desviación estándar poblacional es σ = 20. Con N = 25, el error estándar es EE = 20 / √25 = 4,0. ¿Qué tamaño muestral N necesitas para reducir el error estándar a la mitad (EE = 2,0)?",
    "question_de": "Die Populationsstreuung beträgt σ = 20. Bei N = 25 ist der Standardfehler SE = 20 / √25 = 4,0. Welchen Stichprobenumfang N benötigst du, um den Standardfehler auf SE = 2,0 zu halbieren?",
    "options_en": [
      "N = 50 (double the sample, because precision is proportional to N)",
      "N = 200 (because halving the margin of error requires an eightfold sample expansion)",
      "N = 100 (quadruple the sample, because √100 = 10 and 20 / 10 = 2.0)",
      "N = 625 (because variance scales with the square of the initial sample)"
    ],
    "options_es": [
      "N = 50 (duplicar, porque la precisión es directamente proporcional a N)",
      "N = 200 (porque reducir a la mitad el margen exige multiplicar la muestra por ocho)",
      "N = 100 (cuadruplicar la muestra, porque √100 = 10 y 20 / 10 = 2,0)",
      "N = 625 (porque la varianza escala con el cuadrado de la muestra inicial)"
    ],
    "options_de": [
      "N = 50 (verdoppeln, da Präzision proportional zu N ist)",
      "N = 200 (da die Halbierung der Fehlerspanne eine achtfache Stichprobenvergrößerung erfordert)",
      "N = 100 (vervierfachen, da √100 = 10 und 20 / 10 = 2,0 ergibt)",
      "N = 625 (da die Varianz mit dem Quadrat der Anfangsstichprobe skaliert)"
    ],
    "explanation_en": "Correct! Because SE = σ / √N, halving SE requires doubling the denominator √N, which means quadrupling N: 25 × 4 = 100.",
    "explanation_es": "¡Correcto! Como EE = σ / √N, para reducir el EE a la mitad hay que duplicar √N, lo que implica cuadruplicar N: 25 × 4 = 100.",
    "explanation_de": "Richtig! Weil SE = σ / √N gilt, verlangt eine Halbierung des SE eine Verdopplung von √N, also eine Vervierfachung von N: 25 × 4 = 100."
  },

  # LEVEL 4
  "l4_ex1": {
    "category_en": "Pitfall", "category_es": "Trampa", "category_de": "Fallstrick",
    "title_en": "Exercise 1: The Interpretation of Confidence Intervals",
    "title_es": "Ejercicio 1: La Interpretación de Intervalos de Confianza",
    "title_de": "Übung 1: Die Interpretation von Konfidenzintervallen",
    "question_en": "A poll reports: '95% confidence interval for Party A is [28%, 32%]'. Which statement is mathematically FALSE?",
    "question_es": "Una encuesta informa: 'El intervalo de confianza al 95% para el partido A es [28%, 32%]'. ¿Qué afirmación es matemáticamente FALSA?",
    "question_de": "Eine Wahlumfrage berichtet: 'Das 95%-Konfidenzintervall für Partei A liegt bei [28%, 32%]'. Welche Aussage ist mathematisch FALSCH?",
    "options_en": [
      "Under repeated sampling in identical conditions, 95% of constructed intervals will contain the true population percentage",
      "If we had computed a 99% interval with the same data, the resulting interval would have been wider",
      "The point estimate for this specific sample is 30% with an estimated margin of error of ± 2%",
      "There is now an a posteriori 95% probability that the true population percentage lies within [28%, 32%]"
    ],
    "options_es": [
      "En muestreo repetido bajo idénticas condiciones, el 95% de los intervalos construidos contendrá el verdadero porcentaje poblacional",
      "Si hubiéramos calculado un intervalo al 99% con los mismos datos, el intervalo resultante habría sido más ancho",
      "La estimación puntual de esta muestra específica es 30% con un margen de error estimado de ± 2%",
      "Existe ahora una probabilidad a posteriori del 95% de que el verdadero porcentaje poblacional se encuentre dentro de [28%, 32%]"
    ],
    "options_de": [
      "Bei wiederholter Stichprobenziehung unter identischen Bedingungen werden 95% der konstruierten Intervalle den wahren Populationsanteil überdecken",
      "Hätten wir mit denselben Daten ein 99%-Intervall berechnet, wäre das resultierende Intervall breiter ausgefallen",
      "Der Punktschätzer dieser spezifischen Stichprobe liegt bei 30% mit einer geschätzten Fehlerspanne von ± 2%",
      "Es besteht nun eine A-posteriori-Wahrscheinlichkeit von 95%, dass der wahre Populationsanteil innerhalb von [28%, 32%] liegt"
    ],
    "explanation_en": "Precisely! Statement 4 is the classic frequentist fallacy. The true parameter is a fixed number, not a random variable. The 95% refers to the procedure, not this specific interval.",
    "explanation_es": "¡Exacto! La opción 4 es la falacia frecuentista clásica. El parámetro real es fijo, no aleatorio. El 95% mide la fiabilidad del procedimiento.",
    "explanation_de": "Präzise! Aussage 4 ist der klassische frequentistische Denkfehler. Der wahre Parameter ist fest, nicht zufällig. Die 95% beziehen sich auf die Verlässlichkeit des Verfahrens."
  },
  "l4_ex2": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 2: Overlapping Confidence Intervals",
    "title_es": "Ejercicio 2: Intervalos de Confianza Solapados",
    "title_de": "Übung 2: Überlappende Konfidenzintervalle",
    "question_en": "Two groups each have a 95% CI for their mean: Group 1 = [10, 16], Group 2 = [14, 20]. The intervals slightly overlap (between 14 and 16). May you conclude that the difference is not significant (p > 0.05)?",
    "question_es": "Dos grupos tienen cada uno un IC al 95% para su media: Grupo 1 = [10, 16], Grupo 2 = [14, 20]. Se solapan ligeramente (entre 14 y 16). ¿Se puede concluir que la diferencia no es significativa (p > 0,05)?",
    "question_de": "Zwei Gruppen haben jeweils ein 95%-KI für ihren Mittelwert: Gruppe 1 = [10, 16], Gruppe 2 = [14, 20]. Die Intervalle überlappen leicht (zwischen 14 und 16). Darf man folgern, dass der Unterschied nicht signifikant ist (p > 0,05)?",
    "options_en": [
      "No! Two intervals can overlap slightly while the formal two-sample t-test on the difference remains statistically significant (p < 0.05). Significance disappears only under substantial overlap",
      "Yes, because the sum of two independent 95% intervals always results in a joint confidence level of 90%",
      "No, but only if both samples demonstrate identical variance under Levene's test",
      "Yes: whenever two separate 95% confidence intervals overlap, the difference is by definition p > 0.05"
    ],
    "options_es": [
      "¡No! Dos intervalos pueden solaparse ligeramente y, sin embargo, la prueba t formal de dos muestras sobre la diferencia ser significativa (p < 0,05). Solo con solapamiento sustancial desaparece la significancia",
      "Sí, porque la suma de dos intervalos al 95% independientes resulta siempre en un nivel conjunto del 90%",
      "No, pero solo si ambas muestras presentan varianzas idénticas bajo la prueba de Levene",
      "Sí: en cuanto dos intervalos al 95% separados se solapan, la diferencia es por definición p > 0,05"
    ],
    "options_de": [
      "Nein! Zwei Intervalle können leicht überlappen, während der formale Zweistichproben-t-Test auf die Differenz dennoch statistisch signifikant ist (p < 0,05). Erst bei substanzieller Überlappung verschwindet die Signifikanz",
      "Ja, weil die Summe zweier unabhängiger 95%-Intervalle stets zu einem gemeinsamen Konfidenzniveau von 90% führt",
      "Nein, aber nur wenn beide Stichproben unter dem Levene-Test identische Varianzen aufweisen",
      "Ja: Sobald zwei getrennte 95%-Konfidenzintervalle einander überlappen, ist der Unterschied per Definition p > 0,05"
    ],
    "explanation_en": "Haute precision! Testing the difference uses SE_diff = √(SE₁² + SE₂²), which is strictly smaller than SE₁ + SE₂. CIs can overlap by up to ~29% and still yield p < 0.05.",
    "explanation_es": "¡Gran precisión! La prueba de la diferencia usa EE_dif = √(EE₁² + EE₂²), que es menor que la suma aritmética. Los IC pueden solaparse hasta un ~29% y seguir siendo p < 0,05.",
    "explanation_de": "Höchste Präzision! Der Test der Differenz nutzt SE_diff = √(SE₁² + SE₂²), was strikt kleiner als SE₁ + SE₂ ist. KIs können bis zu ca. 29% überlappen und dennoch p < 0,05 ergeben."
  },
  "l4_ex3": {
    "category_en": "Calculation", "category_es": "Cálculo", "category_de": "Berechnung",
    "title_en": "Exercise 3: Confidence Level vs Margin of Error",
    "title_es": "Ejercicio 3: Nivel de Confianza frente a Margen de Error",
    "title_de": "Übung 3: Konfidenzniveau vs. Fehlerspanne",
    "question_en": "What happens to the width of a confidence interval if you increase the confidence level from 95% to 99% for a fixed sample size?",
    "question_es": "¿Qué le ocurre al ancho de un intervalo de confianza si aumentas el nivel de confianza del 95% al 99% manteniendo el tamaño muestral fijo?",
    "question_de": "Was passiert mit der Breite eines Konfidenzintervalls, wenn man das Konfidenzniveau bei unverändertem Stichprobenumfang von 95% auf 99% erhöht?",
    "options_en": [
      "The width stays identical, but residuals are tested against the t-distribution with N - 1 degrees of freedom",
      "The interval becomes narrower (Z-factor drops) because higher confidence tolerates less error",
      "The interval becomes wider (critical Z-value rises from 1.96 to 2.58), because capturing the true parameter with greater certainty requires a wider margin",
      "The interval retains the same absolute margin, but shifts toward the null hypothesis"
    ],
    "options_es": [
      "El ancho se mantiene idéntico, pero los residuos se evalúan contra la distribución t con N - 1 grados de libertad",
      "El intervalo se vuelve más estrecho (el factor Z cae) porque mayor confianza tolera menor error",
      "El intervalo se ensancha (el valor Z crítico sube de 1,96 a 2,58), ya que asegurar la captura del parámetro exige mayor margen",
      "El intervalo conserva el mismo margen absoluto, pero su centro se desplaza hacia la hipótesis nula"
    ],
    "options_de": [
      "Die Breite bleibt identisch, aber die Residuen werden gegen die t-Verteilung mit N - 1 Freiheitsgraden getestet",
      "Das Intervall wird schmaler (der Z-Faktor sinkt), da höhere Sicherheit weniger Fehlertoleranz erlaubt",
      "Das Intervall wird breiter (der kritische Z-Wert steigt von 1,96 auf 2,58), da ein sicheres Einfangen des wahren Parameters eine größere Spanne erfordert",
      "Das Intervall behält dieselbe absolute Fehlerspanne, aber sein Zentrum verschiebt sich zur Nullhypothese"
    ],
    "explanation_en": "Exact! Greater confidence requires casting a wider net. Critical value Z* increases from 1.96 (95%) to 2.576 (99%), expanding interval width by about 31%.",
    "explanation_es": "¡Exacto! Mayor confianza exige una red más ancha. El valor crítico Z* sube de 1,96 (95%) a 2,576 (99%), ensanchando el intervalo en un 31%.",
    "explanation_de": "Exakt! Höhere Sicherheit verlangt ein breiteres Fangnetz. Der kritische Wert Z* steigt von 1,96 (95%) auf 2,576 (99%), was die Intervallbreite um ca. 31% vergrößert."
  },

  # LEVEL 5
  "l5_ex1": {
    "category_en": "Dilemma", "category_es": "Dilema", "category_de": "Dilemma",
    "title_en": "Exercise 1: Statistical Significance vs Practical Relevance",
    "title_es": "Ejercicio 1: Significancia Estadística frente a Relevancia Práctica",
    "title_de": "Übung 1: Statistische Signifikanz vs. Praktische Relevanz",
    "question_en": "An A/B test with N = 10 million visitors shows a conversion increase from 2.000% to 2.004% with p = 0.000008. What is the correct business and statistical conclusion?",
    "question_es": "Un test A/B con N = 10 millones de visitantes muestra un incremento de conversión del 2,000% al 2,004% con p = 0,000008. ¿Cuál es la conclusión estadística y empresarial correcta?",
    "question_de": "Ein A/B-Test mit N = 10 Millionen Besuchern zeigt einen Anstieg der Conversion-Rate von 2,000% auf 2,004% mit p = 0,000008. Was ist das korrekte geschäftliche und statistische Fazit?",
    "options_en": [
      "Be cautious: with N = 10 million, a hypothesis test detects even minuscule noise as highly significant; an absolute increase of 0.004% has virtually zero practical or economic value",
      "Immediately deploy to production and invest, because p < 0.00001 guarantees a massive effect",
      "Normalize the p-value by dividing by √N to restore the true null hypothesis",
      "Maintain the null hypothesis because effects under 0.1% are defined a priori as measurement error"
    ],
    "options_es": [
      "Tener cautela: con N = 10 millones, el test detecta hasta el ruido más minúsculo como muy significativo; un aumento de 0,004% apenas tiene valor práctico o empresarial",
      "Desplegar inmediatamente en producción e invertir, ya que p < 0,00001 garantiza un efecto colosal",
      "Normalizar el valor p dividiendo por √N para restaurar la verdadera hipótesis nula",
      "Mantener la hipótesis nula porque efectos menores al 0,1% se definen a priori como error de medida"
    ],
    "options_de": [
      "Vorsichtig sein: Bei N = 10 Millionen stuft ein Hypothesentest selbst winziges Rauschen als hochsignifikant ein; ein absoluter Zuwachs von 0,004% hat praktisch keinen wirtschaftlichen Nutzen",
      "Sofort für die Produktion freigeben und investieren, da p < 0,00001 einen gigantischen Effekt garantiert",
      "Den p-Wert durch Division durch √N normalisieren, um die echte Nullhypothese wiederherzustellen",
      "Die Nullhypothese beibehalten, da Effekte unter 0,1% a priori als Messfehler definiert sind"
    ],
    "explanation_en": "Essential statistical wisdom! Large sample size shrinks SE to near zero, making negligible trivialities statistically significant. Always evaluate effect size!",
    "explanation_es": "¡Sabiduría estadística básica! Muestras gigantes reducen el EE a casi cero, volviendo trivialidades despreciables estadísticamente significativas. ¡Evalúa siempre el tamaño del efecto!",
    "explanation_de": "Elementare statistische Weisheit! Riesige Fallzahlen drücken den SE gegen null, sodass kleinste Belanglosigkeiten signifikant werden. Stets die Effektstärke bewerten!"
  },
  "l5_ex2": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 2: Type I and Type II Errors in Critical Systems",
    "title_es": "Ejercicio 2: Errores Tipo I y Tipo II en Sistemas Críticos",
    "title_de": "Übung 2: Typ-I- und Typ-II-Fehler in kritischen Systemen",
    "question_en": "In the development of an autonomous emergency braking system for cars: what is a Type II error (false negative)?",
    "question_es": "En el desarrollo de un sistema de frenado autónomo de emergencia para coches: ¿qué es un error Tipo II (falso negativo)?",
    "question_de": "Bei der Entwicklung eines autonomen Notbremssystems für Pkw: Was ist ein Typ-II-Fehler (falsch-negativ)?",
    "options_en": [
      "Braking forcefully for a harmless plastic bag blowing across the road (false alarm / Type I error)",
      "Failing to brake when an actual pedestrian is crossing the road (missed real hazard / Type II error)",
      "The sensor system recalibrates distance using a Kalman filter",
      "The camera correctly detects a pedestrian and activates the emergency brake (True Positive)"
    ],
    "options_es": [
      "Frenar bruscamente ante una bolsa de plástico inofensiva movida por el viento (falsa alarma / error Tipo I)",
      "No frenar cuando hay un peatón cruzando la calzada (peligro real omitido / error Tipo II)",
      "El sistema de sensores recalibra la distancia de medición usando un filtro de Kalman",
      "La cámara detecta correctamente al peatón y activa la frenada de emergencia (Verdadero Positivo)"
    ],
    "options_de": [
      "Ungerechtfertigtes Vollbremsen wegen einer harmlosen Plastiktüte auf der Fahrbahn (Fehlalarm / Typ-I-Fehler)",
      "Nicht bremsen, obwohl tatsächlich ein Fußgänger die Straße überquert (übersehene reale Gefahr / Typ-II-Fehler)",
      "Das Sensorsystem kalibriert den Messabstand mithilfe eines Kalman-Filters neu",
      "Die Kamera erkennt einen Fußgänger korrekt und leitet eine Notbremsung ein (True Positive)"
    ],
    "explanation_en": "Life-saving difference! Type I = False alarm (unnecessary stop). Type II = Missed hazard (failure to brake for pedestrian). In safety-critical systems, Type II errors are far deadlier.",
    "explanation_es": "¡Diferencia vital! Tipo I = Falsa alarma (frenazo innecesario). Tipo II = Peligro omitido (no frenar ante peatón). En sistemas críticos, el Tipo II es letal.",
    "explanation_de": "Lebensrettender Unterschied! Typ I = Fehlalarm (unnötiger Halt). Typ II = Übersehene Gefahr (kein Bremsen bei Fußgänger). In sicherheitskritischen Systemen ist Typ II fatal."
  },
  "l5_ex3": {
    "category_en": "Pitfall", "category_es": "Trampa", "category_de": "Fallstrick",
    "title_en": "Exercise 3: The P-Value Misconception",
    "title_es": "Ejercicio 3: La Mala Interpretación del Valor P",
    "title_de": "Übung 3: Der p-Wert-Trugschluss",
    "question_en": "A researcher claims: 'My p-value is 0.04, so there is a 96% probability that my research hypothesis is true.' Is this correct?",
    "question_es": "Un investigador afirma: 'Mi valor p es 0,04, por lo que hay un 96% de probabilidad de que mi hipótesis de investigación sea verdadera'. ¿Es correcto?",
    "question_de": "Ein Forscher behauptet: 'Mein p-Wert ist 0,04, also besteht eine 96%-Wahrscheinlichkeit, dass meine Forschungshypothese wahr ist.' Stimmt das?",
    "options_en": [
      "Yes, because the complement of the p-value (1 - p = 0.96) is the posterior probability of H1",
      "Yes, provided the statistical power (1 - β) of the experiment was set in advance to exactly 80%",
      "Absolutely false! The p-value is P(Data or more extreme | H0 true), NOT P(H0 true | Data). The true probability of the hypothesis depends crucially on prior odds and statistical power",
      "Yes, because the frequentist p-value is mathematically identical to Bayes Factor BF10 divided by sample size"
    ],
    "options_es": [
      "Sí, porque el complemento del valor p (1 - p = 0,96) es la probabilidad posterior de H1",
      "Sí, siempre que la potencia estadística (1 - β) del experimento se fijase previamente en el 80%",
      "¡Totalmente falso! El valor p es P(Datos o más extremos | H0 cierta), NO P(H0 cierta | Datos). La probabilidad real de la hipótesis depende decisivamente de la probabilidad previa y la potencia",
      "Sí, porque el valor p frecuentista es matemáticamente idéntico al Factor Bayes BF10 dividido entre el tamaño muestral"
    ],
    "options_de": [
      "Ja, weil das Komplement der Überschreitungswahrscheinlichkeit (1 - p = 0,96) die Posterior-Wahrscheinlichkeit von H1 ist",
      "Ja, vorausgesetzt die statistische Power (1 - β) des Experiments wurde vorab auf exakt 80% festgelegt",
      "Völlig falsch! Der p-Wert ist P(Daten oder extremer | H0 wahr), NICHT P(H0 wahr | Daten). Die wahre Wahrscheinlichkeit der Hypothese hängt entscheidend von der A-priori-Wahrscheinlichkeit und der Power ab",
      "Ja, weil der frequentistische p-Wert mathematisch identisch mit dem Bayes-Faktor BF10 geteilt durch den Stichprobenumfang ist"
    ],
    "explanation_en": "Crucial distinction! P(Data | H0) is NOT P(H0 | Data). Confusing the two is the classic 'fallacy of the transposed conditional'.",
    "explanation_es": "¡Distinción crucial! P(Datos | H0) NO es P(H0 | Datos). Confundir ambas es la clásica 'falacia de la condicional traspuesta'.",
    "explanation_de": "Kardinaler Unterschied! P(Daten | H0) ist NICHT P(H0 | Daten). Dies zu verwechseln ist der klassische 'Trugschluss der transponierten Bedingung'."
  },

  # LEVEL 6
  "l6_ex1": {
    "category_en": "Calculation", "category_es": "Cálculo", "category_de": "Berechnung",
    "title_en": "Exercise 1: Calculating OLS Predictions",
    "title_es": "Ejercicio 1: Cálculo de Predicciones MCO",
    "title_de": "Übung 1: Berechnung von OLS-Vorhersagen",
    "question_en": "In the model Salary (€/year) = 50,000 + 12,500 × Experience (years): what is the expected salary of an employee with 4 years of experience?",
    "question_es": "En el modelo Salario (€/año) = 50.000 + 12.500 × Experiencia (años): ¿cuál es el salario esperado de un empleado con 4 años de experiencia?",
    "question_de": "Im Modell Gehalt (€/Jahr) = 50.000 + 12.500 × Erfahrung (Jahre): Wie hoch ist das erwartete Gehalt eines Mitarbeiters mit 4 Jahren Erfahrung?",
    "options_en": [
      "€ 62,500 (because experience is multiplied by only the first year)",
      "€ 75,000 (because 50,000 + 12,500 × 2)",
      "€ 112,500 (because 50,000 + 12,500 × 5)",
      "€ 100,000 (because 50,000 + 12,500 × 4 = 100,000)"
    ],
    "options_es": [
      "62.500 € (porque la experiencia solo se multiplica por el primer año)",
      "75.000 € (porque 50.000 + 12.500 × 2)",
      "112.500 € (porque 50.000 + 12.500 × 5)",
      "100.000 € (porque 50.000 + 12.500 × 4 = 100.000)"
    ],
    "options_de": [
      "62.500 € (da die Erfahrung nur für das erste Jahr angerechnet wird)",
      "75.000 € (da 50.000 + 12.500 × 2 gerechnet wurde)",
      "112.500 € (da 50.000 + 12.500 × 5 gerechnet wurde)",
      "100.000 € (da 50.000 + 12.500 × 4 = 100.000)"
    ],
    "explanation_en": "Simple linear algebra! Ŷ = β0 + β1 × X = 50,000 + 12,500 × 4 = 50,000 + 50,000 = €100,000.",
    "explanation_es": "¡Álgebra lineal básica! Ŷ = β0 + β1 × X = 50.000 + 12.500 × 4 = 50.000 + 50.000 = 100.000 €.",
    "explanation_de": "Einfache Lineare Regression! Ŷ = β0 + β1 × X = 50.000 + 12.500 × 4 = 50.000 + 50.000 = 100.000 €."
  },
  "l6_ex2": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 2: Why Minimize Sum of Squared Residuals (L2)?",
    "title_es": "Ejercicio 2: ¿Por qué Minimizar la Suma de Residuos al Cuadrado (L2)?",
    "title_de": "Übung 2: Warum die Summe der quadrierten Residuen (L2) minimieren?",
    "question_en": "Why does Ordinary Least Squares (OLS) minimize the sum of squared residuals Σ e_i² rather than the simple sum of residuals Σ e_i or absolute residuals Σ |e_i|?",
    "question_es": "¿Por qué el método de Mínimos Cuadrados Ordinarios (MCO) minimiza la suma de residuos al cuadrado Σ e_i² en lugar de la suma simple Σ e_i o los residuos absolutos Σ |e_i|?",
    "question_de": "Warum minimiert die Methode der kleinsten Quadrate (OLS) die Summe der quadrierten Residuen Σ e_i² anstelle der einfachen Summe Σ e_i oder der absoluten Beträge Σ |e_i|?",
    "options_en": [
      "Because the raw sum Σ e_i penalizes outliers more severely than squaring, making OLS unstable in large samples",
      "Because the raw sum Σ e_i is already zero for any line passing through the centroid (x̄, ȳ), and squaring (L2) is everywhere differentiable with a unique analytical solution (XᵀX)⁻¹Xᵀy, whereas absolute sum Σ |e_i| (L1) is non-differentiable at zero",
      "Because the absolute sum Σ |e_i| is mathematically undefined for continuous residuals oscillating around zero",
      "Because the Gauss-Markov theorem requires the sum of residuals to be strictly positive for unbiased estimation"
    ],
    "options_es": [
      "Porque la suma simple Σ e_i penaliza los valores atípicos con mayor dureza que los cuadrados, volviendo inestable a MCO",
      "Porque la suma simple Σ e_i ya es cero para cualquier recta que pase por el centroide (x̄, ȳ), y elevar al cuadrado (L2) es diferenciable en todo punto con solución analítica única (XᵀX)⁻¹Xᵀy, mientras que la suma absoluta Σ |e_i| (L1) no es diferenciable en cero",
      "Porque la suma absoluta Σ |e_i| no está definida matemáticamente para residuos continuos que oscilan alrededor de cero",
      "Porque el teorema de Gauss-Markov exige que la suma de residuos sea estrictamente positiva para estimadores insesgados"
    ],
    "options_de": [
      "Weil die einfache Summe Σ e_i Ausreißer härter bestraft als Quadrate, wodurch OLS bei großen Stichproben instabil würde",
      "Weil die einfache Summe Σ e_i bei jeder Geraden durch den Schwerpunkt (x̄, ȳ) stets null ist und Quadrieren (L2) überall glatt differenzierbar mit einer eindeutigen geschlossenen Matrixlösung (XᵀX)⁻¹Xᵀy ist, während die absolute Summe Σ |e_i| (L1) bei null nicht differenzierbar ist",
      "Weil die absolute Summe Σ |e_i| für stetige Residuen, die um null oszillieren, mathematisch nicht definiert ist",
      "Weil das Gauß-Markov-Theorem für erwartungstreue Schätzer verlangt, dass die Summe der Residuen strikt größer null ist"
    ],
    "explanation_en": "Exact! Raw sum Σ e_i always cancels to zero. Absolute sum L1 is non-differentiable at zero (requiring linear programming). L2 is smooth, convex, everywhere differentiable, and by Gauss-Markov yields the Best Linear Unbiased Estimator (BLUE).",
    "explanation_es": "¡Exacto! La suma simple se anula a cero. La suma absoluta L1 no es diferenciable en cero. L2 es convexa, diferenciable en todo punto y por Gauss-Markov produce el estimador lineal insesgado óptimo (BLUE).",
    "explanation_de": "Exakt! Die einfache Summe hebt sich stets zu Null auf. L1 ist bei Null nicht differenzierbar. L2 ist glatt differenzierbar, liefert die analytische Normagleichung und ist nach Gauß-Markov der beste lineare Schätzer (BLUE)."
  },
  "l6_ex3": {
    "category_en": "Pitfall", "category_es": "Trampa", "category_de": "Fallstrick",
    "title_en": "Exercise 3: Correlation vs Causation",
    "title_es": "Ejercicio 3: Correlación frente a Causalidad",
    "title_de": "Übung 3: Korrelation vs. Kausalität",
    "question_en": "There is a strong correlation (r = 0.85) between sunglasses sales and drownings in the summer. Does this mean banning sunglasses will prevent drownings?",
    "question_es": "Existe una fuerte correlación (r = 0,85) entre la venta de gafas de sol y los ahogamientos en verano. ¿Significa esto que prohibir las gafas de sol evitará ahogamientos?",
    "question_de": "Es gibt eine starke Korrelation (r = 0,85) zwischen dem Verkauf von Sonnenbrillen und Ertrinkungsunfällen im Sommer. Bedeutet dies, dass ein Verbot von Sonnenbrillen Ertrinkungsunfälle verhindert?",
    "options_en": [
      "Yes, because r > 0.80 mathematically proves a causal relationship under the Gauss-Markov theorem",
      "Yes, provided the statistical test shows p < 0.001 with high power",
      "No! High outdoor temperature is a confounder: hot weather causes both more sunglasses sales and more swimmers. The link between sunglasses and drownings is purely spurious",
      "Only if sunglasses are made of non-reflective materials that do not distort water visibility"
    ],
    "options_es": [
      "Sí, porque r > 0,80 demuestra matemáticamente una relación causal según el teorema de Gauss-Markov",
      "Sí, siempre que el contraste estadístico arroje p < 0,001 con alta potencia",
      "¡No! La alta temperatura estival es un confusor: el calor causa tanto más ventas de gafas como más bañistas. La relación entre gafas y ahogamientos es puramente espuria",
      "Solo si las gafas de sol están fabricadas con materiales no reflectantes que impidan ver el agua"
    ],
    "options_de": [
      "Ja, weil r > 0,80 gemäß dem Gauß-Markov-Theorem mathematisch einen Kausalzusammenhang beweist",
      "Ja, vorausgesetzt der statistische Test weist p < 0,001 mit hoher Power auf",
      "Nein! Die hohe Außentemperatur ist ein Confounder: Heißes Wetter führt zu mehr Sonnenbrillenkäufen UND mehr Badegästen. Die Beziehung zwischen Brille und Ertrinken ist rein scheinbar (spurious)",
      "Nur dann, wenn die Sonnenbrillen aus nicht-reflektierenden Materialien bestehen"
    ],
    "explanation_en": "Classic spurious correlation! Temperature is the confounding common cause driving both variables. Correlation never implies causation without controlling for confounders.",
    "explanation_es": "¡Clásica correlación espuria! La temperatura es el confusor que impulsa ambas variables. Correlación jamás implica causalidad sin controlar confusores.",
    "explanation_de": "Klassische Scheinkorrelation! Die Temperatur ist der Confounder, der beide Variablen antreibt. Korrelation impliziert niemals Kausalität!"
  },

  # LEVEL 7
  "l7_ex1": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 1: Behavior of Standard R²",
    "title_es": "Ejercicio 1: El Comportamiento del R² Ordinario",
    "title_de": "Übung 1: Das Verhalten des gewöhnlichen R²",
    "question_en": "Why can standard R² never decrease when adding extra predictors to a multiple OLS regression model?",
    "question_es": "¿Por qué el R² ordinario nunca disminuye al añadir predictores adicionales a un modelo de regresión múltiple MCO?",
    "question_de": "Warum kann das gewöhnliche R² niemals sinken, wenn man zusätzliche Prädiktoren zu einem multiplen OLS-Modell hinzufügt?",
    "options_en": [
      "Because total sum of squares (SST) decreases linearly with each newly added vector",
      "Because the F-test for model improvement mathematically forbids the correlation matrix from shrinking",
      "Because OLS minimizes residual sum of squares (RSS) via orthogonal projection; extra columns expand the column space and can only improve or preserve the fit",
      "Because Adjusted R² and standard R² always converge monotonically to 1.0"
    ],
    "options_es": [
      "Porque la suma total de cuadrados (SST) decrece linealmente con cada vector añadido",
      "Porque la prueba F de mejora del modelo prohíbe matemáticamente que la matriz de correlación se contraiga",
      "Porque MCO minimiza la suma de cuadrados residuales (RSS) mediante proyección ortogonal; añadir columnas expande el espacio vectorial y solo puede mejorar o igualar el ajuste",
      "Porque el R² ajustado y el R² ordinario siempre convergen monótonamente a 1,0"
    ],
    "options_de": [
      "Weil die Gesamtsumme der Quadrate (SST) mit jedem neu hinzugefügten Vektor linear abnimmt",
      "Weil der F-Test für Modellverbesserung ein Schrumpfen der Korrelationsmatrix mathematisch verbietet",
      "Weil OLS die Summe der quadrierten Residuen (RSS) über orthogonale Projektion minimiert; zusätzliche Spalten vergrößern den Spaltenraum und können die Anpassung nur verbessern oder gleich lassen",
      "Weil das adjustierte R² und das gewöhnliche R² immer monoton gegen 1,0 konvergieren"
    ],
    "explanation_en": "Correct! Mathematically, OLS can assign a coefficient of 0 to an irrelevant variable. In practice, OLS always fits minor random noise, artificially inflating standard R².",
    "explanation_es": "¡Correcto! Matemáticamente, MCO siempre puede asignar coeficiente 0 a una variable inútil. En la práctica, captura ruido aleatorio, inflando R².",
    "explanation_de": "Richtig! Mathematisch kann OLS einer überflüssigen Variablen stets Koeffizient 0 zuweisen. In der Praxis passt OLS immer Zufallsrauschen an, wodurch R² künstlich steigt."
  },
  "l7_ex2": {
    "category_en": "Dilemma", "category_es": "Dilema", "category_de": "Dilemma",
    "title_en": "Exercise 2: Model Comparison in Practice",
    "title_es": "Ejercicio 2: Comparación de Modelos en la Práctica",
    "title_de": "Übung 2: Modellvergleich in der Praxis",
    "question_en": "Model A has 3 predictors with R² = 0.74 and Adj-R² = 0.73. Model B adds 12 random variables, achieving R² = 0.76 and Adj-R² = 0.69. Which model do you choose?",
    "question_es": "El Modelo A tiene 3 predictores con R² = 0,74 y R²-Adj = 0,73. El Modelo B añade 12 variables aleatorias y obtiene R² = 0,76 y R²-Adj = 0,69. ¿Qué modelo eliges?",
    "question_de": "Modell A hat 3 Prädiktoren mit R² = 0,74 und Adj-R² = 0,73. Modell B fügt 12 zufällige Variablen hinzu und erreicht R² = 0,76 und Adj-R² = 0,69. Welches Modell wählst du?",
    "options_en": [
      "Model A, because Adjusted R² is substantially higher (0.73 vs 0.69). The 12 extra variables in Model B mainly introduce noise and overfitting penalized more heavily than their marginal gain",
      "Model B, because the raw explained variance R² of 0.76 represents the highest empirical fit",
      "Model B, provided all 12 extra variables are individually tested with a two-tailed z-test",
      "Both models are equivalent because BIC always selects the smallest residual vector"
    ],
    "options_es": [
      "El Modelo A, porque el R² ajustado es sustancialmente mayor (0,73 frente a 0,69). Las 12 variables adicionales en el Modelo B aportan sobreajuste y ruido penalizado con más fuerza que su aporte",
      "El Modelo B, porque la varianza explicada bruta R² de 0,76 representa el mayor ajuste empírico",
      "El Modelo B, siempre que las 12 variables adicionales se contrasten individualmente con una prueba z bilateral",
      "Ambos modelos son equivalentes porque el BIC siempre selecciona el vector residual más pequeño"
    ],
    "options_de": [
      "Modell A, da das adjustierte R² substanziell höher ist (0,73 vs. 0,69). Die 12 zusätzlichen Variablen in Modell B fügen hauptsächlich Overfitting und Rauschen hinzu, was stärker bestraft wird als ihr Beitrag",
      "Modell B, weil die rohe erklärte Varianz R² von 0,76 die höchste empirische Anpassung darstellt",
      "Modell B, vorausgesetzt alle 12 zusätzlichen Variablen werden einzeln mit einem zweiseitigen Z-Test geprüft",
      "Beide Modelle sind gleichwertig, da das BIC stets den kleinsten Residualvektor wählt"
    ],
    "explanation_en": "Excellent! The drop in Adjusted R² from 0.73 to 0.69 conclusively proves that the 12 extra variables add only noise and overfitting. Choose the parsimonious Model A.",
    "explanation_es": "¡Excelente! La caída del R² ajustado de 0,73 a 0,69 demuestra de forma concluyente que las 12 variables aportan ruido y sobreajuste. Elige el Modelo A.",
    "explanation_de": "Hervorragend! Der Abfall des adjustierten R² von 0,73 auf 0,69 beweist zweifelsfrei, dass die 12 Zusatzvariablen nur Rauschen und Overfitting bringen. Wähle Modell A."
  },
  "l7_ex3": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 3: What Does the Omnibus F-Test Evaluate?",
    "title_es": "Ejercicio 3: ¿Qué Contrasta la Prueba F Global?",
    "title_de": "Übung 3: Was prüft der globale F-Test?",
    "question_en": "In a multiple regression model with 4 predictors: what is the exact null hypothesis (H0) of the omnibus F-test?",
    "question_es": "En un modelo de regresión múltiple con 4 predictores: ¿cuál es la hipótesis nula (H0) exacta de la prueba F global?",
    "question_de": "In einem multiplen Regressionsmodell mit 4 Prädiktoren: Was ist die exakte Nullhypothese (H0) des globalen Omnibus-F-Tests?",
    "options_en": [
      "H0: The regression intercept β0 is statistically equal to the sample mean ȳ",
      "H0: Population R² equals the residual standard error σ",
      "H0: All four partial regression slopes are simultaneously equal to zero (β1 = β2 = β3 = β4 = 0)",
      "H0: Residuals of all four predictors follow independent univariate Gaussian distributions"
    ],
    "options_es": [
      "H0: El intercepto de regresión β0 es estadísticamente igual a la media muestral ȳ",
      "H0: El R² poblacional es igual al error estándar residual σ",
      "H0: Las cuatro pendientes de regresión parcial son simultáneamente iguales a cero (β1 = β2 = β3 = β4 = 0)",
      "H0: Los residuos de los cuatro predictores siguen distribuciones gaussianas univariantes independientes"
    ],
    "options_de": [
      "H0: Der Regressions-Achsenabschnitt β0 ist statistisch gleich dem Stichprobenmittelwert ȳ",
      "H0: Das Populations-R² entspricht dem Residual-Standardfehler σ",
      "H0: Alle vier partiellen Regressionssteigungen sind gleichzeitig exakt gleich null (β1 = β2 = β3 = β4 = 0)",
      "H0: Die Residuen aller vier Prädiktoren folgen unabhängigen univariaten Gauß-Verteilungen"
    ],
    "explanation_en": "Exact! The F-test evaluates the MODEL AS A WHOLE against an intercept-only null model. If F is significant (p < 0.05), at least one predictor contributes real explanatory power.",
    "explanation_es": "¡Exacto! La prueba F evalúa el MODELO COMPLETO frente al modelo nulo de solo constante. Si F es significativo (p < 0,05), al menos un predictor aporta información real.",
    "explanation_de": "Exakt! Der F-Test prüft das GESAMTMODELL gegen ein reines Intercept-Modell. Ist F signifikant (p < 0,05), liefert mindestens ein Prädiktor echte Erklärungskraft."
  },

  # LEVEL 8
  "l8_ex1": {
    "category_en": "Pitfall", "category_es": "Trampa", "category_de": "Fallstrick",
    "title_en": "Exercise 1: Heteroscedasticity & Standard Errors",
    "title_es": "Ejercicio 1: Heterocedasticidad y Errores Estándar",
    "title_de": "Übung 1: Heteroskedastizität & Standardfehler",
    "question_en": "What is the concrete consequence if error terms in OLS exhibit heteroscedasticity (unequal residual variance)?",
    "question_es": "¿Cuál es la consecuencia concreta si las perturbaciones en MCO son heterocedásticas (varianza residual desigual)?",
    "question_de": "Was ist die konkrete Konsequenz, wenn die Störterme in OLS heteroskedastisch sind (ungleiche Residualvarianz)?",
    "options_en": [
      "Calculated standard errors (SE) are biased, rendering confidence intervals and hypothesis tests (t- and F-values) invalid",
      "The Gauss-Markov assumption of exogeneity E[ε|X] = 0 is immediately violated",
      "OLS point estimates of coefficients become biased and inconsistent",
      "The residual sum of squares can no longer be computed via normal equations"
    ],
    "options_es": [
      "Los errores estándar (EE) calculados quedan sesgados, invalidando los intervalos de confianza y contrastes de hipótesis (valores t y F)",
      "Se viola de inmediato el supuesto de exogeneidad de Gauss-Markov E[ε|X] = 0",
      "Las estimaciones puntuales de MCO de los coeficientes se vuelven sesgadas e inconsistentes",
      "La suma de cuadrados residuales ya no puede calcularse mediante las ecuaciones normales"
    ],
    "options_de": [
      "Die berechneten Standardfehler (SE) sind verzerrt, wodurch Konfidenzintervalle und Hypothesentests (t- und F-Werte) ungültig werden",
      "Die Gauß-Markov-Annahme der Exogenität E[ε|X] = 0 wird direkt verletzt",
      "Die OLS-Punktschätzer der Koeffizienten werden verzerrt und inkonsistent",
      "Die Summe der quadrierten Residuen kann nicht länger über die Normalgleichungen berechnet werden"
    ],
    "explanation_en": "Crucial distinction! Under heteroscedasticity, OLS coefficient estimates β̂ remain unbiased, but their standard errors are distorted, making p-values untrustworthy.",
    "explanation_es": "¡Distinción vital! Con heterocedasticidad, los coeficientes β̂ siguen siendo insesgados, pero los errores estándar están mal calculados, invalidando los valores p.",
    "explanation_de": "Sehr wichtig! Unter Heteroskedastizität bleiben die Schätzer β̂ weiterhin erwartungstreu, aber die Standardfehler sind falsch berechnet. Die p-Werte sind wertlos."
  },
  "l8_ex2": {
    "category_en": "Dilemma", "category_es": "Dilema", "category_de": "Dilemma",
    "title_en": "Exercise 2: Curvature in Residuals vs Fitted Plot",
    "title_es": "Ejercicio 2: Curvatura en el Gráfico de Residuos frente a Ajustados",
    "title_de": "Übung 2: Krümmung im Residuals-vs-Fitted-Plot",
    "question_en": "In a Residuals vs Fitted plot, you observe a clear U-shaped parabolic curve. What is the appropriate methodological response?",
    "question_es": "En el gráfico de Residuos frente a Valores Ajustados se observa una clara forma de U (curva parabólica). ¿Cuál es la respuesta metodológica adecuada?",
    "question_de": "Im 'Residuals vs Fitted'-Plot siehst du ein deutliches U-förmiges Parabelmuster. Was ist die methodisch korrekte Reaktion?",
    "options_en": [
      "Remove the top 10% of observations to artificially straighten the residual pattern",
      "Ignore the curvature as long as the omnibus F-test reports p < 0.001",
      "Apply robust Huber-White standard errors to absorb functional curvature",
      "The assumption of linearity is violated; add a quadratic term (X²), spline, or non-linear transformation to correct the model"
    ],
    "options_es": [
      "Eliminar el 10% superior de observaciones para enderezar artificialmente el patrón residual",
      "Ignorar la curvatura mientras la prueba F global indique p < 0,001",
      "Aplicar errores estándar robustos de Huber-White para absorber la curvatura funcional",
      "El supuesto de linealidad se ha violado; añade un término cuadrático (X²), spline o transformación no lineal para corregir el modelo"
    ],
    "options_de": [
      "Entferne die oberen 10% der Beobachtungen, um das Residuenmuster künstlich zu begradigen",
      "Ignoriere die Krümmung, solange der globale F-Test p < 0,001 anzeigt",
      "Wende robuste Huber-White-Standardfehler an, um die funktionale Krümmung aufzufangen",
      "Die Annahme der Linearität ist verletzt; füge einen quadratischen Term (X²), Spline oder eine nichtlineare Transformation hinzu, um das Modell zu korrigieren"
    ],
    "explanation_en": "Precisely! Residual curvature indicates that a straight line misrepresents the data structure. Adjust the functional form using polynomials, logs, or splines.",
    "explanation_es": "¡Exacto! La curvatura residual demuestra que una recta es un modelo incorrecto para estos datos. Ajusta la estructura funcional con polinomios, logaritmos o splines.",
    "explanation_de": "Präzise! Eine Krümmung in den Residuen zeigt unmissverständlich, dass eine Gerade das falsche Modell ist. Passe die Modellstruktur mit Polynomen, Logs oder Splines an."
  },
  "l8_ex3": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 3: Normal Q-Q Plot Interpretation",
    "title_es": "Ejercicio 3: Interpretación del Gráfico Q-Q Normal",
    "title_de": "Übung 3: Normal-Q-Q-Plot-Interpretation",
    "question_en": "In the Normal Q-Q plot of residuals, points curve steeply upward above the 45-degree diagonal on the top right. What does this indicate?",
    "question_es": "En el gráfico Q-Q normal de residuos, los puntos se curvan pronunciadamente hacia arriba por encima de la diagonal de 45° en el extremo superior derecho. ¿Qué indica esto?",
    "question_de": "Im Normal-Q-Q-Plot der Residuen biegen sich die Punkte oben rechts steil nach oben über die 45-Grad-Diagonale. Was signalisiert dieser Befund?",
    "options_en": [
      "Residuals are perfectly symmetrically distributed with minimal kurtosis",
      "The model suffers from severe multicollinearity in the right quadrants",
      "Residuals have a heavier right tail than a pure normal distribution (positive skewness and extreme outliers)",
      "Conditional residual variance converges monotonically to zero"
    ],
    "options_es": [
      "Los residuos están distribuidos de forma perfectamente simétrica con curtosis mínima",
      "El modelo padece multicolinealidad severa en los cuadrantes derechos",
      "Los residuos presentan una cola derecha más pesada que una distribución normal pura (asimetría positiva y atípicos extremos)",
      "La varianza condicional de los residuos converge monótonamente a cero"
    ],
    "options_de": [
      "Die Residuen sind perfekt symmetrisch mit minimaler Kurtosis verteilt",
      "Das Modell leidet unter schwerer Multikollinearität in den rechten Quadranten",
      "Die Residuen besitzen einen schwereren rechten Ausläufer als eine reine Normalverteilung (rechtsschiefe Ausreißer)",
      "Die bedingte Varianz der Residuen konvergiert monoton gegen null"
    ],
    "explanation_en": "Correct! When residuals curve above the diagonal on the right, observed values are larger than expected under normality, diagnosing a heavy right tail.",
    "explanation_es": "¡Correcto! Si los residuos se sitúan por encima de la diagonal en la derecha, los valores observados son más extremos de lo previsto bajo normalidad (cola pesada a la derecha).",
    "explanation_de": "Richtig! Steigen Residuen rechts über die Diagonale, sind reale Beobachtungen extremer als unter Normalität erwartet: Die Verteilung besitzt schwere rechte Ausläufer."
  },

  # LEVEL 9
  "l9_ex1": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 1: What Causes Simpson's Paradox?",
    "title_es": "Ejercicio 1: ¿Qué Causa la Paradoja de Simpson?",
    "title_de": "Übung 1: Was verursacht das Simpson-Paradoxon?",
    "question_en": "What is the underlying mechanism that can flip a positive overall correlation between X and Y into a negative association within subgroups (Simpson's Paradox)?",
    "question_es": "¿Cuál es el mecanismo subyacente por el cual una correlación positiva general entre X e Y puede invertirse a negativa dentro de los subgrupos (Paradoja de Simpson)?",
    "question_de": "Was ist der zugrunde liegende Mechanismus, durch den eine positive Gesamtkorrelation zwischen X und Y innerhalb von Untergruppen in eine negative Assoziation umschlagen kann (Simpson-Paradoxon)?",
    "options_en": [
      "An unevenly distributed confounder Z that correlates strongly with both predictor X and outcome Y",
      "Simultaneous occurrence of heteroscedasticity and multicollinearity in the residuals",
      "An arithmetic inconsistency caused by failing to standardize continuous regressors",
      "Exceeding statistical power thresholds in excessively large sample sizes"
    ],
    "options_es": [
      "Un confusor Z desigualmente distribuido que correlaciona fuertemente tanto con el predictor X como con la respuesta Y",
      "La presencia simultánea de heterocedasticidad y multicolinealidad en los residuos",
      "Una inconsistencia aritmética provocada por no estandarizar regresores continuos",
      "Superar los umbrales de potencia estadística con muestras excesivamente grandes"
    ],
    "options_de": [
      "Ein ungleichmäßig verteilter Confounder Z, der stark mit sowohl dem Prädiktor X als auch der Zielgröße Y korreliert",
      "Das gleichzeitige Auftreten von Heteroskedastizität und Multikollinearität in den Residuen",
      "Eine arithmetische Inkonsistenz, die durch fehlende Standardisierung stetiger Regressoren entsteht",
      "Das Überschreiten statistischer Powergrenzen bei zu großen Stichproben"
    ],
    "explanation_en": "Precisely! Simpson's paradox arises when an omitted third variable (confounder) drives both group assignment and outcome simultaneously.",
    "explanation_es": "¡Exacto! La paradoja de Simpson surge cuando se omite un confusor que condiciona simultáneamente la asignación de grupos y la respuesta.",
    "explanation_de": "Präzise! Das Simpson-Paradoxon entsteht, wenn ein übersehener Confounder sowohl die Gruppenzuordnung als auch die Zielgröße dominiert."
  },
  "l9_ex2": {
    "category_en": "Practice", "category_es": "Práctica", "category_de": "Praxis",
    "title_en": "Exercise 2: Simpson's Paradox at UC Berkeley",
    "title_es": "Ejercicio 2: La Paradoja de Simpson en UC Berkeley",
    "title_de": "Übung 2: Das Simpson-Paradoxon an der UC Berkeley",
    "question_en": "In the famous UC Berkeley admissions study, men overall appeared to have higher admission rates than women. Yet within nearly every individual department, women had equal or higher acceptance rates. How does multiple regression explain this?",
    "question_es": "En el famoso estudio de admisiones de UC Berkeley, los hombres parecían tener mayor tasa de admisión global que las mujeres. Sin embargo, dentro de cada departamento, las mujeres tenían tasas iguales o superiores. ¿Cómo lo explica la regresión múltiple?",
    "question_de": "In der berühmten Zulassungsstudie der UC Berkeley schienen Männer insgesamt höhere Zulassungschancen zu haben als Frauen. Innerhalb der einzelnen Fakultäten wiesen Frauen jedoch gleiche oder höhere Zulassungsquoten auf. Wie erklärt multiple Regression dies?",
    "options_en": [
      "Data was distorted by measurement noise in the binary dependent variable",
      "Women disproportionately applied to highly competitive departments with very low baseline admission rates (confounding by department choice)",
      "The selection procedure violated the homoscedasticity assumption across departments",
      "The linear link function failed to converge due to low male respondent counts"
    ],
    "options_es": [
      "Los datos estaban distorsionados por ruido de medida en la variable dependiente binaria",
      "Las mujeres solicitaron admisión desproporcionadamente en departamentos muy competitivos con tasas de admisión bajas (confusión por elección de carrera)",
      "El proceso de selección violó el supuesto de homocedasticidad entre departamentos",
      "La función de enlace lineal no convergió debido a un número insuficiente de hombres"
    ],
    "options_de": [
      "Die Daten wurden durch Messrauschen in der binären Zielvariablen verzerrt",
      "Frauen bewarben sich überproportional häufig bei stark umkämpften Fakultäten mit sehr niedrigen Gesamtzulassungsquoten (Confounding durch Studienwahl)",
      "Das Auswahlverfahren verletzte die Homoskedastizitätsannahme zwischen den Fachbereichen",
      "Die lineare Linkfunktion konvergierte aufgrund zu geringer männlicher Fallzahlen nicht"
    ],
    "explanation_en": "Brilliant insight! Department was the confounder. Once you control for department in regression, the apparent gender disparity disappears.",
    "explanation_es": "¡Brillante! El departamento era el confusor. Al incluir departamento en la regresión (condicionar por facultad), la supuesta discriminación se esfuma.",
    "explanation_de": "Brillante Einsicht! Die Fakultät war der Confounder. Sobald man für die Fakultät kontrolliert, verschwindet die scheinbare Ungleichbehandlung sofort."
  },
  "l9_ex3": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 3: Interpreting Partial Regression Coefficients",
    "title_es": "Ejercicio 3: Interpretación de Coeficientes de Regresión Parcial",
    "title_de": "Übung 3: Interpretation partieller Regressionskoeffizienten",
    "question_en": "In the model Salary = 30,000 + 2,500 × Education (years) + 1,200 × Experience: how do you correctly interpret the coefficient 2,500?",
    "question_es": "En el modelo Salario = 30.000 + 2.500 × Educación (años) + 1.200 × Experiencia: ¿cómo se interpreta correctamente el coeficiente 2.500?",
    "question_de": "Im Modell Gehalt = 30.000 + 2.500 × Bildung (Jahre) + 1.200 × Erfahrung: Wie interpretiert man den Koeffizienten 2.500 korrekt?",
    "options_en": [
      "Every citizen with completed education earns at least €2,500 above the average salary",
      "Education explains exactly €2,500 of total residual variance in the population",
      "The correlation coefficient between education and experience is fixed at €2,500",
      "Holding years of work experience constant (ceteris paribus), each additional year of education yields an expected salary increase of €2,500"
    ],
    "options_es": [
      "Todo ciudadano con titulación gana al menos 2.500 € por encima del salario medio",
      "Los años de educación explican exactamente 2.500 € de la varianza residual poblacional",
      "El coeficiente de correlación entre educación y experiencia se ha fijado en 2.500 €",
      "Manteniendo constantes los años de experiencia laboral (ceteris paribus), cada año adicional de educación se asocia con un aumento salarial esperado de 2.500 €"
    ],
    "options_de": [
      "Jeder Bürger mit abgeschlossener Ausbildung verdient mindestens 2.500 € mehr als das Durchschnittsgehalt",
      "Bildungsjahre erklären exakt 2.500 € der gesamten Residualvarianz in der Population",
      "Der Korrelationskoeffizient zwischen Bildung und Erfahrung ist auf 2.500 € fixiert",
      "Bei gleichbleibender Berufserfahrung (ceteris paribus) bringt jedes zusätzliche Bildungsjahr einen erwarteten Gehaltsanstieg von 2.500 €"
    ],
    "explanation_en": "Exact! 'Partial' means the effect of X1 when all other predictors (experience) are held strictly constant.",
    "explanation_es": "¡Exacto! 'Parcial' significa el efecto de X1 manteniendo estrictamente constantes los demás predictores (experiencia).",
    "explanation_de": "Exakt! 'Partiell' bedeutet: der Effekt von X1, wenn alle anderen Prädiktoren (hier: Erfahrung) konstant gehalten werden."
  },

  # LEVEL 10
  "l10_ex1": {
    "category_en": "Calculation", "category_es": "Cálculo", "category_de": "Berechnung",
    "title_en": "Exercise 1: Variance Inflation Factor (VIF)",
    "title_es": "Ejercicio 1: Factor de Inflación de la Varianza (VIF)",
    "title_de": "Übung 1: Varianzinflationsfaktor (VIF)",
    "question_en": "A predictor X₁ has a Variance Inflation Factor of VIF = 10 in a regression model. What does this concretely imply for estimation?",
    "question_es": "Un predictor X₁ tiene un Factor de Inflación de la Varianza VIF = 10 en un modelo de regresión. ¿Qué implica esto concretamente para la estimación?",
    "question_de": "Ein Prädiktor X₁ weist in einem Regressionsmodell einen Varianzinflationsfaktor von VIF = 10 auf. Was bedeutet dies konkret für die Schätzung?",
    "options_en": [
      "The correlation coefficient between X₁ and response Y equals r = 0.90",
      "The t-test p-value dropped by a factor of 10 in favor of the alternative hypothesis",
      "The variance of the estimated coefficient β̂₁ is 10 times larger and its standard error is √10 ≈ 3.16 times wider compared to an orthogonal scenario where X₁ is uncorrelated with other predictors",
      "The model requires 10 extra covariates to compensate for estimation uncertainty in β̂₁"
    ],
    "options_es": [
      "El coeficiente de correlación entre X₁ y la respuesta Y es igual a r = 0,90",
      "El valor p de la prueba t se ha reducido por un factor de 10 a favor de H1",
      "La varianza del coeficiente estimado β̂₁ es 10 veces mayor y su error estándar es √10 ≈ 3,16 veces más amplio en comparación con un escenario ortogonal donde X₁ no está correlacionado con otros predictores",
      "El modelo requiere 10 covariables adicionales para compensar la incertidumbre de β̂₁"
    ],
    "options_de": [
      "Der Korrelationskoeffizient zwischen X₁ und Zielgröße Y ist gleich r = 0,90",
      "Der p-Wert des t-Tests ist um den Faktor 10 zugunsten der Alternativhypothese gesunken",
      "Die Varianz des geschätzten Koeffizienten β̂₁ ist 10-mal größer und der Standardfehler √10 ≈ 3,16-mal breiter im Vergleich zu einem orthogonalen Szenario, in dem X₁ unkorreliert mit anderen Prädiktoren ist",
      "Das Modell benötigt 10 zusätzliche Kovariaten, um die Unsicherheit von β̂₁ auszugleichen"
    ],
    "explanation_en": "Correct! VIF measures how much coefficient variance is inflated by collinearity. At VIF = 10, the standard error is over 3x wider than necessary!",
    "explanation_es": "¡Correcto! El VIF mide cuánto se infla la varianza del coeficiente por colinealidad. Con VIF = 10, ¡el error estándar es más del triple de amplio!",
    "explanation_de": "Richtig! VIF misst, wie stark die Varianz eines Koeffizienten durch Kollinearität aufgebläht wird. Bei VIF = 10 ist der SE mehr als dreimal so breit wie nötig!"
  },
  "l10_ex2": {
    "category_en": "Pitfall", "category_es": "Trampa", "category_de": "Fallstrick",
    "title_en": "Exercise 2: High R² with Non-Significant Coefficients",
    "title_es": "Ejercicio 2: Alto R² con Coeficientes No Significativos",
    "title_de": "Übung 2: Hohes R² mit nicht-signifikanten Koeffizienten",
    "question_en": "Your regression model achieves a very high R² = 0.88 and overall F-test p < 0.0001. Yet none of the 4 individual regressors achieves statistical significance (all p > 0.15). What is happening?",
    "question_es": "Tu modelo de regresión tiene un R² = 0,88 muy alto y prueba F global con p < 0,0001. Sin embargo, ninguno de los 4 regresores alcanza significancia estadística individual (todos p > 0,15). ¿Qué ocurre?",
    "question_de": "Dein Regressionsmodell hat ein sehr hohes R² = 0,88 und einen F-Test mit p < 0,0001. Jedoch erreicht keiner der 4 einzelnen Regressoren statistische Signifikanz (alle p > 0,15). Was liegt hier vor?",
    "options_en": [
      "The model suffers from selection bias because the dependent variable is non-Gaussian",
      "Severe multicollinearity: predictors share so much overlapping variance that OLS cannot isolate their unique contributions with precision",
      "The sample is too large, causing the Central Limit Theorem to flatten t-statistics",
      "Endogeneity caused by omitted interaction terms"
    ],
    "options_es": [
      "El modelo sufre sesgo de selección porque la variable dependiente no es gaussiana",
      "Multicolinealidad severa: los predictores comparten tanta varianza solapada que MCO no puede aislar sus aportaciones individuales con precisión",
      "La muestra es demasiado grande, haciendo que el TLC aplane los estadísticos t",
      "Endogeneidad provocada por omitir términos de interacción"
    ],
    "options_de": [
      "Das Modell leidet unter Selektionsbias, weil die abhängige Variable nicht-gaußförmig ist",
      "Schwere Multikollinearität: Die Prädiktoren teilen so viel überlappende Varianz, dass OLS ihre individuellen Beiträge nicht präzise isolieren kann",
      "Die Stichprobe ist zu groß, sodass der Zentrale Grenzwertsatz die t-Statistiken abflacht",
      "Endogenität durch weggelassene Interaktionsterme"
    ],
    "explanation_en": "Masterful! Classic hallmark of severe multicollinearity: the team as a whole explains the outcome brilliantly, but individual credits cannot be disentangled.",
    "explanation_es": "¡Magistral! Firma clásica de multicolinealidad: el conjunto del modelo funciona de forma excelente, pero no se pueden aislar los créditos individuales.",
    "explanation_de": "Meisterhaft! Das typische Muster schwerer Multikollinearität: Das Gesamtensemble liefert Top-Ergebnisse (hohes F und R²), aber Einzeleffekte lassen sich nicht trennen."
  },
  "l10_ex3": {
    "category_en": "Dilemma", "category_es": "Dilema", "category_de": "Dilemma",
    "title_en": "Exercise 3: Multicollinearity and Prediction",
    "title_es": "Ejercicio 3: Multicolinealidad y Predicción",
    "title_de": "Übung 3: Multikollinearität und Prognose",
    "question_en": "Suppose two predictors are strongly correlated (r = 0.95). Does this harm the overall predictive accuracy (Ŷ) of the model for new data from the same population?",
    "question_es": "Supón que dos predictores están fuertemente correlacionados (r = 0,95). ¿Perjudica esto la capacidad predictiva global (Ŷ) del modelo en datos nuevos de la misma población?",
    "question_de": "Angenommen, zwei Prädiktoren sind stark korreliert (r = 0,95). Beeinträchtigt dies die allgemeine Vorhersagekraft (Ŷ) des Modells für neue Daten aus derselben Population?",
    "options_en": [
      "Yes: multicollinearity is guaranteed to exponentially bias the point estimate of Ŷ",
      "Yes: conditional prediction variance immediately diverges to infinity",
      "Only when individual VIF values drop below the threshold of 1.0",
      "No: OLS can still accurately predict the combined outcome Ŷ provided the correlation structure among predictors remains stable in the target population; only individual β interpretations are untrustworthy"
    ],
    "options_es": [
      "Sí: la multicolinealidad sesga exponencialmente la estimación puntual de Ŷ",
      "Sí: la varianza condicional de la predicción diverge de inmediato a infinito",
      "Solo cuando los valores VIF individuales caen por debajo del umbral de 1,0",
      "No: MCO puede predecir con precisión la respuesta combinada Ŷ siempre que la estructura de correlación entre predictores sea estable; solo la interpretación individual de los β no es fiable"
    ],
    "options_de": [
      "Ja: Multikollinearität führt garantiert zu einer exponentiellen Verzerrung der Punktschätzung von Ŷ",
      "Ja: Die bedingte Prognosevarianz divergiert sofort gegen unendlich",
      "Nur dann, wenn die einzelnen VIF-Werte den Schwellenwert von 1,0 unterschreiten",
      "Nein: OLS kann die kombinierte Zielgröße Ŷ weiterhin präzise vorhersagen, sofern die Korrelationsstruktur zwischen den Prädiktoren stabil bleibt; nur die Einzelinterpretation der β's ist unzuverlässig"
    ],
    "explanation_en": "Subtle but vital! Multicollinearity damages parameter interpretation, NOT overall predictive accuracy (as long as predictor correlations remain intact).",
    "explanation_es": "¡Sutil pero crucial! La multicolinealidad daña la interpretación de coeficientes, NO la precisión predictiva combinada (siempre que la correlación se mantenga).",
    "explanation_de": "Subtil aber essenziell! Multikollinearität schadet der Koeffizienteninterpretation, NICHT der Gesamtprognosekraft (sofern Prädiktorkorrelationen stabil bleiben)."
  },

  # LEVEL 11
  "l11_ex1": {
    "category_en": "Calculation", "category_es": "Cálculo", "category_de": "Berechnung",
    "title_en": "Exercise 1: From Log-Odds to Odds Ratio",
    "title_es": "Ejercicio 1: De Log-Odds a Odds Ratio",
    "title_de": "Übung 1: Von Log-Odds zur Odds Ratio",
    "question_en": "In a logistic regression on myocardial infarctions, the estimated coefficient for smoking is β = 0.693. What is the Odds Ratio (OR) and what does it mean clinically?",
    "question_es": "En una regresión logística sobre infartos, el coeficiente estimado para tabaquismo es β = 0,693. ¿Cuál es la Odds Ratio (OR) y qué significa clínicamente?",
    "question_de": "In einer logistischen Regression zu Herzinfarkten beträgt der geschätzte Koeffizient für Rauchen β = 0,693. Wie lautet die Odds Ratio (OR) und was bedeutet sie klinisch?",
    "options_en": [
      "OR = 0.693; absolute risk of heart attack increases by 69.3% in smokers",
      "OR = 1.0; there is no statistically detectable association between smoking and infarction",
      "OR = e^0.693 = 2.0; smokers have twice the odds of experiencing a heart attack compared to non-smokers",
      "OR = 0.50; smokers have half the relative risk of cardiovascular complications"
    ],
    "options_es": [
      "OR = 0,693; el riesgo absoluto de infarto aumenta un 69,3% en fumadores",
      "OR = 1,0; no existe asociación estadística demostrable entre fumar e infartos",
      "OR = e^0,693 = 2,0; los fumadores tienen el doble de odds (razón de momios) de sufrir un infarto frente a los no fumadores",
      "OR = 0,50; los fumadores tienen la mitad de riesgo relativo de complicaciones"
    ],
    "options_de": [
      "OR = 0,693; das absolute Infarktrisiko steigt bei Rauchern um 69,3%",
      "OR = 1,0; es gibt keinen statistisch nachweisbaren Zusammenhang",
      "OR = e^0,693 = 2,0; Raucher haben eine doppelt so hohe Chance (Odds) auf einen Herzinfarkt im Vergleich zu Nichtrauchern",
      "OR = 0,50; Raucher haben ein halbiertes relatives Risiko für Komplikationen"
    ],
    "explanation_en": "Correct! Logistic regression models ln(odds). Exponentiating β yields OR = e^0.693 ≈ 2.0: smokers face twice the odds of a heart attack.",
    "explanation_es": "¡Correcto! La regresión logística modela ln(odds). Exponenciando β se obtiene OR = e^0,693 ≈ 2,0: los fumadores tienen el doble de odds.",
    "explanation_de": "Richtig! Logistische Regression modelliert ln(Odds). Über die Exponentialfunktion erhält man e^0,693 ≈ 2,0: Raucher haben doppelt so hohe Odds."
  },
  "l11_ex2": {
    "category_en": "Dilemma", "category_es": "Dilema", "category_de": "Dilemma",
    "title_en": "Exercise 2: Decision Threshold in Cancer Diagnostics",
    "title_es": "Ejercicio 2: Umbral de Decisión en Diagnóstico Oncológico",
    "title_de": "Übung 2: Entscheidungsschwelle in der Krebsdiagnostik",
    "question_en": "A machine learning model predicts the probability of a malignant tumor. Default decision cutoff is p = 0.50. How do you adjust this cutoff if missed tumors (false negatives) must be minimized at all costs?",
    "question_es": "Un modelo predice la probabilidad de tumor maligno con umbral predeterminado de p = 0,50. ¿Cómo ajustas este umbral si minimizar tumores omitidos (falsos negativos) es prioritario a toda costa?",
    "question_de": "Ein KI-Modell prognostiziert die Wahrscheinlichkeit eines bösartigen Tumors. Die Standardschwelle liegt bei p = 0,50. Wie passt du diese Schwelle an, wenn übersehene Tumore (falsch-negativ) um jeden Preis minimiert werden müssen?",
    "options_en": [
      "Lower the threshold (e.g., to p = 0.20) to maximize Sensitivity (Recall), even though false positives (biopsies) increase",
      "Strictly keep the threshold at 0.50, because this mathematically maximizes AUC-ROC",
      "Raise the threshold to p = 0.85 to maximize Specificity and avoid unnecessary panic",
      "Set threshold to complement of prevalence (1 - prevalence) to balance Bayes' theorem"
    ],
    "options_es": [
      "Bajar el umbral (p. ej., a p = 0,20) para maximizar Sensibilidad (Recall), aunque aumenten los falsos positivos (biopsias)",
      "Mantener estrictamente el umbral en 0,50 porque maximiza siempre el AUC-ROC",
      "Subir el umbral a p = 0,85 para maximizar Especificidad y evitar alarmas",
      "Fijar el umbral en el complemento de la prevalencia (1 - prevalencia) para balancear el teorema de Bayes"
    ],
    "options_de": [
      "Die Schwelle senken (z.B. auf p = 0,20), um die Sensitivität (Recall) zu maximieren, auch wenn dadurch falsch-positive Befunde (Biopsien) zunehmen",
      "Die Schwelle strikt bei 0,50 belassen, da dies mathematisch die maximale AUC-ROC garantiert",
      "Die Schwelle auf p = 0,85 anheben, um die Spezifität zu maximieren und Panik zu vermeiden",
      "Die Schwelle auf das Komplement der Prävalenz (1 - Prävalenz) setzen, um den Satz von Bayes auszugleichen"
    ],
    "explanation_en": "Life-saving choice! When consequences of false negatives are fatal, lower the threshold to prioritize Sensitivity (Recall): better 10 benign biopsies than 1 missed tumor.",
    "explanation_es": "¡Decisión vital! Cuando omitir un positivo es mortal, baja el umbral para priorizar Sensibilidad: mejor 10 biopsias innecesarias que 1 tumor omitido.",
    "explanation_de": "Lebensrettende Entscheidung! Wenn falsch-negative Fehler tödlich sind, senkt man die Schwelle zur Maximierung der Sensitivität: Lieber 10 Biopsien zu viel als 1 übersehener Tumor."
  },
  "l11_ex3": {
    "category_en": "Pitfall", "category_es": "Trampa", "category_de": "Fallstrick",
    "title_en": "Exercise 3: The '99% Accuracy' Fallacy",
    "title_es": "Ejercicio 3: La Falacia de la 'Exactitud del 99%'",
    "title_de": "Übung 3: Die Täuschung der '99%-Genauigkeit'",
    "question_en": "A fraud detection model for credit card transactions (where only 0.1% are fraudulent) achieves 99.9% accuracy by simply classifying EVERY transaction as non-fraudulent. Why is this model useless?",
    "question_es": "Un modelo antifraude con tarjetas (donde solo el 0,1% es fraude) alcanza un 99,9% de exactitud clasificando simplemente TODAS las transacciones como no fraudulentas. ¿Por qué es inútil?",
    "question_de": "Ein Betrugserkennungsmodell für Kreditkartentransaktionen (wovon nur 0,1% betrügerisch sind) erreicht 99,9% Genauigkeit, indem es einfach JEDE Transaktion als 'Nicht-betrügerisch' einstuft. Warum ist dieses Modell nutzlos?",
    "options_en": [
      "Because the Brier score of this model is mathematically undefined for binary outcomes",
      "Because Sensitivity (True Positive Rate) is exactly 0%: it detects literally zero fraudsters. In imbalanced classes, evaluate Precision, Recall, and PR-AUC",
      "Because 99.9% accuracy directly proves the sample size was too small",
      "Because the logit link function becomes unstable when prevalence drops below 5%"
    ],
    "options_es": [
      "Porque el Brier score del modelo no está definido para respuestas binarias",
      "Porque la Sensibilidad (True Positive Rate) es exactamente del 0%: no detecta a ningún defraudador. En clases desbalanceadas evalúa Precisión, Recall y PR-AUC",
      "Porque una exactitud del 99,9% indica directamente un tamaño muestral insuficiente",
      "Porque la función logit se desestabiliza cuando la prevalencia cae por debajo del 5%"
    ],
    "options_de": [
      "Weil der Brier-Score dieses Modells bei binären Zielgrößen mathematisch nicht definiert ist",
      "Weil die Sensitivität (True Positive Rate) exakt 0% beträgt: Das Modell erkennt buchstäblich keinen einzigen Betrüger. Bei seltenen Klassen muss man Precision, Recall und PR-AUC bewerten",
      "Weil eine Genauigkeit von 99,9% direkt auf einen zu kleinen Stichprobenumfang hinweist",
      "Weil die Logit-Linkfunktion instabil wird, sobald die Prävalenz unter 5% sinkt"
    ],
    "explanation_en": "Classic data science pitfall! The 'Accuracy Paradox'. In imbalanced classes, raw accuracy is meaningless; examine Recall, Precision, and the PR curve.",
    "explanation_es": "¡Clásica trampa de ciencia de datos! La 'Paradoja de la Exactitud'. Con clases desbalanceadas, la exactitud no sirve; examina Recall, Precisión y la curva PR.",
    "explanation_de": "Klassischer Fallstrick: Das Genauigkeitsparadoxon (Accuracy Paradox). Bei extrem ungleichen Klassen sagt einfache Genauigkeit nichts aus. Betrachte Recall, Precision und PR-AUC."
  },

  # LEVEL 12
  "l12_ex1": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 1: Geometric Difference Between L1 and L2",
    "title_es": "Ejercicio 1: La Diferencia Geométrica entre L1 y L2",
    "title_de": "Übung 1: Der geometrische Unterschied zwischen L1 und L2",
    "question_en": "Why does Lasso (L₁ regularization: Σ |β_j|) produce exact sparsity (coefficients set to exactly zero) while Ridge (L₂ regularization: Σ β_j²) does not?",
    "question_es": "¿Por qué Lasso (regularización L₁: Σ |β_j|) genera dispersión exacta (coeficientes exactamente cero) mientras que Ridge (regularización L₂: Σ β_j²) no?",
    "question_de": "Warum führt Lasso (L₁-Regularisierung: Σ |β_j|) zu exakter Sparsity (Koeffizienten exakt null) und Ridge (L₂-Regularisierung: Σ β_j²) nicht?",
    "options_en": [
      "Because Ridge regularization can only be applied to standardized Gaussian covariates",
      "Because the L₂ penalty diverges quadratically, mathematically blocking gradient descent to zero",
      "Because the L₁ constraint region has sharp corners on coordinate axes (a diamond in 2D); elliptical OLS contours typically touch a corner first where β_j = 0",
      "Because Lasso relies on analytical matrix inversion while Ridge must be solved iteratively"
    ],
    "options_es": [
      "Porque Ridge solo es aplicable a covariables gaussianas estandarizadas",
      "Porque la penalización L₂ diverge cuadráticamente, bloqueando el descenso del gradiente a cero",
      "Porque la región de restricción L₁ tiene vértices afilados sobre los ejes (un rombo en 2D); las elipses de MCO suelen contactar primero en un vértice donde β_j = 0",
      "Porque Lasso utiliza inversión matricial analítica mientras que Ridge debe resolverse de forma iterativa"
    ],
    "options_de": [
      "Weil Ridge-Regularisierung ausschließlich auf standardisierte Gauß-Kovariaten anwendbar ist",
      "Weil die L₂-Strafe quadratisch divergiert und dadurch den Gradientenabstieg nach null blockiert",
      "Weil der L₁-Restriktionsbereich spitze Ecken auf den Koordinatenachsen besitzt (ein Rhombus in 2D); elliptische OLS-Fehlerkonturen berühren typischerweise zuerst eine Ecke, wo β_j = 0 ist",
      "Weil Lasso analytische Matrixinversion nutzt, während Ridge iterativ gelöst werden muss"
    ],
    "explanation_en": "Masterful geometric insight! The diamond shape of L1 has sharp points on the axes. Elliptical error contours hit corners first, driving redundant coefficients to exactly zero.",
    "explanation_es": "¡Magistral visión geométrica! La forma de diamante de L1 tiene puntas en los ejes. Las elipses de error contactan primero en las esquinas, fijando parámetros superfluos a cero.",
    "explanation_de": "Meisterhafte geometrische Einsicht! Der Rhombus von L1 hat Ecken auf den Achsen. Die Fehlerellipsen berühren zuerst diese Spitzen, wodurch irrelevante Parameter exakt auf 0 gesetzt werden."
  },
  "l12_ex2": {
    "category_en": "Dilemma", "category_es": "Dilema", "category_de": "Dilemma",
    "title_en": "Exercise 2: Choosing Between Ridge and Lasso in Gene Expression",
    "title_es": "Ejercicio 2: Elección entre Ridge y Lasso en Expresión Génica",
    "title_de": "Übung 2: Wahl zwischen Ridge und Lasso bei Genexpression",
    "question_en": "You analyze 20,000 genes across N = 150 patients. You expect only a small handful (ca. 10–15 genes) to have an authentic biological role in the disease. Which regularization method is preferred?",
    "question_es": "Analizas 20.000 genes en N = 150 pacientes. Esperas que solo un puñado (unos 10–15 genes) tenga un papel biológico real en la patología. ¿Qué método de regularización es preferible?",
    "question_de": "Du analysierst 20.000 Gene bei N = 150 Patienten. Du erwartest, dass nur eine kleine Handvoll (ca. 10–15 Gene) tatsächlich eine biologische Rolle bei der Erkrankung spielt. Welche Regularisierungsmethode ist zu bevorzugen?",
    "options_en": [
      "Lasso (L₁), because the L₁ penalty performs automatic variable selection and drives thousands of irrelevant genes to exactly zero",
      "Ridge (L₂), because it retains all 20,000 genes with proportionally shrunken effects, keeping biological pathways intact",
      "Principal Component Regression without penalty, because orthogonal rotation eliminates collinearity",
      "Standard OLS regression, because the Gauss-Markov theorem guarantees BLUE estimators when N < P"
    ],
    "options_es": [
      "Lasso (L₁), porque la penalización L₁ realiza selección automática de variables y fija exactamente en cero los miles de genes irrelevantes",
      "Ridge (L₂), porque conserva los 20.000 genes con efectos contraídos proporcionalmente, manteniendo intactas las redes biológicas",
      "Regresión de Componentes Principales sin penalización, porque la rotación ortogonal elimina la colinealidad",
      "Regresión MCO estándar, porque el teorema de Gauss-Markov garantiza estimadores BLUE con N < P"
    ],
    "options_de": [
      "Lasso (L₁), da die L₁-Strafe automatische Variablenselektion durchführt und tausende irrelevante Gene exakt auf null setzt",
      "Ridge (L₂), da es alle 20.000 Gene mit proportional geschrumpften Effekten behält und biologische Netzwerke intakt lässt",
      "Hauptkomponentenregression ohne Strafe, da orthogonale Rotation Kollinearität eliminiert",
      "Gewöhnliche OLS-Regression, da das Gauß-Markov-Theorem auch bei N < P beste lineare Schätzer garantiert"
    ],
    "explanation_en": "Correct! In high-dimensional settings (P >> N) with sparse underlying truth, Lasso is unmatched because it eliminates irrelevant features completely.",
    "explanation_es": "¡Correcto! En escenarios de alta dimensionalidad (P >> N) con señales dispersas, Lasso es inigualable porque elimina los factores irrelevantes.",
    "explanation_de": "Richtig! Bei hochdimensionalen Daten (P >> N) mit dünner wahrer Signalstruktur (Sparsity) ist Lasso unübertroffen, da es irrelevante Gene ausfiltert."
  },
  "l12_ex3": {
    "category_en": "Concept", "category_es": "Concepto", "category_de": "Konzept",
    "title_en": "Exercise 3: What Happens as Penalty Parameter λ Approaches Infinity?",
    "title_es": "Ejercicio 3: ¿Qué Ocurre cuando el Parámetro de Penalización λ Tiende a Infinito?",
    "title_de": "Übung 3: Was geschieht, wenn der Strafparameter λ gegen unendlich geht?",
    "question_en": "In both Ridge and Lasso regression: what happens to the estimated coefficient vector β̂ as the hyperparameter λ approaches infinity (λ → ∞)?",
    "question_es": "Tanto en regresión Ridge como Lasso: ¿qué le ocurre al vector de coeficientes estimados β̂ cuando el hiperparámetro λ tiende a infinito (λ → ∞)?",
    "question_de": "Sowohl bei Ridge als auch bei Lasso: Was passiert mit dem geschätzten Koeffizientenvektor β̂, wenn der Hyperparameter λ gegen unendlich strebt (λ → ∞)?",
    "options_en": [
      "Coefficients converge to unconstrained OLS estimates (minimum bias, maximum variance)",
      "All slope coefficients are driven to exactly zero; the model simply predicts the grand mean ȳ for everyone (maximum bias, minimum variance)",
      "The predictor correlation matrix becomes singular, causing residuals to explode to infinity",
      "The model converges to a non-parametric k-nearest neighbors estimator"
    ],
    "options_es": [
      "Los coeficientes convergen a los estimadores MCO sin restricciones (sesgo mínimo, varianza máxima)",
      "Todas las pendientes se reducen exactamente a cero; el modelo predice simplemente la media general ȳ para todos (sesgo máximo, varianza mínima)",
      "La matriz de correlación de predictores se vuelve singular y los residuos explotan hacia infinito",
      "El modelo converge a un estimador no paramétrico de k vecinos más cercanos"
    ],
    "options_de": [
      "Die Koeffizienten konvergieren gegen die unbeschränkten OLS-Schätzer (minimaler Bias, maximale Varianz)",
      "Alle Steigungskoeffizienten werden exakt auf null gesetzt; das Modell prognostiziert für jeden schlicht den Gesamtmittelwert ȳ (maximaler Bias, minimale Varianz)",
      "Die Korrelationsmatrix wird singulär, wodurch die Residuen gegen unendlich explodieren",
      "Das Modell konvergiert gegen einen nicht-parametrischen k-Nächste-Nachbarn-Schätzer"
    ],
    "explanation_en": "Exact! When λ = ∞, slopes are zeroed out completely. The model has zero variance across datasets, but maximum bias. This embodies the bias-variance tradeoff.",
    "explanation_es": "¡Exacto! Con λ = ∞, las pendientes se anulan por completo. El modelo tiene varianza cero entre muestras, pero sesgo máximo.",
    "explanation_de": "Exakt! Bei unendlicher Strafe λ werden alle Steigungen 0. Das Modell hat null Varianz (prognostiziert stets ȳ), aber maximalen Bias."
  }
}

content = "# -*- coding: utf-8 -*-\nALIGNED_P1_P2 = " + json.dumps(P1_P2, indent=2, ensure_ascii=False) + "\n"

with open("scripts/translations/exercises_aligned_p1_p2.py", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated scripts/translations/exercises_aligned_p1_p2.py with {len(P1_P2)} exercises!")
