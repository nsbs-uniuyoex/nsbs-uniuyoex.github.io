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
{/* <!--MENU--> */}
<menu id="menu" class="side_menu">
    <a href="javascript:void(0)" class="close"><i class="fa fa-times"></i></a>
    <strong class="fixed_flex logo"><img src="../images/nsbslogo.png" alt="Summit"  loading="lazy" /></strong>
    <br/>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="https://forms.gle/yTGgA3Ebyttd8YFw9">Feedback</a></li>
        <li><a href="https://drive.google.com/drive/folders/1-3mAmsq_4mmzIJh-oe8zKF8OzMT1FPMP?usp=drive_link">Material</a></li>
        {/* <!-- <li><a href="#">Events</a></li> --> */}
        {/* <!-- <li><a href="./coming-soon.html">Executive Counsil</a></li> --> */}
               {/* <!-- <li><a href="#">About us</a></li> --> */}
    </ul>
</menu>
  <Header/>
<Main/>

<Footer/>

{/* <!--ADDITIONAL--> */}
<div class="overlay"></div>
<div class="cursor"></div>

</div>

  );
}

export default App;
