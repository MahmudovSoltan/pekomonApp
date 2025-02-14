import { useState } from "react";
import Title from "./components/title";
import Button from "./components/button";
import Container from "./components/container";
import data from "./data.json";

function App() {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
 

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function startGame() {
    const shuffledData = shuffleArray([...data]); 
    const mid = Math.floor(shuffledData.length / 2);

    const newTeam1 = shuffledData.slice(0, mid);
    const newTeam2 = shuffledData.slice(mid);

    const sum1 = newTeam1.reduce((sum, item) => sum + item.base_experience, 0);
    const sum2 = newTeam2.reduce((sum, item) => sum + item.base_experience, 0);

    setTeam1(newTeam1);
    setTeam2(newTeam2);
    setScore1(sum1);
    setScore2(sum2);


  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Title title="Pokedex Battle" />
      <Button startButton={startGame} />
      <Container data={team1} user1={score1} />
      <Title title="VS" />
      <Container data={team2} user1={score2} />
     
    </div>
  );
}

export default App;
