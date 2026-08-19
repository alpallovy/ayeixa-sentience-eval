# Ayeixa Sentience & Cleanliness Eval

> Anti-hallucination, raw-JSON leak detector, and behavioral cleanliness assertion harness for autonomous conversational agents.

## Status: Pre-Release (v0.1.0-alpha)
*Note: Public npm registry publication is pending. To use or evaluate this package, clone and build locally.*

**10-minute try:** see [`TRY_10MIN.md`](./TRY_10MIN.md) → `npm run quicktry`

## Features
- **Raw JSON & State Leak Detection**: Pinpoints unescaped JSON structures, raw system metadata, and delimiter violations in conversational agent outputs.
- **Factual Grounding & Hallucination Checks**: Evaluates response claims against ground truth facts and flags unsupported assertions.
- **Behavioral Cleanliness Suite**: Detects forbidden robotic clichés, prompt leaks, unrendered tool calls, and meta-tokens.
- **Automated Score Benchmark**: Calculates weighted cleanliness index (0-100) with detailed violation categorization.

## Installation & Local Build
```bash
# Clone the repository
git clone https://github.com/alpallovy/ayeixa-sentience-eval.git
cd ayeixa-sentience-eval

# Install dependencies and build
npm install
npm run build
npm test
```

## Quick Start
```typescript
import { SentienceBenchmarkRunner } from './src';

const runner = new SentienceBenchmarkRunner();
const report = runner.evaluate({
  output: "Here is your plan: {\"internalState\": true, \"unparsed\": 123}",
  groundTruthContext: ["The user requested a software plan."]
});

console.log("Cleanliness Score:", report.cleanlinessScore);
console.log("Violations Detected:", report.violations);
```

## Feedback & real-world use

If you try this project in a real workflow, share **concrete** technical feedback in [Discussions](https://github.com/alpallovy/ayeixa-sentience-eval/discussions/2) or a [GitHub issue](https://github.com/alpallovy/ayeixa-sentience-eval/issues). Optional case-study flow: [OpenCoordinator hub](https://github.com/alpallovy/ayeixa-open-coordinator/discussions/6).

## License
Distributed under the **MIT** License. See `LICENSE` for details.

## Engineering blog

- [How to evaluate AYEIXA OSS](https://alpallovy.github.io/ayeixa-blog/blog/how-to-evaluate-ayeixa-oss)
- [AYEIXA engineering blog index](https://alpallovy.github.io/ayeixa-blog/)
- [DEV Community intro](https://dev.to/alp_allovi_45214d2d8316a1/introducing-ayeixa-sentience-eval-catching-raw-json-leaks-robotic-cliches-in-agent-dialogue-25e9)
