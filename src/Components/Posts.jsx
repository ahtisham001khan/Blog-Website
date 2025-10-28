import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';

// HeroBlog Component
const HeroBlog = ({ image, title, date, category }) => {
  return (
    <Link to="/blogs" className="text-white small d-block position-relative overflow-hidden mb-4 hover-card " style={{ transition: 'transform 0.3s ease' }}>
      <div className="ratio ratio-16x9">
        <img src={image} alt={title} className="img-fluid object-fit-cover w-100" />
      </div>
      <div className="position-absolute top-0 start-0 m-2 bg-white text-dark px-2 py-1 small">{date}</div>
      <div className="position-absolute top-0 end-0 m-2 bg-primary text-white px-2 py-1 small">{category}</div>

     <div className="hero-overlay">
  <h4 className="fw-bold mb-1">{title}</h4>
  <i className="fa-solid fa-arrow-right"></i>
</div>

    </Link>
  );
};


// ReviewCard Component
const ReviewCard = ({ user, comment, img }) => (
  <Col md={6} className="mb-4">
    <div className="p-4 rounded-4 bg-white shadow-sm border h-100">
      <div className="d-flex align-items-center mb-3">
        <img src={img} alt={user} className="rounded-circle me-3" width="50" height="50" />
        <div>
          <h6 className="mb-1 fw-bold">{user}</h6>
          <div className="text-warning">
            <StarFill /><StarFill /><StarFill /><StarFill /><StarFill />
          </div>
        </div>
      </div>
      <p className="small text-muted mb-0">{comment}</p>
    </div>
  </Col>
);

// Section Component
const Section = ({ mainBlog, reviews }) => (
  <section className="mb-5">
    <HeroBlog {...mainBlog} />
    <Row>
      {reviews.slice(0, 2).map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </Row>
  </section>
);

// Posts Component
export const Posts = () => {
  const mainBlog1 = {
    image: "images/Slide(2).jpg",
    title: "Artificial Intelligence (AI)",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "Apr 12, 2025",
    category: "AI & Tech",
    label: "Get the latest in AI"
  };

  const mainBlog2 = {
    image: "images/Slide(2).jpg",
    title: "Neural Networks Explained",
    description: "An in-depth look at deep learning models.",
    date: "Apr 13, 2025",
    category: "AI Research",
    label: "Deep Dive Article"
  };

  const reviewData = [
    {
      user: "Zara A.",
      comment: "Amazing read — clear and informative!",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      user: "Usman K.",
      comment: "Helped me understand AI better.",
      img: "https://randomuser.me/api/portraits/men/33.jpg"
    }
  ];

  return (
    <Container className="py-5">
      <Section mainBlog={mainBlog1} reviews={reviewData} />
      <Section mainBlog={mainBlog2} reviews={reviewData} />
    </Container>
  );
};
