const getRandomUppercase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const getRandomLowercase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);
const getRandomSymbol = () => {
  const symbols = '!@#;:,.<>?_+[]{}|$%^&*()`~';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

function generatePassword(length, options) {
  const { uppercase, lowercase, numbers, symbols } = options;
  const availableFunctions = [];
  if (uppercase) availableFunctions.push(getRandomUppercase);
  if (lowercase) availableFunctions.push(getRandomLowercase);
  if (numbers) availableFunctions.push(getRandomNumber);
  if (symbols) availableFunctions.push(getRandomSymbol);

  if (availableFunctions.length === 0) {
    alert('Please select at least one character type!');
    return '';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomFunc = availableFunctions[Math.floor(Math.random() * availableFunctions.length)];
    password += randomFunc();
  }
  return password;
}


document.getElementById('generate').addEventListener('click', () => {
  const length = parseInt(document.getElementById('length').value);
  const options = {
    uppercase: document.getElementById('uppercase').checked,
    lowercase: document.getElementById('lowercase').checked,
    numbers: document.getElementById('numbers').checked,
    symbols: document.getElementById('symbols').checked,
  };

  const password = generatePassword(length, options);
  document.getElementById('password').textContent = password;
});