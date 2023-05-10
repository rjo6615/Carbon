import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';

function Home() {
  const [posts, setPosts] = useState([]);
 
  // This method fetches the posts from the database.
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(`/posts`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const posts = await response.json();
      setPosts(posts);
    }
  
    getPosts();
  
    return;
  }, [posts.length]);

  return (
    <center className="pb-4">
    <div className="container">
  <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-4">
    {posts.map((el) => (         
      <Col>   
       <a href={`/single-post/${el._id}`}  className="text-decoration-none text-reset" >       
        <Card  style={{ maxWidth: 300, minHeight: 450, maxHeight: 350, backgroundColor: ""}}>
          <Card.Img className="mx-auto"  variant="top" src="https://mdbootstrap.com/img/new/standard/city/062.webp" />              
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
            {el.postText}
            </Card.Text>
          </Card.Body>           
        </Card> 
        </a>           
      </Col>
      ))}
  </Row>
  </div>
  </center>
  );
}

export default Home;