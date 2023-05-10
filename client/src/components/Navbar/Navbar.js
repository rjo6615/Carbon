import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router";

function NavbarComponent() {
  const [form, setForm] = useState({
    title: "",
    postText: "",
  });
  const navigate = useNavigate();

// These methods will update the state properties.
function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };    
   });
  
 }

async function onSubmit(e) {
  e.preventDefault();
const newPost = { ...form };
 
   await fetch("/posts/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPost),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ title: "", postText: "" });
   navigate("/");
}

//Modal show/hide
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

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
              <Button variant="primary" onClick={handleShow}>
                      Create Post
              </Button>

                  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>                                      
                    <Modal.Header closeButton>
                      <Modal.Title>Create Post</Modal.Title>
                    </Modal.Header>
                      <Modal.Body>
                      <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Title</Form.Label>
                            <Form.Control onChange={(e) => updateForm({ title: e.target.value })} type="text" placeholder="enter title" autoFocus/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Post Text</Form.Label>
                            <Form.Control onChange={(e) => updateForm({ postText: e.target.value })} as="textarea" rows={3} />
                        </Form.Group>
                        <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Save Changes
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Form>
                      </Modal.Body>                  
                    </Modal>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      </center>
    );
}

export default NavbarComponent;