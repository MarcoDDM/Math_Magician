import calculate from '../logic/calculate';

describe('calculate', () => {
  it('returns an empty object when given "AC"', () => {
    expect(calculate({ total: '5', next: '2', operation: '+' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('updates next when given a number', () => {
    expect(calculate({ total: '5', next: '2', operation: '+' }, '3')).toEqual({
      total: '5',
      next: '23',
      operation: '+',
    });
  });

  it('updates next when given "0"', () => {
    expect(calculate({ total: '5', next: '2', operation: '+' }, '0')).toEqual({
      total: '5',
      next: '20',
      operation: '+',
    });
  });

  it('updates next when given "."', () => {
    expect(calculate({ total: '5', next: '2', operation: '+' }, '.')).toEqual({
      total: '5',
      next: '2.',
      operation: '+',
    });
  });

  it('calculates the total when given "="', () => {
    expect(calculate({ total: '5', next: '2', operation: '+' }, '=')).toEqual({
      total: '7',
      next: null,
      operation: null,
    });
  });

  it('changes the sign of next or total when given "+/-"', () => {
    expect(calculate({ total: '5', next: '2', operation: '+' }, '+/-')).toEqual({
      total: '5',
      next: '-2',
      operation: '+',
    });

    expect(calculate({ total: '-5', next: null, operation: null }, '+/-')).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });
});