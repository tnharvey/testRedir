let  checkSecure = false;
let  checkPermissive = false;
let  devMAC = "";

// SecureBrowser.security.isEnvironmentSecure(function (state) {
//         const secureState = JSON.parse(state);
//         checkSecure = secureState.secure;
//     });
// SecureBrowser.security.getPermissiveMode(function (permissiveMode) {
//         checkPermissive = permissiveMode;
//     });
// SecureBrowser.security.getMACAddress(function (addressArray) {
//         devMAC = addressArray;
//     });
// Reference to the iframe

// Function to launch the test
function launchTest() {
    // Set the source URL of the iframe to the test URL
    testFrame.src = "https://forms.office.com/r/0HhmYfaGRJ"; // Replace with your actual test URL
}

// Function to close the test
function closeTest() {
    // Clear the iframe source URL to close the test
    SecureBrowser.security.close();
}

window.onload = function () {
    let testFrame = document.getElementById("testFrame");
    launchTest();
}
