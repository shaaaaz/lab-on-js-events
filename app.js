// Challenge 1: Print your name in the "user" span when the page loads.
window.onload = function () {
    const userSpan = document.getElementById("user");
    userSpan.innerHTML = "shaaz";
  };
  
  // Challenge 2: Change the background color of the button on click.
  const clickButton = document.getElementById("btn-click");
  clickButton.onclick = function () {
    clickButton.style.backgroundColor = "red";
  };
  
  // Challenge 3: Make a sentence from the form inputs and display it in the "statement" div.
  const buildButton = document.getElementById("build-button");
  const statementDiv = document.getElementById("statement");
  
  buildButton.addEventListener("click", function () {
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const adverb = document.getElementById("adverb").value;
  
    const sentence = `${noun} ${verb} ${adverb}`;
    statementDiv.textContent = sentence;
  });
  
  // Challenge 4.1: Event bubbling example
  const grandparentDiv = document.getElementById("grandparent");
  const parentDiv = document.getElementById("parent");
  const childDiv = document.getElementById("child");
  
  childDiv.addEventListener("click", function () {
    console.log("Child clicked");
  });
  parentDiv.addEventListener("click", function () {
    console.log("Parent clicked");
  });
  grandparentDiv.addEventListener("click", function () {
    console.log("Grandparent clicked");
  });
  
  // Challenge 4.2: Event capturing example
  childDiv.addEventListener("click", function () {
    console.log("Child clicked");
  }, true); 
  parentDiv.addEventListener("click", function () {
    console.log("Parent clicked");
  }, true); 
  grandparentDiv.addEventListener("click", function () {
    console.log("Grandparent clicked");
  }, true);
  
  // Challenge 5: Event delegation example
  const categoryList = document.getElementById("category");
  categoryList.addEventListener("click", function (event) {
    if (event.target.id === "blazers") {
      console.log("blazers");
    }
  });
  
  