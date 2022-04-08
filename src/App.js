import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/recipe/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/detail/:id`} element={<Detail />} />
    </Routes>
  );
}

export default App;
