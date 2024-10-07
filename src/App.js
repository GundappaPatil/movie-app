
import './App.css';
import { RouterProvider } from "react-router-dom";
import {appRouter} from "../src/route/router"

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
