import json
import re
import sys
from pathlib import Path

# Add project root to sys.path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from scripts.translations.exercises_aligned_p1_p2 import ALIGNED_P1_P2
from scripts.translations.exercises_aligned_p3_p4 import ALIGNED_P3_P4

all_translations = {}
all_translations.update(ALIGNED_P1_P2)
all_translations.update(ALIGNED_P3_P4)

print(f"Total aligned translations loaded: {len(all_translations)}")

exercises_file = Path("data/exercisesData.js")
content = exercises_file.read_text(encoding="utf-8")

# Extract the JSON array from exercisesData.js
# window.EXERCISES_DATA = [ ... ];
# Or if it's exported: window.EXERCISES_DATA = [...] or if (typeof module !== 'undefined') module.exports = ...
prefix_match = re.match(r"^(.*?window\.EXERCISES_DATA\s*=\s*)(\{[\s\S]*?\})(;[\s\S]*)$", content, re.DOTALL)
if not prefix_match:
    raise ValueError("Could not parse window.EXERCISES_DATA from data/exercisesData.js")

prefix = prefix_match.group(1)
json_str = prefix_match.group(2)
suffix = prefix_match.group(3)

# Parse JSON
exercises_by_lvl = json.loads(json_str)
total_count = sum(len(exs) for exs in exercises_by_lvl.values())
print(f"Loaded {total_count} exercises across {len(exercises_by_lvl)} levels from data/exercisesData.js")

updated_exercises_by_lvl = {}
for lvl, exs in exercises_by_lvl.items():
    updated_exercises_by_lvl[lvl] = []
    for ex in exs:
        ex_id = ex["id"]
        if ex_id not in all_translations:
            raise ValueError(f"Missing translation for {ex_id}")
        trans = all_translations[ex_id]
        
        ci = ex["correctIndex"]
        assert len(ex["options"]) == 4, f"{ex_id} NL options != 4"
        assert len(trans["options_en"]) == 4, f"{ex_id} EN options != 4"
        assert len(trans["options_es"]) == 4, f"{ex_id} ES options != 4"
        assert len(trans["options_de"]) == 4, f"{ex_id} DE options != 4"
        
        updated = {
            "id": ex["id"],
            "category": ex["category"],
            "title": ex["title"],
            "question": ex["question"],
            "options": ex["options"],
            "correctIndex": ci,
            "explanation": ex["explanation"],
            "title_en": trans.get("title_en", ex["title"]),
            "question_en": trans.get("question_en", ex["question"]),
            "options_en": trans["options_en"],
            "explanation_en": trans.get("explanation_en", ex["explanation"]),
            "title_es": trans.get("title_es", ex["title"]),
            "question_es": trans.get("question_es", ex["question"]),
            "options_es": trans["options_es"],
            "explanation_es": trans.get("explanation_es", ex["explanation"]),
            "category_de": trans.get("category_de", ex["category"]),
            "title_de": trans.get("title_de", ex["title"]),
            "question_de": trans.get("question_de", ex["question"]),
            "options_de": trans["options_de"],
            "explanation_de": trans.get("explanation_de", ex["explanation"])
        }
        updated_exercises_by_lvl[lvl].append(updated)

# Serialize with clean formatting
formatted_json = json.dumps(updated_exercises_by_lvl, indent=2, ensure_ascii=False)
new_file_content = prefix + formatted_json + suffix

exercises_file.write_text(new_file_content, encoding="utf-8")
print(f"Successfully wrote {total_count} updated exercises to {exercises_file}")
