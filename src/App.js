// Dependencies
import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Card from "./components/Card/Card.js";
import images from "./images.json";


class App extends Component {
  // Setting initial state values
  state = {
    images,
    score: 0,
    topScore: 0,
    guess: ""
  };

  // Shuffle Function
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

  // Function to check top score and compare it to current score...save new value to state if appropriate
  checkTopScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.topScore + 1
      })
    }
  }

  // If guessed correctly...
  handleCorrectGuess = (newData) => {
    this.setState({ 
      images: this.shuffle(newData),
      score: this.state.score + 1,
      guess: true
    }, () => {
      // Follow up to check top score value
      this.checkTopScore();
    })
  }

  // If guessed incorrectly...
  handleIncorrectGuess = (newData) => {
    this.setState({
      images: this.resetData(newData),
      score: 0,
      guess: false
    })
  }

  // What happens when an image is clicked
  handleSelect = (id) => {
    // Initial value of guessed correctly set to false...will update if correct
    let guessedCorrectly = false;

    // Make a copy of state.images and map over each item to see if the one you clicked has been clicked before
    const newData = this.state.images.map(item => {
      const newItem = {...item}
      if (id === newItem.id) {
        if (!newItem.isClicked) {
          newItem.isClicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    })

    //Setting state with new value of isClicked true and then routing based on incorrect or correct guess.
    this.setState({ images: newData }, () => {
      (guessedCorrectly) ? this.handleCorrectGuess(this.state.images) : this.handleIncorrectGuess(this.state.images);
    });
  }

  // Function to handle the reset of data once an incorrect guess is made
  resetData = (array) => {
    const images = this.shuffle(array.map(item => ({ ...item, isClicked: false })));
    return images; 
  }

  // Render to the screen
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
              {/* Map through all the data to render images */}
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
