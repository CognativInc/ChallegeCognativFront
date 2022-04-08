import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/HomePage/Home";
import Detail from "./pages/recipe/Detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
