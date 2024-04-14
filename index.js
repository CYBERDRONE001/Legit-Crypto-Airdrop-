        // script.js

// Define the URLs for the airdrops
var airdropUrls = {
    airdrop1: "Crypto Airdrop.html",
    airdrop2: "Airdropwebsite.html",
    airdrop3: "https://wa.me/+2347043934781"
    // Add more URLs as needed
};

// Add event listener to all airdrop links
document.addEventListener('DOMContentLoaded', function() {
    for (var key in airdropUrls) {
        if (airdropUrls.hasOwnProperty(key)) {
            document.getElementById(key).addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                // Open the corresponding URL in a new tab
                window.open(airdropUrls[this.id], '_blank');
            });
        }
    }
});
const darkWebButton = document.getElementById('dark-web-button');

    darkWebButton.addEventListener('click', function() {
        window.location.href = 'https://your-dark-web-portal.com';
    });
