import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Headers, Img, Itens, Li, navbar, profile, Ul } from "./styled";

const Header = ({Img}) => (
  <BrowserRouter>
    <Headers>
      <navbar>
        <profile>
            <Img src={Img} />
        </profile>
        <Ul> 
          <Li>
            <Itens to='#about'>Sobre</Itens>
          </Li>
          <Li>
            <Itens to='#Experience'>Experiência</Itens>
          </Li>
          <Li>
            <Itensa to='#Skills'>Habilidades</Itens>
          </Li>
          <Li>
            <Itens to='#Projects'>Projetos</aItens>
          </Li>
        </Ul>
        </navbar>
      </Headers>
    </BrowserRouter>
)
  

export default Header;
