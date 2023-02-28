import { Toggle } from "./components/Toggle";
import { Card } from "./components/Card";
import { GlobalStyle } from "./styles/globalStyles";

export function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Toggle />
        <Card />
      </main>
    </>
  );
}
