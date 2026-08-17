import { EvaluationViolation } from './types';

export class HallucinationDetector {
  public evaluate(output: string, groundTruthContext: string[] = []): EvaluationViolation[] {
    const violations: EvaluationViolation[] = [];
    if (groundTruthContext.length === 0) return violations;

    const lowerOutput = output.toLowerCase();

    // Check for explicit contradiction indicators
    for (const fact of groundTruthContext) {
      const lowerFact = fact.toLowerCase();
      
      // If context explicitly mentions "not supported" but output claims "fully supported"
      if (lowerFact.includes('not supported') || lowerFact.includes('unsupported')) {
        const feature = lowerFact.replace(/not supported|unsupported/g, '').trim();
        if (feature.length > 3 && lowerOutput.includes(feature) && (lowerOutput.includes('is supported') || lowerOutput.includes('supported: yes'))) {
          violations.push({
            category: 'HALLUCINATED_CLAIM',
            severity: 'HIGH',
            description: `Output claims support for '${feature}' which is explicitly contradicted by context.`,
            snippet: feature
          });
        }
      }
    }

    return violations;
  }
}
