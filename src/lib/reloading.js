// Get the elements by their class names
var loadingContainer = document.getElementsByClassName("loading_container")[0];
var loadingTextContainer = document.getElementsByClassName("loading_text_container");

// Set the initial value of the loading number
var loadingNum = 0;

// Create a function that updates the loading number and the text
function updateLoading() {
  // Get the element by its id
  var loadingNumElement = document.getElementById("LOADING_NUM");
  // Increment the loading number by 1
  loadingNum++;
  // Update the text content of the element
  loadingNumElement.textContent = loadingNum + "%";
}

// Create a function that hides the loading text container
function hideLoadingText() {
  // Loop through the loading text container elements
  for (var i = 0; i < loadingTextContainer.length; i++) {
    // Add the hidden class to each element
    loadingTextContainer[i].classList.add("hidden");
  }
}

// Create a function that hides the loading container
function hideLoadingContainer() {
  // Add the hidden class to the loading container element
  loadingContainer.classList.add("hidden");
}

// Create a function that changes the class of the loading container
function changeLoadingClass() {
    // Replace the hidden class with the disappear class
    loadingContainer.classList.replace("hidden", "disappear");
  }
  
  // Create a function that hides the loading container
  function hideLoadingContainer() {
    // Add the hidden class to the loading container element
    loadingContainer.classList.add("hidden");
    // Set a timeout to change the class after 500 milliseconds
    setTimeout(changeLoadingClass, 1500);
  }
  

// Create a function that runs the loading animation
function runLoading() {
  // Set an interval to update the loading number every 20 milliseconds
  var loadingInterval = setInterval(updateLoading, 20);
  // Set a timeout to hide the loading text container after 2 seconds
  var loadingTextTimeout = setTimeout(hideLoadingText, 2000);
  // Set a timeout to hide the loading container after 2.5 seconds
  var loadingContainerTimeout = setTimeout(hideLoadingContainer, 2500);
  // Set a timeout to clear the interval after 2 seconds
  var loadingClearTimeout = setTimeout(function() {
    clearInterval(loadingInterval);
  }, 2000);
}

// Run the loading animation when the page loads
window.onload = runLoading;
