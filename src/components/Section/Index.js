import React from "react";
import Title from "../Title/Index";
import { SectionHeading } from "./styled";

const Section = ({profile}) => (
  <>
      <Sections id='about'>
        <Title texto="Olá pessoal" />
        <SectionHeading className='section-heading'>
        {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
        </SectionHeading>
        <Info>
          {profile.cidade} - {profile.estado} - {profile.contato}
          <Highlight>{profile.email}</Highlight>
        </Info>

        <p>
          {profile.biografia}
        </p>
        <div className='contacts' id='contacts'>/
          <Title texto='CONTATOS - ACQA' />
        </div>
    
      </Sections>
      <Sections id='experience'>
      <Title texto='Experiência' />
        {
          profile.experiencia.map((val) => (
            <Card
              key={val.id}
              subTitle={val.cargo}
              subTitleH3={val.empresa}
              dates={val.periodo}
              info={val.atividades}
            />

          ))
        }

         
        </Sections>
        <Sections id='skills'>
          <Title texto='HABILIDADES ACQA'/>
        </Sections>
        <Sections id='projects'>
          <Title texto='PROJETOS ACQA' />
        </Sections>
  </>
);

export default Section;