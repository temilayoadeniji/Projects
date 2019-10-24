import React from 'react'
import {Row, Container, Col, Dropdown, ButtonGroup, DropdownButton, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Checkout = () =>{
  return(
    <div>
    <Container>
    <Row>
    <Row>
    <Col className='zoom'>

    <img
        className="checkout"
        src="images/checkout.jpg"
        />
     </Col>

     </Row>
     <div>
     <h5>Adidas Lucas Premiere Shoes - <br/>Core Black / Footwear White / Gum 4</h5>
     <DropdownButton as={ButtonGroup} title="UK 7" id="bg-nested-dropdown" variant="outline-secondary">
       <Dropdown.Item eventKey="1">UK 8</Dropdown.Item>
       <Dropdown.Item eventKey="2">UK 9</Dropdown.Item>
       <Dropdown.Item eventKey="2">UK 10</Dropdown.Item>
       <Dropdown.Item eventKey="2">UK 11</Dropdown.Item>
     </DropdownButton>
     <br/><br/>
     <DropdownButton as={ButtonGroup} title="UK 7" id="bg-nested-dropdown" variant="outline-secondary">
       <Dropdown.Item eventKey="1">UK 8</Dropdown.Item>
       <Dropdown.Item eventKey="2">UK 9</Dropdown.Item>
       <Dropdown.Item eventKey="2">UK 10</Dropdown.Item>
       <Dropdown.Item eventKey="2">UK 11</Dropdown.Item>
     </DropdownButton>

     <br/><br/>
     <h5>Quantity</h5>
     <DropdownButton as={ButtonGroup} title="UK 7" id="bg-nested-dropdown" variant="outline-secondary">
       <Dropdown.Item eventKey="1">UK 8</Dropdown.Item>
       <Dropdown.Item eventKey="2">UK 9</Dropdown.Item>
       <Dropdown.Item eventKey="2">UK 10</Dropdown.Item>
       <Dropdown.Item eventKey="2">UK 11</Dropdown.Item>
     </DropdownButton>
     <Link  to ='/success'>
     <Button varient='danger' size='lg'>Buy</Button>
     </Link>
     <p>Script Cap in Black by Bored of Southsea</p>
     <br/>
     <p> - Regular fitting 6 panel cap</p>
     <p> - Front Bored Script embroidery</p>
      <p> - Front Bored Script embroidery</p>
       <p> - Front Bored Script embroidery</p>
     </div>
    </Row>

    <Row>
    <div>
    <h3 className='like'>You May also like</h3>
    <Row>
    <Col className='zoom'>

    <img
        className="like"
        src="images/OG_Chore_Coat_DuckBlue_BlackAgedCanvas_1.jpg"
        />
     </Col>

     <Col className='zoom'>

     <img
         className="like"
         src="images/OG_Chore_Coat_DuckBlue_BlackAgedCanvas_1.jpg"
         />
      </Col>

      <Col className='zoom'>

      <img
          className="like"
          src="images/OG_Chore_Coat_DuckBlue_BlackAgedCanvas_1.jpg"
          />
       </Col>

       <Col className='zoom'>

       <img
           className="like"
           src="images/OG_Chore_Coat_DuckBlue_BlackAgedCanvas_1.jpg"
           />
        </Col>


     </Row>
    </div>
    </Row>


    </Container>
    </div>
  )
}



export default Checkout
