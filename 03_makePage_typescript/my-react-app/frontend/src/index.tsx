import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found. Make sure there's a <div id='root'> in your index.html");
}

// React 18以降推奨の書き方:
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
