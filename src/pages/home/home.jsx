import React from 'react';
import { Homepage, NavBar, Title } from './style';
import line_graph from '../../assest/line-graph.jpg'
import layer_1 from '../../assest/Layer_1.png'
import layer_2 from '../../assest/Layer_2.png'
import layer_3 from '../../assest/Layer_3.png'
import layer_4 from '../../assest/Layer_4.png'
import layer_5 from '../../assest/Layer_5.png'

function HomePage() {
    return (
        <>
            <NavBar>
                <p className="logo">Metric</p>
                <nav>
                    <li> <a href="#">Features </a></li>
                    <li> <a href="#price">pricing </a></li>
                    <li> <a href="#custom">customers </a></li>
                    <li> <a href="#">sign up </a></li>
                </nav>
            </NavBar>
            <Homepage>
              <div className="text">
                  <p className="logo">
                  Grow Your Business 10x with Metric
                  </p>
                  <p className="detail">
                  The Metric Dashboard brings all of your business insights under one roof. Revenue metrics, social, integrations - everything.
                  </p>
                  <button className="sign">
                      sign up
                  </button>
                  <p className="learn">Learn More</p>
              </div>
              <img className='line-graph'
               src={line_graph} alt="" />
            </Homepage>
            <Title>
                <img src={layer_1} className='layer1' alt="" />
                <img src={layer_2} alt="" />
                <img src={layer_3} alt="" />
                <img src={layer_4} alt="" />
                <img src={layer_5} alt="" />
            </Title>
        </>
    );
}

export default HomePage;
