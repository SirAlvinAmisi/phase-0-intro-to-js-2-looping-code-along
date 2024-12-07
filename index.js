// Code your solutions in this file
function writeCards(names, event) {
    let messages = []; // Create an empty array to hold the messages.
    for (let i = 0; i < names.length; i++) { // Loop through the names array.
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); // Add a custom message to the array.
    }
    return messages; // Return the array of messages.
  }
  
  // Example usage:
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  
  function countDown(start) {
    while (start >= 0) { // Keep looping until the number reaches 0.
      console.log(start); // Log the current number.
      start--; // Decrease the number by 1.
    }
  }
  
  // Example usage:
  countDown(10);
  