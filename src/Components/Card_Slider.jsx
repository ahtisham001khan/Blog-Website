import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogPosts } from "./Data";

const sliderSettings = {
  infinite: true,
  autoplay: true,
  speed: 1200,
  slidesToShow: 4,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const Card_Slider = () => {
  return (
    <Slider {...sliderSettings}>
      {blogPosts.concat(blogPosts).map((item, index) => (
        <div className="Card d-flex flex-column" key={index}>
          {/* Image Section */}
          <div
            style={{
              width: "100%",
              height: "200px",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Text Section */}
          <div className="px-3 py-2 d-flex flex-column justify-content-between" style={{ flex: 1 }}>
            <h6 className="fw-bold text-dark mb-2" style={{ fontSize: "1rem" }}>
              {item.title}
            </h6>
            <p className="text-muted small" style={{ flexGrow: 1, fontSize: "0.85rem" }}>
              {item.desc}
            </p>
            <a href="#" className="text-decoration-none mt-1">
              <span
                className="fs-6 text-muted d-inline-flex align-items-center hover-group"
                style={{ cursor: 'pointer' }}
              >
                Read More
                <span
                  className="ms-1"
                  style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  →
                </span>
              </span>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};
