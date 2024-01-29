/* HEADERSLIDER */

document.addEventListener('DOMContentLoaded', () => {
    // Select the burger menu and side menu elements
    const burgerMenu = document.querySelector('.burger-icon');
    const sideMenu = document.querySelector('.slide_in_container');
  
    // Add a click event listener to the burger menu
    burgerMenu.addEventListener('click', () => {
      // Toggle the "open" class on the side menu to show/hide it
      sideMenu.classList.toggle('open');
    });
  });

/* LANGUAGE TOGGLE */

  document.addEventListener('DOMContentLoaded', () => {
    const blackSlider = document.querySelector('.black_slider');
    const whiteSlider = document.querySelector('.white_slider');
    const ToggleButton = document.querySelector('.slider')
  
    // Add a click event listener to the .white_slider element
    ToggleButton.addEventListener('click', () => {
      // Toggle the .en class on the black slider and white slider elements
      blackSlider.classList.toggle('en');
      whiteSlider.classList.toggle('it');
    });
  });
  
/* ULTRASWITCH */

// Function to toggle classes within a given element
function toggleClasses(element) {
  if (element) {
    element.classList.toggle('default');
    element.classList.toggle('ultra');
  }
}

// Function to traverse iframes and their content
function traverseIframes(iframe) {
  const iframeDocument = iframe.contentDocument;
  if (iframeDocument) {
    toggleClasses(iframeDocument.body);

    const nestedIframes = iframeDocument.querySelectorAll('iframe');
    nestedIframes.forEach(nestedIframe => {
      traverseIframes(nestedIframe);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.ULTRABUTTON');
  const transitionDiv = document.querySelector('.ultra_transition');

  button.addEventListener('click', () => {
    // Start the animation
    transitionDiv.classList.add('animate');

    // Set a timeout to toggle classes after 0.8s
    setTimeout(() => {
      toggleClasses(document.body);

      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        traverseIframes(iframe);
      });
    }, 800);  // 0.8s = 800ms

    // Listen for the end of the animation
    transitionDiv.addEventListener('animationend', () => {
      // Reset the animation
      transitionDiv.classList.remove('animate');
    }, { once: true });
  });
});




/* HEADER ANCHORS */

// Add a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
  // Get all anchor elements with the class 'header_anchor'
  const anchorElements = document.querySelectorAll('.header_anchor');

  // Get the height of your header
  const headerHeight = document.querySelector('header').offsetHeight;

  // Add a click event listener to each anchor element
  anchorElements.forEach(anchor => {
    anchor.addEventListener('click', () => {
      // Get the target element's ID from the data-target attribute
      const targetId = anchor.getAttribute('data-target');

      // Find the target element by its ID
      const targetElement = document.querySelector(targetId);

      // Scroll to the target element with smooth behavior and offset by the header height
      if (targetElement) {
        window.scroll({
          top: targetElement.getBoundingClientRect().top + window.scrollY - headerHeight,
          behavior: 'smooth'
        });
      }
    });
  });
});

/* BUYING SLIDER */

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the buttons and the buying_slider
  const buyButtons = document.querySelectorAll(".button#BUY_ACTIVE"); // Select buttons with class "button" and ID "BUY_ACTIVE"
  const buyingSlider = document.querySelector(".buying_slider");
  const exitSliderButton = document.querySelector(".exit_slider");

  // Add a click event listener to open the slider for each "button" with ID "BUY_ACTIVE"
  buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      buyingSlider.classList.add("open");
    });
  });

  // Add a click event listener to close the slider
  exitSliderButton.addEventListener("click", function () {
    buyingSlider.classList.remove("open");
  });
});


/* GALLERY */

document.addEventListener('DOMContentLoaded', () => {
  // Get references to the images and the gallery container
  const images = document.querySelectorAll('gallery section a');
  const gallery = document.querySelector('gallery');

  // Initialize the currently displayed image
  let currentIndex = 1;

  // Function to show the current image and hide the others
  function showImage(index) {
    // Hide all images
    images.forEach((image, i) => {
      if (i === index) {
        image.style.display = 'flex'; // Show the selected image
      } else {
        image.style.display = 'none'; // Hide other images
      }
    });
  }

  // Add a click event listener to the common ancestor of all gallery components
document.addEventListener('click', (event) => {
  // Check if the clicked element is inside a gallery component
  const gallery = event.target.closest('gallery');

  if (gallery) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the images and switch container within this specific gallery
    const images = gallery.querySelectorAll('a');
    const switchContainer = gallery.querySelector('.switch_container');

    // Find the current index based on the displayed image
    const currentIndex = Array.from(images).findIndex((img) => img.style.display !== 'none');

    if (currentIndex > -1) {
      // Hide the currently displayed image
      images[currentIndex].style.display = 'none';

      // Increment the index to switch to the next image
      const newIndex = (currentIndex + 1) % images.length;

      // Show the new image
      images[newIndex].style.display = 'block';
    }
  }
});

});













