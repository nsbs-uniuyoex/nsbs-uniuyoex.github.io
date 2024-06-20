import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <div>
            <article>
                <h1 className="title big">Welcome to </h1>
                <br />
                <h1>The department of </h1>
                <br />
                <h1>
                    <em>Biochemistry</em>
                </h1>
                <h1>University of Uyo</h1>
                <p>Towards a better living.</p>
                <a href="https://uniuyo.edu.ng/faculty-of-basic-medical-science/biochemistry/" className="btn btn_3">Explore more</a>
                <a href="https://drive.google.com/drive/folders/194xXwsP2eGWOZwBTHpsk1iCO5Fwmrc4o?usp=drive_link" className="btn btn_4">College Textbooks</a>
            </article>
        </div>
    );
}

export default Header;
