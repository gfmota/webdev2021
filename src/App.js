import { AccordionButton, AccordionDiv, Footer, Header, StyledLink } from './StyledComponents'
import { FaBars, FaCaretDown, FaCaretLeft, FaCaretRight, FaCaretUp, FaCircle, FaTimes } from 'react-icons/fa'

import { Link } from 'react-scroll'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'

const Accordion = ({ props }) => {
  const [isActive, setIsActive] = useState(false);
  const isDesktop = useMediaQuery({query: '(min-width: 1224px)'});
  const [currentScreen, setCurrentScreen] = useState(0);
  const maxScreens = isDesktop ? 2 : 3;
  return (
    <li style={{marginBottom: "1em"}}>
      <AccordionButton
        active={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        {props.title}
        {isActive ?
          <FaCaretUp color="#2D3142"/> :
          <FaCaretDown color="#2D3142"/>
        }
      </AccordionButton>
      <AccordionDiv active={isActive}>
        <ul>
          {isDesktop ?
            (<>
              <li style={currentScreen === 0 ? {} : {display: "none"}}>
                <p style={{marginTop: 0, marginRight: "1em"}}>{props.summary}</p>
                <iframe allowFullScreen src={props.link} title={props.title} style={{minWidth: 360, minHeight: 220}}></iframe>
              </li>
              <li style={currentScreen === 1 ? {} : {display: "none"}}>
                <p>
                  {props.homework}
                  {props.homeworkLinks && 
                    props.homeworkLinks.map(link => (
                    <>
                      <br/><a target="_blank" href={link}>{link}</a>
                    </>))}
                </p>
                <div style={{display: "inline"}}>
                  {props.homeworkImgs && props.homeworkImgs.map(image => <img src={image}/>)}
                </div>
              </li>
            </>) :
            (<>
              <li style={currentScreen === 0 ? {} : {display: "none"}}>{props.summary}</li>
              <li style={currentScreen === 1 ? {} : {display: "none"}}>
                <iframe allowFullScreen src={props.link} title={props.title} style={{minWidth: 360, minHeight: 220}}></iframe>
              </li>
              <li style={currentScreen === 2 ? {display: "flex", justifyContent: "space-between"} : {display: "none"}}>
                <p>
                  {props.homework}
                  {props.homeworkLinks && 
                    props.homeworkLinks.map(link => (
                    <>
                      <br/><a target="_blank" href={link}>{link}</a>
                    </>))}
                </p>
                <div style={{display: "inline"}}>
                  {props.homeworkImgs && props.homeworkImgs.map(image => <img src={image}/>)}
                </div>
              </li>
            </>)
          }
        </ul>
        <div style={{display: "flex", justifyContent: "space-between", width: "12em"}}>
          <button
            style={{border: "none", backgroundColor: "inherit", cursor: currentScreen > 0 && "pointer"}}
            onClick={() => currentScreen > 0 && setCurrentScreen(currentScreen - 1)}
          >
            <FaCaretLeft color={currentScreen === 0 ? "#929FB5" : "#FFA570"} size={30}/>
          </button>
            {[...Array(maxScreens).keys()].map(ind => 
              <FaCircle style={{marginTop: ".5em"}} size={15} color={ind === currentScreen ? "#ff8339" : "#929FB5"} />
            )}
          <button
            style={{border: "none", backgroundColor: "inherit", cursor: currentScreen < maxScreens-1 && "pointer"}}
            onClick={() => currentScreen < maxScreens-1 && setCurrentScreen(currentScreen + 1)}
          >
            <FaCaretRight size={30} color={currentScreen === maxScreens-1 ? "#929FB5" : "#FFA570"} />
          </button>
        </div>
      </AccordionDiv>
    </li>
  )
}

const ReferenceLink = ({props}) => {
  return (
    <StyledLink href={props.link} target="_blank">
      <img src={props.image}/>
      <div>
        <h3>{props.name}</h3>
        {props.summary}
      </div>
    </StyledLink>
  );
}

const Menu = ({ children }) => {
  return (
    <div style={{flex: "flex", flexDirection: "column", alignItems: "stretch", margin: "0"}}>
      {children}
    </div>
  )
}

function App() {
  const isDesktop = useMediaQuery({query: '(min-width: 1224px)'});
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Header>
        <div>
        <img style={{height: "5em", margin: ".75em 0"}} alt="UCL Logo" src="/imgs/ucl-mark-grey-alpha-reverse.png"/>
          {isDesktop ?
            (<>
              <Link
                className='link'
                activeClass="active"
                to="lessons"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                Aulas
              </Link>
              <Link
                className='link'
                activeClass="active"
                to="references"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                Referências
              </Link>
              <Link
                className='link'
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                Sobre
              </Link>
            </>) :
            (<>
              <button
                style={{border: "none", backgroundColor: "inherit"}} 
                onClick={() => setMenu(!menu)}
              >
                {menu ? <FaTimes size={30} color="white"/> : <FaBars size={30} color="white"/>}
              </button>
            </>)
          }
        </div>
        {(menu && !isDesktop) && (<Menu>
          <Link
            className='link'
            activeClass="active"
            to="lessons"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            style={{borderTop: "1px solid white", padding: ".5em 0"}}
          >
            Aulas
          </Link>
          <Link
            className='link'
            activeClass="active"
            to="references"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            style={{borderTop: "1px solid white", padding: ".5em 0"}}
          >
            Referências
          </Link>
          <Link
            className='link'
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            style={{borderTop: "1px solid white", padding: ".5em 0"}}
          >
            Sobre
          </Link>
        </Menu>)}
      </Header>
      <h1 id='lessons' style={{textAlign: "center"}}>Aulas</h1>
      <ul style={isDesktop ? 
        {margin: "0 7.5em", padding: "0", listStyle: "none"} : 
        {margin: "0 1em", padding: "0", listStyle: "none"}}>
        {lessons.map(lesson => <Accordion props={lesson} />)}
      </ul>
      <h1 id='references' style={{textAlign: "center"}}>Referências</h1>
      <ul style={isDesktop ?
        {display: "grid", gridTemplateColumns: "1fr 1fr", padding: "0 2em"} : {display: "block", padding: "0 1em"}}>
        {references.map((reference) => <ReferenceLink props={reference} />)}
      </ul>
      <Footer id="about">
        <h1>USPCodeLab</h1>
        <div className='main'>
          <p>Grupo de extensão universitária que tem como objetivo <b>estimular a inovação tecnológica na USP</b></p>
          <div className='images'>
            <a href="https://codelab.ime.usp.br/#/" target="_blank">
              <img src="/imgs/ime-ucl-logo-black.png" />
            </a>
            <a href="https://t.me/uspcodelab" target="_blank">
              <img src="/imgs/telegram.png" />
            </a>
            <a href="https://www.youtube.com/c/CodeLabBR" target="_blank">
              <img src="/imgs/youtube-logo-5-2-1536x1073.png" />
            </a>
            <a href="https://www.instagram.com/uspcodelab/" target="_blank">
              <img src="/imgs/instagram.png" />
            </a>
          </div>
        </div>
      </Footer>
    </>
  );
}

