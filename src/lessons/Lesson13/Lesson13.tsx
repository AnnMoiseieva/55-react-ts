import axios from "axios";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

import Button from "../../components/Button/Button";
import {
  ImageWrapper,
  Lesson13Container,
  Error,
  ImageContainer,
  ButtonInputContainer,
  ImageElement,
} from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";

function Lesson13() {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const IMAGE_URL: string = "https://dog.ceo/api/breeds/image/random";
  const getImage = async () => {
    setError(undefined);
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await axios.get(IMAGE_URL);
      setImages((prevImages) => [...prevImages, response.data.message]);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setIsLoading(false);
    }
  };

 

  const handleInputChange = async (
    element: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(element.target.value);
    if (element.target.value) getImage();
    // console.log(element);
  };

  const deleteAllData = () => {
    setImages([]);
    setInputValue("");
  };

  const imageElements = images.map((image) => (
    <ImageWrapper>
      <ImageElement src={image} alt="Animal" key={v4()} />
    </ImageWrapper>
  ));

  const isAnyImage: boolean = images.length > 0;

   useEffect(() => {
     getImage();
   }, []);
  
  return (
    <Lesson13Container>
      <ButtonInputContainer>
        <Button
          name="GET MORE IMAGES"
          onClick={getImage}
          disabled={isLoading}
        />
        <Input
          name=""
          placeholder="Enter your request"
          value={inputValue}
          onChange={handleInputChange}
        />
        {isAnyImage && 
          <Button name="DELETE ALL DATA" onClick={deleteAllData} />
        }
      </ButtonInputContainer>

      <Error>{error}</Error>
      {isAnyImage && 
        <ImageContainer>
          {imageElements}
          {isLoading && <Spinner />}
        </ImageContainer>
      }
    </Lesson13Container>
  );
}

export default Lesson13;
