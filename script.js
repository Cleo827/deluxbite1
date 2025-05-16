

// ...existing code...

// Check if the screen is 600px or less
const mediaQuery = window.matchMedia('(max-width: 200px)');

function handleTabletChange(e) {
  if (e.matches) {
    // If media query matches
    alert('Screen is 600px or less!');
    // You can also add or remove classes, change styles, etc.
    // document.body.style.backgroundColor = 'lightblue';
  } else {
    // document.body.style.backgroundColor = '';
  }
}

// Register event listener
mediaQuery.addEventListener('change', handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);