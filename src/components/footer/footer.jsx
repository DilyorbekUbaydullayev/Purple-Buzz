import React from 'react'
import stl from './footer.module.css';
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../assets/apple-icon.png';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { BiLogoFlickr } from 'react-icons/bi';
import { FaMediumM } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { RiMailSendLine } from 'react-icons/ri';
const compony=['Home','About Us','Work','Price','Contact'];
const works=["Branding",'Business','Marketing','Social Media','Digital Solution','Graphic']
const icons=[<FaFacebookF />,<FaLinkedinIn />,<FaWhatsapp />,<BiLogoFlickr />,<FaMediumM />]
const footer = () => {
  return (
<>
    <div className={stl.footer}>
   <Container>
   <div>
   <Row className='gy-5'>
        <Col xs={12} sm={6} md={3}>
          <div className='mb-3'>
            <img src={img} width={25} alt="" className='me-1 mb-2' />
            <span className={stl.brand} >Purple Buzz </span>
            
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <div>
            {icons.map((icon, i) => {
                return <span key={i} className={stl.icon}>{icon}</span>;
            })}
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
        <h4 className={stl.h4}>Our Company</h4>
          <ul className={stl.ul}>
            {compony.map((item, i) => {
                return <li key={i} >{item}</li>;
            })}
          </ul>
        </Col>
        <Col xs={12} sm={6} md={3}>
        <h4 className={stl.h4}>Our Works</h4>
        <ul className={stl.ul}>
            {works.map((item, i) => {
                return <li key={i}>{item}</li>;
            })}
        </ul>
        </Col>
        <Col xs={12} sm={6} md={3}>
        <h4 className={stl.h4}>For Client</h4>
        <ul className={stl.ul1}>
            <li><FiPhone/> 010-020-0340</li>
            <li><RiMailSendLine/> info@company.com</li>
        </ul>
        </Col>
      </Row>
   </div>
   </Container>
    </div>
    <div className={stl.footer2}>
       <Container className={stl.footer2}>
       <p>© Copyright 2021 Purple Buzz. All rights reserved.</p>
            <p>Designed by TemplateMo</p>
       </Container>
      </div>
    </>
  );
}

export default footer
