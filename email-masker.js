   
function maskEmail(email) {
    
    email = email.trim().toLowerCase();
    const atIndex = email.indexOf("@");
    if (atIndex === -1) {
        return "Invalid email address";
    }
    // Separate the username and domain
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);
    
    // Grab the 3 parts of the username
    const firstChar = username.slice(0, 1);
    const lastChar = username.slice(-1);
    const middleLength = username.length - 2;
    
    // Generate the asterisks for the middle
    const maskedMiddle = "*".repeat(middleLength);
    
    // Return everything combined
    return `${firstChar}${maskedMiddle}${lastChar}${domain}`;
}
// test
let email = "guest@example.com";
console.log(maskEmail(email));