const lessons = [
  {
    title: "Aula 1 - Introdução ao curso, HTML e tags",
    summary: "Apresentação do USPCodeLab e ao curso WebDev. História da web e internet, protocolo HTTP, introdução ao HTML e as tags básicas",
    link: "https://www.youtube.com/embed/acE-aGdse7k",
    homework: "Adicione filmes seguindo os seguintes critérios: uma lista com vários filmes usando a tag <ul> (unordered list), criando novos itens com a tag <li> (list item); coloque o título dentro de uma tag de heading <h3>; além disso, o título do filme deve ser um hyperlink que direciona para a página correspondente em imdb.com, para isto basta usar a tag <a>(anchor) colocando a referência da página no atributo href; inclua uma breve sinopse para cada filme usando a tag <p> (paragraph); padronizar o tamanho de cada imagem usando o atributo width (assim como o src) da tag <img> (image).",
  },
  {
    title: "Aula 2 - HTML semântico e CSS",
    summary: "Introdução ao CSS, box model, propriedades e medidas dos elementos. HTML semântico e sua importância.",
    link: "https://www.youtube.com/embed/NA2nye45J8A",
    homework: "Usando a página pessoal feita na tarefa anterior, vamos adicionar conceitos de HTML semântico a ela: Crie um bloco com a tag semântica <section> para cada seção de favoritos, acrescente o atributo id com o nome do bloco de acordo com o nome da seção de favoritos. Feito isso, as seções estão cada um com seu id próprio, assim podemos criar a navegação. Para isto, crie uma tag <nav> no início da página que englobe os itens com os nomes dos títulos dentro de uma tag <a>. Em vez de referenciar uma página externa dentro do atributo href, insira uma referência para a tag usando um seletor de id, #nome-do-id. Além disso, vamos adicionar estilo pelo CSS a sua página pessoal, seja criativo, desde que inclua os seguintes itens obrigatórios: Mudar a fonte, fazer card para os itens da lista deixando-os um do lado do outro, com um background de cor diferente do resto da página, mudar a cor de alguma parte do texto, mudar a cor do link ao passar o mouse por cima.",
  },
  {
    title: "Aula 3 - Seletores e Layout",
    summary: "CSS e seletores simples, combinados e pseudoclasses, além de propriedades de posicionamento dos elementos e introdução ao layout.",
    link: "https://www.youtube.com/embed/USl6D1vA4ag",
    homework: "Nessa tarefa vamos deixar de lado a nossa página que criamos ao longo das últimas duas tarefas. Criaremos uma interface mais próximo de algo real utilizando apenas o que foi ensinado até aqui! Desta vez, o desafio será que vocês tentem fazer o que é pedido sem muita dica. Para realizar essa tarefa, basta criar uma interface como a mostrada nas imagens abaixo. Note que, aqui o menu de navegação está fixado em cima utilizando position: fixed;, além de que há um hover nos 4 botões principais, Início, Cursos, Sobre e Contato; Na segunda imagem, ao passar o mouse em cima de um card, ele fica maior. Para realizar tal efeito, você pode usar uma transformação de escala usando transform: scale(1.1); (aumento de 10% em relação ao tamanho original); Cada card de um curso possui um leve sombreamento, de uma pesquisada sobre box-shadow para fazer esse efeito; Note que não é necessário usar o logo do CodeLab, basta escolher um a sua escolha.",
    homeworkImgs: ["/imgs/homework3a.png", "/imgs/homework3b.png"],
  },
  {
    title: "Aula 4 - Flex",
    summary: "Layout flexbox e suas propriedades.",
    link: "https://www.youtube.com/embed/UzX1ygBguio",
    homework: "O objetivo desta tarefa é de fixar o conteúdo de flexbox, um dos tipos de display mais importante e mais utilizado atualmente para construir aplicações front-end modernas.Primeiramente, realize as tarefas do Flexbox Froggy, elas irão te ajudar a fixar a maior parte dos conceitos de flexbox, então, para aplicar os conceitos aprendidos, refaça a tarefa 3 pensando em como construir a navbar e os cards de cursos do site utilizando flexbox",
    homeworkLinks: ["https://flexboxfroggy.com/"]
  },
  {
    title: "Aula 5 - Responsividade",
    summary: "A importância da responsividade e suas técnicas, layout flexível, adaptativo e media queries.",
    link: "https://www.youtube.com/embed/vvKPVPNHbTA",
    homework: "O objetivo desta tarefa é de fixar os conceitos de responsividade através do que foi ensinado em aula, além disto, fixar ainda mais o conteúdo aprendido em aulas passadas! Copie do link em anexo. Ao abrir o conteúdo acima, vocês notarão que a página se encontra apenas com design para mobile, ou seja, a sua construção inicial foi pensada em cima do conceito de mobile first. Para realizar esta tarefa, vocês deverão adaptar tal página para que ela tenha uma visualização adequada em telas maiores também. Chegando à um resultado próximo da imagem",
    homeworkImgs: ["/imgs/homework5.png"],
    homeworkLinks: ["https://codelab.ime.usp.br/partida-tarefa-5-2021"]
  },
  {
    title: "Aula 6 - Introdução a JavaScript",
    summary: "Introdução a JavaScript, tipos, variáveis, desvios e interação com o DOM, elementos do HTML.",
    link: "https://www.youtube.com/embed/Ls6AhYmZDwc",
    homework: "O objetivo desta tarefa é fixar o conceito de manipulação de DOM e eventos do javascript, aprendendo como criar um event listener para o evento de click num botão e manipular classes dos elementos da sua página. Tente replicar uma página que faça exatamente o que o gif faz.",
    homeworkImgs: ["/imgs/homework6.gif"]
  },
  {
    title: "Aula 7 - Laços, arrays e funções",
    summary: "Funções e laços de JavaScript, tipo Array, seus métodos e como manipula-los.",
    link: "https://www.youtube.com/embed/1FnrQ3I2lJE",
    homework: "O objetivo desta tarefa é fixar o uso dos principais métodos funcionais de array do JavaScript. Vocês devem baixar os arquivos index.html e exercicios-aula-7.js numa mesma pasta. As instruções para cada item da tarefa estão no arquivo exercicios-aula-7.js. Para verificar o resultado do seu código, abra o arquivo index.html no navegador e abra o Console no Inspetor da Web.",
    homeworkLinks: ["https://drive.google.com/file/d/15VZXURmJ_iTkgRi_SFM7y8aVe8mE1gJ3/view", "https://drive.google.com/file/d/1SWApoWGadOVqU3p-s2c-IiZIX7SPoqQZ/view"]
  },
  {
    title: "Aula 8 - JSON e objetos JavaScript",
    summary: "Objetos JavaScript, seus métodos e como manipula-los. JSON, notação baseado em objetos JavaScript, como são escritos, como guardar informação neles e como ler deles.",
    link: "https://www.youtube.com/embed/eIZjE5l26mk",
    homework: "Seguindo o exercício feito em classe, faça os seguintes itens com base no arquivo filmes.json: Liste os filmes que possuem duração maior que 130 minutos; Quantos filmes duram menos que 110 minutos? Qual é o filme com maior elenco? Calcule a média de duração dos filme; Qual o menor filme feito por Penelope? EXTRA: Qual a palavra com maior incidência nos títulos?",
    homeworkLinks: ["https://drive.google.com/file/d/1Avaey4nAgGfKNjbvWVSw3qhf-kwF2cUy/view"]
  },
  {
    title: "Aula 9 - Promise e Fetch",
    summary: "Programação assíncrona com promises e fetch. O que são APIs, como usa-las e tirar dados delas.",
    link: "https://www.youtube.com/embed/eq03c_lhAts",
    homework: "Usando a PokéAPI faça uma pokédex, ou seja, um site com uma barra de busca que, dado o nome ou número de um pokémon, mostra na página algumas informações desse, como imagem, tipos, abilidades, etc. Você precisará fazer a requisição, receber o JSON, selecionar quais partes são importantes e manipular o DOM para mostrar essas novas informações. Uma dica, para fazer a busca realize um tratamento da entrada passando convertendo ela para letras minúsculas, já que a API não faz esse tratamento. Desta forma, será indiferente o uso de letras maiuscúlas ou minuscúlas na barra de pesquisa. Lembre-se de tratar os erro assim como foi feito em aula, sinalizando ao usuário caso a pesquisa não dê certo.",
    homeworkLinks: ["https://pokeapi.co/"]
  },
  {
    title: "Aula 10 - Introdução ao Backend",
    summary: "Introdução ao desenvolvimentos BackEnd, de servidores, em Express, framework JavaScript.",
    link: "https://www.youtube.com/embed/wcAZw4xS8DM",
    homework: "Essa aula não teve tarefa, aproveite a folga e parabéns por completar o curso.",
  }
]

