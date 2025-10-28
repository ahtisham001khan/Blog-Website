import React from "react";
import { blogPosts } from "./Data";

export function V_slider({ heading }) {
  return (
    <div className=" overflow-hidden V_S">
      <div className="d-flex align-items-center mb-4">
        <span className="heading fs-5 text-white px-3 pb-1 my-3 rounded-pill fw-bold mx-lg-0 mx-auto">
          {heading}
        </span>
      </div>

      <div className="vertical-slider">
        <div className="vertical-slide-track">
          {blogPosts.concat(blogPosts).map((item, index) => (
            <div
              className="vertical-slide rounded overflow-hidden mb-3 d-flex"
              key={index}
            >
              <div
                style={{
                  width: "100px",
                  height: "120px",
                  flexShrink: 0,
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
                    display: "block",
                  }}
                />
              </div>

              <div
                className="px-2 d-flex flex-column justify-content-between"
                style={{ flex: 1 }}
              >
                <h6 className="fw-bold text-dark mb-2" style={{ fontSize: "0.9rem" }}>
                  {item.title}
                </h6>
                <p className="text-muted small d-inline-block " style={{ flexGrow: 1 }}>
                  {item.desc}
                </p>
                <a href="#">
                  <span style={{ fontSize: "0.85rem", cursor: "pointer" }}
                    className="fw-bold text-muted align-top ms-2 d-inline-flex align-items-center hover-group">
                    Read More
                    <span className="ms-1 arrow" style={{ display: "inline-block", transition: "transform 0.3s ease" }}>
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
