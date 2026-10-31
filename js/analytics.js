// Statistiek Leerplatform - Diepe Google Analytics (GA4) Integratie
// Meet gedetailleerde leeractiviteit, diagnostische scans, oefeningen en simulaties

window.StatAnalytics = (function() {
  const GA_ID = "G-3GEEP4QKQX";

  // Veilige event tracker
  function trackEvent(eventName, params = {}) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, {
          send_to: GA_ID,
          app_name: "Statistical Journey",
          ...params
        });
      }
      // Debug logging
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        console.debug(`[GA4 Event] ${eventName}:`, params);
      }
    } catch (e) {
      console.warn("Analytics tracking error", e);
    }
  }

  // Throttle helper voor sliders
  const sliderTimers = {};
  function trackSliderChange(levelId, sliderId, value) {
    const key = `${levelId}_${sliderId}`;
    if (sliderTimers[key]) clearTimeout(sliderTimers[key]);
    sliderTimers[key] = setTimeout(() => {
      trackEvent("simulation_slider_change", {
        level_id: levelId,
        slider_id: sliderId,
        value: parseFloat(value) || value
      });
    }, 800); // 800ms throttle
  }

  return {
    // 1. Level & Voortgang Events
    trackLevelView: function(levelId, levelTitle, phase) {
      trackEvent("level_view", {
        level_id: levelId,
        level_name: `Level ${levelId}: ${levelTitle}`,
        phase_name: phase
      });
    },

    trackLevelComplete: function(levelId, totalXP, totalCompleted) {
      trackEvent("level_completed", {
        level_id: levelId,
        total_xp: totalXP,
        total_levels_completed: totalCompleted,
        is_apex: levelId === 24
      });
    },

    // 2. Oefeningen & Vragenbank Events
    trackExerciseAnswer: function(levelId, exerciseId, isCorrect, xpEarned) {
      trackEvent("exercise_answered", {
        level_id: levelId,
        exercise_id: exerciseId,
        is_correct: isCorrect ? 1 : 0,
        xp_earned: xpEarned
      });
    },

    // 3. Adaptieve Niveau-Scan Events
    trackScanStart: function() {
      trackEvent("adaptive_scan_start", {
        timestamp: new Date().toISOString()
      });
    },

    trackScanStep: function(stepIndex, questionId, domain, score) {
      trackEvent("adaptive_scan_step", {
        step_number: stepIndex + 1,
        question_id: questionId,
        question_domain: domain,
        score_awarded: score
      });
    },

    trackScanComplete: function(finalScore, competenceLevel, recommendedLevel) {
      trackEvent("adaptive_scan_completed", {
        final_score: finalScore,
        competence_level: competenceLevel,
        recommended_level: recommendedLevel
      });
    },

    // 4. Oefen-Arena Events
    trackArenaAnswer: function(levelId, filter, isCorrect, streak) {
      trackEvent("arena_question_answered", {
        level_id: levelId,
        arena_filter: filter,
        is_correct: isCorrect ? 1 : 0,
        current_streak: streak
      });
    },

    // 5. Certificaat Events
    trackCertificateView: function(levelId, totalXP) {
      trackEvent("certificate_viewed", {
        level_id: levelId,
        total_xp: totalXP
      });
    },

    trackCertificatePrint: function() {
      trackEvent("certificate_printed", {
        timestamp: new Date().toISOString()
      });
    },

    // 6. Systeem & UI Events
    trackSliderChange: trackSliderChange,

    trackSoundToggle: function(enabled) {
      trackEvent("sound_toggle", {
        sound_enabled: enabled ? "on" : "off"
      });
    },

    trackProgressReset: function() {
      trackEvent("progress_reset", {
        timestamp: new Date().toISOString()
      });
    },

    trackLanguageChange: function(lang) {
      trackEvent("language_change", {
        language: lang,
        timestamp: new Date().toISOString()
      });
    },

    trackViewChange: function(viewMode) {
      trackEvent("view_mode_change", {
        view_mode: viewMode,
        timestamp: new Date().toISOString()
      });
    }
  };
})();
