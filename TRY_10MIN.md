# Try Sentience Eval in 10 minutes

Pre-release (`v0.1.0-alpha`). No npm publish yet — local clone only.

## Prerequisites

- Node.js 18+
- ~5 minutes for `npm ci` on first run (~1 minute on warm cache)

## 1 — Install

```bash
git clone https://github.com/alpallovy/ayeixa-sentience-eval.git
cd ayeixa-sentience-eval
npm ci
```

## 2 — Run the quick example

```bash
npm run quicktry
```

## 3 — Expected output (success)

You should see something like:

```text
--- Sentience Eval quicktry ---
Cleanliness score: 75 / 100
Is clean: false
Violations: 2+
  - [HIGH] RAW_JSON_LEAK: ...
  - [MEDIUM] ROBOTIC_CLICHE: ...
```

A **lower score with violations listed** means the evaluator is working — the sample string is intentionally dirty.

## 4 — Make it yours (optional, still <10 min)

Edit `examples/quicktry.mjs` — replace the `dirty` string with output from **your** agent or LLM. Re-run `npm run quicktry`.

## 5 — Verify tests (optional)

```bash
npm test
```

Expect all tests passing.

## If something fails

Open an issue with:

- Node version (`node -v`)
- Command you ran
- Full error output (redact secrets)

[New issue](https://github.com/alpallovy/ayeixa-sentience-eval/issues/new)

## Share feedback (counts only with concrete detail)

Post on [Discussions #2](https://github.com/alpallovy/ayeixa-sentience-eval/discussions/2):

- What agent output you tested
- What violations were useful vs noisy
- What broke during install/run

Stars and “looks cool” do **not** count as evaluation evidence.

## Case study (optional, after real use)

1. Complete steps above with **your** workflow evidence  
2. Read [CASE_STUDY_PUBLIC_FLOW](https://github.com/alpallovy/ayeixa-open-coordinator/blob/main/docs/CASE_STUDY_PUBLIC_FLOW.md)  
3. Post consent on [Discussion #6](https://github.com/alpallovy/ayeixa-open-coordinator/discussions/6) with **NAMED**, **ANONYMOUS**, or **NO_CASE_STUDY**

## Commercial questions (only after you evaluated)

If you actually ran the quicktry or tests, you may optionally answer [post-usage questions](https://github.com/alpallovy/ayeixa-open-coordinator/blob/main/docs/POST_USAGE_COMMERCIAL_QUESTIONS.md) in your feedback comment. Do not answer if you have not tried the project.
