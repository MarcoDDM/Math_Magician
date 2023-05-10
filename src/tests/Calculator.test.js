import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Calculator component', () => {
  let calculator;
  beforeEach(() => {
    render(<Calculator />);
    calculator = screen.getByTestId('container');
  });

  it('Should test if Calculate component is inside the document', () => {
    expect(calculator).toBeInTheDocument();
  });

  it('Should render a snapshot of the Calculator component', () => {
    expect(calculator).toMatchSnapshot();
  });
});
