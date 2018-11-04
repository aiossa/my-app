import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {simpleCalculation} from './utils/utils';
import {compareTwoNumbers} from './utils/utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('calculation works', () => {
 expect(simpleCalculation(4,10)).toEqual(14);
 });

 it('calculation works', () => {
  expect(compareTwoNumbers(10,9)).toEqual(10);
  expect(compareTwoNumbers(5,17)).toEqual(17); 
  expect(compareTwoNumbers(0,-1)).toEqual(0);
  expect(compareTwoNumbers(5,g)).toEqual(5);  
  });
  