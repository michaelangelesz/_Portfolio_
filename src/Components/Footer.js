import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm.js";
import logo from "../assets/images/logo.svg"
import linkedIn from "../assets/images/nav-icon-linkedin.svg"
import instagram from "../assets/images/nav-icon-instagram.svg"
import github from "../assets/images/nav-icon-github.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
              <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="WebDesigns by Mike" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/michael-m-weisphal/"><img src={linkedIn} alt="Icon" /></a>
              <a href="https://github.com/michaelangelesz"><img src={github} alt="Icon" /></a>
              <a href="https://www.instagram.com/michaelangelesz/"><img src={instagram} alt="Icon" /></a>
            </div>
            <p className="copyright">
            ✦ WebDesigns by Mike ✦ 2020-
                {new Date().getFullYear()} ✦
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}