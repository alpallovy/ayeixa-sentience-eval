import { EvaluationViolation } from './types';

export class BehavioralCleanlinessHarness {
  private forbiddenPhrases = [
    "as an ai language model",
    "i do not have personal feelings",
    "zero-truth tests passed without executing",
    "i am simulated"
  ];

  public scan(text: string): EvaluationViolation[] {
    const violations: EvaluationViolation[] = [];
    const lower = text.toLowerCase();

    for (const phrase of this.forbiddenPhrases) {
      if (lower.includes(phrase)) {
        violations.push({
          category: 'FORBIDDEN_CLICHE',
          severity: 'MEDIUM',
          description: `Forbidden conversational cliché or artificial bypass detected: '${phrase}'.`,
          snippet: phrase
        });
      }
    }

    return violations;
  }
}
