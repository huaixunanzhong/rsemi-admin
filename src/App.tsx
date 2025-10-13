import './App.css';

import { BrowserRouter } from "react-router-dom";

import RenderRouter from "./router";

const App = () => {
  return (
      <BrowserRouter>
          <RenderRouter/>
      </BrowserRouter>
  );
};

export default App;
