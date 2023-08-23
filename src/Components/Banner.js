import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/images/header-img.svg"
import { ArrowRightCircle } from "react-bootstrap-icons"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1)
    const toRotate = [ "Web Developer", "Web Designer", "UX/UI Designer"]
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={ isVisible ? "animate__animated animate__fadeIn" : "" }>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mike!`} <br/><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                <p>I am a dynamic and self-motivated professional with expansive experience across operations management, production, quality control, and process optimization. I am able to skillfully mentor and empower top-performing teams. With polished communication and interpersonal skills, I easily forge relationships and rapport with diverse groups of clients and colleagues. I’m at my best in team-based, collaborative environments. Both resourceful and respected, I’m consistently recognized for my sound judgment, attention to detail, mental agility, and strong work ethic.</p>
                <button onClick={() => console.log("connect")}>Let's Connect <ArrowRightCircle size={25} />
                </button>
              </div>}
            </TrackVisibility>
          </Col>
            <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={ isVisible ? "animate__animated animate__zoomIn" : "" }>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
