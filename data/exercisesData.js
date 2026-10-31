// Statistiek Leerplatform - Uitgebreide Oefeningenbank (Levels 1 t/m 24)
// Biedt 3 tot 4 diepgaande interactieve oefeningen per level:
// - Concept & Intuïtie
// - Praktijk Dilemma & Besluitvorming
// - De Valkuil-Detector
// - Data & Parameter Schatting
// Alle antwoordopties zijn wetenschappelijk getoetst, qua tekstlengte uitgebalanceerd en de correcte indices zijn gelijkmatig geshuffeld over A, B, C en D.

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
      "explanation": "Juist! Wanneer Gemiddelde > Mediaan, trekken hoge uitschieters (de topinkomens) het rekenkundig gemiddelde naar rechts. De mediaan geeft de zuivere middelste burger weer."
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
      "explanation": "Uitstekend besluit! In latency- en prestatiemetingen is het gemiddelde misleidend. Men rapporteert altijd mediaan (typische ervaring) én p95 of p99 (tail latency)."
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
      "explanation": "Spot-on! Eén foute invoer (bv. leeftijd 999 ipv 99) ruïneert de Range en SD compleet, maar laat de IQR volkomen koud."
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
      "explanation": "Exact! Z = (90 - 70) / 10 = +2.0. Binnen ±2 SD ligt 95.4% van de verdeling. In de twee staarten resteert 4.6% (2.3% links en 2.3% rechts). Dus lager dan Z = +2.0 scoort 100% - 2.3% = 97.7%."
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
      "explanation": "Spot-on! De normale verdeling mag je NOOIT blind aannemen. Veel data in de echte wereld (volgers, inkomen, webverkeer) volgt zware machtswetten (power laws)."
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
      "explanation": "Briljant inzicht in Six Sigma kwaliteitsbeheersing! Door de variantie σ te verkleinen wordt de curve smaller en steiler, waardoor de staarten buiten de grenzen verdwijnen."
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
      "explanation": "Juist! Dit is het wonder van de CLT: ongeacht hoe de oorspronkelijke data verdeeld is (zelfs kurkdroog uniform), de som of het gemiddelde van voldoende onafhankelijke waarnemingen wordt altijd normaal verdeeld."
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
      "explanation": "Precies! Dit is misschien wel de meest gemaakte fout in toegepaste statistiek. De CLT verandert jouw ruwe data NIET. Jouw data blijft scheef."
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
      "explanation": "Spot-on! Om een standaardfout door 2 te delen, moet je steekproefomvang met 2² = 4 worden vermenigvuldigd. De wortelwet eist steeds meer data voor marginale precisiewinst."
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
      "explanation": "Precies! Optie B is de klassieke frequentistische denkfout. Het werkelijke populatiepercentage is een vast getal (geen toevalsvariabele). Het ligt erin of niet (kans is 0 of 1). De 95% slaat op de betrouwbaarheid van de meetprocedure."
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
      "explanation": "Groot inzicht! Een klassieke beginnersfout. Het betrouwbaarheidsinterval voor het VERSCHIL tussen twee gemiddelden gebruikt de kwadratische som van de standaardfouten (√(SE1² + SE2²)), wat kleiner is dan SE1 + SE2."
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
      "explanation": "Precies! Zekerheid heeft een prijs. Als je 99% zeker wilt zijn dat de waarheid in je interval zit, moet je een groter bereik accepteren."
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
      "explanation": "Cruciaal onderscheid! Statistische significantie (p-waarde) zegt alleen of een effect waarschijnlijk niet op toeval berust. Praktische relevantie (effectgrootte) zegt of het effect er in de echte wereld toe doet."
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
      "explanation": "Juist! Type I fout = Vals Alarm (je ziet een effect/gevaar dat er niet is). Type II fout = Gemist Signaal (er is wél gevaar/effect, maar je systeem grijpt niet in)."
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
      "explanation": "Spot-on! De p-waarde berekent hoe onwaarschijnlijk de DATA is ALS de nulhypothese waar zou zijn. Het vertelt je niets over hoe waarschijnlijk de HYPOTHESE zelf is."
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
      "explanation": "Juist! Vul 4 in voor Ervaring: 50.000 + (12.500 × 4) = 50.000 + 50.000 = € 100.000. Het intercept is de startwaarde bij 0 jaar, de helling is de jaarlijkse groei."
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
      "explanation": "Exact! Bij de gewone som Σ e_i heffen positieve en negatieve fouten elkaar op (elke lijn door het zwaartepunt levert Σ e_i = 0). De absolute som Σ |e_i| (L1 / LAD-regressie) heft niet op, maar is bij het nulpunt niet differentieerbaar en mist een gesloten matrixoplossing. De kwadratensom Σ e_i² (OLS / L2) is overal continu differentieerbaar, levert de analytische schatter (XᵀX)⁻¹Xᵀy en is volgens Gauss-Markov de beste lineaire zuivere schatter (BLUE)."
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
      "explanation": "Cruciaal! Correlatie impliceert NOOIT causaliteit. Een verborgen gemeenschappelijke oorzaak (confounder Z: hitte/zomer) stuurt zowel X als Y aan."
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
      "explanation": "Juist! Wiskundig gezien kan OLS een extra variabele altijd de coëfficiënt 0 geven als hij niets toevoegt. In de praktijk pikt OLS altijd een beetje toevalsruis op, waardoor gewone R² altijd kunstmatig stijgt."
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
      "explanation": "Uitstekend! De daling in Adjusted R² van 0.73 naar 0.69 bewijst onomstotelijk dat de 12 extra variabelen niets toevoegen behalve ruis en overfitting. Kies het compacte, parsimonieuze Model A."
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
      "explanation": "Exact! De F-toets toetst het MODEL ALS GEHEEL tegen een model met alleen een intercept. Als F significant is (p < 0.05), voegt minstens één van de voorspellers echte informatie toe."
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
      "explanation": "Heel belangrijk! Onder heteroscedasticiteit blijven de coëfficiënten β̂ nog steeds onvertekend (unbiased), maar de standaardfouten zijn fout berekend. Je p-waarden zijn daardoor waardeloos."
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
      "explanation": "Precies! Een kromming in de residuen toont onmiskenbaar aan dat een rechte lijn een verkeerd model is voor deze data. Pas de modelstructuur aan met polynomen, logs of splines."
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
      "explanation": "Juist! Als residuen boven de diagonaallijn uitstijgen aan de rechterkant, zijn de werkelijke observaties extremer dan de normale verdeling voorspelt. Je hebt te maken met een rechtsscheve verdeling of extreme positieve outliers."
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
      "explanation": "Precies! Simpson's paradox ontstaat wanneer een derde factor (confounder) over het hoofd wordt gezien die de groepsindeling en uitkomst tegelijk domineert."
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
      "explanation": "Briljant inzicht! Faculteit was de confounder. Zodra je faculteit toevoegt aan de regressie (conditioneert op afdeling), verdwijnt de schijnbare discriminatie tegen vrouwen direct."
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
      "explanation": "Exact! Het woord 'partieel' in partiële regressiecoëfficiënt betekent letterlijk: het effect van X1 wanneer alle andere voorspellers (hier: ervaring) constant worden gehouden."
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
      "explanation": "Juist! VIF meet hoeveel de variantie van een geschatte coëfficiënt wordt opgeblazen door collineariteit met andere variabelen. Bij VIF = 10 is je standaardfout meer dan 3x zo breed als nodig!"
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
      "explanation": "Meesterlijk! Dit is het klassieke handtekening-patroon van ernstige collineariteit: het team als geheel presteert uitstekend (hoge F en R²), maar niemand krijgt individueel de credits omdat ze overlappende taken doen."
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
      "explanation": "Subtiel maar essentieel! Multicollineariteit schaadt zuiver de interpretatie van individuele coëfficiënten, NIET de totale voorspellende kracht van het model (mits de correlatie tussen de voorspellers behouden blijft)."
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
      "explanation": "Juist! In logistische regressie is de uitkomst gemodelleerd als ln(odds). Om terug te rekenen naar de odds ratio neem je de e-macht: e^0.693 ≈ 2.0. Rokers hebben 2x zo hoge odds."
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
      "explanation": "Levensreddend besluit! De 0.50 drempel is willekeurig. Bij fatale ziektes verlaag je de drempel om maximale Sensitiviteit (Recall) te halen: liever 10 onnodige onderzoeken dan 1 gemiste tumor."
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
      "explanation": "Klassieke data science valkuil! De zogeheten 'Accuracy Paradox'. Bij sterk scheve klassen zegt gewone accuratesse niets. Kijk naar Recall, Precision en de PR-curve."
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
      "explanation": "Meesterlijk geometrisch inzicht! De diamantvorm van L1 heeft scherpe punten op de assen. De ellipsoïde foutcontouren raken als eerste een punt, waardoor overtollige parameters exact op 0 worden gezet."
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
      "explanation": "Juist! In high-dimensional data (P >> N) met spaarzame ware signalen (sparse ground truth) is Lasso ongeëvenaard omdat het niet-relevante genen eruit filtert."
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
      "explanation": "Exact! Als de straf λ oneindig zwaar weegt, wordt elke coëfficiënt 0. Je model heeft dan 0 variantie (voorspelt altijd hetzelfde), maar maximale bias. Dit toont de kern van de bias-variance tradeoff."
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
      "explanation": "Juist! ICC = σ²_between / (σ²_between + σ²_within) = 4 / (4 + 16) = 0.20. Maar liefst 20% van alle verschillen in cijfers wordt verklaard door de school waar de leerling op zit!"
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
      "explanation": "Spot-on! Dit heet 'pseudoreplicatie'. Metingen binnen dezelfde patiënt lijken sterk op elkaar. Gewone regressie overschat de effectieve steekproefgrootte enorm en rapporteert schijnzekerheid."
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
      "explanation": "Zeer verstandig! Als de ICC verwaarloosbaar klein is (< 0.05) en de groepsgroottes klein zijn, is de clusterbias minimaal en levert OLS vrijwel identieke resultaten op."
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
      "explanation": "Exact! β1 is de algemene fixed slope (bijvoorbeeld het landelijke effect van studietijd). u_0j is het unieke random intercept van school j (hoeveel scoort school j gemiddeld hoger of lager dan het landelijk gemiddelde β0)."
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
      "explanation": "Meesterlijk! Dit is de genialiteit van 'Shrinkage' (Empirical Bayes). Met slechts 2 leerlingen is de onzekerheid enorm. Het model 'leent kracht' van de rest van de dataset en trekt de schatting naar het midden."
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
      "explanation": "Prachtig statistisch inzicht! Het zogeheten 'dummy-kerkhof'. 199 dummies kosten 199 parameters en maken het onmogelijk om ziekenhuiseigenschappen (zoals academisch vs streekziekenhuis) te onderzoeken."
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
      "explanation": "Juist! Bij Random Slopes reageert niet elk individu hetzelfde op tijd of behandeling. De lijnen lopen niet meer parallel, maar waaieren uit of kruisen elkaar."
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
      "explanation": "Spot-on! Een negatieve correlatie tussen startniveau en groei/herstel is een bekend biologisch fenomeen: patiënten met de meeste schade hebben de meeste ruimte voor spectaculaire verbetering (ceiling effect)."
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
      "explanation": "Cruciaal voordeel van mixed models! RM-ANOVA gooit data weg zodra 1 bezoek mist (enorme vermindering van power en risico op bias). Mixed models gebruiken elk beschikbaar datapunt."
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
      "explanation": "Uitstekend! Teldata is discreet, altijd ≥ 0 en vertoont vaak scheefheid. De Poisson/Negatief-Binomiaal linkfunctie garandeert positieve voorspellingen en modelleert de geclusterde variantie via random effects."
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
      "explanation": "Juist! e^-0.85 = 0.427. Dat betekent dat de odds op een infectie afnemen tot 43% van het oorspronkelijke niveau (een reductie van 57%). In GLMM zijn effecten 'cluster-specifiek' (conditioneel)."
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
      "explanation": "Spot-on! Poisson veronderstelt Mean = Variance. In de praktijk is de variantie vaak veel groter (overdispersie). Een Negatief-Binomiaal model heeft een extra parameter om deze extra spreiding op te vangen."
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
      "explanation": "Exact! GAMs bouwen gladde curven uit een set wiskundige basisfuncties. Een smoothing parameter bestraft te scherpe bochten, waardoor de curve data-gestuurd maar vloeiend blijft."
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
      "explanation": "Haarscherp inzicht! edf = 1 staat voor een zuiver lineair verband. Hoe hoger de edf (bv. 4 of 8), hoe meer bochten en golven de relatie vertoont. Bij edf ≈ 1 volstaat een gewone rechte lijn!"
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
      "explanation": "Juist! Zonder straf (λ = 0) heeft het model vrij spel om zo wild mogelijk te kronkelen en elk ruispunt te raken. De smoothing penalty is essentieel om overmatig wiebelen te voorkomen."
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
      "explanation": "Spot-on! Dit heet 'rechtscensurering'. Deze patiënten leveren waardevol bewijs dat ze minstens 5 jaar overleven. Als je ze weglaat, houd je alleen patiënten over die snel sterven en onderschat je de overleving enorm."
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
      "explanation": "Juist! HR = 0.60 betekent dat het momentane risico 60% is van de controlegroep, wat neerkomt op een risicoreductie van 1 - 0.60 = 40%."
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
      "explanation": "Meesterlijk! Als curven kruisen, is de hazard ratio tijd-afhankelijk (eerst < 1, later > 1). Het basismodel van Cox veronderstelt dat het relatieve risico constant is over de gehele tijdsduur."
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
      "explanation": "De hoeksteen van alle moderne wetenschap! Je begint met bestaande kennis (prior), confronteert deze met empirisch bewijs (likelihood), en actualiseert je wereldbeeld (posterior)."
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
      "explanation": "Geruststellende wetmatigheid (Bernstein-von Mises theorema)! 'Data overwint de prior'. Tenzij je prior letterlijk een kans van 0 toekent aan een waarde, zal voldoende data de prior altijd overstemmen."
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
      "explanation": "Eindelijk intuïtief! In frequentisme is de parameter een vast getal en is het interval willekeurig. In Bayes is de data vast en is de parameter stochastisch, waardoor je wél directe kansuitspraken mag doen."
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
      "explanation": "De revolutie van MCMC! De noemer (evidence) is onberekenbaar in hoge dimensies. MCMC omzeilt de noemer briljant door alleen de relatieve verhoudingen van de teller te verkennen."
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
      "explanation": "Juist! R̂ vergelijkt de variantie tussen de ketens met de variantie binnen de ketens. Als R̂ ≈ 1.00 lopen alle ketens perfect synchroon door hetzelfde posterior landschap."
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
      "explanation": "Briljante fysica in de statistiek! HMC gebruikt de gradiënt (helling) van de posterior om een virtueel deeltje vaart te geven. Daardoor verplaatst het zich pijlsnel naar gebieden met hoge waarschijnlijkheid."
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
      "explanation": "Meesterlijk! Een GP is 'een verdeling over functies'. Elk eindig aantal punten dat je kiest op die functie volgt gezamenlijk een multivariate normale verdeling."
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
      "explanation": "Exact! De lengteschaal ℓ bepaalt hoe snel de correlatie tussen twee punten afneemt naarmate ze verder uit elkaar liggen. Grote ℓ = punten blijven lang gecorreleerd = zeer gladde, trage curve."
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
      "explanation": "De kracht van onzekerheid! Met een GP weet je niet alleen wát je verwacht, maar ook wáár je nog niets weet. De acquisitiefunctie (bv. Expected Improvement) vertelt je precies welk volgend experiment het meeste oplevert."
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
      "explanation": "Briljant causaal inzicht! Dit scheidt passieve data mining van echte beleidsinterventie. Als de haan kraait en de zon komt op, is P(Zon | Haan) hoog, maar P(Zon | do(Haan = stil)) blijft exact even hoog!"
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
      "explanation": "Spot-on! Dit is Berkson's bias / collider stratification bias. Het conditioneren op een gemeenschappelijk gevolg (collider) koppelt twee onafhankelijke oorzaken kunstmatig aan elkaar."
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
      "explanation": "Statistische magie op topniveau! Door een complete kansverdeling P af te beelden op een enkel element μ_P in een Hilbertruimte, kun je verdelingen met elkaar vergelijken en tweesteekproeftoetsen uitvoeren zonder aannames over hun parametrische vorm."
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
      "explanation": "Juist! Drift μ dt stuurt het systeem gemiddeld een bepaalde kant op; diffusie σ dB_t voegt continue, niet-differentieerbare Gaussische ruis toe."
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
      "explanation": "Fenomenaal diep inzicht! In gewone calculus is (dt)² verwaarloosbaar klein. Maar voor Brownse beweging is de kwadratische variatie (dB_t)² = dt van dezelfde orde als dt, waardoor de tweede afgeleide overleeft."
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
      "explanation": "Exact! Itô kijkt niet vooruit (non-anticipating), wat cruciaal is in financiën en statistische schatting omdat het de martingaaleigenschap behoudt. Stratonovich gehoorzaamt de gewone kettingregel en geniet de voorkeur in de fysica."
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
      "explanation": "Meesterlijk! Echte complexe systemen (hersengolven, biochemische vouwing, relativistische ruimtetijd) leven op gekromde oppervlakken. De Riemannse gradiënt respecteert de intrinsieke kromming van de data."
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
      "explanation": "Pinnacle van moderne wiskunde! Terry Lyons ontdekte dat ruwe paden (p > 2) niet als losse coördinaten gezien moeten worden, maar vergezeld moeten worden van hun oppervlakte-integralen (signatures). Dit maakte Lyons wereldberoemd."
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
      "explanation": "Pure grootsheid! In Hilbertruimten representeert één enkel punt X_t een gehele functie (zoals een continu neuraal activiteitsveld of een kwantumgolfvergelijking). Je modelleert velden in plaats van losse getallen."
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
      "explanation": "Het Ultieme Apex Meesterschap! Weten hoe het veld stroomt is passieve observatie. Begrijpen hoe een gerichte ingreep do(X) het veld en de attractors fundamenteel transformeert, is de ultieme macht van de causale stochastische wetenschap. Gefeliciteerd met het bereiken van de absolute top!"
    }
  ]
};
