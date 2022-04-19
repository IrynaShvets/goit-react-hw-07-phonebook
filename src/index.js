import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
/* import { PersistGate } from 'redux-persist/es/integration/react'; */
import 'modern-normalize/modern-normalize.css';
import { store } from './redux/store';
import App from './components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}></PersistGate> */}
      <App />
    </Provider>
  </React.StrictMode>,
);
