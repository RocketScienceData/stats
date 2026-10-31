# 🌌 Statistical Journey: From Foundations to Level 24 Apex

[🇬🇧 Read in English](README.md) • [🇳🇱 Lees in het Nederlands](README.nl.md) • [🇪🇸 Leer en Español](README.es.md) • [🚀 Live Web App](https://rocketsciencedata.github.io/stats/)

An adaptive, interactive online platform engineered for **statistical intuition, model mechanics, and scientific judgment** — advancing from descriptive statistics and mixed models to the mathematical zenith:

$$\mathbf{dX_t = \nabla_{\mathcal{M}} \Phi(X_t) dt + \sigma(X_t) d\mathbf{B}_t^{\text{rough}} \quad \text{in } \mathcal{H}}$$
*Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces*

---

## 🚀 Quick Start

### Run Locally:
```bash
python3 serve.py
```
*Or simply open `index.html` directly in any modern browser.*

### Live on GitHub Pages:
👉 **[https://rocketsciencedata.github.io/stats/](https://rocketsciencedata.github.io/stats/)**

---

## 🌐 Complete Multilingual Support (English, Dutch & Spanish)

The platform offers a seamless trilingual learning experience (**English 🇬🇧, Dutch 🇳🇱 & Spanish 🇪🇸**):
* **Default Language:** English is the default initial language upon visiting the platform.
* **Instant Language Toggle:** Switch between languages in one click using the header buttons `[ 🇬🇧 EN ]`, `[ 🇳🇱 NL ]`, and `[ 🇪🇸 ES ]`.
* **Persistent Preferences:** Your language choice is remembered across sessions via `localStorage` (`statistiek_lang`).
* **Fully Localized Content:**
  - High-converting landing page with live interactive Simpson's Paradox simulator.
  - All 24 level titles, badges, phase descriptions, and lab environments.
  - Adaptive 10-step intake scan (questions, options, and personalized diagnostic feedback).
  - Practice Arena and verified printable Apex Certificate.
* **Analytics Event:** Language switches are tracked in Google Analytics via the `language_change` event.

---

## 🌟 High-Converting, Persuasive Landing Page

* **Instant "Aha!" Moment (Live Simpson's Paradox Sandbox):**
  - An interactive simulator embedded directly inside the hero section.
  - Compare **Pooled OLS (deceptive negative slope, aggregation trap)** with **Linear Mixed Model cluster separation (true positive slope within cohorts)** in a single click.
* **The Pain of Traditional Stats vs. Our Approach:**
  - Confronts the classic pitfall: spending 80% of energy debugging package syntax in R or Python instead of understanding underlying model mechanics.
* **Audience Persona Targeting:**
  - 🎓 *PhD Candidates & Academic Researchers*: Repeated measures, intraclass correlation (ICC), and survival curves for peer-reviewed papers.
  - 💻 *Data Scientists & ML Engineers*: Causal DAGs, Bayesian priors, and curved manifold geometries.
  - 📊 *Analysts & Decision Makers*: Detecting p-hacking, selection bias, and Simpson's paradox.
* **Spotlight on the Practical Sweet Spot (Levels 13–19):**
  - Explains why Linear Mixed Models are essential for 90% of empirical data (longitudinal cohorts, nested students, multi-store retail).
* **Spotlight on the Theoretical Apex & Certificate (Level 24):**
  - Preview of the verified certificate for mastering all 24 levels.

---

## 🔍 SEO & Structured Data

* **Meta & OpenGraph:** Search-optimized `<title>`, `<meta name="description">`, keywords, and social cards (`og:title`, `og:description`, Twitter Cards).
* **Hreflang Tags:** Multilingual link annotations (`hreflang="en"`, `hreflang="nl"`, and `x-default`).
* **JSON-LD Schema.org:**
  - `@type: Course`: Complete syllabus, educationalLevel, and free accessibility.
  - `@type: WebApplication`: Interactive educational web application.
  - `@type: FAQPage`: Rich FAQ schema for Google Search snippets.
* **Static Assets:** Clean `robots.txt`, `sitemap.xml`, and `.nojekyll` configuration.

---

## 🧠 Adaptive Intake & Statistical Journey

Instead of forcing users to guess which model to study, the engine features an **Adaptive Statistical Intake ("How proficient are you?")**:
1. **10 Diagnostic Scenario Questions**: Tests your grasp of outlier distortion, overparameterized regression, cluster correlation (ICC), random effects, and rough stochastic paths.
2. **Competence Profiling**: Determines your starting profile (*Foundations Explorer*, *Regression Analyst*, *Mixed Models Virtuoso*, or *Apex Cosmologist*).
3. **Personalized Journey Coach**: Recommends your optimal starting level and provides contextual alerts and pitfall warnings at every level.

---

## 📈 Deep Google Analytics 4 Telemetry (`G-3GEEP4QKQX`)

Every learning milestone is measured anonymously via custom GA4 events:
* `level_view`: level open event (including level ID, title, and phase name).
* `level_completed`: awarded upon mastering all exercises in a level.
* `exercise_answered`: recorded per problem attempt (correct/incorrect, XP earned).
* `adaptive_scan_start`, `adaptive_scan_step` & `adaptive_scan_completed`: intake analytics.
* `arena_question_answered`: practice arena performance and streak tracking.
* `simulation_slider_change`: throttled tracking of simulator parameter adjustments.
* `language_change`: tracks toggling between `en` and `nl`.
* `view_mode_change`: records switching between `landing` overview and `studio` mode.
* `certificate_viewed` & `certificate_printed`: logs Apex Level 24 completion.

---

## 🎯 83 Interactive Exercises, Dilemmas & Pitfalls

1. **Per-Level Problem Stepper (3–4 challenges per level)**:
   - *Concept & Intuition*: Understand what models do without syntax friction.
   - *Real-World Dilemma*: Solve clinical, biological, and strategic business data puzzles.
   - *Pitfall Detector*: Identify p-hacking, omitted confounders, and residual anomalies.
   - *Data & Parameter Interpretation*: Read OLS, MixedLM, GAMs, and posterior tables directly.
2. **The Practice Arena (Infinite Drill Hub)**:
   - Endless randomized challenges across all 24 levels with a live streak counter (`🔥 Streak: 7`).

---

## 🗺️ The 24-Level Curriculum Roadmap

### 📘 Phase 1: Foundations & Probability (Levels 1–5)
- **Level 1**: Descriptive Statistics & The Outlier Trap (Mean vs Median & IQR)
- **Level 2**: Probability Distributions & The Normal Curve (Z-scores & 68-95-99.7 rule)
- **Level 3**: The Central Limit Theorem (CLT & Sampling distributions of means)
- **Level 4**: Confidence Intervals (95% CI & Margin of error)
- **Level 5**: Hypothesis Testing, t-tests & The p-value (Type I/II, Power, Cohen's d)

### 📗 Phase 2: Classical Regression & Diagnostics (Levels 6–12)
- **Level 6**: Linear Regression I: OLS & The Story of the Line (Residual sum of squares)
- **Level 7**: Goodness of Fit: $R^2$, Adjusted $R^2$, and the F-test
- **Level 8**: Model Assumptions & Diagnostics (L.I.N.E. & Heteroscedasticity)
- **Level 9**: Multiple Regression & Confounding (Simpson's Paradox)
- **Level 10**: Multicollinearity & VIF (Variance Inflation Factor)
- **Level 11**: Logistic Regression & Odds Ratios (Sigmoid curve & Decision cutoffs)
- **Level 12**: Regularization: Ridge ($L_2$) & Lasso ($L_1$) (Shrinkage & feature selection)

### 📙 Phase 3: Hierarchical, Generalized & Mixed Models (Levels 13–19 - The Practical Sweet Spot)
- **Level 13**: Clustered Data & The Failure of Standard OLS (Intraclass Correlation ICC)
- **Level 14**: Linear Mixed Models I: Random Intercepts (Partial pooling & shrinkage)
- **Level 15**: Linear Mixed Models II: Random Slopes & Repeated Measures (The Sweet Spot)
- **Level 16**: Generalized Linear Mixed Models (GLMM - Clustered binary & Poisson counts)
- **Level 17**: Generalized Additive Models (GAMs - Non-linear smoothing splines)
- **Level 18**: Survival Analysis & Time-to-Event Modeling (Kaplan-Meier & Cox Hazards)
- **Level 19**: Bayesian Foundations (Prior, Likelihood, Posterior & Bayes' Theorem)

### 🔮 Phase 4: Advanced Frontiers & Theoretical Apex (Levels 20–24)
- **Level 20**: Bayesian MCMC & Hamiltonian Monte Carlo (Stan / PyMC trace diagnostics)
- **Level 21**: Non-parametric Bayesian Models & Gaussian Processes (GPs & Kernels)
- **Level 22**: Causal Inference in Hilbert Spaces & Do-Calculus (DAGs & RKHS)
- **Level 23**: Stochastic Differential Equations (SDEs & Itô Calculus)
- **Level 24: THE THEORETICAL APEX**:
  $$\mathbf{dX_t = \nabla_{\mathcal{M}} \Phi(X_t) dt + \sigma(X_t) d\mathbf{B}_t^{\text{rough}} \quad \text{in } \mathcal{H}}$$
  *Infinite-Dimensional Non-parametric Bayesian SDEs on Manifolds with Rough Paths & Causal Hilbert Spaces.*
  *Features a live 3D manifold flow simulator, adjustable Hurst roughness exponent $H$, and Hilbert space $\mathcal{H}$ projections!*

---

## 📜 License & Open Access
Open access educational project published under the MIT License. Contributions and feedback are welcome!
