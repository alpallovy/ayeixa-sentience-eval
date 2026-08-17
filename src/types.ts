export type ViolationCategory =
  | 'RAW_JSON_LEAK'
  | 'INTERNAL_DELIMITER_LEAK'
  | 'HALLUCINATED_CLAIM'
  | 'FORBIDDEN_CLICHE'
  | 'UNPARSED_TOOL_CALL';

export interface EvaluationViolation {
  category: ViolationCategory;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  description: string;
  snippet?: string;
}

export interface EvaluationInput {
  output: string;
  groundTruthContext?: string[];
}

export interface EvaluationReport {
  cleanlinessScore: number; // 0 to 100
  isClean: boolean;
  violations: EvaluationViolation[];
  metrics: {
    totalViolations: number;
    criticalViolations: number;
    jsonLeakCount: number;
  };
}
