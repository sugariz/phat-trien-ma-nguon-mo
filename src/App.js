import "./Styles/_layout.scss";
import { Container, Row, Col } from 'react-bootstrap';
import img1 from './Youtube-Downloader.png';
import img2 from './esy-057966754.jpg';
import img3 from './maxresdefault.jpg';
import img4 from './online-chat-web-banner-with-text-space-vector-24786350.jpg';

import { useEffect, useState } from "react";

function App() {
  const [className, setClassName] = useState('inverted');
  const [scrollTrigger, setScrollTrigger] = useState(60);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.getElementsByTagName('header')[0].classList.add(className);
    } else {
      document.getElementsByTagName('header')[0].classList.remove(className);
    }
  }

  return (
    <div className="dark">
      <header>
        <Container>
          <div className='logo left'>
            <a href="/">
              <mark className='light-blue'>
                <span className="t-red">.</span>
                Sugargiz
              </mark>
            </a>
          </div>
          <div className='menu-right'>

          </div>
        </Container>
      </header>
      <div id="start" className="section back one">
        <Container>
          <div className="content">
            <div className="center aos-init aos-animate" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
              <h1 className="t-white">Code Collaborative</h1>
              <h5 className="t-white">Connect and share ideas for simple programming projects</h5>
              <div className="cta-container">
                <a href="https://github.com/sugariz" className="primary-btn round blue-vibrant t-white">Github</a>
                <a href="#projects" className="primary-line-btn round b-pink t-pink">MORE PROJECT</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div id="projects" className="section half-padding dark back two">
        <Container>
          <div className="content center">
            <h2 className="t-white">My Projects.</h2>
          </div>
          <div>
            <Row>
              <Col>
                <div className="info-box">
                  <a href="https://github.com/sugariz/download-video-youtube">
                    <span class="align-middle">
                      <img src={img1} alt="Lancio" class="img-fluid" width={500} height={312} />
                    </span>
                  </a>
                </div>
              </Col>
              <Col>
                <div className="info-box">
                  <a href="https://github.com/sugariz/STW">
                    <span class="align-middle">
                      <img src={img2} alt="Lancio" class="img-fluid" width={500} height={312} />
                    </span>
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="info-box">
                  <a href="https://github.com/sugariz/streamlit-example">
                    <span class="align-middle">
                      <img src={img3} alt="Lancio" class="img-fluid" width={500} height={312} />
                    </span>
                  </a>
                </div>
              </Col>
              <Col>
                <div className="info-box">
                  <a href="https://github.com/sugariz/chat-realtime-security">
                    <span class="align-middle">
                      <img src={img4} alt="Lancio" class="img-fluid" width={500} height={312} />
                    </span>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div class="section dark back four">
        <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <h1 class="t-white center">Join the community.</h1>
          <h5 class="t-grey center">#sugariz</h5>
          <div class="cta-container center">
            <a href="https://www.linkedin.com/in/tr%C3%AD-nguy%E1%BB%85n-minh-6939a423a/" class="primary-line-btn round b-pink t-pink"><i class="fab fa-instagram" aria-hidden="true"></i>Follow us on Linkedin</a>
            <a href="https://www.facebook.com/kaidhmdg/" class="primary-line-btn round b-blue-vibrant t-blue-vibrant"><i class="fab fa-facebook" aria-hidden="true"></i>Follow us on Facebook</a>
          </div>
        </div>
        <footer>
          <div class="copyright t-white center">All rights reserved to ©.Lancio</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
