# Eliminating Raw JSON Leaks and Robotic Clichés in Autonomous Agent Conversations

## 1. Introduction & Overview
When autonomous agents convert structured internal states and tool execution payloads into natural language dialogue, formatting breakdowns can occur: unparsed JSON delimiters leak into output text, robotic conversational clichés degrade user experience, and assertions deviate from context.

**Ayeixa Sentience Eval** (`@ayeixa/sentience-eval`) is a standalone assertion harness for testing, benchmarking, and guarding behavioral cleanliness in autonomous conversational agents.

- **GitHub Repository**: [https://github.com/alpallovy/ayeixa-sentience-eval](https://github.com/alpallovy/ayeixa-sentience-eval)
- **Status**: Pre-Release (`v0.1.0-alpha`)
- **License**: MIT
- **NPM Status**: Public registry publication is pending; evaluate and build locally.

---

## 2. Core Architecture
Sentience Eval is composed of four inspection engines:

1. **RawJsonLeakDetector**: Identifies raw JSON objects, unbalanced brace delimiters, and unrendered system metadata within dialogue strings.
2. **HallucinationDetector**: Compares response claims against ground-truth context to flag ungrounded assertions.
3. **BehavioralCleanlinessHarness**: Enforces conversational naturalness rules by detecting forbidden robotic clichés, prompt leaks, and meta-tokens.
4. **SentienceBenchmarkRunner**: Executes end-to-end evaluation batches and computes a weighted cleanliness index (0–100).

---

## 3. Implemented Capabilities & Test Verification
Verified with hermetic unit tests:
- **Raw JSON Detection**: 100% detection of unescaped JSON state (`tests/json-leak.test.ts`).
- **Cleanliness Suite**: Flagging cliché markers and delimiter imbalances (`tests/cleanliness.test.ts`).
- **Benchmark Runner**: Weighted penalty scoring calculation (`tests/benchmark.test.ts`).

Test Verification Receipt: **6/6 hermetic unit tests passing** (0 failures).

---

## 4. Local Installation & Quick Start
```bash
# Clone & build locally
git clone https://github.com/alpallovy/ayeixa-sentience-eval.git
cd ayeixa-sentience-eval
npm ci
npm run build
npm test
```

### Usage Example
```typescript
import { SentienceBenchmarkRunner } from './src';

const runner = new SentienceBenchmarkRunner();
const evaluation = runner.evaluate({
  output: "Here is your task: {\"internalState\": true, \"status\": \"RUNNING\"}",
  groundTruthContext: ["The user requested task status."]
});

console.log("Cleanliness Score (0-100):", evaluation.cleanlinessScore);
console.log("Violations Detected:", evaluation.violations);
```

---

## 5. Limitations & Roadmap
- Pre-release `v0.1.0-alpha`.
- Focused on deterministic token and rule-based assertion; ML-based semantic grounding extensions are planned on the 2026–2028 roadmap.
- Public npm publication is pending.

---

## 6. Contributing
Feedback and pull requests are welcome. Check out open issues labeled `good first issue` on GitHub.
- **License**: MIT
