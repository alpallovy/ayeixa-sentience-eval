/**
 * 10-minute try: evaluate a sample agent output for JSON leaks and clichés.
 * Run: npm run quicktry  (builds first)
 */
import { SentienceBenchmarkRunner } from '../dist/index.js';

const dirty =
  'Sure! Here is your plan: {"internalState": true, "unparsed": 123} As an AI language model, I hope this helps!';

const runner = new SentienceBenchmarkRunner();
const report = runner.evaluate({
  output: dirty,
  groundTruthContext: ['The user asked for a software implementation plan.'],
});

console.log('--- Sentience Eval quicktry ---');
console.log('Cleanliness score:', report.cleanlinessScore, '/ 100');
console.log('Is clean:', report.isClean);
console.log('Violations:', report.violations.length);
for (const v of report.violations.slice(0, 5)) {
  console.log(`  - [${v.severity}] ${v.category}: ${v.message}`);
}
if (report.violations.length > 5) {
  console.log(`  ... and ${report.violations.length - 5} more`);
}
console.log('');
console.log('Next: edit this file with your own agent output, re-run, then post feedback.');
console.log('Discussion: https://github.com/alpallovy/ayeixa-sentience-eval/discussions/2');
