import React from 'react';
import '../App.css';
// import '../styles/Nav.css'

const Nav = () => {
    return ( 
    <div>
        <menu class="top_menu flex">
            <section class="flex_content">
                <a href="emailto:nsbsuniuyo@gmail.com">
                    <i class="fa fa-envelope-o"></i>
                    nsbsuniuyoexco@gmail.com
                </a>
                <a href="wilsonabdiel.github.io">
                    <i class="fa fa-laptop"></i>
                    ABDIEL WILSON
                </a>
            </section>
            <section class="flex_content">
                <a href="#" title="Facebook"><i class="fa fa-facebook"></i></a>
            </section>
            </menu>


            <nav>
            <section class="flex_content">
                <figure class="logo fixed_flex">
                    <img src="../images/nsbslogo.png" alt=""/>
                    <figcaption>
                        <strong class="title">Biochemistry</strong>
                    </figcaption>
                </figure>
            </section>
            <section class="flex_content nav_content" id="nav_content">
                <a href="#" class="active">Home</a>
                <a href="https://forms.gle/yTGgA3Ebyttd8YFw9">Feedback</a>
                <a href="https://forms.gle/FGMXa8HgB9Hu1rR36">Contact us</a>
                <a href="https://uniuyo.edu.ng/faculty-of-basic-medical-science/biochemistry/">About us</a>
            </section>
            <section class="flex_content">
                <a href="javascript:void(0)" class="ham"><i class="fa fa-bars"></i></a>
            </section>
            </nav>

            <menu id="menu" class="side_menu">
            <a href="javascript:void(0)" class="close"><i class="fa fa-times"></i></a>
            <strong class="fixed_flex logo"><img src="../images/nsbslogo.png" alt="Summit"  loading="lazy" /></strong>
            <br/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="https://forms.gle/yTGgA3Ebyttd8YFw9">Feedback</a></li>
                <li><a href="https://drive.google.com/drive/folders/1-3mAmsq_4mmzIJh-oe8zKF8OzMT1FPMP?usp=drive_link">Materials</a></li>
                {/* <!-- <li><a href="#">Events</a></li> --> */}
                {/* <!-- <li><a href="./coming-soon.html">Executive Council</a></li> --> */}
                        {/* <!-- <li><a href="#">About us</a></li> --> */}
            </ul>
        </menu>
    </div>
     );
}
 
export default Nav;