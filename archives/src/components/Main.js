import React from 'react';
import '../App.css';
import img1 from '../images/img1.webp';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
const Main = () => {

    return ( 
        <div>
            <main >

                <div class="divisions division_4 padding_3x" onmousemove="animate_balls(event)">
                    <div class="title_header">
                        <h2 class="title medium">We promise an easy stay in school.</h2>
                        <p>It is a long established fact that a biochemist knows a whole lot about our DNAs.</p>
                        <aside class="fixed_flex">
                            <a href="https://uniuyo.edu.ng/faculty-of-basic-medical-science/biochemistry/" class="btn btn_1">Explore more</a>
                            <i class="fa fa-angle-right"></i>
                        </aside>
                    </div>
                    <div class="cards">
                        <span class="ball"></span>
                        <span class="ball"></span>
                        <span class="ball"></span>
                        <span class="ball"></span>
                        <section class="fixed_flex">
                            <figure class="flex_content">
                                <img src={img1} alt="" loading="lazy" />
                            </figure>
                            <figure class="flex_content">
                                <img src={img2} alt="" loading="lazy" />
                            </figure>
                            <figure class="flex_content">
                                <img src={img3} alt="" loading="lazy" />
                            </figure>
                            <figure class="flex_content">
                                <img src={img4} alt="" loading="lazy" />
                            </figure>
                        </section>
                    </div>
                </div>
            </main>

        </div>
     );
}
 
export default Main;