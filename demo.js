// We use the Objects below to control toggling like/unlike status
const glyphStates = {
  "♡": "♥", // Empty heart becomes a full heart
  "♥": "♡"  // Full heart becomes an empty heart
};

const colorStates = {
  "red": "", // Red heart becomes default
  "": "red"  // Default heart becomes red
};

// STEP 1: Locate all the heart elements we want to make clickable
const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target; // The heart element that was clicked
  mimicServerCall() // Simulating server communication
    .then(function(serverMessage) {
      // STEP 2: Update the screen when the server call succeeds
      alert("You notified the server!");
      console.log(serverMessage); // Logging the server message for debugging
      heart.innerText = glyphStates[heart.innerText]; // Toggle heart symbol
      heart.style.color = colorStates[heart.style.color]; // Toggle heart color
    })
    .catch(function(error) {
      // Handle server error
      alert("Something went wrong!");
    });
}

// STEP 3: Add click event listeners to each heart element
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // Simulate success response from server
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
