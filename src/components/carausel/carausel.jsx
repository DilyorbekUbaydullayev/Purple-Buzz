import Carousel from "react-bootstrap/Carousel";
import stl from "./carausel.module.css";
import { Button } from "react-bootstrap";
const carausel = [
  {
    h1: "HTML CSS Template with Bootstrap 5 Beta 1",
    p: "You are not allowed to re-distribute this Purple Buzz HTML template as a downloadable ZIP file on any kind of Free CSS collection websites. This is strongly prohibited. Please contact TemplateMo for more information.",
  },
  {
    h1: "Cupidatat non proident, sunt in culpa qui officia",
    p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
  {
    h1:` Develop Strategies for `,
    h2:'your business',
    p:'Purple Buzz is a corporate HTML template with Bootstrap 5 Beta 1. This CSS template is 100% free to download provided by TemplateMo. Total 6 HTML pages included in this template. Icon fonts by Boxicons. Photos are from Unsplash and Icons 8.'

  }
];
export default () => {
  return (
    <div className={stl.carausel}>
      <Carousel>
        {carausel.map((item, index) => {
          return (
            <Carousel.Item interval={3000} className="" key={index}>
              <div className={stl.div1} ></div>
              <Carousel.Caption className={stl.Caption}>
                <h1 className={stl.h1}>
                 {item.h1} <br />{item.h2}
                </h1>
                <div className={index===2?stl.div2:''}>
                </div>
                <p>
                {item.p}
                </p>
                <Button className={stl.btn}>Get Started</Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
