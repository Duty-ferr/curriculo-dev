import React from "react";
import subTitleH3 from "../subTitleH3/Index";
import './Card.css'

import subTitle from "../subTitle/Index";
import subTitleH3 from "../subTitleH3/Index";
import { highlight, Info } from "./styled";

const Card = ({ subTitle, subTitleH3, dates, info }) => (
  <div>
    <subTitle texto={subTitle }/>
    <subTitleH3 texto={subTitleH3} />
    <Info>
      <highlight>{dates}</highlight>
    </Info>
    
    <p> {info}</p>
  </div>
)


export default Card;