import './image_viewer.css';

import small from '../assets/small.jpg';

export default () => {
  const image = document.createElement('img');
  image.src = small;

  document.body.appendChild(image);
}
///////

/*

import './image_viewer.css';

import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big; // If a file, can't prepend /build, instead add "public path" property to output object in webpack.config.js

document.body.appendChild(bigImage);

*/
