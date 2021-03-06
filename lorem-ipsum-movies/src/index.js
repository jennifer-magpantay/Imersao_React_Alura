import React from "react";
import ReactDOM from "react-dom";
import "../src/style/reset.css";
import "../src/style/index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import addArticle from './screens/addArticle';
import addCategory from './screens/addCategory';
import ErrorScreen from "./screens/ErrorScreen";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/home" component={HomeScreen} />
      <Route path="/article" component={addArticle} />
      <Route path="/category" component={addCategory} />      
      <Route path="/" component={ErrorScreen} />      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
