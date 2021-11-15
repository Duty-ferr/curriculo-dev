import Section from "../../components/Section/Index";
import Header from "../../components/Header/Index";
import { useState } from "react";
import FakeAPI from '..//../service/dados.json'
const Home = () => {
  const [dados] = useState(FakeAPI);
  return (<>
    <body>
      <Header img={dados.profile.img} />
      <main>
        <Section profile={dados.profile}/>
      </main>
    </body>
  </>
};

  
export default Home;
