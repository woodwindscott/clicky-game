import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Card from "./components/Card/Card.js";
import images from "./images.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    score: 0,
    topScore: 0,
    guess: ""
  };

  shuffle = (array) => {
    let m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  checkTopScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.topScore + 1
      })
    }
  }

  handleCorrectGuess = (newData) => {
    // console.log("Inside Correct Guess");
    this.setState({ 
      images: this.shuffle(newData),
      score: this.state.score + 1,
      guess: true
    }, () => {
      this.checkTopScore();
      console.log(this.state.images);
    })
  }

  handleIncorrectGuess = (newData) => {
    // console.log("Incorrect Guess!!!");
    this.setState({
      images: this.resetData(newData),
      score: 0,
      guess: false
    }, () => {
      console.log(this.state.images);
    })
  }

  handleSelect = (id) => {

    let guessedCorrectly = false;
    const newData = this.state.images.map(item => {
      const newItem = {...item}
      if (id === newItem.id) {
        console.log("This is the one I clicked");
        console.log(newItem);
        if (!newItem.isClicked) {
          newItem.isClicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    })
    this.setState({ images: newData }, () => {
      (guessedCorrectly) ? this.handleCorrectGuess(this.state.images) : this.handleIncorrectGuess(this.state.images);
    });
  }

  resetData = (array) => {
    const images = this.shuffle(array.map(item => ({ ...item, isClicked: false })));
    return images; 
  }

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          guess={this.state.guess}
        />
        <Jumbotron />
          <div className="wrapper">
            <div className="row justify-content-center">
              {this.state.images.map((item, i) => (
                <Card
                  handleSelect={this.handleSelect}
                  guess={this.state.guess}
                  key={item.id}
                  id={item.id}
                  index={i}
                  name={item.name}
                  src={item.url}
                />
              ))
              }
            </div>
          </div>
      </div>
    );
  }
}

export default App;
