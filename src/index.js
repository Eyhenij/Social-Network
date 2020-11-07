import React from 'react';
import ReactDOM from "react-dom";
import './index.css'
import store from "./redux/state";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
// import {addMessage, addPost, updateNewMessageText, updateNewPostText, subscribe} from "./redux/state";


let reRenderEntireTree = (state) => {
 ReactDOM.render(
      <BrowserRouter>
      <App
          state={state}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
          addMessage={store.addMessage.bind(store)}
          updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
      </BrowserRouter>,
     document.getElementById('root'));
}
reRenderEntireTree(store.getState())
store.subscribe(reRenderEntireTree);