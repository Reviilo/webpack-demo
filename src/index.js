import _ from 'lodash'; 
import printMe from './print.js';
import './style.css';

function component() {
  var element = document.createElement('dic');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}


// document.body.appendChild(component()); 
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);


if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the update printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
} else {
  console.log('warning!');
}