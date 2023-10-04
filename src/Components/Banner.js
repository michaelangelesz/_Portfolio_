import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/images/me.jpeg"
import linkedIn from "../assets/images/nav-icon-linkedin.svg"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn intro" : "intro"
                  }
                >
                  <span className="tagline">✦ WebDesigns by Mike ✦</span>
                  <h1>
                    {`Hey! I'm Mike`} <br />
                  </h1>
                  <h2>
                    {`Modern Web Design`}
                    <br />
                    {`UX/UI Design Specialist`}
                    <br />
                    {`Full Stack Web Developer`}
                    <br />
                  </h2>
                  <p>
                    Quality Assurance | Software Developer | Data Analyst |
                    Problem Solver | Project Manager | Leader 
                  </p>
                  <p>
                    Let's start designing your website today!
                  </p>
                  <a href = 'https://www.linkedin.com/in/michael-m-weisphal/'>LinkedIn</a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} classname="astronaut" alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
