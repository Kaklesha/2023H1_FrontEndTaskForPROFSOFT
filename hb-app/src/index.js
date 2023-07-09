import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/app/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode> Commented out since it caused double requests in dev build
    <App />
);