// Statistiek Leerplatform - Uitgebreide Oefeningenbank (Levels 1 t/m 24)
// Biedt 3 tot 4 diepgaande interactieve oefeningen per level:
// - Concept & Intuïtie
// - Praktijk Dilemma & Besluitvorming
// - De Valkuil-Detector
// - Data & Parameter Schatting

window.EXERCISES_DATA = {
  // LEVEL 1: Beschrijvende Statistiek
  1: [
    {
      id: "l1_ex1",
      type: "concept",
      title: "Oefening 1: Centrummaten & Scheefheid",
      question: "In een landelijke inkomensenquête is het gemiddelde inkomen € 42.000 per jaar, terwijl het mediane inkomen € 31.000 per jaar is. Wat zegt dit onmiddellijk over de vorm van de inkomensverdeling?",
      options: [
        "De inkomensverdeling is volkomen symmetrisch",
        "De verdeling is rechtsscheef (positief scheef): een kleine groep topinkomens trekt het gemiddelde omhoog",
        "De verdeling is linksscheef: de meeste mensen verdienen extreem veel",
        "Er is sprake van een meetfout, want gemiddelde en mediaan moeten altijd identiek zijn"
      ],
      correctIndex: 1,
      explanation: "Juist! Wanneer Gemiddelde > Mediaan, trekken hoge uitschieters (de topinkomens) het rekenkundig gemiddelde naar rechts. De mediaan geeft de zuivere middelste burger weer."
    },
    {
      id: "l1_ex2",
      type: "dilemma",
      title: "Oefening 2: Praktijk Dilemma bij een E-Commerce Platform",
      question: "Je meet de laadtijden van een mobiele app. Bij 95% van de gebruikers laadt de pagina in 0.5 seconde. Bij 5% van de gebruikers met een haperende verbinding duurt het 45 seconden. De marketingdirecteur wil 'de gemiddelde laadtijd van 2.7 seconden' in een persbericht zetten. Wat adviseer je?",
      options: [
        "Mee eens, het gemiddelde is de enige officiële ISO-maatstaf",
        "Niet mee eens: rapporteer de mediaan (0.5s) én de 95e percentiel (p95 = 45s). Het gemiddelde van 2.7s beschrijft noch de typische gebruiker, noch de zwaarst getroffen groep",
        "Verwijder simpelweg alle metingen boven de 1 seconde zodat het gemiddelde naar 0.5s daalt",
        "Gebruik de standaardafwijking als het centrumgetal"
      ],
      correctIndex: 1,
      explanation: "Uitstekend besluit! In latency- en prestatiemetingen is het gemiddelde waardeloos. Men rapporteert altijd mediaan (typische ervaring) én p95 of p99 (tail latency)."
    },
    {
      id: "l1_ex3",
      type: "trap",
      title: "Oefening 3: De Valkuil-Detector van Spreiding",
      question: "Waarom is de Interkwartielafstand (IQR = Q3 - Q1) veel betrouwbaarder dan het Bereik (Range = Max - Min) bij data met mogelijke meetfouten?",
      options: [
        "Omdat de IQR altijd gelijk is aan de standaardafwijking",
        "Omdat de Range afhankelijk is van slechts 2 getallen (het absolute minimum en maximum) en dus explodeert bij één enkele typfout of outlier, terwijl de IQR de middelste 50% meet",
        "Omdat de IQR alleen berekend kan worden bij normale verdelingen",
        "Omdat het Bereik altijd nul is bij grote datasets"
      ],
      correctIndex: 1,
      explanation: "Spot-on! Eén foute invoer (bv. leeftijd 999 ipv 99) ruïneert de Range en SD compleet, maar laat de IQR volkomen koud."
    }
  ],

  // LEVEL 2: Normale Verdeling
  2: [
    {
      id: "l2_ex1",
      type: "concept",
      title: "Oefening 1: Z-score Berekening & Positie",
      question: "Een toetsscore volgt een normale verdeling met μ = 70 en σ = 10. Een student scoort 90 punten. Wat is de Z-score van deze student en welk percentage studenten scoort lager?",
      options: [
        "Z = +1.0, ongeveer 68% scoort lager",
        "Z = +2.0, ongeveer 97.7% scoort lager (slechts 2.3% scoort nog hoger)",
        "Z = +0.5, ongeveer 50% scoort lager",
        "Z = -2.0, student scoort ondermaats"
      ],
      correctIndex: 1,
      explanation: "Exact! Z = (90 - 70) / 10 = +2.0. Volgens de empirische regel ligt 95.4% binnen ±2 SD, dus 2.3% in elke staart. 50% + 47.7% = 97.7% scoort lager."
    },
    {
      id: "l2_ex2",
      type: "trap",
      title: "Oefening 2: De Normaliteits-Aanname Valkuil",
      question: "Mag je de 68-95-99.7 vuistregel toepassen op het aantal volgers van accounts op Twitter/X?",
      options: [
        "Ja, want alle grote datasets worden vanzelf normaal verdeeld",
        "Nee! Volgersaantallen volgen een power-law / zwaar scheve Pareto-verdeling (enkele accounts hebben miljoenen volgers, de meesten <100). De normale verdeling slaat hier de plank volkomen mis",
        "Ja, mits je de Z-score met 2 vermenigvuldigt",
        "Alleen als het account geverifieerd is"
      ],
      correctIndex: 1,
      explanation: "Essentieel inzicht! Veel sociale en economische fenomenen zijn power-laws, geen Gauss-krommen. De empirische regel toepassen op power-laws leidt tot catastrofale onderschatting van risico's."
    },
    {
      id: "l2_ex3",
      type: "dilemma",
      title: "Oefening 3: Fabrieks-Tolerantiegrenzen",
      question: "Een productiemachine vult flessen frisdrank met μ = 500 ml en σ = 5 ml. Flessen onder 490 ml (onder -2 SD) mogen wettelijk niet verkocht worden. Wat is de snelste manier om het afkeurpercentage te verlagen?",
      options: [
        "Het gemiddelde verlagen naar 495 ml",
        "De precisie van de doseerklep verbeteren zodat de spreiding σ daalt van 5 ml naar 2.5 ml",
        "De steekproefgrootte verkleinen",
        "Vaker meten op hetzelfde flesje"
      ],
      correctIndex: 1,
      explanation: "Helemaal juist! Door de procesvariantie σ te verkleinen (Six Sigma principe), schuift de afkeurgrens van 2 SD naar 4 SD en daalt de uitval van 2.3% naar minder dan 0.003%."
    }
  ],

  // LEVEL 3: Centrale Limietstelling (CLT)
  3: [
    {
      id: "l3_ex1",
      type: "concept",
      title: "Oefening 1: Het Gedrag van het Steekproefgemiddelde",
      question: "We gooien 100 keer met een zuivere dobbelsteen (elk getal 1 t/m 6 heeft 1/6 kans; een perfect platte/uniforme verdeling). Wat is de vorm van de verdeling van het GEMIDDELDE van deze 100 worpen als we dit experiment 1.000 keer herhalen?",
      options: [
        "Volkomen plat en uniform tussen 1 en 6",
        "Een prachtige klokvormige normale verdeling met piek rond 3.5, dankzij de Centrale Limietstelling",
        "Een exponentiële verdeling",
        "Een U-vormige verdeling"
      ],
      correctIndex: 1,
      explanation: "Meesterlijk! Hoewel individuele dobbelsteenworpen volstrekt uniform verdeeld zijn, convergeert de som en het gemiddelde bij N=100 onverbiddelijk naar een normale verdeling."
    },
    {
      id: "l3_ex2",
      type: "trap",
      title: "Oefening 2: De Grote Misvatting over Data-Transformatie",
      question: "Een junior onderzoeker zegt: 'Mijn patiëntendata is zwaar scheef. Maar omdat ik N = 500 patiënten heb, is mijn data nu vanzelf normaal verdeeld!' Waarom heeft hij ongelijk?",
      options: [
        "Omdat 500 te klein is; het moet minstens N = 100.000 zijn",
        "Omdat de CLT alleen zegt dat de verdeling van het GEMIDDELDE normaal wordt bij herhaalde steekproeven; de ruwe patiëntendata zelf blijft net zo scheef als hij altijd was!",
        "Omdat alleen bloeddruk normaal verdeeld kan zijn",
        "Hij heeft wel gelijk, grote datasets worden automatisch klokvormig"
      ],
      correctIndex: 1,
      explanation: "Briljant doorzien! Dit is veruit de meest voorkomende misvatting in de wetenschap. De ruwe populatieverdeling verandert NOOIT van vorm door meer metingen; alleen de steekproevenverdeling van het schattingsgemiddelde wordt normaal."
    },
    {
      id: "l3_ex3",
      type: "calculation",
      title: "Oefening 3: Standaardfout Schalen",
      question: "De populatiespreiding is σ = 20. Bij steekproef N = 25 is de standaardfout SE = 20 / √25 = 4.0. Je wilt de onzekerheid halveren naar SE = 2.0. Hoe groot moet N worden?",
      options: [
        "N = 50 (verdubbelen)",
        "N = 100 (verviervoudigen, want √100 = 10 en 20 / 10 = 2.0)",
        "N = 75",
        "N = 500"
      ],
      correctIndex: 1,
      explanation: "Heel scherp! Vanwege de wortel in de noemer (√N) geldt de wet van de afnemende meeropbrengst: om 2x zo precies te worden moet je 4x zoveel data verzamelen."
    }
  ],

  // LEVEL 4: Betrouwbaarheidsintervallen
  4: [
    {
      id: "l4_ex1",
      type: "trap",
      title: "Oefening 1: De Klassieke Frequentistische Denkval",
      question: "Een peiling rapporteert: '95% betrouwbaarheidsinterval voor partij A is [28%, 32%]'. Welke stelling is mathematisch ONJUIST?",
      options: [
        "Bij herhaald bemonsteren van de bevolking zal 95% van de berekende intervallen het werkelijke percentage bevatten",
        "Er is 95% kans dat het echte percentage van partij A binnen [28%, 32%] ligt",
        "De puntschatting van deze steekproef is 30% met een foutmarge van ± 2%",
        "Als we een 99% interval hadden berekend, zou het interval breder zijn geweest"
      ],
      correctIndex: 1,
      explanation: "Precies! Optie B is de klassieke denkfout. Het werkelijke populatiepercentage is een vast getal (geen toevalsvariabele). Het ligt erin of niet (kans is 0 of 1). De 95% slaat op de betrouwbaarheid van de meetprocedure."
    },
    {
      id: "l4_ex2",
      type: "dilemma",
      title: "Oefening 2: Overlappende Intervallen & Significantie",
      question: "Twee behandelgroepen hebben gemiddelden met 95% betrouwbaarheidsintervallen: Groep 1 = [10, 16], Groep 2 = [14, 20]. De intervallen overlappen tussen 14 en 16. Mag je hieruit concluderen dat er GEEN significant verschil is?",
      options: [
        "Ja, elke vorm van overlap betekent automatisch p > 0.05",
        "Nee! Lichte overlap van afzonderlijke betrouwbaarheidsintervallen kan nog steeds statistisch significant zijn (p < 0.05) wanneer je de t-toets op het verschil uitvoert. Pas bij substantiële overlap verdwijnt de significantie",
        "Ja, want 14 en 16 zijn even getallen",
        "Alleen als beide groepen even groot zijn"
      ],
      correctIndex: 1,
      explanation: "Uitstekend! De standaardfout van het verschil is kleiner dan de som van de afzonderlijke standaardfouten. Toets altijd het verschil direct via een t-toets."
    },
    {
      id: "l4_ex3",
      type: "concept",
      title: "Oefening 3: 90% vs 95% vs 99% Betrouwbaarheid",
      question: "Wat gebeurt er met de breedte van een betrouwbaarheidsinterval als je de betrouwbaarheid verhoogt van 95% naar 99% bij gelijkblijvende data?",
      options: [
        "Het interval wordt smaller omdat je zekerder bent",
        "Het interval wordt breder (de Z-factor stijgt van 1.96 naar 2.58), want om zekerder te zijn van een vangst moet je je net wijder uitgooien",
        "De breedte blijft exact hetzelfde",
        "Het interval verschuift naar links"
      ],
      correctIndex: 1,
      explanation: "Helder! Meer zekerheid eisen vereist een wijdere foutmarge."
    }
  ],

  // LEVEL 5: Hypothesetoetsing & p-waarde
  5: [
    {
      id: "l5_ex1",
      type: "trap",
      title: "Oefening 1: P-waarde vs Effectgrootte bij Grote N",
      question: "Een techbedrijf test twee knopkleuren op 10 miljoen bezoekers. Conversie knop A = 12.000%, knop B = 12.004%. De t-toets geeft p = 0.000002. Wat is de juiste zakelijke beslissing?",
      options: [
        "Direct de site aanpassen en miljoenen investeren, want p < 0.00001 betekent dat het effect gigantisch is",
        "Niets doen: bij N = 10 miljoen wordt zelfs een volstrekt triviaal verschil van 0.004% statistisch significant. Het effect heeft nul bedrijfskundige of praktische relevantie",
        "De p-waarde delen door de steekproefgrootte",
        "Aannemen dat de nulhypothese 100% waar is"
      ],
      correctIndex: 1,
      explanation: "Cruciaal inzicht! De p-waarde meet alleen bewijskracht tegen toeval, NOOIT de grootte van het effect. Kijk altijd eerst naar Cohen's d of het absolute verschil."
    },
    {
      id: "l5_ex2",
      type: "concept",
      title: "Oefening 2: Type I en Type II Fouten in de Praktijk",
      question: "Bij het testen van een noodremsysteem voor een zelfrijdende auto: wat is een Type II fout (β)?",
      options: [
        "Onterecht remmen voor een plastic zakje dat over de weg waait (vals alarm)",
        "Niet remmen terwijl er daadwerkelijk een overstekende voetganger staat (gemiste kans / falen om effect te ontdekken)",
        "Het systeem werkt perfect",
        "De auto rijdt te snel"
      ],
      correctIndex: 1,
      explanation: "Juist! Type I = vals alarm (H0 onterecht verwerpen). Type II = misser (H0 behouden terwijl er in werkelijkheid gevaar/effect is)."
    },
    {
      id: "l5_ex3",
      type: "dilemma",
      title: "Oefening 3: Wat zegt p = 0.04 werkelijk?",
      question: "Een wetenschapper beweert: 'Mijn studie heeft p = 0.04, dus de kans is 96% dat mijn hypothese klopt en de nulhypothese onwaar is.' Klopt deze uitspraak?",
      options: [
        "Ja, want 1 - 0.04 = 0.96",
        "Absoluut niet! De p-waarde is P(Data | H0 waar), NIET P(H0 waar | Data). De waarschijnlijkheid van de hypothese hangt ook af van de a priori plausibiliteit (Bayes!)",
        "Alleen als de steekproef exact 100 personen telt",
        "Ja, mits gepubliceerd in een peer-reviewed tijdschrift"
      ],
      correctIndex: 1,
      explanation: "Heel scherp! Dit staat bekend als de 'Prosecutor's Fallacy' of inverse probability misconceptie."
    }
  ],

  // LEVEL 6: Enkelvoudige OLS Regressie
  6: [
    {
      id: "l6_ex1",
      type: "calculation",
      title: "Oefening 1: Helling & Intercept Lezen",
      question: "Het regressiemodel luidt: Omzet (in duizenden €) = 50 + 12.5 × Advertentiebudget (in duizenden €). Wat is de verwachte omzet als een bedrijf € 4.000 besteedt aan advertenties?",
      options: [
        "€ 50.000",
        "€ 100.000 (want 50 + 12.5 × 4 = 100)",
        "€ 125.000",
        "€ 4.000"
      ],
      correctIndex: 1,
      explanation: "Klopt! 50 + 12.5 × 4 = 100 duizend euro = € 100.000."
    },
    {
      id: "l6_ex2",
      type: "concept",
      title: "Oefening 2: Waarom Kwadrateren in OLS?",
      question: "Waarom minimaliseert OLS de kwadraten van residuen Σ(y - ŷ)² en niet simpelweg de gewone som van residuen Σ(y - ŷ)?",
      options: [
        "Omdat positieve en negatieve afwijkingen elkaar anders simpelweg opheffen tot nul bij elke willekeurige lijn door het gemiddelde, én kwadrateren bestraft grote missers zwaarder",
        "Omdat computers niet kunnen optellen zonder machten",
        "Omdat de p-waarde anders altijd 1 wordt",
        "Omdat kwadraten altijd negatief zijn"
      ],
      correctIndex: 0,
      explanation: "Exact! Bij elke lijn door het zwaartepunt (x̄, ȳ) is de som van gewone residuen exact 0. Kwadrateren lost dit op."
    },
    {
      id: "l6_ex3",
      type: "trap",
      title: "Oefening 3: Correlatie vs Causaliteit",
      question: "Tussen aantal verkochte zonnebrillen en aantal verdrinkingen bestaat een sterke correlatie van r = 0.88. Mag de overheid concluderen dat zonnebrillen verboden moeten worden om verdrinkingen te voorkomen?",
      options: [
        "Ja, want r > 0.80 bewijst een oorzakelijk verband",
        "Nee! Zomertemperatuur is een confounder: warm weer zorgt voor meer zonnebrillen én meer zwemmers. Er is geen enkel causaal verband tussen bril en verdrinking",
        "Alleen als het model een R² van boven 0.90 haalt",
        "Ja, Kleinste Kwadraten berekent altijd oorzaak en gevolg"
      ],
      correctIndex: 1,
      explanation: "Uitstekend! Correlatie impliceert nooit causaliteit zonder controlevariabelen of gerandomiseerde experimenten."
    }
  ],

  // LEVEL 7: R² vs Adjusted R²
  7: [
    {
      id: "l7_ex1",
      type: "concept",
      title: "Oefening 1: Het Gedrag van Gewone R²",
      question: "Waarom kan de gewone determinatiecoëfficiënt R² NOOIT dalen wanneer je nieuwe voorspellers toevoegt aan een OLS regressiemodel?",
      options: [
        "Omdat OLS wiskundig gezien altijd minstens een klein beetje variantie kan verklaren door toevallige correlatie met de nieuwe kolom, of de coëfficiënt op 0 kan houden",
        "Omdat R² altijd stijgt met de tijd",
        "Omdat software altijd afrondt naar boven",
        "Omdat de F-waarde gelijk blijft"
      ],
      correctIndex: 0,
      explanation: "Juist! Mathematisch is het toevoegen van een variabele een verruiming van de vectorruimte. De minimale kwadratensom kan daardoor nooit groter worden."
    },
    {
      id: "l7_ex2",
      type: "dilemma",
      title: "Oefening 2: Modelvergelijking in de Praktijk",
      question: "Model A gebruikt 2 voorspellers en haalt R² = 0.74 en Adj-R² = 0.73. Model B voegt 12 extra variabelen toe en haalt R² = 0.76 en Adj-R² = 0.69. Welk model kies je?",
      options: [
        "Model B, want R² is 0.76 en dat is hoger",
        "Model A, want de Adjusted R² is substantieel hoger (0.73 vs 0.69). De extra 12 variabelen in Model B voegen voornamelijk ruis en overfitting toe",
        "Geen van beide, gooi de data weg",
        "Kies altijd het model met de meeste variabelen"
      ],
      correctIndex: 1,
      explanation: "Perfect! Het principe van spaarzaamheid (parsimony / Ockham's scheermes) prefereert Model A: simpeler, robuuster en minder risico op overfitting."
    },
    {
      id: "l7_ex3",
      type: "concept",
      title: "Oefening 3: Wat toetst de algemene F-toets?",
      question: "In een meervoudige regressie met 4 voorspellers geeft de overkoepelende F-toets p < 0.001. Wat is de exacte nulhypothese die hier verworpen wordt?",
      options: [
        "H0: Alle vier de regressiecoëfficiënten zijn tegelijk gelijk aan nul (β1 = β2 = β3 = β4 = 0)",
        "H0: Het intercept is gelijk aan nul",
        "H0: R² is gelijk aan 1.0",
        "H0: Alle datapunten zijn normaal verdeeld"
      ],
      correctIndex: 0,
      explanation: "Spot-on! De F-toets toetst het model als geheel tegen het 'null model' dat alleen een intercept bevat."
    }
  ],

  // LEVEL 8: L.I.N.E. Diagnostiek
  8: [
    {
      id: "l8_ex1",
      type: "concept",
      title: "Oefening 1: Heteroscedasticiteit & Standaardfouten",
      question: "Wat is het directe wiskundige gevaar als de residuen van een regressiemodel heteroscedastisch zijn (trompetvorm)?",
      options: [
        "De geschatte hellingscoëfficiënten (β) worden automatisch oneindig groot",
        "De berekende standaardfouten (SE) zijn vertekend, waardoor p-waarden en betrouwbaarheidsintervallen onbetrouwbaar zijn (vals gevoel van zekerheid)",
        "De computer kan geen lijn meer trekken",
        "R² wordt direct negatief"
      ],
      correctIndex: 1,
      explanation: "Helemaal raak! OLS blijft unbiased voor de coëfficiënten, maar de klassieke formule voor de variantie van β is ongeldig. Oplossing: robuuste Huber-White sandwich-schatters."
    },
    {
      id: "l8_ex2",
      type: "dilemma",
      title: "Oefening 2: Kromming in de Residuals vs Fitted Plot",
      question: "In de 'Residuals vs Fitted' plot zie je een duidelijke U-vorm (banaan): bij lage en hoge voorspellingen zijn de residuen positief, in het midden negatief. Wat is de juiste actie?",
      options: [
        "De assumptie van lineariteit is geschonden; voeg een kwadratische term (X²) toe of gebruik een log-transformatie / GAM",
        "Gewoon negeren zolang R² hoog genoeg is",
        "Alle negatieve residuen omzetten naar positief",
        "De steekproefgrootte halveren"
      ],
      correctIndex: 0,
      explanation: "Uitstekend! Een U-vormige curve in residuen betekent dat een rechtlijnige OLS een krom verband probeert te modelleren."
    },
    {
      id: "l8_ex3",
      type: "concept",
      title: "Oefening 3: Q-Q Plot Interpretatie",
      question: "In een Normal Q-Q plot buigen de punten aan de rechterkant scherp omhoog van de diagonale stippellijn af. Wat duidt dit aan?",
      options: [
        "De residuen hebben zwaardere rechterstaarten dan een normale verdeling (rechtsscheve uitschieters)",
        "De data is perfect normaal verdeeld",
        "Er is geen correlatie",
        "De p-waarde is exact 0.05"
      ],
      correctIndex: 0,
      explanation: "Klopt! Punten boven de lijn in de rechterbovenzijde betekenen dat de grootste waarden veel extremer zijn dan een normale Gauss-curve voorspelt."
    }
  ],

  // LEVEL 9: Simpson's Paradox
  9: [
    {
      id: "l9_ex1",
      type: "concept",
      title: "Oefening 1: Wat veroorzaakt Simpson's Paradox?",
      question: "Waardoor kan een positieve correlatie tussen twee variabelen plotseling 180 graden omdraaien in een negatief verband?",
      options: [
        "Door een afrondingsfout in de software",
        "Doordat een derde variabele (confounder) onevenredig verdeeld is over de groepen en zowel X als Y beïnvloedt",
        "Omdat de steekproef te groot is geworden",
        "Omdat de p-waarde negatief werd"
      ],
      correctIndex: 1,
      explanation: "Juist! Een confounder vertekent het geaggregeerde beeld. Stratificatie of meervoudige regressie herstelt het ware partiële effect."
    },
    {
      id: "l9_ex2",
      type: "dilemma",
      title: "Oefening 2: Toelatingen aan de Universiteit",
      question: "Universiteit X lijkt mannelijke studenten voor te trekken (overall toelatingskans mannen 45%, vrouwen 35%). Maar als je per studierichting kijkt, worden vrouwen bij ELKE faculteit vaker aangenomen dan mannen! Hoe kan dit?",
      options: [
        "Vrouwen solliciteerden vaker bij extreem competitieve studies met een zeer lage algemene toelatingskans (bv. geneeskunde), terwijl mannen vaker solliciteerden bij richtingen met veel plaatsen",
        "De toelatingscommissie heeft fraude gepleegd",
        "De data is niet normaal verdeeld",
        "Dit is mathematisch onmogelijk"
      ],
      correctIndex: 0,
      explanation: "Dit is het beroemde UC Berkeley toelatingsschandaal uit 1973! Een schoolvoorbeeld van Simpson's paradox."
    },
    {
      id: "l9_ex3",
      type: "trap",
      title: "Oefening 3: Wat betekent 'Ceteris Paribus'?",
      question: "Wat betekent het als in een meervoudig regressiemodel de coëfficiënt van Opleidingsjaren op Salaris gelijk is aan +€ 2.500 (gecorrigeerd voor Leeftijd en Werkervaring)?",
      options: [
        "Iedereen met een opleiding verdient € 2.500",
        "Voor twee personen van dezelfde leeftijd en met dezelfde werkervaring, verdient degene met 1 extra jaar opleiding naar verwachting € 2.500 meer per jaar",
        "Opleiding heeft geen effect op salaris",
        "Leeftijd en werkervaring zijn uit de berekening weggelaten"
      ],
      correctIndex: 1,
      explanation: "Spot-on! 'Ceteris paribus' betekent dat alle andere variabelen in het model denkbeeldig worden bevroren."
    }
  ],

  // LEVEL 10: Multicollineariteit & VIF
  10: [
    {
      id: "l10_ex1",
      type: "concept",
      title: "Oefening 1: De Betekenis van VIF = 10",
      question: "Wat betekent een Variance Inflation Factor van VIF = 10 voor de variantie en standaardfout van een regressiecoëfficiënt?",
      options: [
        "De variantie is 10 keer zo groot geworden en de standaardfout is √10 ≈ 3.16 keer zo breed als in een ideale ongecorreleerde situatie",
        "De p-waarde is met factor 10 gedaald",
        "Het model verklaart 10% van de data",
        "Er zijn 10 variabelen in het model"
      ],
      correctIndex: 0,
      explanation: "Exact! VIF meet de toename in de variantie van de schatter door onderlinge correlatie met andere voorspellers."
    },
    {
      id: "l10_ex2",
      type: "dilemma",
      title: "Oefening 2: Het 'Significante Niets' Symptoom",
      question: "Je regressiemodel heeft R² = 0.85 en de F-toets heeft p < 0.0001 (het model als geheel is superieur). Maar als je naar de afzonderlijke t-toetsen kijkt, heeft geen enkele variabele p < 0.05! Wat is de oorzaak?",
      options: [
        "Ernstige multicollineariteit: de voorspellers vechten onderling om dezelfde variantie, waardoor de individuele standaardfouten opgeblazen zijn",
        "Het model is te lineair",
        "De computer heeft te weinig geheugen",
        "Er zijn te veel datapunten verzameld"
      ],
      correctIndex: 0,
      explanation: "Meesterlijk! Dit is het klassieke handtekening-patroon van zware multicollineariteit."
    },
    {
      id: "l10_ex3",
      type: "trap",
      title: "Oefening 3: Heeft Multicollineariteit Invloed op Voorspellingen?",
      question: "Als twee variabelen sterk correleren (VIF = 15), beïnvloedt dit dan de totale voorspelkracht Ŷ van het model op nieuwe soortgelijke data?",
      options: [
        "Nee: OLS kan de totale som Ŷ nog steeds prima voorspellen, zolang de correlatiestructuur tussen de voorspellers in de toekomst hetzelfde blijft. Alleen de afzonderlijke interpretatie van β1 en β2 is onbetrouwbaar",
        "Ja, de voorspelling Ŷ crasht altijd naar nul",
        "Ja, de voorspelling wordt altijd negatief",
        "Het model kan niet meer rekenen"
      ],
      correctIndex: 0,
      explanation: "Zeer diep inzicht! Multicollineariteit is een interpretatie- en stabiliteitsprobleem, geen direct voorspellingsprobleem."
    }
  ],

  // LEVEL 11: Logistische Regressie
  11: [
    {
      id: "l11_ex1",
      type: "calculation",
      title: "Oefening 1: Van Log-Odds naar Odds Ratio",
      question: "In een logistisch model voor hartinfarcten is de coëfficiënt voor Roken β = 0.693. Wat is de bijbehorende Odds Ratio (OR)?",
      options: [
        "OR = 0.693",
        "OR = e^0.693 = 2.0 (rokers hebben 2x zo hoge odds op een infarct)",
        "OR = 1.0",
        "OR = 0.50"
      ],
      correctIndex: 1,
      explanation: "Klopt! De exponentiële functie e^β vertaalt de onbegrensde log-odds schaal naar de intuïtieve Odds Ratio."
    },
    {
      id: "l11_ex2",
      type: "dilemma",
      title: "Oefening 2: Beslisgrens bij Kankerdiagnostiek",
      question: "Bij een model dat kwaadaardige tumoren detecteert, staat de standaard beslisgrens op cutoff p = 0.50. Wat moet de hoofdarts doen met deze cutoff?",
      options: [
        "Verlagen naar bv. p = 0.20 om de Sensitiviteit (Recall) te maximaliseren: een vals alarm (bioptie) is immers veel minder erg dan een gemiste tumor!",
        "Verhogen naar p = 0.90 zodat we bijna nooit alarm slaan",
        "Altijd strikt op 0.50 houden",
        "De cutoff willekeurig kiezen per patiënt"
      ],
      correctIndex: 0,
      explanation: "Juist! In medische diagnostiek met asymmetrische kosten verlaag je de cutoff om de kans op valse negatieven (dodelijke missers) te minimaliseren."
    },
    {
      id: "l11_ex3",
      type: "trap",
      title: "Oefening 3: De '99% Accuratesse' Schijnvertoning",
      question: "In een dataset over bankfraude is 0.1% van de transacties frauduleus (99.9% is legitiem). Een model voorspelt ALTIJD 'Geen fraude' en claimt 99.9% accuratesse. Waarom is dit model waardeloos?",
      options: [
        "Omdat het letterlijk 0% van de daadwerkelijke fraudegevallen opspoort (Sensitiviteit = 0%). Accuratesse is zinloos bij sterk ongebalanceerde klassen; gebruik AUC-ROC of Precision/Recall",
        "Omdat 99.9% een oneven getal is",
        "Omdat banken niet van statistiek houden",
        "Het model is juist perfect"
      ],
      correctIndex: 0,
      explanation: "Spot-on! De accuracy paradox: bij zeldzame gebeurtenissen is 'niets doen' schijnbaar accuraat maar operationeel een ramp."
    }
  ],

  // LEVEL 12: Regularisatie (Ridge & Lasso)
  12: [
    {
      id: "l12_ex1",
      type: "concept",
      title: "Oefening 1: Het Geometrische Verschil tussen L1 en L2",
      question: "Waarom kan Lasso (L1-norm) coëfficiënten exact op nul zetten, terwijl Ridge (L2-norm) ze alleen heel dicht naar nul krimpt?",
      options: [
        "Omdat het L1-beperkingsgebied hoeken heeft op de assen (een ruit/diamant in 2D), waardoor de elliptische OLS-contouren de rand vaak precies op een as (waar β = 0) raken",
        "Omdat Lasso met gehele getallen rekent",
        "Omdat Ridge alleen voor positieve getallen werkt",
        "Omdat L2 de computer oververhit"
      ],
      correctIndex: 0,
      explanation: "Meesterlijk geometrisch inzicht! De scherpe hoeken van de L1-bal op de assen dwingen spaarzaamheid (sparsity) af."
    },
    {
      id: "l12_ex2",
      type: "dilemma",
      title: "Oefening 2: Keuze tussen Ridge en Lasso",
      question: "Je onderzoekt 10.000 genetische markers bij 100 patiënten. Je vermoedt dat slechts 5 specifieke genen verantwoordelijk zijn voor de ziekte. Welke methode geniet de voorkeur?",
      options: [
        "Lasso (L1), omdat het automatisch de 9.995 irrelevante genen elimineert naar exact nul en een compacte set overlaat",
        "Gewone OLS zonder strafterm",
        "Ridge, omdat het alle 10.000 genen in het model vasthoudt",
        "Een eenvoudige correlatie per gen"
      ],
      correctIndex: 0,
      explanation: "Juist! Bij p >> n met een spaarzame werkelijkheid is Lasso de ideale automatische feature selector."
    },
    {
      id: "l12_ex3",
      type: "trap",
      title: "Oefening 3: Wat gebeurt er als λ oneindig groot wordt?",
      question: "Als de regularisatieboete λ naar oneindig (∞) gaat in Ridge of Lasso, hoe ziet het model er dan uit?",
      options: [
        "Alle regressiecoëfficiënten worden exact 0, en het model voorspelt simpelweg het algemene gemiddelde ȳ voor iedereen (maximale bias, minimale variantie)",
        "Het model overfit maximaal",
        "R² wordt 1.0",
        "De coëfficiënten worden oneindig groot"
      ],
      correctIndex: 0,
      explanation: "Klopt! Dit illustreert de Bias-Variance Tradeoff: grote λ reduceert de variantie naar nul ten koste van hoge bias (underfitting)."
    }
  ],

  // LEVEL 13: Geclusterde Data & Falen van OLS
  13: [
    {
      id: "l13_ex1",
      type: "calculation",
      title: "Oefening 1: Intraclass Correlation (ICC) Berekenen",
      question: "In een studie naar toetsscores is de variantie tussen scholen σ²_tussen = 4.0 en de variantie binnen scholen tussen leerlingen σ²_binnen = 16.0. Wat is de ICC?",
      options: [
        "ICC = 4.0 / (4.0 + 16.0) = 4.0 / 20.0 = 0.20 (20%)",
        "ICC = 4.0 / 16.0 = 0.25",
        "ICC = 16.0 / 4.0 = 4.0",
        "ICC = 0.80"
      ],
      correctIndex: 0,
      explanation: "Helemaal goed! 20% van alle variatie in prestaties wordt verklaard door verschillen tussen de scholen."
    },
    {
      id: "l13_ex2",
      type: "concept",
      title: "Oefening 2: Waarom faalt de onafhankelijkheidsaanname?",
      question: "Wat is het effectieve gevolg van 'pseudo-replicatie' als je 30 patiënten met elk 10 herhaalde bloeddrukmetingen (300 metingen) in een gewone OLS stopt?",
      options: [
        "OLS rekent alsof je 300 volkomen onafhankelijke patiënten hebt, waardoor de standaardfouten gigantisch worden onderschat en je bijna gegarandeerd valse significante effecten rapporteert",
        "Het gemiddelde wordt verkeerd berekend",
        "De berekening crasht",
        "Er is geen enkel probleem, data is data"
      ],
      correctIndex: 0,
      explanation: "Cruciaal inzicht! 10 metingen op dezelfde patiënt zijn sterk gecorreleerd. OLS doet alsof het 300 vreemden zijn (schijnprecisie)."
    },
    {
      id: "l13_ex3",
      type: "trap",
      title: "Oefening 3: Wanneer is OLS nog acceptabel?",
      question: "Bij welke waarde van de ICC is clustering verwaarloosbaar en mag je eventueel nog standaard OLS overwegen?",
      options: [
        "Als ICC < 0.05 (minder dan 5% tussen-groep variantie) én het design effect dicht bij 1.0 ligt",
        "Als ICC > 0.80",
        "Als de data discreet is",
        "Nooit"
      ],
      correctIndex: 0,
      explanation: "Juist! Vuistregel: bij ICC < 0.05 en kleine clustergrootte is de vertekening van de standaardfout minimaal."
    }
  ],

  // LEVEL 14: LMM: Random Intercepts
  14: [
    {
      id: "l14_ex1",
      type: "concept",
      title: "Oefening 1: Vast Effect vs Willekeurig Effect",
      question: "In Y_ij = (β0 + u_0j) + β1 X_ij + ε_ij: wat is het verschil tussen β1 en u_0j?",
      options: [
        "β1 is het vaste (fixed) effect dat voor iedereen geldt; u_0j is de willekeurige (random) afwijking van het startniveau van cluster j",
        "β1 is een toevalsgetal en u_0j is een constante",
        "Er is geen verschil",
        "u_0j is het tentamencijfer"
      ],
      correctIndex: 0,
      explanation: "Heel scherp! Het Fixed effect schat het overkoepelende populatiegemiddelde; het Random effect modelleert de clusterafwijking."
    },
    {
      id: "l14_ex2",
      type: "dilemma",
      title: "Oefening 2: Empirical Bayes Shrinkage in Actie",
      question: "School X heeft toevallig slechts 2 leerlingen en beide scoren een 9.5. Waarom schat een Random Intercept model het startniveau van School X niet op 9.5, maar op bv. 7.6?",
      options: [
        "Omdat shrinkage kleine clusters met weinig bewijs automatisch naar het centrale populatiegemiddelde trekt om overfitting op toeval te voorkomen",
        "Omdat de computer een hekel heeft aan school X",
        "Omdat 9.5 wiskundig niet is toegestaan",
        "Omdat de p-waarde te hoog was"
      ],
      correctIndex: 0,
      explanation: "Meesterlijk! Dit is de essentie van Partial Pooling / Shrinkage: hoe minder observaties in een cluster, hoe meer het model leunt op het groepsgemiddelde."
    },
    {
      id: "l14_ex3",
      type: "trap",
      title: "Oefening 3: Random Intercepts vs Dummy Variabelen",
      question: "Waarom gebruik je bij 200 ziekenhuizen liever een Random Intercept model dan 199 afzonderlijke dummy variabelen (Fixed Effects model)?",
      options: [
        "199 dummies verslinden 199 vrijheidsgraden en overfitten kleine ziekenhuizen, terwijl een Random Intercept slechts 1 enkele variantieparameter σ²_u0 schat",
        "Omdat dummy variabelen verboden zijn in de geneeskunde",
        "Omdat computers maximaal 10 dummies aankunnen",
        "Omdat een Random Intercept altijd een R² van 1.0 geeft"
      ],
      correctIndex: 0,
      explanation: "Spot-on! Het random effect model is vele malen spaarzamer en laat generalisatie naar nieuwe ziekenhuizen toe."
    }
  ],

  // LEVEL 15: LMM: Random Slopes (De Sweet Spot)
  15: [
    {
      id: "l15_ex1",
      type: "concept",
      title: "Oefening 1: Wat voegt een Random Slope toe?",
      question: "Wat is het essentiële verschil tussen een Random Intercept model en een Random Slope model?",
      options: [
        "Random Intercept: parallelle lijnen (zelfde helling, ander startpunt). Random Slope: lijnen met een eigen hellingshoek per cluster (verschillende reactiesnelheid/hersteltempo)",
        "Random Slope werkt alleen met binaire data",
        "Random Intercept kan geen tijd analyseren",
        "Er is geen verschil"
      ],
      correctIndex: 0,
      explanation: "Uitstekend! Bij Random Slopes mag de effectgrootte zelf variëren van persoon tot persoon."
    },
    {
      id: "l15_ex2",
      type: "dilemma",
      title: "Oefening 2: Negatieve Correlatie tussen Intercept en Slope",
      question: "In een herstelstudie rapporteert het Mixed Model: Corr(u_0, u_1) = -0.45 (negatief). Wat betekent dit in gewone spreektaal voor de patiënten?",
      options: [
        "Patiënten die starten met een ernstigere toestand (laag beginniveau u_0) vertonen een sneller hersteltempo per maand (hoge helling u_1): een inhaaleffect!",
        "De therapie werkt niet",
        "Patiënten met een hoge start herstellen nog sneller",
        "De correlatie is ongeldig omdat hij negatief is"
      ],
      correctIndex: 0,
      explanation: "Prachtig begrepen! Dit fysiologische inhaaleffect kan alleen ontdekt worden met een Random Slope model met gecorreleerde effecten."
    },
    {
      id: "l15_ex3",
      type: "trap",
      title: "Oefening 3: Omgaan met Ontbrekende Waarden (Unbalanced Data)",
      question: "Waarom heeft een Linear Mixed Model de klassieke Repeated Measures ANOVA vrijwel volledig vervangen in klinisch onderzoek?",
      options: [
        "Repeated Measures ANOVA gooit een patiënt compleet weg zodra er 1 meetmoment mist (listwise deletion); een Mixed Model gebruikt alle beschikbare meetmomenten optimaal",
        "Omdat ANOVA alleen in de 19e eeuw werkte",
        "Omdat Mixed Models geen p-waarden hoeven te berekenen",
        "Omdat ANOVA verboden is door de FDA"
      ],
      correctIndex: 0,
      explanation: "Cruciaal praktisch voordeel! In de echte wereld mist vrijwel elke patiënt wel eens een afspraak. Mixed Models handelen dit vlekkeloos af."
    }
  ],

  // LEVEL 16: GLMM
  16: [
    {
      id: "l16_ex1",
      type: "concept",
      title: "Oefening 1: Wanneer stap je over naar GLMM?",
      question: "Je onderzoekt het aantal heropnames (0, 1, 2, 5 aanvallen per jaar: Poisson tellingen) bij patiënten verdeeld over 30 klinieken. Welk model is het juiste?",
      options: [
        "Een Poisson GLMM (Generalized Linear Mixed Model) met log-link en random intercepts per kliniek",
        "Gewone lineaire OLS regressie",
        "Een t-toets",
        "Klassieke ANOVA"
      ],
      correctIndex: 0,
      explanation: "Juist! Tellingen zijn niet normaal verdeeld (Poisson/Negatieve Binomiaal) én de data is geclusterd. GLMM verenigt beide."
    },
    {
      id: "l16_ex2",
      type: "dilemma",
      title: "Oefening 2: Interpretatie van Vaste Effecten in GLMM",
      question: "In een logistisch GLMM voor wondinfecties is het vaste effect van antibioticagebruik β = -0.85. Wat is het effect op de odds?",
      options: [
        "Odds Ratio = e^-0.85 = 0.43 (57% lagere kansverhouding op infectie bij gelijkblijvend ziekenhuisniveau)",
        "De kans daalt met 85%",
        "De odds stijgen met 43%",
        "Het effect is niet interpreteerbaar"
      ],
      correctIndex: 0,
      explanation: "Klopt! De coëfficiënt wordt geëxponentieerd naar een conditionele Odds Ratio."
    },
    {
      id: "l16_ex3",
      type: "trap",
      title: "Oefening 3: Wat is Overdispersie?",
      question: "In een Poisson GLMM moet de variantie gelijk zijn aan het gemiddelde (Var = μ). In je data is de variantie echter 6 keer groter dan het gemiddelde. Wat moet je doen?",
      options: [
        "Schakel over naar een Negatief-Binomiaal GLMM of voeg een observation-level random effect toe om de extra spreiding op te vangen",
        "Rond alle getallen af naar boven",
        "Verwijder alle patiënten met meer dan 2 aanvallen",
        "Neem aan dat de data normaal verdeeld is"
      ],
      correctIndex: 0,
      explanation: "Spot-on! Negatieve Binomiaal modellen hebben een extra dispersieparameter om overdispersie te modelleren."
    }
  ],

  // LEVEL 17: GAMs
  17: [
    {
      id: "l17_ex1",
      type: "concept",
      title: "Oefening 1: Wat zijn Splines in GAMs?",
      question: "Wat is de rol van basis-splines in een Generalized Additive Model Y = β0 + f(X) + ε?",
      options: [
        "Het zijn stuksgewijze vloeiende veeltermen (bv. kubische splines) die aan elkaar geknoopt worden om willekeurige krommingen flexibel te volgen",
        "Het zijn rechte lijnen",
        "Het zijn toevalsgetallen",
        "Het zijn binaire classificatiefuncties"
      ],
      correctIndex: 0,
      explanation: "Exact! Splines buigen soepel mee met de data zonder dat je vooraf hoeft te gokken of het verband X², X³ of log(X) is."
    },
    {
      id: "l17_ex2",
      type: "concept",
      title: "Oefening 2: Effective Degrees of Freedom (edf)",
      question: "In de output van een GAM staat voor de term f(Leeftijd): edf = 1.02. Wat betekent dit?",
      options: [
        "Het verband tussen Leeftijd en de uitkomst is nagenoeg kaarsrecht (lineair), want een rechte lijn heeft edf = 1",
        "De data is zwaar niet-lineair gekromd",
        "Het model heeft gefaald",
        "Leeftijd moet uit het model worden verwijderd"
      ],
      correctIndex: 0,
      explanation: "Heel scherp! Als edf ≈ 1 heeft de smoothing penalty alle kromming weggefilterd en gedraagt de term zich als een gewone lineaire regressie."
    },
    {
      id: "l17_ex3",
      type: "dilemma",
      title: "Oefening 3: De Smoothing Penalty λ",
      question: "Wat gebeurt er als de smoothing parameter λ in een GAM te klein wordt ingesteld (λ ≈ 0)?",
      options: [
        "De curve overfit enorm: hij kronkelt door elke individuele toevallige meetfout heen",
        "De curve wordt een kaarsrechte lijn",
        "De p-waarde wordt altijd 0.05",
        "Er verandert niets"
      ],
      correctIndex: 0,
      explanation: "Klopt! Smoothing parameters worden daarom automatisch gekozen via Restricted Maximum Likelihood (REML) of GCV."
    }
  ],

  // LEVEL 18: Survival Analysis
  18: [
    {
      id: "l18_ex1",
      type: "concept",
      title: "Oefening 1: Wat is Censurering?",
      question: "Waarom mag je patiënten die aan het einde van een 5-jarige studie nog springlevend zijn niet weggooien als 'ontbrekende data'?",
      options: [
        "Omdat zij bewezen hebben minstens 5 jaar te overleven! Hun informatie (rechtscensurering) is essentieel om de overlevingskans op lange termijn niet zwaar te onderschatten",
        "Omdat de wet dat verbiedt",
        "Omdat hun data automatisch als 100 jaar wordt ingevuld",
        "Omdat zij anders boos worden"
      ],
      correctIndex: 0,
      explanation: "Cruciaal concept! Censurering is geen missende data, maar partiële informatie die Kaplan-Meier stap voor stap meeneemt."
    },
    {
      id: "l18_ex2",
      type: "calculation",
      title: "Oefening 2: Hazard Ratio Lezen",
      question: "In een Cox Proportional Hazards model heeft Medicijn X een Hazard Ratio van HR = 0.60 (p = 0.002). Wat concludeer je?",
      options: [
        "Patiënten met Medicijn X hebben op elk moment een 40% lager risico (hazard rate) om te overlijden vergeleken met de controlegroep",
        "60% van de patiënten overlijdt",
        "Het medicijn verlengt het leven met exact 60 dagen",
        "Het medicijn heeft geen effect"
      ],
      correctIndex: 0,
      explanation: "Voltreffer! 1 - 0.60 = 0.40 = 40% risicoreductie."
    },
    {
      id: "l18_ex3",
      type: "trap",
      title: "Oefening 3: De Proportional Hazards Assumptie",
      question: "Wat gebeurt er als de overlevingslijnen van twee groepen elkaar na 2 jaar kruisen (in het begin werkt het medicijn goed, maar later veroorzaakt het toxiciteit)?",
      options: [
        "De 'Proportional Hazards' aanname is geschonden; de hazard ratio is niet constant in de tijd. Je moet een tijd-afhankelijke covariabele toevoegen",
        "Het model is automatisch goedgekeurd",
        "Je moet alle patiënten na 2 jaar wissen",
        "Er is geen probleem"
      ],
      correctIndex: 0,
      explanation: "Juist! Cox PH vereist dat de relatieve verhouding constant blijft over tijd. Kruisende curven schenden dit direct."
    }
  ],

  // LEVEL 19: Bayesiaanse Grondslagen
  19: [
    {
      id: "l19_ex1",
      type: "concept",
      title: "Oefening 1: De Drie Bouwstenen van Bayes",
      question: "Hoe luidt de Bayesiaanse vergelijking in woorden?",
      options: [
        "Posterior Kennis ∝ Likelihood van de Data × Prior Overtuiging",
        "Data = Model + Ruis",
        "P-waarde = 1 - Betrouwbaarheid",
        "Prior = Likelihood gedeeld door N"
      ],
      correctIndex: 0,
      explanation: "Exact! We actualiseren wat we al wisten (Prior) met het bewijs uit de data (Likelihood)."
    },
    {
      id: "l19_ex2",
      type: "dilemma",
      title: "Oefening 2: De Invloed van de Prior bij Grote N",
      question: "Wat gebeurt er met de Bayesiaanse Posterior als je steekproefgrootte N toeneemt naar 100.000 metingen?",
      options: [
        "De invloed van de Prior vervliegt nagenoeg geheel; de Likelihood (de data) domineert de posterior volledig en de schatting convergeert naar de frequentistische maximum likelihood schatting",
        "De Prior wordt oneindig belangrijk",
        "De computer kan het niet meer uitrekenen",
        "De posterior wordt een rechte lijn"
      ],
      correctIndex: 0,
      explanation: "Heel fraai! 'Data overweldigt de prior'. Alleen bij kleine N heeft de prior een merkbaar regulerend effect."
    },
    {
      id: "l19_ex3",
      type: "trap",
      title: "Oefening 3: Wat mag je wél zeggen over een 95% Credible Interval?",
      question: "Wat is het grote voordeel van een Bayesiaans 95% Credible Interval [0.12, 0.28] ten opzichte van een frequentistisch CI?",
      options: [
        "Je mag letterlijk en volkomen terecht zeggen: 'Gegeven onze prior en data is er daadwerkelijk 95% kans dat de echte parameterwaarde tussen 0.12 en 0.28 ligt'",
        "Het is altijd 10x smaller",
        "Het bevat nooit nullen",
        "Het vereist geen aannames"
      ],
      correctIndex: 0,
      explanation: "Spot-on! Dit is de natuurlijke, intuïtieve uitspraak die iedereen intuïtief wil doen."
    }
  ],

  // LEVEL 20: MCMC Sampler
  20: [
    {
      id: "l20_ex1",
      type: "concept",
      title: "Oefening 1: Waarom MCMC?",
      question: "Waarom gebruiken Bayesiaanse statistici algoritmen zoals Markov Chain Monte Carlo (MCMC) in plaats van gewoon de wiskundige integraal op te lossen?",
      options: [
        "Omdat de noemer P(Data) een hoog-dimensionale integraal is over alle parameters tegelijk; bij meer dan 4 parameters is dit analytisch onmogelijk te berekenen, maar MCMC kan wel steekproeven trekken uit de vorm van de teller",
        "Omdat wiskundigen liever programmeren",
        "Omdat MCMC altijd een exact getal geeft zonder onzekerheid",
        "Omdat computers geen breuken kunnen delen"
      ],
      correctIndex: 0,
      explanation: "Meesterlijk! MCMC omzeilt de onmogelijke integratie door willekeurige maar gerichte steekproeven te trekken."
    },
    {
      id: "l20_ex2",
      type: "dilemma",
      title: "Oefening 2: Gelman-Rubin R̂ Diagnostiek",
      question: "Je draait 4 parallelle MCMC ketens in Stan of PyMC. De diagnostiek rapporteert voor parameter θ: R̂ = 1.003. Wat betekent dit?",
      options: [
        "De vier ketens zijn perfect gemengd en geconvergeerd naar dezelfde stationaire posterior verdeling (R̂ < 1.05 is de gouden standaard)",
        "De ketens zijn vastgelopen in een lokaal minimum",
        "De prior was verkeerd",
        "De p-waarde is 0.003"
      ],
      correctIndex: 0,
      explanation: "Juist! R̂ vergelijkt de variantie tussen de ketens met de variantie binnen de ketens. Waarden dicht bij 1.00 betekenen convergentie."
    },
    {
      id: "l20_ex3",
      type: "trap",
      title: "Oefening 3: Wat maakt Hamiltoniaanse Monte Carlo (HMC) superieur?",
      question: "Waarom faalt klassieke Metropolis-Hastings in modellen met 500 parameters en triomfeert Hamiltoniaanse Monte Carlo (HMC)?",
      options: [
        "Metropolis-Hastings doet een blinde 'dronkenmanswandeling' (random walk) en verdwaalt in hoge dimensies; HMC simuleert de wrijvingloze fysica van een rollende knikker over het gradiëntoppervlak en zet grote doelgerichte stappen",
        "HMC gebruikt minder geheugen",
        "Metropolis-Hastings werkt alleen op Windows",
        "HMC verwijdert alle parameters"
      ],
      correctIndex: 0,
      explanation: "Schitterend fysisch inzicht! HMC benut de gradiënt van het oppervlak om efficiënt door hoog-dimensionale ruimten te glijden."
    }
  ],

  // LEVEL 21: Gaussiaanse Processen (GPs)
  21: [
    {
      id: "l21_ex1",
      type: "concept",
      title: "Oefening 1: Wat is een Gaussiaans Proces?",
      question: "Hoe kun je een Gaussiaans Proces f(x) ~ GP(m, k) het meest intuïtief visualiseren?",
      options: [
        "Als een oneindig-dimensionale multivariate normale verdeling: in plaats van een gemiddelde vector en covariantiematrix van getallen, definieert het een gemiddelde functie en een covariantie-kernel over complete functies",
        "Als een enkele rechte lijn",
        "Als een histogram van staafjes",
        "Als een neuraal netwerk zonder gewichten"
      ],
      correctIndex: 0,
      explanation: "Exact! Een GP is een oneindige verzameling toevalsvariabelen waarvan elke eindige selectie gezamenlijk normaal verdeeld is."
    },
    {
      id: "l21_ex2",
      type: "concept",
      title: "Oefening 2: De RBF Kernel Lengteschaal ℓ",
      question: "Wat gebeurt er met de voorspelde curve van een Gaussiaans Proces als je de lengteschaal parameter ℓ van de kernel heel groot instelt?",
      options: [
        "De correlatie tussen punten blijft over grote afstanden hoog, waardoor de voorspelde functie heel stijf, glad en langzaam golvend wordt",
        "De curve wordt extreem wild en grillig",
        "De onzekerheidsband verdwijnt",
        "De functie wordt een zaagtand"
      ],
      correctIndex: 0,
      explanation: "Heel scherp! De lengteschaal ℓ bepaalt hoe snel de ruimtelijke correlatie tussen twee punten uitdooft."
    },
    {
      id: "l21_ex3",
      type: "dilemma",
      title: "Oefening 3: Bayesiaanse Optimalisatie met GPs",
      question: "Waarom worden Gaussiaanse Processen massaal gebruikt om dure experimenten (zoals medicijnsynthese of hyperparametertuning) te optimaliseren?",
      options: [
        "Omdat een GP op elk onbekend punt niet alleen de verwachte opbrengst voorspelt, maar ook de exacte onzekerheid σ(x); je kunt doelgericht meten waar de kans op verbetering maximaal is (Acquisition Function: Upper Confidence Bound)",
        "Omdat GPs gratis zijn",
        "Omdat GPs nooit fouten maken",
        "Omdat het experimenten overbodig maakt"
      ],
      correctIndex: 0,
      explanation: "Spot-on! Dit is de kern van 'Active Learning' en Bayesiaanse optimalisatie: balanceren tussen exploratie en exploitatie."
    }
  ],

  // LEVEL 22: Causale Inferentie in Hilbertruimten
  22: [
    {
      id: "l22_ex1",
      type: "concept",
      title: "Oefening 1: Zien vs Doen (Judea Pearl)",
      question: "Wat is het fundamentele verschil tussen de observationele conditionele kans P(Y | X = x) en de causale kans P(Y | do(X = x))?",
      options: [
        "P(Y | X=x) observeert passief in een bestaande wereld inclusief alle verstorende selectie-effecten; P(Y | do(X=x)) simuleert een actieve ingreep waarbij alle natuurlijke oorzaken van X worden losgekoppeld",
        "Er is geen verschil, het zijn synoniemen",
        "do(X) kan alleen experimenteel in een lab uitgevoerd worden",
        "P(Y | X) is altijd groter dan do(X)"
      ],
      correctIndex: 0,
      explanation: "Meesterlijk! De do-operator formaliseert wat beleidsmakers en artsen willen weten: 'Wat gebeurt er als we ingrijpen?'"
    },
    {
      id: "l22_ex2",
      type: "trap",
      title: "Oefening 2: De Collider Valkuil (Berkson's Paradox)",
      question: "In een causale graaf veroorzaken Talent (X) en Geluk (Y) beiden Beroemdheid (Z). Dus X → Z ← Y (Z is een collider). Wat gebeurt er als je controleert voor Beroemdheid Z?",
      options: [
        "Je introduceert een VALSE negatieve correlatie tussen Talent en Geluk: onder beroemdheden lijkt iemand met weinig talent automatisch 'heel veel geluk' te hebben gehad!",
        "Je verwijdert alle vertekening",
        "De analyse wordt zuiverder",
        "Er gebeurt niets"
      ],
      correctIndex: 0,
      explanation: "Briljant! Conditioneren op een collider OPENT een onecht causaal pad (M-bias / collider stratification bias)."
    },
    {
      id: "l22_ex3",
      type: "concept",
      title: "Oefening 3: Kernel Mean Embeddings in Hilbertruimten (ℋ)",
      question: "Waarom embedden moderne statistici kansverdelingen in Reproducing Kernel Hilbert Spaces (RKHS ℋ)?",
      options: [
        "Het transformeert complexe, oneindig-dimensionale kansverdelingen naar afzonderlijke punten (vectoren) in een Hilbertruimte, waardoor je niet-lineaire afstanden (zoals Maximum Mean Discrepancy MMD) simpel met inproducten kunt berekenen",
        "Om de data te versleutelen",
        "Omdat Hilbertruimten kleiner zijn dan gewone getallen",
        "Omdat p-waarden dan niet meer nodig zijn"
      ],
      correctIndex: 0,
      explanation: "Zeer diep inzicht! Kernel Mean Embeddings maken non-parametrische hypothesetoetsen en causale inferentie elegant hanteerbaar."
    }
  ],

  // LEVEL 23: SDE's
  23: [
    {
      id: "l23_ex1",
      type: "concept",
      title: "Oefening 1: Wat betekent dX_t = μ dt + σ dB_t?",
      question: "Wat representeren de twee termen aan de rechterkant van een Stochastische Differentiële Vergelijking?",
      options: [
        "μ dt is de deterministische drift (de verwachte richting over tijd); σ dB_t is de stochastische diffusie (de continue willekeurige fluctuaties gedreven door Brownse beweging)",
        "μ is de meetfout en σ is het gemiddelde",
        "Beide zijn gewone Newtoniaanse snelheden",
        "Het is een discrete regressievergelijking"
      ],
      correctIndex: 0,
      explanation: "Exact! Drift stuurt het systeem gemiddeld een kant op; diffusie verspreidt het ensemble willekeurig in de ruimte."
    },
    {
      id: "l23_ex2",
      type: "concept",
      title: "Oefening 2: Het Geheim van Itô's Lemma",
      question: "Waarom heeft de stochastische kettingregel (Itô's Lemma) een extra term met de TWEEDE afgeleide ½ f''(X) σ² dt, die in gewone schoolcalculus ontbreekt?",
      options: [
        "Omdat de kwadratische variatie van Brownse beweging niet nul is: (dB_t)² = dt. De fluctuaties zijn zo heftig dat tweede-orde termen niet verdwijnen in de limiet!",
        "Omdat Itô een wiskundige fout maakte",
        "Omdat tijd gekwadrateerd wordt",
        "Omdat computers afronden"
      ],
      correctIndex: 0,
      explanation: "Fenomenaal! Omdat dB_t schaalt met √dt, levert (√dt)² een eerste-orde tijdsbijdrage dt op. Dit is de hoeksteen van de moderne kwantitatieve financiën en fysische stochastiek."
    },
    {
      id: "l23_ex3",
      type: "dilemma",
      title: "Oefening 3: Itô vs Stratonovich Integratie",
      question: "In de natuurkunde gebruikt men vaak Stratonovich stochastische integralen, terwijl in wiskunde en financiën Itô domineert. Wat is het praktische verschil?",
      options: [
        "Stratonovich evalueert de integrand in het midden van het tijdsinterval [t, t+dt] waardoor de gewone kettingregel behouden blijft; Itô evalueert aan het begin (non-anticipating) waardoor de integraal een martingaal is",
        "Stratonovich werkt alleen in 2D",
        "Itô werkt alleen voor discrete data",
        "Er is geen wiskundig verschil"
      ],
      correctIndex: 0,
      explanation: "Heel diepgaand! Itô kijkt niet in de toekomst (essentieel voor financiële markten), terwijl Stratonovich de symmetrie van fysische processen met gekleurde ruis weerspiegelt."
    }
  ],

  // LEVEL 24: HET THEORETISCHE APEX
  24: [
    {
      id: "l24_ex1",
      type: "concept",
      title: "Oefening 1: De Geometrie van ∇_ℳ Φ op een Manifold",
      question: "In de apex-formule dX_t = ∇_ℳ Φ(X_t) dt + σ(X_t) dB_t^rough in ℋ: wat betekent het dat de gradiënt gedefinieerd is op een Riemannse manifold ℳ?",
      options: [
        "Data leeft niet in een vlakke Euclidische ruimte, maar op een gekromd oppervlak (bv. een bol, torus of energielandschap). De gradiënt ∇_ℳ buigt via de metrische tensor g_ij mee met de kromming van de ruimte langs de geodeten",
        "Dat de gradiënt altijd gelijk is aan nul",
        "Dat het model alleen in 1 dimensie kan werken",
        "Dat het oppervlak platgedrukt moet worden"
      ],
      correctIndex: 0,
      explanation: "Meesterlijk! Op een gekromde manifold is de kortste afstand geen rechte lijn maar een geodeet, berekend via de Riemannse connectie (Levi-Civita)."
    },
    {
      id: "l24_ex2",
      type: "concept",
      title: "Oefening 2: Terry Lyons' Rough Path Theorie (H < 1/2)",
      question: "Waarom faalt klassieke Itô calculus wanneer het stochastische pad ruw is (Hurst exponent H < 1/2), en hoe lost Terry Lyons' theorie van 'Rough Paths' dit op?",
      options: [
        "Bij H < 1/2 divergeert de klassieke kwadratische variatie en is de Itô integraal niet continu in de p-variatie metriek. Terry Lyons breidde het pad uit met 'Signatures' (geïtereerde integralen over tensorruimten) waardoor stochastische differentiaalvergelijkingen weer continu en robuust oplosbaar worden",
        "Het faalt omdat computers te traag zijn",
        "Terry Lyons verving alle ruis door een rechte lijn",
        "H < 1/2 betekent dat de ruis te glad is"
      ],
      correctIndex: 0,
      explanation: "Fenomenaal inzicht op het niveau van de Fields Medal! Terry Lyons bewees dat je hogere-orde algebraïsche structuren (de Signature) aan het pad moet toevoegen om continuïteit te garanderen."
    },
    {
      id: "l24_ex3",
      type: "concept",
      title: "Oefening 3: De Oneindig-Dimensionale Hilbertruimte ℋ",
      question: "Wat betekent het dat de toestand X_t leeft in een oneindig-dimensionale Hilbertruimte ℋ?",
      options: [
        "X_t is geen los getal of eindige tabelrij meer, maar een complete continue functie of oneindig veld (bv. het gehele elektrische potentiaalveld van 100 miljard neuronen tegelijk) waarin afstanden worden gemeten via een inproduct ⟨f, g⟩_ℋ",
        "Dat X_t oneindig groot in waarde is",
        "Dat er oneindig veel fouten in het model zitten",
        "Dat het model alleen denkbeeldig bestaat"
      ],
      correctIndex: 0,
      explanation: "Exact! Hilbertruimten vormen het wiskundige fundament van zowel de kwantummechanica als moderne oneindig-dimensionale functionele data-analyse."
    },
    {
      id: "l24_ex4",
      type: "dilemma",
      title: "Oefening 4: Het Causale Synthese Dilemma",
      question: "Waarom is het toevoegen van causale inferentie (do-operatoren) aan dit oneindig-dimensionale stochastische veld zo revolutionair voor wetenschap en geneeskunde?",
      options: [
        "Omdat louter voorspellen hoe het veld stroomt niet vertelt hoe je het systeem moet bijsturen; causale Hilbert-inferentie modelleert exact hoe actieve manipulatie (bv. diepe hersenstimulatie of klimaatinterventie) de attractorlandschappen herprogrammeert",
        "Omdat het berekeningen sneller maakt",
        "Omdat causale pijlen mooier zijn op grafieken",
        "Omdat toeval daardoor verdwijnt"
      ],
      correctIndex: 0,
      explanation: "Kroon op het meesterschap! Dit verbindt dynamische fysica, stochastische ruis en beleidsinterventie tot één verenigd wiskundig wereldbeeld."
    }
  ]
};
