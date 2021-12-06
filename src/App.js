import styled from 'styled-components'
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
  :focus, :hover {
    background-color: ${({theme}) => theme.colors.primaryDark};
  }
`
const AccordionDiv = styled.div`
  border: .1em solid black;
  border-top: 0;
  display: flex;
  justify-content: space-between;
  padding: .3em;
  a {
    color: ${({theme}) => theme.colors.primaryDark};
    text-decoration: none;
  }
  
`

const Accordion = ({ props }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div style={{marginBottom: "1em"}}>
      <AccordionButton
        onClick={() => setIsActive(!isActive)}
        style={isActive ? 
          {borderBottom: "0px", borderRadius: "5px 5px 0 0"} :
          {borderRadius: "5px"}
        }
      >
        {props.title}
      </AccordionButton>
      <AccordionDiv style={isActive ?
        {} :
        {display: "none"}
      }>
        <p style={{marginTop: 0}}>{props.summary}<br /><a href="">Ir para a tarefa</a></p>
        <iframe src={props.link}></iframe>
      </AccordionDiv>
    </div>
  )
}

function App() {
  return (
    <>
      <Header>
        <img style={{height: "5em", margin: ".75em 0"}} alt="UCL Logo" src="/imgs/ucl-mark-grey-alpha-reverse.png"/>
      </Header>
      <ul style={{margin: "0 1em", padding: "0"}}>
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
    homework: "",
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
