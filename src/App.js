import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>

        <Routes>
          <Route path="/" element={<Home />} ></Route>

          <Route path="/search" element={<SearchPage />} > </Route>
        </Routes>


        {/* <h1>Google clone😀!</h1> */}

        {/* Home (the one with the search on) */}
        {/* <Home /> */}
        {/* Search page (the results page) */}
      </Router>
    </div>
  );
}

export default App;
