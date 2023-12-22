import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, sourceCode, liveApp }) => {
  const [image, setImage] = useState(imgUrl[0])
  useEffect(() => {
    let index = 0
    setInterval(() => {
      if(index + 1 < imgUrl.length) {
        index += 1
      }
      else {
        index=0
      }
      setImage(imgUrl[index])
    }, 4000);
  }, [])
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} alt="aaa" />
        <div className="proj-txtx">
        <a href={liveApp} target="blank" class='link-project'> {title}  </a>
        <br></br>
        <br></br>
          <span className="proj-spaces">{description}</span>
        <br/><br/>
        <div className="proj-card-links">
        <a href={sourceCode} target="blank" > {"Code Source"}  </a>
        {liveApp && <a href={liveApp} target="blank" > {"Live App"}  </a>}
        </div>
        </div>
      </div>
    </Col>
  )
}
