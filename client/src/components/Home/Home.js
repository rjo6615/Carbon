import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

function Home() {
  return (
    <center>
    <div className="w-50">
    <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink href='#'>Card link</MDBCardLink>
        <MDBCardLink href='#'>Card link</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
    </div>
    </center>
  );
}

export default Home;