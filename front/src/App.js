
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Create from "./pages/Create"
import Detail from "./pages/Detail"
import Update from "./pages/Update"

function App() {
  return (
    <div>
      <Routes>
        <Route pathe="/" element={<Home /> } />
        <Route pathe="/create" element={<Create /> } />
        <Route pathe="/detail/:id" element={<Detail /> } />
        <Route pathe="/update/:id" element={<Update /> } />
      </Routes>
    </div>
  );
}

export default App;
