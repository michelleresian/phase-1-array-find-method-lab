// The superbowlWin function takes an array of Super Bowl game objects as input
function superbowlWin(superbowls) {
    // The find method is used to search through the array
    // It looks for the first game where the result property is 'W' (indicating a win)
    const winningGame = superbowls.find(game => game.result === 'W');
    
    // If a winning game is found, return the year of that game
    // If no winning game is found, return undefined
    return winningGame ? winningGame.year : undefined;
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
    
    // ... other game objects
  ];
  
  // Call the superbowlWin function with the array of Super Bowl games
  const winningYear = superbowlWin(superbowls);
  
  // If there's a winning year, log it; otherwise, indicate no win
  if (winningYear) {
    console.log(`The Super Bowl win occurred in ${winningYear}!`);
  } else {
    console.log('Sadly, there was no Super Bowl win.');
  }