import { FaCaretDown, FaCaretLeft, FaCaretRight, FaCaretUp, FaCircle } from 'react-icons/fa'

import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'

const Header = styled.ul`
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
const AccordionButton = styled.button`
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
const AccordionDiv = styled.div`
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
`

const Accordion = ({ props }) => {
  const [isActive, setIsActive] = useState(false);
  const isDesktop = useMediaQuery({query: '(min-width: 1224px)'});
  const [currentScreen, setCurrentScreen] = useState(0);
  const maxScreens = isDesktop ? 2 : 3;
  return (
    <li style={{marginBottom: "1em"}}>
      <AccordionButton
        onClick={() => setIsActive(!isActive)}
        style={isActive ? 
          {borderBottom: "0px", borderRadius: "5px 5px 0 0"} :
          {borderRadius: "5px"}
        }
      >
        {props.title}
        {isActive ?
          <FaCaretUp color="#2D3142"/> :
          <FaCaretDown color="#2D3142"/>
        }
      </AccordionButton>
      <AccordionDiv style={!isActive ? {display: "none"} : {}}>
        <ul>
          {isDesktop ?
            (<>
              <li style={currentScreen === 0 ? {} : {display: "none"}}>
                <p style={{marginTop: 0}}>{props.summary}</p>
                <iframe src={props.link} title={props.title}></iframe>
              </li>
              <li style={currentScreen === 1 ? {} : {display: "none"}}>{props.homework}</li>
            </>) :
            (<>
              <li style={currentScreen === 0 ? {} : {display: "none"}}>{props.summary}</li>
              <li style={currentScreen === 1 ? {} : {display: "none"}}>
                <iframe src={props.link} title={props.title}></iframe>
              </li>
              <li style={currentScreen === 2 ? {} : {display: "none"}}>{props.homework}</li>
            </>)
          }
        </ul>
        <div style={{display: "flex", justifyContent: "space-between", width: "12em"}}>
          <button
            style={{border: "none", backgroundColor: "inherit", cursor: "pointer"}}
            onClick={() => currentScreen > 0 && setCurrentScreen(currentScreen - 1)}
          >
            <FaCaretLeft color={currentScreen === 0 ? "#929FB5" : "#FFA570"} size={30}/>
          </button>
            {[...Array(maxScreens).keys()].map(ind => 
              <FaCircle style={{marginTop: ".5em"}} size={15} color={ind === currentScreen ? "#ff8339" : "#929FB5"} />
            )}
          <button
            style={{border: "none", backgroundColor: "inherit", cursor: "pointer"}}
            onClick={() => currentScreen < maxScreens-1 && setCurrentScreen(currentScreen + 1)}
          >
            <FaCaretRight size={30} color={currentScreen === maxScreens-1 ? "#929FB5" : "#FFA570"} />
          </button>
        </div>
      </AccordionDiv>
    </li>
  )
}

function App() {
  return (
    <>
      <Header>
        <img style={{height: "5em", margin: ".75em 0"}} alt="UCL Logo" src="/imgs/ucl-mark-grey-alpha-reverse.png"/>
      </Header>
      <ul style={{margin: "0 1em", padding: "0", listStyle: "none"}}>
        {lessons.map(lesson => <Accordion props={lesson} />)}
      </ul>
    </>
  );
}

const lessons = [
  {
    title: "Aula 1 - Introdução ao curso, HTML e tags",
    summary: "Introdução ao ",
    link: "",
    homework: "teste",
  },
  {
    title: "Aula 2 - HTML semântico e CSS",
    summary: "",
    link: "",
    homework: "",
  },
  {
    title: "Aula 3 - Seletores e Layout",
    summary: "",
    link: "",
    homework: "",
  },
  {
    title: "Aula 4 - Flex",
    summary: "",
    link: "",
    homework: "",
  },
  {
    title: "Aula 5 - Responsividade",
    summary: "",
    link: "",
    homework: "",
  },
  {
    title: "Aula 6 - Introdução a JavaScript",
    summary: "",
    link: "",
    homework: "",
  },
  {
    title: "Aula 7 - Laços, arrays e funções",
    summary: "",
    link: "",
    homework: "",
  },
  {
    title: "Aula 8 - JSON e objetos JavaScript",
    summary: "",
    link: "",
    homework: "",
  },
  {
    title: "Aula 9 - Promise e Fetch",
    summary: "",
    link: "",
    homework: "",
  },
  {
    title: "Aula 10 - Introdução ao Backend",
    summary: "",
    link: "",
    homework: "",
  }
]

export default App;
