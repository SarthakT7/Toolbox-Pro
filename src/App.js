import './App.css';
import "@fontsource/poppins";
import Navbar from "./Components/Navbar/Navbar";
import Markdown from "./Components/Markdown/Markdown";
import Jsonformatter from "./Components/Jsonformatter/Jsonformatter"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import XmlFormatter from './Components/XmlFormatter/XmlFormatter';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" exact Component={Markdown} />
          <Route path="/markdown" exact Component={Markdown} />
          <Route path="/jsonformatter" exact Component={Jsonformatter} />
          <Route path="/xmlformatter" exact Component={XmlFormatter} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
