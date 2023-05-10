// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function SinglePost() {
    const params = useParams();
    const navigate = useNavigate();
    const [posts, setPosts] = useState({
    title: "",
    postText: "",
  });
 
  // This method fetches the posts from the database.
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`/posts/${params.id.toString()}`);
  
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const post = await response.json();
      if (!post) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
  
      setPosts(post);
    }
    fetchData();   
    return;
    
  }, [params.id, navigate]);

  return (
<center className="pb-4">
<div class="card mb-3" style={{maxWidth: 540 }}>
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="https://mdbootstrap.com/img/new/standard/city/062.webp"
        class="img-fluid rounded-start"
        alt=""
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{posts.title}</h5>
        <p class="card-text">
        {posts.postText}
        </p>
      </div>
    </div>
  </div>
</div>
  </center>
  );
}

export default SinglePost;