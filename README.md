# clicky-game
React - Clicky Game

# Resources
GitHub Repo - https://github.com/woodwindscott/clicky-game

Deployed Version on Netlify: https://lucid-golick-e30f3e.netlify.com/

# User Instructions

1. Click on any image to begin.

2. Continue clicking on images, but be sure to click on images that haven't been clicked before to reach a new high score!

*******************************************************

# Notes about the development process

## Technologies Used

1. Javascript
2. Bootstrap
3. React


## How the code is structured

All of the images are stored in the /public/images/ folder.  Everything else is in the source ('src') folder.  I created specific components for the navbar, jumbotron and card.  A fair bit of custom CSS was added in each component subfolder.  Most of the logic and rendering of the screen happen inside App.js.

## Problems encountered

1. It took me a long time to understand how to properly update the images.json file that is imported at the beginning and properly save changes to state.  Once that became clear, the rest was much easier.

2. Looking at the sample product, there were a lot of CSS features, most notably animations and transitions with the text at the top and the individual pictures when hovered or the images shaking at an incorrect guess.  It took a fair bit of research to figure out how to implement those changes.

3. One problem in particular that I still have not been able to solve is the rendering of the green text when a correct guess is made (image click).  I am able to render that green text through an assignment of an extra class through props.  The problem is that since no change is made to the state value of the correct guess on the second and subsequent guesses, I cannot figure out how to trigger that same class each time.

# Future Development

I think I could spend more time looking at the CSS and really getting into it.  It would be nice to move away from the Bootstrap framework that I've depended on for so long.