// Example of named import 
// (use the exact name and enclose it in {}
import Button from "../../components/Button/Button";
import { getAction, TRAFFIC_LIGHT } from "./object_types";

function Lesson06() {
  console.log(getAction(TRAFFIC_LIGHT.GREEN));
  

    return <Button name='Send' />
}

// Default export for component Lesson06
export default Lesson06;