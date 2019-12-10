import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RichTextExample } from '../.';
import './index.css';

const App = () => {
  return (
    <div>
      <RichTextExample />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