const references = [
  {
    name: "MDN Web Docs",
    link: "https://developer.mozilla.org/pt-BR/",
    image: "/imgs/MDN_Web_Docs-Logo.wine.png",
    summary: "A melhor 'muleta' para tomar referências rápidas do para programação front end usando HTML, CSS e JavaScript."
  },
  {
    name: "W3School",
    link: "https://www.w3schools.com/",
    image: "/imgs/W3Schools_logo.svg.png",
    summary: "Referência e tutoriais para desenvolvimento web com HTML, CSS, JavaScript e muito mais."
  },
  {
    name: "CodePen",
    link: "https://codepen.io/",
    image: "/imgs/Button-Fill-White-Large.png",
    summary: "Ambiente de desenvolvimento front end online que permite ver seus projetos e o de outras pessoas."
  },
  {
    name: "CSS Tricks",
    link: "https://css-tricks.com/",
    image: "/imgs/CSS-Tricks-star.png",
    summary: "Referências e conteúdo sobre CSS."
  },
  {
    name: "JavaScript.Info",
    link: "https://javascript.info/",
    image: "/imgs/javascriptinfo.png",
    summary: "TUDO sobre JavaScript, do início ao fim."
  },
  {
    name: "CodeLab no Youtube",
    link: "https://www.youtube.com/c/CodeLabBR",
    image: "/imgs/youtube-logo-5-2-1536x1073.png",
    summary: "Nosso canal no youtube, lá vamos muito além de da base de desenvolvimento web e estamos sempre falando sobre o melhor da área tec."
  },
]

export default App;
