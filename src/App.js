import React, { Suspense } from "react";
import "./App.css";

const Post = React.lazy(() => import("./components/Post"));
const Movie = React.lazy(() => import("./components/Movie"));

function App() {
  return (
    <div className="App">
      <h1>React Lazy</h1>
      <Suspense fallback={<div>Loading .....</div>}>
        <Movie />
      </Suspense>
      <Suspense fallback={<div>Loading POst .....</div>}>
        <Post />
      </Suspense>
    </div>
  );
}

export default App;
