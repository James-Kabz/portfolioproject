 function changeBackgroundColor() {
    // Get the body element
    var body = document.body;

    // Check if the body has a dark class
    var isDarkMode = body.classList.contains("dark-mode");

    // Toggle between light and dark mode
    if (isDarkMode) {
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
    }
  }