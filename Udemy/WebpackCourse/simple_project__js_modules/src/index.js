const button = document.createElement('button');
button.innerText = 'Click me';


// ES7 version
button.onclick = async () => {
  // Only load image viewer module AFTER button has been clicked
  let module = await System.import('./image_viewer');
  console.log(module);
  module.default();
};

// ES6 version
// button.onclick = () => {
//   System.import('./image_viewer').then(module => {
//     console.log(module);
//   });
// };

document.body.appendChild(button);

// Previous code

// //const sum = require('./sum'); // CommonJS (NodeJS)
// import sum from './sum'; // ES2015
// import './image_viewer';
//
// const total = sum(10, 5);
// console.log(total);
