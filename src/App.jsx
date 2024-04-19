import { useState } from "react";
import styled from "styled-components";

const CardContent = ({ firstName, height, weight, birthYear }) => {
  return (
    <StyleCardDiv>
      <h2>{firstName}</h2>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Birth year: {birthYear}</p>
    </StyleCardDiv>
  );
};

function App() {
  const [content, setContent] = useState(null); // or []

  fetch("https://swapi.dev/api/people/?format=json")
    .then((response) => response.json())
    .then((data) => {
      setContent(data.results);
      console.info(data.results);
    });

  return (
    <Container className="App">
      <MainHeading>Star Wars</MainHeading>
      {/* {content.length && <p>{content[0].name}</p>} */}

      {content &&
        content.map((item, index) => (
          <CardContent
            key={index}
            firstName={item.name}
            height={item.height}
            weight={item.mass}
            birthYear={item.birth_year}
          /> //key для чого ключ методів масиву
        ))}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f0101;
`;
const MainHeading = styled.h1`
  color: white;
  font-size: 50px;
`;
const StyleCardDiv = styled.div`
  width: 1000px;
  background-color: #67f6a7;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
