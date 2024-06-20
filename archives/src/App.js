import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Levels from "./components/Levels";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">

      <Nav/>

<Header/>
<Main/>

<Footer/>

<div class="overlay"></div>
<div class="cursor"></div>

</div>

  );
}

export default App;
