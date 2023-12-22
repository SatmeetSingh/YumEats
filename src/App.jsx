import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewItem from "./pages/ViewItem";
import Meal from "./components/Meal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="meal" element={<Meal />} />
          <Route path="meal/:id" element={<ViewItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
