import React from 'react'
import { Row, Container, Col} from 'react-bootstrap'

const LastCategory = () =>{
  return(
        <div>
            <div><h3 className= 'lasthead'>News</h3></div>
              <Container>
              <Row>
                  <Col>
                      <div>
                      <img  className = 'w-100'
                      src='images/Adi_Liberty_Cup_1_394x.png'
                    />
                  <p>September 11 2019</p>
                  <p>Palace Deeper - Understanding</p>
                  <p>The PALACE crew drop some knowledge on us with 'Deeper Understanding', their latest visual spectacular.</p>
                      </div>
                  </Col>
                  <Col>
                      <div>
                      <img className = 'w-100'
                      src='images/Palace_Deeper_Understanding_FP_3_394x.png'
                      />
                      <p>September 11 2019</p>
                      <p>Palace Deeper - Understanding</p>
                      <p>The PALACE crew drop some knowledge on us with 'Deeper Understanding', their latest visual spectacular.</p>

                      </div>
                  </Col>
                  <Col>
                     <div>
                     <img className = 'w-100'
                     src='images/Adi_Liberty_Cup_1_394x.png'
                    />
                    <p>September 11 2019</p>
                    <p>Palace Deeper - Understanding</p>
                    <p>The PALACE crew drop some knowledge on us with 'Deeper Understanding', their latest visual spectacular.</p>

                     </div>
                  </Col>
              </Row>
              </Container>
        </div>
  )
}


export default LastCategory
