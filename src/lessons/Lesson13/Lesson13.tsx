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
    try {
      setIsLoading(true);
      const response = await axios.get(IMAGE_URL);
      //   console.log(response.data);

      setImages((prevImages) => [...prevImages, response.data.message]);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

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
    <ImageWrapper key={image}>
      <img src={image} alt="Animal" />
    </ImageWrapper>
  ));

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
        {images.length > 0 && (
          <Button name="DELETE ALL DATA" onClick={deleteAllData} />
        )}
      </ButtonInputContainer>

      <Error>{error}</Error>

      <ImageContainer>
        {isLoading ? <Spinner /> : imageElements}
      </ImageContainer>
      
    </Lesson13Container>
  );
}

export default Lesson13;
