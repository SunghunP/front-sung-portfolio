import { Route, Routes } from 'react-router-dom';

// pages
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';

// components
import Header from "./components/Header";
import Footer from './components/Footer';

// data
import skills from './assets/data/skills';
import projects from './assets/data/projects';

const theme = {
  mainText: '#ffffff',
  mainBackground: '#1949c5',
  mainDarkMode: '#1c1c1c',
  reverseText: '#000000',
  reverseBackground: '#ffffff'
};

function App() {
  return (
    <div className="App">
      <Header theme={theme}/>
      <Routes>
        <Route path='/' element={<Home theme={theme} skills={skills} projects={projects} />} />
        <Route path='/projects' element={<Projects projects={projects} />}/>
        <Route path='/skills' element={<Skills skills={skills} />}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer theme={theme}/>
    </div>
  );
};

export default App;
