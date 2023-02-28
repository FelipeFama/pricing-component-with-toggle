import { Header, Navbar, ToggleArea, ToggleBtn } from "./styles";

export function Toggle() {
  return (
    <Header>
      <h1>Our Pricing</h1>
      <Navbar>
        <p>Annually</p>
        <ToggleArea>
          <ToggleBtn></ToggleBtn>
        </ToggleArea>
        <p>Monthly</p>
      </Navbar>
    </Header>
  );
}
