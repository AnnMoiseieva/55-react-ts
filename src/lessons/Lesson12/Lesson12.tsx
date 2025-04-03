import axios from "axios";
import { useState, useEffect } from "react";

import Button from "../../components/Button/Button";
import { JokeWrapper, Lesson12Container, Error } from "./styles";
import Spinner from "../../components/Spinner/Spinner";

function Lesson12 () {
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";
  // Example of GET request using axios
  const getJoke = async () => {
    setError(undefined);
    // in the try block the request is sent and the successful response is processed
    try {
      setIsLoading(true);
      const response = await axios.get(JOKE_URL);
      console.log(response.data);
      //processing a successful result
      const data = response.data;
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error: any) {
      // the catch block handles the error (when receiving a request error,
      // information about it will be passed to error)
      console.log(error.message);
      // error handling
      setError(error.message);
    } finally {
      //the finally block specifies actions that must be performed in any case
      //in case of an error or upon receiving data
      console.log("Result received");
      setIsLoading(false);
    }
    };
    
  useEffect(() => { getJoke() }, []);

  return (
    <Lesson12Container>
      <Button name="GET ANOTHER JOKE" onClick={getJoke} disabled={isLoading} />
      {/* {isLoading && <Spinner />} */}
      <JokeWrapper>{isLoading ? <Spinner/> : joke}</JokeWrapper>
      <Error>{error}</Error>
    </Lesson12Container>
  );
}
export default Lesson12;


