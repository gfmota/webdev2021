import styled from 'styled-components'

export const Header = styled.ul`
  background: ${ ({ theme }) => theme.colors.secondary };
  color: white;
  padding: 0 .75em;
  margin-top: 0em;
  display: flex;
  align-items: center;
  border-bottom: .3em solid ${ ({ theme }) => theme.colors.accent };
  a {
    color: white;
    font-size: 1.2em;
    text-decoration: none;
    padding: 0 1em;
  }
`
export const AccordionButton = styled.button`
  background-color: ${({theme}) => theme.colors.primary};
  color: "#444";
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font: inherit;
  border: .1em solid black;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  :focus, :hover {
    background-color: ${({theme}) => theme.colors.primaryDark};
  }
`
export const AccordionDiv = styled.div`
  border: .1em solid black;
  border-top: 0;
  padding: .3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 1224px) {
    ul {
      align-self: stretch;
    }
  }
  ul {
    padding: .5em 1em;
    list-style-type: none;
  }
  ul li {
    display: flex;
    justify-content: space-between;
  }
  a {
    color: ${({theme}) => theme.colors.primaryDark};
    text-decoration: none;
  }
  img {
    height: 10em;
  }
`