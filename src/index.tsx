import { h, render } from 'preact';
import 'preact/devtools';
import App from './App.js';
import './index.css';
import { explorer } from './store'
import './tailwind.css'

const root = document.getElementById('root')


if (root) {
  render(<App explorer={explorer} />, root);
}
