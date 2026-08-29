document.addEventListener('DOMContentLoaded', () => {
  // Baffle.js Text Glitch Animation on "ARES"
  if (typeof baffle !== 'undefined') {
    const b = baffle('.landing-accent');
    b.start()
     .set({ 
       characters: '█▓█ ░██░> ▒█▓▒ █░<█ ░▒░', 
       speed: 80 
     })
     .reveal(2500); // Reveals cleanly over 2.5 seconds
  }
});
