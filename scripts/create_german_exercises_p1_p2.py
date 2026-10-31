#!/usr/bin/env python3
"""
Creates scripts/translations/exercises_de_p1_p2.js with complete,
graduate-level statistical German translations for Levels 1 to 12 (36 exercises).
Aligned 1:1 with exercises_p1_p2.js options order.
"""

import json

exercises = {
  # LEVEL 1
  "l1_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Lagemaße & Schiefe",
    "question_de": "In einer nationalen Einkommensumfrage beträgt das durchschnittliche Einkommen 42.000 € pro Jahr, während das Medianeinkommen bei 31.000 € liegt. Was sagt dies unmittelbar über die Form der Einkommensverteilung aus?",
    "options_de": [
      "Die Verteilung ist perfekt symmetrisch um 36.500 €",
      "Die Verteilung ist rechtsschief (positiv schief): Eine kleine Gruppe von Spitzenverdienern zieht das arithmetische Mittel nach oben",
      "Die Verteilung ist linksschief (negativ schief): Die überwiegende Mehrheit verdient mehr als den Durchschnitt",
      "Die Verteilung ist bimodal mit identischen Spitzen bei 31.000 € und 42.000 €"
    ],
    "explanation_de": "Richtig! Wenn Mittelwert > Median gilt, ziehen extreme Ausreißer nach oben (Spitzengehälter) das arithmetische Mittel nach rechts. Der Median spiegelt den echten mittleren Bürger wider."
  },
  "l1_ex2": {
    "category_de": "Dilemma",
    "title_de": "Übung 2: Praxisdilemma bei einer E-Commerce-Plattform",
    "question_de": "Du misst die Ladezeiten einer mobilen App. Bei 90% der Nutzer lädt die Seite in 0,5 Sekunden. Bei 10% der Nutzer mit schlechter Verbindung dauert es 25 Sekunden. Der Marketingleiter möchte 'die durchschnittliche Ladezeit von 2,95 Sekunden' in einer Pressemitteilung veröffentlichen. Was rätst du?",
    "options_de": [
      "Zustimmen: Das arithmetische Mittel integriert alle Erfahrungen in einen einzigen Erwartungswert",
      "Nicht zustimmen: Berichte sowohl den Median (0,5 s) als auch das 95. Perzentil (p95 = 25 s). Der Mittelwert beschreibt weder den typischen Nutzer noch die Schwere der Tail-Latenz",
      "Berechne ein 10% getrimmtes Mittel, indem langsame Verbindungen als zufällige Fehler verworfen werden",
      "Berichte ausschließlich die Standardabweichung, da Streuung wichtiger ist als Lage"
    ],
    "explanation_de": "Hervorragende Entscheidung! Bei Latenzmessungen ist der Mittelwert irreführend. Man berichtet stets den Median (typischer Nutzer) zusammen mit p95 oder p99 (Tail-Latenz)."
  },
  "l1_ex3": {
    "category_de": "Fallstrick",
    "title_de": "Übung 3: Der Streuungs-Fallstrick-Detektor",
    "question_de": "Warum ist der Interquartilsabstand (IQR = Q3 - Q1) bei Daten mit potenziellen Messfehlern weitaus robuster als die Spannweite (Range = Max - Min)?",
    "options_de": [
      "Der IQR ist numerisch stets größer als die Standardabweichung",
      "Die Spannweite hängt ausschließlich von den beiden extremsten Beobachtungen ab und explodiert bei einem einzigen Tippfehler, während der IQR einen Bruchpunkt von 25% aufweist",
      "Der IQR setzt eine strikte Normalverteilung der zugrunde liegenden Daten voraus",
      "Die Spannweite kann nur für diskrete Variablen berechnet werden"
    ],
    "explanation_de": "Volltreffer! Ein einziger fehlerhafter Eintrag ruiniert Spannweite und Standardabweichung völlig, lässt den IQR jedoch völlig unberührt."
  },

  # LEVEL 2
  "l2_ex1": {
    "category_de": "Berechnung",
    "title_de": "Übung 1: Z-Score-Berechnung & Position",
    "question_de": "Ein Testergebnis folgt einer Normalverteilung mit μ = 70 und σ = 10. Ein Student erzielt 90 Punkte. Was ist der Z-Score dieses Studenten und welcher Prozentsatz der Studenten schneidet schlechter ab?",
    "options_de": [
      "Z = +1,50; etwa 93,3% schneiden schlechter ab",
      "Z = +0,85; etwa 80,2% schneiden schlechter ab",
      "Z = +2,00; genau 97,7% schneiden schlechter ab",
      "Z = +1,20; etwa 88,5% schneiden schlechter ab"
    ],
    "explanation_de": "Exzellent! Z = (90 - 70) / 10 = +2,0. Nach der 68-95-99,7-Regel liegen zwischen -2σ und +2σ ca. 95,4% der Masse; zusammen mit der linken Tail-Fläche (2,3%) ergibt sich: 95,4% + 2,3% = 97,7%."
  },
  "l2_ex2": {
    "category_de": "Fallstrick",
    "title_de": "Übung 2: Der Normalitätsannahme-Fallstrick",
    "question_de": "Ein Analyst behauptet: 'Da unser Datensatz über 100.000 Twitter/X-Nutzer nach Followerzahl umfasst, können wir getrost annehmen, dass 68% der Konten innerhalb von ±1 SD um den Mittelwert liegen.' Ist dieser Schluss zulässig?",
    "options_de": [
      "Ja, die 68-95-99,7-Regel ist ein universeller mathematischer Satz für alle großen Datensätze",
      "Nein! Die 68-95-99,7-Regel gilt strikt nur für Normalverteilungen. Followerzahlen folgen einem Potenzgesetz (Heavy-Tailed Pareto); die Anwendung der Normalverteilung würde absurde Werte vorhersagen!",
      "Ja, vorausgesetzt die Stichprobengröße N übersteigt 30",
      "Nur, wenn wir die Standardabweichung verdoppeln, um die Schiefe zu korrigieren"
    ],
    "explanation_de": "Ausgezeichnet durchschaut! Große Fallzahlen (N) machen schiefe Rohdaten niemals normalverteilt! Die empirische Regel gilt strikt nur für glockenförmige Gauß-Verteilungen."
  },
  "l2_ex3": {
    "category_de": "Dilemma",
    "title_de": "Übung 3: Fertigungstoleranzen & 3-Sigma-Qualitätskontrolle",
    "question_de": "Ein Mikrochip-Hersteller fertigt Bauteile mit einer Soll-Dicke von 500 nm (σ = 2 nm). Kundenspezifikationen verlangen 500 ± 6 nm (ein 3-Sigma-Toleranzband). Welcher Ausschussanteil ist bei perfekter Normalverteilung unvermeidlich?",
    "options_de": [
      "Exakt 5,0% Ausschuss",
      "Etwa 0,27% Ausschuss (ca. 2.700 defekte Teile pro Million Teile - PPM)",
      "0,0001% Ausschuss (Six-Sigma-Standard)",
      "Null Fehler, da 3 Sigma alle physischen Bauteile einschließt"
    ],
    "explanation_de": "Präzise! Bei einer Normalverteilung liegen 99,73% der Werte innerhalb von ±3σ. Außerhalb verbleiben 0,27% (1 - 0,9973), also rund 2.700 ppm."
  },

  # LEVEL 3
  "l3_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Das Verhalten des Stichprobenmittelwerts",
    "question_de": "Eine Grundgesamtheit ist stark bimodal (zwei getrennte Häufungspunkte bei 10 und 90). Du ziehst wiederholt Zufallsstichproben vom Umfang N = 100 und berechnest jedes Mal den Stichprobenmittelwert x̄. Wie sieht die Verteilung dieser Mittelwerte aus?",
    "options_de": [
      "Ebenfalls bimodal mit identischen Spitzen bei 10 und 90",
      "Eine Gleichverteilung zwischen 10 und 90",
      "Eine unimodale Glockenkurve (Normalverteilung) zentriert um den echten Populationsmittelwert μ = 50",
      "Eine Exponentialverteilung mit hoher Varianz"
    ],
    "explanation_de": "Korrekt! Gemäß dem Zentralen Grenzwertsatz (CLT) konvergiert die Verteilung des Stichprobenmittelwerts x̄ für hinreichend großes N (hier N = 100) gegen eine Normalverteilung, ungeachtet der Form der Grundgesamtheit."
  },
  "l3_ex2": {
    "category_de": "Fallstrick",
    "title_de": "Übung 2: Das große Missverständnis über Datentransformation",
    "question_de": "Ein Datenwissenschaftler sagt: 'Dank des Zentralen Grenzwertsatzes brauche ich meine stark rechtsschiefen Reaktionszeitdaten nicht logarithmieren, wenn ich ein OLS-Modell anpasse, da ich N = 5.000 Beobachtungen habe.' Was ist hier der fundamentale Denkfehler?",
    "options_de": [
      "Der CLT garantiert die Normalität des Stichprobenmittelwerts x̄ (bzw. der OLS-Schätzer β̂), verwandelt aber niemals die Rohdatenverteilung oder die Fehlerterme in eine Normalverteilung. Bei Ausreißern oder Nichtlinearität bleibt eine Transformation essenziell!",
      "Der CLT gilt erst ab N = 1.000.000 Beobachtungen",
      "Der CLT gilt nur für diskrete Daten, nicht für stetige Reaktionszeiten",
      "Es liegt kein Denkfehler vor; N = 5.000 garantiert immer perfekte Modellanpassung"
    ],
    "explanation_de": "Hervorragend entlarvt! Einer der häufigsten Fehler in der Datenwissenschaft: Der CLT normalisiert Schätzstatistiken, nicht die Rohdaten! Schiefe Residuen verzerren Vorhersageintervalle weiterhin."
  },
  "l3_ex3": {
    "category_de": "Berechnung",
    "title_de": "Übung 3: Skalierung des Standardfehlers",
    "question_de": "Bei einer Stichprobe von N = 25 misst du einen Standardfehler des Mittelwerts von SE = 4,0. Wie groß muss der Stichprobenumfang N sein, um den Standardfehler auf SE = 1,0 zu halbieren und zu vierteln?",
    "options_de": [
      "N = 50 (Verdoppelung der Stichprobe)",
      "N = 100 (Vervierfachung der Stichprobe)",
      "N = 400 (der Standardfehler skaliert mit 1/√N; um SE durch 4 zu teilen, muss N um das 4² = 16-fache steigen: 25 × 16 = 400)",
      "N = 250 (zehnfache Stichprobe)"
    ],
    "explanation_de": "Mathematisch perfekt! SE = σ / √N. Um die Präzision um das k-Fache zu steigern (SE durch k dividieren), benötigt man k²-mal so viele Beobachtungen: 25 × 4² = 400."
  },

  # LEVEL 4
  "l4_ex1": {
    "category_de": "Fallstrick",
    "title_de": "Übung 1: Die klassische frequentistische Denkpause",
    "question_de": "Ein 95%-Konfidenzintervall für eine Konversionsrate liegt bei [0,12; 0,18]. Welche der folgenden Aussagen ist frequentistisch exakt korrekt?",
    "options_de": [
      "Es besteht eine 95%-Wahrscheinlichkeit, dass der wahre Parameter im Intervall [0,12; 0,18] liegt",
      "95% aller individuellen Kunden weisen eine Konversionsrate zwischen 0,12 und 0,18 auf",
      "Wenn wir die Studie unendlich oft unter identischen Bedingungen wiederholen würden, würden 95% der so konstruierten Intervalle den festen, wahren Parameter überdecken",
      "Es besteht eine 5%-Wahrscheinlichkeit, dass die Hypothese wahr ist"
    ],
    "explanation_de": "Präzise frequentistische Doktrin! Im frequentistischen Paradigma ist der wahre Parameter ein fester Wert, keine Zufallsvariable. Nicht der Parameter schwankt, sondern das Intervall!"
  },
  "l4_ex2": {
    "category_de": "Konzept",
    "title_de": "Übung 2: Überlappende Intervalle & Signifikanz",
    "question_de": "Zwei Gruppen A und B haben Mittelwerte von 50 und 55 mit jeweils einem 95%-Konfidenzintervall von [46; 54] und [51; 59]. Ein Kollege sagt: 'Die Intervalle überlappen zwischen 51 und 54, also gibt es garantiert keinen statistisch signifikanten Unterschied bei α = 0,05.' Hat er recht?",
    "options_de": [
      "Nein! Dass sich zwei 95%-Konfidenzintervalle leicht überlappen, schließt einen signifikanten Unterschied (p < 0,05) beim Zwei-Stichproben-t-Test keineswegs aus. Die Signifikanz hängt vom SE der Differenz ab: √(SE₁² + SE₂²) < SE₁ + SE₂!",
      "Ja, jede Überlappung beweist ausnahmslos, dass p > 0,05 ist",
      "Ja, weil Konfidenzintervalle konservativer sind als Hypothesentests",
      "Nein, weil Konfidenzintervalle überhaupt nichts über Signifikanz aussagen"
    ],
    "explanation_de": "Brillant! Ein berühmter statistischer Trugschluss. Die Fehlerfortpflanzung der Differenz berechnet sich geometrisch: √(SE₁² + SE₂²). Daher können sich Intervalle bis zu ~29% überlappen und der t-Test ist dennoch signifikant!"
  },
  "l4_ex3": {
    "category_de": "Dilemma",
    "title_de": "Übung 3: 90% vs. 95% vs. 99% Konfidenzniveau",
    "question_de": "Ein FinTech-Unternehmen muss betrügerische Transaktionsverluste schätzen. Welche Konsequenz hat es, wenn man das Konfidenzniveau von 95% auf 99% anhebt, ohne die Stichprobengröße N zu verändern?",
    "options_de": [
      "Das Konfidenzintervall wird schmaler und damit präziser",
      "Der Standardfehler des Mittelwerts halbiert sich automatisch",
      "Das Intervall wird breiter, da ein höherer Z- bzw. t-Kritischer Wert (z* = 2,576 statt 1,96) erforderlich ist, um eine 99%-Abdeckung zu garantieren",
      "Der Mittelwert der Schätzung verschiebt sich nach rechts"
    ],
    "explanation_de": "Richtig! Höhere Konfidenz (Sicherheit) bei unveränderter Information (N) erfordert ein breiteres Fangnetz. Höhere Sicherheit geht zwingend auf Kosten der Präzision."
  },

  # LEVEL 5
  "l5_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: P-Wert vs. Effektstärke bei großem N",
    "question_de": "In einem A/B-Test mit N = 2.000.000 Nutzern führt Variante B zu einer Klickrate von 4,002% gegenüber 4,000% bei Variante A. Der p-Wert beträgt p = 0,0004. Wie bewertest du dieses Ergebnis geschäftlich und statistisch?",
    "options_de": [
      "Statistisch hochsignifikant, aber praktisch völlig trivial (Effektstärke vernachlässigbar). Riesige Stichproben machen selbst winzigstes Rauschen statistisch signifikant!",
      "Ein revolutionärer Durchbruch, der sofort zu 100% ausgerollt werden muss",
      "Ungültig, weil p-Werte bei N > 10.000 mathematisch nicht definiert sind",
      "Ein Typ-I-Fehler, da Klickraten nicht stetig sind"
    ],
    "explanation_de": "Ausgezeichnet! Bei riesigen Stichproben schrumpft der Standardfehler gegen Null, sodass selbst mikroskopische, irrelevante Differenzen p < 0,001 erzielen. Unterscheide immer statistische Signifikanz von praktischer Relevanz!"
  },
  "l5_ex2": {
    "category_de": "Dilemma",
    "title_de": "Übung 2: Typ-I- und Typ-II-Fehler in der Praxis",
    "question_de": "Bei der Entwicklung eines KI-Algorithmus zur Erkennung bösartiger Tumore: Was bedeutet ein Typ-II-Fehler (falsch-negativ) und warum ist er hier oft gravierender als ein Typ-I-Fehler?",
    "options_de": [
      "Ein gesunder Patient wird fälschlicherweise als krank eingestuft",
      "Ein schwerkranker Patient wird fälschlicherweise als gesund diagnostiziert (H₀ fälschlich beibehalten), wodurch die lebensrettende Behandlung unterbleibt",
      "Der p-Wert liegt exakt bei 0,05",
      "Die Stichprobengröße war zu groß gewählt"
    ],
    "explanation_de": "Volltreffer! Typ II (β): Ein tatsächlich vorhandener Effekt (Tumor) wird übersehen. In der Medizin hat dies oft fatale Konsequenzen, weshalb Tests auf minimale β-Fehler (hohe Teststärke / Power) optimiert werden."
  },
  "l5_ex3": {
    "category_de": "Fallstrick",
    "title_de": "Übung 3: Was sagt p = 0,04 wirklich aus?",
    "question_de": "Ein Forscher erhält p = 0,04 und jubelt: 'Die Wahrscheinlichkeit, dass meine Hypothese wahr ist, beträgt 96%!' Was ist an dieser Interpretation falsch?",
    "options_de": [
      "Nichts, das ist die formale mathematische Definition des p-Werts",
      "Der p-Wert misst die Wahrscheinlichkeit von H₁, nicht von H₀",
      "Der p-Wert ist P(Daten | H₀), niemals P(H₀ | Daten). Er berechnet die Wahrscheinlichkeit, solch extreme Daten zu beobachten, UNTER DER ANNAHME, dass die Nullhypothese wahr ist!",
      "Der Forscher muss p mit 100 multiplizieren, um die Signifikanz in Prozent zu erhalten"
    ],
    "explanation_de": "Elementar wichtig! Der p-Wert ist eine bedingte Wahrscheinlichkeit unter der Nullhypothese P(D | H₀). Er trifft keinerlei Aussage über die Posterior-Wahrscheinlichkeit der Hypothese P(H₁ | D)."
  },

  # LEVEL 6
  "l6_ex1": {
    "category_de": "Berechnung",
    "title_de": "Übung 1: Steigung & Achsenabschnitt interpretieren",
    "question_de": "Ein OLS-Modell schätzt den Umsatz anhand der Werbeausgaben: Umsatz = 15.000 + 4,50 × Werbung (in €). Was bedeutet die Steigung β₁ = 4,50 und der Achsenabschnitt β₀ = 15.000?",
    "options_de": [
      "Jeder Euro Werbung senkt den Umsatz um 4,50 €; 15.000 € ist der maximale Umsatz",
      "Der Korrelationskoeffizient beträgt r = 0,45",
      "Ohne Werbeausgaben beträgt der erwartete Basisumsatz 15.000 €; jeder zusätzlich investierte Euro Werbung steigert den erwarteten Umsatz um 4,50 €",
      "Das R² des Modells beträgt exakt 45%"
    ],
    "explanation_de": "Korrekt! β₀ ist der Erwartungswert von Y wenn X = 0. β₁ ist die marginale Änderung von Y pro Einheit Zunahme in X."
  },
  "l6_ex2": {
    "category_de": "Konzept",
    "title_de": "Übung 2: Warum Residuen quadrieren bei OLS?",
    "question_de": "Warum minimiert die Methode der kleinsten Quadrate (OLS) die Summe der quadrierten Residuen Σ e_i² anstelle der einfachen Summe Σ e_i oder der absoluten Beträge Σ |e_i|?",
    "options_de": [
      "Das Quadrieren beschleunigt die Matrizenrechnung auf digitalen Mikroprozessoren",
      "Weil sich positive und negative Residuen bei jeder beliebigen Geraden durch den Schwerpunkt (x̄, ȳ) zu Null aufheben; Quadrieren (L2) eliminiert Vorzeichen, ist überall stetig differenzierbar und liefert eine geschlossene analytische Lösung (XᵀX)⁻¹Xᵀy",
      "Weil Quadrieren alle Steigungsparameter dazu zwingt, strikt positiv zu sein",
      "Weil die einfache Summe der Rohresiduen niemals gleich Null sein kann"
    ],
    "explanation_de": "Exakt! Die einfache Summe hebt sich stets zu Null auf. L1-Regression (absolute Abweichungen) ist bei Null nicht differenzierbar und hat keine geschlossene Matrixlösung. OLS (L2) ist glatt differenzierbar und nach dem Gauß-Markov-Theorem der beste lineare erwartungstreue Schätzer (BLUE)."
  },
  "l6_ex3": {
    "category_de": "Fallstrick",
    "title_de": "Übung 3: Korrelation vs. Kausalität",
    "question_de": "Eine Studie findet eine starke positive Korrelation (r = 0,82, p < 0,001) zwischen Speiseeis-Verkäufen und Ertrinkungsunfällen im Sommer. Ein Politiker fordert ein Verbot von Speiseeis. Was liegt hier vor?",
    "options_de": [
      "Eine direkte kausale Ursache-Wirkungs-Kette",
      "Ein statistischer Messfehler bei den Ertrinkungszahlen",
      "Eine Scheinkorrelation, verursacht durch eine gemeinsame Drittvariable (Confounder: Außentemperatur / Sommerhitze), die sowohl Eisverkäufe als auch Schwimmaktivitäten antreibt",
      "Ein Simpson-Paradoxon auf Individualebene"
    ],
    "explanation_de": "Klassische Scheinkorrelation! Die Außentemperatur ist ein Confounder: An heißen Tagen essen die Menschen mehr Eis UND gehen mehr schwimmen. Korrelation impliziert niemals Kausalität!"
  },

  # LEVEL 7
  "l7_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Das Verhalten des gewöhnlichen R²",
    "question_de": "Du fügst einem Regressionsmodell 10 völlig zufällige Variablen (weißes Rauschen) hinzu. Was geschieht garantiert mit dem gewöhnlichen Bestimmtheitsmaß R² und was mit dem korrigierten R² (Adjusted R²)?",
    "options_de": [
      "Sowohl R² als auch Adjusted R² sinken auf Null",
      "Das gewöhnliche R² kann niemals sinken und steigt durch Zufallskorrelationen leicht an; das korrigierte R² bestraft unnötige Variablen und sinkt typischerweise",
      "R² sinkt, während Adjusted R² steigt",
      "Beide Kennzahlen bleiben mathematisch vollkommen unverändert"
    ],
    "explanation_de": "Brillant! Das gewöhnliche R² ist monoton nicht-fallend bezüglich zusätzlicher Prädiktoren. Daher benötigt man das korrigierte R², das jeden zusätzlichen Freiheitsgrad bestraft."
  },
  "l7_ex2": {
    "category_de": "Dilemma",
    "title_de": "Übung 2: Modellvergleich in der Praxis",
    "question_de": "Modell A hat R² = 0,72 mit 2 Prädiktoren (AIC = 1.420). Modell B hat R² = 0,74 mit 18 Prädiktoren (AIC = 1.485). Welches Modell wählst du für Vorhersagen auf neuen Testdaten?",
    "options_de": [
      "Modell A: Es ist viel sparsamer (Parsemonie-Prinzip), hat einen deutlich niedrigeren AIC (geringerer Informationsverlust) und vermeidet Overfitting",
      "Modell B: Es hat das höchste R², was immer das einzig entscheidende Kriterium ist",
      "Keines von beiden; lineare Modelle können keine Vorhersagen treffen",
      "Modell B, weil mehr Variablen immer robustere Koeffizienten garantieren"
    ],
    "explanation_de": "Perfekt entschieden! Nach Ockhams Rasiermesser bevorzugt man das einfachere Modell. Ein minimaler Gewinn von 2% R² auf Kosten von 16 Parametern erhöht die Schätzvarianz und führt zu Overfitting (bestätigt durch schlechteren AIC)."
  },
  "l7_ex3": {
    "category_de": "Konzept",
    "title_de": "Übung 3: Was prüft der globale F-Test?",
    "question_de": "Im Regressionsoutput berichtet die ANOVA einen F-Wert mit p < 0,001, aber die t-Tests für zwei individuelle Prädiktoren sind beide nicht signifikant (p = 0,12 und p = 0,18). Was bedeutet das?",
    "options_de": [
      "Das gesamte Modell ist ungültig und muss verworfen werden",
      "Die beiden Prädiktoren erklären gemeinsam signifikante Varianz (H₀: β₁ = β₂ = 0 wird verworfen), aber Multikollinearität bläht ihre Standardfehler auf, sodass die Einzeltests die Signifikanz maskieren",
      "Der F-Test hat einen Rechenfehler",
      "Die Stichprobengröße war zu klein für eine lineare Regression"
    ],
    "explanation_de": "Exzellent diagnostiziert! Der F-Test prüft die Gesamthypothese, dass ALLE Steigungskoeffizienten simultan Null sind. Bei hoher Kollinearität teilen sich Prädiktoren die Information, wodurch individuelle t-Tests scheitern."
  },

  # LEVEL 8
  "l8_ex1": {
    "category_de": "Fallstrick",
    "title_de": "Übung 1: Heteroskedastizität & Standardfehler",
    "question_de": "Was passiert mit den OLS-Ergebnissen, wenn die Varianz der Fehlerterme mit steigendem Einkommen zunimmt (Heteroskedastizität / Trichterform in den Residuen)?",
    "options_de": [
      "Die Punktschätzer β̂ bleiben erwartungstreu, aber die Standardfehler sind verzerrt (meist unterschätzt), wodurch Konfidenzintervalle und p-Werte ungültig werden",
      "Die geschätzten Koeffizienten β̂ werden komplett unbrauchbar und verzerrt",
      "Das R² steigt automatisch auf über 0,95",
      "Die Residuen folgen automatisch einer Poisson-Verteilung"
    ],
    "explanation_de": "Sehr präzise! OLS bleibt unverzerrt, verliert aber seine Effizienz (Gauß-Markov verletzt). Die Standardfehler stimmen nicht mehr, weshalb robuste Standardfehler (HC-Korrektur / White-Huber) erforderlich sind."
  },
  "l8_ex2": {
    "category_de": "Fallstrick",
    "title_de": "Übung 2: Krümmung im Residuals-vs-Fitted-Plot",
    "question_de": "Ein Residuals-vs-Fitted-Plot zeigt ein klares U-förmiges Muster (Residuen sind an den Rändern positiv und in der Mitte negativ). Was ist die Diagnose?",
    "options_de": [
      "Perfekte Homoskedastizität",
      "Die Fehlerterme sind perfekt unabhängig",
      "Verletzung der Linearitätsannahme: Die wahre Beziehung zwischen X und Y ist nicht-linear (z.B. quadratisch); ein quadratischer Term X² oder Spline fehlt im Modell",
      "Die abhängige Variable muss z-standardisiert werden"
    ],
    "explanation_de": "Hervorragend! Ein U-förmiges Muster im Residuenplot signalisiert systematische Nicht-Linearität. Das lineare Modell unterschätzt den Scheitelpunkt und überschätzt die Flanken."
  },
  "l8_ex3": {
    "category_de": "Konzept",
    "title_de": "Übung 3: Q-Q-Plot-Interpretation",
    "question_de": "In einem Normal-Q-Q-Plot der standardisierten Residuen biegen sich die Punkte an beiden Enden nach oben bzw. unten von der 45°-Diagonale weg (S-Form mit schweren Rändern). Was bedeutet das?",
    "options_de": [
      "Die Residuen sind perfekt normalverteilt",
      "Die Residuen weisen Heavy Tails (hohe Kurtosis / Leptokurtose) auf: Extreme Ausreißer treten wesentlich häufiger auf als bei einer Normalverteilung erwartet",
      "Die Stichprobengröße ist zu groß für einen Q-Q-Plot",
      "Das Modell hat eine negative Steigung"
    ],
    "explanation_de": "Korrekt! Ein S-förmiges Abweichen der Quantile zeigt Fat Tails (schwere Ränder). Solche Daten erfordern robuste Regression oder Student-t-Fehlerverteilungen."
  },

  # LEVEL 9
  "l9_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Was verursacht das Simpson-Paradoxon?",
    "question_de": "Warum kann eine positive Korrelation zwischen zwei Variablen auf Aggregatebene negativ werden, sobald man nach einer Subgruppen-Variable (z.B. Alterskohorte) stratifiziert?",
    "options_de": [
      "Weil die Subgruppen-Variable stark mit sowohl dem Prädiktor als auch der Zielgröße assoziiert ist (Confounder) und die Verteilung der Subgruppen ungleich verteilt ist",
      "Weil der Korrelationskoeffizient auf Subgruppenebene mathematisch nicht definiert ist",
      "Weil die Stichprobengröße durch die Aufteilung zu klein wird",
      "Weil OLS bei Subgruppenanalysen immer instabil wird"
    ],
    "explanation_de": "Exakt! Das Simpson-Paradoxon entsteht durch gravierendes Omitted Variable Bias: Eine unberücksichtigte Drittvariable verzerrt die gepoolte Beziehung bis hin zur vollständigen Vorzeichenumkehr."
  },
  "l9_ex2": {
    "category_de": "Dilemma",
    "title_de": "Übung 2: Zulassungsquoten an der Universität",
    "question_de": "An einer Universität werden insgesamt 45% der männlichen und nur 35% der weiblichen Bewerber zugelassen. In jedem einzelnen Fachbereich liegt die Frauenquote jedoch höher als die Männerquote. Wie löst man dieses Paradoxon auf?",
    "options_de": [
      "Die Daten wurden gefälscht",
      "Frauen bewerben sich überproportional häufig in hochkompetitiven Fachbereichen mit niedrigen Gesamtzulassungsquoten (z.B. Medizin, Psychologie), während Männer sich häufiger in Fächern mit hohen Zulassungsquoten bewerben (z.B. Ingenieurwesen)",
      "Der Chi-Quadrat-Test ist bei Bewerberdaten ungültig",
      "Männer haben bessere Noten in allen Fächern"
    ],
    "explanation_de": "Das berühmte UC Berkeley Admissions Paradoxon (1973)! Auf Fachbereichsebene gab es keinen Bias gegen Frauen; der Aggregat-Effekt entstand rein durch das unterschiedliche Bewerbungsverhalten."
  },
  "l9_ex3": {
    "category_de": "Konzept",
    "title_de": "Übung 3: Was bedeutet 'Ceteris Paribus'?",
    "question_de": "In einer multiplen Regression Y = β₀ + β₁X₁ + β₂X₂: Wie lautet die präzise Interpretation von β₁ unter der 'Ceteris Paribus'-Bedingung?",
    "options_de": [
      "Die Veränderung von Y, wenn alle Variablen gleichzeitig um eine Einheit steigen",
      "Der totale unbereinigte Effekt von X₁ auf Y ohne Berücksichtigung von X₂",
      "Die erwartete Veränderung von Y pro Einheit Zunahme in X₁, WENN ALLE ANDEREN VARIABLEN (hier X₂) KONSTANT GEHALTEN WERDEN",
      "Der Prozentsatz der durch X₁ erklärten Varianz"
    ],
    "explanation_de": "Exakt! 'Ceteris paribus' (unter sonst gleichen Bedingungen) ist das Fundament der multiplen Regression: Der Koeffizient isoliert den partiellen Effekt von X₁ bereinigt um X₂."
  },

  # LEVEL 10
  "l10_ex1": {
    "category_de": "Berechnung",
    "title_de": "Übung 1: Die Bedeutung von VIF = 10",
    "question_de": "Ein Prädiktor hat einen Varianzinflationsfaktor von VIF = 10. Was bedeutet dies für die Varianz und den Standardfehler seines geschätzten Regressionskoeffizienten?",
    "options_de": [
      "Der Koeffizient ist um das 10-Fache zu groß geschätzt",
      "Die Varianz des Koeffizienten ist 10-mal so groß wie bei orthogonalen Prädiktoren; sein Standardfehler ist um √10 ≈ 3,16-mal breiter aufgebläht",
      "Das Modell hat eine Genauigkeit von genau 10%",
      "Die Variable muss sofort ausnahmslos gelöscht werden"
    ],
    "explanation_de": "Präzise! VIF = 1 / (1 - R_j²). Ein VIF von 10 bedeutet, dass 90% der Varianz dieses Prädiktors durch andere Prädiktoren erklärt werden; der Standardfehler ist um √10 ≈ 3,16 vergrößert."
  },
  "l10_ex2": {
    "category_de": "Fallstrick",
    "title_de": "Übung 2: Das 'Signifikante Nichts'-Symptom",
    "question_de": "Ein Marketingmodell nimmt 'TV-Werbung (€)' und 'Digitale Werbung (€)' auf. Beide Variablen korrelieren mit r = 0,94. Beide t-Tests haben p = 0,25 (nicht signifikant). Das Gesamtmodell hat R² = 0,85 und F-Test p < 0,0001. Was ist die Ursache?",
    "options_de": [
      "Weder TV noch Digitalwerbung haben irgendeinen Einfluss auf den Umsatz",
      "Extreme Multikollinearität: Das Modell weiß sicher, dass Werbung wirkt, kann die Wirkung wegen der hohen Korrelation aber nicht eindeutig zwischen TV und Digital trennen",
      "Das Modell leidet unter extremer Heteroskedastizität",
      "Ein Programmierfehler in der Regressionssoftware"
    ],
    "explanation_de": "Lehrbuchfall von Kollinearität! Beide Variablen transportieren fast identische Information. Das Modell weiß, dass 'Werbung' wirkt, kann die Credits aber keinem Kanal isoliert zuweisen."
  },
  "l10_ex3": {
    "category_de": "Dilemma",
    "title_de": "Übung 3: Hat Multikollinearität Einfluss auf Vorhersagen?",
    "question_de": "Beeinträchtigt starke Multikollinearität zwischen Prädiktoren die Zuverlässigkeit von Modellvorhersagen (Ŷ) auf neuen Daten, solange das Korrelationsmuster stabil bleibt?",
    "options_de": [
      "Ja, alle Vorhersagen werden völlig willkürlich und unbrauchbar",
      "Nein, Vorhersagen Ŷ und das Gesamt-R² bleiben vollkommen valide und präzise; nur die Isolation und Interpretation individueller Koeffizienten β̂ ist instabil",
      "Nur wenn der VIF-Wert über 100 liegt",
      "Vorhersagen sind nur noch für negative Werte zulässig"
    ],
    "explanation_de": "Sehr wichtiges Prinzip! Multikollinearität ist ein Problem der Parameter-Identifikation / Interpretation, nicht der Gesamtkorrelation oder Vorhersagegüte."
  },

  # LEVEL 11
  "l11_ex1": {
    "category_de": "Berechnung",
    "title_de": "Übung 1: Von Log-Odds zu Odds Ratios",
    "question_de": "In einem logistischen Regressionsmodell für Kreditausfall hat der Prädiktor 'Zahlungsverzug' einen geschätzten Koeffizienten von β₁ = +0,693. Was ist das entsprechende Odds Ratio (OR)?",
    "options_de": [
      "OR = 0,693 (keine Veränderung der Chance)",
      "OR = e^{0,693} ≈ 2,00 (die Chance auf Kreditausfall verdoppelt sich bei Zahlungsverzug)",
      "OR = 10^{0,693} ≈ 4,93",
      "OR = 0,693 / (1 - 0,693) = 2,26"
    ],
    "explanation_de": "Perfekt! Logistische Koeffizienten sind Log-Odds. Das Odds Ratio ergibt sich durch Exponentiation: exp(0,693) = 2,00. Die Ausfallchance verdoppelt sich."
  },
  "l11_ex2": {
    "category_de": "Dilemma",
    "title_de": "Übung 2: Entscheidungsschwelle in der Krebsdiagnostik",
    "question_de": "Ein Klassifikator sagt die Wahrscheinlichkeit für einen bösartigen Tumor vorher. Warum ist der Standard-Schwellenwert von p = 0,50 in der Onkologie meist ungeeignet?",
    "options_de": [
      "Weil der Schwellenwert auf 0,50 fixiert sein muss, um mathematische Konsistenz zu wahren",
      "Weil ein Falsch-Negativ (übersehener Krebs) fatal ist, während ein Falsch-Positiv nur zu einer Biopsie führt. Der Schwellenwert muss gesenkt werden (z.B. auf p = 0,10), um maximale Sensitivität zu erzielen",
      "Weil p-Werte in der Medizin immer über 0,90 liegen müssen",
      "Weil logistische Modelle keine Wahrscheinlichkeiten ausgeben"
    ],
    "explanation_de": "Brillant! Schwellenwerte spiegeln asymmetrische Verlustfunktionen wider. Wenn ein Fehler 100-mal teurer ist als der andere, darf die Schwelle niemals 0,50 sein!"
  },
  "l11_ex3": {
    "category_de": "Fallstrick",
    "title_de": "Übung 3: Die '99% Genauigkeit'-Scheingenauigkeit",
    "question_de": "Bei einer seltenen Krankheit mit einer Prävalenz von 0,1% (1 von 1.000) erzielt ein Modell 99,0% Genauigkeit (Accuracy), indem es einfach JEDEN Patienten als 'gesund' einstuft. Was taugt dieses Modell?",
    "options_de": [
      "Es ist exzellent, da 99% Genauigkeit internationaler Goldstandard ist",
      "Es ist völlig nutzlos: Seine Sensitivität beträgt 0%, da kein einziger echter Krankheitsfall erkannt wird. Bei unausgewogenen Klassen ist Accuracy irreführend; man benötigt ROC-AUC oder PR-AUC!",
      "Das Modell ist nur für Männer anwendbar",
      "Man muss die Stichprobengröße verzehnfachen, um Accuracy nutzen zu können"
    ],
    "explanation_de": "Das berühmte Accuracy Paradoxon! Bei 99,9% gesunden Personen erzielt ein dummes 'Alle Gesund'-Modell 99,9% Genauigkeit, rettet aber kein einziges Leben."
  },

  # LEVEL 12
  "l12_ex1": {
    "category_de": "Konzept",
    "title_de": "Übung 1: Der geometrische Unterschied zwischen L1 und L2",
    "question_de": "Warum führt Lasso-Regularisierung (L1: Σ |β_j|) zu echter Variablenselektion (Koeffizienten werden exakt Null), während Ridge-Regression (L2: Σ β_j²) Koeffizienten nur schrumpft, aber nie auf Null setzt?",
    "options_de": [
      "Weil L2-Strafe rechnerisch unlösbar ist",
      "Weil die L1-Restriktionsmenge spitze Ecken auf den Koordinatenachsen hat (Rhombus/Kreuzpolytop), an denen die elliptischen OLS-Höhenlinien häufig tangential andocken",
      "Weil Ridge Koeffizienten mit negativen Werten multipliziert",
      "Weil Lasso nur für binäre Prädiktoren definiert ist"
    ],
    "explanation_de": "Klassische Regularisierungsgeometrie! Die spitzen Ecken der L1-Kugel liegen exakt auf den Achsen, wo Koordinaten Null sind. Die glatte L2-Kugel berührt Höhenlinien fast nie auf den Achsen."
  },
  "l12_ex2": {
    "category_de": "Dilemma",
    "title_de": "Übung 2: Wahl zwischen Ridge und Lasso bei Genexpressionsdaten",
    "question_de": "Du analysierst p = 20.000 Gene bei N = 100 Patienten. Du vermutest, dass nur 10 Gene für die Krankheit verantwortlich sind, diese aber in dichten Korrelationsclustern operieren. Welche Methode ist optimal?",
    "options_de": [
      "Standard OLS ohne Regularisierung",
      "Elastic Net: Es kombiniert L1 (für Sparsity / Selektion der relevanten Gene) und L2 (um korrelierte Gene gemeinsam im Cluster auszuwählen, statt wie reines Lasso willkürlich nur ein Gen zu wählen)",
      "Ausschließlich gewöhnliche univariate Korrelation",
      "Schrittweise Regression (Stepwise Forward Selection)"
    ],
    "explanation_de": "Exzellente Wahl! Elastic Net (Zou & Hastie) löst das Hauptproblem von Lasso bei kollinearen Gruppen: Lasso wählt zufällig nur ein Gen; Elastic Net selektiert die gesamte funktionelle Gruppe."
  },
  "l12_ex3": {
    "category_de": "Konzept",
    "title_de": "Übung 3: Was passiert bei λ → ∞?",
    "question_de": "Was passiert mit den geschätzten Koeffizienten in einer Ridge- oder Lasso-Regression, wenn der Strafterm λ gegen unendlich geht (λ → ∞)?",
    "options_de": [
      "Die Koeffizienten explodieren gegen unendlich",
      "Alle Steigungskoeffizienten β̂_j schrumpfen exakt auf Null; das Modell sagt für alle Beobachtungen nur noch den Mittelwert ȳ vorher (maximaler Bias, minimale Varianz)",
      "Das R² steigt auf 1,00",
      "Die Matrix XᵀX wird singulär"
    ],
    "explanation_de": "Korrekt! Bei extremem λ dominiert der Strafterm die Kostenfunktion vollständig: Alle Steigungen werden auf Null gesetzt. Es verbleibt das reine Nullmodell."
  }
}

content = "// Multilingual German translations for Exercises in Levels 1 to 12 (Phases 1 & 2)\n\nmodule.exports = " + json.dumps(exercises, indent=2, ensure_ascii=False) + ";\n"

with open("scripts/translations/exercises_de_p1_p2.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Successfully generated scripts/translations/exercises_de_p1_p2.js with {len(exercises)} exercises!")
