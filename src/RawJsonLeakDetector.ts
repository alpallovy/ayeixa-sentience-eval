import { EvaluationViolation } from './types';

export class RawJsonLeakDetector {
  public scan(text: string): EvaluationViolation[] {
    const violations: EvaluationViolation[] = [];

    // Detect unescaped raw JSON objects (e.g. {"key": ...})
    const jsonBlockRegex = /\{[ \t\r\n]*"(?:[a-zA-Z0-9_$-]+)"[ \t\r\n]*:[ \t\r\n]*[^}]+\}/g;
    let match: RegExpExecArray | null;

    while ((match = jsonBlockRegex.exec(text)) !== null) {
      violations.push({
        category: 'RAW_JSON_LEAK',
        severity: 'HIGH',
        description: 'Unformatted or raw JSON object detected in conversational output.',
        snippet: match[0].slice(0, 80)
      });
    }

    // Detect system delimiter leaks
    const delimiterRegex = /<SYSTEM_MESSAGE>|<USER_REQUEST>|<<SYS>>|\[INST\]|<\/s>/gi;
    while ((match = delimiterRegex.exec(text)) !== null) {
      violations.push({
        category: 'INTERNAL_DELIMITER_LEAK',
        severity: 'CRITICAL',
        description: 'Internal prompt system delimiter leaked into output.',
        snippet: match[0]
      });
    }

    // Detect unparsed tool calls
    const toolCallRegex = /\{"tool_calls":\s*\[/g;
    while ((match = toolCallRegex.exec(text)) !== null) {
      violations.push({
        category: 'UNPARSED_TOOL_CALL',
        severity: 'CRITICAL',
        description: 'Unparsed raw tool call payload leaked to user.',
        snippet: match[0]
      });
    }

    return violations;
  }
}
