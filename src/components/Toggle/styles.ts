import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.6rem;
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
export const ToggleBtn = styled.div`
 cursor: pointer;
 position: relative;
 width: 1.7rem;
 height: 1.7rem;
 margin: 5%;
 border-radius: 50%;
 background-color: var(--very-light-grayish-blue)
`