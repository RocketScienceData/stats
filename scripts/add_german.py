#!/usr/bin/env python3
"""
Adds comprehensive German (de) language support to:
- data/i18n.js (dict.de, levelMeta.de, helper functions, button handler)
- index.html (lang-btn-de button in navigation header)
- js/charts.js (tSim German parameter support)
- data/levelsData.js (case_de, theory_de, simulation_de, interpretation_de, quiz_de, ADAPTIVE_ASSESSMENT)
"""

import json
import re

print("Starting German language injection...")
