import { Link } from "react-router-dom";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { V_slider } from "./V_slider";
import { navigationMenu, carouselSlides, sliderContent } from './Data';
import { useState } from "react";
import Search_Bar from "./Search_Bar";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hero-section d-flex align-items-center pt-5">
      <Container>
        <h4 className="text-center  text-sm-start text-md-start text-lg-start bg-none">
          Everyday<span className="highlight"> Insights .</span>
        </h4>

        {/* Navigation Menu */}
        <div className="d-flex flex-wrap gap-3 my-4 fw-medium  Navi-menu">
          {navigationMenu.map((item) => (
            <Link key={item.path} to={item.path} className="nav-link mx-auto mx-sm-0 mx-md-0 mx-lg-0  ">
              {item.label} {item.count && <small className="text-muted ms-1">{item.count}</small>}
            </Link>
          ))}
        </div>

        {/* Hero Title + Button Row */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-5 gap-4">

          {/* Left Side - Hero Heading */}
          <h1 className="hero-title fw-bold m-0  mx-auto mx-sm-0 mx-md-0 mx-lg-0 ">
            {sliderContent.title}
          </h1>

          {/* Right Side - See All Posts Button */}
          <Link
            to="/blogs"
            className="text-decoration-none mt-3 mt-sm-0 mx-auto mx-sm-0"
          >
            <span
              className="see-all-btn btn btn-outline-dark d-inline-flex align-items-center px-4 py-2 rounded-pill hover-group"
            >
              See all posts
              <span className="ms-2 arrow">→</span>
            </span>
          </Link>


        </div>


        {/* Featured Content */}
        <Row>
          <Col lg={7} md={12} sm={12} xs={12}>
            <Carousel fade interval={2500} controls={false} indicators={false}>
              {carouselSlides.map((slide, index) => (
                <Carousel.Item key={index}>
                  <div
                    className="hero-card position-relative overflow-hidden"
                    style={{
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                      transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    }}
                  >
                    <Link to={slide.link} className="text-decoration-none d-block">
                      {/* Image */}
                      <div className="H-slider">
                        <img
                          src={slide.imgSrc}
                          alt={slide.alt}
                          className="img-fluid w-100 h-100 object-fit-cover"
                        />
                      </div>

                      {/* Tags */}
                      <div className="position-absolute top-0 start-0 m-2 m-md-3 bg-white text-dark px-3 py-1 rounded-pill small fw-semibold shadow-sm">
                        {slide.date}
                      </div>

                      <div
                        className={`position-absolute top-0 end-0 m-2 m-md-3 text-white px-3 py-1 rounded-pill small fw-semibold shadow-sm ${slide.categoryTag}`}
                        style={{
                          background: "linear-gradient(90deg, #ff7b00, #ff4d4d)",
                        }}
                      >
                        {slide.category}
                      </div>

                      {/* Overlay Content */}
                      <div
                        className="overlay position-absolute bottom-0 start-0 end-0 p-3 p-md-4"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3))",
                          borderBottomLeftRadius: "18px",
                          borderBottomRightRadius: "18px",
                        }}
                      >
                        <h2
                          className="text-white fw-bold mb-3"
                          style={{
                            fontSize: "clamp(1rem, 2.8vw, 2rem)",
                            lineHeight: "1.3",
                            letterSpacing: "0.5px",
                            textShadow: "0px 2px 8px rgba(0,0,0,0.5)",
                          }}
                        >
                          {slide.title}
                        </h2>

                        <div className="d-flex justify-content-start align-items-center">
                          <span
                            className="text-white me-3"
                            style={{
                              fontSize: "clamp(0.8rem, 2vw, 1rem)",
                              opacity: 0.9,
                            }}
                          >
                            Read More
                          </span>
                          <i
                            className="fa-solid fa-arrow-right"
                            style={{
                              color: "#fff",
                              borderRadius: "50%",
                              border: "2px solid #fff",
                              width: "30px",
                              height: "30px",
                              padding: "5px",
                              transition: "all 0.3s ease",
                            }}
                          ></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>



          {/* Sidebar */}
          <Col lg={5} md={12} sm={12} xs={12} className="d-flex flex-column V_S">
            <V_slider heading="Breaking News" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
