import React from "react";
import stl from "./pricing.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import img from '../../assets/pricing.svg'

const freeplan = ["5 Users", "2 TB space", "Community Forums", "Email Support"];
const standartplan = [
  "25 to 99 Users",
  "10 TB space",
  "Source Files",
  "Live Chat",
];
const enterprice = [
  "100 Ussers or more",
  "80 TB space",
  "Full Access Source",
  "Live Chat",
  "Customizations",
];
const price = [
  {
    title: "Free Plan",
    price: "$0",
    features: freeplan,
  },
  {
    title: "Standart Plan",
    price: "$120",
    features: standartplan,
  },
  {
    title: "Enterprice Plan",
    price: "$840",
    features: enterprice,
  },
];
const price3=[
  {
    name:'Free',
    title:'Deserunt mollit laborum.',
    price:'$0'
  },
  {
    name:'Standart',
    title:'Adipiscing elit, sed do',
    price:'$120/Year'
  },
  {
    name:'Enterprice',
    title:'Sed do eiusmod tempor',
    price:'$840/Year'
  },
]
const pricing = () => {
  return (
    <div>
      <div className={stl.header}>
        <h1>Pricing</h1>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          facilisis.
        </p>
      </div>
      <div>
        <Container className="pb-5 pt-5">
          <Row className="gy-5">
            <Col xs={12} sm={12} md={4}>
              <div className={stl.card1}>
                <div className={stl.card}>
                  <BiPackage className={stl.biPack}/>
                  <h4>Free Plan</h4>
                  <p>$0</p>
                </div>

                {freeplan.map((e, i) => {
                  return (
                    <p className={stl.p} key={i}>
                      <FaCircle
                        className={stl.faCircle}
                      />{" "}
                      {e}
                    </p>
                  );
                })}

                <div className={stl.card}>
                  <Button className={stl.btn}>Get Now</Button>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className={stl.card2}>
                <div className={stl.card}>
                  <BiPackage className={stl.biPackWhite} />
                  <h4>Standart Plan</h4>
                  <p>$120/Year</p>
                </div>

                {standartplan.map((e, i) => {
                  return (
                    <p className={stl.p} key={i}>
                      <FaCircle
                        className={stl.faCircle}
                      />{" "}
                      {e}
                    </p>
                  );
                })}

                <div className={stl.card}>
                  <Button className={stl.btn1}>Get Now</Button>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className={stl.card1} style={{ marginTop: "-20px" }}>
                <div className={stl.card}>
                <BiPackage className={stl.biPack}/>
                  <h4>Enterprice</h4>
                  <p>$840/Year</p>
                </div>

                {enterprice.map((e, i) => {
                  return (
                    <p className={stl.p} key={i}>
                      <FaCircle
                         className={stl.faCircle}
                      />{" "}
                      {e}
                    </p>
                  );
                })}

                <div className={stl.card}>
                  <Button className={stl.btn}>Get Now</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Pricing2 */}
      <div className={stl.pricing2}>
        <div className={stl.header2}>
          <h1>Our Pricing</h1>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            facilisis.
          </p>
        </div>
        <Container className={stl.contnr}>
          {price.map((e, i) => {
            return (
              <Row key={i} id={stl.row} className="gx-0">
                <Col xs={12} sm={12} md={3} className={stl.col1}>
                  <div className={stl.prdiv1}>
                  <BiPackage className={stl.biPackWhite} />
                    <h5>{e.title}</h5>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={5}>
                  <div className={stl.col2}>
                    {e.features.map((e, i) => {
                      return (
                        <p className={stl.p} key={i}>
                          <FaCircle
                             className={stl.faCircle}
                          />{" "}
                          {e}
                        </p>
                      );
                    })}
                  </div>
                </Col>
                <Col>
                  <div className={stl.card} id={stl.card}>
                    <p style={{ marginBottom: "-15px" }}> {e.price} </p>
                    <Button className={stl.btn}>Get Now</Button>
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </div>
      {/* Pricing3 */}

      <div className={stl.pricing3}>
        <div className={stl.header2}>
          <h1> Pricing</h1>
          <p>
            Vector illustration from StorySet. Consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut facilisis.
          </p>
        </div>
        <Container>
          <Row>
            <Col md={12} xl={6} style={{marginTop:'-50px'}}>
            <img src={img} alt="" />
            </Col>
            <Col>
            {price3.map((e, i) =>{
              return(
                 <Container key={i}>
                <Row className="g-0" id={stl.p3col3}>
                 <Col  >
                    <div className={stl.prdiv1}>
                    <BiPackage className={stl.biPack}/>
                    
                    </div>
                  </Col>
                  <Col md={12} xl={6} >
                    <div className={stl.p3col2} >
                      <h5 >{e.name}</h5>
                      <p >{e.title}</p>
                    </div>
                  </Col>
                  <Col>
                    <div  id={stl.p3card}>
                      <Button className={stl.btn}>{e.price}</Button>
                    </div>
                  </Col>
                </Row>
                 </Container>
              )
            })}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default pricing;
