import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

  const form = useRef()

  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_cceyngk', 'template_wwqpogh', form.current, 'JAWpI_aDoF2y3lJ0M')
      .then((result) => {
          console.log(result.text);
          setButtonText("Send");
          toast.success("Message Sent Successfuly")
          setFormDetails(formInitialDetails);
        }, (error) => {
          console.log(error.text);
          setButtonText("Send");
          toast.error('Something went wrong, please try again later.')
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.name} placeholder="Your Name" name="name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                    </Col>
                    {/* {<Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>} */}
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" name="email" required onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    {/* {<Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>} */}
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" name="message" required onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
             
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
