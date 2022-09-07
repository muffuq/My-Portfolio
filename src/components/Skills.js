import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import metre70 from "../assets/img/meter70.png";
import metre60 from "../assets/img/metre60.png";
import metre75 from "../assets/img/meter75.png";
import metre40 from "../assets/img/meter40.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I continue to develop myself in many areas. You can see my skills and how much I have improved myself in the area below.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML5/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={metre70} alt="Image" />
                                <h5>React/Redux</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={metre60} alt="Image" />
                                <h5>English</h5>
                            </div>
                            <div className="item">
                                <img src={metre75} alt="Image" />
                                <h5>Javascript(ES7)</h5>
                            </div>
                            <div className="item">
                                <img src={metre40} alt="Image" />
                                <h5>Vue</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
