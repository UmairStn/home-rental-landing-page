const fs = require('fs');
const path = require('path');

try {
  console.log('Current directory:', __dirname);
  console.log('Files in directory:');
  const files = fs.readdirSync(__dirname);
  files.forEach(file => {
    console.log(file);
  });
  
  if (fs.existsSync(path.join(__dirname, 'index.html'))) {
    console.log('index.html exists!');
  } else {
    console.log('ERROR: index.html not found!');
  }
} catch (error) {
  console.error('Error reading directory:', error);
}

console.log('Debug complete');