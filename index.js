        // script.js

// Define the URLs for the airdrops
var airdropUrls = {
    airdrop1: "Airdropwebsite.html",
    airdrop2: "Crypto Airdrop.html",
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
        window.location.href = 'Find Airdrop_2.0.apk';
    });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const message = req.body.message;
  if (message && message.text) {
    console.log('Received message:', message.text);
    // Add code to update the website with the message
  }
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
