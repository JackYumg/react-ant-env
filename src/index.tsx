import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import BaseRoute from './routes/routes';
import { Provider } from 'react-redux'
import { rootStore } from './store';
import './mock/index';
const startUp = () => {
  ReactDOM.render(
    <Provider store={rootStore}>
      <BaseRoute />
    </Provider>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


rootStore.subscribe(startUp);