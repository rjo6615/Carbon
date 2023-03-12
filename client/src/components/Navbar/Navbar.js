import React from "react";
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavbarComponent() {
    return (
        <center>
        <Navbar expand="lg" className="shadow-lg mb-5">
        <Container fluid>
        <div className="logo-image" style={{width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', marginRight: '5px'}}>
            <img src="./favicon.ico" className="img-fluid" alt="logo"></img>
        </div>
          <Navbar.Brand className="" href="/">Social Image Posting</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link className="" href="/create-routine">Create Post</Nav.Link>             
            </Nav> */}
            <Button className="" variant="primary">Create Post</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </center>
    );
}

export default NavbarComponent;