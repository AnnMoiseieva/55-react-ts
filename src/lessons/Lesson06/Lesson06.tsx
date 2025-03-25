// Example of default import. Use exactly name and put in '{}'.
import Button from "../../components/Button/Button";
import { getAction, TRAFFIC_LIGHT } from "./object_types";

function Lesson06() {
  console.log(getAction(TRAFFIC_LIGHT.GREEN));
  

    return <Button />
}

// This default export for component Lesson06
export default Lesson06;