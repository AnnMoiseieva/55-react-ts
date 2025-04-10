import { useContext } from "react";

import { MainCardContext } from "../MainCard/MainCard";
import { ContentComponent, DataItem } from "./styles";
import Button from "../../../../components/Button/Button";
// import { ContentProps } from "./types"

function Content() {
  // Step 3. Call the useContext hook (after importing from React).
  // In the useContext call we pass the context that was created in step 1 (needs to be imported)
  // When called, the useContext hook returns the data stored in the context.

  // const userContentData = useContext(MainCardContext);

  // Example of passing function and data via context
  // const userContentData = useContext(MainCardContext);

  // Destructuring assignment
  const { data, changeData } = useContext(MainCardContext);

  const deleteData = () => {
    changeData(undefined);
  };

  return (
    <ContentComponent>
      {/* If a variable can contain an object or undefined, then it is advisable to
      put a question mark before accessing the object's property, to avoid the
      case of receiving undefined (empty property). That is, the question mark
      checks whether the variable on the left is an object */}
      <DataItem>First Name: {data?.firstName}</DataItem>
      <DataItem>Last Name: {data?.lastName}</DataItem>
      <DataItem>Age: {data?.age}</DataItem>
      <Button name="Delete all data" onClick={deleteData} />
    </ContentComponent>
  );
}

export default Content;

// function Content({userData}: ContentProps) {

//   return (
//     <ContentComponent>
//       <DataItem>First Name: {userData.firstName }</DataItem>
//       <DataItem>Last Name: {userData.lastName}</DataItem>
//       <DataItem>Age: {userData.age}</DataItem>
//     </ContentComponent>
//   )
// }

// export default Content
