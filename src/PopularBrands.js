import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


const PopularBrands = () => {
    return(
        <div>
            <div className='PopularBrands1'><h2>Popular Brands</h2></div>
            <Container>
                <Row>
                    <Col>
                        <div>
                        <img
                        src='images/bored5.jpg'
                      />
                        <h4 className = 'PopularBrands'>Addidas</h4>
                        </div>
                    </Col>
                    <Col>
                        <div>
                        <img
                        src='images/bored5.jpg'
                        />
                        <h4 className = 'PopularBrands'>Dickies</h4>
                        </div>
                    </Col>
                    <Col>
                       <div>
                       <img
                       src='images/bored5.jpg'
                      />
                         <h4 className = 'PopularBrands'>Polar Skate</h4>
                       </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                        <img
                        src='images/bored5.jpg'
                        />
                           <h4 className = 'PopularBrands'>Car Hart</h4>
                        </div>
                    </Col>
                    <Col>
                        <div>
                        <img
                        src='images/bored5.jpg'
                        />
                           <h4 className = 'PopularBrands'>Stussy</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className='imgDiv'>
                        <img
                        src='images/bored5.jpg'
                        />
                           <h4 className = 'PopularBrands'>Nike SB</h4>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default PopularBrands;
