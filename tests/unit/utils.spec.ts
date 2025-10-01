import { describe, it, expect } from 'vitest';
import { formatDate } from '../../src/lib/utils/format';

describe('formatDate', () => {
  it('formats ISO strings', () => {
    const value = formatDate('2026-02-12T09:00:00Z');
    expect(value).toBe('Feb 12, 2026');
  });
});
