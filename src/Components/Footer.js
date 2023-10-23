import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo-lion.png"
import linkedIn from "../assets/images/nav-icon-linkedin.svg"
import github from "../assets/images/nav-icon-github.svg"
import discord from "../assets/images/nav-icon-discord.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="footer-logo text-center text-sm-start">
            <img src={logo} alt="WebDesigns by Mike" />
            <h5>
            ✦ WebDesigns by Mike ✦
            </h5>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/michael-m-weisphal/"><img src={linkedIn} alt="LinkedIn" /></a>
              <a href="https://github.com/michaelangelesz"><img src={github} alt="Github" /></a>
              <a href="https://discord.com/users/927145683662811157" target="_blank">
                <img src={discord} alt="Discord" />
              </a>
            </div>
            <p className="copyright">
            Mike M. Weisphal © 2020-
                {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}