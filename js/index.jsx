import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import CompoA from "./component/CompoA";
import CompoB from "./component/CompoB";

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/compo-a">CompoA</Link></li>
        <li><Link to="/compo-b">CompoB</Link></li>
      </ul>
      <hr/>
      <Route path="/compo-a" component={CompoA}/>
      <Route path="/compo-b" component={CompoB}/>
    </div>
  </Router>,
  document.getElementById("root")
);
