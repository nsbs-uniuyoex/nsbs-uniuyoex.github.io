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
      <header className="App-header">
     
        <Nav/>
        <Header/>
        <Levels/>
      </header>
      <Main />
      <Footer/>


<div class="overlay"></div>
<div class="cursor"></div>


      {/* </header> */}
    // </div>
  );
}

export default App;
