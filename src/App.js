import { Route, Routes } from 'react-router-dom'

// pages
import Home from "./pages/Home";
import Projects from './pages/Projects';

// components
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
