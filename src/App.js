import { Route, Routes } from 'react-router-dom'

// pages
import Home from "./pages/Home";
import Projects from './pages/Projects';

// components
import Header from "./components/Header";
import Footer from './components/Footer';

const theme = {
  mainText: '#ffffff',
  mainBackground: '#1949c5',
  mainDarkMode: '#1c1c1c',
  reverseText: '#000000',
  reverseBackground: '#ffffff'
}

function App() {
  return (
    <div className="App">
      <Header theme={theme}/>
      <Routes>
        <Route path='/' element={<Home theme={theme}/>} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
