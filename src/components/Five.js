import React, { Component } from "react";

export default class Five extends Component {
  state = {
    players: [
      { name: "Jack", answered: 10, correct: 8 },
      { name: "Steve", answered: 8, correct: 7 },
      { name: "William", answered: 12, correct: 9 },
      { name: "Kathy", answered: 11, correct: 10 },
      { name: "Edward", answered: 9, correct: 6 },
      { name: "Mary", answered: 13, correct: 8 },
    ],
    correctScore: 2,
    incorrectScore: -1,
  };

  sortPlayers = (player1, player2) => {
    const { correctScore, incorrectScore } = this.state;
    let x1 =
      player1.correct * correctScore +
      (player1.answered - player1.correct) * incorrectScore;
    let x2 =
      player2.correct * correctScore +
      (player2.answered - player2.correct) * incorrectScore;
    return x2 - x1;
  };

  totalQuestions = () => {
    const { players } = this.state;
    return players.reduce((acc, curr) => acc + curr.answered, 0);
  };

  totalCorrect = () => {
    const { players } = this.state;
    return players.reduce((acc, curr) => acc + curr.correct, 0);
  };

  //name answer correct and score
  render() {
    const { players, incorrectScore, correctScore } = this.state;
    const copyOfPlayers = [...players];
    copyOfPlayers.sort(this.sortPlayers);
    let totalQuestionsAsked = this.totalQuestions();
    let totalCorrectAnswers = this.totalCorrect();

    return (
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Answered</th>
            <th>Correct</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            const { name, answered, correct } = player;
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{answered}</td>
                <td>{correct}</td>
                <td>
                  {correct * correctScore +
                    (answered - correct) * incorrectScore}
                </td>
              </tr>
            );
          })}
          <tr>
            <th colSpan="4">Leaderboard</th>
          </tr>
          {copyOfPlayers.map((player, index) => {
            const { name, answered, correct } = player;
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{answered}</td>
                <td>{correct}</td>
                <td>
                  {correct * correctScore +
                    (answered - correct) * incorrectScore}
                </td>
              </tr>
            );
          })}
          <tr>
            <th colSpan="4">Statistics</th>
          </tr>
          <tr>
            <td>Total Questions: {totalQuestionsAsked}</td>
            <td>CorrectAnswers: {totalCorrectAnswers}</td>
            <td>
              Incorrect Answers: {totalQuestionsAsked - totalCorrectAnswers}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
