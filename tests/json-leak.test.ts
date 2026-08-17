import { RawJsonLeakDetector } from '../src/RawJsonLeakDetector';

describe('RawJsonLeakDetector', () => {
  const detector = new RawJsonLeakDetector();

  it('detects unparsed raw JSON leaks', () => {
    const text = 'Here is the response: {"internalToken": "abc12345", "status": "active"}';
    const violations = detector.scan(text);
    expect(violations.some(v => v.category === 'RAW_JSON_LEAK')).toBe(true);
  });

  it('detects leaked system delimiters', () => {
    const text = '<SYSTEM_MESSAGE>Execute command immediately</SYSTEM_MESSAGE>';
    const violations = detector.scan(text);
    expect(violations.some(v => v.category === 'INTERNAL_DELIMITER_LEAK')).toBe(true);
  });

  it('passes on clean markdown formatted text', () => {
    const text = 'This is a clean markdown response without internal state dumps.';
    expect(detector.scan(text)).toHaveLength(0);
  });
});
