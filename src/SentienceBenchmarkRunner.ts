import { EvaluationInput, EvaluationReport, EvaluationViolation } from './types';
import { RawJsonLeakDetector } from './RawJsonLeakDetector';
import { HallucinationDetector } from './HallucinationDetector';
import { BehavioralCleanlinessHarness } from './BehavioralCleanlinessHarness';

export class SentienceBenchmarkRunner {
  private jsonDetector = new RawJsonLeakDetector();
  private hallucinationDetector = new HallucinationDetector();
  private cleanlinessHarness = new BehavioralCleanlinessHarness();

  public evaluate(input: EvaluationInput): EvaluationReport {
    const violations: EvaluationViolation[] = [
      ...this.jsonDetector.scan(input.output),
      ...this.hallucinationDetector.evaluate(input.output, input.groundTruthContext),
      ...this.cleanlinessHarness.scan(input.output)
    ];

    let penalty = 0;
    let criticalCount = 0;
    let jsonLeakCount = 0;

    for (const v of violations) {
      if (v.severity === 'CRITICAL') {
        penalty += 50;
        criticalCount += 1;
      } else if (v.severity === 'HIGH') {
        penalty += 25;
      } else if (v.severity === 'MEDIUM') {
        penalty += 10;
      } else {
        penalty += 5;
      }

      if (v.category === 'RAW_JSON_LEAK') jsonLeakCount++;
    }

    const cleanlinessScore = Math.max(0, 100 - penalty);
    const isClean = violations.length === 0;

    return {
      cleanlinessScore,
      isClean,
      violations,
      metrics: {
        totalViolations: violations.length,
        criticalViolations: criticalCount,
        jsonLeakCount
      }
    };
  }
}
