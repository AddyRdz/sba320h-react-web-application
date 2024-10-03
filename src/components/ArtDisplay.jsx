import React from 'react'
import  Card  from 'react-bootstrap/Card';
import { CardBody } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ArtDisplay({art}) {
  return (
    <>
    <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
        {art.data.map((item) => (
          <Col key={item.id}>
            <Card className="h-100" style={{ border: '2px solid #ddd', backgroundColor: '#F5FFFA' }}> 
            <Card.Img
              src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
              alt={item.title}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover'
              }}
            />
            <CardBody style={{color: '#333333'}}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.artist_display}</Card.Text>
            </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
    
  );
}
