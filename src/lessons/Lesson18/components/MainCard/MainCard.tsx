import { useState, createContext } from "react";

import Section from "../Section/Section";
import { MainCardTitle, MainCardWrapper } from "./styles";
import { MainCardInterface, UserData } from "./types";

// Step 1. Create a store - context, using the createContext function,
// which needs to be imported from React
// export const MainCardContext = createContext<undefined | UserData>(undefined)

// Example passing data and function va context
export const MainCardContext = createContext<MainCardInterface>({
  data: undefined,
  changeData: () => {},
});

function MainCard() {
  const [userData, setUserData] = useState<UserData | undefined>({
    firstName: "Bart",
    lastName: "Simpson",
    age: 11,
  });

  return (
    // Step 2. Create a wrapper that will allow us to get the value from the context in any component,
    // that will be nested in the component with the wrapper.
    // We get the provider from the created context.
    // The provider requires data to be passed to the context via prop value.
    <MainCardContext.Provider
      value={{
        data: userData,
        changeData: setUserData,
      }}
    >
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        {/* Example with props drilling */}
        {/* <Section data={userData} /> */}
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  );
}

export default MainCard;
