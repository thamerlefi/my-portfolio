import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1Img1 from "../assets/img/teckshop/teck-1.png";
import proj1Img2 from "../assets/img/teckshop/teck-2.png";
import proj1Img3 from "../assets/img/teckshop/teck-3.png";
import proj1Img4 from "../assets/img/teckshop/teck-4.png";
import proj1Img5 from "../assets/img/teckshop/teck-5.png";
import proj1Img6 from "../assets/img/teckshop/teck-6.png";
import proj1Img7 from "../assets/img/teckshop/teck-7.png";
import proj2 from "../assets/img/proj2.png";
import proj3 from "../assets/img/proj3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {



  const projects1 = [
    {
      title: "Teck Shop E-Commerce",
      description: "I developed a dynamic e-commerce application using the MERN stack, to deliver a robust and user-friendly online shopping experience.",
      imgUrl: [proj1Img1,proj1Img2,proj1Img3,proj1Img4,proj1Img5,proj1Img6,proj1Img7],
      sourceCode: "https://github.com/thamerlefi/project",
      liveApp: "https://teck-shop.onrender.com/",
    },
    {
      title: "Product Management Application",
      description: "I have crafted a simpe CRUD application using vanilla JavaScript.",
      imgUrl: [proj2],
      sourceCode: "https://github.com/thamerlefi/Product-management",
    },
    {
      title: "Calculator.",
      description: "Simple calculator with vanilla javascript.",
      imgUrl: [proj3],
      sourceCode: "https://github.com/thamerlefi/calculatrice"
    },
    // {
    //   title: "XO Game.",
    //   description: "Simple XO Game with vanilla javascript",
    //   imgUrl: [proj4],
    //   sourceCode: "https://github.com/thamerlefi/calculatrice"
    // },
   
  
  ];
  // const projects2 = [
  //   {
  //     title: "Simple Product Management",
  //     description: "A simple app ",
  //     imgUrl: projImg4,
  //     link: "https://amal-benhenia.github.io/myPortfolio/"
  //   }
  // ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Here are a few past projects I've worked on. For more projects, I invite you to visit my Github account.</p> */}
                <p>I am diligently working on additional projects that are in the pipeline,  I am excited to share these upcoming ventures soon</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                     {/* {
                      projects2.map((project, index)=>{
                        return (
                          <ProjectCard
                          key={index}
                          {...project}/>
                        )
                      })
                     } */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Skills grow so will this portfolio.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="aaa" src={colorSharp2}></img>
    </section>
  )
}
