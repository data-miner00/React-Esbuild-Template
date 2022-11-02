import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/Header";

export const App = () => (
  <div>
    <Header />
    <h1>hello</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
