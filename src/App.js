import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/';
import Navbar from './components/Navbar/';
import ClickCard from './components/Click/';
import characters from './characters.json';


class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        {this.state.characters.map(characters => (
          <ClickCard
            id={characters.id}
            name={characters.name}
            image={characters.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
