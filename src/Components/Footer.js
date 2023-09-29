import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/images/logo.svg"
import navIcon1 from "../assets/images/nav-icon1.svg"
import navIcon2 from "../assets/images/nav-icon2.svg"
import navIcon3 from "../assets/images/nav-icon3.svg"
import navIcon4 from "../assets/images/nav-icon4.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="WebDesigns by Mike" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
              <a href="#"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p className="copyright">
                Copyright Michael M. Weisphal 2020-
                {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}