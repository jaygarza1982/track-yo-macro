
const TOKEN_NAME = 'authToken';

const generateToken = () => {
    const intArray = new Uint8Array(256);
    const randomBytes = window.crypto.getRandomValues(intArray);
    const base64Token = window.btoa(randomBytes);

    return base64Token;
}

module.exports = () => {
    const { localStorage } = window;

    // If our key exists, return
    if (localStorage.getItem(TOKEN_NAME)) return;

    localStorage.setItem(TOKEN_NAME, generateToken());

    console.log('Generated auth token');
}