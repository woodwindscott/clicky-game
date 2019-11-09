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
    initialImages: images
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

  handleCorrectGuess = () => {
    console.log("Inside Correct Guess");
    console.log(this.state.images);
  }

  handleIncorrectGuess = (newData) => {
    console.log("Incorrect Guess!!!");
    console.log(this.state.images);
  }


  handleSelect = (id) => {

    let guessedCorrectly = false;
    const newData = this.state.images.map(item => {
      const newItem = {...item}
      if (id === newItem.id) {
        console.log("This is the one I clicked");
        if (!newItem.isClicked) {
          newItem.isClicked = true;
          guessedCorrectly = true;
        }
      }
      console.log(newItem)
      return newItem;
    })
    // console.log(guessedCorrectly);
    console.log(newData);
    this.setState({ images: newData });
    (guessedCorrectly) ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData);
  }


  resetData = (array) => {
    const images = this.shuffle(array.map(item => ({ ...item, isClicked: false })));
    // return this.shuffle(images);
    this.setState({ images });
    console.log("This is the new state:" + this.shuffle(this.state.images));
 
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="row">
        {this.state.images.map((item, i) => (
            <Card
              handleSelect={this.handleSelect}
              key={item.id}
              id={item.id}
              index={i}
              name={item.name}
              src={item.url}
            />
          ))
        }

        {/* <button onClick={this.handleIncorrectGuess}>Reset</button> */}
        {/* <button onClick={() => this.resetData(this.state.images)}>Reset</button> */}


        </div>


      </div>
  );
}
}

export default App;
