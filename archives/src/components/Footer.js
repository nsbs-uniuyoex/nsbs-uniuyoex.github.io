import React from 'react';
import '../App.css';

const Footer = () => {
    return ( 
        <div>

<footer class="padding_4x">
    <div class="top_footer flex">
        <section class="flex_content">
            {/* <figure>
                <img src="https://i.postimg.cc/KvwFLrVF/author.png" alt="" loading="lazy" />
            </figure> --> */}
        </section>
        <section class="flex_content padding_2x">
            <h2 class="title medium">President's Message</h2>
            <p>I am indeed grateful for this platform and its developers who had taken so much time to build out of selfless efforts,to contribute to the development of students. I had always wanted a one stop site to help me with necessary textbooks and PDFs to help me out in my studies but it was limited then. It’s of great pleasure I give this site to well meaning student who are concerned about their studies to help guide and direct them through out their educational career and beyond. With no further ado I present this site to all Biochemistry student and every other student regardless of their discipline a site to foster academic excellence in the Field of Biochemistry. God Bless Everyone</p>
            <p><strong>Etokeren Emmanuuel Nsikak</strong> </p>
            <p>2021/2022 Led EXCO</p>
        </section>
    </div>
  <div class="footer_body flex"> 
    <section class="flex_content padding_1x">
      {/* <figure class="logo fixed_flex">
            <img src="../images/nsbslogo.png" alt="">
            <figcaption>
                <strong class="title">Biochemistry</strong>
            </figcaption>
        </figure> */}
        <a href="#">
            <i class="fa fa-map-marker"></i>
            Faculty of Science, University of Uyo, Akwa Ibom State. 
        </a>
        <a href="emailto:nsbsuniuyoexco@gmail.com">
            <i class="fa fa-envelope-o"></i>
            nsbsuniuyoexco@gmail.com
        </a>
        <a href="tel:9315514145">
            <i class="fa fa-laptop"></i>
            Developer: ABDIEL WILSON
        </a>
    </section>
    
    <section class="flex_content padding_1x">
      <h3>Other Links</h3>
      <a href="https://uniuyo.edu.ng/faculty-of-basic-medical-science/biochemistry/">About us</a>
      <a href="https://forms.gle/FGMXa8HgB9Hu1rR36">Contact us</a>
      {/* <!-- <a href="./coming-soon.html">FAQs</a> --> */}
    </section>
  </div>
  <div class="flex">
    <section class="flex-content padding_1x">
      <p>Copyright ©2023 All rights reserved || Abdiel John Wilson</p>
    </section>
    <section class="flex-content padding_1x">
      <a href="#"><i class="fa fa-facebook"></i></a>
    </section>
	  <section class="flex-content padding_1x">
    <a href="copy.html">Copyright</a>
    </section>
  </div>
</footer>

        </div>
     );
}
 
export default Footer;