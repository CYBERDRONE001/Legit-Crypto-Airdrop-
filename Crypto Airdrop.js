document.getElementById('Button').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/ZubbyUSDTbot?start=5145669742";
});

document.getElementById('Button1').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/Freecryptodevzbot?start=user11715305";
});

document.getElementById('Button2').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/BuzzFollowersbot?start=user11715305";
});

document.getElementById('Button3').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/BlazenRobot?start=5145669742";
});

document.getElementById('Button4').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/DigibyteSDGBAirdropBot?start=5145669742";
});

document.getElementById('Button5').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/BeesLandBot?start=5145669742";
});

document.getElementById('Button6').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/Tetheruspaybot?start=user11715305";
});

// Function to open the popup notification
function openPopup() {
    var popup = window.open('', 'Popup', 'width=400,height=200');
    popup.document.write('<h2>Important Notice!</h2>');
    popup.document.write('<p>All visitors must have Telegram app and Trust Wallet or MetaMask wallet.</p>');
    popup.document.write('<p>If you have any problems or need assistance, please choose an option below:</p>');
    popup.document.write('<button onclick="messageCreator()">Message the Creator/Developer</button>');
    popup.document.write('<button onclick="cancel()">Cancel</button>');
}

// Function to redirect to message the creator option
function messageCreator() {
    // Replace 'your_username' with your actual username or link
    window.location.href = 'https://t.me/your_username'; // Example Telegram link
}

// Function to cancel
function cancel() {
    // Close the popup
    window.close();
}

// Call the openPopup function to open the popup notification when the page loads
window.onload = openPopup;