import React from 'react';
import '../App.css'
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
                                <img src="../images/biochemistry-shutterstock_187967735_web.webp" alt="" loading="lazy" />
                            </figure>
                            <figure class="flex_content">
                                <img src="../images/images (1).jpeg" alt="" loading="lazy" />
                            </figure>
                            <figure class="flex_content">
                                <img src="../images/download (2).jpeg" alt="" loading="lazy" />
                            </figure>
                            <figure class="flex_content">
                                <img src="../images/technology-physics-and-chemistry-blue-bottle-wallpaper-preview.jpg" alt="" loading="lazy" />
                            </figure>
                        </section>
                    </div>
                </div>
            </main>

        </div>
     );
}
 
export default Main;