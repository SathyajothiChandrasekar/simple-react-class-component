import './App.css';
import Card from './components/card';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
