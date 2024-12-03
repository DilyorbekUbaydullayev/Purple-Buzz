import React from "react";
import stl from "./work.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Button1 from "../../components/button/button";
import { BiSolidHandRight } from "react-icons/bi";
import img1 from "../../assets/our-work-01.jpg";
import img2 from "../../assets/our-work-02.jpg";
import img3 from "../../assets/our-work-03.jpg";
import img4 from "../../assets/our-work-04.jpg";
import img5 from "../../assets/our-work-05.jpg";
import img6 from "../../assets/our-work-06.jpg";
import img7 from "../../assets/feature-work-1.jpg";
import img8 from "../../assets/feature-work-2.jpg";
import img9 from "../../assets/feature-work-3.jpg";
import img10 from "../../assets/feature-work-4.jpg";
const buttons = ["All", "Business", "Marketing", "Social Media", "Graphic"];
const ourwork = [
  {
    img: img1,
    title: "Digital Marketing",
  },
  {
    img: img2,
    title: "Corporate Branding",
  },
  {
    img: img3,
    title: "Leading Digital Solution",
  },
  {
    img: img4,
    title: "Smart Applications",
  },
  {
    img: img5,
    title: "Corporate Stationary",
  },
  {
    img: img6,
    title: "8 Financial Tips",
  },
];
const featured = [img7, img8, img9, img10];
const paganation = ['Previous','1','2','Next']
const work = () => {
  return (
    <div>
      {/* Our work */}
      <div className={stl.work}>
        <div className={stl.title}>
          <Container>
            <h1>Our Work</h1>
            <div className={stl.line}></div>
            <h4>Elit, sed do eiusmod tempor incididunt</h4>
            <p>
              Vector illustration Freepik. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus
            </p>
            <div className="mt-4">
              <Button className={stl.btn1}>Learn more</Button>
              <Button className={stl.btn2}>Contact Us</Button>
            </div>
          </Container>
        </div>
      </div>
      <div className={stl.div2}>
        {buttons.map((item, i) => {
          return (
            <Button
              key={i}
              className={stl.btn3}
              style={{
                background: i === 0 ? "#4232C2" : "none",
                color: i === 0 ? "#fff" : "#4232C2",
              }}>
              {item}
            </Button>
          );
        })}
      </div>
      <Container>
        <Row className="g-5 pb-5">
          {ourwork.map((item, i) => {
            return (
              <Col key={i} xs={12} sm={6} md={4} xl={4}>
                <div className={stl.div3}>
                  <img src={item.img} className={stl.img} />
                  <div className={stl.div4}>
                    <h4> {item.title} </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Hic maxime nulla itaque. deleniti repellat? Possimus,
                      numquam?
                    </p>
                    <a href="">
                      Read more <BiSolidHandRight style={{ marginTop: -5 }} />
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className={stl.div5}>
          {paganation.map((e,i) =>(
            <Button
              key={i}
              className={i===1?stl.btnwork2:stl.btnwork}>
              {e}
            </Button>
          ))}
          
        </div>
      </Container>
      {/* Featured work */}
      <div className={stl.featured}>
        <Container className="pt-5 pb-5">
          <Row className="pt-3 ">
            <Col xs={12} sm={12} md={6}>
              <div className={stl.div6}>
                <h4>Featured Work</h4>
                <h1>Transform with us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </Col>
            <Col>
           <Row className="g-3">
           {featured.map((e,i)=>{
              return (
                <Col xs={12} sm={6} md={6}  key={i}>
                  <img src={e} className={stl.img2} />
                </Col>
              )
            })}
           </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default work;
