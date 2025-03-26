import { AnimalCardProps } from "./types";
import "./style.css";

function AnimalCard({animalName, species, image}: AnimalCardProps ) {
    return (
        <div className="animal-card-container">
            <h2>{animalName}</h2>
            <div>{species}</div>
            <img src={image} />
        </div>
    )
}

export default AnimalCard;