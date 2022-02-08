import React from 'react';
import About from '../about/about';
import { Footer } from '../about/styled';
import HomePage from '../home/home';
import facebok from '../../assest/facebook.svg'
import twiter from '../../assest/twitter.svg'
import linkedin from '../../assest/linkedin.svg'
import mail from '../../assest/mail.svg'

function MainPage() {
    return (
        <>
            <HomePage />
            <About />
            <Footer>
                <div className="cards">
                    <p className="title">
                        Metric <br />
                        <span className='sign'>
                            Sign up for our newsletter
                        </span>
                    </p>
                    <input type="email" name="email" id="" />
                    <input type="submit" value="submit" />
                    <div className="links">
                        <img src={facebok} alt="" />
                        <img src={twiter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={mail} alt="" />
                    </div>
                </div>
            </Footer>
        </>
    );
}

export default MainPage;
