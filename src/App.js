import './App.css';
import Header from './components/header/Header';
import PeriodicTable from './components/periodicTable/PeriodicTable';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reaction from './components/reaction/Reaction';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<PeriodicTable />} />
            <Route path="/chemistry" element={<PeriodicTable />} />
            <Route path="/reaction" element={<Reaction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
