import './App.css';


import Home from './components/Home';
import TextEditor from './components/TextEditor';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <TextEditor />
      <About />
    </div>
  );
}

export default App;
