import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider> */}
      <Suspense fallback={<div>loading</div>}>
        <App />
      </Suspense>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
