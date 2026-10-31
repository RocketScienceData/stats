const fs = require('fs');

// Script to update data/levelsData.js quizzes with realistic, subtle statistical traps
// and to update data/exercisesData.js with realistic, subtle statistical traps.

const UPGRADED_QUIZZES = {
  1: {
    question: "Wanneer verkies je de mediaan boven het rekenkundig gemiddelde als centrale locatiemaat?",
    options: [
      "Wanneer de data symmetrisch verdeeld is en minimale schattingsvariantie vereist is",
      "Wanneer er sprake is van een scheve verdeling of extreme uitschieters (robuuste 50%-locatiemaat)",
      "Wanneer de observaties discreet zijn en gemodelleerd worden met een Poisson-verdeling",
      "Nooit, omdat het rekenkundig gemiddelde de som van absolute afwijkingen altijd beter minimaliseert"
    ],
    correctIndex: 1,
    explanation: "Juist! De mediaan is een robuuste maatstaf (breakdown point 50%) die niet beïnvloed wordt door extreme uitschieters of asymmetrie in de staarten."
  },
  2: {
    question: "Wat betekent een Z-score van -1.96 in een normale kansverdeling?",
    options: [
      "De observatie ligt 1.96 meeteenheden onder de mediaan in de oorspronkelijke schaal",
      "De waarde ligt 1.96 standaardafwijkingen onder het populatiegemiddelde (exact 2.5% van de populatie scoort lager)",
      "De cumulatieve overschrijdingskans in de rechterstaart P(Z > -1.96) is exact gelijk aan 2.5%",
      "Het betrouwbaarheidsinterval van de steekproef heeft een breedte van 1.96 standaardfouten"
    ],
    correctIndex: 1,
    explanation: "Uitstekend! De Z-score drukt exact uit hoeveel standaardafwijkingen een observatie boven (+) of onder (-) het gemiddelde ligt. Bij Z = -1.96 ligt 2.5% in de linkerstaart."
  },
  3: {
    question: "Wat gebeurt er met de standaardfout (SE = σ / √N) van het gemiddelde als je de steekproefomvang N verviervoudigt?",
    options: [
      "De SE wordt 4x zo klein, omdat de precisie recht evenredig toeneemt met steekproefomvang N",
      "De SE halveert (wordt 2x zo klein, want √4 = 2)",
      "De SE wordt 16x zo klein, omdat de variantiereductie kwadratisch schaalt met N²",
      "De populatiestandaardafwijking σ halveert eveneens evenredig met de steekproefvergroting"
    ],
    correctIndex: 1,
    explanation: "Exact! Vanwege de wortel in de noemer (√N) levert een 4-voudige steekproefomvang een halvering van de schattingsfout op."
  },
  4: {
    question: "Wat is de juiste frequentistische interpretatie van een berekend 95% betrouwbaarheidsinterval van [10, 20]?",
    options: [
      "Er is a-posteriori 95% kans dat de werkelijke populatieparameter μ binnen dit specifieke interval [10, 20] ligt",
      "Bij herhaaldelijke steekproeven onder identieke condities zal 95% van de op identieke wijze geconstrueerde intervallen de werkelijke populatieparameter bevatten",
      "95% van alle individuele observaties in de doelpopulatie valt tussen de waarden 10 en 20",
      "Als we morgen een nieuwe steekproef trekken, is de kans 95% dat het nieuwe steekproefgemiddelde binnen [10, 20] valt"
    ],
    correctIndex: 1,
    explanation: "Haarscherp! In de frequentistische statistiek is de parameter een vast getal (geen toevalsvariabele). De 95% slaat op de dekkingsgraad van de meetprocedure bij oneindige herhaling."
  },
  5: {
    question: "Wat is de exacte formele definitie van een p-waarde van 0.03 bij een hypothesetoets?",
    options: [
      "De kans dat de nulhypothese H0 waar is bedraagt exact 3% gegeven onze steekproefdata",
      "De kans dat de alternatieve hypothese H1 waar is bedraagt 97%",
      "Gegeven dat de nulhypothese waar is, is de kans om een toetsingsgrootheid te vinden die minstens zo extreem is als de geobserveerde waarde 3%",
      "De kans op een Type II fout (vals negatief) bij het handhaven van de nulhypothese bedraagt 3%"
    ],
    correctIndex: 2,
    explanation: "Briljant! De p-waarde is P(Data of extremer | H0 waar), NIET P(H0 | Data). Het is een conditionele kans op de data onder de aanname van de nulhypothese."
  },
  6: {
    question: "In het model Cijfer = 2.5 + 0.20 × Uren, wat is het verwachte effect als een student 10 uur extra studeert?",
    options: [
      "Het cijfer stijgt met 0.20 punt ongeacht het aantal gestudeerde uren",
      "Het verwachte cijfer stijgt met 2.0 punten (ΔŶ = 10 × 0.20)",
      "Het cijfer wordt minimaal een 4.5, omdat 2.5 de harde ondergrens is voor elke student",
      "De correlatiecoëfficiënt r tussen uren en cijfer stijgt automatisch met 0.20"
    ],
    correctIndex: 1,
    explanation: "Correct! De helling β₁ geeft de verwachte verandering in Y per eenheid verandering in X. Voor ΔX = 10 is de stijging 10 × 0.20 = 2.0 punten."
  },
  7: {
    question: "Wat gebeurt er met de gewone R² als je 5 zuivere toevalsvectoren als extra regressoren toevoegt aan een OLS-model?",
    options: [
      "R² daalt evenredig met het aantal irrelevante voorspellers",
      "R² blijft gegarandeerd gelijk of stijgt een klein beetje, omdat OLS toevalsruis meeneemt in de modelpassing",
      "R² wordt ongedefinieerd omdat toevalsvectoren een singuliere covariantiematrix veroorzaken",
      "De Adjusted R² stijgt mee, omdat de residuele kwadratensom (RSS) altijd omlaag gaat"
    ],
    correctIndex: 1,
    explanation: "Juist! De gewone R² kan wiskundig gezien nooit dalen bij toevoeging van extra variabelen. Daarom gebruiken we Adjusted R², AIC of BIC om te corrigeren voor overbodige modelcomplexiteit."
  },
  8: {
    question: "Wat signaleert een uitwaaierend trompetpatroon in een 'Residuals vs Fitted' spreidingsdiagram?",
    options: [
      "Ernstige multicollineariteit tussen twee of meer verklarende variabelen",
      "Heteroscedasticiteit (niet-constante residuele variantie), waardoor standaardfouten en hypothesetoetsen onbetrouwbaar worden",
      "Structurele kromming in het conditionele verwachtingsgemiddelde van Y",
      "Endogeniteit: correlatie tussen de voorspellers en de residuele storingsterm"
    ],
    correctIndex: 1,
    explanation: "Spot-on! Heteroscedasticiteit schendt de aanname van gelijke foutvariantie. OLS-puntschattingen blijven zuiver, maar standaardfouten en p-waarden zijn ongeldig zonder robuuste Huber-White correctie."
  },
  9: {
    question: "Wat betekent het als de partiële regressiecoëfficiënt β₁ geschat wordt 'gecorrigeerd voor X₂'?",
    options: [
      "Dat de correlatie tussen X₁ en Y kunstmatig op nul is gesteld via orthogonalisatie",
      "Dat we kijken naar de associatie tussen X₁ en Y voor observaties met een identieke waarde op X₂ (ceteris paribus)",
      "Dat X₁ en X₂ met elkaar vermenigvuldigd zijn als interactieterm in de ontwerpmatrix",
      "Dat het causale pad van X₂ naar Y volledig geëlimineerd is via instrumentele variabelen"
    ],
    correctIndex: 1,
    explanation: "Exact! Meervoudige regressie isoleert het unieke partiële effect van X₁ op Y terwijl alle overige variabelen in het model constant worden gehouden."
  },
  10: {
    question: "Wat is het voornaamste gevaar van ernstige multicollineariteit (VIF > 15) tussen verklarende variabelen?",
    options: [
      "De OLS-puntschattingen worden structureel vertekend en verliezen hun consistentie",
      "Standaardfouten worden gigantisch opgeblazen, waardoor betrouwbaarheidsintervallen breed worden en afzonderlijke t-toetsen niet-significant lijken",
      "Het totale verklaringspercentage R² en de globale F-toets van het model storten in naar nul",
      "De residuen vertonen direct sterke seriële autocorrelatie"
    ],
    correctIndex: 1,
    explanation: "Meesterlijk! Collineariteit maakt puntschattingen uiterst instabiel en blaast de standaardfouten op (VIF), hoewel het model als geheel vaak wel een hoge en significante R² behoudt."
  },
  11: {
    question: "Wat is de resulterende Odds Ratio (OR) wanneer de logistische regressiecoëfficiënt van een predictor β = 0 is?",
    options: [
      "OR = 0 (de gebeurtenis kan onder geen enkele voorwaarde plaatsvinden)",
      "OR = 1.0 (geen effect op de kansverhouding, want e⁰ = 1)",
      "OR = 0.5 (gelijke kansen voor beide vergelijkingsgroepen)",
      "OR is mathematisch onbepaald omdat men niet kan delen door de exponent van nul"
    ],
    correctIndex: 1,
    explanation: "Juist! Omdat logistische regressie de log-odds modelleert, is de odds ratio e^β. Voor β = 0 geldt e⁰ = 1, wat duidt op volledige afwezigheid van een effect."
  },
  12: {
    question: "Wat is het unieke voordeel van Lasso (L₁) regularisatie boven Ridge (L₂) regularisatie?",
    options: [
      "Lasso levert altijd een gesloten analytische OLS-oplossing zonder numerieke optimalisatie",
      "Lasso zet coëfficiënten van minder relevante variabelen exact op nul (automatische feature selectie dankzij de hoekige L₁-norm)",
      "Lasso is wiskundig immuun voor multicollineariteit wanneer variabelen perfect gecorreleerd zijn",
      "Lasso minimaliseert de conditionele verwachting zonder afhankelijkheid van de strafparameter λ"
    ],
    correctIndex: 1,
    explanation: "Uitstekend! De ruitvormige L₁-contouren raken de OLS-ellipsen op de assen, waardoor irrelevante coëfficiënten exact nul worden. Ridge krimpt ze naar nul maar behoudt alle variabelen."
  },
  13: {
    question: "Wat is het grootste risico wanneer hiërarchisch geclusterde data geanalyseerd wordt met standaard OLS-regressie?",
    options: [
      "OLS overschat de tussen-cluster variantie, waardoor geschatte hellingen structureel te steil worden",
      "Standaardfouten worden dramatisch te klein geschat door schending van de onafhankelijkheidsaanname, wat leidt tot massale Type I fouten (schijnprecisie)",
      "De Intraclass Correlatiecoëfficiënt (ICC) wordt wiskundig negatief",
      "De schatting faalt omdat OLS vereist dat elk cluster exact hetzelfde aantal observaties telt"
    ],
    correctIndex: 1,
    explanation: "Helemaal goed! OLS behandelt afhankelijke observaties binnen clusters als onafhankelijke bewijspunten (pseudoreplicatie), waardoor standaardfouten te klein worden en toeval als significant wordt bestempeld."
  },
  14: {
    question: "Wat gebeurt er dankzij 'shrinkage' (partial pooling) met een cluster of school waar toevallig slechts 2 observaties zijn gemeten?",
    options: [
      "Het cluster wordt behandeld als een extreme uitschieter en krijgt een afzonderlijke dummy-parameter",
      "Haar geschatte willekeurige intercept wordt sterk richting het overkoepelende populatiegemiddelde (grand mean) getrokken",
      "De residuele variantie binnen dat specifieke cluster wordt gelijkgesteld aan nul",
      "Haar geschatte helling wordt geforceerd om exact de maximale fixed-effect waarde aan te nemen"
    ],
    correctIndex: 1,
    explanation: "Exact! Bij kleine steekproeven is de empirische data lawaaierig; het mixed model vertrouwt meer op de overkoepelende populatieverdeling en 'krimpt' de schatting naar het centrum."
  },
  15: {
    question: "Wat betekent het in een Random Slope model als de variantie van de helling σ²_u1 statistisch significant groter is dan nul?",
    options: [
      "Dat het verband tussen de predictor en de uitkomst puur door heteroscedasticiteit wordt gedreven",
      "Dat het effect van de predictor (de veranderingssnelheid) niet voor elk cluster gelijk is, maar betekenisvol varieert tussen groepen of individuen",
      "Dat het model overgespecificeerd is en gereduceerd moet worden tot een Random Intercept model",
      "Dat de correlatie tussen het intercept en de slope per definitie gelijk is aan nul"
    ],
    correctIndex: 1,
    explanation: "Juist! Een significante σ²_u1 toont aan dat clusters niet alleen een ander startniveau hebben (intercept), maar ook fundamenteel verschillen in hun reactiesnelheid of groeipatroon (helling)."
  },
  16: {
    question: "Wanneer stap je over van een Linear Mixed Model (LMM) naar een Generalized Linear Mixed Model (GLMM)?",
    options: [
      "Wanneer het aantal niveaus in de hiërarchie toeneemt van twee naar drie of meer niveaus",
      "Wanneer de geclusterde responsvariabele niet-Gaussisch is (zoals binaire uitkomsten, odds of Poisson-tellingen) en een linkfunctie vereist",
      "Wanneer de predictoren onderling gecorreleerd zijn en de VIF groter is dan 10",
      "Wanneer men Bayesiaanse MCMC-schatting verkiest boven Restricted Maximum Likelihood (REML)"
    ],
    correctIndex: 1,
    explanation: "Spot-on! GLMM combineert de flexibiliteit van GLM (voor binaire of teldata via linkfuncties zoals logit of log) met de clustering van mixed models (random effects)."
  },
  17: {
    question: "Wat gebeurt er in een Generalized Additive Model (GAM) als de smoothing parameter λ naar oneindig nadert (λ → ∞)?",
    options: [
      "De splines interpoleren elk individueel datapunt exact (extreme overfitting)",
      "De strafterm op kromming domineert volledig, waardoor de geschatte functie convergeert naar een rechte lineaire lijn",
      "De effectieve vrijheidsgraden (EDF) stijgen naar het maximale aantal basisknopen",
      "De gegeneraliseerde kruisvalidatiescore (GCV) daalt altijd naar exact nul"
    ],
    correctIndex: 1,
    explanation: "Juist! De smoothing penalty bestraft de geïntegreerde kwadratische tweede afgeleide (kromming). Als λ → ∞ wordt elke kromming oneindig zwaar bestraft en blijft er een gewone rechte lijn over."
  },
  18: {
    question: "Wat betekent een Hazard Ratio van HR = 0.70 voor een nieuw medicijn in een Cox Proportional Hazards model?",
    options: [
      "Dat de mediane overlevingstijd van behandelde patiënten met exact 70% toeneemt",
      "Dat op elk moment tijdens de follow-up het risico op het optreden van het event 30% lager is in de behandelde groep dan in de controlegroep",
      "Dat na afloop van de follow-up periode 70% van de behandelde patiënten nog in leven is",
      "Dat de cumulatieve overlevingscurve een lineaire daling vertoont met een constante helling van 0.70"
    ],
    correctIndex: 1,
    explanation: "Uitstekend! De hazard ratio is de verhouding van de instantane gebeurteniskansen: HR = 0.70 betekent dat behandelde patiënten op elk tijdstip 70% van het risico van de controlegroep ervaren (een risicoreductie van 30%)."
  },
  19: {
    question: "Wat is het fundamentele conceptuele verschil tussen een frequentistisch 95% betrouwbaarheidsinterval en een Bayesiaans 95% Credible Interval?",
    options: [
      "Frequentistische intervallen gebruiken altijd een uniforme prior, terwijl Bayesiaanse intervallen Gaussiaanse priors vereisen",
      "In een Bayesiaans Credible Interval is er conditioneel op de data en de prior daadwerkelijk 95% kans dat de parameter binnen de grenzen ligt; in de frequentistische leer is de parameter vast en dekt 95% van denkbeeldige herhaalde intervallen de parameter",
      "Frequentistische intervallen corrigeren automatisch voor meervoudig toetsen, terwijl Bayesiaanse intervallen de posterior opblazen",
      "Een Bayesiaans Highest Posterior Density (HPD) interval is wiskundig altijd identiek aan het frequentistische Wald-interval"
    ],
    correctIndex: 1,
    explanation: "Briljant! In Bayes is de parameter een stochastische variabele met een posterior verdeling, waardoor je wél directe kansuitspraken mag doen over parameterwaarden."
  },
  20: {
    question: "Wat duidt op gezonde MCMC-convergentie in een traceplot en Gelman-Rubin diagnostiek?",
    options: [
      "Ketenwaarden die snel convergeren naar één constante horizontale lijn zonder enige oscillatie",
      "Een 'harige rups' waarin meerdere onafhankelijke ketens homogeen door elkaar heen mengen met een Gelman-Rubin R̂ dicht bij 1.00 (R̂ < 1.05)",
      "Een periodieke sinusgolf waarin de keten systematisch de prior en de likelihood afwisselt",
      "Een acceptatieratio van exact 100% bij Metropolis-Hastings voorstellen"
    ],
    correctIndex: 1,
    explanation: "Haarscherp! Goede MCMC-ketens verkennen de gehele posterior doelgericht. Een 'harige rups' en R̂ ≈ 1.00 bewijzen dat de ketens stationair zijn en dezelfde verdeling samplen."
  },
  21: {
    question: "Wat gebeurt er met de predictieve onzekerheid van een Gaussiaans Proces (zonder observatieruis, σ_n = 0) op de exacte locatie van een waargenomen datapunt?",
    options: [
      "De voorspelde variantie convergeert naar de marginale prior variantie σ_f²",
      "De residuele onzekerheid krimpt exact naar nul, waardoor de functie strict door het geobserveerde punt interpoleert",
      "De lengteschaal ℓ daalt lokaal naar nul, waardoor de covariantiekernel instort",
      "De onzekerheid wordt gelijk aan het conditionele gemiddelde van de RBF-kernel"
    ],
    correctIndex: 1,
    explanation: "Exact! Zonder meetruis is de observatie een absolute zekerheid. De conditionele multivariate normale verdeling heeft op dat punt variantie 0 en de GP-onzekerheidsband krimpt tot nul."
  },
  22: {
    question: "Wat is het doel van Judea Pearl's do-operator do(X = x) in een causaal Directed Acyclic Graph (DAG) model?",
    options: [
      "Het conditioneert op alle colliders en tussenliggende variabelen om confounding te minimaliseren",
      "Het simuleert een actieve fysieke interventie door alle inkomende causale pijlen naar X door te knippen, waarmee het zuivere effect op Y wordt geïsoleerd van confounders",
      "Het transformeert niet-lineaire afhankelijkheden naar lineaire correlaties volgens de back-door stelling",
      "Het berekent de inverse kansgewichten van een propensity score model zonder grafentheorie"
    ],
    correctIndex: 1,
    explanation: "Meesterlijk! De do-operator scheidt associatie P(Y|X) van echte interventie P(Y|do(X)) door het 'graph surgery' principe: knip de pijlen door die X bepalen en meet het onvervalste effect."
  },
  23: {
    question: "Wat is volgens Itô calculus de doorslaggevende reden dat we de term ½ f''(X_t) σ² dt meenemen in Itô's Lemma?",
    options: [
      "Omdat de verwachting van een Brownse beweging met de tijd kwadratisch divergeert",
      "Omdat de kwadratische variatie van een Brownse beweging niet nul is, maar deterministisch gelijk is aan dt ((dB_t)² = dt), waardoor tweede-orde Taylor-termen niet verwaarloosbaar zijn in de limiet",
      "Omdat Itô calculus alleen toepasbaar is op niet-continue martingalen met sprongprocessen",
      "Omdat de Stratonovich integraal anders een niet-nul verwachtingsdrift zou opleveren in de driftterm"
    ],
    correctIndex: 1,
    explanation: "Fenomenaal! Omdat (dB_t)² = dt van dezelfde orde is als dt, blijft de tweede afgeleide in de Taylor-expansie behouden. Dit is het hart van stochastische calculus."
  },
  24: {
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
};

// Apply to data/levelsData.js
let levelsCode = fs.readFileSync('data/levelsData.js', 'utf8');

// Replace quiz blocks in levelsData.js
for (let lvl = 1; lvl <= 24; lvl++) {
  const qData = UPGRADED_QUIZZES[lvl];
  const regex = new RegExp(`(id:\\s*${lvl},[\\s\\S]*?quiz:\\s*\\{)[\\s\\S]*?(\\}\\s*\\n\\s*\\})`, 'm');
  const replacement = `$1\n      question: ${JSON.stringify(qData.question)},\n      options: ${JSON.stringify(qData.options, null, 8).replace(/^/gm, '      ').trim()},\n      correctIndex: ${qData.correctIndex},\n      explanation: ${JSON.stringify(qData.explanation)}\n    $2`;
  
  if (regex.test(levelsCode)) {
    levelsCode = levelsCode.replace(regex, replacement);
  } else {
    console.warn(`Could not match quiz for level ${lvl}`);
  }
}

fs.writeFileSync('data/levelsData.js', levelsCode, 'utf8');
console.log('Successfully updated all 24 quizzes in data/levelsData.js!');
