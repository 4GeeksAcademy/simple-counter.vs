import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../styles/index.css';
import SecondsCounter from './components/SecondsCounter';

let time = 0;

function counter() {
  ReactDOM.createRoot(document.getElementById('root')).render(<SecondsCounter seconds={time} />
  );
  time++;
}

setInterval(counter, 1000);
