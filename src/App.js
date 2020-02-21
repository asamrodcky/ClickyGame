import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper/';
import Navbar from './components/Navbar/';
import Jumbotron from './components/Jumbotron/';
import ClickCard from './components/Click/';
import characters from './characters.json';


class App extends Component {
  state = {
    characters: characters,
    unselectedCharacters: characters,
    highScore: 0,
    score: 0,
    displayMessage: "Click an image to start!"
  };

  shuffleCards = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  clickCard = id => {
    const selectCharacter = this.state.unselectedCharacters.find(item => item.id === id);

    if (selectCharacter === undefined) {
      this.setState({
        displayMessage: "WRONG! YOU MUST START OVER!",
        highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
        score: 0,
        characters: characters,
        unselectedCharacters: characters
      })
    }
    else {
      const newCharacters = this.state.unselectedCharacters.filter(item => item.id !== id);

      this.setState({
        displayMessage: "CORRECT! Try another.",
        score: this.state.score + 1,
        characters: characters,
        unselectedCharacters: newCharacters
      })
    }
    this.shuffleCards(characters);
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          highScore={this.state.highScore}
          score={this.state.score}
          displayMessage={this.state.displayMessage}
        />
        <Jumbotron></Jumbotron>
        {this.state.characters.map(characters => (
          <ClickCard
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
            clickCard={this.clickCard}
            highScore={this.state.highScore}
            score={this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
