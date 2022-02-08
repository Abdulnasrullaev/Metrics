import React from 'react';
import { Abouts, Detail, EndTitle } from './styled';
import web_app from '../../assest/web_app.png'
import mobile from '../../assest/mobile_app.png'
import people from '../../assest/people.png'

function About() {
    return (
        <>
            <Abouts>
                <p className="title">
                    Sync Across All Devices  <br />
                    <span>
                        Everything you need to make your business grow super fast
                    </span>
                </p>
                <div className="cards">
                    <div className="card">
                        <img src={web_app} alt="" />
                        <p className="logos">Web Application <br />
                            <span className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus similique ad hic, pariatur repudiandae provident eligendi est delectus earum cum voluptatibus quo animi veniam voluptatem, reprehenderit et fuga voluptate.
                            </span> </p>
                    </div>
                    <div className="card">
                        <p className="logos">Mobile App <br />
                            <span className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus similique ad hic, pariatur repudiandae provident eligendi est delectus earum cum voluptatibus quo animi veniam voluptatem, reprehenderit et fuga voluptate.
                            </span> </p>
                        <img src={mobile} alt="" />
                    </div>
                    <div className="card2">
                        <div className="card-mini">
                            <p className="title2">Dashboard</p>
                            <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut nesciunt natus? Necessitatibus excepturi!</p>
                        </div>
                        <div className="card-mini">
                            <p className="title2">custom rules</p>
                            <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut nesciunt natus? Necessitatibus excepturi!</p>
                        </div>
                        <div className="card-mini">
                            <p className="title2">presets</p>
                            <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut nesciunt natus? Necessitatibus excepturi!</p>
                        </div>
                        <div className="card-mini">
                            <p className="title2">metrics</p>
                            <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut nesciunt natus? Necessitatibus excepturi!</p>
                        </div>

                    </div>
                </div>
            </Abouts>
            <Detail id='price'>
                <p className="start">
                    Plans & Pricing
                </p>
                <center>
                    No credit card required. No risk, 30-day money back guarantee</center>

                <div className="card-wraper">
                    <div className="card3">
                        <p className="titles">starter</p>
                        <p className="price">
                            <span className='date'>
                                $15
                            </span>
                            /month
                        </p>
                        <p className="point">
                            <span className="date">
                                500
                            </span>
                            data points
                        </p>
                        <p className="team">
                            <span className='date'>1 </span>
                            Team memeber
                        </p>
                        <hr />
                        <p className="email">
                            email support
                        </p>
                        <p className="ios">
                            IOS and Android App
                        </p>
                        <p className="custom">
                            Customizable Dashboard
                        </p>
                        <p className="api">
                            Metric API
                        </p>
                        <button className="btn">
                            choose plan
                        </button>
                    </div>
                    <div className="card3">
                        <p className="titles">Professional</p>
                        <p className="price">
                            <span className='date'>
                                $30
                            </span>
                            /month
                        </p>
                        <p className="point">
                            <span className="date">
                                2000
                            </span>
                            data points
                        </p>
                        <p className="team">
                            <span className='date'>1 </span>
                            Team memeber
                        </p>
                        <hr />
                        <p className="email">
                            email support
                        </p>
                        <p className="ios" style={{ color: "black" }}>
                            IOS and Android App
                        </p>
                        <p className="custom">
                            Customizable Dashboard
                        </p>
                        <p className="api">
                            Metric API
                        </p>
                        <button className="btn">
                            choose plan
                        </button>
                    </div>
                    <div className="card3">
                        <p className="titles">startup</p>
                        <p className="price">
                            <span className='date'>
                                $75
                            </span>
                            /month
                        </p>
                        <p className="point">
                            <span className="date">
                                5000
                            </span>
                            data points
                        </p>
                        <p className="team">
                            <span className='date'>3 </span>
                            Team memeber
                        </p>
                        <hr />
                        <p className="email">
                            email support
                        </p>
                        <p className="ios" style={{ color: "black" }}>
                            IOS and Android App
                        </p>
                        <p className="custom" style={{ color: "black" }}>
                            Customizable Dashboard
                        </p>
                        <p className="api">
                            Metric API
                        </p>
                        <button className="btn">
                            choose plan
                        </button>
                    </div>
                    <div className="card3">
                        <p className="titles">business</p>
                        <p className="price">

                            <span className='date'>
                                $250
                            </span>
                            /month
                        </p>
                        <p className="point">
                            <span className="date">
                                15000
                            </span>
                            data points
                        </p>
                        <p className="team">
                            <span className='date'>10 </span>
                            Team memeber
                        </p>
                        <hr />
                        <p className="email">
                            email support
                        </p>
                        <p style={{ color: "black" }}
                            className="ios">
                            IOS and Android App
                        </p>
                        <p style={{ color: "black" }} className="custom">
                            Customizable Dashboard
                        </p>
                        <p style={{ color: "black" }}
                            className="api">
                            Metric API
                        </p>
                        <button className="btn">
                            choose plan
                        </button>
                    </div>
                </div>
                <p className="more">
                    Need more Data Points or Team Members? Please
                    <span className="us"> contact us.</span>
                </p>
            </Detail>
            <EndTitle id='custom'>
                <p className="titlee">
                    What People Say About Us
                </p>
                <p className="coment">
                “Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.”
                </p>
                <div className="about">
                <img src={people} alt="" />
             <p className="name">Kyle Killit</p>
             <p className="job">
             Designer at Tiempo Labs
             </p>
                </div>
            </EndTitle>
        </>
    );
}

export default About;
