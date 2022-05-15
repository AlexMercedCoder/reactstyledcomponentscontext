import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.querySelector("#root"));
root.render(
  <Router>
    <App />
  </Router>
);
