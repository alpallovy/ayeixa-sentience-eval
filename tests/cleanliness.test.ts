import { BehavioralCleanlinessHarness } from '../src/BehavioralCleanlinessHarness';

describe('BehavioralCleanlinessHarness', () => {
  const harness = new BehavioralCleanlinessHarness();

  it('flags forbidden cliches', () => {
    const violations = harness.scan("As an AI language model, I cannot help.");
    expect(violations.some(v => v.category === 'FORBIDDEN_CLICHE')).toBe(true);
  });
});
