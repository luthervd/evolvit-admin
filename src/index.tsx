import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentList from './features/content/contentList';
import ContentEdit from './features/content-edit/ContentEdit';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route path="content" element={<ContentList />} />
        <Route path="content-edit" element={<ContentEdit />}>
          <Route path=":id" element={<ContentEdit />}/>
        </Route>
      </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
