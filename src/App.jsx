import MortgageCalculator from "./sections/MortgageCalculator.jsx";
import { MortgageProvider } from "./provider/MortgageProvider.jsx";

export default function App() {
  return (
    <MortgageProvider>
      <MortgageCalculator />
    </MortgageProvider>
  );
}
