// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./src/store";
import App from "./src/App";
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);