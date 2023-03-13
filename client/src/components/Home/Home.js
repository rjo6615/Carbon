import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {
  
  
  const cardInfo = [
    {
    image: "https://mdbootstrap.com/img/new/standard/city/062.webp",
    title: "Card 1",
    text: "Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here",
    list1: "List item 1",
    list2: "List item 2",
    list3: "List item 3",
    link1: "Link here",
    link2: "Another link"
    },
    {
      image: "https://mdbootstrap.com/img/new/standard/city/062.webp",
      title: "Card 2",
      text: "Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here",
      list1: "List item 1",
      list2: "List item 2",
      list3: "List item 3",
      link1: "Link here",
      link2: "Another link"
      },    
      {
        image: "https://mdbootstrap.com/img/new/standard/city/062.webp",
        title: "Card 3",
        text: "Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here",
        list1: "List item 1",
        list2: "List item 2",
        list3: "List item 3",
        link1: "Link here",
        link2: "Another link"
        },    
        {
          image: "https://mdbootstrap.com/img/new/standard/city/062.webp",
          title: "Card 4",
          text: "Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here",
          list1: "List item 1",
          list2: "List item 2",
          list3: "List item 3",
          link1: "Link here",
          link2: "Another link"
          },    
          {
            image: "https://mdbootstrap.com/img/new/standard/city/062.webp",
            title: "Card 5",
            text: "Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here",
            list1: "List item 1",
            list2: "List item 2",
            list3: "List item 3",
            link1: "Link here",
            link2: "Another link"
            },    
            {
              image: "https://mdbootstrap.com/img/new/standard/city/062.webp",
              title: "Card 6",
              text: "Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here",
              list1: "List item 1",
              list2: "List item 2",
              list3: "List item 3",
              link1: "Link here",
              link2: "Another link"
              }
  ];
  return (
    <center className="pb-4">
    <div class="container">
  <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-4">
    {cardInfo.map((el) => (         
      <Col>   
       <a href={el.link1}  className="text-decoration-none text-reset" >       
        <Card  style={{ maxWidth: 300, minHeight: 450, maxHeight: 350, backgroundColor: ""}}>
          <Card.Img className="mx-auto"  variant="top" src={el.image} />              
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
            {el.text}
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