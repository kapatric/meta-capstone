import { render, screen } from '@testing-library/react';
import App from './App';
import Reserve from './components/Reserve/Reserve';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('Renders Reserve text', () => {
//   render(<Reserve />);
//   const h3 = screen.getByText("Email:");
//   expect(h3).toBeInTheDocument();
// })

test('Renders time stamps', () => {
  render(<Reserve />);
  const initializeTimes = screen.getByDisplayValue("1:00");
  expect(initializeTimes).toBeInTheDocument();
})