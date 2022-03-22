import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./components/NotFound";
import './plugins/Bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
