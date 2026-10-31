// Multilingual German translations for Exercises in Levels 13 to 24 (Phases 3 & 4)

module.exports = {
  "l13_ex1": {
    "category_de": "Berechnung",
    "title_de": "Übung 1: Intraclass-Korrelation (ICC) berechnen",
    "question_de": "In einer Schulleistungsstudie beträgt die Varianz zwischen den Schulen τ² = 25 und die Residualvarianz der Schüler innerhalb der Schulen σ² = 75. Wie hoch ist der ICC?",
    "options_de": [
      "ICC = 25 / (25 + 75) = 0,25 (25% der Gesamtvarianz liegt auf Schulebene)",
      "ICC = 75 / 25 = 3,00",
      "ICC = 25 / 75 = 0,33",
      "ICC = √(25 / 100) = 0,50"
    ],
    "explanation_de": "Richtig! ICC = τ² / (τ² + σ²) = 25 / 100 = 0,25. Ein Viertel der gesamten Variabilität ist auf Schul-Clustering zurückzuführen."
  },
  "l13_ex2": {
    "category_de": "Fallstrick",
    "title_de": "Übung 2: Warum versagt die Unabhängigkeitsannahme?",
    "question_de": "Du misst den Blutdruck bei 30 Patienten an 10 aufeinanderfolgenden Tagen (300 Datenzeilen). Ein Analyst passt Standard-OLS mit N = 300 an. Warum liegt hier statistische Pseudoreplikation vor?",
    "options_de": [
      "Weil Blutdruck nicht in Millimeter Quecksilbersäule gemessen werden darf",
      "Weil 10 Messungen desselben Patienten stark korrelieren; der wahre unabhängige Stichprobenumfang beträgt N = 30 Patienten, nicht 300 unabhängige Einheiten. OLS unterschätzt Standardfehler um das √10 ≈ 3,16-Fache!",
      "Weil OLS mindestens 1.000 Beobachtungen für Längsschnittdaten erfordert",
      "Weil wiederholte Messungen jegliche Residualvarianz eliminieren"
    ],
    "explanation_de": "Hervorragend! Pseudoreplikation behandelt abhängige Wiederholungsmessungen als neue unabhängige Information und erzeugt dadurch künstliche Scheinsignifikanz."
  },
  "l13_ex3": {
    "category_de": "Dilemma",
    "title_de": "Übung 3: Wann ist gepooltes OLS noch akzeptabel?",
    "question_de": "Wann ist es statistisch vertretbar, klassisches OLS auf geclusterte Daten anzuwenden, ohne ein Mehrebenenmodell zu verwenden?",
    "options_de": [
      "Wenn die Intraclass-Korrelation praktisch null ist (ICC < 0,01) und der Designeffekt nahe 1,0 liegt oder die Clustergröße m = 1 beträgt",
      "Immer dann, wenn der Gesamtstichprobenumfang N > 500 ist",
      "Wenn die Zielgröße exakt normalverteilt ist",
      "Wenn der Forscher sich ausschließlich für R² interessiert"
    ],
    "explanation_de": "Sehr präzise! Wenn ICC ≈ 0, existiert kein Clustering-Effekt (Designeffekt DEFF = 1 + (m - 1) × ICC ≈ 1,0). Erst dann sind Standardfehler von OLS unverzerrt."
  },
  "l14_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Fester Effekt vs. Zufallseffekt",
    "question_de": "Was ist der fundamentale methodische Unterschied zwischen der Modellierung von Schul-Effekten als feste Effekte (Fixed Effects / Dummies) versus Zufallseffekte (Random Intercepts u_0j ~ N(0, τ²))?",
    "options_de": [
      "Feste Effekte sind immer schneller zu berechnen",
      "Feste Dummy-Variablen schätzen jede Schule isoliert (verbrauchen J Freiheitsgrade und erlauben keine Verallgemeinerung); Zufallseffekte behandeln Schulen als Ziehungen aus einer übergeordneten Population und schätzen nur einen einzigen Varianzparameter τ²",
      "Zufallseffekte setzen voraus, dass alle Schulen identische Mittelwerte haben",
      "Feste Effekte können nur bei stetigen Variablen verwendet werden"
    ],
    "explanation_de": "Exakt! Random Effects tauschen J individuelle Koeffizienten gegen einen einzigen Populationsparameter τ² ein und erlauben Inferenz auf bisher ungesehene Schulen."
  },
  "l14_ex2": {
    "category_de": "Berechnung",
    "title_de": "Übung 2: Empirical Bayes Shrinkage in Aktion",
    "question_de": "Schule A hat nur 2 Schüler getestet (hohe Unsicherheit, kleiner Stichprobenumfang n_j = 2), während Schule B 500 Schüler getestet hat. Wie wirkt sich Empirical Bayes Shrinkage auf ihre geschätzten Random Intercepts aus?",
    "options_de": [
      "Die Schätzung von Schule A wird stark zum Gesamtpopulationsmittelwert geschrumpft (Shrinkage), während Schule B fast unverändert bei ihrem empirischen Mittelwert bleibt",
      "Beide Schulen werden exakt gleich stark zum Mittelwert gezogen",
      "Schule A wird überhaupt nicht verändert, während Schule B halbiert wird",
      "Shrinkage entfernt Schule A komplett aus dem Datensatz"
    ],
    "explanation_de": "Brillant! Shrinkage (partielles Pooling) gewichtet die Schätzung nach Informationsgehalt: Wenige Beobachtungen bedeuten hohe Unsicherheit, sodass das Modell der robusten Populations-Prior mehr vertraut."
  },
  "l14_ex3": {
    "category_de": "Dilemma",
    "title_de": "Übung 3: Random Intercepts vs. feste Dummy-Variablen",
    "question_de": "Wann ist ein Fixed-Effects-Modell (Dummy-Variablen) einem Random-Effects-Modell zwingend vorzuziehen?",
    "options_de": [
      "Wenn die Cluster-Zufallseffekte u_0j mit den Prädiktoren auf Individualebene X_ij korrelieren (Endogenität / Verletzung der Orthogonalitätsannahme; Hausman-Test signifikant)",
      "Wenn die Stichprobengröße ungerade ist",
      "Wenn das R² des Modells negativ wird",
      "Wenn mehr als 10 Cluster vorhanden sind"
    ],
    "explanation_de": "Goldstandard der Ökonometrie! Wenn Cluster-Effekte mit Prädiktoren korrelieren (z.B. wohlhabendere Schulen haben teurere Lehrmittel), verzerrt Random Intercepts die Schätzer. Fixed Effects eliminiert diese zeitinvarianten Confounder komplett."
  },
  "l15_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Was leistet ein Random Slope?",
    "question_de": "In einer klinischen Studie zu einem Antidepressivum über 8 Wochen: Was ermöglicht das Hinzufügen eines 'Random Slopes' für die Zeitvariable (Zeit | Patient)?",
    "options_de": [
      "Es erzwingt, dass alle Patienten mit derselben Rate genesen",
      "Es eliminiert alle Messfehler der Bluttests",
      "Es erlaubt jedem individuellen Patienten seine eigene, personenspezifische Genesungsrate (Steigung), und schätzt die Varianz dieser Reaktionen in der Population",
      "Es wandelt das lineare Modell in ein logistisches Modell um"
    ],
    "explanation_de": "Exzellent! Ein Random Intercept erlaubt unterschiedliche Ausgangsniveaus; ein Random Slope erlaubt heterogene Behandlungsverläufe (personalisierte Wirksamkeit)."
  },
  "l15_ex2": {
    "category_de": "Konzept",
    "title_de": "Übung 2: Negative Korrelation zwischen Intercept und Slope",
    "question_de": "Im Mehrebenenmodell schätzt du eine Korrelation zwischen Random Intercept und Random Slope von ρ = -0,75. Was bedeutet das inhaltlich für eine Trainingsstudie?",
    "options_de": [
      "Teilnehmer mit einem sehr niedrigen Anfangsniveau (niedriger Intercept) erzielen die steilsten Trainingszuwächse (hoher Slope), während fitte Teilnehmer kaum noch Steigerungspotenzial haben (Deckeneffekt / Aufholeffekt)",
      "Das Modell ist mathematisch instabil und muss neu spezifiziert werden",
      "Alle Teilnehmer verschlechtern sich im Laufe der Zeit",
      "Die Trainingsmethode ist unwirksam"
    ],
    "explanation_de": "Sehr scharfsinnig! ρ < 0 ist typisch für Konvergenz- oder Deckeneffekte: Je niedriger die Baseline, desto größer der marginale Zugewinn durch Training."
  },
  "l15_ex3": {
    "category_de": "Dilemma",
    "title_de": "Übung 3: Umgang mit fehlenden Werten (Unbalanced Data)",
    "question_de": "In einer Längsschnittstudie verpassen einige Patienten Visiten (Missing At Random - MAR). Warum ist ein Linear Mixed Model (LMM) einer klassischen Repeated-Measures ANOVA überlegen?",
    "options_de": [
      "Weil LMM alle fehlenden Werte automatisch durch den Mittelwert ersetzt",
      "Weil LMMs beliebige Beobachtungsabstände und unvollständige Zeitreihen nahtlos verarbeiten, ohne Patienten mit einzelnen fehlenden Visiten aus der Analyse auszuschließen (kein zeilenweiser Fallausschluss)",
      "Weil Repeated-Measures ANOVA keine Normalverteilung voraussetzt",
      "Weil LMMs keine Fehlerterme besitzen"
    ],
    "explanation_de": "Klassischer Vorteil moderner Biostatistik! ANOVA verwirft Probanden mit nur einer fehlenden Messung (Listwise Deletion). LMMs maximieren die Likelihood über alle verfügbaren Datenpunkte unter der MAR-Annahme."
  },
  "l16_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Wann wechselt man zu GLMM?",
    "question_de": "Wann ist ein Generalized Linear Mixed Model (GLMM) anstelle eines Standard-LMM zwingend erforderlich?",
    "options_de": [
      "Wenn die Clustergröße über 1.000 liegt",
      "Wenn die Zielgröße nicht-normal ist (z.B. binäre Heilung Ja/Nein, Zähldaten von Epilepsieanfällen) UND die Daten hierarchisch geclustert sind",
      "Wenn keine Random Slopes vorhanden sind",
      "Ausschließlich bei randomisierten kontrollierten Studien"
    ],
    "explanation_de": "Korrekt! GLMM = GLM (Link-Funktion + Exponentialfamilie) + LMM (Zufallseffekte für geclusterte / wiederholte Daten)."
  },
  "l16_ex2": {
    "category_de": "Berechnung",
    "title_de": "Übung 2: Interpretation fester Effekte im GLMM",
    "question_de": "In einem logistischen GLMM mit Logit-Link für Krankenhaussterblichkeit beträgt der Koeffizient für eine neue Behandlung β = -0,693. Wie lautet die Interpretation?",
    "options_de": [
      "Die absolute Sterberate sinkt um 69,3%",
      "Die bedingte Chance zu sterben (Odds) sinkt um das exp(-0,693) = 0,50-Fache (Halbierung der Odds) für einen Patienten im selben Krankenhaus",
      "Die Sterbewahrscheinlichkeit sinkt auf genau 0%",
      "Krankenhäuser mit Behandlung haben 50% weniger Betten"
    ],
    "explanation_de": "Präzise! exp(-0,693) = 0,50. Das Odds Ratio von 0,50 ist clusterspezifisch (bedingt auf die Random Effects des jeweiligen Krankenhauses)."
  },
  "l16_ex3": {
    "category_de": "Fallstrick",
    "title_de": "Übung 3: Was ist Überdispersion?",
    "question_de": "Du modellierst Zähldaten von Support-Tickets pro Kunde mit einer Poisson-GLMM-Regression. Die Varianz der Daten ist jedoch 5-mal so groß wie der Mittelwert. Was ist das Problem und wie wird es gelöst?",
    "options_de": [
      "Überdispersion (Overdispersion): Die Poisson-Annahme Var(Y) = E(Y) wird verletzt, wodurch Standardfehler dramatisch unterschätzt werden; Abhilfe schafft eine Negativbinomial-Verteilung oder ein individuenbezogener Zufallseffekt",
      "Unterdispersion: Das Modell hat zu viele Parameter",
      "Das Modell muss durch ein OLS-Modell ersetzt werden",
      "Die Daten müssen durch Quadrieren transformiert werden"
    ],
    "explanation_de": "Volltreffer! Poisson setzt strikte Äquidispersions-Gleichheit voraus. Überdispersion erzeugt Scheinpräzision und zu kleine p-Werte; Negativbinomial-Modelle korrigieren dies durch einen Dispersionsparameter."
  },
  "l17_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Was sind Splines in GAMs?",
    "question_de": "Wie modelliert ein Generalized Additive Model (GAM) hochgradig nicht-lineare Zusammenhänge ohne starre Polynome?",
    "options_de": [
      "Indem es Datenpunkte mit linearen Geraden verbindet",
      "Über eine Summe stückweiser Basisfunktionen (Splines), deren Flexibilität durch eine Rauheitsstrafe (Smoothing Penalty) reguliert wird, um Überanpassung zu verhindern",
      "Durch Sortieren aller Prädiktoren nach Größe",
      "Indem das R² manuell auf 0,99 gesetzt wird"
    ],
    "explanation_de": "Exakt! GAMs nutzen Spline-Basen (z.B. kubische B-Splines oder Thin Plate Splines) kombiniert mit einer Strafe auf die integrierte zweite Ableitung ∫ [f''(x)]² dx zur Glättung."
  },
  "l17_ex2": {
    "category_de": "Berechnung",
    "title_de": "Übung 2: Effektive Freiheitsgrade (EDF)",
    "question_de": "In einer GAM-Analyse berichtet der Output für eine geglättete Variable s(Temperatur) einen Wert von edf = 1,02. Was bedeutet das?",
    "options_de": [
      "Die Glättungsfunktion ist extrem komplex und oszilliert wild",
      "Der Zusammenhang ist praktisch eine strikt lineare Gerade (edf = 1 entspricht einer linearen Steigung); keine komplexe Nichtlinearität vorhanden",
      "Das Modell konnte nicht konvergieren",
      "Die Temperatur hat überhaupt keinen Einfluss auf die Zielgröße"
    ],
    "explanation_de": "Brillant interpretiert! edf = 1 bedeutet ein linearer Term. Je höher der edf (z.B. edf = 8), desto welliger und kurvenreicher ist die geschätzte Funktion."
  },
  "l17_ex3": {
    "category_de": "Dilemma",
    "title_de": "Übung 3: Die Glättungsstrafe λ",
    "question_de": "Was geschieht mit der vorhergesagten Kurve f(x) in einem GAM, wenn der Glättungsparameter λ gegen unendlich strebt (λ → ∞)?",
    "options_de": [
      "Die Kurve interpoliert jeden einzelnen Datenpunkt perfekt",
      "Die Krümmungsstrafe dominiert vollständig: Alle Nichtlinearitäten werden ausgelöscht und die Schätzung kollabiert zu einer gewöhnlichen linearen OLS-Geraden",
      "Die Kurve wird zu einer Sinuswelle",
      "Der AIC wird negativ unendlich"
    ],
    "explanation_de": "Korrekt! λ bestraft Krümmung (∫ [f''(x)]² dx). Für λ → ∞ darf keine zweite Ableitung existieren, was die Kurve zu einer Geraden zwingt."
  },
  "l18_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Was bedeutet Zensierung in der Überlebensanalyse?",
    "question_de": "In einer 5-jährigen Krebsstudie lebt ein Patient nach Studienende immer noch gesund, und ein anderer Patient zieht nach Jahr 2 ins Ausland und reagiert nicht mehr. Warum dürfen diese Patienten nicht einfach gelöscht werden?",
    "options_de": [
      "Weil Löschen die Stichprobengröße verringert",
      "Weil sie Rechtszensierung aufweisen: Wir wissen gesichert, dass sie mindestens 5 bzw. 2 Jahre überlebt haben; diese unvollständige Information ist unverzichtbar für eine unverzerrte Kaplan-Meier-Kurve",
      "Weil Zensierung nur bei Maschinenversagen auftreten darf",
      "Weil Patienten mit Zensierung immer als Todesfälle gezählt werden müssen"
    ],
    "explanation_de": "Grundpfeiler der Überlebensanalyse! Zensierte Beobachtungen liefern fundamentale Information über die Überlebenszeit bis zum Zensierungszeitpunkt. Listwise Deletion würde die Überlebenswahrscheinlichkeit massiv unterschätzen."
  },
  "l18_ex2": {
    "category_de": "Berechnung",
    "title_de": "Übung 2: Hazard Ratio interpretieren",
    "question_de": "In einem Cox-Proportional-Hazards-Modell für ein neues Herzmedikament beträgt die Hazard Ratio HR = 0,65 (p = 0,002). Wie lautet die klinische Interpretation?",
    "options_de": [
      "65% der Patienten werden geheilt",
      "Patienten unter dem neuen Medikament haben zu jedem Zeitpunkt ein um 35% geringeres relatives Sterberisiko (Hazard) im Vergleich zur Kontrollgruppe",
      "Die Lebenserwartung steigt um genau 65 Tage",
      "Das Medikament erhöht das Risiko um 35%"
    ],
    "explanation_de": "Perfekt! HR = 0,65 bedeutet: Hazard_behandelt / Hazard_kontrolle = 0,65. Das relative Risiko zu jedem Moment ist um 1 - 0,65 = 35% reduziert."
  },
  "l18_ex3": {
    "category_de": "Fallstrick",
    "title_de": "Übung 3: Die Proportional-Hazards-Annahme",
    "question_de": "Was bedeutet es, wenn in einem Cox-Modell die Proportional-Hazards-Annahme für eine Chemotherapie verletzt ist (Schoenfeld-Residuen-Test p < 0,01)?",
    "options_de": [
      "Das Cox-Modell kann nicht mehr geschätzt werden",
      "Das relative Risiko (HR) ist nicht zeitkonstant (z.B. wirkt die Chemo im ersten Monat toxisch mit HR > 1, schützt aber ab Monat 6 mit HR < 1); ein zeitabhängiger Koeffizient β(t) oder Stratifizierung ist nötig",
      "Die Überlebenszeiten waren nicht normalverteilt",
      "Alle Patienten hatten identische Risikoprofile"
    ],
    "explanation_de": "Sehr wichtige Diagnose! Cox-Regression setzt voraus, dass das Verhältnis der Hazards über die gesamte Beobachtungsdauer konstant bleibt. Kreuzen sich die Überlebenskurven, ist die Proportional-Hazards-Annahme verletzt."
  },
  "l19_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Die drei Säulen von Bayes",
    "question_de": "Wie verknüpft das Theorem von Bayes Vorwissen und experimentelle Daten zur Schätzung von Parametern θ?",
    "options_de": [
      "Posterior = Prior + Daten",
      "Posterior P(θ | Daten) ∝ Likelihood P(Daten | θ) × Prior P(θ) (Die aktualisierte Überzeugung ist proportional zur Evidenz der Daten gewichtet mit dem Vorwissen)",
      "Prior = Likelihood / Daten",
      "Posterior ist immer eine Normalverteilung unabhängig von den Daten"
    ],
    "explanation_de": "Das Herzstück der bayesianischen Statistik! Die A-posteriori-Verteilung vereint frühere Erkenntnisse (Prior) mit der Wahrscheinlichkeit der aktuellen Beobachtungen (Likelihood)."
  },
  "l19_ex2": {
    "category_de": "Konzept",
    "title_de": "Übung 2: Der Einfluss der Prior bei großem N",
    "question_de": "Ein Forscher verwendet eine pessimistische Prior-Verteilung für ein neues Medikament. Was geschieht mit der Posterior-Verteilung, wenn die Stichprobe auf N = 50.000 Patienten anwächst (Bernstein-von-Mises-Theorem)?",
    "options_de": [
      "Die Prior dominiert weiterhin die gesamte Schätzung",
      "Die Likelihood übertönt die Prior vollständig: Die Posterior-Verteilung konvergiert gegen die Maximum-Likelihood-Schätzung und wird unabhängig von der gewählten Prior",
      "Die Posterior kollabiert zu einer Konstante bei Null",
      "Das Modell wird rechnerisch unlösbar"
    ],
    "explanation_de": "Das fundamentale Bernstein-von-Mises-Theorem! Mit wachsender Datenmenge überwiegt die Likelihood so stark, dass vernünftige Priors keinen spürbaren Einfluss mehr auf das Endergebnis haben."
  },
  "l19_ex3": {
    "category_de": "Fallstrick",
    "title_de": "Übung 3: Was darf man über ein 95%-Kredibilitätsintervall sagen?",
    "question_de": "Im Gegensatz zum frequentistischen Konfidenzintervall: Welche Aussage ist für ein bayesianisches 95%-Kredibilitätsintervall [2,4; 5,8] legitim?",
    "options_de": [
      "Bedingt auf die beobachteten Daten und das Modell beträgt die Wahrscheinlichkeit exakt 95%, dass der wahre Parameter im Intervall [2,4; 5,8] liegt",
      "Dass das Intervall bei 95 von 100 Replikationen den wahren Wert trifft",
      "Dass der p-Wert kleiner als 0,05 ist",
      "Dass der Parameter keine Standardabweichung besitzt"
    ],
    "explanation_de": "Die intuitive Eleganz von Bayes! Da der Parameter als Zufallsvariable mit einer Wahrscheinlichkeitsdichte modelliert wird, ist die direkte Wahrscheinlichkeitsaussage über den Parameter mathematisch vollkommen exakt."
  },
  "l20_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Warum benötigt man MCMC?",
    "question_de": "Warum können komplexe hierarchische Bayes-Modelle nicht einfach über Standard-Integrale berechnet werden, sondern erfordern MCMC (Markov Chain Monte Carlo)?",
    "options_de": [
      "Weil Integrale auf Computern zu viel Speicher verbrauchen",
      "Weil das Normierungsintegral im Nenner der Bayes-Formel (die Marginal Likelihood ∫ P(D|θ)P(θ)dθ) in hohen Dimensionen analytisch und numerisch unberechenbar ist; MCMC zieht Stichproben direkt aus der unnormierten Dichte",
      "Weil MCMC immer ein R² von 1,00 liefert",
      "Weil Priors ohne MCMC nicht definiert sind"
    ],
    "explanation_de": "Der Fluch der Dimensionalität! Bei 50 Parametern erfordert eine numerische Gitterintegration unlösbare 10⁵⁰ Auswertungen. MCMC durchwandert nur die Zonen hoher Wahrscheinlichkeitsmasse."
  },
  "l20_ex2": {
    "category_de": "Berechnung",
    "title_de": "Übung 2: Gelman-Rubin R̂ Konvergenzdiagnostik",
    "question_de": "Nach dem Ausführen von 4 MCMC-Ketten berichtet der Sampler für einen Schlüsselparameter R̂ = 1,42. Was signalisiert dieser Befund?",
    "options_de": [
      "Perfekte Konvergenz; die Ketten sind optimal durchmischt",
      "Mangelnde Konvergenz (Konvergenzversagen): Die Varianz zwischen den Ketten übersteigt die Varianz innerhalb der Ketten deutlich (R̂ sollte < 1,05 sein); die Ketten stecken in verschiedenen lokalen Modi fest und die Stichproben sind unbrauchbar",
      "Das Modell hat ein R² von 42%",
      "Die Stichprobengröße N muss um den Faktor 1,42 erhöht werden"
    ],
    "explanation_de": "Wesentliche MCMC-Diagnose! Der Gelman-Rubin-Koeffizient R̂ vergleicht Between-Chain- und Within-Chain-Varianzen. Werte über 1,05 zeigen, dass die Ketten noch nicht denselben stationären Zustand erreicht haben."
  },
  "l20_ex3": {
    "category_de": "Konzept",
    "title_de": "Übung 3: Was macht Hamiltonian Monte Carlo (HMC) überlegen?",
    "question_de": "Warum übertrifft Hamiltonian Monte Carlo (HMC / NUTS) den klassischen Random-Walk-Metropolis-Hastings-Algorithmus in hochdimensionalen Modellen dramatisch?",
    "options_de": [
      "Weil HMC keine Zufallszahlen verwendet",
      "HMC nutzt die Gradienten der Log-Posterior und simuliert physikalische Hamiltonsche Teilchendynamik; dadurch gleitet der Sampler gezielt entlang der Wahrscheinlichkeitsfläche ohne ineffizientes Random-Walk-Diffundieren",
      "Weil HMC nur für lineare Modelle funktioniert",
      "Weil HMC die Parameter auf diskrete Werte rundet"
    ],
    "explanation_de": "Das Geheimnis moderner PPLs wie Stan! Gradientenbasierte Hamiltonsche Dynamik bewegt den Sampler in weiten Sprüngen mit hoher Akzeptanzrate durch komplexe Posterior-Geometrien."
  },
  "l21_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Was ist ein Gauß-Prozess (GP)?",
    "question_de": "Was ist die präzise mathematische Definition eines Gauß-Prozesses in der nicht-parametrischen Bayes-Statistik?",
    "options_de": [
      "Ein Markov-Prozess mit diskreten Zuständen",
      "Eine unendliche Ansammlung von Zufallsvariablen, von denen jede endliche Teilmenge einer multivariaten Normalverteilung folgt; definiert als Wahrscheinlichkeitsverteilung über unendlich-dimensionale Funktionen",
      "Eine OLS-Regression mit z-standardisierten Variablen",
      "Ein Algorithmus zur Lösung partieller Differentialgleichungen"
    ],
    "explanation_de": "Exakte Definition! Ein GP generalisiert die multivariate Normalverteilung auf Funktionenräume: GP ~ 𝒢𝒫(m(x), k(x, x')). Jeder Funktionsschnitt ist eine multivariate Gauß-Verteilung."
  },
  "l21_ex2": {
    "category_de": "Konzept",
    "title_de": "Übung 2: Die RBF-Kernel-Längenskala ℓ",
    "question_de": "Was steuert der Hyperparameter 'Längenskala' (Lengthscale ℓ) in einem Squared-Exponential / RBF-Kernel k(x, x') = σ² exp(-|x - x'|² / (2ℓ²))?",
    "options_de": [
      "Die Gesamthöhe der Zielvariablen",
      "Die Glätte und Oszillationsgeschwindigkeit der Funktionen: Ein kleines ℓ erlaubt rasante, hochfrequente Fluktuationen; ein großes ℓ erzwingt weiträumige, extrem glatte Verläufe",
      "Die Anzahl der Trainingsdaten",
      "Die Rechenzeit des Matrix-Invertierungs-Schritts"
    ],
    "explanation_de": "Sehr wichtig! Die Längenskala ℓ bestimmt, wie schnell die funktionale Korrelation mit dem euklidischen Abstand abfällt. Sie fungiert als 'Gedächtnis-Radius' des Prozesses."
  },
  "l21_ex3": {
    "category_de": "Dilemma",
    "title_de": "Übung 3: Bayesianische Optimierung mit GPs",
    "question_de": "Wie nutzt die bayesianische Optimierung einen Gauß-Prozess, um teure Experimente (z.B. Hyperparametersuche oder Werkstofftests) mit minimalen Iterationen zu optimieren?",
    "options_de": [
      "Indem sie blind an zufälligen Koordinaten testet",
      "Über eine Akquisitionsfunktion (wie Expected Improvement oder Upper Confidence Bound), die den Trade-off zwischen Exploration (Bereiche hoher Modellunsicherheit) und Exploitation (Bereiche hoher vorhergesagter Mittelwerte) mathematisch optimal ausbalanciert",
      "Indem sie alle Parameter auf den Nullpunkt setzt",
      "Durch lineare Extrapolation über den maximalen Messwert hinaus"
    ],
    "explanation_de": "Genialer Mechanismus! Der GP liefert Vorhersage UND Unsicherheit für jeden Punkt. Die Akquisitionsfunktion leitet das nächste Experiment gezielt dorthin, wo entweder hohe Leistung oder hoher Informationsgewinn winkt."
  },
  "l22_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Sehen vs. Handeln (Judea Pearl)",
    "question_de": "Was ist nach Judea Pearls Kausaler Hierarchie der fundamentale Unterschied zwischen P(Y | X = x) und P(Y | do(X = x))?",
    "options_de": [
      "P(Y | X = x) ist passive Beobachtung (konditionieren auf Information, anfällig für Confounder); P(Y | do(X = x)) ist eine aktive experimentelle Intervention, die alle Pfeile kappt, die im Kausalgraph auf X zeigen",
      "Es gibt keinen mathematischen Unterschied; do() ist nur eine Notation für Konditionierung",
      "P(Y | do(X = x)) kann nur in der Physik berechnet werden",
      "do() funktioniert nur bei normalverteilten Variablen"
    ],
    "explanation_de": "Das Fundament moderner Kausalität! Sehen (Konditionieren) filtert die bestehende Welt. Handeln (do-Kalkül) greift in das System ein, bricht Kausalketten auf und eliminiert Scheinkorrelationen an der Wurzel."
  },
  "l22_ex2": {
    "category_de": "Fallstrick",
    "title_de": "Übung 2: Die Collider-Falle (Berkson's Paradox)",
    "question_de": "In einer Studie zu akademischem Erfolg (X) und sportlichem Talent (Y) zeigen beide Merkmale in der Gesamtbevölkerung keine Korrelation. Forscher rekrutieren Probanden jedoch ausschließlich an einer Elite-Universität (Z), die nur Studenten mit hohem X ODER hohem Y aufnimmt (Z ist ein Collider: X -> Z <- Y). Was passiert, wenn man auf Z konditioniert?",
    "options_de": [
      "Die Korrelation bleibt unverändert Null",
      "Es entsteht eine künstliche, scheinbare negative Korrelation: Unter den Elite-Studenten haben sportliche Überflieger meist schwächere Noten und umgekehrt (Collider Stratification Bias / Berkson's Paradox)",
      "Die Korrelation wird automatisch perfekt positiv (+1,0)",
      "Der Kausalgraph wird ungültig"
    ],
    "explanation_de": "Klassische Collider-Falle! Konditionieren auf einen gemeinsamen Effekt (Collider) öffnet den Pfad zwischen vormals unabhängigen Ursachen und erzeugt irreführende Scheinzusammenhänge."
  },
  "l22_ex3": {
    "category_de": "Konzept",
    "title_de": "Übung 3: Kernel Mean Embeddings in Hilberträumen (ℋ)",
    "question_de": "Wie ermöglicht die Einbettung von Wahrscheinlichkeitsverteilungen in einen Reproducing Kernel Hilbert Space (RKHS: μ_P = 𝔼_{X~P}[k(·, X)]) den Vergleich von Verteilungen ohne Dichteschätzung?",
    "options_de": [
      "Indem alle Verteilungen zu Skalaren gemittelt werden",
      "Weil der Abstand zwischen zwei eingebetteten Verteilungen im Hilbertraum ||μ_P - μ_Q||_ℋ direkt der Maximum Mean Discrepancy (MMD) entspricht; für charakteristische Kerne ist MMD = 0 genau dann, wenn P = Q!",
      "Durch Ersetzen der Verteilungen durch Histogramme",
      "Indem nur die ersten beiden Momente (Mittelwert und Varianz) verglichen werden"
    ],
    "explanation_de": "Spitzenklasse der mathematischen Statistik! Kernel Mean Embeddings bilden beliebige Verteilungen auf Punkte in einem Hilbertraum ab. MMD vergleicht alle Momente simultan ohne Fluch der Dimensionalität."
  },
  "l23_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Was bedeutet dX_t = μ dt + σ dB_t?",
    "question_de": "In der stochastischen Differentialgleichung dX_t = μ dt + σ dB_t: Welche Rolle spielen der deterministische und der stochastische Teil?",
    "options_de": [
      "μ dt ist ein zufälliger Sprung; σ dB_t ist eine lineare Zeitachse",
      "μ dt ist der deterministische Drift-Term (gerichtete Driftgeschwindigkeit); σ dB_t ist der stochastische Diffusionsterm, getrieben durch infinitesimale Inkremente einer Brownschen Bewegung mit Varianz dt",
      "dB_t ist eine differenzierbare Sinusfunktion",
      "dX_t kann nur ganzzahlige Werte annehmen"
    ],
    "explanation_de": "Exakt! Brownsche Bewegung B_t hat unkorrelierte Inkremente mit E[dB_t] = 0 und Var(dB_t) = dt. Sie modelliert kontinuierliches stochastisches Rauschen."
  },
  "l23_ex2": {
    "category_de": "Berechnung",
    "title_de": "Übung 2: Das Geheimnis von Itô's Lemma",
    "question_de": "Warum taucht in Itô's Lemma für df(X_t) ein zusätzlicher Term zweiter Ordnung (1/2 σ² f''(X_t) dt) auf, der in der gewöhnlichen Analysis nicht existiert?",
    "options_de": [
      "Weil Computer Rundungsfehler aufweisen",
      "Weil für Brownsche Pfade das quadratische Inkrement (dB_t)² deterministisch gegen dt konvergiert! Der Term zweiter Ordnung in der Taylor-Entwicklung liefert somit einen Beitrag der Ordnung dt",
      "Weil Itô-Integrale immer Null sein müssen",
      "Weil Zeit in der Stochastik rückwärts läuft"
    ],
    "explanation_de": "Die Essenz stochastischer Analysis! Da Pfade der Brownschen Bewegung unendliche Variation, aber endliche quadratische Variation besitzen, gilt (dB_t)² = dt. Die Kettenregel enthält zwingend die zweite Ableitung!"
  },
  "l23_ex3": {
    "category_de": "Dilemma",
    "title_de": "Übung 3: Itô- vs. Stratonovich-Integration",
    "question_de": "Wann bevorzugt man die Stratonovich-Integration ∘ dB_t gegenüber der Itô-Integration dB_t?",
    "options_de": [
      "Niemals, Stratonovich ist mathematisch veraltet",
      "Stratonovich evaluiert den Integranden am Mittelpunkt und gehorcht den gewöhnlichen Kettenregeln der klassischen Analysis (ideal für Differentialgeometrie auf gekrümmten Mannigfaltigkeiten und Physik); Itô evaluiert am linken Rand (Nicht-Antizipation / Martingal-Eigenschaft, ideal für Finanzen)",
      "Stratonovich funktioniert nur für diskrete Wahrscheinlichkeiten",
      "Itô kann keine Differentialgleichungen lösen"
    ],
    "explanation_de": "Meisterhaft differenziert! Itô bewahrt das Martingal und verbietet Zukunftsinformation (unverzichtbar in Finanzmärkten). Stratonovich gehorcht der klassischen Leibniz-Regel und transformiert sauber unter Koordinatenwechseln auf Mannigfaltigkeiten."
  },
  "l24_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Die Geometrie von ∇_ℳ Φ auf einer Mannigfaltigkeit",
    "question_de": "Warum führt der gewöhnliche euklidische Gradientenabstieg auf gekrümmten Mannigfaltigkeiten (z.B. Wahrscheinlichkeitsräumen mit Fisher-Informationsmetrik) zu fehlerhaften Optimierungsschritten?",
    "options_de": [
      "Weil der Gradient auf Null fällt",
      "Weil der euklidische Gradient die Krümmung der Mannigfaltigkeit ignoriert; der Riemannsche natürliche Gradient ∇_ℳ Φ = G⁻¹(θ) ∇_E Φ korrigiert mit dem inversen metrischen Tensor G, um koordinateninvariante steilste Abstiegsrichtungen zu garantieren",
      "Weil Mannigfaltigkeiten keine Ableitungen besitzen",
      "Weil Optimierung nur im ℝ² konvergiert"
    ],
    "explanation_de": "Höchste mathematische Präzision! Amari's Natural Gradient nutzt die Riemannsche Metrik des Raums (wie die Fisher-Informationsmatrix). Dadurch bleibt der Optimierungsschritt invariant gegenüber Parametrisierungen."
  },
  "l24_ex2": {
    "category_de": "Konzept",
    "title_de": "Übung 2: Terry Lyons' Rough Path Theorie (H < 1/2)",
    "question_de": "Wie löst Terry Lyons' Rough Path Theorie das Versagen der klassischen stochastischen Analysis für fraktionelle Brownsche Bewegungen mit Hurst-Parameter H < 1/2?",
    "options_de": [
      "Durch Glätten der Pfade mit gleitenden Durchschnitten",
      "Indem der Pfad durch iterierte Integrale höherer Ordnung (seine Signatur) angereichert wird; dadurch wird die Lösungsabbildung von Differentialgleichungen bezüglich einer geeigneten p-Variations-Topologie stetig (Kontinuitätstheorem)",
      "Indem H künstlich auf 1/2 gerundet wird",
      "Durch Beschränkung auf lineare SDEs"
    ],
    "explanation_de": "Fields-Medal-Niveau der Stochastik! Unter H < 1/2 versagt Itô, weil Pfade zu rau sind (Variation zu hoch). Rough Paths heben den Pfad in eine Lie-Gruppe über iterierte Integrale, wodurch die Lösung stetig wird."
  },
  "l24_ex3": {
    "category_de": "Konzept",
    "title_de": "Übung 3: Der unendlich-dimensionale Hilbertraum ℋ",
    "question_de": "Welche mathematische Eigenschaft macht einen Hilbertraum ℋ zum ultimativen Fundament für unendlich-dimensionale funktionale Datenanalyse und Kernel-Methoden?",
    "options_de": [
      "Ein vollständiger Vektorraum mit Skalarprodukt ⟨f, g⟩, der Geometrie (Winkel, Orthogonalität, Projektionen) und Grenzwerte über den Rieszschen Darstellungssatz in unendlichen Dimensionen exakt handhabbar macht",
      "Dass alle Funktionen in ℋ zwingend Polynome sein müssen",
      "Dass Dimensionen immer abzählbar endlich sind",
      "Dass keine Norm definiert werden kann"
    ],
    "explanation_de": "Das Fundament der Funktionalanalysis! Skalarprodukt + Vollständigkeit = Hilbertraum. Hier gelten Satz des Pythagoras, orthogonale Projektionen und Spektralsätze auch für unendlich viele Dimensionen."
  },
  "l24_ex4": {
    "category_de": "Dilemma",
    "title_de": "Übung 4: Das Kausale Synthese-Dilemma",
    "question_de": "Am Apex der statistischen Wissenschaft: Wie unterscheidet sich die passive Beobachtung eines stochastischen Attraktors von einer kausalen Strukturintervention do(X)?",
    "options_de": [
      "Es gibt keinen Unterschied bei deterministischen Systemen",
      "Passive Beobachtung erfasst nur den stationären Fluss des invarianten Maßes auf dem existierenden Phasenraum; eine kausale Intervention do(X) transformiert das Vektorfeld selbst, rekonfiguriert Attraktoren und steuert das stochastische System in neue Attraktionsbecken",
      "Kausale Interventionen löschen die Mannigfaltigkeit aus",
      "Do-Kalkül gilt nur für statische Datensätze ohne Dynamik"
    ],
    "explanation_de": "Das ultimative Apex-Meisterstück! Zu wissen, wie ein System fließt, ist passive Wissenschaft. Zu verstehen, wie ein do(X)-Eingriff das Vektorfeld und die Attraktoren fundamental transformiert, ist die höchste Stufe stochastischer Kausalwissenschaft."
  }
};
