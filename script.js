// Text "generation"
const b = baffle('.landing-accent');
b.start()
 .set({ characters: '░▒░ ░██░> ████▒ >█░░ ██', speed: 100 })
 .reveal(4000); // Reveals the text over 4 second

document.getElementById("about-btn").addEventListener("click", function() {
	// Redirect to Portfolio Portion
    window.location.href = "#about";   
});  
 
document.getElementById("members-btn").addEventListener("click", function() {
	// Redirect to Portfolio Portion
    window.location.href = "missing.html";   
});  
 
document.getElementById("research-btn").addEventListener("click", function() {
	// Redirect to Portfolio Portion
    window.location.href = "missing.html";   
});  
 
document.getElementById("contact-btn").addEventListener("click", function() {
	// Redirect to Portfolio Portion
    window.location.href = "#contact";   
});   
