console.log("This works and I'm a script :)");

// On sign in, ....
// - get the data from the form
const signin = (event) => {
  event.preventDefault();
  // alert("clicked");
  // - validate the form information --- username was entered, correct length, password was entered, correct characters and length

  // - authenticate the user --- check the database for the user
  // POST to api ... /api/v1/user
    // Stay tuned... next time we will talk about CRUD and POST GET DELETE PUT ...

  // - redirect to an account/profile page if found, otherwise "Matching username/password not found."
  // Simulate an HTTP redirect:
  window.location.replace("/profile");
};

// add an event listener to the signin-btn
document.querySelector("#signin-btn").addEventListener("click", signin);
