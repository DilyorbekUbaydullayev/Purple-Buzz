import React from "react";
import stl from "./home.module.css";
import Carausel from "../../components/carausel/carausel";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GoGift } from "react-icons/go";
import Button1 from "../../components/button/button";
import img1 from "../../assets/services-01.jpg";
import img2 from "../../assets/services-02.jpg";
import img3 from "../../assets/services-03.jpg";
import img4 from "../../assets/services-04.jpg";
import img5 from "../../assets/services-05.jpg";
import img6 from "../../assets/services-06.jpg";
import img7 from "../../assets/services-07.jpg";
import img8 from "../../assets/services-08.jpg";
import img9 from "../../assets/recent-work-01.jpg";
import img10 from "../../assets/recent-work-02.jpg";
import img11 from "../../assets/recent-work-03.jpg";
import img12 from "../../assets/recent-work-04.jpg";
import img13 from "../../assets/recent-work-05.jpg";
import img14 from "../../assets/recent-work-06.jpg";
import { FaBoxArchive } from "react-icons/fa6";
const buttons = ["All", "Graphics", "UI/UX", "Branding"];
const cards = [
  {
    img: img1,
    title:'UI/UX design'
  },
  {
    img: img2,
    title:'Social Media'
  },
  {
    img: img3,
    title:'Marketing'
  },
  {
    img: img4,
    title:'Graphic'
  },
  {
    img: img5,
    title:'Digital Marketing'
  },
  {
    img: img6,
    title:'Market Research'
  },
  {
    img: img7,
    title:'Business'
  },
  {
    img: img8,
    title:'Branding'
  },
];
const cards2=[
  {
    img: img9,
    title1:'Social Media',
    title2:'Ullamco laboris nisi ut aliquip ex'
  },
  {
    img: img10,
    title1:'Web Marketing',
    title2:'Psum officia anim id est laborum'
  },
  {
    img: img11,
    title1:'R&D',
    title2:'Sum dolor sit consencutur'
  },
  {
    img: img12,
    title1:'Public Relation',
    title2:'Lorem ipsum dolor sit amet'
  },
  {
    img: img13,
    title1:'Branding',
    title2:'Put enim ad minim veniam'
  },
  {
    img: img14,
    title1:'Creative Design',
    title2:'Mollit anim id est laborum.'
  }

]
const home = () => {
  return (
    <div>
      <div className="">
        <Carausel />
      </div>
      <Container id={stl.service} className="pt-5 pb-4">
        <h1 className="text-center pb-5">Services</h1>
        <div className={stl.div1}>
          <h4>
            <span>
              <GoGift className="mb-2 me-2" />
            </span>{" "}
            Make Success for future
          </h4>
          <div>
            <div className={stl.div11} ></div>
            <p className="pt-3">
              You are free to use this template for your commercial or business
              websites. You are not allowed to re-distribute this template ZIP
              file on any template collection websites. It is too easy to
              illegally copy and repost this template.
            </p>
          </div>
        </div>
      </Container>
      <div className={stl.div2}>
        {buttons.map((item, i) => {
          return <Button1 key={i} bg={i + 1} name={item} />;
        })}
      </div>
      <div>
        <Container className="mb-3">
          <Row className="g-5 gy-xs-5 pt-5 pb-5">
            {cards.map((item, i) => {
              return (
                <Col key={i} xs={12} sm={6} md={4} xl={3}>
                  <div className={stl.div3}>
                    <img src={item.img} className={stl.img} />
                    <div className={stl.div4}>
                      <div className={stl.div5}>
                        <Button>{item.title}</Button>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          
        </Container>

       <div className={stl.div7}>
        <Container>
        <div className={stl.div6}>
            <div className={stl.icon}><div className="text-center"><FaBoxArchive /></div></div>
            <div className={stl.title}>
              <h4>Great transformations successful</h4>
              <p>Quis ipsum suspendisse ultrices gravida.</p>
            </div>
            <div className="text-center">
              <Button className={stl.btn}>View Our Work</Button>
            </div>
          </div>
        </Container>
       </div>
       <div className="pb-5">
        <h1 className="text-center pb-4 pt-4">Recent Works</h1>
        <Container className="mb-5">
          <Row className="g-5 pt-5 pb-5">
            {cards2.map((item, i) => {
              return (
                <Col key={i} xs={12} sm={6} md={4} xl={4}>
                  <div className={stl.div8}>
                    <img src={item.img} className={stl.img} />
                    <div className={stl.div9}>
                      <div className={stl.div10}>
                        <h3>
                      {item.title1}
                        </h3>
                        <p>
                          {item.title2}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          
        </Container>
       </div>
      </div>
    </div>
  );
};

export default home;
