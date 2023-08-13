import './App.css';
import { Route, Routes } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import SingleMoviePage from './pages/SingleMoviePage';
import StarredPage from './pages/StarredPage';
import WatchLaterPage from './pages/WatchLaterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MoviesPage/>}/>
        <Route path="/:movieId" element={<SingleMoviePage/>}/>
        <Route path="/starred" element={<StarredPage/>}/>
        <Route path="/watchlist" element={<WatchLaterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
