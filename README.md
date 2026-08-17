# Ayeixa Sentience & Cleanliness Eval

> Anti-hallucination, raw-JSON leak detector, and behavioral cleanliness assertion harness for autonomous conversational agents.

## Status: Pre-Release (v0.1.0-alpha)
*Note: Public npm registry publication is pending. To use or evaluate this package, clone and build locally.*

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

## License
Distributed under the **MIT** License. See `LICENSE` for details.

## Technical Deep Dive
Read the full launch technical article: [`docs/blog/introducing-ayeixa-sentience-eval.md`](docs/blog/introducing-ayeixa-sentience-eval.md)
