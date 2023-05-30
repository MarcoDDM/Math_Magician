import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers correctly', () => {
    expect(operate('5', '2', '+')).toBe('7');
  });

  it('subtracts two numbers correctly', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('multiplies two numbers correctly', () => {
    expect(operate('5', '2', 'x')).toBe('10');
  });

  it('divides two numbers correctly', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  it('throws an error when given an unknown operation', () => {
    expect(() => operate('5', '2', '?')).toThrowError("Unknown operation '?'");
  });

  it("returns 'Can't divide by 0.' when trying to divide by 0", () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  it("returns 'Can't find modulo as can't divide by 0.' when trying to find modulo by 0", () => {
    expect(operate('5', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
