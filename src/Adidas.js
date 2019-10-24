import React from 'react'
import { NavDropdown, Button, Dropdown,DropdownButton,ButtonGroup, Col, Row, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Adidas = () =>{
  return(
    <div>
    <h1>Adidas Skateboarding</h1>
    <p>Long before Adidas Skateboarding created their own
    skateboard specific brand, skaters have been using Adidas shoes,
    from Superstars and Stan Smiths to Sambas and Gazelles.
     Now today they have adopted these classic styles into skate
     shoes using all of their new technology and applying it to
     skateboarding such as climalite into the skate clothing and
     Adiprene+ footbed into the shoes.
     </p>

    <ButtonGroup>
  <DropdownButton as={ButtonGroup} title="Category" id="bg-nested-dropdown" variant="outline-secondary">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ButtonGroup>
<DropdownButton as={ButtonGroup} title="Price" id="bg-nested-dropdown" variant="outline-secondary">
<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
  </ButtonGroup>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <ButtonGroup>
  <DropdownButton as={ButtonGroup} title="Shoe size" id="bg-nested-dropdown" variant="outline-secondary">
  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
    </ButtonGroup>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <ButtonGroup>
    <DropdownButton as={ButtonGroup} title="Shirt Size" id="bg-nested-dropdown" variant="outline-secondary">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>
      </ButtonGroup>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <ButtonGroup>
      <DropdownButton as={ButtonGroup} title="Trouser Size" id="bg-nested-dropdown" variant="outline-secondary">
      <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
      <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
        </ButtonGroup>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

        <ButtonGroup>
        <DropdownButton as={ButtonGroup} title="Date,New to Old " id="bg-nested-dropdown" variant="outline-secondary">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
          </ButtonGroup>

          <div>
          <hr/>
          </div>

          <Container id ="container" >
          <Row className = "row">
          <Col >
          <Link to ='/checkout'>
          <img
              className="adidas"
              src="images/adidas.jpg"
              />
              <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua</h5>
              <p className = 'paragraph'>₦2500</p>
          </Link>

           </Col>


          <Col >
          <Link>
          <img
              className="adidas"
              src="images/adidas.jpg"
              />
              <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua</h5>
              <p className = 'paragraph'>₦2500</p>
          </Link>

           </Col>

           <Col >
           <Link>
           <img
               className="adidas"
               src="images/adidas.jpg"
               />
               <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua</h5>
               <p className = 'paragraph'>₦2500</p>
           </Link>

            </Col>

            <Col >
            <Link>
            <img
                className="adidas"
                src="images/adidas.jpg"
                />
                <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua</h5>
                <p className = 'paragraph'>₦2500</p>
            </Link>

             </Col>

             <Col>
             <Link>
             <img
                 className="adidas"
                 src="images/adidas.jpg"
                 />
                 <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua</h5>
                 <p className = 'paragraph'>₦2500</p>
             </Link>

              </Col>

              <Col>
              <Link>
              <img
                  className="adidas"
                  src="images/adidas.jpg"
                  />
                  <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua</h5>
                  <p className = 'paragraph'>₦2500</p>
              </Link>

               </Col>

               <Col>
               <Link>
               <img
                   className="adidas"
                   src="images/adidas.jpg"
                   />
                   <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua</h5>
                   <p className = 'paragraph'>₦2500</p>
               </Link>

                </Col>

                <Col>
                <Link>
                <img
                    className="adidas"
                    src="images/adidas.jpg"
                    />
                    <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua</h5>
                    <p className = 'paragraph'>₦2500</p>
                </Link>

                 </Col>

                 <Col>
                 <Link>
                 <img
                     className="adidas"
                     src="images/adidas.jpg"
                     />
                     <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua</h5>
                     <p className = 'paragraph'>₦2500</p>
                 </Link>

                  </Col>

                  <Col>
                  <Link>
                  <img
                      className="adidas"
                      src="images/adidas.jpg"
                      />
                      <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua</h5>
                      <p className = 'paragraph'>₦2500</p>
                  </Link>

                   </Col>

                   <Col>
                   <Link>
                   <img
                       className="adidas"
                       src="images/adidas.jpg"
                       />
                       <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua</h5>
                       <p className = 'paragraph'>₦2500</p>
                   </Link>

                    </Col>

                    <Col>
                    <Link>
                    <img
                        className="adidas"
                        src="images/adidas.jpg"
                        />
                        <h5 className = 'head'>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua</h5>
                        <p className = 'paragraph'>₦2500</p>
                    </Link>

                     </Col>




          </Row>
          </Container>

          <div>
          <footer>
          </footer>
          </div>

    </div>
  )
}

export default Adidas
