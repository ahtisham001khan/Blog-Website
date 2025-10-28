import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Offcanvas, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  // State for handling search bar visibility
  const [showSearch, setShowSearch] = useState(false);

  // State for handling Offcanvas visibility
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Search input state
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  // Toggle search bar visibility
  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  // Close Offcanvas + Search when user navigates
  const handleCloseAll = () => {
    setShowOffcanvas(false);
    setShowSearch(false);
  };

  // Handle search submit -> navigate to blogs with query
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blogs?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setShowOffcanvas(false);
      setSearchQuery('');
    }
  };

  // Auto-close offcanvas when resizing to desktop (fixes mobile->desktop stuck open issue)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && showOffcanvas) {
        setShowOffcanvas(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showOffcanvas]);

  return (
    <Navbar expand="lg" className="fixed z-50 transition-all duration-300 py-4 shadow-sm">
      <Container>
        <Navbar.Brand className="text-black fw-bold fs-4 d-flex align-items-center Site_Logo">
          <Link to={"/"} onClick={handleCloseAll}>
            <span className="d-flex align-items-center gap-2 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse transition-all duration-300 text-primary group-hover:text-danger"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span className="fw-semibold">
                Everyday <span>Insights</span>
              </span>
            </span>
          </Link>
        </Navbar.Brand>

        {/* Toggle Button for Offcanvas */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="toggle_btn"
          onClick={() => setShowOffcanvas(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </Navbar.Toggle>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-black fw-bold fs-4 d-flex align-items-center">
              <span className="me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="animate-pulse"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </span>
              Everyday<span style={{ color: "#ff8800" }} >Insights</span>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-start navi">
            <Nav className="d-flex justify-content-center w-100">
              <Nav.Link> <Link to={'/'} onClick={handleCloseAll}>Home</Link> </Nav.Link>
              <Nav.Link> <Link to={'/about'} onClick={handleCloseAll}>About</Link> </Nav.Link>
              <Nav.Link> <Link to={'/blogs'} onClick={handleCloseAll}>Blogs</Link> </Nav.Link>
              <Nav.Link> <Link to={'/contact'} onClick={handleCloseAll}>Contact</Link> </Nav.Link>
            </Nav>

            {/* Conditional rendering for search bar */}
            {showSearch && (
              <div>
                <form onSubmit={handleSearchSubmit} className='position-relative'>
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    className="search-bar h-100 py-1 my-3 my-lg-0 "
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
               

                <Button
                  variant="link"
                  className="close-search-btn"
                  onClick={handleSearchClick}
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </Button>
                 </form>
              </div>
            )}

            {/* Social Links - Hidden when search bar is shown */}
            {!showSearch && (
              <div className="d-flex my-lg-0 my-4 Social-links">
                {/* Search Icon */}
                <Nav.Link onClick={handleSearchClick}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Nav.Link>

                {/* Social Icons */}
                <Nav.Link><i className="fa-brands fa-instagram"></i></Nav.Link>
                <Nav.Link><i className="fa-brands fa-twitter"></i></Nav.Link>
                <Nav.Link><i className="fa-brands fa-linkedin-in"></i></Nav.Link>
                <Nav.Link><i className="fa-brands fa-facebook-f"></i></Nav.Link>
              </div>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
