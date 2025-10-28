import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { blogData } from '../Components/Data';

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div>
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <i key={i} className="fas fa-star text-warning me-1"></i>
        ))}
      {halfStar && <i className="fas fa-star-half-alt text-warning me-1"></i>}
      <span className="text-muted">({rating.toFixed(1)})</span>
    </div>
  );
};

const Blogs = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  const [search, setSearch] = useState(searchQuery);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    setSearch(searchQuery);
  }, [searchQuery]);

  const categories = ['All', ...new Set(blogData.map((item) => item.category))];

  const filteredBlogs = blogData.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || blog.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="hero-sec">
        <h2 className="hero-title">Our Collection of Blogs</h2>
      </div>

      <Container className="my-5">
        <Row className="mb-5 justify-content-center">
          <Col lg={10} md={8} sm={12} className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
            />
          </Col>
          <Col lg={2} md={4} sm={12} className="mb-3">
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="category-select"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Row>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, idx) => (
              <Col lg={4} md={6} sm={12} key={idx} className="mb-4">
                <Card className="blog-card">
                  <Card.Img variant="top" src={blog.image} className="blog-card-img" />
                  <Card.Body>
                    <Card.Title className="blog-card-title">{blog.title}</Card.Title>
                    <Card.Subtitle className="blog-card-subtitle mb-3">
                      <i className="fas fa-calendar-alt me-1"></i> {blog.date}
                    </Card.Subtitle>
                    <Card.Text className="blog-card-text">{blog.description}</Card.Text>
                    <div>{renderStars(blog.rating)}</div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0 text-end">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <Button className="read-more-button">
                        <i className="fas fa-book-reader me-2"></i> Read More
                      </Button>
                    </a>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          ) : (
            <Col className="text-center mt-5">
              <h5 className="text-danger">
                <i className="fas fa-exclamation-circle me-1"></i> No blogs found 😔
              </h5>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Blogs;
