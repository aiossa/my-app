import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {simpleCalculation} from './utils/utils';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('calculation works', () => {
//     expect(simpleCalculation(4,10)).toEqual(14);
// });