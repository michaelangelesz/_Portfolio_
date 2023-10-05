import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/images/me.jpeg"

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
                <div>
                  <span className="tagline">✦ WebDesigns by Mike ✦</span>
                  <h1>
                    {`Hey there! I'm Mike`} <br />
                  </h1>
                  <h2>
                    {`Modern Web Design`}
                    <br />
                    {`UX/UI Design Specialist`}
                    <br />
                    {`Full Stack Web Developer`}
                    <br />
                  </h2><br />
                  <p>Passion for making products that are not only functional, but beautiful.
                  </p>
                  <p>
                    Let's start designing your website today!
                  </p>
                  <br />
                  <a href = 'https://www.linkedin.com/in/michael-m-weisphal/'>LinkedIn</a>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div>
                  <img src={headerImg} classname="astronaut" alt="Header Img" />
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
