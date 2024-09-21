import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Houses from './pages/Houses';
import CharacterDetail from './pages/CharacterDetail';
import HouseDetail from './pages/HouseDetail';
import './App.css';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/houses/:family" element={<HouseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
