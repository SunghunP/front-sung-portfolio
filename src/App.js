import { Route, Routes } from 'react-router-dom'

// pages
import Home from "./pages/Home";
import Projects from './pages/Projects';

// components
import Header from "./components/Header";
import Footer from './components/Footer';

const themes = {
  mainText: '#ffffff',
  mainBackground: '#1949c5',
  reverseText: '#000000',
  reverseBackground: '#ffffff'
}

function App() {
  return (
    <div className="App">
      <Header themes={themes}/>
      <Routes>
        <Route path='/' element={<Home themes={themes}/>} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer themes={themes}/>
    </div>
  );
}

export default App;
