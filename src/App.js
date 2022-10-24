import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

export default function App() {
  return (
    <Router>
      <div className="content">
        <div className="">
          <Route path="/" exact component={PostList} />
          <Route path="/posts/:id" component={PostDetail} />
        </div>
      </div>
    </Router>
  );
}
