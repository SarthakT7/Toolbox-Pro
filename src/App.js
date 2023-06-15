import './App.css';
import "@fontsource/poppins";
import Navbar from "./Components/Navbar/Navbar";
import Markdown from "./Components/Markdown/Markdown";
import Jsonformatter from "./Components/Jsonformatter/Jsonformatter"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" exact Component={Markdown} />
          <Route path="/jsonformatter" exact Component={Jsonformatter} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
