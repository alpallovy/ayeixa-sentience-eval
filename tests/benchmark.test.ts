import { SentienceBenchmarkRunner } from '../src/SentienceBenchmarkRunner';

describe('SentienceBenchmarkRunner', () => {
  const runner = new SentienceBenchmarkRunner();

  it('gives 100 score for pristine conversational text', () => {
    const report = runner.evaluate({
      output: 'The system has been refactored cleanly according to specifications.'
    });
    expect(report.cleanlinessScore).toBe(100);
    expect(report.isClean).toBe(true);
  });

  it('penalizes severely for critical delimiter and JSON leaks', () => {
    const report = runner.evaluate({
      output: '<SYSTEM_MESSAGE>{"tool_calls": [{"id": 1}]}</SYSTEM_MESSAGE>'
    });
    expect(report.cleanlinessScore).toBe(0);
    expect(report.isClean).toBe(false);
    expect(report.metrics.criticalViolations).toBeGreaterThan(0);
  });
});
