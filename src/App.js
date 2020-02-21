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
    selectedCharacters: [],
    highScore: 0,
    score: 0,
    displayMessage: "Click an image to start!"
  };

  shuffleCards = arr => arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);


  handleClick = event => {
    event.preventDefault();

    const cardId = event.target.id;

    this.clickCard(cardId);
  }


  clickCard = id => {
    if (this.state.selectedCharacters.includes(id)) {
      this.setState({
        displayMessage:"",
        highScore: (this.state.score > this.state.highScore) ? this.state.score: this.state.highScore,
        score:0,
        characters: characters,
        selectedCharacters:[]
      })
    }
    else {
      this.state.selectedCharacters.push(id);
      this.setState({
        displayMessage:"",
        score: this.state.score +1,
        characters: characters,
        selectedCharacters: this.state.selectedCharacters.push(id)
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
