import React from 'react'
import {Card, CardGroup} from 'react-bootstrap'


const Category = () =>{
  return (

    <CardGroup className = 'Cat' >

  <Card className = 'Category1'>
    <Card.Img src="images/Polar_LK_8_700x.jpg" />
    <Card.ImgOverlay>

    
    </Card.ImgOverlay>
  </Card>

  <Card className = 'Category1'>
    <Card.Img src="images/Blog_POLAR_LK_Grey_394x.png" />

  </Card>


</CardGroup>
  )
}


export default Category
