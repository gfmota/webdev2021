import styled from 'styled-components'

export const Header = styled.ul`
  position: sticky;
  top: 0;
  background: #212431;
  color: white;
  padding: 0 .75em;
  margin-top: 0em;
  border-bottom: .3em solid #62BEC1;
  z-index: 1;
  div {
    display: flex;
    align-items: center;
  }
  .link {
    color: white;
    font-size: 1.2em;
    text-decoration: none;
    padding: 0 1em;
    transition: all .4s ease;
  }
  .link:hover {
    text-shadow: 0 0 1em #62BEC1;
    transform: scale(1.1);
  }
  @media (max-width: 1223px) {
    div {justify-content: space-between;}
  }
`
export const AccordionButton = styled.button`
  background-color: ${props => props.active ? "#FF8339" : "#FFA570"};
  border: .1em solid black;
  border-bottom: ${props => (props.active ? "none" : ".1em solid black")};
  border-radius: ${props => (props.active ? "5px 5px 0 0" : "5px")};
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  outline: none;
  font: inherit;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: #FF8339;
  }
`
export const AccordionDiv = styled.div`
  padding: .3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
  border: ${props => (props.active ? ".1em solid black" : "none")};
  border-top: none;
  overflow: ${props => (props.active ? "auto" : "hidden")};
  height: ${props => (props.active ? "280px" : "0px")};
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
    color: "#FF8339";
    text-decoration: none;
  }
  img {
    height: 10em;
  }
`

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  background-color: #313549;
  color: white;
  text-decoration: none;
  margin: .3em .5em;
  padding: .5em 2em 1em 2em;
  border-radius: 5px;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.05);
    color: #62BEC1;
    box-shadow: 0 0 .8em #62BEC1;
  }
  img {
    height: 4em;
    margin-right: 1em;
  }
  @media (max-width: 600px) {
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 1em;
  }
`

export const Footer = styled.div`
  background-color: #212431;
  color: white;
  margin-top: 2em;
  h1 {
    text-align: center;
    margin: 0;
    padding: 1em 0;
  }
  p {
    max-width: 50%
  }
  .main {
    padding: 0 2em 2em 1em;
    display: flex;
    align-items: center;
    justify-content: stretch;
  }
  .images {
    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 45%;
  }
  img {
    transition: all .5s ease;
    width: 5em;
    filter: grayscale(100%);
  }
  img:hover {
    transform: scale(1.1);
    filter: grayscale(0%);
  }
  @media (max-width: 1223px){
    p {max-width: 100%}
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: stretch;
    }
    .images {
      min-width: 90%;
    }
  }
`

