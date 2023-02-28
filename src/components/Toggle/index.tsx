import { Header, Navbar, ToggleArea } from "./styles";

export function Toggle() {
  return (
    <Header>
      <h1>Our Pricing</h1>
      <Navbar>
        <p>Annually</p>
        <ToggleArea>
          <div></div>
        </ToggleArea>
        <p>Monthly</p>
      </Navbar>
    </Header>
  );
}
