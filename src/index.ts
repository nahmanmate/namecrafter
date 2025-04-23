// Copyright © 2025 James Johns - All Rights Reserved
// Random Name Generator

const randomName = require("./nameGenerator.js");

// Add the name generator to the window object to make it globally accessible
(window as any).generateName = () => {
  const nameDisplay = document.getElementById("name");
  if (nameDisplay) {
    nameDisplay.textContent = randomName();
  }
};
