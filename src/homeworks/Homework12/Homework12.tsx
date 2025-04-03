import axios from "axios";
import { useState, useEffect } from "react";

import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import { FactWrapper, Homework12Container, Error } from "./styles";

function Homework12() {
  const [fact, setFact] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const FACT_URL: string = "https://catfact.ninja/fact";
  const getFact = async () => {
    setError(undefined);
    try {
      setIsLoading(true);
      const response = await axios.get(FACT_URL);
      const data = response.data;
      setFact(data.fact);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <Homework12Container>
      <Button
        name="GET MORE FACTS"
        onClick={getFact}
        disabled={isLoading}
      ></Button>
      <FactWrapper>{isLoading ? <Spinner /> : fact}</FactWrapper>
      <Error>{error}</Error>
    </Homework12Container>
  );
}

export default Homework12;
