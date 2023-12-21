import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CV from "../assets/img/themer_lefi_cv.pdf"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Imagea" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Imagea" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Imagea" />
                                <h5>Javascript (ES6+)</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Imagea" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Imagea" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Imagea" />
                                <h5>Express JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Imagea" />
                                <h5>MongoDB</h5>
                            </div>
                        </Carousel>
                        <a href={CV} download="themer_lefi_cv.pdf" className='btn' >Download my CV</a>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Imagea" />
    </section>
  )
}
