import { useState } from "react";
import Title from "./components/title";
import Button from "./components/button";
import Container from "./components/container";
import data from "./data.json";

function App() {
  const [show, setShow] = useState(false);
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
    setShow(true);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Title title="Pokedex" />
      <Button startButton={startGame} />
      {show && (
        <div>
          <Container data={team1} user1={score1} title={score1>score2?"Winner":"Lose"} />
          <Title title="VS" />
          <Container data={team2} user1={score2} title={score2>score1?"Winner":"Lose"} />
        </div>
      )}
    </div>
  );
}

export default App;
