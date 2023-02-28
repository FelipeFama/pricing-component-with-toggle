import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 5rem;
  color: var(--grayish-blue);
`;

export const Navbar = styled.nav`
 display: inline-flex;
 flex-direction: row;
 gap: 1.9rem;
 align-items: center;
`
export const ToggleArea = styled.button`
 border: none;
 position: relative;
 display: inline-flex;
 align-items: center;
 cursor: pointer;
 width: 3.8rem;
 height: 2.3rem;
 border-radius: 25px;
 background: linear-gradient(var(--gradient))
`