import { v4 } from "uuid";

import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { animalData } from "./data";
import './styles.css'

function Lesson07() {
  const animalCards = animalData.map((animal) => {
    return (
      <AnimalCard
        key={v4()}
        animalName={animal.name}
        species={animal.species}
        image={animal.image}
      />
    );
  });

  console.log(animalCards);

  return <div className="cards-wrapper">{animalCards}</div>;
  // <AnimalCard animalName='' species='Lion' image="" />
}

export default Lesson07;
