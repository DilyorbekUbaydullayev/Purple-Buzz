import React from "react";
import stl from "./about.module.css";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import img from "../../assets/banner-img-02.svg";
import img1 from "../../assets/team-01.jpg";
import img2 from "../../assets/team-02.jpg";
import img3 from "../../assets/team-03.jpg";
import img4 from "../../assets/work.svg";
import {
  BiRevision,
  BiSolidBoltCircle,
  BiSolidBuildings,
  BiSolidBulb,
  BiSolidCheckShield,
  BiSolidSelectMultiple,
} from "react-icons/bi";
import { FaSpa } from "react-icons/fa";
const team = [
  {
    img: img1,
    name: "John Doe ",
    job: "Business Development",
  },
  {
    img: img2,
    name: "Jane Doe",
    job: " Media Development",
  },
  {
    img: img3,
    name: "Sam",
    job: " Developer",
  },
];
const partnersicon = [
  <BiSolidBuildings />,
  <BiSolidCheckShield />,
  <BiSolidBoltCircle />,
  <FaSpa />,
];
const Perfect = [
  {
    name: "Development",
    persent: 66,
  },
  {
    name: "Design",
    persent: 90,
  },
  {
    name: "Marketing",
    persent: 74,
  },
];
const choose = [
  {
    icon: <BiSolidBulb />,
    name: "Our Vision",
    title:
      "Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.",
  },
  {
    icon: <BiRevision />,
    name: "Our Mission",
    title:
      "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis.",
  },
  {
    icon: <BiSolidSelectMultiple />,
    name: "Our Goal",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
  },
];
const about = () => {
  return (
    <div>
      {/* About Us */}
      <div className={stl.about}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <div className={stl.aboutleft}>
                <h1>About Us</h1>
                <div className={stl.line}></div>
                <p>
                  Vector illustration credit goes to <a href="">FreePik</a>{" "}
                  website. Purple Buzz is provided by TemplateMo. Lorem ipsum
                  dolor sit amet, consectetur.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <img src={img} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Our Team */}

      <div>
        <Container>
          <Row className={stl.rowteam}>
            <Col>
              <div className={stl.colteamleft}>
                <h1>Our Team</h1>
                <div className={stl.line}></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>

            {team.map((t, i) => {
              return (
                <Col xs={12} sm={12} md={3} key={i} className={stl.colteam}>
                  <img
                    src={t.img}
                    alt=""
                    style={{
                      borderRadius: "50%",
                      maxWidth: "80%",
                      height: "auto",
                    }}
                    className={stl.imgteam}
                  />
                  <p>
                    {t.name} <br />
                    {t.job}{" "}
                  </p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      {/* Our partner */}
      <div className={stl.partnercontainer}>
        <Container>
          <h1>Our Partner</h1>
          <Row className="gy-5">
            {partnersicon.map((t, i) => {
              return (
                <Col xs={12} sm={12} md={3} key={i} className={stl.colpartner}>
                  <div className={stl.partner}>
                    <span className={stl.picon}>{t}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      {/* Perfect */}
      <div>
        <Container className={stl.perfectcont}>
          <h1>Creative & Make Perfect</h1>
          <Row>
            <Col xs={12} sm={12} md={4} lg={5}>
              <p className={stl.colp}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida Risus.
              </p>
            </Col>
            <Col className={stl.pcol} xs={12} sm={12} md={8} lg={7}>
              <Row className="gy-2">
                {Perfect.map((t, i) => {
                  return (
                    <Col xs={12} key={i}>
                      <div className={stl.divpersent}>
                        <p>{t.name}</p>
                        <p>{t.persent}%</p>
                      </div>
                      <ProgressBar now={t.persent} className={stl.bar} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Choose */}
      <div style={{ position: "relative", marginBottom: 50 }}>
        <div className={stl.us}></div>
        <Container>
          <Row>
            <Col md={5}>
              <img src={img4} alt="" />
            </Col>
            <Col className={stl.uscol}>
              <h1>Why you choose us?</h1>
              <p>
                You are allowed to download and use this Purple Buzz template
                for your websites. You are not allowed to re-distribute this
                template ZIP file on other template websites. It is quite easy
                to simply copy and repost the ZIP file on any Free CSS
                collection websites.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="pb-5 pt-5 mb-4 gy-3">
          {choose.map((t, i) => {
            return (
              <Col xs={12} sm={12} md={4} key={i}>
                <div className={stl.choose}>
                  <span className={stl.chooseicon}>{t.icon}</span>
                  <h3>{t.name}</h3>
                  <p>{t.title}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* Email */}
      <div className={stl.email}>
        <Container>
          <h1>Stay up to date with us</h1>
        <div>
        <input type="email" className={stl.inp} placeholder="Your Email"/>
          <Button className={stl.btn}>Subscribe</Button>
        </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore et dolore magna aliqua.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default about;
