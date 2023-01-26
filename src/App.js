import { Route, Routes } from 'react-router-dom';

// pages
import Home from "./pages/Home";
// import Projects from './pages/Projects';
// import Skills from './pages/Skills';
// import About from './pages/About';

// components
import Header from "./components/Header";
import Footer from './components/Footer';

// data
import skillList from './assets/data/skills';
import projectList from './assets/data/projects';

const theme = {
  mainText: '#ffffff',
  mainBackground: '#1949c5',
  mainDarkMode: '#1c1c1c',
  mainAccent: '#13d2f8',
  reverseText: '#000000',
  reverseBackground: '#ffffff'
};

function App() {
  return (
    <div className="App">
      <Header theme={theme}/>
      <Routes>
        <Route path='/' element={<Home theme={theme} skillList={skillList} projectList={projectList} />} />
      </Routes>
      <Footer theme={theme}/>
    </div>
  );
};

export default App;
