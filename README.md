# 🌌 Statistical Journey: Van Basis tot Level 24 Apex

Een adaptieve online leeromgeving gericht op **statistische intuïtie, modelbegrip en de complete reis** — van beschrijvende statistiek en mixed models tot:

$$\mathbf{dX_t = \nabla_{\mathcal{M}} \Phi(X_t) dt + \sigma(X_t) d\mathbf{B}_t^{\text{rough}} \quad \text{in } \mathcal{H}}$$
*Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces*

---

## 🚀 Direct Starten

```bash
python3 serve.py
```
*Of open [index.html](file:///Users/bert/statistiek/index.html) direct in je browser.*

---

## 🌐 Meertaligheid (Multilingual i18n)

Het platform ondersteunt volledige meertaligheid (**Nederlands 🇳🇱 & Engels 🇬🇧**):
* **Direct schakelen**: Wissel met één klik tussen Nederlands en Engels via de knoppen `🇳🇱 NL` / `🇬🇧 EN` in de bovenbalk.
* **Geheugen**: Je taalkeuze wordt automatisch onthouden in `localStorage` (`statistiek_lang`).
* **Vertaalde componenten**:
  - Landingspagina (Hero, Waarde-propositie, Roadmap fases, Features, FAQ, CTA's).
  - Volledige navigatiebalk, voortgangsknoppen, status en XP.
  - Alle 24 level-titels, badges, fases en mentor-begeleiding.
  - Adaptieve Niveau-Scan en Oefen-Arena interface.
  - Apex Level 24 Certificaat.
* **GA4 Event**: Veranderingen van taal worden gelogd via het event `language_change`.

---

## 🌟 Moderne, Conversiegerichte Landingspagina

Het platform beschikt over een moderne landingspagina en een naadloze overgang naar de interactieve Cursus Studio:
* **Hero Banner**: Duidelijke waardepropositie (*"100% Statistische Intuïtie • 0 Regels Codeerwerk • Van Basis tot Apex"*).
* **Live Statistieken & Counters**: 24 Levels, 80+ Interactieve Vragen, 24 Simulators, 0 Regels Code.
* **Visuele 4-Fasen Roadmap**: Overzicht van alle fasen met directe 'quick-jump' knoppen naar elk gewenst niveau (inclusief directe sprong naar de **Mixed Models Sweet Spot Level 13**).
* **Waarom Deze Aanpak Werkt**: Feature cards over de adaptieve scan, live labs, de oefen-arena en het apex certificaat.
* **Veelgestelde Vragen (FAQ)**: Heldere antwoorden op vragen over voorkennis, programmeertaal en certificering.
* **Tab-Switch**: Bovenin de navigatiebalk schakel je direct tussen `🏠 Overzicht` en `🔬 Cursus Studio`.

---

## 🔍 Volledige SEO-Optimalisatie

De webapplicatie is geoptimaliseerd voor zoekmachines (Google, Bing e.a.):
* **Meta Tags**: Semantische `<title>`, `<meta name="description">`, trefwoorden, author, robots (`index, follow`).
* **Meertalige hreflang**: `<link rel="alternate" hreflang="nl">`, `<link rel="alternate" hreflang="en">`, en `x-default`.
* **Open Graph (Social Sharing)**: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:locale` (`nl_NL` en `en_US`).
* **Twitter Cards**: `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`.
* **Gestructureerde Data (JSON-LD Schema.org)**:
  - `@type: Course`: Met volledige syllabus, leerdoelen, educationalLevel en gratis toegankelijkheid.
  - `@type: WebApplication`: Als educatieve webapplicatie.
  - `@type: FAQPage`: Rijke FAQ schema voor Google Rich Search Snippets.
* **Crawlbaarheid**: `robots.txt` en `sitemap.xml` aanwezig in de hoofdmap.

---

## 🧠 Adaptieve Intake & Statistische Reis

In plaats van handmatig een model te kiezen, beschikt het platform over een **Adaptieve Statistische Intake ("Hoe goed ben je?")**:
1. **10 Diagnostische Scenario-Vragen**: Toetst je intuïtie over uitschieters, overbodige parameters in regressie, cluster-correlatie (ICC), random effects en stochastische paden.
2. **Competentie Profilering**: Berekent je niveau (*Beginner: Fundamenten*, *Gevorderd: Regressie & Diagnostiek*, *Expert: Mixed Models & Longitudinaal*, of *Theoretisch Meester*).
3. **Persoonlijke Reisbegeleider**: Beveelt je optimale startpunt aan en biedt in elk level dynamische hints en waarschuwingen voor specifieke valkuilen.

---

## 📈 Diepe Google Analytics Integratie (G-3GEEP4QKQX)

Het platform meet elke leerstap automatisch en anoniem door via aangepaste GA4 events:
* `level_view`: wanneer een gebruiker een level opent (incl. level id, titel en fase).
* `level_completed`: bij het voltooien van alle oefeningen van een level.
* `exercise_answered`: per beantwoorde oefening (goed/fout, verdiende XP).
* `adaptive_scan_start` & `adaptive_scan_step` & `adaptive_scan_completed`: registratie van de diagnostische intake en berekend competentieniveau.
* `arena_question_answered`: prestaties en streak in de Oefen-Arena.
* `simulation_slider_change`: ge-throttlede tracking van interacties met de simulatie-schuifregelaars.
* `language_change`: wisselen tussen `nl` en `en`.
* `view_mode_change`: wisselen tussen `landing` en `studio`.
* `certificate_viewed` & `certificate_printed`: bij het behalen van Level 24 Apex Meesterschap.

---

## 🎯 83 Oefeningen, Dilemma's & Valkuilen

Het platform bevat een uitgebreide vragenbank van **83 interactieve oefeningen**:

1. **Per Level Stepper (3–4 oefeningen per level)**:
   - **Concept & Intuïtie**: Begrijpen wat formules betekenen zonder formules uit het hoofd te leren.
   - **Praktijk Dilemma**: Echte business-, medische en wetenschappelijke scenario's oplossen.
   - **De Valkuil-Detector**: Gevaarlijke statistische denkfouten en p-hacking ontmaskeren.
   - **Data & Parameter Schatting**: Directe interpretatie van modeltabellen, VIF, ICC, Odds Ratios en p-waarden.
   - *Verdien +50 XP per voltooide oefening en ontgrendel het level bij 100% voltooiing!*

2. **De Oefen-Arena (Random Drill Hub)**:
   - Klik op **"🎯 Oefen-Arena"** in de navigatiebalk.
   - Oefen een oneindige stroom willekeurige vragen, gefilterd op fase (bv. *"Alleen Mixed Models"* of *"Alleen Regressie & Diagnostiek"*).
   - Bouw een **Streak** op (bv. `🔥 Streak: 7`) en claim extra XP!

---

## 🗺️ De 24 Levels van de Statistical Journey

### 📘 Fase 1: De Fundamenten (Levels 1–5)
- **Level 1**: Beschrijvende Statistiek & De 'Outlier' Valstrik (Gemiddelde vs Mediaan & IQR)
- **Level 2**: Kansverdelingen & De Normale Verdeling (Z-scores & 68-95-99.7 regel)
- **Level 3**: De Centrale Limietstelling (CLT & Steekproefverdeling van gemiddelden)
- **Level 4**: Betrouwbaarheidsintervallen (95% CI & Foutmarge)
- **Level 5**: Hypothesetoetsing, t-toets & De p-waarde (Type I/II, Power, Cohen's d)

### 📗 Fase 2: Klassieke Regressie & Diagnostiek (Levels 6–12)
- **Level 6**: Lineaire Regressie I: OLS & Het Verhaal van de Lijn (Residu-kwadraten)
- **Level 7**: Goedheid van de Pasvorm: $R^2$, Adj-$R^2$ en de F-toets
- **Level 8**: Modelassumpties & Diagnostiek (L.I.N.E. & Heteroscedasticiteit)
- **Level 9**: Meervoudige Regressie & Confounding (Simpson's Paradox)
- **Level 10**: Multicollineariteit & VIF (Variance Inflation Factor)
- **Level 11**: Logistische Regressie & Odds Ratios (S-curve & Cutoffs)
- **Level 12**: Regularisatie: Ridge ($L_2$) & Lasso ($L_1$) (Feature selectie)

### 📙 Fase 3: Hiërarchie, Gegeneraliseerde & Mixed Models (Levels 13–19 - De Praktische Sweet Spot)
- **Level 13**: Geclusterde Data & Het Falen van Standaard OLS (Intraclass Correlation ICC)
- **Level 14**: Linear Mixed Models I: Random Intercepts (Shrinkage)
- **Level 15**: Linear Mixed Models II: Random Slopes & Herhaalde Metingen (De Sweet Spot)
- **Level 16**: Generalized Linear Mixed Models (GLMM - Geclusterde binaire/Poisson data)
- **Level 17**: Generalized Additive Models (GAMs - Niet-lineaire splines)
- **Level 18**: Overleving- & Tijd-tot-Gebeurtenis Analyse (Kaplan-Meier & Cox Hazards)
- **Level 19**: Bayesiaanse Grondslagen (Prior, Likelihood, Posterior)

### 🔮 Fase 4: De Geavanceerde Grenzen tot het Apex (Levels 20–24)
- **Level 20**: Bayesiaanse MCMC & Hamiltoniaanse Monte Carlo (Stan / PyMC traceplots)
- **Level 21**: Niet-Parametrische Bayesiaanse Modellen & Gaussiaanse Processen (GPs)
- **Level 22**: Causale Inferentie in Hilbertruimten & Do-Calculus (DAGs & RKHS)
- **Level 23**: Stochastische Differentiële Vergelijkingen (SDE's & Itô Calculus)
- **Level 24: HET THEORETISCHE APEX**:
  $$\mathbf{dX_t = \nabla_{\mathcal{M}} \Phi(X_t) dt + \sigma(X_t) d\mathbf{B}_t^{\text{rough}} \quad \text{in } \mathcal{H}}$$
  *Modellen met oneindig-dimensionale parameterruimtes op niet-euclidische gekromde oppervlakken (manifolds), met niet-differentieerbare ruwe stochastische paden en causale inferentie in oneindig-dimensionale Hilbertruimten.*
  *Met interactieve 3D-manifold flow simulator, instelbare Hurst roughness exponent $H$, en projectie in de Hilbertruimte $\mathcal{H}$!*
