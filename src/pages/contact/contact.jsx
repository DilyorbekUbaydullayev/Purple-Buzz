import React from "react";
import stl from "./contact.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../../assets/banner-img-01.svg";
import { BiLaptop, BiNews } from "react-icons/bi";
import { PiMoneyFill } from "react-icons/pi";

const contacticon = [
  {
    icon: <BiNews className={stl.icon} />,
    title: "Media Contact",
    name: "Mr.John Doe",
  },
  {
    icon: <BiLaptop className={stl.icon} />,
    title: "Technical Contactt",
    name: "Mr. John Stiles",
  },
  {
    icon: <PiMoneyFill className={stl.icon} />,
    title: "Billing Contact",
    name: "Mr. Richard Miles",
  },
];

const contact = () => {
  return (
    <div>
      <div className={stl.header}>
        <Container>
          <Row className="pt-3 pb-3">
            <Col xs={12} md={12} xl={4}>
              <div className={stl.div}>
                <h1>Contact</h1>
                <h4>Elit, sed do eiusmod tempor</h4>
                <p>
                  Vector illustration is from StorySet. Incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </Col>
            <Col></Col>
            <Col xl={5}>
              <img src={img} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className={stl.div}>
          <h1>Create success campaign with us!</h1>
          <h4>Elit, sed do eiusmod tempor</h4>
          <p className={stl.p}>
            Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate.
          </p>
        </div>
        <Row className="mb-5">
          <Col xs={12} md={4} xl={4}>
            {contacticon.map((e, i) => {
              return (
                <Row className="mb-4" key={i}>
                  <Col xs={4} xl={3}>
                    <div className={stl.div1}>{e.icon}</div>
                  </Col>
                  <Col>
                    <div className={stl.div2}>
                      <h5>{e.title}</h5>
                      <p>{e.name}</p>
                      <p>010-020-0340</p>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col  xs={12} xl={8}>
            <Row className="">
              <Col xs={12} xl={6} className="mb-3">
                <FloatingLabel controlId="floatingPassword" label="Name">
                  <Form.Control type="name" placeholder="name" />
                </FloatingLabel>
              </Col>
              <Col xs={12} xl={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col xs={12} xl={6} className="mb-3">
                <FloatingLabel controlId="floatingPassword" label="Phone">
                  <Form.Control type="phone" placeholder="name" />
                </FloatingLabel>
              </Col>
              <Col xs={12} xl={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Company name"
                  className="mb-3">
                  <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="gy-3">
              <Col xl={12}>
                <FloatingLabel controlId="floatingPassword" label="Subject">
                  <Form.Control type="name" placeholder="name" />
                </FloatingLabel>
              </Col>
              <Col xl={12}>
              <FloatingLabel controlId="floatingTextarea2" label="Massage">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '150px' }}
        />
      </FloatingLabel>
              </Col>
              <Col xl={12} className={stl.btn}>
               <Button className={stl.btn1}>Send Message</Button>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default contact;
